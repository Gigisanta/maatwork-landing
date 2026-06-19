import { waLink } from "@/lib/whatsapp";

/**
 * Link para agendar un diagnóstico. Si el owner configura una agenda real
 * (`NEXT_PUBLIC_CALCOM_URL`, ej. Cal.com), se usa esa; si no, cae a WhatsApp
 * con el mensaje pre-cargado. Así el CTA funciona desde ya y se cambia por la
 * agenda con una sola variable de entorno, sin tocar componentes.
 */
export const CALCOM_URL = process.env.NEXT_PUBLIC_CALCOM_URL ?? "";

export function bookingLink(): string {
  return CALCOM_URL || waLink("Hola MaatWork, quiero agendar un diagnóstico de 30 minutos");
}
