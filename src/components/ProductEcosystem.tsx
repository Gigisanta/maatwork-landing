/**
 * ProductEcosystem — proof of real building capability, not the main offer.
 * Demoted below pricing and reframed as evidence: four systems already in
 * production. Sober ops cards (mono initial tile, mono evidence/modules) —
 * no orbiting dots, no gradient tiles, no aurora wash.
 */
import { PRODUCT_HIGHLIGHTS } from "@/data/products";

// Color-key each product to its showcase accent (NMS·cyan, CRM·violet, …).
const ACCENTS = ["accent-cyan", "accent-violet", "accent-gold", "accent-rose"];

export function ProductEcosystem() {
  return (
    <section id="ecosistema" className="section-elev2 section-chroma section-pad">
      <div className="container-maat">
        <div className="mx-auto max-w-3xl text-center reveal">
          <span className="eyebrow">Ecosistema operativo</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-display text-white text-balance sm:text-4xl">
            Prueba de construcción real.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-300 text-pretty">
            MaatWork es una fábrica de software con productos en producción. No vendemos una
            promesa: estos sistemas ya operan, con datos demo honestos para mostrar el producto
            sin inventar métricas.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {PRODUCT_HIGHLIGHTS.map((product, index) => (
            <article
              key={product.name}
              className={`ops-card card-accent ${ACCENTS[index % ACCENTS.length]} reveal flex min-h-[420px] flex-col p-6`}
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <div className="flex items-start justify-between gap-3">
                <span
                  className="icon-halo flex h-11 w-11 items-center justify-center rounded-lg border bg-bg-base font-mono text-[13px] font-bold tracking-[0.02em]"
                  style={{ borderColor: "var(--accent-ring)", color: "var(--accent)" }}
                >
                  {product.name.slice(0, 2).toUpperCase()}
                </span>
                <span className="status-pill status-pill--ok">
                  <span className="live-ring h-1.5 w-1.5 rounded-full bg-success" />
                  En producción
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
                  className="group/url mt-4 inline-flex items-center gap-1 font-mono text-[11px] text-slate-500 transition-colors hover:text-violet-300"
                >
                  {product.url}
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover/url:translate-x-0.5 group-hover/url:-translate-y-0.5" aria-hidden>
                    <path d="M7 17 17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
