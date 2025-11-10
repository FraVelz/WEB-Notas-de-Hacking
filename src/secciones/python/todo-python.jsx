import Titulo from "./../../componentes/titulo.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Linea from "./../../componentes/linea.jsx";
import Estructura from "./../../componentes/estructura.jsx";
import Enlace from "../../componentes/enlace.jsx";

function nameabcd({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" id="python">Python</Titulo>
        <Texto>Video de YouTube - python desde cero:</Texto>

        <Lista>
          <li>
            <Enlace href="https://www.youtube.com/watch?v=nKPbfIU442g">Ir a curso de Python Básico Completo - YoSoyDalto
              (8h)</Enlace>
          </li>
        </Lista>

        <Linea />


        <Linea />
        <Titulo title="h2" id="temario">Temario</Titulo>
        <Lista>
          <li><Enlace href="#python">Python</Enlace >
            <Lista>
              <li><Enlace href="#temario">Temario</Enlace ></li>
              <li><Enlace href="#1-qué-es-python">1. ¿Qué es Python?</Enlace ></li>
              <li><Enlace href="#2-sintaxis-básica">2. Sintaxis básica</Enlace >
                <Lista>
                  <li><Enlace href="#variables-y-tipos-de-datos">Variables y tipos de
                    datos</Enlace ></li>
                  <li><Enlace href="#operadores">Operadores</Enlace ></li>
                </Lista>
              </li>
              <li><Enlace href="#3-control-de-flujo">3. Control de flujo</Enlace >
                <Lista>
                  <li><Enlace href="#condicionales">Condicionales</Enlace ></li>
                  <li><Enlace href="#bucles">Bucles</Enlace ></li>
                </Lista>
              </li>
              <li><Enlace href="#4-estructuras-de-datos">4. Estructuras de datos</Enlace >
                <Lista>
                  <li><Enlace href="#listas">Listas</Enlace ></li>
                  <li><Enlace href="#tuplas">Tuplas</Enlace ></li>
                  <li><Enlace href="#conjuntos">Conjuntos</Enlace ></li>
                  <li><Enlace href="#diccionarios">Diccionarios</Enlace ></li>
                </Lista>
              </li>
              <li><Enlace href="#5-funciones">5. Funciones</Enlace ></li>
              <li><Enlace href="#6-programación-orientada-a-objetos-poo">6. Programación
                orientada a objetos (POO)</Enlace ></li>
              <li><Enlace href="#7-módulos-y-paquetes">7. Módulos y paquetes</Enlace ></li>
              <li><Enlace href="#8-archivos">8. Archivos</Enlace ></li>
              <li><Enlace href="#9-librerías-populares-por-áreas">9. Librerías populares
                (por áreas)</Enlace ></li>
              <li><Enlace href="#10-conceptos-avanzados">10. Conceptos avanzados</Enlace ></li>
              <li><Enlace href="#11-herramientas-y-entorno">11. Herramientas y
                entorno</Enlace ></li>
            </Lista>
          </li>
        </Lista>
        <Texto><Enlace href="./../readme.md#5-python">Regresar a la Guía
          Principal</Enlace ></Texto>
        <Linea />
        <Titulo title="h2" id="qué-es-python">1. ¿Qué es Python?</Titulo>
        <Texto><strong>Python</strong> es un lenguaje de programación:</Texto>
        <Lista>
          <li><strong>Interpretado</strong> (no necesitas compilar).</li>
          <li><strong>De alto nivel</strong> (fácil de leer).</li>
          <li><strong>Multiparadigma</strong> (permite programación estructurada,
            orientada a objetos y funcional).</li>
          <li><strong>De propósito general</strong> (sirve para web, IA, hacking,
            data science, automatización, etc.).</li>
        </Lista>
        <Texto>Ejemplo básico:</Texto>
        <div className="sourceCode" id="cb1">
          <pre
            className="sourceCode python"><code className="sourceCode python"><span id="cb1-1"><Enlace href="#cb1-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(<span className="st">&quot;Hola, mundo!&quot;</span>)</span></code></pre>
        </div>
        <Linea />
        <Titulo title="h2" id="sintaxis-básica">2. Sintaxis básica</Titulo>
        <Titulo title="h3" id="variables-y-tipos-de-datos">Variables y tipos de datos</Titulo>
        <div className="sourceCode" id="cb2">
          <pre
            className="sourceCode python"><code className="sourceCode python"><span id="cb2-1"><Enlace href="#cb2-1" aria-hidden="true" tabindex="-1"></Enlace >nombre <span className="op">=</span> <span className="st">&quot;Francisco&quot;</span></span>
              <span id="cb2-2"><Enlace href="#cb2-2" aria-hidden="true" tabindex="-1"></Enlace >edad <span className="op">=</span> <span className="dv">17</span></span>
              <span id="cb2-3"><Enlace href="#cb2-3" aria-hidden="true" tabindex="-1"></Enlace >altura <span className="op">=</span> <span className="fl">1.75</span></span>
              <span id="cb2-4"><Enlace href="#cb2-4" aria-hidden="true" tabindex="-1"></Enlace >es_estudiante <span className="op">=</span> <span className="va">True</span></span></code></pre>
        </div>
        <Texto>Tipos básicos:</Texto>
        <Lista>
          <li><code>int</code>: números enteros</li>
          <li><code>float</code>: decimales</li>
          <li><code>str</code>: texto</li>
          <li><code>bool</code>: verdadero/falso</li>
        </Lista>
        <Titulo title="h3" id="operadores">Operadores</Titulo>
        <div className="sourceCode" id="cb3">
          <pre
            className="sourceCode python"><code className="sourceCode python"><span id="cb3-1"><Enlace href="#cb3-1" aria-hidden="true" tabindex="-1"></Enlace >a <span className="op">=</span> <span className="dv">5</span></span>
              <span id="cb3-2"><Enlace href="#cb3-2" aria-hidden="true" tabindex="-1"></Enlace >b <span className="op">=</span> <span className="dv">2</span></span>
              <span id="cb3-3"><Enlace href="#cb3-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(a <span className="op">+</span> b)  <span className="co"># Suma</span></span>
              <span id="cb3-4"><Enlace href="#cb3-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(a <span className="op">**</span> b) <span className="co"># Potencia</span></span>
              <span id="cb3-5"><Enlace href="#cb3-5" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(a <span className="op">//</span> b) <span className="co"># División entera</span></span></code></pre>
        </div>
        <Linea />
        <Titulo title="h2" id="control-de-flujo">3. Control de flujo</Titulo>
        <Titulo title="h3" id="condicionales">Condicionales</Titulo>
        <div className="sourceCode" id="cb4">
          <pre
            className="sourceCode python"><code className="sourceCode python"><span id="cb4-1"><Enlace href="#cb4-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">if</span> edad <span className="op">&gt;=</span> <span className="dv">18</span>:</span>
              <span id="cb4-2"><Enlace href="#cb4-2" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">print</span>(<span className="st">&quot;Eres adulto&quot;</span>)</span>
              <span id="cb4-3"><Enlace href="#cb4-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">elif</span> edad <span className="op">&gt;=</span> <span className="dv">13</span>:</span>
              <span id="cb4-4"><Enlace href="#cb4-4" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">print</span>(<span className="st">&quot;Eres adolescente&quot;</span>)</span>
              <span id="cb4-5"><Enlace href="#cb4-5" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">else</span>:</span>
              <span id="cb4-6"><Enlace href="#cb4-6" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">print</span>(<span className="st">&quot;Eres niño&quot;</span>)</span></code></pre>
        </div>
        <Titulo title="h3" id="bucles">Bucles</Titulo>
        <div className="sourceCode" id="cb5">
          <pre
            className="sourceCode python"><code className="sourceCode python"><span id="cb5-1"><Enlace href="#cb5-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">for</span> i <span className="kw">in</span> <span className="bu">range</span>(<span className="dv">5</span>):</span>
              <span id="cb5-2"><Enlace href="#cb5-2" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">print</span>(i)  <span className="co"># Imprime 0 a 4</span></span>
              <span id="cb5-3"><Enlace href="#cb5-3" aria-hidden="true" tabindex="-1"></Enlace ></span>
              <span id="cb5-4"><Enlace href="#cb5-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">while</span> edad <span className="op">&lt;</span> <span className="dv">18</span>:</span>
              <span id="cb5-5"><Enlace href="#cb5-5" aria-hidden="true" tabindex="-1"></Enlace >    edad <span className="op">+=</span> <span className="dv">1</span></span></code></pre>
        </div>
        <Linea />
        <Titulo title="h2" id="estructuras-de-datos">4. Estructuras de datos</Titulo>
        <Titulo title="h3" id="listas">Listas</Titulo>
        <div className="sourceCode" id="cb6">
          <pre
            className="sourceCode python"><code className="sourceCode python"><span id="cb6-1"><Enlace href="#cb6-1" aria-hidden="true" tabindex="-1"></Enlace >nombres <span className="op">=</span> [<span className="st">&quot;Ana&quot;</span>, <span className="st">&quot;Luis&quot;</span>, <span className="st">&quot;Carlos&quot;</span>]</span>
              <span id="cb6-2"><Enlace href="#cb6-2" aria-hidden="true" tabindex="-1"></Enlace >nombres.append(<span className="st">&quot;Sofía&quot;</span>)</span>
              <span id="cb6-3"><Enlace href="#cb6-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(nombres[<span className="dv">0</span>])  <span className="co"># &quot;Ana&quot;</span></span></code></pre>
        </div>
        <Titulo title="h3" id="tuplas">Tuplas</Titulo>
        <div className="sourceCode" id="cb7">
          <pre
            className="sourceCode python"><code className="sourceCode python"><span id="cb7-1"><Enlace href="#cb7-1" aria-hidden="true" tabindex="-1"></Enlace >coordenadas <span className="op">=</span> (<span className="dv">10</span>, <span className="dv">20</span>)</span></code></pre>
        </div>
        <Titulo title="h3" id="conjuntos">Conjuntos</Titulo>
        <div className="sourceCode" id="cb8">
          <pre
            className="sourceCode python"><code className="sourceCode python"><span id="cb8-1"><Enlace href="#cb8-1" aria-hidden="true" tabindex="-1"></Enlace >numeros <span className="op">=</span> {"{1, 2, 3, 3}"}</span>
              <span id="cb8-2"><Enlace href="#cb8-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(numeros)  <span className="co"># {"{1, 2, 3}"} (no repite)</span></span></code></pre>
        </div>
        <Titulo title="h3" id="diccionarios">Diccionarios</Titulo>
        <div className="sourceCode" id="cb9">
          <pre
            className="sourceCode python"><code className="sourceCode python"><span id="cb9-1"><Enlace href="#cb9-1" aria-hidden="true" tabindex="-1"></Enlace >persona <span className="op">=</span> {"{"}&quot;nombre&quot;: <span className="st">&quot;Francisco&quot;</span>, <span className="st">&quot;edad&quot;</span>: <span className="dv">17</span>I{"}"}</span>
              <span id="cb9-2"><Enlace href="#cb9-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(persona[<span className="st">&quot;nombre&quot;</span>])</span></code></pre>
        </div>
        <Linea />
        <Titulo title="h2" id="funciones">5. Funciones</Titulo>
        <div className="sourceCode" id="cb10">
          <pre
            className="sourceCode python"><code className="sourceCode python"><span id="cb10-1"><Enlace href="#cb10-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">def</span> saludar(nombre):</span>
              <span id="cb10-2"><Enlace href="#cb10-2" aria-hidden="true" tabindex="-1"></Enlace >    <span className="cf">return</span> <span className="ss">f&quot;Hola, </span><span>{"{nombre}"}<span className="ss">&quot;</span>
                <span id="cb10-3"><Enlace href="#cb10-3" aria-hidden="true" tabindex="-1"></Enlace ></span>
                <span id="cb10-4"><Enlace href="#cb10-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(saludar(<span className="st">&quot;Francisco&quot;</span>))</span>
              </span> </span>
              </code>
              </pre>
            </div>

            <Linea />
            <Titulo title="h2" id="programación-orientada-a-objetos-poo">6. Programación orientada
              a objetos (POO)</Titulo>
            <div className="sourceCode" id="cb11">
              <pre className="sourceCode python"><code className="sourceCode python"><span id="cb11-1"><Enlace href="#cb11-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">class</span> Persona:</span>
                <span id="cb11-2"><Enlace href="#cb11-2" aria-hidden="true" tabindex="-1"></Enlace >    <span className="kw">def</span> <span className="fu">__init__</span>(<span className="va">self</span>, nombre, edad):</span>
                <span id="cb11-3"><Enlace href="#cb11-3" aria-hidden="true" tabindex="-1"></Enlace >        <span className="va">self</span>.nombre <span className="op">=</span> nombre</span>
                <span id="cb11-4"><Enlace href="#cb11-4" aria-hidden="true" tabindex="-1"></Enlace >        <span className="va">self</span>.edad <span className="op">=</span> edad</span>
                <span id="cb11-5"><Enlace href="#cb11-5" aria-hidden="true" tabindex="-1"></Enlace >    </span>
                <span id="cb11-6"><Enlace href="#cb11-6" aria-hidden="true" tabindex="-1"></Enlace >    <span className="kw">def</span> saludar(<span className="va">self</span>):</span>
                <span id="cb11-7"><Enlace href="#cb11-7" aria-hidden="true" tabindex="-1"></Enlace >        <span className="bu">print</span>(<span className="ss">f&quot;Hola, soy </span>{"{self.nombre}"}<span className="ss">&quot;</span>)</span>
                <span id="cb11-8"><Enlace href="#cb11-8" aria-hidden="true" tabindex="-1"></Enlace ></span>
                <span id="cb11-9"><Enlace href="#cb11-9" aria-hidden="true" tabindex="-1"></Enlace >p1 <span className="op">=</span> Persona(<span className="st">&quot;Francisco&quot;</span>, <span className="dv">17</span>)</span>
                <span id="cb11-10"><Enlace href="#cb11-10" aria-hidden="true" tabindex="-1"></Enlace >p1.saludar()</span></code></pre>
            </div>
            <Linea />
            <Titulo title="h2" id="módulos-y-paquetes">7. Módulos y paquetes</Titulo>
            <div className="sourceCode" id="cb12">
              <pre
                className="sourceCode python"><code className="sourceCode python"><span id="cb12-1"><Enlace href="#cb12-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> math</span>
                  <span id="cb12-2"><Enlace href="#cb12-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(math.sqrt(<span className="dv">16</span>))  <span className="co"># 4.0</span></span></code></pre>
            </div>
            <Texto>También puedes crear tus propios módulos (<code>mimodulo.py</code>) y
              luego:</Texto>
            <div className="sourceCode" id="cb13">
              <pre
                className="sourceCode python"><code className="sourceCode python"><span id="cb13-1"><Enlace href="#cb13-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> mimodulo</span></code></pre>
            </div>
            <Linea />
            <Titulo title="h2" id="archivos">8. Archivos</Titulo>
            <div className="sourceCode" id="cb14">
              <pre
                className="sourceCode python"><code className="sourceCode python"><span id="cb14-1"><Enlace href="#cb14-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">with</span> <span className="bu">open</span>(<span className="st">&quot;datos.txt&quot;</span>, <span className="st">&quot;w&quot;</span>) <span className="im">as</span> archivo:</span>
                  <span id="cb14-2"><Enlace href="#cb14-2" aria-hidden="true" tabindex="-1"></Enlace >    archivo.write(<span className="st">&quot;Hola mundo&quot;</span>)</span>
                  <span id="cb14-3"><Enlace href="#cb14-3" aria-hidden="true" tabindex="-1"></Enlace ></span>
                  <span id="cb14-4"><Enlace href="#cb14-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">with</span> <span className="bu">open</span>(<span className="st">&quot;datos.txt&quot;</span>, <span className="st">&quot;r&quot;</span>) <span className="im">as</span> archivo:</span>
                  <span id="cb14-5"><Enlace href="#cb14-5" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">print</span>(archivo.read())</span></code></pre>
            </div>
            <Linea />
            <Titulo title="h2" id="librerías-populares-por-áreas">9. Librerías populares (por
              áreas)</Titulo>
            <table>
              <thead>
                <tr>
                  <th>Área</th>
                  <th>Librerías</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>IA / Machine Learning</strong></td>
                  <td><code>numpy</code>, <code>pandas</code>, <code>scikit-learn</code>,
                    <code>tensorflow</code>, <code>torch</code>
                  </td>
                </tr>
                <tr>
                  <td><strong>Hacking / Ciberseguridad</strong></td>
                  <td><code>scapy</code>, <code>socket</code>, <code>requests</code>,
                    <code>paramiko</code>
                  </td>
                </tr>
                <tr>
                  <td><strong>Desarrollo web</strong></td>
                  <td><code>flask</code>, <code>django</code>, <code>fastapi</code></td>
                </tr>
                <tr>
                  <td><strong>Automatización</strong></td>
                  <td><code>os</code>, <code>shutil</code>, <code>subprocess</code>,
                    <code>pyautogui</code>, <code>selenium</code>
                  </td>
                </tr>
                <tr>
                  <td><strong>Ciencia de datos</strong></td>
                  <td><code>matplotlib</code>, <code>seaborn</code>,
                    <code>pandas</code>
                  </td>
                </tr>
                <tr>
                  <td><strong>Videojuegos</strong></td>
                  <td><code>pygame</code></td>
                </tr>
                <tr>
                  <td><strong>Bots / APIs</strong></td>
                  <td><code>discord.py</code>, <code>telebot</code>,
                    <code>requests</code>
                  </td>
                </tr>
              </tbody>
            </table>
            <Linea />
            <Titulo title="h2" id="conceptos-avanzados">10. Conceptos avanzados</Titulo>
            <Lista>
              <li><strong>List comprehensions:</strong>
                <div className="sourceCode" id="cb15">
                  <pre
                    className="sourceCode python"><code className="sourceCode python"><span id="cb15-1"><Enlace href="#cb15-1" aria-hidden="true" tabindex="-1"></Enlace >cuadrados <span className="op">=</span> [x<span className="op">**</span><span className="dv">2</span> <span className="cf">for</span> x <span className="kw">in</span> <span className="bu">range</span>(<span className="dv">5</span>)]</span></code></pre>
                </div>
              </li>
              <li>
                <Texto><strong>Funciones lambda:</strong></Texto>
                <div className="sourceCode" id="cb16">
                  <pre
                    className="sourceCode python"><code className="sourceCode python"><span id="cb16-1"><Enlace href="#cb16-1" aria-hidden="true" tabindex="-1"></Enlace >doble <span className="op">=</span> <span className="kw">lambda</span> x: x<span className="op">*</span><span className="dv">2</span></span></code></pre>
                </div>
              </li>
              <li>
                <strong>Decoradores</strong></li>    <li><strong>Generadores (<code>yield</code>)</strong></li>    <li><strong>Manejo de errores
                  (<code>try/except</code>)</strong></li>    <li><strong>Multithreading y multiprocessing</strong></li>    <li><strong>Expresiones regulares (<code>re</code>)</strong></li>  </Lista >
            <Linea />
            <Titulo title="h2" id="herramientas-y-entorno">11. Herramientas y entorno</Titulo>
            <Lista>
              <li><strong>Ejecutar:</strong>
                <code>python archivo.py</code>
              </li>    <li><strong>Gestor de paquetes:</strong>
                <code>pip install nombre_paquete</code>
              </li>    <li>
                <Texto><strong>Entornos virtuales:</strong></Texto>
                <div className="sourceCode" id="cb17">
                  <pre
                    className="sourceCode bash"><code className="sourceCode bash"><span id="cb17-1"><Enlace href="#cb17-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">python</span> <span className="at">-m</span> venv entorno</span>
                      <span id="cb17-2"><Enlace href="#cb17-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">source</span> entorno/bin/activate  <span className="co"># Linux</span></span>
                      <span id="cb17-3"><Enlace href="#cb17-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">entorno\Scripts\activate</span>     <span className="co"># Windows</span></span></code></pre>
                </div>
              </li>
            </Lista>
          </Estructura>
        </>
        );
}
        export default nameabcd;
