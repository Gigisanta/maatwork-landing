"use client";

import { useState } from "react";
import { FAQS } from "@/data/faqs";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const [query, setQuery] = useState("");

  const filtered = query
    ? FAQS.filter(
        (f) =>
          f.q.toLowerCase().includes(query.toLowerCase()) ||
          f.a.toLowerCase().includes(query.toLowerCase()),
      )
    : FAQS;

  return (
    <section id="faq" className="section-elev2 section-pad border-y border-white/[0.06]">
      <div className="mx-auto max-w-[860px] px-6 md:px-8">
        <div className="text-center max-w-[640px] mx-auto reveal">
          <span className="eyebrow">
            Preguntas frecuentes
          </span>
          <h2
            className="font-display text-white mt-3 text-[34px] md:text-[46px] leading-[1.05] tracking-[-0.03em] text-balance"
            style={{ fontWeight: 800 }}
          >
            Lo que todos preguntan antes de empezar.
          </h2>
        </div>

        <div className="mt-8 max-w-[420px] mx-auto">
          <div className="relative">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-purple-400)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden>
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="search"
              aria-label="Buscar pregunta"
              placeholder="Buscar pregunta..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full h-11 pl-10 pr-4 rounded-full bg-white/[0.04] border border-white/[0.08] text-[14px] text-white placeholder:text-purple-400/80 focus:border-purple-600/50 focus:outline-none transition-colors duration-200"
            />
          </div>
        </div>

        <div className="mt-8 space-y-2.5">
          {filtered.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={[
                  "rounded-xl border transition-all duration-300 ease-out-quart",
                  isOpen
                    ? "bg-white/[0.04] border-purple-600/30 shadow-[0_0_20px_-10px_rgba(124,58,237,0.4)]"
                    : "bg-white/[0.02] border-white/[0.06] hover:border-white/[0.15]",
                ].join(" ")}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left px-5 md:px-6 py-5 flex items-start gap-4"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span className="flex-1 font-display text-white text-[15.5px] md:text-[16.5px] font-bold tracking-[-0.01em]">
                    {item.q}
                  </span>
                  <span
                    className={[
                      "flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-transform duration-300 ease-out-quart",
                      isOpen
                        ? "bg-purple-600 border-purple-600 rotate-45"
                        : "border-white/20",
                    ].join(" ")}
                    aria-hidden
                  >
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-panel-${i}`}
                  className="grid transition-all duration-400 ease-out-quart"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 md:px-6 pb-5 -mt-1 text-[14.5px] text-purple-200 leading-[1.6]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          {filtered.length === 0 && (
            <p className="text-center text-[14px] text-purple-400 py-8">
              No encontramos preguntas con “{query}”. Escribinos por WhatsApp.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
