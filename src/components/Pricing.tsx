/**
 * Pricing — one institutional plan, everything included. The ROI calculator and
 * "blue rate" framing were removed: they lowered the premium perception. Price is
 * stated plainly; the second column lists the service commitments, not a slider.
 */
import { waLink } from "@/lib/whatsapp";

const PLAN_INCLUDES = [
  "Clientes ilimitados",
  "Agenda online con recordatorios",
  "Cobros automáticos y links de pago",
  "WhatsApp automático",
  "Tablero y reportes en vivo",
  "App móvil (iOS y Android)",
];

const SERVICE_INCLUDES = [
  "Implementación guiada (5–10 días)",
  "Migración asistida de tus datos",
  "Capacitación del equipo",
  "Soporte local en español",
  "Backups diarios automáticos",
  "Tus datos son tuyos · exportables",
];

export function Pricing() {
  return (
    <section id="precios" className="section-elev1 section-chroma section-pad border-y border-white/[0.06]">
      <div className="container-maat">
        <div className="max-w-[640px] reveal">
          <span className="eyebrow">Plan</span>
          <h2 className="mt-3 font-display text-3xl text-white md:text-4xl" style={{ fontWeight: 800, letterSpacing: "var(--tracking-h2)" }}>
            Un plan. Todo incluido. Sin sorpresas.
          </h2>
          <p className="mt-4 max-w-[520px] text-[16px] leading-7 text-slate-300">
            Sin contratos ni letra chica. La implementación y el soporte están incluidos
            en el plan. Facturación en pesos.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.05fr_1fr]">
          {/* Plan card — premium animated ring */}
          <div className="reveal">
            <div
              className="ops-card ring-anim flex h-full flex-col p-8 md:p-10"
              style={{ borderColor: "var(--violet-ring)", boxShadow: "var(--shadow-lg), var(--glow-soft)" }}
            >
              <div className="flex items-center justify-between">
                <span className="eyebrow gold-shimmer">Plan único</span>
                <span className="status-pill status-pill--ok">
                  <span className="live-ring h-1.5 w-1.5 rounded-full bg-success" />
                  Todo incluido
                </span>
              </div>

              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-display text-[60px] leading-none tracking-[-0.04em] text-white" style={{ fontWeight: 800 }}>
                  USD 59
                </span>
                <span className="text-[15px] text-slate-400">/mes</span>
              </div>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-slate-500">
                Facturación en pesos al tipo de cambio del día
              </p>

              <div className="seal-rule my-7" aria-hidden>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold-400)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2 4 7v5c0 5 3.5 8 8 10 4.5-2 8-5 8-10V7l-8-5Z" />
                </svg>
              </div>

              <ul className="space-y-3">
                {PLAN_INCLUDES.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[14.5px] text-slate-300">
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={waLink("Hola MaatWork, quiero ver una demo operativa")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-violet inline-flex h-12 flex-1 items-center justify-center rounded-full px-6 text-[15px] font-semibold text-white"
                >
                  Ver demo operativa
                </a>
                <a
                  href="#faq"
                  className="cta-ghost inline-flex h-12 flex-1 items-center justify-center rounded-full px-6 text-[15px] font-semibold text-white"
                >
                  Ver preguntas
                </a>
              </div>

              <p className="mt-5 text-center font-mono text-[10.5px] uppercase tracking-[0.1em] text-slate-500">
                Sin tarjeta · Sin contrato · Cancelás cuando quieras
              </p>
            </div>
          </div>

          {/* Service commitments */}
          <div className="reveal" style={{ transitionDelay: "100ms" }}>
            <div className="ops-card card-accent accent-emerald flex h-full flex-col p-8">
              <h3 className="font-display text-[20px] font-extrabold tracking-[-0.02em] text-white">
                El servicio, incluido en el plan
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-slate-400">
                No pagás aparte por implementar. Te dejamos operando y te acompañamos.
              </p>

              <ul className="mt-7 space-y-3.5">
                {SERVICE_INCLUDES.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[14.5px] text-slate-300">
                    <span className="signal-dot signal-dot--ok mt-1.5" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>

              <p className="mt-auto pt-7 font-mono text-[10.5px] uppercase leading-relaxed tracking-[0.08em] text-slate-500">
                Migración, capacitación y soporte sin costo adicional durante la salida en vivo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Check() {
  return (
    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-success/30 bg-success/15">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--color-success)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
}
