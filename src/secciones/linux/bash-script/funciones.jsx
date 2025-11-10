import Titulo from "./../../../componentes/titulo.jsx";
import Lista from "./../../../componentes/lista.jsx";
import Texto from "./../../../componentes/texto.jsx";
import Linea from "./../../../componentes/linea.jsx";
import Enlace from "./../../../componentes/enlace.jsx";

import { TemarioCompleto } from "./../../../componentes/estructura.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#1-definición-de-funciones">1. Definición de
        funciones</Enlace ></li>
      <li><Enlace href="#2-parámetros-en-funciones">2. Parámetros en
        funciones</Enlace ></li>
      <li><Enlace href="#3-devolver-valores">3. Devolver valores</Enlace ></li>
      <li><Enlace href="#4-variables-globales-y-locales">4. Variables Globales y
        Locales</Enlace ></li>
      <li><Enlace href="#5-argumentos-en-scripts">5. Argumentos en scripts</Enlace ></li>
      <li><Enlace href="#6-validaciones-útiles">6. Validaciones útiles</Enlace ></li>
      <li><Enlace href="#7-recorrer-argumentos">7. Recorrer argumentos</Enlace >
        <Lista>
          <li><Enlace href="#con-for">Con <code>for</code></Enlace ></li>
          <li><Enlace href="#con-shift">Con <code>shift</code></Enlace ></li>
        </Lista>
      </li>
      <li><Enlace href="#8-ejemplo-práctico-mini-calculadora">8. Ejemplo práctico:
        mini calculadora</Enlace ></li>
      <li><Enlace href="#en-resumen">En resumen</Enlace ></li>
    </Lista>
  );
}

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

      <TemarioCompleto temario={Temario}/>

      <Texto><Enlace href="./../readme.md#2-linux-y-bash-script">Regresar a la guía
        principal</Enlace ></Texto>
      <Linea />
      <Titulo title="h2" id="definición-de-funciones">1. Definición de funciones</Titulo>
      <Texto>En Bash, una función agrupa comandos que puedes reutilizar. Existen
        dos formas equivalentes:</Texto>
      <div className="sourceCode" id="cb1">
        <pre className="sourceCode bash"><code className="sourceCode bash"><span id="cb1-1"><Enlace href="#cb1-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Forma 1 (más común)</span></span>
          <span id="cb1-2"><Enlace href="#cb1-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">mi_funcion()</span> <span className="kw">{"{"}</span></span>
          <span id="cb1-3"><Enlace href="#cb1-3" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">echo</span> <span className="st">&quot;Hola desde la función&quot;</span></span>
          <span id="cb1-4"><Enlace href="#cb1-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">{"}"}</span></span>
          <span id="cb1-5"><Enlace href="#cb1-5" aria-hidden="true" tabindex="-1"></Enlace ></span>
          <span id="cb1-6"><Enlace href="#cb1-6" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Forma 2 (menos usada)</span></span>
          <span id="cb1-7"><Enlace href="#cb1-7" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">function</span><span className="fu"> mi_funcion2</span> <span className="kw">{"}"}</span></span>
          <span id="cb1-8"><Enlace href="#cb1-8" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">echo</span> <span className="st">&quot;Hola desde la función 2&quot;</span></span>
          <span id="cb1-9"><Enlace href="#cb1-9" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">{"}"}</span></span></code></pre>
      </div>
      <Texto><strong>Llamar una función:</strong></Texto>
      <div className="sourceCode" id="cb2">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb2-1"><Enlace href="#cb2-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">mi_funcion</span></span></code></pre>
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
      <div className="sourceCode" id="cb3">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb3-1"><Enlace href="#cb3-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">saludar()</span> <span className="kw">{"{"}</span></span>
            <span id="cb3-2"><Enlace href="#cb3-2" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">echo</span> <span className="st">&quot;Hola </span><span className="va">$1</span><span className="st"> </span><span className="va">$2</span><span className="st">&quot;</span></span>
            <span id="cb3-3"><Enlace href="#cb3-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">}</span></span>
            <span id="cb3-4"><Enlace href="#cb3-4" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb3-5"><Enlace href="#cb3-5" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">saludar</span> <span className="st">&quot;Francisco&quot;</span> <span className="st">&quot;Vélez&quot;</span></span>
            <span id="cb3-6"><Enlace href="#cb3-6" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># → Hola Francisco Vélez</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="devolver-valores">3. Devolver valores</Titulo>
      <Texto>En Bash, <code>return</code> solo devuelve <strong>códigos de salida
        (= éxito, ≠0 = error)</strong>. Para devolver datos reales se usa
        <code>echo</code> y <strong>captura de comandos</strong>:
      </Texto>
      <div className="sourceCode" id="cb4">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb4-1"><Enlace href="#cb4-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">sumar()</span> <span className="kw">{"{"}</span></span>
            <span id="cb4-2"><Enlace href="#cb4-2" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">echo</span> <span className="va">$((</span> <span className="va">$1</span> <span className="op">+</span> <span className="va">$2</span> <span className="va">))</span></span>
            <span id="cb4-3"><Enlace href="#cb4-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">{"}"}</span></span>
            <span id="cb4-4"><Enlace href="#cb4-4" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb4-5"><Enlace href="#cb4-5" aria-hidden="true" tabindex="-1"></Enlace ><span className="va">resultado</span><span className="op">=</span><span className="va">$(</span><span className="ex">sumar</span> 5 7<span className="va">)</span></span>
            <span id="cb4-6"><Enlace href="#cb4-6" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">echo</span> <span className="st">&quot;La suma es: </span><span className="va">$resultado</span><span className="st">&quot;</span></span>
            <span id="cb4-7"><Enlace href="#cb4-7" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># → La suma es: 12</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="variables-globales-y-locales">4. Variables Globales y
        Locales</Titulo>
      <Texto>Por defecto, todas las variables son <strong>globales</strong>. Para
        que existan solo dentro de la función, usa <code>local</code>.</Texto>
      <div className="sourceCode" id="cb5">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb5-1"><Enlace href="#cb5-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="va">mensaje</span><span className="op">=</span><span className="st">&quot;Hola mundo&quot;</span></span>
            <span id="cb5-2"><Enlace href="#cb5-2" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb5-3"><Enlace href="#cb5-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">cambiar()</span> <span className="kw">{"{"}</span></span>
            <span id="cb5-4"><Enlace href="#cb5-4" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">local</span> <span className="va">mensaje</span><span className="op">=</span><span className="st">&quot;Soy local&quot;</span></span>
            <span id="cb5-5"><Enlace href="#cb5-5" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">echo</span> <span className="st">&quot;Dentro: </span><span className="va">$mensaje</span><span className="st">&quot;</span></span>
            <span id="cb5-6"><Enlace href="#cb5-6" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">{"}"}</span></span>
            <span id="cb5-7"><Enlace href="#cb5-7" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb5-8"><Enlace href="#cb5-8" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">echo</span> <span className="st">&quot;Antes: </span><span className="va">$mensaje</span><span className="st">&quot;</span></span>
            <span id="cb5-9"><Enlace href="#cb5-9" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">cambiar</span></span>
            <span id="cb5-10"><Enlace href="#cb5-10" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">echo</span> <span className="st">&quot;Después: </span><span className="va">$mensaje</span><span className="st">&quot;</span></span></code></pre>
      </div>
      <Texto><strong>Diferencias clave:</strong></Texto>
      <table>
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
      <div className="sourceCode" id="cb6">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb6-1"><Enlace href="#cb6-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="co">#!/bin/bash</span></span>
            <span id="cb6-2"><Enlace href="#cb6-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">echo</span> <span className="st">&quot;Hola </span><span className="va">$1</span><span className="st">&quot;</span></span></code></pre>
      </div>
      <Texto>Ejecución:</Texto>
      <div className="sourceCode" id="cb7">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb7-1"><Enlace href="#cb7-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">bash</span> script.sh Francisco</span>
            <span id="cb7-2"><Enlace href="#cb7-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># → Hola Francisco</span></span></code></pre>
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
      <div className="sourceCode" id="cb8">
        <pre className="sourceCode bash"><code className="sourceCode bash"><span id="cb8-1"><Enlace href="#cb8-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">if</span> <span className="bu">[</span> <span className="va">$#</span> <span className="ot">-ne</span> 2 <span className="bu">]</span><span className="kw">;</span> <span className="cf">then</span></span>
          <span id="cb8-2"><Enlace href="#cb8-2" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">echo</span> <span className="st">&quot;Uso: </span><span className="va">$0</span><span className="st"> num1 num2&quot;</span></span>
          <span id="cb8-3"><Enlace href="#cb8-3" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">exit</span> 1</span>
          <span id="cb8-4"><Enlace href="#cb8-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">fi</span></span></code></pre>
      </div>
      <Texto><strong>Validar argumento vacío:</strong></Texto>
      <div className="sourceCode" id="cb9">
        <pre className="sourceCode bash"><code className="sourceCode bash"><span id="cb9-1"><Enlace href="#cb9-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">if</span> <span className="bu">[</span> <span className="ot">-z</span> <span className="st">&quot;</span><span className="va">$1</span><span className="st">&quot;</span> <span className="bu">]</span><span className="kw">;</span> <span className="cf">then</span></span>
          <span id="cb9-2"><Enlace href="#cb9-2" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">echo</span> <span className="st">&quot;Error: falta argumento&quot;</span></span>
          <span id="cb9-3"><Enlace href="#cb9-3" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">exit</span> 1</span>
          <span id="cb9-4"><Enlace href="#cb9-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">fi</span></span></code></pre>
      </div>
      <Texto><strong>Validar que sea un número:</strong></Texto>
      <div className="sourceCode" id="cb10">
        <pre className="sourceCode bash"><code className="sourceCode bash"><span id="cb10-1"><Enlace href="#cb10-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">if</span> <span className="ot">! </span><span className="kw">[[</span> <span className="st">&quot;</span><span className="va">$1</span><span className="st">&quot;</span> <span className="ot">=~</span> <span className="pp">^</span><span className="op">[</span><span className="ss">0</span><span className="op">-</span><span className="ss">9</span><span className="op">]</span><span className="pp">+</span><span className="op">$</span> <span className="kw">]];</span> <span className="cf">then</span></span>
          <span id="cb10-2"><Enlace href="#cb10-2" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">echo</span> <span className="st">&quot;Error: </span><span className="va">$1</span><span className="st"> no es un número&quot;</span></span>
          <span id="cb10-3"><Enlace href="#cb10-3" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">exit</span> 1</span>
          <span id="cb10-4"><Enlace href="#cb10-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">fi</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="recorrer-argumentos">7. Recorrer argumentos</Titulo>
      <Titulo title="h3" id="con-for">Con <code>for</code></Titulo>
      <div className="sourceCode" id="cb11">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb11-1"><Enlace href="#cb11-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">for</span> arg <span className="kw">in</span> <span className="st">&quot;</span><span className="va">$@</span><span className="st">&quot;</span><span className="kw">;</span> <span className="cf">do</span></span>
            <span id="cb11-2"><Enlace href="#cb11-2" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">echo</span> <span className="st">&quot;Argumento: </span><span className="va">$arg</span><span className="st">&quot;</span></span>
            <span id="cb11-3"><Enlace href="#cb11-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">done</span></span></code></pre>
      </div>
      <Titulo title="h3" id="con-shift">Con <code>shift</code></Titulo>
      <Texto><code>shift</code> elimina el primer argumento (<code>$1</code>) y
        mueve los demás a la izquierda.</Texto>
      <div className="sourceCode" id="cb12">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb12-1"><Enlace href="#cb12-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">while</span> <span className="bu">[</span> <span className="va">$#</span> <span className="ot">-gt</span> 0 <span className="bu">]</span><span className="kw">;</span> <span className="cf">do</span></span>
            <span id="cb12-2"><Enlace href="#cb12-2" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">echo</span> <span className="st">&quot;Actual: </span><span className="va">$1</span><span className="st">&quot;</span></span>
            <span id="cb12-3"><Enlace href="#cb12-3" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">shift</span></span>
            <span id="cb12-4"><Enlace href="#cb12-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">done</span></span></code></pre>
      </div>
      <Texto><code>shift 2</code> eliminaría los dos primeros argumentos de
        golpe.</Texto>
      <Linea />
      <Titulo title="h2" id="ejemplo-práctico-mini-calculadora">8. Ejemplo práctico: mini
        calculadora</Titulo>
      <div className="sourceCode" id="cb13">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb13-1"><Enlace href="#cb13-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="co">#!/bin/bash</span></span>
            <span id="cb13-2"><Enlace href="#cb13-2" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb13-3"><Enlace href="#cb13-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">sumar()</span> <span className="kw">{"{"}</span> <span className="bu">echo</span> <span className="va">$((</span> <span className="va">$1</span> <span className="op">+</span> <span className="va">$2</span> <span className="va">))</span><span className="kw">;</span> <span className="kw">{"}"}</span></span>
            <span id="cb13-4"><Enlace href="#cb13-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">restar()</span> <span className="kw">{"{"}</span> <span className="bu">echo</span> <span className="va">$((</span> <span className="va">$1</span> <span className="op">-</span> <span className="va">$2</span> <span className="va">))</span><span className="kw">;</span> <span className="kw">{"}"}</span></span>
            <span id="cb13-5"><Enlace href="#cb13-5" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb13-6"><Enlace href="#cb13-6" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">if</span> <span className="bu">[</span> <span className="va">$#</span> <span className="ot">-lt</span> 3 <span className="bu">]</span><span className="kw">;</span> <span className="cf">then</span></span>
            <span id="cb13-7"><Enlace href="#cb13-7" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">echo</span> <span className="st">&quot;Uso: </span><span className="va">$0</span><span className="st"> [suma|resta] num1 num2&quot;</span></span>
            <span id="cb13-8"><Enlace href="#cb13-8" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">exit</span> 1</span>
            <span id="cb13-9"><Enlace href="#cb13-9" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">fi</span></span>
            <span id="cb13-10"><Enlace href="#cb13-10" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb13-11"><Enlace href="#cb13-11" aria-hidden="true" tabindex="-1"></Enlace ><span className="va">op</span><span className="op">=</span><span className="va">$1</span></span>
            <span id="cb13-12"><Enlace href="#cb13-12" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">shift</span></span>
            <span id="cb13-13"><Enlace href="#cb13-13" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb13-14"><Enlace href="#cb13-14" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">case</span> <span className="va">$op</span> <span className="kw">in</span></span>
            <span id="cb13-15"><Enlace href="#cb13-15" aria-hidden="true" tabindex="-1"></Enlace >  <span className="ss">suma</span><span className="kw">)</span>  <span className="bu">echo</span> <span className="st">&quot;Resultado: </span><span className="va">$(</span><span className="ex">sumar</span> <span className="va">$1</span> <span className="va">$2)</span><span className="st">&quot;</span> <span className="cf">;;</span></span>
            <span id="cb13-16"><Enlace href="#cb13-16" aria-hidden="true" tabindex="-1"></Enlace >  <span className="ss">resta</span><span className="kw">)</span> <span className="bu">echo</span> <span className="st">&quot;Resultado: </span><span className="va">$(</span><span className="ex">restar</span> <span className="va">$1</span> <span className="va">$2)</span><span className="st">&quot;</span> <span className="cf">;;</span></span>
            <span id="cb13-17"><Enlace href="#cb13-17" aria-hidden="true" tabindex="-1"></Enlace >  <span className="pp">*</span><span className="kw">)</span>     <span className="bu">echo</span> <span className="st">&quot;Operación inválida&quot;</span> <span className="cf">;;</span></span>
            <span id="cb13-18"><Enlace href="#cb13-18" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">esac</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="en-resumen">En resumen</Titulo>
      <table>
        <thead>
          <tr>
            <th>Concepto</th>
            <th>Clave</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Definir función</td>
            <td><code>{"nombre() {... }"}</code></td>
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
      <Texto><Enlace href="./../readme.md#2-linux-y-bash-script">Regresar a la guía
        principal</Enlace ></Texto>
      <blockquote>
        <Texto><strong>Autor:</strong> Fravelz</Texto>
      </blockquote>
    </>
  );
}
export default nameabcd;
