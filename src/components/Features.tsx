/**
 * Features — the product core. Five operational modules + the mobile app,
 * rendered as high-signal ops cards: mono module index, icon, plain title,
 * one operational result line. No bento hover-charts, no toy reveals.
 */
import type { ReactNode } from "react";

type Module = {
  idx: string;
  title: string;
  desc: string;
  result: string;
  accent: string;
  icon: ReactNode;
};

const MODULES: Module[] = [
  {
    idx: "01",
    title: "Agenda",
    desc: "Turnos, reservas y recordatorios en una grilla viva.",
    result: "Recordatorios automáticos · menos ausencias",
    accent: "accent-cyan",
    icon: <IconCalendar />,
  },
  {
    idx: "02",
    title: "Cobros",
    desc: "Cuotas, links de pago y el estado de cada cobro.",
    result: "Vencimientos al día · sin planillas",
    accent: "accent-emerald",
    icon: <IconMoney />,
  },
  {
    idx: "03",
    title: "Clientes",
    desc: "Ficha, historial y seguimiento de cada cliente.",
    result: "Una ficha por cliente · todo el historial",
    accent: "accent-violet",
    icon: <IconUsers />,
  },
  {
    idx: "04",
    title: "Automatización",
    desc: "WhatsApp que confirma, responde y avisa, 24/7.",
    result: "Confirmaciones y respuestas automáticas",
    accent: "accent-gold",
    icon: <IconChat />,
  },
  {
    idx: "05",
    title: "Tablero",
    desc: "Ingresos, asistencia y bajas, en tiempo real.",
    result: "El estado del negocio de un vistazo",
    accent: "accent-rose",
    icon: <IconChart />,
  },
  {
    idx: "06",
    title: "App móvil",
    desc: "Tu equipo y tus clientes, en iOS y Android.",
    result: "Operás desde el celular",
    accent: "accent-violet",
    icon: <IconPhone />,
  },
];

export function Features() {
  return (
    <section id="producto" className="section-elev1 section-pad border-y border-white/[0.06]">
      <div className="container-maat">
        <div className="max-w-[640px] reveal">
          <span className="eyebrow">Producto</span>
          <h2 className="mt-3 font-display text-3xl text-white md:text-4xl" style={{ fontWeight: 800, letterSpacing: "var(--tracking-h2)" }}>
            El núcleo operativo, en módulos claros.
          </h2>
          <p className="mt-4 max-w-[520px] text-[16px] leading-7 text-slate-300">
            Pensado para quien maneja el negocio, no para programadores. Abrís el sistema
            y entendés el estado de todo.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {MODULES.map((m, i) => (
            <article
              key={m.title}
              className={`ops-card card-accent ${m.accent} reveal flex flex-col p-6`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="icon-halo flex h-10 w-10 items-center justify-center rounded-lg border"
                  style={{ borderColor: "var(--accent-ring)", background: "var(--accent-soft)", color: "var(--accent)" }}
                >
                  {m.icon}
                </span>
                <span className="mono-tag text-slate-600">Módulo {m.idx}</span>
              </div>
              <h3 className="mt-5 font-display text-[19px] font-bold tracking-[-0.01em] text-white">
                {m.title}
              </h3>
              <p className="mt-1.5 flex-1 text-[14px] leading-relaxed text-slate-400">
                {m.desc}
              </p>
              <div className="mt-5 flex items-center gap-2 border-t border-white/[0.06] pt-4">
                <span className="h-1.5 w-1.5 rounded-full dot-pulse" style={{ background: "var(--accent)" }} aria-hidden />
                <span className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-slate-500">
                  {m.result}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Lucide-style icons (stroke 2) ----------------------------- */
function IconCalendar() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}
function IconMoney() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
      <line x1="6" y1="15" x2="10" y2="15" />
    </svg>
  );
}
function IconUsers() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function IconChat() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.6-.8L3 21l1.8-5.7a8.5 8.5 0 1 1 16.2-3.8Z" />
    </svg>
  );
}
function IconChart() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 3v18h18" />
      <path d="m7 14 4-4 4 4 5-5" />
    </svg>
  );
}
function IconPhone() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="5" y="2" width="14" height="20" rx="2.5" />
      <line x1="10" y1="18" x2="14" y2="18" />
    </svg>
  );
}
