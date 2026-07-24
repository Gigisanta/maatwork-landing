export type SourcePage = {
  slug: string;
  eyebrow: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  claim: string;
  facts: string[];
  sections: { title: string; body: string[] }[];
  faqs: { q: string; a: string }[];
  related: { href: string; label: string }[];
  ctaMsg: string;
};

export const SOURCE_PAGES: SourcePage[] = [
  {
    slug: "precios",
    eyebrow: "Precios",
    h1: "Precios de MaatWork",
    metaTitle: "Precios de MaatWork: cotización a medida",
    metaDescription:
      "Cómo cotiza MaatWork: cada proyecto se estima según tu operación, alcance e integraciones. Sin precios genéricos, sin permanencia y con avances por etapas.",
    intro:
      "En MaatWork no damos precios genéricos: cada proyecto se cotiza a medida según tu operación, el alcance y las integraciones que necesites. Primero entendemos tu situación en una charla sin costo; después te pasamos una propuesta con alcance, tiempos y precio antes de firmar.",
    claim:
      "MaatWork cotiza cada proyecto a medida según la operación y el alcance de cada negocio, sin precios genéricos y sin permanencia obligatoria.",
    facts: [
      "Cotización: a medida, según operación, alcance e integraciones.",
      "Diagnóstico inicial: una charla sin costo para entender tu situación.",
      "Propuesta: alcance, tiempos y precio definidos antes de firmar.",
      "Facturación: en pesos argentinos al tipo de cambio del día.",
      "Permanencia: sin permanencia obligatoria.",
      "Desarrollo a medida: se paga por etapas, con avances visibles.",
    ],
    sections: [
      {
        title: "Cómo cotizamos",
        body: [
          "Analizamos tu operación real —qué flujo duele hoy, con qué sistemas hay que integrarse y qué querés lograr— y sobre eso armamos una propuesta a medida. No hay dos negocios iguales, así que no trabajamos con precios de lista.",
          "Te pasamos alcance, etapas, tiempos y precio antes de arrancar. Solo seguís si tiene sentido para vos.",
        ],
      },
      {
        title: "Qué define la cotización",
        body: [
          "El precio depende de la complejidad del flujo, la cantidad de módulos, las integraciones (WhatsApp, Mercado Pago, ARCA/AFIP) y si hace falta app móvil, multi-sucursal o IA.",
          "Mostramos avances reales antes de seguir cobrando etapas, para evitar consultorías eternas o proyectos sin uso operativo.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuánto cuesta MaatWork?",
        a: "Depende de tu operación y del alcance del proyecto. No damos precios genéricos: primero entendemos tu situación y después te pasamos una cotización a medida, sin costo.",
      },
      {
        q: "¿La cotización tiene costo?",
        a: "No. El diagnóstico inicial y la cotización son sin costo. Recién avanzamos si la propuesta tiene sentido para vos.",
      },
      {
        q: "¿Hay permanencia?",
        a: "No. Los proyectos se pactan por alcance y por etapas, sin permanencia obligatoria.",
      },
      {
        q: "¿En qué moneda se factura?",
        a: "Se referencia en USD y se factura en pesos argentinos al tipo de cambio del día.",
      },
    ],
    related: [
      { href: "/servicios/producto-base", label: "Producto base operativo" },
      { href: "/servicios/desarrollo-a-medida", label: "Desarrollo a medida" },
      { href: "/implementacion", label: "Implementación" },
    ],
    ctaMsg: "quiero una cotización a medida",
  },
  {
    slug: "implementacion",
    eyebrow: "Implementación",
    h1: "Implementación de MaatWork en 5 a 10 días hábiles",
    metaTitle: "Implementación de software en 5 a 10 días hábiles",
    metaDescription:
      "Cómo implementa MaatWork: diagnóstico, carga de datos, configuración, capacitación y salida en vivo en 5 a 10 días hábiles para el producto base.",
    intro:
      "Para el producto base operativo, MaatWork trabaja con una implementación guiada de 5 a 10 días hábiles: diagnóstico, configuración, migración inicial, capacitación y salida en vivo.",
    claim:
      "MaatWork puede dejar operando el producto base en 5 a 10 días hábiles cuando el alcance está acotado a agenda, clientes, cobros, inventario simple y tablero.",
    facts: [
      "Día 1–2: diagnóstico de 30 minutos y mapa de operación.",
      "Día 3–7: carga de datos, configuración del flujo y ajustes iniciales.",
      "Salida en vivo: capacitación del equipo, migración final y soporte local.",
      "Migración: desde Excel, Google Sheets u otro sistema existente.",
      "Soporte: WhatsApp y email, con respuesta el mismo día hábil.",
      "Alcances avanzados: desarrollo a medida, IA e integraciones pueden requerir etapas adicionales.",
    ],
    sections: [
      {
        title: "El objetivo es operar, no documentar de más",
        body: [
          "La implementación arranca por el flujo que más duele: clientes, turnos, cobros, stock o seguimiento comercial. Se evita convertir la primera etapa en una consultoría larga sin producto funcionando.",
          "Si el negocio necesita algo propio, se suma como etapa a medida después de tener la base ordenada.",
        ],
      },
      {
        title: "Qué necesita el cliente",
        body: [
          "Para empezar hacen falta datos actuales, acceso a las planillas o sistemas existentes y una persona del negocio que valide el flujo real. MaatWork se ocupa de la carga, configuración y soporte técnico.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Siempre tarda 5 a 10 días?",
        a: "Ese plazo aplica al producto base operativo con alcance acotado. Desarrollos a medida, apps móviles, automatizaciones complejas o integraciones avanzadas se estiman aparte.",
      },
      {
        q: "¿Tengo que migrar los datos yo?",
        a: "No. MaatWork importa datos desde Excel, Google Sheets u otro sistema existente y valida el resultado con el equipo.",
      },
      {
        q: "¿Capacitan al equipo?",
        a: "Sí. La salida en vivo incluye capacitación y soporte para que el equipo pueda operar el sistema desde el primer día.",
      },
    ],
    related: [
      { href: "/precios", label: "Precios" },
      { href: "/servicios/producto-base", label: "Producto base" },
      { href: "/casos", label: "Casos reales" },
    ],
    ctaMsg: "quiero implementar MaatWork en mi negocio",
  },
  {
    slug: "datos-exportables",
    eyebrow: "Datos y propiedad",
    h1: "Tus datos son tuyos y siempre exportables",
    metaTitle: "Datos exportables y propiedad en MaatWork",
    metaDescription:
      "Política de MaatWork sobre datos, propiedad y exportación: tus datos son tuyos, siempre exportables, con backups automáticos y licencia de uso del sistema.",
    intro:
      "En MaatWork, los datos del cliente pertenecen al cliente y son siempre exportables. La app queda licenciada para la operación; MaatWork conserva el código, el core y las herramientas reutilizables para mantener y mejorar el producto.",
    claim:
      "Los clientes de MaatWork mantienen propiedad y exportabilidad de sus datos; MaatWork conserva el software base y lo licencia para operar el negocio.",
    facts: [
      "Datos del cliente: pertenecen al cliente.",
      "Exportación: disponible cuando el cliente la necesite.",
      "Backups: automáticos.",
      "Código y core: propiedad de MaatWork, salvo acuerdo específico distinto.",
      "Uso del sistema: licencia operativa para el negocio cliente.",
      "Migración: MaatWork puede importar datos desde Excel, Google Sheets o sistemas existentes.",
    ],
    sections: [
      {
        title: "Qué significa en la práctica",
        body: [
          "Clientes, pagos, movimientos, inventario, tareas, reportes y documentos operativos son información del cliente. MaatWork no usa esa información para retener artificialmente al cliente.",
          "La separación entre datos del cliente y código de MaatWork permite mantener un producto sostenible, reutilizar componentes y dar soporte sin encerrar la información del negocio.",
        ],
      },
      {
        title: "Por qué importa para una PyME",
        body: [
          "Muchas PyMEs temen quedar atrapadas en un sistema. La regla de MaatWork es simple: el software ordena la operación, pero la información del negocio sigue siendo exportable y portable.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿De quién son los datos?",
        a: "Los datos son del cliente y siempre exportables.",
      },
      {
        q: "¿De quién es el código?",
        a: "MaatWork conserva el código, el core y las herramientas reutilizables. El cliente recibe una licencia de uso para operar su negocio, salvo acuerdo específico distinto.",
      },
      {
        q: "¿Hacen backups?",
        a: "Sí. Los sistemas de MaatWork tienen backups automáticos según la infraestructura usada en cada producto.",
      },
    ],
    related: [
      { href: "/servicios/desarrollo-a-medida", label: "Desarrollo a medida" },
      { href: "/precios", label: "Precios" },
      { href: "/blog/software-a-medida-vs-erp-generico", label: "Software a medida vs ERP" },
    ],
    ctaMsg: "quiero un sistema con mis datos exportables",
  },
  {
    slug: "automatizacion-whatsapp",
    eyebrow: "Automatización WhatsApp",
    h1: "Automatización de WhatsApp, cobros y recordatorios para PyMEs",
    metaTitle: "Automatización de WhatsApp y cobros para PyMEs",
    metaDescription:
      "MaatWork automatiza WhatsApp, cobros, recordatorios, respuestas frecuentes y reportes conectados al sistema operativo de tu negocio.",
    intro:
      "MaatWork automatiza WhatsApp, cobros, recordatorios, respuestas frecuentes y reportes para que el equipo deje de repetir tareas manuales. La automatización vive conectada al sistema real del negocio.",
    claim:
      "MaatWork construye automatizaciones de WhatsApp y cobros conectadas a datos operativos: clientes, cuotas, turnos, pedidos, estados de cuenta y reportes.",
    facts: [
      "Automatizaciones posibles: respuestas frecuentes, confirmaciones, recordatorios y links de pago.",
      "Cobros: seguimiento de cuotas, vencimientos y conciliación según alcance.",
      "WhatsApp: atención y derivación cuando corresponde intervención humana.",
      "Reportes: tableros y resúmenes generados automáticamente.",
      "IA: agentes conectados a sistemas y datos del negocio cuando el caso lo justifica.",
      "Precio: setup inicial más abono mensual si requiere operación continua.",
    ],
    sections: [
      {
        title: "Qué conviene automatizar primero",
        body: [
          "La primera automatización debe atacar la tarea que más tiempo consume o más dinero deja escapar. En muchos negocios argentinos eso es cobranza: recordatorios, links de pago y seguimiento de cuotas.",
          "El segundo foco suele ser atención: respuestas repetidas por WhatsApp, confirmación de turnos y derivación a una persona cuando la consulta no entra en reglas simples.",
        ],
      },
      {
        title: "Por qué conectarla al sistema",
        body: [
          "Una automatización aislada solo mueve mensajes. Una automatización conectada al sistema sabe quién es el cliente, qué debe, qué turno tiene, qué pedido está pendiente y qué acción corresponde.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿MaatWork automatiza WhatsApp?",
        a: "Sí. Automatiza respuestas frecuentes, confirmaciones, recordatorios, cobros y derivaciones conectadas al sistema del negocio.",
      },
      {
        q: "¿Puede mandar links de pago?",
        a: "Sí, cuando se integra el flujo de cobros y medios de pago como Mercado Pago o el sistema que use el cliente.",
      },
      {
        q: "¿Siempre hace falta IA?",
        a: "No. Muchas automatizaciones se resuelven mejor con reglas simples. La IA se usa cuando aporta valor real y hay datos suficientes.",
      },
    ],
    related: [
      { href: "/servicios/automatizaciones", label: "Automatizaciones e IA" },
      { href: "/blog/automatizar-cobros-y-whatsapp", label: "Guía de cobros y WhatsApp" },
      { href: "/precios", label: "Precios" },
    ],
    ctaMsg: "quiero automatizar WhatsApp y cobros",
  },
];

export function getSourcePage(slug: string): SourcePage | undefined {
  return SOURCE_PAGES.find((page) => page.slug === slug);
}
