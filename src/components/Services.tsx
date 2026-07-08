/**
 * Services — what MaatWork actually sells, as a hireable menu. Four rails:
 * producto base, desarrollo a medida, automatización e IA, integraciones.
 * Reuses the ops-card / accent system from Features; each card carries its own
 * WhatsApp CTA so the lead arrives with context (rubro/servicio pre-cargado).
 * Server component.
 */
import type { ReactNode } from "react";
import Link from "next/link";
import { waLink } from "@/lib/whatsapp";
import { CardGlyph, GlyphRail } from "./Ornaments";

type Service = {
  idx: string;
  title: string;
  desc: string;
  includes: string[];
  delivery: string;
  cta: string; // WhatsApp prefill context
  accent: string;
  motif: string;
  icon: ReactNode;
};

const SERVICES: Service[] = [
  {
    idx: "01",
    title: "Apps de gestión a medida",
    desc: "CRMs, paneles y sistemas internos para operar sin planillas eternas.",
    includes: [
      "Flujos reales de tu equipo",
      "Demo cada dos semanas",
    ],
    delivery: "4 a 8 semanas",
    cta: "quiero un sistema a medida",
    accent: "accent-violet",
    motif: "djed",
    icon: <IconCode />,
  },
  {
    idx: "02",
    title: "Webs & Landings",
    desc: "Páginas claras, rápidas y listas para convertir tráfico en conversaciones.",
    includes: [
      "Copy corto + diseño premium",
      "SEO técnico + medición",
    ],
    delivery: "2 a 5 semanas",
    cta: "quiero una web o landing",
    accent: "accent-cyan",
    motif: "obelisk",
    icon: <IconGlobe />,
  },
  {
    idx: "03",
    title: "Automatización + IA",
    desc: "Bots, recordatorios y reportes que sacan trabajo repetido del medio.",
    includes: [
      "WhatsApp + IA + reportes",
      "Automatizaciones n8n / Make",
    ],
    delivery: "2 a 4 semanas",
    cta: "quiero automatizar con IA",
    accent: "accent-gold",
    motif: "scarab",
    icon: <IconBolt />,
  },
  {
    idx: "04",
    title: "Mantenimiento & Soporte",
    desc: "Mejoras, monitoreo y soporte para que el sistema siga andando.",
    includes: [
      "Incidencias y mejoras",
      "Backups y monitoreo",
    ],
    delivery: "Plan mensual",
    cta: "quiero soporte y mantenimiento",
    accent: "accent-emerald",
    motif: "scales-of-maat",
    icon: <IconShield />,
  },
];

const DETAIL: Record<string, string> = {
  "Apps de gestión a medida": "/servicios/desarrollo-a-medida",
  "Webs & Landings": "/servicios/web-landings",
  "Automatización + IA": "/servicios/automatizaciones",
  "Mantenimiento & Soporte": "/servicios/mantenimiento",
};

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function Services() {
  return (
    <section id="servicios" className="section-elev1 section-chroma section-pad border-y border-white/[0.06]">
      <div className="container-maat">
        <div className="max-w-[640px] reveal">
          <span className="eyebrow">Servicios</span>
          <h2 className="mt-3 font-display text-3xl text-white md:text-4xl" style={{ fontWeight: 800, letterSpacing: "var(--tracking-h2)" }}>
            Elegí el primer movimiento.
          </h2>
          <p className="mt-4 max-w-[540px] text-[16px] leading-7 text-slate-300">
            Landing, automatización o sistema interno. Una puerta de entrada, no una novela.
          </p>
          <GlyphRail className="mt-8 max-w-[420px]" glyphs={["obelisk", "djed", "scarab", "scales-of-maat"]} />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5">
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              className={`ops-card card-accent ${s.accent} hover-lift-glow press-sink group reveal flex flex-col p-6`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <CardGlyph motif={s.motif} />
              <div className="flex items-center justify-between">
                <span
                  className="icon-halo flex h-10 w-10 items-center justify-center rounded-lg border transition-transform duration-200 group-hover:scale-105"
                  style={{ borderColor: "var(--accent-ring)", background: "var(--accent-soft)", color: "var(--accent)" }}
                >
                  {s.icon}
                </span>
                <span className="mono-tag text-slate-600">Servicio {s.idx}</span>
              </div>
              <h3 className="mt-5 font-display text-[19px] font-bold tracking-[-0.01em] text-white transition-colors duration-200 group-hover:text-[var(--accent)]">
                {s.title}
              </h3>
              <p className="mt-1.5 text-[14px] leading-relaxed text-[var(--text-secondary)]">
                {s.desc}
              </p>
              {/* Checkmark list */}
              <ul className="mt-4 space-y-2">
                {s.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[13px] leading-normal text-slate-300">
                    <span className="mt-[2px] flex-shrink-0 text-emerald-400">
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              {/* Delivery tag */}
              <div className="mt-4 inline-flex self-start rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-slate-500">
                {s.delivery}
              </div>
              <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/[0.06] pt-4">
                <Link
                  href={DETAIL[s.title]}
                  className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-slate-400 transition-colors hover:text-white"
                >
                  Ver detalle
                </Link>
                <a
                  href={waLink(`Hola MaatWork, ${s.cta}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.08em] transition-colors"
                  style={{ color: "var(--accent)" }}
                >
                  Consultar
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link href="/servicios" className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-violet-300 transition-colors hover:text-violet-200">
            Ver todos los servicios →
          </Link>
          <Link href="/soluciones" className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-slate-400 transition-colors hover:text-white">
            Soluciones por industria →
          </Link>
        </div>
      </div>
    </section>
  );
}

// ---- Inline SVG icons -------------------------------------------------------

function IconCode() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function IconBolt() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
