/**
 * StaggeredText — reveal letter-by-letter del headline.
 * CSS-only: cada letra en <span> con animation-delay incremental.
 * Requiere clase `.letter-reveal` en el padre + span por letra.
 *
 * El reveal dispara con un IntersectionObserver externo (no aquí, porque
 * este componente es server-rendered). El padre debe tener `.letter-reveal`.
 */
type Props = {
  text: string;
  /** Tag a renderizar. Default h1 */
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  /** Stagger entre letras en ms. Default 28ms */
  stagger?: number;
  /** Delay base antes de la primera letra */
  startDelay?: number;
  /** Color de la última mitad del texto */
  accent?: string;
};

export function StaggeredText({
  text,
  as: Tag = "h1",
  className = "",
  stagger = 28,
  startDelay = 0,
  accent,
}: Props) {
  // Split on spaces preserving them. Each "word" gets one span.
  // The whole text becomes N spans; we use word-level (not char-level) reveal
  // for readability — letters look gimmicky on long words.
  const words = text.split(" ");
  // Find the index where accent starts (last half of text)
  const accentStart = accent ? Math.floor(words.length / 2) : -1;

  return (
    <Tag className={className}>
      <span className="letter-reveal">
        {words.map((word, i) => {
          const isAccent = accent && i >= accentStart;
          return (
            <span
              key={i}
              className={isAccent ? accent : undefined}
              style={{ animationDelay: `${startDelay + i * stagger}ms` }}
            >
              {word}
              {i < words.length - 1 ? "\u00A0" : ""}
            </span>
          );
        })}
      </span>
    </Tag>
  );
}
