import type { Metadata } from "next";
import { SERVICES } from "@/data/services";
import { PageShell } from "@/components/PageShell";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PageHero, PageCTA } from "@/components/subpage";

export const metadata: Metadata = {
  title: "Servicios — software a medida, automatización e integraciones",
  description:
    "Lo que podemos construir para tu negocio: producto base operativo, desarrollo a medida, automatizaciones e IA, integraciones y facturación ARCA/AFIP.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    title: "Servicios — software a medida, automatización e integraciones · MaatWork",
    description:
      "Producto base operativo, desarrollo a medida, automatizaciones e IA, integraciones y facturación ARCA/AFIP para PyMEs argentinas.",
    url: "https://maat.work/servicios",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Servicios de MaatWork" }],
  },
};

export default function ServicesIndexPage() {
  return (
    <PageShell>
      <Breadcrumb items={[{ name: "Servicios", href: "/servicios" }]} />
      <PageHero
        eyebrow="Servicios"
        h1="Lo que podemos construir para tu negocio"
        intro="Desde un producto listo para operar hasta software y automatizaciones hechas a tu medida. Empezás con lo que necesitás hoy y escalás cuando haga falta."
        ctaMsg="quiero contarles un proyecto"
        secondaryHref="/casos"
        secondaryLabel="Ver casos reales"
      />
      <section className="section-elev1 section-pad border-y border-white/[0.06]">
        <div className="container-maat grid gap-4 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <a
              key={s.slug}
              href={`/servicios/${s.slug}`}
              className="ops-card group flex flex-col p-7 transition-colors hover:border-violet-600/30"
            >
              <h2 className="font-display text-[20px] font-bold tracking-[-0.01em] text-white">{s.name}</h2>
              <p className="mt-2 flex-1 text-[14.5px] leading-relaxed text-slate-400">{s.intro}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-violet-300">
                Ver más
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </section>
      <PageCTA title="¿Listo para empezar?" text="Contanos qué necesitás y armamos una propuesta a tu medida." ctaMsg="quiero contarles un proyecto" />
    </PageShell>
  );
}
