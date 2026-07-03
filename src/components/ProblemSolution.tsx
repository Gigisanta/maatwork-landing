/**
 * ProblemSolution — the operational diagnosis. Instead of generic "pain cards",
 * the disorder is rendered as a feed of operational signals (severity dot +
 * detail + mono meta), then resolved into a small set of outcome cards plus the
 * main operational-surface promise.
 */
import { GlyphRail } from "./Ornaments";

type Signal = {
  sev: "critical" | "warning";
  title: string;
  detail: string;
  meta: string;
};

type Outcome = {
  title: string;
  detail: string;
  metric: string;
  accent: "accent-violet" | "accent-gold" | "accent-cyan";
};

const SIGNALS: Signal[] = [
  {
    sev: "critical",
    title: "Todo vive en WhatsApp",
    detail: "Pedidos, turnos y reclamos mezclados.",
    meta: "Caos diario",
  },
  {
    sev: "warning",
    title: "Excel ya no alcanza",
    detail: "Nadie sabe cuál es la versión buena.",
    meta: "Sin control",
  },
  {
    sev: "warning",
    title: "Todo depende de vos",
    detail: "Si no respondés, la operación se frena.",
    meta: "Cuello de botella",
  },
];

const OUTCOMES: Outcome[] = [
  {
    title: "Un solo panel",
    detail: "Clientes, tareas y estado claro.",
    metric: "Orden",
    accent: "accent-violet",
  },
  {
    title: "Menos tareas manuales",
    detail: "Avisos, cobros y respuestas automáticas.",
    metric: "Automatización",
    accent: "accent-gold",
  },
  {
    title: "Mejores decisiones",
    detail: "Números visibles sin pedir reportes.",
    metric: "Control",
    accent: "accent-cyan",
  },
];

export function ProblemSolution() {
  return (
    <section id="operacion" className="section-base section-chroma section-pad">
      <div className="container-maat">
        <div className="max-w-[640px] reveal">
          <span className="eyebrow">Diagnóstico</span>
          <h2 className="mt-3 font-display text-3xl text-white md:text-4xl" style={{ fontWeight: 800, letterSpacing: "var(--tracking-h2)" }}>
            Detectamos qué te está frenando.
          </h2>
          <p className="mt-4 max-w-[520px] text-[16px] leading-7 text-slate-300">
            No rediseñamos tu empresa entera: atacamos el bloqueo que más tiempo te roba.
          </p>
          <GlyphRail className="mt-8 max-w-[360px]" glyphs={["eye-of-horus", "scales-of-maat", "ankh"]} />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Signal feed */}
          <ul className="space-y-2.5">
            {SIGNALS.map((s, i) => (
              <li key={s.title} className="reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="signal-row">
                  <span className={`signal-dot signal-dot--${s.sev} dot-pulse`} aria-hidden />
                  <div className="min-w-0 flex-1">
                    <p className="text-[15px] font-semibold text-white">{s.title}</p>
                    <p className="mt-0.5 truncate text-[13.5px] text-slate-400">{s.detail}</p>
                  </div>
                  <span className="hidden shrink-0 font-mono text-[10px] uppercase tracking-[0.1em] text-slate-500 sm:inline">
                    {s.meta}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          {/* Resolved state */}
          <div className="space-y-3">
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {OUTCOMES.map((o, i) => (
                <div
                  key={o.title}
                  className={`reveal ops-card card-accent ${o.accent} p-4`}
                  style={{ transitionDelay: `${120 + i * 60}ms` }}
                >
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.1em] text-slate-500">
                    {o.metric}
                  </span>
                  <h3 className="mt-2 font-display text-[15px] font-extrabold tracking-[-0.02em] text-white">
                    {o.title}
                  </h3>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-slate-400">
                    {o.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="reveal ops-card card-accent accent-emerald p-7 md:p-8" style={{ transitionDelay: "300ms" }}>
              <span className="status-pill status-pill--ok">
                <span className="live-ring h-1.5 w-1.5 rounded-full bg-success" />
                Resuelto
              </span>
              <GlyphRail className="mt-5 max-w-[200px]" glyphs={["scales-of-maat", "feather-of-maat"]} o={0.1} />
              <h3 className="mt-4 font-display text-[22px] font-extrabold tracking-[-0.02em] text-white">
                Lo hacemos usable.
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-slate-300">
                Un flujo claro, medible y mantenible. Nada de pantallas de relleno.
              </p>
              <a
                href="#servicios"
                className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-violet-300 transition-colors hover:text-violet-200"
              >
                Ver opciones
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
