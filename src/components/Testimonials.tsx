import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="section-base section-pad">
      <div className="container-maat">
        <div className="max-w-[680px] reveal">
          <span className="eyebrow">Lo que dicen</span>
          <h2
            className="font-display text-white mt-3 text-3xl md:text-4xl text-balance"
            style={{ fontWeight: 800, lineHeight: 1.05, letterSpacing: "var(--tracking-h2)" }}
          >
            Historias de negocios que dejaron de improvisar.
          </h2>
          <p className="mt-4 max-w-[560px] text-base text-purple-200 md:text-lg text-pretty">
            Estructura preparada para sumar fotos y logos reales con permiso.
            Hasta entonces, usamos casos piloto sin atribuir nombres falsos.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={`${t.business}-${t.location}`}
              className="card reveal hover-scale flex min-h-[300px] flex-col overflow-hidden p-6 md:p-7"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-3">
                <div className={`avatar-grad-${t.gradient} flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-display text-base font-bold text-white">
                    {t.business}
                  </div>
                  <div className="mt-0.5 text-sm text-purple-400/80">
                    {t.role} · {t.location}
                  </div>
                </div>
              </div>

              <blockquote className="mt-7 flex-1 text-base leading-[1.6] text-white text-pretty">
                “{t.quote}”
              </blockquote>

              <figcaption className="mt-7 border-t border-white/[0.06] pt-4 text-sm text-purple-400/80">
                {t.verified ? t.name : "Caso piloto · reemplazar por cliente real al publicar"}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
