---
title: Tkinter
description: Tkinter - Notas de hacking y ciberseguridad.
---

# Tkinter en Python
---

## ¿Qué es Tkinter? {#qué-es-tkinter}
**Tkinter** es la biblioteca **nativa de Python para interfaces gráficas (GUI)**.

Permite crear **ventanas, botones, menús, formularios, cuadros de texto**, y mucho más. Viene **preinstalada** con Python (no requiere pip install).

---

## Primer ejemplo: ventana básica {#primer-ejemplo-ventana-básica}
```python
import tkinter as tk

ventana = tk.Tk()                # Crea la ventana principal
ventana.title("Mi primera GUI")  # Título
ventana.geometry("400x300")      # Tamaño (ancho x alto)
ventana.mainloop()               # Inicia el bucle principal
```

🔹 Tk() → crea la aplicación. 🔹 mainloop() → mantiene la ventana abierta escuchando eventos (clics, teclas, etc.).

---

## Widgets principales {#widgets-principales}
Los *widgets* son los componentes visuales de Tkinter.

<!-- Tabla convertida manualmente -->

---

### Ejemplo con varios widgets {#ejemplo-con-varios-widgets}
```python
import tkinter as tk

def saludar():
etiqueta.config(text=f"Hola, {entrada.get()}!")

ventana = tk.Tk()
ventana.title("Ejemplo Widgets")

etiqueta = tk.Label(ventana, text="Escribe tu nombre:")
etiqueta.pack()

entrada = tk.Entry(ventana)
entrada.pack()

boton = tk.Button(ventana, text="Saludar", command=saludar)
boton.pack()

ventana.mainloop()
```

---

## Gestores de diseño {#gestores-de-diseño}
Tkinter tiene tres formas principales de organizar widgets:

<!-- Tabla convertida manualmente -->

### Ejemplo {#ejemplo}
```python
etiqueta1.grid(row=0, column=0)
entrada1.grid(row=0, column=1)
boton.grid(row=1, column=0, columnspan=2)
```

---

## Eventos y comandos {#eventos-y-comandos}
Puedes ejecutar funciones al hacer clic o escribir algo.
```python
def al_hacer_click():
print("¡Botón presionado!")

boton = tk.Button(ventana, text="Haz clic", command=al_hacer_click)
```

También puedes manejar eventos con .bind():
```python
def tecla_presionada(evento):
print("Tecla:", evento.char)

ventana.bind("", tecla_presionada)
```

---

## Frames y organización {#frames-y-organización}
Los **Frames** permiten dividir la interfaz en secciones.
```python
frame_superior = tk.Frame(ventana)
frame_superior.pack()

tk.Label(frame_superior, text="Arriba").pack()
tk.Label(ventana, text="Abajo").pack()
```

---

## Widgets más avanzados {#widgets-más-avanzados}
### Checkbutton {#checkbutton}
```python
var = tk.BooleanVar()
tk.Checkbutton(ventana, text="Acepto términos", variable=var).pack()
```

### Radiobutton {#radiobutton}
```python
opcion = tk.StringVar(value="A")
tk.Radiobutton(ventana, text="Opción A", variable=opcion, value="A").pack()
tk.Radiobutton(ventana, text="Opción B", variable=opcion, value="B").pack()
```

### Listbox {#listbox}
```python
lista = tk.Listbox(ventana)
for i in ["Python", "C++", "Java"]:
lista.insert(tk.END, i)
lista.pack()
```

---

## Colores y fuentes {#colores-y-fuentes}
```python
tk.Label(ventana, text="Texto colorido", fg="white", bg="blue", font=("Arial", 14, "bold")).pack()
```

---

## Imágenes {#imágenes}
Tkinter soporta imágenes con PhotoImage (formato .png, .gif).
```python
img = tk.PhotoImage(file="imagen.png")
tk.Label(ventana, image=img).pack()
ventana.mainloop()
```

---

## Menús {#menús}
```python
menu = tk.Menu(ventana)
ventana.config(menu=menu)

submenu = tk.Menu(menu, tearoff=0)
menu.add_cascade(label="Archivo", menu=submenu)
submenu.add_command(label="Nuevo")
submenu.add_command(label="Salir", command=ventana.quit)
```

---

## Ventanas emergentes {#ventanas-emergentes}
```python
from tkinter import messagebox
messagebox.showinfo("Título", "Hola desde una ventana emergente")
```

---

## Ejemplo completo {#ejemplo-completo}
```python
import tkinter as tk
from tkinter import messagebox

def saludar():
nombre = entrada.get()
if nombre:
messagebox.showinfo("Saludo", f"Hola, {nombre}!")
else:
messagebox.showwarning("Advertencia", "Debes ingresar un nombre")

ventana = tk.Tk()
ventana.title("App Completa")
ventana.geometry("300x200")

tk.Label(ventana, text="Tu nombre:").pack(pady=5)
entrada = tk.Entry(ventana)
entrada.pack(pady=5)
tk.Button(ventana, text="Saludar", command=saludar).pack(pady=10)

ventana.mainloop()
```

---

## Resumen rápido {#resumen-rápido}
<!-- Tabla convertida manualmente -->