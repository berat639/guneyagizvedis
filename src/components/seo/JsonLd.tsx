import React from "react";
import { CLINIC_INFO } from "@/data/clinic";

interface FAQItem {
  question: string;
  answer: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function ClinicOrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Dentist", "MedicalClinic", "LocalBusiness"],
    "@id": `${CLINIC_INFO.domain}/#clinic`,
    name: CLINIC_INFO.officialTitle,
    alternateName: CLINIC_INFO.name,
    url: CLINIC_INFO.domain,
    logo: `${CLINIC_INFO.domain}${CLINIC_INFO.images.logo}`,
    image: [
      `${CLINIC_INFO.domain}${CLINIC_INFO.images.entrance}`,
      `${CLINIC_INFO.domain}${CLINIC_INFO.images.heroRoom}`,
      `${CLINIC_INFO.domain}${CLINIC_INFO.images.clinicRoom2}`,
      `${CLINIC_INFO.domain}${CLINIC_INFO.images.clinicRoom3}`,
      `${CLINIC_INFO.domain}${CLINIC_INFO.images.tomography}`,
    ],
    email: CLINIC_INFO.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: CLINIC_INFO.address.street,
      addressLocality: CLINIC_INFO.address.district,
      addressRegion: CLINIC_INFO.address.city,
      postalCode: CLINIC_INFO.address.postalCode,
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: CLINIC_INFO.address.coordinates.lat,
      longitude: CLINIC_INFO.address.coordinates.lng,
    },
    medicalSpecialty: [
      "Dentistry",
      "Endodontics",
      "Orthodontics",
      "PediatricDentistry",
      "Prosthodontics",
      "OralSurgery",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQPageJsonLd({ faqs }: { faqs: FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function MedicalWebPageJsonLd({
  title,
  description,
  slug,
  lastReviewed,
}: {
  title: string;
  description: string;
  slug: string;
  lastReviewed: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: title,
    description,
    url: `${CLINIC_INFO.domain}/tedavilerimiz/${slug}`,
    lastReviewed,
    inLanguage: "tr-TR",
    about: {
      "@type": "MedicalProcedure",
      name: title,
      description,
    },
    publisher: {
      "@type": "Dentist",
      name: CLINIC_INFO.officialTitle,
      url: CLINIC_INFO.domain,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

