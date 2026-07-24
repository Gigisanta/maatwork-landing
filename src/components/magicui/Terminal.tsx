"use client";

/**
 * Terminal — port CSS-first del componente de MagicUI (magicui.design/docs/
 * components/terminal) sin framer-motion: IntersectionObserver + timers.
 * Ventana estilo macOS (3 puntos), líneas de comando con tipeo real
 * (TypingAnimation) y outputs con fade secuencial (AnimatedSpan).
 * La animación corre UNA sola vez al entrar al viewport — disciplina de
 * movimiento del DS: el movimiento acá es información (el stack), no adorno.
 */
import { useEffect, useRef, useState } from "react";

export type TerminalLine =
  | { kind: "cmd"; text: string }
  | { kind: "ok"; text: string }
  | { kind: "info"; text: string }
  | { kind: "out"; text: string };

/**
 * useInViewOnce — IO cuando está disponible + fallback por scroll/resize con
 * getBoundingClientRect (algunos contextos embebidos no disparan IO; mismo
 * motivo por el que RevealOnScroll tiene su failsafe).
 */
function useInViewOnce<T extends HTMLElement>(ref: React.RefObject<T | null>) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;

    const check = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.8 && r.bottom > 0) setInView(true);
    };

    let io: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== "undefined") {
      io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) setInView(true);
        },
        { threshold: 0.2 },
      );
      io.observe(el);
    }
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check, { passive: true });
    // Chequeo inicial + polling liviano: cubre scroll por ancla previo a la
    // hidratación y contextos donde IO no dispara. Se corta solo al arrancar
    // (inView=true re-ejecuta el efecto y cae en el return temprano).
    const t = window.setTimeout(check, 60);
    const poll = window.setInterval(check, 400);

    return () => {
      io?.disconnect();
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
      window.clearTimeout(t);
      window.clearInterval(poll);
    };
  }, [ref, inView]);

  return inView;
}

const TYPE_SPEED_MS = 34; // por carácter (comandos)
const LINE_GAP_MS = 260; // pausa entre líneas

export function Terminal({
  title = "maatwork — zsh",
  lines,
  className = "",
}: {
  title?: string;
  lines: TerminalLine[];
  className?: string;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const started = useInViewOnce(rootRef);
  // visibleCount: líneas completas; typedChars: progreso de la línea actual
  const [visibleCount, setVisibleCount] = useState(0);
  const [typedChars, setTypedChars] = useState(0);

  // Secuenciador: tipea comandos char a char; outputs aparecen enteros
  useEffect(() => {
    if (!started || visibleCount >= lines.length) return;
    const line = lines[visibleCount];
    let t: ReturnType<typeof setTimeout>;

    if (line.kind === "cmd" && typedChars < line.text.length) {
      t = setTimeout(() => setTypedChars((c) => c + 1), TYPE_SPEED_MS);
    } else {
      t = setTimeout(() => {
        setVisibleCount((c) => c + 1);
        setTypedChars(0);
      }, line.kind === "cmd" ? 420 : LINE_GAP_MS);
    }
    return () => clearTimeout(t);
  }, [started, visibleCount, typedChars, lines]);

  const done = visibleCount >= lines.length;

  return (
    <div
      ref={rootRef}
      className={`overflow-hidden rounded-xl border border-white/[0.09] bg-[#0B0B0E] shadow-lg ${className}`}
    >
      {/* Chrome de ventana */}
      <div className="flex items-center gap-2 border-b border-white/[0.07] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-white/[0.14]" aria-hidden />
        <span className="h-3 w-3 rounded-full bg-white/[0.14]" aria-hidden />
        <span className="h-3 w-3 rounded-full bg-white/[0.14]" aria-hidden />
        <span className="ml-3 font-mono text-[11px] tracking-[0.04em] text-[var(--text-muted)]">
          {title}
        </span>
      </div>

      {/* Cuerpo */}
      <div className="min-h-[280px] p-4 font-mono text-[12.5px] leading-[1.9] sm:p-5 sm:text-[13px]" aria-live="off">
        {lines.slice(0, visibleCount + 1).map((line, i) => {
          const isCurrent = i === visibleCount;
          if (line.kind === "cmd") {
            const text = isCurrent ? line.text.slice(0, typedChars) : line.text;
            return (
              <div key={i} className="text-[var(--text-primary)]">
                <span className="select-none text-[var(--violet-400)]">❯ </span>
                {text}
                {isCurrent && !done && <Caret />}
              </div>
            );
          }
          if (isCurrent && typedChars === 0 && !done) return null;
          if (line.kind === "ok") {
            return (
              <div key={i} className="terminal-fade text-[var(--text-secondary)]">
                <span className="select-none text-[var(--success)]">✔ </span>
                {line.text}
              </div>
            );
          }
          if (line.kind === "info") {
            return (
              <div key={i} className="terminal-fade text-[var(--violet-300)]">
                <span className="select-none">● </span>
                {line.text}
              </div>
            );
          }
          return (
            <div key={i} className="terminal-fade text-[var(--text-tertiary)]">
              {line.text}
            </div>
          );
        })}
        {done && (
          <div className="text-[var(--text-primary)]">
            <span className="select-none text-[var(--violet-400)]">❯ </span>
            <Caret />
          </div>
        )}
      </div>
    </div>
  );
}

function Caret() {
  return (
    <span
      aria-hidden
      className="terminal-caret ml-0.5 inline-block h-[1.05em] w-[7px] translate-y-[2px] bg-[var(--text-primary)]"
    />
  );
}

/**
 * TypingAnimation — texto que se tipea char a char al entrar al viewport.
 * Mismo contrato que el de MagicUI (children string, duration por char).
 */
export function TypingAnimation({
  children,
  className = "",
  duration = 60,
  as: Tag = "span",
}: {
  children: string;
  className?: string;
  duration?: number;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useInViewOnce(ref);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started || count >= children.length) return;
    const t = setTimeout(() => setCount((c) => c + 1), duration);
    return () => clearTimeout(t);
  }, [started, count, children.length, duration]);

  const Comp = Tag as React.ElementType;
  return (
    // inline-block + min dims: un span vacío tiene rect de tamaño cero y el
    // chequeo de viewport jamás dispararía (huevo-y-gallina del tipeo).
    <Comp ref={ref} className={`inline-block min-h-[1em] min-w-[1px] ${className}`}>
      {children.slice(0, count)}
      {started && count < children.length && <Caret />}
    </Comp>
  );
}
