"use client";

import React, { useState } from "react";
import { CheckCircle2, Calendar } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinic";
import { TREATMENTS_DATA } from "@/data/treatments";

export function ContactFormSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("Muayene Randevusu");
  const [branch, setBranch] = useState(TREATMENTS_DATA[0].title);
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-9 shadow-2xs">
      <div className="pb-5 border-b border-slate-100">
        <span className="text-xs font-extrabold uppercase tracking-wider text-red-700">
          BİZE YAZIN
        </span>
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
          İletişim ve Randevu Talep Formu
        </h2>
      </div>

      {isSubmitted ? (
        <div className="mt-6 rounded-2xl bg-emerald-50 border border-emerald-200 p-6 text-center space-y-4">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-extrabold text-emerald-950">
            Mesajınız Alındı
          </h3>
          <p className="text-xs sm:text-sm text-emerald-800 max-w-lg mx-auto leading-relaxed">
            Sayın <strong>{name}</strong>, talebiniz kaydedilmiştir. Dilerseniz
            dijital asistan bağlantımız üzerinden de doğrudan randevu ve bilgi
            alabilirsiniz:
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
                E-Posta Adresiniz
              </label>
              <input
                id="contact-email"
                type="email"
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
              Mesajınız
            </label>
            <textarea
              id="contact-message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Sorunuzu veya randevu talebinizi yazabilirsiniz..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-xs sm:text-sm text-slate-900 focus:border-red-600 focus:bg-white focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-red-600 to-rose-700 px-6 py-3.5 text-sm font-extrabold text-white shadow-md shadow-red-600/20 hover:from-red-700 hover:to-rose-800 transition-all cursor-pointer"
          >
            Gönder
          </button>
        </form>
      )}
    </div>
  );
}
