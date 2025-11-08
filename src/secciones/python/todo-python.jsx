import Titulo from "./../../componentes/titulo.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Linea from "./../../componentes/linea.jsx";

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="python">Python</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><a href="#python">Python</a>
          <Lista>
            <li><a href="#temario">Temario</a></li>
            <li><a href="#1-qué-es-python">1. ¿Qué es Python?</a></li>
            <li><a href="#2-sintaxis-básica">2. Sintaxis básica</a>
              <Lista>
                <li><a href="#variables-y-tipos-de-datos">Variables y tipos de
                  datos</a></li>
                <li><a href="#operadores">Operadores</a></li>
              </Lista>
            </li>
            <li><a href="#3-control-de-flujo">3. Control de flujo</a>
              <Lista>
                <li><a href="#condicionales">Condicionales</a></li>
                <li><a href="#bucles">Bucles</a></li>
              </Lista>
            </li>
            <li><a href="#4-estructuras-de-datos">4. Estructuras de datos</a>
              <Lista>
                <li><a href="#listas">Listas</a></li>
                <li><a href="#tuplas">Tuplas</a></li>
                <li><a href="#conjuntos">Conjuntos</a></li>
                <li><a href="#diccionarios">Diccionarios</a></li>
              </Lista>
            </li>
            <li><a href="#5-funciones">5. Funciones</a></li>
            <li><a href="#6-programación-orientada-a-objetos-poo">6. Programación
              orientada a objetos (POO)</a></li>
            <li><a href="#7-módulos-y-paquetes">7. Módulos y paquetes</a></li>
            <li><a href="#8-archivos">8. Archivos</a></li>
            <li><a href="#9-librerías-populares-por-áreas">9. Librerías populares
              (por áreas)</a></li>
            <li><a href="#10-conceptos-avanzados">10. Conceptos avanzados</a></li>
            <li><a href="#11-herramientas-y-entorno">11. Herramientas y
              entorno</a></li>
          </Lista>
        </li>
      </Lista>
      <Texto><a href="./../readme.md#5-python">Regresar a la Guía
        Principal</a></Texto>
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
      <div class="sourceCode" id="cb1">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(<span class="st">&quot;Hola, mundo!&quot;</span>)</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="sintaxis-básica">2. Sintaxis básica</Titulo>
      <Titulo title="h3" id="variables-y-tipos-de-datos">Variables y tipos de datos</Titulo>
      <div class="sourceCode" id="cb2">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a>nombre <span class="op">=</span> <span class="st">&quot;Francisco&quot;</span></span>
            <span id="cb2-2"><a href="#cb2-2" aria-hidden="true" tabindex="-1"></a>edad <span class="op">=</span> <span class="dv">17</span></span>
            <span id="cb2-3"><a href="#cb2-3" aria-hidden="true" tabindex="-1"></a>altura <span class="op">=</span> <span class="fl">1.75</span></span>
            <span id="cb2-4"><a href="#cb2-4" aria-hidden="true" tabindex="-1"></a>es_estudiante <span class="op">=</span> <span class="va">True</span></span></code></pre>
      </div>
      <Texto>Tipos básicos:</Texto>
      <Lista>
        <li><code>int</code>: números enteros</li>
        <li><code>float</code>: decimales</li>
        <li><code>str</code>: texto</li>
        <li><code>bool</code>: verdadero/falso</li>
      </Lista>
      <Titulo title="h3" id="operadores">Operadores</Titulo>
      <div class="sourceCode" id="cb3">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a>a <span class="op">=</span> <span class="dv">5</span></span>
            <span id="cb3-2"><a href="#cb3-2" aria-hidden="true" tabindex="-1"></a>b <span class="op">=</span> <span class="dv">2</span></span>
            <span id="cb3-3"><a href="#cb3-3" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(a <span class="op">+</span> b)  <span class="co"># Suma</span></span>
            <span id="cb3-4"><a href="#cb3-4" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(a <span class="op">**</span> b) <span class="co"># Potencia</span></span>
            <span id="cb3-5"><a href="#cb3-5" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(a <span class="op">//</span> b) <span class="co"># División entera</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="control-de-flujo">3. Control de flujo</Titulo>
      <Titulo title="h3" id="condicionales">Condicionales</Titulo>
      <div class="sourceCode" id="cb4">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a><span class="cf">if</span> edad <span class="op">&gt;=</span> <span class="dv">18</span>:</span>
            <span id="cb4-2"><a href="#cb4-2" aria-hidden="true" tabindex="-1"></a>    <span class="bu">print</span>(<span class="st">&quot;Eres adulto&quot;</span>)</span>
            <span id="cb4-3"><a href="#cb4-3" aria-hidden="true" tabindex="-1"></a><span class="cf">elif</span> edad <span class="op">&gt;=</span> <span class="dv">13</span>:</span>
            <span id="cb4-4"><a href="#cb4-4" aria-hidden="true" tabindex="-1"></a>    <span class="bu">print</span>(<span class="st">&quot;Eres adolescente&quot;</span>)</span>
            <span id="cb4-5"><a href="#cb4-5" aria-hidden="true" tabindex="-1"></a><span class="cf">else</span>:</span>
            <span id="cb4-6"><a href="#cb4-6" aria-hidden="true" tabindex="-1"></a>    <span class="bu">print</span>(<span class="st">&quot;Eres niño&quot;</span>)</span></code></pre>
      </div>
      <Titulo title="h3" id="bucles">Bucles</Titulo>
      <div class="sourceCode" id="cb5">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb5-1"><a href="#cb5-1" aria-hidden="true" tabindex="-1"></a><span class="cf">for</span> i <span class="kw">in</span> <span class="bu">range</span>(<span class="dv">5</span>):</span>
            <span id="cb5-2"><a href="#cb5-2" aria-hidden="true" tabindex="-1"></a>    <span class="bu">print</span>(i)  <span class="co"># Imprime 0 a 4</span></span>
            <span id="cb5-3"><a href="#cb5-3" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb5-4"><a href="#cb5-4" aria-hidden="true" tabindex="-1"></a><span class="cf">while</span> edad <span class="op">&lt;</span> <span class="dv">18</span>:</span>
            <span id="cb5-5"><a href="#cb5-5" aria-hidden="true" tabindex="-1"></a>    edad <span class="op">+=</span> <span class="dv">1</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="estructuras-de-datos">4. Estructuras de datos</Titulo>
      <Titulo title="h3" id="listas">Listas</Titulo>
      <div class="sourceCode" id="cb6">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a>nombres <span class="op">=</span> [<span class="st">&quot;Ana&quot;</span>, <span class="st">&quot;Luis&quot;</span>, <span class="st">&quot;Carlos&quot;</span>]</span>
            <span id="cb6-2"><a href="#cb6-2" aria-hidden="true" tabindex="-1"></a>nombres.append(<span class="st">&quot;Sofía&quot;</span>)</span>
            <span id="cb6-3"><a href="#cb6-3" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(nombres[<span class="dv">0</span>])  <span class="co"># &quot;Ana&quot;</span></span></code></pre>
      </div>
      <Titulo title="h3" id="tuplas">Tuplas</Titulo>
      <div class="sourceCode" id="cb7">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb7-1"><a href="#cb7-1" aria-hidden="true" tabindex="-1"></a>coordenadas <span class="op">=</span> (<span class="dv">10</span>, <span class="dv">20</span>)</span></code></pre>
      </div>
      <Titulo title="h3" id="conjuntos">Conjuntos</Titulo>
      <div class="sourceCode" id="cb8">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb8-1"><a href="#cb8-1" aria-hidden="true" tabindex="-1"></a>numeros <span class="op">=</span> {<span class="dv">1</span>, <span class="dv">2</span>, <span class="dv">3</span>, <span class="dv">3</span>}</span>
            <span id="cb8-2"><a href="#cb8-2" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(numeros)  <span class="co"># {1, 2, 3} (no repite)</span></span></code></pre>
      </div>
      <Titulo title="h3" id="diccionarios">Diccionarios</Titulo>
      <div class="sourceCode" id="cb9">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb9-1"><a href="#cb9-1" aria-hidden="true" tabindex="-1"></a>persona <span class="op">=</span> {<span class="st">&quot;nombre&quot;</span>: <span class="st">&quot;Francisco&quot;</span>, <span class="st">&quot;edad&quot;</span>: <span class="dv">17</span>}</span>
            <span id="cb9-2"><a href="#cb9-2" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(persona[<span class="st">&quot;nombre&quot;</span>])</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="funciones">5. Funciones</Titulo>
      <div class="sourceCode" id="cb10">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb10-1"><a href="#cb10-1" aria-hidden="true" tabindex="-1"></a><span class="kw">def</span> saludar(nombre):</span>
            <span id="cb10-2"><a href="#cb10-2" aria-hidden="true" tabindex="-1"></a>    <span class="cf">return</span> <span class="ss">f&quot;Hola, </span><span class="sc">{</span>nombre<span class="sc">}</span><span class="ss">&quot;</span></span>
            <span id="cb10-3"><a href="#cb10-3" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb10-4"><a href="#cb10-4" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(saludar(<span class="st">&quot;Francisco&quot;</span>))</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="programación-orientada-a-objetos-poo">6. Programación orientada
        a objetos (POO)</Titulo>
      <div class="sourceCode" id="cb11">
        <pre class="sourceCode python"><code class="sourceCode python"><span id="cb11-1"><a href="#cb11-1" aria-hidden="true" tabindex="-1"></a><span class="kw">class</span> Persona:</span>
          <span id="cb11-2"><a href="#cb11-2" aria-hidden="true" tabindex="-1"></a>    <span class="kw">def</span> <span class="fu">__init__</span>(<span class="va">self</span>, nombre, edad):</span>
          <span id="cb11-3"><a href="#cb11-3" aria-hidden="true" tabindex="-1"></a>        <span class="va">self</span>.nombre <span class="op">=</span> nombre</span>
          <span id="cb11-4"><a href="#cb11-4" aria-hidden="true" tabindex="-1"></a>        <span class="va">self</span>.edad <span class="op">=</span> edad</span>
          <span id="cb11-5"><a href="#cb11-5" aria-hidden="true" tabindex="-1"></a>    </span>
          <span id="cb11-6"><a href="#cb11-6" aria-hidden="true" tabindex="-1"></a>    <span class="kw">def</span> saludar(<span class="va">self</span>):</span>
          <span id="cb11-7"><a href="#cb11-7" aria-hidden="true" tabindex="-1"></a>        <span class="bu">print</span>(<span class="ss">f&quot;Hola, soy </span><span class="sc">{</span><span class="va">self</span><span class="sc">.</span>nombre<span class="sc">}</span><span class="ss">&quot;</span>)</span>
          <span id="cb11-8"><a href="#cb11-8" aria-hidden="true" tabindex="-1"></a></span>
          <span id="cb11-9"><a href="#cb11-9" aria-hidden="true" tabindex="-1"></a>p1 <span class="op">=</span> Persona(<span class="st">&quot;Francisco&quot;</span>, <span class="dv">17</span>)</span>
          <span id="cb11-10"><a href="#cb11-10" aria-hidden="true" tabindex="-1"></a>p1.saludar()</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="módulos-y-paquetes">7. Módulos y paquetes</Titulo>
      <div class="sourceCode" id="cb12">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb12-1"><a href="#cb12-1" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> math</span>
            <span id="cb12-2"><a href="#cb12-2" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(math.sqrt(<span class="dv">16</span>))  <span class="co"># 4.0</span></span></code></pre>
      </div>
      <Texto>También puedes crear tus propios módulos (<code>mimodulo.py</code>) y
        luego:</Texto>
      <div class="sourceCode" id="cb13">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb13-1"><a href="#cb13-1" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> mimodulo</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="archivos">8. Archivos</Titulo>
      <div class="sourceCode" id="cb14">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb14-1"><a href="#cb14-1" aria-hidden="true" tabindex="-1"></a><span class="cf">with</span> <span class="bu">open</span>(<span class="st">&quot;datos.txt&quot;</span>, <span class="st">&quot;w&quot;</span>) <span class="im">as</span> archivo:</span>
            <span id="cb14-2"><a href="#cb14-2" aria-hidden="true" tabindex="-1"></a>    archivo.write(<span class="st">&quot;Hola mundo&quot;</span>)</span>
            <span id="cb14-3"><a href="#cb14-3" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb14-4"><a href="#cb14-4" aria-hidden="true" tabindex="-1"></a><span class="cf">with</span> <span class="bu">open</span>(<span class="st">&quot;datos.txt&quot;</span>, <span class="st">&quot;r&quot;</span>) <span class="im">as</span> archivo:</span>
            <span id="cb14-5"><a href="#cb14-5" aria-hidden="true" tabindex="-1"></a>    <span class="bu">print</span>(archivo.read())</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="librerías-populares-por-áreas">9. Librerías populares (por
        áreas)</Titulo>
      <table>
        <colgroup>
          <col style="width: 33%" />
          <col style="width: 66%" />
        </colgroup>
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
        <li><strong>List comprehensions:</strong></Texto>
        <div class="sourceCode" id="cb15">
          <pre
            class="sourceCode python"><code class="sourceCode python"><span id="cb15-1"><a href="#cb15-1" aria-hidden="true" tabindex="-1"></a>cuadrados <span class="op">=</span> [x<span class="op">**</span><span class="dv">2</span> <span class="cf">for</span> x <span class="kw">in</span> <span class="bu">range</span>(<span class="dv">5</span>)]</span></code></pre>
        </div>
      </li>
      <li>
        <Texto><strong>Funciones lambda:</strong></Texto>
        <div class="sourceCode" id="cb16">
          <pre
            class="sourceCode python"><code class="sourceCode python"><span id="cb16-1"><a href="#cb16-1" aria-hidden="true" tabindex="-1"></a>doble <span class="op">=</span> <span class="kw">lambda</span> x: x<span class="op">*</span><span class="dv">2</span></span></code></pre>
        </div>
      </li>
      <li>
        <Texto><strong>Decoradores</strong></li>    <li><strong>Generadores (<code>yield</code>)</strong></li>    <li><strong>Manejo de errores
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
      <div class="sourceCode" id="cb17">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb17-1"><a href="#cb17-1" aria-hidden="true" tabindex="-1"></a><span class="ex">python</span> <span class="at">-m</span> venv entorno</span>
<span id="cb17-2"><a href="#cb17-2" aria-hidden="true" tabindex="-1"></a><span class="bu">source</span> entorno/bin/activate  <span class="co"># Linux</span></span>
<span id="cb17-3"><a href="#cb17-3" aria-hidden="true" tabindex="-1"></a><span class="ex">entorno\Scripts\activate</span>     <span class="co"># Windows</span></span></code></pre>
      </div>
    </li>
  </Lista>
  <Linea />
  <Texto><a href="./../readme.md#5-python">Regresar a la Guía
      Principal</a></Texto>
  <blockquote>
    <Texto><strong>Autor:</strong> Fravelz</Texto>
  </blockquote>
</>
);
}
export default nameabcd;
