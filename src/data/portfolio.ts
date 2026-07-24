/**
 * Portfolio — todos los productos MaatWork en producción.
 * Cada entry tiene: nombre, descripción corta, URL, industria, tecnologías,
 * badges (producción/desarrollo), y metadata para el portfolio.
 */
export type PortfolioItem = {
  slug: string
  name: string
  tagline: string
  description: string
  url: string
  industry: string
  status: 'production' | 'development'
  category: 'gestion' | 'web'
  badges: string[]
  stack: string[]
  modules: string[]
  metrics?: { label: string; value: string }[]
}

/** Único número de prueba del sitio: sistemas con status "production".
 *  Hero, metadata, navbar y portfolio deben citar SIEMPRE este valor. */
export const PORTFOLIO: PortfolioItem[] = [
  {
    slug: 'maatwork-crm',
    category: 'gestion',
    name: 'CRM',
    tagline: 'CRM comercial y administrativo multi-tenant',
    description: 'CRM completo con contactos, pipeline, tareas, calendario, reportes y facturación ARCA integrada. Multi-tenant con roles y permisos granulares.',
    url: 'https://crm.maat.work',
    industry: 'Gestión comercial',
    status: 'production',
    badges: ['Multi-tenant', 'RBAC', 'ARCA'],
    stack: ['Next.js 16', 'React 19', 'Drizzle + Neon', 'TanStack Query', 'NextAuth v5'],
    modules: ['Dashboard', 'Pipeline', 'Contactos', 'Tareas', 'Calendario', 'Facturación'],
  },
  {
    slug: 'nms',
    category: 'gestion',
    name: 'Sistema de Gestión para natatorios',
    tagline: 'Socios, cuotas, asistencia y facturación',
    description: 'Sistema integral para natatorios y piscinas. Socios, cuotas, asistencia, empleados, calendario, caja y facturación electrónica ARCA. En producción para un natatorio real.',
    url: 'https://oroazul.maat.work',
    industry: 'Natatorios',
    status: 'production',
    badges: ['Producción real', 'ARCA'],
    stack: ['Next.js 15', 'React 19', 'Prisma + Neon', 'NextAuth v4', 'Framer Motion'],
    modules: ['Socios', 'Cuotas', 'Asistencias', 'Calendario', 'Facturación ARCA'],
  },
  {
    slug: 'varigas',
    category: 'gestion',
    name: 'Sistema de Gestión para empresas de extintores',
    tagline: 'Venta, recarga y mantenimiento de matafuegos',
    description: 'Sistema a medida para venta, recarga y mantenimiento de matafuegos. Clientes con CUIT, inventario con vencimientos, órdenes de trabajo trazables y control de acceso por roles.',
    url: 'https://varigas.maat.work',
    industry: 'Seguridad contra incendios',
    status: 'production',
    badges: ['RBAC', 'Trazabilidad'],
    stack: ['Next.js', 'Prisma + Neon', 'NextAuth', 'Roles RBAC'],
    modules: ['Clientes', 'Extintores', 'Órdenes', 'Vencimientos', 'Stock'],
  },
  {
    slug: 'infrannova',
    category: 'gestion',
    name: 'Infrannova',
    tagline: 'Gestión de obras y construcción',
    description: 'Plataforma integral para constructoras: obras, partes diarios, certificaciones, redeterminaciones, reportes bimonetarios ARS/USD y curva S con inteligencia artificial.',
    url: 'https://infrannova.com.ar',
    industry: 'Construcción',
    status: 'production',
    badges: ['IA', 'Bimonetario', 'RBAC'],
    stack: ['Next.js 16', 'React 19', 'Drizzle + Neon', 'CloudFlare R2', 'Anthropic SDK'],
    modules: ['Obras', 'Partes diarios', 'Certificaciones', 'Curva S', 'Redeterminaciones'],
  },
  {
    slug: 'maatwork-hub',
    category: 'gestion',
    name: 'Sistema operativo interno con IA',
    tagline: 'AI OS y centro operativo interno',
    description: 'Sistema operativo de IA privado para operar documentos, finanzas, acciones y accesos. Centro de control unificado con asistentes IA integrados.',
    url: 'https://hub.maat.work',
    industry: 'Productividad',
    status: 'production',
    badges: ['AI OS', 'Interno'],
    stack: ['Next.js 16', 'shadcn/ui', 'NextAuth v5', 'Framer Motion'],
    modules: ['Dashboard', 'AI OS', 'Documentos', 'Finanzas', 'Prompts'],
  },
  {
    slug: 'maatwork-gym',
    category: 'gestion',
    name: 'Sistema de Gestión para gimnasios',
    tagline: 'Socios, planes, asistencia y cobranzas',
    description: 'Sistema para la administración de gimnasios: socios, planes, asistencia, empleados, cobranzas y reportes.',
    url: 'https://maatwork-gym.vercel.app',
    industry: 'Fitness',
    status: 'development',
    badges: ['En desarrollo'],
    stack: ['Next.js', 'Tailwind CSS', 'Prisma'],
    modules: ['Socios', 'Planes', 'Asistencia', 'Cobranzas'],
  },
  {
    slug: 'maatwork-nutricion',
    category: 'gestion',
    name: 'Sistema de Gestión para nutricionistas',
    tagline: 'Planes, pacientes, recetarios y seguimiento',
    description: 'Sistema para nutricionistas: planes alimentarios, seguimiento de pacientes, recetarios y reportes de progreso.',
    url: 'https://maatwork-nutricion.vercel.app',
    industry: 'Salud',
    status: 'development',
    badges: ['En desarrollo'],
    stack: ['Next.js', 'Tailwind CSS', 'Prisma'],
    modules: ['Pacientes', 'Planes', 'Recetarios', 'Seguimiento'],
  },
  {
    slug: 'aduana-docs',
    category: 'web',
    name: 'Aduana Docs',
    tagline: 'Documentación y consultas para comercio exterior',
    description: 'Plataforma de documentos y consultas para operaciones de comercio exterior, con trazabilidad y alertas.',
    url: 'https://aduana-docs-web.vercel.app',
    industry: 'Comercio exterior',
    status: 'development',
    badges: ['En desarrollo'],
    stack: ['Next.js', 'Tailwind CSS'],
    modules: ['Documentos', 'Consultas', 'Alertas'],
  },
  {
    slug: 'valentino-repuestos',
    category: 'web',
    name: 'Valentino Repuestos',
    tagline: 'E-commerce de repuestos',
    description: 'Tienda online para venta de repuestos con catálogo, carrito y gestión de pedidos.',
    url: 'https://valentino-repuestos.vercel.app',
    industry: 'E-commerce',
    status: 'development',
    badges: ['En desarrollo'],
    stack: ['Next.js', 'Tailwind CSS'],
    modules: ['Catálogo', 'Carrito', 'Pedidos'],
  },
  {
    slug: 'sueno-claro',
    category: 'gestion',
    name: 'Sueño Claro',
    tagline: 'Monitoreo y análisis del sueño',
    description: 'Plataforma para el monitoreo y análisis de patrones de sueño con reportes y recomendaciones personalizadas.',
    url: 'https://sueno-claro.vercel.app',
    industry: 'Salud',
    status: 'development',
    badges: ['En desarrollo'],
    stack: ['Next.js', 'Tailwind CSS'],
    modules: ['Monitoreo', 'Reportes', 'Recomendaciones'],
  },
  {
    slug: 'estilista-cf',
    category: 'web',
    name: 'Claudia Ferrada Estilista',
    tagline: 'Landing para peluquería con turnos por WhatsApp',
    description: 'Sitio para un salón de peluquería: servicios, galería de trabajos, sección personal y pedido de turnos directo por WhatsApp. Diseño cálido, rápido y optimizado para SEO local.',
    url: 'https://estilistacf.maat.work',
    industry: 'Belleza & Estética',
    status: 'production',
    badges: ['Next.js', 'SEO local', 'WhatsApp'],
    stack: ['Next.js', 'Tailwind CSS', 'Vercel'],
    modules: ['Servicios', 'Galería', 'Turnos', 'Sobre mí'],
  },
  {
    slug: 'maat-work-landing',
    category: 'web',
    name: 'maat.work',
    tagline: 'La web que estás viendo ahora',
    description: 'Nuestra propia landing: diseño editorial, SEO técnico, formulario con leads a base de datos y analítica. Construida con el mismo estándar que vendemos.',
    url: 'https://maat.work',
    industry: 'Web & Landing',
    status: 'production',
    badges: ['Next.js', 'SEO técnico', 'Leads'],
    stack: ['Next.js 16', 'Tailwind CSS 4', 'Neon', 'Vercel'],
    modules: ['Landing', 'Blog', 'Casos', 'Leads'],
  },
  {
    slug: 'maatwork-docs',
    category: 'web',
    name: 'Documentación técnica y APIs',
    tagline: 'Referencia centralizada de APIs y componentes',
    description: 'Documentación técnica centralizada de APIs, componentes y servicios de producto, con guías y referencia.',
    url: 'https://maatworkdocs.vercel.app',
    industry: 'Documentación',
    status: 'production',
    badges: ['Documentación'],
    stack: ['Next.js', 'MDX'],
    modules: ['API Docs', 'Componentes', 'Guías'],
  },
]

/** Sistemas en producción real — el único número de prueba que cita el sitio. */
export const PRODUCTION_ITEMS = PORTFOLIO.filter((p) => p.status === 'production')
export const PRODUCTION_COUNT = PRODUCTION_ITEMS.length
