"use client";

import { useEffect, useState } from "react";

/**
 * Navbar — V5: glass effect al scroll, mobile menu slide.
 */
const LINKS = [
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#precios", label: "Precios" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out-quart",
        scrolled
          ? "glass-subtle border-b border-white/[0.06] backdrop-blur"
          : "bg-transparent",
      ].join(" ")}
    >
      <nav className="mx-auto max-w-[1240px] px-6 md:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5" aria-label="MaatWork inicio">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#2d1065] flex items-center justify-center">
            <span className="font-display text-white text-[16px] font-extrabold">M</span>
          </div>
          <span className="font-display text-white text-[19px] font-extrabold tracking-[-0.02em]">
            Maat<span className="text-[#a78bfa]">Work</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-[14px] text-[#d4b8ff]">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-white transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/5491100000000?text=Hola%20MaatWork%20%E2%9C%8B"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-whatsapp hidden md:inline-flex items-center gap-2 text-white font-semibold text-[14px] h-10 px-4 rounded-full hover-scale"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 1.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
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
            {LINKS.map((l) => (
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
