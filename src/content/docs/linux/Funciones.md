---
title: Funciones
description: Funciones, variables locales/globales y argumentos en Bash.
---

# Funciones y argumentos en Bash

Bloques reutilizables, `local`, y los mismos `$1`/`$#`/`"$@"` que en scripts.

---

## Definir y llamar

```bash
mi_funcion() {
  echo "Hola desde la función"
}
mi_funcion
```

| Concepto | Significado |
| -------- | ----------- |
| `$1`, `$2`, … | Argumentos. |
| `$#` | Cantidad. |
| `"$@"` | Todos, separados (preferible en bucles). |
| `$*` | Todos según `IFS`. |
| `$?` | Código de salida del último comando. |
| `return` | Solo código 0–255, no “valores”. |
| `echo` + `$()` | Forma habitual de devolver texto. |
| `local` | Variable solo dentro de la función. |

```bash
saludar() {
  echo "Hola $1 $2"
}
saludar "Francisco" "Vélez"

sumar() {
  echo $(( $1 + $2 ))
}
resultado=$(sumar 5 7)   # 12
```

---

## local vs global

```bash
mensaje="Hola mundo"
cambiar() {
  local mensaje="Soy local"
  echo "Dentro: $mensaje"
}
echo "Antes: $mensaje"
cambiar
echo "Después: $mensaje"   # sigue "Hola mundo"
```

---

## Argumentos de script

```bash
#!/bin/bash
echo "Hola $1"
# bash script.sh Francisco
```

| Concepto | Significado |
| -------- | ----------- |
| `$0` | Ruta/nombre del script. |
| `$1` … `${10}` | Posicionales. |
| `$#` | Número de args. |
| `"$@"` | Lista (bucles). |
| `$$` / `$!` | PID shell / último background. |
| `shift` | Descarta `$1` y reindexa. |

```bash
if [ $# -ne 2 ]; then
  echo "Uso: $0 num1 num2"
  exit 1
fi

[ -z "$1" ] && { echo "falta argumento"; exit 1; }
[[ "$1" =~ ^[0-9]+$ ]] || { echo "no es número"; exit 1; }

for arg in "$@"; do
  echo "Argumento: $arg"
done

while [ $# -gt 0 ]; do
  echo "Actual: $1"
  shift
done
```

Mini calculadora:

```bash
#!/bin/bash
sumar() { echo $(( $1 + $2 )); }
restar() { echo $(( $1 - $2 )); }

[ $# -lt 3 ] && { echo "Uso: $0 [suma|resta] num1 num2"; exit 1; }
op=$1; shift
case $op in
  suma)  echo "Resultado: $(sumar $1 $2)" ;;
  resta) echo "Resultado: $(restar $1 $2)" ;;
  *)     echo "Operación inválida" ;;
esac
```

Docs: [Shell Functions](https://www.gnu.org/software/bash/manual/html_node/Shell-Functions.html).
