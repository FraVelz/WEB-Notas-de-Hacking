import Titulo from "./../../componentes/titulo.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Linea from "./../../componentes/linea.jsx";

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="estructuras-de-control-en-bash-script">Estructuras de Control en
        Bash Script</Titulo>
      <Texto>Este documento explica cómo usar <strong>bucles</strong>,
        <strong>estructuras de control</strong> y el comando
        <strong>case</strong> en Bash.<br />
        Incluye ejemplos prácticos y comentarios explicativos.
      </Texto>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><a href="#estructuras-de-control-en-bash-script">Estructuras de
          Control en Bash Script</a>
          <Lista>
            <li><a href="#temario">Temario</a></li>
            <li><a href="#bucle-for">Bucle <code>for</code></a></li>
            <li><a href="#bucle-while">Bucle <code>while</code></a></li>
            <li><a href="#bucle-until">Bucle <code>until</code></a></li>
            <li><a href="#comandos-continue-y-break">Comandos <code>continue</code>
              y <code>break</code></a></li>
            <li><a href="#estructura-case">Estructura <code>case</code></a></li>
          </Lista>
        </li>
      </Lista>
      <Texto><a href="./../readme.md#2-linux-y-bash-script">Regresar a la guía
        principal</a></Texto>
      <Linea />
      <Titulo title="h2" id="bucle-for">Bucle <code>for</code></Titulo>
      <Texto>El bucle <code>for</code> permite ejecutar una serie de comandos
        repetidamente para una lista de valores o rangos numéricos.</Texto>
      <Texto><strong>Ejemplo 1: Lista de elementos:</strong></Texto>
      <div class="sourceCode" id="cb1">
        <pre class="sourceCode bash"><code class="sourceCode bash"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="cf">for</span> fruta <span class="kw">in</span> manzana mango pera<span class="kw">;</span> <span class="cf">do</span></span>
          <span id="cb1-2"><a href="#cb1-2" aria-hidden="true" tabindex="-1"></a>    <span class="bu">echo</span> <span class="st">&quot;Me gusta la </span><span class="va">$fruta</span><span class="st">&quot;</span></span>
          <span id="cb1-3"><a href="#cb1-3" aria-hidden="true" tabindex="-1"></a><span class="cf">done</span></span></code></pre>
      </div>
      <blockquote>
        <Texto>Recorre una lista de palabras (en este caso, frutas) y ejecuta el
          bloque <code>do ... done</code> para cada elemento.</Texto>
      </blockquote>
      <Texto><strong>Ejemplo 2: Rango de números:</strong></Texto>
      <div class="sourceCode" id="cb2">
        <pre class="sourceCode bash"><code class="sourceCode bash"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="cf">for</span> i <span class="kw">in</span> <span class="dt">{</span><span class="dv">1</span><span class="dt">..</span><span class="dv">3</span><span class="dt">}</span><span class="kw">;</span> <span class="cf">do</span> </span>
          <span id="cb2-2"><a href="#cb2-2" aria-hidden="true" tabindex="-1"></a>    <span class="bu">echo</span> <span class="st">&quot;Contando: </span><span class="va">$i</span><span class="st">&quot;</span></span>
          <span id="cb2-3"><a href="#cb2-3" aria-hidden="true" tabindex="-1"></a><span class="cf">done</span></span></code></pre>
      </div>
      <blockquote>
        <Texto><code>{1..3}</code> genera una secuencia del 1 al 3.</Texto>
      </blockquote>
      <Texto><strong>Ejemplo 3: Sintaxis estilo C</strong></Texto>
      <div class="sourceCode" id="cb3">
        <pre class="sourceCode bash"><code class="sourceCode bash"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a><span class="cf">for</span> <span class="kw">((</span> <span class="va">j</span><span class="op">=</span><span class="dv">10</span><span class="kw">;</span> <span class="va">j</span><span class="op">&gt;=</span><span class="dv">5</span><span class="kw">;</span> <span class="va">j</span><span class="op">--</span> <span class="kw">))</span> <span class="cf">do</span> </span>
          <span id="cb3-2"><a href="#cb3-2" aria-hidden="true" tabindex="-1"></a>    <span class="bu">echo</span> <span class="st">&quot;Cuenta regresiva: </span><span class="va">$j</span><span class="st">&quot;</span></span>
          <span id="cb3-3"><a href="#cb3-3" aria-hidden="true" tabindex="-1"></a><span class="cf">done</span></span></code></pre>
      </div>
      <blockquote>
        <Texto>Esta forma usa la sintaxis tradicional tipo C:</Texto>
        <div class="sourceCode" id="cb4">
          <pre
            class="sourceCode bash"><code class="sourceCode bash"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a><span class="cf">for</span> <span class="kw">((</span> <span class="va">inicializaci</span>ó<span class="va">n</span><span class="kw">;</span> <span class="va">condici</span>ó<span class="va">n</span><span class="kw">;</span> <span class="va">incremento</span> <span class="kw">))</span></span></code></pre>
        </div>
      </blockquote>
      <Linea />
      <Titulo title="h2" id="bucle-while">Bucle <code>while</code></Titulo>
      <Texto>Ejecuta un bloque de código <strong>mientras una condición sea
        verdadera</strong>.</Texto>
      <div class="sourceCode" id="cb5">
        <pre class="sourceCode bash"><code class="sourceCode bash"><span id="cb5-1"><a href="#cb5-1" aria-hidden="true" tabindex="-1"></a><span class="va">i</span><span class="op">=</span>0</span>
          <span id="cb5-2"><a href="#cb5-2" aria-hidden="true" tabindex="-1"></a></span>
          <span id="cb5-3"><a href="#cb5-3" aria-hidden="true" tabindex="-1"></a><span class="cf">while</span> <span class="kw">[[</span> <span class="va">$i</span> <span class="ot">-lt</span> 3 <span class="kw">]]</span> <span class="cf">do</span> </span>
          <span id="cb5-4"><a href="#cb5-4" aria-hidden="true" tabindex="-1"></a>    <span class="bu">echo</span> <span class="st">&quot;i = </span><span class="va">$i</span><span class="st">&quot;</span></span>
          <span id="cb5-5"><a href="#cb5-5" aria-hidden="true" tabindex="-1"></a>    <span class="kw">((</span><span class="va">i</span><span class="op">++</span><span class="kw">))</span></span>
          <span id="cb5-6"><a href="#cb5-6" aria-hidden="true" tabindex="-1"></a><span class="cf">done</span></span></code></pre>
      </div>
      <blockquote>
        <Texto>En este ejemplo, el bucle incrementa <code>i</code> desde 0 hasta que
          ya no sea menor que 3.</Texto>
      </blockquote>
      <Texto><strong>Leer líneas desde un archivo:</strong></Texto>
      <Texto>Puedes usar <code>while</code> junto con <code>read</code> para leer
        archivos línea por línea.</Texto>
      <div class="sourceCode" id="cb6">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a><span class="cf">while</span> <span class="bu">read</span> <span class="va">line</span><span class="kw">;</span> <span class="cf">do</span> </span>
            <span id="cb6-2"><a href="#cb6-2" aria-hidden="true" tabindex="-1"></a>    <span class="bu">echo</span> <span class="st">&quot;- </span><span class="va">$line</span><span class="st">&quot;</span></span>
            <span id="cb6-3"><a href="#cb6-3" aria-hidden="true" tabindex="-1"></a><span class="cf">done</span> <span class="op">&lt;</span> archivo.txt</span></code></pre>
      </div>
      <blockquote>
        <Texto>Esto imprimirá cada línea del archivo precedida por un guion.</Texto>
      </blockquote>
      <Linea />
      <Titulo title="h2" id="bucle-until">Bucle <code>until</code></Titulo>
      <Texto>El bucle <code>until</code> funciona igual que <code>while</code>,
        pero <strong>se ejecuta mientras la condición sea falsa</strong>.</Texto>
      <div class="sourceCode" id="cb7">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb7-1"><a href="#cb7-1" aria-hidden="true" tabindex="-1"></a><span class="va">contador</span><span class="op">=</span>1</span>
            <span id="cb7-2"><a href="#cb7-2" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb7-3"><a href="#cb7-3" aria-hidden="true" tabindex="-1"></a><span class="cf">until</span> <span class="kw">[[</span> <span class="va">$contador</span> <span class="ot">-gt</span> 5 <span class="kw">]];</span> <span class="cf">do</span></span>
            <span id="cb7-4"><a href="#cb7-4" aria-hidden="true" tabindex="-1"></a>  <span class="bu">echo</span> <span class="st">&quot;Contando: </span><span class="va">$contador</span><span class="st">&quot;</span></span>
            <span id="cb7-5"><a href="#cb7-5" aria-hidden="true" tabindex="-1"></a>  <span class="kw">((</span><span class="va">contador</span><span class="op">++</span><span class="kw">))</span></span>
            <span id="cb7-6"><a href="#cb7-6" aria-hidden="true" tabindex="-1"></a><span class="cf">done</span></span>
            <span id="cb7-7"><a href="#cb7-7" aria-hidden="true" tabindex="-1"></a><span class="st">&#39;</span></span></code></pre>
      </div>
      <blockquote>
        <Texto>En este ejemplo, el bucle incrementa <code>i</code> desde 1 hasta
          5.</Texto>
      </blockquote>
      <Linea />
      <Titulo title="h2" id="comandos-continue-y-break">Comandos <code>continue</code> y
        <code>break</code>
      </Titulo>
      <Texto>Los comandos <code>continue</code> y <code>break</code> sirven para
        <strong>controlar el flujo dentro de los bucles</strong>.
      </Texto>
      <div class="sourceCode" id="cb8">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb8-1"><a href="#cb8-1" aria-hidden="true" tabindex="-1"></a><span class="va">contador</span><span class="op">=</span>0</span>
            <span id="cb8-2"><a href="#cb8-2" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb8-3"><a href="#cb8-3" aria-hidden="true" tabindex="-1"></a><span class="cf">while</span> <span class="fu">true</span><span class="kw">;</span> <span class="cf">do</span></span>
            <span id="cb8-4"><a href="#cb8-4" aria-hidden="true" tabindex="-1"></a>  <span class="kw">((</span><span class="va">contador</span><span class="op">++</span><span class="kw">))</span></span>
            <span id="cb8-5"><a href="#cb8-5" aria-hidden="true" tabindex="-1"></a>  </span>
            <span id="cb8-6"><a href="#cb8-6" aria-hidden="true" tabindex="-1"></a>  <span class="co"># Si el contador es 3, saltar esta vuelta</span></span>
            <span id="cb8-7"><a href="#cb8-7" aria-hidden="true" tabindex="-1"></a>  <span class="cf">if</span> <span class="kw">[[</span> <span class="va">$contador</span> <span class="ot">-eq</span> 3 <span class="kw">]];</span> <span class="cf">then</span></span>
            <span id="cb8-8"><a href="#cb8-8" aria-hidden="true" tabindex="-1"></a>    <span class="bu">echo</span> <span class="st">&quot;Saltando el número 3...&quot;</span></span>
            <span id="cb8-9"><a href="#cb8-9" aria-hidden="true" tabindex="-1"></a>    <span class="cf">continue</span></span>
            <span id="cb8-10"><a href="#cb8-10" aria-hidden="true" tabindex="-1"></a>  <span class="cf">fi</span></span>
            <span id="cb8-11"><a href="#cb8-11" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb8-12"><a href="#cb8-12" aria-hidden="true" tabindex="-1"></a>  <span class="bu">echo</span> <span class="st">&quot;Número: </span><span class="va">$contador</span><span class="st">&quot;</span></span>
            <span id="cb8-13"><a href="#cb8-13" aria-hidden="true" tabindex="-1"></a>  </span>
            <span id="cb8-14"><a href="#cb8-14" aria-hidden="true" tabindex="-1"></a>  <span class="co"># Si el contador llega a 5, terminar el bucle</span></span>
            <span id="cb8-15"><a href="#cb8-15" aria-hidden="true" tabindex="-1"></a>  <span class="cf">if</span> <span class="kw">[[</span> <span class="va">$contador</span> <span class="ot">-eq</span> 5 <span class="kw">]];</span> <span class="cf">then</span></span>
            <span id="cb8-16"><a href="#cb8-16" aria-hidden="true" tabindex="-1"></a>    <span class="bu">echo</span> <span class="st">&quot;Se alcanzó el 5. Saliendo...&quot;</span></span>
            <span id="cb8-17"><a href="#cb8-17" aria-hidden="true" tabindex="-1"></a>    <span class="cf">break</span></span>
            <span id="cb8-18"><a href="#cb8-18" aria-hidden="true" tabindex="-1"></a>  <span class="cf">fi</span></span>
            <span id="cb8-19"><a href="#cb8-19" aria-hidden="true" tabindex="-1"></a><span class="cf">done</span></span></code></pre>
      </div>
      <blockquote>
        <Texto><code>break n</code> rompe <code>n</code> niveles de bucles
          anidados.<br />
          <code>continue</code> salta directamente a la siguiente iteración.
        </Texto>
      </blockquote>
      <Linea />
      <Titulo title="h2" id="estructura-case">Estructura <code>case</code></Titulo>
      <Texto>La estructura <code>case</code> permite comparar una variable con
        múltiples patrones, similar al <code>switch</code> en otros
        lenguajes.</Texto>
      <div class="sourceCode" id="cb9">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb9-1"><a href="#cb9-1" aria-hidden="true" tabindex="-1"></a><span class="va">num</span><span class="op">=</span>10</span>
            <span id="cb9-2"><a href="#cb9-2" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb9-3"><a href="#cb9-3" aria-hidden="true" tabindex="-1"></a><span class="cf">case</span> <span class="va">$num</span> <span class="kw">in</span> </span>
            <span id="cb9-4"><a href="#cb9-4" aria-hidden="true" tabindex="-1"></a>    <span class="ss">1</span><span class="kw">)</span></span>
            <span id="cb9-5"><a href="#cb9-5" aria-hidden="true" tabindex="-1"></a>        <span class="bu">echo</span> <span class="st">&quot;Elegiste uno&quot;</span></span>
            <span id="cb9-6"><a href="#cb9-6" aria-hidden="true" tabindex="-1"></a>        <span class="cf">;;</span></span>
            <span id="cb9-7"><a href="#cb9-7" aria-hidden="true" tabindex="-1"></a>    <span class="ss">2</span><span class="kw">)</span></span>
            <span id="cb9-8"><a href="#cb9-8" aria-hidden="true" tabindex="-1"></a>        <span class="bu">echo</span> <span class="st">&quot;Elegiste dos&quot;</span></span>
            <span id="cb9-9"><a href="#cb9-9" aria-hidden="true" tabindex="-1"></a>        <span class="cf">;;</span></span>
            <span id="cb9-10"><a href="#cb9-10" aria-hidden="true" tabindex="-1"></a>    <span class="pp">*</span><span class="kw">)</span></span>
            <span id="cb9-11"><a href="#cb9-11" aria-hidden="true" tabindex="-1"></a>        <span class="bu">echo</span> <span class="st">&quot;Numero desconocido :v&quot;</span></span>
            <span id="cb9-12"><a href="#cb9-12" aria-hidden="true" tabindex="-1"></a>        <span class="cf">;;</span></span>
            <span id="cb9-13"><a href="#cb9-13" aria-hidden="true" tabindex="-1"></a><span class="cf">esac</span></span></code></pre>
      </div>
      <blockquote>
        <Texto>Cada bloque se cierra con <code>;;</code> y el comodín <code>*</code>
          actúa como <strong>caso por defecto</strong>.</Texto>
      </blockquote>
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
