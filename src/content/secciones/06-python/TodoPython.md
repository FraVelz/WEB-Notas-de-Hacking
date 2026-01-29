---
title: TodoPython
route: /python/TodoPython
---

# Python
**Recurso extra:** Video de YouTube - python desde cero:

- [Ir a curso de Python Básico Completo - YoSoyDalto (8h)](https://www.youtube.com/watch?v=nKPbfIU442g)

---

## 1. ¿Qué es Python? {#qué-es-python}
**Python** es un lenguaje de programación:

- **Interpretado** (no necesitas compilar).
- **De alto nivel** (fácil de leer).
- **Multiparadigma** (permite programación estructurada, orientada a objetos y funcional).
- **De propósito general** (sirve para web, IA, hacking, data science, automatización, etc.).

Ejemplo básico:
```python
print("Hola, mundo!")
```

---

## 2. Sintaxis básica {#sintaxis-básica}
### Variables y tipos de datos {#variables-y-tipos-de-datos}
```python
nombre = "Francisco"
edad = 17
altura = 1.75
es_estudiante = True
```

Tipos básicos:

- int: números enteros
- float: decimales
- str: texto
- bool: verdadero/falso

### Operadores {#operadores}
```python
a = 5
b = 2
print(a + b)  # Suma
print(a ** b) # Potencia
print(a // b) # División entera
```

---

## 3. Control de flujo {#control-de-flujo}
### Condicionales {#condicionales}
```python
if edad >= 18:
print("Eres adulto")
elif edad >= 13:
print("Eres adolescente")
else:
print("Eres niño")
```

### Bucles {#bucles}
```python
for i in range(5):
print(i)  # Imprime 0 a 4

while edad < 18:
edad += 1
```

---

## 4. Estructuras de datos {#estructuras-de-datos}
### Listas {#listas}
```python
nombres = ["Ana", "Luis", "Carlos"]
nombres.append("Sofía")
print(nombres[0])  # "Ana"
```

### Tuplas {#tuplas}
```python
coordenadas = (10, 20)
```

### Conjuntos {#conjuntos}
```python
numeros = {"{1, 2, 3, 3}"}
print(numeros)  # {"{1, 2, 3}"} (no repite)
```

### Diccionarios {#diccionarios}
```python
persona = {"nombre": "Francisco", "edad": 17I}
print(persona["nombre"])
```

---

## 5. Funciones {#funciones}
```python
def saludar(nombre):
return f"Hola, {"{nombre}"}"

print(saludar("Francisco"))
```

---

## 6. Programación orientada a objetos (POO) {#programación-orientada-a-objetos-poo}
```python
class Persona:
def __init__(self, nombre, edad):
self.nombre = nombre
self.edad = edad

def saludar(self):
print(f"Hola, soy {"{self.nombre}"}")

p1 = Persona("Francisco", 17)
p1.saludar()
```

---

## 7. Módulos y paquetes {#módulos-y-paquetes}
```python
import math
print(math.sqrt(16))  # 4.0
```

También puedes crear tus propios módulos (mimodulo.py) y luego:
```python
import mimodulo
```

---

## 8. Archivos {#archivos}
```python
with open("datos.txt", "w") as archivo:
archivo.write("Hola mundo")

with open("datos.txt", "r") as archivo:
print(archivo.read())
```

---

## 9. Librerías populares (por áreas) {#librerías-populares-por-áreas}
<!-- Tabla convertida manualmente -->

---

## 10. Conceptos avanzados {#conceptos-avanzados}
- **List comprehensions:** ```python
cuadrados = [x**2 for x in range(5)]
```

- **Funciones lambda:** ```python
doble = lambda x: x*2
```

- **Decoradores**
- **Generadores (yield)**
- **Manejo de errores (try/except)**
- **Multithreading y multiprocessing**
- **Expresiones regulares (re)**
- **Ejecutar:** python archivo.py
- **Gestor de paquetes:** pip install nombre_paquete
- **Entornos virtuales:** ```bash
python -m venv entorno source entorno/bin/activate # Linux entorno\Scripts\activate # Windows
```