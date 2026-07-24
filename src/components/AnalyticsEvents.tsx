"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

/**
 * AnalyticsEvents — funnel instrumentation in one place:
 *  - whatsapp_cta: delegated click on any wa.me link, tagged by location.
 *  - section_view: fires once when a key section enters the viewport.
 *  - faq_open: fires when a FAQ item is expanded, with the question.
 * Pageviews are handled by <Analytics/> in layout.
 */
const TRACKED_SECTIONS = ["servicios", "portfolio", "contacto"];

export function AnalyticsEvents() {
  useEffect(() => {
    // 1) WhatsApp CTA clicks, tagged by location (data-section or nearest id).
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest('a[href*="wa.me"]') as HTMLAnchorElement | null;
      if (!link) return;
      const location =
        link.closest("[data-section]")?.getAttribute("data-section") ||
        link.closest("section,header,footer")?.id ||
        "unknown";
      track("whatsapp_cta", {
        location,
        label: link.textContent?.trim().slice(0, 40) || "",
      });
    };
    document.addEventListener("click", onClick);

    // 2) section_view — once per key section.
    const seen = new Set<string>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          if (entry.isIntersecting && id && !seen.has(id)) {
            seen.add(id);
            track("section_view", { section: id });
          }
        }
      },
      { threshold: 0.4 },
    );
    for (const id of TRACKED_SECTIONS) {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    }

    // 3) faq_open — when a <details> in #faq is expanded.
    const detailsEls = Array.from(document.querySelectorAll<HTMLDetailsElement>("#faq details"));
    const onToggle = (e: Event) => {
      const el = e.currentTarget as HTMLDetailsElement;
      if (!el.open) return;
      const q = el.querySelector("summary")?.textContent?.trim().slice(0, 80) || "";
      track("faq_open", { question: q });
    };
    detailsEls.forEach((el) => el.addEventListener("toggle", onToggle));

    return () => {
      document.removeEventListener("click", onClick);
      io.disconnect();
      detailsEls.forEach((el) => el.removeEventListener("toggle", onToggle));
    };
  }, []);

  return null;
}
