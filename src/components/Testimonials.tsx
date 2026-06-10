/**
 * Testimonials — 3 quotes con quote mark violeta gigante y avatar con iniciales.
 */
const testimonials = [
  {
    quote:
      "Antes perdía 2 horas por día mandando mensajes. Ahora el sistema manda los recordatorios y yo me dedico a los socios.",
    name: "Martín Sosa",
    role: "Dueño · Iron Gym (Lanús)",
    grad: 1,
    init: "MS",
  },
  {
    quote:
      "Lo que más me sirve es ver los números. Antes adivinaba cuánto entraba. Ahora abro la app y sé.",
    name: "Camila Oviedo",
    role: "Socia · Estudio Camila Oviedo (Palermo)",
    grad: 3,
    init: "CO",
  },
  {
    quote:
      "La implementación fue rapidísima. En una semana ya estaba cobrando las cuotas por link de pago. No vuelvo atrás.",
    name: "Joaquín Méndez",
    role: "Director · Academia Norte (Córdoba)",
    grad: 4,
    init: "JM",
  },
];

export function Testimonials() {
  return (
    <section className="section-base section-pad">
      <div className="container-maat">
        <div className="max-w-[640px] reveal">
          <span className="eyebrow">
            Lo que dicen
          </span>
          <h2
            className="font-display text-white mt-3 text-3xl md:text-4xl"
            style={{ fontWeight: 800 }}
          >
            Historias de negocios que dejaron de improvisar.
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="card p-6 md:p-7 reveal flex flex-col relative overflow-hidden group hover-scale"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Quote mark gigante */}
              <svg
                width="100"
                height="80"
                viewBox="0 0 28 22"
                fill="currentColor"
                aria-hidden
                className="text-purple-600 absolute -top-2 -left-2 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3"
                style={{ opacity: 0.10, color: "var(--color-purple-600)" }}
              >
                <path d="M0 22V13.2C0 9.27.93 6.07 2.8 3.6 4.67 1.13 7.33 0 10.8 0V4.4C8.93 4.4 7.4 5.07 6.2 6.4 5 7.73 4.4 9.47 4.4 11.6H10.8V22H0ZM17.2 22V13.2C17.2 9.27 18.13 6.07 20 3.6 21.87 1.13 24.53 0 28 0V4.4C26.13 4.4 24.6 5.07 23.4 6.4 22.2 7.73 21.6 9.47 21.6 11.6H28V22H17.2Z" />
              </svg>

              <blockquote className="relative mt-6 text-[15.5px] text-white leading-[1.55] flex-1">
                {t.quote}
              </blockquote>

              <figcaption className="mt-6 pt-5 border-t border-white/[0.06] flex items-center gap-3">
                <div className={`avatar-grad-${t.grad} w-10 h-10 rounded-full flex items-center justify-center text-white text-[12px] font-bold`}>
                  {t.init}
                </div>
                <div>
                  <div className="font-display text-white font-bold text-[14.5px]">
                    {t.name}
                  </div>
                  <div className="text-[12.5px] text-purple-400/80 mt-0.5">
                    {t.role}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
