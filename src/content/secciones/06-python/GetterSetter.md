---
title: GetterSetter
route: /python/GetterSetter
---

# Getters y Setters
---

## ¿Qué son los getters y setters? {#qué-son-los-getters-y-setters}
- **Getter:** método que **obtiene** (lee) el valor de un atributo.
- **Setter:** método que **establece** (modifica) el valor de un atributo.

Se usan para **controlar el acceso a los atributos** de una clase, especialmente cuando son “protegidos” o “privados”.

---

## Ejemplo básico {#ejemplo-básico}
```python
class Persona:
def __init__(self, nombre):
self.__nombre = nombre  # atributo privado

# Getter
def get_nombre(self):
return self.__nombre

# Setter
def set_nombre(self, nuevo_nombre):
if len(nuevo_nombre) > 0:
self.__nombre = nuevo_nombre
else:
print("❌ El nombre no puede estar vacío.")
```

Uso:
```python
p = Persona("Ana")
print(p.get_nombre())  # ✅ Ana

p.set_nombre("Luis")
print(p.get_nombre())  # ✅ Luis

p.set_nombre("")  # ❌ El nombre no puede estar vacío.
```

---

## Pero Python tiene una forma más elegante → <strong>@property</strong> {#pero-python-tiene-una-forma-más-elegante-property}
Python permite crear *getters* y *setters* de manera más limpia y natural usando **decoradores**.

### Ejemplo con @property {#ejemplo-con-property}
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

Ahora se usa como sí fuera un **atributo normal**:
```python
p = Persona("Carlos")

print(p.nombre)   # ✅ Llama automáticamente al getter
p.nombre = "Andrés"  # ✅ Llama automáticamente al setter

print(p.nombre)   # ✅ Andrés
p.nombre = ""     # ❌ El nombre no puede estar vacío.
```

---

## Ventajas de usar <span className="citation" data-cites="property">@property</span> {#ventajas-de-usar-property}
✅ No cambias la forma de usar los atributos. ✅ Puedes añadir validaciones sin romper el código existente. ✅ Encapsulas correctamente los datos. ✅ Evitas accesos o cambios indebidos.

---

## En resumen {#en-resumen}
<!-- Tabla convertida manualmente -->