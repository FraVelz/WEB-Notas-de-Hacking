---
title: Classmethod
description: Instancia vs @classmethod vs @staticmethod.
---

# @classmethod y compañía

| Tipo | Primer arg | Accede a | Llamada típica |
| ---- | ---------- | -------- | -------------- |
| Instancia | `self` | Objeto | `p1.saludar()` |
| `@classmethod` | `cls` | Estado de la clase | `Persona.cuantos_hay()` |
| `@staticmethod` | — | Solo args | `Persona.es_mayor(20)` |

- **classmethod:** ligado a la clase; útil para contadores, factories (`cls(...)`).
- **staticmethod:** función suelta en el namespace de la clase.

```python
class Persona:
    poblacion = 0

    def __init__(self, nombre):
        self.nombre = nombre
        Persona.poblacion += 1

    @classmethod
    def cuantos_hay(cls):
        return f"Hay {cls.poblacion} personas"

    @staticmethod
    def es_mayor(edad):
        return edad >= 18

print(Persona.cuantos_hay())  # 0
Persona("Ana")
Persona("Luis")
print(Persona.cuantos_hay())  # 2
print(Persona.es_mayor(20))
```

Docs: [classmethod](https://docs.python.org/3/library/functions.html#classmethod),
[staticmethod](https://docs.python.org/3/library/functions.html#staticmethod).
