/**
 * Nosotros — la cara del estudio: Gio y Tomás, dos jóvenes desarrolladores de
 * Río Negro. Confianza antes del cierre. Cada bloque usa `.reveal` + un
 * `transitionDelay` escalonado, así la info va apareciendo a medida que se
 * scrollea (el IntersectionObserver global de RevealOnScroll dispara `is-visible`).
 * Server component: todo estático, la animación es CSS + observer del layout.
 */
import { CornerMarks, CardGlyph, GlyphRail } from "./Ornaments";

type Person = {
  name: string;
  initials: string;
  role: string;
  bio: string;
  linkedin?: string;
  motif: string;
};

const PEOPLE: Person[] = [
  {
    name: "Gio",
    initials: "G",
    role: "Desarrollo & producto",
    bio: "Arranqué escribiendo código para resolver problemas reales de negocios de la zona. Hoy construyo los productos de MaatWork y los mantengo funcionando en producción, todos los días.",
    linkedin: "https://www.linkedin.com/in/giolivo-garcia-451954322/",
    motif: "shen-ring",
  },
  {
    name: "Tomás",
    initials: "T",
    role: "Desarrollo & automatización",
    bio: "Me obsesiona que el software sea simple de usar. Me encargo de que cada sistema que entregamos sea rápido, claro y fácil de operar, sin vueltas ni cosas que sobren.",
    motif: "scarab",
  },
];

const VALUES: { title: string; text: string; motif: string }[] = [
  {
    title: "Jóvenes, pero en producción",
    text: "No entregamos un MVP y desaparecemos: lo que construimos lo operamos nosotros mismos.",
    motif: "lotus",
  },
  {
    title: "De Río Negro para el país",
    text: "Soporte local, en español y en tu huso horario. Nos escribís y te contesta quien programó tu sistema.",
    motif: "obelisk",
  },
  {
    title: "Software simple y honesto",
    text: "Construimos lo mínimo que resuelve tu cuello de botella. Sin humo, sin permanencia, sin letra chica.",
    motif: "feather-of-maat",
  },
];

export function Nosotros() {
  return (
    <section id="nosotros" className="section-base section-chroma section-pad">
      <div className="container-maat">
        {/* Encabezado */}
        <div className="max-w-[680px] reveal">
          <span className="eyebrow">Nosotros</span>
          <h2
            className="mt-3 font-display text-3xl text-white md:text-4xl"
            style={{ fontWeight: 800, letterSpacing: "var(--tracking-h2)" }}
          >
            Dos desarrolladores de Río Negro.
          </h2>
          <p className="mt-4 max-w-[560px] text-[16px] leading-7 text-slate-300">
            Somos <strong className="font-semibold text-white">Gio</strong> y{" "}
            <strong className="font-semibold text-white">Tomás</strong>, dos jóvenes programadores de la
            Patagonia argentina. Empezamos MaatWork para construir el software que a los negocios de acá
            les faltaba: simple, rápido y hecho por gente que da la cara.
          </p>
          <span className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-slate-400">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Río Negro · Patagonia argentina
          </span>
          <GlyphRail className="mt-8 max-w-[300px]" glyphs={["shen-ring", "scarab", "feather-of-maat"]} o={0.14} />
        </div>

        {/* Fundadores */}
        <div className="mt-11 grid gap-5 md:grid-cols-2">
          {PEOPLE.map((p, i) => (
            <article
              key={p.name}
              className="reveal ops-card relative flex flex-col p-8"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <CornerMarks inset={16} />
              <CardGlyph motif={p.motif} o={0.06} className="absolute right-3 top-3 h-14 w-14" />
              <div className="relative flex items-center gap-4">
                <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-violet-600/30 bg-violet-600/15 font-display text-[20px] font-extrabold tracking-[-0.02em] text-white">
                  {p.initials}
                </span>
                <div>
                  <p className="font-display text-[18px] font-extrabold tracking-[-0.02em] text-white">{p.name}</p>
                  <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.1em] text-slate-400">{p.role}</p>
                </div>
              </div>
              <p className="relative mt-5 flex-1 text-[14.5px] leading-7 text-slate-300">{p.bio}</p>
              {p.linkedin && (
                <a
                  href={p.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-violet-300 transition-colors hover:text-violet-200"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V9.94H5.67v8.4h2.67zM7 8.77a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 9.57v-4.6c0-2.46-1.31-3.6-3.06-3.6-1.41 0-2.04.78-2.39 1.32v-1.13h-2.67v8.4h2.67v-4.69c0-.25.02-.49.09-.67.2-.49.65-1 1.4-1 .99 0 1.39.75 1.39 1.86v4.5h2.66z" />
                  </svg>
                  Ver LinkedIn
                </a>
              )}
            </article>
          ))}
        </div>

        {/* Lo que nos mueve — aparece escalonado al seguir scrolleando */}
        <div className="mt-5 grid gap-5 sm:grid-cols-3">
          {VALUES.map((v, i) => (
            <div
              key={v.title}
              className="reveal ops-card relative flex flex-col p-7"
              style={{ transitionDelay: `${(i + 1) * 120}ms` }}
            >
              <CardGlyph motif={v.motif} o={0.06} className="absolute right-3 top-3 h-12 w-12" />
              <h3 className="relative font-display text-[16px] font-extrabold tracking-[-0.01em] text-white">
                {v.title}
              </h3>
              <p className="relative mt-3 text-[14px] leading-7 text-slate-400">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
