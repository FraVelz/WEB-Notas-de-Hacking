---
title: Variables Clases
description: Convención de atributos protegidos (_var) y privados (__var) con name mangling en clases de Python.
---

# Variables protegidas y privadas en clases

---

## 1. self.\_variable (un guion bajo)

Por **convención**, el **guion bajo simple \_** indica que el atributo es **“protegido” (protected)**, o sea:

> “No lo uses directamente fuera de la clase, aunque *puedes* hacerlo sí realmente quieres”.

Python **no bloquea** su acceso; es solo una **advertencia entre programadores**.

```python
class Persona:
    def __init__(self, nombre):
        self._nombre = nombre  # protegido

p = Persona("Ana")
print(p._nombre)  # 😅 Funciona, pero no deberías accederlo así
```

***

## 2. self.__variable (doble guion bajo)

El **doble guion bajo __** activa el mecanismo de **name mangling** o “ofuscación de nombre”.

Eso significa que Python **cambia internamente el nombre del atributo** para evitar que se sobrescriba o se acceda
fácilmente desde fuera de la clase.

Por ejemplo:

```python
class Persona:
    def __init__(self, nombre):
        self.__nombre = nombre  # privado (name mangling)

p = Persona("Luis")

print(p.__nombre)  # ❌ Error: AttributeError
```

Pero internamente Python lo guarda así:

```python
print(p._Persona__nombre)  # ✅ Luis
```

En otras palabras:

- No lo vuelve _totalmente privado_, pero **dificulta** su acceso externo.
- Se usa para **evitar colisiones de nombres** en clases hijas (herencia) y **proteger la integridad interna**.

---

## En resumen

| Prefijo | Nombre | Qué hace | Ejemplo |
| --- | --- | --- | --- |
| `_var` | Protegido (convención) | Aviso: “uso interno”; se puede acceder igual | `self._nombre` |
| `__var` | Privado (name mangling) | Python lo renombra a `_Clase__var` | `self.__nombre` → `_Persona__nombre` |
| sin `_` | Público | Acceso normal desde fuera | `self.nombre` |
