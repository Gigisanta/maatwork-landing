/**
 * Footer — simple, 3 columnas.
 */
export function Footer() {
  const cols = [
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
        { href: "#", label: "Salones de belleza" },
        { href: "#", label: "Academias" },
        { href: "#", label: "Barberías" },
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

  return (
    <footer className="section-base border-t border-white/[0.06]">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8 py-14">
        <div className="grid md:grid-cols-[1.4fr_repeat(3,1fr)] gap-10 md:gap-8">
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
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-[12.5px] uppercase tracking-[0.18em] text-white/60 font-semibold">
                {c.title}
              </h4>
              <ul className="mt-4 space-y-2.5 text-[14px] text-[#d4b8ff]">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="hover:text-white transition-colors"
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
          <p className="text-[12.5px] text-[#a78bfa]/75">
            v1.0 · Hecho con{" "}
            <span className="text-[#a855f7]">♥</span> en Buenos Aires
          </p>
        </div>
      </div>
    </footer>
  );
}
