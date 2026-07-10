---
title: Arrays
description: Definir, indexar y recorrer arrays indexados y asociativos en Bash.
---

# Arrays en Bash

Listas indexadas y (Bash 4+) asociativas. Siempre entre comillas al expandir: `"${arr[@]}"`.

---

## Definir y acceder

```bash
nombres=("Ana" "Luis" "Pedro")
numeros[0]=10
numeros[1]=20

echo "${nombres[0]}"      # Ana
echo "${nombres[@]}"      # todos
echo "${#nombres[@]}"     # tamaño → 3
echo "${nombres[@]:1:2}"  # slice: desde 1, 2 elems
```

| Concepto | Significado |
| -------- | ----------- |
| `arr=(a b c)` | Definir. |
| `${arr[i]}` | Elemento i. |
| `${arr[@]}` / `${arr[*]}` | Todos (mejor `@` en bucles). |
| `${#arr[@]}` | Longitud. |
| `${!arr[@]}` | Índices. |
| `arr+=("x")` | Añadir al final. |
| `unset arr[i]` | Quitar un índice. |
| `declare -A` | Array asociativo (Bash 4+). |

---

## Recorrer / modificar

```bash
for nombre in "${nombres[@]}"; do
  echo "Hola $nombre"
done

for i in "${!nombres[@]}"; do
  echo "Índice: $i → ${nombres[$i]}"
done

nombres+=("Carla")
nombres[1]="Lucía"
unset nombres[1]
```

---

## Asociativos

```bash
declare -A capitales
capitales[Colombia]="Bogotá"
capitales[México]="CDMX"

echo "${capitales[Colombia]}"
for pais in "${!capitales[@]}"; do
  echo "$pais → ${capitales[$pais]}"
done
```

Ordenar números:

```bash
numeros=(3 8 1)
sorted=($(printf '%s\n' "${numeros[@]}" | sort -n))
echo "${sorted[@]}"   # 1 3 8
```

Docs: [Bash arrays](https://www.gnu.org/software/bash/manual/html_node/Arrays.html).
