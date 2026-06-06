/**
 * LogoBar — sección delgada con "rubros que confían".
 * Logos SVG inline, sin librerías externas.
 */
const RUBROS = [
  { name: "Gimnasios", icon: <Dumbbell /> },
  { name: "CrossFit", icon: <Kettlebell /> },
  { name: "Boxeo", icon: <Glove /> },
  { name: "Yoga", icon: <Lotus /> },
  { name: "Salones", icon: <Scissors /> },
  { name: "Barberías", icon: <Razor /> },
  { name: "Estética", icon: <Sparkle /> },
  { name: "Academias", icon: <Book /> },
];

export function LogoBar() {
  return (
    <section className="section-base border-b border-white/[0.04]">
      <div className="mx-auto max-w-[1240px] px-6 md:px-8 py-8">
        <p className="text-center text-[12px] uppercase tracking-[0.22em] text-[#a78bfa]/80 mb-6">
          Funciona para tu rubro
        </p>
        <ul className="grid grid-cols-4 md:grid-cols-8 gap-2 md:gap-1">
          {RUBROS.map((r, i) => (
            <li
              key={r.name}
              className="reveal flex flex-col items-center gap-2 py-3"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-[#a78bfa]">
                {r.icon}
              </div>
              <span className="text-[11.5px] text-[#a78bfa]/85 font-medium">
                {r.name}
              </span>
            </li>
          ))}
        </ul>
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
      <path d="M12 14c-1 1-2 2-4 2" />
      <path d="M12 14c1 1 2 2 4 2" />
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
      <path d="M19 17l.9 2.1L22 20l-2.1.9L19 23l-.9-2.1L16 20l2.1-.9L19 17z" />
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
