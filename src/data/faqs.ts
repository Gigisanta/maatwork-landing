/**
 * Única fuente de verdad del FAQ. La usa el componente <FAQ> (visible) y el
 * JSON-LD FAQPage en layout.tsx (rich results de Google). Mantenerlas en sync
 * es requisito de Google: el structured data debe reflejar el contenido visible.
 */
export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "¿Cuánto tarda la implementación?",
    a: "Entre 5 y 10 días hábiles. La primera llamada es de 30 minutos, configuramos el sistema con tus datos y te dejamos operando. En la mayoría de los casos, la primera semana ya estás cobrando.",
  },
  {
    q: "¿Necesito tarjeta para probar?",
    a: "No. Los 7 días son gratis y no pedimos tarjeta. Si decidís continuar, ahí elegís cómo pagar: transferencia, Mercado Pago o tarjeta.",
  },
  {
    q: "¿Sirve para mi rubro?",
    a: "Está pensado para negocios con turnos, cobros recurrentes y clientes que atender: gimnasios, estudios de fitness, salones, barberías, academias y estética. Si trabajás así, te sirve.",
  },
  {
    q: "¿Puedo migrar desde otro sistema?",
    a: "Sí. Importamos tu base de clientes y turnos desde Excel, Google Sheets o cualquier sistema con el que vengas. Lo hacemos nosotros, no tenés que tocar nada.",
  },
  {
    q: "¿Qué pasa con mis datos?",
    a: "Tus datos son tuyos. Hacemos backups diarios automáticos y podés exportar todo cuando quieras, sin quedar atado a nosotros.",
  },
  {
    q: "¿Tienen app móvil?",
    a: "Sí, pero no forma parte del plan base. La app nativa para iOS y Android se cotiza como módulo avanzado según alcance, usuarios y flujos necesarios.",
  },
  {
    q: "¿Cómo es el soporte?",
    a: "Soporte en español por WhatsApp y mail. Te respondemos el mismo día hábil y, si tenés algo urgente, lo resolvemos al toque.",
  },
];
