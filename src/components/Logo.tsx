// MaatWork logo — official Design System mark (pyramid · eye of providence ·
// sun of Ra · violet capstone, pharaonic gold + electric violet) plus the
// gold "Maat" / violet "Work" wordmark. Inline SVG — zero HTTP requests.
import { MOTIFS } from "@/lib/motifs";

type LogoProps = {
  size?: number;
  showText?: boolean;
  className?: string;
};

export function Logo({ size = 36, showText = true, className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span
        aria-hidden={showText || undefined}
        className="logo-glow inline-flex flex-none"
        style={{ width: size, height: size }}
        dangerouslySetInnerHTML={{ __html: MOTIFS["logo-mark"] || "" }}
      />
      {showText && (
        <span className="font-display text-[20px] font-bold tracking-h3">
          <span className="brand-maat">Maat</span>
          <span className="brand-work">Work</span>
        </span>
      )}
    </div>
  );
}
