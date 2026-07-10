---
title: Fundamentos
description: Shebang, variables, aritmética y `read` para scripts Bash.
---

# Fundamentos de Bash

Base para scripts: shebang, variables, aritmética y `read`.

Videos útiles (opcionales):

- [Bash desde cero — El pingüino de Mario (~30m)](https://www.youtube.com/watch?v=RUorAzaDftg)
- [Bash desde cero — Fazt (~2h)](https://www.youtube.com/watch?v=H4ayPYcZEfI)

---

## Shebang, echo y comentarios

```bash
#!/bin/bash
echo "hola mundo !!!"
# comentario de una línea

: '
comentario multilínea
con null command
'

<< 'EOF'
otro comentario
descartado (here-doc)
EOF
```

---

## Variables

Sin espacios alrededor del `=`. Todo es string. `$var` o `"$var"` (mejor con comillas si hay espacios).

```bash
name=Fravelz
today="10 09 2025"
message='hola $name'    # comillas simples: no expanden
readonly PI=3.1416
echo "Mi nombre es $name"
```

| Concepto | Significado |
| -------- | ----------- |
| `$0` | Nombre del script. |
| `$1` … `$n` | Argumentos posicionales. |
| `$#` | Número de argumentos. |
| `"$@"` | Todos los argumentos, separados. |
| `$?` | Código de salida del último comando. |
| `$$` | PID del shell. |
| `$!` | PID del último job en background. |
| `$HOME`, `$PATH`, `$USER` | Entorno habitual. |

---

## Aritmética

```bash
a=1
b=2
echo $((a + b))
echo $(expr $a + $b)
```

| Concepto | Significado |
| -------- | ----------- |
| `+` `-` `*` `/` | Suma, resta, mul, división entera. |
| `%` | Módulo. |
| `**` | Potencia (en `$(( ))`). |
| `$(( … ))` | Expansión aritmética de Bash. |
| `expr` | Aritmética clásica (espacios; escapar `*`). |

---

## read

| Comando | Qué hace | Ejemplo |
| ------- | -------- | ------- |
| `read var` | Lee una línea. | `read nombre` |
| `read -p "msg" var` | Prompt + lectura. | `read -p "User: " u` |
| `read -s var` | Silencioso (passwords). | `read -s pass` |
| `read -t N var` | Timeout N segundos. | `read -t 4 -p "> " v` |
| `read -n N var` | N caracteres. | `read -n 1 tecla` |
| `read -a arr` | Palabras → array. | `read -a campos` |

```bash
read -p "User: " user
read -t 4 -p "Escribe algo en 4 seg: " value
echo "Ingresaste $value"
```

Docs: [Bash manual](https://www.gnu.org/software/bash/manual/).
