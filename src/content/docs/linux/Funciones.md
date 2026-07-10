---
title: Funciones
description: Funciones, variables locales/globales y argumentos en Bash.
---

# Funciones, Variables y Argumentos en Bash Script

Este documento explica como usar **funciones**, **variables globales y locales**, y **argumentos**.

---

## 1. Definición de funciones

En Bash, una función agrupa comandos que puedes reutilizar. Existen dos formas equivalentes:

```bash
# Forma 1 (más común)
mi_funcion() {
echo "Hola desde la función"

# Forma 2 (menos usada)
function mi_funcion2 }
echo "Hola desde la función 2"

```

### Llamar una función:

```bash
mi_funcion
```

---

## 2. Parámetros en funciones

Los argumentos se manejan igual que en un script:

| Concepto | Significado |
| -------- | ----------- |
| `$0` | Nombre del script o de la función (según el contexto). |
| `$1`, `$2`, … | Primer, segundo, … argumento. |
| `$#` | Cantidad de argumentos. |
| `$@` | Todos los argumentos, cada uno como palabra separada. |
| `$*` | Todos los argumentos como una sola cadena (según `IFS`). |
| `$?` | Código de salida del último comando. |

Ejemplo:

```bash
saludar() {
echo "Hola $1 $2"

saludar "Francisco" "Vélez"
# → Hola Francisco Vélez
```

---

## 3. Devolver valores

En Bash, return solo devuelve **códigos de salida (= éxito, ≠0 = error)**. Para devolver datos reales se usa echo y
**captura de comandos**:

```bash
sumar() {
echo $(( $1 + $2 ))

resultado=$(sumar 5 7)
echo "La suma es: $resultado"
# → La suma es: 12
```

---

## 4. Variables Globales y Locales

Por defecto, todas las variables son **globales**. Para que existan solo dentro de la función, usa local.

```bash
mensaje="Hola mundo"

cambiar() {
local mensaje="Soy local"
echo "Dentro: $mensaje"

echo "Antes: $mensaje"
cambiar
echo "Después: $mensaje"
```

### Diferencias clave:

| Concepto | Significado |
| -------- | ----------- |
| Variable global | Visible en todo el script; se declara sin `local`. |
| Variable `local` | Solo existe dentro de la función; no pisa la global homónima. |
| Sin `local` | Asignar dentro de la función también cambia la global. |

Usa **local** para evitar modificar variables globales sin querer.

---

## 5. Argumentos en scripts

Cuando ejecutas un script, puedes pasarle argumentos:

```bash
#!/bin/bash
echo "Hola $1"
```

Ejecución:

```bash
bash script.sh Francisco
# → Hola Francisco
```

Variables especiales:

| Concepto | Significado |
| -------- | ----------- |
| `$0` | Ruta/nombre del script. |
| `$1` … `$9` | Argumentos posicionales (más allá: `${10}`, etc.). |
| `$#` | Número de argumentos recibidos. |
| `"$@"` | Lista de argumentos (preferible en bucles). |
| `$$` | PID del shell actual. |
| `$!` | PID del último proceso en segundo plano. |
| `$?` | Código de salida del último comando (0 = OK). |

---

## 6. Validaciones útiles

### Validar número de argumentos:

```bash
if [ $# -ne 2 ]; then
echo "Uso: $0 num1 num2"
exit 1
fi
```

### Validar argumento vacío:

```bash
if [ -z "$1" ]; then
echo "Error: falta argumento"
exit 1
fi
```

### Validar que sea un número:

```bash
if ! [[ "$1" =~ ^[0-9]+$ ]]; then
echo "Error: $1 no es un número"
exit 1
fi
```

---

## 7. Recorrer argumentos

### Con for

```bash
for arg in "$@"; do
echo "Argumento: $arg"
done
```

### Con shift

shift elimina el primer argumento ($1) y mueve los demás a la izquierda.

```bash
while [ $# -gt 0 ]; do
echo "Actual: $1"
shift
done
```

shift 2 eliminaría los dos primeros argumentos de golpe.

---

## 8. Ejemplo práctico: mini calculadora

```bash
#!/bin/bash

sumar() { echo $(( $1 + $2 )); }
restar() { echo $(( $1 - $2 )); }

if [ $# -lt 3 ]; then
echo "Uso: $0 [suma|resta] num1 num2"
exit 1
fi

op=$1
shift

case $op in
suma)  echo "Resultado: $(sumar $1 $2)" ;;
resta) echo "Resultado: $(restar $1 $2)" ;;
*)     echo "Operación inválida" ;;
esac
```

---

## En resumen

| Concepto | Significado |
| -------- | ----------- |
| Función | Bloque reutilizable: `nombre() { … }`. |
| `return` | Solo código de salida (0–255), no “valores” de datos. |
| `echo` + `$()` | Forma habitual de “devolver” texto desde una función. |
| `local` | Aísla variables dentro de la función. |
| `$1`, `$#`, `"$@"` | Argumentos de función o de script. |
| `shift` | Descarta `$1` y reindexa el resto. |
