import type { CSSProperties } from "react";
import { ProductShowcase } from "./ProductShowcase";
import { CornerMarks, GlyphRail } from "./Ornaments";
import { waLink } from "@/lib/whatsapp";

const H1_LINE_1 = "Construimos software a medida y automatizaciones ";
const H1_LINE_2 = "para que tu negocio funcione solo.";

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
      <div className="hero-halo" aria-hidden />
      {/* Winged sun disk of Ra — engraved gold watermark above the headline */}
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-16 z-0 -translate-x-1/2 md:top-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/motifs/sun-disk.svg"
          alt=""
          className="motif motif-float h-44 w-44 md:h-56 md:w-56"
          style={{ "--motif-o": 0.07 } as CSSProperties}
        />
      </div>
      {/* Was-scepter — authority over operational chaos, faint engraved watermark */}
      <div aria-hidden className="pointer-events-none absolute right-[3%] top-[26%] z-0 hidden lg:block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/motifs/was-scepter.svg" alt="" className="motif h-28 w-28" style={{ "--motif-o": 0.04 } as CSSProperties} />
      </div>
      {/* Ankh — operational life, mirrored faint watermark on the left */}
      <div aria-hidden className="pointer-events-none absolute left-[3%] top-[30%] z-0 hidden lg:block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/motifs/ankh.svg" alt="" className="motif h-24 w-24" style={{ "--motif-o": 0.04 } as CSSProperties} />
      </div>
      <div className="container-maat relative z-10">
        {/* Briefing frame — engraved gold corner marks around the hero copy */}
        <div className="relative mx-auto max-w-[1040px] px-4 pt-9 pb-7 sm:px-6">
          <CornerMarks inset={0} />
        {/* Mission briefing eyebrow */}
        <div className="mb-6 flex justify-center">
          <div
            className="reveal live-chip inline-flex items-center gap-2.5 rounded-full border px-3.5 py-1.5"
            style={{ transitionDelay: "0ms" }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
            </span>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em]">
              Estudio de software y automatización · Argentina
            </span>
          </div>
        </div>

        <h1
          aria-label={`${H1_LINE_1} ${H1_LINE_2}`}
          className="reveal mx-auto max-w-[1000px] text-center font-display text-4xl text-white text-balance sm:text-5xl lg:text-[4rem]"
          style={{ fontWeight: 800, letterSpacing: "var(--tracking-display)", lineHeight: 1.02, transitionDelay: "60ms" }}
        >
          <span className="line-reveal block" style={{ animationDelay: "60ms" }}>
            Construimos <span className="hero-word hero-word--gold">software a medida</span> y{" "}
            <span className="hero-word hero-word--violet">automatizaciones</span>
          </span>
          <span className="line-reveal block text-slate-300" style={{ animationDelay: "170ms" }}>
            para que tu negocio <span className="hero-word hero-word--cyan">funcione solo</span>.
          </span>
        </h1>

        <p
          className="reveal mx-auto mt-6 max-w-[680px] text-center text-base leading-7 text-slate-300 md:text-lg md:leading-8"
          style={{ transitionDelay: "200ms" }}
        >
          Apps, sistemas de gestión y automatizaciones a medida para cualquier rubro. NMS,
          MaatWorkCRM, Infrannova y Varigas ya funcionan en producción — el tuyo es el próximo.
        </p>

        <div
          className="reveal mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ transitionDelay: "260ms" }}
        >
          <a
            href={waLink("Hola MaatWork, quiero contarles un proyecto")}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-violet group inline-flex items-center justify-center gap-2.5 rounded-full px-7 text-[15px] font-semibold tracking-[-0.01em] text-white hover-scale"
            style={{ height: 54 }}
          >
            Contanos tu proyecto
            <ArrowIcon />
          </a>
          <a
            href={waLink("Hola MaatWork, quiero hablar con el equipo")}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-ghost inline-flex items-center justify-center gap-2 rounded-full px-7 text-[15px] font-semibold text-white"
            style={{ height: 54 }}
          >
            Hablar con MaatWork
          </a>
        </div>

        <p
          className="reveal mt-5 text-center font-mono text-[11px] uppercase tracking-[0.1em] text-slate-400"
          style={{ transitionDelay: "300ms" }}
        >
          Desde USD 100/mes · Te lo mostramos funcionando antes de que firmes nada
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

        <div className="reveal mt-9 md:mt-12" style={{ transitionDelay: "400ms" }}>
          <ProductShowcase />
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="transition-transform group-hover:translate-x-0.5" style={{ transitionTimingFunction: "var(--ease-out-quart)" }}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
