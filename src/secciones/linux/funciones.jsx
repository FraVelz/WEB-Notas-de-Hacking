import Titulo from "./../../componentes/titulo.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Linea from "./../../componentes/linea.jsx";

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="funciones-variables-y-argumentos-en-bash-script">Funciones,
        Variables y Argumentos en Bash Script</Titulo>
      <Texto>Este documento explica como usar <strong>funciones</strong>,
        <strong>variables globales y locales</strong>, y
        <strong>argumentos</strong>.
      </Texto>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><a href="#funciones-variables-y-argumentos-en-bash-script">Funciones,
          Variables y Argumentos en Bash Script</a>
          <Lista>
            <li><a href="#temario">Temario</a></li>
            <li><a href="#1-definición-de-funciones">1. Definición de
              funciones</a></li>
            <li><a href="#2-parámetros-en-funciones">2. Parámetros en
              funciones</a></li>
            <li><a href="#3-devolver-valores">3. Devolver valores</a></li>
            <li><a href="#4-variables-globales-y-locales">4. Variables Globales y
              Locales</a></li>
            <li><a href="#5-argumentos-en-scripts">5. Argumentos en scripts</a></li>
            <li><a href="#6-validaciones-útiles">6. Validaciones útiles</a></li>
            <li><a href="#7-recorrer-argumentos">7. Recorrer argumentos</a>
              <Lista>
                <li><a href="#con-for">Con <code>for</code></a></li>
                <li><a href="#con-shift">Con <code>shift</code></a></li>
              </Lista>
            </li>
            <li><a href="#8-ejemplo-práctico-mini-calculadora">8. Ejemplo práctico:
              mini calculadora</a></li>
            <li><a href="#en-resumen">En resumen</a></li>
          </Lista>
        </li>
      </Lista>
      <Texto><a href="./../readme.md#2-linux-y-bash-script">Regresar a la guía
        principal</a></Texto>
      <Linea />
      <Titulo title="h2" id="definición-de-funciones">1. Definición de funciones</Titulo>
      <Texto>En Bash, una función agrupa comandos que puedes reutilizar. Existen
        dos formas equivalentes:</Texto>
      <div class="sourceCode" id="cb1">
        <pre class="sourceCode bash"><code class="sourceCode bash"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="co"># Forma 1 (más común)</span></span>
          <span id="cb1-2"><a href="#cb1-2" aria-hidden="true" tabindex="-1"></a><span class="fu">mi_funcion()</span> <span class="kw">{</span></span>
          <span id="cb1-3"><a href="#cb1-3" aria-hidden="true" tabindex="-1"></a>    <span class="bu">echo</span> <span class="st">&quot;Hola desde la función&quot;</span></span>
          <span id="cb1-4"><a href="#cb1-4" aria-hidden="true" tabindex="-1"></a><span class="kw">}</span></span>
          <span id="cb1-5"><a href="#cb1-5" aria-hidden="true" tabindex="-1"></a></span>
          <span id="cb1-6"><a href="#cb1-6" aria-hidden="true" tabindex="-1"></a><span class="co"># Forma 2 (menos usada)</span></span>
          <span id="cb1-7"><a href="#cb1-7" aria-hidden="true" tabindex="-1"></a><span class="kw">function</span><span class="fu"> mi_funcion2</span> <span class="kw">{</span></span>
          <span id="cb1-8"><a href="#cb1-8" aria-hidden="true" tabindex="-1"></a>    <span class="bu">echo</span> <span class="st">&quot;Hola desde la función 2&quot;</span></span>
          <span id="cb1-9"><a href="#cb1-9" aria-hidden="true" tabindex="-1"></a><span class="kw">}</span></span></code></pre>
      </div>
      <Texto><strong>Llamar una función:</strong></Texto>
      <div class="sourceCode" id="cb2">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="ex">mi_funcion</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="parámetros-en-funciones">2. Parámetros en funciones</Titulo>
      <Texto>Los argumentos se manejan igual que en un script:</Texto>
      <table>
        <thead>
          <tr>
            <th>Variable</th>
            <th>Significado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>$1</code></td>
            <td>Primer argumento</td>
          </tr>
          <tr>
            <td><code>$2</code></td>
            <td>Segundo argumento</td>
          </tr>
          <tr>
            <td><code>$@</code></td>
            <td>Todos los argumentos</td>
          </tr>
          <tr>
            <td><code>$#</code></td>
            <td>Cantidad de argumentos</td>
          </tr>
        </tbody>
      </table>
      <Texto>Ejemplo:</Texto>
      <div class="sourceCode" id="cb3">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a><span class="fu">saludar()</span> <span class="kw">{</span></span>
            <span id="cb3-2"><a href="#cb3-2" aria-hidden="true" tabindex="-1"></a>    <span class="bu">echo</span> <span class="st">&quot;Hola </span><span class="va">$1</span><span class="st"> </span><span class="va">$2</span><span class="st">&quot;</span></span>
            <span id="cb3-3"><a href="#cb3-3" aria-hidden="true" tabindex="-1"></a><span class="kw">}</span></span>
            <span id="cb3-4"><a href="#cb3-4" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb3-5"><a href="#cb3-5" aria-hidden="true" tabindex="-1"></a><span class="ex">saludar</span> <span class="st">&quot;Francisco&quot;</span> <span class="st">&quot;Vélez&quot;</span></span>
            <span id="cb3-6"><a href="#cb3-6" aria-hidden="true" tabindex="-1"></a><span class="co"># → Hola Francisco Vélez</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="devolver-valores">3. Devolver valores</Titulo>
      <Texto>En Bash, <code>return</code> solo devuelve <strong>códigos de salida
        (= éxito, ≠0 = error)</strong>. Para devolver datos reales se usa
        <code>echo</code> y <strong>captura de comandos</strong>:
      </Texto>
      <div class="sourceCode" id="cb4">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a><span class="fu">sumar()</span> <span class="kw">{</span></span>
            <span id="cb4-2"><a href="#cb4-2" aria-hidden="true" tabindex="-1"></a>    <span class="bu">echo</span> <span class="va">$((</span> <span class="va">$1</span> <span class="op">+</span> <span class="va">$2</span> <span class="va">))</span></span>
            <span id="cb4-3"><a href="#cb4-3" aria-hidden="true" tabindex="-1"></a><span class="kw">}</span></span>
            <span id="cb4-4"><a href="#cb4-4" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb4-5"><a href="#cb4-5" aria-hidden="true" tabindex="-1"></a><span class="va">resultado</span><span class="op">=</span><span class="va">$(</span><span class="ex">sumar</span> 5 7<span class="va">)</span></span>
            <span id="cb4-6"><a href="#cb4-6" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;La suma es: </span><span class="va">$resultado</span><span class="st">&quot;</span></span>
            <span id="cb4-7"><a href="#cb4-7" aria-hidden="true" tabindex="-1"></a><span class="co"># → La suma es: 12</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="variables-globales-y-locales">4. Variables Globales y
        Locales</Titulo>
      <Texto>Por defecto, todas las variables son <strong>globales</strong>. Para
        que existan solo dentro de la función, usa <code>local</code>.</Texto>
      <div class="sourceCode" id="cb5">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb5-1"><a href="#cb5-1" aria-hidden="true" tabindex="-1"></a><span class="va">mensaje</span><span class="op">=</span><span class="st">&quot;Hola mundo&quot;</span></span>
            <span id="cb5-2"><a href="#cb5-2" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb5-3"><a href="#cb5-3" aria-hidden="true" tabindex="-1"></a><span class="fu">cambiar()</span> <span class="kw">{</span></span>
            <span id="cb5-4"><a href="#cb5-4" aria-hidden="true" tabindex="-1"></a>    <span class="bu">local</span> <span class="va">mensaje</span><span class="op">=</span><span class="st">&quot;Soy local&quot;</span></span>
            <span id="cb5-5"><a href="#cb5-5" aria-hidden="true" tabindex="-1"></a>    <span class="bu">echo</span> <span class="st">&quot;Dentro: </span><span class="va">$mensaje</span><span class="st">&quot;</span></span>
            <span id="cb5-6"><a href="#cb5-6" aria-hidden="true" tabindex="-1"></a><span class="kw">}</span></span>
            <span id="cb5-7"><a href="#cb5-7" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb5-8"><a href="#cb5-8" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;Antes: </span><span class="va">$mensaje</span><span class="st">&quot;</span></span>
            <span id="cb5-9"><a href="#cb5-9" aria-hidden="true" tabindex="-1"></a><span class="ex">cambiar</span></span>
            <span id="cb5-10"><a href="#cb5-10" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;Después: </span><span class="va">$mensaje</span><span class="st">&quot;</span></span></code></pre>
      </div>
      <Texto><strong>Diferencias clave:</strong></Texto>
      <table>
        <colgroup>
          <col style="width: 9%" />
          <col style="width: 38%" />
          <col style="width: 52%" />
        </colgroup>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Alcance</th>
            <th>Vida útil</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Global</td>
            <td>Todo el script</td>
            <td>Hasta que termina el script</td>
          </tr>
          <tr>
            <td>Local</td>
            <td>Solo dentro de la función</td>
            <td>Se destruye al salir de la función</td>
          </tr>
        </tbody>
      </table>
      <Texto>Usa <strong><code>local</code></strong> para evitar modificar
        variables globales sin querer.</Texto>
      <Linea />
      <Titulo title="h2" id="argumentos-en-scripts">5. Argumentos en scripts</Titulo>
      <Texto>Cuando ejecutas un script, puedes pasarle argumentos:</Texto>
      <div class="sourceCode" id="cb6">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a><span class="co">#!/bin/bash</span></span>
            <span id="cb6-2"><a href="#cb6-2" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;Hola </span><span class="va">$1</span><span class="st">&quot;</span></span></code></pre>
      </div>
      <Texto>Ejecución:</Texto>
      <div class="sourceCode" id="cb7">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb7-1"><a href="#cb7-1" aria-hidden="true" tabindex="-1"></a><span class="fu">bash</span> script.sh Francisco</span>
            <span id="cb7-2"><a href="#cb7-2" aria-hidden="true" tabindex="-1"></a><span class="co"># → Hola Francisco</span></span></code></pre>
      </div>
      <Texto>Variables especiales:</Texto>
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
            <td><code>$1, $2...</code></td>
            <td>Argumentos individuales</td>
          </tr>
          <tr>
            <td><code>$#</code></td>
            <td>Número de argumentos</td>
          </tr>
          <tr>
            <td><code>$@</code></td>
            <td>Todos los argumentos como lista</td>
          </tr>
          <tr>
            <td><code>$*</code></td>
            <td>Todos los argumentos como una sola cadena</td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Titulo title="h2" id="validaciones-útiles">6. Validaciones útiles</Titulo>
      <Texto><strong>Validar número de argumentos:</strong></Texto>
      <div class="sourceCode" id="cb8">
        <pre class="sourceCode bash"><code class="sourceCode bash"><span id="cb8-1"><a href="#cb8-1" aria-hidden="true" tabindex="-1"></a><span class="cf">if</span> <span class="bu">[</span> <span class="va">$#</span> <span class="ot">-ne</span> 2 <span class="bu">]</span><span class="kw">;</span> <span class="cf">then</span></span>
          <span id="cb8-2"><a href="#cb8-2" aria-hidden="true" tabindex="-1"></a>    <span class="bu">echo</span> <span class="st">&quot;Uso: </span><span class="va">$0</span><span class="st"> num1 num2&quot;</span></span>
          <span id="cb8-3"><a href="#cb8-3" aria-hidden="true" tabindex="-1"></a>    <span class="bu">exit</span> 1</span>
          <span id="cb8-4"><a href="#cb8-4" aria-hidden="true" tabindex="-1"></a><span class="cf">fi</span></span></code></pre>
      </div>
      <Texto><strong>Validar argumento vacío:</strong></Texto>
      <div class="sourceCode" id="cb9">
        <pre class="sourceCode bash"><code class="sourceCode bash"><span id="cb9-1"><a href="#cb9-1" aria-hidden="true" tabindex="-1"></a><span class="cf">if</span> <span class="bu">[</span> <span class="ot">-z</span> <span class="st">&quot;</span><span class="va">$1</span><span class="st">&quot;</span> <span class="bu">]</span><span class="kw">;</span> <span class="cf">then</span></span>
          <span id="cb9-2"><a href="#cb9-2" aria-hidden="true" tabindex="-1"></a>    <span class="bu">echo</span> <span class="st">&quot;Error: falta argumento&quot;</span></span>
          <span id="cb9-3"><a href="#cb9-3" aria-hidden="true" tabindex="-1"></a>    <span class="bu">exit</span> 1</span>
          <span id="cb9-4"><a href="#cb9-4" aria-hidden="true" tabindex="-1"></a><span class="cf">fi</span></span></code></pre>
      </div>
      <Texto><strong>Validar que sea un número:</strong></Texto>
      <div class="sourceCode" id="cb10">
        <pre class="sourceCode bash"><code class="sourceCode bash"><span id="cb10-1"><a href="#cb10-1" aria-hidden="true" tabindex="-1"></a><span class="cf">if</span> <span class="ot">! </span><span class="kw">[[</span> <span class="st">&quot;</span><span class="va">$1</span><span class="st">&quot;</span> <span class="ot">=~</span> <span class="pp">^</span><span class="op">[</span><span class="ss">0</span><span class="op">-</span><span class="ss">9</span><span class="op">]</span><span class="pp">+</span><span class="op">$</span> <span class="kw">]];</span> <span class="cf">then</span></span>
          <span id="cb10-2"><a href="#cb10-2" aria-hidden="true" tabindex="-1"></a>    <span class="bu">echo</span> <span class="st">&quot;Error: </span><span class="va">$1</span><span class="st"> no es un número&quot;</span></span>
          <span id="cb10-3"><a href="#cb10-3" aria-hidden="true" tabindex="-1"></a>    <span class="bu">exit</span> 1</span>
          <span id="cb10-4"><a href="#cb10-4" aria-hidden="true" tabindex="-1"></a><span class="cf">fi</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="recorrer-argumentos">7. Recorrer argumentos</Titulo>
      <Titulo title="h3" id="con-for">Con <code>for</code></Titulo>
      <div class="sourceCode" id="cb11">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb11-1"><a href="#cb11-1" aria-hidden="true" tabindex="-1"></a><span class="cf">for</span> arg <span class="kw">in</span> <span class="st">&quot;</span><span class="va">$@</span><span class="st">&quot;</span><span class="kw">;</span> <span class="cf">do</span></span>
            <span id="cb11-2"><a href="#cb11-2" aria-hidden="true" tabindex="-1"></a>    <span class="bu">echo</span> <span class="st">&quot;Argumento: </span><span class="va">$arg</span><span class="st">&quot;</span></span>
            <span id="cb11-3"><a href="#cb11-3" aria-hidden="true" tabindex="-1"></a><span class="cf">done</span></span></code></pre>
      </div>
      <Titulo title="h3" id="con-shift">Con <code>shift</code></Titulo>
      <Texto><code>shift</code> elimina el primer argumento (<code>$1</code>) y
        mueve los demás a la izquierda.</Texto>
      <div class="sourceCode" id="cb12">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb12-1"><a href="#cb12-1" aria-hidden="true" tabindex="-1"></a><span class="cf">while</span> <span class="bu">[</span> <span class="va">$#</span> <span class="ot">-gt</span> 0 <span class="bu">]</span><span class="kw">;</span> <span class="cf">do</span></span>
            <span id="cb12-2"><a href="#cb12-2" aria-hidden="true" tabindex="-1"></a>    <span class="bu">echo</span> <span class="st">&quot;Actual: </span><span class="va">$1</span><span class="st">&quot;</span></span>
            <span id="cb12-3"><a href="#cb12-3" aria-hidden="true" tabindex="-1"></a>    <span class="bu">shift</span></span>
            <span id="cb12-4"><a href="#cb12-4" aria-hidden="true" tabindex="-1"></a><span class="cf">done</span></span></code></pre>
      </div>
      <Texto><code>shift 2</code> eliminaría los dos primeros argumentos de
        golpe.</Texto>
      <Linea />
      <Titulo title="h2" id="ejemplo-práctico-mini-calculadora">8. Ejemplo práctico: mini
        calculadora</Titulo>
      <div class="sourceCode" id="cb13">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb13-1"><a href="#cb13-1" aria-hidden="true" tabindex="-1"></a><span class="co">#!/bin/bash</span></span>
            <span id="cb13-2"><a href="#cb13-2" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb13-3"><a href="#cb13-3" aria-hidden="true" tabindex="-1"></a><span class="fu">sumar()</span> <span class="kw">{</span> <span class="bu">echo</span> <span class="va">$((</span> <span class="va">$1</span> <span class="op">+</span> <span class="va">$2</span> <span class="va">))</span><span class="kw">;</span> <span class="kw">}</span></span>
            <span id="cb13-4"><a href="#cb13-4" aria-hidden="true" tabindex="-1"></a><span class="fu">restar()</span> <span class="kw">{</span> <span class="bu">echo</span> <span class="va">$((</span> <span class="va">$1</span> <span class="op">-</span> <span class="va">$2</span> <span class="va">))</span><span class="kw">;</span> <span class="kw">}</span></span>
            <span id="cb13-5"><a href="#cb13-5" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb13-6"><a href="#cb13-6" aria-hidden="true" tabindex="-1"></a><span class="cf">if</span> <span class="bu">[</span> <span class="va">$#</span> <span class="ot">-lt</span> 3 <span class="bu">]</span><span class="kw">;</span> <span class="cf">then</span></span>
            <span id="cb13-7"><a href="#cb13-7" aria-hidden="true" tabindex="-1"></a>    <span class="bu">echo</span> <span class="st">&quot;Uso: </span><span class="va">$0</span><span class="st"> [suma|resta] num1 num2&quot;</span></span>
            <span id="cb13-8"><a href="#cb13-8" aria-hidden="true" tabindex="-1"></a>    <span class="bu">exit</span> 1</span>
            <span id="cb13-9"><a href="#cb13-9" aria-hidden="true" tabindex="-1"></a><span class="cf">fi</span></span>
            <span id="cb13-10"><a href="#cb13-10" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb13-11"><a href="#cb13-11" aria-hidden="true" tabindex="-1"></a><span class="va">op</span><span class="op">=</span><span class="va">$1</span></span>
            <span id="cb13-12"><a href="#cb13-12" aria-hidden="true" tabindex="-1"></a><span class="bu">shift</span></span>
            <span id="cb13-13"><a href="#cb13-13" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb13-14"><a href="#cb13-14" aria-hidden="true" tabindex="-1"></a><span class="cf">case</span> <span class="va">$op</span> <span class="kw">in</span></span>
            <span id="cb13-15"><a href="#cb13-15" aria-hidden="true" tabindex="-1"></a>  <span class="ss">suma</span><span class="kw">)</span>  <span class="bu">echo</span> <span class="st">&quot;Resultado: </span><span class="va">$(</span><span class="ex">sumar</span> <span class="va">$1</span> <span class="va">$2)</span><span class="st">&quot;</span> <span class="cf">;;</span></span>
            <span id="cb13-16"><a href="#cb13-16" aria-hidden="true" tabindex="-1"></a>  <span class="ss">resta</span><span class="kw">)</span> <span class="bu">echo</span> <span class="st">&quot;Resultado: </span><span class="va">$(</span><span class="ex">restar</span> <span class="va">$1</span> <span class="va">$2)</span><span class="st">&quot;</span> <span class="cf">;;</span></span>
            <span id="cb13-17"><a href="#cb13-17" aria-hidden="true" tabindex="-1"></a>  <span class="pp">*</span><span class="kw">)</span>     <span class="bu">echo</span> <span class="st">&quot;Operación inválida&quot;</span> <span class="cf">;;</span></span>
            <span id="cb13-18"><a href="#cb13-18" aria-hidden="true" tabindex="-1"></a><span class="cf">esac</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="en-resumen">En resumen</Titulo>
      <table>
        <colgroup>
          <col style="width: 23%" />
          <col style="width: 76%" />
        </colgroup>
        <thead>
          <tr>
            <th>Concepto</th>
            <th>Clave</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Definir función</td>
            <td><code>nombre() {... }</code></td>
          </tr>
          <tr>
            <td>Llamar función</td>
            <td><code>nombre</code></td>
          </tr>
          <tr>
            <td>Argumentos</td>
            <td><code>$1</code>, <code>$2</code>, <code>$@</code>,
              <code>$#</code>
            </td>
          </tr>
          <tr>
            <td>Devolver valor</td>
            <td><code>echo</code> + <code>$(comando)</code></td>
          </tr>
          <tr>
            <td>Variable local</td>
            <td><code>local nombre=valor</code></td>
          </tr>
          <tr>
            <td>Recorrer argumentos</td>
            <td><code>for arg in "$@"</code> o
              <code>while [ $# -gt 0 ]; do ...; shift; done</code>
            </td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Texto><a href="./../readme.md#2-linux-y-bash-script">Regresar a la guía
        principal</a></Texto>
      <blockquote>
        <Texto><strong>Autor:</strong> Fravelz</Texto>
      </blockquote>
    </>
  );
}
export default nameabcd;
