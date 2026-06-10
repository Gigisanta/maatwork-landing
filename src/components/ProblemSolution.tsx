/**
 * ProblemSolution — "Esto te suena familiar?"
 * 4 pain points con iconos simples. Cards sólidas, sin glass.
 */
const pains = [
  {
    title: "Agenda mezclada",
    desc: "WhatsApp, papel y un Excel que ya nadie entiende.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-purple-400)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M3 9h18M8 2v4M16 2v4" />
        <path d="m9 14 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Cobros que se pierden",
    desc: "Cuotas impagas, recordatorios a mano, plata en el aire.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-purple-400)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3" y="6" width="18" height="13" rx="2" />
        <path d="M3 10h18M7 15h2" />
      </svg>
    ),
  },
  {
    title: "WhatsApp te come el día",
    desc: "Respondés lo mismo 30 veces. No te queda tiempo para crecer.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-purple-400)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.6-.8L3 21l1.8-5.7a8.5 8.5 0 1 1 16.2-3.8Z" />
      </svg>
    ),
  },
  {
    title: "No ves los números",
    desc: "Cuánto entró, cuánto falta, quién se fue. Adivinas.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-purple-400)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M3 3v18h18" />
        <path d="m7 14 4-4 4 4 5-5" />
      </svg>
    ),
  },
];

export function ProblemSolution() {
  return (
    <section className="section-base section-pad">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="max-w-[640px] reveal">
          <span className="eyebrow">
            El problema
          </span>
          <h2
            className="font-display text-white mt-3 text-3xl md:text-4xl"
            style={{ fontWeight: 800 }}
          >
            ¿Esto te suena familiar?
          </h2>
          <p className="mt-4 text-[16px] text-purple-200 max-w-[520px]">
            Si manejás tu local así, no estás solo. Pero te está costando
            tiempo, plata y clientes.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pains.map((p, i) => (
            <div
              key={p.title}
              className="card p-5 md:p-6 reveal"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-3.5">
                {p.icon}
              </div>
              <h3 className="font-display text-white text-[16.5px] font-bold tracking-[-0.01em]">
                {p.title}
              </h3>
              <p className="mt-1.5 text-[13.5px] text-purple-200/85 leading-[1.5]">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 reveal">
          <div className="card p-6 md:p-7 flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
            <div>
              <h3 className="font-display text-white text-[22px] md:text-[24px] font-extrabold tracking-[-0.02em]">
                MaatWork existe para esto.
              </h3>
              <p className="mt-2 text-[15px] text-purple-200 max-w-[640px]">
                Reemplazá WhatsApp + cuaderno + Excel por un solo sistema.
                Te devolvemos las horas que perdés hoy.
              </p>
            </div>
            <a
              href="#funcionalidades"
              className="md:ml-auto inline-flex items-center justify-center h-11 px-5 rounded-full text-white font-semibold text-[14.5px] border border-white/15 hover:border-white/30 hover:bg-white/[0.04] transition whitespace-nowrap"
            >
              Ver cómo funciona
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
