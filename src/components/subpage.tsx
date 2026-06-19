/**
 * Partes presentacionales compartidas por las subpáginas (servicios, casos,
 * soluciones, blog). Reusan el design system de la home (ops-card, eyebrow,
 * cta-violet, secciones). Server components.
 */
import type { ReactNode } from "react";
import { waLink } from "@/lib/whatsapp";

export function PageHero({
  eyebrow,
  h1,
  intro,
  ctaMsg,
  secondaryHref = "/#servicios",
  secondaryLabel = "Ver todos los servicios",
  secondaryExternal = false,
}: {
  eyebrow: string;
  h1: string;
  intro: string;
  ctaMsg: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  secondaryExternal?: boolean;
}) {
  return (
    <section className="section-base section-chroma relative overflow-hidden">
      <div className="container-maat pt-10 pb-12 md:pt-12 md:pb-16">
        <span className="eyebrow">{eyebrow}</span>
        <h1
          className="mt-3 max-w-[840px] font-display text-4xl text-white text-balance md:text-5xl"
          style={{ fontWeight: 800, letterSpacing: "var(--tracking-display)", lineHeight: 1.05 }}
        >
          {h1}
        </h1>
        <p className="mt-5 max-w-[660px] text-[17px] leading-8 text-slate-300">{intro}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={waLink(`Hola MaatWork, ${ctaMsg}`)}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-violet inline-flex h-12 items-center justify-center rounded-full px-7 text-[15px] font-semibold text-white hover-scale"
          >
            Contanos tu proyecto
          </a>
          <a
            href={secondaryHref}
            target={secondaryExternal ? "_blank" : undefined}
            rel={secondaryExternal ? "noopener noreferrer" : undefined}
            className="cta-ghost inline-flex h-12 items-center justify-center rounded-full px-7 text-[15px] font-semibold text-white"
          >
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

export function ProseBlock({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
}) {
  return (
    <section className="section-base section-pad">
      <div className="container-maat max-w-[760px]">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        {title && (
          <h2 className="mt-3 font-display text-2xl text-white md:text-3xl" style={{ fontWeight: 800, letterSpacing: "var(--tracking-h2)" }}>
            {title}
          </h2>
        )}
        <div className="mt-4 text-[16px] leading-8 text-slate-300">{children}</div>
      </div>
    </section>
  );
}

export function CheckList({ title, items }: { title?: string; items: string[] }) {
  return (
    <section className="section-elev1 section-pad border-y border-white/[0.06]">
      <div className="container-maat">
        {title && (
          <h2 className="font-display text-2xl text-white md:text-3xl" style={{ fontWeight: 800, letterSpacing: "var(--tracking-h2)" }}>
            {title}
          </h2>
        )}
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {items.map((it) => (
            <li key={it} className="ops-card flex items-start gap-3 p-5 text-[15px] leading-relaxed text-slate-300">
              <Check />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ChipRow({ label, items }: { label?: string; items: string[] }) {
  return (
    <section className="section-base pb-10">
      <div className="container-maat max-w-[760px]">
        {label && <span className="eyebrow">{label}</span>}
        <div className="mt-4 flex flex-wrap gap-2">
          {items.map((it) => (
            <span
              key={it}
              className="rounded-md border border-white/[0.1] bg-white/[0.03] px-3 py-1.5 font-mono text-[11px] tracking-[0.02em] text-slate-300"
            >
              {it}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
  if (!faqs.length) return null;
  return (
    <section id="faq" className="section-elev1 section-pad border-y border-white/[0.06]">
      <div className="container-maat max-w-[760px]">
        <h2 className="font-display text-2xl text-white md:text-3xl" style={{ fontWeight: 800, letterSpacing: "var(--tracking-h2)" }}>
          Preguntas frecuentes
        </h2>
        <div className="mt-8 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="ops-card group p-5">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-[15.5px] font-semibold text-white [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="ml-2 text-xl leading-none text-violet-300 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-[14.5px] leading-7 text-slate-400">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PageCTA({
  title,
  text,
  ctaMsg,
}: {
  title: string;
  text?: string;
  ctaMsg: string;
}) {
  return (
    <section id="contacto" className="section-base section-pad">
      <div className="container-maat">
        <div className="ops-card ring-anim relative overflow-hidden p-10 text-center md:p-14">
          <h2 className="mx-auto max-w-[640px] font-display text-[30px] leading-tight text-white md:text-[40px]" style={{ fontWeight: 800 }}>
            {title}
          </h2>
          {text && <p className="mx-auto mt-4 max-w-[540px] text-[16px] leading-relaxed text-slate-300">{text}</p>}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={waLink(`Hola MaatWork, ${ctaMsg}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-violet inline-flex h-12 items-center justify-center rounded-full px-7 text-[15px] font-semibold text-white hover-scale"
            >
              Contanos tu proyecto
            </a>
          </div>
          <p className="mt-6 font-mono text-[10.5px] uppercase tracking-[0.12em] text-slate-500">
            Desde USD 100/mes · te lo mostramos antes de firmar · soporte local
          </p>
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
