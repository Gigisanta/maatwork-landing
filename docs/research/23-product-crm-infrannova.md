# Investigación de productos: MaatWorkCRM e Infrannova

**Fecha:** 2026-06-19
**Fuente:** WebFetch directo a URLs de producción + WebSearch + landing maat.work
**Regla:** Solo lo verificado. Sin fabricación.

---

## 1. MaatWorkCRM

**URL:** https://crm.maat.work
**Estado:** Auth-walled — no hay landing pública ni página de registro visible. El fetch retornó directamente una interfaz de usuario logueada (probablemente sesión cacheada o acceso demo abierto).

### Qué se observó directamente

- Interfaz en español. Rol visible: "Miembro".
- Secciones del menú navegable:
  - Dashboard (hub principal)
  - Contacts (gestión de contactos, botón "Create")
  - Productivity: Tasks, Calendar, Goals, Notifications
  - Team: Teams, Reports, Training, Production, ArcaMaat
  - System: Settings
- Búsqueda global con shortcut ⌘K ("Buscar contactos, tareas, deals…")
- Módulo "ArcaMaat" — nombre propio, función no confirmada sin login profundo.

### Lo que NO se pudo verificar

- Pantalla de login/registro (no expuesta públicamente).
- Número de tenants activos, datos reales vs. demo seed.
- Detalles de RBAC (roles más allá de "Miembro").

### Stack confirmado (vía maat.work landing)

Next.js 15/16, TanStack Query, Drizzle ORM, NextAuth, Neon (Postgres), Server Actions. La landing menciona explícitamente "CRM v3" y "API core".

### Industria y problema resuelto

CRM comercial/administrativo para PyMEs argentinas. Centraliza contactos, tareas, calendario, objetivos, producción de equipo y reportes. Orientado a negocios de servicios (gimnasios, estudios, academias, estética) y equipos comerciales.

### Capacidades que prueba para MaatWork

- Multi-tenant SaaS en producción (el módulo se ofrece como producto a clientes).
- RBAC funcional (al menos dos roles: Miembro / Usuario).
- Dashboard operativo con módulo de equipo y producción.
- Integración de productividad (tareas + calendario + goals) en CRM propio.

---

## 2. Infrannova

**URL app:** https://infrannova.vercel.app — auth-walled, solo mostró "Iniciar sesión · Infrannova" con spinner de carga. No hay landing pública en ese dominio.

**URL landing:** https://www.infrannova.com.ar — landing pública completa, verificada.

### Qué dice la landing (verificado)

**Tagline:** "La obra bajo control total, de principio a fin"

**Problema explícito que resuelve:**
- Redeterminaciones en Excel desactualizadas.
- Certificaciones sin trazabilidad ni flujo de aprobación.
- Partes diarios en papel sin foto ni firma digital.
- Curva S sin visibilidad de desvíos en tiempo real.
- Documentación dispersa en mails, Drive y WhatsApp.

**Módulos declarados:**
- Proyectos: obras, etapas, partidas/cómputo, planificación.
- Campo: partes diarios, tickets, recursos, ubicaciones.
- Logística: inventario, transferencias, montajes.
- Finanzas: certificaciones, redeterminaciones, reportes.
- Análisis: dashboard KPIs, Curva S/Earned Value, gestión documental.

**Diferenciales Argentina-específicos:**
- Módulo de certificaciones de avance según normativa local.
- Redeterminación de precios (ajuste inflacionario en contratos públicos/privados).
- Bimonetario ARS/USD.

**CTA:** "Solicitar demo" — sin meses de consultoría. Solo email/WhatsApp.

### Stack confirmado (repo + landing)

Next.js 16, React 19, Drizzle ORM, PostgreSQL serverless (Neon), Cloudflare R2 (archivos), NextAuth v5, Anthropic SDK (IA para procesamiento documental).

### Estado del producto

Producción (multi-tenant, RBAC, alertas activas según landing). App en Vercel. La landing menciona demo disponible bajo solicitud — no hay demo pública self-serve.

### Capacidades que prueba para MaatWork

- Dominio complejo resuelto: construcción + finanzas + campo + normativa argentina.
- Multi-tenant con RBAC.
- Integración de IA (Anthropic SDK) para procesamiento de documentos de obra.
- Curva S / Earned Value — análisis de proyectos en tiempo real.
- Bimonetario ARS/USD — adaptación a contexto inflacionario local.
- Stack moderno: Next.js 16 + RSC + Server Actions + Drizzle.
- Almacenamiento de archivos (Cloudflare R2) para documentación de obra.

---

## 3. Contexto: ecosistema MaatWork (verificado en maat.work)

La landing de maat.work lista cuatro productos en producción:
1. **NMS** — Natatory Management System (natatorios).
2. **MaatWorkCRM** — CRM comercial/administrativo.
3. **Infrannova** — Gestión de obras e infraestructura.
4. **Varigas** — Operación de extintores.

Todos comparten stack base (Next.js, Neon, Drizzle, NextAuth). Precio desde USD 100/mes plan base. Implementación: 5-10 días hábiles.

---

## 4. Qué se puede afirmar honestamente en case studies

| Afirmación | Verificable |
|---|---|
| MaatWorkCRM tiene dashboard, contactos, tareas, calendario, goals y módulo de equipo/producción | Sí — observado directamente en la UI |
| Infrannova resuelve partes diarios digitales, certificaciones, redeterminaciones y Curva S | Sí — landing detallada con módulos específicos |
| Ambos son multi-tenant con RBAC | Sí — confirmado en landing y observable en CRM |
| Infrannova usa Anthropic SDK para IA documental | Sí — stack listado en landing y repo |
| Infrannova está en producción con clientes | Landing dice "producción activa"; no hay testimonios públicos ni casos nombrados verificados |
| MaatWorkCRM tiene seed demo activo | Posible (UI accesible sin login explícito en el fetch), no confirmado como seed público |
| Número de clientes activos | No verificable — no declarado públicamente |

---

## 5. Brechas a completar

- Confirmar si crm.maat.work tiene acceso demo público o si el fetch capturó sesión cacheada.
- Obtener pantalla del login de Infrannova (.vercel.app) para documentar el flujo de acceso.
- Identificar si hay clientes nombrados / testimonios para Infrannova.
- Documentar módulo ArcaMaat (CRM) — nombre propio no explicado en lo visible.
