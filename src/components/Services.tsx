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
    desc: "Tu Excel se quedó corto. Te armamos el sistema que tu operación necesita — paneles internos, CRMs adaptados a cómo trabajás y plataformas SaaS.",
    includes: [
      "Reemplazá planillas y procesos manuales",
      "CRM o panel diseñado para tu equipo",
      "Plataformas para tus clientes (SaaS)",
      "Sprints con demo cada dos semanas",
    ],
    delivery: "4 a 8 semanas · Sistema en producción",
    cta: "quiero un sistema a medida",
    accent: "accent-violet",
    motif: "djed",
    icon: <IconCode />,
  },
  {
    idx: "02",
    title: "Webs & Landings",
    desc: "Sitios corporativos y landings en React/Next.js que cargan rápido y convierten. Lighthouse 90+, SEO técnico y diseño orientado a conversión.",
    includes: [
      "React / Next.js + headless CMS",
      "SEO técnico + Core Web Vitals",
      "GA4, Pixel y eventos integrados",
      "Entrega en 2 a 5 semanas",
    ],
    delivery: "2 a 5 semanas · Alcance fijo",
    cta: "quiero una web o landing",
    accent: "accent-cyan",
    motif: "obelisk",
    icon: <IconGlobe />,
  },
  {
    idx: "03",
    title: "Automatización + IA",
    desc: "Automatizá lo que hacés a mano. Bots de WhatsApp con IA, asistentes RAG sobre tus documentos y flujos que trabajan 24/7 sin que toques nada.",
    includes: [
      "Bots WhatsApp + OpenAI / Claude",
      "Asistentes RAG sobre PDFs / Notion",
      "Automatizaciones n8n / Make / Zapier",
      "ROI medible desde el día 30",
    ],
    delivery: "2 a 4 semanas · ROI en 30 días",
    cta: "quiero automatizar con IA",
    accent: "accent-gold",
    motif: "scarab",
    icon: <IconBolt />,
  },
  {
    idx: "04",
    title: "Mantenimiento & Soporte",
    desc: "Tu producto no se cuida solo. Plan mensual con horas de soporte, mejoras programadas, monitoreo y asesoramiento estratégico para que nunca se caiga ni quede viejo.",
    includes: [
      "Soporte técnico y resolución de incidencias",
      "Mejoras y nuevas funciones programadas",
      "Monitoreo, backups y actualizaciones",
      "Asesoramiento estratégico mensual",
    ],
    delivery: "Plan mensual · Soporte continuo",
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
            Soluciones claras, resultados medibles
          </h2>
          <p className="mt-4 max-w-[540px] text-[16px] leading-7 text-slate-300">
            Sin paquetes genéricos. Elegí el nivel de acompañamiento que tu negocio necesita hoy — desde un MVP
            hasta un sistema completo en producción.
          </p>
          <GlyphRail className="mt-8 max-w-[420px]" glyphs={["obelisk", "djed", "scarab", "scales-of-maat"]} />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5">
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              className={`ops-card card-accent ${s.accent} reveal flex flex-col p-6`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <CardGlyph motif={s.motif} />
              <div className="flex items-center justify-between">
                <span
                  className="icon-halo flex h-10 w-10 items-center justify-center rounded-lg border"
                  style={{ borderColor: "var(--accent-ring)", background: "var(--accent-soft)", color: "var(--accent)" }}
                >
                  {s.icon}
                </span>
                <span className="mono-tag text-slate-600">Servicio {s.idx}</span>
              </div>
              <h3 className="mt-5 font-display text-[19px] font-bold tracking-[-0.01em] text-white">
                {s.title}
              </h3>
              <p className="mt-1.5 text-[14px] leading-relaxed text-slate-400">
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
