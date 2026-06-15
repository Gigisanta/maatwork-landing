/**
 * AnimatedBackground — capa de vida global detrás de toda la página.
 * Antes solo el hero tenía fondo animado (.aurora-field); el resto era plano.
 * Blobs violeta que se deforman + partículas que flotan hacia arriba, todo CSS
 * (transform/opacity, GPU). `fixed -z-10` sobre la base ink de <html>. Sin estado
 * ni JS → server component. Respeta prefers-reduced-motion (globals congela anim).
 * Decorativo puro → aria-hidden.
 */
const PARTICLES = Array.from({ length: 14 });

export function AnimatedBackground() {
  return (
    <div className="bg-field" aria-hidden="true">
      <span className="bg-blob bg-blob--1" />
      <span className="bg-blob bg-blob--2" />
      <span className="bg-blob bg-blob--3" />
      <span className="bg-blob bg-blob--4" />
      <div className="bg-particles">
        {PARTICLES.map((_, i) => (
          <span key={i} className="bg-particle" />
        ))}
      </div>
    </div>
  );
}
