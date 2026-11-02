import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  ScanLine,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { CLINIC_INFO } from "@/data/clinic";

export function AboutAndTechSection() {
  const aboutFeatures = [
    "Klinik İçinde Röntgen ve 3D Tomografi",
    "Çocuk ve Yetişkin Diş Tedavileri",
    "Otoklav Sterilizasyonu",
    "Topçu Mahallesi, Etimesgut",
  ];

  const techFeatures = [
    {
      title: "Dijital Röntgen (Düşük Radyasyon)",
      detail:
        "Tüm dişlerin, köklerin ve çene kemiklerinin tek karede hızlı görüntülenmesi.",
    },
    {
      title: "3D Görüntüleme ve Planlama",
      detail:
        "İmplant ve cerrahi işlemler öncesinde kemik hacminin üç boyutlu analizi.",
    },
    {
      title: "Sterilizasyon ve Hijyen Standartları",
      detail:
        "Paketli otoklav döngüsü ve tek kullanımlık sarf malzemelerle enfeksiyon kontrolü.",
    },
    {
      title: "Konforlu Tedavi Üniteleri",
      detail:
        "Aydınlık, cam bölmeli ve ergonomik hasta ünitelerinde konforlu muayene ortamı.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-50/70 via-white to-rose-50/25">
      <div className="w-full px-4 sm:px-10 lg:px-16 xl:px-24 space-y-12">
        {/* Part 1: Hakkımızda — Güney Ağız ve Diş Sağlığı */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Text Column (5 Cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-9 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-red-700 mb-2.5">
                <span className="h-0.5 w-6 bg-red-700 rounded-full" />
                <span>HAKKIMIZDA</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {CLINIC_INFO.name}
              </h2>

              <p className="text-sm sm:text-base text-slate-700 mt-4 leading-relaxed">
                Etimesgut Topçu Mahallesi&apos;nde kanal tedavisi, implant,
                çocuk diş hekimliği, protez, ortodonti ve diş estetiği
                alanlarında muayene ve tedavi hizmeti veren bir diş
                polikliniğiyiz.
              </p>

              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {aboutFeatures.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-red-700 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 pt-5 border-t border-slate-100">
              <Link
                href="/hakkimizda"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-xs sm:text-sm font-bold text-slate-900 hover:border-red-700 hover:text-red-700 transition-colors min-h-[44px]"
              >
                <span>Kliniğimizi Tanıyın</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Real Clinic Photos Showcase (7 Cols — giris.webp, klinikoda2.webp & klinik3.webp) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-5 items-stretch">
            <div className="sm:col-span-7 relative rounded-3xl overflow-hidden border border-slate-200 shadow-sm min-h-[280px] sm:min-h-[380px] group">
              <Image
                src={CLINIC_INFO.images.entrance}
                alt="Özel Güney Ağız ve Diş Sağlığı Polikliniği Etimesgut"
                fill
                quality={75}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 35vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/15 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 backdrop-blur-md p-4 shadow-lg border border-white">
                <div className="flex items-center gap-2 text-xs font-extrabold text-red-700">
                  <Building2 className="w-4 h-4" />
                  <span>{CLINIC_INFO.officialTitle}</span>
                </div>
                <p className="text-xs text-slate-700 mt-1">
                  Topçu Mah. 1512. Cad. No:52, Etimesgut / Ankara
                </p>
              </div>
            </div>

            <div className="sm:col-span-5 grid grid-cols-1 gap-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-sm min-h-[180px] sm:min-h-[180px] group">
                <Image
                  src={CLINIC_INFO.images.clinicRoom2}
                  alt="Cam bölmeli diş tedavi odası, Güney Ağız ve Diş Sağlığı Etimesgut"
                  fill
                  quality={75}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/10 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-white/95 backdrop-blur-md px-3.5 py-2.5 shadow-md border border-white">
                  <div className="flex items-center gap-1.5 text-xs font-extrabold text-slate-900">
                    <ShieldCheck className="w-3.5 h-3.5 text-red-700 shrink-0" />
                    <span>Cam Bölmeli Tedavi Odaları</span>
                  </div>
                </div>
              </div>

              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-sm min-h-[180px] sm:min-h-[180px] group">
                <Image
                  src={CLINIC_INFO.images.clinicRoom3}
                  alt="Geniş diş tedavi odası, Güney Ağız ve Diş Sağlığı Etimesgut"
                  fill
                  quality={75}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/10 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-white/95 backdrop-blur-md px-3.5 py-2.5 shadow-md border border-white">
                  <div className="flex items-center gap-1.5 text-xs font-extrabold text-slate-900">
                    <ShieldCheck className="w-3.5 h-3.5 text-red-700 shrink-0" />
                    <span>Çocuk ve Yetişkin Tedavi Alanı</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Part 2: Teknoloji ve Donanım Banner (tomografi.webp) */}
        <div className="rounded-3xl bg-gradient-to-r from-sky-50/90 via-slate-50 to-rose-50/70 border border-sky-100/90 p-5 sm:p-8 lg:p-10 shadow-2xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 relative rounded-2xl overflow-hidden border border-white shadow-md min-h-[250px] sm:min-h-[290px] bg-white">
              <Image
                src={CLINIC_INFO.images.tomography}
                alt="Güney Ağız ve Diş Sağlığı 3D Dental Tomografi ve Dijital Panoramik Röntgen Cihazı"
                fill
                quality={75}
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-center"
              />
              <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-slate-900/90 backdrop-blur-xs px-3 py-1 text-[11px] font-bold text-white">
                <ScanLine className="w-3.5 h-3.5 text-red-300" />
                <span>3D Dental Tomografi & Röntgen</span>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-red-700">
                <span className="h-0.5 w-6 bg-red-700 rounded-full" />
                <span>TEKNOLOJİ VE DONANIM</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                Modern Teknoloji ile Daha Doğru ve Konforlu Tedavi
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                3D görüntüleme, dijital röntgen ve güncel tedavi cihazlarımızla
                tanı ve tedavi süreçlerini detaylı analizlerle planlıyoruz.
              </p>
            </div>

            <div className="lg:col-span-4 lg:border-l lg:border-slate-200/80 lg:pl-7 space-y-2.5">
              {techFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white/95 border border-slate-200/70 p-3.5 shadow-2xs flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      {feat.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-snug">
                      {feat.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
