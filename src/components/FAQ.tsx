"use client";

import { useState } from "react";
import { FAQS } from "@/data/faqs";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-base section-pad">
      <div className="mx-auto max-w-[820px] px-6 md:px-8">
        <div className="reveal mx-auto max-w-[640px] text-center">
          <span className="eyebrow">Preguntas frecuentes</span>
          <h2
            className="mt-3 font-display text-3xl text-white text-balance md:text-4xl"
            style={{ fontWeight: 800, letterSpacing: "var(--tracking-h2)" }}
          >
            Lo que se pregunta antes de empezar.
          </h2>
        </div>

        <div className="mt-10 space-y-2.5">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={[
                  "rounded-lg border transition-colors duration-200",
                  isOpen
                    ? "border-border-accent bg-white/[0.03]"
                    : "border-white/[0.07] bg-white/[0.012] hover:border-white/[0.14]",
                ].join(" ")}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start gap-4 px-5 py-5 text-left md:px-6"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span className="flex-1 font-display text-[15.5px] font-bold tracking-[-0.01em] text-white md:text-[16.5px]">
                    {item.q}
                  </span>
                  <span
                    className={[
                      "flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border transition-transform duration-300 ease-out-quart",
                      isOpen ? "rotate-45 border-violet-600 bg-violet-600" : "border-white/20",
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
                  className="grid transition-all duration-300 ease-out-quart"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr", opacity: isOpen ? 1 : 0 }}
                >
                  <div className="overflow-hidden">
                    <p className="-mt-1 px-5 pb-5 text-[14.5px] leading-[1.6] text-slate-300 md:px-6">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
