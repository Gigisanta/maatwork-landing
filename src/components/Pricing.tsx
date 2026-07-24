/**
 * Pricing — sin precios de lista: todo se cotiza a medida. Presenta cómo
 * trabajamos el presupuesto (diagnóstico gratis, según alcance, sin permanencia)
 * y qué cotizamos (los dos tipos de servicio). El número sale después del
 * diagnóstico, nunca antes. Server component.
 */
import { waLink } from "@/lib/whatsapp";
import { CornerMarks, CardGlyph } from "./Ornaments";

const HOW_ITEMS = [
  "Diagnóstico gratis de 15 minutos",
  "Presupuesto claro según el alcance",
  "Sin permanencia ni letra chica",
  "Demo antes de avanzar",
];

const WHAT_ITEMS = [
  { title: "Sistemas a medida", text: "CRMs, paneles, automatización e IA y facturación." },
  { title: "Páginas web", text: "Sitios y landings rápidos, pensados para convertir." },
];

export function Pricing() {
  return (
    <section id="precios" className="section-elev1 section-chroma section-pad border-y border-white/[0.06]">
      <div className="container-maat">
        <div className="max-w-[660px] reveal">
          <span className="eyebrow">Precios</span>
          <h2 className="mt-3 font-display text-3xl text-white md:text-4xl" style={{ fontWeight: 800, letterSpacing: "var(--tracking-h2)" }}>
            Sin precios de lista. Cotización a medida.
          </h2>
          <p className="mt-4 max-w-[560px] text-[16px] leading-7 text-slate-300">
            Cada proyecto es distinto: cotizamos según lo que necesitás, con diagnóstico gratis y sin permanencia.
            El número sale después de entender tu caso, no antes.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Cómo cotizamos — card protagonista con anillo premium */}
          <div className="reveal">
            <div
              className="ops-card ring-anim relative flex h-full flex-col overflow-hidden p-8 md:p-10"
              style={{ borderColor: "var(--violet-ring)", boxShadow: "var(--shadow-lg), var(--glow-soft)" }}
            >
              <CornerMarks inset={16} />

              <div className="relative flex items-center justify-between gap-4">
                <span className="eyebrow gold-shimmer">Presupuesto a medida</span>
                <span className="status-pill status-pill--live shrink-0">
                  <span className="live-ring h-1.5 w-1.5 rounded-full bg-cyan" />
                  A cotizar
                </span>
              </div>

              <p className="relative mt-5 font-display text-[28px] leading-tight tracking-[-0.02em] text-text-primary" style={{ fontWeight: 800 }}>
                Contanos tu proyecto y te pasamos un presupuesto claro.
              </p>
              <p className="relative mt-2 font-mono text-[11.5px] uppercase tracking-[0.09em] text-slate-400">
                Facturamos en pesos al cambio del día
              </p>

              <div className="seal-rule my-7" aria-hidden>
                <svg width="13" height="16" viewBox="0 0 24 28" fill="none" stroke="var(--gold-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="7" rx="5" ry="6" />
                  <line x1="12" y1="13" x2="12" y2="26" />
                  <line x1="5" y1="17.5" x2="19" y2="17.5" />
                </svg>
              </div>

              <ul className="relative space-y-3">
                {HOW_ITEMS.map((f) => (
                  <li key={f} className="hover-lift-glow flex items-start gap-3 rounded-md text-[14.5px] text-slate-300">
                    <Check />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={waLink("Hola MaatWork, quiero pedir una cotización")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-violet hover-lift-glow press-sink inline-flex h-12 flex-1 items-center justify-center rounded-full px-6 text-[15px] font-semibold text-white"
                >
                  Pedir cotización
                </a>
                <a
                  href="#contacto"
                  className="cta-ghost hover-lift-glow press-sink inline-flex h-12 flex-1 items-center justify-center rounded-full px-6 text-[15px] font-semibold text-white"
                >
                  Hablar ahora
                </a>
              </div>

              <p className="mt-5 text-center font-mono text-[11px] uppercase tracking-[0.09em] text-slate-400">
                Sin permanencia · demo antes de avanzar · soporte local
              </p>
            </div>
          </div>

          {/* Qué cotizamos — los dos tipos de servicio */}
          <div className="reveal" style={{ transitionDelay: "100ms" }}>
            <div className="ops-card card-accent accent-emerald hover-lift-glow press-sink relative flex h-full flex-col p-8">
              <CardGlyph motif="scales-of-maat" className="absolute right-3 bottom-3 h-20 w-20" o={0.06} />
              <h3 className="font-display text-[20px] font-extrabold tracking-[-0.02em] text-white">
                Qué cotizamos
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[var(--text-secondary)]">
                Dos tipos de proyecto, uno o combinados. Siempre a medida.
              </p>

              <ul className="mt-7 space-y-5">
                {WHAT_ITEMS.map((f) => (
                  <li key={f.title} className="flex items-start gap-3">
                    <PremiumMark />
                    <div>
                      <div className="text-[15px] font-semibold text-white">{f.title}</div>
                      <div className="mt-0.5 text-[13.5px] leading-relaxed text-slate-400">{f.text}</div>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="mt-auto pt-7 font-mono text-[10.5px] uppercase leading-relaxed tracking-[0.08em] text-slate-500">
                Primero el diagnóstico. Después el número.
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

// "+" marker para los tipos de servicio — lee como opción/alcance, no bundle.
function PremiumMark() {
  return (
    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-gold-400/40 bg-gold-400/[0.12]">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--gold-400)" strokeWidth="3.5" strokeLinecap="round" aria-hidden>
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    </span>
  );
}
