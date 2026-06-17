"use client";

/**
 * ProductShowcase — the hero's proof object: a live operational panel that
 * cycles the 4 real ecosystem products. Reframed as Mission Control (mono
 * status header + KPI cells + signal rows), not a mac-window browser mock.
 * Data is DEMO (labelled), modelled on each app's real entities — no invented
 * metrics. Pauses on hover/offscreen, tabs clickable, static with reduced motion.
 */
import { useEffect, useRef, useState } from "react";

type Severity = "ok" | "info" | "warning" | "critical";

type Screen = {
  name: string;
  path: string;
  role: string;
  kpis: { label: string; value: string; delta?: string }[];
  rows: { name: string; meta: string; status: string; sev: Severity }[];
};

const SCREENS: Screen[] = [
  {
    name: "NMS",
    path: "nms",
    role: "Recepción · Natatorio",
    kpis: [
      { label: "Socios activos", value: "312", delta: "+9 sem." },
      { label: "Cuotas al día", value: "87%", delta: "+4 pp" },
      { label: "Asistencia hoy", value: "64" },
    ],
    rows: [
      { name: "Aqua gym · 18:00", meta: "Prof. Lucía", status: "En curso", sev: "info" },
      { name: "Natación niños · 17:00", meta: "Pileta 2", status: "Confirmada", sev: "ok" },
      { name: "Nado libre · 19:30", meta: "12 reservas", status: "Abierta", sev: "info" },
    ],
  },
  {
    name: "MaatWorkCRM",
    path: "crm",
    role: "Pipeline comercial",
    kpis: [
      { label: "Deals abiertos", value: "24", delta: "+3 mes" },
      { label: "Tareas hoy", value: "8" },
      { label: "Contactos", value: "1.4k" },
    ],
    rows: [
      { name: "ACME S.A.", meta: "Propuesta enviada", status: "Caliente", sev: "ok" },
      { name: "Grupo Andes", meta: "Reunión agendada", status: "En curso", sev: "info" },
      { name: "Delta SRL", meta: "Seguimiento", status: "Pendiente", sev: "warning" },
    ],
  },
  {
    name: "Infrannova",
    path: "infrannova",
    role: "Dashboard de obras",
    kpis: [
      { label: "Obras activas", value: "12", delta: "+2 mes" },
      { label: "Avance prom.", value: "68%", delta: "+4 pp" },
      { label: "Alertas", value: "3", delta: "2 críticas" },
    ],
    rows: [
      { name: "Ruta 9 · km 412", meta: "Certif. en revisión", status: "Aprobado", sev: "ok" },
      { name: "Edificio Mitre", meta: "Parte de hoy", status: "En revisión", sev: "warning" },
      { name: "Puente San Juan", meta: "Redeterminación", status: "Aprobado", sev: "ok" },
    ],
  },
  {
    name: "Varigas",
    path: "varigas",
    role: "Operación de extintores",
    kpis: [
      { label: "Extintores", value: "486" },
      { label: "Órdenes activas", value: "17" },
      { label: "Vencen (mes)", value: "29", delta: "agenda llena" },
    ],
    rows: [
      { name: "Supermercado El Sol", meta: "24 extintores", status: "3 por vencer", sev: "warning" },
      { name: "Edificio San Martín", meta: "Orden #1182", status: "En proceso", sev: "info" },
      { name: "Banco Provincial", meta: "Inspección anual", status: "OK", sev: "ok" },
    ],
  },
];

const INTERVAL_MS = 4200;

export function ProductShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.15 });
    io.observe(rootRef.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (paused || !visible) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActive((p) => (p + 1) % SCREENS.length), INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused, visible]);

  return (
    <div
      ref={rootRef}
      className="product-frame relative mx-auto max-w-5xl overflow-hidden rounded-[20px] border border-border-strong/40 p-2"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Mission-control status header — no browser chrome */}
      <div className="flex items-center justify-between gap-3 rounded-t-[14px] border-b border-white/[0.07] bg-bg-elev-1 px-4 py-2.5">
        <span className="truncate font-mono text-[10.5px] uppercase tracking-[0.16em] text-slate-500">
          MaatWork · Mission Control / {SCREENS[active].path}
        </span>
        <span className="status-pill status-pill--live">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
          </span>
          Live
        </span>
      </div>

      {/* stacked product screens (crossfade) */}
      <div className="relative h-[300px] w-full overflow-hidden bg-bg-base sm:h-[348px]">
        {SCREENS.map((s, idx) => (
          <div
            key={s.name}
            aria-hidden={idx !== active}
            className="absolute inset-0 p-4 transition-all duration-700 ease-out sm:p-6"
            style={{
              opacity: idx === active ? 1 : 0,
              transform: idx === active ? "translateY(0)" : "translateY(8px)",
              pointerEvents: idx === active ? "auto" : "none",
            }}
          >
            <Panel screen={s} />
          </div>
        ))}
      </div>

      {/* product tabs */}
      <div className="mt-2 grid grid-cols-4 gap-1.5">
        {SCREENS.map((s, idx) => (
          <button
            key={s.name}
            type="button"
            onClick={() => setActive(idx)}
            aria-pressed={idx === active}
            className={`relative flex items-center justify-center gap-1.5 overflow-hidden rounded-lg border px-2 py-2 font-mono text-[10.5px] uppercase tracking-[0.08em] transition-colors ${
              idx === active
                ? "border-border-accent bg-white/[0.05] text-white"
                : "border-white/[0.05] bg-white/[0.015] text-slate-500 hover:text-slate-300"
            }`}
          >
            <span className="truncate">{s.name}</span>
            {idx === active && !paused && visible && (
              <span key={active} aria-hidden className="tab-progress" style={{ animationDuration: `${INTERVAL_MS}ms` }} />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

const DOT: Record<Severity, string> = {
  ok: "signal-dot--ok",
  info: "signal-dot--info",
  warning: "signal-dot--warning",
  critical: "signal-dot--critical",
};

function Panel({ screen }: { screen: Screen }) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-baseline justify-between">
        <div>
          <p className="font-display text-[15px] font-bold text-white sm:text-lg">{screen.name}</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-slate-500 sm:text-[10.5px]">{screen.role}</p>
        </div>
        <span className="mono-tag text-slate-600">Datos demo</span>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        {screen.kpis.map((k) => (
          <div key={k.label} className="rounded-lg border border-white/[0.07] bg-white/[0.02] px-2.5 py-2">
            <p className="truncate font-mono text-[9px] uppercase tracking-[0.1em] text-slate-500 sm:text-[9.5px]">{k.label}</p>
            <p className="font-mono text-base font-bold tabular-nums text-white sm:text-xl">{k.value}</p>
            {k.delta && <p className="truncate font-mono text-[9px] text-success/85 sm:text-[10px]">{k.delta}</p>}
          </div>
        ))}
      </div>

      <div className="mt-2.5 flex-1 space-y-1.5 overflow-hidden">
        {screen.rows.map((r) => (
          <div
            key={r.name}
            className="flex items-center gap-2.5 rounded-md border border-white/[0.05] bg-white/[0.015] px-2.5 py-1.5 sm:py-2"
          >
            <span className={`signal-dot ${DOT[r.sev]}`} aria-hidden />
            <span className="min-w-0 flex-1 truncate text-[11.5px] text-slate-200 sm:text-[13px]">{r.name}</span>
            <span className="hidden truncate font-mono text-[10px] text-slate-500 sm:inline">{r.meta}</span>
            <span className="shrink-0 rounded-full border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.06em] text-slate-300 sm:text-[9.5px]">
              {r.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
