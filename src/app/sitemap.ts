import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://maat.work";
  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1, alternates: { languages: { "es-AR": `${base}/` } } },
  ];
}
