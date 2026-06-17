/**
 * OperationalField — global background. A living mission-control field on solid
 * ink: pulsing grid + drifting multi-accent aurora (violet/cyan/gold/rose) + a
 * slow vertical scan beam (all in `.bg-field` & layer classes, see globals.css).
 * Static, server component, decorative → aria-hidden. All motion is paused by
 * the prefers-reduced-motion block in globals.css.
 */
export function OperationalField() {
  return (
    <div className="bg-field" aria-hidden="true">
      <div className="field-aurora" />
      <div className="field-scan" />
    </div>
  );
}
