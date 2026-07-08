/**
 * PortfolioSection — grilla de productos reales en producción/desarrollo.
 * Filtro por estado, tarjetas con stack/módulos/métricas, link directo al producto.
 */
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { PORTFOLIO, type PortfolioItem } from "@/data/portfolio";

const FILTERS = [
  { key: "all", label: "Todos" },
  { key: "production", label: "Producción" },
  { key: "development", label: "Desarrollo" },
] as const;

type FilterKey = (typeof FILTERS)[number]["key"];

export function PortfolioSection() {
  const [filter, setFilter] = useState<FilterKey>("all");

  const items = useMemo(
    () => (filter === "all" ? PORTFOLIO : PORTFOLIO.filter((p) => p.status === filter)),
    [filter],
  );
  const productionCount = useMemo(() => PORTFOLIO.filter((p) => p.status === "production").length, []);

  return (
    <section id="portfolio" className="section-atmo section-elev1 section-chroma section-pad border-y border-white/[0.06]">
      <div className="atmo" aria-hidden>
        <div className="atmo-grid" />
        <div className="atmo-vignette" />
      </div>

      <div className="container-maat relative z-10">
        <div className="max-w-[640px] reveal">
          <span className="eyebrow">Portfolio</span>
          <h2 className="mt-3 font-display text-3xl text-white md:text-4xl" style={{ fontWeight: 800, letterSpacing: "var(--tracking-h2)" }}>
            Productos en producción.
          </h2>
          <p className="mt-4 max-w-[560px] text-[16px] leading-7 text-slate-300">
            {PORTFOLIO.length} productos construidos y operando, {productionCount} en producción real con usuarios activos.
          </p>
        </div>

        {/* Filtros */}
        <div className="reveal mt-9 flex items-center gap-1 border-b border-white/[0.06]" style={{ transitionDelay: "60ms" }}>
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className="relative px-4 py-2.5 font-mono text-[12px] uppercase tracking-[0.08em] transition-colors"
              style={{ color: filter === f.key ? "var(--gold-400)" : "var(--text-muted)" }}
            >
              {f.label}
              {filter === f.key && (
                <span
                  className="absolute inset-x-3 -bottom-px h-[2px] rounded-full"
                  style={{ background: "var(--gold-400)" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Grilla */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {items.map((item, i) => (
            <PortfolioCard key={item.slug} item={item} delay={i * 60} />
          ))}
        </div>

        {/* Cierre */}
        <div className="reveal mt-12 flex flex-col items-center gap-3 border-t border-white/[0.06] pt-9 text-center">
          <p className="font-display text-[20px] font-bold text-white">¿Tenés un proyecto en mente?</p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-violet-300 transition-colors hover:text-violet-200"
          >
            Hablemos →
          </a>
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({ item, delay }: { item: PortfolioItem; delay: number }) {
  const isProduction = item.status === "production";

  return (
    <article
      className="ops-card card-accent accent-violet hover-lift-glow press-sink group reveal flex flex-col p-6"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className={`status-pill ${isProduction ? "status-pill--ok" : ""}`}
          style={!isProduction ? { borderColor: "var(--gold-ring)", background: "var(--gold-soft)", color: "var(--gold-400)" } : undefined}
        >
          {isProduction && <span className="live-ring h-1.5 w-1.5 rounded-full bg-emerald-400" />}
          {isProduction ? "Producción" : "Desarrollo"}
        </span>
        <ProductIcon slug={item.slug} />
      </div>

      <h3 className="mt-5 font-display text-[19px] font-bold tracking-[-0.01em] text-white transition-colors duration-200 group-hover:text-[var(--accent)]">
        {item.name}
      </h3>
      <p className="mt-1 text-[13px] font-medium text-[var(--text-secondary)]">{item.tagline}</p>
      <p className="mt-3 text-[14px] leading-relaxed text-slate-400">{item.description}</p>

      {/* Badges */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {item.badges.map((b) => (
          <span
            key={b}
            className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.06em] text-slate-400"
          >
            {b}
          </span>
        ))}
      </div>

      {/* Métricas */}
      {item.metrics && item.metrics.length > 0 && (
        <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/[0.06] pt-4">
          {item.metrics.map((m) => (
            <div key={m.label}>
              <div className="font-display text-[17px] font-bold text-white">{m.value}</div>
              <div className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.06em] text-slate-500">{m.label}</div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/[0.06] pt-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.06em] text-slate-600">{item.industry}</span>
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
