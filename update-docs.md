# Instrucciones para actualizar la documentación del repo (`README`)

Cuando el usuario **adjunta o menciona este archivo** (`update-docs.md`) en el chat, el asistente debe aplicar las reglas siguientes antes de responder.

## Objetivo

Mantener alineados **`README.md`** (español) y **`README.EN.md`** (inglés) con el estado real del proyecto, **sin cambiar la estructura ni el orden de secciones** descritos más abajo.

## Archivos a tocar

- `README.md` — español
- `README.EN.md` — inglés

No ampliar el alcance a otros markdown salvo que el usuario lo pida aparte.

## Enlace bilingüe en la cabecera (obligatorio)

El **texto del enlace debe estar en el idioma del archivo al que lleva**, no del archivo en el que está.

| Archivo        | Ubicación                    | Enlace hacia     | Texto del enlace (ejemplo obligatorio)                               |
| -------------- | ---------------------------- | ---------------- | -------------------------------------------------------------------- |
| `README.md`    | Justo tras el `#` del título | `./README.EN.md` | **English version** (nunca «Versión en inglés» en el README español) |
| `README.EN.md` | Justo tras el `#` del título | `./README.md`    | **Versión en español** (never “Spanish version” on the English page) |

Usar rutas relativas exactamente como en la tabla (`./README.EN.md` y `./README.md`).

## Conservar la estructura

Respetar **este orden y estos encabezados** (los títulos con emoji deben mantenerse tal cual salvo errores ortográficos corregibles en la misma lengua):

1. `#` — título del documento (`Notas de Hacking` / `Hacking Notes`)
2. Línea con enlace bilingüe (regla anterior)
3. Sitio publicado — una línea con el enlace a GitHub Pages (misma URL en ambos; el texto alrededor en el idioma del archivo)
4. Imagen de captura (`./public/screenshot.png`) — `![Captura de pantalla]` / `![Screenshot]`
5. Párrafo introductorio
6. `## ✨ Características` / `## ✨ Features`
7. `## 🛠️ Tecnologías` / `## 🛠️ Stack`
8. `## 🚀 Desarrollo local` / `## 🚀 Local development`
9. `## 📁 Estructura del proyecto` / `## 📁 Project layout` (bloque `text` con el árbol)
10. Párrafo sobre `starlight-sidebar.mjs`
11. `## 🎯 Áreas de contenido` / `## 🎯 Content areas`
12. `## 📝 Información` / `## 📝 Details`
13. `## 🙏 Contribuciones` / `## 🙏 Contributing`
14. `---`
15. Cierre amigable (estrella en GitHub, en el idioma del archivo)
16. **Pie de asistencia de IA** (siguiente sección)

No reordenar secciones, no fusionarlas y no cambiar convenciones (por ejemplo lista con guiones largos `—` en español donde ya existan).

## Pie final: texto generado con IA + fecha

**Al final absoluto de cada README**, después del cierre amigable y del `---` si ya existe ese bloque, añadir (o sustituir si ya existe un bloque de cita similar) **una línea en bloque cita**:

- En **`README.md`** (español):

  ```markdown
  > Este documento fue generado o actualizado con asistencia de inteligencia artificial. Última actualización: **DD de mes de AAAA** (fecha del día en que se aplica el cambio; usar español para el nombre del mes).
  ```

- En **`README.EN.md`** (inglés):

  ```markdown
  > This document was generated or updated with AI assistance. Last updated: **Month DD, YYYY** (calendar date when the update is applied; month name in English).
  ```

Si ambos README se editan el mismo día, ambos deben mostrar **la misma fecha calendario** con formato adaptado al idioma de cada archivo.

## Contenido a verificar en cada pasada

Al actualizar, contrastar contra el código y la config cuando sea relevante:

- `package.json` — scripts (`dev`, `build`, `preview`) y gestor de paquetes (`pnpm` si existe `pnpm-lock.yaml`)
- `astro.config.mjs` — `base`, `site`, integraciones Starlight/MDX
- `src/content.config.ts` y `src/content/docs/`
- `starlight-sidebar.mjs` — áreas listadas en README coherentes con el menú
- Estructura de carpetas en el bloque `text` (sin inventar archivos que no existan)

Si algo del README deja de ser cierto, corregirlo en **ambos** idiomas de forma paralela.

## Idioma de la conversación

Si el usuario pide respuestas en español, el mensaje de chat sigue en español; los README mantienen cada uno su lengua fija (es / en).
