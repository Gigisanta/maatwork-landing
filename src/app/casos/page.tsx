import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { PRODUCT_HIGHLIGHTS } from "@/data/products";
import { PageShell } from "@/components/PageShell";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PageHero, PageCTA } from "@/components/subpage";

export const metadata: Metadata = {
  title: "Casos — portfolio real en producción",
  description: "Todo lo que construimos, navegable: sistemas en producción real, proyectos en desarrollo y herramientas internas de MaatWork.",
  alternates: { canonical: "/casos" },
  openGraph: {
    title: "Casos — portfolio real en producción · MaatWork",
    description: "Sistemas en producción real y proyectos en desarrollo: una muestra navegable de lo que MaatWork construye.",
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
        h1="Portfolio real, publicado en Vercel"
        intro="Todo lo que construimos, navegable: sistemas en producción real, proyectos en desarrollo y herramientas internas."
        ctaMsg="quiero contarles un proyecto"
        secondaryHref="/servicios"
        secondaryLabel="Ver servicios"
      />
      <section className="section-elev1 section-pad border-y border-white/[0.06]">
        <div className="container-maat grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {PRODUCT_HIGHLIGHTS.map((project, index) => {
            const href = project.caseSlug ? `/casos/${project.caseSlug}` : `https://${project.url}`;
            const isExternal = !project.caseSlug;

            return (
              <a
                key={project.name}
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="portfolio-card ops-card group flex min-h-[270px] flex-col p-7 transition-colors hover:border-violet-600/30"
                style={{ "--project-index": index } as CSSProperties}
              >
                <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-slate-500">{project.label}</span>
                <h2 className="mt-2 font-display text-[21px] font-extrabold tracking-[-0.02em] text-white">{project.name}</h2>
                <p className="mt-2 flex-1 text-[14.5px] leading-relaxed text-slate-400">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.modules.map((module) => (
                    <span key={module} className="rounded-md border border-white/[0.08] bg-white/[0.025] px-2 py-1 font-mono text-[10px] uppercase tracking-[0.04em] text-slate-300">
                      {module}
                    </span>
                  ))}
                </div>
                <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-violet-300">
                  {project.caseSlug ? "Ver caso" : "Abrir proyecto"}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </a>
            );
          })}
        </div>
      </section>
      <PageCTA title="¿Te imaginás el tuyo?" text="Contanos tu negocio y armamos una propuesta a tu medida." ctaMsg="quiero contarles un proyecto" />
    </PageShell>
  );
}
