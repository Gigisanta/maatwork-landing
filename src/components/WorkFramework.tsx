/**
 * WorkFramework — "cómo trabajamos", bento grid (MagicUI) con sus efectos:
 *  - Terminal animada (celda protagonista): el stack real tipeándose.
 *  - TypingAnimation en el H2 de la sección (efecto visible al scrollear).
 *  - BentoCards con mini-visual de fondo + CTA que aparece en hover.
 *  - XCard (@MaatWorkX): tweet card, construcción en público.
 * Neuromarketing: ver código corriendo es prueba de competencia sin
 * afirmarla; cada celda responde una objeción típica del comprador.
 */
import { Terminal, TypingAnimation, type TerminalLine } from "./magicui/Terminal";
import { BentoGrid, BentoCard } from "./magicui/BentoGrid";
import { XCard } from "./magicui/XCard";

// El stack real, contado como una corrida de setup. Termina en beneficio.
const STACK_RUN: TerminalLine[] = [
  { kind: "cmd", text: "maatwork new sistema --para tu-negocio" },
  { kind: "ok", text: "Next.js + TypeScript — base sólida y mantenible" },
  { kind: "ok", text: "PostgreSQL (Neon) — tus datos, ordenados" },
  { kind: "ok", text: "Auth + roles — cada uno ve lo suyo" },
  { kind: "ok", text: "WhatsApp + IA — automatización integrada" },
  { kind: "ok", text: "Facturación ARCA — al día con AFIP" },
  { kind: "cmd", text: "maatwork deploy --production" },
  { kind: "ok", text: "Deploy en Vercel — online en minutos" },
  { kind: "info", text: "Demo lista → la vemos juntos por WhatsApp" },
];

export function WorkFramework() {
  return (
    <section id="framework" className="section-atmo section-base section-pad relative border-y border-white/[0.06]">
      {/* Backlight de sección — luz cenital sutil sobre el bento */}
      <div className="section-backlight" aria-hidden />
      <div className="atmo" aria-hidden>
        <div className="atmo-grid" />
      </div>

      <div className="container-maat relative z-10">
        <div className="max-w-[640px] reveal">
          <span className="eyebrow">Nuestro framework</span>
          <h2 className="mt-3 min-h-[1.2em] font-display text-3xl text-text-primary md:text-4xl" style={{ fontWeight: 800, letterSpacing: "var(--tracking-h2)" }}>
            <TypingAnimation duration={38}>El mismo stack en cada sistema.</TypingAnimation>
          </h2>
          <p className="mt-4 max-w-[560px] text-[16px] leading-7 text-[var(--text-secondary)]">
            Tecnología probada, proceso corto y demo temprana. Sin experimentos con tu negocio.
          </p>
        </div>

        <BentoGrid className="mt-10">
          {/* Celda protagonista — la terminal, 2 columnas */}
          <div className="reveal md:col-span-2 md:row-span-2">
            <Terminal title="maatwork — build" lines={STACK_RUN} className="h-full" />
          </div>

          {/* Método — cada celda con su mini-visual de fondo */}
          <BentoCard
            className="reveal"
            name="Demo cada 2 semanas"
            description="Ves el sistema crecer en tu pantalla, no en una promesa."
            icon={<IconEye />}
            background={<CalendarBg />}
          />
          <BentoCard
            className="reveal"
            name="El código es tuyo"
            description="Repo propio, acceso total y documentación. Te llevás todo."
            icon={<IconKey />}
            background={<CodeBg />}
          />
          <BentoCard
            className="reveal"
            name="Soporte directo"
            description="Hablás con quien construye tu sistema, por WhatsApp."
            icon={<IconChat />}
            background={<ChatBg />}
            href="#contacto"
            cta="Escribinos"
          />

          {/* Prueba social viva — X */}
          <XCard className="reveal" />
        </BentoGrid>
      </div>
    </section>
  );
}

// ---- Mini-visuales de fondo (decorativos, monocromo + acento) --------------

/** Calendario: grilla de días con dos demos marcadas en violeta. */
function CalendarBg() {
  const cells = Array.from({ length: 28 }, (_, i) => i);
  const demos = [9, 23];
  return (
    <div className="absolute -right-6 -top-8 grid w-[220px] grid-cols-7 gap-1.5 opacity-[0.55] [mask-image:linear-gradient(200deg,#000_30%,transparent_75%)]">
      {cells.map((i) => (
        <span
          key={i}
          className="aspect-square rounded-[4px]"
          style={{
            background: demos.includes(i) ? "var(--violet-500)" : "rgba(255,255,255,0.07)",
            boxShadow: demos.includes(i) ? "0 0 14px rgba(124,92,255,0.5)" : undefined,
          }}
        />
      ))}
    </div>
  );
}

/** Líneas de código estilizadas con un bloque resaltado. */
function CodeBg() {
  const lines = [64, 40, 82, 56, 30, 72, 48, 60];
  return (
    <div className="absolute -right-4 -top-6 flex w-[200px] flex-col gap-2.5 opacity-[0.6] [mask-image:linear-gradient(200deg,#000_25%,transparent_78%)]">
      {lines.map((w, i) => (
        <span
          key={i}
          className="h-[7px] rounded-full"
          style={{
            width: `${w}%`,
            marginLeft: i % 3 === 1 ? "14%" : 0,
            background: i === 2 ? "var(--violet-500)" : "rgba(255,255,255,0.10)",
          }}
        />
      ))}
    </div>
  );
}

/** Burbujas de chat (WhatsApp): ida y vuelta, respuesta en acento. */
function ChatBg() {
  return (
    <div className="absolute -right-3 -top-7 flex w-[190px] flex-col gap-2 opacity-[0.6] [mask-image:linear-gradient(200deg,#000_25%,transparent_80%)]">
      <span className="h-[22px] w-[70%] self-start rounded-xl rounded-bl-[4px] bg-white/[0.09]" />
      <span className="h-[22px] w-[52%] self-end rounded-xl rounded-br-[4px]" style={{ background: "rgba(124,92,255,0.55)" }} />
      <span className="h-[22px] w-[62%] self-start rounded-xl rounded-bl-[4px] bg-white/[0.09]" />
      <span className="h-[22px] w-[44%] self-end rounded-xl rounded-br-[4px]" style={{ background: "rgba(124,92,255,0.35)" }} />
    </div>
  );
}

// ---- Iconos inline (stroke currentColor, monocromo) ------------------------

function IconEye() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function IconKey() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
    </svg>
  );
}

function IconChat() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
