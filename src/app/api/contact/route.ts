import { NextResponse } from "next/server";
import crypto from "crypto";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";

// ---------------------------------------------------------------------------
// 1. BELLEK İÇİ RATE LIMITER & TEK KULLANIMLIK TOKEN KORUMASI (REPLAY GUARD)
// ---------------------------------------------------------------------------
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 dakika
const MAX_REQUESTS_PER_WINDOW = 3; // 10 dakikada IP başına en fazla 3 gönderim
const CHALLENGE_TTL_MS = 10 * 60 * 1000; // Captcha 10 dakika geçerli
const MIN_FILL_TIME_MS = 2000; // En az 2 saniye (bot koruması)

const ipRequestLog = new Map<string, number[]>();
const usedChallengeNonces = new Map<string, number>();

function cleanupExpiredRecords(now: number) {
  for (const [ip, timestamps] of ipRequestLog.entries()) {
    const active = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
    if (active.length === 0) {
      ipRequestLog.delete(ip);
    } else {
      ipRequestLog.set(ip, active);
    }
  }
  for (const [nonce, expiresAt] of usedChallengeNonces.entries()) {
    if (now > expiresAt) {
      usedChallengeNonces.delete(nonce);
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

function getCaptchaSecret(): string {
  return (
    process.env.CAPTCHA_SECRET ||
    process.env.SMTP_PASS ||
    "guney-agiz-ve-dis-default-hmac-secret-2026-secure"
  );
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
// 3. SUNUCU TARAFLI SVG CAPTCHA ÜRETİMİ (GET /api/contact)
// ---------------------------------------------------------------------------
function generateCaptchaSvg(expressionText: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="140" height="44" viewBox="0 0 140 44">
    <rect width="140" height="44" rx="10" fill="#fff1f2" stroke="#fecdd3" stroke-width="1.5"/>
    <path d="M10 34 Q 45 10, 80 30 T 130 16" stroke="#fda4af" stroke-width="1.5" fill="none" opacity="0.7"/>
    <path d="M14 14 Q 60 36, 95 14 T 128 32" stroke="#cbd5e1" stroke-width="1.2" fill="none" opacity="0.8"/>
    <circle cx="28" cy="14" r="2" fill="#fb7185" opacity="0.5"/>
    <circle cx="105" cy="32" r="2.5" fill="#94a3b8" opacity="0.5"/>
    <text x="70" y="28" font-family="monospace, sans-serif" font-size="19" font-weight="800" fill="#881337" text-anchor="middle" letter-spacing="2">${expressionText}</text>
  </svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}

export async function GET(request: Request) {
  const now = Date.now();
  cleanupExpiredRecords(now);

  const ip = getClientIp(request);
  const numA = crypto.randomInt(2, 10);
  const numB = crypto.randomInt(1, 9);
  const isAddition = crypto.randomInt(0, 2) === 1 || numA <= numB;

  const expectedAnswer = isAddition ? numA + numB : numA - numB;
  const operatorSymbol = isAddition ? "+" : "-";
  const expressionText = `${numA} ${operatorSymbol} ${numB} = ?`;

  const nonce = crypto.randomBytes(12).toString("hex");
  const issuedAt = now;

  // Cevap istemciye GÖNDERİLMEZ; yalnızca sunucu gizli anahtarıyla HMAC imzasına dahil edilir
  const payloadData = `${nonce}:${issuedAt}:${ip}`;
  const hmacSignature = crypto
    .createHmac("sha256", getCaptchaSecret())
    .update(`${payloadData}:${expectedAnswer}`)
    .digest("hex");

  const challengeToken = Buffer.from(
    JSON.stringify({
      n: nonce,
      t: issuedAt,
      s: hmacSignature,
    })
  ).toString("base64url");

  return NextResponse.json(
    {
      captchaImage: generateCaptchaSvg(expressionText),
      challengeToken,
      turnstileSiteKey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || null,
    },
    {
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
      },
    }
  );
}

// ---------------------------------------------------------------------------
// 4. GÜVENLİ DOĞRULAMA VE GÖNDERİM (POST /api/contact)
// ---------------------------------------------------------------------------
interface ContactRequestBody {
  name?: string;
  email?: string;
  topic?: string;
  branch?: string;
  message?: string;
  website?: string; // Honeypot alanı (doluysa bot)
  captchaAnswer?: string;
  challengeToken?: string;
  turnstileToken?: string;
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

    // Katman 2: Honeypot (Bot Tuzak Alanı) Kontrolü
    if (body.website && body.website.trim().length > 0) {
      return NextResponse.json(
        { success: false, error: "Güvenlik doğrulaması başarısız oldu." },
        { status: 400 }
      );
    }

    // Katman 3: Kriptografik HMAC Captcha & Süre & Tek Kullanımlık Nonce Kontrolü
    const userAnswer = (body.captchaAnswer || "").trim();
    const rawToken = (body.challengeToken || "").trim();

    if (!userAnswer || !rawToken) {
      return NextResponse.json(
        {
          success: false,
          error: "Lütfen güvenlik sorusunu (Captcha) yanıtlayınız.",
        },
        { status: 400 }
      );
    }

    let decodedToken: { n: string; t: number; s: string };
    try {
      decodedToken = JSON.parse(
        Buffer.from(rawToken, "base64url").toString("utf-8")
      );
    } catch {
      return NextResponse.json(
        {
          success: false,
          error: "Geçersiz güvenlik anahtarı. Lütfen sayfayı yenileyin.",
        },
        { status: 400 }
      );
    }

    const { n: nonce, t: issuedAt, s: signature } = decodedToken;

    if (!nonce || !issuedAt || !signature) {
      return NextResponse.json(
        { success: false, error: "Güvenlik doğrulaması eksik." },
        { status: 400 }
      );
    }

    // Tek kullanımlık token kontrolü (Replay Attack engelleme)
    if (usedChallengeNonces.has(nonce)) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Bu güvenlik kodu daha önce kullanıldı. Lütfen yeni kodu girin.",
        },
        { status: 400 }
      );
    }

    // Bot hız kontrolü (< 2 saniyede doldurulduysa reddet) ve süre aşımı (10 dk)
    const elapsed = now - Number(issuedAt);
    if (elapsed < MIN_FILL_TIME_MS) {
      return NextResponse.json(
        {
          success: false,
          error: "Form çok hızlı gönderildi. Lütfen tekrar deneyin.",
        },
        { status: 400 }
      );
    }
    if (elapsed > CHALLENGE_TTL_MS) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Güvenlik kodunun süresi doldu. Lütfen yeni güvenlik kodunu girin.",
        },
        { status: 400 }
      );
    }

    // HMAC-SHA256 imza karşılaştırması (Timing-safe)
    const expectedSignature = crypto
      .createHmac("sha256", getCaptchaSecret())
      .update(`${nonce}:${issuedAt}:${ip}:${userAnswer}`)
      .digest("hex");

    const sigBufferA = Buffer.from(signature, "hex");
    const sigBufferB = Buffer.from(expectedSignature, "hex");

    if (
      sigBufferA.length !== sigBufferB.length ||
      !crypto.timingSafeEqual(sigBufferA, sigBufferB)
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Güvenlik sorusu yanıtı hatalı. Lütfen tekrar kontrol edin.",
        },
        { status: 400 }
      );
    }

    // Katman 4: (Opsiyonel) Cloudflare Turnstile Secret Key tanımlıysa sunucu doğrulaması
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    if (turnstileSecret) {
      const turnstileToken = (body.turnstileToken || "").trim();
      if (!turnstileToken) {
        return NextResponse.json(
          {
            success: false,
            error: "Lütfen Cloudflare güvenlik doğrulamasını tamamlayın.",
          },
          { status: 400 }
        );
      }

      const verifyRes = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            secret: turnstileSecret,
            response: turnstileToken,
            remoteip: ip,
          }),
        }
      );
      const verifyData = (await verifyRes.json()) as { success?: boolean };
      if (!verifyData.success) {
        return NextResponse.json(
          {
            success: false,
            error: "Cloudflare Turnstile doğrulaması başarısız oldu.",
          },
          { status: 400 }
        );
      }
    }

    // Katman 5: Sıkı Veri Doğrulama (Validation & Sanitization)
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
    usedChallengeNonces.set(nonce, now + CHALLENGE_TTL_MS);
    ipRequestLog.set(ip, [...previousTimestamps, now]);

    // Alıcı e-posta adresi YALNIZCA sunucuda .env'den okunur, istemciye asla gönderilmez
    const receiverEmail =
      process.env.CONTACT_RECEIVER_EMAIL || "incecamberat@gmail.com";

    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT || "465");
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Sunucu e-posta (SMTP) yapılandırması henüz tamamlanmamış. Lütfen .env dosyasındaki SMTP_USER ve SMTP_PASS alanlarını kontrol edin.",
        },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const fromAddress =
      process.env.SMTP_FROM ||
      `"Özel Güney Ağız ve Diş Sağlığı" <${smtpUser}>`;

    const escapedName = escapeHtml(rawName);
    const escapedEmail = escapeHtml(rawEmail);
    const escapedTopic = escapeHtml(safeTopic);
    const escapedBranch = escapeHtml(safeBranch);
    const escapedMessage = escapeHtml(rawMessage);

    await transporter.sendMail({
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
    });

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
