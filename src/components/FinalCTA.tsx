/**
 * FinalCTA — closing section. Calm and premium: a solid ink panel with one
 * engraved gold seal, the primary action, and the lead form. Conversion paths
 * preserved (WhatsApp transport + POST /api/leads via <LeadForm/>).
 */
import type { CSSProperties } from "react";
import { waLink } from "@/lib/whatsapp";
import { bookingLink } from "@/lib/booking";
import { LeadForm } from "./LeadForm";
import { CornerMarks, GlyphRail } from "./Ornaments";

export function FinalCTA() {
  return (
    <section id="contacto" className="section-base section-chroma section-pad">
      <div className="mx-auto max-w-[1000px] px-5 md:px-8">
        <div className="ops-card ring-anim maat-weave relative overflow-hidden p-10 text-center md:p-16">
          {/* Cinematic color wash — drifting violet/gold/cyan aurora behind copy */}
          <div className="panel-aurora" aria-hidden />
          {/* Engraved gold corner marks — ceremonial frame around the close */}
          <CornerMarks inset={18} />
          {/* Engraved Maat motif — winged sun disk watermark, one per surface
              (DS). Slow float + breathe; paused under reduced-motion. */}
          <div aria-hidden className="pointer-events-none absolute left-1/2 -top-12 -translate-x-1/2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/motifs/sun-disk.svg"
              alt=""
              className="motif motif-float h-28 w-28 md:h-32 md:w-32"
              style={{ "--motif-o": 0.1 } as CSSProperties}
            />
          </div>

          <div className="relative">
            <div className="seal-rule mx-auto mb-7 max-w-[220px]" aria-hidden>
              <span className="gold-shimmer font-mono text-[10px] uppercase tracking-[0.16em]">Maat</span>
            </div>

            <h2
              className="mx-auto max-w-[680px] font-display text-[34px] leading-[1.06] tracking-[-0.03em] text-white md:text-[48px]"
              style={{ fontWeight: 800 }}
            >
              ¿Listo para construir el software de tu negocio?
            </h2>
            <p className="mx-auto mt-5 max-w-[540px] text-[16px] leading-relaxed text-slate-300 md:text-[17px]">
              Contanos qué necesitás. Te mostramos lo que ya construimos funcionando y armamos
              una propuesta a tu medida.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={waLink("Hola MaatWork, quiero contarles un proyecto")}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-violet inline-flex h-[52px] items-center justify-center rounded-full px-7 text-[15.5px] font-semibold text-white hover-scale"
              >
                Contanos tu proyecto
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

            <p className="mt-5 text-[13.5px] text-slate-400">
              ¿Preferís agendar?{" "}
              <a
                href={bookingLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-violet-300 underline-offset-2 transition-colors hover:text-violet-200 hover:underline"
              >
                Agendá un diagnóstico de 30 min →
              </a>
            </p>

            <p className="mt-5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-slate-500">
              Sin permanencia · Te lo mostramos antes de firmar · Soporte local
            </p>

            <GlyphRail
              className="mx-auto mt-9 max-w-[300px]"
              glyphs={["scales-of-maat", "feather-of-maat", "ankh"]}
            />

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
