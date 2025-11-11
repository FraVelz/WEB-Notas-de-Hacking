import Enlace from "./../../../componentes/enlace.jsx";
import Linea from "./../../../componentes/linea.jsx";
import Lista from "./../../../componentes/lista.jsx";
import Texto from "./../../../componentes/texto.jsx";
import Titulo from "./../../../componentes/titulo.jsx";
function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="re-en-python-expreciones-regulares">Re en Python (expreciones
        regulares)</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><Enlace href="#re-en-python-expreciones-regulares">Re en Python
          (expreciones regulares)</Enlace >
          <Lista>
            <li><Enlace href="#temario">Temario</Enlace ></li>
            <li><Enlace href="#qué-es-re">¿Qué es re?</Enlace ></li>
            <li><Enlace href="#funciones-principales">FUNCIONES PRINCIPALES</Enlace >
              <Lista>
                <li><Enlace href="#1-rematchpatrón-texto">1. re.match(patrón, texto)</Enlace ></li>
                <li><Enlace href="#2-researchpatrón-texto">2. re.search(patrón,
                  texto)</Enlace ></li>
                <li><Enlace href="#3-refindallpatrón-texto">3. re.findall(patrón,
                  texto)</Enlace ></li>
                <li><Enlace href="#4-refinditerpatrón-texto">4. re.finditer(patrón,
                  texto)</Enlace ></li>
                <li><Enlace href="#5-resubpatrón-reemplazo-texto-count0">5. re.sub(patrón,
                  reemplazo, texto, count=0)</Enlace ></li>
                <li><Enlace href="#6-resplitpatrón-texto-maxsplit0">6. re.split(patrón,
                  texto, maxsplit=0)</Enlace ></li>
                <li><Enlace href="#7-recompilepatrón-flags0">7. re.compile(patrón,
                  flags=0)</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#objetos-match">OBJETOS Match</Enlace ></li>
            <li><Enlace href="#metacaracteres-más-importantes">METACARACTERES MÁS
              IMPORTANTES</Enlace ></li>
            <li><Enlace href="#secuencias-especiales">SECUENCIAS ESPECIALES</Enlace ></li>
            <li><Enlace href="#flags-comunes">FLAGS COMUNES</Enlace ></li>
            <li><Enlace href="#ejemplos-prácticos">EJEMPLOS PRÁCTICOS</Enlace >
              <Lista>
                <li><Enlace href="#1-validar-un-correo-electrónico">1. Validar un correo
                  electrónico</Enlace ></li>
                <li><Enlace href="#2-extraer-números-de-un-texto">2. Extraer números de un
                  texto</Enlace ></li>
                <li><Enlace href="#3-reemplazar-palabras">3. Reemplazar palabras</Enlace ></li>
                <li><Enlace href="#4-separar-texto-por-comas-o-espacios">4. Separar texto por
                  comas o espacios</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#buenas-prácticas">Buenas prácticas</Enlace ></li>
            <li><Enlace href="#ejercicio-rápido">Ejercicio rápido</Enlace ></li>
          </Lista>
        </li>
      </Lista>
      <Texto><Enlace href="./../../readme.md#5-python">Regresar a la Guía
        Principal</Enlace ></Texto>
      <Linea />
      <Titulo title="h2" id="qué-es-re">¿Qué es re?</Titulo>
      <Texto>El módulo <strong><code>re</code></strong> (de <em>regular
        expressions</em>, expresiones regulares) permite <strong>buscar,
          reemplazar y analizar texto mediante patrones</strong>.</Texto>
      <Texto>Se importa con:</Texto>
      <div className="sourceCode" id="cb1">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb1-1"><Enlace href="#cb1-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> re</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="funciones-principales">FUNCIONES PRINCIPALES</Titulo>
      <Titulo title="h3" id="re.matchpatrón-texto">1. re.match(patrón, texto)</Titulo>
      <Texto>Busca <strong>solo al inicio del texto</strong>.</Texto>
      <div className="sourceCode" id="cb2">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb2-1"><Enlace href="#cb2-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> re</span>
            <span id="cb2-2"><Enlace href="#cb2-2" aria-hidden="true" tabindex="-1"></Enlace >m <span className="op">=</span> re.match(<span className="vs">r&quot;Hola&quot;</span>, <span className="st">&quot;Hola mundo&quot;</span>)</span>
            <span id="cb2-3"><Enlace href="#cb2-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(m.group())  <span className="co"># Hola</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h3" id="re.searchpatrón-texto">2. re.search(patrón, texto)</Titulo>
      <Texto>Busca <strong>en cualquier parte</strong> del texto (la primera
        coincidencia).</Texto>
      <div className="sourceCode" id="cb3">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb3-1"><Enlace href="#cb3-1" aria-hidden="true" tabindex="-1"></Enlace >re.search(<span className="vs">r&quot;mundo&quot;</span>, <span className="st">&quot;Hola mundo&quot;</span>).group()  <span className="co"># mundo</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h3" id="re.findallpatrón-texto">3. re.findall(patrón, texto)</Titulo>
      <Texto>Devuelve <strong>todas las coincidencias</strong> en una lista.</Texto>
      <div className="sourceCode" id="cb4">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb4-1"><Enlace href="#cb4-1" aria-hidden="true" tabindex="-1"></Enlace >re.findall(<span className="vs">r&quot;\d+&quot;</span>, <span className="st">&quot;Edad 17 años, código 2025&quot;</span>)  <span className="co"># [&#39;17&#39;, &#39;2025&#39;]</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h3" id="re.finditerpatrón-texto">4. re.finditer(patrón, texto)</Titulo>
      <Texto>Devuelve un <strong>iterador</strong> con objetos <code>Match</code>
        (útil para posiciones).</Texto>
      <div className="sourceCode" id="cb5">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb5-1"><Enlace href="#cb5-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">for</span> m <span className="kw">in</span> re.finditer(<span className="vs">r&quot;\d+&quot;</span>, <span className="st">&quot;x=5 y=10 z=20&quot;</span>):</span>
            <span id="cb5-2"><Enlace href="#cb5-2" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">print</span>(m.group(), m.start(), m.end())</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h3" id="re.subpatrón-reemplazo-texto-count0">5. re.sub(patrón,
        reemplazo, texto, count=0)</Titulo>
      <Texto><strong>Reemplaza</strong> coincidencias por otro texto.</Texto>
      <div className="sourceCode" id="cb6">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb6-1"><Enlace href="#cb6-1" aria-hidden="true" tabindex="-1"></Enlace >re.sub(<span className="vs">r&quot;\d+&quot;</span>, <span className="st">&quot;X&quot;</span>, <span className="st">&quot;Tengo 2 perros y 3 gatos&quot;</span>)  <span className="co"># &#39;Tengo X perros y X gatos&#39;</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h3" id="re.splitpatrón-texto-maxsplit0">6. re.split(patrón, texto,
        maxsplit=0)</Titulo>
      <Texto><strong>Divide el texto</strong> usando el patrón como separador.</Texto>
      <div className="sourceCode" id="cb7">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb7-1"><Enlace href="#cb7-1" aria-hidden="true" tabindex="-1"></Enlace >re.split(<span className="vs">r&quot;\s+&quot;</span>, <span className="st">&quot;uno   dos tres&quot;</span>)  <span className="co"># [&#39;uno&#39;, &#39;dos&#39;, &#39;tres&#39;]</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h3" id="re.compilepatrón-flags0">7. re.compile(patrón, flags=0)</Titulo>
      <Texto>Compila el patrón para reutilizarlo muchas veces (más eficiente).</Texto>
      <div className="sourceCode" id="cb8">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb8-1"><Enlace href="#cb8-1" aria-hidden="true" tabindex="-1"></Enlace >patron <span className="op">=</span> re.<span className="bu">compile</span>(<span className="vs">r&quot;\d+&quot;</span>)</span>
            <span id="cb8-2"><Enlace href="#cb8-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(patron.findall(<span className="st">&quot;a1b22c333&quot;</span>))  <span className="co"># [&#39;1&#39;, &#39;22&#39;, &#39;333&#39;]</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="objetos-match">OBJETOS Match</Titulo>
      <Texto>Cuando haces <code>match()</code> o <code>search()</code>, obtienes
        un objeto con información útil:</Texto>
      <div className="sourceCode" id="cb9">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb9-1"><Enlace href="#cb9-1" aria-hidden="true" tabindex="-1"></Enlace >m <span className="op">=</span> re.search(<span className="vs">r&quot;(\d+)&quot;</span>, <span className="st">&quot;Edad: 25 años&quot;</span>)</span>
            <span id="cb9-2"><Enlace href="#cb9-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(m.group())    <span className="co"># &#39;25&#39;</span></span>
            <span id="cb9-3"><Enlace href="#cb9-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(m.start())    <span className="co"># 6</span></span>
            <span id="cb9-4"><Enlace href="#cb9-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(m.end())      <span className="co"># 8</span></span>
            <span id="cb9-5"><Enlace href="#cb9-5" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(m.span())     <span className="co"># (6, 8)</span></span></code></pre>
      </div>
      <Texto>Si hay <strong>grupos</strong> (entre paréntesis):</Texto>
      <div className="sourceCode" id="cb10">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb10-1"><Enlace href="#cb10-1" aria-hidden="true" tabindex="-1"></Enlace >m <span className="op">=</span> re.search(<span className="vs">r&quot;(\d+)\s*(años)&quot;</span>, <span className="st">&quot;Edad: 25 años&quot;</span>)</span>
            <span id="cb10-2"><Enlace href="#cb10-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(m.groups())   <span className="co"># (&#39;25&#39;, &#39;años&#39;)</span></span>
            <span id="cb10-3"><Enlace href="#cb10-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(m.group(<span className="dv">1</span>))   <span className="co"># &#39;25&#39;</span></span>
            <span id="cb10-4"><Enlace href="#cb10-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(m.group(<span className="dv">2</span>))   <span className="co"># &#39;años&#39;</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="metacaracteres-más-importantes">METACARACTERES MÁS
        IMPORTANTES</Titulo>
      <table>
        <thead>
          <tr>
            <th>Símbolo</th>
            <th>Significado</th>
            <th>Ejemplo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>.</code></td>
            <td>Cualquier carácter excepto <code>\n</code></td>
            <td><code>a.b</code> → “acb”, “arb”</td>
          </tr>
          <tr>
            <td><code>^</code></td>
            <td>Inicio de línea</td>
            <td><code>^Hola</code></td>
          </tr>
          <tr>
            <td><code>$</code></td>
            <td>Fin de línea</td>
            <td><code>mundo$</code></td>
          </tr>
          <tr>
            <td><code>*</code></td>
            <td>0 o más repeticiones</td>
            <td><code>a*</code> → ““,”aaa”</td>
          </tr>
          <tr>
            <td><code>+</code></td>
            <td>1 o más repeticiones</td>
            <td><code>a+</code> → “a”, “aaa”</td>
          </tr>
          <tr>
            <td><code>?</code></td>
            <td>0 o 1 repetición</td>
            <td><code>colou?r</code> → “color”, “colour”</td>
          </tr>
          <tr>
            <td><code>{"{"}n{"}"}</code></td>
            <td>Exactamente n repeticiones</td>
            <td><code>\d{"{"}4{"}"}</code> → “2025”</td>
          </tr>
          <tr>
            <td><code>{"{"}n,{"}"}</code></td>
            <td>n o más</td>
            <td><code>\d{"{"}2,{"}"}</code></td>
          </tr>
          <tr>
            <td><code>{"{"}n, m{"}"}</code></td>
            <td>entre n y m</td>
            <td><code>\d{"{"}2, 4{"}"}</code></td>
          </tr>
          <tr>
            <td><code>[]</code></td>
            <td>Conjunto de caracteres</td>
            <td><code>[aeiou]</code>, <code>[0-9]</code></td>
          </tr>
          <tr>
            <td><code>|</code></td>
            <td>Alternativa (OR) <code>gato|perro</code></td>
            <td></td>
          </tr>
          <tr>
            <td><code>()</code></td>
            <td>Grupo de captura</td>
            <td><code>(abc)+</code></td>
          </tr>
          <tr>
            <td><code>\</code></td>
            <td>Escape o secuencia especial</td>
            <td><code>\d</code>, <code>\s</code>, <code>\w</code></td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Titulo title="h2" id="secuencias-especiales">SECUENCIAS ESPECIALES</Titulo>
      <table>
        <thead>
          <tr>
            <th>Secuencia</th>
            <th>Significado</th>
            <th>Ejemplo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>\d</code></td>
            <td>Dígito <code>[0-9]</code></td>
            <td><code>\d+</code> → “123”</td>
          </tr>
          <tr>
            <td><code>\D</code></td>
            <td>No dígito</td>
            <td><code>\D+</code> → “abc”</td>
          </tr>
          <tr>
            <td><code>\s</code></td>
            <td>Espacio, tab, salto de línea</td>
            <td><code>\s+</code></td>
          </tr>
          <tr>
            <td><code>\S</code></td>
            <td>No espacio</td>
            <td><code>\S+</code></td>
          </tr>
          <tr>
            <td><code>\w</code></td>
            <td>Alfanumérico <code>[A-Za-z0-9_]</code></td>
            <td><code>\w+</code></td>
          </tr>
          <tr>
            <td><code>\W</code></td>
            <td>No alfanumérico</td>
            <td><code>\W+</code></td>
          </tr>
          <tr>
            <td><code>\b</code></td>
            <td>Límite de palabra</td>
            <td><code>\bpalabra\b</code></td>
          </tr>
          <tr>
            <td><code>\B</code></td>
            <td>No límite de palabra</td>
            <td><code>\Bpalabra\B</code></td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Titulo title="h2" id="flags-comunes">FLAGS COMUNES</Titulo>
      <table>
        <thead>
          <tr>
            <th>Flag</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>re.IGNORECASE</code> o <code>re.I</code></td>
            <td>Ignora mayúsculas/minúsculas</td>
          </tr>
          <tr>
            <td><code>re.MULTILINE</code> o <code>re.M</code></td>
            <td><code>^</code> y <code>$</code> funcionan por línea</td>
          </tr>
          <tr>
            <td><code>re.DOTALL</code> o <code>re.S</code></td>
            <td><code>.</code> incluye saltos de línea</td>
          </tr>
          <tr>
            <td><code>re.VERBOSE</code> o <code>re.X</code></td>
            <td>Permite comentar y dar formato al patrón</td>
          </tr>
        </tbody>
      </table>
      <Texto>Ejemplo:</Texto>
      <div className="sourceCode" id="cb11">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb11-1"><Enlace href="#cb11-1" aria-hidden="true" tabindex="-1"></Enlace >patron <span className="op">=</span> re.<span className="bu">compile</span>(<span className="vs">r&quot;&quot;&quot;</span></span>
            <span id="cb11-2"><Enlace href="#cb11-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="vs">    ^\d</span><span className="sc">{4}</span><span className="vs">     # 4 dígitos al inicio</span></span>
            <span id="cb11-3"><Enlace href="#cb11-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="vs">    -\d</span><span className="sc">{2}</span><span className="vs">     # guion y 2 dígitos</span></span>
            <span id="cb11-4"><Enlace href="#cb11-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="vs">    -\d</span><span className="sc">{2}</span><span className="vs">$    # guion y 2 dígitos al final</span></span>
            <span id="cb11-5"><Enlace href="#cb11-5" aria-hidden="true" tabindex="-1"></Enlace ><span className="vs">&quot;&quot;&quot;</span>, re.VERBOSE)</span>
            <span id="cb11-6"><Enlace href="#cb11-6" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(<span className="bu">bool</span>(patron.match(<span className="st">&quot;2025-10-27&quot;</span>)))  <span className="co"># True</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="ejemplos-prácticos">EJEMPLOS PRÁCTICOS</Titulo>
      <Titulo title="h3" id="validar-un-correo-electrónico">1. Validar un correo
        electrónico</Titulo>
      <div className="sourceCode" id="cb12">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb12-1"><Enlace href="#cb12-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> re</span>
            <span id="cb12-2"><Enlace href="#cb12-2" aria-hidden="true" tabindex="-1"></Enlace >patron <span className="op">=</span> <span className="vs">r&quot;^[\w\.-]+@[\w\.-]+\.\w+$&quot;</span></span>
            <span id="cb12-3"><Enlace href="#cb12-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(<span className="bu">bool</span>(re.match(patron, <span className="st">&quot;usuario@mail.com&quot;</span>)))  <span className="co"># True</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h3" id="extraer-números-de-un-texto">2. Extraer números de un texto</Titulo>
      <div className="sourceCode" id="cb13">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb13-1"><Enlace href="#cb13-1" aria-hidden="true" tabindex="-1"></Enlace >re.findall(<span className="vs">r&quot;\d+&quot;</span>, <span className="st">&quot;ID123, edad 45, año 2025&quot;</span>)  <span className="co"># [&#39;123&#39;, &#39;45&#39;, &#39;2025&#39;]</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h3" id="reemplazar-palabras">3. Reemplazar palabras</Titulo>
      <div className="sourceCode" id="cb14">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb14-1"><Enlace href="#cb14-1" aria-hidden="true" tabindex="-1"></Enlace >texto <span className="op">=</span> <span className="st">&quot;Hola mundo cruel&quot;</span></span>
            <span id="cb14-2"><Enlace href="#cb14-2" aria-hidden="true" tabindex="-1"></Enlace >nuevo <span className="op">=</span> re.sub(<span className="vs">r&quot;cruel&quot;</span>, <span className="st">&quot;hermoso&quot;</span>, texto)</span>
            <span id="cb14-3"><Enlace href="#cb14-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(nuevo)  <span className="co"># Hola mundo hermoso</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h3" id="separar-texto-por-comas-o-espacios">4. Separar texto por comas o
        espacios</Titulo>
      <div className="sourceCode" id="cb15">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb15-1"><Enlace href="#cb15-1" aria-hidden="true" tabindex="-1"></Enlace >re.split(<span className="vs">r&quot;[, ]+&quot;</span>, <span className="st">&quot;rojo, verde azul,amarillo&quot;</span>)  <span className="co"># [&#39;rojo&#39;, &#39;verde&#39;, &#39;azul&#39;, &#39;amarillo&#39;]</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="buenas-prácticas">Buenas prácticas</Titulo>
      <Texto>✅ Usa <code>r"./..."</code> (raw strings) para no tener que escapar
        <code>\</code>. ✅ Compila patrones que usarás muchas veces con
        <code>re.compile()</code>. ✅ Usa <code>re.fullmatch()</code> si
        necesitas que toda la cadena coincida. ✅ Usa <code>?</code> después de
        <code>*</code> o <code>+</code> para <strong>modo no codicioso</strong>
        (lazy).
      </Texto>
      <div className="sourceCode" id="cb16">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb16-1"><Enlace href="#cb16-1" aria-hidden="true" tabindex="-1"></Enlace >re.findall(<span className="vs">r&quot;&lt;.*?&gt;&quot;</span>, <span className="st">&quot;&lt;a&gt;&lt;b&gt;&quot;</span>)  <span className="co"># [&#39;&lt;a&gt;&#39;, &#39;&lt;b&gt;&#39;]</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="ejercicio-rápido">Ejercicio rápido</Titulo>
      <Texto>Extrae todos los nombres de usuario de correos:</Texto>
      <div className="sourceCode" id="cb17">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb17-1"><Enlace href="#cb17-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> re</span>
            <span id="cb17-2"><Enlace href="#cb17-2" aria-hidden="true" tabindex="-1"></Enlace >texto <span className="op">=</span> <span className="st">&quot;Correos: ana@mail.com, juan123@dominio.org&quot;</span></span>
            <span id="cb17-3"><Enlace href="#cb17-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(re.findall(<span className="vs">r&quot;(\w+)@&quot;</span>, texto))  <span className="co"># [&#39;ana&#39;, &#39;juan123&#39;]</span></span></code></pre>
      </div>
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
