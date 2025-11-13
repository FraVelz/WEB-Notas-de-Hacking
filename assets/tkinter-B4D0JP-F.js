import{j as e,T as a,L as r,d as o,f as i,b as l}from"./index-CpeyxQ3i.js";import{c as d,T as c,b as s,a as n}from"./tabla-CtO-7Jid.js";import{C as t}from"./codigo-D2If7uI6.js";function m({}){return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"h1",id:"tkinter-en-python",children:"Tkinter en Python"}),e.jsx(r,{}),e.jsx(a,{title:"h2",id:"temario",children:"Temario"}),e.jsx(o,{children:e.jsxs("li",{children:[e.jsx(i,{href:"#tkinter-en-python",children:"Tkinter en Python"}),e.jsxs(o,{children:[e.jsx("li",{children:e.jsx(i,{href:"#temario",children:"Temario"})}),e.jsx("li",{children:e.jsx(i,{href:"#qué-es-tkinter",children:"¿Qué es Tkinter?"})}),e.jsx("li",{children:e.jsx(i,{href:"#primer-ejemplo-ventana-básica",children:"Primer ejemplo: ventana básica"})}),e.jsxs("li",{children:[e.jsx(i,{href:"#widgets-principales",children:"Widgets principales"}),e.jsx(o,{children:e.jsx("li",{children:e.jsx(i,{href:"#ejemplo-con-varios-widgets",children:"Ejemplo con varios widgets"})})})]}),e.jsxs("li",{children:[e.jsx(i,{href:"#gestores-de-diseño",children:"Gestores de diseño"}),e.jsx(o,{children:e.jsx("li",{children:e.jsx(i,{href:"#ejemplo",children:"Ejemplo"})})})]}),e.jsx("li",{children:e.jsx(i,{href:"#eventos-y-comandos",children:"Eventos y comandos"})}),e.jsx("li",{children:e.jsx(i,{href:"#frames-y-organización",children:"Frames y organización"})}),e.jsxs("li",{children:[e.jsx(i,{href:"#widgets-más-avanzados",children:"Widgets más avanzados"}),e.jsxs(o,{children:[e.jsx("li",{children:e.jsx(i,{href:"#checkbutton",children:"Checkbutton"})}),e.jsx("li",{children:e.jsx(i,{href:"#radiobutton",children:"Radiobutton"})}),e.jsx("li",{children:e.jsx(i,{href:"#listbox",children:"Listbox"})})]})]}),e.jsx("li",{children:e.jsx(i,{href:"#colores-y-fuentes",children:"Colores y fuentes"})}),e.jsx("li",{children:e.jsx(i,{href:"#imágenes",children:"Imágenes"})}),e.jsx("li",{children:e.jsx(i,{href:"#menús",children:"Menús"})}),e.jsx("li",{children:e.jsx(i,{href:"#ventanas-emergentes",children:"Ventanas emergentes"})}),e.jsx("li",{children:e.jsx(i,{href:"#ejemplo-completo",children:"Ejemplo completo"})}),e.jsx("li",{children:e.jsx(i,{href:"#resumen-rápido",children:"Resumen rápido"})})]})]})}),e.jsx(l,{children:e.jsx(i,{href:"./../../readme.md#5-python",children:"Regresar a la Guía Principal"})}),e.jsx(r,{}),e.jsx(a,{title:"h2",id:"qué-es-tkinter",children:"¿Qué es Tkinter?"}),e.jsxs(l,{children:[e.jsx("strong",{children:"Tkinter"})," es la biblioteca ",e.jsx("strong",{children:"nativa de Python para interfaces gráficas (GUI)"}),"."]}),e.jsxs(l,{children:["Permite crear ",e.jsx("strong",{children:"ventanas, botones, menús, formularios, cuadros de texto"}),", y mucho más. Viene ",e.jsx("strong",{children:"preinstalada"})," con Python (no requiere pip install)."]}),e.jsx(r,{}),e.jsx(a,{title:"h2",id:"primer-ejemplo-ventana-básica",children:"Primer ejemplo: ventana básica"}),e.jsx(t,{code:`import tkinter as tk

ventana = tk.Tk()                # Crea la ventana principal
ventana.title("Mi primera GUI")  # Título
ventana.geometry("400x300")      # Tamaño (ancho x alto)
ventana.mainloop()               # Inicia el bucle principal`,language:"python"}),e.jsx(l,{children:"🔹 Tk() → crea la aplicación. 🔹 mainloop() → mantiene la ventana abierta escuchando eventos (clics, teclas, etc.)."}),e.jsx(r,{}),e.jsx(a,{title:"h2",id:"widgets-principales",children:"Widgets principales"}),e.jsxs(l,{children:["Los ",e.jsx("em",{children:"widgets"})," son los componentes visuales de Tkinter."]}),e.jsxs(d,{children:[e.jsx(c,{headers:["Widget","Descripción"]}),e.jsxs("tbody",{children:[e.jsxs(s,{children:[e.jsx(n,{children:"Label"}),e.jsx(n,{children:"Texto o imagen"})]}),e.jsxs(s,{children:[e.jsx(n,{children:"Button"}),e.jsx(n,{children:"Botón clicable"})]}),e.jsxs(s,{children:[e.jsx(n,{children:"Entry"}),e.jsx(n,{children:"Campo de texto"})]}),e.jsxs(s,{children:[e.jsx(n,{children:"Text"}),e.jsx(n,{children:"Área de texto multilinea"})]}),e.jsxs(s,{children:[e.jsx(n,{children:"Frame"}),e.jsx(n,{children:"Contenedor de widgets"})]}),e.jsxs(s,{children:[e.jsx(n,{children:"Checkbutton"}),e.jsx(n,{children:"Casilla de verificación"})]}),e.jsxs(s,{children:[e.jsx(n,{children:"Radiobutton"}),e.jsx(n,{children:"Botón de opción"})]}),e.jsxs(s,{children:[e.jsx(n,{children:"Listbox"}),e.jsx(n,{children:"Lista de elementos"})]}),e.jsxs(s,{children:[e.jsx(n,{children:"Scale"}),e.jsx(n,{children:"Barra deslizante"})]}),e.jsxs(s,{children:[e.jsx(n,{children:"Canvas"}),e.jsx(n,{children:"Área de dibujo o gráficos"})]}),e.jsxs(s,{children:[e.jsx(n,{children:"Menu"}),e.jsx(n,{children:"Menú superior"})]})]})]}),e.jsx(r,{}),e.jsx(a,{title:"h3",id:"ejemplo-con-varios-widgets",children:"Ejemplo con varios widgets"}),e.jsx(t,{code:`import tkinter as tk

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

ventana.mainloop()`,language:"python"}),e.jsx(r,{}),e.jsx(a,{title:"h2",id:"gestores-de-diseño",children:"Gestores de diseño"}),e.jsx(l,{children:"Tkinter tiene tres formas principales de organizar widgets:"}),e.jsxs(d,{children:[e.jsx(c,{headers:["Método","Descripción"]}),e.jsxs("tbody",{children:[e.jsxs(s,{children:[e.jsx(n,{children:".pack()"}),e.jsx(n,{children:"Apila widgets uno debajo del otro"})]}),e.jsxs(s,{children:[e.jsx(n,{children:".grid()"}),e.jsx(n,{children:"Organiza en filas y columnas"})]}),e.jsxs(s,{children:[e.jsx(n,{children:".place()"}),e.jsx(n,{children:"Posiciona por coordenadas exactas"})]})]})]}),e.jsx(a,{title:"h3",id:"ejemplo",children:"Ejemplo"}),e.jsx(t,{code:`etiqueta1.grid(row=0, column=0)
entrada1.grid(row=0, column=1)
boton.grid(row=1, column=0, columnspan=2)`,language:"python"}),e.jsx(r,{}),e.jsx(a,{title:"h2",id:"eventos-y-comandos",children:"Eventos y comandos"}),e.jsx(l,{children:"Puedes ejecutar funciones al hacer clic o escribir algo."}),e.jsx(t,{code:`def al_hacer_click():
print("¡Botón presionado!")

boton = tk.Button(ventana, text="Haz clic", command=al_hacer_click)`,language:"python"}),e.jsx(l,{children:"También puedes manejar eventos con .bind():"}),e.jsx(t,{code:`def tecla_presionada(evento):
print("Tecla:", evento.char)

ventana.bind("", tecla_presionada)`,language:"python"}),e.jsx(r,{}),e.jsx(a,{title:"h2",id:"frames-y-organización",children:"Frames y organización"}),e.jsxs(l,{children:["Los ",e.jsx("strong",{children:"Frames"})," permiten dividir la interfaz en secciones."]}),e.jsx(t,{code:`frame_superior = tk.Frame(ventana)
frame_superior.pack()

tk.Label(frame_superior, text="Arriba").pack()
tk.Label(ventana, text="Abajo").pack()`,language:"python"}),e.jsx(r,{}),e.jsx(a,{title:"h2",id:"widgets-más-avanzados",children:"Widgets más avanzados"}),e.jsx(a,{title:"h3",id:"checkbutton",children:"Checkbutton"}),e.jsx(t,{code:`var = tk.BooleanVar()
tk.Checkbutton(ventana, text="Acepto términos", variable=var).pack()`,language:"python"}),e.jsx(a,{title:"h3",id:"radiobutton",children:"Radiobutton"}),e.jsx(t,{code:`opcion = tk.StringVar(value="A")
tk.Radiobutton(ventana, text="Opción A", variable=opcion, value="A").pack()
tk.Radiobutton(ventana, text="Opción B", variable=opcion, value="B").pack()`,language:"python"}),e.jsx(a,{title:"h3",id:"listbox",children:"Listbox"}),e.jsx(t,{code:`lista = tk.Listbox(ventana)
for i in ["Python", "C++", "Java"]:
lista.insert(tk.END, i)
lista.pack()`,language:"python"}),e.jsx(r,{}),e.jsx(a,{title:"h2",id:"colores-y-fuentes",children:"Colores y fuentes"}),e.jsx(t,{code:'tk.Label(ventana, text="Texto colorido", fg="white", bg="blue", font=("Arial", 14, "bold")).pack()',language:"python"}),e.jsx(r,{}),e.jsx(a,{title:"h2",id:"imágenes",children:"Imágenes"}),e.jsx(l,{children:"Tkinter soporta imágenes con PhotoImage (formato .png, .gif)."}),e.jsx(t,{code:`img = tk.PhotoImage(file="imagen.png")
tk.Label(ventana, image=img).pack()
ventana.mainloop()`,language:"python"}),e.jsx(r,{}),e.jsx(a,{title:"h2",id:"menús",children:"Menús"}),e.jsx(t,{code:`menu = tk.Menu(ventana)
ventana.config(menu=menu)

submenu = tk.Menu(menu, tearoff=0)
menu.add_cascade(label="Archivo", menu=submenu)
submenu.add_command(label="Nuevo")
submenu.add_command(label="Salir", command=ventana.quit)`,language:"python"}),e.jsx(r,{}),e.jsx(a,{title:"h2",id:"ventanas-emergentes",children:"Ventanas emergentes"}),e.jsx(t,{code:`from tkinter import messagebox
messagebox.showinfo("Título", "Hola desde una ventana emergente")`,language:"python"}),e.jsx(r,{}),e.jsx(a,{title:"h2",id:"ejemplo-completo",children:"Ejemplo completo"}),e.jsx(t,{code:`import tkinter as tk
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

ventana.mainloop()`,language:"python"}),e.jsx(r,{}),e.jsx(a,{title:"h2",id:"resumen-rápido",children:"Resumen rápido"}),e.jsxs(d,{children:[e.jsx(c,{headers:["Elemento","Descripción"]}),e.jsxs("tbody",{children:[e.jsxs(s,{children:[e.jsx(n,{children:"Tk()"}),e.jsx(n,{children:"Crea ventana principal"})]}),e.jsxs(s,{children:[e.jsx(n,{children:"mainloop()"}),e.jsx(n,{children:"Inicia el bucle de la interfaz"})]}),e.jsxs(s,{children:[e.jsx(n,{children:"Label, Button, Entry, etc."}),e.jsx(n,{children:"Widgets básicos"})]}),e.jsxs(s,{children:[e.jsx(n,{children:".pack(), .grid(), .place()"}),e.jsx(n,{children:"Métodos de organización"})]}),e.jsxs(s,{children:[e.jsx(n,{children:"command="}),e.jsx(n,{children:"Asocia función a un botón"})]}),e.jsxs(s,{children:[e.jsx(n,{children:"Menu, Frame, Canvas"}),e.jsx(n,{children:"Widgets avanzados"})]}),e.jsxs(s,{children:[e.jsx(n,{children:"messagebox"}),e.jsx(n,{children:"Ventanas emergentes"})]}),e.jsxs(s,{children:[e.jsx(n,{children:"PhotoImage"}),e.jsx(n,{children:"Mostrar imágenes"})]})]})]}),e.jsx(r,{}),e.jsx(l,{children:e.jsx(i,{href:"./../../readme.md#5-python",children:"Regresar a la Guía Principal"})}),e.jsx("blockquote",{children:e.jsxs(l,{children:[e.jsx("strong",{children:"Autor:"})," Fravelz"]})})]})}export{m as default};
