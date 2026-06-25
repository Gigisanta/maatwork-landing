import type { Metadata } from "next";
import { POSTS } from "@/data/posts";
import { PageShell } from "@/components/PageShell";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PageHero, PageCTA } from "@/components/subpage";

export const metadata: Metadata = {
  title: "Blog — software a medida y automatización",
  description:
    "Notas sobre software a medida, automatización de procesos, cobros y WhatsApp para PyMEs en Argentina.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — software a medida y automatización · MaatWork",
    description:
      "Notas prácticas sobre software a medida, automatización de procesos, cobros y WhatsApp para PyMEs en Argentina.",
    url: "https://maat.work/blog",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Blog de MaatWork" }],
  },
};

export default function BlogIndexPage() {
  const posts = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <PageShell>
      <Breadcrumb items={[{ name: "Blog", href: "/blog" }]} />
      <PageHero
        eyebrow="Blog"
        h1="Software a medida y automatización, sin vueltas"
        intro="Notas prácticas sobre cómo ordenar y automatizar la operación de tu negocio en Argentina."
        ctaMsg="quiero contarles un proyecto"
        secondaryHref="/servicios"
        secondaryLabel="Ver servicios"
      />
      <section className="section-elev1 section-pad border-y border-white/[0.06]">
        <div className="container-maat grid gap-4 sm:grid-cols-2">
          {posts.map((p) => (
            <a
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="ops-card group flex flex-col p-7 transition-colors hover:border-violet-600/30"
            >
              <h2 className="font-display text-[19px] font-bold tracking-[-0.01em] text-white">{p.title}</h2>
              <p className="mt-2 flex-1 text-[14px] leading-relaxed text-slate-400">{p.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-violet-300">
                Leer
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </section>
      <PageCTA title="¿Hablamos de tu proyecto?" ctaMsg="quiero contarles un proyecto" />
    </PageShell>
  );
}
