"use client";

import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

/**
 * HowItWorks — 3 steps con SVG paths que se dibujan al entrar en viewport.
 *
 * Visualización del flujo:
 *   [Cliente]  ──→  [MaatWork]  ──→  [Negocio]
 *     ①              ②               ③
 *
 * Los paths se animan con `stroke-dashoffset` cuando entran en view.
 */

const STEPS = [
  {
    n: "01",
    d: "1-2 días",
    t: "Diagnóstico",
    desc: "Llamada de 30 min. Entendemos tu local, tu flujo y qué te hace perder tiempo.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-purple-400)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    n: "02",
    d: "3-7 días",
    t: "Prototipo",
    desc: "Configuramos el sistema con tus datos reales. Te lo mostramos funcionando antes de pagar.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-purple-400)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    n: "03",
    d: "1-2 días",
    t: "Lanzamiento",
    desc: "Capacitamos a tu equipo. Migramos clientes y turnos. Arrancás a operar el mismo día.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-purple-400)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = usePrefersReducedMotion();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current || reduce) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.2 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [reduce]);

  const active = reduce || inView;

  return (
    <section className="section-base section-pad">
      <div className="container-maat" ref={ref}>
        <div className="max-w-[640px] reveal">
          <span className="eyebrow">
            Cómo funciona
          </span>
          <h2
            className="font-display text-white mt-3 text-3xl md:text-4xl"
            style={{ fontWeight: 800 }}
          >
            De cero a funcionando en 5-10 días.
          </h2>
          <p className="mt-4 text-[16px] text-purple-200 max-w-[520px]">
            Sin proyectos de meses. Sin consultorías eternas. Te dejamos
            andando rápido, con tu equipo operando.
          </p>
        </div>

        {/* Steps con SVG path animation */}
        <div className="mt-16 relative">
          {/* SVG connector — solo md+ */}
          <svg
            className="hidden md:block absolute top-[40px] left-[16.6%] right-[16.6%] h-12 w-[66.7%] pointer-events-none"
            viewBox="0 0 600 50"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="connector-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="var(--color-purple-600)" stopOpacity="0" />
                <stop offset="0.3" stopColor="var(--color-purple-600)" stopOpacity="0.7" />
                <stop offset="0.7" stopColor="var(--color-success)" stopOpacity="0.7" />
                <stop offset="1" stopColor="var(--color-success)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 0,25 C 100,25 150,5 250,5 S 400,45 500,45 L 600,25"
              fill="none"
              stroke="url(#connector-grad)"
              strokeWidth="2"
              strokeLinecap="round"
              style={{
                strokeDasharray: 1200,
                strokeDashoffset: active ? 0 : 1200,
                transition: "stroke-dashoffset 2.2s var(--ease-out-quart)",
              }}
            />
          </svg>

          <ol className="grid md:grid-cols-3 gap-10 md:gap-6 relative">
            {STEPS.map((s, i) => (
              <li
                key={s.n}
                className="reveal"
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                <div className="flex md:flex-col items-start md:items-center gap-5 md:gap-0">
                  <div className="md:mb-7 flex-shrink-0">
                    <div className="w-[80px] h-[80px] rounded-full bg-purple-950 border border-purple-600/30 flex items-center justify-center relative z-10">
                      <span
                        className="font-display text-white text-[22px] tracking-[-0.02em]"
                        style={{ fontWeight: 800 }}
                      >
                        {s.n}
                      </span>
                      <div
                        className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-purple-975 border border-purple-600/40 flex items-center justify-center"
                      >
                        {s.icon}
                      </div>
                    </div>
                  </div>
                  <div className="md:text-center md:max-w-[280px]">
                    <div className="text-[12px] uppercase tracking-[0.18em] text-purple-400 font-semibold">
                      {s.d}
                    </div>
                    <h3 className="font-display text-white text-[22px] font-extrabold tracking-[-0.02em] mt-1.5">
                      {s.t}
                    </h3>
                    <p className="mt-2.5 text-[14.5px] text-purple-200/85 leading-[1.55] md:mx-auto">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
