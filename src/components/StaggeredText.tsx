"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * StaggeredText — renderiza un string con cada letra animada con stagger.
 *
 * @example
 *   <StaggeredText text="Automatizá tu local." baseDelayMs={0} staggerMs={22} />
 *   <StaggeredText text="Sin complicaciones." baseDelayMs={500} staggerMs={22} className="text-purple-200" />
 *
 * La animación se activa al montar. Cada letra es un <span> con `animation-delay` incremental.
 * Respeta prefers-reduced-motion: si está activo, no aplica animación.
 */

type Props = {
  text: string;
  baseDelayMs?: number;
  staggerMs?: number;
  className?: string;
};

export function StaggeredText({
  text,
  baseDelayMs = 0,
  staggerMs = 22,
  className = "",
}: Props) {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // If reduced motion, just render plain text
  if (reduceMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={`letter-reveal ${className}`}>
      {text.split("").map((ch, i) => (
        <span
          key={i}
          style={{ animationDelay: `${baseDelayMs + i * staggerMs}ms` }}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  );
}

/* ================================================================
   Reveal — wrapper que aplica fade-up al entrar en viewport
   ================================================================ */

type RevealProps = {
  children: ReactNode;
  delayMs?: number;
  className?: string;
};

export function Reveal({ children, delayMs = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${visible ? "is-visible" : ""} reveal ${className}`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}
