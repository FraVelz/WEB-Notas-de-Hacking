---
title: Entrada YSalida
description: Redirecciones, pipes, descriptores 0/1/2, `tee` y `cat` en Bash.
---

# Entradas y Salidas en Bash Script

Este documento explica como usar la **redirección de contenido en bash script** de (entradas y salidas y errores en
bash).

---

## Descriptores de archivos

En Bash hay **3 descriptores de archivos principales**:

| Concepto | Significado |
| -------- | ----------- |
| `0` stdin | Entrada estándar (teclado por defecto). |
| `1` stdout | Salida estándar (pantalla). |
| `2` stderr | Salida de errores. |

Los descriptores **3, 4, 5, …** son opcionales y se usan en programas más avanzados. Para referirse a un descriptor se
usa su número (por ejemplo 2&gt; archivo). Para el descriptor **1**, el número puede omitirse (&gt; equivale a 1&gt;).

### 1 Entrada: redirigir desde un archivo &lt;

```bash
cat < ./4.estControl.sh
```

### 2 Salida: redirigir la salida normal &gt; y &gt;&gt;

```bash
echo "hola," > ./salida.txt    # Sobrescribe el archivo
echo "mundo!" >> ./salida.txt  # Agrega al final
```

### 3 Errores: redirigir errores 2&gt;

```bash
ls noExiste 2> errores.txt
```

---

## Juntar salida y errores

```bash
comando > todo.txt 2>&1
```

Esto significa:

- El descriptor **1 (salida estándar)** se envía al archivo todo.txt.
- El descriptor **2 (errores)** se redirige hacia donde va la salida estándar (&amp;1).

En resumen:

<blockquote>
“Manda los errores al mismo lugar donde está yendo la salida normal”.

</blockquote>

| Comando | Qué hace | Ejemplo |
| ------- | -------- | ------- |
| `>` | Sobrescribe stdout en un archivo. | `echo hola > out.txt` |
| `>>` | Añade stdout al final. | `echo mundo >> out.txt` |
| `<` | Usa un archivo como stdin. | `cat < in.txt` |
| `2>` | Redirige solo stderr. | `ls x 2> err.txt` |
| `> file 2>&1` | Junta stdout y stderr en `file`. | `cmd > todo.txt 2>&1` |
| `&>` | Atajo bash: stdout+stderr. | `cmd &> todo.txt` |
| `\|` | Pipe: stdout del izquierdo → stdin del derecho. | `ls \| grep .txt` |

---

## Pipes (|)

```bash
ls | grep .txt
```

Envía la salida de ls al comando grep, que muestra solo los archivos .txt.

---

## Redirección combinada &amp;&gt;

```bash
ls carpeta_inexistente &> salida.txt
```

Equivale a:

```bash
ls carpeta_inexistente > salida.txt 2>&1
```

---

## Comando cat (concatenate)

```bash
cat ./1.comandosBash/5.EntradaYSalida.sh    # Mostrar un archivo
cat a.txt b.txt > c.txt                     # Unir archivos
cat a.txt >> b.txt                          # Añadir uno al final del otro
```

También puedes crear un archivo nuevo escribiendo directamente:

```bash
cat > nuevo.txt
Hola
Mundo
# (Presiona CTRL+D para terminar)
```

---

## Comando tee

El comando tee **guarda la salida en archivos y también la muestra en pantalla**.

```bash
echo "Hola mundo" | tee salida.txt          # Guardar y mostrar
ls | tee -a lista.txt                       # Modo append
ls | tee archivo1.txt archivo2.txt          # Guardar en varios archivos
```

---

### Resumen rápido

| Concepto | Significado |
| -------- | ----------- |
| stdin / stdout / stderr | Descriptores 0, 1 y 2. |
| `>` / `>>` / `<` | Redirigir salida, append y entrada. |
| `2>&1` / `&>` | Mezclar errores con la salida normal. |
| `\|` | Encadenar comandos. |
| `tee` | Escribir a archivo y seguir mostrando en pantalla. |
| `cat` | Ver, unir o crear archivos por stdin. |
