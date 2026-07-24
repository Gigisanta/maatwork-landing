/**
 * FinalCTA — cierre único de la página: un pedido claro, después de la prueba.
 * WhatsApp primario + mail de dominio + formulario para tráfico de alta intención.
 */
import { waLink } from "@/lib/whatsapp";
import { LeadForm } from "./LeadForm";
import { CornerMarks } from "./Ornaments";

const CONTACT_EMAIL = "hola@maat.work";

export function FinalCTA() {
  return (
    <section id="contacto" className="section-atmo section-base section-chroma section-pad">
      <div className="atmo" aria-hidden>
        <div className="atmo-grid" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1000px] px-5 md:px-8">
        <div className="ops-card ring-anim relative overflow-hidden p-10 text-center md:p-16">
          <CornerMarks inset={18} />

          <div className="relative">
            <p className="reveal font-mono text-[13px] uppercase tracking-[0.16em] text-[var(--text-tertiary)]">
              Contacto
            </p>

            <h2
              className="reveal mx-auto mt-3 max-w-[680px] font-display text-[34px] font-black leading-[1.05] tracking-display text-text-primary md:text-[52px]"
              style={{ transitionDelay: "40ms" }}
            >
              ¿Qué querés destrabar?
            </h2>
            <p className="reveal mx-auto mt-5 max-w-[580px] text-[16px] leading-relaxed text-[var(--text-secondary)] md:text-[17px]" style={{ transitionDelay: "80ms" }}>
              Mandanos el problema. Salís de la charla con alcance, tiempo, costo y el primer paso — sin marearte.
            </p>

            <div className="reveal mt-9 flex flex-col justify-center gap-3 sm:flex-row" style={{ transitionDelay: "160ms" }}>
              <a
                href={waLink("Hola MaatWork, quiero contarles un proyecto")}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-violet hover-lift-glow press-sink inline-flex h-[52px] items-center justify-center gap-2 rounded-full px-7 text-[15.5px] font-semibold tracking-[-0.01em] text-white"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
                Hablar con MaatWork
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="cta-ghost hover-lift-glow press-sink inline-flex h-[52px] items-center justify-center gap-2 rounded-full px-7 text-[15.5px] font-semibold text-text-primary"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 4L12 13 2 4" />
                </svg>
                Prefiero escribir un mail
              </a>
            </div>

            <p className="reveal mt-5 inline-flex rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--text-tertiary)]" style={{ transitionDelay: "200ms" }}>
              NDA disponible · respuesta en el día · sin permanencia
            </p>

            {/* Lead form — embedded for high-intent traffic */}
            <div className="reveal mx-auto mt-10 max-w-[440px]" style={{ transitionDelay: "240ms" }}>
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
