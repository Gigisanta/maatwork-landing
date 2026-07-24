/**
 * BorderBeam — haz de luz que recorre el borde de un contenedor (port
 * MagicUI/cult-ui). Se monta como overlay absoluto: el contenedor padre debe
 * ser `position: relative` y tener su propio `border-radius` (el beam hereda
 * el radio). Toda la animación vive en CSS (.beam-ring); acá solo se pasan las
 * variables de configuración. Con prefers-reduced-motion el beam se detiene y
 * queda un borde violeta estático (regla en globals.css).
 */
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type BorderBeamProps = {
  /** Largo del haz en px. */
  size?: number;
  /** Duración de una vuelta completa (segundos). */
  duration?: number;
  /** Desfase inicial (segundos) — útil para escalonar varias cards. */
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  className?: string;
};

export function BorderBeam({
  size = 120,
  duration = 8,
  delay = 0,
  colorFrom = "#7C5CFF",
  colorTo = "#B9A6FF",
  className,
}: BorderBeamProps) {
  return (
    <div
      aria-hidden
      className={cn("beam-ring", className)}
      style={
        {
          "--bb-size": size,
          "--bb-duration": duration,
          "--bb-delay": `-${delay}s`,
          "--bb-from": colorFrom,
          "--bb-to": colorTo,
        } as CSSProperties
      }
    />
  );
}
