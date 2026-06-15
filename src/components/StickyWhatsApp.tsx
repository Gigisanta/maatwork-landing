"use client";

/**
 * StickyWhatsApp — CTA persistente en mobile. La home mide ~16 pantallas de alto;
 * sin esto el camino de conversión (WhatsApp) queda lejos durante el scroll.
 * Aparece tras pasar el hero y se oculta cerca del fondo para no tapar el FinalCTA/footer.
 * Solo mobile (md:hidden). El click lo trackea AnalyticsEvents (a[href*="wa.me"]).
 */
import { useEffect, useState } from "react";
import { waLink } from "@/lib/whatsapp";

export function StickyWhatsApp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      const docH = document.documentElement.scrollHeight;
      const pastHero = y > vh * 0.9;
      const nearBottom = y + vh > docH - vh * 1.3;
      setShow(pastHero && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={waLink("Hola MaatWork quiero ver una demo")}
      target="_blank"
      rel="noopener noreferrer"
      data-section="sticky"
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
      className={`cta-whatsapp fixed inset-x-4 bottom-4 z-40 flex h-14 items-center justify-center gap-2.5 rounded-full px-6 text-[15px] font-semibold text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.5)] transition-all duration-300 md:hidden ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-24 opacity-0"
      }`}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 9.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
      </svg>
      Hablar por WhatsApp
    </a>
  );
}
