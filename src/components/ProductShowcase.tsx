"use client";

/**
 * ProductShowcase — pieza central del hero.
 * Reemplaza el video buggy (NMS en blanco + wipe diagonal tosco + 1.4 MB) por un
 * preview vivo, data-driven y 100% dark que cicla los 4 productos reales del
 * ecosistema con crossfade CSS. Los datos son de DEMO (marcados como tal),
 * basados en las entidades reales de cada app — sin presentar métricas como reales.
 * Pausa en hover, tabs clickeables, no auto-cicla con prefers-reduced-motion.
 */
import { useEffect, useState } from "react";

type Screen = {
  name: string;
  path: string;
  role: string;
  dot: string;
  kpis: { label: string; value: string; delta?: string }[];
  rows: { name: string; meta: string; status: string }[];
};

const SCREENS: Screen[] = [
  {
    name: "NMS",
    path: "nms",
    role: "Recepción · Natatorio",
    dot: "bg-emerald-400",
    kpis: [
      { label: "Socios activos", value: "312", delta: "+9 esta semana" },
      { label: "Cuotas al día", value: "87%", delta: "+4 pp" },
      { label: "Asistencia hoy", value: "64" },
    ],
    rows: [
      { name: "Aqua gym · 18:00", meta: "Prof. Lucía", status: "En curso" },
      { name: "Natación niños · 17:00", meta: "Pileta 2", status: "Confirmada" },
      { name: "Nado libre · 19:30", meta: "12 reservas", status: "Abierta" },
    ],
  },
  {
    name: "MaatWorkCRM",
    path: "maatworkcrm",
    role: "Pipeline comercial",
    dot: "bg-sky-400",
    kpis: [
      { label: "Deals abiertos", value: "24", delta: "+3 vs mes ant." },
      { label: "Tareas hoy", value: "8" },
      { label: "Contactos", value: "1.4k" },
    ],
    rows: [
      { name: "ACME S.A.", meta: "Propuesta enviada", status: "Caliente" },
      { name: "Grupo Andes", meta: "Reunión agendada", status: "En curso" },
      { name: "Delta SRL", meta: "Seguimiento", status: "Pendiente" },
    ],
  },
  {
    name: "Infrannova",
    path: "infrannova",
    role: "Dashboard de obras",
    dot: "bg-amber-400",
    kpis: [
      { label: "Obras activas", value: "12", delta: "+2 vs mes ant." },
      { label: "Avance promedio", value: "68%", delta: "+4,2 pp" },
      { label: "Alertas", value: "3", delta: "2 críticas" },
    ],
    rows: [
      { name: "Ruta 9 · km 412", meta: "Certif. en revisión", status: "Aprob." },
      { name: "Edificio Mitre", meta: "Parte de hoy", status: "En rev." },
      { name: "Puente San Juan", meta: "Redeterminación", status: "Aprob." },
    ],
  },
  {
    name: "Varigas",
    path: "varigas",
    role: "Panel operativo",
    dot: "bg-rose-400",
    kpis: [
      { label: "Extintores", value: "486" },
      { label: "Órdenes activas", value: "17" },
      { label: "Vencen (mes)", value: "29", delta: "agenda llena" },
    ],
    rows: [
      { name: "Supermercado El Sol", meta: "24 extintores", status: "3 por vencer" },
      { name: "Edificio San Martín", meta: "Orden #1182", status: "En proceso" },
      { name: "Banco Provincial", meta: "Inspección anual", status: "OK" },
    ],
  },
];

const INTERVAL_MS = 3800;

export function ProductShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActive((p) => (p + 1) % SCREENS.length), INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div
      className="product-frame relative mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/70 p-2.5 backdrop-blur"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* browser chrome */}
      <div className="flex items-center gap-3 rounded-t-[22px] border-b border-white/10 bg-black/40 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        </div>
        <div className="flex-1 truncate text-center text-[11px] font-medium text-slate-400">
          app.maatwork / {SCREENS[active].path}
        </div>
        <span className="hidden items-center gap-1.5 rounded-full live-chip border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] sm:inline-flex">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" />
          </span>
          Demo en vivo
        </span>
      </div>

      {/* stacked product screens (crossfade) */}
      <div className="relative h-[284px] w-full overflow-hidden bg-[#0a0e1a] sm:h-[340px]">
        {SCREENS.map((s, idx) => (
          <div
            key={s.name}
            aria-hidden={idx !== active}
            className="absolute inset-0 p-4 transition-all duration-700 ease-out sm:p-6"
            style={{
              opacity: idx === active ? 1 : 0,
              transform: idx === active ? "translateY(0)" : "translateY(10px)",
              pointerEvents: idx === active ? "auto" : "none",
            }}
          >
            <Dashboard screen={s} />
          </div>
        ))}
      </div>

      {/* product tabs */}
      <div className="mt-2.5 grid grid-cols-4 gap-1.5">
        {SCREENS.map((s, idx) => (
          <button
            key={s.name}
            type="button"
            onClick={() => setActive(idx)}
            aria-pressed={idx === active}
            className={`relative flex items-center justify-center gap-1.5 overflow-hidden rounded-xl border px-2 py-2 text-[11px] font-semibold transition-colors sm:text-[12px] ${
              idx === active
                ? "border-white/20 bg-white/[0.08] text-white"
                : "border-white/5 bg-white/[0.02] text-slate-400 hover:text-slate-200"
            }`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
            <span className="truncate">{s.name}</span>
            {idx === active && !paused && (
              <span
                key={active}
                aria-hidden
                className="tab-progress"
                style={{ animationDuration: `${INTERVAL_MS}ms` }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

function Dashboard({ screen }: { screen: Screen }) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-baseline justify-between">
        <div>
          <p className="text-[13px] font-bold text-white sm:text-base">{screen.name}</p>
          <p className="text-[10px] text-slate-400 sm:text-[11px]">{screen.role}</p>
        </div>
        <span className="text-[10px] text-slate-500">datos demo</span>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        {screen.kpis.map((k) => (
          <div key={k.label} className="rounded-xl border border-white/10 bg-white/[0.03] px-2.5 py-2">
            <p className="truncate text-[9px] uppercase tracking-wide text-slate-500 sm:text-[10px]">{k.label}</p>
            <p className="font-display text-base font-extrabold tabular-nums text-white sm:text-2xl">{k.value}</p>
            {k.delta && <p className="truncate text-[9px] text-emerald-300/80 sm:text-[10px]">{k.delta}</p>}
          </div>
        ))}
      </div>

      <div className="mt-2.5 flex-1 space-y-1.5 overflow-hidden">
        {screen.rows.map((r) => (
          <div
            key={r.name}
            className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-2.5 py-1.5 sm:py-2"
          >
            <span className="min-w-0 flex-1 truncate text-[11px] text-slate-200 sm:text-[13px]">{r.name}</span>
            <span className="hidden truncate text-[10px] text-slate-500 sm:inline">{r.meta}</span>
            <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[9px] text-slate-300 sm:text-[10px]">
              {r.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
