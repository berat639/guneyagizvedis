import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { TREATMENTS_DATA, TreatmentItem } from "@/data/treatments";

function TreatmentSvgIllustration({
  iconType,
}: {
  iconType: TreatmentItem["iconType"];
}) {
  switch (iconType) {
    case "root-canal":
      return (
        <svg
          viewBox="0 0 64 64"
          className="w-12 h-12"
          fill="none"
          aria-hidden="true"
        >
          <rect width="64" height="64" rx="16" fill="#FFF1F2" />
          <path
            d="M20 20C20 14.5 25 12 32 14C39 12 44 14.5 44 20C44 26 41 31 39 38L36 50C35.5 52 33 52 32.5 49.5L32 42L31.5 49.5C31 52 28.5 52 28 50L25 38C23 31 20 26 20 20Z"
            fill="white"
            stroke="#BE123C"
            strokeWidth="2.5"
          />
          <path
            d="M28 22C30 25 34 25 36 22M32 24V40M32 34L29 46M32 34L35 46"
            stroke="#B91C1C"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "implant":
      return (
        <svg
          viewBox="0 0 64 64"
          className="w-12 h-12"
          fill="none"
          aria-hidden="true"
        >
          <rect width="64" height="64" rx="16" fill="#EFF6FF" />
          <path
            d="M21 19C21 14 26 12 32 14C38 12 43 14 43 19C43 24 40 28 37 30H27C24 28 21 24 21 19Z"
            fill="white"
            stroke="#1D4ED8"
            strokeWidth="2.5"
          />
          <rect
            x="27"
            y="32"
            width="10"
            height="18"
            rx="4"
            fill="#DBEAFE"
            stroke="#1E40AF"
            strokeWidth="2.2"
          />
          <path
            d="M26 36H38M26 41H38M27 46H37"
            stroke="#B91C1C"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "pedodontics":
      return (
        <svg
          viewBox="0 0 64 64"
          className="w-12 h-12"
          fill="none"
          aria-hidden="true"
        >
          <rect width="64" height="64" rx="16" fill="#FEF2F2" />
          <path
            d="M21 22C21 16.5 26 14 32 16C38 14 43 16.5 43 22C43 28 40 33 38 40L36 48C35.2 50 33 50 32.5 47.5L32 41L31.5 47.5C31 50 28.8 50 28 48L26 40C24 33 21 28 21 22Z"
            fill="white"
            stroke="#BE123C"
            strokeWidth="2.5"
          />
          <path
            d="M27 27C28.5 29.5 35.5 29.5 37 27"
            stroke="#BE123C"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <circle cx="28" cy="22" r="1.5" fill="#BE123C" />
          <circle cx="36" cy="22" r="1.5" fill="#BE123C" />
        </svg>
      );
    case "prosthesis":
      return (
        <svg
          viewBox="0 0 64 64"
          className="w-12 h-12"
          fill="none"
          aria-hidden="true"
        >
          <rect width="64" height="64" rx="16" fill="#F0F9FF" />
          <path
            d="M16 26C16 20 21 17 26 19C29 17 35 17 38 19C43 17 48 20 48 26C48 33 44 38 40 40H24C20 38 16 33 16 26Z"
            fill="white"
            stroke="#0369A1"
            strokeWidth="2.5"
          />
          <path
            d="M26 19V39M38 19V39"
            stroke="#B91C1C"
            strokeWidth="2"
            strokeDasharray="3 3"
          />
        </svg>
      );
    case "orthodontics":
      return (
        <svg
          viewBox="0 0 64 64"
          className="w-12 h-12"
          fill="none"
          aria-hidden="true"
        >
          <rect width="64" height="64" rx="16" fill="#EFF6FF" />
          <path
            d="M20 20C20 14.5 25 12 32 14C39 12 44 14.5 44 20C44 26 41 31 39 38L36 49C35.5 51 33 51 32.5 48.5L32 41L31.5 48.5C31 51 28.5 51 28 49L25 38C23 31 20 26 20 20Z"
            fill="white"
            stroke="#1D4ED8"
            strokeWidth="2.5"
          />
          <path d="M18 26H46" stroke="#B91C1C" strokeWidth="2.2" />
          <rect x="25" y="23" width="6" height="6" rx="1.5" fill="#B91C1C" />
          <rect x="33" y="23" width="6" height="6" rx="1.5" fill="#B91C1C" />
        </svg>
      );
    default:
      return (
        <svg
          viewBox="0 0 64 64"
          className="w-12 h-12"
          fill="none"
          aria-hidden="true"
        >
          <rect width="64" height="64" rx="16" fill="#FFF1F2" />
          <path
            d="M20 20C20 14.5 25 12 32 14C39 12 44 14.5 44 20C44 26 41 31 39 38L36 49C35.5 51 33 51 32.5 48.5L32 41L31.5 48.5C31 51 28.5 51 28 49L25 38C23 31 20 26 20 20Z"
            fill="white"
            stroke="#BE123C"
            strokeWidth="2.5"
          />
          <path
            d="M46 14L47.5 18.5L52 20L47.5 21.5L46 26L44.5 21.5L40 20L44.5 18.5L46 14Z"
            fill="#D97706"
          />
        </svg>
      );
  }
}

export function TreatmentsGrid({
  showFullText = false,
}: {
  showFullText?: boolean;
}) {
  return (
    <section
      id="tedavilerimiz"
      className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-100"
    >
      <div className="w-full px-4 sm:px-10 lg:px-16 xl:px-24">
        {/* Section Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-red-700 mb-2">
              <span className="h-0.5 w-6 bg-red-700 rounded-full" />
              <span>HİZMETLERİMİZ</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Kapsamlı Ağız ve{" "}
              <span className="text-red-700">Diş Sağlığı Hizmetleri</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-700 mt-2.5 leading-relaxed">
              Polikliniğimizde tanı ve tedavi süreçleri; doğal diş dokusunun
              korunması, fonksiyonel çiğneme dengesinin sağlanması ve bilimsel
              diş hekimliği ilkeleri doğrultusunda yürütülmektedir.
            </p>
          </div>

          <div className="flex items-center shrink-0">
            <Link
              href="/tedavilerimiz"
              className="inline-flex items-center gap-2 py-2 text-xs sm:text-sm font-extrabold text-red-700 hover:text-red-800 transition-colors min-h-[44px]"
            >
              <span>Tüm Hizmetleri Gör</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 3x2 Symmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {TREATMENTS_DATA.map((treatment) => (
            <article
              key={treatment.id}
              className="group rounded-3xl border border-slate-200/90 bg-gradient-to-b from-white via-white to-slate-50/50 p-6 sm:p-7 shadow-2xs hover:shadow-lg hover:border-red-200 transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="rounded-2xl border border-slate-100 shadow-2xs p-1 bg-white group-hover:scale-105 transition-transform">
                    <TreatmentSvgIllustration iconType={treatment.iconType} />
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-700 group-hover:bg-rose-50 group-hover:text-red-800 transition-colors">
                    <Sparkles className="w-3 h-3 text-red-700" />
                    {treatment.categoryBadge}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-red-700 transition-colors">
                  <Link
                    href={`/tedavilerimiz/${treatment.slug}`}
                    className="inline-block py-1"
                  >
                    {treatment.title}
                  </Link>
                </h3>

                <div className="mt-2.5 space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {showFullText ? (
                    treatment.coreParagraphs.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))
                  ) : (
                    <p>{treatment.coreParagraphs[0]}</p>
                  )}
                </div>

                <ul className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                  {treatment.highlights.slice(0, 3).map((highlight, hIdx) => (
                    <li
                      key={hIdx}
                      className="flex items-start gap-2 text-xs text-slate-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/tedavilerimiz/${treatment.slug}`}
                  className="inline-flex items-center gap-1.5 py-2 text-xs sm:text-sm font-extrabold text-slate-900 group-hover:text-red-700 transition-colors min-h-[44px]"
                >
                  <span>{treatment.shortTitle} Detayları</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
