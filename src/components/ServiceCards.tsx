/**
 * ServiceCards — tarjetas ricas del índice /servicios (estilo "pricing card"):
 * eyebrow + ícono en badge violeta + título + intro + checklist "Incluye"
 * (primeros 4 ítems de `includes` del data) + footer con dato destacado y link.
 * Solo los 2 servicios que se venden: páginas web y sistemas a medida (destacado
 * con borde violeta + badge "Más solicitado"). Server component; la aparición al
 * scroll usa `.reveal` con delays escalonados.
 */
import { getService, type ServicePage } from "@/data/services";

// Los 2 servicios ofrecidos, en orden de display (sistemas a medida destacado).
const SHOWN_SLUGS = ["paginas-web", "desarrollo-a-medida"] as const;

// Metadata presentacional por slug (ícono, eyebrow, stat del footer, destacado).
// Los stats son honestos: salen del propio contenido de cada servicio.
const CARD_META: Record<
  string,
  {
    eyebrow: string;
    icon: React.ReactNode;
    statLabel: string;
    stat: string;
    statNote: string;
    linkLabel: string;
    featured?: boolean;
  }
> = {
  "paginas-web": {
    eyebrow: "Web & landings",
    icon: <IconMonitor />,
    statLabel: "Entrega",
    stat: "2–4 semanas",
    statNote: "una web típica · alcance fijo",
    linkLabel: "Ver páginas web",
  },
  "desarrollo-a-medida": {
    eyebrow: "Sistemas a medida",
    icon: <IconCode />,
    statLabel: "Entrega",
    stat: "Por etapas",
    statNote: "avance real antes de cada pago",
    linkLabel: "Ver sistemas a medida",
    featured: true,
  },
};

export function ServiceCards() {
  const services = SHOWN_SLUGS.map((slug) => getService(slug)).filter(
    (s): s is ServicePage => s !== undefined,
  );
  return (
    <section className="section-pad">
      <div className="container-maat grid gap-6 lg:grid-cols-2">
        {services.map((s, i) => (
          <ServiceCard key={s.slug} service={s} delay={i * 100} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ service: s, delay }: { service: ServicePage; delay: number }) {
  const meta = CARD_META[s.slug];
  const featured = meta?.featured ?? false;

  return (
    <article
      className={`reveal group relative flex flex-col rounded-2xl border bg-[#fff] p-8 transition-colors md:p-10 ${
        featured
          ? "border-violet-500 shadow-[0_18px_60px_-22px_rgba(124,92,255,0.35)]"
          : "border-slate-200 shadow-[0_14px_44px_-24px_rgba(15,15,35,0.18)] hover:border-violet-300"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Eyebrow + badge destacado */}
      <div className="flex items-start justify-between gap-3">
        <span className="text-[14px] font-semibold uppercase tracking-[0.06em] text-violet-600">
          {meta?.eyebrow ?? "Servicio"}
        </span>
        {featured && (
          <span className="rounded-full bg-violet-600 px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.05em] text-[#fff]">
            Más solicitado
          </span>
        )}
      </div>

      {/* Ícono */}
      <span className="mt-6 flex h-13 w-13 items-center justify-center rounded-xl bg-violet-600 p-3 text-[#fff] shadow-[0_10px_28px_-10px_rgba(124,92,255,0.55)]">
        {meta?.icon}
      </span>

      {/* Título + intro */}
      <h2 className="mt-6 font-display text-[26px] font-bold leading-snug tracking-[-0.015em] text-slate-900 md:text-[28px]">
        {s.name}
      </h2>
      <p className="mt-3 text-[16px] leading-relaxed text-slate-600">{s.intro}</p>

      {/* Incluye */}
      <div className="mt-7 border-t border-slate-200 pt-6">
        <span className="text-[14px] font-semibold uppercase tracking-[0.06em] text-slate-500">Incluye</span>
        <ul className="mt-4 space-y-3">
          {s.includes.slice(0, 4).map((it) => (
            <li key={it} className="flex items-start gap-3 text-[15.5px] leading-relaxed text-slate-700">
              <Check />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer: stat + link */}
      <div className="mt-auto flex items-end justify-between gap-4 border-t border-slate-200 pt-6">
        <div>
          <div className="text-[14px] text-slate-500">{meta?.statLabel}</div>
          <div className="mt-1 font-display text-[24px] font-extrabold tracking-[-0.02em] text-slate-900">{meta?.stat}</div>
          <div className="mt-0.5 text-[13.5px] text-slate-500">{meta?.statNote}</div>
        </div>
        <a
          href={`/servicios/${s.slug}`}
          className="inline-flex flex-shrink-0 items-center gap-2 text-[15px] font-semibold text-violet-600 underline decoration-violet-300 underline-offset-4 transition-colors hover:text-violet-500"
        >
          {meta?.linkLabel ?? "Ver más"}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </article>
  );
}

// ---- Check verde (mismo look que CheckList de subpage) --------------------

function Check() {
  return (
    <span className="mt-0.5 flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-full border border-success/30 bg-success/15">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--color-success)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
}

// ---- Íconos (stroke blanco, 22px) -----------------------------------------

function Svg({ children }: { children: React.ReactNode }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {children}
    </svg>
  );
}
function IconCode() {
  return <Svg><path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" /></Svg>;
}
function IconMonitor() {
  return <Svg><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></Svg>;
}
