"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

/**
 * AnalyticsEvents — delegated click tracking for WhatsApp CTAs (the conversion
 * signal). One global listener instead of onClick on every CTA across server +
 * client components. Pageviews are handled by <Analytics/> in layout.
 */
export function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest('a[href*="wa.me"]') as HTMLAnchorElement | null;
      if (!link) return;
      track("whatsapp_cta", {
        section: link.closest("section,header,footer")?.id || "unknown",
        label: link.textContent?.trim().slice(0, 40) || "",
      });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
