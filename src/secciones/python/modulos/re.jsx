<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">

<head>
  <meta charset="utf-8" />
  <meta name="generator" content="pandoc" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <title>re</title>

</head>

<body>
  <h1 id="re-en-python-expreciones-regulares">Re en Python (expreciones
    regulares)</h1>
  <hr />
  <h2 id="temario">Temario</h2>
  <ul>
    <li><a href="#re-en-python-expreciones-regulares">Re en Python
        (expreciones regulares)</a>
      <ul>
        <li><a href="#temario">Temario</a></li>
        <li><a href="#qué-es-re">¿Qué es re?</a></li>
        <li><a href="#funciones-principales">FUNCIONES PRINCIPALES</a>
          <ul>
            <li><a href="#1-rematchpatrón-texto">1. re.match(patrón, texto)</a></li>
            <li><a href="#2-researchpatrón-texto">2. re.search(patrón,
                texto)</a></li>
            <li><a href="#3-refindallpatrón-texto">3. re.findall(patrón,
                texto)</a></li>
            <li><a href="#4-refinditerpatrón-texto">4. re.finditer(patrón,
                texto)</a></li>
            <li><a href="#5-resubpatrón-reemplazo-texto-count0">5. re.sub(patrón,
                reemplazo, texto, count=0)</a></li>
            <li><a href="#6-resplitpatrón-texto-maxsplit0">6. re.split(patrón,
                texto, maxsplit=0)</a></li>
            <li><a href="#7-recompilepatrón-flags0">7. re.compile(patrón,
                flags=0)</a></li>
          </ul>
        </li>
        <li><a href="#objetos-match">OBJETOS Match</a></li>
        <li><a href="#metacaracteres-más-importantes">METACARACTERES MÁS
            IMPORTANTES</a></li>
        <li><a href="#secuencias-especiales">SECUENCIAS ESPECIALES</a></li>
        <li><a href="#flags-comunes">FLAGS COMUNES</a></li>
        <li><a href="#ejemplos-prácticos">EJEMPLOS PRÁCTICOS</a>
          <ul>
            <li><a href="#1-validar-un-correo-electrónico">1. Validar un correo
                electrónico</a></li>
            <li><a href="#2-extraer-números-de-un-texto">2. Extraer números de un
                texto</a></li>
            <li><a href="#3-reemplazar-palabras">3. Reemplazar palabras</a></li>
            <li><a href="#4-separar-texto-por-comas-o-espacios">4. Separar texto por
                comas o espacios</a></li>
          </ul>
        </li>
        <li><a href="#buenas-prácticas">Buenas prácticas</a></li>
        <li><a href="#ejercicio-rápido">Ejercicio rápido</a></li>
      </ul>
    </li>
  </ul>
  <p><a href="./../../readme.md#5-python">Regresar a la Guía
      Principal</a></p>
  <hr />
  <h2 id="qué-es-re">¿Qué es re?</h2>
  <p>El módulo <strong><code>re</code></strong> (de <em>regular
      expressions</em>, expresiones regulares) permite <strong>buscar,
      reemplazar y analizar texto mediante patrones</strong>.</p>
  <p>Se importa con:</p>
  <div class="sourceCode" id="cb1">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> re</span></code></pre>
  </div>
  <hr />
  <h2 id="funciones-principales">FUNCIONES PRINCIPALES</h2>
  <h3 id="re.matchpatrón-texto">1. re.match(patrón, texto)</h3>
  <p>Busca <strong>solo al inicio del texto</strong>.</p>
  <div class="sourceCode" id="cb2">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> re</span>
<span id="cb2-2"><a href="#cb2-2" aria-hidden="true" tabindex="-1"></a>m <span class="op">=</span> re.match(<span class="vs">r&quot;Hola&quot;</span>, <span class="st">&quot;Hola mundo&quot;</span>)</span>
<span id="cb2-3"><a href="#cb2-3" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(m.group())  <span class="co"># Hola</span></span></code></pre>
  </div>
  <hr />
  <h3 id="re.searchpatrón-texto">2. re.search(patrón, texto)</h3>
  <p>Busca <strong>en cualquier parte</strong> del texto (la primera
    coincidencia).</p>
  <div class="sourceCode" id="cb3">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a>re.search(<span class="vs">r&quot;mundo&quot;</span>, <span class="st">&quot;Hola mundo&quot;</span>).group()  <span class="co"># mundo</span></span></code></pre>
  </div>
  <hr />
  <h3 id="re.findallpatrón-texto">3. re.findall(patrón, texto)</h3>
  <p>Devuelve <strong>todas las coincidencias</strong> en una lista.</p>
  <div class="sourceCode" id="cb4">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a>re.findall(<span class="vs">r&quot;\d+&quot;</span>, <span class="st">&quot;Edad 17 años, código 2025&quot;</span>)  <span class="co"># [&#39;17&#39;, &#39;2025&#39;]</span></span></code></pre>
  </div>
  <hr />
  <h3 id="re.finditerpatrón-texto">4. re.finditer(patrón, texto)</h3>
  <p>Devuelve un <strong>iterador</strong> con objetos <code>Match</code>
    (útil para posiciones).</p>
  <div class="sourceCode" id="cb5">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb5-1"><a href="#cb5-1" aria-hidden="true" tabindex="-1"></a><span class="cf">for</span> m <span class="kw">in</span> re.finditer(<span class="vs">r&quot;\d+&quot;</span>, <span class="st">&quot;x=5 y=10 z=20&quot;</span>):</span>
<span id="cb5-2"><a href="#cb5-2" aria-hidden="true" tabindex="-1"></a>    <span class="bu">print</span>(m.group(), m.start(), m.end())</span></code></pre>
  </div>
  <hr />
  <h3 id="re.subpatrón-reemplazo-texto-count0">5. re.sub(patrón,
    reemplazo, texto, count=0)</h3>
  <p><strong>Reemplaza</strong> coincidencias por otro texto.</p>
  <div class="sourceCode" id="cb6">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a>re.sub(<span class="vs">r&quot;\d+&quot;</span>, <span class="st">&quot;X&quot;</span>, <span class="st">&quot;Tengo 2 perros y 3 gatos&quot;</span>)  <span class="co"># &#39;Tengo X perros y X gatos&#39;</span></span></code></pre>
  </div>
  <hr />
  <h3 id="re.splitpatrón-texto-maxsplit0">6. re.split(patrón, texto,
    maxsplit=0)</h3>
  <p><strong>Divide el texto</strong> usando el patrón como separador.</p>
  <div class="sourceCode" id="cb7">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb7-1"><a href="#cb7-1" aria-hidden="true" tabindex="-1"></a>re.split(<span class="vs">r&quot;\s+&quot;</span>, <span class="st">&quot;uno   dos tres&quot;</span>)  <span class="co"># [&#39;uno&#39;, &#39;dos&#39;, &#39;tres&#39;]</span></span></code></pre>
  </div>
  <hr />
  <h3 id="re.compilepatrón-flags0">7. re.compile(patrón, flags=0)</h3>
  <p>Compila el patrón para reutilizarlo muchas veces (más eficiente).</p>
  <div class="sourceCode" id="cb8">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb8-1"><a href="#cb8-1" aria-hidden="true" tabindex="-1"></a>patron <span class="op">=</span> re.<span class="bu">compile</span>(<span class="vs">r&quot;\d+&quot;</span>)</span>
<span id="cb8-2"><a href="#cb8-2" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(patron.findall(<span class="st">&quot;a1b22c333&quot;</span>))  <span class="co"># [&#39;1&#39;, &#39;22&#39;, &#39;333&#39;]</span></span></code></pre>
  </div>
  <hr />
  <h2 id="objetos-match">OBJETOS Match</h2>
  <p>Cuando haces <code>match()</code> o <code>search()</code>, obtienes
    un objeto con información útil:</p>
  <div class="sourceCode" id="cb9">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb9-1"><a href="#cb9-1" aria-hidden="true" tabindex="-1"></a>m <span class="op">=</span> re.search(<span class="vs">r&quot;(\d+)&quot;</span>, <span class="st">&quot;Edad: 25 años&quot;</span>)</span>
<span id="cb9-2"><a href="#cb9-2" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(m.group())    <span class="co"># &#39;25&#39;</span></span>
<span id="cb9-3"><a href="#cb9-3" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(m.start())    <span class="co"># 6</span></span>
<span id="cb9-4"><a href="#cb9-4" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(m.end())      <span class="co"># 8</span></span>
<span id="cb9-5"><a href="#cb9-5" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(m.span())     <span class="co"># (6, 8)</span></span></code></pre>
  </div>
  <p>Si hay <strong>grupos</strong> (entre paréntesis):</p>
  <div class="sourceCode" id="cb10">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb10-1"><a href="#cb10-1" aria-hidden="true" tabindex="-1"></a>m <span class="op">=</span> re.search(<span class="vs">r&quot;(\d+)\s*(años)&quot;</span>, <span class="st">&quot;Edad: 25 años&quot;</span>)</span>
<span id="cb10-2"><a href="#cb10-2" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(m.groups())   <span class="co"># (&#39;25&#39;, &#39;años&#39;)</span></span>
<span id="cb10-3"><a href="#cb10-3" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(m.group(<span class="dv">1</span>))   <span class="co"># &#39;25&#39;</span></span>
<span id="cb10-4"><a href="#cb10-4" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(m.group(<span class="dv">2</span>))   <span class="co"># &#39;años&#39;</span></span></code></pre>
  </div>
  <hr />
  <h2 id="metacaracteres-más-importantes">METACARACTERES MÁS
    IMPORTANTES</h2>
  <table>
    <colgroup>
      <col style="width: 10%" />
      <col style="width: 46%" />
      <col style="width: 43%" />
    </colgroup>
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
        <td><code>{n}</code></td>
        <td>Exactamente n repeticiones</td>
        <td><code>\d{4}</code> → “2025”</td>
      </tr>
      <tr>
        <td><code>{n,}</code></td>
        <td>n o más</td>
        <td><code>\d{2,}</code></td>
      </tr>
      <tr>
        <td><code>{n,m}</code></td>
        <td>entre n y m</td>
        <td><code>\d{2,4}</code></td>
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
  <hr />
  <h2 id="secuencias-especiales">SECUENCIAS ESPECIALES</h2>
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
  <hr />
  <h2 id="flags-comunes">FLAGS COMUNES</h2>
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
  <p>Ejemplo:</p>
  <div class="sourceCode" id="cb11">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb11-1"><a href="#cb11-1" aria-hidden="true" tabindex="-1"></a>patron <span class="op">=</span> re.<span class="bu">compile</span>(<span class="vs">r&quot;&quot;&quot;</span></span>
<span id="cb11-2"><a href="#cb11-2" aria-hidden="true" tabindex="-1"></a><span class="vs">    ^\d</span><span class="sc">{4}</span><span class="vs">     # 4 dígitos al inicio</span></span>
<span id="cb11-3"><a href="#cb11-3" aria-hidden="true" tabindex="-1"></a><span class="vs">    -\d</span><span class="sc">{2}</span><span class="vs">     # guion y 2 dígitos</span></span>
<span id="cb11-4"><a href="#cb11-4" aria-hidden="true" tabindex="-1"></a><span class="vs">    -\d</span><span class="sc">{2}</span><span class="vs">$    # guion y 2 dígitos al final</span></span>
<span id="cb11-5"><a href="#cb11-5" aria-hidden="true" tabindex="-1"></a><span class="vs">&quot;&quot;&quot;</span>, re.VERBOSE)</span>
<span id="cb11-6"><a href="#cb11-6" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(<span class="bu">bool</span>(patron.match(<span class="st">&quot;2025-10-27&quot;</span>)))  <span class="co"># True</span></span></code></pre>
  </div>
  <hr />
  <h2 id="ejemplos-prácticos">EJEMPLOS PRÁCTICOS</h2>
  <h3 id="validar-un-correo-electrónico">1. Validar un correo
    electrónico</h3>
  <div class="sourceCode" id="cb12">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb12-1"><a href="#cb12-1" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> re</span>
<span id="cb12-2"><a href="#cb12-2" aria-hidden="true" tabindex="-1"></a>patron <span class="op">=</span> <span class="vs">r&quot;^[\w\.-]+@[\w\.-]+\.\w+$&quot;</span></span>
<span id="cb12-3"><a href="#cb12-3" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(<span class="bu">bool</span>(re.match(patron, <span class="st">&quot;usuario@mail.com&quot;</span>)))  <span class="co"># True</span></span></code></pre>
  </div>
  <hr />
  <h3 id="extraer-números-de-un-texto">2. Extraer números de un texto</h3>
  <div class="sourceCode" id="cb13">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb13-1"><a href="#cb13-1" aria-hidden="true" tabindex="-1"></a>re.findall(<span class="vs">r&quot;\d+&quot;</span>, <span class="st">&quot;ID123, edad 45, año 2025&quot;</span>)  <span class="co"># [&#39;123&#39;, &#39;45&#39;, &#39;2025&#39;]</span></span></code></pre>
  </div>
  <hr />
  <h3 id="reemplazar-palabras">3. Reemplazar palabras</h3>
  <div class="sourceCode" id="cb14">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb14-1"><a href="#cb14-1" aria-hidden="true" tabindex="-1"></a>texto <span class="op">=</span> <span class="st">&quot;Hola mundo cruel&quot;</span></span>
<span id="cb14-2"><a href="#cb14-2" aria-hidden="true" tabindex="-1"></a>nuevo <span class="op">=</span> re.sub(<span class="vs">r&quot;cruel&quot;</span>, <span class="st">&quot;hermoso&quot;</span>, texto)</span>
<span id="cb14-3"><a href="#cb14-3" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(nuevo)  <span class="co"># Hola mundo hermoso</span></span></code></pre>
  </div>
  <hr />
  <h3 id="separar-texto-por-comas-o-espacios">4. Separar texto por comas o
    espacios</h3>
  <div class="sourceCode" id="cb15">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb15-1"><a href="#cb15-1" aria-hidden="true" tabindex="-1"></a>re.split(<span class="vs">r&quot;[, ]+&quot;</span>, <span class="st">&quot;rojo, verde azul,amarillo&quot;</span>)  <span class="co"># [&#39;rojo&#39;, &#39;verde&#39;, &#39;azul&#39;, &#39;amarillo&#39;]</span></span></code></pre>
  </div>
  <hr />
  <h2 id="buenas-prácticas">Buenas prácticas</h2>
  <p>✅ Usa <code>r"..."</code> (raw strings) para no tener que escapar
    <code>\</code>. ✅ Compila patrones que usarás muchas veces con
    <code>re.compile()</code>. ✅ Usa <code>re.fullmatch()</code> si
    necesitas que toda la cadena coincida. ✅ Usa <code>?</code> después de
    <code>*</code> o <code>+</code> para <strong>modo no codicioso</strong>
    (lazy).
  </p>
  <div class="sourceCode" id="cb16">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb16-1"><a href="#cb16-1" aria-hidden="true" tabindex="-1"></a>re.findall(<span class="vs">r&quot;&lt;.*?&gt;&quot;</span>, <span class="st">&quot;&lt;a&gt;&lt;b&gt;&quot;</span>)  <span class="co"># [&#39;&lt;a&gt;&#39;, &#39;&lt;b&gt;&#39;]</span></span></code></pre>
  </div>
  <hr />
  <h2 id="ejercicio-rápido">Ejercicio rápido</h2>
  <p>Extrae todos los nombres de usuario de correos:</p>
  <div class="sourceCode" id="cb17">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb17-1"><a href="#cb17-1" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> re</span>
<span id="cb17-2"><a href="#cb17-2" aria-hidden="true" tabindex="-1"></a>texto <span class="op">=</span> <span class="st">&quot;Correos: ana@mail.com, juan123@dominio.org&quot;</span></span>
<span id="cb17-3"><a href="#cb17-3" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(re.findall(<span class="vs">r&quot;(\w+)@&quot;</span>, texto))  <span class="co"># [&#39;ana&#39;, &#39;juan123&#39;]</span></span></code></pre>
  </div>
  <hr />
  <p><a href="./../../readme.md#5-python">Regresar a la Guía
      Principal</a></p>
  <blockquote>
    <p><strong>Autor:</strong> Fravelz</p>
  </blockquote>
</body>

</html>