"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  HelpCircle,
  Sparkles,
  Stethoscope,
  ShieldCheck,
} from "lucide-react";
import {
  RICH_GUIDE_TABS,
  CLINICAL_PROCESS_STAGES,
  GENERAL_FAQS,
} from "@/data/richContent";

export function RichContentSection() {
  const [activeTabId, setActiveTabId] = useState<string>(RICH_GUIDE_TABS[0].id);
  const [openFaqIndex, setOpenFaqIndex] = useState<number>(0);

  const activeTab =
    RICH_GUIDE_TABS.find((t) => t.id === activeTabId) || RICH_GUIDE_TABS[0];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white border-t border-slate-100">
      <div className="w-full px-4 sm:px-10 lg:px-16 xl:px-24 space-y-14 sm:space-y-16">
        {/* BLOCK 1: Zengin İçerik — Ağız ve Diş Sağlığı Rehberi */}
        <div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 sm:gap-6 mb-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-red-700 mb-2">
                <BookOpen className="w-4 h-4" />
                <span>AĞIZ VE DİŞ SAĞLIĞI REHBERİ</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Sağlıklı Gülüşler İçin{" "}
                <span className="text-red-700">Bilgilendirme Rehberi</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-700 mt-2.5 leading-relaxed">
                Koruyucu diş hekimliği, 3 boyutlu radyolojik görüntüleme, çocuk
                diş sağlığı ve protetik tedavi süreçleri hakkında detaylı
                bilgiler.
              </p>
            </div>

            {/* Interactive Tab Buttons */}
            <div className="flex flex-wrap gap-2">
              {RICH_GUIDE_TABS.map((tab) => {
                const isActive = tab.id === activeTabId;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTabId(tab.id)}
                    className={`rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer min-h-[44px] ${
                      isActive
                        ? "bg-red-700 text-white shadow-md shadow-red-700/20"
                        : "bg-slate-100 text-slate-800 hover:bg-rose-50 hover:text-red-800"
                    }`}
                  >
                    {tab.tabLabel}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Rich Content Card */}
          <article className="rounded-3xl border border-slate-200/90 bg-gradient-to-br from-slate-50/70 via-white to-rose-50/30 p-5 sm:p-8 lg:p-10 shadow-2xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 border border-rose-200 px-3.5 py-1 text-xs font-bold text-red-800">
                    <Sparkles className="w-3.5 h-3.5 text-red-700" />
                    {activeTab.badge}
                  </span>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight">
                    {activeTab.title}
                  </h3>

                  <p className="text-sm sm:text-base font-semibold text-slate-800 leading-relaxed">
                    {activeTab.lead}
                  </p>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {activeTab.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                </div>

                {/* 3 Symmetrical Key Takeaway Boxes */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                  {activeTab.keyTakeaways.map((takeaway, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl bg-white border border-slate-200/80 p-4 shadow-2xs flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-1.5 text-xs font-extrabold text-slate-900">
                          <CheckCircle2 className="w-4 h-4 text-red-700 shrink-0" />
                          <span>{takeaway.title}</span>
                        </div>
                        <p className="text-[11px] sm:text-xs text-slate-600 mt-1.5 leading-relaxed">
                          {takeaway.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Single Clean Link to Treatment Page */}
                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <Link
                    href={`/tedavilerimiz/${activeTab.relatedTreatmentSlug}`}
                    className="inline-flex items-center gap-2 py-2 text-xs sm:text-sm font-extrabold text-red-700 hover:text-red-800 min-h-[44px]"
                  >
                    <span>{activeTab.relatedTreatmentLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Clinic Image */}
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-200 min-h-[280px] sm:min-h-[380px] flex flex-col justify-end p-5">
                <Image
                  src={activeTab.image}
                  alt={activeTab.imageAlt}
                  fill
                  quality={75}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                <div className="relative z-10 rounded-2xl bg-white/95 backdrop-blur-md p-4 shadow-lg border border-white">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-slate-900">
                    <Stethoscope className="w-4 h-4 text-red-700 shrink-0" />
                    <span>Kişiye Özel Muayene ve Planlama</span>
                  </div>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                    Her bireyin ağız ve çene yapısı kendine özgüdür; en uygun
                    tedavi planı klinik ve radyolojik muayene ile belirlenir.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* BLOCK 2: 4 Adımlı Muayene ve Tedavi Süreci */}
        <div className="rounded-3xl bg-slate-50 border border-slate-200/80 p-5 sm:p-8 lg:p-10">
          <div className="mb-8">
            <span className="text-xs font-extrabold uppercase tracking-wider text-red-700">
              TEDAVİ SÜRECİMİZ
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Kliniğimizde Muayene ve Tedavi Süreci Nasıl İşler?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
            {CLINICAL_PROCESS_STAGES.map((stage) => (
              <div
                key={stage.number}
                className="rounded-2xl bg-white border border-slate-200/90 p-5 shadow-2xs flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-sm font-extrabold text-red-700 border border-rose-200/60">
                      {stage.number}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                      {stage.number}. Adım
                    </span>
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                    {stage.title}
                  </h3>
                  <p className="text-xs font-bold text-red-700 mt-1">
                    {stage.subtitle}
                  </p>
                  <p className="text-xs text-slate-700 mt-2.5 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BLOCK 3: Sıkça Sorulan Sorular (FAQ) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-red-950 p-6 sm:p-9 text-white flex flex-col justify-between shadow-lg">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3.5 py-1 text-xs font-bold text-rose-100">
                <HelpCircle className="w-3.5 h-3.5 text-rose-300" />
                Sıkça Sorulan Sorular
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                Ağız ve Diş Sağlığı Hakkında Merak Edilenler
              </h2>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                İlk diş muayenesi, dijital panoramik röntgen ve 3D tomografi
                görüntüleme, koruyucu diş hekimliği uygulamaları ve poliklinik
                işleyişimiz hakkında en sık yöneltilen soruları derledik.
              </p>

              <div className="rounded-2xl bg-white/10 border border-white/15 p-4 space-y-2.5 mt-4">
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <ShieldCheck className="w-4 h-4 text-emerald-300" />
                  <span>Sterilizasyon ve Hasta Güvenliği</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Polikliniğimizde tüm tanı ve tedavi işlemleri uluslararası
                  enfeksiyon kontrol ve otoklav sterilizasyon standartlarında
                  gerçekleştirilmektedir.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/15">
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 py-2 text-xs sm:text-sm font-extrabold text-rose-200 hover:text-white transition-colors min-h-[44px]"
              >
                <span>Diğer Sorularınız İçin İletişim Sayfamız</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right FAQ Accordion (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
            {GENERAL_FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all ${
                    isOpen
                      ? "border-red-200 bg-rose-50/30 shadow-2xs"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer min-h-[56px]"
                  >
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-red-700 block mb-0.5">
                        {faq.category}
                      </span>
                      <span className="text-sm sm:text-base font-extrabold text-slate-900">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-600 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-red-700" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
