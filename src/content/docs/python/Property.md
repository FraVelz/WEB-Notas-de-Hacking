---
title: Property
description: "@property, setter y deleter: métodos con sintaxis de atributo."
---

# Decorador @property

Convierte un método en acceso tipo atributo (`p.nombre` en vez de `p.get_nombre()`). Sirve para validar sin romper la API.

| Decorador | Qué hace | Uso |
| --------- | -------- | --- |
| `@property` | Getter | `print(p.nombre)` |
| `@nombre.setter` | Setter | `p.nombre = "Ana"` |
| `@nombre.deleter` | Deleter | `del p.nombre` |

## Solo lectura

```python
class Persona:
    def __init__(self, nombre):
        self.__nombre = nombre

    @property
    def nombre(self):
        return self.__nombre

p = Persona("Luis")
print(p.nombre)  # sin paréntesis
# p.nombre = "x"  → AttributeError (sin setter)
```

## Con setter

```python
class Persona:
    def __init__(self, nombre):
        self.__nombre = nombre

    @property
    def nombre(self):
        return self.__nombre

    @nombre.setter
    def nombre(self, nuevo):
        if len(nuevo) > 0:
            self.__nombre = nuevo
        else:
            raise ValueError("nombre vacío")

    @nombre.deleter
    def nombre(self):
        del self.__nombre
```

Comparar con métodos `get_`/`set_`: [Getters y setters](/WEB-Notas-de-Hacking/python/gettersetter/).

Docs: [property](https://docs.python.org/3/library/functions.html#property).
