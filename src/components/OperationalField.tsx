/**
 * OperationalField — global background. Static base gradients + ONE
 * slow-moving aurora layer. No filter:blur, no mix-blend-mode, no
 * scan beam. All motion paused by prefers-reduced-motion.
 */
export function OperationalField() {
  return (
    <div className="bg-field" aria-hidden="true">
      <div className="bg-field-aurora" />
    </div>
  );
}
