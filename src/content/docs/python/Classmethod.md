---
title: Classmethod
description: Diferencia entre métodos de instancia, de clase (@classmethod) y estáticos (@staticmethod).
---

# Decorador @classmethod

@classmethod permite crear funciones que pueden **acceder o modificar el estado de la clase**, sin necesidad de crear un
objeto.

---

## Ejemplo

```python
class Persona:
    poblacion = 0  # Atributo de clase

    def __init__(self, nombre):
        self.nombre = nombre
        Persona.poblacion += 1

    @classmethod
    def cuantos_hay(cls):
        return f"Hay {cls.poblacion} personas registradas."

# Podemos llamar al método sin crear objetos:
print(Persona.cuantos_hay())  # Hay 0 personas registradas.

# Crear algunos objetos:
p1 = Persona("Ana")
p2 = Persona("Luis")

# Llamar de nuevo:
print(Persona.cuantos_hay())  # Hay 2 personas registradas.
```

---

## Diferencias entre tipos de métodos

| Tipo | Primer parámetro | Accede a | Ejemplo de llamada |
| --- | --- | --- | --- |
| Instancia | `self` | Atributos del objeto | `p1.saludar()` |
| `@classmethod` | `cls` | Atributos / estado de la clase | `Persona.cuantos_hay()` |
| `@staticmethod` | ninguno | Solo argumentos que le pases | `Persona.es_mayor(20)` |

---

## En resumen

- @staticmethod: método **independiente**, solo usa los parámetros que se le pasen.
- @classmethod: método **ligado a la clase**, puede **usar o modificar atributos de la clase** y se puede llamar sin
  crear una instancia.
