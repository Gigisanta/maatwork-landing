/**
 * TrustBar — métricas protagonistas, números grandes.
 */
export function TrustBar() {
  const metrics = [
    { v: "+$5.1M", k: "AUM gestionados" },
    { v: "+349", k: "clientes activos" },
    { v: "99.9%", k: "uptime" },
    { v: "5-10 días", k: "implementación" },
  ];

  return (
    <section className="section-elev1 border-y border-white/[0.06]">
      <div className="mx-auto max-w-[1240px] px-6 md:px-8 py-10 md:py-12">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
          {metrics.map((m, i) => (
            <li
              key={m.k}
              className={[
                "flex flex-col items-center md:items-start reveal",
                i > 0 ? "md:border-l md:border-white/[0.06] md:pl-7" : "",
              ].join(" ")}
            >
              <span
                className="font-display text-white text-[34px] sm:text-[40px] md:text-[48px] leading-none tracking-[-0.035em]"
                style={{ fontWeight: 800 }}
              >
                {m.v}
              </span>
              <span className="text-[13px] text-[#a78bfa] mt-2.5 font-medium tracking-wide">
                {m.k}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
