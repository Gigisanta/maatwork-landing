import type { ReactNode } from "react";

/**
 * BentoCard — card individual del bento grid de Features.
 * Border con hover state + gradient sweep + reveal-on-hover content slot.
 *
 * Layout interno:
 *   [icon]                  [badge opcional]
 *   [title]
 *   [description]
 *   [hover content — reveal on hover]
 */

type BentoCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  hoverContent: ReactNode;
  col?: string;
  row?: string;
  gradientIndex?: number;
  badge?: string;
  /** Cuando true, agrega class de Pro al header */
  large?: boolean;
  /** Reveal delay (ms) — escalonado por parent */
  delayMs?: number;
};

export function BentoCard({
  icon,
  title,
  description,
  hoverContent,
  col = "md:col-span-1",
  row = "md:row-span-1",
  gradientIndex = 1,
  badge,
  large = false,
  delayMs = 0,
}: BentoCardProps) {
  return (
    <div
      className={`bento-card p-5 md:p-6 flex flex-col ${col} ${row} reveal`}
      style={{ transitionDelay: `${delayMs}ms` }}
      data-testid="bento-card"
    >
      {/* Header: icon + optional badge */}
      <div className="flex items-start justify-between gap-3">
        <div
          className={`w-10 h-10 rounded-lg avatar-grad-${gradientIndex} border border-white/10 flex items-center justify-center text-white flex-shrink-0`}
        >
          {icon}
        </div>
        {badge && (
          <span className="text-[9px] uppercase tracking-[0.18em] text-[#7c3aed] font-semibold">
            {badge}
          </span>
        )}
      </div>

      {/* Title + description (always visible) */}
      <h3
        className="font-display text-white mt-4 text-[16.5px] md:text-[18px] font-bold tracking-[-0.01em]"
      >
        {title}
      </h3>
      <p className="mt-1.5 text-[13.5px] text-[#d4b8ff]/85 leading-[1.5]">
        {description}
      </p>

      {/* Hover content — reveal on hover via .reveal-on-hover */}
      <div className="reveal-on-hover mt-auto pt-3">
        {hoverContent}
      </div>
    </div>
  );
}
