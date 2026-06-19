/**
 * About — confianza antes del cierre. Founder visible (cara y nombre reales) +
 * garantías concretas que bajan el riesgo de contratar a un estudio. Datos
 * verificables (Giolivo Santarelli, LinkedIn real). Server component.
 */
import { CornerMarks, CardGlyph, GlyphRail } from "./Ornaments";

const GUARANTEES = [
  "El código y los datos son tuyos",
  "Sin permanencia ni contratos eternos",
  "Pagás por etapas: cada pago va atado a un avance real que podés ver",
  "Te mostramos el sistema funcionando antes de que firmes",
  "Soporte local en español, el mismo día hábil",
];

export function About() {
  return (
    <section id="sobre" className="section-base section-chroma section-pad">
      <div className="container-maat">
        <div className="max-w-[640px] reveal">
          <span className="eyebrow">Sobre MaatWork</span>
          <h2 className="mt-3 font-display text-3xl text-white md:text-4xl" style={{ fontWeight: 800, letterSpacing: "var(--tracking-h2)" }}>
            Un estudio real, con cara y nombre.
          </h2>
          <p className="mt-4 max-w-[540px] text-[16px] leading-7 text-slate-300">
            Construimos software para nuestros propios productos antes que para vos. Sabemos lo que
            es operarlo todos los días — no te entregamos un MVP y desaparecemos.
          </p>
          {/* Shen-ring (eternity) · Lotus (growth from chaos) · Feather (truth) */}
          <GlyphRail className="mt-8 max-w-[300px]" glyphs={["shen-ring", "lotus", "feather-of-maat"]} o={0.14} />
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Founder */}
          <div className="reveal ops-card relative flex flex-col p-8">
            <CornerMarks inset={16} />
            <CardGlyph motif="shen-ring" o={0.06} className="absolute right-3 top-3 h-14 w-14" />
            <div className="relative flex items-center gap-4">
              <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-violet-600/30 bg-violet-600/15 font-display text-[18px] font-extrabold tracking-[-0.02em] text-white">
                GS
              </span>
              <div>
                <p className="font-display text-[18px] font-extrabold tracking-[-0.02em] text-white">Giolivo Santarelli</p>
                <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.1em] text-slate-400">Fundador · MaatWork</p>
              </div>
            </div>
            <p className="relative mt-5 text-[14.5px] leading-7 text-slate-300">
              MaatWork es un estudio argentino de software y automatización: construimos
              productos propios y los operamos en producción. Hecho en Argentina, con soporte
              local en español.
            </p>
            <a
              href="https://www.linkedin.com/in/giolivo-garcia-451954322/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-violet-300 transition-colors hover:text-violet-200"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V9.94H5.67v8.4h2.67zM7 8.77a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 9.57v-4.6c0-2.46-1.31-3.6-3.06-3.6-1.41 0-2.04.78-2.39 1.32v-1.13h-2.67v8.4h2.67v-4.69c0-.25.02-.49.09-.67.2-.49.65-1 1.4-1 .99 0 1.39.75 1.39 1.86v4.5h2.66z" />
              </svg>
              LinkedIn del fundador
            </a>
          </div>

          {/* Guarantees */}
          <div className="reveal ops-card card-accent accent-emerald relative flex flex-col p-8" style={{ transitionDelay: "100ms" }}>
            <CardGlyph motif="lotus" o={0.07} className="absolute bottom-3 right-3 h-16 w-16" />
            <h3 className="font-display text-[20px] font-extrabold tracking-[-0.02em] text-white">
              Por qué podés confiar
            </h3>
            <ul className="mt-6 space-y-3.5">
              {GUARANTEES.map((g) => (
                <li key={g} className="flex items-start gap-3 text-[14.5px] text-slate-300">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-success/30 bg-success/15">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--color-success)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
