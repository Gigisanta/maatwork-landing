/**
 * OperationalField — global background. A living MaatWork control-room field on
 * solid ink: pulsing grid + slow conic prism mesh + drifting violet/gold/cyan
 * color orbits + multi-accent aurora + diagonal light beam + vertical scan.
 * Static, server component, decorative → aria-hidden. All MOTION is paused by
 * the prefers-reduced-motion block in globals.css; the COLOR stays (gradients
 * live in each layer's base background, only transforms animate).
 */
export function OperationalField() {
  return (
    <div className="bg-field" aria-hidden="true">
      <div className="field-prism" />
      <div className="field-orbit field-orbit--violet" />
      <div className="field-orbit field-orbit--gold" />
      <div className="field-orbit field-orbit--cyan" />
      <div className="field-aurora" />
      <div className="field-beam" />
      <div className="field-scan" />
    </div>
  );
}
