export type ProductHighlight = {
  name: string;
  label: string;
  url: string;
  accent: string;
  description: string;
  evidence: string[];
  modules: string[];
};

export const PRODUCT_HIGHLIGHTS: ProductHighlight[] = [
  {
    name: "NMS",
    label: "Natatory Management System",
    url: "oroazul.maat.work",
    accent: "from-cyan-300 to-emerald-400",
    description:
      "Sistema operativo para natatorios: clientes, cuotas, asistencia, empleados, calendario, caja y facturación ARCA.",
    evidence: ["Next.js 15", "Neon + Prisma", "NextAuth", "Playwright"],
    modules: ["Asistencias", "Pagos", "Calendario", "ARCA"],
  },
  {
    name: "MaatWorkCRM",
    label: "CRM comercial y administrativo",
    url: "crm.maat.work",
    accent: "from-violet-300 to-violet-500",
    description:
      "CRM multi-tenant para ordenar pipeline, contactos, tareas, finanzas, calendario y facturación desde un solo panel.",
    evidence: ["CRM v3", "RBAC", "TanStack Query", "API core"],
    modules: ["Pipeline", "Contactos", "Tareas", "Facturas"],
  },
  {
    name: "Infrannova",
    label: "Gestión de obras e infraestructura",
    url: "infrannova.vercel.app",
    accent: "from-gold-300 to-gold-500",
    description:
      "Plataforma para constructoras: obras, inventario, transferencias, tickets, certificaciones, redeterminaciones y curva S.",
    evidence: ["Next.js 16", "Drizzle", "Server Actions", "AI docs"],
    modules: ["Obras", "Curva S", "Partes", "Certificados"],
  },
  {
    name: "Varigas",
    label: "Operación de extintores",
    url: "varigas.vercel.app",
    accent: "from-rose-300 to-rose-500",
    description:
      "Gestión para empresas de seguridad contra incendios: clientes, extintores, vencimientos, órdenes de trabajo y stock.",
    evidence: ["Seed realista", "Dashboard", "Órdenes", "Stock"],
    modules: ["Clientes", "Extintores", "Órdenes", "Vencimientos"],
  },
];
