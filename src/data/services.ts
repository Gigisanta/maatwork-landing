/**
 * Páginas de servicio (pillar pages). Una entrada por servicio contratable.
 * Consumidas por /servicios (índice) y /servicios/[slug] (detalle + Service JSON-LD).
 * Contenido honesto: la prueba referencia productos reales en producción.
 */
export type ServicePage = {
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  forWhom: string;
  includes: string[];
  proof: string;
  faqs: { q: string; a: string }[];
  ctaMsg: string;
};

export const SERVICES: ServicePage[] = [
  {
    slug: "paginas-web",
    name: "Páginas web",
    h1: "Páginas web que cargan rápido y convierten",
    metaTitle: "Diseño y desarrollo de páginas web en Argentina",
    metaDescription:
      "Sitios y landings a medida en Next.js: rápidos, claros y pensados para convertir. Diseño, SEO técnico y puesta online. Estudio de software en Río Negro, Argentina.",
    intro:
      "Sitios y landings pensados para vender: rápidos, claros y fáciles de encontrar en Google. Diseñamos, desarrollamos y publicamos tu web con el mismo stack que usamos en esta página.",
    forWhom:
      "Para negocios que necesitan presencia online seria: una web que cargue rápido, explique bien lo que hacés y convierta visitas en consultas por WhatsApp.",
    includes: [
      "Landing o sitio institucional en Next.js",
      "Diseño a medida, sin plantillas genéricas",
      "SEO técnico y velocidad de carga",
      "Botón de WhatsApp y formulario de contacto",
      "Hosting, dominio y puesta online",
    ],
    proof:
      "Esta misma página es la prueba: la diseñamos y desarrollamos nosotros, con el mismo stack y el mismo cuidado que ponemos en los proyectos de clientes.",
    faqs: [
      {
        q: "¿Cuánto tarda una página web?",
        a: "Depende del alcance; lo estimamos en la primera llamada. Una landing típica sale en 2 a 4 semanas, con contenido y puesta online incluidos.",
      },
      {
        q: "¿La web queda en mi poder?",
        a: "Sí. El dominio es tuyo y la web queda operativa para tu negocio, con soporte local si querés seguir mejorándola.",
      },
    ],
    ctaMsg: "quiero una página web",
  },
  {
    slug: "desarrollo-a-medida",
    name: "Desarrollo de software a medida",
    h1: "Desarrollo de software a medida",
    metaTitle: "Desarrollo de software a medida en Argentina",
    metaDescription:
      "Construimos apps y sistemas a medida para tu negocio: web, multi-tenant, paneles y facturación. Ya en producción en natatorios, obras y seguridad. Estudio argentino.",
    intro:
      "Apps y sistemas construidos para tu operación real, no un molde genérico. Diseñamos, desarrollamos y ponemos en producción el software que tu negocio necesita.",
    forWhom:
      "Para negocios que crecieron y el Excel, las planillas o un sistema genérico ya no alcanzan. Si tu operación tiene un proceso propio, lo modelamos en software hecho para vos.",
    includes: [
      "Relevamiento y diseño de la solución con tu equipo",
      "Aplicaciones web full-stack (Next.js, base de datos, autenticación)",
      "Sistemas multi-tenant con roles y permisos (RBAC)",
      "Paneles de control, reportes y tableros operativos",
      "Puesta en producción, capacitación y soporte local",
    ],
    proof:
      "No es una promesa: ya construimos y operamos sistemas a medida en producción — gestión de natatorios, Infrannova (obras) y gestión de extintores. Cada uno es un negocio distinto resuelto con software propio.",
    faqs: [
      {
        q: "¿De quién es la app y los datos?",
        a: "Tus datos son tuyos y siempre exportables. La app queda licenciada para tu operación; MaatWork conserva el código, el core y las herramientas reutilizables para mantener y mejorar el producto.",
      },
      {
        q: "¿Cuánto tarda un desarrollo a medida?",
        a: "Depende del alcance. Lo estimamos en la primera llamada y trabajamos por etapas, con avances reales antes de cada pago.",
      },
      {
        q: "¿Cuánto cuesta?",
        a: "Se cotiza a medida según el alcance, con un diagnóstico gratis antes de avanzar. No manejamos precios de lista.",
      },
    ],
    ctaMsg: "quiero un desarrollo a medida",
  },
  {
    slug: "automatizaciones",
    name: "Automatizaciones e IA",
    h1: "Automatizaciones e inteligencia artificial",
    metaTitle: "Automatización de procesos e IA para empresas",
    metaDescription:
      "Automatizamos WhatsApp, cobros, reportes y tareas repetitivas. Agentes de IA que trabajan 24/7. Automatización de procesos para PyMEs en Argentina.",
    intro:
      "WhatsApp, cobros, reportes y tareas repetitivas que se hacen solos. Construimos automatizaciones y agentes de IA que trabajan por vos las 24 horas.",
    forWhom:
      "Para equipos que pierden horas en tareas manuales y repetitivas: responder lo mismo por WhatsApp, conciliar cobros, pasar datos de un lado a otro, armar reportes a mano.",
    includes: [
      "Automatización de atención y respuestas por WhatsApp",
      "Recordatorios, cobros y conciliación automáticos",
      "Agentes de IA conectados a tus sistemas y datos",
      "Reportes y tableros que se generan solos",
      "Flujos entre tus herramientas sin pasar datos a mano",
    ],
    proof:
      "Trabajamos sobre infraestructura propia, no solo conectando herramientas de terceros: construimos el sistema y además lo automatizamos, con la lógica de tu negocio adentro.",
    faqs: [
      {
        q: "¿Qué puedo automatizar?",
        a: "Atención por WhatsApp, recordatorios, cobros, generación de reportes, carga de datos entre sistemas y cualquier tarea repetitiva con reglas claras.",
      },
      {
        q: "¿Cómo se cobra?",
        a: "Un setup inicial para construir la automatización y, si requiere operación y mejora continua, un abono mensual. Todo a cotizar según el alcance.",
      },
    ],
    ctaMsg: "quiero automatizar mi negocio",
  },
  {
    slug: "integraciones",
    name: "Integraciones y facturación",
    h1: "Integraciones y facturación electrónica",
    metaTitle: "Integraciones de sistemas y facturación ARCA/AFIP",
    metaDescription:
      "Conectamos tus sistemas y facturás con ARCA/AFIP. Integración con Mercado Pago, Excel y las herramientas que ya usás. Estudio de software en Argentina.",
    intro:
      "Conectamos tus sistemas para que dejen de vivir aislados y facturás con ARCA/AFIP desde tu operación. Mercado Pago, planillas y las herramientas que ya usás, en un solo flujo.",
    forWhom:
      "Para negocios con datos repartidos entre varios sistemas que no se hablan, y que necesitan facturar en regla sin doble carga.",
    includes: [
      "Facturación electrónica integrada con ARCA/AFIP",
      "Integración con Mercado Pago y medios de cobro",
      "Conexión con tus planillas, Excel y sistemas actuales",
      "Sincronización de datos entre herramientas",
      "Migración de tu información actual sin que toques nada",
    ],
    proof:
      "La integración con ARCA/AFIP ya corre en nuestros productos (ArcaMaat en nuestro CRM; lógica bimonetaria y de obra en Infrannova). Es algo que tenemos resuelto, no un experimento.",
    faqs: [
      {
        q: "¿Funciona con Mercado Pago y ARCA/AFIP?",
        a: "Sí. Integramos cobros con Mercado Pago y facturación electrónica con ARCA/AFIP dentro de tu operación.",
      },
      {
        q: "¿Puedo migrar desde Excel u otro sistema?",
        a: "Sí. Importamos tu información desde Excel, Google Sheets o el sistema que uses. La migración la hacemos nosotros.",
      },
    ],
    ctaMsg: "quiero integrar y facturar con ARCA",
  },
  {
    slug: "producto-base",
    name: "Producto base operativo",
    h1: "Producto base operativo, listo para usar",
    metaTitle: "Software de gestión operativa para tu negocio",
    metaDescription:
      "Un sistema listo para operar desde el día uno: agenda, clientes, cobros y tablero de control. Se cotiza a medida. Implementación guiada y soporte local en Argentina.",
    intro:
      "Si querés empezar ya, el producto base te deja operando desde el día uno: agenda, clientes, cobros e inventario, con un tablero de control. Tu punto de entrada al estudio.",
    forWhom:
      "Para negocios que necesitan ordenar la operación rápido, sin un proyecto de meses. Después escalás a medida cuando haga falta.",
    includes: [
      "Gestión de clientes con ficha e historial",
      "Agenda y tareas operativas",
      "Cobros e inventario simple",
      "Panel de control con el estado del negocio",
      "Implementación guiada en 5 a 10 días hábiles",
    ],
    proof:
      "Es la misma base operativa que ya corre en nuestros productos. Empezás con lo esencial y sumás módulos a medida cuando los necesites.",
    faqs: [
      {
        q: "¿Cuánto cuesta?",
        a: "Se cotiza a medida según el alcance, facturado en pesos al tipo de cambio del día. No manejamos precios de lista.",
      },
      {
        q: "¿En cuánto tiempo lo tengo operando?",
        a: "Entre 5 y 10 días hábiles. Cargamos tus datos, lo configuramos y te dejamos operando con tu equipo capacitado.",
      },
    ],
    ctaMsg: "quiero arrancar con el producto base",
  },
];

export function getService(slug: string): ServicePage | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
