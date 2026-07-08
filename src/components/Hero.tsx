import type { CSSProperties } from "react";
import { CornerMarks, GlyphRail } from "./Ornaments";
import { Logo } from "./Logo";
import { waLink } from "@/lib/whatsapp";
import { MOTIFS } from "@/lib/motifs";
import { SERIOUS_PROJECT_COUNT } from "@/data/products";

/** Render inline SVG motif — zero HTTP requests. */
function MotifImg({ name, className, style }: { name: string; className?: string; style?: CSSProperties }) {
  return (
    <span
      aria-hidden
      className={className}
      style={style}
      dangerouslySetInnerHTML={{ __html: MOTIFS[name] || "" }}
    />
  );
}

const H1_LINE_1 = "Ordená tu negocio";
const H1_LINE_2 = "con software simple";

// Real products in production — the proof chips, color-keyed to the showcase.
const IN_PRODUCTION: { name: string; accent: string; dot: string }[] = [
  { name: "NMS", accent: "accent-cyan", dot: "var(--cyan)" },
  { name: "MaatWorkCRM", accent: "accent-violet", dot: "var(--violet-400)" },
  { name: "Infrannova", accent: "accent-gold", dot: "var(--gold-400)" },
  { name: "Varigas", accent: "accent-rose", dot: "var(--rose)" },
];

export function Hero() {
  return (
    <section id="top" className="section-base section-chroma relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20">
      {/* ---- Atmosphere layers: golden grid, vignette, grain ---- */}
      <div className="atmo" aria-hidden>
        <div className="atmo-grid" />
        <div className="atmo-vignette" />
        <div className="atmo-grain" />
      </div>

      <div className="hero-halo" aria-hidden />

      {/* ---- Floating ceremonial glyphs ---- */}
      <MotifImg
        name="ankh"
        className="glyph-drift pointer-events-none absolute left-[4%] top-[18%] z-[1] h-14 w-14"
        style={{ animationDelay: "0s" } as CSSProperties}
      />
      <MotifImg
        name="feather-of-maat"
        className="glyph-float pointer-events-none absolute right-[6%] top-[22%] z-[1] h-18 w-18"
        style={{ animationDelay: "-3s" } as CSSProperties}
      />
      <MotifImg
        name="was-scepter"
        className="glyph-drift pointer-events-none absolute left-[8%] bottom-[30%] z-[1] h-16 w-16"
        style={{ animationDelay: "-7s" } as CSSProperties}
      />
      <MotifImg
        name="eye-of-horus"
        className="glyph-float pointer-events-none absolute right-[3%] bottom-[38%] z-[1] h-12 w-12"
        style={{ animationDelay: "-11s" } as CSSProperties}
      />

      {/* Winged sun disk of Ra — engraved gold watermark above the headline */}
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-16 z-[1] -translate-x-1/2 md:top-20">
        <MotifImg
          name="sun-disk"
          className="motif motif-float h-44 w-44 md:h-56 md:w-56"
          style={{ "--motif-o": 0.07 } as CSSProperties}
        />
      </div>
      {/* Was-scepter — authority over operational chaos, faint engraved watermark */}
      <div aria-hidden className="pointer-events-none absolute right-[3%] top-[26%] z-[1] hidden lg:block">
        <MotifImg name="was-scepter" className="motif h-28 w-28" style={{ "--motif-o": 0.04 } as CSSProperties} />
      </div>
      {/* Ankh — operational life, mirrored faint watermark on the left */}
      <div aria-hidden className="pointer-events-none absolute left-[3%] top-[30%] z-[1] hidden lg:block">
        <MotifImg name="ankh" className="motif h-24 w-24" style={{ "--motif-o": 0.04 } as CSSProperties} />
      </div>

      <div className="container-maat relative z-10">
        {/* Briefing frame — engraved gold corner marks around the hero copy */}
        <div className="relative mx-auto max-w-[1040px] px-4 pt-9 pb-7 sm:px-6">
          <CornerMarks inset={0} />

          {/* ---- Brand: Logo + "MAAT" gold / "Work" violet ---- */}
          <div className="reveal mb-5 flex flex-col items-center gap-3" style={{ transitionDelay: "0ms" }}>
            <Logo size={52} showText={false} />
            <h1 className="text-center font-display text-5xl font-black tracking-display sm:text-6xl lg:text-7xl">
              <span className="brand-maat">MAAT</span>
              <span className="brand-work">Work</span>
            </h1>
          </div>

          {/* ---- Tagline ---- */}
          {/* removed */}

          {/* Scarcity + credibility badge — sincroweb-inspired limited-spots + rating */}
          <div className="mb-6 flex justify-center">
            <div
              className="reveal inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 rounded-full border border-gold-400/20 bg-gold-500/[0.06] px-4 py-2"
              style={{ transitionDelay: "60ms" }}
            >
              <span className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-amber" />
                </span>
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-amber">
                  Diagnóstico gratis
                </span>
              </span>
              <span className="hidden h-3 w-px bg-gold-400/20 sm:block" aria-hidden />
              <span className="font-mono text-[11px] tracking-[0.04em] text-gold-300">
                Portfolio real
              </span>
              <span className="hidden h-3 w-px bg-gold-400/20 sm:block" aria-hidden />
              <span className="font-mono text-[11px] tracking-[0.04em] text-slate-400">
                {SERIOUS_PROJECT_COUNT} proyectos online
              </span>
            </div>
          </div>

          <h2
            aria-label={`${H1_LINE_1} ${H1_LINE_2}`}
            className="reveal mx-auto max-w-[1000px] text-center font-display text-4xl text-white text-balance sm:text-5xl lg:text-[4rem]"
            style={{ fontWeight: 800, letterSpacing: "var(--tracking-display)", lineHeight: 1.02, transitionDelay: "100ms" }}
          >
            <span className="line-reveal block" style={{ animationDelay: "60ms" }}>
              {H1_LINE_1}{" "}
            </span>
            <span className="line-reveal block" style={{ animationDelay: "170ms" }}>
              con <span className="hero-word hero-word--gold">software</span>{" "}
              <span className="hero-word hero-word--violet">simple</span>
            </span>
          </h2>

          <p
            className="reveal mx-auto mt-6 max-w-[680px] text-center text-base leading-7 text-slate-300 md:text-lg md:leading-8"
            style={{ transitionDelay: "200ms" }}
          >
            Detectamos el cuello de botella y construimos lo mínimo para que deje de romperte el día.
          </p>

          <div
            className="reveal mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ transitionDelay: "260ms" }}
          >
            <a
              href={waLink("Hola MaatWork, quiero contarles un proyecto")}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-violet hover-lift-glow press-sink group inline-flex items-center justify-center gap-2.5 rounded-full px-7 text-[15px] font-semibold tracking-[-0.01em] text-white"
              style={{ height: 54 }}
            >
              Resolver mi cuello de botella
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a
              href="#ecosistema"
              className="cta-ghost hover-lift-glow press-sink inline-flex items-center justify-center gap-2 rounded-full px-7 text-[15px] font-semibold text-white"
              style={{ height: 54 }}
            >
              Ver prueba real
            </a>
          </div>

          <p
            className="reveal mt-5 text-center font-mono text-[11px] uppercase tracking-[0.1em] text-slate-400"
            style={{ transitionDelay: "300ms" }}
          >
            15 min · alcance claro · sin venta agresiva
          </p>

          {/* One proof object: real products in production, stated plainly */}
          <div
            className="reveal mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
            style={{ transitionDelay: "320ms" }}
          >
            <span className="mono-tag text-text-tertiary">En producción</span>
            {IN_PRODUCTION.map((p) => (
              <span key={p.name} className={`${p.accent} flex items-center gap-1.5 font-mono text-[11px] tracking-[0.04em] text-slate-300`}>
                <span className="dot-pulse h-1.5 w-1.5 rounded-full" style={{ background: p.dot }} />
                {p.name}
              </span>
            ))}
          </div>
        </div>

        {/* Ceremonial glyph rail — engraved transition from copy into the product */}
        <GlyphRail
          className="reveal mx-auto mt-11 max-w-[460px]"
          glyphs={["ankh", "was-scepter", "feather-of-maat", "eye-of-horus"]}
          o={0.18}
        />
      </div>
    </section>
  );
}
