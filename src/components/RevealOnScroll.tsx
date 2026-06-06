"use client";

import { useEffect } from "react";

/**
 * Reveal-on-scroll: minimal CSS-only intersection observer.
 * Zero deps, zero motion library.
 */
export function RevealOnScroll() {
  useEffect(() => {
    document.documentElement.classList.add("js-ready");
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window) || els.length === 0) {
      els.forEach((el) => el.classList.add("is-visible"));
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
    els.forEach((el) => io.observe(el));
    // Failsafe: if browser doesn't fire IO (some screenshot tools, headless contexts),
    // reveal everything after 2.5s so content is never permanently hidden.
    const failsafe = window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)").forEach((el) =>
        el.classList.add("is-visible"),
      );
    }, 2500);
    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);
  return null;
}
