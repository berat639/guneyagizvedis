"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Script from "next/script";
import {
  CheckCircle2,
  Calendar,
  Loader2,
  AlertCircle,
  ShieldCheck,
} from "lucide-react";
import { CLINIC_INFO } from "@/data/clinic";
import { TREATMENTS_DATA } from "@/data/treatments";

declare global {
  interface Window {
    grecaptcha?: {
      render: (
        container: HTMLElement,
        parameters: {
          sitekey: string;
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
          theme?: "light" | "dark";
        }
      ) => number;
      reset: (opt_widget_id?: number) => void;
    };
    onRecaptchaLoadCallback?: () => void;
  }
}

const RECAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
  "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

export function ContactFormSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("Muayene Randevusu");
  const [branch, setBranch] = useState(TREATMENTS_DATA[0].title);
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // Honeypot alanı
  const [formLoadedAt] = useState<number>(() => Date.now());

  const [recaptchaToken, setRecaptchaToken] = useState<string>("");
  const recaptchaContainerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<number | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const renderRecaptcha = useCallback(() => {
    if (
      typeof window !== "undefined" &&
      window.grecaptcha &&
      window.grecaptcha.render &&
      recaptchaContainerRef.current &&
      widgetIdRef.current === null
    ) {
      try {
        widgetIdRef.current = window.grecaptcha.render(
          recaptchaContainerRef.current,
          {
            sitekey: RECAPTCHA_SITE_KEY,
            theme: "light",
            callback: (token: string) => {
              setRecaptchaToken(token);
              setErrorMessage(null);
            },
            "expired-callback": () => {
              setRecaptchaToken("");
            },
            "error-callback": () => {
              setRecaptchaToken("");
            },
          }
        );
      } catch {
        // Zaten render edilmişse yoksay
      }
    }
  }, []);

  useEffect(() => {
    window.onRecaptchaLoadCallback = () => {
      renderRecaptcha();
    };
    if (window.grecaptcha && window.grecaptcha.render) {
      renderRecaptcha();
    }
    return () => {
      delete window.onRecaptchaLoadCallback;
    };
  }, [renderRecaptcha]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!recaptchaToken) {
      setErrorMessage(
        "Lütfen 'Ben robot değilim' (reCAPTCHA) kutucuğunu işaretleyiniz."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          topic,
          branch,
          message,
          website,
          formLoadedAt,
          recaptchaToken,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        if (window.grecaptcha && widgetIdRef.current !== null) {
          window.grecaptcha.reset(widgetIdRef.current);
        }
        setRecaptchaToken("");
        throw new Error(
          data.error || "Mesaj gönderilirken bir hata meydana geldi."
        );
      }

      setIsSubmitted(true);
    } catch (err) {
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Mesaj gönderilirken bir hata oluştu."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-9 shadow-2xs">
      <Script
        src="https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoadCallback&render=explicit&hl=tr"
        strategy="lazyOnload"
      />

      <div className="pb-5 border-b border-slate-100 flex items-center justify-between gap-4">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-wider text-red-700">
            BİZE YAZIN
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            İletişim ve Randevu Talep Formu
          </h2>
        </div>
        <div className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-bold text-slate-700">
          <ShieldCheck className="w-3.5 h-3.5 text-red-700" />
          <span>Google reCAPTCHA Korumalı</span>
        </div>
      </div>

      {isSubmitted ? (
        <div className="mt-6 rounded-2xl bg-emerald-50 border border-emerald-200 p-6 text-center space-y-4">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-extrabold text-emerald-950">
            Mesajınız Başarıyla Gönderildi
          </h3>
          <p className="text-xs sm:text-sm text-emerald-800 max-w-lg mx-auto leading-relaxed">
            Sayın <strong>{name}</strong>, talebiniz güvenli şekilde ilgili
            birimimize iletilmiştir. Dilerseniz dijital asistan bağlantımız
            üzerinden de doğrudan randevu ve bilgi alabilirsiniz:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={CLINIC_INFO.assistantUrl}
              className="inline-flex items-center gap-2 rounded-xl bg-red-700 px-5 py-3 text-xs sm:text-sm font-bold text-white hover:bg-red-800 transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Asistan ile Randevu & Bilgi Al</span>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {errorMessage && (
            <div className="rounded-xl bg-rose-50 border border-rose-200 p-3.5 flex items-center gap-2.5 text-xs sm:text-sm text-red-800 font-medium">
              <AlertCircle className="w-4 h-4 text-red-700 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Gizli Honeypot Alanı (Bot Koruması) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="contact-website">Website</label>
            <input
              id="contact-website"
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="contact-name"
                className="block text-xs font-bold text-slate-700 mb-1.5"
              >
                Adınız ve Soyadınız *
              </label>
              <input
                id="contact-name"
                type="text"
                required
                minLength={2}
                maxLength={100}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Adınız Soyadınız"
                className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-xs sm:text-sm text-slate-900 focus:border-red-600 focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="block text-xs font-bold text-slate-700 mb-1.5"
              >
                E-Posta Adresiniz *
              </label>
              <input
                id="contact-email"
                type="email"
                required
                maxLength={120}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ornek@eposta.com"
                className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-xs sm:text-sm text-slate-900 focus:border-red-600 focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="contact-topic"
                className="block text-xs font-bold text-slate-700 mb-1.5"
              >
                Konu
              </label>
              <select
                id="contact-topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-xs sm:text-sm text-slate-900 focus:border-red-600 focus:bg-white focus:outline-none"
              >
                <option value="Muayene Randevusu">Muayene Randevusu</option>
                <option value="Tedavi Süreci Hakkında Bilgi">
                  Tedavi Süreci Hakkında Bilgi
                </option>
                <option value="3D Tomografi ve Röntgen">
                  3D Tomografi ve Röntgen
                </option>
                <option value="Genel Bilgi ve İletişim">
                  Genel Bilgi ve İletişim
                </option>
              </select>
            </div>

            <div>
              <label
                htmlFor="contact-branch"
                className="block text-xs font-bold text-slate-700 mb-1.5"
              >
                İlgilenilen Tedavi Branşı
              </label>
              <select
                id="contact-branch"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-xs sm:text-sm text-slate-900 focus:border-red-600 focus:bg-white focus:outline-none"
              >
                {TREATMENTS_DATA.map((item) => (
                  <option key={item.slug} value={item.title}>
                    {item.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="block text-xs font-bold text-slate-700 mb-1.5"
            >
              Mesajınız *
            </label>
            <textarea
              id="contact-message"
              rows={4}
              required
              minLength={5}
              maxLength={2000}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Sorunuzu veya randevu talebinizi yazabilirsiniz..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-xs sm:text-sm text-slate-900 focus:border-red-600 focus:bg-white focus:outline-none"
            />
          </div>

          {/* Google reCAPTCHA v2 ("Ben robot değilim") Kutusu */}
          <div className="pt-1">
            <div
              ref={recaptchaContainerRef}
              className="min-h-[78px] overflow-x-auto"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-700 px-6 py-3.5 text-sm font-extrabold text-white shadow-md shadow-red-600/20 hover:from-red-700 hover:to-rose-800 disabled:opacity-60 transition-all cursor-pointer min-h-[48px]"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Doğrulanıyor ve Gönderiliyor...</span>
              </>
            ) : (
              <span>Gönder</span>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
