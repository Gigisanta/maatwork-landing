/**
 * PortfolioSection — solo productos en producción real (el único número de
 * prueba del sitio), separados en dos grupos: sistemas de gestión y webs.
 * Los proyectos en desarrollo viven en /casos: acá se muestra evidencia,
 * no work-in-progress. Server component (sin filtros).
 */
import Link from "next/link";
import { waLink } from "@/lib/whatsapp";
import { PRODUCTION_ITEMS, PRODUCTION_COUNT, type PortfolioItem } from "@/data/portfolio";

const GESTION = PRODUCTION_ITEMS.filter((p) => p.category === "gestion");
const WEBS = PRODUCTION_ITEMS.filter((p) => p.category === "web");

function GroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="reveal mt-12 flex items-center gap-4 first:mt-10">
      <span className="font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--text-tertiary)]">
        {children}
      </span>
      <span className="h-px flex-1 bg-gradient-to-r from-white/12 to-transparent" aria-hidden />
    </div>
  );
}

export function PortfolioSection() {
  return (
    <section id="portfolio" className="section-atmo section-elev1 section-chroma section-pad border-y border-white/[0.06]">
      <div className="atmo" aria-hidden>
        <div className="atmo-grid" />
      </div>

      <div className="container-maat relative z-10">
        <div className="max-w-[640px] reveal">
          <span className="eyebrow">Casos reales</span>
          <h2 className="mt-3 font-display text-3xl text-text-primary md:text-4xl" style={{ fontWeight: 800, letterSpacing: "var(--tracking-h2)" }}>
            {PRODUCTION_COUNT} productos en producción, operando hoy.
          </h2>
          <p className="mt-4 max-w-[560px] text-[16px] leading-7 text-[var(--text-secondary)]">
            No son mockups: son sistemas y webs con usuarios reales, navegables ahora mismo.
            Entrá y miralos funcionando.
          </p>
        </div>

        {/* Grupo 1 — Sistemas de gestión */}
        <GroupLabel>Sistemas de gestión</GroupLabel>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {GESTION.map((item, i) => (
            <PortfolioCard key={item.slug} item={item} delay={i * 60} />
          ))}
        </div>

        {/* Grupo 2 — Webs & plataformas */}
        <GroupLabel>Webs &amp; plataformas</GroupLabel>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {WEBS.map((item, i) => (
            <PortfolioCard key={item.slug} item={item} delay={i * 60} />
          ))}
        </div>

        {/* Cierre — sin salir del scroll: CTA directo por WhatsApp */}
        <div className="reveal mt-12 flex flex-col items-center gap-3 border-t border-white/[0.06] pt-9 text-center">
          <a
            href={waLink("Hola MaatWork, quiero un sistema o web como los de producción")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--text-tertiary)] transition-colors hover:text-text-primary"
          >
            ¿Querés uno así para tu negocio? Contanos tu proyecto →
          </a>
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({ item, delay }: { item: PortfolioItem; delay: number }) {
  return (
    <article
      className="ops-card card-accent accent-violet hover-lift-glow press-sink group reveal flex flex-col p-6"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="status-pill status-pill--ok">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--violet-500)" }} />
          En producción
        </span>
        <ProductIcon slug={item.slug} />
      </div>

      <h3 className="mt-5 font-display text-[19px] font-bold tracking-[-0.01em] text-text-primary transition-colors duration-200 group-hover:text-[var(--accent)]">
        {item.name}
      </h3>
      <p className="mt-1 text-[13px] font-medium text-[var(--text-secondary)]">{item.tagline}</p>
      <p className="mt-3 text-[14px] leading-relaxed text-[var(--text-tertiary)]">{item.description}</p>

      {/* Badges */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {item.badges.map((b) => (
          <span
            key={b}
            className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.06em] text-[var(--text-tertiary)]"
          >
            {b}
          </span>
        ))}
      </div>

      {/* Métricas de negocio (solo si existen — nunca métricas técnicas) */}
      {item.metrics && item.metrics.length > 0 && (
        <div className="mt-4 grid grid-cols-2 gap-2 border-t border-white/[0.06] pt-4">
          {item.metrics.map((m) => (
            <div key={m.label}>
              <div className="font-display text-[17px] font-bold text-text-primary">{m.value}</div>
              <div className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.06em] text-[var(--text-muted)]">{m.label}</div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/[0.06] pt-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.06em] text-[var(--text-muted)]">{item.industry}</span>
        <Link
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.08em] transition-colors"
          style={{ color: "var(--accent)" }}
        >
          Ver producto
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </Link>
      </div>
    </article>
  );
}

function ProductIcon({ slug }: { slug: string }) {
  return (
    <span
      className="icon-halo flex h-9 w-9 items-center justify-center rounded-lg border transition-transform duration-200 group-hover:scale-105"
      style={{ borderColor: "var(--accent-ring)", background: "var(--accent-soft)", color: "var(--accent)" }}
      aria-hidden
    >
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {slug === "maatwork-docs" || slug === "aduana-docs" ? (
          <>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
          </>
        ) : (
          <>
            <rect x="3" y="4" width="18" height="14" rx="2" />
            <line x1="3" y1="9" x2="21" y2="9" />
            <line x1="7" y1="14" x2="12" y2="14" />
          </>
        )}
      </svg>
    </span>
  );
}
