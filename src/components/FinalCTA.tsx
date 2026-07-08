/**
 * FinalCTA — closing section. Sincroweb-inspired copy: urgency, clear offer,
 * WhatsApp + email options. Calm and premium with the Egyptian design.
 */
import type { CSSProperties } from "react";
import { waLink } from "@/lib/whatsapp";
import { LeadForm } from "./LeadForm";
import { CornerMarks, MOTIFS_MAP } from "./Ornaments";

function Motif({ name, className, style }: { name: string; className?: string; style?: CSSProperties }) {
  return (
    <span aria-hidden className={className} style={style}
      dangerouslySetInnerHTML={{ __html: MOTIFS_MAP[name] || "" }}
    />
  );
}

export function FinalCTA() {
  return (
    <section id="contacto" className="section-atmo section-base section-chroma section-pad">
      <div className="atmo" aria-hidden>
        <div className="atmo-grid" />
        <div className="atmo-vignette" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1000px] px-5 md:px-8">
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
            <p className="reveal font-mono text-[13px] uppercase tracking-[0.16em] text-[var(--gold-400)]">
              ¿Qué querés destrabar?
            </p>

            <h2
              className="reveal mx-auto mt-3 max-w-[680px] font-display text-[40px] font-black leading-[1.02] tracking-display md:text-[64px]"
              style={{ transitionDelay: "40ms" }}
            >
              <span className="brand-maat">MAAT</span>
              <span className="brand-work">Work</span>
            </h2>
            <p className="reveal mx-auto mt-5 max-w-[580px] text-[16px] leading-relaxed text-[var(--text-secondary)] md:text-[17px]" style={{ transitionDelay: "80ms" }}>
              Mandanos el problema. Te decimos el primer paso sin marearte.
            </p>

            {/* Offer bullets */}
            <div className="reveal mx-auto mt-7 flex max-w-[480px] flex-col items-center gap-2" style={{ transitionDelay: "120ms" }}>
              {[
                "Alcance",
                "Tiempo y costo",
                "Próximo paso",
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
                href="mailto:giolivosantarelli@gmail.com"
                className="cta-ghost hover-lift-glow press-sink inline-flex h-[52px] items-center justify-center gap-2 rounded-full px-7 text-[15.5px] font-semibold text-white"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 4L12 13 2 4" />
                </svg>
                Prefiero escribir un mail
              </a>
            </div>

            <p className="reveal mt-5 inline-flex rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-slate-400" style={{ transitionDelay: "200ms" }}>
              NDA disponible · respuesta directa
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
