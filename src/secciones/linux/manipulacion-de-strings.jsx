<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">

<head>
  <meta charset="utf-8" />
  <meta name="generator" content="pandoc" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <title>manipulacion-de-strings</title>

</head>

<body>
  <h1 id="manipulación-de-strings-en-bash-script">Manipulación de strings
    en bash script</h1>
  <hr />
  <h2 id="temario">Temario</h2>
  <ul>
    <li><a href="#manipulación-de-strings-en-bash-script">Manipulación de
        strings en bash script</a>
      <ul>
        <li><a href="#temario">Temario</a></li>
        <li><a href="#1-definir-strings">1. Definir strings</a></li>
        <li><a href="#2-longitud-de-un-string">2. Longitud de un string</a></li>
        <li><a href="#3-substrings">3. Substrings</a></li>
        <li><a href="#4-reemplazos-dentro-de-un-string">4. Reemplazos dentro de
            un string</a></li>
        <li><a href="#5-eliminar-prefijos-y-sufijos">5. Eliminar prefijos y
            sufijos</a></li>
        <li><a href="#6-concatenar-strings">6. Concatenar strings</a></li>
        <li><a href="#7-convertir-mayúsculas--minúsculas-bash-4">7. Convertir
            mayúsculas / minúsculas (Bash 4+)</a></li>
        <li><a href="#8-buscar-dentro-de-un-string">8. Buscar dentro de un
            string</a></li>
        <li><a href="#9-dividir-un-string-split">9. Dividir un string
            (split)</a></li>
        <li><a href="#10-juntar-un-array-en-string">10. Juntar un array en
            string</a></li>
        <li><a href="#11-expresiones-regulares-en-strings">11. Expresiones
            regulares en strings</a></li>
        <li><a href="#12-lectura-carácter-por-carácter">12. Lectura carácter por
            carácter</a></li>
      </ul>
    </li>
  </ul>
  <p><a href="./../readme.md#2-linux-y-bash-script">Regresar a la guía
      principal</a></p>
  <hr />
  <h2 id="definir-strings">1. Definir strings</h2>
  <div class="sourceCode" id="cb1">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="va">cadena</span><span class="op">=</span><span class="st">&quot;Hola Mundo&quot;</span></span></code></pre>
  </div>
  <ul>
    <li>Siempre usar <strong>comillas</strong> si hay espacios.</li>
    <li>No existen tipos como en otros lenguajes, todo es texto.</li>
  </ul>
  <hr />
  <h2 id="longitud-de-un-string">2. Longitud de un string</h2>
  <div class="sourceCode" id="cb2">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;</span><span class="va">${</span><span class="op">#</span><span class="va">cadena}</span><span class="st">&quot;</span>   <span class="co">## 10</span></span></code></pre>
  </div>
  <hr />
  <h2 id="substrings">3. Substrings</h2>
  <div class="sourceCode" id="cb3">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;</span><span class="va">${cadena</span><span class="op">:</span><span class="dv">0</span><span class="op">:</span><span class="dv">4</span><span class="va">}</span><span class="st">&quot;</span>   <span class="co">## Hola (desde índice 0, tomar 4)</span></span>
<span id="cb3-2"><a href="#cb3-2" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;</span><span class="va">${cadena</span><span class="op">:</span><span class="dv">5</span><span class="va">}</span><span class="st">&quot;</span>     <span class="co">## Mundo (desde índice 5 hasta el final)</span></span></code></pre>
  </div>
  <hr />
  <h2 id="reemplazos-dentro-de-un-string">4. Reemplazos dentro de un
    string</h2>
  <div class="sourceCode" id="cb4">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a><span class="va">texto</span><span class="op">=</span><span class="st">&quot;banana&quot;</span></span>
<span id="cb4-2"><a href="#cb4-2" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb4-3"><a href="#cb4-3" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;</span><span class="va">${texto</span><span class="op">/</span><span class="ss">na</span><span class="op">/</span>NA<span class="va">}</span><span class="st">&quot;</span>    <span class="co">## baNAna (primer reemplazo)</span></span>
<span id="cb4-4"><a href="#cb4-4" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;</span><span class="va">${texto</span><span class="op">//</span><span class="ss">na</span><span class="op">/</span>NA<span class="va">}</span><span class="st">&quot;</span>   <span class="co">## baNANA (todos los reemplazos)</span></span>
<span id="cb4-5"><a href="#cb4-5" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb4-6"><a href="#cb4-6" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;</span><span class="va">${texto</span><span class="op">/</span><span class="ss">na</span><span class="op">/</span><span class="va">}</span><span class="st">&quot;</span>      <span class="co">## baana   (borra primer &quot;na&quot;)</span></span>
<span id="cb4-7"><a href="#cb4-7" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;</span><span class="va">${texto</span><span class="op">//</span><span class="ss">na</span><span class="op">/</span><span class="va">}</span><span class="st">&quot;</span>     <span class="co">## baa     (borra todos &quot;na&quot;)</span></span></code></pre>
  </div>
  <hr />
  <h2 id="eliminar-prefijos-y-sufijos">5. Eliminar prefijos y sufijos</h2>
  <div class="sourceCode" id="cb5">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb5-1"><a href="#cb5-1" aria-hidden="true" tabindex="-1"></a><span class="va">archivo</span><span class="op">=</span><span class="st">&quot;documento.txt&quot;</span></span>
<span id="cb5-2"><a href="#cb5-2" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb5-3"><a href="#cb5-3" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;</span><span class="va">${archivo</span><span class="op">%</span>.txt<span class="va">}</span><span class="st">&quot;</span>   <span class="co">## documento  (quita sufijo .txt)</span></span>
<span id="cb5-4"><a href="#cb5-4" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;</span><span class="va">${archivo</span><span class="op">#</span>doc<span class="va">}</span><span class="st">&quot;</span>    <span class="co">## umento.txt (quita prefijo doc) # Con doble signo borra lo más largo ruta=&quot;/home/user/docs/file.txt&quot; echo &quot;${ruta##*/}&quot;       # file.txt  (quita todo hasta el último /) echo &quot;${ruta%%/*}&quot;       # vacío     (quita todo desde el primer /)</span></span></code></pre>
  </div>
  <hr />
  <h2 id="concatenar-strings">6. Concatenar strings</h2>
  <div class="sourceCode" id="cb6">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a><span class="va">nombre</span><span class="op">=</span><span class="st">&quot;Francisco&quot;</span></span>
<span id="cb6-2"><a href="#cb6-2" aria-hidden="true" tabindex="-1"></a><span class="va">saludo</span><span class="op">=</span><span class="st">&quot;Hola, </span><span class="va">$nombre</span><span class="st">&quot;</span></span>
<span id="cb6-3"><a href="#cb6-3" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;</span><span class="va">$saludo</span><span class="st">&quot;</span></span></code></pre>
  </div>
  <p>También:</p>
  <div class="sourceCode" id="cb7">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb7-1"><a href="#cb7-1" aria-hidden="true" tabindex="-1"></a><span class="va">full</span><span class="op">=</span><span class="st">&quot;Hola&quot;</span> </span>
<span id="cb7-2"><a href="#cb7-2" aria-hidden="true" tabindex="-1"></a><span class="va">full</span><span class="op">+=</span><span class="st">&quot; Mundo&quot;</span></span>
<span id="cb7-3"><a href="#cb7-3" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;</span><span class="va">$full</span><span class="st">&quot;</span>   <span class="co">## Hola Mundo</span></span></code></pre>
  </div>
  <hr />
  <h2 id="convertir-mayúsculas-minúsculas-bash-4">7. Convertir mayúsculas
    / minúsculas (Bash 4+)</h2>
  <div class="sourceCode" id="cb8">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb8-1"><a href="#cb8-1" aria-hidden="true" tabindex="-1"></a><span class="va">texto</span><span class="op">=</span><span class="st">&quot;hola mundo&quot;</span></span>
<span id="cb8-2"><a href="#cb8-2" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb8-3"><a href="#cb8-3" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;</span><span class="va">${texto</span><span class="op">^^</span><span class="va">}</span><span class="st">&quot;</span>   <span class="co">## HOLA MUNDO</span></span>
<span id="cb8-4"><a href="#cb8-4" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;</span><span class="va">${texto</span><span class="op">,,</span><span class="va">}</span><span class="st">&quot;</span>   <span class="co">## hola mundo</span></span></code></pre>
  </div>
  <hr />
  <h2 id="buscar-dentro-de-un-string">8. Buscar dentro de un string</h2>
  <div class="sourceCode" id="cb9">
    <pre class="sourceCode bash"><code class="sourceCode bash"><span id="cb9-1"><a href="#cb9-1" aria-hidden="true" tabindex="-1"></a><span class="va">cadena</span><span class="op">=</span><span class="st">&quot;programacion&quot;</span></span>
<span id="cb9-2"><a href="#cb9-2" aria-hidden="true" tabindex="-1"></a><span class="cf">if</span> <span class="kw">[[</span> <span class="st">&quot;</span><span class="va">$cadena</span><span class="st">&quot;</span> <span class="ot">==</span> <span class="pp">*</span><span class="st">&quot;grama&quot;</span>- <span class="kw">]];</span> <span class="cf">then</span></span>
<span id="cb9-3"><a href="#cb9-3" aria-hidden="true" tabindex="-1"></a>    <span class="bu">echo</span> <span class="st">&quot;Contiene &#39;grama&#39;&quot;</span></span>
<span id="cb9-4"><a href="#cb9-4" aria-hidden="true" tabindex="-1"></a><span class="cf">fi</span></span></code></pre>
  </div>
  <hr />
  <h2 id="dividir-un-string-split">9. Dividir un string (split)</h2>
  <p>Con <code>IFS</code> (Internal Field Separator):</p>
  <div class="sourceCode" id="cb10">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb10-1"><a href="#cb10-1" aria-hidden="true" tabindex="-1"></a><span class="va">frase</span><span class="op">=</span><span class="st">&quot;uno dos tres&quot;</span></span>
<span id="cb10-2"><a href="#cb10-2" aria-hidden="true" tabindex="-1"></a><span class="va">IFS</span><span class="op">=</span><span class="st">&quot; &quot;</span> <span class="bu">read</span> <span class="at">-r</span> <span class="at">-a</span> <span class="va">palabras</span> <span class="op">&lt;&lt;&lt;</span> <span class="st">&quot;</span><span class="va">$frase</span><span class="st">&quot;</span></span>
<span id="cb10-3"><a href="#cb10-3" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb10-4"><a href="#cb10-4" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;</span><span class="va">${palabras</span><span class="op">[</span><span class="dv">0</span><span class="op">]</span><span class="va">}</span><span class="st">&quot;</span>  <span class="co">## uno</span></span>
<span id="cb10-5"><a href="#cb10-5" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;</span><span class="va">${palabras</span><span class="op">[</span><span class="dv">1</span><span class="op">]</span><span class="va">}</span><span class="st">&quot;</span>  <span class="co">## dos</span></span>
<span id="cb10-6"><a href="#cb10-6" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;</span><span class="va">${palabras</span><span class="op">[</span><span class="dv">2</span><span class="op">]</span><span class="va">}</span><span class="st">&quot;</span>  <span class="co">## tres</span></span></code></pre>
  </div>
  <hr />
  <h2 id="juntar-un-array-en-string">10. Juntar un array en string</h2>
  <div class="sourceCode" id="cb11">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb11-1"><a href="#cb11-1" aria-hidden="true" tabindex="-1"></a><span class="va">lista</span><span class="op">=</span><span class="va">(</span><span class="st">&quot;a&quot;</span> <span class="st">&quot;b&quot;</span> <span class="st">&quot;c&quot;</span><span class="va">)</span></span>
<span id="cb11-2"><a href="#cb11-2" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;</span><span class="va">${lista</span><span class="op">[*]</span><span class="va">}</span><span class="st">&quot;</span>   <span class="co">## a b c</span></span>
<span id="cb11-3"><a href="#cb11-3" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;</span><span class="va">${lista</span><span class="op">[@]</span><span class="va">}</span><span class="st">&quot;</span>   <span class="co">## a b c</span></span></code></pre>
  </div>
  <p>Con separador personalizado:</p>
  <div class="sourceCode" id="cb12">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb12-1"><a href="#cb12-1" aria-hidden="true" tabindex="-1"></a><span class="va">IFS</span><span class="op">=</span><span class="st">&quot;,&quot;</span><span class="kw">;</span> <span class="bu">echo</span> <span class="st">&quot;</span><span class="va">${lista</span><span class="op">[*]</span><span class="va">}</span><span class="st">&quot;</span>   <span class="co">## a,b,c</span></span></code></pre>
  </div>
  <hr />
  <h2 id="expresiones-regulares-en-strings">11. Expresiones regulares en
    strings</h2>
  <div class="sourceCode" id="cb13">
    <pre class="sourceCode bash"><code class="sourceCode bash"><span id="cb13-1"><a href="#cb13-1" aria-hidden="true" tabindex="-1"></a><span class="va">cadena</span><span class="op">=</span><span class="st">&quot;abc123&quot;</span></span>
<span id="cb13-2"><a href="#cb13-2" aria-hidden="true" tabindex="-1"></a><span class="cf">if</span> <span class="kw">[[</span> <span class="st">&quot;</span><span class="va">$cadena</span><span class="st">&quot;</span> <span class="ot">=~</span> <span class="pp">^</span><span class="op">[</span><span class="ss">a</span><span class="op">-</span><span class="ss">z</span><span class="op">]</span><span class="pp">+</span><span class="op">[</span><span class="ss">0</span><span class="op">-</span><span class="ss">9</span><span class="op">]</span><span class="pp">+</span><span class="op">$</span> <span class="kw">]];</span> <span class="cf">then</span></span>
<span id="cb13-3"><a href="#cb13-3" aria-hidden="true" tabindex="-1"></a>    <span class="bu">echo</span> <span class="st">&quot;Coincide con letras seguidas de números&quot;</span></span>
<span id="cb13-4"><a href="#cb13-4" aria-hidden="true" tabindex="-1"></a><span class="cf">fi</span></span></code></pre>
  </div>
  <hr />
  <h2 id="lectura-carácter-por-carácter">12. Lectura carácter por
    carácter</h2>
  <div class="sourceCode" id="cb14">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb14-1"><a href="#cb14-1" aria-hidden="true" tabindex="-1"></a><span class="va">texto</span><span class="op">=</span><span class="st">&quot;Hola&quot;</span></span>
<span id="cb14-2"><a href="#cb14-2" aria-hidden="true" tabindex="-1"></a><span class="cf">for</span> <span class="kw">((</span> <span class="va">i</span><span class="op">=</span><span class="dv">0</span><span class="kw">;</span> <span class="va">i</span><span class="op">&lt;</span><span class="va">${</span><span class="op">#</span><span class="va">texto}</span><span class="kw">;</span> <span class="va">i</span><span class="op">++</span> <span class="kw">));</span> <span class="cf">do</span></span>
<span id="cb14-3"><a href="#cb14-3" aria-hidden="true" tabindex="-1"></a>    <span class="bu">echo</span> <span class="st">&quot;</span><span class="va">${texto</span><span class="op">:</span><span class="va">$i</span><span class="op">:</span><span class="dv">1</span><span class="va">}</span><span class="st">&quot;</span></span>
<span id="cb14-4"><a href="#cb14-4" aria-hidden="true" tabindex="-1"></a><span class="cf">done</span></span></code></pre>
  </div>
  <p>Imprime cada letra en una línea.</p>
  <hr />
  <p><strong>En resumen</strong>:</p>
  <ul>
    <li><code>${#str}</code> → longitud</li>
    <li><code>${str:pos:len}</code> → substring</li>
    <li><code>${str/patrón/reemplazo}</code> → reemplazo</li>
    <li><code>${str%patrón}</code> / <code>${str#patrón}</code> → quitar
      prefijo/sufijo</li>
    <li><code>${str^^}</code> / <code>${str,,}</code> →
      mayúsculas/minúsculas</li>
    <li><code>IFS</code> + <code>read -a</code> → split</li>
  </ul>
  <hr />
  <p><a href="./../readme.md#2-linux-y-bash-script">Regresar a la guía
      principal</a></p>
  <blockquote>
    <p><strong>Autor:</strong> Fravelz</p>
  </blockquote>
</body>

</html>