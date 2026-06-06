"use client";

import { useEffect, useRef, useState } from "react";

/**
 * StatsCounter — números que cuentan de 0 al real al entrar en viewport.
 * IntersectionObserver nativo. CSS transition suave.
 * Counter custom: render de los 0..N es client-side.
 */
type Stat = { v: number; suffix: string; prefix?: string; k: string; format?: "plain" | "money" | "percent" };

const STATS: Stat[] = [
  { v: 5.1, suffix: "M+", prefix: "+$", k: "AUM gestionados" },
  { v: 349, suffix: "",   prefix: "+", k: "clientes activos" },
  { v: 99.9, suffix: "%", k: "uptime garantizado" },
  { v: 5,   suffix: " días",  prefix: "", k: "implementación promedio" },
];

function formatValue(v: number, format: Stat["format"]) {
  if (format === "money") return new Intl.NumberFormat("es-AR").format(v);
  if (format === "percent") return v.toString();
  return v.toString();
}

function StatNumber({ stat, active }: { stat: Stat; active: boolean }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1600;
    const start = performance.now();
    const target = stat.v;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // ease-out-quart
      const eased = 1 - Math.pow(1 - t, 4);
      setCurrent(target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, stat.v]);

  const display =
    stat.v % 1 === 0
      ? Math.round(current).toString()
      : current.toFixed(stat.v < 10 ? 1 : 0);

  return (
    <>
      {stat.prefix}
      {display}
      {stat.suffix}
    </>
  );
}

export function StatsCounter() {
  const ref = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section-elev1 border-y border-white/[0.06]">
      <div className="mx-auto max-w-[1240px] px-6 md:px-8 py-14 md:py-16">
        <ul
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6"
        >
          {STATS.map((s, i) => (
            <li
              key={s.k}
              className={[
                "flex flex-col items-center md:items-start reveal",
                i > 0 ? "md:border-l md:border-white/[0.06] md:pl-7" : "",
              ].join(" ")}
            >
              <span
                className="font-display text-white text-[40px] sm:text-[48px] md:text-[58px] leading-[0.95] tracking-[-0.04em] tabular-nums"
                style={{ fontWeight: 800 }}
              >
                <StatNumber stat={s} active={active} />
              </span>
              <span className="text-[13px] text-[#a78bfa] mt-3 font-medium tracking-wide">
                {s.k}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
