/**
 * FinalCTA — closing section. Sincroweb-inspired copy: urgency, clear offer,
 * WhatsApp + email options. Calm and premium with the Egyptian design.
 */
import type { CSSProperties } from "react";
import { waLink } from "@/lib/whatsapp";
import { LeadForm } from "./LeadForm";
import { CornerMarks, GlyphRail, MOTIFS_MAP } from "./Ornaments";

function Motif({ name, className, style }: { name: string; className?: string; style?: CSSProperties }) {
  return (
    <span aria-hidden className={className} style={style}
      dangerouslySetInnerHTML={{ __html: MOTIFS_MAP[name] || "" }}
    />
  );
}

export function FinalCTA() {
  return (
    <section id="contacto" className="section-base section-chroma section-pad">
      <div className="mx-auto max-w-[1000px] px-5 md:px-8">
        <div className="ops-card ring-anim maat-weave relative overflow-hidden p-10 text-center md:p-16">
          {/* Cinematic color wash — drifting violet/gold/cyan aurora behind copy */}
          <div className="panel-aurora" aria-hidden />
          {/* Engraved gold corner marks — ceremonial frame around the close */}
          <CornerMarks inset={18} />
          {/* Engraved Maat motif — winged sun disk watermark */}
          <div aria-hidden className="pointer-events-none absolute left-1/2 -top-12 -translate-x-1/2">
            <Motif name="sun-disk" className="motif motif-float h-28 w-28 md:h-32 md:w-32"
              style={{ "--motif-o": 0.1 } as CSSProperties}
            />
          </div>
          {/* Was-scepter — authority over the chaos */}
          <div aria-hidden className="pointer-events-none absolute bottom-10 right-8 hidden md:block">
            <Motif name="was-scepter" className="motif motif-float h-20 w-20 [animation-delay:-7s]"
              style={{ "--motif-o": 0.06 } as CSSProperties}
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
              ¿Tenés una idea o un proceso para automatizar?
            </h2>
            <p className="mx-auto mt-5 max-w-[580px] text-[16px] leading-relaxed text-slate-300 md:text-[17px]">
              Contanos en 30 minutos qué querés construir. Salís de la llamada con estimación de tiempos,
              presupuesto y un plan claro.
            </p>

            {/* Offer bullets */}
            <div className="mx-auto mt-7 flex max-w-[480px] flex-col items-center gap-2">
              {[
                "Estimación de tiempos y precio",
                "Definición de stack técnico",
                "Plan de sprints concreto",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-slate-400">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full border border-emerald-400/40 text-[8px] text-emerald-400">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={waLink("Hola MaatWork, quiero contarles un proyecto")}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-violet inline-flex h-[52px] items-center justify-center rounded-full px-7 text-[15.5px] font-semibold tracking-[-0.01em] text-white hover-scale"
              >
                Empezá tu proyecto
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="ml-1.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a
                href="mailto:giolivosantarelli@gmail.com"
                className="cta-ghost inline-flex h-[52px] items-center justify-center gap-2 rounded-full px-7 text-[15.5px] font-semibold text-white hover-scale"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 4L12 13 2 4" />
                </svg>
                Prefiero escribir un mail
              </a>
            </div>

            <p className="mt-5 text-[13px] text-slate-500">
              NDA disponible · Respuesta en menos de 24 hs
            </p>

            {/* Lead form — embedded for high-intent traffic */}
            <div className="mx-auto mt-10 max-w-[440px]">
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
