---
title: Manipulacion De Strings
description: Subcadenas, longitud, reemplazo y expansión de variables en Bash.
---

# Manipulación de strings en Bash

Todo es texto. Expansiones `${…}` sobre variables.

```bash
cadena="Hola Mundo"
```

---

## Operaciones

| Concepto | Significado | Ejemplo |
| -------- | ----------- | ------- |
| `${#var}` | Longitud. | `${#cadena}` → 10 |
| `${var:pos:len}` | Substring. | `${cadena:0:4}` → Hola |
| `${var:pos}` | Desde pos hasta el final. | `${cadena:5}` → Mundo |
| `${var/pat/rep}` | Primer reemplazo. | `${texto/na/NA}` |
| `${var//pat/rep}` | Todos los reemplazos. | `${texto//na/NA}` |
| `${var%suf}` / `${var%%suf}` | Quitar sufijo (corto / largo). | `${archivo%.txt}` |
| `${var#pref}` / `${var##pref}` | Quitar prefijo (corto / largo). | `${ruta##*/}` → basename |
| `${var^^}` / `${var,,}` | Mayúsculas / minúsculas (Bash 4+). | `${texto^^}` |

```bash
texto="banana"
echo "${texto/na/NA}"     # baNAna
echo "${texto//na/NA}"    # baNANA

archivo="documento.txt"
echo "${archivo%.txt}"    # documento

ruta="/home/user/docs/file.txt"
echo "${ruta##*/}"        # file.txt
```

---

## Concatenar, split, regex

```bash
nombre="Francisco"
saludo="Hola, $nombre"
full="Hola"; full+=" Mundo"

# split con IFS
frase="uno dos tres"
IFS=" " read -r -a palabras <<< "$frase"
echo "${palabras[0]}"     # uno

lista=("a" "b" "c")
IFS=","; echo "${lista[*]}"   # a,b,c

# contiene / regex
cadena="programacion"
[[ "$cadena" == *grama* ]] && echo "ok"
[[ "abc123" =~ ^[a-z]+[0-9]+$ ]] && echo "match"
```

Carácter a carácter:

```bash
texto="Hola"
for (( i=0; i<${#texto}; i++ )); do
  echo "${texto:$i:1}"
done
```

Docs: [Shell Parameter Expansion](https://www.gnu.org/software/bash/manual/html_node/Shell-Parameter-Expansion.html).
