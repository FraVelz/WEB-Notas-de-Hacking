<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">

<head>
  <meta charset="utf-8" />
  <meta name="generator" content="pandoc" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <title>entrada-y-salida</title>

</head>

<body>
  <h1 id="entradas-y-salidas-en-bash-script">Entradas y Salidas en Bash
    Script</h1>
  <p>Este documento explica como usar la <strong>redirección de contenido
      en bash script</strong> de (entradas y salidas y errores en bash).</p>
  <hr />
  <h2 id="temario">Temario</h2>
  <ul>
    <li><a href="#entradas-y-salidas-en-bash-script">Entradas y Salidas en
        Bash Script</a>
      <ul>
        <li><a href="#temario">Temario</a></li>
        <li><a href="#descriptores-de-archivos">Descriptores de archivos</a>
          <ul>
            <li><a href="#1-entrada-redirigir-desde-un-archivo-">1 Entrada:
                redirigir desde un archivo <code>&lt;</code></a></li>
            <li><a href="#2-salida-redirigir-la-salida-normal--y-">2 Salida:
                redirigir la salida normal <code>&gt;</code> y
                <code>&gt;&gt;</code></a></li>
            <li><a href="#3-errores-redirigir-errores-2">3 Errores: redirigir
                errores <code>2&gt;</code></a></li>
          </ul>
        </li>
        <li><a href="#juntar-salida-y-errores">Juntar salida y errores</a></li>
        <li><a href="#pipes-">Pipes (<code>|</code>)</a></li>
        <li><a href="#redirección-combinada-">Redirección combinada
            <code>&amp;&gt;</code></a></li>
        <li><a href="#comando-cat-concatenate">Comando <code>cat</code>
            (concatenate)</a></li>
        <li><a href="#comando-tee">Comando <code>tee</code></a>
          <ul>
            <li><a href="#resumen-rápido">Resumen rápido</a></li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
  <p><a href="./../readme.md#2-linux-y-bash-script">Regresar a la guía
      principal</a></p>
  <hr />
  <h2 id="descriptores-de-archivos">Descriptores de archivos</h2>
  <p>En Bash hay <strong>3 descriptores de archivos
      principales</strong>:</p>
  <table>
    <colgroup>
      <col style="width: 12%" />
      <col style="width: 20%" />
      <col style="width: 67%" />
    </colgroup>
    <thead>
      <tr>
        <th>Descriptor</th>
        <th>Nombre</th>
        <th>Descripción</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>0</strong></td>
        <td>Entrada estándar</td>
        <td>Lo que le das a un programa (normalmente el teclado).</td>
      </tr>
      <tr>
        <td><strong>1</strong></td>
        <td>Salida estándar</td>
        <td>Lo que muestra el programa.</td>
      </tr>
      <tr>
        <td><strong>2</strong></td>
        <td>Error estándar</td>
        <td>Mensajes de error.</td>
      </tr>
    </tbody>
  </table>
  <p>Los descriptores <strong>3, 4, 5, …</strong> son opcionales y se usan
    en programas más avanzados. Para referirse a un descriptor se usa su
    número (por ejemplo <code>2&gt; archivo</code>). Para el descriptor
    <strong>1</strong>, el número puede omitirse (<code>&gt;</code> equivale
    a <code>1&gt;</code>).
  </p>
  <h3 id="entrada-redirigir-desde-un-archivo">1 Entrada: redirigir desde
    un archivo <code>&lt;</code></h3>
  <div class="sourceCode" id="cb1">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="fu">cat</span> <span class="op">&lt;</span> ./4.estControl.sh</span></code></pre>
  </div>
  <h3 id="salida-redirigir-la-salida-normal-y">2 Salida: redirigir la
    salida normal <code>&gt;</code> y <code>&gt;&gt;</code></h3>
  <div class="sourceCode" id="cb2">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;hola,&quot;</span> <span class="op">&gt;</span> ./salida.txt    <span class="co"># Sobrescribe el archivo</span></span>
<span id="cb2-2"><a href="#cb2-2" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;mundo!&quot;</span> <span class="op">&gt;&gt;</span> ./salida.txt  <span class="co"># Agrega al final</span></span></code></pre>
  </div>
  <h3 id="errores-redirigir-errores-2">3 Errores: redirigir errores
    <code>2&gt;</code>
  </h3>
  <div class="sourceCode" id="cb3">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a><span class="fu">ls</span> noExiste <span class="dv">2</span><span class="op">&gt;</span> errores.txt</span></code></pre>
  </div>
  <hr />
  <h2 id="juntar-salida-y-errores">Juntar salida y errores</h2>
  <div class="sourceCode" id="cb4">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a><span class="ex">comando</span> <span class="op">&gt;</span> todo.txt <span class="dv">2</span><span class="op">&gt;&amp;</span><span class="dv">1</span></span></code></pre>
  </div>
  <p>Esto significa:</p>
  <ul>
    <li>
      <p>El descriptor <strong>1 (salida estándar)</strong> se envía al
        archivo <code>todo.txt</code>.</p>
    </li>
    <li>
      <p>El descriptor <strong>2 (errores)</strong> se redirige hacia
        donde va la salida estándar (<code>&amp;1</code>).</p>
    </li>
  </ul>
  <p>En resumen:</p>
  <blockquote>
    <p>“Manda los errores al mismo lugar donde está yendo la salida
      normal”.</p>
  </blockquote>
  <table>
    <thead>
      <tr>
        <th>Símbolo</th>
        <th>Significado</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>&amp;0</code></td>
        <td>Hacia donde vaya la entrada estándar</td>
      </tr>
      <tr>
        <td><code>&amp;1</code></td>
        <td>Hacia donde vaya la salida estándar</td>
      </tr>
      <tr>
        <td><code>&amp;2</code></td>
        <td>Hacia donde vaya la salida de errores</td>
      </tr>
    </tbody>
  </table>
  <hr />
  <h2 id="pipes">Pipes (<code>|</code>)</h2>
  <div class="sourceCode" id="cb5">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb5-1"><a href="#cb5-1" aria-hidden="true" tabindex="-1"></a><span class="fu">ls</span> <span class="kw">|</span> <span class="fu">grep</span> .txt</span></code></pre>
  </div>
  <p>Envía la salida de <code>ls</code> al comando <code>grep</code>, que
    muestra solo los archivos <code>.txt</code>.</p>
  <hr />
  <h2 id="redirección-combinada">Redirección combinada
    <code>&amp;&gt;</code>
  </h2>
  <div class="sourceCode" id="cb6">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a><span class="fu">ls</span> carpeta_inexistente <span class="op">&amp;&gt;</span> salida.txt</span></code></pre>
  </div>
  <p>Equivale a:</p>
  <div class="sourceCode" id="cb7">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb7-1"><a href="#cb7-1" aria-hidden="true" tabindex="-1"></a><span class="fu">ls</span> carpeta_inexistente <span class="op">&gt;</span> salida.txt <span class="dv">2</span><span class="op">&gt;&amp;</span><span class="dv">1</span></span></code></pre>
  </div>
  <hr />
  <h2 id="comando-cat-concatenate">Comando <code>cat</code>
    (concatenate)</h2>
  <div class="sourceCode" id="cb8">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb8-1"><a href="#cb8-1" aria-hidden="true" tabindex="-1"></a><span class="fu">cat</span> ./1.comandosBash/5.EntradaYSalida.sh    <span class="co"># Mostrar un archivo</span></span>
<span id="cb8-2"><a href="#cb8-2" aria-hidden="true" tabindex="-1"></a><span class="fu">cat</span> a.txt b.txt <span class="op">&gt;</span> c.txt                     <span class="co"># Unir archivos</span></span>
<span id="cb8-3"><a href="#cb8-3" aria-hidden="true" tabindex="-1"></a><span class="fu">cat</span> a.txt <span class="op">&gt;&gt;</span> b.txt                          <span class="co"># Añadir uno al final del otro</span></span></code></pre>
  </div>
  <p>También puedes crear un archivo nuevo escribiendo directamente:</p>
  <div class="sourceCode" id="cb9">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb9-1"><a href="#cb9-1" aria-hidden="true" tabindex="-1"></a><span class="fu">cat</span> <span class="op">&gt;</span> nuevo.txt</span>
<span id="cb9-2"><a href="#cb9-2" aria-hidden="true" tabindex="-1"></a><span class="ex">Hola</span></span>
<span id="cb9-3"><a href="#cb9-3" aria-hidden="true" tabindex="-1"></a><span class="ex">Mundo</span></span>
<span id="cb9-4"><a href="#cb9-4" aria-hidden="true" tabindex="-1"></a><span class="co"># (Presiona CTRL+D para terminar)</span></span></code></pre>
  </div>
  <hr />
  <h2 id="comando-tee">Comando <code>tee</code></h2>
  <p>El comando <code>tee</code> <strong>guarda la salida en archivos y
      también la muestra en pantalla</strong>.</p>
  <div class="sourceCode" id="cb10">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb10-1"><a href="#cb10-1" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;Hola mundo&quot;</span> <span class="kw">|</span> <span class="fu">tee</span> salida.txt          <span class="co"># Guardar y mostrar</span></span>
<span id="cb10-2"><a href="#cb10-2" aria-hidden="true" tabindex="-1"></a><span class="fu">ls</span> <span class="kw">|</span> <span class="fu">tee</span> <span class="at">-a</span> lista.txt                       <span class="co"># Modo append</span></span>
<span id="cb10-3"><a href="#cb10-3" aria-hidden="true" tabindex="-1"></a><span class="fu">ls</span> <span class="kw">|</span> <span class="fu">tee</span> archivo1.txt archivo2.txt          <span class="co"># Guardar en varios archivos</span></span></code></pre>
  </div>
  <hr />
  <h3 id="resumen-rápido">Resumen rápido</h3>
  <table>
    <thead>
      <tr>
        <th>Operador.</th>
        <th>Descripción</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>&lt;</code></td>
        <td>Leer desde archivo</td>
      </tr>
      <tr>
        <td><code>&gt;</code></td>
        <td>Escribir (sobrescribir)</td>
      </tr>
      <tr>
        <td><code>&gt;&gt;</code></td>
        <td>Escribir (agregar al final)</td>
      </tr>
      <tr>
        <td><code>2&gt;</code></td>
        <td>Redirigir errores</td>
      </tr>
      <tr>
        <td><code>2&gt;&amp;1</code></td>
        <td>Unir errores con salida normal</td>
      </tr>
      <tr>
        <td><code>&amp;&gt;</code></td>
        <td>Redirigir ambos (salida y errores)</td>
      </tr>
      <tr>
        <td>`</td>
        <td>Pipe (enviar salida a otro comando)</td>
      </tr>
    </tbody>
  </table>
  <hr />
  <p><a href="./../readme.md#2-linux-y-bash-script">Regresar a la guía
      principal</a></p>
  <blockquote>
    <p><strong>Autor:</strong> Fravelz</p>
  </blockquote>
</body>

</html>