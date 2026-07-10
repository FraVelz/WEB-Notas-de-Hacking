---
title: Diff
description: Comparar archivos o directorios línea a línea con `diff` y opciones útiles.
---

# Diff en Linux

Compara dos archivos (o árboles) línea a línea y muestra qué cambia.

```bash
diff archivo1 archivo2
```

---

## Símbolos

| Concepto | Significado |
| -------- | ----------- |
| `<` | Línea del primer archivo. |
| `>` | Línea del segundo. |
| `a` / `c` / `d` | Add / change / delete. |
| `2c2` | Línea 2 del primero se cambia por la 2 del segundo. |

```bash
# archivo1: hola / mundo / como estas
# archivo2: hola / mundo!!! / como estas
diff archivo1.txt archivo2.txt
# 2c2
# < mundo
# ---
# > mundo!!!
```

---

## Opciones

| Comando | Qué hace | Ejemplo |
| ------- | -------- | ------- |
| `diff -u` | Formato unificado (estilo Git/patch). | `diff -u a.txt b.txt` |
| `diff -y` | Lado a lado. | `diff -y a.txt b.txt` |
| `diff -r` | Directorios recursivo. | `diff -r dir1/ dir2/` |
| `diff -i` | Ignora mayúsculas. | `diff -i a.txt b.txt` |
| `diff -q` | Solo si difieren. | `diff -q a.txt b.txt` |
| `diff -N` | Archivos ausentes como vacíos. | `diff -ruN old/ new/` |

```bash
diff -u archivo1.txt archivo2.txt
# --- archivo1.txt
# +++ archivo2.txt
# @@ -1,3 +1,3 @@
#  hola
# -mundo
# +mundo!!!
#  como estas
```

Parches: generar con `diff`, aplicar con `patch`. Docs: [man diff](https://man7.org/linux/man-pages/man1/diff.1.html).
