// MaatWork logo — official Design System mark (pyramid · eye of providence ·
// sun of Ra · violet capstone, pharaonic gold + electric violet) plus the
// gold "Maat" / violet "Work" wordmark. Asset: public/logo-mark.svg.
type LogoProps = {
  size?: number;
  showText?: boolean;
  className?: string;
};

export function Logo({ size = 36, showText = true, className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo-mark.svg"
        width={size}
        height={size}
        alt={showText ? "" : "MaatWork"}
        aria-hidden={showText || undefined}
        className="logo-glow"
        draggable={false}
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
