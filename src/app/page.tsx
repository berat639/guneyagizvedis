import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { TreatmentsGrid } from "@/components/sections/TreatmentsGrid";
import { AboutAndTechSection } from "@/components/sections/AboutAndTechSection";
import { RichContentSection } from "@/components/sections/RichContentSection";
import { FAQPageJsonLd } from "@/components/seo/JsonLd";
import { GENERAL_FAQS } from "@/data/richContent";

export default function HomePage() {
  return (
    <>
      <FAQPageJsonLd faqs={GENERAL_FAQS} />
      <HeroSection />
      <TreatmentsGrid showFullText={false} />
      <AboutAndTechSection />
      <RichContentSection />
    </>
  );
}

