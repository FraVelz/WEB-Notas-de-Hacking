<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">

<head>
  <meta charset="utf-8" />
  <meta name="generator" content="pandoc" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <title>fundaments</title>

</head>

<body>
  <h1 id="fundamentos-de-bash-script">Fundamentos de Bash Script</h1>
  <hr />
  <h2 id="temario">Temario</h2>
  <ul>
    <li><a href="#fundamentos-de-bash-script">Fundamentos de Bash Script</a>
      <ul>
        <li><a href="#temario">Temario</a></li>
        <li><a href="#cabecera-del-script">Cabecera del Script</a></li>
        <li><a href="#imprimir-texto-y-comentarios">Imprimir texto y
            comentarios</a></li>
        <li><a href="#variables-en-bash">Variables en Bash</a>
          <ul>
            <li><a href="#variables-especiales">Variables especiales</a></li>
          </ul>
        </li>
        <li><a href="#strings">Strings</a></li>
        <li><a href="#valores-constantes">Valores constantes</a></li>
        <li><a href="#operaciones-matemáticas">Operaciones matemáticas</a>
          <ul>
            <li><a href="#símbolos-matemáticos">Símbolos matemáticos</a></li>
          </ul>
        </li>
        <li><a href="#leer-entrada-del-usuario">Leer entrada del usuario</a>
          <ul>
            <li><a href="#parámetros-útiles">Parámetros útiles</a></li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
  <p><a href="./../readme.md#2-linux-y-bash-script">Regresar a la guía
      principal</a></p>
  <hr />
  <h2 id="cabecera-del-script">Cabecera del Script</h2>
  <p>La <strong>cabecera</strong> o <em>shebang</em> indica qué intérprete
    ejecutará el script.</p>
  <div class="sourceCode" id="cb1">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="co">#!/bin/bash</span></span></code></pre>
  </div>
  <hr />
  <h2 id="imprimir-texto-y-comentarios">Imprimir texto y comentarios</h2>
  <p>Puedes imprimir texto con <code>echo</code> y escribir comentarios de
    varias formas.</p>
  <div class="sourceCode" id="cb2">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="co"># Imprimir texto</span></span>
<span id="cb2-2"><a href="#cb2-2" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;hola mundo !!!&quot;</span>    <span class="co"># Imprime hola mundo por consola</span></span>
<span id="cb2-3"><a href="#cb2-3" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb2-4"><a href="#cb2-4" aria-hidden="true" tabindex="-1"></a><span class="co"># Esto es un comentario de una sola línea.</span></span></code></pre>
  </div>
  <p>Comentarios multilínea pueden simularse con dos métodos:</p>
  <div class="sourceCode" id="cb3">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a><span class="bu">:</span> <span class="st">&#39;</span></span>
<span id="cb3-2"><a href="#cb3-2" aria-hidden="true" tabindex="-1"></a><span class="st">Comentario (*recomendado)</span></span>
<span id="cb3-3"><a href="#cb3-3" aria-hidden="true" tabindex="-1"></a><span class="st">multilinea simulado</span></span>
<span id="cb3-4"><a href="#cb3-4" aria-hidden="true" tabindex="-1"></a><span class="st">con null command con string.</span></span>
<span id="cb3-5"><a href="#cb3-5" aria-hidden="true" tabindex="-1"></a><span class="st">&#39;</span></span>
<span id="cb3-6"><a href="#cb3-6" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb3-7"><a href="#cb3-7" aria-hidden="true" tabindex="-1"></a><span class="op">&lt;&lt; &#39;EOF&#39;</span></span>
<span id="cb3-8"><a href="#cb3-8" aria-hidden="true" tabindex="-1"></a><span class="st">Comentario </span></span>
<span id="cb3-9"><a href="#cb3-9" aria-hidden="true" tabindex="-1"></a><span class="st">multilinea simulado</span></span>
<span id="cb3-10"><a href="#cb3-10" aria-hidden="true" tabindex="-1"></a><span class="st">con here document descartado.</span></span>
<span id="cb3-11"><a href="#cb3-11" aria-hidden="true" tabindex="-1"></a><span class="op">EOF</span></span></code></pre>
  </div>
  <hr />
  <h2 id="variables-en-bash">Variables en Bash</h2>
  <p>En Bash solo existe un tipo de dato: <strong>string</strong> (cadena
    de texto). Se puede escribir <strong>sin comillas</strong>, o con
    <strong>comillas simples</strong> o <strong>dobles</strong>.
  </p>
  <p>Ejemplo:</p>
  <div class="sourceCode" id="cb4">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a><span class="va">name</span><span class="op">=</span>Fravelz</span>
<span id="cb4-2"><a href="#cb4-2" aria-hidden="true" tabindex="-1"></a><span class="va">today</span><span class="op">=</span><span class="st">&quot;10 09 2025&quot;</span></span>
<span id="cb4-3"><a href="#cb4-3" aria-hidden="true" tabindex="-1"></a><span class="va">message</span><span class="op">=</span><span class="st">&#39;hola $name&#39;</span></span></code></pre>
  </div>
  <blockquote>
    <p>Importante: No deben colocarse espacios al declarar una variable.
      Bash es sensible a los espacios.</p>
  </blockquote>
  <p>Para usar una variable se coloca <code>$</code> antes de su nombre:
    <code>$variable</code>
  </p>
  <h3 id="variables-especiales">Variables especiales</h3>
  <table>
    <thead>
      <tr>
        <th>Variable</th>
        <th>Significado</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>$0</code></td>
        <td>Nombre del script</td>
      </tr>
      <tr>
        <td><code>$1</code>, <code>$2</code>, …</td>
        <td>Argumentos del script</td>
      </tr>
      <tr>
        <td><code>$#</code></td>
        <td>Número de argumentos</td>
      </tr>
      <tr>
        <td><code>$?</code></td>
        <td>Código de salida del último comando</td>
      </tr>
      <tr>
        <td><code>$$</code></td>
        <td>PID del script actual</td>
      </tr>
    </tbody>
  </table>
  <p>Para imprimir valores (evitando errores con espacios), se
    recomienda:</p>
  <div class="sourceCode" id="cb5">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb5-1"><a href="#cb5-1" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;</span><span class="va">$variable</span><span class="st">&quot;</span></span></code></pre>
  </div>
  <hr />
  <h2 id="strings">Strings</h2>
  <div class="sourceCode" id="cb6">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a><span class="va">name</span><span class="op">=</span>Fravelz</span>
<span id="cb6-2"><a href="#cb6-2" aria-hidden="true" tabindex="-1"></a><span class="va">today</span><span class="op">=</span><span class="st">&quot;10 09 2025&quot;</span></span>
<span id="cb6-3"><a href="#cb6-3" aria-hidden="true" tabindex="-1"></a><span class="va">message</span><span class="op">=</span><span class="st">&#39;hola $name&#39;</span></span></code></pre>
  </div>
  <p>Los strings pueden ser multilínea (guarda exactamente los saltos de
    líneas que tenga):</p>
  <div class="sourceCode" id="cb7">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb7-1"><a href="#cb7-1" aria-hidden="true" tabindex="-1"></a><span class="va">text</span><span class="op">=</span><span class="st">&quot;</span></span>
<span id="cb7-2"><a href="#cb7-2" aria-hidden="true" tabindex="-1"></a><span class="st">Este es un string</span></span>
<span id="cb7-3"><a href="#cb7-3" aria-hidden="true" tabindex="-1"></a><span class="st">Multilinea :)</span></span>
<span id="cb7-4"><a href="#cb7-4" aria-hidden="true" tabindex="-1"></a><span class="st">&quot;</span></span></code></pre>
  </div>
  <p>Llamar a variables e imprimir:</p>
  <div class="sourceCode" id="cb8">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb8-1"><a href="#cb8-1" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;Mi nombre es </span><span class="va">$name</span><span class="st"> y estamos en el year </span><span class="va">$today</span><span class="st">&quot;</span></span>
<span id="cb8-2"><a href="#cb8-2" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="va">$message</span></span>
<span id="cb8-3"><a href="#cb8-3" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="va">$text</span></span></code></pre>
  </div>
  <hr />
  <h2 id="valores-constantes">Valores constantes</h2>
  <p>Usa <code>readonly</code> para declarar constantes:</p>
  <div class="sourceCode" id="cb9">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb9-1"><a href="#cb9-1" aria-hidden="true" tabindex="-1"></a><span class="bu">readonly</span> <span class="va">PI</span><span class="op">=</span>3.1416</span></code></pre>
  </div>
  <hr />
  <h2 id="operaciones-matemáticas">Operaciones matemáticas</h2>
  <p>Bash permite realizar operaciones aritméticas en las siguientes
    formas:</p>
  <div class="sourceCode" id="cb10">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb10-1"><a href="#cb10-1" aria-hidden="true" tabindex="-1"></a><span class="va">a</span><span class="op">=</span>1</span>
<span id="cb10-2"><a href="#cb10-2" aria-hidden="true" tabindex="-1"></a><span class="va">b</span><span class="op">=</span>2</span>
<span id="cb10-3"><a href="#cb10-3" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb10-4"><a href="#cb10-4" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="va">$((a</span> <span class="op">+</span> <span class="va">b))</span>      </span>
<span id="cb10-5"><a href="#cb10-5" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="va">$(</span><span class="fu">expr</span> <span class="va">$a</span> + <span class="va">$b)</span></span></code></pre>
  </div>
  <h3 id="símbolos-matemáticos">Símbolos matemáticos</h3>
  <table>
    <thead>
      <tr>
        <th>Símbolo</th>
        <th>Operación</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>+</code></td>
        <td>Suma</td>
      </tr>
      <tr>
        <td><code>-</code></td>
        <td>Resta</td>
      </tr>
      <tr>
        <td><code>*</code></td>
        <td>Multiplicación</td>
      </tr>
      <tr>
        <td><code>/</code></td>
        <td>División</td>
      </tr>
      <tr>
        <td><code>**</code></td>
        <td>Exponente</td>
      </tr>
      <tr>
        <td><code>%</code></td>
        <td>Módulo (resto)</td>
      </tr>
    </tbody>
  </table>
  <hr />
  <h2 id="leer-entrada-del-usuario">Leer entrada del usuario</h2>
  <p>El comando <code>read</code> se usa para leer datos del usuario.</p>
  <h3 id="parámetros-útiles">Parámetros útiles</h3>
  <table>
    <thead>
      <tr>
        <th>Parámetro</th>
        <th>Descripción</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>-s</code></td>
        <td>Oculta la entrada (útil para contraseñas)</td>
      </tr>
      <tr>
        <td><code>-p</code></td>
        <td>Muestra un mensaje en línea</td>
      </tr>
      <tr>
        <td><code>-t</code></td>
        <td>Define un límite de tiempo (timeout)</td>
      </tr>
    </tbody>
  </table>
  <p>Ejemplo:</p>
  <div class="sourceCode" id="cb11">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb11-1"><a href="#cb11-1" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;Cual es tu User?&quot;</span></span>
<span id="cb11-2"><a href="#cb11-2" aria-hidden="true" tabindex="-1"></a><span class="bu">read</span> <span class="va">user</span></span>
<span id="cb11-3"><a href="#cb11-3" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb11-4"><a href="#cb11-4" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;Cual es tu name?&quot;</span></span>
<span id="cb11-5"><a href="#cb11-5" aria-hidden="true" tabindex="-1"></a><span class="bu">read</span> <span class="at">-p</span> <span class="va">name</span></span>
<span id="cb11-6"><a href="#cb11-6" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb11-7"><a href="#cb11-7" aria-hidden="true" tabindex="-1"></a><span class="bu">read</span> <span class="at">-t</span> 4 <span class="at">-p</span> <span class="st">&quot;Escribe algo en 4 seg.:&quot;</span> <span class="va">value</span></span>
<span id="cb11-8"><a href="#cb11-8" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;Ingresaste </span><span class="va">$value</span><span class="st">&quot;</span></span></code></pre>
  </div>
  <hr />
  <p><a href="./../readme.md#2-linux-y-bash-script">Regresar a la guía
      principal</a></p>
  <blockquote>
    <p><strong>Autor:</strong> Fravelz</p>
  </blockquote>
</body>

</html>