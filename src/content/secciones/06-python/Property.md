---
title: Property
route: /python/Property
---

# Decorador <span className="citation" data-cites="property">@property</span>
@property se usa para **encapsular atributos**, **añadir validaciones o lógica interna**, pero sin cambiar la forma natural de acceder o modificar una variable.

---

## ¿Qué hace @property en Python? {#qué-hace-property-en-python}
El decorador **@property** convierte un **método de una clase** en un **atributo “solo de lectura”** (al menos inicialmente).

Sirve para **controlar cómo se accede a un atributo**, pero permitiendo que el código **parezca estar accediendo directamente a una variable**.

En otras palabras:

<blockquote>
Permite usar *métodos* como sí fueran *atributos*, **sin cambiar la sintaxis de acceso**.

</blockquote>
---

## Ejemplo básico sin @property {#ejemplo-básico-sin-property}
```python
class Persona:
def __init__(self, nombre):
self.__nombre = nombre  # atributo privado

def get_nombre(self):
return self.__nombre
```

Uso:
```python
p = Persona("Ana")
print(p.get_nombre())  # ✅ Funciona
```

Pero se ve *feo* tener que escribir .get_nombre() cada vez. Ahí entra @property.

---

## Con @property {#con-property}
```python
class Persona:
def __init__(self, nombre):
self.__nombre = nombre

@property
def nombre(self):
return self.__nombre
```

Uso:
```python
p = Persona("Luis")
print(p.nombre)  # ✅ Sin paréntesis, parece un atributo
```

- Python llama automáticamente al método nombre() cuando escribes p.nombre.
- Es solo de lectura por ahora (no se puede cambiar el valor directamente).

---

## Agregando un <strong>setter</strong> para modificar el valor {#agregando-un-setter-para-modificar-el-valor}
```python
class Persona:
def __init__(self, nombre):
self.__nombre = nombre

@property
def nombre(self):
return self.__nombre

@nombre.setter
def nombre(self, nuevo_nombre):
if len(nuevo_nombre) > 0:
self.__nombre = nuevo_nombre
else:
print("❌ El nombre no puede estar vacío.")
```

Uso:
```python
p = Persona("Carlos")
print(p.nombre)   # ✅ Getter
p.nombre = "Andrés"  # ✅ Setter
print(p.nombre)   # Andrés
p.nombre = ""     # ❌ El nombre no puede estar vacío.
```

---

## También existe el deleter (opcional) {#también-existe-el-deleter-opcional}
```python
@nombre.deleter
def nombre(self):
print("Eliminando el nombre...")
del self.__nombre
```

---

## En resumen {#en-resumen}
<!-- Tabla convertida manualmente -->