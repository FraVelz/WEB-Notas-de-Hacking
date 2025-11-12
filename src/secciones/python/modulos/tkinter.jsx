import Enlace from "../../../componentes/atomos/enlace.jsx";
import Linea from "../../../componentes/atomos/linea.jsx";
import Lista from "../../../componentes/moleculas/lista.jsx";
import Texto from "./../../../componentes/atomos/texto.jsx";
import Titulo from "../../../componentes/moleculas/titulo.jsx";
import { Tabla, TablaCabezera, TablaFila, TablaUnica } from "../../../componentes/moleculas/tabla.jsx";
import CodeBlock from "../../../componentes/moleculas/codigo.jsx";

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="tkinter-en-python">Tkinter en Python</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><Enlace href="#tkinter-en-python">Tkinter en Python</Enlace >
          <Lista>
            <li><Enlace href="#temario">Temario</Enlace ></li>
            <li><Enlace href="#qué-es-tkinter">¿Qué es Tkinter?</Enlace ></li>
            <li><Enlace href="#primer-ejemplo-ventana-básica">Primer ejemplo: ventana
              básica</Enlace ></li>
            <li><Enlace href="#widgets-principales">Widgets principales</Enlace >
              <Lista>
                <li><Enlace href="#ejemplo-con-varios-widgets">Ejemplo con varios
                  widgets</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#gestores-de-diseño">Gestores de diseño</Enlace >
              <Lista>
                <li><Enlace href="#ejemplo">Ejemplo</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#eventos-y-comandos">Eventos y comandos</Enlace ></li>
            <li><Enlace href="#frames-y-organización">Frames y organización</Enlace ></li>
            <li><Enlace href="#widgets-más-avanzados">Widgets más avanzados</Enlace >
              <Lista>
                <li><Enlace href="#checkbutton">Checkbutton</Enlace ></li>
                <li><Enlace href="#radiobutton">Radiobutton</Enlace ></li>
                <li><Enlace href="#listbox">Listbox</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#colores-y-fuentes">Colores y fuentes</Enlace ></li>
            <li><Enlace href="#imágenes">Imágenes</Enlace ></li>
            <li><Enlace href="#menús">Menús</Enlace ></li>
            <li><Enlace href="#ventanas-emergentes">Ventanas emergentes</Enlace ></li>
            <li><Enlace href="#ejemplo-completo">Ejemplo completo</Enlace ></li>
            <li><Enlace href="#resumen-rápido">Resumen rápido</Enlace ></li>
          </Lista>
        </li>
      </Lista>
      <Texto><Enlace href="./../../readme.md#5-python">Regresar a la Guía
        Principal</Enlace ></Texto>
      <Linea />
      <Titulo title="h2" id="qué-es-tkinter">¿Qué es Tkinter?</Titulo>
      <Texto><strong>Tkinter</strong> es la biblioteca <strong>nativa de Python
        para interfaces gráficas (GUI)</strong>.</Texto>
      <Texto>Permite crear <strong>ventanas, botones, menús, formularios, cuadros
        de texto</strong>, y mucho más. Viene <strong>preinstalada</strong> con
        Python (no requiere pip install).</Texto>
      <Linea />
      <Titulo title="h2" id="primer-ejemplo-ventana-básica">Primer ejemplo: ventana
        básica</Titulo>
      <CodeBlock code={`import tkinter as tk

ventana = tk.Tk()                # Crea la ventana principal
ventana.title("Mi primera GUI")  # Título
ventana.geometry("400x300")      # Tamaño (ancho x alto)
ventana.mainloop()               # Inicia el bucle principal`} language="python" />
      <Texto>🔹 Tk() → crea la aplicación. 🔹 mainloop()
        → mantiene la ventana abierta escuchando eventos (clics, teclas,
        etc.).</Texto>
      <Linea />
      <Titulo title="h2" id="widgets-principales">Widgets principales</Titulo>
      <Texto>Los <em>widgets</em> son los componentes visuales de Tkinter.</Texto>
      <Tabla>
  <TablaCabezera headers={["Widget", "Descripción"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>Label</TablaUnica>
      <TablaUnica>Texto o imagen</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Button</TablaUnica>
      <TablaUnica>Botón clicable</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Entry</TablaUnica>
      <TablaUnica>Campo de texto</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Text</TablaUnica>
      <TablaUnica>Área de texto multilinea</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Frame</TablaUnica>
      <TablaUnica>Contenedor de widgets</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Checkbutton</TablaUnica>
      <TablaUnica>Casilla de verificación</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Radiobutton</TablaUnica>
      <TablaUnica>Botón de opción</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Listbox</TablaUnica>
      <TablaUnica>Lista de elementos</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Scale</TablaUnica>
      <TablaUnica>Barra deslizante</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Canvas</TablaUnica>
      <TablaUnica>Área de dibujo o gráficos</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Menu</TablaUnica>
      <TablaUnica>Menú superior</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
      <Linea />
      <Titulo title="h3" id="ejemplo-con-varios-widgets">Ejemplo con varios widgets</Titulo>
      <CodeBlock code={`import tkinter as tk

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

ventana.mainloop()`} language="python" />
      <Linea />
      <Titulo title="h2" id="gestores-de-diseño">Gestores de diseño</Titulo>
      <Texto>Tkinter tiene tres formas principales de organizar widgets:</Texto>
      <Tabla>
  <TablaCabezera headers={["Método", "Descripción"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>.pack()</TablaUnica>
      <TablaUnica>Apila widgets uno debajo del otro</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>.grid()</TablaUnica>
      <TablaUnica>Organiza en filas y columnas</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>.place()</TablaUnica>
      <TablaUnica>Posiciona por coordenadas exactas</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
      <Titulo title="h3" id="ejemplo">Ejemplo</Titulo>
      <CodeBlock code={`etiqueta1.grid(row=0, column=0)
entrada1.grid(row=0, column=1)
boton.grid(row=1, column=0, columnspan=2)`} language="python" />
      <Linea />
      <Titulo title="h2" id="eventos-y-comandos">Eventos y comandos</Titulo>
      <Texto>Puedes ejecutar funciones al hacer clic o escribir algo.</Texto>
      <CodeBlock code={`def al_hacer_click():
print("¡Botón presionado!")

boton = tk.Button(ventana, text="Haz clic", command=al_hacer_click)`} language="python" />
      <Texto>También puedes manejar eventos con .bind():</Texto>
      <CodeBlock code={`def tecla_presionada(evento):
print("Tecla:", evento.char)

ventana.bind("", tecla_presionada)`} language="python" />
      <Linea />
      <Titulo title="h2" id="frames-y-organización">Frames y organización</Titulo>
      <Texto>Los <strong>Frames</strong> permiten dividir la interfaz en
        secciones.</Texto>
      <CodeBlock code={`frame_superior = tk.Frame(ventana)
frame_superior.pack()

tk.Label(frame_superior, text="Arriba").pack()
tk.Label(ventana, text="Abajo").pack()`} language="python" />
      <Linea />
      <Titulo title="h2" id="widgets-más-avanzados">Widgets más avanzados</Titulo>
      <Titulo title="h3" id="checkbutton">Checkbutton</Titulo>
      <CodeBlock code={`var = tk.BooleanVar()
tk.Checkbutton(ventana, text="Acepto términos", variable=var).pack()`} language="python" />
      <Titulo title="h3" id="radiobutton">Radiobutton</Titulo>
      <CodeBlock code={`opcion = tk.StringVar(value="A")
tk.Radiobutton(ventana, text="Opción A", variable=opcion, value="A").pack()
tk.Radiobutton(ventana, text="Opción B", variable=opcion, value="B").pack()`} language="python" />
      <Titulo title="h3" id="listbox">Listbox</Titulo>
      <CodeBlock code={`lista = tk.Listbox(ventana)
for i in ["Python", "C++", "Java"]:
lista.insert(tk.END, i)
lista.pack()`} language="python" />
      <Linea />
      <Titulo title="h2" id="colores-y-fuentes">Colores y fuentes</Titulo>
      <CodeBlock code={`tk.Label(ventana, text="Texto colorido", fg="white", bg="blue", font=("Arial", 14, "bold")).pack()`} language="python" />
      <Linea />
      <Titulo title="h2" id="imágenes">Imágenes</Titulo>
      <Texto>Tkinter soporta imágenes con PhotoImage (formato
        .png, .gif).
      </Texto>
      <CodeBlock code={`img = tk.PhotoImage(file="imagen.png")
tk.Label(ventana, image=img).pack()
ventana.mainloop()`} language="python" />
      <Linea />
      <Titulo title="h2" id="menús">Menús</Titulo>
      <CodeBlock code={`menu = tk.Menu(ventana)
ventana.config(menu=menu)

submenu = tk.Menu(menu, tearoff=0)
menu.add_cascade(label="Archivo", menu=submenu)
submenu.add_command(label="Nuevo")
submenu.add_command(label="Salir", command=ventana.quit)`} language="python" />
      <Linea />
      <Titulo title="h2" id="ventanas-emergentes">Ventanas emergentes</Titulo>
      <CodeBlock code={`from tkinter import messagebox
messagebox.showinfo("Título", "Hola desde una ventana emergente")`} language="python" />
      <Linea />
      <Titulo title="h2" id="ejemplo-completo">Ejemplo completo</Titulo>
      <CodeBlock code={`import tkinter as tk
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

ventana.mainloop()`} language="python" />
      <Linea />
      <Titulo title="h2" id="resumen-rápido">Resumen rápido</Titulo>
      <Tabla>
  <TablaCabezera headers={["Elemento", "Descripción"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>Tk()</TablaUnica>
      <TablaUnica>Crea ventana principal</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>mainloop()</TablaUnica>
      <TablaUnica>Inicia el bucle de la interfaz</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Label, Button, Entry,
              etc.</TablaUnica>
      <TablaUnica>Widgets básicos</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>.pack(), .grid(),
              .place()</TablaUnica>
      <TablaUnica>Métodos de organización</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>command=</TablaUnica>
      <TablaUnica>Asocia función a un botón</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Menu, Frame, Canvas</TablaUnica>
      <TablaUnica>Widgets avanzados</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>messagebox</TablaUnica>
      <TablaUnica>Ventanas emergentes</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>PhotoImage</TablaUnica>
      <TablaUnica>Mostrar imágenes</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
      <Linea />
      <Texto><Enlace href="./../../readme.md#5-python">Regresar a la Guía
        Principal</Enlace ></Texto>
      <blockquote>
        <Texto><strong>Autor:</strong> Fravelz</Texto>
      </blockquote>
    </>
  );
}
export default nameabcd;
