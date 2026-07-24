"use client";

import { useEffect } from "react";

/**
 * Reveal-on-scroll: minimal CSS-only intersection observer.
 * Zero deps, zero motion library.
 *
 * Un MutationObserver re-engancha cualquier `.reveal` agregado después del montaje
 * (HMR en dev, contenido async) — sin esto, esos nodos nuevos nunca se observan y
 * quedan atascados en opacity:0 (invisibles). El failsafe global cubre el resto.
 */
export function RevealOnScroll() {
  useEffect(() => {
    document.documentElement.classList.add("js-ready");

    if (!("IntersectionObserver" in window)) {
      document
        .querySelectorAll<HTMLElement>(".reveal")
        .forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px 0px 0px", threshold: 0.01 },
    );

    // Observa todos los `.reveal` presentes ahora y los que aún no tengan `is-visible`.
    const observeAll = () => {
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.is-visible)")
        .forEach((el) => io.observe(el));
    };
    observeAll();

    // Re-engancha nodos `.reveal` insertados después (HMR / render async).
    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });

    // Failsafe: si el navegador no dispara IO (tools de screenshot, headless),
    // revela todo tras 2.5s para que el contenido nunca quede oculto.
    const failsafe = window.setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.is-visible)")
        .forEach((el) => el.classList.add("is-visible"));
    }, 2500);

    return () => {
      io.disconnect();
      mo.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);
  return null;
}
