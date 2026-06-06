import { DashboardPreview } from "./DashboardPreview";
import { StaggeredText } from "./StaggeredText";

/**
 * Hero — V5: staggered text + fotorrealistic dashboard preview.
 * Respeta brief: dark purple profundo, NO gradient en texto,
 * NO floating orbs (solo un radial wash detrás del preview),
 * NO 3D, NO glassmorphism excesivo.
 */
export function Hero() {
  return (
    <section
      id="top"
      className="section-base relative pt-24 md:pt-32 pb-20 md:pb-28 overflow-hidden"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-12 items-center">
          {/* Copy */}
          <div className="reveal order-2 lg:order-1 lg:pr-2">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#7c3aed]/25 bg-[#7c3aed]/10 px-3 py-1.5 text-[12.5px] text-[#d4b8ff] mb-6">
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" style={{ animation: "pulse-ring 1.8s cubic-bezier(0.4, 0, 0.6, 1) infinite" }} />
                <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-[#25D366]" />
              </span>
              <span className="font-medium">14 días gratis</span>
              <span className="text-[#a78bfa]/40">·</span>
              <span>Sin tarjeta</span>
              <span className="text-[#a78bfa]/40">·</span>
              <span>Setup en 5 días</span>
            </div>

            <StaggeredText
              as="h1"
              text="Automatizá tu local. Sin complicaciones."
              className="font-display text-white tracking-[-0.04em] text-[44px] sm:text-[58px] lg:text-[78px] leading-[0.93] text-balance"
              stagger={32}
              startDelay={100}
              accent="text-[#d4b8ff]"
            />

            <p
              className="mt-7 text-[17px] md:text-[18.5px] text-[#d4b8ff] max-w-[540px] leading-[1.55]"
              style={{ animation: "letter-reveal 0.7s var(--ease-out-quart) 600ms backwards" }}
            >
              El SaaS que gyms, salones y academias eligen en Argentina.
              Agenda, cobros, CRM y WhatsApp en un solo lugar — y{" "}
              <span className="text-white font-semibold">dejás de perder entre 2 y 5 horas por día</span>.
            </p>

            <div
              className="mt-9 flex flex-col sm:flex-row gap-3"
              style={{ animation: "letter-reveal 0.7s var(--ease-out-quart) 800ms backwards" }}
            >
              <a
                href="https://wa.me/5491100000000?text=Hola%20MaatWork%20%E2%9C%8B%20quiero%20probar"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-whatsapp inline-flex items-center justify-center gap-2.5 px-7 rounded-full text-white font-semibold text-[15.5px] tracking-[-0.01em] hover-scale"
                style={{ height: 56 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
                Comenzar gratis
              </a>
              <a
                href="#funcionalidades"
                className="inline-flex items-center justify-center gap-2 px-7 rounded-full text-white font-semibold text-[15.5px] border border-white/15 hover:border-white/30 hover:bg-white/[0.04] transition-all duration-300 ease-out-quart hover-scale"
                style={{ height: 56 }}
              >
                Ver demo en vivo
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>

            <ul
              className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-2.5 text-[13.5px]"
              style={{ animation: "letter-reveal 0.7s var(--ease-out-quart) 1000ms backwards" }}
            >
              <li className="flex items-center gap-1.5 text-[#a78bfa]">
                <Check />+$5.1M AUM
              </li>
              <li className="text-[#7c3aed]/50">·</li>
              <li className="flex items-center gap-1.5 text-[#a78bfa]">
                <Check />+349 clientes
              </li>
              <li className="text-[#7c3aed]/50">·</li>
              <li className="flex items-center gap-1.5 text-[#a78bfa]">
                <Check />99.9% uptime
              </li>
            </ul>
          </div>

          {/* Visual: dashboard preview fotorrealista */}
          <div className="reveal order-1 lg:order-2" style={{ transitionDelay: "200ms" }}>
            <DashboardPreview />
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
