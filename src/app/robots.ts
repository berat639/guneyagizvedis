import type { MetadataRoute } from "next";
import { CLINIC_INFO } from "@/data/clinic";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${CLINIC_INFO.domain}/sitemap.xml`,
    host: CLINIC_INFO.domain,
  };
}

