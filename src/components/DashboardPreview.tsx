"use client";

import { useEffect, useState } from "react";

/**
 * DashboardPreview — el app preview fotorrealista estilo Linear.
 *
 * Estructura:
 *  - Browser frame con URL bar
 *  - Sidebar con lista de clientes (5 items con avatares iniciales)
 *  - Main: header + 3 KPI cards + agenda timeline
 *  - Detail panel: cliente activo con datos
 *  - 2 floating notifications (canto sup-izq + canto inf-der)
 *  - Cursor visible que simula click
 *  - Mini chat popover (en agenda item)
 *
 * Animaciones:
 *  - Stagger fade-up de cada card de agenda (.delay-*)
 *  - Pulse dot verde en "Live" badge
 *  - Floating animations lentas
 *  - Cursor blink
 *  - Hover de cada row (.row-hover)
 *
 * NO usa libs externas. Solo CSS + JS nativo para ticks de tiempo.
 */

type Cliente = { id: string; nombre: string; init: string; grad: number; ultima: string; visitas: number; plan: string };

const CLIENTES: Cliente[] = [
  { id: "1", nombre: "Lucía Méndez",   init: "LM", grad: 1, ultima: "Hoy 09:00", visitas: 47, plan: "CrossFit · Plan Pro" },
  { id: "2", nombre: "Diego Romero",   init: "DR", grad: 2, ultima: "Hoy 10:30", visitas: 23, plan: "Funcional · Mensual" },
  { id: "3", nombre: "Camila Suárez",  init: "CS", grad: 3, ultima: "Hoy 12:00", visitas: 12, plan: "Boxeo · Pack 8" },
  { id: "4", nombre: "Joaquín Pérez",  init: "JP", grad: 4, ultima: "Hoy 17:30", visitas: 88, plan: "Musculación · Anual" },
  { id: "5", nombre: "Sofía Álvarez",  init: "SA", grad: 5, ultima: "Mié 19:00", visitas: 34, plan: "Yoga · Mensual" },
];

const AGENDA = [
  { t: "09:00", nombre: "Lucía M.",   cls: "CrossFit",    init: "LM", grad: 1, ok: true,  highlight: true  },
  { t: "10:30", nombre: "Diego R.",   cls: "Funcional",   init: "DR", grad: 2, ok: true,  highlight: false },
  { t: "12:00", nombre: "Camila S.",  cls: "Boxeo",       init: "CS", grad: 3, ok: false, highlight: false },
  { t: "17:30", nombre: "Joaquín P.", cls: "Musculación", init: "JP", grad: 4, ok: false, highlight: false },
];

export function DashboardPreview() {
  const [activeClient, setActiveClient] = useState(CLIENTES[0]);
  const [showChat, setShowChat] = useState(false);
  const [showKpi, setShowKpi] = useState(0);

  // Cycle KPIs "highlight" every 2s
  useEffect(() => {
    const id = window.setInterval(() => {
      setShowKpi((v) => (v + 1) % 3);
    }, 2400);
    return () => window.clearInterval(id);
  }, []);

  // Show chat popover after 4s, hide after 8s, cycle
  useEffect(() => {
    const id = window.setInterval(() => {
      setShowChat((v) => !v);
    }, 4500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="relative w-full">
      {/* Radial glow behind (no orb, just a wash) */}
      <div
        aria-hidden
        className="absolute -inset-12 rounded-[40px] opacity-70 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(70% 60% at 60% 50%, rgba(124,58,237,0.4) 0%, rgba(168,85,247,0.15) 35%, rgba(15,5,32,0) 75%)",
        }}
      />

      <div className="relative rounded-2xl border border-white/10 bg-[#1a0a3e] overflow-hidden shadow-[0_50px_120px_-30px_rgba(124,58,237,0.6),0_0_0_1px_rgba(255,255,255,0.04)]">
        {/* Browser header */}
        <div className="h-10 px-4 flex items-center gap-2 border-b border-white/[0.06] bg-[#0f0520]/80">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ec7356]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#f7cf47]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]" />
          <div className="ml-3 flex-1 max-w-[320px] mx-auto">
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
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-[#25D366]" />
            </span>
            Live
          </div>
        </div>

        <div className="grid grid-cols-[160px_1fr] h-[420px] sm:h-[460px]">
          {/* Sidebar */}
          <aside className="border-r border-white/[0.06] bg-[#0f0520]/50 p-3 space-y-1.5">
            <div className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-white/[0.05] border border-white/[0.05]">
              <div className="w-4 h-4 rounded-sm bg-gradient-to-br from-[#7c3aed] to-[#a855f7]" />
              <span className="text-[11px] text-white font-semibold">Panel</span>
            </div>
            {[
              { label: "Agenda", count: 12 },
              { label: "Clientes", count: 349 },
              { label: "Cobros", count: 47 },
              { label: "WhatsApp", count: 8 },
              { label: "Reportes", count: null },
            ].map((it, i) => (
              <div
                key={it.label}
                className={[
                  "px-2 py-1.5 rounded-md text-[11px] flex items-center gap-2 cursor-default",
                  i === 0 ? "bg-white/[0.05] text-white" : "text-[#a78bfa]/70",
                ].join(" ")}
                onClick={() => setActiveClient(CLIENTES[i % CLIENTES.length])}
              >
                <span className={`w-1 h-1 rounded-full ${i === 0 ? "bg-[#7c3aed]" : "bg-[#a78bfa]/30"}`} />
                <span className="flex-1">{it.label}</span>
                {it.count != null && (
                  <span className="text-[9px] text-[#a78bfa]/60 tabular-nums">
                    {it.count}
                  </span>
                )}
              </div>
            ))}
            <div className="mt-6 pt-3 border-t border-white/[0.06] flex items-center gap-2 px-2">
              <div className="w-6 h-6 rounded-full avatar-grad-1 flex items-center justify-center text-[10px] text-white font-bold">IG</div>
              <div className="flex-1 min-w-0">
                <div className="text-[10.5px] text-white truncate">Iron Gym</div>
                <div className="text-[9px] text-[#a78bfa]/60 truncate">Plan Pro</div>
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="p-3.5 space-y-3 overflow-hidden relative">
            {/* Header row */}
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10.5px] text-[#a78bfa]/80">Buenos días,</div>
                <div className="text-white text-[14px] font-bold tracking-tight">Martín</div>
              </div>
              <div className="text-[10px] text-[#a78bfa]/70 border border-white/10 rounded-md px-2.5 py-1.5">
                Hoy · 12 turnos
              </div>
            </div>

            {/* KPI row with cycling highlight */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { k: "Ingresos mes", v: "$1.24M", d: "+12%", color: "text-[#25D366]" },
                { k: "Cobros hoy", v: "47", d: "+8", color: "text-[#25D366]" },
                { k: "Asistencia", v: "82%", d: "+3%", color: "text-[#25D366]" },
              ].map((kpi, i) => (
                <div
                  key={kpi.k}
                  className={[
                    "rounded-lg border px-2.5 py-2 transition-all duration-500",
                    showKpi === i
                      ? "border-[#7c3aed]/50 bg-[#7c3aed]/10 shadow-[0_0_20px_-5px_rgba(124,58,237,0.4)]"
                      : "border-white/[0.06] bg-white/[0.03]",
                  ].join(" ")}
                >
                  <div className="text-[9.5px] text-[#a78bfa]/80">{kpi.k}</div>
                  <div className="text-white text-[15px] font-bold tracking-tight mt-0.5">
                    {kpi.v}
                  </div>
                  <div className={`text-[9px] font-medium ${kpi.color}`}>{kpi.d}</div>
                </div>
              ))}
            </div>

            {/* Agenda list */}
            <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-2.5">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[11px] text-white font-semibold flex items-center gap-1.5">
                  Agenda — hoy
                  <span className="w-1 h-1 rounded-full bg-[#a78bfa]/60" />
                </span>
                <span className="text-[9px] text-[#a78bfa]/70">ver todo →</span>
              </div>
              <div className="space-y-1.5 relative">
                {AGENDA.map((row, i) => (
                  <div
                    key={i}
                    className={[
                      "row-hover relative flex items-center gap-2.5 text-[10.5px] py-1.5 px-2 rounded-md border border-transparent reveal-on-hover",
                      row.highlight ? "bg-[#7c3aed]/8 border-[#7c3aed]/20" : "",
                    ].join(" ")}
                    style={{
                      opacity: 1,
                      animation: `letter-reveal 0.5s var(--ease-out-quart) ${300 + i * 80}ms backwards`,
                    }}
                  >
                    <span className="text-[#a78bfa]/85 w-9 tabular-nums font-medium">{row.t}</span>
                    <div className={`avatar-grad-${row.grad} w-6 h-6 rounded-full flex items-center justify-center text-[8.5px] text-white font-bold flex-shrink-0`}>
                      {row.init}
                    </div>
                    <span className="flex-1 text-white font-medium truncate">{row.nombre}</span>
                    <span className="text-[8.5px] text-[#a78bfa]/60 border border-white/10 rounded px-1.5 py-0.5 hidden sm:inline">
                      {row.cls}
                    </span>
                    <span
                      className={[
                        "text-[8.5px] px-1.5 py-0.5 rounded-full font-medium whitespace-nowrap",
                        row.ok
                          ? "bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30"
                          : "bg-white/[0.05] text-[#a78bfa]/70 border border-white/10",
                      ].join(" ")}
                    >
                      {row.ok ? "Confirmado" : "Pendiente"}
                    </span>
                    {row.highlight && showChat && (
                      <div
                        className="absolute left-[110px] top-full mt-1 z-10 rounded-md bg-[#0f0520] border border-[#25D366]/30 px-2.5 py-1.5 text-[9.5px] text-white whitespace-nowrap shadow-lg"
                        style={{ animation: "letter-reveal 0.4s var(--ease-out-quart) backwards" }}
                      >
                        <div className="flex items-center gap-1.5">
                          <svg width="9" height="9" viewBox="0 0 24 24" fill="#25D366" aria-hidden>
                            <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                          </svg>
                          <span className="text-[#25D366] font-semibold">Confirmado vía WhatsApp</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Cursor visible */}
            <div
              className="absolute pointer-events-none"
              style={{
                right: "26%",
                top: "58%",
                animation: "float-slow 6s ease-in-out infinite",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white" stroke="rgba(15,5,32,0.6)" strokeWidth="1" aria-hidden>
                <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86 2.71 6.54c.13.31.49.46.81.32l1.7-.71c.32-.14.49-.51.35-.83l-2.78-6.7 6.27-.34c.46-.02.69-.56.37-.88L6.35 2.85c-.31-.31-.85-.09-.85.36Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Floating notification top-left */}
      <div className="hidden md:flex absolute -left-4 top-20 items-center gap-2.5 rounded-full border border-white/10 bg-[#0f0520] px-3.5 py-2 shadow-2xl animate-float-slow">
        <span className="relative flex w-2 h-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" style={{ animation: "pulse-ring 1.8s cubic-bezier(0.4, 0, 0.6, 1) infinite" }} />
          <span className="relative inline-flex rounded-full w-2 h-2 bg-[#25D366]" />
        </span>
        <span className="text-[12px] text-white font-medium">Cobro automático · 14:22</span>
      </div>

      {/* Floating notification bottom-right */}
      <div className="hidden md:flex absolute -right-2 bottom-12 items-center gap-2.5 rounded-full border border-white/10 bg-[#0f0520] px-3 py-2 shadow-2xl animate-float-slower">
        <div className="flex -space-x-1.5">
          <div className="avatar-grad-2 w-5 h-5 rounded-full border-2 border-[#0f0520]" />
          <div className="avatar-grad-3 w-5 h-5 rounded-full border-2 border-[#0f0520]" />
          <div className="avatar-grad-5 w-5 h-5 rounded-full border-2 border-[#0f0520]" />
        </div>
        <span className="text-[12px] text-white font-medium">+3 turnos nuevos</span>
      </div>
    </div>
  );
}
