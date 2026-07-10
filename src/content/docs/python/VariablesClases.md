---
title: Variables Clases
description: "_protegido vs __privado (name mangling) en atributos de clase."
---

# Variables protegidas y privadas

Python no tiene private real; son convenciones (+ name mangling).

| Prefijo | Nombre | Efecto | Ejemplo |
| ------- | ------ | ------ | ------- |
| `_var` | Protegido | Convención: “uso interno” | `self._nombre` |
| `__var` | Privado | Renombra a `_Clase__var` | `self.__nombre` → `_Persona__nombre` |
| sin `_` | Público | Acceso normal | `self.nombre` |

## Un guion `_`

```python
class Persona:
    def __init__(self, nombre):
        self._nombre = nombre  # no lo toques desde fuera (por favor)

p = Persona("Ana")
print(p._nombre)  # funciona, pero es mala educación
```

## Doble guion `__`

Evita choques en herencia y acceso accidental. No es secreto absoluto.

```python
class Persona:
    def __init__(self, nombre):
        self.__nombre = nombre

p = Persona("Luis")
# print(p.__nombre)           # AttributeError
print(p._Persona__nombre)     # Luis (mangling)
```

Más encapsulación: [Getters/setters](/WEB-Notas-de-Hacking/python/gettersetter/), [Property](/WEB-Notas-de-Hacking/python/property/).

Docs: [clases — private](https://docs.python.org/3/tutorial/classes.html#private-variables).
