---
title: Condiciones
description: Comparaciones numéricas y de cadenas con `if`, `test`, `[ ]` y `[[ ]]`.
---

# Condiciones en Bash

No hay booleanos nativos: los comandos devuelven **0 = verdadero**, distinto de 0 = falso (`true` / `false`).

---

## Operadores

| Concepto | Significado |
| -------- | ----------- |
| `-eq` `-ne` `-lt` `-le` `-gt` `-ge` | Comparar números. |
| `=` / `==` | Cadenas iguales (`=` en `[ ]`). |
| `!=` | Cadenas distintas. |
| `-z` / `-n` | Vacía / no vacía. |
| `<` / `>` | Orden lexicográfico (mejor en `[[ ]]`). |

```bash
[ "$a" -gt 10 ]
[[ -z "$1" ]]
[[ "$user" == "root" ]]
```

---

## if / test / [[ ]]

`[ ]` ≈ `test`. Espacios obligatorios tras `[` y antes de `]`. Preferir `[[ ]]` (más seguro, `&&`/`||` dentro).

```bash
if [ 3 -gt 4 ]; then
  echo "Mayor que 4"
elif false; then
  echo "Nunca"
else
  echo "4 o menor"
fi

if [ 10 -lt 14 ] && [ 10 -gt 12 ]; then
  echo "verdadero"
fi

if [[ 10 -lt 14 && 10 -gt 12 ]]; then
  echo "verdadero"
fi
```

Formas equivalentes:

```bash
test condition
[ condition ]
[[ condition || condition ]]

if test 10 -eq 10; then
  echo "10 es igual a 10"
fi
```

Docs: [Bash Conditional Constructs](https://www.gnu.org/software/bash/manual/html_node/Conditional-Constructs.html).
