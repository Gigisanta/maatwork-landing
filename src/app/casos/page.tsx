import type { Metadata } from "next";
import { CASES } from "@/data/cases";
import { PageShell } from "@/components/PageShell";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PageHero, PageCTA } from "@/components/subpage";

export const metadata: Metadata = {
  title: "Casos — productos reales en producción",
  description:
    "Cuatro productos propios en producción, en industrias distintas: extintores (Varigas), obras (Infrannova), natatorios (NMS) y CRM comercial. La prueba de que construimos a medida.",
  alternates: { canonical: "/casos" },
  openGraph: {
    title: "Casos — productos reales en producción · MaatWork",
    description:
      "Varigas, Infrannova, NMS y MaatWorkCRM: productos reales en producción construidos por MaatWork para industrias argentinas.",
    url: "https://maat.work/casos",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Casos de MaatWork" }],
  },
};

export default function CasesIndexPage() {
  return (
    <PageShell>
      <Breadcrumb items={[{ name: "Casos", href: "/casos" }]} />
      <PageHero
        eyebrow="Casos"
        h1="Productos reales, en producción"
        intro="No vendemos una promesa: estos sistemas propios ya operan en producción, en industrias distintas. Esa es la prueba de que podemos construir el tuyo."
        ctaMsg="quiero contarles un proyecto"
        secondaryHref="/servicios"
        secondaryLabel="Ver servicios"
      />
      <section className="section-elev1 section-pad border-y border-white/[0.06]">
        <div className="container-maat grid gap-4 sm:grid-cols-2">
          {CASES.map((c) => (
            <a
              key={c.slug}
              href={`/casos/${c.slug}`}
              className="ops-card group flex flex-col p-7 transition-colors hover:border-violet-600/30"
            >
              <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-slate-500">{c.industry}</span>
              <h2 className="mt-2 font-display text-[21px] font-extrabold tracking-[-0.02em] text-white">{c.product}</h2>
              <p className="mt-2 flex-1 text-[14.5px] leading-relaxed text-slate-400">{c.intro}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-violet-300">
                Ver caso
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </section>
      <PageCTA title="¿Te imaginás el tuyo?" text="Contanos tu negocio y armamos una propuesta a tu medida." ctaMsg="quiero contarles un proyecto" />
    </PageShell>
  );
}
