/**
 * OperationalField — global background. A restrained mission-control grid on
 * solid ink with one faint violet wash at the top (all in `.bg-field`, see
 * globals.css). No drifting blobs, no particles — operational, not decorative.
 * Static, server component, decorative → aria-hidden.
 */
export function OperationalField() {
  return <div className="bg-field" aria-hidden="true" />;
}
