"use client";

/**
 * Footer — 4 columnas + newsletter + bottom strip.
 */
const cols = [
  {
    title: "Producto",
    links: [
      { href: "#funcionalidades", label: "Funcionalidades" },
      { href: "#precios", label: "Precios" },
      { href: "#faq", label: "FAQ" },
      { href: "#top", label: "Empezar gratis" },
    ],
  },
  {
    title: "Rubros",
    links: [
      { href: "#", label: "Gimnasios" },
      { href: "#", label: "CrossFit" },
      { href: "#", label: "Salones" },
      { href: "#", label: "Academias" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { href: "#", label: "Sobre nosotros" },
      { href: "#", label: "Contacto" },
      { href: "#", label: "Casos de éxito" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "#", label: "Términos" },
      { href: "#", label: "Privacidad" },
      { href: "#", label: "Ley 25.326" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="section-base border-t border-white/[0.06]">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8 py-16">
        <div className="grid md:grid-cols-[1.5fr_repeat(4,1fr)] gap-10 md:gap-8">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="font-display text-white text-[22px] font-extrabold tracking-[-0.02em]">
                Maat<span className="text-purple-400">Work</span>
              </span>
            </div>
            <p className="mt-3 text-[14px] text-purple-400/85 max-w-[300px] leading-[1.55]">
              Automatización comercial para gyms, salones y academias en Argentina.
            </p>

            {/* Newsletter */}
            <form className="mt-6 max-w-[300px]" onSubmit={(e) => e.preventDefault()}>
              <label className="text-[12px] text-purple-400/80 uppercase tracking-[0.18em] font-semibold">
                Tips para tu local
              </label>
              <div className="mt-2 flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="tu@email.com"
                  className="flex-1 h-10 px-3 rounded-md bg-white/[0.04] border border-white/10 text-[13px] text-white placeholder:text-purple-400/50 focus:outline-none focus:border-purple-600/50 transition-colors"
                />
                <button
                  type="submit"
                  className="h-10 px-4 rounded-md bg-purple-600 hover:bg-purple-550 text-white font-semibold text-[13px] transition-colors"
                >
                  Unirme
                </button>
              </div>
              <p className="mt-2 text-[10.5px] text-purple-400/65">
                1 email semanal. Sin spam. Cancelás cuando quieras.
              </p>
            </form>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="eyebrow !text-white/60">
                {c.title}
              </h4>
              <ul className="mt-4 space-y-2.5 text-[14px] text-purple-200">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="hover:text-white transition-colors inline-block relative group"
                    >
                      {l.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-purple-600 transition-all group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[12.5px] text-purple-400/75">
            © {new Date().getFullYear()} MaatWork. Hecho en Argentina.
          </p>
          <div className="flex items-center gap-4 text-[12.5px] text-purple-400/75">
            <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
              Instagram
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a
              href="https://wa.me/5491100000000"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="WhatsApp"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
