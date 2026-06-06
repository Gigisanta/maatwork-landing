"use client";

import { useEffect, useRef, useState } from "react";

/**
 * HowItWorks — V5: SVG con paths que se dibujan solos al entrar en viewport.
 * Muestra el flujo: Cliente → MaatWork → Negocio
 */
const STEPS = [
  { n: "01", t: "Diagnóstico", d: "1-2 días", desc: "Llamada de 30 min. Entendemos tu local, tu flujo y qué te hace perder tiempo.", icon: <Phone /> },
  { n: "02", t: "Prototipo",   d: "3-7 días", desc: "Configuramos el sistema con tus datos reales. Te lo mostramos funcionando antes de pagar.", icon: <Cog /> },
  { n: "03", t: "Lanzamiento", d: "1-2 días", desc: "Capacitamos a tu equipo. Migramos clientes y turnos. Arrancás a operar el mismo día.", icon: <Rocket /> },
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section-base py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-6 md:px-8">
        <div className="max-w-[640px] reveal">
          <span className="text-[12.5px] uppercase tracking-[0.18em] text-[#a78bfa]">
            Cómo funciona
          </span>
          <h2
            className="font-display text-white mt-3 text-[34px] md:text-[46px] leading-[1.05] tracking-[-0.03em] text-balance"
            style={{ fontWeight: 800 }}
          >
            De cero a funcionando en{" "}
            <span className="text-[#d4b8ff]">5-10 días.</span>
          </h2>
          <p className="mt-4 text-[16px] text-[#d4b8ff] max-w-[520px]">
            Sin proyectos de meses. Sin consultorías eternas. Te dejamos
            andando rápido, con tu equipo operando.
          </p>
        </div>

        <div ref={ref} className="mt-16 relative">
          {/* SVG connector with draw-on-scroll animation */}
          <svg
            aria-hidden
            className="hidden md:block absolute top-[36px] left-[10%] right-[10%] w-[80%] h-[80px] pointer-events-none"
            viewBox="0 0 800 80"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="line-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#7c3aed" stopOpacity="0.3" />
                <stop offset="0.5" stopColor="#a855f7" stopOpacity="0.6" />
                <stop offset="1" stopColor="#25D366" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path
              d="M 0 40 Q 200 0, 400 40 T 800 40"
              stroke="url(#line-grad)"
              strokeWidth="2"
              fill="none"
              className="draw-stroke"
              style={{
                strokeDasharray: "1100",
                strokeDashoffset: drawn ? "0" : "1100",
                transition: "stroke-dashoffset 1.8s var(--ease-out-quart)",
              }}
            />
            {/* Particles that travel along the path on scroll */}
            {drawn && [0, 0.5, 1].map((delay, i) => (
              <circle key={i} r="3" fill="#a855f7">
                <animateMotion
                  dur="4s"
                  repeatCount="indefinite"
                  begin={`${delay * 4}s`}
                  path="M 0 40 Q 200 0, 400 40 T 800 40"
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.1;0.9;1"
                  dur="4s"
                  repeatCount="indefinite"
                  begin={`${delay * 4}s`}
                />
              </circle>
            ))}
          </svg>

          <ol className="grid md:grid-cols-3 gap-10 md:gap-8 relative">
            {STEPS.map((s, i) => (
              <li
                key={s.n}
                className="reveal flex md:flex-col items-start md:items-center gap-5 md:gap-0"
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                <div className="md:mb-6 flex-shrink-0">
                  <div
                    className="w-[72px] h-[72px] rounded-full bg-[#1a0a3e] border border-[#7c3aed]/30 flex items-center justify-center relative"
                    style={{
                      animation: drawn ? `letter-reveal 0.5s var(--ease-out-quart) ${i * 250}ms backwards` : "none",
                    }}
                  >
                    <div className="text-[#d4b8ff]">{s.icon}</div>
                    <span className="absolute -top-1 -right-1 text-[10px] font-display text-white bg-[#7c3aed] rounded-full w-6 h-6 flex items-center justify-center" style={{ fontWeight: 800 }}>
                      {s.n}
                    </span>
                  </div>
                </div>
                <div className="md:text-center md:max-w-[280px]">
                  <div className="text-[12px] uppercase tracking-[0.18em] text-[#a78bfa]">
                    {s.d}
                  </div>
                  <h3 className="font-display text-white text-[22px] font-extrabold tracking-[-0.02em] mt-1.5">
                    {s.t}
                  </h3>
                  <p className="mt-2.5 text-[14.5px] text-[#d4b8ff]/85 leading-[1.55] md:mx-auto">
                    {s.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Phone() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" /></svg>;
}
function Cog() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z" /></svg>;
}
function Rocket() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" /><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>;
}
