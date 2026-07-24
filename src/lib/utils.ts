/**
 * cn — concatenación de clases mínima (sin clsx/tailwind-merge).
 * Suficiente para los ports de cult-ui/MagicUI que solo unen strings.
 */
export function cn(
  ...classes: Array<string | number | null | undefined | false>
): string {
  return classes.filter(Boolean).join(" ");
}
