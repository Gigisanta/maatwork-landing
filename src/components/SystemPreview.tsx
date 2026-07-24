/**
 * SystemPreview — "así se ve un sistema nuestro". Muestra el producto dentro de
 * un marco de ventana Safari (port de MagicUI) con una interfaz ilustrativa
 * on-brand: un panel de gestión oscuro (sidebar + topbar + KPIs + tabla + agenda)
 * modelado sobre nuestros sistemas reales. La UI se dibuja a tamaño fijo
 * (1200×700) y el Safari la auto-escala; los datos son de demostración (rotulado).
 * Server component: la interfaz es estática; el escalado lo maneja el Safari.
 */
import { Safari } from "@/components/magicui/Safari";
import { BorderBeam } from "@/components/BorderBeam";

// Paleta local anclada al DS (monocromo violeta + neutros + un verde de éxito).
const C = {
  appBg: "#0B0B0F",
  surface: "#15151B",
  surface2: "#1B1B22",
  border: "rgba(255,255,255,0.07)",
  borderStrong: "rgba(255,255,255,0.11)",
  textPri: "#F4F4F6",
  textSec: "#A9A9B2",
  textTer: "#74747E",
  textMuted: "#55555E",
  violet: "#7C5CFF",
  violet300: "#B9A6FF",
  violetSoft: "rgba(124,92,255,0.14)",
  violetRing: "rgba(124,92,255,0.34)",
  success: "#2FBF88",
  successSoft: "rgba(47,191,136,0.14)",
  mono: "var(--font-jetbrains), ui-monospace, monospace",
  display: "var(--font-sora), ui-sans-serif, sans-serif",
};

export function SystemPreview() {
  return (
    <section id="sistema" className="section-base section-chroma section-pad">
      <div className="container-maat">
        <div className="mx-auto max-w-[720px] text-center reveal">
          <span className="eyebrow">El producto</span>
          <h2
            className="mt-3 font-display text-3xl text-text-primary md:text-4xl"
            style={{ fontWeight: 800, letterSpacing: "var(--tracking-h2)" }}
          >
            Así se ve un sistema nuestro.
          </h2>
          <p className="mt-4 mx-auto max-w-[560px] text-[16px] leading-7 text-[var(--text-secondary)]">
            Un solo lugar para tu operación: clientes, agenda, cobros y tablero de control.
            Claro, rápido y hecho a la medida de cómo trabajás.
          </p>
        </div>

        {/* Marco Safari con glow violeta suave detrás */}
        <div className="reveal relative mx-auto mt-11 max-w-[1040px]" style={{ transitionDelay: "80ms" }}>
          <div className="preview-halo" aria-hidden />
          {/* Marco con luz recorriendo el borde (BorderBeam, port MagicUI/cult-ui) */}
          <div className="relative z-10 rounded-[12px]">
            <Safari
              url="app.maat.work/panel"
              className="rounded-[12px]"
              style={{ boxShadow: "0 40px 120px -30px rgba(0,0,0,0.75), 0 0 0 1px rgba(255,255,255,0.04)" }}
            >
              <DashboardUI />
            </Safari>
            <BorderBeam size={360} duration={11} colorFrom="#7C5CFF" colorTo="#B9A6FF" />
          </div>
        </div>

        <p
          className="reveal mx-auto mt-7 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--text-tertiary)]"
          style={{ transitionDelay: "140ms" }}
        >
          <span>Interfaz ilustrativa</span>
          <span aria-hidden>·</span>
          <span>datos de demostración</span>
          <span aria-hidden>·</span>
          <span>cada sistema se diseña a medida</span>
        </p>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Interfaz ilustrativa (1200×700). Todo en px de diseño: el Safari la escala.
// ---------------------------------------------------------------------------

const NAV = [
  { label: "Inicio", icon: <IconHome />, active: true },
  { label: "Clientes", icon: <IconUsers /> },
  { label: "Agenda", icon: <IconCalendar /> },
  { label: "Cobros", icon: <IconWallet /> },
  { label: "Reportes", icon: <IconChart /> },
  { label: "Ajustes", icon: <IconGear /> },
];

const KPIS = [
  { label: "Ingresos del mes", value: "$ 4,82 M", delta: "+12%", up: true },
  { label: "Clientes activos", value: "312", delta: "+8", up: true },
  { label: "Cobros pendientes", value: "27", delta: "$ 640 K", up: false },
  { label: "Turnos hoy", value: "48", delta: "9 libres", up: true },
];

type Status = "pagado" | "curso" | "pendiente" | "nuevo";

const ROWS: { name: string; sub: string; status: Status; amount: string; date: string }[] = [
  { name: "Estudio Contable Ríos", sub: "Plan anual", status: "pagado", amount: "$ 128.000", date: "Hoy · 09:14" },
  { name: "Gimnasio Aqua Center", sub: "Cuota mensual", status: "curso", amount: "$ 42.500", date: "Hoy · 08:40" },
  { name: "Ferretería del Sur", sub: "Factura #1182", status: "pendiente", amount: "$ 76.300", date: "Ayer · 18:22" },
  { name: "Clínica San Martín", sub: "Alta de cliente", status: "nuevo", amount: "—", date: "Ayer · 16:05" },
  { name: "Logística Andes", sub: "Plan trimestral", status: "pagado", amount: "$ 310.000", date: "Ayer · 11:48" },
];

const AGENDA = [
  { time: "10:30", title: "Reunión — Grupo Delta", tag: "Comercial" },
  { time: "12:00", title: "Alta sistema — Ferretería", tag: "Onboarding" },
  { time: "15:30", title: "Revisión de cobros", tag: "Finanzas" },
  { time: "17:00", title: "Demo — Clínica San Martín", tag: "Demo" },
];

// Barras del mini-gráfico (proporción decorativa, no una métrica afirmada)
const BARS = [0.42, 0.58, 0.5, 0.72, 0.64, 0.88, 0.76];

export function DashboardUI() {
  return (
    <div
      style={{
        width: 1200,
        height: 700,
        display: "flex",
        background: C.appBg,
        color: C.textPri,
        fontFamily: C.display,
        overflow: "hidden",
      }}
    >
      {/* ---- Sidebar ---- */}
      <aside
        style={{
          width: 236,
          flexShrink: 0,
          height: "100%",
          background: "#0E0E13",
          borderRight: `1px solid ${C.border}`,
          display: "flex",
          flexDirection: "column",
          padding: "22px 16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "0 8px 4px" }}>
          <span
            style={{
              width: 30,
              height: 30,
              borderRadius: 9,
              background: C.violetSoft,
              border: `1px solid ${C.violetRing}`,
              display: "grid",
              placeItems: "center",
              color: C.violet300,
              fontWeight: 800,
              fontSize: 15,
            }}
          >
            M
          </span>
          <div style={{ lineHeight: 1.1 }}>
            <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: "-0.01em" }}>MaatWork</div>
            <div style={{ fontFamily: C.mono, fontSize: 9.5, letterSpacing: "0.14em", textTransform: "uppercase", color: C.textMuted }}>
              Panel
            </div>
          </div>
        </div>

        <nav style={{ marginTop: 22, display: "flex", flexDirection: "column", gap: 3 }}>
          {NAV.map((n) => (
            <div
              key={n.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 11,
                padding: "9px 11px",
                borderRadius: 9,
                fontSize: 13.5,
                fontWeight: n.active ? 600 : 500,
                color: n.active ? C.textPri : C.textSec,
                background: n.active ? C.violetSoft : "transparent",
                border: `1px solid ${n.active ? C.violetRing : "transparent"}`,
              }}
            >
              <span style={{ color: n.active ? C.violet300 : C.textTer, display: "grid", placeItems: "center" }}>{n.icon}</span>
              {n.label}
            </div>
          ))}
        </nav>

        <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 10, padding: "10px", borderRadius: 10, border: `1px solid ${C.border}`, background: C.surface }}>
          <span style={{ width: 30, height: 30, borderRadius: "50%", background: "linear-gradient(135deg,#7C5CFF,#B9A6FF)", flexShrink: 0 }} />
          <div style={{ lineHeight: 1.2, minWidth: 0 }}>
            <div style={{ fontSize: 12.5, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Estudio Ríos</div>
            <div style={{ fontFamily: C.mono, fontSize: 9.5, color: C.textMuted }}>Administrador</div>
          </div>
        </div>
      </aside>

      {/* ---- Main ---- */}
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
        {/* Topbar */}
        <header
          style={{
            height: 62,
            flexShrink: 0,
            borderBottom: `1px solid ${C.border}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 26px",
          }}
        >
          <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.01em" }}>Inicio</div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 9,
                width: 250,
                height: 36,
                padding: "0 12px",
                borderRadius: 9,
                border: `1px solid ${C.border}`,
                background: C.surface,
                color: C.textTer,
                fontSize: 12.5,
              }}
            >
              <IconSearch />
              <span>Buscar cliente, factura…</span>
            </div>
            <span style={{ width: 36, height: 36, borderRadius: 9, border: `1px solid ${C.border}`, background: C.surface, display: "grid", placeItems: "center", color: C.textSec, position: "relative" }}>
              <IconBell />
              <span style={{ position: "absolute", top: 8, right: 9, width: 6, height: 6, borderRadius: "50%", background: C.violet }} />
            </span>
            <span style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg,#7C5CFF,#B9A6FF)" }} />
          </div>
        </header>

        {/* Content */}
        <div style={{ flex: 1, padding: "22px 26px", display: "flex", flexDirection: "column", gap: 18, overflow: "hidden" }}>
          {/* Greeting */}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.01em" }}>Buenos días, Estudio Ríos</div>
              <div style={{ fontSize: 13, color: C.textSec, marginTop: 3 }}>Esto es lo que pasó en tu operación.</div>
            </div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                height: 36,
                padding: "0 16px",
                borderRadius: 9,
                background: C.violet,
                color: "#fff",
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              <IconPlus />
              Nuevo cobro
            </div>
          </div>

          {/* KPIs */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}>
            {KPIS.map((k) => (
              <div key={k.label} style={{ borderRadius: 13, border: `1px solid ${C.border}`, background: C.surface, padding: "15px 16px" }}>
                <div style={{ fontFamily: C.mono, fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: C.textTer }}>{k.label}</div>
                <div style={{ fontSize: 25, fontWeight: 800, letterSpacing: "-0.02em", marginTop: 8, fontVariantNumeric: "tabular-nums" }}>{k.value}</div>
                <div style={{ marginTop: 9, display: "inline-flex", alignItems: "center", gap: 5 }}>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 4,
                      padding: "2px 7px",
                      borderRadius: 999,
                      fontFamily: C.mono,
                      fontSize: 10,
                      fontWeight: 600,
                      color: k.up ? C.success : C.violet300,
                      background: k.up ? C.successSoft : C.violetSoft,
                    }}
                  >
                    {k.up ? <IconTrendUp /> : <IconDot />}
                    {k.delta}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Two columns */}
          <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1.55fr 1fr", gap: 14, minHeight: 0 }}>
            {/* Recent activity table */}
            <div style={{ borderRadius: 13, border: `1px solid ${C.border}`, background: C.surface, display: "flex", flexDirection: "column", overflow: "hidden" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", borderBottom: `1px solid ${C.border}` }}>
                <span style={{ fontSize: 14, fontWeight: 700 }}>Actividad reciente</span>
                <span style={{ fontFamily: C.mono, fontSize: 11, color: C.violet300 }}>Ver todo</span>
              </div>
              <div style={{ padding: "4px 8px" }}>
                {ROWS.map((r) => (
                  <div
                    key={r.name}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1.6fr 0.9fr 0.8fr",
                      alignItems: "center",
                      gap: 10,
                      padding: "11px 10px",
                      borderBottom: `1px solid ${C.border}`,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 11, minWidth: 0 }}>
                      <span style={{ width: 30, height: 30, borderRadius: 8, flexShrink: 0, background: C.surface2, border: `1px solid ${C.border}`, display: "grid", placeItems: "center", fontFamily: C.mono, fontSize: 12, fontWeight: 700, color: C.textSec }}>
                        {r.name.charAt(0)}
                      </span>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: 13, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{r.name}</div>
                        <div style={{ fontFamily: C.mono, fontSize: 10.5, color: C.textMuted }}>{r.sub}</div>
                      </div>
                    </div>
                    <StatusPill status={r.status} />
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: 13, fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>{r.amount}</div>
                      <div style={{ fontFamily: C.mono, fontSize: 10, color: C.textMuted }}>{r.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column: chart + agenda */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14, minHeight: 0 }}>
              <div style={{ borderRadius: 13, border: `1px solid ${C.border}`, background: C.surface, padding: "15px 18px" }}>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 13.5, fontWeight: 700 }}>Ingresos · 7 días</span>
                  <span style={{ fontFamily: C.mono, fontSize: 11, color: C.success }}>+18%</span>
                </div>
                <div style={{ marginTop: 14, display: "flex", alignItems: "flex-end", gap: 8, height: 58 }}>
                  {BARS.map((h, i) => (
                    <span
                      key={i}
                      style={{
                        flex: 1,
                        height: `${h * 100}%`,
                        borderRadius: 4,
                        background: i === BARS.length - 1 ? C.violet : "linear-gradient(180deg,rgba(124,92,255,0.55),rgba(124,92,255,0.18))",
                      }}
                    />
                  ))}
                </div>
              </div>

              <div style={{ flex: 1, borderRadius: 13, border: `1px solid ${C.border}`, background: C.surface, display: "flex", flexDirection: "column", overflow: "hidden", minHeight: 0 }}>
                <div style={{ padding: "13px 18px", borderBottom: `1px solid ${C.border}`, fontSize: 14, fontWeight: 700 }}>Agenda de hoy</div>
                <div style={{ padding: "6px 14px" }}>
                  {AGENDA.map((a) => (
                    <div key={a.title} style={{ display: "flex", alignItems: "center", gap: 12, padding: "9px 4px", borderBottom: `1px solid ${C.border}` }}>
                      <span style={{ fontFamily: C.mono, fontSize: 12, fontWeight: 700, color: C.violet300, width: 42, flexShrink: 0 }}>{a.time}</span>
                      <div style={{ minWidth: 0, flex: 1 }}>
                        <div style={{ fontSize: 12.5, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{a.title}</div>
                        <div style={{ fontFamily: C.mono, fontSize: 10, color: C.textMuted }}>{a.tag}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---- Status pill ----------------------------------------------------------

function StatusPill({ status }: { status: Status }) {
  const map: Record<Status, { label: string; color: string; bg: string }> = {
    pagado: { label: "Pagado", color: C.success, bg: C.successSoft },
    curso: { label: "En curso", color: C.violet300, bg: C.violetSoft },
    pendiente: { label: "Pendiente", color: C.textSec, bg: "rgba(255,255,255,0.05)" },
    nuevo: { label: "Nuevo", color: C.violet300, bg: C.violetSoft },
  };
  const s = map[status];
  return (
    <span style={{ justifySelf: "start", display: "inline-flex", alignItems: "center", gap: 6, padding: "3px 10px", borderRadius: 999, fontFamily: C.mono, fontSize: 10.5, fontWeight: 600, color: s.color, background: s.bg }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: s.color }} />
      {s.label}
    </span>
  );
}

// ---- Icons (16px, stroke) -------------------------------------------------

function Svg({ children }: { children: React.ReactNode }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}
function IconHome() { return <Svg><path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" /></Svg>; }
function IconUsers() { return <Svg><circle cx="9" cy="8" r="3.2" /><path d="M3.5 20a5.5 5.5 0 0 1 11 0M16 5.5a3 3 0 0 1 0 5.8M20.5 20a5 5 0 0 0-3.5-4.7" /></Svg>; }
function IconCalendar() { return <Svg><rect x="3" y="4.5" width="18" height="16" rx="2" /><path d="M3 9h18M8 3v3M16 3v3" /></Svg>; }
function IconWallet() { return <Svg><rect x="3" y="6" width="18" height="13" rx="2.5" /><path d="M16 12.5h2M3 9h18" /></Svg>; }
function IconChart() { return <Svg><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></Svg>; }
function IconGear() { return <Svg><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" /></Svg>; }
function IconSearch() { return <Svg><circle cx="11" cy="11" r="7" /><path d="m20 20-3.2-3.2" /></Svg>; }
function IconBell() { return <Svg><path d="M18 8a6 6 0 1 0-12 0c0 7-3 8-3 8h18s-3-1-3-8M10.5 21a2 2 0 0 0 3 0" /></Svg>; }
function IconPlus() { return <Svg><path d="M12 5v14M5 12h14" /></Svg>; }
function IconTrendUp() { return <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17 9 11l4 4 8-8M15 4h6v6" /></svg>; }
function IconDot() { return <span style={{ width: 6, height: 6, borderRadius: "50%", background: "currentColor", display: "inline-block" }} />; }
