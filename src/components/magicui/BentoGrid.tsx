/**
 * BentoGrid — port del componente de MagicUI (magicui.design/docs/components/
 * bento-grid) con su interacción de firma: capa decorativa de fondo por celda,
 * contenido que se eleva en hover y CTA que aparece deslizándose. Adaptado al
 * DS monocromo (ops-card, hairlines, acento violeta). Cero dependencias.
 */
import type { ComponentPropsWithoutRef, ReactNode } from "react";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  description: string;
  className?: string;
  icon?: ReactNode;
  /** Capa decorativa absoluta detrás del contenido (mini-visual de la celda) */
  background?: ReactNode;
  href?: string;
  cta?: string;
}

export function BentoGrid({ children, className = "", ...props }: BentoGridProps) {
  return (
    <div className={`grid w-full grid-cols-1 gap-4 md:grid-cols-3 md:gap-5 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function BentoCard({
  name,
  description,
  className = "",
  icon,
  background,
  href,
  cta,
  ...props
}: BentoCardProps) {
  const hasCta = Boolean(href && cta);
  return (
    <article
      className={`ops-card group relative flex min-h-[210px] flex-col justify-end overflow-hidden ${className}`}
      {...props}
    >
      {/* Capa decorativa — el "alma" visual de la celda */}
      {background && (
        <div aria-hidden className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:scale-[1.04] group-hover:opacity-90">
          {background}
        </div>
      )}

      {/* Contenido — se eleva en hover para dejar entrar el CTA */}
      <div className={`pointer-events-none relative z-10 flex flex-col gap-1 p-6 transition-all duration-300 ${hasCta ? "lg:group-hover:-translate-y-8" : ""}`}>
        {icon && (
          <span className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.12] bg-white/[0.05] text-[var(--text-secondary)] transition-all duration-300 group-hover:border-[var(--violet-ring)] group-hover:text-[var(--violet-300)]">
            {icon}
          </span>
        )}
        <h3 className="font-display text-[17px] font-bold tracking-[-0.01em] text-text-primary">
          {name}
        </h3>
        <p className="max-w-lg text-[13.5px] leading-relaxed text-[var(--text-tertiary)]">
          {description}
        </p>
        {/* CTA visible en mobile (sin hover) */}
        {hasCta && (
          <a
            href={href}
            className="pointer-events-auto mt-2 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--violet-300)] lg:hidden"
          >
            {cta} <Arrow />
          </a>
        )}
      </div>

      {/* CTA desktop — entra deslizándose desde abajo en hover */}
      {hasCta && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden translate-y-8 flex-row items-center p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:flex">
          <a
            href={href}
            className="pointer-events-auto inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--violet-300)] transition-colors hover:text-[var(--violet-200)]"
          >
            {cta} <Arrow />
          </a>
        </div>
      )}

      {/* Tinte de hover sobre toda la celda */}
      <div aria-hidden className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-white/[0.02]" />
    </article>
  );
}

function Arrow() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
