---
title: Entrada YSalida
description: Redirecciones, pipes, descriptores 0/1/2, `tee` y `cat` en Bash.
---

# Entradas y salidas en Bash

Redirigir stdin/stdout/stderr, encadenar con pipes y duplicar salida con `tee`.

---

## Descriptores

| Concepto | Significado |
| -------- | ----------- |
| `0` stdin | Entrada (teclado por defecto). |
| `1` stdout | Salida normal. |
| `2` stderr | Errores. |

`>` equivale a `1>`. Descriptores 3+ para casos avanzados.

| Comando | Qué hace | Ejemplo |
| ------- | -------- | ------- |
| `>` | Sobrescribe stdout. | `echo hola > out.txt` |
| `>>` | Append stdout. | `echo mundo >> out.txt` |
| `<` | Archivo como stdin. | `cat < in.txt` |
| `2>` | Solo stderr. | `ls x 2> err.txt` |
| `> file 2>&1` | stdout+stderr a `file`. | `cmd > todo.txt 2>&1` |
| `&>` | Atajo bash: ambos. | `cmd &> todo.txt` |
| `\|` | Pipe stdout → stdin. | `ls \| grep .txt` |

```bash
echo "hola," > ./salida.txt
echo "mundo!" >> ./salida.txt
ls noExiste 2> errores.txt
comando > todo.txt 2>&1          # errores al mismo sitio que la salida
ls carpeta_inexistente &> salida.txt
ls | grep .txt
```

---

## cat y tee

```bash
cat archivo.txt
cat a.txt b.txt > c.txt
cat > nuevo.txt          # escribir; CTRL+D para terminar

echo "Hola mundo" | tee salida.txt       # pantalla + archivo
ls | tee -a lista.txt                    # append
ls | tee a.txt b.txt                     # varios archivos
```

| Concepto | Significado |
| -------- | ----------- |
| `cat` | Ver, unir o crear por stdin. |
| `tee` | Escribe a archivo y sigue mostrando en pantalla. |
| `tee -a` | Append. |

Docs: [Redirections (Bash)](https://www.gnu.org/software/bash/manual/html_node/Redirections.html).
