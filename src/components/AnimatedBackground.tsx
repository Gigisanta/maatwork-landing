/**
 * AnimatedBackground — capa de vida global detrás de toda la página.
 * Blobs violeta que se deforman lentamente, todo CSS (transform/opacity, GPU).
 * `fixed -z-10` sobre la base ink de <html>. Sin estado ni JS → server component.
 * Respeta prefers-reduced-motion (globals congela la animación). Decorativo → aria-hidden.
 * DS: superficies sólidas, un acento violeta dominante, sin partículas genéricas.
 */
export function AnimatedBackground() {
  return (
    <div className="bg-field" aria-hidden="true">
      <span className="bg-blob bg-blob--1" />
      <span className="bg-blob bg-blob--2" />
      <span className="bg-blob bg-blob--3" />
      <span className="bg-blob bg-blob--4" />
    </div>
  );
}
