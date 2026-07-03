/**
 * HowItWorks — implementation process, sincroweb-inspired "De la idea al lanzamiento".
 * Four steps with a flowing connector. Each step shows timeline + deliverable.
 * Server component.
 */
import { CardGlyph, GlyphRail } from "./Ornaments";

const STEPS = [
  {
    n: "01",
    d: "30 min",
    t: "Discovery",
    desc: "Entendemos el problema, el proceso actual y qué tendría que quedar resuelto.",
    motif: "eye-of-horus", // insight / seeing the operation
  },
  {
    n: "02",
    d: "3–7 días",
    t: "Diseño + Arquitectura",
    desc: "Definimos pantallas, flujos y alcance antes de desarrollar.",
    motif: "ankh", // structure / design blueprint
  },
  {
    n: "03",
    d: "Sprints 2 sem.",
    t: "Desarrollo iterativo",
    desc: "Construimos en sprints cortos, con demos y ajustes sobre algo real.",
    motif: "djed", // stability / building
  },
  {
    n: "04",
    d: "1 semana",
    t: "Deploy + Handover",
    desc: "Deploy, documentación y handover para que el sistema quede usable.",
    motif: "sun-disk", // the launch / rising
  },
];

export function HowItWorks() {
  return (
    <section id="proceso" className="section-base section-chroma section-pad">
      <div className="container-maat">
        <div className="max-w-[640px] reveal">
          <span className="eyebrow">Proceso</span>
          <h2 className="mt-3 font-display text-3xl text-white md:text-4xl" style={{ fontWeight: 800, letterSpacing: "var(--tracking-h2)" }}>
            Cómo lo hacemos
          </h2>
          <p className="mt-4 max-w-[520px] text-[16px] leading-7 text-slate-300">
            Menos reuniones, más entregables. Cada etapa termina con algo que se puede
            revisar, usar o decidir.
          </p>
          <GlyphRail className="mt-8 max-w-[360px]" glyphs={["eye-of-horus", "ankh", "djed", "sun-disk"]} />
        </div>

        <div className="relative mt-14">
          {/* flowing connector (desktop) — a live signal moving through the steps */}
          <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[28px] hidden h-px md:block flow-line" aria-hidden />

          <ol className="relative grid gap-4 md:grid-cols-4">
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
                  <p className="mt-2 flex-1 text-[14px] leading-relaxed text-slate-400">
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
