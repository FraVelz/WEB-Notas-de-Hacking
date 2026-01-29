---
title: Sys
route: /python/modulos/Sys
---

# Sys en Python
---

## ¿Qué es sys? {#qué-es-sys}
sys es un módulo integrado que ofrece **interfaz con el intérprete de Python** y el entorno donde corre (argumentos de línea de comandos, rutas, streams estándar, información de la plataforma, manejo de errores, configuración del intérprete, etc.). Se importa con:
```python
import sys
```

## Uso básico y más común {#uso-básico-y-más-común}
### sys.argv {#sys.argv}
Lista de argumentos pasados al script (el elemento 0 es el nombre del script).
```python
# ejemplo.py
print(sys.argv)
# Ejecuta: python ejemplo.py a b -> ['ejemplo.py', 'a', 'b']
```

### sys.exit([code|message]) {#sys.exitcodemessage}
Termina el intérprete lanzando SystemExit. code=0 indica éxito; cualquier int distinto a 0 indica error. También puedes pasar un string (se imprime).
```python
if len(sys.argv) < 2:
sys.exit("falta argumento")
```

### sys.path {#sys.path}
Lista de rutas donde Python busca módulos. Puedes modificarla en tiempo de ejecución (útil para scripts).
```python
import sys
sys.path.append("/mi/carpeta/lib")
```

### sys.modules {#sys.modules}
Diccionario de módulos cargados en memoria (name -&gt; module). Útil para inspección o recarga.
```python
sys.stdout.write("hola\n")
sys.stderr.write("error!\n")
data = sys.stdin.read()
```

También puedes usar sys.stdout.buffer para I/O binaria.

### sys.version y sys.version_info {#sys.version-y-sys.version_info}
Información de la versión de Python.
```python
print(sys.version)          # string completa
print(sys.version_info)     # tupla nombrada (major, minor, micro, ...)
if sys.version_info < (3,10):
print("actualiza python")
```

### sys.platform {#sys.platform}
Cadena que indica la plataforma (e.g., 'linux', 'darwin', 'win32').
```python
if sys.platform.startswith("win"):
print("Windows")
```

### sys.maxsize {#sys.maxsize}
Entero que normalmente indica el tamaño máximo práctico de estructuras (32/64-bit).
```python
print(sys.maxsize)
```

### sys.getsizeof(obj[, default]) {#sys.getsizeofobj-default}
Devuelve el tamaño en bytes del objeto (solo tamaño del objeto, no profundidad).
```python
x = [1,2,3]
print(sys.getsizeof(x))  # tamaño del objeto lista en memoria (superficial)
```

### sys.getrecursionlimit() / sys.setrecursionlimit(n) {#sys.getrecursionlimit-sys.setrecursionlimitn}
Leer y ajustar el límite de recursión del intérprete.
```python
print(sys.getrecursionlimit())
sys.setrecursionlimit(2000)
```

Usar con cuidado: un límite demasiado alto puede provocar segfault.

### sys.exc_info() {#sys.exc_info}
Información sobre la excepción actual: (exc_type, exc_value, traceback).
```python
try:
1/0
except:
print(sys.exc_info())
```

### sys.excepthook {#sys.excepthook}
Función que maneja excepciones no capturadas. Puedes reemplazarla para logging personalizado.
```python
def mi_handler(exc_type, exc, tb):
print("Excepción no manejada:", exc_type, exc)
sys.excepthook = mi_handler
```

### sys.getdefaultencoding() y sys.getfilesystemencoding() {#sys.getdefaultencoding-y-sys.getfilesystemencoding}
Codificaciones por defecto (útil para I/O y compatibilidad entre plataformas).
```python
print(sys.getdefaultencoding(), sys.getfilesystemencoding())
```

### sys.byteorder {#sys.byteorder}
Orden de bytes de la máquina: 'little' o 'big'.
```python
print(sys.byteorder)
```

### sys.implementation {#sys.implementation}
Información sobre la implementación de Python (CPython, PyPy, etc.)
```python
print(sys.implementation)
```

### sys.flags {#sys.flags}
Namespace con banderas con las que arrancó el intérprete (optimize, debug, interactive, etc.).
```python
print(sys.flags)
```

### sys.getwindowsversion() (solo Windows) {#sys.getwindowsversion-solo-windows}
Disponible solo en Windows; usar hasattr(sys, "getwindowsversion") para comprobar.

### sys.getswitchinterval() / sys.setswitchinterval() {#sys.getswitchinterval-sys.setswitchinterval}
Controla la frecuencia de cambio de contexto entre threads (CPython).

---

## Ejemplos prácticos {#ejemplos-prácticos}
### 1) Script que procesa CLI simple {#script-que-procesa-cli-simple}
```python
# procesador.py
def main():
if len(sys.argv) < 2:
print("uso: python procesador.py archivo.txt")
sys.exit(1)
nombre = sys.argv[1]
with open(nombre, "r", encoding="utf-8") as f:
print(f.read())

if __name__ == "__main__":
main()
```

### 2) Redirigir salida a un archivo {#redirigir-salida-a-un-archivo}
```python
import sys
with open("salida.log", "w", encoding="utf-8") as log:
old_stdout = sys.stdout
sys.stdout = log
print("esto va al archivo")
sys.stdout = old_stdout
```

### 3) Manejo global de excepciones (logging) {#manejo-global-de-excepciones-logging}
```python
import sys, traceback, logging
logging.basicConfig(filename="errores.log", level=logging.ERROR)

def mi_excepthook(exc_type, exc_value, exc_tb):
logging.error("".join(traceback.format_exception(exc_type, exc_value, exc_tb)))

sys.excepthook = mi_excepthook
# cualquier excepción no capturada irá a errores.log
```

### 4) Comprobar versión de Python antes de correr {#comprobar-versión-de-python-antes-de-correr}
```python
import sys
if sys.version_info < (3,8):
sys.exit("Este script requiere Python 3.8+")
```

## Buenas prácticas y advertencias {#buenas-prácticas-y-advertencias}
- **No abuses de sys.path.append()** en producción; usa paquetes instalables o PYTHONPATH/virtualenvs.
- sys.getsizeof() da tamaño superficial; para medir memoria profunda usa pympler o tracemalloc.
- Cambiar el límite de recursión con setrecursionlimit() solo sí entiendes el riesgo.
- sys.exit() en bibliotecas es mala idea: las bibliotecas deben lanzar excepciones, no terminar el proceso.
- Evita escribir directamente a sys.stdout sí usas frameworks que gestionan I/O (mejor usar logging).

## Debugging y profiling {#debugging-y-profiling}
- sys.setrecursionlimit() para debugging de recursión (con cuidado).
- Para profiling de memoria/ejecución usa módulos especializados (tracemalloc, profile, cProfile), no sys directamente.

## Mini-proyectos / ejercicios sugeridos {#mini-proyectos-ejercicios-sugeridos}
<ol type="1">
<li>Script CLI con argparse que use
sys.argv como fallback y registre errores en
sys.stderr.
</li> <li>Programa que redirija sys.stdout a un archivo y
luego restaure la salida normal.</li> <li>Wrapper que compruebe sys.version_info y ejecute un
comportamiento alterno para versiones antiguas.</li> <li>Logger global usando sys.excepthook para capturar
excepciones no manejadas.</li> <li>Herramienta que inspeccione sys.modules para listar
módulos cargados y su ruta (module.__file__).</li> </ol>