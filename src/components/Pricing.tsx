/**
 * Pricing — base operational plan from USD 100/month, billed in pesos at the
 * daily FX rate. The base plan covers the core operating layer; advanced modules
 * are quoted separately so the page does not imply a false all-included bundle.
 */
import type { CSSProperties } from "react";
import { waLink } from "@/lib/whatsapp";
import { CornerMarks, CardGlyph, MOTIFS_MAP } from "./Ornaments";

function Motif({ name, className, style }: { name: string; className?: string; style?: CSSProperties }) {
  return (
    <span aria-hidden className={className} style={style}
      dangerouslySetInnerHTML={{ __html: MOTIFS_MAP[name] || "" }}
    />
  );
}

const PLAN_INCLUDES = [
  "Gestión de clientes",
  "Agenda o inventario simple",
  "Panel inicial",
];

const QUOTED_MODULES = [
  "WhatsApp, cobros e IA",
  "Reportes e integraciones",
  "App móvil o multi-sucursal",
];

export function Pricing() {
  return (
    <section id="precios" className="section-elev1 section-chroma section-pad border-y border-white/[0.06]">
      <div className="container-maat">
        <div className="max-w-[660px] reveal">
          <span className="eyebrow">Plan base</span>
          <h2 className="mt-3 font-display text-3xl text-white md:text-4xl" style={{ fontWeight: 800, letterSpacing: "var(--tracking-h2)" }}>
            Empezá chico. Escalá después.
          </h2>
          <p className="mt-4 max-w-[560px] text-[16px] leading-7 text-slate-300">
            Primero ordenamos lo esencial. Lo avanzado se cotiza solo si hace falta.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Base plan card — premium animated ring */}
          <div className="reveal">
            <div
              className="ops-card ring-anim relative flex h-full flex-col overflow-hidden p-8 md:p-10"
              style={{ borderColor: "var(--violet-ring)", boxShadow: "var(--shadow-lg), var(--glow-soft)" }}
            >
              <CornerMarks inset={16} />
              {/* Engraved feather of Maat — the namesake symbol (truth / order),
                  living gold watermark behind the plan. */}
              <div aria-hidden className="pointer-events-none absolute -right-6 top-4 hidden md:block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Motif name="feather-of-maat" className="motif motif-float h-44 w-44 lg:h-56 lg:w-56"
                  style={{ "--motif-o": 0.055 } as CSSProperties}
                />
              </div>

              <div className="relative flex items-center justify-between gap-4">
                <span className="eyebrow gold-shimmer">Plan base</span>
                <span className="status-pill status-pill--live shrink-0">
                  <span className="live-ring h-1.5 w-1.5 rounded-full bg-cyan" />
                  Esencial
                </span>
              </div>

              <div aria-hidden="true" className="relative mt-5 hidden items-center justify-center gap-3 sm:flex">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
                <Motif name="ankh" className="motif motif-float h-4 w-4" style={{ "--motif-o": 0.16 } as CSSProperties} />
                <Motif name="scales-of-maat" className="motif motif-float h-4 w-4 [animation-delay:-1.8s]" style={{ "--motif-o": 0.13 } as CSSProperties} />
                <Motif name="scarab" className="motif motif-float h-4 w-4 [animation-delay:-3.2s]" style={{ "--motif-o": 0.12 } as CSSProperties} />
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
              </div>

              <div className="relative mt-5 flex flex-wrap items-end gap-x-2.5 gap-y-1">
                <span className="pb-2 font-mono text-[12px] font-semibold uppercase tracking-[0.12em] text-gold-300">
                  Desde USD
                </span>
                <span className="font-display text-[58px] leading-none tracking-[-0.04em] text-text-primary" style={{ fontWeight: 800 }}>
                  100
                </span>
                <span className="pb-1 text-[15px] font-medium text-slate-400">/mes</span>
              </div>
              <p className="relative mt-2 font-mono text-[11.5px] uppercase tracking-[0.09em] text-slate-400">
                + setup según alcance · en pesos al cambio del día
              </p>

              <div className="seal-rule my-7" aria-hidden>
                {/* Ankh — life/operations, engraved gold. */}
                <svg width="13" height="16" viewBox="0 0 24 28" fill="none" stroke="var(--gold-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="7" rx="5" ry="6" />
                  <line x1="12" y1="13" x2="12" y2="26" />
                  <line x1="5" y1="17.5" x2="19" y2="17.5" />
                </svg>
              </div>

              <ul className="relative space-y-3">
                {PLAN_INCLUDES.map((f) => (
                  <li key={f} className="hover-lift-glow flex items-start gap-3 rounded-md text-[14.5px] text-slate-300">
                    <Check />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={waLink("Hola MaatWork, quiero cotizar el plan base")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-violet hover-lift-glow press-sink inline-flex h-12 flex-1 items-center justify-center rounded-full px-6 text-[15px] font-semibold text-white"
                >
                  Cotizar plan base
                </a>
                <a
                  href="#contacto"
                  className="cta-ghost hover-lift-glow press-sink inline-flex h-12 flex-1 items-center justify-center rounded-full px-6 text-[15px] font-semibold text-white"
                >
                  Hablar ahora
                </a>
              </div>

              <p className="mt-5 text-center font-mono text-[11px] uppercase tracking-[0.09em] text-slate-400">
                Sin permanencia · demo antes de avanzar · escalable
              </p>
            </div>
          </div>

          {/* Quoted modules */}
          <div className="reveal" style={{ transitionDelay: "100ms" }}>
            <div className="ops-card card-accent accent-emerald hover-lift-glow press-sink relative flex h-full flex-col p-8">
              {/* Scales of Maat — judgement / balance: clear base, custom scope quoted fairly. */}
              <CardGlyph motif="scales-of-maat" className="absolute right-3 bottom-3 h-20 w-20" o={0.06} />
              {/* Cartouche — your real scope gets its own name, not a forced bundle */}
              <CardGlyph motif="cartouche" className="absolute right-3 top-3 h-14 w-14" o={0.05} />
              <h3 className="font-display text-[20px] font-extrabold tracking-[-0.02em] text-white">
                Extras a medida
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[var(--text-secondary)]">
                Sin paquete inflado. Sumamos solo lo que tenga impacto real.
              </p>

              <ul className="mt-7 space-y-3.5">
                {QUOTED_MODULES.map((f) => (
                  <li key={f} className="hover-lift-glow flex items-start gap-3 rounded-md text-[14.5px] text-slate-300">
                    <PremiumMark />
                    {f}
                  </li>
                ))}
              </ul>

              <p className="mt-auto pt-7 font-mono text-[10.5px] uppercase leading-relaxed tracking-[0.08em] text-slate-500">
                Primero base. Después escala.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Check() {
  return (
    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-success/30 bg-success/15">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--color-success)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
}

// Gold "+" marker for quoted modules — reads as optional/custom, not bundled into the base price.
function PremiumMark() {
  return (
    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-gold-400/40 bg-gold-400/[0.12]">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--gold-400)" strokeWidth="3.5" strokeLinecap="round" aria-hidden>
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    </span>
  );
}
