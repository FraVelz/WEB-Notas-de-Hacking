---
title: EntradaYSalida
route: /linux/bash-script/EntradaYSalida
---

# Entradas y Salidas en Bash Script
Este documento explica como usar la **redirección de contenido en bash script** de (entradas y salidas y errores en bash).

---

## Descriptores de archivos {#descriptores-de-archivos}
En Bash hay **3 descriptores de archivos principales**:

<!-- Tabla convertida manualmente -->

Los descriptores **3, 4, 5, …** son opcionales y se usan en programas más avanzados. Para referirse a un descriptor se usa su número (por ejemplo 2&gt; archivo). Para el descriptor **1**, el número puede omitirse (&gt; equivale a 1&gt;).

### 1 Entrada: redirigir desde un archivo &lt; {#1-entrada-redirigir-desde-un-archivo-}
```bash
cat < ./4.estControl.sh
```

### 2 Salida: redirigir la salida normal &gt; y &gt;&gt; {#2-salida-redirigir-la-salida-normal--y-}
```bash
echo "hola," > ./salida.txt    # Sobrescribe el archivo
echo "mundo!" >> ./salida.txt  # Agrega al final
```

### 3 Errores: redirigir errores 2&gt; {#3-errores-redirigir-errores-2}
```bash
ls noExiste 2> errores.txt
```

---

## Juntar salida y errores {#juntar-salida-y-errores}
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

<!-- Tabla convertida manualmente -->

---

## Pipes (|) {#pipes}
```bash
ls | grep .txt
```

Envía la salida de ls al comando grep, que muestra solo los archivos .txt.

---

## Redirección combinada &amp;&gt; {#redirección-combinada}
```bash
ls carpeta_inexistente &> salida.txt
```

Equivale a:
```bash
ls carpeta_inexistente > salida.txt 2>&1
```

---

## Comando cat (concatenate) {#comando-cat-concatenate}
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

## Comando tee {#comando-tee}
El comando tee **guarda la salida en archivos y también la muestra en pantalla**.
```bash
echo "Hola mundo" | tee salida.txt          # Guardar y mostrar
ls | tee -a lista.txt                       # Modo append
ls | tee archivo1.txt archivo2.txt          # Guardar en varios archivos
```

---

### Resumen rápido {#resumen-rápido}
<!-- Tabla convertida manualmente -->