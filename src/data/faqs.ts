/**
 * Única fuente de verdad del FAQ. La usa el componente <FAQ> (visible) y el
 * JSON-LD FAQPage en layout.tsx (rich results de Google). Mantenerlas en sync
 * es requisito de Google: el structured data debe reflejar el contenido visible.
 */
export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "¿Cuánto cuesta?",
    a: "Arranca desde USD 100/mes para el producto base, más un setup inicial según el alcance. El desarrollo a medida, las automatizaciones y las integraciones se cotizan según lo que tu negocio necesita. Facturamos en pesos al tipo de cambio del día.",
  },
  {
    q: "¿Cuánto tarda?",
    a: "Depende del alcance. El producto base te deja operando en 5 a 10 días hábiles. Un desarrollo a medida o una automatización los estimamos en la primera llamada, según lo que necesites.",
  },
  {
    q: "¿De quién es la app y los datos?",
    a: "Tus datos son tuyos y siempre exportables. La app queda licenciada para tu operación; MaatWork conserva el código, el core y las herramientas reutilizables. No te dejamos atado: podés exportar tus datos cuando quieras y hacemos backups automáticos.",
  },
  {
    q: "¿Sirve para mi rubro?",
    a: "Sí. Construimos a medida para cualquier negocio: ya tenemos sistemas en producción para natatorios, gestión comercial, obras y seguridad contra incendios. Si tu operación tiene un proceso, lo podemos ordenar y automatizar.",
  },
  {
    q: "¿Puedo migrar desde otro sistema?",
    a: "Sí. Importamos tu base de clientes y datos desde Excel, Google Sheets o el sistema que uses. Lo hacemos nosotros, no tenés que tocar nada.",
  },
  {
    q: "¿Hay permanencia o contrato?",
    a: "No te atamos con permanencia. El producto base es mes a mes; los proyectos a medida se pactan por proyecto, con pagos por etapas a medida que ves avances.",
  },
  {
    q: "¿Y si no me convence?",
    a: "Antes de que firmes nada te mostramos el sistema funcionando. En proyectos a medida trabajamos por etapas, así ves resultados reales antes de seguir avanzando.",
  },
  {
    q: "¿Cómo es el soporte?",
    a: "Soporte en español por WhatsApp y mail. Te respondemos el mismo día hábil y, si tenés algo urgente, lo resolvemos al toque.",
  },
];
