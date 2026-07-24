// MaatWork logo — monograma MW (monocromo) + wordmark "MaatWork®" en un solo
// color. Inline SVG, cero requests. El color lo hereda del contenedor
// (text-*), así que el mismo mark sirve en cualquier superficie.
import { MOTIFS } from "@/lib/motifs";

type LogoProps = {
  size?: number;
  showText?: boolean;
  /** Ocultar el monograma MW y dejar solo el wordmark. */
  showMark?: boolean;
  className?: string;
};

export function Logo({ size = 36, showText = true, showMark = true, className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 text-text-primary ${className}`}>
      {showMark && (
        <span
          aria-hidden={showText || undefined}
          className="inline-flex flex-none"
          style={{ width: size, height: size }}
          dangerouslySetInnerHTML={{ __html: MOTIFS["logo-mark"] || "" }}
        />
      )}
      {showText && (
        <span className="font-display text-[20px] font-bold tracking-[-0.02em]">
          MaatWork
          <sup className="ml-0.5 align-super text-[9px] font-semibold text-text-tertiary">®</sup>
        </span>
      )}
    </div>
  );
}
