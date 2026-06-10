/**
 * LogoMarquee — strip horizontal infinito de rubros.
 * 2 copias del track para seamless loop, gradient mask a los costados.
 * Hover pausa la animación.
 */
const RUBROS = [
  { name: "Gimnasios", icon: <Dumbbell /> },
  { name: "CrossFit", icon: <Kettlebell /> },
  { name: "Boxeo", icon: <Glove /> },
  { name: "Yoga", icon: <Lotus /> },
  { name: "Pilates", icon: <Lotus /> },
  { name: "Spinning", icon: <Cycle /> },
  { name: "Salones", icon: <Scissors /> },
  { name: "Barberías", icon: <Razor /> },
  { name: "Estética", icon: <Sparkle /> },
  { name: "Academias", icon: <Book /> },
  { name: "Nutrición", icon: <Leaf /> },
  { name: "Fisioterapia", icon: <Pulse /> },
];

export function LogoMarquee() {
  return (
    <section className="section-base border-y border-white/[0.04] overflow-hidden">
      <div className="container-maat py-10">
        <p className="eyebrow mb-7 text-center !text-purple-400/80">
          Funciona para tu rubro
        </p>
      </div>
      {/* Marquee container */}
      <div
        className="relative marquee-mask pb-10"
        style={{ WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)" }}
      >
        <div className="flex gap-12 animate-marquee w-max" style={{ width: "max-content" }}>
          {[...RUBROS, ...RUBROS].map((r, i) => (
            <div
              key={i}
              className="flex items-center gap-3 flex-shrink-0 group"
            >
              <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-purple-400 transition-colors group-hover:text-white group-hover:border-purple-600/30">
                {r.icon}
              </div>
              <span className="text-[13.5px] text-purple-400/85 font-medium whitespace-nowrap group-hover:text-white transition-colors">
                {r.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Dumbbell() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14.4 14.4 9.6 9.6" />
      <path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z" />
      <path d="m21.5 21.5-1.4-1.4" />
      <path d="M3.9 3.9 2.5 2.5" />
      <path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z" />
    </svg>
  );
}
function Kettlebell() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M8 2h8v4l-1 2H9L8 6V2Z" />
      <path d="M5 8h14l-2 12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 8Z" />
    </svg>
  );
}
function Glove() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M18 8a2 2 0 0 1 2 2v8a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V6a2 2 0 0 1 4 0v6" />
      <path d="M10 8a2 2 0 0 1 4 0v6" />
      <path d="M14 8a2 2 0 0 1 4 0v6" />
    </svg>
  );
}
function Lotus() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 2v6" />
      <path d="M8 8c-2 1-4 3-4 6 0 2 2 4 4 4 1 0 3-1 4-2 1 1 3 2 4 2 2 0 4-2 4-4 0-3-2-5-4-6" />
    </svg>
  );
}
function Cycle() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="5.5" cy="17.5" r="3.5" />
      <circle cx="18.5" cy="17.5" r="3.5" />
      <path d="M15 6h3l3 6m-3-6-4 11-5.5-3.5M9 17.5 5.5 17.5" />
    </svg>
  );
}
function Scissors() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  );
}
function Razor() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14 4h2l-1 4h-3l-1-4h2" />
      <path d="M11 8v12" />
      <path d="M14 8v12" />
      <path d="M8 8h12" />
    </svg>
  );
}
function Sparkle() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3l1.9 5.7L20 10l-5.7 1.9L12 18l-2.3-6.1L4 10l6.1-1.3L12 3z" />
    </svg>
  );
}
function Book() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}
function Leaf() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M11 20A7 7 0 0 1 4 13a7 7 0 0 1 7-7c2 0 4 1 5 3l3-3v6h-6" />
      <path d="M9 17v-7" />
    </svg>
  );
}
function Pulse() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}
