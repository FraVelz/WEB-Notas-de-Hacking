---
title: Which
route: /linux/comandos/Which
---

# Which en Linux
---

## ¿Que es el comando which? {#que-es-el-comando-which}
El comando which en Linux (y otros sistemas Unix) sirve para **mostrar la ruta completa del ejecutable** que se ejecutará cuando llamas a un comando.

**En pocas palabras:** Te dice **dónde está ubicado** el programa que se ejecutará cuando escribes algo como python, ls, gcc, etc.

### Ejemplo básico {#ejemplo-básico}
```bash
which python
```

**Salida posible:**
```bash
/usr/bin/python
```

Significa que cuando escribes python en la terminal, se ejecuta el archivo /usr/bin/python.

---

### Otro ejemplo {#otro-ejemplo}
```bash
which ls
```

Resultado:
```bash
/bin/ls
```

ls está en la carpeta /bin.

---

### Sí el comando no existe {#sí-el-comando-no-existe}
```bash
which pepe
```

Resultado:
```bash
pepe not found
```

---

### Ver qué versión se usa sí hay varias instaladas {#ver-qué-versión-se-usa-sí-hay-varias-instaladas}
```bash
which -a python
```

Resultado:
```bash
/usr/bin/python
/usr/local/bin/python
```

Te muestra **todas** las ubicaciones posibles que coinciden, en orden de prioridad según tú $PATH.

---

### En resumen {#en-resumen}
<!-- Tabla convertida manualmente -->