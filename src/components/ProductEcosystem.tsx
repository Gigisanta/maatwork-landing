/**
 * ProductEcosystem — proof of real building capability, not the main offer.
 * Demoted below pricing and reframed as evidence: all serious Vercel projects
 * already published. Sober ops cards (mono initial tile, mono evidence/modules) —
 * no orbiting dots, no gradient tiles, no aurora wash.
 */
import type { CSSProperties } from "react";
import Link from "next/link";
import { PRODUCT_HIGHLIGHTS, SERIOUS_PROJECT_COUNT } from "@/data/products";
import { CardGlyph, GlyphRail } from "./Ornaments";

const ACCENTS = ["accent-cyan", "accent-violet", "accent-gold", "accent-rose", "accent-emerald"];
const MOTIFS = ["eye-of-horus", "ankh", "obelisk", "djed"];
const RAIL_PROJECTS = PRODUCT_HIGHLIGHTS.slice(0, 12);

export function ProductEcosystem() {
  return (
    <section id="ecosistema" className="section-elev2 section-chroma section-pad">
      <div className="container-maat">
        <div className="mx-auto max-w-3xl text-center reveal">
          <span className="eyebrow">Lo que ya construimos</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-display text-white text-balance sm:text-4xl">
            {SERIOUS_PROJECT_COUNT} proyectos serios publicados en Vercel.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-300 text-pretty">
            No vendemos una promesa: estos sistemas, landings y herramientas ya están online — apps
            operativas, verticales de cliente, documentación y productos internos. Entrá y miralos.
            Esa es la prueba de que podemos construir el tuyo.
          </p>
          <GlyphRail className="mx-auto mt-8 max-w-[420px]" glyphs={["eye-of-horus", "ankh", "obelisk"]} />
        </div>

        <div className="portfolio-marquee reveal mt-10" aria-hidden="true">
          <div className="portfolio-marquee__track">
            {[...RAIL_PROJECTS, ...RAIL_PROJECTS].map((project, index) => (
              <span key={`${project.name}-${index}`} className="portfolio-marquee__item">
                <span className="portfolio-marquee__dot" />
                {project.name}
              </span>
            ))}
          </div>
        </div>

        <div className="portfolio-grid mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {PRODUCT_HIGHLIGHTS.map((product, index) => (
            <article
              key={product.name}
              className={`portfolio-card ops-card card-accent ${ACCENTS[index % ACCENTS.length]} reveal flex min-h-[360px] flex-col p-6 ${index < 2 ? "xl:col-span-2" : ""}`}
              style={{ "--project-index": index, transitionDelay: `${index * 45}ms` } as CSSProperties}
            >
              <CardGlyph motif={MOTIFS[index % MOTIFS.length]} className="absolute right-3 bottom-3 h-20 w-20" o={0.06} />
              <div className="flex items-start justify-between gap-3">
                <span
                  className="icon-halo flex h-11 w-11 items-center justify-center rounded-lg border bg-bg-base font-mono text-[13px] font-bold tracking-[0.02em]"
                  style={{ borderColor: "var(--accent-ring)", color: "var(--accent)" }}
                >
                  {product.name.slice(0, 2).toUpperCase()}
                </span>
                <span className="status-pill status-pill--ok">
                  <span className="live-ring h-1.5 w-1.5 rounded-full bg-success" />
                  Vercel live
                </span>
              </div>

              <h3 className="mt-5 font-display text-[22px] font-extrabold tracking-[-0.03em] text-white">
                {product.name}
              </h3>
              <p className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.14em] text-slate-500">
                {product.label}
              </p>
              <GlyphRail className="mt-3 max-w-[180px]" glyphs={[MOTIFS[index % MOTIFS.length], "feather-of-maat"]} o={0.09} />
              <p className="mt-4 text-[14px] leading-relaxed text-slate-400">
                {product.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {product.modules.map((m) => (
                  <span key={m} className="rounded-md border border-white/[0.08] bg-white/[0.025] px-2 py-1 font-mono text-[10px] uppercase tracking-[0.04em] text-slate-300">
                    {m}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-6">
                <div className="flex flex-wrap gap-1.5">
                  {product.evidence.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border px-2 py-1 font-mono text-[10px] tracking-[0.02em]"
                      style={{ borderColor: "var(--accent-ring)", background: "var(--accent-soft)", color: "var(--accent-2)" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href={`https://${product.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir ${product.name} (${product.url}) en una pestaña nueva`}
                  className="portfolio-link group/url mt-4 inline-flex items-center gap-1 font-mono text-[11px] text-slate-500 transition-colors hover:text-violet-300"
                >
                  {product.url}
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover/url:translate-x-0.5 group-hover/url:-translate-y-0.5" aria-hidden>
                    <path d="M7 17 17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
                {product.caseSlug ? (
                  <Link
                    href={`/casos/${product.caseSlug}`}
                    className="mt-3 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-violet-300 transition-colors hover:text-violet-200"
                  >
                    Ver caso
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-9 text-center">
          <Link href="/casos" className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-violet-300 transition-colors hover:text-violet-200">
            Ver portfolio completo →
          </Link>
        </div>
      </div>
    </section>
  );
}
