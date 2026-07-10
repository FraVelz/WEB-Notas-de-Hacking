---
title: Re
description: Buscar, reemplazar y validar texto con expresiones regulares usando el módulo re.
---

# Re en Python (expresiones regulares)

---

## ¿Qué es re?

El módulo **re** (de _regular expressions_, expresiones regulares) permite **buscar, reemplazar y analizar texto
mediante patrones**.

Se importa con:

```python
import re
```

---

## FUNCIONES PRINCIPALES

### 1. re.match(patrón, texto)

Busca **solo al inicio del texto**.

```python
import re
m = re.match(r"Hola", "Hola mundo")
print(m.group())  # Hola
```

---

### 2. re.search(patrón, texto)

Busca **en cualquier parte** del texto (la primera coincidencia).

```python
re.search(r"mundo", "Hola mundo").group()  # mundo
```

---

### 3. re.findall(patrón, texto)

Devuelve **todas las coincidencias** en una lista.

```python
re.findall(r"\d+", "Edad 17 años, código 2025")  # ['17', '2025']
```

---

### 4. re.finditer(patrón, texto)

Devuelve un **iterador** con objetos Match (útil para posiciones).

```python
for m in re.finditer(r"\d+", "x=5 y=10 z=20"):
    print(m.group(), m.start(), m.end())
```

---

### 5. re.sub(patrón, reemplazo, texto, count=0)

**Reemplaza** coincidencias por otro texto.

```python
re.sub(r"\d+", "X", "Tengo 2 perros y 3 gatos")  # 'Tengo X perros y X gatos'
```

---

### 6. re.split(patrón, texto, maxsplit=0)

**Divide el texto** usando el patrón como separador.

```python
re.split(r"\s+", "uno   dos tres")  # ['uno', 'dos', 'tres']
```

---

### 7. re.compile(patrón, flags=0)

Compila el patrón para reutilizarlo muchas veces (más eficiente).

```python
patron = re.compile(r"\d+")
print(patron.findall("a1b22c333"))  # ['1', '22', '333']
```

---

## OBJETOS Match

Cuando haces match() o search(), obtienes un objeto con información útil:

```python
m = re.search(r"(\d+)", "Edad: 25 años")
print(m.group())    # '25'
print(m.start())    # 6
print(m.end())      # 8
print(m.span())     # (6, 8)
```

Si hay **grupos** (entre paréntesis):

```python
m = re.search(r"(\d+)\s*(años)", "Edad: 25 años")
print(m.groups())   # ('25', 'años')
print(m.group(1))   # '25'
print(m.group(2))   # 'años'
```

---

## METACARACTERES MÁS IMPORTANTES

| Metacaracter | Significado | Ejemplo |
| --- | --- | --- |
| `.` | Cualquier carácter (excepto salto de línea) | `a.c` → `abc` |
| `^` | Inicio de cadena / línea | `^Hola` |
| `$` | Fin de cadena / línea | `mundo$` |
| `*` | 0 o más repeticiones | `ab*` → `a`, `ab`, `abb` |
| `+` | 1 o más repeticiones | `\d+` → `17` |
| `?` | 0 o 1 (opcional) / modo lazy | `colou?r` |
| `{n}` / `{n,m}` | Exactamente n / entre n y m | `\d{4}` |
| `[]` | Clase de caracteres | `[aeiou]` |
| `\|` | Alternativa (OR) | `gato\|gato` |
| `()` | Grupo de captura | `(\d+)-(\d+)` |
| `\` | Escapa metacaracteres | `\.` → punto literal |

---

## SECUENCIAS ESPECIALES

| Secuencia | Significado | Ejemplo |
| --- | --- | --- |
| `\d` | Dígito `[0-9]` | `\d+` → `2025` |
| `\D` | No dígito | `\D+` → `abc` |
| `\w` | Letra, dígito o `_` | `\w+` → `user_1` |
| `\W` | No “word char” | `\W` → `@` |
| `\s` | Espacio en blanco | `\s+` |
| `\S` | No espacio | `\S+` |
| `\b` | Límite de palabra | `\bhola\b` |
| `\A` / `\Z` | Inicio / fin de toda la cadena | `\AOK\Z` |

---

## FLAGS COMUNES

| Flag | Qué hace | Ejemplo |
| --- | --- | --- |
| `re.IGNORECASE` / `re.I` | Ignora mayúsculas/minúsculas | `re.search(r"hola", "HOLA", re.I)` |
| `re.MULTILINE` / `re.M` | `^` y `$` por cada línea | `re.findall(r"^#.*", texto, re.M)` |
| `re.DOTALL` / `re.S` | `.` también coincide con `\n` | `re.search(r"a.*b", texto, re.S)` |
| `re.VERBOSE` / `re.X` | Permite comentarios y espacios en el patrón | Ver ejemplo abajo |
| `re.ASCII` / `re.A` | `\w`, `\d`, etc. solo ASCII | `re.findall(r"\w+", s, re.A)` |

Ejemplo:

```python
patron = re.compile(r"""
^\d{4}     # 4 dígitos al inicio
-\d{2}     # guion y 2 dígitos
-\d{2}$    # guion y 2 dígitos al final
""", re.VERBOSE)
print(bool(patron.match("2025-10-27")))  # True
```

---

## EJEMPLOS PRÁCTICOS

### 1. Validar un correo electrónico

```python
import re
patron = r"^[\w\.-]+@[\w\.-]+\.\w+$"
print(bool(re.match(patron, "usuario@mail.com")))  # True
```

---

### 2. Extraer números de un texto

```python
re.findall(r"\d+", "ID123, edad 45, año 2025")  # ['123', '45', '2025']
```

---

### 3. Reemplazar palabras

```python
texto = "Hola mundo cruel"
nuevo = re.sub(r"cruel", "hermoso", texto)
print(nuevo)  # Hola mundo hermoso
```

---

### 4. Separar texto por comas o espacios

```python
re.split(r"[, ]+", "rojo, verde azul,amarillo")  # ['rojo', 'verde', 'azul', 'amarillo']
```

---

## Buenas prácticas

- Usa `r"..."` (raw strings) para no tener que escapar `\`.
- Compila patrones que usarás muchas veces con `re.compile()`.
- Usa `re.fullmatch()` si necesitas que toda la cadena coincida.
- Usa `?` después de `*` o `+` para **modo no codicioso** (lazy).

```python
re.findall(r"<.*?>", "<a>uno</a><b>dos</b>")  # ['<a>', '</a>', '<b>', '</b>']
```

---

## Ejercicio rápido

Extrae todos los nombres de usuario de correos:

```python
import re
texto = "Correos: ana@mail.com, juan123@dominio.org"
print(re.findall(r"(\w+)@", texto))  # ['ana', 'juan123']
```
