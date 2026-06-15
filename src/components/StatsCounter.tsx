"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  /** What to display: prefix + numeric + suffix. Counter animates the numeric part. */
  prefix?: string;
  target: number;
  suffix?: string;
  decimals?: number;
  k: string;
};

const STATS: Stat[] = [
  { target: 10, suffix: " días", k: "setup estimado" },
  { target: 14, suffix: " días", k: "prueba sin tarjeta" },
  { target: 100, suffix: " %", k: "soporte en español" },
  { target: 24, suffix: "/7", k: "operación online" },
];

/**
 * StatsCounter — números grandes con counter animation.
 * Counter: usa CSS @property --num + counter() trick.
 * Active cuando entra en viewport (IntersectionObserver).
 * Reduced-motion: salta a target directo.
 */
export function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setActive(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setActive(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.3 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section-elev1 border-y border-white/[0.06]" ref={ref}>
      <div className="mx-auto max-w-[1320px] px-5 md:px-8 py-14 md:py-16">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
          {STATS.map((s, i) => (
            <li
              key={s.k}
              className={[
                "flex flex-col items-center md:items-start reveal",
                i > 0 ? "md:border-l md:border-white/[0.06] md:pl-7" : "",
              ].join(" ")}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span
                className="font-display text-white text-4xl sm:text-5xl md:text-display leading-none tracking-display tabular-nums"
                style={{ fontWeight: 800 }}
              >
                {active ? (
                  <Counter prefix={s.prefix} target={s.target} suffix={s.suffix} decimals={s.decimals} />
                ) : (
                  <span className="opacity-0">0</span>
                )}
              </span>
              <span className="text-[13px] text-purple-400 mt-2.5 font-medium tracking-wide">
                {s.k}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Counter({
  prefix,
  target,
  suffix,
  decimals = 0,
}: {
  prefix?: string;
  target: number;
  suffix?: string;
  decimals?: number;
}) {
  // CSS @property trick: animate --num and display via counter()
  // We render the value live via JS to avoid hydration mismatch
  const [val, setVal] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVal(target);
      return;
    }
    const start = performance.now();
    const duration = 1600;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      // ease-out-quart
      const e = 1 - Math.pow(1 - t, 4);
      setVal(target * e);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target]);

  const formatted = decimals > 0 ? val.toFixed(decimals) : Math.round(val).toString();

  return (
    <span>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
