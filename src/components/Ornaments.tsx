/**
 * Ornaments — shared Maat ornamental primitives. Engraved-gold, aria-hidden,
 * design-system aligned. Reused across hero, pricing, cards and the final CTA
 * so the Egyptian symbolism reads as one curated system, not one-off hacks.
 *
 *  - GlyphRail  : ceremonial hairline divider flanked by a row of tiny glyphs.
 *  - CornerMarks: four engraved gold L-brackets framing a premium surface.
 *  - CardGlyph  : a single motif watermark in a card corner (per-category seal).
 *
 * All motion (motif float/breathe) is paused by the global reduced-motion block.
 */
import type { CSSProperties } from "react";

/** Ceremonial divider: a centered gold hairline flanked by tiny engraved glyphs. */
export function GlyphRail({
  glyphs = ["ankh", "feather-of-maat", "eye-of-horus"],
  className = "",
  o = 0.16,
}: {
  glyphs?: string[];
  className?: string;
  o?: number;
}) {
  return (
    <div aria-hidden className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
      <span className="flex items-center gap-2.5">
        {glyphs.map((g, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={g}
            src={`/motifs/${g}.svg`}
            alt=""
            className="motif motif-float h-4 w-4"
            style={{ "--motif-o": o, animationDelay: `${-i * 1.7}s` } as CSSProperties}
          />
        ))}
      </span>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
    </div>
  );
}

/** Four engraved gold corner brackets framing the parent (must be relative). */
export function CornerMarks({ inset = 14, className = "" }: { inset?: number; className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 text-gold-400/30 ${className}`}>
      <Corner style={{ left: inset, top: inset }} />
      <Corner className="rotate-90" style={{ right: inset, top: inset }} />
      <Corner className="rotate-180" style={{ right: inset, bottom: inset }} />
      <Corner className="-rotate-90" style={{ left: inset, bottom: inset }} />
    </div>
  );
}
function Corner({ className = "", style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg
      className={`absolute ${className}`}
      style={style}
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M1 6 V1 H6" />
      <circle cx="1" cy="1" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Per-category motif watermark, engraved in a card corner. Sits behind content
 *  (z-index via .card-glyph) and brightens on .card-accent hover. */
export function CardGlyph({
  motif,
  o = 0.07,
  className = "absolute right-2 top-2 h-16 w-16",
}: {
  motif: string;
  o?: number;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/motifs/${motif}.svg`}
      alt=""
      aria-hidden
      className={`card-glyph pointer-events-none ${className}`}
      style={{ "--glyph-o": o } as CSSProperties}
    />
  );
}
