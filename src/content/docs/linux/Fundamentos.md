---
title: Fundamentos
description: Shebang, variables, aritmética y `read` para scripts Bash.
---

# Fundamentos de Bash Script

---

**Recurso Extra:** Video de YouTube de Bash Script desde cero:

- [Ir a curso de bash script desde cero - El pinguino de mario (30m)](https://www.youtube.com/watch?v=RUorAzaDftg)
- [Ir a curso de bash script desde cero - Fazt (2h 23m)](https://www.youtube.com/watch?v=H4ayPYcZEfI)
- [Buscar curso de bash script desde cero](https://www.youtube.com/results?search_query=curso+de+bash+script+desde+cero)

---

## Cabecera del Script

La **cabecera** o _shebang_ indica qué intérprete ejecutará el script.

```bash
#!/bin/bash
```

---

## Imprimir texto y comentarios

Puedes imprimir texto con echo y escribir comentarios de varias formas.

```bash
# Imprimir texto
echo "hola mundo !!!"    # Imprime hola mundo por consola

# Esto es un comentario de una sola línea.
```

Comentarios multilínea pueden simularse con dos métodos:

```bash
: '
Comentario (*recomendado)
multilinea simulado
con null command con string.
'

<< 'EOF'
Comentario
multilinea simulado
con here document descartado.
EOF
```

---

## Variables en Bash

En Bash solo existe un tipo de dato: **string** (cadena de texto). Se puede escribir **sin comillas**, o con **comillas
simples** o **dobles**.

Ejemplo:

```bash
name=Fravelz
today="10 09 2025"
message='hola $name'
```

<blockquote>
Importante: No deben colocarse espacios al declarar una variable. Bash es sensible a los espacios.

</blockquote>
Para usar una variable se coloca $ antes de su nombre: $variable

### Variables especiales

| Concepto | Significado |
| -------- | ----------- |
| `$0` | Nombre del script. |
| `$1` … `$n` | Argumentos posicionales. |
| `$#` | Número de argumentos. |
| `"$@"` | Todos los argumentos, separados. |
| `$?` | Código de salida del último comando. |
| `$$` | PID del shell. |
| `$!` | PID del último job en background. |
| `$HOME`, `$PATH`, `$USER` | Variables de entorno habituales. |

Para imprimir valores (evitando errores con espacios), se recomienda:

```bash
echo "$variable"
```

---

## Strings

```bash
name=Fravelz
today="10 09 2025"
message='hola $name'
```

Los strings pueden ser multilínea (guarda exactamente los saltos de líneas que tenga):

```bash
text="
Este es un string
Multilinea :)
"
```

Llamar a variables e imprimir:

```bash
echo "Mi nombre es $name y estamos en el year $today"
echo $message
echo $text
```

---

## Valores constantes

Usa readonly para declarar constantes:

```bash
readonly PI=3.1416
```

---

## Operaciones matemáticas

Bash permite realizar operaciones aritméticas en las siguientes formas:

```bash
a=1
b=2

echo $((a + b))
echo $(expr $a + $b)
```

### Símbolos matemáticos

| Concepto | Significado |
| -------- | ----------- |
| `+` `-` `*` `/` | Suma, resta, multiplicación, división entera. |
| `%` | Módulo (resto). |
| `**` | Potencia (en `$(( ))`). |
| `$(( … ))` | Expansión aritmética de Bash. |
| `expr` | Aritmética clásica (espacios y escape de `*`). |

---

## Leer entrada del usuario

El comando read se usa para leer datos del usuario.

### Parámetros útiles

| Comando | Qué hace | Ejemplo |
| ------- | -------- | ------- |
| `read var` | Lee una línea a `var`. | `read nombre` |
| `read -p "msg" var` | Muestra prompt y lee. | `read -p "User: " u` |
| `read -s var` | Lectura silenciosa (passwords). | `read -s pass` |
| `read -t N var` | Timeout de N segundos. | `read -t 4 -p "> " v` |
| `read -n N var` | Lee N caracteres. | `read -n 1 tecla` |
| `read -a arr` | Guarda palabras en un array. | `read -a campos` |

Ejemplo:

```
echo "Cual es tu User?"
read user

echo "Cual es tu name?"
read -p name

read -t 4 -p "Escribe algo en 4 seg.:" value
echo "Ingresaste $value"
```
