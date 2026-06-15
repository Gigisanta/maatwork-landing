// Única fuente de verdad del WhatsApp de MaatWork.
// ⚠️ PLACEHOLDER: 5491100000000 NO es un número real. Reemplazar por el de
// producción acá y todos los CTA del sitio quedan apuntando bien de una.
// ponytail: centralizado a propósito — el número cambia en 1 solo lugar.
export const WHATSAPP_NUMBER = "5491100000000";

/** Link wa.me con texto pre-cargado (se codifica solo). */
export function waLink(text = "Hola MaatWork ✋"): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
