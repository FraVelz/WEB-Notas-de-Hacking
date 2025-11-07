<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">

<head>
  <meta charset="utf-8" />
  <meta name="generator" content="pandoc" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <title>diff</title>

</head>

<body>
  <h1 id="diff-en-linux">Diff en Linux</h1>
  <hr />
  <h2 id="temario">Temario</h2>
  <ul>
    <li><a href="#diff-en-linux">Diff en Linux</a>
      <ul>
        <li><a href="#temario">Temario</a>
          <ul>
            <li><a href="#en-resumen">En resumen</a></li>
            <li><a href="#ejemplo-básico">Ejemplo básico</a></li>
            <li><a href="#símbolos-principales">Símbolos principales</a></li>
            <li><a href="#opciones-útiles">Opciones útiles</a></li>
            <li><a href="#usos-comunes">Usos comunes</a></li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
  <p><a href="./../../readme.md#5-python">Regresar a la Guía
      Principal</a></p>
  <hr />
  <h3 id="en-resumen">En resumen</h3>
  <p>El comando <code>diff</code> en Linux/Unix se usa para
    <strong>comparar dos archivos (o carpetas)</strong> línea por línea y
    mostrar <strong>las diferencias entre ellos</strong>. 🔍
  </p>
  <div class="sourceCode" id="cb1">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="fu">diff</span> archivo1 archivo2</span></code></pre>
  </div>
  <p>👉 Muestra qué líneas <strong>cambian, se agregan o eliminan</strong>
    de un archivo respecto al otro.</p>
  <hr />
  <h3 id="ejemplo-básico">Ejemplo básico</h3>
  <p>Supongamos que tienes dos archivos:</p>
  <p><strong>archivo1.txt:</strong></p>
  <div class="sourceCode" id="cb2">
    <pre class="sourceCode txt"><code class="sourceCode default"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a>hola</span>
<span id="cb2-2"><a href="#cb2-2" aria-hidden="true" tabindex="-1"></a>mundo</span>
<span id="cb2-3"><a href="#cb2-3" aria-hidden="true" tabindex="-1"></a>como estas</span></code></pre>
  </div>
  <p><strong>archivo2.txt:</strong></p>
  <div class="sourceCode" id="cb3">
    <pre class="sourceCode txt"><code class="sourceCode default"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a>hola</span>
<span id="cb3-2"><a href="#cb3-2" aria-hidden="true" tabindex="-1"></a>mundo!!!</span>
<span id="cb3-3"><a href="#cb3-3" aria-hidden="true" tabindex="-1"></a>como estas</span></code></pre>
  </div>
  <p>Si ejecutas:</p>
  <div class="sourceCode" id="cb4">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a><span class="fu">diff</span> archivo1.txt archivo2.txt</span></code></pre>
  </div>
  <p>La salida será:</p>
  <div class="sourceCode" id="cb5">
    <pre
      class="sourceCode diff"><code class="sourceCode diff"><span id="cb5-1"><a href="#cb5-1" aria-hidden="true" tabindex="-1"></a><span class="dt">2c2</span></span>
<span id="cb5-2"><a href="#cb5-2" aria-hidden="true" tabindex="-1"></a><span class="st">&lt; mundo</span></span>
<span id="cb5-3"><a href="#cb5-3" aria-hidden="true" tabindex="-1"></a><span class="kw">---</span></span>
<span id="cb5-4"><a href="#cb5-4" aria-hidden="true" tabindex="-1"></a><span class="va">&gt; mundo!!!</span></span></code></pre>
  </div>
  <p>🔍 Significa:</p>
  <ul>
    <li>En la <strong>línea 2</strong> (<code>2c2</code> → <em>línea 2
        cambiada</em>),</li>
    <li><code>mundo</code> fue reemplazado por <code>mundo!!!</code>.</li>
  </ul>
  <hr />
  <h3 id="símbolos-principales">Símbolos principales</h3>
  <table>
    <thead>
      <tr>
        <th>Símbolo</th>
        <th>Significado</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>&lt;</code></td>
        <td>línea que <strong>solo está en el primer archivo</strong></td>
      </tr>
      <tr>
        <td><code>&gt;</code></td>
        <td>línea que <strong>solo está en el segundo archivo</strong></td>
      </tr>
      <tr>
        <td><code>a</code></td>
        <td>“add” — se agregó algo</td>
      </tr>
      <tr>
        <td><code>d</code></td>
        <td>“delete” — se eliminó algo</td>
      </tr>
      <tr>
        <td><code>c</code></td>
        <td>“change” — cambió algo</td>
      </tr>
    </tbody>
  </table>
  <hr />
  <h3 id="opciones-útiles">Opciones útiles</h3>
  <table>
    <colgroup>
      <col style="width: 7%" />
      <col style="width: 92%" />
    </colgroup>
    <thead>
      <tr>
        <th>Opción</th>
        <th>Descripción</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>-u</code></td>
        <td>Muestra diferencias en <strong>formato unificado</strong> (más
          legible, usado por Git).</td>
      </tr>
      <tr>
        <td><code>-y</code></td>
        <td>Muestra los archivos <strong>lado a lado</strong>.</td>
      </tr>
      <tr>
        <td><code>-q</code></td>
        <td>Solo indica si los archivos <strong>son diferentes o
            iguales</strong>, sin mostrar detalles.</td>
      </tr>
      <tr>
        <td><code>-r</code></td>
        <td>Compara <strong>directorios recursivamente</strong>.</td>
      </tr>
    </tbody>
  </table>
  <p>Ejemplo:</p>
  <div class="sourceCode" id="cb6">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a><span class="fu">diff</span> <span class="at">-u</span> archivo1.txt archivo2.txt</span></code></pre>
  </div>
  <p>Salida tipo “Git”:</p>
  <div class="sourceCode" id="cb7">
    <pre class="sourceCode diff"><code class="sourceCode diff"><span id="cb7-1"><a href="#cb7-1" aria-hidden="true" tabindex="-1"></a><span class="kw">--- archivo1.txt</span></span>
<span id="cb7-2"><a href="#cb7-2" aria-hidden="true" tabindex="-1"></a><span class="dt">+++ archivo2.txt</span></span>
<span id="cb7-3"><a href="#cb7-3" aria-hidden="true" tabindex="-1"></a><span class="dt">@@ -1,3 +1,3 @@</span></span>
<span id="cb7-4"><a href="#cb7-4" aria-hidden="true" tabindex="-1"></a> hola</span>
<span id="cb7-5"><a href="#cb7-5" aria-hidden="true" tabindex="-1"></a><span class="st">-mundo</span></span>
<span id="cb7-6"><a href="#cb7-6" aria-hidden="true" tabindex="-1"></a><span class="va">+mundo!!!</span></span>
<span id="cb7-7"><a href="#cb7-7" aria-hidden="true" tabindex="-1"></a> como estas</span></code></pre>
  </div>
  <hr />
  <h3 id="usos-comunes">Usos comunes</h3>
  <ul>
    <li>Ver qué cambió entre dos versiones de un archivo.</li>
    <li>Comparar archivos de configuración.</li>
    <li>Analizar diferencias en código fuente.</li>
    <li>Generar <em>parches</em> con <code>diff</code> y aplicarlos con
      <code>patch</code>.
    </li>
  </ul>
  <hr />
  <p><a href="./../../readme.md#5-python">Regresar a la Guía
      Principal</a></p>
  <blockquote>
    <p><strong>Autor:</strong> Fravelz</p>
  </blockquote>
</body>

</html>