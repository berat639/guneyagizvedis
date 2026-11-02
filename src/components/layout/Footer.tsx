import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Headset,
  ArrowRight,
  CalendarCheck,
  Navigation,
} from "lucide-react";
import { CLINIC_INFO } from "@/data/clinic";
import { TREATMENTS_DATA } from "@/data/treatments";
import { LazyMapFacade } from "@/components/sections/LazyMapFacade";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200/80">
      {/* Red CTA Banner — Randevunuzu Hemen Oluşturun */}
      <div className="w-full px-4 sm:px-10 lg:px-16 xl:px-24 pt-10 pb-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-700 via-red-700 to-rose-800 px-5 py-8 sm:px-10 sm:py-10 text-white shadow-xl shadow-red-900/15">
          <div className="pointer-events-none absolute -right-12 -bottom-16 h-64 w-64 rounded-full border-[24px] border-white/10" />
          <div className="pointer-events-none absolute right-24 -top-16 h-40 w-40 rounded-full bg-white/5" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-6">
            <div className="lg:col-span-5 flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-xs border border-white/25">
                <CalendarCheck className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold leading-tight">
                  Randevunuzu Hemen Oluşturun
                </h2>
              </div>
            </div>

            <div className="lg:col-span-4 lg:border-l lg:border-white/25 lg:pl-6">
              <p className="text-sm text-rose-50 leading-relaxed">
                Sağlıklı bir gülüş için ilk adımı atın, size en uygun zamanda
                randevu ve bilgi alın.
              </p>
            </div>

            <div className="lg:col-span-3 flex items-center justify-start lg:justify-end">
              <a
                href={CLINIC_INFO.assistantUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-extrabold text-red-700 shadow-md hover:bg-rose-50 transition-all min-h-[48px]"
              >
                <Headset className="w-4 h-4" />
                <span>Asistan ile Randevu & Bilgi Al</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Balanced 3-Column Contact, Map & Bize Ulaşın Strip */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-5 rounded-2xl overflow-hidden bg-white shadow-2xs min-h-[240px] flex flex-col">
            <LazyMapFacade />
          </div>

          <div className="lg:col-span-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs flex flex-col justify-between space-y-4">
            <div className="flex items-start gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-red-700">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Adresimiz
                </h3>
                <p className="text-sm font-semibold text-slate-900 mt-0.5 leading-snug">
                  {CLINIC_INFO.address.full}
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={CLINIC_INFO.address.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-900 hover:border-red-700 hover:text-red-700 transition-colors min-h-[44px]"
              >
                <Navigation className="w-4 h-4 text-red-700" />
                <span>Google Haritalar Yol Tarifi</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-extrabold text-slate-900">
                Bize Ulaşın
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 mt-2 leading-relaxed">
                Sorularınız, randevu talepleriniz veya görüşleriniz için bize
                yazın.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-xs sm:text-sm font-bold text-slate-900 hover:border-red-700 hover:text-red-700 transition-colors min-h-[44px]"
              >
                <span>İletişim Formu</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Corporate Footer Section — Extra bottom padding on mobile so floating button never overlaps */}
      <div className="bg-slate-900 text-slate-200 border-t border-slate-800">
        <div className="w-full px-4 sm:px-10 lg:px-16 xl:px-24 pt-10 pb-24 sm:pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-slate-800">
            <div className="lg:col-span-4 space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm">
                  <Image
                    src={CLINIC_INFO.images.logo}
                    alt={CLINIC_INFO.officialTitle}
                    width={40}
                    height={40}
                    quality={80}
                    sizes="40px"
                    className="h-9 w-auto object-contain"
                  />
                </div>
                <div>
                  <span className="block text-lg font-extrabold text-white leading-none">
                    Güney Ağız ve Diş Sağlığı
                  </span>
                  <span className="block text-xs text-slate-300 mt-1">
                    {CLINIC_INFO.officialTitle}
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Etimesgut Topçu Mahallesi&apos;nde kanal tedavisi, implant,
                çocuk diş hekimliği, protez, ortodonti ve diş estetiği. Röntgen
                ve 3D tomografi klinik içinde çekilir.
              </p>
            </div>

            <div className="lg:col-span-3 space-y-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                Kurumsal
              </h3>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <Link
                    href="/"
                    className="inline-block py-1 text-slate-300 hover:text-white transition-colors"
                  >
                    Ana Sayfa
                  </Link>
                </li>
                <li>
                  <Link
                    href="/hakkimizda"
                    className="inline-block py-1 text-slate-300 hover:text-white transition-colors"
                  >
                    Hakkımızda
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tedavilerimiz"
                    className="inline-block py-1 text-slate-300 hover:text-white transition-colors"
                  >
                    Tedavilerimiz
                  </Link>
                </li>
                <li>
                  <Link
                    href="/iletisim"
                    className="inline-block py-1 text-slate-300 hover:text-white transition-colors"
                  >
                    İletişim
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-5 space-y-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                Tedavilerimiz
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {TREATMENTS_DATA.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/tedavilerimiz/${item.slug}`}
                      className="py-1 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-red-400 shrink-0" />
                      <span>{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300">
            <p>
              © {new Date().getFullYear()} {CLINIC_INFO.officialTitle}. Tüm
              hakları saklıdır.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/hakkimizda"
                className="py-1 hover:text-white transition-colors"
              >
                Gizlilik Politikası
              </Link>
              <span>•</span>
              <Link
                href="/iletisim"
                className="py-1 hover:text-white transition-colors"
              >
                Çerez Politikası
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
