import Titulo from "./../../componentes/titulo.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Linea from "./../../componentes/linea.jsx";

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="tkinter-en-python">Tkinter en Python</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><a href="#tkinter-en-python">Tkinter en Python</a>
          <Lista>
            <li><a href="#temario">Temario</a></li>
            <li><a href="#qué-es-tkinter">¿Qué es Tkinter?</a></li>
            <li><a href="#primer-ejemplo-ventana-básica">Primer ejemplo: ventana
              básica</a></li>
            <li><a href="#widgets-principales">Widgets principales</a>
              <Lista>
                <li><a href="#ejemplo-con-varios-widgets">Ejemplo con varios
                  widgets</a></li>
              </Lista>
            </li>
            <li><a href="#gestores-de-diseño">Gestores de diseño</a>
              <Lista>
                <li><a href="#ejemplo">Ejemplo</a></li>
              </Lista>
            </li>
            <li><a href="#eventos-y-comandos">Eventos y comandos</a></li>
            <li><a href="#frames-y-organización">Frames y organización</a></li>
            <li><a href="#widgets-más-avanzados">Widgets más avanzados</a>
              <Lista>
                <li><a href="#checkbutton">Checkbutton</a></li>
                <li><a href="#radiobutton">Radiobutton</a></li>
                <li><a href="#listbox">Listbox</a></li>
              </Lista>
            </li>
            <li><a href="#colores-y-fuentes">Colores y fuentes</a></li>
            <li><a href="#imágenes">Imágenes</a></li>
            <li><a href="#menús">Menús</a></li>
            <li><a href="#ventanas-emergentes">Ventanas emergentes</a></li>
            <li><a href="#ejemplo-completo">Ejemplo completo</a></li>
            <li><a href="#resumen-rápido">Resumen rápido</a></li>
          </Lista>
        </li>
      </Lista>
      <Texto><a href="./../../readme.md#5-python">Regresar a la Guía
        Principal</a></Texto>
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
      <div class="sourceCode" id="cb1">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> tkinter <span class="im">as</span> tk</span>
            <span id="cb1-2"><a href="#cb1-2" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb1-3"><a href="#cb1-3" aria-hidden="true" tabindex="-1"></a>ventana <span class="op">=</span> tk.Tk()                <span class="co"># Crea la ventana principal</span></span>
            <span id="cb1-4"><a href="#cb1-4" aria-hidden="true" tabindex="-1"></a>ventana.title(<span class="st">&quot;Mi primera GUI&quot;</span>)  <span class="co"># Título</span></span>
            <span id="cb1-5"><a href="#cb1-5" aria-hidden="true" tabindex="-1"></a>ventana.geometry(<span class="st">&quot;400x300&quot;</span>)      <span class="co"># Tamaño (ancho x alto)</span></span>
            <span id="cb1-6"><a href="#cb1-6" aria-hidden="true" tabindex="-1"></a>ventana.mainloop()               <span class="co"># Inicia el bucle principal</span></span></code></pre>
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
      <div class="sourceCode" id="cb2">
        <pre class="sourceCode python"><code class="sourceCode python"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> tkinter <span class="im">as</span> tk</span>
          <span id="cb2-2"><a href="#cb2-2" aria-hidden="true" tabindex="-1"></a></span>
          <span id="cb2-3"><a href="#cb2-3" aria-hidden="true" tabindex="-1"></a><span class="kw">def</span> saludar():</span>
          <span id="cb2-4"><a href="#cb2-4" aria-hidden="true" tabindex="-1"></a>    etiqueta.config(text<span class="op">=</span><span class="ss">f&quot;Hola, </span><span class="sc">{</span>entrada<span class="sc">.</span>get()<span class="sc">}</span><span class="ss">!&quot;</span>)</span>
          <span id="cb2-5"><a href="#cb2-5" aria-hidden="true" tabindex="-1"></a></span>
          <span id="cb2-6"><a href="#cb2-6" aria-hidden="true" tabindex="-1"></a>ventana <span class="op">=</span> tk.Tk()</span>
          <span id="cb2-7"><a href="#cb2-7" aria-hidden="true" tabindex="-1"></a>ventana.title(<span class="st">&quot;Ejemplo Widgets&quot;</span>)</span>
          <span id="cb2-8"><a href="#cb2-8" aria-hidden="true" tabindex="-1"></a></span>
          <span id="cb2-9"><a href="#cb2-9" aria-hidden="true" tabindex="-1"></a>etiqueta <span class="op">=</span> tk.Label(ventana, text<span class="op">=</span><span class="st">&quot;Escribe tu nombre:&quot;</span>)</span>
          <span id="cb2-10"><a href="#cb2-10" aria-hidden="true" tabindex="-1"></a>etiqueta.pack()</span>
          <span id="cb2-11"><a href="#cb2-11" aria-hidden="true" tabindex="-1"></a></span>
          <span id="cb2-12"><a href="#cb2-12" aria-hidden="true" tabindex="-1"></a>entrada <span class="op">=</span> tk.Entry(ventana)</span>
          <span id="cb2-13"><a href="#cb2-13" aria-hidden="true" tabindex="-1"></a>entrada.pack()</span>
          <span id="cb2-14"><a href="#cb2-14" aria-hidden="true" tabindex="-1"></a></span>
          <span id="cb2-15"><a href="#cb2-15" aria-hidden="true" tabindex="-1"></a>boton <span class="op">=</span> tk.Button(ventana, text<span class="op">=</span><span class="st">&quot;Saludar&quot;</span>, command<span class="op">=</span>saludar)</span>
          <span id="cb2-16"><a href="#cb2-16" aria-hidden="true" tabindex="-1"></a>boton.pack()</span>
          <span id="cb2-17"><a href="#cb2-17" aria-hidden="true" tabindex="-1"></a></span>
          <span id="cb2-18"><a href="#cb2-18" aria-hidden="true" tabindex="-1"></a>ventana.mainloop()</span></code></pre>
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
      <div class="sourceCode" id="cb3">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a>etiqueta1.grid(row<span class="op">=</span><span class="dv">0</span>, column<span class="op">=</span><span class="dv">0</span>)</span>
            <span id="cb3-2"><a href="#cb3-2" aria-hidden="true" tabindex="-1"></a>entrada1.grid(row<span class="op">=</span><span class="dv">0</span>, column<span class="op">=</span><span class="dv">1</span>)</span>
            <span id="cb3-3"><a href="#cb3-3" aria-hidden="true" tabindex="-1"></a>boton.grid(row<span class="op">=</span><span class="dv">1</span>, column<span class="op">=</span><span class="dv">0</span>, columnspan<span class="op">=</span><span class="dv">2</span>)</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="eventos-y-comandos">Eventos y comandos</Titulo>
      <Texto>Puedes ejecutar funciones al hacer clic o escribir algo.</Texto>
      <div class="sourceCode" id="cb4">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a><span class="kw">def</span> al_hacer_click():</span>
            <span id="cb4-2"><a href="#cb4-2" aria-hidden="true" tabindex="-1"></a>    <span class="bu">print</span>(<span class="st">&quot;¡Botón presionado!&quot;</span>)</span>
            <span id="cb4-3"><a href="#cb4-3" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb4-4"><a href="#cb4-4" aria-hidden="true" tabindex="-1"></a>boton <span class="op">=</span> tk.Button(ventana, text<span class="op">=</span><span class="st">&quot;Haz clic&quot;</span>, command<span class="op">=</span>al_hacer_click)</span></code></pre>
      </div>
      <Texto>También puedes manejar eventos con <code>.bind()</code>:</Texto>
      <div class="sourceCode" id="cb5">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb5-1"><a href="#cb5-1" aria-hidden="true" tabindex="-1"></a><span class="kw">def</span> tecla_presionada(evento):</span>
            <span id="cb5-2"><a href="#cb5-2" aria-hidden="true" tabindex="-1"></a>    <span class="bu">print</span>(<span class="st">&quot;Tecla:&quot;</span>, evento.char)</span>
            <span id="cb5-3"><a href="#cb5-3" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb5-4"><a href="#cb5-4" aria-hidden="true" tabindex="-1"></a>ventana.bind(<span class="st">&quot;&lt;Key&gt;&quot;</span>, tecla_presionada)</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="frames-y-organización">Frames y organización</Titulo>
      <Texto>Los <strong>Frames</strong> permiten dividir la interfaz en
        secciones.</Texto>
      <div class="sourceCode" id="cb6">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a>frame_superior <span class="op">=</span> tk.Frame(ventana)</span>
            <span id="cb6-2"><a href="#cb6-2" aria-hidden="true" tabindex="-1"></a>frame_superior.pack()</span>
            <span id="cb6-3"><a href="#cb6-3" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb6-4"><a href="#cb6-4" aria-hidden="true" tabindex="-1"></a>tk.Label(frame_superior, text<span class="op">=</span><span class="st">&quot;Arriba&quot;</span>).pack()</span>
            <span id="cb6-5"><a href="#cb6-5" aria-hidden="true" tabindex="-1"></a>tk.Label(ventana, text<span class="op">=</span><span class="st">&quot;Abajo&quot;</span>).pack()</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="widgets-más-avanzados">Widgets más avanzados</Titulo>
      <Titulo title="h3" id="checkbutton">Checkbutton</Titulo>
      <div class="sourceCode" id="cb7">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb7-1"><a href="#cb7-1" aria-hidden="true" tabindex="-1"></a>var <span class="op">=</span> tk.BooleanVar()</span>
            <span id="cb7-2"><a href="#cb7-2" aria-hidden="true" tabindex="-1"></a>tk.Checkbutton(ventana, text<span class="op">=</span><span class="st">&quot;Acepto términos&quot;</span>, variable<span class="op">=</span>var).pack()</span></code></pre>
      </div>
      <Titulo title="h3" id="radiobutton">Radiobutton</Titulo>
      <div class="sourceCode" id="cb8">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb8-1"><a href="#cb8-1" aria-hidden="true" tabindex="-1"></a>opcion <span class="op">=</span> tk.StringVar(value<span class="op">=</span><span class="st">&quot;A&quot;</span>)</span>
            <span id="cb8-2"><a href="#cb8-2" aria-hidden="true" tabindex="-1"></a>tk.Radiobutton(ventana, text<span class="op">=</span><span class="st">&quot;Opción A&quot;</span>, variable<span class="op">=</span>opcion, value<span class="op">=</span><span class="st">&quot;A&quot;</span>).pack()</span>
            <span id="cb8-3"><a href="#cb8-3" aria-hidden="true" tabindex="-1"></a>tk.Radiobutton(ventana, text<span class="op">=</span><span class="st">&quot;Opción B&quot;</span>, variable<span class="op">=</span>opcion, value<span class="op">=</span><span class="st">&quot;B&quot;</span>).pack()</span></code></pre>
      </div>
      <Titulo title="h3" id="listbox">Listbox</Titulo>
      <div class="sourceCode" id="cb9">
        <pre class="sourceCode python"><code class="sourceCode python"><span id="cb9-1"><a href="#cb9-1" aria-hidden="true" tabindex="-1"></a>lista <span class="op">=</span> tk.Listbox(ventana)</span>
          <span id="cb9-2"><a href="#cb9-2" aria-hidden="true" tabindex="-1"></a><span class="cf">for</span> i <span class="kw">in</span> [<span class="st">&quot;Python&quot;</span>, <span class="st">&quot;C++&quot;</span>, <span class="st">&quot;Java&quot;</span>]:</span>
          <span id="cb9-3"><a href="#cb9-3" aria-hidden="true" tabindex="-1"></a>    lista.insert(tk.END, i)</span>
          <span id="cb9-4"><a href="#cb9-4" aria-hidden="true" tabindex="-1"></a>lista.pack()</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="colores-y-fuentes">Colores y fuentes</Titulo>
      <div class="sourceCode" id="cb10">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb10-1"><a href="#cb10-1" aria-hidden="true" tabindex="-1"></a>tk.Label(ventana, text<span class="op">=</span><span class="st">&quot;Texto colorido&quot;</span>, fg<span class="op">=</span><span class="st">&quot;white&quot;</span>, bg<span class="op">=</span><span class="st">&quot;blue&quot;</span>, font<span class="op">=</span>(<span class="st">&quot;Arial&quot;</span>, <span class="dv">14</span>, <span class="st">&quot;bold&quot;</span>)).pack()</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="imágenes">Imágenes</Titulo>
      <Texto>Tkinter soporta imágenes con <code>PhotoImage</code> (formato
        <code>.png</code>, <code>.gif</code>).
      </Texto>
      <div class="sourceCode" id="cb11">
        <pre class="sourceCode python"><code class="sourceCode python"><span id="cb11-1"><a href="#cb11-1" aria-hidden="true" tabindex="-1"></a>img <span class="op">=</span> tk.PhotoImage(<span class="bu">file</span><span class="op">=</span><span class="st">&quot;imagen.png&quot;</span>)</span>
          <span id="cb11-2"><a href="#cb11-2" aria-hidden="true" tabindex="-1"></a>tk.Label(ventana, image<span class="op">=</span>img).pack()</span>
          <span id="cb11-3"><a href="#cb11-3" aria-hidden="true" tabindex="-1"></a>ventana.mainloop()</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="menús">Menús</Titulo>
      <div class="sourceCode" id="cb12">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb12-1"><a href="#cb12-1" aria-hidden="true" tabindex="-1"></a>menu <span class="op">=</span> tk.Menu(ventana)</span>
            <span id="cb12-2"><a href="#cb12-2" aria-hidden="true" tabindex="-1"></a>ventana.config(menu<span class="op">=</span>menu)</span>
            <span id="cb12-3"><a href="#cb12-3" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb12-4"><a href="#cb12-4" aria-hidden="true" tabindex="-1"></a>submenu <span class="op">=</span> tk.Menu(menu, tearoff<span class="op">=</span><span class="dv">0</span>)</span>
            <span id="cb12-5"><a href="#cb12-5" aria-hidden="true" tabindex="-1"></a>menu.add_cascade(label<span class="op">=</span><span class="st">&quot;Archivo&quot;</span>, menu<span class="op">=</span>submenu)</span>
            <span id="cb12-6"><a href="#cb12-6" aria-hidden="true" tabindex="-1"></a>submenu.add_command(label<span class="op">=</span><span class="st">&quot;Nuevo&quot;</span>)</span>
            <span id="cb12-7"><a href="#cb12-7" aria-hidden="true" tabindex="-1"></a>submenu.add_command(label<span class="op">=</span><span class="st">&quot;Salir&quot;</span>, command<span class="op">=</span>ventana.quit)</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="ventanas-emergentes">Ventanas emergentes</Titulo>
      <div class="sourceCode" id="cb13">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb13-1"><a href="#cb13-1" aria-hidden="true" tabindex="-1"></a><span class="im">from</span> tkinter <span class="im">import</span> messagebox</span>
            <span id="cb13-2"><a href="#cb13-2" aria-hidden="true" tabindex="-1"></a>messagebox.showinfo(<span class="st">&quot;Título&quot;</span>, <span class="st">&quot;Hola desde una ventana emergente&quot;</span>)</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="ejemplo-completo">Ejemplo completo</Titulo>
      <div class="sourceCode" id="cb14">
        <pre class="sourceCode python"><code class="sourceCode python"><span id="cb14-1"><a href="#cb14-1" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> tkinter <span class="im">as</span> tk</span>
          <span id="cb14-2"><a href="#cb14-2" aria-hidden="true" tabindex="-1"></a><span class="im">from</span> tkinter <span class="im">import</span> messagebox</span>
          <span id="cb14-3"><a href="#cb14-3" aria-hidden="true" tabindex="-1"></a></span>
          <span id="cb14-4"><a href="#cb14-4" aria-hidden="true" tabindex="-1"></a><span class="kw">def</span> saludar():</span>
          <span id="cb14-5"><a href="#cb14-5" aria-hidden="true" tabindex="-1"></a>    nombre <span class="op">=</span> entrada.get()</span>
          <span id="cb14-6"><a href="#cb14-6" aria-hidden="true" tabindex="-1"></a>    <span class="cf">if</span> nombre:</span>
          <span id="cb14-7"><a href="#cb14-7" aria-hidden="true" tabindex="-1"></a>        messagebox.showinfo(<span class="st">&quot;Saludo&quot;</span>, <span class="ss">f&quot;Hola, </span><span class="sc">{</span>nombre<span class="sc">}</span><span class="ss">!&quot;</span>)</span>
          <span id="cb14-8"><a href="#cb14-8" aria-hidden="true" tabindex="-1"></a>    <span class="cf">else</span>:</span>
          <span id="cb14-9"><a href="#cb14-9" aria-hidden="true" tabindex="-1"></a>        messagebox.showwarning(<span class="st">&quot;Advertencia&quot;</span>, <span class="st">&quot;Debes ingresar un nombre&quot;</span>)</span>
          <span id="cb14-10"><a href="#cb14-10" aria-hidden="true" tabindex="-1"></a></span>
          <span id="cb14-11"><a href="#cb14-11" aria-hidden="true" tabindex="-1"></a>ventana <span class="op">=</span> tk.Tk()</span>
          <span id="cb14-12"><a href="#cb14-12" aria-hidden="true" tabindex="-1"></a>ventana.title(<span class="st">&quot;App Completa&quot;</span>)</span>
          <span id="cb14-13"><a href="#cb14-13" aria-hidden="true" tabindex="-1"></a>ventana.geometry(<span class="st">&quot;300x200&quot;</span>)</span>
          <span id="cb14-14"><a href="#cb14-14" aria-hidden="true" tabindex="-1"></a></span>
          <span id="cb14-15"><a href="#cb14-15" aria-hidden="true" tabindex="-1"></a>tk.Label(ventana, text<span class="op">=</span><span class="st">&quot;Tu nombre:&quot;</span>).pack(pady<span class="op">=</span><span class="dv">5</span>)</span>
          <span id="cb14-16"><a href="#cb14-16" aria-hidden="true" tabindex="-1"></a>entrada <span class="op">=</span> tk.Entry(ventana)</span>
          <span id="cb14-17"><a href="#cb14-17" aria-hidden="true" tabindex="-1"></a>entrada.pack(pady<span class="op">=</span><span class="dv">5</span>)</span>
          <span id="cb14-18"><a href="#cb14-18" aria-hidden="true" tabindex="-1"></a>tk.Button(ventana, text<span class="op">=</span><span class="st">&quot;Saludar&quot;</span>, command<span class="op">=</span>saludar).pack(pady<span class="op">=</span><span class="dv">10</span>)</span>
          <span id="cb14-19"><a href="#cb14-19" aria-hidden="true" tabindex="-1"></a></span>
          <span id="cb14-20"><a href="#cb14-20" aria-hidden="true" tabindex="-1"></a>ventana.mainloop()</span></code></pre>
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
      <Texto><a href="./../../readme.md#5-python">Regresar a la Guía
        Principal</a></Texto>
      <blockquote>
        <Texto><strong>Autor:</strong> Fravelz</Texto>
      </blockquote>
    </>
  );
}
export default nameabcd;
