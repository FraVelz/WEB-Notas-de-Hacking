---
title: Cifrado Cesar Tr
description: ROT13 y cifrado César con el comando tr en Linux.
---

# Cifrado César con tr

ROT13 con `tr`: cada letra se sustituye por la que está 13 posiciones más adelante. Aplicarlo dos veces vuelve al original.

```bash
cat data.txt | tr '[A-Za-z]' '[N-ZA-Mn-za-m]'
```

| Parte | Qué hace |
| ----- | -------- |
| `cat data.txt` | Manda el texto por stdout. |
| `\| tr 'set1' 'set2'` | Sustituye cada carácter de set1 por el de set2. |
| `[A-Za-z]` | Alfabeto completo. |
| `[N-ZA-Mn-za-m]` | Mismo alfabeto rotado 13. |

![Alfabeto con rotación para cifrado César](/WEB-Notas-de-Hacking/imagenes/abdcedario-cifrado-con-tr.png)

```bash
# data.txt → Hola Mundo
cat data.txt | tr '[A-Za-z]' '[N-ZA-Mn-za-m]'
# Ubya Zhaqb
```

César con otro desplazamiento: cambia el segundo conjunto (p. ej. rotar 3: `[D-ZA-Cd-za-c]`). Docs: [man tr](https://man7.org/linux/man-pages/man1/tr.1.html).
