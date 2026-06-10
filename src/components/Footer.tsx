"use client";

const footerLinks = [
  { href: "#funcionalidades", label: "Producto" },
  { href: "#precios", label: "Precios" },
  { href: "#faq", label: "FAQ" },
  { href: "https://wa.me/5491100000000?text=Hola%20MaatWork%20%E2%9C%8B", label: "WhatsApp", external: true },
];

export function Footer() {
  return (
    <footer className="section-base border-t border-white/[0.06]">
      <div className="container-maat py-10 md:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-display text-xl font-extrabold tracking-h3 text-white">
              Maat<span className="text-purple-400">Work</span>
            </div>
            <p className="mt-2 max-w-[420px] text-sm leading-[1.6] text-purple-400/85">
              Automatización comercial para negocios con turnos en Argentina.
            </p>
          </div>

          <form
            className="flex w-full max-w-[420px] flex-col gap-2 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="sr-only" htmlFor="footer-email">Email</label>
            <input
              id="footer-email"
              type="email"
              required
              placeholder="tu@email.com"
              className="h-11 flex-1 rounded-full border border-white/10 bg-white/[0.04] px-4 text-sm text-white placeholder:text-purple-400/50 transition-colors focus:border-purple-600/50 focus:outline-none"
            />
            <button
              type="submit"
              className="h-11 rounded-full bg-purple-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-purple-550"
            >
              Recibir tips
            </button>
          </form>
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
