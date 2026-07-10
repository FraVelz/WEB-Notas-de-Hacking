---
title: Diff
description: Comparar archivos o directorios línea a línea con `diff` y opciones útiles.
---

# Diff en Linux

---

## Temario

### En resumen

El comando diff en Linux/Unix se usa para **comparar dos archivos (o carpetas)** línea por línea y mostrar **las
diferencias entre ellos**.

```bash
diff archivo1 archivo2
```

Muestra qué líneas **cambian, se agregan o eliminan** de un archivo respecto al otro.

---

### Ejemplo básico

Supongamos que tienes dos archivos:

### archivo1.txt:

```bash
hola
mundo
como estas
```

### archivo2.txt:

```bash
hola
mundo!!!
como estas
```

Sí ejecutas:

```bash
diff archivo1.txt archivo2.txt
```

La salida será:

```bash
2c2
< mundo
***
> mundo!!!
```

Significa:

- En la **línea 2** (2c2 → _línea 2 cambiada_),
- mundo fue reemplazado por mundo!!!.

---

### Símbolos principales

| Concepto | Significado |
| -------- | ----------- |
| `<` | Línea del primer archivo. |
| `>` | Línea del segundo archivo. |
| `a` | Añadir (add): líneas que hay que insertar. |
| `c` | Cambiar (change): líneas distintas. |
| `d` | Borrar (delete): líneas que hay que quitar. |
| `2c2` | La línea 2 del primero se cambia por la línea 2 del segundo. |

---

### Opciones útiles

| Comando | Qué hace | Ejemplo |
| ------- | -------- | ------- |
| `diff -u` | Formato unificado (estilo Git/patch). | `diff -u a.txt b.txt` |
| `diff -y` | Comparación lado a lado. | `diff -y a.txt b.txt` |
| `diff -r` | Compara directorios de forma recursiva. | `diff -r dir1/ dir2/` |
| `diff -i` | Ignora mayúsculas/minúsculas. | `diff -i a.txt b.txt` |
| `diff -q` | Solo indica si difieren (sin detalle). | `diff -q a.txt b.txt` |
| `diff -N` | Trata archivos ausentes como vacíos. | `diff -ruN old/ new/` |

Ejemplo:

```bash
diff -u archivo1.txt archivo2.txt
```

Salida tipo “Git”:

```bash
--- archivo1.txt
+++ archivo2.txt
@@ -1,3 +1,3 @@
hola
-mundo
+mundo!!!
como estas
```

---

### Usos comunes

- Ver qué cambió entre dos versiones de un archivo.
- Comparar archivos de configuración.
- Analizar diferencias en código fuente.
- Generar _parches_ con diff y aplicarlos con patch.
