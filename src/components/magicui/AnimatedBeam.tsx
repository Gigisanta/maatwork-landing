"use client";

/**
 * AnimatedBeam — port del componente de MagicUI (magicui.design/docs/components/animated-beam):
 * dibuja un haz de luz que viaja por un path curvo entre dos nodos (fromRef → toRef),
 * calculado contra un contenedor con getBoundingClientRect + ResizeObserver.
 *
 * A diferencia del original (que anima el gradiente con `motion/react`), este port es
 * SIN dependencias — igual que Safari/Terminal del proyecto. El haz se logra con un
 * dash corto que "viaja" por el path vía animación CSS (`stroke-dashoffset`, keyframe
 * `mw-beam-travel` en globals.css). Elegido sobre SMIL porque el reloj SMIL no corre
 * en algunos motores/headless; CSS es lo que ya usa todo el sitio y respeta el bloque
 * global de `prefers-reduced-motion`. El color viene de un gradiente estático a lo
 * largo del path (start → stop).
 */
import { useEffect, useId, useState, type RefObject } from "react";

export interface AnimatedBeamProps {
  className?: string;
  containerRef: RefObject<HTMLElement | null>;
  fromRef: RefObject<HTMLElement | null>;
  toRef: RefObject<HTMLElement | null>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
}

export function AnimatedBeam({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = 5,
  delay = 0,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#ffaa40",
  gradientStopColor = "#9c40ff",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
}: AnimatedBeamProps) {
  const id = useId();
  const [pathD, setPathD] = useState("");
  const [dims, setDims] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updatePath = () => {
      if (!containerRef.current || !fromRef.current || !toRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const rectA = fromRef.current.getBoundingClientRect();
      const rectB = toRef.current.getBoundingClientRect();

      setDims({ width: containerRect.width, height: containerRect.height });

      const startX = rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
      const startY = rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
      const endX = rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
      const endY = rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

      const controlY = startY - curvature;
      setPathD(`M ${startX},${startY} Q ${(startX + endX) / 2},${controlY} ${endX},${endY}`);
    };

    const ro = new ResizeObserver(updatePath);
    if (containerRef.current) ro.observe(containerRef.current);
    updatePath();
    window.addEventListener("resize", updatePath, { passive: true });
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updatePath);
    };
  }, [containerRef, fromRef, toRef, curvature, startXOffset, startYOffset, endXOffset, endYOffset]);

  return (
    <svg
      fill="none"
      width={dims.width}
      height={dims.height}
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none absolute left-0 top-0 transform-gpu ${className ?? ""}`}
      viewBox={`0 0 ${dims.width} ${dims.height}`}
    >
      {/* Path base (tenue) */}
      <path d={pathD} stroke={pathColor} strokeWidth={pathWidth} strokeOpacity={pathOpacity} strokeLinecap="round" />
      {/* Haz: dash corto que viaja por el path (pathLength normalizado a 1) */}
      <path
        d={pathD}
        pathLength={1}
        strokeWidth={pathWidth}
        stroke={`url(#${id})`}
        strokeOpacity="1"
        strokeLinecap="round"
        style={{
          strokeDasharray: "0.16 0.84",
          strokeDashoffset: 1,
          animation: `mw-beam-travel ${duration}s linear ${delay}s infinite`,
          animationDirection: reverse ? "reverse" : "normal",
          filter: `drop-shadow(0 0 3px ${gradientStopColor})`,
        }}
      />
      <defs>
        {/* Gradiente estático a lo largo del path (color del haz) */}
        <linearGradient id={id} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={dims.width} y2="0">
          <stop stopColor={gradientStartColor} />
          <stop offset="100%" stopColor={gradientStopColor} />
        </linearGradient>
      </defs>
    </svg>
  );
}
