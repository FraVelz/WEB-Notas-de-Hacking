<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">

<head>
  <meta charset="utf-8" />
  <meta name="generator" content="pandoc" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <title>which</title>

</head>

<body>
  <h1 id="which-en-linux">Which en Linux</h1>
  <hr />
  <h2 id="temario">Temario</h2>
  <ul>
    <li><a href="#which-en-linux">Which en Linux</a>
      <ul>
        <li><a href="#temario">Temario</a></li>
        <li><a href="#que-es-el-comando-which">¿Que es el comando which?</a>
          <ul>
            <li><a href="#ejemplo-básico">Ejemplo básico</a></li>
            <li><a href="#otro-ejemplo">Otro ejemplo</a></li>
            <li><a href="#si-el-comando-no-existe">Si el comando no existe</a></li>
            <li><a href="#ver-qué-versión-se-usa-si-hay-varias-instaladas">Ver qué
                versión se usa si hay varias instaladas</a></li>
            <li><a href="#en-resumen">En resumen</a></li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
  <p><a href="./../../readme.md#5-python">Regresar a la Guía
      Principal</a></p>
  <hr />
  <h2 id="que-es-el-comando-which">¿Que es el comando which?</h2>
  <p>El comando <code>which</code> en Linux (y otros sistemas Unix) sirve
    para <strong>mostrar la ruta completa del ejecutable</strong> que se
    ejecutará cuando llamas a un comando.</p>
  <p>🔹 <strong>En pocas palabras:</strong> Te dice <strong>dónde está
      ubicado</strong> el programa que se ejecutará cuando escribes algo como
    <code>python</code>, <code>ls</code>, <code>gcc</code>, etc.
  </p>
  <h3 id="ejemplo-básico">Ejemplo básico</h3>
  <div class="sourceCode" id="cb1">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="fu">which</span> python</span></code></pre>
  </div>
  <p>📤 <strong>Salida posible:</strong></p>
  <div class="sourceCode" id="cb2">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="ex">/usr/bin/python</span></span></code></pre>
  </div>
  <p>➡️ Significa que cuando escribes <code>python</code> en la terminal,
    se ejecuta el archivo <code>/usr/bin/python</code>.</p>
  <hr />
  <h3 id="otro-ejemplo">Otro ejemplo</h3>
  <div class="sourceCode" id="cb3">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a><span class="fu">which</span> ls</span></code></pre>
  </div>
  <p>📤 Resultado:</p>
  <div class="sourceCode" id="cb4">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a><span class="ex">/bin/ls</span></span></code></pre>
  </div>
  <p>➡️ <code>ls</code> está en la carpeta <code>/bin</code>.</p>
  <hr />
  <h3 id="si-el-comando-no-existe">Si el comando no existe</h3>
  <div class="sourceCode" id="cb5">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb5-1"><a href="#cb5-1" aria-hidden="true" tabindex="-1"></a><span class="fu">which</span> pepe</span></code></pre>
  </div>
  <p>📤 Resultado:</p>
  <div class="sourceCode" id="cb6">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a><span class="ex">pepe</span> not found</span></code></pre>
  </div>
  <hr />
  <h3 id="ver-qué-versión-se-usa-si-hay-varias-instaladas">Ver qué versión
    se usa si hay varias instaladas</h3>
  <div class="sourceCode" id="cb7">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb7-1"><a href="#cb7-1" aria-hidden="true" tabindex="-1"></a><span class="fu">which</span> <span class="at">-a</span> python</span></code></pre>
  </div>
  <p>📤 Resultado:</p>
  <div class="sourceCode" id="cb8">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb8-1"><a href="#cb8-1" aria-hidden="true" tabindex="-1"></a><span class="ex">/usr/bin/python</span></span>
<span id="cb8-2"><a href="#cb8-2" aria-hidden="true" tabindex="-1"></a><span class="ex">/usr/local/bin/python</span></span></code></pre>
  </div>
  <p>➡️ Te muestra <strong>todas</strong> las ubicaciones posibles que
    coinciden, en orden de prioridad según tu <code>$PATH</code>.</p>
  <hr />
  <h3 id="en-resumen">En resumen</h3>
  <table>
    <colgroup>
      <col style="width: 21%" />
      <col style="width: 78%" />
    </colgroup>
    <thead>
      <tr>
        <th>Opción</th>
        <th>Descripción</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>which comando</code></td>
        <td>Muestra la ruta del ejecutable que se ejecuta al usar ese
          comando</td>
      </tr>
      <tr>
        <td><code>which -a comando</code></td>
        <td>Muestra todas las rutas donde se encuentra ese comando</td>
      </tr>
    </tbody>
  </table>
  <p>–</p>
  <p><a href="./../../readme.md#5-python">Regresar a la Guía
      Principal</a></p>
  <blockquote>
    <p><strong>Autor:</strong> Fravelz</p>
  </blockquote>
</body>

</html>