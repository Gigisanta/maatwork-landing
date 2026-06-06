// Logo "M" — squircle dark purple con M gradient blanco→lavanda
// Marca: la "M" es el único elemento con glow (regla de diseño)
type LogoProps = {
  size?: number;
  showText?: boolean;
  className?: string;
};

export function Logo({ size = 36, showText = true, className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logo-glow"
        aria-label="MaatWork"
      >
        {/* Squircle background */}
        <defs>
          <linearGradient id="bg-grad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#0f0520" />
            <stop offset="1" stopColor="#2d1065" />
          </linearGradient>
          <linearGradient id="m-grad" x1="12" y1="12" x2="36" y2="36" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="1" stopColor="#d4b8ff" />
          </linearGradient>
          <radialGradient id="dot-grad" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#a855f7" />
            <stop offset="1" stopColor="#7c3aed" />
          </radialGradient>
        </defs>
        <rect width="48" height="48" rx="12" fill="url(#bg-grad)" />
        {/* M shape */}
        <path
          d="M12 14 L18 14 L24 26 L30 14 L36 14 L36 34 L31 34 L31 22 L25.5 32 L22.5 32 L17 22 L17 34 L12 34 Z"
          fill="url(#m-grad)"
        />
        {/* Accent dot */}
        <circle cx="36" cy="34" r="3" fill="url(#dot-grad)" />
      </svg>
      {showText && (
        <span
          className="font-display text-[20px] font-bold tracking-[-0.02em] text-white"
          style={{ fontWeight: 800 }}
        >
          MaatWork
        </span>
      )}
    </div>
  );
}
