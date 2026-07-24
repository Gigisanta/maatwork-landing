/**
 * ProcessTimeline — "De la idea al lanzamiento" en claro, para /servicios:
 * timeline vertical con círculo-ícono + línea conectora a la izquierda y cards
 * con título, descripción, duración y número fantasma (estilo sincroweb).
 * Mismo proceso honesto que HowItWorks (diagnóstico → alcance → construcción
 * → lanzamiento). Server component; aparece por scroll con `.reveal` escalonado.
 */

const STEPS = [
  {
    n: "01",
    title: "Diagnóstico",
    duration: "30 min · gratis",
    desc: "Una llamada corta para entender tu operación y detectar el cuello de botella principal. Sin venta agresiva.",
    icon: <IconSearch />,
  },
  {
    n: "02",
    title: "Propuesta y alcance",
    duration: "3–7 días",
    desc: "Definimos qué entra y qué no: alcance claro, plazos y precio antes de escribir una línea de código.",
    icon: <IconRuler />,
  },
  {
    n: "03",
    title: "Construcción por etapas",
    duration: "Sprints de 2 semanas",
    desc: "Demos cortas sobre el producto real. Ves avances funcionando antes de cada pago.",
    icon: <IconLaptop />,
  },
  {
    n: "04",
    title: "Lanzamiento y soporte",
    duration: "1 semana",
    desc: "Puesta en producción, carga de datos, capacitación a tu equipo y soporte local en español.",
    icon: <IconRocket />,
  },
];

export function ProcessTimeline() {
  return (
    <section id="proceso" className="section-pad">
      <div className="container-maat">
        {/* Encabezado centrado */}
        <div className="mx-auto max-w-[640px] text-center reveal">
          <span className="inline-block rounded-full bg-violet-100 px-4 py-1.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-violet-700">
            Proceso
          </span>
          <h2
            className="mt-5 font-display text-[32px] leading-tight text-slate-900 md:text-[42px]"
            style={{ fontWeight: 800, letterSpacing: "var(--tracking-h2)" }}
          >
            De la idea <span className="text-violet-600">al lanzamiento</span>
          </h2>
          <p className="mt-4 text-[16.5px] leading-7 text-slate-600">
            Así arrancamos a trabajar con tu empresa: pocas reuniones, entregables visibles y decisiones rápidas.
          </p>
        </div>

        {/* Timeline */}
        <div className="mx-auto mt-14 max-w-[820px]">
          {STEPS.map((s, i) => (
            <div
              key={s.n}
              className="reveal grid grid-cols-[56px_1fr] gap-5 md:grid-cols-[64px_1fr] md:gap-7"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Columna ícono + línea */}
              <div className="flex flex-col items-center">
                <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-slate-200 bg-[#fff] text-slate-700 shadow-[0_4px_14px_-6px_rgba(15,15,35,0.14)]">
                  {s.icon}
                </span>
                {i < STEPS.length - 1 && <span className="w-px flex-1 bg-slate-200" aria-hidden />}
              </div>

              {/* Card */}
              <div
                className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-[#FAFAF8] p-6 md:p-7 ${
                  i < STEPS.length - 1 ? "mb-8" : ""
                }`}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 select-none font-display text-[64px] font-extrabold leading-none tracking-[-0.04em] text-violet-600/15 md:text-[76px]"
                >
                  {s.n}
                </span>
                <div className="relative max-w-[80%]">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-display text-[19px] font-bold tracking-[-0.01em] text-slate-900 md:text-[21px]">
                      {s.title}
                    </h3>
                    <span className="text-[13.5px] font-medium text-violet-600">{s.duration}</span>
                  </div>
                  <p className="mt-2.5 text-[15.5px] leading-relaxed text-slate-600">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- Íconos (stroke, 22px) -------------------------------------------------

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {children}
    </svg>
  );
}
function IconSearch() {
  return <Icon><circle cx="11" cy="11" r="7" /><path d="m20 20-3.2-3.2" /></Icon>;
}
function IconRuler() {
  return <Icon><path d="m15 5 4 4L7.5 20.5a2.5 2.5 0 0 1-3.54-3.54zM13 7l1.5 1.5M10 10l1.5 1.5M7 13l1.5 1.5" /><path d="m16 4 4 4 1.5-1.5a2.83 2.83 0 0 0-4-4z" /></Icon>;
}
function IconLaptop() {
  return <Icon><rect x="4" y="5" width="16" height="11" rx="1.5" /><path d="M2 19h20M10 9l-2 2.5L10 14M14 9l2 2.5L14 14" /></Icon>;
}
function IconRocket() {
  return <Icon><path d="M12 15c4.5-4 6-8.5 6-12-3.5 0-8 1.5-12 6l-3 4 5 5z" /><path d="M6 13 3.5 18.5a5.5 5.5 0 0 0 2-.5M11 18l-.5 2.5a5.5 5.5 0 0 0 .5-2M14.5 9.5a1.5 1.5 0 1 0-2.12-2.12" /></Icon>;
}
