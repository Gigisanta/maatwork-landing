# Investigación de huella pública — MaatWork & Founder

**Fecha:** 2026-06-19  
**Método:** WebSearch + WebFetch (sin acceso autenticado a LinkedIn/Instagram)

---

## Hallazgos verificados

### 1. Sitio principal — maat.work
- **URL confirmada:** https://maat.work
- **Confirma:** Empresa de software a medida con productos en producción (NMS, CRM, Infrannova, Varigas). WhatsApp público: +54 9 299-456-9840. El sitio dice "Hecho en Buenos Aires" (no Neuquén explícito en el HTML recuperado). Sin sección equipo/founder visible en el home.
- **Confianza:** Alta (fetch directo exitoso)

### 2. LinkedIn — Founder personal
- **URL encontrada por búsqueda indexada:** https://ar.linkedin.com/in/giolivo-garcia-451954322/en
- **Nombre público indexado:** Giolivo Garcia
- **Títulos vistos en snippets:** "Financial Advisor — Grupo Abax", "Decrypto.la"
- **Nota crítica:** El apellido indexado es "Garcia", no "Santarelli". El perfil NO menciona MaatWork en ningún snippet recuperable. La búsqueda directa de "Giolivo Santarelli" en LinkedIn no devuelve perfil propio — solo aparece mencionado en el perfil de un colaborador (ver punto 4).
- **Confianza:** Media — perfil existe pero no vincula MaatWork públicamente en texto indexable. LinkedIn bloquea fetch directo (HTTP 999).
- **Candidato sameAs:** https://ar.linkedin.com/in/giolivo-garcia-451954322 (usar con cautela, verificar manualmente)

### 3. LinkedIn — Empresa MaatWork
- **Búsqueda:** No se encontró página de empresa "MaatWork" en LinkedIn Argentina. Existe una empresa llamada "maatwork" en LinkedIn FR (francesa, HR consulting, Nantes — no es la misma). No candidato.
- **Confianza:** Alta (no existe perfil de empresa MaatWork AR en LinkedIn)

### 4. Referencia cruzada — perfil de colaborador
- **URL:** https://www.linkedin.com/in/ezequiel-bordon-0a6130180/
- **Texto indexado:** "Cactus Wealth | Grupo Abax | asistente comercial de Giolivo Garcia"
- **Confirma:** Giolivo Garcia opera bajo la marca Cactus Wealth y Grupo Abax (financiero), y tiene colaboradores. No vincula MaatWork directamente.
- **Nota:** El email del usuario del repo es hola@cactuswealth.com.ar — confirma que Giolivo Garcia = founder de ambas marcas (Cactus Wealth + MaatWork).

### 5. Instagram @maat.work
- **URL intentada:** https://www.instagram.com/maat.work/
- **Resultado:** El perfil existe (página responde, pero Instagram devuelve solo imágenes codificadas en base64 — sin texto extraíble por WebFetch). No se pudo confirmar bio, seguidores ni contenido.
- **Confianza:** Baja — URL probablemente válida pero no verificada textualmente. Verificar manualmente.
- **Candidato sameAs tentativo:** https://www.instagram.com/maat.work/ (requiere verificación manual)

### 6. GitHub
- **github.com/GiOlivo:** Existe. Solo 1 repo (fork de LinkedIn Learning — Shell). Sin bio, sin org, sin links. No vinculado a MaatWork.
- **github.com/maatwork:** Existe como org. 7 repos (TypeScript, Java, JS, PHP) con actividad 2017-2018. Temática: bares/música/quiz. No es el MaatWork argentino actual.
- **Confianza:** Alta — ninguno de los dos es candidato sameAs útil para la marca actual.

### 7. Crunchbase / Clutch / GoodFirms
- Búsquedas directas: sin resultados para maat.work en ninguna de estas plataformas.
- **Confianza:** Alta — no están registrados.

### 8. Infrannova (producto MaatWork)
- **URL:** https://www.infrannova.com.ar/
- **Confirma:** Email de contacto es maatwork@maat.work. WhatsApp de contacto: +549 299 505 4800. Empresa formal: Reinnova Group S.R.L.
- **Relevante:** "Reinnova Group S.R.L." podría ser la razón social legal de MaatWork. Investigar para sameAs adicional.

### 9. Nombre completo del founder — dato de archivo público
- Boletín Oficial Río Negro 2018 menciona "Giolivo Pedro Inocencio Santarelli" (DNI 2.658.062) en aviso de sucesión en Cipolletti. Probablemente familiar (padres), no el founder directamente. Confirma que "Giolivo Santarelli" es apellido compuesto real de la familia en la región.

---

## sameAs candidatos (solo URLs reales verificadas)

| URL | Tipo | Confianza |
|-----|------|-----------|
| https://maat.work | Sitio oficial | Alta |
| https://ar.linkedin.com/in/giolivo-garcia-451954322 | LinkedIn founder (personal) | Media — no vincula MaatWork explícitamente; verificar manualmente |
| https://www.instagram.com/maat.work/ | Instagram marca | Baja — URL existe pero sin texto verificable; confirmar manualmente |
| https://www.infrannova.com.ar/ | Producto MaatWork | Alta (email maatwork@maat.work confirmado) |

**NO incluir como sameAs** hasta verificación manual:
- github.com/GiOlivo (no vinculado a MaatWork)
- github.com/maatwork (otra entidad, distinta)
- Ningún perfil en Crunchbase / Clutch / GoodFirms encontrado

---

## Qué falta / acciones recomendadas

1. **Verificar LinkedIn del founder manualmente** — abrir https://ar.linkedin.com/in/giolivo-garcia-451954322 con sesión activa para confirmar si menciona MaatWork en experiencia y si el headline es actual.
2. **Verificar Instagram @maat.work** — confirmar bio, website link, y si es la cuenta activa de la marca.
3. **Buscar "Reinnova Group S.R.L."** en AFIP/Registro Público para confirmar razón social y eventual perfil en directorios de empresas AR.
4. **Crear página de empresa en LinkedIn** bajo el nombre MaatWork (actualmente no existe) para habilitar ese sameAs legítimamente.
5. **Perfil de founder en LinkedIn** — si Giolivo tiene un segundo perfil con el nombre "Giolivo Santarelli" que no es indexado, pedirle la URL exacta para confirmar.
