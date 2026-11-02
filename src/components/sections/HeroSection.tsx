import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  UserCheck,
  ShieldCheck,
  ScanLine,
  ClipboardCheck,
} from "lucide-react";
import { CLINIC_INFO } from "@/data/clinic";

export function HeroSection() {
  const simplePillars = [
    { title: "Klinik İçinde Röntgen & 3D Tomografi", icon: ScanLine },
    { title: "Otoklav Sterilizasyonu", icon: ShieldCheck },
    { title: "Çocuk ve Yetişkin Tedavileri", icon: UserCheck },
    { title: "Tedavi Planı Önceden Açıklanır", icon: ClipboardCheck },
    { title: "Online Randevu", icon: Calendar },
  ];

  return (
    <section className="relative w-full lg:min-h-[calc(100vh-113px)] flex flex-col justify-between bg-white overflow-hidden">
      {/* Main Full-Screen Edge-to-Edge Split Area */}
      <div className="relative flex-1 w-full grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Left Content Area — Clean, Spacious, Vertically Centered */}
        <div className="relative z-10 lg:col-span-5 flex flex-col justify-center px-4 sm:px-10 lg:pl-16 xl:pl-24 lg:pr-8 py-10 sm:py-14 lg:py-20 bg-gradient-to-br from-white via-white to-rose-50/40">
          <div className="max-w-xl space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700">
              <span className="h-0.5 w-8 bg-red-700 rounded-full" />
              <span>ETİMESGUT DİŞ HEKİMİ · TOPÇU MAHALLESİ</span>
            </div>

            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Sağlıklı Dişler,
              <span className="block text-red-700 mt-1.5">
                Özgüvenli Gülüşler
              </span>
            </h1>

            <p className="text-sm sm:text-lg text-slate-700 leading-relaxed">
              Kanal tedavisi, implant, çocuk diş hekimliği, zirkonyum ve
              protez, ortodonti ve diş estetiği tek çatı altında. Röntgen ve 3D
              tomografi klinik içinde çekilir; tedavi planı ve seans sayısı
              başlamadan önce size anlatılır.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={CLINIC_INFO.assistantUrl}
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-red-700 px-7 py-4 text-sm sm:text-base font-bold text-white shadow-lg shadow-red-700/20 hover:bg-red-800 transition-all min-h-[52px]"
              >
                <Calendar className="w-5 h-5 shrink-0" />
                <span>Asistan ile Randevu & Bilgi Al</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>

              <Link
                href="/tedavilerimiz"
                className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-slate-300 bg-white px-7 py-4 text-sm sm:text-base font-bold text-slate-900 hover:border-red-700 hover:text-red-700 transition-colors min-h-[52px]"
              >
                <span>Tedavilerimizi İnceleyin</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Full-Bleed Clinic Image Area (7 Cols, Edge-to-Edge) */}
        <div className="relative lg:col-span-7 min-h-[300px] sm:min-h-[440px] lg:min-h-full bg-slate-100 overflow-hidden">
          <Image
            src={CLINIC_INFO.images.heroRoom}
            alt="Etimesgut Güney Ağız ve Diş Sağlığı Polikliniği diş tedavi ünitesi"
            fill
            priority
            fetchPriority="high"
            quality={80}
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover object-center"
          />

          {/* Soft Gradient Left Transition on Desktop */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-white via-white/70 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Full-Width Bottom 5-Pillar Strip */}
      <div className="relative z-20 w-full border-y border-slate-200/80 bg-white px-4 sm:px-10 lg:px-16 xl:px-24 py-5 sm:py-6 shadow-2xs">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:divide-x divide-slate-200">
          {simplePillars.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className={`flex items-center justify-start lg:justify-center gap-3.5 ${
                  idx > 0 ? "lg:pl-6" : ""
                }`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-red-700">
                  <IconComponent className="w-6 h-6" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-900 leading-snug lg:max-w-[140px]">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
