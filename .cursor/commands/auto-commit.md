# Autocommit — WEB-Notas-de-Hacking (Astro + Starlight)

Usar cuando el usuario pida **hacer commit** del trabajo actual. Mensajes **Conventional Commits**, coherentes con
`git log` de este repo. **No** hacer `git push` salvo petición explícita.

## Cuándo ejecutar

- Invocación de **`/auto-commit`** o petición explícita de **commit** / **autocommit**.
- **No** commitear si el usuario no lo pidió.

## Antes de commitear

1. `git status` — staged y unstaged.
2. `git diff` — qué entra en el commit.
3. `git log -15 --oneline` — tono reciente.
4. **Respetar borrados:** si el diff elimina líneas o archivos, **no restaurarlos** ni "arreglar" el contenido antes del
   commit salvo petición explícita del usuario. Un borrado suele ser intencional.

**No** incluir `.env` ni `dist/` / `.astro/` salvo petición explícita.

## Ámbitos (`scope`) habituales en este repo

`docs`, `content`, `starlight`, `sidebar`, `styles`, `ci`, `readme`, `cursor`, `astro`, `theme`, `pages`.

Rutas de referencia: `src/content/docs/`, `starlight-sidebar.mjs`, `astro.config.mjs`, `src/styles/`, `public/`,
`README.md` / `README.EN.md`, `.cursor/commands/`, `.github/workflows/ci.yml`.

## Formas de mensaje

### A) Formato lista — varias áreas (preferido frente a varios tipos en una línea)

```text
feat(docs): add osint and linux content pages

docs(readme): align bilingual README with cursor commands
fix(content): repair broken links on index
```

### B) Formato clásico — un tema

```text
ci: fix workflow to use pnpm instead of npm
```

**Evitar** commits con muchos `feat:` / `docs:` / `delete:` encadenados en una sola línea; separar por líneas o commits
atómicos.

## Tipos

| Tipo       | Uso aquí                                  |
| ---------- | ----------------------------------------- |
| `feat`     | Contenido MDX/Markdown, páginas Starlight |
| `fix`      | Enlaces, sintaxis MD, CI                  |
| `docs`     | README, comandos `.cursor/`               |
| `refactor` | Estilos, tema, sidebar                    |
| `ci`       | `.github/workflows/ci.yml`                |
| `chore`    | Config Astro, deps                        |

## Commit

```bash
git commit -m "$(cat <<'EOF'
docs(readme): point to update-docs and auto-commit commands

ci: align build workflow with pnpm and astro check
EOF
)"
```

## Reglas

- Mensaje en **inglés**; respuesta al chat en **español**.
- Cumplir [`.cursor/rules/git-commits.mdc`](../rules/git-commits.mdc) (sin coautoría IA).
- Si el entorno inyecta `Co-authored-by: Cursor` y el commit **no está en remoto**: enmendar con el mismo texto sin ese
  trailer.
- Hook rechazado → nuevo commit; sin `--no-verify` salvo petición explícita.

## Comandos relacionados

- Documentación README: **`/update-docs`**.
