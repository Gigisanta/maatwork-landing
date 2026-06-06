/**
 * Hero — dark purple profundo, tipografía protagonista, product mockup con peso.
 * NO floating orbs, NO gradient on text (solo en el logo).
 * Estrategia: el dashboard mockup es el segundo protagonista visual.
 */
export function Hero() {
  return (
    <section
      id="top"
      className="section-base relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden"
    >
      <div className="mx-auto max-w-[1240px] px-6 md:px-8">
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-14 items-center">
          {/* Copy */}
          <div className="reveal order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[12.5px] text-[#a78bfa] mb-6">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
              Hecho en Argentina · Soporte en español
            </div>

            <h1
              className="font-display text-white tracking-[-0.04em] text-[42px] sm:text-[56px] lg:text-[72px] leading-[0.95]"
              style={{ fontWeight: 800 }}
            >
              Automatizá tu local.
              <br />
              <span className="text-[#d4b8ff]">Sin complicaciones.</span>
            </h1>

            <p className="mt-6 text-[16.5px] md:text-[18px] text-[#d4b8ff] max-w-[520px] leading-[1.55]">
              El SaaS que gyms, salones y academias eligen en Argentina.
              Agenda, cobros, CRM y WhatsApp en un solo lugar — y dejás de
              perder entre 2 y 5 horas por día.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/5491100000000?text=Hola%20MaatWork%20%E2%9C%8B%20quiero%20probar"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-whatsapp inline-flex items-center justify-center gap-2.5 px-7 rounded-full text-white font-semibold text-[15.5px] tracking-[-0.01em]"
                style={{ height: 54 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
                Comenzar gratis
              </a>
              <a
                href="#funcionalidades"
                className="inline-flex items-center justify-center px-7 rounded-full text-white font-semibold text-[15.5px] border border-white/15 hover:border-white/30 hover:bg-white/[0.04] transition"
                style={{ height: 54 }}
              >
                Ver funcionalidades
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2.5 text-[13.5px] text-[#a78bfa]">
              <li className="flex items-center gap-1.5">
                <Check />+$5.1M AUM gestionados
              </li>
              <li className="flex items-center gap-1.5">
                <Check />+349 clientes activos
              </li>
              <li className="flex items-center gap-1.5">
                <Check />+1 año en desarrollo
              </li>
            </ul>
          </div>

          {/* Visual: dashboard mockup con más presencia */}
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
 * DashboardMockup — versión "premium" con marco de navegador, KPIs grandes
 * y una actividad reciente. Es la pieza visual más fuerte del hero.
 */
function DashboardMockup() {
  return (
    <div className="relative lg:scale-[1.04] lg:origin-right">
      {/* Glow violeta sutil detrás del mockup (NO orb, solo un wash) */}
      <div
        aria-hidden
        className="absolute -inset-10 rounded-[40px] opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(70% 60% at 50% 40%, rgba(124,58,237,0.35) 0%, rgba(168,85,247,0.18) 30%, rgba(15,5,32,0) 70%)",
        }}
      />

      {/* Browser frame */}
      <div
        className="relative rounded-2xl border border-white/10 bg-[#1a0a3e] overflow-hidden shadow-[0_40px_100px_-30px_rgba(124,58,237,0.55)]"
        style={{ aspectRatio: "5 / 4" }}
      >
        {/* Window header */}
        <div className="h-10 px-4 flex items-center gap-2 border-b border-white/[0.06] bg-[#0f0520]/70">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ec7356]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#f7cf47]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]" />
          <div className="ml-3 flex-1 max-w-[280px] mx-auto">
            <div className="h-5 rounded-md bg-white/[0.04] border border-white/[0.06] flex items-center px-2.5 gap-1.5">
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" aria-hidden>
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span className="text-[10px] text-[#a78bfa]/80 tracking-wide">
                app.maatwork.com.ar
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[150px_1fr] h-[calc(100%-2.5rem)]">
          {/* Sidebar */}
          <aside className="border-r border-white/[0.06] bg-[#0f0520]/50 p-3 space-y-1.5">
            <div className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-white/[0.05] border border-white/[0.05]">
              <div className="w-3.5 h-3.5 rounded-sm bg-[#7c3aed]" />
              <span className="text-[10.5px] text-white font-medium">Panel</span>
            </div>
            {["Agenda", "Clientes", "Cobros", "WhatsApp", "Reportes"].map((label, i) => (
              <div
                key={label}
                className={[
                  "px-2 py-1.5 rounded-md text-[10.5px]",
                  i === 0 ? "text-white" : "text-[#a78bfa]/70",
                ].join(" ")}
              >
                {label}
              </div>
            ))}
            <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center gap-2 px-2">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#a855f7] flex items-center justify-center text-[8.5px] text-white font-bold">M</div>
              <div className="flex-1 min-w-0">
                <div className="text-[9.5px] text-white truncate">Iron Gym</div>
                <div className="text-[8.5px] text-[#a78bfa]/60 truncate">Plan Pro</div>
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="p-3.5 space-y-3 overflow-hidden">
            {/* Header row */}
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10.5px] text-[#a78bfa]/80">Buenos días,</div>
                <div className="text-white text-[12px] font-semibold">Martín</div>
              </div>
              <div className="text-[9.5px] text-[#a78bfa]/70 border border-white/10 rounded-md px-2 py-1">
                Hoy · 12 turnos
              </div>
            </div>

            {/* KPI row */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { k: "Ingresos mes", v: "$1.24M", d: "+12%", c: "#25D366" },
                { k: "Cobros hoy", v: "47", d: "+8", c: "#25D366" },
                { k: "Asistencia", v: "82%", d: "+3%", c: "#25D366" },
              ].map((kpi) => (
                <div
                  key={kpi.k}
                  className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2.5 py-2"
                >
                  <div className="text-[9px] text-[#a78bfa]/80">{kpi.k}</div>
                  <div className="text-white text-[14px] font-bold tracking-tight mt-0.5">
                    {kpi.v}
                  </div>
                  <div className="text-[8.5px]" style={{ color: kpi.c }}>{kpi.d}</div>
                </div>
              ))}
            </div>

            {/* Agenda list */}
            <div className="rounded-md border border-white/[0.06] bg-white/[0.02] p-2.5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10.5px] text-white font-medium">Agenda — hoy</span>
                <span className="text-[8.5px] text-[#a78bfa]/70">ver todo →</span>
              </div>
              <div className="space-y-1">
                {[
                  { t: "09:00", n: "Lucia M.", s: "CrossFit", ok: true },
                  { t: "10:30", n: "Diego R.", s: "Funcional", ok: true },
                  { t: "12:00", n: "Camila S.", s: "Boxeo", ok: false },
                  { t: "17:30", n: "Joaquín P.", s: "Musculación", ok: false },
                ].map((row, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-[10px] py-1 px-1.5 rounded hover:bg-white/[0.03]"
                  >
                    <span className="text-[#a78bfa]/80 w-9 tabular-nums">{row.t}</span>
                    <span className="flex-1 text-white truncate">{row.n}</span>
                    <span className="text-[8.5px] text-[#a78bfa]/60 border border-white/10 rounded px-1 py-0.5 hidden sm:inline">
                      {row.s}
                    </span>
                    <span
                      className={[
                        "text-[8px] px-1.5 py-0.5 rounded-full whitespace-nowrap",
                        row.ok
                          ? "bg-[#25D366]/20 text-[#25D366]"
                          : "bg-white/[0.05] text-[#a78bfa]/70",
                      ].join(" ")}
                    >
                      {row.ok ? "OK" : "Pend."}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating tag 1 */}
      <div className="hidden md:flex absolute -left-5 top-16 items-center gap-2.5 rounded-full border border-white/10 bg-[#0f0520] px-3.5 py-2 shadow-xl">
        <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
        <span className="text-[12px] text-white font-medium">Cobro automático · 14:22</span>
      </div>
      {/* Floating tag 2 */}
      <div className="hidden md:flex absolute -right-3 bottom-12 items-center gap-2.5 rounded-full border border-white/10 bg-[#0f0520] px-3.5 py-2 shadow-xl">
        <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7]" />
        <span className="text-[12px] text-white font-medium">+3 turnos nuevos</span>
      </div>
    </div>
  );
}
