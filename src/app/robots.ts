import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://maatwork.com.ar/sitemap.xml",
    host: "https://maatwork.com.ar",
  };
}
