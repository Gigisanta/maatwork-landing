/**
 * Footer — pie estructurado en 4 columnas: marca + descripción + redes,
 * Navegación, Servicios y Contacto (email / WhatsApp / ubicación). Barra
 * inferior con copyright y disponibilidad. Datos propios de MaatWork.
 * Server component.
 */
import type { ReactNode } from "react";
import Link from "next/link";
import { waLink } from "@/lib/whatsapp";
import { Logo } from "./Logo";

const INSTAGRAM = "https://www.instagram.com/maat.work/";
const X_PROFILE = "https://x.com/MaatWorkX";
const EMAIL = "hola@maat.work";
const PHONE_DISPLAY = "+54 9 299 456-9840";

const NAV: { href: string; label: string }[] = [
  { href: "/", label: "Inicio" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/#contacto", label: "Contacto" },
];

const SERVICIOS: { href: string; label: string }[] = [
  { href: "/servicios/desarrollo-a-medida", label: "Apps de gestión a medida" },
  { href: "/servicios/web-landings", label: "Webs & Landings" },
  { href: "/servicios/automatizaciones", label: "Automatización + IA" },
  { href: "/servicios/mantenimiento", label: "Mantenimiento & Soporte" },
];

const SOCIALS: { href: string; label: string; icon: ReactNode }[] = [
  { href: waLink(), label: "WhatsApp", icon: <IconWhatsApp /> },
  { href: X_PROFILE, label: "X (Twitter)", icon: <IconX /> },
  { href: INSTAGRAM, label: "Instagram", icon: <IconInstagram /> },
];

export function Footer() {
  return (
    <footer className="section-atmo section-base border-t border-white/[0.06]">
      <div className="atmo" aria-hidden>
        <div className="atmo-grid" />
      </div>

      <div className="container-maat relative z-10 pt-14 pb-8 md:pt-20 md:pb-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          {/* Marca + descripción + redes */}
          <div className="md:col-span-4">
            <Logo size={30} showText showMark={false} />
            <p className="mt-4 max-w-[340px] text-sm leading-6 text-slate-400">
              Software a medida para pymes y emprendimientos. Webs, e-commerce, sistemas
              e integraciones con IA — pensados para escalar.
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.02] text-slate-300 transition-colors hover:border-violet-400/40 hover:bg-white/[0.05] hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navegación */}
          <div className="md:col-span-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--violet-300)]">
              Navegación
            </span>
            <ul className="mt-4 flex flex-col gap-3">
              {NAV.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div className="md:col-span-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--violet-300)]">
              Servicios
            </span>
            <ul className="mt-4 flex flex-col gap-3">
              {SERVICIOS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="md:col-span-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--violet-300)]">
              Contacto
            </span>
            <ul className="mt-4 flex flex-col gap-4">
              <ContactRow icon={<IconMail />} href={`mailto:${EMAIL}`}>
                {EMAIL}
              </ContactRow>
              <ContactRow icon={<IconPhone />} href={waLink()} external>
                {PHONE_DISPLAY}
              </ContactRow>
              <ContactRow icon={<IconPin />}>Río Negro, Argentina</ContactRow>
            </ul>
          </div>
        </div>

      </div>

      {/* Barra inferior — fondo blanco sólido, separada del fondo animado */}
      <div className="relative z-10 border-t border-black/10" style={{ backgroundColor: "#ffffff" }}>
        <div className="container-maat flex flex-col gap-3 py-5 text-sm md:flex-row md:items-center md:justify-between" style={{ color: "#475569" }}>
          <p>© {new Date().getFullYear()} MaatWork. Todos los derechos reservados.</p>
          <span className="inline-flex items-center gap-2 self-start rounded-full border border-emerald-500/30 bg-emerald-50 px-3.5 py-1.5 text-[13px] font-medium text-emerald-600 md:self-auto">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Disponible para nuevos proyectos
          </span>
        </div>
      </div>
    </footer>
  );
}

// ---- Fila de contacto (ícono en cuadro violeta + label) --------------------
function ContactRow({ icon, href, external, children }: { icon: ReactNode; href?: string; external?: boolean; children: ReactNode }) {
  const content = (
    <span className="flex items-center gap-3">
      <span
        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg"
        style={{ border: "1px solid var(--violet-ring)", background: "var(--violet-soft)", color: "var(--violet-300)" }}
      >
        {icon}
      </span>
      <span className="whitespace-nowrap text-sm text-slate-300">{children}</span>
    </span>
  );
  return (
    <li>
      {href ? (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="group inline-block transition-colors [&_span.text-slate-300]:hover:text-white"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </li>
  );
}

// ---- Íconos (16px, stroke) -------------------------------------------------
function IconMail() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
function IconPhone() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function IconPin() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function IconWhatsApp() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}
function IconX() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function IconInstagram() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
