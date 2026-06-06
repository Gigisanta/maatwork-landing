/**
 * Features — V5: Bento grid asimétrica con hover reveal.
 * 6 features. Cada uno con .bento-card y contenido que se anima al hover.
 */
import type { ReactNode } from "react";

type Feature = {
  title: string;
  desc: string;
  icon: ReactNode;
  /** Tailwind classes para grid placement */
  span: string;
  /** Mini-preview que aparece en hover */
  preview: ReactNode;
  /** Color de acento del gradient del icon container */
  accentFrom: string;
  accentTo: string;
};

const FEATURES: Feature[] = [
  {
    title: "CRM de clientes",
    desc: "Encontrás cualquier cosa en 2 clicks.",
    icon: <CRM />,
    span: "sm:col-span-2 lg:col-span-1 lg:row-span-2",
    accentFrom: "from-[#a855f7]/20",
    accentTo: "to-[#7c3aed]/10",
    preview: (
      <div className="reveal-on-hover mt-4 space-y-1.5">
        {[
          { n: "Lucía M.",  init: "LM", g: "avatar-grad-1" },
          { n: "Diego R.",  init: "DR", g: "avatar-grad-2" },
          { n: "Camila S.", init: "CS", g: "avatar-grad-3" },
          { n: "Sofía A.",  init: "SA", g: "avatar-grad-5" },
        ].map((c) => (
          <div key={c.n} className="flex items-center gap-2 text-[11px] py-1.5 px-2 rounded bg-white/[0.03]">
            <div className={`${c.g} w-5 h-5 rounded-full flex items-center justify-center text-[8px] text-white font-bold`}>{c.init}</div>
            <span className="text-white flex-1 truncate">{c.n}</span>
            <span className="text-[8.5px] text-[#a78bfa]/60">12 visitas</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Recuperá 8 hs/semana",
    desc: "Cobros automáticos y links de pago.",
    icon: <Money />,
    span: "lg:col-span-1",
    accentFrom: "from-[#25D366]/20",
    accentTo: "to-[#25D366]/5",
    preview: (
      <div className="reveal-on-hover mt-4">
        <div className="text-[10.5px] text-[#a78bfa]/70 mb-1.5">Cobros hoy</div>
        <div className="text-white font-display text-[20px] tracking-tight" style={{ fontWeight: 800 }}>$48,500</div>
        <div className="text-[10px] text-[#25D366] font-medium">+8 vs ayer</div>
      </div>
    ),
  },
  {
    title: "Reduciá no-shows 34%",
    desc: "Agenda con recordatorios automáticos.",
    icon: <Calendar />,
    span: "lg:col-span-1",
    accentFrom: "from-[#5ab1f3]/20",
    accentTo: "to-[#7c3aed]/10",
    preview: (
      <div className="reveal-on-hover mt-4 flex items-center gap-2">
        <div className="flex-1 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
          <div className="h-full bg-[#25D366]" style={{ width: "34%" }} />
        </div>
        <span className="text-[11px] text-white font-semibold">34%</span>
      </div>
    ),
  },
  {
    title: "WhatsApp 24/7",
    desc: "Atendés aunque no estés.",
    icon: <Chat />,
    span: "lg:col-span-1",
    accentFrom: "from-[#25D366]/20",
    accentTo: "to-[#7c3aed]/10",
    preview: (
      <div className="reveal-on-hover mt-3 rounded-md bg-[#0f0520] border border-[#25D366]/20 p-2 text-[10.5px] text-white">
        <span className="text-[#25D366]">●</span> Lucía: confirmo mañana 9 ✓
      </div>
    ),
  },
  {
    title: "Tomá decisiones con datos",
    desc: "KPIs en 5 segundos, no a las 2am en Excel.",
    icon: <Chart />,
    span: "sm:col-span-2 lg:col-span-2",
    accentFrom: "from-[#7c3aed]/25",
    accentTo: "to-[#a855f7]/10",
    preview: (
      <div className="reveal-on-hover mt-4 grid grid-cols-7 gap-1.5 h-16 items-end">
        {[40, 65, 50, 78, 92, 70, 85].map((h, i) => (
          <div key={i} className="bg-gradient-to-t from-[#7c3aed] to-[#a855f7] rounded-t" style={{ height: `${h}%`, animation: `letter-reveal 0.6s var(--ease-out-quart) ${i * 60}ms backwards` }} />
        ))}
      </div>
    ),
  },
  {
    title: "Datos seguros",
    desc: "Backups diarios. Ley 25.326.",
    icon: <Shield />,
    span: "lg:col-span-1",
    accentFrom: "from-[#d395c1]/20",
    accentTo: "to-[#7c3aed]/10",
    preview: (
      <div className="reveal-on-hover mt-3 flex items-center gap-1.5 text-[10.5px] text-[#a78bfa]/80">
        <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse-soft" />
        Backup OK · hace 2h
      </div>
    ),
  },
];

export function Features() {
  return (
    <section
      id="funcionalidades"
      className="section-elev1 py-20 md:py-28 border-y border-white/[0.06]"
    >
      <div className="mx-auto max-w-[1240px] px-6 md:px-8">
        <div className="max-w-[680px] reveal">
          <span className="text-[12.5px] uppercase tracking-[0.18em] text-[#a78bfa]">
            Funcionalidades
          </span>
          <h2
            className="font-display text-white mt-3 text-[34px] md:text-[46px] leading-[1.05] tracking-[-0.03em] text-balance"
            style={{ fontWeight: 800 }}
          >
            Todo lo que tu local necesita.
            <br />
            <span className="text-[#d4b8ff]">Nada que sobre.</span>
          </h2>
          <p className="mt-4 text-[16.5px] text-[#d4b8ff] max-w-[520px]">
            Diseñado para gente que maneja un local, no para programadores.
            Abrís la app y entendés todo.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className={[
                "bento-card card p-5 md:p-6 reveal",
                f.span,
              ].join(" ")}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${f.accentFrom} ${f.accentTo} border border-white/10 flex items-center justify-center text-[#d4b8ff]`}>
                <div className="w-5 h-5">{f.icon}</div>
              </div>
              <h3 className="font-display text-white mt-4 text-[17px] font-bold tracking-[-0.01em]">
                {f.title}
              </h3>
              <p className="mt-1.5 text-[13.5px] text-[#d4b8ff]/85 leading-[1.55]">
                {f.desc}
              </p>
              {f.preview}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* === Icons === */
function CRM() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
}
function Money() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /><line x1="6" y1="15" x2="10" y2="15" /></svg>;
}
function Calendar() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>;
}
function Chat() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.6-.8L3 21l1.8-5.7a8.5 8.5 0 1 1 16.2-3.8Z" /></svg>;
}
function Chart() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M3 3v18h18" /><path d="m7 14 4-4 4 4 5-5" /></svg>;
}
function Shield() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /></svg>;
}
