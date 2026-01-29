---
title: Re
route: /python/modulos/Re
---

# Re en Python (expreciones regulares)
---

## ¿Qué es re? {#qué-es-re}
El módulo **re** (de *regular expressions*, expresiones regulares) permite **buscar, reemplazar y analizar texto mediante patrones**.

Se importa con:
```python
import re
```

---

## FUNCIONES PRINCIPALES {#funciones-principales}
### 1. re.match(patrón, texto) {#re.matchpatrón-texto}
Busca **solo al inicio del texto**.
```python
import re
m = re.match(r"Hola", "Hola mundo")
print(m.group())  # Hola
```

---

### 2. re.search(patrón, texto) {#re.searchpatrón-texto}
Busca **en cualquier parte** del texto (la primera coincidencia).
```python
re.search(r"mundo", "Hola mundo").group()  # mundo
```

---

### 3. re.findall(patrón, texto) {#re.findallpatrón-texto}
Devuelve **todas las coincidencias** en una lista.
```python
re.findall(r"\d+", "Edad 17 años, código 2025")  # ['17', '2025']
```

---

### 4. re.finditer(patrón, texto) {#re.finditerpatrón-texto}
Devuelve un **iterador** con objetos Match (útil para posiciones).
```python
for m in re.finditer(r"\d+", "x=5 y=10 z=20"):
print(m.group(), m.start(), m.end())
```

---

### 5. re.sub(patrón, reemplazo, texto, count=0) {#re.subpatrón-reemplazo-texto-count0}
**Reemplaza** coincidencias por otro texto.
```python
re.sub(r"\d+", "X", "Tengo 2 perros y 3 gatos")  # 'Tengo X perros y X gatos'
```

---

### 6. re.split(patrón, texto, maxsplit=0) {#re.splitpatrón-texto-maxsplit0}
**Divide el texto** usando el patrón como separador.
```python
re.split(r"\s+", "uno   dos tres")  # ['uno', 'dos', 'tres']
```

---

### 7. re.compile(patrón, flags=0) {#re.compilepatrón-flags0}
Compila el patrón para reutilizarlo muchas veces (más eficiente).
```python
patron = re.compile(r"\d+")
print(patron.findall("a1b22c333"))  # ['1', '22', '333']
```

---

## OBJETOS Match {#objetos-match}
Cuando haces match() o search(), obtienes un objeto con información útil:
```python
m = re.search(r"(\d+)", "Edad: 25 años")
print(m.group())    # '25'
print(m.start())    # 6
print(m.end())      # 8
print(m.span())     # (6, 8)
```

Sí hay **grupos** (entre paréntesis):
```python
m = re.search(r"(\d+)\s*(años)", "Edad: 25 años")
print(m.groups())   # ('25', 'años')
print(m.group(1))   # '25'
print(m.group(2))   # 'años'
```

---

## METACARACTERES MÁS IMPORTANTES {#metacaracteres-más-importantes}
<!-- Tabla convertida manualmente -->

---

## SECUENCIAS ESPECIALES {#secuencias-especiales}
<!-- Tabla convertida manualmente -->

---

## FLAGS COMUNES {#flags-comunes}
<!-- Tabla convertida manualmente -->

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

## EJEMPLOS PRÁCTICOS {#ejemplos-prácticos}
### 1. Validar un correo electrónico {#validar-un-correo-electrónico}
```python
import re
patron = r"^[\w\.-]+@[\w\.-]+\.\w+$"
print(bool(re.match(patron, "usuario@mail.com")))  # True
```

---

### 2. Extraer números de un texto {#extraer-números-de-un-texto}
```python
re.findall(r"\d+", "ID123, edad 45, año 2025")  # ['123', '45', '2025']
```

---

### 3. Reemplazar palabras {#reemplazar-palabras}
```python
texto = "Hola mundo cruel"
nuevo = re.sub(r"cruel", "hermoso", texto)
print(nuevo)  # Hola mundo hermoso
```

---

### 4. Separar texto por comas o espacios {#separar-texto-por-comas-o-espacios}
```python
re.split(r"[, ]+", "rojo, verde azul,amarillo")  # ['rojo', 'verde', 'azul', 'amarillo']
```

---

## Buenas prácticas {#buenas-prácticas}
✅ Usa r"./..." (raw strings) para no tener que escapar \. ✅ Compila patrones que usarás muchas veces con re.compile(). ✅ Usa re.fullmatch() sí necesitas que toda la cadena coincida. ✅ Usa ? después de * o + para **modo no codicioso** (lazy).
```python
re.findall(r"", "")  # ['', '']
```

---

## Ejercicio rápido {#ejercicio-rápido}
Extrae todos los nombres de usuario de correos:
```python
import re
texto = "Correos: ana@mail.com, juan123@dominio.org"
print(re.findall(r"(\w+)@", texto))  # ['ana', 'juan123']
```