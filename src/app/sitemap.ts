import type { MetadataRoute } from "next";
import { SERVICES } from "@/data/services";
import { CASES } from "@/data/cases";
import { INDUSTRIES } from "@/data/industries";
import { POSTS } from "@/data/posts";
import { SOURCE_PAGES } from "@/data/source-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://maat.work";
  const now = new Date();

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1, alternates: { languages: { "es-AR": `${base}/` } } },
    { url: `${base}/servicios`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/casos`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/soluciones`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    ...SOURCE_PAGES.map((page) => ({
      url: `${base}/${page.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.92,
    })),
    ...SERVICES.map((s) => ({
      url: `${base}/servicios/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...INDUSTRIES.map((i) => ({
      url: `${base}/soluciones/${i.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...CASES.map((c) => ({
      url: `${base}/casos/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...POSTS.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
