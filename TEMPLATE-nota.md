# Plantilla de nota (lab / docs)

Copia este archivo al crear una nota nueva bajo `src/content/docs/`. Sustituye los placeholders.

```markdown
---
title: Título corto
description: Una frase concreta del tema (sin “Notas de hacking…” genérico).
---

# Título

## Objetivo

(1 párrafo: qué sabrá hacer el lector)

## Prerequisitos

- Nota o tool X
- Nota Y

## Entorno lab

VM / WSL / red aislada. Solo entornos propios o autorizados.

## Pasos

1. …
2. …

## Verificación

Qué salida o estado confirma el éxito.

## Referencias

- [Nombre](https://…) — acceso AAAA-MM-DD

## Advertencia

(Legal/ética si aplica; omitir si no hace falta)
```

Reglas: voz de apunte (`.cursor/rules/notas-voz.mdc`); enlaces internos con base
`/WEB-Notas-de-Hacking/...`; `pnpm lint:md` antes del PR.
