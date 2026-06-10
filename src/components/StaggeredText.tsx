"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * StaggeredText — V6 line reveal.
 *
 * Historical name preserved to avoid touching all imports, but the behavior is
 * intentionally changed from letter-by-letter reveal to a single line reveal.
 * This is more editorial, avoids screen-reader fragmentation, and prevents the
 * headline from feeling like a gimmicky Lottie placeholder.
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

  return (
    <span
      className={`${reduceMotion ? "" : "line-reveal"} ${className}`}
      style={reduceMotion ? undefined : { animationDelay: `${baseDelayMs}ms` }}
    >
      {text}
    </span>
  );
}

/* ================================================================
   Reveal — wrapper that applies fade-up when entering viewport
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
