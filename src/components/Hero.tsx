import { ProductShowcase } from "./ProductShowcase";
import { StaggeredText } from "./StaggeredText";
import { waLink } from "@/lib/whatsapp";

const H1_LINE_1 = "Software real para operar";
const H1_LINE_2 = "todo tu negocio.";

const PRODUCT_CHIPS = ["NMS", "MaatWorkCRM", "Infrannova", "Varigas"];

export function Hero() {
  return (
    <section id="top" className="section-base relative overflow-hidden pt-20 pb-12 md:pt-24 md:pb-16">
      <div className="aurora-field" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />

      <div className="container-maat relative z-10">
        <div className="mb-7 flex justify-center">
          <div
            className="reveal live-chip inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[12.5px]"
            style={{ transitionDelay: "0ms" }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" />
            </span>
            <span className="font-semibold">Ecosistema MaatWork vivo</span>
            <span className="text-cyan-200/50">·</span>
            <span className="hidden sm:inline">productos reales, demos limpias</span>
          </div>
        </div>

        <h1
          className="reveal mx-auto max-w-[1080px] text-center font-display text-4xl text-white text-balance sm:text-5xl lg:text-display"
          style={{ fontWeight: 850, letterSpacing: "var(--tracking-display)", lineHeight: 0.94, transitionDelay: "60ms" }}
        >
          <StaggeredText text={H1_LINE_1} baseDelayMs={120} staggerMs={18} className="block" />
          <StaggeredText
            text={H1_LINE_2}
            baseDelayMs={120 + H1_LINE_1.length * 18}
            staggerMs={18}
            className="hero-title-accent block"
          />
        </h1>

        <p
          className="reveal mx-auto mt-7 max-w-[760px] text-center text-lg leading-8 text-slate-300 md:text-xl"
          style={{ transitionDelay: "200ms" }}
        >
          Agenda, cobros, clientes y WhatsApp de tu negocio, ordenados en un solo sistema. Hecho en Argentina,
          en español — y con productos reales que ya operan. Mostramos el producto, no humo.
        </p>

        <div
          className="reveal mt-8 flex flex-col justify-center gap-3 sm:flex-row"
          style={{ transitionDelay: "260ms" }}
        >
          <a
            href={waLink("Hola MaatWork quiero ver una demo")}
            target="_blank"
            rel="noopener noreferrer"
            className="group cta-whatsapp inline-flex items-center justify-center gap-2.5 rounded-full px-7 text-[15.5px] font-semibold tracking-[-0.01em] text-white shadow-[0_12px_30px_-10px_rgba(37,211,102,0.45)] hover-scale"
            style={{ height: 56 }}
          >
            <WhatsAppIcon />
            Ver demo por WhatsApp
          </a>
          <a
            href="#productos"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-cyan-200/20 px-7 text-[15.5px] font-semibold text-white transition-all hover:border-cyan-200/50 hover:bg-cyan-200/[0.08] hover-scale"
            style={{ height: 56, transitionTimingFunction: "var(--ease-out-quart)" }}
          >
            Ver productos reales
            <ArrowIcon />
          </a>
        </div>

        <ul
          className="reveal mt-7 flex flex-wrap items-center justify-center gap-2.5 text-[13px]"
          style={{ transitionDelay: "320ms" }}
        >
          {PRODUCT_CHIPS.map((chip) => (
            <li key={chip} className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-slate-200">
              <Check /> {chip}
            </li>
          ))}
        </ul>

        <div className="reveal mt-12 md:mt-16" style={{ transitionDelay: "400ms" }}>
          <ProductShowcase />
        </div>
      </div>
    </section>
  );
}

function Check() {
  return <span className="inline-block text-emerald-300" aria-hidden>✓</span>;
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden className="transition-transform group-hover:scale-110 group-hover:rotate-12" style={{ transitionTimingFunction: "var(--ease-out-quart)" }}>
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="transition-transform group-hover:translate-x-0.5" style={{ transitionTimingFunction: "var(--ease-out-quart)" }}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
