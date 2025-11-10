import Titulo from "./../../../componentes/titulo.jsx";
import Lista from "./../../../componentes/lista.jsx";
import Texto from "./../../../componentes/texto.jsx";
import Linea from "./../../../componentes/linea.jsx";
import Enlace from "./../../../componentes/enlace.jsx";

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
        Python (no requiere <code>pip install</code>).</Texto>
      <Linea />
      <Titulo title="h2" id="primer-ejemplo-ventana-básica">Primer ejemplo: ventana
        básica</Titulo>
      <div className="sourceCode" id="cb1">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb1-1"><Enlace href="#cb1-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> tkinter <span className="im">as</span> tk</span>
            <span id="cb1-2"><Enlace href="#cb1-2" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb1-3"><Enlace href="#cb1-3" aria-hidden="true" tabindex="-1"></Enlace >ventana <span className="op">=</span> tk.Tk()                <span className="co"># Crea la ventana principal</span></span>
            <span id="cb1-4"><Enlace href="#cb1-4" aria-hidden="true" tabindex="-1"></Enlace >ventana.title(<span className="st">&quot;Mi primera GUI&quot;</span>)  <span className="co"># Título</span></span>
            <span id="cb1-5"><Enlace href="#cb1-5" aria-hidden="true" tabindex="-1"></Enlace >ventana.geometry(<span className="st">&quot;400x300&quot;</span>)      <span className="co"># Tamaño (ancho x alto)</span></span>
            <span id="cb1-6"><Enlace href="#cb1-6" aria-hidden="true" tabindex="-1"></Enlace >ventana.mainloop()               <span className="co"># Inicia el bucle principal</span></span></code></pre>
      </div>
      <Texto>🔹 <code>Tk()</code> → crea la aplicación. 🔹 <code>mainloop()</code>
        → mantiene la ventana abierta escuchando eventos (clics, teclas,
        etc.).</Texto>
      <Linea />
      <Titulo title="h2" id="widgets-principales">Widgets principales</Titulo>
      <Texto>Los <em>widgets</em> son los componentes visuales de Tkinter.</Texto>
      <table>
        <thead>
          <tr>
            <th>Widget</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>Label</code></td>
            <td>Texto o imagen</td>
          </tr>
          <tr>
            <td><code>Button</code></td>
            <td>Botón clicable</td>
          </tr>
          <tr>
            <td><code>Entry</code></td>
            <td>Campo de texto</td>
          </tr>
          <tr>
            <td><code>Text</code></td>
            <td>Área de texto multilinea</td>
          </tr>
          <tr>
            <td><code>Frame</code></td>
            <td>Contenedor de widgets</td>
          </tr>
          <tr>
            <td><code>Checkbutton</code></td>
            <td>Casilla de verificación</td>
          </tr>
          <tr>
            <td><code>Radiobutton</code></td>
            <td>Botón de opción</td>
          </tr>
          <tr>
            <td><code>Listbox</code></td>
            <td>Lista de elementos</td>
          </tr>
          <tr>
            <td><code>Scale</code></td>
            <td>Barra deslizante</td>
          </tr>
          <tr>
            <td><code>Canvas</code></td>
            <td>Área de dibujo o gráficos</td>
          </tr>
          <tr>
            <td><code>Menu</code></td>
            <td>Menú superior</td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Titulo title="h3" id="ejemplo-con-varios-widgets">Ejemplo con varios widgets</Titulo>
      <div className="sourceCode" id="cb2">
        <pre className="sourceCode python"><code className="sourceCode python"><span id="cb2-1"><Enlace href="#cb2-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> tkinter <span className="im">as</span> tk</span>
          <span id="cb2-2"><Enlace href="#cb2-2" aria-hidden="true" tabindex="-1"></Enlace ></span>
          <span id="cb2-3"><Enlace href="#cb2-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">def</span> saludar():</span>
          <span id="cb2-4"><Enlace href="#cb2-4" aria-hidden="true" tabindex="-1"></Enlace >    etiqueta.config(text<span className="op">=</span><span className="ss">f&quot;Hola, </span><span className="sc">{"{"}</span>entrada<span className="sc">.</span>get()<span className="sc">{"}"}</span><span className="ss">!&quot;</span>)</span>
          <span id="cb2-5"><Enlace href="#cb2-5" aria-hidden="true" tabindex="-1"></Enlace ></span>
          <span id="cb2-6"><Enlace href="#cb2-6" aria-hidden="true" tabindex="-1"></Enlace >ventana <span className="op">=</span> tk.Tk()</span>
          <span id="cb2-7"><Enlace href="#cb2-7" aria-hidden="true" tabindex="-1"></Enlace >ventana.title(<span className="st">&quot;Ejemplo Widgets&quot;</span>)</span>
          <span id="cb2-8"><Enlace href="#cb2-8" aria-hidden="true" tabindex="-1"></Enlace ></span>
          <span id="cb2-9"><Enlace href="#cb2-9" aria-hidden="true" tabindex="-1"></Enlace >etiqueta <span className="op">=</span> tk.Label(ventana, text<span className="op">=</span><span className="st">&quot;Escribe tu nombre:&quot;</span>)</span>
          <span id="cb2-10"><Enlace href="#cb2-10" aria-hidden="true" tabindex="-1"></Enlace >etiqueta.pack()</span>
          <span id="cb2-11"><Enlace href="#cb2-11" aria-hidden="true" tabindex="-1"></Enlace ></span>
          <span id="cb2-12"><Enlace href="#cb2-12" aria-hidden="true" tabindex="-1"></Enlace >entrada <span className="op">=</span> tk.Entry(ventana)</span>
          <span id="cb2-13"><Enlace href="#cb2-13" aria-hidden="true" tabindex="-1"></Enlace >entrada.pack()</span>
          <span id="cb2-14"><Enlace href="#cb2-14" aria-hidden="true" tabindex="-1"></Enlace ></span>
          <span id="cb2-15"><Enlace href="#cb2-15" aria-hidden="true" tabindex="-1"></Enlace >boton <span className="op">=</span> tk.Button(ventana, text<span className="op">=</span><span className="st">&quot;Saludar&quot;</span>, command<span className="op">=</span>saludar)</span>
          <span id="cb2-16"><Enlace href="#cb2-16" aria-hidden="true" tabindex="-1"></Enlace >boton.pack()</span>
          <span id="cb2-17"><Enlace href="#cb2-17" aria-hidden="true" tabindex="-1"></Enlace ></span>
          <span id="cb2-18"><Enlace href="#cb2-18" aria-hidden="true" tabindex="-1"></Enlace >ventana.mainloop()</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="gestores-de-diseño">Gestores de diseño</Titulo>
      <Texto>Tkinter tiene tres formas principales de organizar widgets:</Texto>
      <table>
        <thead>
          <tr>
            <th>Método</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>.pack()</code></td>
            <td>Apila widgets uno debajo del otro</td>
          </tr>
          <tr>
            <td><code>.grid()</code></td>
            <td>Organiza en filas y columnas</td>
          </tr>
          <tr>
            <td><code>.place()</code></td>
            <td>Posiciona por coordenadas exactas</td>
          </tr>
        </tbody>
      </table>
      <Titulo title="h3" id="ejemplo">Ejemplo</Titulo>
      <div className="sourceCode" id="cb3">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb3-1"><Enlace href="#cb3-1" aria-hidden="true" tabindex="-1"></Enlace >etiqueta1.grid(row<span className="op">=</span><span className="dv">0</span>, column<span className="op">=</span><span className="dv">0</span>)</span>
            <span id="cb3-2"><Enlace href="#cb3-2" aria-hidden="true" tabindex="-1"></Enlace >entrada1.grid(row<span className="op">=</span><span className="dv">0</span>, column<span className="op">=</span><span className="dv">1</span>)</span>
            <span id="cb3-3"><Enlace href="#cb3-3" aria-hidden="true" tabindex="-1"></Enlace >boton.grid(row<span className="op">=</span><span className="dv">1</span>, column<span className="op">=</span><span className="dv">0</span>, columnspan<span className="op">=</span><span className="dv">2</span>)</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="eventos-y-comandos">Eventos y comandos</Titulo>
      <Texto>Puedes ejecutar funciones al hacer clic o escribir algo.</Texto>
      <div className="sourceCode" id="cb4">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb4-1"><Enlace href="#cb4-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">def</span> al_hacer_click():</span>
            <span id="cb4-2"><Enlace href="#cb4-2" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">print</span>(<span className="st">&quot;¡Botón presionado!&quot;</span>)</span>
            <span id="cb4-3"><Enlace href="#cb4-3" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb4-4"><Enlace href="#cb4-4" aria-hidden="true" tabindex="-1"></Enlace >boton <span className="op">=</span> tk.Button(ventana, text<span className="op">=</span><span className="st">&quot;Haz clic&quot;</span>, command<span className="op">=</span>al_hacer_click)</span></code></pre>
      </div>
      <Texto>También puedes manejar eventos con <code>.bind()</code>:</Texto>
      <div className="sourceCode" id="cb5">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb5-1"><Enlace href="#cb5-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">def</span> tecla_presionada(evento):</span>
            <span id="cb5-2"><Enlace href="#cb5-2" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">print</span>(<span className="st">&quot;Tecla:&quot;</span>, evento.char)</span>
            <span id="cb5-3"><Enlace href="#cb5-3" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb5-4"><Enlace href="#cb5-4" aria-hidden="true" tabindex="-1"></Enlace >ventana.bind(<span className="st">&quot;&lt;Key&gt;&quot;</span>, tecla_presionada)</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="frames-y-organización">Frames y organización</Titulo>
      <Texto>Los <strong>Frames</strong> permiten dividir la interfaz en
        secciones.</Texto>
      <div className="sourceCode" id="cb6">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb6-1"><Enlace href="#cb6-1" aria-hidden="true" tabindex="-1"></Enlace >frame_superior <span className="op">=</span> tk.Frame(ventana)</span>
            <span id="cb6-2"><Enlace href="#cb6-2" aria-hidden="true" tabindex="-1"></Enlace >frame_superior.pack()</span>
            <span id="cb6-3"><Enlace href="#cb6-3" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb6-4"><Enlace href="#cb6-4" aria-hidden="true" tabindex="-1"></Enlace >tk.Label(frame_superior, text<span className="op">=</span><span className="st">&quot;Arriba&quot;</span>).pack()</span>
            <span id="cb6-5"><Enlace href="#cb6-5" aria-hidden="true" tabindex="-1"></Enlace >tk.Label(ventana, text<span className="op">=</span><span className="st">&quot;Abajo&quot;</span>).pack()</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="widgets-más-avanzados">Widgets más avanzados</Titulo>
      <Titulo title="h3" id="checkbutton">Checkbutton</Titulo>
      <div className="sourceCode" id="cb7">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb7-1"><Enlace href="#cb7-1" aria-hidden="true" tabindex="-1"></Enlace >var <span className="op">=</span> tk.BooleanVar()</span>
            <span id="cb7-2"><Enlace href="#cb7-2" aria-hidden="true" tabindex="-1"></Enlace >tk.Checkbutton(ventana, text<span className="op">=</span><span className="st">&quot;Acepto términos&quot;</span>, variable<span className="op">=</span>var).pack()</span></code></pre>
      </div>
      <Titulo title="h3" id="radiobutton">Radiobutton</Titulo>
      <div className="sourceCode" id="cb8">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb8-1"><Enlace href="#cb8-1" aria-hidden="true" tabindex="-1"></Enlace >opcion <span className="op">=</span> tk.StringVar(value<span className="op">=</span><span className="st">&quot;A&quot;</span>)</span>
            <span id="cb8-2"><Enlace href="#cb8-2" aria-hidden="true" tabindex="-1"></Enlace >tk.Radiobutton(ventana, text<span className="op">=</span><span className="st">&quot;Opción A&quot;</span>, variable<span className="op">=</span>opcion, value<span className="op">=</span><span className="st">&quot;A&quot;</span>).pack()</span>
            <span id="cb8-3"><Enlace href="#cb8-3" aria-hidden="true" tabindex="-1"></Enlace >tk.Radiobutton(ventana, text<span className="op">=</span><span className="st">&quot;Opción B&quot;</span>, variable<span className="op">=</span>opcion, value<span className="op">=</span><span className="st">&quot;B&quot;</span>).pack()</span></code></pre>
      </div>
      <Titulo title="h3" id="listbox">Listbox</Titulo>
      <div className="sourceCode" id="cb9">
        <pre className="sourceCode python"><code className="sourceCode python"><span id="cb9-1"><Enlace href="#cb9-1" aria-hidden="true" tabindex="-1"></Enlace >lista <span className="op">=</span> tk.Listbox(ventana)</span>
          <span id="cb9-2"><Enlace href="#cb9-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">for</span> i <span className="kw">in</span> [<span className="st">&quot;Python&quot;</span>, <span className="st">&quot;C++&quot;</span>, <span className="st">&quot;Java&quot;</span>]:</span>
          <span id="cb9-3"><Enlace href="#cb9-3" aria-hidden="true" tabindex="-1"></Enlace >    lista.insert(tk.END, i)</span>
          <span id="cb9-4"><Enlace href="#cb9-4" aria-hidden="true" tabindex="-1"></Enlace >lista.pack()</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="colores-y-fuentes">Colores y fuentes</Titulo>
      <div className="sourceCode" id="cb10">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb10-1"><Enlace href="#cb10-1" aria-hidden="true" tabindex="-1"></Enlace >tk.Label(ventana, text<span className="op">=</span><span className="st">&quot;Texto colorido&quot;</span>, fg<span className="op">=</span><span className="st">&quot;white&quot;</span>, bg<span className="op">=</span><span className="st">&quot;blue&quot;</span>, font<span className="op">=</span>(<span className="st">&quot;Arial&quot;</span>, <span className="dv">14</span>, <span className="st">&quot;bold&quot;</span>)).pack()</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="imágenes">Imágenes</Titulo>
      <Texto>Tkinter soporta imágenes con <code>PhotoImage</code> (formato
        <code>.png</code>, <code>.gif</code>).
      </Texto>
      <div className="sourceCode" id="cb11">
        <pre className="sourceCode python"><code className="sourceCode python"><span id="cb11-1"><Enlace href="#cb11-1" aria-hidden="true" tabindex="-1"></Enlace >img <span className="op">=</span> tk.PhotoImage(<span className="bu">file</span><span className="op">=</span><span className="st">&quot;imagen.png&quot;</span>)</span>
          <span id="cb11-2"><Enlace href="#cb11-2" aria-hidden="true" tabindex="-1"></Enlace >tk.Label(ventana, image<span className="op">=</span>img).pack()</span>
          <span id="cb11-3"><Enlace href="#cb11-3" aria-hidden="true" tabindex="-1"></Enlace >ventana.mainloop()</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="menús">Menús</Titulo>
      <div className="sourceCode" id="cb12">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb12-1"><Enlace href="#cb12-1" aria-hidden="true" tabindex="-1"></Enlace >menu <span className="op">=</span> tk.Menu(ventana)</span>
            <span id="cb12-2"><Enlace href="#cb12-2" aria-hidden="true" tabindex="-1"></Enlace >ventana.config(menu<span className="op">=</span>menu)</span>
            <span id="cb12-3"><Enlace href="#cb12-3" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb12-4"><Enlace href="#cb12-4" aria-hidden="true" tabindex="-1"></Enlace >submenu <span className="op">=</span> tk.Menu(menu, tearoff<span className="op">=</span><span className="dv">0</span>)</span>
            <span id="cb12-5"><Enlace href="#cb12-5" aria-hidden="true" tabindex="-1"></Enlace >menu.add_cascade(label<span className="op">=</span><span className="st">&quot;Archivo&quot;</span>, menu<span className="op">=</span>submenu)</span>
            <span id="cb12-6"><Enlace href="#cb12-6" aria-hidden="true" tabindex="-1"></Enlace >submenu.add_command(label<span className="op">=</span><span className="st">&quot;Nuevo&quot;</span>)</span>
            <span id="cb12-7"><Enlace href="#cb12-7" aria-hidden="true" tabindex="-1"></Enlace >submenu.add_command(label<span className="op">=</span><span className="st">&quot;Salir&quot;</span>, command<span className="op">=</span>ventana.quit)</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="ventanas-emergentes">Ventanas emergentes</Titulo>
      <div className="sourceCode" id="cb13">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb13-1"><Enlace href="#cb13-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">from</span> tkinter <span className="im">import</span> messagebox</span>
            <span id="cb13-2"><Enlace href="#cb13-2" aria-hidden="true" tabindex="-1"></Enlace >messagebox.showinfo(<span className="st">&quot;Título&quot;</span>, <span className="st">&quot;Hola desde una ventana emergente&quot;</span>)</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="ejemplo-completo">Ejemplo completo</Titulo>
      <div className="sourceCode" id="cb14">
        <pre className="sourceCode python"><code className="sourceCode python"><span id="cb14-1"><Enlace href="#cb14-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> tkinter <span className="im">as</span> tk</span>
          <span id="cb14-2"><Enlace href="#cb14-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">from</span> tkinter <span className="im">import</span> messagebox</span>
          <span id="cb14-3"><Enlace href="#cb14-3" aria-hidden="true" tabindex="-1"></Enlace ></span>
          <span id="cb14-4"><Enlace href="#cb14-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">def</span> saludar():</span>
          <span id="cb14-5"><Enlace href="#cb14-5" aria-hidden="true" tabindex="-1"></Enlace >    nombre <span className="op">=</span> entrada.get()</span>
          <span id="cb14-6"><Enlace href="#cb14-6" aria-hidden="true" tabindex="-1"></Enlace >    <span className="cf">if</span> nombre:</span>
          <span id="cb14-7"><Enlace href="#cb14-7" aria-hidden="true" tabindex="-1"></Enlace >        messagebox.showinfo(<span className="st">&quot;Saludo&quot;</span>, <span className="ss">f&quot;Hola, </span><span className="sc">{"{"}</span>nombre<span className="sc">{"}"}</span><span className="ss">!&quot;</span>)</span>
          <span id="cb14-8"><Enlace href="#cb14-8" aria-hidden="true" tabindex="-1"></Enlace >    <span className="cf">else</span>:</span>
          <span id="cb14-9"><Enlace href="#cb14-9" aria-hidden="true" tabindex="-1"></Enlace >        messagebox.showwarning(<span className="st">&quot;Advertencia&quot;</span>, <span className="st">&quot;Debes ingresar un nombre&quot;</span>)</span>
          <span id="cb14-10"><Enlace href="#cb14-10" aria-hidden="true" tabindex="-1"></Enlace ></span>
          <span id="cb14-11"><Enlace href="#cb14-11" aria-hidden="true" tabindex="-1"></Enlace >ventana <span className="op">=</span> tk.Tk()</span>
          <span id="cb14-12"><Enlace href="#cb14-12" aria-hidden="true" tabindex="-1"></Enlace >ventana.title(<span className="st">&quot;App Completa&quot;</span>)</span>
          <span id="cb14-13"><Enlace href="#cb14-13" aria-hidden="true" tabindex="-1"></Enlace >ventana.geometry(<span className="st">&quot;300x200&quot;</span>)</span>
          <span id="cb14-14"><Enlace href="#cb14-14" aria-hidden="true" tabindex="-1"></Enlace ></span>
          <span id="cb14-15"><Enlace href="#cb14-15" aria-hidden="true" tabindex="-1"></Enlace >tk.Label(ventana, text<span className="op">=</span><span className="st">&quot;Tu nombre:&quot;</span>).pack(pady<span className="op">=</span><span className="dv">5</span>)</span>
          <span id="cb14-16"><Enlace href="#cb14-16" aria-hidden="true" tabindex="-1"></Enlace >entrada <span className="op">=</span> tk.Entry(ventana)</span>
          <span id="cb14-17"><Enlace href="#cb14-17" aria-hidden="true" tabindex="-1"></Enlace >entrada.pack(pady<span className="op">=</span><span className="dv">5</span>)</span>
          <span id="cb14-18"><Enlace href="#cb14-18" aria-hidden="true" tabindex="-1"></Enlace >tk.Button(ventana, text<span className="op">=</span><span className="st">&quot;Saludar&quot;</span>, command<span className="op">=</span>saludar).pack(pady<span className="op">=</span><span className="dv">10</span>)</span>
          <span id="cb14-19"><Enlace href="#cb14-19" aria-hidden="true" tabindex="-1"></Enlace ></span>
          <span id="cb14-20"><Enlace href="#cb14-20" aria-hidden="true" tabindex="-1"></Enlace >ventana.mainloop()</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="resumen-rápido">Resumen rápido</Titulo>
      <table>
        <thead>
          <tr>
            <th>Elemento</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>Tk()</code></td>
            <td>Crea ventana principal</td>
          </tr>
          <tr>
            <td><code>mainloop()</code></td>
            <td>Inicia el bucle de la interfaz</td>
          </tr>
          <tr>
            <td><code>Label</code>, <code>Button</code>, <code>Entry</code>,
              etc.</td>
            <td>Widgets básicos</td>
          </tr>
          <tr>
            <td><code>.pack()</code>, <code>.grid()</code>,
              <code>.place()</code>
            </td>
            <td>Métodos de organización</td>
          </tr>
          <tr>
            <td><code>command=</code></td>
            <td>Asocia función a un botón</td>
          </tr>
          <tr>
            <td><code>Menu</code>, <code>Frame</code>, <code>Canvas</code></td>
            <td>Widgets avanzados</td>
          </tr>
          <tr>
            <td><code>messagebox</code></td>
            <td>Ventanas emergentes</td>
          </tr>
          <tr>
            <td><code>PhotoImage</code></td>
            <td>Mostrar imágenes</td>
          </tr>
        </tbody>
      </table>
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
