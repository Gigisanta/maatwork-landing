"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { waLink } from "@/lib/whatsapp";
import { Logo } from "./Logo";

const links = [
  { href: "/servicios", id: "servicios", label: "Servicios" },
  { href: "/soluciones", id: "ecosistema", label: "Soluciones" },
  { href: "/precios", id: "precios", label: "Precios" },
  { href: "/casos", id: "faq", label: "Casos" },
];

const DEMO = waLink("Hola MaatWork, quiero contarles un proyecto");
const TALK = waLink("Hola MaatWork, quiero hablar con el equipo");

const NAV_ITEMS = [
  { href: "/servicios", label: "Servicios", desc: "Software y automatización a medida" },
  { href: "/soluciones", label: "Soluciones", desc: "Productos por industria" },
  { href: "/precios", label: "Precios", desc: "Desde USD 100/mes" },
  { href: "/casos", label: "Casos", desc: "Proyectos en producción" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const scrolledRef = useRef(false);
  const activeIdRef = useRef("");
  const toggleRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const [mount, setMount] = useState(false);
  const [animIn, setAnimIn] = useState(false);

  // Header bg on scroll + scroll-spy by position
  useEffect(() => {
    let raf = 0;
    const measure = () => {
      raf = 0;
      const nextScrolled = window.scrollY > 12;
      if (nextScrolled !== scrolledRef.current) {
        scrolledRef.current = nextScrolled;
        setScrolled(nextScrolled);
      }
      const refLine = window.innerHeight * 0.3;
      let current = "";
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= refLine) current = l.id;
      }
      if (current !== activeIdRef.current) {
        activeIdRef.current = current;
        setActiveId(current);
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Animate menu open/close with delay for mount
  useEffect(() => {
    if (open) {
      setMount(true);
      requestAnimationFrame(() => requestAnimationFrame(() => setAnimIn(true)));
    } else {
      setAnimIn(false);
      const t = setTimeout(() => setMount(false), 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  // Modal a11y: move focus into the dialog, trap Tab inside it, close on Escape.
  useEffect(() => {
    if (!open) return;
    const focusables = () =>
      Array.from(
        dialogRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? [],
      );
    focusables()[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key === "Tab") {
        const items = focusables();
        if (items.length === 0) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open ? "glass-subtle border-b border-white/[0.06]" : "bg-transparent",
      ].join(" ")}
    >
      <nav className="container-maat flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="MaatWork inicio" onClick={() => setOpen(false)}>
          <Logo size={30} />
        </Link>

        <ul className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {links.map((l) => {
            const isActive = activeId === l.id;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`group relative transition-colors ${isActive ? "text-white" : "hover:text-white"}`}
                >
                  {l.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-violet-400 transition-all ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={DEMO}
            className="cta-violet hidden h-10 items-center rounded-full px-5 text-sm font-semibold text-white hover-scale md:inline-flex"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contanos tu proyecto
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-white transition md:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-haspopup="dialog"
            onClick={() => setOpen((v) => !v)}
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </nav>

      {/* ---- Mobile menu overlay con slide-in + backdrop ---- */}
      {mount && (
        <div className="md:hidden">
          {/* Scrim — backdrop semitransparente */}
          <div
            aria-hidden
            className={`fixed inset-0 z-40 transition-opacity duration-300 ${
              animIn ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            style={{ background: "rgba(0,0,0,0.68)" }}
            onClick={() => setOpen(false)}
          />

          {/* Panel — glass drawer */}
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
            className={`fixed inset-y-0 right-0 z-50 w-[85vw] max-w-[340px] border-l border-white/[0.06] transition-all duration-300 ease-out ${
              animIn ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
            }`}
            style={{ background: "rgba(15,15,24,0.97)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
          >
            <div className="flex h-full flex-col px-6 pb-8 pt-20">
              {/* Close button */}
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition hover:bg-white/[0.06] hover:text-white"
                aria-label="Cerrar menú"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </svg>
              </button>

              {/* Nav links */}
              <nav className="flex flex-col gap-2">
                {NAV_ITEMS.map((item, i) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`group flex items-center justify-between rounded-xl border border-white/[0.06] px-5 py-4 transition-all duration-300 ${
                      animIn
                        ? "translate-x-0 opacity-100"
                        : "translate-x-6 opacity-0"
                    } ${i > 0 ? "transition-delay-50" : ""}`}
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      transitionDelay: animIn ? `${i * 50}ms` : "0ms",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(131,93,245,0.08)";
                      e.currentTarget.style.borderColor = "rgba(131,93,245,0.25)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                    }}
                  >
                    <div>
                      <div className="font-display text-[17px] font-bold tracking-[-0.01em] text-white">
                        {item.label}
                      </div>
                      <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.08em] text-slate-500">
                        {item.desc}
                      </div>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-slate-500 transition group-hover:translate-x-0.5 group-hover:text-violet-400" aria-hidden>
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                ))}
              </nav>

              {/* CTA section */}
              <div className="mt-auto space-y-3 border-t border-white/[0.06] pt-6">
                <a
                  href={DEMO}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className={`cta-violet flex h-12 w-full items-center justify-center gap-2 rounded-full text-[15px] font-semibold text-white transition-all duration-300 ${
                    animIn ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
                  }`}
                  style={{ transitionDelay: animIn ? "250ms" : "0ms" }}
                >
                  Contanos tu proyecto
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
                <a
                  href={TALK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className={`cta-whatsapp flex h-12 w-full items-center justify-center gap-2 rounded-full text-[15px] font-semibold text-black transition-all duration-300 ${
                    animIn ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
                  }`}
                  style={{ transitionDelay: animIn ? "320ms" : "0ms" }}
                >
                  <WhatsAppIcon />
                  Hablar con MaatWork
                </a>
                <p className="text-center font-mono text-[10px] uppercase tracking-[0.1em] text-slate-600">
                  Desde USD 100/mes · 4 productos en producción · soporte directo
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      {open ? (
        <>
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="6" y1="18" x2="18" y2="6" />
        </>
      ) : (
        <>
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="17" x2="20" y2="17" />
        </>
      )}
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}
