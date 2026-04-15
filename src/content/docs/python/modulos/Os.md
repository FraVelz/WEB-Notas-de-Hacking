---
title: Os
description: Os - Notas de hacking y ciberseguridad.
---

# Os en Python
---

## ¿Qué es os en Python?
El módulo **os** (Operating System) permite **interactuar directamente con el sistema operativo**: manejar archivos, carpetas, variables de entorno, procesos, permisos, rutas, y más.

Se importa así:
```python
import os
```

---

## 1. Manejo de directorios
### Ver el directorio actual
```python
print(os.getcwd())  # get current working directory
```

### Cambiar de directorio
```python
os.chdir("/home/fravelz/Documentos")
```

### Listar archivos y carpetas
```python
archivos = os.listdir(".")
print(archivos)
```

### Crear y eliminar carpetas
```python
os.mkdir("nueva_carpeta")        # Crear una carpeta
os.makedirs("a/b/c", exist_ok=True)  # Crear carpetas anidadas

os.rmdir("nueva_carpeta")        # Eliminar carpeta vacía
os.removedirs("a/b/c")           # Eliminar jerarquía vacía
```

---

## 2. Manejo de archivos
### Eliminar archivos
```python
os.remove("archivo.txt")
```

### Renombrar o mover
```python
os.rename("viejo.txt", "nuevo.txt")
```

---

## 3. Trabajar con rutas (os.path)
### Unir rutas correctamente (independiente del sistema)
```python
ruta = os.path.join("/home/fravelz", "Documentos", "archivo.txt")
print(ruta)
```

### Obtener el nombre o carpeta base
```python
print(os.path.basename("/home/fravelz/archivo.txt"))  # archivo.txt
print(os.path.dirname("/home/fravelz/archivo.txt"))   # /home/fravelz
```

### Comprobar existencia
```python
print(os.path.exists("archivo.txt"))  # True o False
print(os.path.isfile("archivo.txt"))  # True si es archivo
print(os.path.isdir("carpeta"))       # True si es carpeta
```

---

## 4. Variables de entorno
### Ver todas las variables del sistema
```python
print(os.environ)
```

### Obtener una variable específica
```python
usuario = os.getenv("USER")  # En Linux/Mac
print(usuario)
```

### Crear o modificar una variable de entorno
```python
os.environ["MI_VARIABLE"] = "1234"
```

---

## 5. Ejecutar comandos del sistema
```python
os.system("ls")     # Linux/Mac
os.system("dir")    # Windows
```

Ejemplo útil:
```python
os.system("ping google.com -c 2")
```

👉 Sí quieres más control (por ejemplo, capturar la salida del comando), es mejor usar el módulo subprocess.

---

## 6. Permisos y propiedades
```python
os.chmod("archivo.txt", 0o777)  # Dar todos los permisos
print(os.stat("archivo.txt"))   # Ver información (tamaño, permisos, etc.)
```

---

## 7. Ejemplo práctico
Este script organiza los archivos de una carpeta en subcarpetas por tipo:
```python
import os

ruta = "/home/fravelz/Descargas"

for archivo in os.listdir(ruta):
ruta_completa = os.path.join(ruta, archivo)

if os.path.isfile(ruta_completa):
extension = archivo.split(".")[-1]
carpeta = os.path.join(ruta, extension.upper())
os.makedirs(carpeta, exist_ok=True)
shutil.move(ruta_completa, os.path.join(carpeta, archivo))
```

📦 Sí tienes archivos .png, .mp3, .pdf, los moverá a carpetas “PNG”, “MP3”, “PDF”, etc.

---

## 8. Combinación con otros módulos
- os + shutil → mover/copiar archivos.
- os + sys → detectar sistema operativo (sys.platform).
- os + subprocess → ejecutar comandos con control total.

---

## 9. Ejemplo: crear un script portable
```python
import os

def limpiar_pantalla():
comando = "cls" if platform.system() == "Windows" else "clear"
os.system(comando)

limpiar_pantalla()
print("Pantalla limpia 😎")
```

---

## 10. Resumen de funciones más útiles
<!-- Tabla convertida manualmente -->