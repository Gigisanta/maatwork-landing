/**
 * ProofStrip — sober band of operational markers between hero and diagnosis.
 * Replaces the animated stat counters: static, mono-labelled, institutional.
 * No count-up gimmick — facts stated plainly. Engraved corner marks frame the
 * row as an instrument readout. Server component.
 */
import type { CSSProperties } from "react";
import { CornerMarks, GlyphRail } from "./Ornaments";

const MARKERS: { value: string; label: string; dot: string }[] = [
  { value: "4 productos", label: "En producción, navegables", dot: "var(--cyan)" },
  { value: "4 industrias", label: "Natatorios · obras · extintores · comercial", dot: "var(--violet-400)" },
  { value: "Soporte directo", label: "WhatsApp, mismo día hábil", dot: "var(--success)" },
  { value: "Desde USD 100", label: "+ setup, a cotizar", dot: "var(--gold-400)" },
];

export function ProofStrip() {
  return (
    <section className="section-elev1 maat-weave border-y border-white/[0.06]">
      <div className="container-maat relative py-12 md:py-14">
        <CornerMarks inset={0} />
        {/* Shen-ring — eternity / no forced permanence: your code is yours for good */}
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/motifs/shen-ring.svg" alt="" className="motif h-36 w-36" style={{ "--motif-o": 0.04 } as CSSProperties} />
        </div>
        <ul className="relative grid grid-cols-2 gap-y-6 md:grid-cols-4 md:gap-x-4">
          {MARKERS.map((m, i) => (
            <li
              key={m.label}
              className={[
                "reveal flex flex-col items-center text-center md:items-start md:text-left",
                i > 0 ? "md:border-l md:border-white/[0.06] md:pl-7" : "",
              ].join(" ")}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="mb-2.5 flex items-center gap-1.5">
                <span className="dot-pulse h-1.5 w-1.5 rounded-full" style={{ background: m.dot }} aria-hidden />
              </span>
              <span
                className="font-display text-2xl text-white sm:text-3xl"
                style={{ fontWeight: 700, letterSpacing: "var(--tracking-h2)" }}
              >
                {m.value}
              </span>
              <span className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.12em] text-slate-400">
                {m.label}
              </span>
            </li>
          ))}
        </ul>
        <GlyphRail className="relative mx-auto mt-9 max-w-[300px]" glyphs={["shen-ring", "ankh", "cartouche"]} o={0.13} />
      </div>
    </section>
  );
}
