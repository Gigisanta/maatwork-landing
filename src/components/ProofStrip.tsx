/**
 * ProofStrip — sober band of operational markers between hero and diagnosis.
 * Replaces the animated stat counters: static, mono-labelled, institutional.
 * No count-up gimmick — facts stated plainly. Server component.
 */
const MARKERS: { value: string; label: string; dot: string }[] = [
  { value: "5–10 días", label: "Implementación guiada", dot: "var(--cyan)" },
  { value: "Un sistema", label: "Agenda · Cobros · Clientes", dot: "var(--violet-400)" },
  { value: "Soporte local", label: "En español, mismo día", dot: "var(--success)" },
  { value: "14 días", label: "Prueba sin tarjeta", dot: "var(--gold-400)" },
];

export function ProofStrip() {
  return (
    <section className="section-elev1 border-y border-white/[0.06]">
      <div className="container-maat py-12 md:py-14">
        <ul className="grid grid-cols-2 gap-y-8 md:grid-cols-4 md:gap-x-4">
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
      </div>
    </section>
  );
}
