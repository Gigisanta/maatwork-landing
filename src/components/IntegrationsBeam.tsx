"use client";

/**
 * IntegrationsBeam — diagrama "conectamos tus herramientas" con el AnimatedBeam
 * (port de MagicUI). Hub-and-spoke: MaatWork al centro y haces de luz que viajan
 * desde/hacia las herramientas que integramos y automatizamos. On-brand (violeta
 * del DS, fondo oscuro). Client component: el beam mide posiciones en el layout.
 */
import { forwardRef, useRef } from "react";
import { AnimatedBeam } from "@/components/magicui/AnimatedBeam";

const VIOLET = "#7C5CFF";
const VIOLET_300 = "#B9A6FF";
const PATH = "rgba(255,255,255,0.12)";

/** Nodo circular (icono) — expone ref para que el beam lo ancle. */
const Node = forwardRef<HTMLDivElement, { children: React.ReactNode; label: string; big?: boolean }>(
  function Node({ children, label, big = false }, ref) {
    return (
      <div className="flex flex-col items-center gap-2">
        <div
          ref={ref}
          aria-hidden
          className={`z-10 flex items-center justify-center rounded-2xl border bg-[#12121a] ${
            big
              ? "h-16 w-16 border-violet-500/50 bg-violet-600/15 shadow-[0_0_34px_-4px_rgba(124,92,255,0.55)] md:h-[72px] md:w-[72px]"
              : "h-12 w-12 border-white/10 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.6)] md:h-14 md:w-14"
          }`}
        >
          {children}
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-slate-400 md:text-[10.5px]">
          {label}
        </span>
      </div>
    );
  },
);

export function IntegrationsBeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);

  // Entradas (izquierda) y salidas (derecha)
  const whatsappRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLDivElement>(null);

  const arcaRef = useRef<HTMLDivElement>(null);
  const payRef = useRef<HTMLDivElement>(null);
  const dbRef = useRef<HTMLDivElement>(null);

  return (
    <section className="section-base section-chroma pb-14 md:pb-20">
      <div className="container-maat">
        <div className="mx-auto max-w-[620px] text-center reveal">
          <span className="eyebrow">Automatizaciones e integraciones</span>
          <h2
            className="mt-3 font-display text-2xl text-white md:text-3xl"
            style={{ fontWeight: 800, letterSpacing: "var(--tracking-h2)" }}
          >
            Conectamos las herramientas que ya usás.
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-400">
            MaatWork orquesta tus canales, pagos y facturación para que la información fluya sola —
            sin cargar dos veces lo mismo.
          </p>
        </div>

        {/* Diagrama — grid de 3 columnas iguales: el nodo central queda centrado */}
        <div
          ref={containerRef}
          className="reveal relative mx-auto mt-10 grid h-[300px] w-full max-w-[760px] grid-cols-3 items-center px-2 md:h-[340px] md:px-6"
          style={{ transitionDelay: "80ms" }}
        >
          {/* Columna izquierda: entradas (ancladas al borde izquierdo) */}
          <div className="flex flex-col items-start justify-center gap-8 md:gap-10">
            <Node ref={whatsappRef} label="WhatsApp">
              <IconWhatsApp />
            </Node>
            <Node ref={formRef} label="Web / Form">
              <IconGlobe />
            </Node>
            <Node ref={emailRef} label="Email">
              <IconMail />
            </Node>
          </div>

          {/* Centro: Tu sistema (procesa) */}
          <div className="flex items-center justify-center">
            <Node ref={centerRef} label="Tu sistema" big>
              <IconChip />
            </Node>
          </div>

          {/* Columna derecha: salidas (ancladas al borde derecho) */}
          <div className="flex flex-col items-end justify-center gap-8 md:gap-10">
            <Node ref={arcaRef} label="ARCA / AFIP">
              <IconReceipt />
            </Node>
            <Node ref={payRef} label="Mercado Pago">
              <IconCard />
            </Node>
            <Node ref={dbRef} label="Base de datos">
              <IconDatabase />
            </Node>
          </div>

          {/* Haces: entradas → centro (llegan primero) */}
          <AnimatedBeam containerRef={containerRef} fromRef={whatsappRef} toRef={centerRef} curvature={-65} duration={3} delay={0} pathColor={PATH} gradientStartColor={VIOLET_300} gradientStopColor={VIOLET} />
          <AnimatedBeam containerRef={containerRef} fromRef={formRef} toRef={centerRef} duration={3} delay={0.3} pathColor={PATH} gradientStartColor={VIOLET_300} gradientStopColor={VIOLET} />
          <AnimatedBeam containerRef={containerRef} fromRef={emailRef} toRef={centerRef} curvature={65} duration={3} delay={0.6} pathColor={PATH} gradientStartColor={VIOLET_300} gradientStopColor={VIOLET} />

          {/* Haces: centro → salidas (salen después: procesado) */}
          <AnimatedBeam containerRef={containerRef} fromRef={centerRef} toRef={arcaRef} curvature={-65} duration={3} delay={1.5} pathColor={PATH} gradientStartColor={VIOLET_300} gradientStopColor={VIOLET} />
          <AnimatedBeam containerRef={containerRef} fromRef={centerRef} toRef={payRef} duration={3} delay={1.8} pathColor={PATH} gradientStartColor={VIOLET_300} gradientStopColor={VIOLET} />
          <AnimatedBeam containerRef={containerRef} fromRef={centerRef} toRef={dbRef} curvature={65} duration={3} delay={2.1} pathColor={PATH} gradientStartColor={VIOLET_300} gradientStopColor={VIOLET} />
        </div>
      </div>
    </section>
  );
}

// ---- Iconos (stroke, 22px) -------------------------------------------------

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={VIOLET_300} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {children}
    </svg>
  );
}
function IconChip() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="7" y="7" width="10" height="10" rx="2.2" />
      <rect x="10.5" y="10.5" width="3" height="3" rx="0.6" fill="#fff" stroke="none" />
      <path d="M9.5 3v2M14.5 3v2M9.5 19v2M14.5 19v2M3 9.5h2M3 14.5h2M19 9.5h2M19 14.5h2" />
    </svg>
  );
}
function IconWhatsApp() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={VIOLET_300} aria-hidden>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.16c-.24.68-1.4 1.3-1.94 1.34-.5.05-.98.24-3.3-.68-2.78-1.1-4.55-3.94-4.69-4.13-.14-.19-1.13-1.5-1.13-2.86 0-1.36.71-2.03.97-2.31.24-.26.53-.32.71-.32.18 0 .35.01.5.01.16 0 .38-.06.59.45.24.55.8 1.94.87 2.08.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.16-.29.36-.42.48-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.16-.19.69-.8.87-1.08.18-.28.36-.23.61-.14.24.09 1.55.73 1.82.87.28.14.46.21.53.32.07.12.07.66-.17 1.34Z" />
    </svg>
  );
}
function IconGlobe() {
  return <Icon><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" /></Icon>;
}
function IconMail() {
  return <Icon><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m4 7 8 6 8-6" /></Icon>;
}
function IconReceipt() {
  return <Icon><path d="M6 2.5h12v19l-2.4-1.6-2.4 1.6-2.4-1.6L8.4 21 6 21.5z" /><path d="M9.5 8h5M9.5 12h5" /></Icon>;
}
function IconCard() {
  return <Icon><rect x="2.5" y="5" width="19" height="14" rx="2.5" /><path d="M2.5 10h19M6.5 15h3" /></Icon>;
}
function IconDatabase() {
  return <Icon><ellipse cx="12" cy="5.5" rx="7.5" ry="3" /><path d="M4.5 5.5v13c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-13M4.5 12c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3" /></Icon>;
}
