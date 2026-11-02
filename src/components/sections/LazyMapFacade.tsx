"use client";

import React, { useState } from "react";
import { MapPin, Navigation, Map } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinic";

export function LazyMapFacade() {
  const [mapLoaded, setMapLoaded] = useState(false);

  if (mapLoaded) {
    return (
      <div className="w-full h-full min-h-[240px] relative rounded-2xl overflow-hidden bg-slate-100">
        <iframe
          title="Özel Güney Ağız ve Diş Sağlığı Polikliniği Konumu"
          src={CLINIC_INFO.address.googleMapsEmbedUrl}
          className="w-full h-full min-h-[240px] border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[240px] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 via-slate-50 to-rose-50/70 p-6 flex flex-col justify-between border border-slate-200/80">
      {/* Subtle Decorative Map Grid Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(#94a3b8 1px, transparent 1px), linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "20px 20px, 40px 40px, 40px 40px",
        }}
      />

      <div className="relative z-10 flex items-start gap-3.5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-700 text-white shadow-sm">
          <MapPin className="w-5 h-5" />
        </div>
        <div>
          <span className="inline-block rounded-full bg-white px-2.5 py-0.5 text-[11px] font-bold text-red-700 border border-rose-200">
            Etimesgut / Ankara
          </span>
          <h3 className="text-base font-extrabold text-slate-900 mt-1">
            {CLINIC_INFO.officialTitle}
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 mt-0.5 leading-snug">
            {CLINIC_INFO.address.full}
          </p>
        </div>
      </div>

      <div className="relative z-10 pt-5 flex flex-wrap items-center gap-2.5">
        <button
          type="button"
          onClick={() => setMapLoaded(true)}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition-colors cursor-pointer min-h-[44px]"
        >
          <Map className="w-4 h-4" />
          <span>Etkileşimli Haritayı Aç</span>
        </button>

        <a
          href={CLINIC_INFO.address.googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-bold text-slate-800 hover:border-red-700 hover:text-red-700 transition-colors min-h-[44px]"
        >
          <Navigation className="w-4 h-4 text-red-700" />
          <span>Yol Tarifi Al</span>
        </a>
      </div>
    </div>
  );
}

