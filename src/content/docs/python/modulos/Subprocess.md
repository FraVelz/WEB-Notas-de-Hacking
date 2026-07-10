---
title: Subprocess
description: Ejecutar comandos del sistema, capturar salida y encadenar procesos con subprocess.
---

# Subprocess en Python

---

## ¿Qué es subprocess?

subprocess (sub-proceso) permite ejecutar **programas externos** o **comandos del sistema operativo** desde Python.

Ejemplo:

```python
import subprocess

subprocess.run(["ls"])
```

Ejecuta el comando `ls` (en Linux/Mac) igual que si lo escribieras en la terminal.

---

## 1. Diferencias con os.system()

| Aspecto | `os.system()` | `subprocess` |
| --- | --- | --- |
| Capturar salida | Difícil / no práctico | `capture_output=True`, `stdout` |
| Código de retorno | Solo el exit code | `returncode`, `stdout`, `stderr` |
| Argumentos seguros | Suele ir con string + shell | Lista de args (sin `shell=True`) |
| Control del proceso | Muy limitado | `Popen`, pipes, input, timeout |
| Recomendado | Scripts rápidos y viejos | Uso moderno y seguro |

---

## 2. Ejecutar comandos básicos

```python
import subprocess

# Forma segura (lista de argumentos)
subprocess.run(["echo", "Hola desde Python!"])
```

También puedes pasar shell=True (aunque menos seguro):

```python
subprocess.run("echo Hola desde Python!", shell=True)
```

---

## 3. Capturar la salida del comando

Para **guardar el texto que produce el comando**, usa capture_output=True:

```python
resultado = subprocess.run(["ls"], capture_output=True, text=True)
print("Salida:", resultado.stdout)
```

### Atributos útiles

- resultado.stdout → salida estándar (lo que imprime el comando)
- resultado.stderr → errores (si los hay)
- resultado.returncode → código de salida (0 = correcto)

---

## 4. Manejar errores

Si quieres que el programa **lance una excepción** cuando el comando falle:

```python
try:
    subprocess.run(["ls", "/carpeta_que_no_existe"], check=True)
except subprocess.CalledProcessError as e:
    print("Error al ejecutar el comando:", e)
```

---

## 5. Capturar y procesar salida directamente

Si solo necesitas la salida (más cómodo que .run()):

```python
salida = subprocess.check_output(["whoami"], text=True)
print("Usuario actual:", salida.strip())
```

Esto ejecuta el comando y **devuelve la salida como string**.

---

## 6. Enviar entrada al proceso

Puedes **enviar datos** al proceso con input=:

```python
resultado = subprocess.run(
    ["grep", "hola"],
    input="hola mundo\nadiós mundo\n",
    text=True,
    capture_output=True
)

print(resultado.stdout)
```

Resultado:

```bash
hola mundo
```

---

## 7. Ejecutar múltiples procesos (encadenados)

Puedes **conectar la salida de un comando a otro** como en una tubería (| en la terminal):

```python
p1 = subprocess.Popen(["ls"], stdout=subprocess.PIPE)
p2 = subprocess.Popen(["grep", "py"], stdin=p1.stdout, stdout=subprocess.PIPE, text=True)

salida, _ = p2.communicate()
print("Archivos .py:\n", salida)
```

Aquí:

- Popen() crea procesos manualmente.
- stdout=subprocess.PIPE permite conectar procesos.
- communicate() espera y obtiene la salida.

---

## 8. Popen explicado (modo avanzado)

Popen es la clase base de subprocess, te da **control total** sobre el proceso.

```python
from subprocess import Popen, PIPE

p = Popen(["ping", "-c", "2", "google.com"], stdout=PIPE, stderr=PIPE, text=True)
salida, error = p.communicate()

print("Salida:", salida)
print("Errores:", error)
print("Código de salida:", p.returncode)
```

---

## 9. Ejecutar en segundo plano

Si no quieres que el programa espere:

```python
subprocess.Popen(["vlc", "video.mp4"])
```

Esto abrirá VLC **sin bloquear** el resto de tu script.

---

## 10. Consejos de seguridad

Haz esto:

```python
subprocess.run(["ls", "/home"])
```

Evita esto (riesgo de inyección):

```python
subprocess.run("ls /home && rm -rf /", shell=True)
```

Usar shell=True puede ejecutar código malicioso si la entrada del usuario no está validada.

---

## 11. Ejemplo práctico: medir tiempo de ejecución

```python
import subprocess
import time

inicio = time.time()
subprocess.run(["python3", "mi_script.py"])
fin = time.time()

print(f"Tiempo de ejecución: {fin - inicio:.2f} segundos")
```

---

## 12. Ejemplo completo: automatizador de sistema

```python
import subprocess

comandos = [
    ["sudo", "apt", "update"],
    ["sudo", "apt", "upgrade", "-y"],
    ["sudo", "apt", "autoremove", "-y"]
]

for cmd in comandos:
    print("Ejecutando:", " ".join(cmd))
    resultado = subprocess.run(cmd, capture_output=True, text=True)
    print(resultado.stdout)
```

Esto ejecuta varios comandos del sistema uno tras otro y muestra su salida.

---

## 13. Resumen general

| Método / clase | Qué hace | Ejemplo |
| --- | --- | --- |
| `run()` | Ejecuta y espera | `subprocess.run(["ls"])` |
| `check_output()` | Ejecuta y devuelve stdout | `check_output(["whoami"], text=True)` |
| `Popen()` | Control fino / no bloqueante | `Popen(["vlc", "video.mp4"])` |
| `capture_output=True` | Guarda stdout/stderr | `run(..., capture_output=True, text=True)` |
| `check=True` | Lanza error si falla | `run(..., check=True)` |
| `shell=True` | Usa shell (menos seguro) | Evitar con input de usuario |
