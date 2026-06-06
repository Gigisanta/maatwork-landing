/**
 * Features — 6 features en grilla 3x2.
 */
const features = [
  {
    title: "CRM de clientes",
    desc: "Toda la historia del cliente en un solo lugar: turnos, pagos, notas, conversaciones.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Cobros y cuotas",
    desc: "Cobros automáticos, recordatorios por WhatsApp, links de pago. Cero cuota olvidada.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
        <line x1="6" y1="15" x2="10" y2="15" />
      </svg>
    ),
  },
  {
    title: "Agenda inteligente",
    desc: "Sincronizada, con recordatorios automáticos y vista móvil para tu equipo.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="m9 16 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "WhatsApp automático",
    desc: "Confirmaciones, recordatorios y respuestas a preguntas frecuentes sin intervenir.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.6-.8L3 21l1.8-5.7a8.5 8.5 0 1 1 16.2-3.8Z" />
        <path d="M8 12h.01M12 12h.01M16 12h.01" />
      </svg>
    ),
  },
  {
    title: "Dashboard con KPIs",
    desc: "Ingresos, asistencia, churn, proyecciones. Lo que necesitás saber, en 5 segundos.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3" y="3" width="7" height="9" rx="1" />
        <rect x="14" y="3" width="7" height="5" rx="1" />
        <rect x="14" y="12" width="7" height="9" rx="1" />
        <rect x="3" y="16" width="7" height="5" rx="1" />
      </svg>
    ),
  },
  {
    title: "Datos seguros",
    desc: "Backups diarios, encriptación y servidores en la región. Tu información, cuidada.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        <circle cx="12" cy="16" r="1" />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section
      id="funcionalidades"
      className="section-elev1 py-20 md:py-28 border-y border-white/[0.06]"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="max-w-[640px] reveal">
          <span className="text-[12.5px] uppercase tracking-[0.18em] text-[#a78bfa]">
            Funcionalidades
          </span>
          <h2
            className="font-display text-white mt-3 text-[34px] md:text-[44px] leading-[1.05] tracking-[-0.025em]"
            style={{ fontWeight: 800 }}
          >
            Todo lo que necesitás, en un solo lugar.
          </h2>
          <p className="mt-4 text-[16px] text-[#d4b8ff] max-w-[520px]">
            Diseñado para gente que maneja un local, no para programadores.
            Abrís la app y entendés todo de una.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="card p-5 md:p-6 reveal"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#7c3aed]/25 to-[#a855f7]/10 border border-[#7c3aed]/30 flex items-center justify-center text-[#d4b8ff]">
                <div className="w-6 h-6">{f.icon}</div>
              </div>
              <h3 className="font-display text-white mt-4 text-[17px] font-bold tracking-[-0.01em]">
                {f.title}
              </h3>
              <p className="mt-1.5 text-[14px] text-[#d4b8ff]/85 leading-[1.55]">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
