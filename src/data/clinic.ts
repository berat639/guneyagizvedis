export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const CLINIC_INFO = {
  name: "Güney Ağız ve Diş Sağlığı",
  officialTitle: "Özel Güney Ağız ve Diş Sağlığı Polikliniği",
  shortSubtitle: "Ağız ve Diş Sağlığı Polikliniği",
  domain:
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.guneyagizvedis.com",
  // Kendi asistan sisteminizin bağlantısını .env veya buradan değiştirebilirsiniz:
  assistantUrl:
    process.env.NEXT_PUBLIC_ASSISTANT_URL || "https://mrys.guneyagizvedis.com",
  address: {
    street: "Topçu Mahallesi 1512. Cadde No:52",
    district: "Etimesgut",
    city: "Ankara",
    postalCode: "06796",
    country: "Türkiye",
    full: "Topçu Mahallesi 1512. Cadde No:52 Etimesgut, Ankara, Türkiye 06796",
    short: "Topçu Mah. 1512. Cad. No:52 Etimesgut / Ankara",
    coordinates: {
      lat: 39.9562,
      lng: 32.6684,
    },
    googleMapsEmbedUrl:
      "https://www.google.com/maps?q=Top%C3%A7u+Mahallesi+1512.+Cadde+No:52+Etimesgut+Ankara&output=embed",
    googleMapsDirectionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Top%C3%A7u+Mahallesi+1512.+Cadde+No:52+Etimesgut+Ankara",
  },
  contact: {
    email:
      process.env.NEXT_PUBLIC_CONTACT_EMAIL || "incecamberat@gmail.com",
  },
  compliance: {
    lastUpdated: "02 Kasım 2026",
    lastUpdatedISO: "2026-11-02",
  },
  images: {
    logo: "/images/logo.png",
    heroRoom: "/images/klinikoda.png",
    clinicRoom2: "/images/klinikoda2.webp",
    clinicRoom3: "/images/klinik3.webp",
    tomography: "/images/tomografi.webp",
    entrance: "/images/giris.webp",
  },
};

export const MAIN_NAVIGATION: NavItem[] = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Tedavilerimiz", href: "/tedavilerimiz" },
  { label: "İletişim", href: "/iletisim" },
];
