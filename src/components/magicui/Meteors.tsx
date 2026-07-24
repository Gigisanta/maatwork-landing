"use client";

/**
 * Meteors — port del componente de MagicUI (magicui.design/docs/components/meteors):
 * estelas que caen en diagonal por el fondo de una sección. Sin dependencias
 * (igual que Safari/Terminal/AnimatedBeam del proyecto): la caída usa el keyframe
 * CSS `mw-meteor` de globals.css (rotación por --angle + translateX), y la
 * aleatoriedad (posición, delay, duración) se genera en un useEffect para no
 * romper la hidratación de React (el server no puede randomizar igual que el
 * cliente). Cada meteoro es un punto con una cola en degradado hacia transparente.
 * El bloque global de prefers-reduced-motion pausa la animación.
 */
import { useEffect, useState, type CSSProperties } from "react";

export interface MeteorsProps {
  /** Cantidad de meteoros. */
  number?: number;
  minDelay?: number;
  maxDelay?: number;
  minDuration?: number;
  maxDuration?: number;
  /** Ángulo de caída en grados (215 = diagonal ↙, como el original). */
  angle?: number;
  /** Color del meteoro y su cola. */
  color?: string;
}

export function Meteors({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 3,
  maxDuration = 9,
  angle = 215,
  color = "rgba(124, 92, 255, 0.5)",
}: MeteorsProps) {
  const [styles, setStyles] = useState<CSSProperties[]>([]);

  useEffect(() => {
    const next = Array.from({ length: number }, () => ({
      "--angle": `${-angle}deg`,
      top: "-2%",
      left: `${Math.floor(Math.random() * 100)}%`,
      animationDelay: `${(Math.random() * (maxDelay - minDelay) + minDelay).toFixed(2)}s`,
      animationDuration: `${Math.floor(Math.random() * (maxDuration - minDuration) + minDuration)}s`,
    })) as CSSProperties[];
    setStyles(next);
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle]);

  return (
    <>
      {styles.map((style, idx) => (
        <span
          key={idx}
          aria-hidden
          className="pointer-events-none absolute h-0.5 w-0.5 rounded-full"
          style={{
            ...style,
            background: color,
            // Antes de que arranque su delay, el meteoro es invisible.
            opacity: 0,
            animationName: "mw-meteor",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
        >
          <span
            className="pointer-events-none absolute top-1/2 h-px w-[60px] -translate-y-1/2"
            style={{ background: `linear-gradient(to right, ${color}, transparent)` }}
          />
        </span>
      ))}
    </>
  );
}
