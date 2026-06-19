/**
 * HowItWorks — implementation, stated soberly. Three steps with a static
 * hairline connector. No animated SVG draw, no orbiting decoration — the
 * sequence is the message: diagnóstico → configuración → salida en vivo.
 */
import { CardGlyph, GlyphRail } from "./Ornaments";

const STEPS = [
  {
    n: "01",
    d: "1–2 días",
    t: "Diagnóstico",
    desc: "Llamada de 30 minutos. Entendemos tu operación, tu flujo y qué te hace perder tiempo.",
    motif: "eye-of-horus", // insight / seeing the operation
  },
  {
    n: "02",
    d: "3–7 días",
    t: "Configuración",
    desc: "Cargamos tus datos reales y armamos tu sistema. Te lo mostramos funcionando antes de que pagues.",
    motif: "djed", // stability / structure being raised
  },
  {
    n: "03",
    d: "1–2 días",
    t: "Salida en vivo",
    desc: "Capacitamos al equipo y migramos clientes y turnos. Empezás a operar el mismo día.",
    motif: "sun-disk", // the launch / rising
  },
];

export function HowItWorks() {
  return (
    <section id="implementacion" className="section-base section-chroma section-pad">
      <div className="container-maat">
        <div className="max-w-[640px] reveal">
          <span className="eyebrow">Implementación</span>
          <h2 className="mt-3 font-display text-3xl text-white md:text-4xl" style={{ fontWeight: 800, letterSpacing: "var(--tracking-h2)" }}>
            De cero a operando en 5–10 días.
          </h2>
          <p className="mt-4 max-w-[520px] text-[16px] leading-7 text-slate-300">
            Sin proyectos de meses ni consultorías eternas. Configuración guiada,
            con tu equipo operando y soporte local.
          </p>
          <GlyphRail className="mt-8 max-w-[360px]" glyphs={["eye-of-horus", "djed", "sun-disk"]} />
        </div>

        <div className="relative mt-14">
          {/* flowing connector (desktop) — a live signal moving through the steps */}
          <div className="pointer-events-none absolute left-[16.6%] right-[16.6%] top-[28px] hidden h-px md:block flow-line" aria-hidden />

          <ol className="relative grid gap-4 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <li key={s.n} className="reveal" style={{ transitionDelay: `${i * 90}ms` }}>
                <div className="ops-card card-accent accent-violet flex h-full flex-col p-7">
                  <CardGlyph motif={s.motif} className="absolute right-3 top-3 h-14 w-14" />
                  <div className="flex items-center gap-3">
                    <span
                      className="icon-halo flex h-14 w-14 items-center justify-center rounded-full border bg-bg-base font-display text-[20px] font-extrabold tracking-[-0.02em] text-white"
                      style={{ borderColor: "var(--accent-ring)" }}
                    >
                      {s.n}
                    </span>
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-violet-300">
                      {s.d}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-[20px] font-extrabold tracking-[-0.02em] text-white">
                    {s.t}
                  </h3>
                  <GlyphRail className="mt-3 max-w-[160px]" glyphs={[s.motif, "feather-of-maat"]} o={0.1} />
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-slate-400">
                    {s.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
