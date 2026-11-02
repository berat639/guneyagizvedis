import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { CLINIC_INFO } from "@/data/clinic";
import { AssistantProvider } from "@/components/assistant/AssistantContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ClinicOrganizationJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL(CLINIC_INFO.domain),
  title: {
    default:
      "Etimesgut Diş Hekimi | Özel Güney Ağız ve Diş Sağlığı Polikliniği",
    template: "%s | Güney Ağız ve Diş Sağlığı",
  },
  description:
    "Etimesgut Topçu Mahallesi'nde diş polikliniği: kanal tedavisi, implant, çocuk diş hekimliği, zirkonyum ve protez, ortodonti, diş estetiği. Klinik içinde panoramik röntgen ve 3D tomografi.",
  keywords: [
    "etimesgut diş hekimi",
    "etimesgut diş kliniği",
    "etimesgut ağız ve diş sağlığı polikliniği",
    "güney ağız ve diş sağlığı",
    "etimesgut implant",
    "etimesgut kanal tedavisi",
    "etimesgut çocuk diş hekimi",
    "etimesgut ortodonti",
    "etimesgut zirkonyum",
    "topçu mahallesi diş hekimi",
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
      "Etimesgut Topçu Mahallesi'nde kanal tedavisi, implant, çocuk diş hekimliği, protez, ortodonti ve diş estetiği. Klinik içinde röntgen ve 3D tomografi.",
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
      <body className="font-sans antialiased min-h-screen flex flex-col bg-white text-slate-900">
        <ClinicOrganizationJsonLd />
        <AssistantProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </AssistantProvider>
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="AtnUwbyczze6jW5yg2C6Aw"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

