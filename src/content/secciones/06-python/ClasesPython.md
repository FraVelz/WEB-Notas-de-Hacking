---
title: ClasesPython
route: /python/ClasesPython
---

# Clases en Python
---

## ¿Qué es una clase en Python? {#qué-es-una-clase-en-python}
Una **clase** es una **plantilla o molde** para crear **objetos** (instancias) que agrupan **datos (atributos)** y **funciones (métodos)** relacionados.

Los **objetos** son las copias o instancias creadas a partir de esa clase.

---

## Sintaxis básica {#sintaxis-básica}
```python
class Persona:
def __init__(self, nombre, edad):  # Constructor
self.nombre = nombre           # Atributos
self.edad = edad

def saludar(self):                 # Método
print(f"Hola, soy (self.nombre) y tengo (self.edad) años")

# Crear objeto
p1 = Persona("Francisco", 17)
p1.saludar()
```

### Explicación {#explicación}
- class Persona: → define la clase.
- __init__ → **constructor**, se ejecuta al crear el objeto.
- self → referencia al **objeto actual** (similar a this en otros lenguajes).
- p1 → **instancia** de la clase Persona.

---

## Atributos {#atributos}
### 1. De instancia {#de-instancia}
Son únicos para cada objeto:
```python
class Coche:
def __init__(self, marca):
self.marca = marca
```

### 2. De clase {#de-clase}
Son **compartidos por todas las instancias**:
```python
class Coche:
ruedas = 4  # atributo de clase
def __init__(self, marca):
self.marca = marca
```
```python
a = Coche("Toyota")
b = Coche("Honda")
print(a.ruedas, b.ruedas)  # ambos tienen 4
```

---

## Métodos {#métodos}
### Método de instancia {#método-de-instancia}
Opera sobre el objeto (self).
```python
def mostrar(self):
print(self.nombre)
```

### Método de clase {#método-de-clase}
Opera sobre la clase, no sobre un objeto.
```python
@classmethod
def crear_desde_edad(cls, edad):
return cls("Desconocido", edad)
```

### Método estático {#método-estático}
No usa self ni cls. Funciona como una función normal dentro de la clase.
```python
@staticmethod
def es_mayor(edad):
return edad >= 18
```

---

## Herencia {#herencia}
Permite crear una clase nueva basada en otra (reutiliza código).
```python
class Animal:
def hablar(self):
print("El animal hace un sonido")

class Perro(Animal):  # Hereda de Animal
def hablar(self):
print("Guau")

p = Perro()
p.hablar()
```

✔️ La clase hija **sobrescribe** métodos de la clase padre. ✔️ Se puede usar super() para llamar métodos del padre.

---

## Polimorfismo {#polimorfismo}
Diferentes clases pueden usar el mismo método con comportamientos distintos:
```python
class Gato:
def hablar(self): print("Miau")

class Perro:
def hablar(self): print("Guau")

for animal in [Gato(), Perro()]:
animal.hablar()
```

---

## Encapsulación {#encapsulación}
Controla la visibilidad de los atributos/métodos.

<!-- Tabla convertida manualmente -->

```python
class Persona:
def __init__(self, nombre):
self.__nombre = nombre  # privado

def mostrar(self):
print(self.__nombre)
```

---

## Propiedades (<span className="citation" data-cites="property">@property</span>) {#propiedades-property}
Permiten acceder a métodos como sí fueran atributos.
```python
class Rectangulo:
def __init__(self, base, altura):
self.base = base
self.altura = altura

@property
def area(self):
return self.base * self.altura

r = Rectangulo(4, 5)
print(r.area)  # No se usa paréntesis
```

---

## Composición {#composición}
Una clase contiene objetos de otras clases:
```python
class Motor:
def arrancar(self):
print("Motor encendido")

class Coche:
def __init__(self):
self.motor = Motor()

c = Coche()
c.motor.arrancar()
```

---

## Ejemplo completo {#ejemplo-completo}
```python
class CuentaBancaria:
tasa_interes = 0.05  # atributo de clase

def __init__(self, titular, saldo=0):
self.titular = titular
self.__saldo = saldo  # privado

def depositar(self, cantidad):
self.__saldo += cantidad

def retirar(self, cantidad):
if cantidad <= self.__saldo:
self.__saldo -= cantidad
else:
print("Fondos insuficientes")

@property
def saldo(self):
return self.__saldo

# Uso
cuenta = CuentaBancaria("Francisco", 1000)
cuenta.depositar(500)
cuenta.retirar(200)
print(cuenta.saldo)
```

---

## Resumen rápido {#resumen-rápido}
<!-- Tabla convertida manualmente -->