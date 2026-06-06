"use client";

/**
 * Footer — V5: 4 cols + newsletter input + socials.
 * "use client" para que el form de newsletter funcione como client component.
 */
const COLS = [
  {
    title: "Producto",
    links: [
      { href: "#funcionalidades", label: "Funcionalidades" },
      { href: "#precios", label: "Precios" },
      { href: "#faq", label: "FAQ" },
    ],
  },
  {
    title: "Rubros",
    links: [
      { href: "#", label: "Gimnasios" },
      { href: "#", label: "Salones" },
      { href: "#", label: "Academias" },
      { href: "#", label: "Barberías" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { href: "#", label: "Sobre nosotros" },
      { href: "#", label: "Casos de éxito" },
      { href: "#", label: "Blog" },
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
      <div className="mx-auto max-w-[1240px] px-6 md:px-8 py-14">
        <div className="grid md:grid-cols-[1.4fr_repeat(4,1fr)] gap-10 md:gap-8">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="font-display text-white text-[20px] font-extrabold tracking-[-0.02em]">
                Maat<span className="text-[#a78bfa]">Work</span>
              </span>
            </div>
            <p className="mt-3 text-[14px] text-[#a78bfa]/85 max-w-[280px] leading-[1.55]">
              Automatización comercial para gyms, salones y academias en
              Argentina.
            </p>
            <form
              className="mt-5 max-w-[300px]"
              onSubmit={(e) => e.preventDefault()}
            >
              <label className="text-[11.5px] uppercase tracking-[0.18em] text-[#a78bfa] block mb-2">
                Tips para tu local
              </label>
              <div className="flex gap-1.5">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 h-10 px-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[13px] text-white placeholder:text-[#a78bfa]/60 focus:border-[#7c3aed]/50 focus:outline-none transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="h-10 px-4 rounded-lg bg-[#7c3aed] text-white text-[13px] font-semibold hover:bg-[#8b44f4] transition-colors duration-200"
                >
                  →
                </button>
              </div>
            </form>
          </div>
          {COLS.map((c) => (
            <div key={c.title}>
              <h4 className="text-[12.5px] uppercase tracking-[0.18em] text-white/60 font-semibold">
                {c.title}
              </h4>
              <ul className="mt-4 space-y-2.5 text-[14px] text-[#d4b8ff]">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="hover:text-white transition-colors duration-200 inline-block"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[12.5px] text-[#a78bfa]/75">
            © {new Date().getFullYear()} MaatWork. Hecho en Argentina.
          </p>
          <div className="flex items-center gap-2">
            {[
              { label: "Instagram", path: "M12 2.2c3.2 0 3.6 0 4.8.1 1.2 0 1.8.3 2.2.5.6.2 1 .5 1.4 1 .5.5.8.9 1 1.4.2.4.5 1 .5 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c0 1.2-.3 1.8-.5 2.2-.2.6-.5 1-1 1.4-.5.5-.9.8-1.4 1-.4.2-1 .5-2.2.5-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2 0-1.8-.3-2.2-.5-.6-.2-1-.5-1.4-1-.5-.5-.8-.9-1-1.4-.2-.4-.5-1-.5-2.2-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8c0-1.2.3-1.8.5-2.2.2-.6.5-1 1-1.4.5-.5.9-.8 1.4-1 .4-.2 1-.5 2.2-.5 1.2-.1 1.6-.1 4.8-.1zm0 2.2c-3.1 0-3.5 0-4.7.1-1 0-1.5.2-1.9.4-.5.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.2.4-.3.9-.4 1.9-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c0 1 .2 1.5.4 1.9.2.5.4.8.7 1.1.3.3.6.5 1.1.7.4.2.9.3 1.9.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1 0 1.5-.2 1.9-.4.5-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.2-.4.3-.9.4-1.9.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c0-1-.2-1.5-.4-1.9-.2-.5-.4-.8-.7-1.1-.3-.3-.6-.5-1.1-.7-.4-.2-.9-.3-1.9-.4-1.2-.1-1.6-.1-4.7-.1zM12 7.4a4.6 4.6 0 1 1 0 9.2 4.6 4.6 0 0 1 0-9.2zm0 7.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5.8-7.8a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z" },
              { label: "LinkedIn", path: "M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3v9zM6.5 8.25A1.75 1.75 0 1 1 8.3 6.5a1.78 1.78 0 0 1-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19a.66.66 0 0 0 0 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66l.04 5.44z" },
              { label: "WhatsApp", path: "M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[#a78bfa] hover:text-white hover:border-[#7c3aed]/50 hover:bg-white/[0.06] transition-all duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
