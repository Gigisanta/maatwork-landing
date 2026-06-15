import { PRODUCT_HIGHLIGHTS } from "@/data/products";

export function ProductEcosystem() {
  return (
    <section id="productos" className="section-pad section-elev2 relative overflow-hidden">
      <div className="aurora-field opacity-60" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />

      <div className="container-maat relative z-10">
        <div className="mx-auto max-w-3xl text-center reveal">
          <span className="eyebrow">Ecosistema real</span>
          <h2 className="font-display mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-display text-white text-balance">
            No vendemos una promesa: mostramos productos funcionando.
          </h2>
          <p className="mt-5 text-base md:text-lg leading-8 text-slate-300 text-pretty">
            MaatWork es una fábrica de software operativa. Estos son los sistemas maduros que ya existen en el stack:
            verticales reales, módulos reales y datos de demo honestos para mostrar el producto sin inventar métricas.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {PRODUCT_HIGHLIGHTS.map((product, index) => (
            <article
              key={product.name}
              className="ecosystem-card reveal rounded-[28px] p-5 md:p-6 min-h-[420px] flex flex-col"
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${product.accent} shadow-lg shadow-black/30 flex items-center justify-center text-sm font-black text-slate-950`}>
                    {product.name.slice(0, 2)}
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-extrabold tracking-[-0.04em] text-white">
                    {product.name}
                  </h3>
                </div>
                <div className="relative h-24 w-24 rounded-full border border-white/10 bg-white/[0.03]">
                  <span className={`product-orbit-dot absolute left-1/2 top-1/2 h-2.5 w-2.5 rounded-full bg-gradient-to-br ${product.accent}`} />
                  <div className="absolute inset-6 rounded-full border border-white/10" />
                </div>
              </div>

              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                {product.label}
              </p>
              <p className="mt-5 text-[15px] leading-7 text-slate-300">
                {product.description}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-2">
                {product.modules.map((m) => (
                  <span key={m} className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-2 text-[12px] text-slate-200">
                    {m}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-7">
                <div className="mb-3 flex h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                  <div className={`product-rail-active w-3/4 rounded-full bg-gradient-to-r ${product.accent}`} />
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.evidence.map((item) => (
                    <span key={item} className="rounded-full border border-cyan-200/15 bg-cyan-200/[0.06] px-2.5 py-1 text-[11px] text-cyan-100/85">
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href={`https://${product.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir ${product.name} (${product.url}) en una pestaña nueva`}
                  className="group/url mt-4 inline-flex items-center gap-1 text-[12px] text-slate-500 transition-colors hover:text-cyan-300"
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
