"use client";

/**
 * CanvasFractalGrid — port del componente de cult-ui
 * (cult-ui.com/docs/components/canvas-fractal-grid): retícula de puntos en
 * <canvas> con efecto de onda que sigue al mouse + gradiente suave de fondo +
 * grano (feTurbulence). Sin dependencias (el original usa motion/react): el
 * seguimiento del mouse se suaviza con lerp dentro del mismo rAF loop y el
 * gradiente respira con un keyframe CSS inline. Tematizado claro (puntos
 * violeta sobre lienzo claro). Respeta prefers-reduced-motion: sin onda ni
 * animación, solo la retícula estática.
 */
import { useEffect, useRef } from "react";

export interface CanvasFractalGridProps {
  dotSize?: number;
  dotSpacing?: number;
  dotOpacity?: number;
  waveIntensity?: number;
  waveRadius?: number;
  /** Color base de los puntos (rgb sin alpha). */
  dotRGB?: string;
  enableNoise?: boolean;
  noiseOpacity?: number;
  className?: string;
  /** Fondo global fijo (position: fixed) que cubre todo el viewport. */
  fixed?: boolean;
}

export function CanvasFractalGrid({
  dotSize = 2,
  dotSpacing = 26,
  dotOpacity = 0.28,
  waveIntensity = 14,
  waveRadius = 210,
  dotRGB = "124, 92, 255",
  enableNoise = true,
  noiseOpacity = 0.04,
  className = "",
  fixed = false,
}: CanvasFractalGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    // Mouse en coords normalizadas; target sigue al cursor, pos lo persigue (lerp).
    const target = { x: 0.5, y: 0.35 };
    const pos = { x: 0.5, y: 0.35 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(canvas.clientWidth * dpr);
      canvas.height = Math.floor(canvas.clientHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time: number) => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);

      // Persecución suave del cursor (reemplaza el spring de motion/react)
      pos.x += (target.x - pos.x) * 0.06;
      pos.y += (target.y - pos.y) * 0.06;
      const centerX = pos.x * w;
      const centerY = pos.y * h;

      const cols = Math.ceil(w / dotSpacing) + 1;
      const rows = Math.ceil(h / dotSpacing) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * dotSpacing;
          const y = j * dotSpacing;

          let dotX = x;
          let dotY = y;
          let alpha = dotOpacity;
          let size = dotSize;

          if (!reduced) {
            const dx = x - centerX;
            const dy = y - centerY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < waveRadius) {
              // Misma fórmula de onda del original (sin/atan2 + falloff²)
              const strength = Math.pow(1 - distance / waveRadius, 2);
              const angle = Math.atan2(dy, dx);
              const offset = Math.sin(distance * 0.05 - time * 0.005) * waveIntensity * strength;
              dotX += Math.cos(angle) * offset;
              dotY += Math.sin(angle) * offset;
              alpha = Math.min(1, dotOpacity * (1 + strength * 1.6));
              size = dotSize * (1 + strength * 0.8);
            }
          }

          ctx.fillStyle = `rgba(${dotRGB}, ${alpha})`;
          ctx.beginPath();
          ctx.arc(dotX, dotY, size / 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (!reduced) raf = requestAnimationFrame(draw);
    };

    const onMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      target.x = (e.clientX - rect.left) / rect.width;
      target.y = (e.clientY - rect.top) / rect.height;
    };

    resize();
    if (reduced) {
      draw(0); // un frame estático
    } else {
      raf = requestAnimationFrame(draw);
      window.addEventListener("mousemove", onMouse, { passive: true });
    }
    window.addEventListener("resize", resize, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", resize);
    };
  }, [dotSize, dotSpacing, dotOpacity, waveIntensity, waveRadius, dotRGB]);

  return (
    <div
      className={`pointer-events-none overflow-hidden ${fixed ? "fixed inset-0" : "absolute inset-0"} ${className}`}
      aria-hidden
    >
      {/* Gradiente suave que respira (reemplaza el motion.div del original) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(52% 44% at 50% 12%, rgba(124,92,255,0.10) 0%, rgba(124,92,255,0.04) 48%, transparent 78%)",
          animation: "mw-fractal-breathe 14s ease-in-out infinite alternate",
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      {enableNoise && (
        <div className="absolute inset-0 mix-blend-overlay" style={{ opacity: noiseOpacity }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <filter id="mw-fractal-noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#mw-fractal-noise)" />
          </svg>
        </div>
      )}
    </div>
  );
}
