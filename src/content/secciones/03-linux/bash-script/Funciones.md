---
title: Funciones
route: /linux/bash-script/Funciones
---

# Funciones, Variables y Argumentos en Bash Script
Este documento explica como usar **funciones**, **variables globales y locales**, y **argumentos**.

---

## 1. Definición de funciones {#1-definición-de-funciones}
En Bash, una función agrupa comandos que puedes reutilizar. Existen dos formas equivalentes:
```bash
# Forma 1 (más común)
mi_funcion() {
echo "Hola desde la función"

# Forma 2 (menos usada)
function mi_funcion2 }
echo "Hola desde la función 2"

```

**Llamar una función:**
```bash
mi_funcion
```

---

## 2. Parámetros en funciones {#2-parámetros-en-funciones}
Los argumentos se manejan igual que en un script:

<!-- Tabla convertida manualmente -->

Ejemplo:
```bash
saludar() {
echo "Hola $1 $2"

saludar "Francisco" "Vélez"
# → Hola Francisco Vélez
```

---

## 3. Devolver valores {#3-devolver-valores}
En Bash, return solo devuelve **códigos de salida (= éxito, ≠0 = error)**. Para devolver datos reales se usa echo y **captura de comandos**:
```bash
sumar() {
echo $(( $1 + $2 ))

resultado=$(sumar 5 7)
echo "La suma es: $resultado"
# → La suma es: 12
```

---

## 4. Variables Globales y Locales {#4-variables-globales-y-locales}
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

**Diferencias clave:**

<!-- Tabla convertida manualmente -->

Usa **local** para evitar modificar variables globales sin querer.

---

## 5. Argumentos en scripts {#5-argumentos-en-scripts}
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

<!-- Tabla convertida manualmente -->

---

## 6. Validaciones útiles {#6-validaciones-útiles}
**Validar número de argumentos:**
```bash
if [ $# -ne 2 ]; then
echo "Uso: $0 num1 num2"
exit 1
fi
```

**Validar argumento vacío:**
```bash
if [ -z "$1" ]; then
echo "Error: falta argumento"
exit 1
fi
```

**Validar que sea un número:**
```bash
if ! [[ "$1" =~ ^[0-9]+$ ]]; then
echo "Error: $1 no es un número"
exit 1
fi
```

---

## 7. Recorrer argumentos {#7-recorrer-argumentos}
### Con for {#con-for}
```bash
for arg in "$@"; do
echo "Argumento: $arg"
done
```

### Con shift {#con-shift}
shift elimina el primer argumento ($1) y mueve los demás a la izquierda.
```bash
while [ $# -gt 0 ]; do
echo "Actual: $1"
shift
done
```

shift 2 eliminaría los dos primeros argumentos de golpe.

---

## 8. Ejemplo práctico: mini calculadora {#8-ejemplo-práctico-mini-calculadora}
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

## En resumen {#en-resumen}
<!-- Tabla convertida manualmente -->