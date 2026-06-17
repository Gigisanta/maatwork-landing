/**
 * FinalCTA — closing section. Calm and premium: a solid ink panel with one
 * engraved gold seal, the primary action, and the lead form. Conversion paths
 * preserved (WhatsApp transport + POST /api/leads via <LeadForm/>).
 */
import { waLink } from "@/lib/whatsapp";
import { LeadForm } from "./LeadForm";

export function FinalCTA() {
  return (
    <section id="contacto" className="section-base section-chroma section-pad">
      <div className="mx-auto max-w-[1000px] px-5 md:px-8">
        <div className="ops-card ring-anim relative overflow-hidden p-10 text-center md:p-16">
          {/* Cinematic color wash — drifting violet/gold/cyan aurora behind copy */}
          <div className="panel-aurora" aria-hidden />
          {/* Engraved Maat motif — sun disk watermark, one per surface (DS) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/motifs/sun-disk.svg"
            alt=""
            aria-hidden
            className="pointer-events-none absolute left-1/2 -top-10 h-28 w-28 -translate-x-1/2 opacity-[0.08]"
          />

          <div className="relative">
            <div className="seal-rule mx-auto mb-7 max-w-[220px]" aria-hidden>
              <span className="gold-shimmer font-mono text-[10px] uppercase tracking-[0.16em]">Maat</span>
            </div>

            <h2
              className="mx-auto max-w-[680px] font-display text-[34px] leading-[1.06] tracking-[-0.03em] text-white md:text-[48px]"
              style={{ fontWeight: 800 }}
            >
              ¿Listo para operar con un solo sistema?
            </h2>
            <p className="mx-auto mt-5 max-w-[540px] text-[16px] leading-relaxed text-slate-300 md:text-[17px]">
              Empezás con 14 días gratis, sin tarjeta. Te mostramos una demo operativa y
              configuramos todo con vos.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={waLink("Hola MaatWork, quiero ver una demo operativa")}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-violet inline-flex h-[52px] items-center justify-center rounded-full px-7 text-[15.5px] font-semibold text-white hover-scale"
              >
                Ver demo operativa
              </a>
              <a
                href={waLink("Hola MaatWork, quiero hablar con el equipo")}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-whatsapp inline-flex h-[52px] items-center justify-center gap-2.5 rounded-full px-7 text-[15.5px] font-semibold text-white hover-scale"
              >
                <WhatsAppIcon />
                Hablar con MaatWork
              </a>
            </div>

            <p className="mt-7 font-mono text-[10.5px] uppercase tracking-[0.12em] text-slate-500">
              Sin tarjeta · Sin contrato · Soporte en español
            </p>

            {/* Alternative to WhatsApp: leave your details (POST /api/leads) */}
            <div className="mx-auto mt-10 max-w-[540px] border-t border-white/[0.08] pt-8 text-left">
              <p className="mb-3.5 text-center text-[14px] text-slate-300">
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

function WhatsAppIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
    </svg>
  );
}
