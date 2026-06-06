/**
 * LogoMarquee — strip horizontal infinito de rubros/clientes.
 * Duplico el contenido 2x para seamless loop.
 * mask-image gradient fade a los costados.
 * Pausa al hover.
 */
const RUBROS = [
  { name: "Gimnasios",    icon: <Dumbbell /> },
  { name: "CrossFit",     icon: <Kettlebell /> },
  { name: "Boxeo",        icon: <Glove /> },
  { name: "Yoga",         icon: <Lotus /> },
  { name: "Salones",      icon: <Scissors /> },
  { name: "Barberías",    icon: <Razor /> },
  { name: "Estética",     icon: <Sparkle /> },
  { name: "Academias",    icon: <Book /> },
  { name: "Pilates",      icon: <PilatesBall /> },
  { name: "Spinning",     icon: <Bike /> },
  { name: "Nutrición",    icon: <Apple /> },
  { name: "Tattoo",       icon: <Needle /> },
];

function RubroItem({ r }: { r: typeof RUBROS[number] }) {
  return (
    <div className="flex items-center gap-3 px-6 py-2 text-[#a78bfa] hover:text-white transition-colors duration-300 ease-out-quart">
      <div className="w-7 h-7 text-[#a78bfa]/80">{r.icon}</div>
      <span className="text-[14px] font-medium whitespace-nowrap">{r.name}</span>
    </div>
  );
}

export function LogoMarquee() {
  // Duplicate for seamless loop
  const items = [...RUBROS, ...RUBROS];

  return (
    <section className="section-base border-y border-white/[0.04] py-7">
      <p className="text-center text-[11.5px] uppercase tracking-[0.22em] text-[#a78bfa]/80 mb-5 px-6">
        Funciona para todos estos rubros · y los que faltan
      </p>
      <div className="marquee-mask overflow-hidden">
        <div
          className="flex w-max animate-marquee"
          style={{ willChange: "transform" }}
        >
          {items.map((r, i) => (
            <RubroItem key={i} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* === Icons (inline SVG, no libs) === */
function Dumbbell() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14.4 14.4 9.6 9.6" />
      <path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z" />
      <path d="m21.5 21.5-1.4-1.4" />
      <path d="M3.9 3.9 2.5 2.5" />
      <path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z" />
    </svg>
  );
}
function Kettlebell() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M8 2h8v4l-1 2H9L8 6V2Z" /><path d="M5 8h14l-2 12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 8Z" /></svg>;
}
function Glove() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M18 8a2 2 0 0 1 2 2v8a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V6a2 2 0 0 1 4 0v6" /><path d="M10 8a2 2 0 0 1 4 0v6" /><path d="M14 8a2 2 0 0 1 4 0v6" /></svg>;
}
function Lotus() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M12 2v6" /><path d="M8 8c-2 1-4 3-4 6 0 2 2 4 4 4 1 0 3-1 4-2 1 1 3 2 4 2 2 0 4-2 4-4 0-3-2-5-4-6" /><path d="M12 14c-1 1-2 2-4 2" /><path d="M12 14c1 1 2 2 4 2" /></svg>;
}
function Scissors() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><line x1="20" y1="4" x2="8.12" y2="15.88" /><line x1="14.47" y1="14.48" x2="20" y2="20" /><line x1="8.12" y1="8.12" x2="12" y2="12" /></svg>;
}
function Razor() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M14 4h2l-1 4h-3l-1-4h2" /><path d="M11 8v12" /><path d="M14 8v12" /><path d="M8 8h12" /></svg>;
}
function Sparkle() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M12 3l1.9 5.7L20 10l-5.7 1.9L12 18l-2.3-6.1L4 10l6.1-1.3L12 3z" /></svg>;
}
function Book() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>;
}
function PilatesBall() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden><circle cx="12" cy="14" r="7" /><circle cx="12" cy="14" r="3" /></svg>;
}
function Bike() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden><circle cx="6" cy="17" r="3" /><circle cx="18" cy="17" r="3" /><path d="M6 17 10 7h4l4 10" /><path d="M9 7h3" /></svg>;
}
function Apple() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M12 8c0-2 2-4 4-4-1 2-1 4-4 4Z" /><path d="M16 8c2 0 4 2 4 6 0 4-2 8-5 8-1 0-2-1-3-1s-2 1-3 1c-3 0-5-4-5-8 0-4 2-6 4-6 1 0 2 1 3 1s2-1 3-1Z" /></svg>;
}
function Needle() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M3 21 21 3" /><path d="M14 4l6 6" /><path d="M11 7l6 6" /><path d="M8 10l6 6" /><circle cx="6" cy="18" r="1.5" /></svg>;
}
