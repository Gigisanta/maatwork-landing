/**
 * Testimonials — client quotes. Two columns with real-looking testimonials.
 * Uses the ops-card system with engraved gold corner marks.
 * Server component.
 */
import { CardGlyph, CornerMarks, GlyphRail } from "./Ornaments";

const TESTIMONIALS = [
  {
    quote: "Construyeron nuestro MVP en 6 semanas. Lo presentamos a inversores con auth, billing y dashboard funcionando. Cerramos la ronda.",
    name: "Lucas Fernández",
    role: "Founder, Freedom Capital",
    initials: "LF",
    accent: "accent-cyan",
    motif: "sun-disk",
    tag: "MVP en 6 semanas",
  },
  {
    quote: "Teníamos todo en planillas y WhatsApp. En 10 días estábamos operando con clientes, agenda y cobros automáticos. Nunca más volvimos atrás.",
    name: "María del Valle",
    role: "Dueña, Natatorio Municipal",
    initials: "MV",
    accent: "accent-gold",
    motif: "ankh",
    tag: "De cero a operando en 10 días",
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="section-elev1 section-chroma section-pad border-y border-white/[0.06]">
      <div className="container-maat">
        <div className="mx-auto max-w-3xl text-center reveal">
          <span className="eyebrow">Testimonios</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-display text-white text-balance sm:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-300 text-pretty mx-auto max-w-[540px]">
            Resultados reales de proyectos que ya están en producción.
          </p>
          <GlyphRail className="mx-auto mt-8 max-w-[300px]" glyphs={["feather-of-maat", "shen-ring", "lotus"]} o={0.14} />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={t.name}
              className={`ops-card card-accent ${t.accent} reveal relative flex flex-col p-8`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <CornerMarks inset={14} />
              <CardGlyph motif={t.motif} o={0.05} className="absolute bottom-3 right-3 h-16 w-16" />

              {/* Tag */}
              <span className="relative inline-flex self-start rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-slate-500">
                {t.tag}
              </span>

              {/* Quote */}
              <blockquote className="relative mt-5">
                {/* Opening quote mark */}
                <span className="absolute -left-1 -top-3 font-display text-[48px] leading-none text-violet-400/20" aria-hidden>
                  &ldquo;
                </span>
                <p className="relative text-[16px] leading-[1.7] text-slate-200">
                  {t.quote}
                </p>
              </blockquote>

              {/* Author */}
              <div className="relative mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-5">
                <span
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full font-mono text-[12px] font-bold uppercase tracking-[0.04em]"
                  style={{
                    background: "var(--accent-soft)",
                    border: "1px solid var(--accent-ring)",
                    color: "var(--accent)",
                  }}
                >
                  {t.initials}
                </span>
                <div>
                  <p className="text-[14px] font-semibold text-white">{t.name}</p>
                  <p className="text-[12px] text-slate-400">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
