import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";

interface ContactRequestBody {
  name?: string;
  email?: string;
  topic?: string;
  branch?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequestBody;
    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const topic = (body.topic || "Muayene Randevusu").trim();
    const branch = (body.branch || "Genel Muayene").trim();
    const message = (body.message || "").trim();

    if (!name) {
      return NextResponse.json(
        { success: false, error: "Lütfen adınızı ve soyadınızı giriniz." },
        { status: 400 }
      );
    }

    // Alıcı e-posta adresi .env üzerinden okunur (varsayılan: incecamberat@gmail.com)
    const receiverEmail =
      process.env.CONTACT_RECEIVER_EMAIL ||
      process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
      "incecamberat@gmail.com";

    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT || "465");
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    // Eğer .env içinde SMTP_USER ve SMTP_PASS tanımlıysa doğrudan Nodemailer ile gönderir
    if (smtpUser && smtpPass) {
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

      await transporter.sendMail({
        from: fromAddress,
        to: receiverEmail,
        replyTo: email || undefined,
        subject: `[İletişim Formu] ${topic} - ${name}`,
        text: [
          `Özel Güney Ağız ve Diş Sağlığı Polikliniği - Yeni İletişim / Randevu Talebi`,
          `------------------------------------------------------------------------`,
          `Ad Soyad: ${name}`,
          `E-Posta: ${email || "Belirtilmedi"}`,
          `Konu: ${topic}`,
          `İlgilenilen Branş: ${branch}`,
          `Mesaj:`,
          message || "Belirtilmedi",
        ].join("\n"),
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
            <div style="background-color: #b91c1c; color: #ffffff; padding: 18px 24px;">
              <h2 style="margin: 0; font-size: 18px;">Özel Güney Ağız ve Diş Sağlığı Polikliniği</h2>
              <p style="margin: 4px 0 0; font-size: 13px; opacity: 0.9;">Web Sitesi İletişim & Randevu Formu</p>
            </div>
            <div style="padding: 24px; background-color: #ffffff; color: #1e293b; font-size: 14px; line-height: 1.6;">
              <p><strong>Ad Soyad:</strong> ${name}</p>
              <p><strong>E-Posta:</strong> ${email || "Belirtilmedi"}</p>
              <p><strong>Konu:</strong> ${topic}</p>
              <p><strong>İlgilenilen Branş:</strong> ${branch}</p>
              <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
              <p><strong>Mesaj:</strong></p>
              <p style="background: #f8fafc; padding: 12px; border-radius: 8px; white-space: pre-wrap;">${
                message || "Belirtilmedi"
              }</p>
            </div>
          </div>
        `,
      });

      return NextResponse.json({
        success: true,
        delivery: "smtp",
        receiverEmail,
      });
    }

    // SMTP şifresi girilmemişse .env içindeki CONTACT_RECEIVER_EMAIL adresini istemciye döner (FormSubmit AJAX ile gönderim için)
    return NextResponse.json({
      success: true,
      delivery: "formsubmit",
      receiverEmail,
    });
  } catch (error) {
    console.error("İletişim formu gönderim hatası:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.",
      },
      { status: 500 }
    );
  }
}
