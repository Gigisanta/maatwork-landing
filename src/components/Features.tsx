"use client";

/**
 * Features — Bento grid asimétrico con hover reveal.
 * Cada card tiene contenido estático + contenido que aparece en hover
 * (counter, chat bubble, chart, lista, lock rotation).
 *
 * Layout:
 *   ┌──────────┬──────────┐
 *   │  CRM     │  Cobros  │
 *   │  (2x2)   │  (1x2)   │
 *   ├────┬─────┤          │
 *   │AGEN│ WA  ├──────────┤
 *   │(1x1)(1x1)│Dashboard │
 *   ├────┴─────┤  (2x1)   │
 *   │ Datos    │          │
 *   │  (2x1)   │          │
 *   └──────────┴──────────┘
 */

import { useEffect, useState, type ReactNode } from "react";
import { BentoCard } from "./BentoCard";

type Feature = {
  title: string;
  desc: string;
  icon: ReactNode;
  col: string;       // tailwind grid-col span
  row: string;       // tailwind grid-row span
  hoverContent: ReactNode;
  gradient: number;
};

const FEATURES: Feature[] = [
  {
    title: "CRM que ordena tu local",
    desc: "Historial completo de cada cliente en un solo lugar.",
    icon: <IconCrm />,
    col: "md:col-span-2",
    row: "md:row-span-2",
    gradient: 1,
    hoverContent: (
      <div className="space-y-1.5">
        {[
          { n: "Lucía M.",   t: "47 visitas", c: "Plan Pro" },
          { n: "Diego R.",   t: "23 visitas", c: "Mensual" },
          { n: "Camila S.",  t: "12 visitas", c: "Pack 8" },
          { n: "Joaquín P.", t: "88 visitas", c: "Anual" },
        ].map((c) => (
          <div
            key={c.n}
            className="flex items-center gap-2 text-[10.5px] py-1.5 px-2 rounded bg-white/[0.03] border border-white/[0.05]"
          >
            <div className={`avatar-grad-${c.n === "Lucía M." ? 1 : c.n === "Diego R." ? 2 : c.n === "Camila S." ? 3 : 4} w-5 h-5 rounded-full flex items-center justify-center text-[7.5px] text-white font-bold`}>
              {c.n.split(" ").map((p) => p[0]).join("")}
            </div>
            <span className="text-white flex-1">{c.n}</span>
            <span className="text-purple-400/70">{c.t}</span>
            <span className="text-success text-[9px]">● {c.c}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Recuperá horas cada semana",
    desc: "Cobros automáticos, links de pago, recordatorios.",
    icon: <IconMoney />,
    col: "md:col-span-1",
    row: "md:row-span-2",
    gradient: 2,
    hoverContent: (
      <div className="space-y-2">
        <div className="text-[10px] text-purple-400/70">Esta semana ahorraste</div>
        <div
          className="font-display text-white text-[28px] tracking-[-0.03em] tabular-nums"
          style={{ fontWeight: 800 }}
        >
          $<CounterUp end={32400} />
        </div>
        <div className="text-[10px] text-success">+8 hs recuperadas</div>
        <div className="mt-2 h-1 rounded-full bg-white/[0.06] overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-purple-600 to-purple-500"
            style={{ width: "78%" }}
          />
        </div>
        <div className="text-[9.5px] text-purple-400/70">78% del objetivo</div>
      </div>
    ),
  },
  {
    title: "Menos no-shows",
    desc: "Recordatorios automáticos que reducen ausencias.",
    icon: <IconCalendar />,
    col: "md:col-span-1",
    row: "md:row-span-1",
    gradient: 3,
    hoverContent: (
      <div className="grid grid-cols-7 gap-1 mt-2">
        {Array.from({ length: 7 }).map((_, i) => {
          const heights = [40, 60, 30, 80, 55, 90, 70];
          return (
            <div key={i} className="flex flex-col items-center gap-1">
              <div
                className="w-full rounded-sm"
                style={{
                  height: `${heights[i]}%`,
                  minHeight: 8,
                  background: i === 5 ? "linear-gradient(180deg, var(--color-purple-500), var(--color-purple-600))" : "rgba(124, 58, 237, 0.25)",
                  animation: `bar-grow 0.6s var(--ease-out-quart) ${i * 60}ms both`,
                  transformOrigin: "bottom",
                }}
              />
              <span className="text-[8px] text-purple-400/60">LM</span>
            </div>
          );
        })}
      </div>
    ),
  },
  {
    title: "WhatsApp automático",
    desc: "Confirmaciones y respuestas 24/7.",
    icon: <IconWa />,
    col: "md:col-span-1",
    row: "md:row-span-1",
    gradient: 4,
    hoverContent: (
      <div className="mt-2 space-y-1.5">
        <div className="flex justify-end">
          <div className="bg-purple-600/30 rounded-lg px-2.5 py-1.5 text-[10px] text-white max-w-[85%]">
            ¿Horario de boxeo?
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-white/[0.05] rounded-lg px-2.5 py-1.5 text-[10px] text-white max-w-[85%]">
            Lun a vie · 18-22 hs. ¿Reservás?
          </div>
        </div>
        <div className="text-[9px] text-success text-right">● Respondido en 2s</div>
      </div>
    ),
  },
  {
    title: "Datos que importan",
    desc: "Ingresos, asistencia, churn en 5 segundos.",
    icon: <IconChart />,
    col: "md:col-span-2",
    row: "md:row-span-1",
    gradient: 5,
    hoverContent: (
      <div className="flex items-end gap-1 h-[60px] mt-1">
        {[35, 55, 42, 78, 65, 90, 72, 95, 80, 100].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm"
            style={{
              height: `${h}%`,
              minHeight: 4,
              background: i === 9 ? "linear-gradient(180deg, var(--color-purple-500), var(--color-purple-600))" : "rgba(124, 58, 237, 0.25)",
              animation: `bar-grow 0.5s var(--ease-out-quart) ${i * 40}ms both`,
              transformOrigin: "bottom",
            }}
          />
        ))}
      </div>
    ),
  },
  {
    title: "Tus datos, seguros",
    desc: "Backups diarios automáticos. Exportás todo cuando quieras.",
    icon: <IconLock />,
    col: "md:col-span-2",
    row: "md:row-span-1",
    gradient: 6,
    hoverContent: (
      <div className="flex items-center gap-3 mt-1">
        <div className="w-12 h-12 rounded-full bg-purple-600/15 border border-purple-600/30 flex items-center justify-center text-purple-400" style={{ animation: "lock-spin 4s linear infinite", transformOrigin: "center" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
        <div className="flex-1">
          <div className="text-[10px] text-purple-400/70">Último backup</div>
          <div className="text-white text-[12px] font-semibold">Hace 3 minutos</div>
          <div className="text-[9.5px] text-success">✓ Datos encriptados</div>
        </div>
      </div>
    ),
  },
];

export function Features() {
  return (
    <section
      id="funcionalidades"
      className="section-elev1 section-pad border-y border-white/[0.06]"
    >
      <div className="container-maat">
        <div className="max-w-[640px] reveal">
          <span className="eyebrow">
            Funcionalidades
          </span>
          <h2
            className="font-display text-white mt-3 text-3xl md:text-4xl"
            style={{ fontWeight: 800 }}
          >
            Todo lo que ordena tu operación diaria.
          </h2>
          <p className="mt-4 text-[16px] text-purple-200 max-w-[520px]">
            Diseñado para gente que maneja un local, no para programadores.
            Abrís la app y entendés todo de una.
          </p>
        </div>

        {/* Bento grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-4 auto-rows-[180px] gap-3 md:gap-4">
          {FEATURES.map((f, i) => (
            <BentoCard
              key={f.title}
              icon={f.icon}
              title={f.title}
              description={f.desc}
              hoverContent={f.hoverContent}
              col={f.col}
              row={f.row}
              gradientIndex={f.gradient}
              badge={f.col.includes("col-span-2") && f.row.includes("row-span-2") ? "Pro" : undefined}
              delayMs={i * 60}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   Counter for inline display in bento cards
   ================================================================ */
function CounterUp({ end }: { end: number }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const start = performance.now();
    const duration = 1400;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const e = 1 - Math.pow(1 - t, 3);
      setVal(end * e);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end]);
  return <>{new Intl.NumberFormat("es-AR").format(Math.round(val))}</>;
}

/* ================================================================
   Lock spin (for "Tus datos seguros" card)
   ================================================================ */
const LockSpinStyle = () => (
  <style>{`@keyframes lock-spin { from { transform: rotate(0); } to { transform: rotate(360deg); } }`}</style>
);

/* ================================================================
   Icons
   ================================================================ */
function IconCrm() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function IconMoney() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
      <line x1="6" y1="15" x2="10" y2="15" />
    </svg>
  );
}
function IconCalendar() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}
function IconWa() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.6-.8L3 21l1.8-5.7a8.5 8.5 0 1 1 16.2-3.8Z" />
    </svg>
  );
}
function IconChart() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 3v18h18" />
      <path d="m7 14 4-4 4 4 5-5" />
    </svg>
  );
}
function IconLock() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
