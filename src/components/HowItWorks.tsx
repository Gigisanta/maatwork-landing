/**
 * HowItWorks — 3 pasos con línea conectora.
 */
const steps = [
  {
    n: "01",
    t: "Diagnóstico",
    d: "1-2 días",
    desc: "Llamada de 30 min. Entendemos tu local, tu flujo y qué te hace perder tiempo.",
  },
  {
    n: "02",
    t: "Prototipo",
    d: "3-7 días",
    desc: "Configuramos el sistema con tus datos reales. Te lo mostramos funcionando antes de pagar.",
  },
  {
    n: "03",
    t: "Lanzamiento",
    d: "1-2 días",
    desc: "Capacitamos a tu equipo. Migramos clientes y turnos. Arrancás a operar el mismo día.",
  },
];

export function HowItWorks() {
  return (
    <section className="section-base py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="max-w-[640px] reveal">
          <span className="text-[12.5px] uppercase tracking-[0.18em] text-[#a78bfa]">
            Cómo funciona
          </span>
          <h2
            className="font-display text-white mt-3 text-[34px] md:text-[44px] leading-[1.05] tracking-[-0.025em]"
            style={{ fontWeight: 800 }}
          >
            De cero a funcionando en 5-10 días.
          </h2>
          <p className="mt-4 text-[16px] text-[#d4b8ff] max-w-[520px]">
            Sin proyectos de meses. Sin consultorías eternas. Te dejamos
            andando rápido, con tu equipo operando.
          </p>
        </div>

        <div className="mt-14 relative">
          {/* Connector line — solo en md+ */}
          <div
            aria-hidden
            className="hidden md:block absolute top-9 left-[16.6%] right-[16.6%] h-px"
            style={{
              background:
                "linear-gradient(90deg, rgba(124,58,237,0) 0%, rgba(124,58,237,0.5) 50%, rgba(124,58,237,0) 100%)",
            }}
          />

          <ol className="grid md:grid-cols-3 gap-10 md:gap-6 relative">
            {steps.map((s, i) => (
              <li key={s.n} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="flex md:flex-col items-start md:items-center gap-5 md:gap-0">
                  <div className="md:mb-7 flex-shrink-0">
                    <div className="w-[72px] h-[72px] rounded-full bg-[#1a0a3e] border border-[#7c3aed]/30 flex items-center justify-center">
                      <span
                        className="font-display text-white text-[22px] tracking-[-0.02em]"
                        style={{ fontWeight: 800 }}
                      >
                        {s.n}
                      </span>
                    </div>
                  </div>
                  <div className="md:text-center md:max-w-[280px]">
                    <div className="text-[12px] uppercase tracking-[0.18em] text-[#a78bfa]">
                      {s.d}
                    </div>
                    <h3 className="font-display text-white text-[22px] font-extrabold tracking-[-0.02em] mt-1.5">
                      {s.t}
                    </h3>
                    <p className="mt-2.5 text-[14.5px] text-[#d4b8ff]/85 leading-[1.55] md:mx-auto">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
