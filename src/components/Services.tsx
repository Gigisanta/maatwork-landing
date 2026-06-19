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
  cta: string; // WhatsApp prefill context
  accent: string;
  motif: string;
  icon: ReactNode;
};

const SERVICES: Service[] = [
  {
    idx: "01",
    title: "Producto base operativo",
    desc: "Un sistema listo para operar desde el día uno: agenda, clientes, cobros y tablero de control. Tu punto de entrada, desde USD 100/mes.",
    cta: "quiero arrancar con el producto base",
    accent: "accent-cyan",
    motif: "obelisk",
    icon: <IconLayers />,
  },
  {
    idx: "02",
    title: "Desarrollo a medida",
    desc: "Apps y sistemas construidos para tu operación real, no un molde genérico. Lo mismo que ya corre en NMS, Infrannova y Varigas.",
    cta: "quiero un desarrollo a medida",
    accent: "accent-violet",
    motif: "djed",
    icon: <IconCode />,
  },
  {
    idx: "03",
    title: "Automatizaciones e IA",
    desc: "WhatsApp que responde y avisa, cobros que se siguen solos, reportes que se generan sin que toques nada. La lógica de tu negocio, adentro del sistema.",
    cta: "quiero automatizar mi negocio",
    accent: "accent-gold",
    motif: "scarab",
    icon: <IconBolt />,
  },
  {
    idx: "04",
    title: "Integraciones y facturación",
    desc: "Conectamos tus sistemas y facturás con ARCA/AFIP. Mercado Pago, Excel y las planillas que ya usás, en un solo flujo.",
    cta: "quiero integrar y facturar con ARCA",
    accent: "accent-emerald",
    motif: "scales-of-maat",
    icon: <IconPlug />,
  },
];

const DETAIL: Record<string, string> = {
  "Producto base operativo": "/servicios/producto-base",
  "Desarrollo a medida": "/servicios/desarrollo-a-medida",
  "Automatizaciones e IA": "/servicios/automatizaciones",
  "Integraciones y facturación": "/servicios/integraciones",
};

export function Services() {
  return (
    <section id="servicios" className="section-elev1 section-chroma section-pad border-y border-white/[0.06]">
      <div className="container-maat">
        <div className="max-w-[640px] reveal">
          <span className="eyebrow">Servicios</span>
          <h2 className="mt-3 font-display text-3xl text-white md:text-4xl" style={{ fontWeight: 800, letterSpacing: "var(--tracking-h2)" }}>
            Empezás con el producto base. Escalás con lo que necesite tu operación.
          </h2>
          <p className="mt-4 max-w-[540px] text-[16px] leading-7 text-slate-300">
            El producto base te ordena en 5 a 10 días. Si tu operación necesita más, lo construimos
            encima: desarrollo a medida, automatizaciones e integraciones. Un solo estudio, de punta a punta.
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
              <p className="mt-1.5 flex-1 text-[14px] leading-relaxed text-slate-400">
                {s.desc}
              </p>
              <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/[0.06] pt-4">
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
                  Cotizar
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

/* ---- Lucide-style icons (stroke 2) ----------------------------- */
function IconLayers() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}
function IconCode() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
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
function IconPlug() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
    </svg>
  );
}
