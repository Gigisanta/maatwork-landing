/**
 * Services — lo que hace MaatWork, en dos tipos claros: sistemas a medida y
 * páginas web. Todo se cotiza a medida (sin precios de lista). Cada card lleva
 * su propio CTA de WhatsApp con contexto pre-cargado. Sin links a páginas
 * separadas: la home es un único scroll. Server component.
 */
import type { ReactNode } from "react";
import { waLink } from "@/lib/whatsapp";
import { BorderBeam } from "@/components/BorderBeam";

type Service = {
  idx: string;
  title: string;
  desc: string;
  includes: string[];
  cta: string; // WhatsApp prefill context
  highlight?: boolean; // "Más elegido" — opción por defecto
  icon: ReactNode;
};

const SERVICES: Service[] = [
  {
    idx: "01",
    title: "Sistemas a medida",
    desc: "CRMs, paneles y sistemas internos hechos para tu operación real. Con automatización, IA y facturación integradas cuando hacen falta.",
    includes: [
      "Modelado sobre los flujos reales de tu equipo",
      "Automatización, WhatsApp e IA integrados",
      "Facturación ARCA/AFIP y cobros",
      "Demo cada dos semanas hasta producción",
    ],
    cta: "quiero un sistema a medida",
    highlight: true,
    icon: <IconCode />,
  },
  {
    idx: "02",
    title: "Páginas web",
    desc: "Sitios y landings rápidos, claros y listos para convertir visitas en conversaciones por WhatsApp.",
    includes: [
      "Diseño a medida, sin plantillas genéricas",
      "SEO técnico y velocidad de carga",
      "WhatsApp y formulario de contacto",
      "Hosting, dominio y puesta online",
    ],
    cta: "quiero una página web",
    icon: <IconGlobe />,
  },
];

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
            Dos formas de trabajar juntos.
          </h2>
          <p className="mt-4 max-w-[540px] text-[16px] leading-7 text-slate-300">
            Un sistema a medida o tu página web. Todo se cotiza según tu proyecto, con diagnóstico gratis y sin permanencia.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5">
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              className="beam-card press-sink group reveal flex flex-col p-6"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Luz que recorre el borde (BorderBeam, port MagicUI/cult-ui) */}
              <BorderBeam size={110} duration={7} delay={i * 1.5} />
              <div className="relative z-10 flex flex-1 flex-col">
                <div className="flex items-center justify-between">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-lg border transition-transform duration-200 group-hover:scale-105"
                    style={{ borderColor: "rgba(124,92,255,0.28)", background: "rgba(124,92,255,0.10)", color: "#7C5CFF" }}
                  >
                    {s.icon}
                  </span>
                  {s.highlight ? (
                    <span
                      className="rounded-full px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.1em]"
                      style={{ border: "1px solid rgba(124,92,255,0.30)", background: "rgba(124,92,255,0.10)", color: "#6D4AE0" }}
                    >
                      Más elegido
                    </span>
                  ) : (
                    <span className="font-mono text-[11px] uppercase tracking-[0.04em] text-slate-400">Servicio {s.idx}</span>
                  )}
                </div>
                <h3 className="mt-5 font-display text-[19px] font-bold tracking-[-0.01em] text-slate-900 transition-colors duration-200 group-hover:text-[#7C5CFF]">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600">
                  {s.desc}
                </p>
                {/* Checkmark list */}
                <ul className="mt-4 space-y-2">
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[13px] leading-normal text-slate-600">
                      <span className="mt-[2px] flex-shrink-0 text-[#7C5CFF]">
                        <CheckIcon />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                {/* A cotizar tag */}
                <div className="mt-4 inline-flex self-start rounded-full border border-[rgba(15,15,35,0.10)] bg-[rgba(15,15,35,0.02)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-slate-500">
                  A cotizar
                </div>
                <div className="mt-auto flex items-center justify-end border-t border-[rgba(15,15,35,0.08)] pt-4">
                  <a
                    href={waLink(`Hola MaatWork, ${s.cta}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.08em] transition-colors hover:opacity-80"
                    style={{ color: "#7C5CFF" }}
                  >
                    Consultar
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
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
