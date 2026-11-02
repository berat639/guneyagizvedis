import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  ScanLine,
  CheckCircle2,
  Building2,
  Target,
  Eye,
  HeartHandshake,
  Sparkles,
} from "lucide-react";
import { CLINIC_INFO, OG_DEFAULTS } from "@/data/clinic";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

const TITLE = "Hakkımızda | Güney Ağız ve Diş Sağlığı Etimesgut";
const DESCRIPTION =
  "Etimesgut Topçu Mahallesi'ndeki polikliniğimiz: tedavi alanları, klinik içinde röntgen ve 3D tomografi, sterilizasyon ve tedavi ilkelerimiz.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: "/hakkimizda",
  },
  openGraph: {
    ...OG_DEFAULTS,
    url: `${CLINIC_INFO.domain}/hakkimizda`,
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function AboutPage() {
  const clinicSpaces = [
    {
      title: "Özel Güney Ağız ve Diş Sağlığı Polikliniği",
      subtitle: "Etimesgut / Ankara",
      description:
        "Modern tıbbın gereksinimleri ve hasta odaklı yaklaşım prensibiyle kurulan polikliniğimiz, her yaş grubundan hastamıza konforlu bir muayene ve tedavi ortamı sunmaktadır.",
      image: CLINIC_INFO.images.entrance,
      alt: "Özel Güney Ağız ve Diş Sağlığı Polikliniği Dış Cephe Görünümü",
    },
    {
      title: "Muayene ve Tedavi Odalarımız",
      subtitle: "Gün ışığı alan, ferah çalışma alanı",
      description:
        "Muayene, dolgu, kanal tedavisi ve diş taşı temizliği gibi rutin işlemler; her hasta sonrası dezenfekte edilen ünitelerde yapılır.",
      image: CLINIC_INFO.images.heroRoom,
      alt: "Etimesgut Güney Ağız ve Diş Sağlığı Polikliniği diş tedavi ünitesi",
    },
    {
      title: "Cam Bölmeli Tedavi Alanı",
      subtitle: "Mahremiyet ve hijyen",
      description:
        "Cam bölmeli odalar, tedavi sırasında hasta mahremiyetini korurken alanların ayrı ayrı temizlenip dezenfekte edilmesini kolaylaştırır.",
      image: CLINIC_INFO.images.clinicRoom2,
      alt: "Cam bölmeli diş tedavi odası, Güney Ağız ve Diş Sağlığı Etimesgut",
    },
    {
      title: "Çocuk ve Yetişkin Hastalar İçin Tedavi Alanı",
      subtitle: "Geniş ve rahat ünite",
      description:
        "Ebeveynin çocuğunun yanında kalabileceği genişlikte tasarlanan alan, uzun süren protez ve estetik seanslarında da rahatlık sağlar.",
      image: CLINIC_INFO.images.clinicRoom3,
      alt: "Geniş diş tedavi odası, Güney Ağız ve Diş Sağlığı Etimesgut",
    },
    {
      title: "Panoramik Röntgen ve 3D Dental Tomografi",
      subtitle: "Klinik içinde görüntüleme",
      description:
        "Röntgen ve tomografi çekimi klinik içinde yapıldığı için başka bir merkeze gitmeniz gerekmez; implant, gömülü diş ve kanal tedavisi planlaması aynı gün değerlendirilebilir.",
      image: CLINIC_INFO.images.tomography,
      alt: "Güney Ağız ve Diş Sağlığı 3D Dental Tomografi ve Panoramik Röntgen Cihazı",
    },
  ];

  const sterilizationItems = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-red-700" />,
      title: "Otoklav Sterilizasyonu",
      text: "Tekrar kullanılan tüm el aletleri temizlendikten sonra paketlenir ve otoklavda sterilize edilir. Paketler hastanın önünde açılır.",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-red-700" />,
      title: "Tek Kullanımlık (Disposable) Ürünler",
      text: "Tedavi sırasında kullanılan sarf malzemelerde (enjektör, bardak, hasta örtüsü, aspiratör uçları vb.) tamamen tek kullanımlık ürünler tercih edilmekte ve her hasta sonrasında imha edilmektedir.",
    },
    {
      icon: <ScanLine className="w-6 h-6 text-red-700" />,
      title: "Dijital Tanı ve Radyolojik Planlama",
      text: "3 boyutlu dental tomografi ve düşük doz dijital panoramik röntgen sistemimizle çene ve diş anatomisi detaylı biçimde analiz edilerek kişiye özel tedavi planı oluşturulmaktadır.",
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-red-700" />,
      title: "Koruyucu ve Hasta Odaklı Yaklaşım",
      text: "Tedavi anlayışımızın merkezinde doğal diş dokusunu korumak, hastalarımızı tedavi aşamaları hakkında şeffaf biçimde bilgilendirmek ve uzun vadeli ağız sağlığını desteklemek yer alır.",
    },
  ];

  return (
    <div className="bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", url: CLINIC_INFO.domain },
          { name: "Hakkımızda", url: `${CLINIC_INFO.domain}/hakkimizda` },
        ]}
      />

      {/* Page Hero Banner */}
      <section className="bg-gradient-to-b from-rose-50/50 via-slate-50/60 to-white py-10 sm:py-14 lg:py-16 border-b border-slate-200/70">
        <div className="w-full px-4 sm:px-10 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-rose-50 border border-rose-200 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-red-800">
                <Building2 className="w-3.5 h-3.5 text-red-700" />
                <span>HAKKIMIZDA</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {CLINIC_INFO.officialTitle}
              </h1>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Ankara Etimesgut&apos;ta modern diş hekimliğinin gereksinimleri ve
                hasta odaklı yaklaşım prensibiyle kurulan{" "}
                <strong>{CLINIC_INFO.officialTitle}</strong>; çocuk diş
                hekimliğinden (pedodonti) implanta, endodontiden (kanal tedavisi)
                ortodonti, protez ve estetik diş hekimliğine kadar geniş bir
                yelpazede tanı ve tedavi hizmeti sunmaktadır.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Muayenede gerekli görülen panoramik röntgen ve 3D dental
                tomografi çekimleri klinik içinde yapılır; tedavi seçenekleri,
                seans sayısı ve süreç muayene sonrasında size açıkça anlatılır.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={CLINIC_INFO.assistantUrl}
                  className="inline-flex items-center gap-2 rounded-full bg-red-700 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-red-800 transition-colors min-h-[44px]"
                >
                  <span>Randevu & Bilgi Al</span>
                </a>
                <Link
                  href="/tedavilerimiz"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-slate-300 bg-white px-5 py-3 text-xs sm:text-sm font-bold text-slate-900 hover:border-red-700 hover:text-red-700 transition-colors min-h-[44px]"
                >
                  <span>Tedavilerimizi İnceleyin</span>
                </Link>
              </div>
            </div>

            {/* Vizyon & Misyon Cards (5 Cols) */}
            <div className="lg:col-span-5 space-y-5">
              <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-7 shadow-2xs space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-50 text-red-700">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h2 className="text-lg font-extrabold text-slate-900">
                    Vizyonumuz
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Gelişen dental teknolojileri yakından takip eden, koruyucu
                  hekimlik bilincini destekleyen ve etik değerlerden ödün
                  vermeden bilimsel standartlarda ağız ve diş sağlığı hizmeti
                  sunan örnek bir poliklinik olmaktır.
                </p>
              </div>

              <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-7 shadow-2xs space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-50 text-red-700">
                    <Target className="w-5 h-5" />
                  </div>
                  <h2 className="text-lg font-extrabold text-slate-900">
                    Misyonumuz
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Güncel tanı ve tedavi yöntemlerini modern teknolojiyle
                  birleştirerek hastalarımızın fonksiyonel ve estetik
                  ihtiyaçlarına kişiye özel çözümler üretmek; steril, şeffaf ve
                  güvenli bir klinik ortam sağlamaktır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sterilizasyon ve Hijyen Politikamız */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="w-full px-4 sm:px-10 lg:px-16 xl:px-24">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-extrabold uppercase tracking-wider text-red-700">
              STERİLİZASYON & KLİNİK STANDARTLARIMIZ
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Sterilizasyon, Hijyen ve Tedavi İlkelerimiz
            </h2>
            <p className="text-sm sm:text-base text-slate-700 mt-2">
              Ağız ve diş sağlığı uygulamalarında en önemli önceliğimiz,
              hastalarımızın ve çalışanlarımızın sağlığını korumak için eksiksiz
              bir enfeksiyon kontrol zinciri oluşturmaktır.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {sterilizationItems.map((val, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-slate-200/90 bg-slate-50/50 p-6 sm:p-8 flex items-start gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white border border-rose-100 shadow-2xs">
                  {val.icon}
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 mt-2 leading-relaxed">
                    {val.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kliniğimizden Görünümler (2x2 Real Photos) */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50/80 border-t border-slate-200/80">
        <div className="w-full px-4 sm:px-10 lg:px-16 xl:px-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-red-700 mb-1.5">
                <Sparkles className="w-4 h-4" />
                <span>KLİNİĞİMİZDEN GÖRÜNÜMLER</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Kliniğimiz ve Görüntüleme Altyapımız
              </h2>
              <p className="text-sm sm:text-base text-slate-700 mt-2">
                Topçu Mahallesi&apos;ndeki polikliniğimizin tedavi alanları ve
                klinik içinde bulunan röntgen/tomografi cihazı.
              </p>
            </div>
            <Link
              href="/tedavilerimiz"
              className="py-2 text-xs sm:text-sm font-extrabold text-red-700 hover:text-red-800 shrink-0 min-h-[44px] flex items-center"
            >
              Tedavi Branşlarımızı İnceleyin →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-7 items-stretch">
            {clinicSpaces.map((space, idx) => (
              <div
                key={idx}
                className={`${
                  idx < 2 ? "md:col-span-3" : "md:col-span-2"
                } rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-2xs flex flex-col justify-between`}
              >
                <div className="relative h-64 sm:h-80 w-full bg-slate-100">
                  <Image
                    src={space.image}
                    alt={space.alt}
                    fill
                    quality={75}
                    sizes={
                      idx < 2
                        ? "(max-width: 768px) 100vw, 50vw"
                        : "(max-width: 768px) 100vw, 33vw"
                    }
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-red-700">
                      {space.subtitle}
                    </span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
                      {space.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 mt-2 leading-relaxed">
                      {space.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
