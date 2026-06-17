/**
 * ProblemSolution — the operational diagnosis. Instead of generic "pain cards",
 * the disorder is rendered as a feed of operational signals (severity dot +
 * detail + mono meta), then resolved into a single operational surface.
 */
type Signal = {
  sev: "critical" | "warning";
  title: string;
  detail: string;
  meta: string;
};

const SIGNALS: Signal[] = [
  {
    sev: "critical",
    title: "Agenda fragmentada",
    detail: "WhatsApp, papel y un Excel que ya nadie mantiene.",
    meta: "Sin fuente única",
  },
  {
    sev: "warning",
    title: "Cobros sin seguimiento",
    detail: "Cuotas vencidas y recordatorios hechos a mano.",
    meta: "Ingresos en riesgo",
  },
  {
    sev: "warning",
    title: "WhatsApp satura el día",
    detail: "Las mismas respuestas, una y otra vez.",
    meta: "Tiempo perdido",
  },
  {
    sev: "critical",
    title: "Sin visibilidad",
    detail: "No sabés qué entró ni quién dejó de venir.",
    meta: "Decisiones a ciegas",
  },
];

export function ProblemSolution() {
  return (
    <section id="operacion" className="section-base section-pad">
      <div className="container-maat">
        <div className="max-w-[640px] reveal">
          <span className="eyebrow">Diagnóstico</span>
          <h2 className="mt-3 font-display text-3xl text-white md:text-4xl" style={{ fontWeight: 800, letterSpacing: "var(--tracking-h2)" }}>
            Una operación sin sistema deja señales.
          </h2>
          <p className="mt-4 max-w-[520px] text-[16px] leading-7 text-slate-300">
            Si manejás tu negocio así, no estás solo. Pero cada día sin sistema cuesta
            tiempo, plata y clientes.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Signal feed */}
          <ul className="space-y-2.5">
            {SIGNALS.map((s, i) => (
              <li key={s.title} className="reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="signal-row">
                  <span className={`signal-dot signal-dot--${s.sev}`} aria-hidden />
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
          <div className="reveal ops-card p-7 md:p-8" style={{ transitionDelay: "120ms" }}>
            <span className="status-pill status-pill--ok">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              Resuelto
            </span>
            <h3 className="mt-4 font-display text-[22px] font-extrabold tracking-[-0.02em] text-white">
              Una sola superficie operativa.
            </h3>
            <p className="mt-2.5 text-[14.5px] leading-relaxed text-slate-300">
              MaatWork unifica agenda, cobros, clientes y recordatorios. Una fuente única,
              el estado siempre visible y la operación bajo control.
            </p>
            <a
              href="#producto"
              className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-violet-300 transition-colors hover:text-violet-200"
            >
              Ver el producto
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
