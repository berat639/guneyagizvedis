import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";

// ---------------------------------------------------------------------------
// 1. BELLEK İÇİ RATE LIMITER (IP BAZLI FLOOD / BRUTE-FORCE KORUMASI)
// ---------------------------------------------------------------------------
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 dakika
const MAX_REQUESTS_PER_WINDOW = 3; // 10 dakikada IP başına en fazla 3 gönderim
const MIN_FILL_TIME_MS = 2000; // En az 2 saniye (bot koruması)

const ipRequestLog = new Map<string, number[]>();
const usedRecaptchaTokens = new Map<string, number>();

function cleanupExpiredRecords(now: number) {
  for (const [ip, timestamps] of ipRequestLog.entries()) {
    const active = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
    if (active.length === 0) {
      ipRequestLog.delete(ip);
    } else {
      ipRequestLog.set(ip, active);
    }
  }
  for (const [tokenHash, expiresAt] of usedRecaptchaTokens.entries()) {
    if (now > expiresAt) {
      usedRecaptchaTokens.delete(tokenHash);
    }
  }
}

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return request.headers.get("x-real-ip")?.trim() || "127.0.0.1";
}

// ---------------------------------------------------------------------------
// 2. GÜVENLİ METİN TEMİZLEME (XSS & SMTP HEADER INJECTION KORUMASI)
// ---------------------------------------------------------------------------
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function stripHeaderBreaks(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

const ALLOWED_TOPICS = new Set([
  "Muayene Randevusu",
  "Tedavi Süreci Hakkında Bilgi",
  "3D Tomografi ve Röntgen",
  "Genel Bilgi ve İletişim",
]);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// ---------------------------------------------------------------------------
// 3. GÜVENLİ GOOGLE reCAPTCHA v2 DOĞRULAMASI VE GÖNDERİM (POST /api/contact)
// ---------------------------------------------------------------------------
interface ContactRequestBody {
  name?: string;
  email?: string;
  topic?: string;
  branch?: string;
  message?: string;
  website?: string; // Honeypot alanı (doluysa bot)
  formLoadedAt?: number;
  recaptchaToken?: string;
}

export async function POST(request: Request) {
  try {
    const now = Date.now();
    cleanupExpiredRecords(now);

    const ip = getClientIp(request);

    // Katman 1: IP Bazlı Rate Limit Kontrolü
    const previousTimestamps = ipRequestLog.get(ip) || [];
    if (previousTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Çok fazla gönderim denemesi yaptınız. Lütfen 10 dakika sonra tekrar deneyin.",
        },
        { status: 429 }
      );
    }

    const body = (await request.json()) as ContactRequestBody;

    // Katman 2: Honeypot (Bot Tuzak Alanı) & Doldurma Süresi Kontrolü
    if (body.website && body.website.trim().length > 0) {
      return NextResponse.json(
        { success: false, error: "Güvenlik doğrulaması başarısız oldu." },
        { status: 400 }
      );
    }

    if (
      body.formLoadedAt &&
      now - Number(body.formLoadedAt) < MIN_FILL_TIME_MS
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Form çok hızlı gönderildi. Lütfen tekrar deneyin.",
        },
        { status: 400 }
      );
    }

    // Katman 3: Google reCAPTCHA v2 Server-Side Doğrulaması
    const recaptchaToken = (body.recaptchaToken || "").trim();
    if (!recaptchaToken) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Lütfen 'Ben robot değilim' (reCAPTCHA) kutucuğunu işaretleyiniz.",
        },
        { status: 400 }
      );
    }

    // Tek kullanımlık reCAPTCHA token kontrolü (Replay Attack koruması)
    if (usedRecaptchaTokens.has(recaptchaToken)) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Bu güvenlik doğrulaması daha önce kullanıldı. Lütfen tekrar doğrulayın.",
        },
        { status: 400 }
      );
    }

    const recaptchaSecret =
      process.env.RECAPTCHA_SECRET_KEY ||
      "6Ld9wQwuAAAAAGRRkNjnLd8-Kcx1WYrrgSvRqL0q";

    if (!recaptchaSecret) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Sunucu reCAPTCHA gizli anahtarı (RECAPTCHA_SECRET_KEY) yapılandırılmamış.",
        },
        { status: 503 }
      );
    }

    const verifyResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: recaptchaSecret,
          response: recaptchaToken,
          remoteip: ip,
        }),
      }
    );

    const verifyResult = (await verifyResponse.json()) as {
      success?: boolean;
      "error-codes"?: string[];
    };

    if (!verifyResult.success) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Google reCAPTCHA doğrulaması başarısız oldu veya süresi doldu. Lütfen tekrar işaretleyin.",
        },
        { status: 400 }
      );
    }

    // Katman 4: Sıkı Veri Doğrulama (Validation & Sanitization)
    const rawName = stripHeaderBreaks(body.name || "");
    const rawEmail = stripHeaderBreaks(body.email || "");
    const rawTopic = stripHeaderBreaks(body.topic || "Muayene Randevusu");
    const rawBranch = stripHeaderBreaks(body.branch || "Genel Muayene");
    const rawMessage = (body.message || "").trim();

    if (rawName.length < 2 || rawName.length > 100) {
      return NextResponse.json(
        {
          success: false,
          error: "Ad Soyad alanı 2 ile 100 karakter arasında olmalıdır.",
        },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(rawEmail) || rawEmail.length > 120) {
      return NextResponse.json(
        {
          success: false,
          error: "Lütfen geçerli bir e-posta adresi giriniz.",
        },
        { status: 400 }
      );
    }

    if (rawMessage.length < 5 || rawMessage.length > 2000) {
      return NextResponse.json(
        {
          success: false,
          error: "Mesajınız 5 ile 2000 karakter arasında olmalıdır.",
        },
        { status: 400 }
      );
    }

    const safeTopic = ALLOWED_TOPICS.has(rawTopic)
      ? rawTopic
      : "Muayene Randevusu";
    const safeBranch = rawBranch.slice(0, 100);

    // Token'ı kullanıldı olarak işaretle ve IP sayacını artır
    usedRecaptchaTokens.set(recaptchaToken, now + RATE_LIMIT_WINDOW_MS);
    ipRequestLog.set(ip, [...previousTimestamps, now]);

    // Katman 5: Kurumsal SMTP Gönderimi (info@guneyagizvedis.com -> Gmail)
    const receiverEmail =
      process.env.CONTACT_RECEIVER_EMAIL || "incecamberat@gmail.com";

    const smtpHost = process.env.SMTP_HOST || "mail.kurumsaleposta.com";
    const smtpPort = Number(process.env.SMTP_PORT || "465");
    const smtpSecure =
      process.env.SMTP_SECURE !== undefined
        ? process.env.SMTP_SECURE === "true"
        : smtpPort === 465;
    const smtpUser = process.env.SMTP_USER || "info@guneyagizvedis.com";
    const smtpPass = process.env.SMTP_PASSWORD || process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM || smtpUser;
    const smtpFromName =
      process.env.SMTP_FROM_NAME || "Güney Ağız ve Diş Sağlığı";

    if (!smtpPass) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Sunucu e-posta şifresi (SMTP_PASSWORD) henüz tanımlanmamış.",
        },
        { status: 503 }
      );
    }

    const createSmtpTransporter = (port: number, secure: boolean) =>
      nodemailer.createTransport({
        host: smtpHost,
        port,
        secure,
        connectionTimeout: 10000,
        greetingTimeout: 10000,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

    const fromAddress = smtpFrom.includes("<")
      ? smtpFrom
      : `"${smtpFromName}" <${smtpFrom}>`;

    const escapedName = escapeHtml(rawName);
    const escapedEmail = escapeHtml(rawEmail);
    const escapedTopic = escapeHtml(safeTopic);
    const escapedBranch = escapeHtml(safeBranch);
    const escapedMessage = escapeHtml(rawMessage);

    const mailOptions = {
      from: fromAddress,
      to: receiverEmail,
      replyTo: rawEmail,
      subject: `[İletişim Formu] ${safeTopic} - ${rawName}`,
      text: [
        `Özel Güney Ağız ve Diş Sağlığı Polikliniği - Yeni İletişim / Randevu Talebi`,
        `------------------------------------------------------------------------`,
        `Ad Soyad: ${rawName}`,
        `E-Posta: ${rawEmail}`,
        `Konu: ${safeTopic}`,
        `İlgilenilen Branş: ${safeBranch}`,
        `Gönderen IP: ${ip}`,
        `Mesaj:`,
        rawMessage,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #b91c1c; color: #ffffff; padding: 18px 24px;">
            <h2 style="margin: 0; font-size: 18px;">Özel Güney Ağız ve Diş Sağlığı Polikliniği</h2>
            <p style="margin: 4px 0 0; font-size: 13px; opacity: 0.9;">Web Sitesi Güvenli İletişim & Randevu Formu</p>
          </div>
          <div style="padding: 24px; background-color: #ffffff; color: #1e293b; font-size: 14px; line-height: 1.6;">
            <p><strong>Ad Soyad:</strong> ${escapedName}</p>
            <p><strong>E-Posta:</strong> ${escapedEmail}</p>
            <p><strong>Konu:</strong> ${escapedTopic}</p>
            <p><strong>İlgilenilen Branş:</strong> ${escapedBranch}</p>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
            <p><strong>Mesaj:</strong></p>
            <p style="background: #f8fafc; padding: 12px; border-radius: 8px; white-space: pre-wrap;">${escapedMessage}</p>
          </div>
        </div>
      `,
    };

    try {
      const primaryTransporter = createSmtpTransporter(smtpPort, smtpSecure);
      await primaryTransporter.sendMail(mailOptions);
    } catch {
      const fallbackPort = smtpPort === 465 ? 587 : 465;
      const fallbackSecure = fallbackPort === 465;
      const fallbackTransporter = createSmtpTransporter(
        fallbackPort,
        fallbackSecure
      );
      await fallbackTransporter.sendMail(mailOptions);
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("İletişim formu gönderim hatası:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Mesaj gönderilirken sunucu hatası oluştu. Lütfen tekrar deneyin.",
      },
      { status: 500 }
    );
  }
}
