"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

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
  const reduceMotion = usePrefersReducedMotion();

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
  const reduce = usePrefersReducedMotion();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduce]);

  const visible = reduce || inView;

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
