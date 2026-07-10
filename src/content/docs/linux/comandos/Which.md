---
title: Which
description: Localiza la ruta del ejecutable que usará el shell según `$PATH`.
---

# Which en Linux

Muestra la ruta del ejecutable que se usará según `$PATH`.

| Comando | Qué hace | Ejemplo |
| ------- | -------- | ------- |
| `which cmd` | Primera ruta de `cmd` en `$PATH`. | `which python` |
| `which -a cmd` | Todas las coincidencias (orden de prioridad). | `which -a python` |

```bash
which python
# /usr/bin/python

which -a python
# /usr/bin/python
# /usr/local/bin/python

which pepe
# pepe not found
```

Alternativas: `command -v python` o `type -a python` (built-in del shell; a menudo más fiables).

Docs: [man which](https://man7.org/linux/man-pages/man1/which.1.html).
