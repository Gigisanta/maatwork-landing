/**
 * Blog. Contenido definitorio/TOFU para SEO y citabilidad en LLMs (GEO).
 * Consumido por /blog (índice) y /blog/[slug] (artículo + BlogPosting JSON-LD).
 * Honesto y verificable; sin métricas fabricadas.
 */
export type PostSection = { heading?: string; paras: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  date: string; // ISO
  excerpt: string;
  body: PostSection[];
};

export const POSTS: BlogPost[] = [
  {
    slug: "software-a-medida-vs-erp-generico",
    title: "Software a medida vs ERP genérico: cuál conviene para tu PyME",
    metaTitle: "Software a medida vs ERP genérico para PyMEs",
    metaDescription:
      "Diferencias entre un software a medida y un ERP genérico para una PyME argentina: costo, adaptación, tiempo y cuándo conviene cada uno.",
    date: "2026-06-19",
    excerpt:
      "Un ERP genérico te obliga a adaptar tu negocio al software. Un sistema a medida hace lo contrario. Cuándo conviene cada uno.",
    body: [
      {
        paras: [
          "Cuando una PyME crece y el Excel deja de alcanzar, aparecen dos caminos: comprar un ERP genérico o construir un software a medida. No hay una respuesta única, pero sí criterios claros para decidir.",
        ],
      },
      {
        heading: "Qué es un ERP genérico",
        paras: [
          "Un ERP genérico es un sistema empaquetado que sirve para muchas empresas a la vez. Su ventaja es que está listo y es más barato de entrada. Su desventaja: tu negocio tiene que adaptarse a cómo funciona el software, no al revés. Si tu operación tiene un proceso propio, terminás forzándolo dentro de un molde.",
        ],
      },
      {
        heading: "Qué es un software a medida",
        paras: [
          "Un software a medida se construye para tu operación real. Modela tu proceso tal como es, se integra con lo que ya usás (Mercado Pago, facturación ARCA/AFIP, tus planillas) y crece con vos. Tus datos son tuyos y exportables; la app queda licenciada para tu operación, mientras MaatWork conserva el código, el core y las herramientas reutilizables para sostener y mejorar el producto.",
        ],
      },
      {
        heading: "Cómo decidir",
        paras: [
          "Si tu proceso es estándar y no te diferencia de la competencia, un ERP genérico puede alcanzar. Si tu operación tiene particularidades que un sistema enlatado no contempla —o si ya las estás parchando con Excel y WhatsApp— el a medida deja de ser un lujo y pasa a ser lo más eficiente.",
          "Un camino intermedio es empezar con un producto base operativo listo para usar y sumar desarrollo a medida solo donde lo necesitás. Así no pagás un proyecto enorme de entrada y escalás con la operación.",
        ],
      },
    ],
  },
  {
    slug: "automatizar-cobros-y-whatsapp",
    title: "Cómo automatizar cobros y WhatsApp en tu negocio",
    metaTitle: "Cómo automatizar cobros y WhatsApp en tu negocio",
    metaDescription:
      "Guía práctica para automatizar cobros, recordatorios y atención por WhatsApp en una PyME: qué se puede automatizar y por dónde empezar.",
    date: "2026-06-19",
    excerpt:
      "Responder lo mismo por WhatsApp y perseguir cuotas a mano consume horas. Esto es lo que se puede automatizar y por dónde empezar.",
    body: [
      {
        paras: [
          "En Argentina, WhatsApp es el canal donde sucede gran parte de la operación: consultas, turnos, cobros. El problema es que casi todo se hace a mano. Automatizar esas tareas repetitivas libera horas y evita que se escapen ventas o cuotas.",
        ],
      },
      {
        heading: "Qué se puede automatizar",
        paras: [
          "Recordatorios de turno y de cuota antes del vencimiento. Confirmaciones automáticas de reservas. Respuestas a las preguntas más frecuentes. Links de pago enviados solos y conciliación de cobros. Reportes que se arman automáticamente en lugar de a mano.",
        ],
      },
      {
        heading: "Por dónde empezar",
        paras: [
          "Conviene arrancar por la tarea que más tiempo te come o más plata te hace perder. Para la mayoría de los negocios, eso es la cobranza: recordatorios automáticos de cuota y links de pago reducen la morosidad sin que nadie tenga que perseguir a nadie.",
          "El segundo foco suele ser la atención: un agente que responde las consultas repetidas 24/7 y deriva a una persona solo lo que lo amerita.",
        ],
      },
      {
        heading: "Construir vs solo conectar herramientas",
        paras: [
          "Muchas automatizaciones se arman conectando herramientas de terceros. Eso sirve para casos simples. Cuando la lógica es propia del negocio, conviene que la automatización viva sobre tu sistema, con tus datos y tus reglas adentro — no atada a la herramienta de moda.",
        ],
      },
    ],
  },
  {
    slug: "cuanto-cuesta-automatizar-procesos-argentina",
    title: "¿Cuánto cuesta automatizar procesos en Argentina?",
    metaTitle: "Cuánto cuesta automatizar procesos en Argentina (2026)",
    metaDescription:
      "Cómo se cobra la automatización de procesos en Argentina: modelo de setup inicial más abono mensual, qué define el precio y cómo estimar el retorno.",
    date: "2026-06-19",
    excerpt:
      "No hay un precio único: depende del alcance. Así se estructura el costo de automatizar y cómo pensar el retorno.",
    body: [
      {
        paras: [
          "La pregunta más común antes de automatizar es cuánto cuesta. No hay un número único porque depende de qué se automatiza y de la complejidad. Pero sí hay una forma estándar de estructurar el precio.",
        ],
      },
      {
        heading: "Setup inicial más abono",
        paras: [
          "La mayoría de los proyectos de automatización se cobran con un setup inicial —para construir la automatización— y, cuando requiere operación y mejora continua, un abono mensual. El setup depende del alcance: no es lo mismo un recordatorio automático que un agente de IA conectado a varios sistemas.",
          "En el caso de un sistema a medida completo, el costo se cotiza por proyecto, con pagos por etapas a medida que ves avances reales.",
        ],
      },
      {
        heading: "Qué define el precio",
        paras: [
          "Cuántos procesos se automatizan, qué tan complejas son las reglas, con cuántos sistemas hay que integrarse y si hace falta operación continua. Cuanto más claro y acotado el proceso, más rápido y barato de automatizar.",
        ],
      },
      {
        heading: "Cómo pensar el retorno",
        paras: [
          "La automatización se paga sola cuando recupera horas o plata. Un buen ejercicio: estimá cuántas horas por mes dedica tu equipo a la tarea, o cuánto perdés por cobranza que se escapa. Si la automatización cuesta menos que eso, el retorno es claro. En MaatWork cotizamos cada proyecto a medida según el alcance, con un diagnóstico gratis antes de avanzar y sin precios de lista.",
        ],
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}
