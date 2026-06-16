/**
 * FinalCTA — última sección. Prueba honesta: productos reales que ya operan
 * (sin inventar actividad de clientes en vivo).
 */
import { waLink } from "@/lib/whatsapp";
import { LeadForm } from "./LeadForm";

const LIVE_PRODUCTS = ["NMS", "MaatWorkCRM", "Infrannova", "Varigas"];

export function FinalCTA() {
  return (
    <section className="section-base section-pad">
      <div className="mx-auto max-w-[1100px] px-5 md:px-8">
        <div
          className="relative rounded-3xl overflow-hidden border border-purple-600/30 p-10 md:p-16 text-center"
          style={{
            background:
              "linear-gradient(180deg, rgba(124,58,237,0.12) 0%, rgba(45,16,101,0.55) 100%)",
          }}
        >
          {/* Subtle radial top */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-50 pointer-events-none"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 0%, rgba(168,85,247,0.20) 0%, rgba(15,5,32,0) 70%)",
            }}
          />

          <div className="relative">
            {/* Prueba honesta: productos reales operando */}
            <div className="flex items-center justify-center gap-2 mb-7 text-[12px] text-purple-400/85">
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-70 animate-ping" />
                <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-success" />
              </span>
              <span className="uppercase tracking-[0.18em] font-semibold">Productos reales operando</span>
            </div>

            <h2
              className="font-display text-white text-[36px] md:text-[52px] leading-[1.04] tracking-[-0.03em] max-w-[720px] mx-auto"
              style={{ fontWeight: 800 }}
            >
              ¿Listo para dejar de improvisar?
            </h2>
            <p className="mt-5 text-[16.5px] md:text-[17.5px] text-purple-200 max-w-[560px] mx-auto leading-[1.55]">
              Empezás con 14 días gratis, sin tarjeta. Te llamamos y
              configuramos todo con vos.
            </p>

            {/* Productos reales — prueba honesta, sin actividad inventada */}
            <ul className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
              {LIVE_PRODUCTS.map((p) => (
                <li
                  key={p}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[12.5px] text-purple-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-success" />
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={waLink("Hola MaatWork ✋ quiero empezar")}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-whatsapp inline-flex items-center justify-center gap-2.5 h-[54px] px-7 rounded-full text-white font-semibold text-[15.5px] hover-scale"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 9.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
                Hablar por WhatsApp
              </a>
              <a
                href="#funcionalidades"
                className="inline-flex items-center justify-center h-[54px] px-7 rounded-full text-white font-semibold text-[15.5px] border border-white/15 hover:border-white/30 hover:bg-white/[0.04] transition"
              >
                Ver funcionalidades
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-[13.5px] text-purple-400">
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

            {/* Vía alternativa a WhatsApp: dejá tus datos y te contactamos (POST /api/leads) */}
            <div className="mt-10 pt-8 border-t border-white/[0.08] max-w-[560px] mx-auto text-left">
              <p className="mb-3.5 text-center text-[14px] text-purple-200/90">
                ¿Preferís que te escribamos nosotros? Dejanos tus datos.
              </p>
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Dot() {
  return (
    <span className="inline-block w-1 h-1 rounded-full bg-purple-400/60" />
  );
}
