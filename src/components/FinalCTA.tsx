/**
 * FinalCTA — última sección con live ticker tipo "🟢 Martín empezó hace 2 min".
 */
const TICKER_MESSAGES = [
  { t: "hace 2 min",  n: "Martín",  org: "Iron Gym (Lanús)",     a: "empezó" },
  { t: "hace 4 min",  n: "Camila",  org: "Estudio Oviedo (Palermo)", a: "configuró cobros" },
  { t: "hace 6 min",  n: "Joaquín", org: "Academia Norte (Córdoba)", a: "migró 88 clientes" },
  { t: "hace 8 min",  n: "Sofía",   org: "Yoga Vital (Belgrano)", a: "activó WhatsApp Auto" },
  { t: "hace 11 min", n: "Diego",   org: "CrossFit Sur (Quilmes)", a: "cobró 47 cuotas" },
];

export function FinalCTA() {
  return (
    <section className="section-base py-20 md:py-28">
      <div className="mx-auto max-w-[1100px] px-5 md:px-8">
        <div
          className="relative rounded-3xl overflow-hidden border border-[#7c3aed]/30 p-10 md:p-16 text-center"
          style={{
            background:
              "linear-gradient(180deg, rgba(124,58,237,0.12) 0%, rgba(45,16,101,0.55) 100%)",
          }}
        >
          {/* Subtle radial top */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-50 pointer-events-none"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 0%, rgba(168,85,247,0.20) 0%, rgba(15,5,32,0) 70%)",
            }}
          />

          <div className="relative">
            {/* Live ticker — solo en md+ */}
            <div
              className="hidden md:flex items-center justify-center gap-2 mb-7 text-[12px] text-[#a78bfa]/85"
              aria-live="polite"
            >
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-70 animate-ping" />
                <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-[#25D366]" />
              </span>
              <span className="uppercase tracking-[0.18em] font-semibold">Actividad ahora</span>
            </div>

            <h2
              className="font-display text-white text-[36px] md:text-[52px] leading-[1.04] tracking-[-0.03em] max-w-[720px] mx-auto"
              style={{ fontWeight: 800 }}
            >
              Listo para automatizar tu negocio?
            </h2>
            <p className="mt-5 text-[16.5px] md:text-[17.5px] text-[#d4b8ff] max-w-[560px] mx-auto leading-[1.55]">
              Empezás con 14 días gratis, sin tarjeta. Te llamamos y
              configuramos todo con vos.
            </p>

            {/* Ticker messages (mini) */}
            <div className="mt-7 max-w-[480px] mx-auto h-[36px] overflow-hidden marquee-mask" style={{ WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}>
              <div className="flex flex-col animate-marquee-vertical" style={{ animationDuration: "20s" }}>
                {[...TICKER_MESSAGES, ...TICKER_MESSAGES].map((m, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center gap-2 text-[12px] py-1.5"
                  >
                    <span className="text-[#a78bfa]/55">{m.t}</span>
                    <span className="text-white font-medium">{m.n}</span>
                    <span className="text-[#d4b8ff]/80">de {m.org}</span>
                    <span className="text-[#25D366]">{m.a}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/5491100000000?text=Hola%20MaatWork%20%E2%9C%8B%20quiero%20empezar"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-whatsapp inline-flex items-center justify-center gap-2.5 h-[54px] px-7 rounded-full text-white font-semibold text-[15.5px] hover-scale"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 9.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
                Hablar por WhatsApp
              </a>
              <a
                href="#funcionalidades"
                className="inline-flex items-center justify-center h-[54px] px-7 rounded-full text-white font-semibold text-[15.5px] border border-white/15 hover:border-white/30 hover:bg-white/[0.04] transition"
              >
                Ver funcionalidades
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-[13.5px] text-[#a78bfa]">
              <li className="flex items-center gap-1.5">
                <Dot />Sin tarjeta
              </li>
              <li className="flex items-center gap-1.5">
                <Dot />Sin contrato
              </li>
              <li className="flex items-center gap-1.5">
                <Dot />Demo personalizada
              </li>
              <li className="flex items-center gap-1.5">
                <Dot />Soporte en español
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Dot() {
  return (
    <span className="inline-block w-1 h-1 rounded-full bg-[#a78bfa]/60" />
  );
}
