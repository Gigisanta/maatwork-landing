import { waLink } from "@/lib/whatsapp";
import { Logo } from "./Logo";

const WHATSAPP = waLink();

const footerLinks = [
  { href: "#funcionalidades", label: "Producto" },
  { href: "#precios", label: "Precios" },
  { href: "#faq", label: "FAQ" },
  { href: WHATSAPP, label: "WhatsApp", external: true },
];

export function Footer() {
  return (
    <footer className="section-base border-t border-white/[0.06]">
      <div className="container-maat py-10 md:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <Logo size={26} />
            <p className="mt-3 max-w-[420px] text-sm leading-[1.6] text-purple-400/85">
              Automatización comercial para negocios con turnos en Argentina.
            </p>
          </div>

          <div className="flex w-full max-w-[420px] flex-col gap-2 sm:items-end">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-whatsapp inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold text-white hover-scale"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
              </svg>
              Escribinos por WhatsApp
            </a>
            <p className="text-sm text-purple-400/75">Te respondemos en el día.</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/[0.06] pt-6 text-sm text-purple-400/75 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} MaatWork · Hecho en Buenos Aires.</p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Links de footer">
            {footerLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
                className="transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
