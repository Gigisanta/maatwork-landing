# GEO — LLM Discoverability para MaatWork

> Investigación: 2026-06-19. Cero fabricación — todos los datos tienen fuente.

---

## ¿Qué es GEO y por qué difiere del SEO clásico?

**SEO clásico** apunta a rankear en resultados de búsqueda; la métrica es CTR y posición.  
**GEO (Generative Engine Optimization)** apunta a ser *citado* en la respuesta generada por ChatGPT, Perplexity, Google AI Overviews, Gemini o Claude; la métrica es *reference rate* (frecuencia de cita), no clics.

Diferencias clave:
- SEO premia backlinks y keyword density. GEO premia **entity recognition, topical authority y datos verificables originales**.
- Solo el 11 % de los dominios son citados por *ambos* ChatGPT y Perplexity — optimizar para uno no garantiza el otro. ([Superlines, 2026](https://www.superlines.io/articles/ai-search-statistics/))
- El 62 % de las citas en AI Overviews proviene de fuera del top-10 orgánico ([BrightEdge via leapd.ai](https://www.leapd.ai/blog/ai-visibility/how-chatgpt-google-ai-overviews-and-perplexity-source-information-in-2026)).
- Las marcas son **6,5× más citadas vía fuentes de terceros** (directorios, reseñas, foros) que desde su propio dominio. ([AuthorityTech, 2026](https://authoritytech.io/blog/how-to-get-cited-by-chatgpt-perplexity-ai-overview-2026))
- Plataformas comunitarias (Reddit, Quora) capturan el **52,5 % de las citas combinadas** en ChatGPT + Perplexity + Google AI Overviews. ([Superlines](https://www.superlines.io/articles/ai-search-statistics/))

---

## Señales que favorecen ser citado (aplicadas a una software/automation agency)

### 1. Entidad definida y reconocible (Entity markup)
Los LLMs funcionan con knowledge graphs internos. Si MaatWork no está representado como **entidad unívoca**, no es citable con confianza.
- `Organization` schema con `@id`, `sameAs` apuntando a LinkedIn, Crunchbase, Wikidata Q-ID, GitHub org, redes sociales.
- Una brand típica B2B necesita **8–12 entradas `sameAs`** consistentes. ([ALM Corp](https://almcorp.com/blog/entity-authority-ai-citations-structured-data/))
- Datos estructurados con claridad semántica son recuperados **2,8× más frecuentemente** por sistemas RAG. ([LLMrefs](https://llmrefs.com/generative-engine-optimization))

### 2. Structured data para respuestas directas
- `FAQPage` JSON-LD en cada página de servicio y blog post. Cada `acceptedAnswer.text`: 40–80 palabras (sustancial pero citable verbatim). ([Frase.io](https://www.frase.io/blog/faq-schema-ai-search-geo-aeo))
- `Service`, `BlogPosting` con `dateModified` reciente: páginas actualizadas en los últimos 2 meses reciben **28 % más citas**. ([AuthorityTech](https://authoritytech.io/blog/how-to-get-cited-by-chatgpt-perplexity-ai-overview-2026))
- Contenido con schema tiene **2,5× más probabilidad** de aparecer en respuestas de IA. ([Stackmatix](https://www.stackmatix.com/blog/structured-data-ai-search))

### 3. Contenido definitorio de categoría con datos originales
- Los LLMs citan **fuentes primarias** (benchmarks propios, encuestas, números específicos) muy por encima de agregadores. ([SolvSpot](https://solvspot.com/blog/how-to-get-cited-by-chatgpt-2026))
- Contenido con estadísticas, citas y datos verificables logra **30–40 % más visibilidad** en respuestas de IA. ([AuthorityTech](https://authoritytech.io/blog/how-to-get-cited-by-chatgpt-perplexity-ai-overview-2026))
- Formato: responder la pregunta en las primeras 1–2 oraciones de cada sección; heading formulado como pregunta del usuario.

### 4. Terceros que mencionan a MaatWork (off-site authority)
- **Clutch, GoodFirms, G2**: AI Overviews cita plataformas de reseñas como señal de autoridad; son fuente estable de menciones de terceros. ([EPC Group, 2026](https://www.epcgroup.net/blog/evidence-engine-g2-capterra-clutch-enterprise-2026))
- Menciones en prensa, posts de LinkedIn referenciados, participación genuina en foros del sector (respuestas en Quora, Reddit con expertise real).
- Sitios con 32.000+ referring domains son **3,5× más citados** — para una agencia pequeña el camino es nichos muy específicos, no volumen. ([SolvSpot](https://solvspot.com/blog/how-to-get-cited-by-chatgpt-2026))

### 5. Indexación por plataforma
- ChatGPT indexa principalmente vía **Bing** → registrar sitemap en Bing Webmaster Tools.
- Claude indexa vía **Brave Search**.
- Perplexity tiene su propio crawler; contenido estructurado y rápido favorece la ingesta. ([Frase.io GEO Guide](https://www.frase.io/blog/what-is-generative-engine-optimization-geo))

---

## Prioridades P0 / P1 / P2

### P0 — Máximo impacto, hacer primero

| # | Qué | Por qué | Esfuerzo | Requiere dato real |
|---|-----|---------|----------|--------------------|
| 1 | `Organization` schema completo con `sameAs` (LinkedIn, Crunchbase, Wikidata Q-ID, GitHub, redes) | Base de entity recognition; sin esto los LLMs no unifican la entidad MaatWork | Bajo (JSON-LD en `<head>`) | Sí: URLs reales de perfiles existentes |
| 2 | `FAQPage` JSON-LD en páginas de servicio (5–10 pares por página, 40–80 palabras por respuesta) | Mayor impacto inmediato en citas; ChatGPT extrae Q&A verbatim | Medio (redactar FAQs + markup) | No (redacción editorial) |
| 3 | Perfil completo en **Clutch** + mínimo 3 reseñas verificadas | LLMs citan Clutch como referencia de agencias; presencia inexistente = no citable | Medio (gestión de clientes) | Sí: reseñas reales de clientes |

### P1 — Alto impacto, siguiente sprint

| # | Qué | Por qué | Esfuerzo | Requiere dato real |
|---|-----|---------|----------|--------------------|
| 4 | Registrar sitemap en **Bing Webmaster Tools** | ChatGPT indexa por Bing; sin esto la probabilidad de ser rastreado baja | Muy bajo | No |
| 5 | Crear un "dato original" citable: encuesta, benchmark o caso de estudio con número específico (ej. "X horas ahorradas en automatización para cliente Y sector Z") | LLMs citan stats primarias; pequeñas agencias logran 20+ citas con un solo dato verificable | Alto (requiere producción de contenido) | Sí: caso real con métricas |
| 6 | Crear perfil en **Wikidata** para MaatWork como entidad software company argentina | `sameAs` a Wikidata es la señal de entity linking más fuerte para LLMs | Bajo-medio | Sí: datos verificables de la empresa |
| 7 | Publicar en **GoodFirms** y actualizar perfil **Crunchbase** | Fuentes estructuradas que los LLMs usan para triangular entidades B2B | Bajo | Sí: info real de la empresa |

### P2 — Impacto medio, backlog

| # | Qué | Por qué | Esfuerzo | Requiere dato real |
|---|-----|---------|----------|--------------------|
| 8 | Página de preguntas frecuentes sectorial ("¿Cómo automatizar facturación en Argentina?", "¿Cuánto cuesta desarrollar software a medida?") | Contenido definitorio de categoría → topical authority en queries específicas | Alto | No (redacción editorial) |
| 9 | Participación genuina en LinkedIn y comunidades de Automatización / No-code / Python en Argentina | Plataformas comunitarias capturan 52,5 % de citas; presencia de autor refuerza entity | Continuo | Sí: aportes reales |
| 10 | `dateModified` real y freshing de páginas cada 2 meses | Páginas recientes reciben 28 % más citas; señal de contenido activo | Bajo (proceso editorial) | No |

---

## Fuentes principales

- [Frase.io — What is GEO? 2026 Guide](https://www.frase.io/blog/what-is-generative-engine-optimization-geo)
- [TechTimes — GEO 2026: How to Get Cited by ChatGPT and AI Overviews](https://www.techtimes.com/articles/318359/20260614/generative-engine-optimization-geo-2026-how-get-your-content-cited-chatgpt-ai-overviews.htm)
- [Superlines — AI Search Statistics 2026](https://www.superlines.io/articles/ai-search-statistics/)
- [SolvSpot — How to get cited by ChatGPT in 2026: B2B SaaS playbook](https://solvspot.com/blog/how-to-get-cited-by-chatgpt-2026)
- [ALM Corp — Entity Authority for AI Citations](https://almcorp.com/blog/entity-authority-ai-citations-structured-data/)
- [AuthorityTech — How to Get Your Brand Cited by ChatGPT, Perplexity, and Google AI Overviews](https://authoritytech.io/blog/how-to-get-cited-by-chatgpt-perplexity-ai-overview-2026)
- [EPC Group — G2, Capterra, and Clutch Reviews for AI Visibility 2026](https://www.epcgroup.net/blog/evidence-engine-g2-capterra-clutch-enterprise-2026)
- [Stackmatix — Structured Data AI Search 2026](https://www.stackmatix.com/blog/structured-data-ai-search)
- [Frase.io — FAQ Schema for AI Search, GEO & AEO](https://www.frase.io/blog/faq-schema-ai-search-geo-aeo)
- [Leapd.ai — How ChatGPT, Google AI Overviews, and Perplexity Source Information in 2026](https://www.leapd.ai/blog/ai-visibility/how-chatgpt-google-ai-overviews-and-perplexity-source-information-in-2026)
- [LLMrefs — Generative Engine Optimization: The 2026 Guide](https://llmrefs.com/generative-engine-optimization)
- [Yotpo — ChatGPT SEO & GEO 2026: 12 Tips To Get Cited](https://www.yotpo.com/blog/chatgpt-seo-geo-tips/)
- [SE Ranking — Review Platforms Top AI Overview Citations](https://seranking.com/blog/review-platforms-in-ai-overviews/)
- [Progress.com — SEO and GEO: A Practical Guide for 2026](https://www.progress.com/blogs/seo-and-geo-guide)
