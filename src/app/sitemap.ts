import type { MetadataRoute } from "next";
import { CLINIC_INFO } from "@/data/clinic";
import { TREATMENTS_DATA } from "@/data/treatments";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = CLINIC_INFO.domain;
  const lastModified = new Date(CLINIC_INFO.compliance.lastUpdatedISO);

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/hakkimizda`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tedavilerimiz`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/iletisim`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  const treatmentRoutes: MetadataRoute.Sitemap = TREATMENTS_DATA.map((item) => ({
    url: `${baseUrl}/tedavilerimiz/${item.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...treatmentRoutes];
}

