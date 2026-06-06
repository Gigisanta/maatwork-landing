/**
 * Testimonials — V5: quote mark gigante violeta, avatar con iniciales, hover lift.
 */
const testimonials = [
  {
    quote: "Antes perdía 2 horas por día mandando mensajes. Ahora el sistema manda los recordatorios y yo me dedico a los socios.",
    name: "Martín Sosa",
    role: "Dueño · Iron Gym (Lanús)",
    init: "MS",
    grad: 1,
  },
  {
    quote: "Lo que más me sirve es ver los números. Antes adivinaba cuánto entraba. Ahora abro la app y sé.",
    name: "Camila Oviedo",
    role: "Socia · Estudio Camila Oviedo (Palermo)",
    init: "CO",
    grad: 3,
  },
  {
    quote: "La implementación fue rapidísima. En una semana ya estaba cobrando las cuotas por link de pago. No vuelvo atrás.",
    name: "Joaquín Méndez",
    role: "Director · Academia Norte (Córdoba)",
    init: "JM",
    grad: 2,
  },
];

export function Testimonials() {
  return (
    <section className="section-base py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-6 md:px-8">
        <div className="max-w-[640px] reveal">
          <span className="text-[12.5px] uppercase tracking-[0.18em] text-[#a78bfa]">
            Lo que dicen
          </span>
          <h2
            className="font-display text-white mt-3 text-[34px] md:text-[46px] leading-[1.05] tracking-[-0.03em] text-balance"
            style={{ fontWeight: 800 }}
          >
            Gente que ya automatizó su local.
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="bento-card card p-6 md:p-7 reveal flex flex-col relative"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <svg
                width="56"
                height="44"
                viewBox="0 0 28 22"
                fill="none"
                aria-hidden
                className="text-[#7c3aed] absolute -top-2 left-4 opacity-25"
              >
                <path
                  d="M0 22V13.2C0 9.27 0.93 6.07 2.8 3.6C4.67 1.13 7.33 0 10.8 0V4.4C8.93 4.4 7.4 5.07 6.2 6.4C5 7.73 4.4 9.47 4.4 11.6H10.8V22H0ZM17.2 22V13.2C17.2 9.27 18.13 6.07 20 3.6C21.87 1.13 24.53 0 28 0V4.4C26.13 4.4 24.6 5.07 23.4 6.4C22.2 7.73 21.6 9.47 21.6 11.6H28V22H17.2Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote className="mt-6 text-[15.5px] text-white leading-[1.6] flex-1">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-white/[0.06] flex items-center gap-3">
                <div className={`avatar-grad-${t.grad} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-[13px] flex-shrink-0`}>
                  {t.init}
                </div>
                <div>
                  <div className="font-display text-white font-bold text-[14.5px]">
                    {t.name}
                  </div>
                  <div className="text-[12.5px] text-[#a78bfa]/80 mt-0.5">
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
