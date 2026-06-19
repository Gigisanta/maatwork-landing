/**
 * Páginas de industria ("software para X"). Capturan intent vertical. Las de
 * mayor prioridad están ancladas en un producto real del portfolio (proofCaseSlug);
 * las demás se sostienen en la capacidad demostrada, sin fabricar clientes.
 * Consumido por /soluciones (índice) y /soluciones/[slug] (detalle + JSON-LD).
 */
export type IndustryPage = {
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  pains: string[];
  build: string[];
  proofText: string;
  proofCaseSlug?: string;
  faqs: { q: string; a: string }[];
};

export const INDUSTRIES: IndustryPage[] = [
  {
    slug: "software-para-extintores",
    name: "Empresas de extintores",
    h1: "Software para empresas de extintores",
    metaTitle: "Software para empresas de extintores y matafuegos",
    metaDescription:
      "Sistema para empresas de venta, recarga y mantenimiento de extintores: clientes, vencimientos, órdenes de trabajo y stock. Ya en producción con Varigas.",
    intro:
      "Gestioná clientes, extintores, vencimientos regulatorios y órdenes de trabajo en un solo sistema, sin papel ni planillas.",
    pains: [
      "Vencimientos de extintores controlados a mano, con riesgo de incumplir",
      "Órdenes de trabajo sin numeración ni trazabilidad",
      "Stock y recargas en planillas que nadie mantiene",
    ],
    build: [
      "Clientes con CUIT validado e historial",
      "Inventario de extintores por cliente con alertas de vencimiento",
      "Órdenes de trabajo numeradas (recargas, reparaciones, pruebas hidráulicas)",
      "Control de acceso por roles (administración, técnicos, recepción)",
    ],
    proofText:
      "No es teoría: ya construimos Varigas, un sistema para una empresa de seguridad contra incendios que opera en producción.",
    proofCaseSlug: "varigas",
    faqs: [
      {
        q: "¿Maneja los vencimientos regulatorios?",
        a: "Sí. Cada extintor lleva su vencimiento y el sistema avisa automáticamente antes de que caiga.",
      },
      {
        q: "¿Se adapta a mi empresa?",
        a: "Se construye a medida. Partimos de lo que ya resolvimos en Varigas y lo ajustamos a tu operación.",
      },
    ],
  },
  {
    slug: "software-para-natatorios",
    name: "Natatorios",
    h1: "Software para natatorios",
    metaTitle: "Software de gestión para natatorios",
    metaDescription:
      "Sistema a medida para natatorios: socios, cuotas, asistencia, calendario, caja y facturación ARCA. Ya en producción con NMS.",
    intro:
      "Socios, cuotas, asistencia, calendario, caja y facturación de tu natatorio en un solo sistema operativo.",
    pains: [
      "Inscripciones y cuotas en planillas que se desactualizan",
      "Asistencia y calendario coordinados a mano",
      "Facturación separada del resto de la operación",
    ],
    build: [
      "Gestión de socios y cuotas",
      "Control de asistencia y calendario",
      "Caja y empleados",
      "Facturación electrónica ARCA integrada",
    ],
    proofText:
      "Ya construimos NMS (Natatory Management System), en producción para un natatorio real.",
    proofCaseSlug: "nms",
    faqs: [
      {
        q: "¿Incluye facturación?",
        a: "Sí, con facturación electrónica ARCA integrada a la operación del natatorio.",
      },
      {
        q: "¿Sirve si ya uso planillas?",
        a: "Sí. Migramos tu información actual desde Excel o el sistema que uses.",
      },
    ],
  },
  {
    slug: "software-para-obras",
    name: "Constructoras",
    h1: "Software de gestión de obras",
    metaTitle: "Software de gestión de obras para constructoras",
    metaDescription:
      "Plataforma para constructoras: obras, partes diarios, certificaciones, redeterminaciones, reportes bimonetarios y curva S. Ya en producción con Infrannova.",
    intro:
      "Llevá la obra de punta a punta: partes diarios, certificaciones, redeterminaciones, finanzas bimonetarias y curva S en tiempo real.",
    pains: [
      "Partes diarios en papel y documentación dispersa en WhatsApp",
      "Certificaciones sin trazabilidad y redeterminaciones en Excel",
      "Avance e información financiera siempre desactualizados",
    ],
    build: [
      "Obras, etapas y partidas",
      "Partes diarios digitales, tickets y recursos en campo",
      "Certificaciones, redeterminaciones y reportes bimonetarios ARS/USD",
      "Curva S / Earned Value y documentación asistida por IA",
    ],
    proofText:
      "Ya construimos Infrannova, una plataforma de gestión de obras en producción.",
    proofCaseSlug: "infrannova",
    faqs: [
      {
        q: "¿Maneja redeterminaciones de precios?",
        a: "Sí, con reportes bimonetarios ARS/USD y trazabilidad de certificaciones.",
      },
      {
        q: "¿Funciona en obra, sin papel?",
        a: "Sí. Los partes diarios, tickets y recursos se cargan digitalmente desde el campo.",
      },
    ],
  },
  {
    slug: "software-para-gimnasios",
    name: "Gimnasios y estudios",
    h1: "Software para gimnasios y estudios",
    metaTitle: "Software para gimnasios, estudios y centros de turnos",
    metaDescription:
      "Sistema para gimnasios y estudios: socios, cuotas, agenda, cobros automáticos y recordatorios por WhatsApp. A medida, desde USD 100/mes.",
    intro:
      "Ordená socios, cuotas, agenda y cobros, con recordatorios automáticos por WhatsApp. Empezás con el producto base y escalás a medida.",
    pains: [
      "Cuotas vencidas y recordatorios hechos a mano",
      "Agenda y reservas repartidas entre WhatsApp, papel y Excel",
      "Las mismas preguntas respondidas una y otra vez",
    ],
    build: [
      "Gestión de socios con ficha e historial",
      "Cuotas, cobros y links de pago",
      "Agenda, reservas y asistencia",
      "Recordatorios y respuestas automáticas por WhatsApp",
    ],
    proofText:
      "El producto base operativo cubre esto desde el día uno, y construimos a medida lo que tu estudio necesite. Ya tenemos sistemas a medida operando en industrias con turnos y cuotas, como natatorios.",
    proofCaseSlug: "nms",
    faqs: [
      {
        q: "¿Cuánto cuesta?",
        a: "El producto base arranca desde USD 100/mes más setup; lo a medida se cotiza según tu necesidad.",
      },
      {
        q: "¿Hace recordatorios por WhatsApp?",
        a: "Sí, como automatización: confirmaciones, recordatorios de cuota y respuestas automáticas.",
      },
    ],
  },
  {
    slug: "software-para-consultorios",
    name: "Consultorios y clínicas",
    h1: "Software para consultorios y clínicas",
    metaTitle: "Software a medida para consultorios y clínicas",
    metaDescription:
      "Sistema a medida para consultorios y clínicas: turnos, pacientes, cobros y facturación ARCA. Construido para tu flujo, con soporte local.",
    intro:
      "Turnos, pacientes, cobros y facturación en un sistema hecho para el flujo real de tu consultorio, no un molde genérico.",
    pains: [
      "Turnos y pacientes coordinados entre agenda de papel y WhatsApp",
      "Cobros y facturación cargados dos veces",
      "Sin visibilidad de la operación del día",
    ],
    build: [
      "Agenda de turnos y ficha de pacientes",
      "Cobros y recordatorios automáticos",
      "Facturación electrónica ARCA integrada",
      "Panel con el estado del día",
    ],
    proofText:
      "Construimos sistemas a medida con facturación ARCA y gestión de turnos en producción (NMS, MaatWorkCRM). Tu consultorio es el próximo.",
    faqs: [
      {
        q: "¿Integra facturación electrónica?",
        a: "Sí, con ARCA/AFIP integrada a la operación. Ya lo tenemos resuelto en otros productos.",
      },
      {
        q: "¿Se adapta a mi especialidad?",
        a: "Se construye a medida de tu flujo: turnos, pacientes y cobros según cómo trabajás.",
      },
    ],
  },
  {
    slug: "software-para-logistica",
    name: "Logística y distribución",
    h1: "Software para logística y distribución",
    metaTitle: "Software a medida para logística y distribución PyME",
    metaDescription:
      "Sistema a medida para distribuidoras y logística PyME: pedidos, stock, rutas, clientes y facturación. Construido para tu operación, con soporte local.",
    intro:
      "Pedidos, stock, clientes y entregas en un sistema hecho para tu operación de distribución, en vez de WhatsApp y Excel.",
    pains: [
      "Pedidos por WhatsApp y stock en planillas paralelas",
      "Sin trazabilidad de entregas ni estado de cuenta por cliente",
      "Facturación desconectada del resto",
    ],
    build: [
      "Pedidos y clientes con historial y cuenta corriente",
      "Inventario, transferencias y control de stock",
      "Seguimiento de entregas y rutas",
      "Facturación electrónica ARCA integrada",
    ],
    proofText:
      "Resolvemos inventario, transferencias y logística en producción (Infrannova). Lo llevamos a tu distribución.",
    proofCaseSlug: "infrannova",
    faqs: [
      {
        q: "¿Maneja cuenta corriente por cliente?",
        a: "Sí, con historial y estado de cuenta, integrado a pedidos y facturación.",
      },
      {
        q: "¿Puedo empezar de a poco?",
        a: "Sí. Arrancás con lo esencial y sumás módulos a medida según crezca tu operación.",
      },
    ],
  },
];

export function getIndustry(slug: string): IndustryPage | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}
