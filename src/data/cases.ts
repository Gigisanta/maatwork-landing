/**
 * Casos / portfolio. Una entrada por producto real en producción. Contenido
 * estrictamente verificable (cero fabricación): se describe lo observable en cada
 * sistema y sus módulos. Sin métricas de resultado no autorizadas.
 * Consumido por /casos (índice) y /casos/[slug] (detalle + SoftwareApplication JSON-LD).
 */
export type CasePage = {
  slug: string;
  product: string;
  industry: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  url: string;
  intro: string;
  context: string;
  problem: string;
  solution: string;
  modules: string[];
  stack: string[];
};

export const CASES: CasePage[] = [
  {
    slug: "varigas",
    product: "Sistema de Gestión para extintores",
    industry: "Seguridad contra incendios",
    h1: "Sistema de Gestión para empresas de extintores",
    metaTitle: "Caso real: software para empresas de extintores",
    metaDescription:
      "Sistema a medida para empresas de venta, recarga y mantenimiento de matafuegos: clientes, vencimientos, órdenes de trabajo y stock. En producción.",
    url: "https://varigas.maat.work",
    intro:
      "Sistema de gestión para empresas de venta, recarga y mantenimiento de matafuegos. En producción.",
    context:
      "Las empresas de seguridad contra incendios manejan clientes, extintores con vencimientos regulatorios y órdenes de trabajo. Eso suele vivir en papel y planillas.",
    problem:
      "Sin un sistema, los vencimientos de extintores, las órdenes de trabajo y el stock se controlan a mano — con riesgo de incumplir la normativa y perder trazabilidad.",
    solution:
      "Construimos el sistema: clientes con CUIT validado e historial, inventario de extintores por cliente con vencimientos y alertas automáticas, órdenes de trabajo numeradas y trazables (recargas, reparaciones, pruebas hidráulicas) y control de acceso por roles.",
    modules: ["Clientes", "Extintores", "Órdenes de trabajo", "Vencimientos", "Stock"],
    stack: ["Next.js", "Vercel", "Roles (RBAC)", "Datos fiscales (CUIT)"],
  },
  {
    slug: "infrannova",
    product: "Infrannova",
    industry: "Construcción y obras",
    h1: "Infrannova — gestión de obras y construcción",
    metaTitle: "Caso Infrannova: software de gestión de obras",
    metaDescription:
      "Plataforma a medida para constructoras: obras, partes diarios, certificaciones, redeterminaciones, reportes bimonetarios y curva S. En producción.",
    url: "https://infrannova.com.ar",
    intro:
      "Plataforma para constructoras: obras, partes diarios, certificaciones, redeterminaciones y curva S. En producción.",
    context:
      "Las constructoras manejan partes diarios en papel, certificaciones sin trazabilidad, redeterminaciones en Excel y documentación dispersa en WhatsApp y Drive.",
    problem:
      "Sin un sistema integrado, la información financiera de la obra y el avance real quedan desactualizados, y las redeterminaciones de precios se vuelven inmanejables.",
    solution:
      "Construimos Infrannova: proyectos (obras, etapas, partidas), campo (partes diarios digitales, tickets, recursos), logística (inventario, transferencias, montajes), finanzas (certificaciones, redeterminaciones, reportes bimonetarios ARS/USD) y análisis (KPIs, curva S / Earned Value, documentación con IA).",
    modules: ["Obras", "Partes diarios", "Certificaciones", "Curva S", "Redeterminaciones"],
    stack: ["Next.js 16", "React 19", "Drizzle + Neon", "CloudFlare R2", "NextAuth v5", "IA (Anthropic SDK)"],
  },
  {
    slug: "nms",
    product: "Sistema de Gestión para natatorios",
    industry: "Natatorios",
    h1: "Sistema de Gestión para natatorios",
    metaTitle: "Caso real: sistema de gestión para natatorios",
    metaDescription:
      "Natatory Management System: sistema a medida para gestionar un natatorio — socios, cuotas, asistencia, calendario, caja y facturación ARCA. En producción.",
    url: "https://oroazul.maat.work",
    intro:
      "Natatory Management System: sistema operativo a medida para la gestión de un natatorio. En producción.",
    context:
      "Un natatorio gestiona socios, cuotas, asistencia, empleados, calendario, caja y facturación — históricamente con planillas y papel.",
    problem:
      "Coordinar inscripciones, cuotas y asistencia a mano se vuelve inmanejable a medida que el natatorio crece, y la facturación suma fricción.",
    solution:
      "Construimos el sistema, en producción para un natatorio real: gestión de clientes y cuotas, asistencia, empleados, calendario, caja y facturación electrónica ARCA.",
    modules: ["Socios", "Cuotas", "Asistencias", "Calendario", "Facturación ARCA"],
    stack: ["Next.js", "Neon + Prisma", "NextAuth", "Facturación ARCA"],
  },
  {
    slug: "maatwork-crm",
    product: "CRM",
    industry: "Gestión comercial",
    h1: "CRM comercial y administrativo a medida",
    metaTitle: "Caso real: CRM multi-tenant a medida",
    metaDescription:
      "CRM multi-tenant a medida: contactos, tareas, calendario, reportes y facturación integrada (ArcaMaat), con roles y permisos. En producción.",
    url: "https://crm.maat.work",
    intro:
      "CRM multi-tenant para ordenar contactos, tareas, finanzas, calendario y facturación desde un solo panel. En producción.",
    context:
      "Equipos comerciales y administrativos que necesitan un solo lugar para contactos, productividad y facturación, en vez de herramientas sueltas.",
    problem:
      "Cuando el pipeline, las tareas y la facturación viven en herramientas separadas, se pierde tiempo y visibilidad del estado real.",
    solution:
      "Construimos un CRM multi-tenant con roles: dashboard, contactos, productividad (tareas, calendario, objetivos), equipo y reportes, y facturación integrada (ArcaMaat).",
    modules: ["Contactos", "Tareas", "Calendario", "Reportes", "Facturación (ArcaMaat)"],
    stack: ["Next.js", "Drizzle + Neon", "TanStack Query", "NextAuth", "RBAC"],
  },
];

export function getCase(slug: string): CasePage | undefined {
  return CASES.find((c) => c.slug === slug);
}
