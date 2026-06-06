"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "¿Cuánto tarda la implementación?",
    a: "Entre 5 y 10 días hábiles. La primera llamada es de 30 minutos, configuramos el sistema con tus datos y te dejamos operando. En la mayoría de los casos, la primera semana ya estás cobrando.",
  },
  {
    q: "¿Necesito tarjeta para probar?",
    a: "No. Los 14 días son gratis y no pedimos tarjeta. Si decidís continuar, ahí elegís cómo pagar: transferencia, Mercado Pago o tarjeta.",
  },
  {
    q: "¿Sirve para mi rubro?",
    a: "Hoy tenemos clientes en gimnasios, estudios de fitness, salones de belleza, barberías, academias de idiomas y centros de estética. Si tenés turnos, cobros recurrentes y clientes que atender, te sirve.",
  },
  {
    q: "¿Puedo migrar desde otro sistema?",
    a: "Sí. Importamos tu base de clientes y turnos desde Excel, Google Sheets o cualquier sistema con el que vengas. Lo hacemos nosotros, no tenés que tocar nada.",
  },
  {
    q: "¿Qué pasa con mis datos?",
    a: "Tus datos son tuyos. Hacemos backups diarios automáticos, los servidores están en la región y cumplimos con la Ley 25.326 de Protección de Datos Personales. Podés exportar todo cuando quieras.",
  },
  {
    q: "¿Tienen app móvil?",
    a: "Sí. Tu equipo y tus clientes tienen app nativa para iOS y Android. Vos también podés manejar todo desde el celular.",
  },
  {
    q: "¿Cómo es el soporte?",
    a: "Soporte en español por WhatsApp y mail. Respuesta promedio: 2 horas en horario comercial. Si tenés un problema urgente, hablamos.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-elev2 py-20 md:py-28 border-y border-white/[0.06]">
      <div className="mx-auto max-w-[860px] px-6 md:px-8">
        <div className="text-center max-w-[640px] mx-auto reveal">
          <span className="text-[12.5px] uppercase tracking-[0.18em] text-[#a78bfa]">
            Preguntas frecuentes
          </span>
          <h2
            className="font-display text-white mt-3 text-[34px] md:text-[44px] leading-[1.05] tracking-[-0.025em]"
            style={{ fontWeight: 800 }}
          >
            Lo que todos preguntan antes de empezar.
          </h2>
        </div>

        <div className="mt-12 space-y-2.5">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={[
                  "rounded-xl border transition-colors",
                  isOpen
                    ? "bg-white/[0.04] border-[#7c3aed]/30"
                    : "bg-white/[0.02] border-white/[0.06] hover:border-white/[0.12]",
                ].join(" ")}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left px-5 md:px-6 py-5 flex items-start gap-4"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span className="flex-1 font-display text-white text-[15.5px] md:text-[16.5px] font-bold tracking-[-0.01em]">
                    {item.q}
                  </span>
                  <span
                    className={[
                      "flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-transform duration-300",
                      isOpen
                        ? "bg-[#7c3aed] border-[#7c3aed] rotate-45"
                        : "border-white/20",
                    ].join(" ")}
                    aria-hidden
                  >
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-panel-${i}`}
                  className="grid transition-all duration-300 ease-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 md:px-6 pb-5 -mt-1 text-[14.5px] text-[#d4b8ff] leading-[1.6]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
