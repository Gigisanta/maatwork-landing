import { DashboardPreview } from "./DashboardPreview";
import { StaggeredText } from "./StaggeredText";

/**
 * Hero — versión "WOW OFICIAL" con app preview protagónico.
 *
 * ARQUITECTURA NUEVA:
 *   - El preview se mueve ARRIBA, full-width, como pieza central
 *   - Copy ABAJO con jerarquía refinada
 *   - Live activity feed debajo del preview (scrollea solo)
 *   - H1 con staggered letter reveal
 *   - 2 CTAs con microinteracciones
 *
 * Animaciones activas en el preview (ver DashboardPreview.tsx):
 *   - KPI cycle (2.6s loop)
 *   - Toast notifications (9s loop, stagger)
 *   - Cursor move
 *   - Avatar float
 *   - Live clock
 *   - Row hover (translateX + bg)
 *   - WhatsApp confirm badge
 */

const H1_LINE_1 = "Automatizá tu local.";
const H1_LINE_2 = "Sin complicaciones.";

export function Hero() {
  return (
    <section
      id="top"
      className="section-base relative pt-20 md:pt-24 pb-12 md:pb-16 overflow-hidden"
    >
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        {/* Eyebrow: badge centrado arriba */}
        <div className="flex justify-center mb-7">
          <div
            className="reveal inline-flex items-center gap-2 rounded-full border border-purple-600/25 bg-purple-600/10 px-3 py-1.5 text-[12.5px] text-purple-200"
            style={{ transitionDelay: "0ms" }}
          >
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-success" />
            </span>
            <span className="font-medium">14 días gratis</span>
            <span className="text-purple-400/60">·</span>
            <span>Sin tarjeta</span>
            <span className="text-purple-400/60">·</span>
            <span className="hidden sm:inline">Setup en 5-10 días</span>
          </div>
        </div>

        {/* H1 centered, full width — V6 editorial scale */}
        <h1
          className="reveal font-display text-white text-display text-center text-balance mx-auto max-w-[1000px]"
          style={{ fontWeight: 800, letterSpacing: "var(--tracking-display)", lineHeight: 0.95, transitionDelay: "60ms" }}
        >
          <StaggeredText
            text={H1_LINE_1}
            baseDelayMs={120}
            staggerMs={22}
            className="block"
          />
          <StaggeredText
            text={H1_LINE_2}
            baseDelayMs={120 + H1_LINE_1.length * 22}
            staggerMs={22}
            className="block text-purple-200"
          />
        </h1>

        {/* Sub centered — V6 editorial body */}
        <p
          className="reveal mt-7 text-center text-lg md:text-xl text-purple-200 max-w-[640px] mx-auto"
          style={{ lineHeight: 1.55, transitionDelay: "200ms" }}
        >
          El SaaS que gyms, salones y academias eligen en Argentina.
          Agenda, cobros, CRM y WhatsApp en un solo lugar — y&nbsp;
          <span className="text-white font-semibold">
            dejás de perder entre 2 y 5 horas por día
          </span>
          .
        </p>

        {/* CTAs centered */}
        <div
          className="reveal mt-8 flex flex-col sm:flex-row gap-3 justify-center"
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
              className="transition-transform group-hover:scale-110 group-hover:rotate-12"
              style={{ transitionTimingFunction: "var(--ease-out-quart)" }}
            >
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 1.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
            </svg>
            Comenzar gratis
          </a>
          <a
            href="#funcionalidades"
            className="group inline-flex items-center justify-center gap-2 px-7 rounded-full text-white font-semibold text-[15.5px] border border-white/15 hover:border-purple-600/50 hover:bg-purple-600/8 transition-all hover-scale"
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

        {/* Trust strip centered */}
        <ul
          className="reveal mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5 text-[13.5px]"
          style={{ transitionDelay: "320ms" }}
        >
          <li className="flex items-center gap-1.5 text-purple-400">
            <Check />+$5.1M AUM gestionados
          </li>
          <li className="text-purple-600/50">·</li>
          <li className="flex items-center gap-1.5 text-purple-400">
            <Check />+349 clientes activos
          </li>
          <li className="text-purple-600/50">·</li>
          <li className="flex items-center gap-1.5 text-purple-400">
            <Check />+1 año en desarrollo
          </li>
        </ul>

        {/* ====== APP PREVIEW PROTA — full-width, protagonista ====== */}
        <div
          className="reveal mt-14 md:mt-20"
          style={{ transitionDelay: "400ms" }}
        >
          <DashboardPreview />
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
      stroke="var(--color-purple-400)"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
