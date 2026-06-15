// Única fuente de verdad del WhatsApp de MaatWork.
// Formato wa.me Argentina: 54 + 9 + área + número (sin 0 ni 15). Acá: 299 456-9840.
// ponytail: centralizado a propósito — el número cambia en 1 solo lugar.
export const WHATSAPP_NUMBER = "5492994569840";

/** Link wa.me con texto pre-cargado (se codifica solo). */
export function waLink(text = "Hola MaatWork ✋"): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
