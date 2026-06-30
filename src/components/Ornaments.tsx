/**
 * Ornaments — shared Maat ornamental primitives. Inline SVGs (zero HTTP requests),
 * engraved-gold, aria-hidden, design-system aligned. Reused across hero, pricing,
 * cards and the final CTA so the Egyptian symbolism reads as one curated system.
 *
 * ALL SVGs are inlined from src/lib/motifs.ts — no external img requests.
 * Each is wrapped in a <span> with aria-hidden and the SVG rendered via
 * dangerouslySetInnerHTML (safe: our own SVGs).
 *
 *  - GlyphRail   : ceremonial hairline divider flanked by a row of tiny glyphs.
 *  - CornerMarks : four engraved gold L-brackets framing a premium surface.
 *  - CardGlyph   : a single motif watermark in a card corner (per-category seal).
 *  - KhekerFrieze: temple-cresting band of tied-reed units between sections.
 *
 * All motion (motif float/breathe) is paused by the global reduced-motion block.
 */
import type { CSSProperties } from "react";
import { MOTIFS } from "@/lib/motifs";

/** Render an inline SVG motif by name. Returns null if not found. */
function InlineMotif({ name, className, style }: { name: string; className?: string; style?: CSSProperties }) {
  const svg = MOTIFS[name];
  if (!svg) return null;
  return (
    <span
      aria-hidden
      className={className}
      style={style}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

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
          <span
            key={g}
            className="motif motif-float inline-flex h-4 w-4"
            style={{ "--motif-o": o, animationDelay: `${-i * 1.7}s` } as CSSProperties}
            dangerouslySetInnerHTML={{ __html: MOTIFS[g] || "" }}
          />
        ))}
      </span>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
    </div>
  );
}

/** Kheker frieze — an authentic temple-cresting band of tied-reed units, used as
 *  a ceremonial section divider. Inline SVGs, no HTTP requests. */
export function KhekerFrieze({
  count = 11,
  className = "",
  o = 0.09,
}: {
  count?: number;
  className?: string;
  o?: number;
}) {
  const khekerSvg = MOTIFS["kheker-unit"] || "";
  return (
    <div aria-hidden className={`flex items-end justify-center gap-[2px] overflow-hidden ${className}`}>
      <span className="h-px flex-1 self-center bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="pointer-events-none inline-flex h-[34px] w-[12px] flex-none"
          style={{ opacity: o }}
          dangerouslySetInnerHTML={{ __html: khekerSvg }}
        />
      ))}
      <span className="h-px flex-1 self-center bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />
    </div>
  );
}

/** Engraved gold L-brackets framing a premium surface. */
export function CornerMarks({ inset = 8 }: { inset?: number }) {
  return (
    <span aria-hidden className="corner-marks" style={{ "--inset": `${inset}px` } as CSSProperties} />
  );
}

export const MOTIFS_MAP = MOTIFS;

/** Card glyph — per-category Maat seal engraved in a card corner, inline SVG. */
export function CardGlyph({
  motif = "feather-of-maat",
  className = "",
  o = 0.07,
}: {
  motif?: string;
  className?: string;
  o?: number;
}) {
  const svg = MOTIFS[motif];
  if (!svg) return null;
  return (
    <span
      aria-hidden
      className={`card-glyph pointer-events-none absolute right-3 top-3 inline-flex h-16 w-16 ${className}`}
      style={{ "--glyph-o": o } as CSSProperties}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
