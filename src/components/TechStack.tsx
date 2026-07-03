/**
 * TechStack — technology badges section. Shows the modern, battle-tested stack
 * we use. Inline SVG technology logos where available, mono text otherwise.
 * Server component.
 */
import { GlyphRail } from "./Ornaments";

const TECHNOLOGIES = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "Node.js", icon: "⬡" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Tailwind", icon: "🌊" },
  { name: "Supabase", icon: "⚡" },
  { name: "Vercel", icon: "▲" },
  { name: "AWS", icon: "☁️" },
  { name: "OpenAI", icon: "✦" },
  { name: "n8n", icon: "↗" },
  { name: "Mercado Pago", icon: "₿" },
];

export function TechStack() {
  return (
    <section id="stack" className="section-elev2 section-chroma section-pad border-y border-white/[0.06]">
      <div className="container-maat">
        <div className="mx-auto max-w-3xl text-center reveal">
          <span className="eyebrow">Stack</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-display text-white text-balance sm:text-4xl">
            Tecnologías probadas y escalables
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-300 text-pretty mx-auto max-w-[540px]">
            Tecnología actual, mantenible y lista para producción. Nada raro que te deje atado.
          </p>
          <GlyphRail className="mx-auto mt-8 max-w-[240px]" glyphs={["djed", "feather-of-maat", "obelisk"]} o={0.14} />
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {TECHNOLOGIES.map((tech) => (
            <span
              key={tech.name}
              className="ops-card card-accent accent-violet inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-[12px] tracking-[-0.01em] text-slate-300 transition-colors hover:border-violet-500/30 hover:text-white"
            >
              <span className="text-[14px]" aria-hidden>{tech.icon}</span>
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
