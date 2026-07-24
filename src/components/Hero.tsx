import { CornerMarks } from "./Ornaments";
import { waLink } from "@/lib/whatsapp";
import { PRODUCTION_COUNT } from "@/data/portfolio";

const H1_LINE_1 = "Ordená tu negocio";
const H1_LINE_2 = "con software simple";

// Real products in production — proof chips. Monochrome: a single accent dot.
const IN_PRODUCTION: string[] = [
  "Gestión de natatorios",
  "CRM",
  "Infrannova",
  "Gestión de extintores",
];

export function Hero() {
  return (
    <section id="top" className="section-base section-chroma relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20">
      {/* Papiro atmosphere: faint gold ruled grid only — no vignette, no grain */}
      <div className="atmo" aria-hidden>
        <div className="atmo-grid" />
      </div>

      <div className="hero-halo" aria-hidden />

      <div className="container-maat relative z-10">
        {/* Briefing frame — engraved gold corner marks around the hero copy */}
        <div className="relative mx-auto max-w-[1040px] px-4 pt-9 pb-7 sm:px-6">
          <CornerMarks inset={0} />

          {/* Credibility badge — one number, the same everywhere on the site */}
          <div className="mb-7 flex justify-center">
            <div
              className="reveal inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 rounded-full border border-white/[0.10] bg-white/[0.03] px-4 py-2"
              style={{ transitionDelay: "0ms" }}
            >
              <span className="flex items-center gap-1.5">
                <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "var(--violet-500)" }} />
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--text-secondary)]">
                  {PRODUCTION_COUNT} productos en producción real
                </span>
              </span>
              <span className="hidden h-3 w-px bg-white/10 sm:block" aria-hidden />
              <span className="font-mono text-[11px] tracking-[0.04em] text-[var(--text-tertiary)]">
                Diagnóstico gratis
              </span>
              <span className="hidden h-3 w-px bg-white/10 sm:block" aria-hidden />
              <span className="font-mono text-[11px] tracking-[0.04em] text-[var(--text-tertiary)]">
                Respuesta en el día
              </span>
            </div>
          </div>

          {/* ---- H1 = la propuesta de valor (la marca vive en el navbar) ---- */}
          <h1
            className="reveal mx-auto max-w-[1000px] text-center font-display text-4xl text-text-primary text-balance sm:text-5xl lg:text-[4.25rem]"
            style={{ fontWeight: 800, letterSpacing: "var(--tracking-display)", lineHeight: 1.02, transitionDelay: "60ms" }}
          >
            <span className="line-reveal block" style={{ animationDelay: "60ms" }}>
              {H1_LINE_1}{" "}
            </span>
            <span className="line-reveal block" style={{ animationDelay: "170ms" }}>
              con <span className="hero-word hero-word--gold">software</span>{" "}
              <span className="hero-word hero-word--violet">simple</span>
            </span>
          </h1>

          <p
            className="reveal mx-auto mt-6 max-w-[680px] text-center text-base leading-7 text-[var(--text-secondary)] md:text-lg md:leading-8"
            style={{ transitionDelay: "160ms" }}
          >
            Detectamos el cuello de botella y construimos lo mínimo para que deje de romperte el día.
          </p>

          <div
            className="reveal mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ transitionDelay: "220ms" }}
          >
            <a
              href={waLink("Hola MaatWork, quiero contarles un proyecto")}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-violet hover-lift-glow press-sink group inline-flex items-center justify-center gap-2.5 rounded-full px-7 text-[15px] font-semibold tracking-[-0.01em] text-white"
              style={{ height: 54 }}
            >
              Resolver mi cuello de botella
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a
              href="#portfolio"
              className="cta-ghost hover-lift-glow press-sink inline-flex items-center justify-center gap-2 rounded-full px-7 text-[15px] font-semibold text-text-primary"
              style={{ height: 54 }}
            >
              Ver casos reales
            </a>
          </div>

          <p
            className="reveal mt-5 text-center font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--text-tertiary)]"
            style={{ transitionDelay: "280ms" }}
          >
            15 min · alcance claro · sin venta agresiva
          </p>

          {/* One proof object: real products in production, stated plainly */}
          <div
            className="reveal mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
            style={{ transitionDelay: "320ms" }}
          >
            <span className="mono-tag">En producción</span>
            {IN_PRODUCTION.map((name) => (
              <span key={name} className="flex items-center gap-1.5 font-mono text-[11px] tracking-[0.04em] text-[var(--text-secondary)]">
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--violet-500)" }} />
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* Firma de marca: el nombre explicado, en texto, sin ornamento. */}
        <div className="reveal mx-auto mt-11 flex max-w-[440px] items-center justify-center gap-3" aria-label="Maat, el principio egipcio del orden y la verdad">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-white/12" aria-hidden />
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--text-tertiary)]">
            Maat · el principio del orden
          </span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-white/12" aria-hidden />
        </div>
      </div>
    </section>
  );
}
