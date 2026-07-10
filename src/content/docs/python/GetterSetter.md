---
title: Getter Setter
description: Getters/setters clásicos vs @property para validar atributos.
---

# Getters y setters

Controlar lectura/escritura de atributos (sobre todo “privados”).

| Forma | Lectura | Escritura | Cuándo |
| ----- | ------- | --------- | ------ |
| Métodos | `p.get_nombre()` | `p.set_nombre("x")` | Estilo Java / API explícita |
| `@property` | `p.nombre` | `p.nombre = "x"` | Idiomático en Python |
| Público | `p.nombre` | `p.nombre = "x"` | Sin validación |

## Clásico

```python
class Persona:
    def __init__(self, nombre):
        self.__nombre = nombre

    def get_nombre(self):
        return self.__nombre

    def set_nombre(self, nuevo):
        if len(nuevo) > 0:
            self.__nombre = nuevo
        else:
            raise ValueError("nombre vacío")

p = Persona("Ana")
print(p.get_nombre())
p.set_nombre("Luis")
```

## Con @property

Misma idea, sintaxis de atributo. Detalle: [Property](/WEB-Notas-de-Hacking/python/property/).

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

p = Persona("Carlos")
print(p.nombre)
p.nombre = "Andrés"
```

Docs: [property](https://docs.python.org/3/library/functions.html#property).
