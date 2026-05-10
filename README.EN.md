# Hacking Notes

[Versión en español](./README.md)

Live site: [https://fravelz.github.io/WEB-Notas-de-Hacking/](https://fravelz.github.io/WEB-Notas-de-Hacking/)

![Screenshot](./public/screenshot.png)

A guide to learn or refresh cybersecurity from the ground up. It is a static site built with [Astro](https://astro.build/) and the [Starlight](https://starlight.astro.build/) theme: notes are written in Markdown (and MDX where needed), with search, dark theme, and an explicit sidebar to keep topics in a sensible order.

## ✨ Features

- **Sectioned content**: notes grouped by area (Linux, Python, Windows, networking, pentesting, and more).
- **Search**: provided by Starlight across titles and page body.
- **Table of contents**: per page when applicable.
- **Custom theme**: palette in `src/styles/theme.css` plus Markdown content / focus / selection in `src/styles/markdown-layout.css`, loaded in sequence as Starlight `customCss` (`astro.config.mjs`).
- **Responsive**: deployed on GitHub Pages with `base` set to `/WEB-Notas-de-Hacking`.

## 🛠️ Stack

- **[Astro 5](https://astro.build/)** — static site generator and routing.
- **[@astrojs/starlight](https://starlight.astro.build/)** — docs layout, navigation, and search.
- **[@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/)** — Markdown with components where needed.
- **[TypeScript](https://www.typescriptlang.org/)** — typings for config and content layer.
- **[Content Collections](https://docs.astro.build/en/guides/content-collections/)** — `docs` collection under `src/content/docs`, defined in `src/content.config.ts`.

## 🚀 Local development

Requirements: a Node.js version compatible with Astro 5. This repo ships with `pnpm-lock.yaml`; [pnpm](https://pnpm.io/) is recommended.

```bash
pnpm install
pnpm dev
```

Other useful commands:

- `pnpm build` — writes output to `dist/` (ready for GitHub Pages with the configured `base`).
- `pnpm preview` — serves the production build locally before deploy.

## 📁 Project layout

```text
├── public/                    # Static assets (favicon, screenshots, robots, etc.)
├── src/
│   ├── content/
│   │   └── docs/               # Markdown / MDX notes (Starlight slugs / routes)
│   ├── pages/
│   │   └── 404.astro           # Custom 404 (Starlight’s default route is disabled)
│   ├── styles/
│   │   ├── theme.css           # Palette (--sl-*) and light/dark modes
│   │   └── markdown-layout.css # Tables, lists, inline code, focus, selection
│   ├── content.config.ts       # `docs` collection (Starlight loader + schema)
│   └── env.d.ts
├── astro.config.mjs           # Starlight + MDX, site/base, head metadata
├── starlight-sidebar.mjs      # Sidebar tree and ordering
└── package.json
```

The sidebar order is **not** inferred from folders alone: **`starlight-sidebar.mjs`** keeps it aligned with the welcome page (`src/content/docs/index.md`).

## 🎯 Content areas

- **Basic concepts** — fundamentals, legal aspects, myths.
- **Virtualization** — concepts and related notes.
- **Linux** — commands, Bash, Bandit walkthrough-style notes, command cheat pages.
- **Python** — language topics and modules (subprocess, threading, sockets, and more).
- **Windows** — PowerShell, permissions, processes, administration.
- **Networking** — theory, subnetting, tools.
- **Penetration testing** — phases, lab styles (boxes).
- **OSINT** — terminology, Google dorks, introductory material.
- **Anonymity** — privacy, digital footprint, leaks, user-agent.
- **Other** — security branches, tooling, resources, changelog-style notes.

## 📝 Details

**License:** Apache License 2.0

**Fravelz**

- GitHub: [@fravelz](https://github.com/fravelz)
- Repository: [WEB-Notas-de-Hacking](https://github.com/FraVelz/WEB-Notas-de-Hacking)

## 🙏 Contributing

Contributions are welcome. If you spot mistakes or have suggestions, open an issue or a pull request.

---

If this project helps you, consider starring it on GitHub.

> This document was generated or updated with AI assistance. Last updated: **May 10, 2026**.
