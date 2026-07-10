---
title: Ayuda Linux
description: "Cómo pedir ayuda en la terminal: man, --help, info y apropos."
---

# Obtener ayuda

Cuando no recuerdas flags o ves un comando nuevo: `man`, `--help`/`-h` y `apropos`.

---

## man

Páginas de manual completas.

```bash
man ls
```

Dentro: `Espacio`/`f` avanza, `b` retrocede, `/texto` busca, `q` sale, `h` ayuda.

---

## --help y -h

Resumen rápido (no siempre existe `-h`; a veces es otra cosa, p. ej. “human-readable”).

```bash
ls --help
curl -h
```

| Comando | Qué hace | Ejemplo |
| ------- | -------- | ------- |
| `man cmd` | Manual completo. | `man find` |
| `cmd --help` | Uso y flags cortos. | `grep --help` |
| `cmd -h` | Ayuda corta (si la herramienta lo soporta). | `curl -h` |
| `apropos palabra` | Busca en descripciones de man. | `apropos sudo` |

---

## apropos

Busca por palabra clave en las descripciones de las páginas man.

```bash
apropos sudo
# sudo (8)       - execute a command as another user
# visudo (8)     - edit the sudoers file
# ...
```

Extra: [explainshell.com](https://explainshell.com/) desglosa un comando largo.

**Colaborador:** @studentethical (Student Ethical)
