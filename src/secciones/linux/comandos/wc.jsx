<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">

<head>
  <meta charset="utf-8" />
  <meta name="generator" content="pandoc" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <title>wc</title>

</head>

<body>
  <h1 id="wc-en-linux">Wc en Linux</h1>
  <hr />
  <h2 id="temario">Temario</h2>
  <ul>
    <li><a href="#wc-en-linux">Wc en Linux</a>
      <ul>
        <li><a href="#temario">Temario</a></li>
        <li><a href="#wc--word-count-resumen-rápido">wc — word count (resumen
            rápido)</a>
          <ul>
            <li><a href="#sintaxis-básica">Sintaxis básica</a></li>
            <li><a href="#opciones-útiles">Opciones útiles</a></li>
            <li><a href="#ejemplos">Ejemplos</a></li>
            <li><a href="#notas-importantes">Notas importantes</a></li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
  <p><a href="./../../readme.md#5-python">Regresar a la Guía
      Principal</a></p>
  <hr />
  <h2 id="wc-word-count-resumen-rápido">wc — word count (resumen
    rápido)</h2>
  <p><code>wc</code> es una utilidad de Unix/Linux que
    <strong>cuenta</strong> cosas en archivos o en la entrada estándar:
    <strong>líneas, palabras, bytes o caracteres</strong>, y también la
    longitud de la línea más larga.
  </p>
  <h3 id="sintaxis-básica">Sintaxis básica</h3>
  <div class="sourceCode" id="cb1">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="fu">wc</span> <span class="pp">[</span><span class="ss">opciones</span><span class="pp">]</span> <span class="pp">[</span><span class="ss">archivo...</span><span class="pp">]</span></span></code></pre>
  </div>
  <p>Si no le pasas archivo lee desde la entrada estándar (útil con
    pipes).</p>
  <h3 id="opciones-útiles">Opciones útiles</h3>
  <ul>
    <li><code>-l</code> → cuenta <strong>líneas</strong>.</li>
    <li><code>-w</code> → cuenta <strong>palabras</strong>.</li>
    <li><code>-c</code> → cuenta <strong>bytes</strong>.</li>
    <li><code>-m</code> → cuenta <strong>caracteres</strong> (útil si hay
      multi-byte/UTF-8).</li>
    <li><code>-L</code> → muestra la longitud de la <strong>línea más
        larga</strong>.</li>
  </ul>
  <h3 id="ejemplos">Ejemplos</h3>
  <div class="sourceCode" id="cb2">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="fu">wc</span> archivo.txt</span>
<span id="cb2-2"><a href="#cb2-2" aria-hidden="true" tabindex="-1"></a><span class="co"># salida:   10  45  320 archivo.txt</span></span>
<span id="cb2-3"><a href="#cb2-3" aria-hidden="true" tabindex="-1"></a><span class="co"># significa: 10 líneas, 45 palabras, 320 bytes</span></span>
<span id="cb2-4"><a href="#cb2-4" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb2-5"><a href="#cb2-5" aria-hidden="true" tabindex="-1"></a><span class="fu">wc</span> <span class="at">-l</span> archivo.txt</span>
<span id="cb2-6"><a href="#cb2-6" aria-hidden="true" tabindex="-1"></a><span class="co"># muestra sólo el número de líneas</span></span>
<span id="cb2-7"><a href="#cb2-7" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb2-8"><a href="#cb2-8" aria-hidden="true" tabindex="-1"></a><span class="fu">cat</span> archivo.txt <span class="kw">|</span> <span class="fu">wc</span> <span class="at">-w</span></span>
<span id="cb2-9"><a href="#cb2-9" aria-hidden="true" tabindex="-1"></a><span class="co"># cuenta las palabras de la salida del cat (ej. en un pipe)</span></span>
<span id="cb2-10"><a href="#cb2-10" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb2-11"><a href="#cb2-11" aria-hidden="true" tabindex="-1"></a><span class="fu">grep</span> <span class="at">-R</span> <span class="st">&quot;TODO&quot;</span> src/ <span class="kw">|</span> <span class="fu">wc</span> <span class="at">-l</span></span>
<span id="cb2-12"><a href="#cb2-12" aria-hidden="true" tabindex="-1"></a><span class="co"># cuenta cuántas líneas contienen &quot;TODO&quot; en todo el árbol src/</span></span></code></pre>
  </div>
  <h3 id="notas-importantes">Notas importantes</h3>
  <ul>
    <li>
      <p><code>-c</code> cuenta <strong>bytes</strong>, no caracteres — en
        archivos UTF-8 algunos caracteres ocupan varios bytes. Usa
        <code>-m</code> para contar caracteres visibles.
      </p>
    </li>
    <li>
      <p>Si pasas varios archivos, <code>wc</code> muestra conteos por
        archivo y un <code>total</code> final.</p>
    </li>
    <li>
      <p><code>wc -l</code> se usa mucho para contar líneas/entradas (por
        ejemplo, cantidad de archivos listados por <code>ls</code>,
        coincidencias de <code>grep</code>, etc.).</p>
    </li>
  </ul>
  <p>–</p>
  <p><a href="./../../readme.md#5-python">Regresar a la Guía
      Principal</a></p>
  <blockquote>
    <p><strong>Autor:</strong> Fravelz</p>
  </blockquote>
</body>

</html>