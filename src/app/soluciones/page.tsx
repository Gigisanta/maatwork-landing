import type { Metadata } from "next";
import { INDUSTRIES } from "@/data/industries";
import { PageShell } from "@/components/PageShell";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PageHero, PageCTA } from "@/components/subpage";

export const metadata: Metadata = {
  title: "Soluciones por industria — software a medida",
  description:
    "Software a medida por industria: extintores, natatorios, obras, gimnasios, consultorios y logística. Construido para tu operación, con productos ya en producción.",
  alternates: { canonical: "/soluciones" },
  openGraph: {
    title: "Soluciones por industria — software a medida · MaatWork",
    description:
      "Software a medida por industria para extintores, natatorios, obras, gimnasios, consultorios y logística, con productos reales en producción.",
    url: "https://maat.work/soluciones",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Soluciones de MaatWork" }],
  },
};

export default function SolutionsIndexPage() {
  return (
    <PageShell>
      <Breadcrumb items={[{ name: "Soluciones", href: "/soluciones" }]} />
      <PageHero
        eyebrow="Soluciones"
        h1="Software a medida para tu industria"
        intro="Cada negocio tiene su proceso. Construimos el software para el tuyo — con sistemas ya operando en producción en industrias distintas."
        ctaMsg="quiero contarles un proyecto"
        secondaryHref="/casos"
        secondaryLabel="Ver casos reales"
      />
      <section className="section-elev1 section-pad border-y border-white/[0.06]">
        <div className="container-maat grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((i) => (
            <a
              key={i.slug}
              href={`/soluciones/${i.slug}`}
              className="ops-card group flex flex-col p-6 transition-colors hover:border-violet-600/30"
            >
              <h2 className="font-display text-[18px] font-bold tracking-[-0.01em] text-white">{i.name}</h2>
              <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-slate-400">{i.intro}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.08em] text-violet-300">
                Ver solución
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </section>
      <PageCTA title="¿No ves tu industria?" text="Construimos a medida para cualquier negocio. Contanos el tuyo." ctaMsg="quiero contarles un proyecto" />
    </PageShell>
  );
}
