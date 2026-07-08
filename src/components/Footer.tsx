import { waLink } from "@/lib/whatsapp";
import { Logo } from "./Logo";
import { KhekerFrieze } from "./Ornaments";

const WHATSAPP = waLink();

const COLUMNS: { title: string; links: { href: string; label: string; external?: boolean }[] }[] = [
  {
    title: "Servicios",
    links: [
      { href: "/#servicios", label: "Servicios" },
      { href: "/precios", label: "Precios" },
      { href: "/casos", label: "Casos" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "https://www.linkedin.com/in/giolivo-garcia-451954322/", label: "LinkedIn", external: true },
    ],
  },
  {
    title: "Contacto",
    links: [
      { href: "/#contacto", label: "Contacto" },
      { href: "tel:+5492994569840", label: "+54 9 299 456-9840" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="section-atmo section-base border-t border-white/[0.06]">
      <div className="atmo" aria-hidden>
        <div className="atmo-grid" />
        <div className="atmo-vignette" />
        <div className="atmo-grain" />
      </div>

      <div className="container-maat relative z-10 pt-14 pb-8 md:pt-20 md:pb-10">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-[360px]">
            <Logo size={30} showText={false} />
            <h2 className="mt-3 font-display text-3xl font-black tracking-display">
              <span className="brand-maat">MAAT</span>
              <span className="brand-work">Work</span>
            </h2>
            <p className="mt-3 font-mono text-[13px] uppercase tracking-[0.08em] text-[var(--text-muted)]">
              Software real, cero humo
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-whatsapp hover-lift-glow press-sink mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold text-white"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
              </svg>
              Escribinos por WhatsApp
            </a>
            <p className="mt-2 text-sm text-[var(--text-muted)]">Te respondemos en el día.</p>
          </div>

          <nav className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:gap-12" aria-label="Links de footer">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">
                  {col.title}
                </span>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        target={l.external ? "_blank" : undefined}
                        rel={l.external ? "noopener noreferrer" : undefined}
                        className="hover-lift-glow inline-block text-sm text-slate-400 transition-colors hover:text-white"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Kheker frieze — temple-cresting band closing the page like a colophon */}
        <KhekerFrieze count={9} o={0.08} className="mt-10" />

        <div className="mt-8 h-px bg-[var(--gold-500)]/20" aria-hidden />

        <div className="mt-6 flex flex-col gap-2 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} MaatWork · Hecho en Argentina</p>
          <p>
            Por{" "}
            <a
              href="https://www.linkedin.com/in/giolivo-garcia-451954322/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 underline-offset-2 transition-colors hover:text-white hover:underline"
            >
              Giolivo Santarelli
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
