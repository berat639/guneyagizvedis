import type { Metadata } from "next";
import Image from "next/image";
import {
  MapPin,
  Navigation,
  Building2,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import { CLINIC_INFO, OG_DEFAULTS } from "@/data/clinic";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { ContactFormSection } from "@/components/sections/ContactFormSection";

const TITLE = "İletişim ve Randevu | Güney Ağız ve Diş Sağlığı";
const DESCRIPTION =
  "Topçu Mahallesi 1512. Cadde No:52 Etimesgut / Ankara. Güney Ağız ve Diş Sağlığı Polikliniği adres, yol tarifi ve randevu.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: "/iletisim",
  },
  openGraph: {
    ...OG_DEFAULTS,
    url: `${CLINIC_INFO.domain}/iletisim`,
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", url: CLINIC_INFO.domain },
          { name: "İletişim", url: `${CLINIC_INFO.domain}/iletisim` },
        ]}
      />

      {/* Page Hero Header */}
      <section className="bg-gradient-to-b from-rose-50/50 via-slate-50/60 to-white py-10 sm:py-14 lg:py-16 border-b border-slate-200/70">
        <div className="w-full px-4 sm:px-10 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-rose-50 border border-rose-200 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-red-800">
                <MapPin className="w-3.5 h-3.5 text-red-700" />
                <span>İLETİŞİM & ULAŞIM</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                İletişim Bilgilerimiz &{" "}
                <span className="text-red-700">Randevu</span>
              </h1>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Etimesgut Topçu Mahallesi&apos;ndeki polikliniğimize dijital
                asistan bağlantımızla veya aşağıdaki iletişim formumuz üzerinden
                kolayca ulaşabilirsiniz.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={CLINIC_INFO.address.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-slate-300 bg-white px-5 py-3 text-xs sm:text-sm font-bold text-slate-900 hover:border-red-700 hover:text-red-700 transition-colors min-h-[44px]"
                >
                  <Navigation className="w-4 h-4 text-red-700" />
                  <span>Google Haritalar Yol Tarifi</span>
                </a>
              </div>
            </div>

            {/* Right Clinic Photo Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-lg min-h-[270px] sm:min-h-[330px]">
                <Image
                  src={CLINIC_INFO.images.entrance}
                  alt="Özel Güney Ağız ve Diş Sağlığı Polikliniği Etimesgut"
                  fill
                  priority
                  quality={75}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 backdrop-blur-md p-4 shadow-md border border-white">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-red-700">
                    <Building2 className="w-4 h-4" />
                    <span>{CLINIC_INFO.officialTitle}</span>
                  </div>
                  <p className="text-xs text-slate-700 mt-1">
                    {CLINIC_INFO.address.full}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main 12-Col Contact Details & Form */}
      <section className="py-12 lg:py-16">
        <div className="w-full px-4 sm:px-10 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-5">
              {/* Address Box */}
              <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-6 space-y-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white border border-rose-100 text-red-700 shadow-2xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                      Adresimiz
                    </span>
                    <h2 className="text-base font-extrabold text-slate-900">
                      Etimesgut Polikliniği
                    </h2>
                  </div>
                </div>
                <p className="text-sm font-medium text-slate-800 pt-1 leading-relaxed">
                  {CLINIC_INFO.address.full}
                </p>
              </div>

              {/* Online Appointment & Assistant Box */}
              <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white border border-rose-100 text-red-700 shadow-2xs">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                      Dijital Asistan
                    </span>
                    <h2 className="text-base font-extrabold text-slate-900">
                      Randevu ve Bilgi Alın
                    </h2>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Muayene randevusu oluşturmak ve tedavi süreçlerimiz hakkında
                  bilgi almak için asistan sistemimize bağlanabilirsiniz.
                </p>

                <div className="pt-1">
                  <a
                    href={CLINIC_INFO.assistantUrl}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-red-700 px-6 py-3 text-xs sm:text-sm font-bold text-white hover:bg-red-800 transition-colors min-h-[44px]"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Asistan ile Randevu & Bilgi Al</span>
                  </a>
                </div>

                <div className="pt-3 border-t border-slate-200/80 space-y-1.5 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-700 shrink-0" />
                    <span>
                      Etimesgut merkez ve toplu taşıma güzergahlarına yakın konum
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-700 shrink-0" />
                    <span>Özel araçla kolay ulaşım imkanı</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Form Column (7 Cols) */}
            <div className="lg:col-span-7">
              <ContactFormSection />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
