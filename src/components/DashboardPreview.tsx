"use client";

import { useEffect, useState } from "react";

/**
 * DashboardPreview v2 — el app preview WOW oficial de MaatWork.
 *
 * Estructura (todo en un solo dashboard realista):
 *   ┌─────────────────────────────────────────────────────────────────────┐
 *   │  ●●●  app.maatwork.com.ar/panel                  🟢 Live · 14:22   │
 *   ├────────┬─────────────────────────────────────────┬───────────────────┤
 *   │ SIDEBAR│ HEADER (greeting + filter)              │  DETAIL PANEL     │
 *   │ · avtr │                                         │  (con tabs)       │
 *   │ · 5    │  3 KPI cards animados (cycle)           │  · info cliente   │
 *   │  cli   │                                         │  · chart mini     │
 *   │        │  ┌──────────────────────────────────┐   │  · mini chat      │
 *   │  menú  │  │ AGENDA TIMELINE (5 items)        │   │  · confirm WA     │
 *   │        │  │ status: confirmado/pendiente/    │   │                   │
 *   │        │  │          en curso                │   │                   │
 *   │        │  └──────────────────────────────────┘   │                   │
 *   │        │  LIVE ACTIVITY FEED (scroll auto)      │                   │
 *   │        │  ━━━━━━━━ items que aparecen ━━━━━━━━  │                   │
 *   └────────┴─────────────────────────────────────────┴───────────────────┘
 *   Floating tags (3): "Cobro automático", "+3 turnos", "Live activity"
 *   Cursor simulado
 *   Toast stack (3 mensajes, loop)
 *
 * Animaciones CSS (sin libs):
 *   - KPI cycle: 2.6s loop
 *   - Toast pop: 9s loop, stagger 3/7/11s
 *   - Live feed: marquee vertical
 *   - Cursor move: 6s loop
 *   - Floating tags: 5s/7s float
 *   - Row hover: translateX 3px
 *   - Pulse ring: en dot Live
 */

type Cliente = {
  id: string;
  nombre: string;
  init: string;
  grad: number;
  ultima: string;
  visitas: number;
};

const CLIENTES: Cliente[] = [
  { id: "1", nombre: "Lucía Méndez",  init: "LM", grad: 1, ultima: "Hoy 09:00", visitas: 47 },
  { id: "2", nombre: "Diego Romero",  init: "DR", grad: 2, ultima: "Hoy 10:30", visitas: 23 },
  { id: "3", nombre: "Camila Suárez", init: "CS", grad: 3, ultima: "Hoy 12:00", visitas: 12 },
  { id: "4", nombre: "Joaquín Pérez", init: "JP", grad: 4, ultima: "Hoy 17:30", visitas: 88 },
  { id: "5", nombre: "Sofía Álvarez", init: "SA", grad: 5, ultima: "Mié 19:00", visitas: 34 },
];

type AgendaItem = {
  t: string;
  nombre: string;
  cls: string;
  init: string;
  grad: number;
  status: "confirmado" | "pendiente" | "curso";
};

const AGENDA: AgendaItem[] = [
  { t: "09:00", nombre: "Lucía M.",  cls: "CrossFit",    init: "LM", grad: 1, status: "curso" },
  { t: "10:30", nombre: "Diego R.",  cls: "Funcional",   init: "DR", grad: 2, status: "confirmado" },
  { t: "12:00", nombre: "Camila S.", cls: "Boxeo",       init: "CS", grad: 3, status: "confirmado" },
  { t: "17:30", nombre: "Joaquín P.",cls: "Musculación", init: "JP", grad: 4, status: "pendiente" },
  { t: "19:00", nombre: "Sofía Á.",  cls: "Yoga",        init: "SA", grad: 5, status: "pendiente" },
];

const KPIS = [
  { label: "Ingresos del mes",   value: "$1.24M", delta: "+12% vs. mes anterior" },
  { label: "Cobros cobrados hoy", value: "47",    delta: "+8 vs. ayer" },
  { label: "Asistencia semanal",  value: "82%",   delta: "+3 puntos" },
];

const STATUS_STYLES: Record<AgendaItem["status"], { bg: string; text: string; label: string; dot: string }> = {
  curso:       { bg: "bg-[#7c3aed]/20", text: "text-[#a78bfa]", label: "En curso",   dot: "bg-[#7c3aed]" },
  confirmado:  { bg: "bg-[#25D366]/15", text: "text-[#25D366]", label: "Confirmado", dot: "bg-[#25D366]" },
  pendiente:   { bg: "bg-white/[0.05]", text: "text-[#a78bfa]/75", label: "Pendiente", dot: "bg-[#a78bfa]/40" },
};

const ACTIVITY = [
  { t: "14:22", icon: "money",  text: <><span className="text-white font-medium">+$24.500</span> cobrados de Diego R.</> },
  { t: "14:19", icon: "wa",     text: <><span className="text-white font-medium">Camila S.</span> confirmó por WhatsApp</> },
  { t: "14:15", icon: "user",   text: <><span className="text-white font-medium">Sofía Á.</span> completó el alta</> },
  { t: "14:08", icon: "money",  text: <><span className="text-white font-medium">+$18.200</span> cobrados de Joaquín P.</> },
  { t: "14:01", icon: "wa",     text: <>Recordatorio enviado a <span className="text-white font-medium">5 clientes</span></> },
  { t: "13:54", icon: "agenda", text: <>Nuevo turno: <span className="text-white font-medium">Martina V. · 16:00</span></> },
  { t: "13:47", icon: "money",  text: <><span className="text-white font-medium">+$12.800</span> cobrados de Lucía M.</> },
  { t: "13:40", icon: "wa",     text: <><span className="text-white font-medium">Diego R.</span> confirmó por WhatsApp</> },
];

export function DashboardPreview() {
  const [kpiFocus, setKpiFocus] = useState(0);
  const [clock, setClock] = useState("14:22");
  const activeItem = AGENDA.find((a) => a.status === "curso") ?? AGENDA[0];

  useEffect(() => {
    const id = window.setInterval(() => setKpiFocus((v) => (v + 1) % KPIS.length), 2600);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const update = () => {
      const d = new Date();
      const hh = String(d.getHours()).padStart(2, "0");
      const mm = String(d.getMinutes()).padStart(2, "0");
      setClock(`${hh}:${mm}`);
    };
    update();
    const id = window.setInterval(update, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="relative w-full">
      {/* Soft radial glow behind (no orb, just a wash) */}
      <div
        aria-hidden
        className="absolute -inset-12 rounded-[40px] opacity-80 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 45%, rgba(124,58,237,0.45) 0%, rgba(168,85,247,0.20) 35%, rgba(15,5,32,0) 75%)",
        }}
      />

      {/* Browser frame — más alto y protagónico */}
      <div
        className="relative rounded-2xl border border-white/10 bg-[#1a0a3e] overflow-hidden shadow-[0_80px_180px_-30px_rgba(124,58,237,0.65),0_0_0_1px_rgba(255,255,255,0.04)]"
        role="img"
        aria-label="Vista previa del panel de MaatWork"
      >
        {/* Window header */}
        <div className="h-10 px-4 flex items-center gap-2 border-b border-white/[0.06] bg-[#0f0520]/85">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ec7356]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#f7cf47]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]" />
          <div className="ml-3 flex-1 max-w-[400px] mx-auto">
            <div className="h-6 rounded-md bg-white/[0.04] border border-white/[0.06] flex items-center px-2.5 gap-2">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" aria-hidden>
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span className="text-[11px] text-[#a78bfa]/85 tracking-wide truncate">
                app.maatwork.com.ar/panel
              </span>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-[10px] text-[#a78bfa]/70">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-70 animate-ping" />
              <span className="relative inline-flex rounded-full w-2 h-2 bg-[#25D366]" />
            </span>
            Live · {clock}
          </div>
        </div>

        {/* 3-col layout — más alto */}
        <div className="grid grid-cols-[160px_1fr_220px] h-[560px] sm:h-[600px]">
          {/* ===== SIDEBAR ===== */}
          <aside className="border-r border-white/[0.06] bg-[#0f0520]/55 p-3 space-y-3 overflow-hidden">
            <div className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-white/[0.05] border border-white/[0.05]">
              <div className="w-4 h-4 rounded-sm bg-gradient-to-br from-[#7c3aed] to-[#a855f7]" />
              <span className="text-[11px] text-white font-semibold">Iron Gym</span>
            </div>
            <div className="space-y-0.5">
              {[
                { label: "Agenda", active: true },
                { label: "Clientes", active: false },
                { label: "Cobros", active: false },
                { label: "WhatsApp", active: false },
                { label: "Reportes", active: false },
              ].map((it) => (
                <div
                  key={it.label}
                  className={[
                    "px-2 py-1.5 rounded-md text-[10.5px] flex items-center gap-2",
                    it.active ? "bg-white/[0.05] text-white" : "text-[#a78bfa]/70",
                  ].join(" ")}
                >
                  <span className={`w-1 h-1 rounded-full ${it.active ? "bg-[#7c3aed]" : "bg-[#a78bfa]/30"}`} />
                  {it.label}
                </div>
              ))}
            </div>

            {/* Clientes list */}
            <div className="pt-2 border-t border-white/[0.06]">
              <div className="text-[9px] text-[#a78bfa]/60 uppercase tracking-wider px-2 mb-1.5">
                Clientes hoy
              </div>
              <div className="space-y-1">
                {CLIENTES.map((c) => (
                  <div
                    key={c.id}
                    className="flex items-center gap-1.5 px-2 py-1 rounded text-[10px] row-hover"
                  >
                    <div className={`w-4 h-4 rounded-full avatar-grad-${c.grad} flex items-center justify-center text-[7px] text-white font-bold`}>
                      {c.init}
                    </div>
                    <span className="text-white/85 truncate flex-1">{c.nombre.split(" ")[0]}</span>
                    <span className="text-[8px] text-[#a78bfa]/55">{c.ultima.replace("Hoy ", "")}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* ===== MAIN ===== */}
          <div className="p-4 space-y-3.5 overflow-hidden flex flex-col">
            {/* Greeting + filter */}
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10.5px] text-[#a78bfa]/80">Buenas tardes,</div>
                <div className="text-white text-[15px] font-bold tracking-tight">Martín</div>
              </div>
              <div className="text-[10px] text-[#a78bfa]/70 border border-white/10 rounded-md px-2.5 py-1.5 flex items-center gap-1.5">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Hoy · 12 turnos
              </div>
            </div>

            {/* KPI cards (3) — cycle de highlight */}
            <div className="grid grid-cols-3 gap-2">
              {KPIS.map((kpi, i) => {
                const focused = kpiFocus === i;
                return (
                  <div
                    key={kpi.label}
                    className={[
                      "rounded-lg border px-2.5 py-2 transition-all duration-500",
                      focused
                        ? "bg-[#7c3aed]/15 border-[#7c3aed]/40 shadow-[0_0_0_1px_rgba(124,58,237,0.25),0_8px_24px_-12px_rgba(124,58,237,0.5)]"
                        : "bg-white/[0.03] border-white/[0.06]",
                    ].join(" ")}
                    style={{ transitionTimingFunction: "var(--ease-out-quart)" }}
                  >
                    <div className="text-[9px] text-[#a78bfa]/80 truncate">{kpi.label}</div>
                    <div className="text-white text-[15px] font-bold tracking-tight mt-0.5">
                      {kpi.value}
                    </div>
                    <div className="text-[8.5px] text-[#25D366] font-medium mt-0.5 truncate">
                      {kpi.delta}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Agenda timeline */}
            <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[11px] text-white font-semibold">Agenda — hoy</span>
                <span className="text-[9px] text-[#a78bfa]/70">ver todo →</span>
              </div>
              <div className="space-y-1.5">
                {AGENDA.map((row, i) => {
                  const styles = STATUS_STYLES[row.status];
                  return (
                    <div
                      key={row.t}
                      className={[
                        "row-hover flex items-center gap-2.5 text-[10.5px] py-1.5 px-2 rounded-md border border-transparent",
                        row.status === "curso" ? "bg-[#7c3aed]/8 border-[#7c3aed]/25" : "",
                      ].join(" ")}
                      style={{
                        animation: `fade-up 0.6s var(--ease-out-quart) ${i * 80}ms both`,
                      }}
                    >
                      <span className="text-[#a78bfa]/85 w-9 tabular-nums font-medium">{row.t}</span>
                      <div className={`avatar-grad-${row.grad} w-6 h-6 rounded-full flex items-center justify-center text-[8.5px] text-white font-bold`}>
                        {row.init}
                      </div>
                      <span className="flex-1 text-white font-medium truncate">{row.nombre}</span>
                      <span className="text-[8.5px] text-[#a78bfa]/60 border border-white/10 rounded px-1.5 py-0.5 hidden sm:inline">
                        {row.cls}
                      </span>
                      <span
                        className={`text-[8.5px] px-1.5 py-0.5 rounded-full font-medium whitespace-nowrap flex items-center gap-1 border border-white/5 ${styles.bg} ${styles.text}`}
                      >
                        <span className={`w-1 h-1 rounded-full ${styles.dot} ${row.status === "curso" ? "animate-pulse-soft" : ""}`} />
                        {styles.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Live activity feed */}
            <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3 mt-auto">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="relative flex w-1.5 h-1.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-70 animate-ping" />
                    <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-[#25D366]" />
                  </span>
                  <span className="text-[11px] text-white font-semibold">Actividad en vivo</span>
                </div>
                <span className="text-[9px] text-[#a78bfa]/70">últimos 30 min</span>
              </div>
              <div
                className="space-y-1 overflow-hidden"
                style={{ height: 60 }}
              >
                <div className="animate-marquee-vertical">
                  {[...ACTIVITY, ...ACTIVITY].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-[10px] py-1"
                    >
                      <span className="text-[#a78bfa]/55 w-9 tabular-nums font-medium">{item.t}</span>
                      <ActivityIcon kind={item.icon as "money" | "wa" | "user" | "agenda"} />
                      <span className="text-[#d4b8ff] truncate">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ===== DETAIL PANEL ===== */}
          <aside className="border-l border-white/[0.06] bg-[#0f0520]/35 p-3 space-y-3 overflow-hidden">
            <div className="flex flex-col items-center text-center pt-1">
              <div className={`avatar-grad-${activeItem.grad} w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-[16px] mb-2 ring-2 ring-[#7c3aed]/30`}>
                {activeItem.init}
              </div>
              <div className="text-white text-[12px] font-semibold leading-tight">
                {activeItem.nombre}
              </div>
              <div className="text-[9.5px] text-[#a78bfa]/70 mt-0.5">{activeItem.cls}</div>
            </div>

            <div className="rounded-md border border-white/[0.06] bg-white/[0.02] p-2 space-y-1.5">
              <div className="flex items-center justify-between text-[9.5px]">
                <span className="text-[#a78bfa]/70">Próximo turno</span>
                <span className="text-white font-semibold">{activeItem.t} hs</span>
              </div>
              <div className="flex items-center justify-between text-[9.5px]">
                <span className="text-[#a78bfa]/70">Visitas totales</span>
                <span className="text-white font-semibold">47</span>
              </div>
              <div className="flex items-center justify-between text-[9.5px]">
                <span className="text-[#a78bfa]/70">Plan</span>
                <span className="text-white font-semibold">Mensual</span>
              </div>
            </div>

            {/* Mini chart */}
            <div className="rounded-md border border-white/[0.06] bg-white/[0.02] p-2">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[9.5px] text-white font-medium">Asistencia</span>
                <span className="text-[8.5px] text-[#25D366] font-medium">+12%</span>
              </div>
              <MiniChart />
            </div>

            {/* WhatsApp confirm badge */}
            <div className="rounded-md border border-[#25D366]/20 bg-[#25D366]/8 p-2 flex items-start gap-2">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#25D366]/20 flex items-center justify-center mt-0.5">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="#25D366" aria-hidden>
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 9.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[9.5px] text-white font-medium leading-tight">
                  Confirmó por WhatsApp
                </div>
                <div className="text-[8.5px] text-[#a78bfa]/70 mt-0.5">
                  Hace 12 minutos
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Floating tag 1: cobro automático */}
      <div
        className="hidden md:flex absolute -left-3 lg:-left-6 top-20 lg:top-24 items-center gap-2.5 rounded-full border border-white/10 bg-[#0f0520] px-3.5 py-2 shadow-2xl animate-float-slow"
        style={{ zIndex: 5 }}
      >
        <span className="relative flex w-2 h-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping" />
          <span className="relative inline-flex rounded-full w-2 h-2 bg-[#25D366]" />
        </span>
        <span className="text-[12px] text-white font-medium">Cobro automático · {clock}</span>
      </div>

      {/* Floating tag 2: nuevos turnos */}
      <div
        className="hidden md:flex absolute -right-2 lg:-right-4 bottom-20 lg:bottom-28 items-center gap-2.5 rounded-full border border-white/10 bg-[#0f0520] px-3.5 py-2 shadow-2xl animate-float-slower"
        style={{ zIndex: 5, animationDelay: "1s" }}
      >
        <div className="flex -space-x-1.5">
          <div className="w-5 h-5 rounded-full avatar-grad-1 border-2 border-[#0f0520]" />
          <div className="w-5 h-5 rounded-full avatar-grad-2 border-2 border-[#0f0520]" />
          <div className="w-5 h-5 rounded-full avatar-grad-3 border-2 border-[#0f0520]" />
        </div>
        <span className="text-[12px] text-white font-medium">+3 turnos nuevos</span>
      </div>

      {/* Cursor simulado */}
      <CursorPointer />

      {/* Toast stack */}
      <ToastStack />
    </div>
  );
}

/* ================================================================
   Sub-components
   ================================================================ */

function ActivityIcon({ kind }: { kind: "money" | "wa" | "user" | "agenda" }) {
  const wrap = "flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center";
  if (kind === "money")
    return (
      <div className={`${wrap} bg-[#7c3aed]/30`}>
        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="3" strokeLinecap="round" aria-hidden>
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      </div>
    );
  if (kind === "wa")
    return (
      <div className={`${wrap} bg-[#25D366]/20`}>
        <svg width="8" height="8" viewBox="0 0 24 24" fill="#25D366" aria-hidden>
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 9.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
        </svg>
      </div>
    );
  if (kind === "user")
    return (
      <div className={`${wrap} bg-white/[0.06]`}>
        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </div>
    );
  return (
    <div className={`${wrap} bg-white/[0.06]`}>
      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    </div>
  );
}

function MiniChart() {
  // 7 bars con alturas distintas (asistencia semanal)
  const bars = [55, 70, 48, 82, 65, 90, 78];
  return (
    <div className="flex items-end gap-0.5 h-[28px]">
      {bars.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm"
          style={{
            height: `${h}%`,
            background: i === 3
              ? "linear-gradient(180deg, #a855f7 0%, #7c3aed 100%)"
              : "rgba(124, 58, 237, 0.25)",
            animation: `bar-grow 0.8s var(--ease-out-quart) ${i * 60}ms both`,
            transformOrigin: "bottom",
          }}
        />
      ))}
    </div>
  );
}

function CursorPointer() {
  return (
    <div
      className="hidden lg:block absolute pointer-events-none"
      style={{
        right: "26%",
        top: "62%",
        zIndex: 7,
        animation: "cursor-move 6s ease-in-out infinite",
      }}
      aria-hidden
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M3 2L21 12L13 14L11 22L3 2Z"
          fill="white"
          stroke="#0f0520"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function ToastStack() {
  const toasts = [
    {
      icon: "whatsapp" as const,
      iconBg: "bg-[#25D366]",
      title: "Confirmación enviada",
      body: "12 turnos confirmados por WhatsApp",
      delay: 3,
    },
    {
      icon: "money" as const,
      iconBg: "bg-[#7c3aed]",
      title: "Cobro recibido",
      body: "+$24.500 de Diego R. (Mensual)",
      delay: 7,
    },
    {
      icon: "user" as const,
      iconBg: "bg-gradient-to-br from-[#a855f7] to-[#7c3aed]",
      title: "Nuevo cliente",
      body: "Sofía Álvarez completó el alta",
      delay: 11,
    },
  ];

  return (
    <div
      className="hidden lg:flex flex-col gap-2 absolute pointer-events-none"
      style={{ right: "4%", top: "12%", zIndex: 8 }}
      aria-hidden
    >
      {toasts.map((t, i) => (
        <div
          key={i}
          className="flex items-start gap-2.5 rounded-lg border border-white/10 bg-[#0f0520] px-3 py-2 shadow-2xl min-w-[220px] max-w-[260px]"
          style={{
            animation: `toast-pop 9s var(--ease-out-quart) ${t.delay}s infinite both`,
          }}
        >
          <div className={`flex-shrink-0 w-6 h-6 rounded-full ${t.iconBg} flex items-center justify-center mt-0.5`}>
            {t.icon === "whatsapp" && (
              <svg width="11" height="11" viewBox="0 0 24 24" fill="white" aria-hidden>
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 9.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
              </svg>
            )}
            {t.icon === "money" && (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            )}
            {t.icon === "user" && (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[10.5px] text-white font-semibold leading-tight">{t.title}</div>
            <div className="text-[9.5px] text-[#a78bfa]/75 mt-0.5 leading-snug">{t.body}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
