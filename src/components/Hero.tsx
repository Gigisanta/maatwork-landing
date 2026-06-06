/**
 * Hero — versión "premium visual impact".
 * Dashboard mockup con más peso, mejor composición, headline protagonista.
 * Respeta el brief: dark purple profundo, NO gradient text, NO orbs, NO 3D.
 */
export function Hero() {
  return (
    <section
      id="top"
      className="section-base relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-10 items-center">
          {/* Copy */}
          <div className="reveal order-2 lg:order-1 lg:pr-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#7c3aed]/25 bg-[#7c3aed]/10 px-3 py-1.5 text-[12.5px] text-[#d4b8ff] mb-7">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#25D366]" />
              <span className="font-medium">14 días gratis</span>
              <span className="text-[#a78bfa]/60">·</span>
              <span>Sin tarjeta</span>
            </div>

            <h1
              className="font-display text-white tracking-[-0.04em] text-[44px] sm:text-[58px] lg:text-[76px] leading-[0.93]"
              style={{ fontWeight: 800 }}
            >
              Automatizá tu local.
              <br />
              <span className="text-[#d4b8ff]">Sin complicaciones.</span>
            </h1>

            <p className="mt-7 text-[17px] md:text-[18.5px] text-[#d4b8ff] max-w-[540px] leading-[1.55]">
              El SaaS que gyms, salones y academias eligen en Argentina.
              Agenda, cobros, CRM y WhatsApp en un solo lugar — y
              <span className="text-white font-semibold"> dejás de perder entre 2 y 5 horas por día</span>.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/5491100000000?text=Hola%20MaatWork%20%E2%9C%8B%20quiero%20probar"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-whatsapp inline-flex items-center justify-center gap-2.5 px-7 rounded-full text-white font-semibold text-[15.5px] tracking-[-0.01em] shadow-[0_12px_30px_-10px_rgba(37,211,102,0.45)]"
                style={{ height: 56 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
                Comenzar gratis
              </a>
              <a
                href="#funcionalidades"
                className="inline-flex items-center justify-center gap-2 px-7 rounded-full text-white font-semibold text-[15.5px] border border-white/15 hover:border-white/30 hover:bg-white/[0.04] transition"
                style={{ height: 56 }}
              >
                Ver funcionalidades
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>

            <ul className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-[13.5px]">
              <li className="flex items-center gap-1.5 text-[#a78bfa]">
                <Check />+$5.1M AUM gestionados
              </li>
              <li className="text-[#7c3aed]/50">·</li>
              <li className="flex items-center gap-1.5 text-[#a78bfa]">
                <Check />+349 clientes activos
              </li>
              <li className="text-[#7c3aed]/50">·</li>
              <li className="flex items-center gap-1.5 text-[#a78bfa]">
                <Check />+1 año en desarrollo
              </li>
            </ul>
          </div>

          {/* Visual: dashboard mockup con escala protagonista */}
          <div className="reveal order-1 lg:order-2" style={{ transitionDelay: "120ms" }}>
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function Check() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/**
 * DashboardMockup — premium look con:
 * - Marco de navegador con URL visible
 * - Sidebar con logo
 * - KPI cards
 * - Lista de agenda con avatares con iniciales
 * - Floating notifications
 */
function DashboardMockup() {
  return (
    <div className="relative">
      {/* Glow violeta detrás (NO orb, solo un wash radial suave) */}
      <div
        aria-hidden
        className="absolute -inset-12 rounded-[40px] opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(70% 60% at 60% 50%, rgba(124,58,237,0.4) 0%, rgba(168,85,247,0.15) 35%, rgba(15,5,32,0) 75%)",
        }}
      />

      <div
        className="relative rounded-2xl border border-white/10 bg-[#1a0a3e] overflow-hidden shadow-[0_50px_120px_-30px_rgba(124,58,237,0.6),0_0_0_1px_rgba(255,255,255,0.04)]"
      >
        {/* Window header */}
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
              <span className="text-[11px] text-[#a78bfa]/85 tracking-wide">
                app.maatwork.com.ar/panel
              </span>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-[10px] text-[#a78bfa]/70">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
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
              { label: "Agenda", active: true },
              { label: "Clientes", active: false },
              { label: "Cobros", active: false },
              { label: "WhatsApp", active: false },
              { label: "Reportes", active: false },
            ].map((it) => (
              <div
                key={it.label}
                className={[
                  "px-2 py-1.5 rounded-md text-[11px] flex items-center gap-2",
                  it.active ? "bg-white/[0.05] text-white" : "text-[#a78bfa]/70",
                ].join(" ")}
              >
                <span className={`w-1 h-1 rounded-full ${it.active ? "bg-[#7c3aed]" : "bg-[#a78bfa]/30"}`} />
                {it.label}
              </div>
            ))}
            <div className="mt-6 pt-3 border-t border-white/[0.06] flex items-center gap-2 px-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#a855f7] flex items-center justify-center text-[10px] text-white font-bold">IG</div>
              <div className="flex-1 min-w-0">
                <div className="text-[10.5px] text-white truncate">Iron Gym</div>
                <div className="text-[9px] text-[#a78bfa]/60 truncate">Plan Pro</div>
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="p-4 space-y-3.5 overflow-hidden">
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

            {/* KPI row */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { k: "Ingresos mes", v: "$1.24M", d: "+12%" },
                { k: "Cobros hoy", v: "47", d: "+8" },
                { k: "Asistencia", v: "82%", d: "+3%" },
              ].map((kpi) => (
                <div
                  key={kpi.k}
                  className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-2.5 py-2"
                >
                  <div className="text-[9.5px] text-[#a78bfa]/80">{kpi.k}</div>
                  <div className="text-white text-[15px] font-bold tracking-tight mt-0.5">
                    {kpi.v}
                  </div>
                  <div className="text-[9px] text-[#25D366] font-medium">{kpi.d}</div>
                </div>
              ))}
            </div>

            {/* Agenda list */}
            <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[11px] text-white font-semibold">Agenda — hoy</span>
                <span className="text-[9px] text-[#a78bfa]/70">ver todo →</span>
              </div>
              <div className="space-y-1.5">
                {[
                  { t: "09:00", n: "Lucia M.", s: "CrossFit", init: "LM", color: "from-[#a855f7] to-[#7c3aed]", ok: true },
                  { t: "10:30", n: "Diego R.", s: "Funcional", init: "DR", color: "from-[#f7cf47] to-[#ec7356]", ok: true },
                  { t: "12:00", n: "Camila S.", s: "Boxeo", init: "CS", color: "from-[#5ab1f3] to-[#7c3aed]", ok: false },
                  { t: "17:30", n: "Joaquín P.", s: "Musculación", init: "JP", color: "from-[#61c39d] to-[#0f0520]", ok: false },
                ].map((row, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 text-[10.5px] py-1.5 px-2 rounded-md hover:bg-white/[0.03]"
                  >
                    <span className="text-[#a78bfa]/85 w-9 tabular-nums font-medium">{row.t}</span>
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${row.color} flex items-center justify-center text-[8.5px] text-white font-bold`}>
                      {row.init}
                    </div>
                    <span className="flex-1 text-white font-medium truncate">{row.n}</span>
                    <span className="text-[8.5px] text-[#a78bfa]/60 border border-white/10 rounded px-1.5 py-0.5 hidden sm:inline">
                      {row.s}
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating tag 1 */}
      <div className="hidden md:flex absolute -left-4 top-20 items-center gap-2.5 rounded-full border border-white/10 bg-[#0f0520] px-3.5 py-2 shadow-2xl">
        <span className="relative flex w-2 h-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping" />
          <span className="relative inline-flex rounded-full w-2 h-2 bg-[#25D366]" />
        </span>
        <span className="text-[12px] text-white font-medium">Cobro automático · 14:22</span>
      </div>
      {/* Floating tag 2 */}
      <div className="hidden md:flex absolute -right-2 bottom-14 items-center gap-2.5 rounded-full border border-white/10 bg-[#0f0520] px-3.5 py-2 shadow-2xl">
        <div className="flex -space-x-1.5">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#a855f7] to-[#7c3aed] border-2 border-[#0f0520]" />
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#f7cf47] to-[#ec7356] border-2 border-[#0f0520]" />
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#5ab1f3] to-[#7c3aed] border-2 border-[#0f0520]" />
        </div>
        <span className="text-[12px] text-white font-medium">+3 turnos nuevos</span>
      </div>
    </div>
  );
}
