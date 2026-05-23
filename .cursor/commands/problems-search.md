# Auditoría global de problemas (`/problems-search`)

## Cuándo ejecutar

- El usuario invoca **`/problems-search`** o pide una **búsqueda / auditoría global** de problemas que puedan afectar la
  documentación o el despliegue.
- No implica corregir nada salvo que el usuario lo pida después; el objetivo primero es **inventariar y priorizar**.

## Objetivo

Recorrer el proyecto de forma **sistemática**, desde lo **más global y crítico** hasta lo **más local y menor impacto**,
y entregar un informe ordenado por **prioridad** (no por carpeta al azar).

Considerar siempre el **impacto en producción** (lectores, SEO, build/CI, GitHub Pages, enlaces rotos, accesibilidad del
contenido) y la **probabilidad** de que el problema ocurra en el sitio desplegado.

## Qué debe hacer el asistente

1. **Ejecutar comprobaciones automáticas** cuando sea posible (sin saltar hooks ni alterar git config):
   - `pnpm run build` (como en CI; genera `dist/` estático)
   - Opcional si aporta valor: `pnpm run scan:md` (si existe `scripts/scan-markdown.mjs`)
   - No hay script `lint` en `package.json`; si el usuario lo añade o hay ESLint configurado, ejecutarlo y reportar
2. **Revisar el código y la configuración** según las áreas del apartado «Factores y prioridades» (abajo).
3. **No inventar problemas**: cada hallazgo debe citar archivo/ruta o salida de comando; si algo es hipótesis, marcarlo
   como _posible_ y qué comprobaría.
4. **No commitear ni pushear** salvo petición explícita del usuario.

## Factores y prioridades (de mayor a menor)

Usar esta escala en el informe:

| Nivel  | Etiqueta | Criterio orientativo                                                                                                        |
| ------ | -------- | --------------------------------------------------------------------------------------------------------------------------- |
| **P0** | Crítico  | Rompe build, CI, despliegue en GitHub Pages, rutas principales inaccesibles o pérdida masiva de contenido.                  |
| **P1** | Alto     | Sidebar/enlaces rotos, `base` incorrecto, metadata/OG roto, MDX inválido, 404 sin ruta útil, regresión clara de navegación. |
| **P2** | Medio    | Contenido desalineado con sidebar, estilos rotos, imágenes/assets faltantes, deuda que facilita enlaces muertos.            |
| **P3** | Bajo     | Ortografía, copy, docs desactualizadas, mejoras opcionales de UX o SEO sin riesgo inmediato.                                |

### 1. Global e infraestructura (P0–P1)

- **Build y CI**: `.github/workflows/ci.yml` (build + deploy Pages), scripts en `package.json`, lockfile.
- **Config Astro**: `astro.config.mjs` — `output: 'static'`, `base: '/WEB-Notas-de-Hacking'`,
  `site: 'https://fravelz.github.io'`.
- **Integraciones**: Starlight + MDX; orden de integraciones; `disable404Route` vs `src/pages/404.astro`.
- **Dependencias**: versiones obsoletas con CVE conocidos (mencionar solo si hay evidencia razonable).

### 2. Starlight, sidebar y rutas (P0–P1)

- **`starlight-sidebar.mjs`**: slugs alineados con archivos en `src/content/docs/`; páginas en sidebar sin archivo o
  archivos huérfanos.
- Comentario en sidebar vs `index.md` (mapa de bienvenida): secciones listadas en uno y no en el otro.
- Enlaces en `index.md` y frontmatter: deben respetar el `base` (`/WEB-Notas-de-Hacking/...`) en producción.
- Colección de contenido: `src/content.config.ts`, esquema Starlight, frontmatter obligatorio (`title`, etc.).

### 3. Contenido Markdown y MDX (P1–P2)

- Archivos en `src/content/docs/`: enlaces internos rotos, rutas relativas incorrectas, bloques de código sin cerrar.
- Nombres de archivo vs slugs de Starlight (mayúsculas/minúsculas, guiones).
- Imágenes en `src/images/` o `public/`: rutas rotas, alt text ausente.
- Consistencia técnica del contenido (comandos, versiones de herramientas desactualizadas) — marcar como P2/P3 salvo
  error grave.

### 4. SEO, metadata y GitHub Pages (P1)

- Meta en `astro.config.mjs` (`head`: OG, Twitter, keywords, `Content-Language`).
- URLs absolutas con `https://fravelz.github.io/WEB-Notas-de-Hacking/...` coherentes con `base` y `site`.
- `screenshot.png` y `favicon` en `public/` accesibles tras deploy.
- `social` / enlaces externos (GitHub) válidos.

### 5. Estilos y presentación (P1–P2)

- `src/styles/theme.css`, `markdown-layout.css`: contraste, legibilidad, código en bloques.
- Componentes Astro custom si existen bajo `src/components/`.
- Responsive y menú lateral en móvil.

### 6. Accesibilidad del contenido (P1–P2)

- Jerarquía de encabezados en MD, tablas legibles, enlaces con texto descriptivo.
- Bloques de código: lenguaje indicado, longitud horizontal excesiva sin scroll.
- Imágenes decorativas vs informativas (`alt`).

### 7. Scripts y mantenimiento (P2–P3)

- `pnpm run scan:md` y scripts en `scripts/` si existen.
- `eslint.config.js` vs ausencia de script lint en `package.json` (config huérfana o pendiente de integrar).
- README del repo vs estructura real de carpetas en `src/content/docs/`.

### 8. Detalle y pulido (P3)

- Ortografía (español), typos en títulos de sidebar, notas de actualización desactualizadas.
- Mejoras opcionales de copy en `index.md` sin riesgo de build.

## Formato del informe (obligatorio)

Responder en **español**, con esta estructura:

```markdown
## Resumen ejecutivo

- X críticos (P0), Y altos (P1), …
- 1–3 frases: qué duele más y qué conviene atacar primero.

## P0 — Crítico

- [ ] **Título breve** — archivo/ruta — impacto — sugerencia de fix (1 línea)

## P1 — Alto

…

## P2 — Medio

…

## P3 — Bajo

…

## Comprobaciones ejecutadas

- Lista de comandos corridos y si pasaron o fallaron.

## Sin hallazgos relevantes

- Áreas revisadas donde no se detectó nada (opcional, breve).
```

- Máximo **~15–25 ítems** con impacto real; agrupar nitpicks en un solo bullet en P3 si hay muchos.
- Si no hay P0/P1, decirlo explícitamente y destacar el siguiente paso recomendado (p. ej. solo P2 de enlaces internos).

## Resumen para el agente

- Auditoría **de lo global a lo específico**, multi-factor, priorizada P0→P3.
- Evidencia con rutas y salidas de comandos; hipótesis marcadas como tales.
- Informe estructurado; **no** aplicar fixes masivos sin que el usuario lo pida.
