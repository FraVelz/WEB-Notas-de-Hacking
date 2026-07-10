---
title: Less
description: Paginador `less` para leer archivos y salidas largas en terminal.
---

# Less en Linux

Paginador: muestra el contenido por pantallas (logs, configs, pipes largos). No edita.

```bash
less archivo.txt
ls -l | less
```

---

## Controles

| Concepto | Significado |
| -------- | ----------- |
| `Espacio` / `f` | Página siguiente. |
| `b` | Página anterior. |
| `↑`/`↓` o `j`/`k` | Línea arriba / abajo. |
| `g` / `G` | Inicio / final. |
| `/texto` | Buscar adelante. |
| `?texto` | Buscar atrás. |
| `n` / `N` | Siguiente / anterior match. |
| `:n` / `:p` | Siguiente / anterior archivo (si abriste varios). |
| `q` | Salir. |
| `h` | Ayuda de teclas. |

```bash
less *.txt
less /var/log/syslog   # luego /error para buscar
```

Docs: [man less](https://man7.org/linux/man-pages/man1/less.1.html).
