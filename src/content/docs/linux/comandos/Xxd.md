---
title: Xxd
description: Volcado hex/binario con `xxd` (inspección y reverse `-r`).
---

# Xxd en Linux

Hex dump de binarios (y reverse: hex → binario). Útil para inspeccionar bytes o reconstruir archivos.

```bash
xxd [opciones] [archivo]
```

---

## Comandos

| Comando | Qué hace | Ejemplo |
| ------- | -------- | ------- |
| `xxd archivo` | Hex dump con offset y ASCII. | `xxd archivo.bin` |
| `xxd -p` | Hex plano (sin columnas). | `xxd -p archivo.bin` |
| `xxd -r` | Reverse: hex → binario. | `xxd -r hex.txt > out.bin` |
| `xxd -l N` | Solo los primeros N bytes. | `xxd -l 16 archivo.bin` |
| `xxd -s N` | Empieza en el offset N. | `xxd -s 0x100 f.bin` |

```bash
xxd archivo.bin
# 00000000: 486f 6c61 206d 756e 646f          Hola mundo
# offset | bytes hex | ASCII

cat archivo | xxd
cat archivo_hex.txt | xxd -r > archivo_original
xxd -p archivo.bin
# 486f6c61206d756e646f
```

Docs: [man xxd](https://linux.die.net/man/1/xxd).
