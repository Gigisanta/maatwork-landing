"use client";

/**
 * StickyWhatsApp — CTA persistente en mobile. La home mide ~16 pantallas de alto;
 * sin esto el camino de conversión (WhatsApp) queda lejos durante el scroll.
 * Aparece tras pasar el hero y se oculta en secciones con CTAs locales para no
 * tapar contenido ni competir con la acción contextual.
 * Solo mobile (md:hidden). El click lo trackea AnalyticsEvents (a[href*="wa.me"]).
 */
import { useEffect, useState } from "react";
import { waLink } from "@/lib/whatsapp";

export function StickyWhatsApp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let raf = 0;
    let shown = false;
    // Cachear vh/docH (recalc en resize) evita leer scrollHeight en cada scroll
    // event → sin reflow forzado por scroll. rAF colapsa a 1 medición/frame.
    let vh = window.innerHeight;
    let docH = document.documentElement.scrollHeight;
    const measure = () => {
      raf = 0;
      const y = window.scrollY;
      const pastHero = y > vh * 0.9;
      const nearBottom = y + vh > docH - vh * 1.3;
      const overLocalCta = ["operacion", "precios"].some((id) => {
        const rect = document.getElementById(id)?.getBoundingClientRect();
        return rect ? rect.top < vh * 0.92 && rect.bottom > vh * 0.18 : false;
      });
      const nextShow = pastHero && !nearBottom && !overLocalCta;
      if (nextShow !== shown) {
        shown = nextShow;
        setShow(nextShow);
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };
    const onResize = () => {
      vh = window.innerHeight;
      docH = document.documentElement.scrollHeight;
      measure();
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <span
        aria-hidden
        data-section="mobile-safari-chrome"
        className={`safari-mobile-chrome fixed inset-x-0 bottom-0 z-30 h-[calc(5.75rem+env(safe-area-inset-bottom))] md:hidden ${
          show ? "is-visible" : ""
        }`}
      />
      <a
        href={waLink("Hola MaatWork, quiero contarles un proyecto")}
        target="_blank"
        rel="noopener noreferrer"
        data-section="sticky"
        aria-hidden={!show}
        tabIndex={show ? 0 : -1}
        className={`cta-whatsapp fixed inset-x-4 bottom-[calc(1.25rem+env(safe-area-inset-bottom))] z-40 flex h-14 items-center justify-center gap-2.5 rounded-full px-6 text-[15px] font-semibold text-white transition-all duration-300 md:hidden ${
          show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-24 opacity-0"
        }`}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 9.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
        </svg>
        Contanos tu proyecto
      </a>
    </>
  );
}
