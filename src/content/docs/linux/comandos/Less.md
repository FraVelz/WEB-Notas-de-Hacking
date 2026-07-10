---
title: Less
description: Paginador `less` para leer archivos y salidas largas en terminal.
---

# Less en Linux

---

### ¿Qué hace exactamente?

less muestra el contenido **por páginas**, no todo de golpe. Esto es muy útil cuando el archivo es largo (como logs,
código, o configuraciones grandes).

Ejemplo:

```bash
less archivo.txt
```

---

### Controles básicos dentro de less

Una vez abierto el archivo:

| Concepto | Significado |
| -------- | ----------- |
| `Espacio` / `f` | Página siguiente. |
| `b` | Página anterior. |
| `↑` / `↓` o `j` / `k` | Línea arriba / abajo. |
| `g` / `G` | Inicio / final del archivo. |
| `/texto` | Buscar hacia adelante. |
| `?texto` | Buscar hacia atrás. |
| `n` / `N` | Siguiente / anterior coincidencia. |
| `q` | Salir. |
| `h` | Ayuda de teclas. |

---

### Ejemplos útiles

Ver varios archivos:

```bash
less *.txt
```

(Mueve con :n para siguiente archivo y :p para anterior)

Ver salida de un comando largo (por ejemplo, un ls con muchos resultados):

```bash
ls -l | less
```

Buscar dentro de un log:

```bash
less /var/log/syslog
# Luego escribe /error para buscar la palabra "error"
```

---

### En resumen

less:

- **No edita archivos**, solo los muestra.
- **Carga rápido**, aunque el archivo sea enorme.
- **Permite búsqueda y navegación avanzada**.
