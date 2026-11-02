export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const CLINIC_INFO = {
  name: "Güney Ağız ve Diş Sağlığı",
  officialTitle: "Özel Güney Ağız ve Diş Sağlığı Polikliniği",
  shortSubtitle: "Ağız ve Diş Sağlığı Polikliniği",
  domain: "https://www.guneyagizvedis.com",
  // Kendi asistan sisteminizin bağlantısını buradan değiştirebilirsiniz:
  assistantUrl: "https://asistan.guneyagizvedis.com",
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
    phoneDisplay: "(0312) 261 00 01",
    phoneHref: "tel:+903122610001",
    mobileDisplay: "0507 172 22 39",
    mobileHref: "tel:+905071722239",
    whatsappNumber: "905071722239",
    email: "bilgi@guneyagizvedis.com",
  },
  workingHours: {
    weekdaysAndSaturday: "Pzt – Cmt: 09:00 – 19:00",
    sunday: "Pazar: Kapalı",
    schemaOpeningHours: ["Mo-Sa 09:00-19:00"],
  },
  compliance: {
    lastUpdated: "02 Kasım 2026",
    lastUpdatedISO: "2026-11-02",
  },
  images: {
    logo: "/images/logo.png",
    heroRoom: "/images/klinikoda.png",
    clinicRoom2: "/images/klinikoda2.webp",
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
