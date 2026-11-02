import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  HelpCircle,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { CLINIC_INFO, OG_DEFAULTS } from "@/data/clinic";
import { TREATMENTS_DATA, getTreatmentBySlug } from "@/data/treatments";
import {
  BreadcrumbJsonLd,
  FAQPageJsonLd,
  MedicalWebPageJsonLd,
} from "@/components/seo/JsonLd";
import { AssistantTriggerButton } from "@/components/assistant/AssistantTriggerButton";

export async function generateStaticParams() {
  return TREATMENTS_DATA.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);

  if (!treatment) {
    return {
      title: "Tedavi Bulunamadı",
    };
  }

  return {
    title: { absolute: treatment.seoTitle },
    description: treatment.seoDescription,
    keywords: treatment.keywords,
    alternates: {
      canonical: `/tedavilerimiz/${treatment.slug}`,
    },
    openGraph: {
      ...OG_DEFAULTS,
      type: "article",
      title: treatment.seoTitle,
      description: treatment.seoDescription,
      url: `${CLINIC_INFO.domain}/tedavilerimiz/${treatment.slug}`,
      images: [
        {
          url: treatment.featuredImage,
          alt: treatment.featuredImageAlt,
        },
      ],
    },
  };
}

export default async function TreatmentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);

  if (!treatment) {
    notFound();
  }

  return (
    <div className="bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", url: CLINIC_INFO.domain },
          { name: "Tedavilerimiz", url: `${CLINIC_INFO.domain}/tedavilerimiz` },
          {
            name: treatment.title,
            url: `${CLINIC_INFO.domain}/tedavilerimiz/${treatment.slug}`,
          },
        ]}
      />
      <MedicalWebPageJsonLd
        title={treatment.title}
        description={treatment.seoDescription}
        slug={treatment.slug}
        lastReviewed={CLINIC_INFO.compliance.lastUpdatedISO}
      />
      <FAQPageJsonLd faqs={treatment.faqs} />

      {/* Top Breadcrumb & Hero Section */}
      <section className="bg-gradient-to-b from-rose-50/50 via-slate-50/60 to-white py-10 lg:py-14 border-b border-slate-200/80">
        <div className="w-full px-4 sm:px-10 lg:px-16 xl:px-24">
          <nav
            aria-label="Sayfa Yolu"
            className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-slate-600 mb-5"
          >
            <Link href="/" className="py-1 hover:text-red-700 transition-colors">
              Ana Sayfa
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <Link
              href="/tedavilerimiz"
              className="py-1 hover:text-red-700 transition-colors"
            >
              Tedavilerimiz
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-slate-900 font-bold">{treatment.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 border border-rose-200 px-3.5 py-1 text-xs font-bold text-red-800">
                  <Sparkles className="w-3.5 h-3.5 text-red-700" />
                  {treatment.categoryBadge}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {treatment.title}
              </h1>

              <p className="text-sm sm:text-base font-medium text-slate-700 leading-relaxed">
                {treatment.shortSummary}
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-lg min-h-[260px] sm:min-h-[340px]">
                <Image
                  src={treatment.featuredImage}
                  alt={treatment.featuredImageAlt}
                  fill
                  priority
                  quality={75}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 backdrop-blur-md p-3.5 shadow-md border border-white">
                  <p className="text-xs font-bold text-slate-900">
                    {CLINIC_INFO.officialTitle} — Etimesgut / Ankara
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content + Sticky Sidebar */}
      <section className="py-12 lg:py-16">
        <div className="w-full px-4 sm:px-10 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Article Column (8 Cols) */}
            <article className="lg:col-span-8 space-y-10">
              {/* Core Paragraphs Card */}
              <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-white to-slate-50/70 p-6 sm:p-8 shadow-2xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  {treatment.shortTitle} Nedir?
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  {treatment.coreParagraphs.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {/* Highlights Grid */}
                <div className="pt-4 mt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {treatment.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl bg-rose-50/50 border border-rose-100/80 p-3.5 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hangi Durumlarda Uygulanır + Secondary Clinic Photo */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                <div className="md:col-span-7 rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 flex flex-col justify-between">
                  <div>
                    <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                      Hangi Durumlarda Değerlendirilir?
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Diş hekimi muayenesi ve radyolojik inceleme sonucunda
                      aşağıdaki klinik tablolar değerlendirilir:
                    </p>
                    <ul className="mt-4 space-y-2.5">
                      {treatment.indications.map((ind, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                        >
                          <CheckCircle2 className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                          <span>{ind}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="md:col-span-5 relative rounded-3xl overflow-hidden border border-slate-200 min-h-[260px]">
                  <Image
                    src={treatment.secondaryImage}
                    alt={treatment.secondaryImageAlt}
                    fill
                    quality={75}
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-rose-200 block">
                      Klinik & Radyolojik Altyapı
                    </span>
                    <span className="text-xs font-bold leading-snug block mt-0.5">
                      {treatment.secondaryImageAlt}
                    </span>
                  </div>
                </div>
              </div>

              {/* 4-Step Clinical Process */}
              <div className="rounded-3xl bg-slate-50 border border-slate-200/80 p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  {treatment.shortTitle} Uygulama Süreci
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 mt-1 mb-6">
                  Polikliniğimizde tanı ve tedavi planlaması aşağıdaki bilimsel
                  aşamalarla yürütülmektedir:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {treatment.processSteps.map((step) => (
                    <div
                      key={step.stepNumber}
                      className="rounded-2xl bg-white border border-slate-200/90 p-5 shadow-2xs"
                    >
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-red-700 text-xs font-extrabold text-white">
                          {step.stepNumber}
                        </span>
                        <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Educational Subsections */}
              {treatment.detailedSections.map((sec, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4"
                >
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    {sec.heading}
                  </h2>
                  <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                  {sec.bullets && (
                    <ul className="pt-2 space-y-2">
                      {sec.bullets.map((b, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-800"
                        >
                          <CheckCircle2 className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {/* Post-Care & Preventive Recommendations */}
              <div className="rounded-3xl border border-rose-200/80 bg-rose-50/40 p-6 sm:p-8 space-y-4">
                <h2 className="text-xl font-extrabold text-slate-900">
                  Tedavi Sonrası Koruyucu Bakım ve Dikkat Edilmesi Gerekenler
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {treatment.postCareTips.map((tip, idx) => (
                    <li
                      key={idx}
                      className="rounded-2xl bg-white border border-rose-100 p-4 flex items-start gap-2.5 text-xs sm:text-sm text-slate-800"
                    >
                      <ShieldCheck className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Treatment-Specific FAQs */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-red-700" />
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    {treatment.shortTitle} Hakkında Sıkça Sorulan Sorular
                  </h2>
                </div>
                <div className="space-y-3">
                  {treatment.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-200 bg-white p-5 space-y-2"
                    >
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* Right Sticky Sidebar (4 Cols) */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              {/* Assistant Card for this Treatment */}
              <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-red-950 p-6 text-white shadow-xl space-y-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-[11px] font-bold text-rose-100">
                  Dijital Klinik Asistanı
                </span>
                <h2 className="text-lg sm:text-xl font-extrabold leading-snug">
                  {treatment.shortTitle} Hakkında Bilgi ve Randevu Alın
                </h2>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Muayene süreci, dijital röntgen/tomografi değerlendirmesi ve
                  uygun randevu saatleri için asistanımızla hemen iletişime
                  geçebilirsiniz.
                </p>

                <AssistantTriggerButton
                  label="Asistan ile Randevu & Bilgi Al"
                  topicId="tedavi-bilgisi"
                  treatmentSlug={treatment.slug}
                  className="w-full min-h-[48px]"
                />
              </div>

              {/* Other Treatments Navigation Card */}
              <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 space-y-3">
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900">
                  Diğer Tedavi Branşlarımız
                </h3>
                <ul className="space-y-2">
                  {TREATMENTS_DATA.map((item) => {
                    const active = item.slug === treatment.slug;
                    return (
                      <li key={item.slug}>
                        <Link
                          href={`/tedavilerimiz/${item.slug}`}
                          className={`flex items-center justify-between rounded-xl px-4 py-3 text-xs sm:text-sm font-bold transition-all min-h-[44px] ${
                            active
                              ? "bg-red-700 text-white shadow-2xs"
                              : "bg-white text-slate-800 border border-slate-200/80 hover:border-red-700 hover:text-red-700"
                          }`}
                        >
                          <span>{item.shortTitle}</span>
                          <ArrowRight className="w-4 h-4 shrink-0" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
