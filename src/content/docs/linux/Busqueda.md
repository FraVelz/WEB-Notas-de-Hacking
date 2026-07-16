---
title: Busqueda
description: find, locate, which y grep para localizar archivos y texto.
---

# Búsqueda en Linux

Archivos con `find`/`locate`, texto con `grep`, ejecutables con `which`/`type`.

---

## find

| Comando | Qué hace | Ejemplo |
| ------- | -------- | ------- |
| `find / -name "f"` | Por nombre. | `find / -name "archivo.txt"` |
| `find … -iname` | Sin importar mayúsculas. | `find /home -iname "foto.png"` |
| `find … -type d/f` | Solo dirs / archivos. | `find /home -type d -name "Documentos"` |
| `find … -size +10M` | Por tamaño. | `find / -type f -size +10M` |
| `find … -exec … \;` | Comando sobre cada match. | `find /tmp -name "*.log" -exec rm {} \;` |

---

## grep

| Comando | Qué hace | Ejemplo |
| ------- | -------- | ------- |
| `grep pat file` | Busca en un archivo. | `grep "error" archivo.log` |
| `grep -r` | Recursivo. | `grep -r "usuario" /etc/` |
| `grep -n` | Con número de línea. | `grep -n "config" settings.conf` |
| `grep -i` | Ignora mayúsculas. | `grep -i "Warning" log` |
| `grep -l` | Solo nombres de archivo. | `grep -l "root" /etc/*` |
| `grep -rni` | Recursivo + línea + case-insensitive. | `grep -rni "palabra" .` |

---

## locate, which, historial

```bash
locate archivo.txt
sudo updatedb              # actualizar índice de locate

which python3
whereis bash
type ls

history | grep "ssh"
ps aux | grep firefox

tar -tzf archivo.tar.gz | grep "config"
strings archivo.bin | grep "password"
```

| Comando | Qué hace |
| ------- | -------- |
| `locate` | Búsqueda rápida por índice (hay que `updatedb`). |
| `which` / `whereis` / `type` | Ruta o tipo de un comando. |
| `history \| grep` | Comandos usados. |
| `ps aux \| grep` | Procesos. |
| `strings \| grep` | Texto legible en binarios. |

Más sobre `which`: [Which](/WEB-Notas-de-Hacking/linux/comandos/which/). Docs: [man
find](https://man7.org/linux/man-pages/man1/find.1.html), [man grep](https://man7.org/linux/man-pages/man1/grep.1.html).
