"use client";

import { useEffect, useState } from "react";

/**
 * Navbar — transparente sobre hero, glass al scrollear.
 * Mobile menu con slide-in.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#funcionalidades", label: "Funcionalidades" },
    { href: "#precios", label: "Precios" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "glass-subtle border-b border-white/[0.06]"
          : "bg-transparent",
      ].join(" ")}
    >
      <nav className="mx-auto max-w-[1320px] px-5 md:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center" aria-label="MaatWork inicio">
          <span className="font-display text-[20px] font-extrabold tracking-[-0.02em] text-white">
            Maat<span className="text-[#a78bfa]">Work</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-[14px] text-[#d4b8ff]">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-white transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#7c3aed] transition-all group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/5491100000000?text=Hola%20MaatWork%20%E2%9C%8B"
            className="cta-whatsapp hidden md:inline-flex items-center gap-2 text-white font-semibold text-[14px] h-10 px-4 rounded-full hover-scale"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 9.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            Probar gratis
          </a>
          <button
            type="button"
            className="md:hidden h-10 w-10 inline-flex items-center justify-center rounded-md text-white hover:bg-white/5"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/[0.06] glass-subtle">
          <ul className="px-6 py-4 flex flex-col gap-4 text-[15px] text-[#d4b8ff]">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/5491100000000"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-whatsapp inline-flex items-center gap-2 text-white font-semibold text-[14px] h-10 px-4 rounded-full"
              >
                Probar gratis
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
