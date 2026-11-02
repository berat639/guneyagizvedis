import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CLINIC_INFO } from "@/data/clinic";
import { AssistantProvider } from "@/components/assistant/AssistantContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ClinicOrganizationJsonLd } from "@/components/seo/JsonLd";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(CLINIC_INFO.domain),
  title: {
    default:
      "Özel Güney Ağız ve Diş Sağlığı Polikliniği | Etimesgut Ankara Diş Kliniği",
    template: "%s | Güney Ağız ve Diş Sağlığı",
  },
  description:
    "Ankara Etimesgut Topçu Mahallesi'nde hizmet veren Özel Güney Ağız ve Diş Sağlığı Polikliniği; Endodonti (Kanal Tedavisi), İmplant, Pedodonti, Protez, Ortodonti ve Diş Estetiği alanlarında bilgilendirme ve tanı hizmetleri.",
  keywords: [
    "güney ağız ve diş sağlığı",
    "özel güney ağız ve diş sağlığı polikliniği",
    "etimesgut diş kliniği",
    "etimesgut ağız ve diş sağlığı",
    "ankara diş polikliniği",
    "endodonti kanal tedavisi",
    "implant tedavisi etimesgut",
    "pedodonti çocuk diş hekimliği",
    "protez tedavisi",
    "ortodonti",
    "diş estetiği",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: CLINIC_INFO.domain,
    siteName: CLINIC_INFO.officialTitle,
    title:
      "Özel Güney Ağız ve Diş Sağlığı Polikliniği | Etimesgut / Ankara",
    description:
      "Etimesgut'ta modern 3D dental tomografi altyapısı, steril muayene üniteleri ve uzman diş hekimi kadrosuyla ağız ve diş sağlığı hizmetleri.",
    images: [
      {
        url: CLINIC_INFO.images.heroRoom,
        width: 1200,
        height: 630,
        alt: CLINIC_INFO.officialTitle,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${jakarta.className} min-h-screen flex flex-col bg-white text-slate-900`}>
        <ClinicOrganizationJsonLd />
        <AssistantProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </AssistantProvider>
      </body>
    </html>
  );
}

