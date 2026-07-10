# Notas de Hacking

[English version](./README.EN.md)

Sitio publicado en: [https://fravelz.github.io/WEB-Notas-de-Hacking/](https://fravelz.github.io/WEB-Notas-de-Hacking/)

![Captura de pantalla](./public/screenshot.png)

Guía para aprender o repasar ciberseguridad desde cero. Es un sitio estático generado con [Astro](https://astro.build/)
y el tema [Starlight](https://starlight.astro.build/): las notas viven en Markdown (y MDX donde aplica), con búsqueda,
tema oscuro y barra lateral definida explícitamente para mantener el orden de los temas.

Con esta carpeta como raíz del workspace en Cursor, los comandos `/update-docs` y `/auto-commit` están en
[`.cursor/commands/`](.cursor/commands/) para mantener documentación bilingüe y commits alineados al repo.

## ✨ Características

- **Contenido por secciones**: notas agrupadas (Linux, Python, Windows, redes, pentesting, etc.).
- **Búsqueda**: incluida por Starlight sobre títulos y cuerpo de las páginas.
- **Tabla de contenidos**: por página cuando aplica.
- **Tema personalizado**: paleta en `src/styles/theme.css` y contenido Markdown / foco / selección en
  `src/styles/markdown-layout.css`, cargados en orden como `customCss` de Starlight (`astro.config.mjs`).
- **Responsive**: enlaces públicos desde GitHub Pages (`base`: `/WEB-Notas-de-Hacking`).

## 🛠️ Tecnologías

- **[Astro 5](https://astro.build/)** — generador del sitio y rutas estáticas.
- **[@astrojs/starlight](https://starlight.astro.build/)** — documentación, navegación y búsqueda.
- **[@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/)** — Markdown con componentes cuando hace
  falta.
- **[TypeScript](https://www.typescriptlang.org/)** — tipos en configuración y tipos de contenido.
- **[Content Collections](https://docs.astro.build/en/guides/content-collections/)** — colección `docs` en
  `src/content/docs` (definida en `src/content.config.ts`).

## 🚀 Desarrollo local

Requisitos: Node.js compatible con Astro 5. El repo incluye `pnpm-lock.yaml` (recomendado usar
[pnpm](https://pnpm.io/)).

```bash
pnpm install
pnpm dev
```

Otros comandos útiles:

- `pnpm build` — genera la salida en `dist/` (lista para GitHub Pages con el `base` configurado).
- `pnpm preview` — sirve el build localmente para revisar antes de desplegar.

## 📁 Estructura del proyecto

```text
├── public/                    # Estáticos (favicon, capturas, robots, etc.)
├── src/
│   ├── content/
│   │   └── docs/               # Notas Markdown / MDX (rutas = slugs Starlight)
│   ├── pages/
│   │   └── 404.astro           # 404 personalizado (Starlight tiene disable404Route)
│   ├── styles/
│   │   ├── theme.css           # Paleta (--sl-*) y modo claro/oscuro
│   │   └── markdown-layout.css # Tablas, listas, código en línea, foco, selección
│   ├── content.config.ts       # Colección `docs` (loader y schema de Starlight)
│   └── env.d.ts
├── astro.config.mjs            # Integraciones Starlight + MDX, site/base, metadatos
├── starlight-sidebar.mjs       # Árbol y orden del menú lateral
└── package.json
```

La barra lateral no se deduce solo de carpetas: el orden visible lo controla **`starlight-sidebar.mjs`** para alinearlo
con la página de inicio (`src/content/docs/index.md`).

## 🎯 Áreas de contenido

- **Conceptos básicos** — fundamentos, legalidad, mitos.
- **Virtualización** — conceptos y notas relacionadas.
- **Linux** — comandos, bash, Bandit y subpáginas de comandos.
- **Python** — lenguaje y módulos (subprocess, threading, sockets, etc.).
- **Windows** — PowerShell, permisos, procesos y administración.
- **Redes** — teoría, subnetting, herramientas.
- **Pentesting** — fases, tipos de entornos (cajas).
- **OSINT** — terminología, Google dorks, básicos.
- **Anonimato** — privacidad, huella digital, filtraciones, user-agent.
- **Otros** — ramas de ciberseguridad, herramientas, recursos, actualizaciones.

## 📝 Información

**Licencia:** Apache License 2.0

### Fravelz

- GitHub: [@fravelz](https://github.com/fravelz)
- Repositorio: [WEB-Notas-de-Hacking](https://github.com/FraVelz/WEB-Notas-de-Hacking)

## 🙏 Contribuciones

Las contribuciones son bienvenidas. Si encuentras errores o tienes sugerencias, abre un issue o un pull request.

---

Si te resulta útil el proyecto, puedes darle una estrella en GitHub.
