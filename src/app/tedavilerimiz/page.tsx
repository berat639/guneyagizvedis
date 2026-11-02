import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Stethoscope, CheckCircle2, ArrowRight } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinic";
import { TREATMENTS_DATA } from "@/data/treatments";
import { TreatmentsGrid } from "@/components/sections/TreatmentsGrid";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title:
    "Tedavilerimiz | Endodonti, İmplant, Pedodonti, Protez, Ortodonti & Diş Estetiği",
  description:
    "Özel Güney Ağız ve Diş Sağlığı Polikliniği'nde uygulanan Endodonti (Kanal Tedavisi), İmplant Tedavisi, Pedodonti, Protez Tedavisi, Ortodonti ve Diş Estetiği branşları hakkında detaylı bilgilendirme.",
  alternates: {
    canonical: "/tedavilerimiz",
  },
};

export default function TreatmentsPage() {
  return (
    <div className="bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", url: CLINIC_INFO.domain },
          { name: "Tedavilerimiz", url: `${CLINIC_INFO.domain}/tedavilerimiz` },
        ]}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-rose-50/50 via-slate-50/60 to-white py-10 sm:py-14 lg:py-16 border-b border-slate-200/70">
        <div className="w-full px-4 sm:px-10 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-rose-50 border border-rose-200 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-red-800">
                <Stethoscope className="w-3.5 h-3.5 text-red-700" />
                <span>TANI VE TEDAVİ BRANŞLARIMIZ</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Ağız ve Diş Sağlığı{" "}
                <span className="text-red-700">Tedavilerimiz</span>
              </h1>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Polikliniğimizde Endodonti (Kanal Tedavisi), İmplant Tedavisi,
                Pedodonti (Çocuk Diş Hekimliği), Protez Tedavisi, Ortodonti ve
                Diş Estetiği branşlarında bilimsel, koruyucu ve kişiye özel
                tedavi planlaması uygulanmaktadır.
              </p>

              {/* Quick Anchor Pills for the 6 Treatments */}
              <div className="pt-1 flex flex-wrap gap-2">
                {TREATMENTS_DATA.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/tedavilerimiz/${item.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-bold text-slate-800 hover:border-red-700 hover:bg-rose-50 hover:text-red-800 transition-colors min-h-[44px]"
                  >
                    <span>{item.shortTitle}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-red-700" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-lg min-h-[280px] sm:min-h-[340px]">
                <Image
                  src={CLINIC_INFO.images.tomography}
                  alt="3D Dental Tomografi ve Radyolojik Tanı Destekli Tedavi Planlaması"
                  fill
                  priority
                  quality={75}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 backdrop-blur-md p-4 shadow-md border border-white">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-slate-900">
                    <CheckCircle2 className="w-4 h-4 text-red-700 shrink-0" />
                    <span>3D Dental Tomografi Destekli Tanı</span>
                  </div>
                  <p className="text-xs text-slate-700 mt-1">
                    Tüm tedavi branşlarımızda muayene süreci dijital panoramik
                    röntgen ve 3 boyutlu tomografi verileriyle desteklenir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Symmetrical 3x2 Treatments Grid with Complete Text */}
      <TreatmentsGrid showFullText={true} />
    </div>
  );
}
