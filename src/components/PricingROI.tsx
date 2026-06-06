"use client";

import { useMemo, useState } from "react";

/**
 * PricingROI — pricing card + calculadora interactiva.
 * Pricing card es el hero visual.
 */
const FEATURES = [
  "Clientes ilimitados",
  "Cobros automáticos y links de pago",
  "Agenda online con recordatorios",
  "WhatsApp automático",
  "Dashboard y reportes",
  "Soporte en español",
  "App móvil (iOS y Android)",
  "Backups diarios",
  "Migración asistida",
  "Capacitación del equipo",
];

const USD_TO_ARS = 1450; // se muestra "estimado" para no ser engañosos

export function PricingROI() {
  const [hours, setHours] = useState(3);
  const [hourly, setHourly] = useState(8000);
  const [days, setDays] = useState(26);

  const { savedPerMonth, roiPct, paybackDays } = useMemo(() => {
    const monthlyARS = hours * hourly * days;
    const planARS = 59 * USD_TO_ARS;
    const netSaved = Math.max(monthlyARS - planARS, 0);
    const roi = planARS > 0 ? Math.round((netSaved / planARS) * 100) : 0;
    const payback = netSaved > 0 ? Math.round((planARS / (monthlyARS / 30)) * 10) / 10 : 0;
    return {
      savedPerMonth: netSaved,
      roiPct: roi,
      paybackDays: payback,
    };
  }, [hours, hourly, days]);

  return (
    <section
      id="precios"
      className="section-elev1 py-20 md:py-28 border-y border-white/[0.06]"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="max-w-[640px] reveal">
          <span className="text-[12.5px] uppercase tracking-[0.18em] text-[#a78bfa]">
            Precios
          </span>
          <h2
            className="font-display text-white mt-3 text-[34px] md:text-[44px] leading-[1.05] tracking-[-0.025em]"
            style={{ fontWeight: 800 }}
          >
            Un solo plan. Todo incluido. Sin sorpresas.
          </h2>
          <p className="mt-4 text-[16px] text-[#d4b8ff] max-w-[520px]">
            Pagás en dólares, facturás en pesos. Sin contratos, sin tarjeta
            para probar, sin letra chica.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-[1.05fr_1fr] gap-6">
          {/* Pricing card */}
          <div className="reveal">
            <div
              className="relative rounded-2xl p-8 md:p-10 border border-[#7c3aed]/30 overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, rgba(124,58,237,0.12) 0%, rgba(124,58,237,0.04) 100%)",
              }}
            >
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-[12.5px] uppercase tracking-[0.18em] text-[#a78bfa]">
                    Plan único
                  </div>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span
                      className="font-display text-white text-[64px] leading-none tracking-[-0.04em]"
                      style={{ fontWeight: 800 }}
                    >
                      USD 59
                    </span>
                    <span className="text-[15px] text-[#d4b8ff]">/mes</span>
                  </div>
                  <div className="mt-2 text-[13.5px] text-[#a78bfa]/85">
                    ≈ ARS {new Intl.NumberFormat("es-AR").format(59 * USD_TO_ARS)} al blue ·
                    facturación en pesos
                  </div>
                </div>
                <span className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] text-[12px] font-semibold px-3 py-1.5">
                  14 días gratis
                </span>
              </div>

              <ul className="mt-7 space-y-3.5">
                {FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[14.5px] text-[#d4b8ff]">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#25D366]/20 border border-[#25D366]/30 flex items-center justify-center">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/5491100000000?text=Hola%20MaatWork%20%E2%9C%8B%20quiero%20los%2014%20días%20gratis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-whatsapp flex-1 inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full text-white font-semibold text-[15px]"
                >
                  Probar 14 días gratis
                </a>
                <a
                  href="#faq"
                  className="flex-1 inline-flex items-center justify-center h-12 px-6 rounded-full text-white font-semibold text-[15px] border border-white/15 hover:border-white/30 hover:bg-white/[0.04] transition"
                >
                  Ver preguntas
                </a>
              </div>

              <p className="mt-5 text-[12.5px] text-[#a78bfa]/80 text-center">
                Sin tarjeta · Sin contrato · Cancelás cuando quieras
              </p>
            </div>
          </div>

          {/* ROI Calculator */}
          <div className="reveal" style={{ transitionDelay: "100ms" }}>
            <div className="card p-6 md:p-8 h-full">
              <h3 className="font-display text-white text-[20px] font-extrabold tracking-[-0.02em]">
                ¿Cuánto ahorrás con MaatWork?
              </h3>
              <p className="mt-2 text-[14px] text-[#d4b8ff]/85">
                Calculá tu ahorro según las horas que hoy dedicás a tareas
                manuales.
              </p>

              <div className="mt-7 space-y-6">
                <Slider
                  label="Horas por día en gestión"
                  value={hours}
                  onChange={setHours}
                  min={1}
                  max={8}
                  step={0.5}
                  suffix="hs"
                />
                <Slider
                  label="Valor hora (ARS)"
                  value={hourly}
                  onChange={setHourly}
                  min={3000}
                  max={25000}
                  step={500}
                  suffix="$"
                  format={(v) => new Intl.NumberFormat("es-AR").format(v)}
                />
                <Slider
                  label="Días laborables por mes"
                  value={days}
                  onChange={setDays}
                  min={15}
                  max={30}
                  step={1}
                  suffix="días"
                />
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                <Result
                  label="Ahorro / mes"
                  value={`$${new Intl.NumberFormat("es-AR").format(savedPerMonth)}`}
                  accent="violet"
                />
                <Result
                  label="ROI"
                  value={`${roiPct}%`}
                  accent="green"
                />
                <Result
                  label="Payback"
                  value={paybackDays > 0 ? `${paybackDays} días` : "—"}
                  accent="violet"
                />
              </div>

              <div className="mt-7 text-[12.5px] text-[#a78bfa]/75 leading-[1.55]">
                Cálculo estimado. El ahorro surge de reemplazar tareas
                manuales que hoy hacés vos o tu equipo. No incluye el valor de
                no perder clientes.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Slider({
  label,
  value,
  onChange,
  min,
  max,
  step,
  suffix,
  format,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  min: number;
  max: number;
  step: number;
  suffix?: string;
  format?: (n: number) => string;
}) {
  const display = format ? format(value) : value.toString();
  return (
    <label className="block">
      <div className="flex items-baseline justify-between mb-2.5">
        <span className="text-[13px] text-[#d4b8ff]">{label}</span>
        <span className="text-white font-semibold text-[15px] tabular-nums">
          {display}
          {suffix ? <span className="text-[#a78bfa] text-[12.5px] ml-1">{suffix}</span> : null}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full appearance-none bg-transparent cursor-pointer accent-[#7c3aed] h-6"
        style={{
          background: `linear-gradient(to right, #7c3aed 0%, #a855f7 ${
            ((value - min) / (max - min)) * 100
          }%, rgba(255,255,255,0.08) ${
            ((value - min) / (max - min)) * 100
          }%, rgba(255,255,255,0.08) 100%)`,
          borderRadius: 9999,
          height: 6,
        }}
      />
    </label>
  );
}

function Result({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent: "violet" | "green";
}) {
  const accentClass =
    accent === "green"
      ? "text-[#25D366]"
      : "text-white";
  return (
    <div className="rounded-lg bg-white/[0.03] border border-white/[0.06] px-3 py-3 text-center">
      <div className="text-[11px] text-[#a78bfa]/80 uppercase tracking-wide">
        {label}
      </div>
      <div
        className={`font-display mt-1 text-[18px] tracking-[-0.02em] ${accentClass}`}
        style={{ fontWeight: 800 }}
      >
        {value}
      </div>
    </div>
  );
}
