import type { Metadata } from "next";
import "./globals.css";
import { CLINIC_INFO, OG_DEFAULTS } from "@/data/clinic";
import { AssistantProvider } from "@/components/assistant/AssistantContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ClinicOrganizationJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL(CLINIC_INFO.domain),
  title: {
    default: "Etimesgut Diş Hekimi | Güney Ağız ve Diş Sağlığı",
    template: "%s | Güney Ağız ve Diş Sağlığı",
  },
  description:
    "Etimesgut Topçu Mahallesi'nde kanal tedavisi, implant, çocuk diş hekimliği, protez, ortodonti ve diş estetiği. Röntgen ve 3D tomografi klinikte.",
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
    ...OG_DEFAULTS,
    url: CLINIC_INFO.domain,
    title: "Etimesgut Diş Hekimi | Güney Ağız ve Diş Sağlığı",
    description:
      "Etimesgut Topçu Mahallesi'nde kanal tedavisi, implant, çocuk diş hekimliği, protez, ortodonti ve diş estetiği.",
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
      <head>
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="AtnUwbyczze6jW5yg2C6Aw"
          async
        />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-white text-slate-900">
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

