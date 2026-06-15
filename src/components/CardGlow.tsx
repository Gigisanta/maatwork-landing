"use client";

/**
 * CardGlow — un solo listener delegado (no por-card) que mueve un resplandor
 * violeta siguiendo el cursor sobre las cards. Solo pointer:fine (desktop).
 * Setea --mx/--my en la card bajo el cursor; el glow lo pinta CSS (.glow-card::before).
 * No renderiza DOM.
 */
import { useEffect } from "react";

const SELECTOR = ".ecosystem-card, .bento-card";

export function CardGlow() {
  useEffect(() => {
    if (!window.matchMedia?.("(pointer: fine)").matches) return;
    const onMove = (e: MouseEvent) => {
      const card = (e.target as HTMLElement)?.closest<HTMLElement>(SELECTOR);
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
      card.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
    };
    document.addEventListener("mousemove", onMove, { passive: true });
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return null;
}
