"use client";

import { useEffect, useState } from "react";

/**
 * FinalCTA — V5: card grande con ticker de actividad + glow violeta sutil.
 */
const TICKER_EVENTS = [
  { who: "Martín",    where: "Iron Gym (Lanús)",      when: "hace 2 min" },
  { who: "Camila",    where: "Estudio (Palermo)",     when: "hace 4 min" },
  { who: "Joaquín",   where: "Academia (Córdoba)",    when: "hace 6 min" },
  { who: "Sofía",     where: "Salón (Belgrano)",      when: "hace 9 min" },
  { who: "Lucas",     where: "Box (San Telmo)",       when: "hace 12 min" },
];

export function FinalCTA() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => {
      setIdx((v) => (v + 1) % TICKER_EVENTS.length);
    }, 3500);
    return () => window.clearInterval(id);
  }, []);

  const current = TICKER_EVENTS[idx];

  return (
    <section className="section-base py-20 md:py-28">
      <div className="mx-auto max-w-[1100px] px-6 md:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-[#7c3aed]/25 hover-scale">
          {/* Animated conic border underlay */}
          <div
            aria-hidden
            className="absolute -inset-px rounded-3xl opacity-60"
            style={{
              background:
                "conic-gradient(from 90deg at 50% 50%, rgba(124,58,237,0) 0%, rgba(168,85,247,0.2) 25%, rgba(124,58,237,0) 50%, rgba(37,211,102,0.1) 75%, rgba(124,58,237,0) 100%)",
            }}
          />
          {/* Inner solid bg */}
          <div className="absolute inset-px rounded-3xl bg-[#1a0a3e]" />

          {/* Glow */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-50 pointer-events-none"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 0%, rgba(168,85,247,0.25) 0%, rgba(15,5,32,0) 70%)",
            }}
          />

          <div className="relative p-10 md:p-16 text-center">
            {/* Live ticker */}
            <div className="inline-flex items-center gap-2.5 rounded-full bg-[#0f0520]/60 border border-white/10 px-3.5 py-1.5 mb-7 text-[12.5px] text-[#d4b8ff]">
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" style={{ animation: "pulse-ring 1.8s cubic-bezier(0.4, 0, 0.6, 1) infinite" }} />
                <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-[#25D366]" />
              </span>
              <span className="font-medium text-white">{current.who}</span>
              <span className="text-[#a78bfa]/60">empezó en</span>
              <span className="text-white">{current.where}</span>
              <span className="text-[#a78bfa]/50">· {current.when}</span>
            </div>

            <h2
              className="font-display text-white text-[38px] md:text-[58px] leading-[1.04] tracking-[-0.03em] max-w-[720px] mx-auto text-balance"
              style={{ fontWeight: 800 }}
            >
              Listo para automatizar tu negocio?
            </h2>
            <p className="mt-5 text-[16.5px] md:text-[18px] text-[#d4b8ff] max-w-[560px] mx-auto leading-[1.55]">
              Empezás con 14 días gratis, sin tarjeta. Te llamamos y
              configuramos todo con vos.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/5491100000000?text=Hola%20MaatWork%20%E2%9C%8B%20quiero%20empezar"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-whatsapp inline-flex items-center justify-center gap-2.5 h-[58px] px-7 rounded-full text-white font-semibold text-[16px] hover-scale"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
                Hablar por WhatsApp
              </a>
              <a
                href="#funcionalidades"
                className="inline-flex items-center justify-center h-[58px] px-7 rounded-full text-white font-semibold text-[16px] border border-white/15 hover:border-white/30 hover:bg-white/[0.04] transition-all duration-300 ease-out-quart"
              >
                Ver funcionalidades
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13.5px] text-[#a78bfa]">
              <li className="flex items-center gap-1.5">
                <Dot />Sin tarjeta
              </li>
              <li className="flex items-center gap-1.5">
                <Dot />Sin contrato
              </li>
              <li className="flex items-center gap-1.5">
                <Dot />Demo personalizada
              </li>
              <li className="flex items-center gap-1.5">
                <Dot />Soporte en español
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Dot() {
  return <span className="inline-block w-1 h-1 rounded-full bg-[#a78bfa]/60" />;
}
