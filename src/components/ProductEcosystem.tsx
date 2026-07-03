/**
 * ProductEcosystem — concise proof section.
 * Home shows the strongest projects only; /casos keeps the full portfolio.
 */
import Link from "next/link";
import { PRODUCT_HIGHLIGHTS, SERIOUS_PROJECT_COUNT } from "@/data/products";
import { GlyphRail } from "./Ornaments";

const FEATURED_PROJECTS = PRODUCT_HIGHLIGHTS.slice(0, 6);
const ACCENTS = ["accent-violet", "accent-violet", "accent-gold", "accent-cyan", "accent-rose", "accent-cyan"];

export function ProductEcosystem() {
  return (
    <section id="ecosistema" className="section-elev2 section-chroma section-pad">
      <div className="container-maat">
        <div className="mx-auto max-w-3xl text-center reveal">
          <span className="eyebrow">Portfolio</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-display text-white text-balance sm:text-4xl">
            Prueba real, en vivo.
          </h2>
          <p className="mx-auto mt-5 max-w-[620px] text-base leading-7 text-slate-300 text-pretty">
            Algunos proyectos navegables. El portfolio completo queda en /casos.
          </p>
          <GlyphRail className="mx-auto mt-7 max-w-[320px]" glyphs={["eye-of-horus", "feather-of-maat", "obelisk"]} />
        </div>

        <div className="portfolio-grid mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {FEATURED_PROJECTS.map((product, index) => (
            <article
              key={product.name}
              className={`portfolio-card ops-card card-accent ${ACCENTS[index % ACCENTS.length]} reveal flex min-h-[240px] flex-col p-6`}
              style={{ transitionDelay: `${index * 55}ms` }}
            >
              <div className="flex items-start justify-between gap-3">
                <span
                  className="icon-halo flex h-10 w-10 items-center justify-center rounded-lg border bg-bg-base font-mono text-[12px] font-bold tracking-[0.02em]"
                  style={{ borderColor: "var(--accent-ring)", color: "var(--accent)" }}
                >
                  {product.name.slice(0, 2).toUpperCase()}
                </span>
                <span className="status-pill status-pill--ok">
                  <span className="live-ring h-1.5 w-1.5 rounded-full bg-success" />
                  Live
                </span>
              </div>

              <h3 className="mt-5 font-display text-[22px] font-extrabold tracking-[-0.03em] text-white">
                {product.name}
              </h3>
              <p className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.14em] text-slate-500">
                {product.label}
              </p>
              <p className="mt-4 text-[14px] leading-relaxed text-slate-400">
                {product.description}
              </p>

              <div className="mt-auto pt-6">
                <div className="flex flex-wrap gap-1.5">
                  {product.modules.slice(0, 2).map((module) => (
                    <span key={module} className="rounded-md border border-white/[0.08] bg-white/[0.025] px-2 py-1 font-mono text-[10px] uppercase tracking-[0.04em] text-slate-300">
                      {module}
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
            Ver los {SERIOUS_PROJECT_COUNT} proyectos →
          </Link>
        </div>
      </div>
    </section>
  );
}
