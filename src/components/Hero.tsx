import { DashboardPreview } from "./DashboardPreview";

/**
 * Hero — versión "WOW" con app preview fotorrealista.
 *
 * Composición:
 *   1. Trust badge superior con dot verde pulsante
 *   2. H1 con staggered letter reveal (letra por letra)
 *   3. Subtitulo con highlight en keyword (no gradient)
 *   4. 2 CTAs (WhatsApp primary + ghost secondary)
 *   5. Trust strip con bullets
 *   6. DashboardPreview a la derecha (sidebar + main + detail panel)
 *
 * Animaciones:
 *   - letter-reveal: cada letra del H1 aparece con stagger
 *   - float-slow: floating tags
 *   - cursor-move: cursor simulado
 *   - ticker-slide: chat popover
 *   - fade-up: rows de agenda
 *   - glow-pulse: highlight del KPI activo (cycle)
 *
 * NO libs externas. Todo CSS.
 */

const H1_LINE_1 = "Automatizá tu local.";
const H1_LINE_2 = "Sin complicaciones.";

export function Hero() {
  return (
    <section
      id="top"
      className="section-base relative pt-24 md:pt-28 pb-16 md:pb-24 overflow-hidden"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-12 items-center">
          {/* Copy */}
          <div className="order-2 lg:order-1">
            {/* Trust badge top */}
            <div
              className="reveal inline-flex items-center gap-2 rounded-full border border-[#7c3aed]/25 bg-[#7c3aed]/10 px-3 py-1.5 text-[12.5px] text-[#d4b8ff] mb-7"
            >
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-[#25D366]" />
              </span>
              <span className="font-medium">14 días gratis</span>
              <span className="text-[#a78bfa]/60">·</span>
              <span>Sin tarjeta</span>
            </div>

            {/* H1 staggered letter reveal */}
            <h1
              className="font-display text-white tracking-[-0.04em] text-[44px] sm:text-[58px] lg:text-[76px] leading-[0.93] text-balance"
              style={{ fontWeight: 800 }}
            >
              <span className="letter-reveal block">
                {H1_LINE_1.split("").map((ch, i) => (
                  <span key={i} style={{ animationDelay: `${i * 22}ms` }}>
                    {ch === " " ? "\u00A0" : ch}
                  </span>
                ))}
              </span>
              <span className="letter-reveal block text-[#d4b8ff]">
                {H1_LINE_2.split("").map((ch, i) => (
                  <span key={i} style={{ animationDelay: `${(H1_LINE_1.length + i) * 22}ms` }}>
                    {ch === " " ? "\u00A0" : ch}
                  </span>
                ))}
              </span>
            </h1>

            {/* Sub */}
            <p
              className="reveal mt-7 text-[17px] md:text-[18.5px] text-[#d4b8ff] max-w-[540px] leading-[1.55]"
              style={{ transitionDelay: "200ms" }}
            >
              El SaaS que gyms, salones y academias eligen en Argentina.
              Agenda, cobros, CRM y WhatsApp en un solo lugar — y&nbsp;
              <span className="text-white font-semibold">
                dejás de perder entre 2 y 5 horas por día
              </span>
              .
            </p>

            {/* CTAs */}
            <div
              className="reveal mt-9 flex flex-col sm:flex-row gap-3"
              style={{ transitionDelay: "260ms" }}
            >
              <a
                href="https://wa.me/5491100000000?text=Hola%20MaatWork%20%E2%9C%8B%20quiero%20probar"
                target="_blank"
                rel="noopener noreferrer"
                className="group cta-whatsapp inline-flex items-center justify-center gap-2.5 px-7 rounded-full text-white font-semibold text-[15.5px] tracking-[-0.01em] shadow-[0_12px_30px_-10px_rgba(37,211,102,0.45)] hover-scale"
                style={{ height: 56 }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                  className="transition-transform group-hover:scale-110"
                  style={{ transitionTimingFunction: "var(--ease-out-quart)" }}
                >
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
                Comenzar gratis
              </a>
              <a
                href="#funcionalidades"
                className="group inline-flex items-center justify-center gap-2 px-7 rounded-full text-white font-semibold text-[15.5px] border border-white/15 hover:border-[#7c3aed]/50 hover:bg-[#7c3aed]/8 transition-all hover-scale"
                style={{
                  height: 56,
                  transitionTimingFunction: "var(--ease-out-quart)",
                }}
              >
                Ver funcionalidades
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                  className="transition-transform group-hover:translate-x-0.5"
                  style={{ transitionTimingFunction: "var(--ease-out-quart)" }}
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>

            {/* Trust strip */}
            <ul
              className="reveal mt-9 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-[13.5px]"
              style={{ transitionDelay: "320ms" }}
            >
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

          {/* App preview */}
          <div className="order-1 lg:order-2 reveal" style={{ transitionDelay: "120ms" }}>
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
}

function Check() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#a78bfa"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
