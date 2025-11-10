import { TemarioCompleto } from "../../../componentes/estructura.jsx";

import Titulo from "./../../../componentes/titulo.jsx";
import Lista from "./../../../componentes/lista.jsx";
import Texto from "./../../../componentes/texto.jsx";
import Enlace from "./../../../componentes/enlace.jsx";
import Linea from "./../../../componentes/linea.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#bucle-for">Bucle <code>for</code></Enlace ></li>
      <li><Enlace href="#bucle-while">Bucle <code>while</code></Enlace ></li>
      <li><Enlace href="#bucle-until">Bucle <code>until</code></Enlace ></li>
      <li><Enlace href="#comandos-continue-y-break">Comandos <code>continue</code>
        y <code>break</code></Enlace ></li>
      <li><Enlace href="#estructura-case">Estructura <code>case</code></Enlace ></li>
    </Lista>
  );
}

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

      <TemarioCompleto temario={Temario}/>

      <Texto><Enlace href="./../readme.md#2-linux-y-bash-script">Regresar a la guía
        principal</Enlace ></Texto>
      <Linea />
      <Titulo title="h2" id="bucle-for">Bucle <code>for</code></Titulo>
      <Texto>El bucle <code>for</code> permite ejecutar una serie de comandos
        repetidamente para una lista de valores o rangos numéricos.</Texto>
      <Texto><strong>Ejemplo 1: Lista de elementos:</strong></Texto>
      <div className="sourceCode" id="cb1">
        <pre className="sourceCode bash"><code className="sourceCode bash"><span id="cb1-1"><Enlace href="#cb1-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">for</span> fruta <span className="kw">in</span> manzana mango pera<span className="kw">;</span> <span className="cf">do</span></span>
          <span id="cb1-2"><Enlace href="#cb1-2" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">echo</span> <span className="st">&quot;Me gusta la </span><span className="va">$fruta</span><span className="st">&quot;</span></span>
          <span id="cb1-3"><Enlace href="#cb1-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">done</span></span></code></pre>
      </div>
      <blockquote>
        <Texto>Recorre una lista de palabras (en este caso, frutas) y ejecuta el
          bloque <code>do ... done</code> para cada elemento.</Texto>
      </blockquote>
      <Texto><strong>Ejemplo 2: Rango de números:</strong></Texto>
      <div className="sourceCode" id="cb2">
        <pre className="sourceCode bash"><code className="sourceCode bash"><span id="cb2-1"><Enlace href="#cb2-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">for</span> i <span className="kw">in</span> <span className="dt">{"{"}</span><span className="dv">1</span><span className="dt">..</span><span className="dv">3</span><span className="dt">{"}"}</span><span className="kw">;</span> <span className="cf">do</span> </span>
          <span id="cb2-2"><Enlace href="#cb2-2" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">echo</span> <span className="st">&quot;Contando: </span><span className="va">$i</span><span className="st">&quot;</span></span>
          <span id="cb2-3"><Enlace href="#cb2-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">done</span></span></code></pre>
      </div>
      <blockquote>
        <Texto><code>{"{1..3}"}</code> genera una secuencia del 1 al 3.</Texto>
      </blockquote>
      <Texto><strong>Ejemplo 3: Sintaxis estilo C</strong></Texto>
      <div className="sourceCode" id="cb3">
        <pre className="sourceCode bash"><code className="sourceCode bash"><span id="cb3-1"><Enlace href="#cb3-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">for</span> <span className="kw">((</span> <span className="va">j</span><span className="op">=</span><span className="dv">10</span><span className="kw">;</span> <span className="va">j</span><span className="op">&gt;=</span><span className="dv">5</span><span className="kw">;</span> <span className="va">j</span><span className="op">--</span> <span className="kw">))</span> <span className="cf">do</span> </span>
          <span id="cb3-2"><Enlace href="#cb3-2" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">echo</span> <span className="st">&quot;Cuenta regresiva: </span><span className="va">$j</span><span className="st">&quot;</span></span>
          <span id="cb3-3"><Enlace href="#cb3-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">done</span></span></code></pre>
      </div>
      <blockquote>
        <Texto>Esta forma usa la sintaxis tradicional tipo C:</Texto>
        <div className="sourceCode" id="cb4">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb4-1"><Enlace href="#cb4-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">for</span> <span className="kw">((</span> <span className="va">inicializaci</span>ó<span className="va">n</span><span className="kw">;</span> <span className="va">condici</span>ó<span className="va">n</span><span className="kw">;</span> <span className="va">incremento</span> <span className="kw">))</span></span></code></pre>
        </div>
      </blockquote>
      <Linea />
      <Titulo title="h2" id="bucle-while">Bucle <code>while</code></Titulo>
      <Texto>Ejecuta un bloque de código <strong>mientras una condición sea
        verdadera</strong>.</Texto>
      <div className="sourceCode" id="cb5">
        <pre className="sourceCode bash"><code className="sourceCode bash"><span id="cb5-1"><Enlace href="#cb5-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="va">i</span><span className="op">=</span>0</span>
          <span id="cb5-2"><Enlace href="#cb5-2" aria-hidden="true" tabindex="-1"></Enlace ></span>
          <span id="cb5-3"><Enlace href="#cb5-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">while</span> <span className="kw">[[</span> <span className="va">$i</span> <span className="ot">-lt</span> 3 <span className="kw">]]</span> <span className="cf">do</span> </span>
          <span id="cb5-4"><Enlace href="#cb5-4" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">echo</span> <span className="st">&quot;i = </span><span className="va">$i</span><span className="st">&quot;</span></span>
          <span id="cb5-5"><Enlace href="#cb5-5" aria-hidden="true" tabindex="-1"></Enlace >    <span className="kw">((</span><span className="va">i</span><span className="op">++</span><span className="kw">))</span></span>
          <span id="cb5-6"><Enlace href="#cb5-6" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">done</span></span></code></pre>
      </div>
      <blockquote>
        <Texto>En este ejemplo, el bucle incrementa <code>i</code> desde 0 hasta que
          ya no sea menor que 3.</Texto>
      </blockquote>
      <Texto><strong>Leer líneas desde un archivo:</strong></Texto>
      <Texto>Puedes usar <code>while</code> junto con <code>read</code> para leer
        archivos línea por línea.</Texto>
      <div className="sourceCode" id="cb6">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb6-1"><Enlace href="#cb6-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">while</span> <span className="bu">read</span> <span className="va">line</span><span className="kw">;</span> <span className="cf">do</span> </span>
            <span id="cb6-2"><Enlace href="#cb6-2" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">echo</span> <span className="st">&quot;- </span><span className="va">$line</span><span className="st">&quot;</span></span>
            <span id="cb6-3"><Enlace href="#cb6-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">done</span> <span className="op">&lt;</span> archivo.txt</span></code></pre>
      </div>
      <blockquote>
        <Texto>Esto imprimirá cada línea del archivo precedida por un guion.</Texto>
      </blockquote>
      <Linea />
      <Titulo title="h2" id="bucle-until">Bucle <code>until</code></Titulo>
      <Texto>El bucle <code>until</code> funciona igual que <code>while</code>,
        pero <strong>se ejecuta mientras la condición sea falsa</strong>.</Texto>
      <div className="sourceCode" id="cb7">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb7-1"><Enlace href="#cb7-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="va">contador</span><span className="op">=</span>1</span>
            <span id="cb7-2"><Enlace href="#cb7-2" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb7-3"><Enlace href="#cb7-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">until</span> <span className="kw">[[</span> <span className="va">$contador</span> <span className="ot">-gt</span> 5 <span className="kw">]];</span> <span className="cf">do</span></span>
            <span id="cb7-4"><Enlace href="#cb7-4" aria-hidden="true" tabindex="-1"></Enlace >  <span className="bu">echo</span> <span className="st">&quot;Contando: </span><span className="va">$contador</span><span className="st">&quot;</span></span>
            <span id="cb7-5"><Enlace href="#cb7-5" aria-hidden="true" tabindex="-1"></Enlace >  <span className="kw">((</span><span className="va">contador</span><span className="op">++</span><span className="kw">))</span></span>
            <span id="cb7-6"><Enlace href="#cb7-6" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">done</span></span>
            <span id="cb7-7"><Enlace href="#cb7-7" aria-hidden="true" tabindex="-1"></Enlace ><span className="st">&#39;</span></span></code></pre>
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
      <div className="sourceCode" id="cb8">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb8-1"><Enlace href="#cb8-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="va">contador</span><span className="op">=</span>0</span>
            <span id="cb8-2"><Enlace href="#cb8-2" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb8-3"><Enlace href="#cb8-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">while</span> <span className="fu">true</span><span className="kw">;</span> <span className="cf">do</span></span>
            <span id="cb8-4"><Enlace href="#cb8-4" aria-hidden="true" tabindex="-1"></Enlace >  <span className="kw">((</span><span className="va">contador</span><span className="op">++</span><span className="kw">))</span></span>
            <span id="cb8-5"><Enlace href="#cb8-5" aria-hidden="true" tabindex="-1"></Enlace >  </span>
            <span id="cb8-6"><Enlace href="#cb8-6" aria-hidden="true" tabindex="-1"></Enlace >  <span className="co"># Si el contador es 3, saltar esta vuelta</span></span>
            <span id="cb8-7"><Enlace href="#cb8-7" aria-hidden="true" tabindex="-1"></Enlace >  <span className="cf">if</span> <span className="kw">[[</span> <span className="va">$contador</span> <span className="ot">-eq</span> 3 <span className="kw">]];</span> <span className="cf">then</span></span>
            <span id="cb8-8"><Enlace href="#cb8-8" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">echo</span> <span className="st">&quot;Saltando el número 3...&quot;</span></span>
            <span id="cb8-9"><Enlace href="#cb8-9" aria-hidden="true" tabindex="-1"></Enlace >    <span className="cf">continue</span></span>
            <span id="cb8-10"><Enlace href="#cb8-10" aria-hidden="true" tabindex="-1"></Enlace >  <span className="cf">fi</span></span>
            <span id="cb8-11"><Enlace href="#cb8-11" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb8-12"><Enlace href="#cb8-12" aria-hidden="true" tabindex="-1"></Enlace >  <span className="bu">echo</span> <span className="st">&quot;Número: </span><span className="va">$contador</span><span className="st">&quot;</span></span>
            <span id="cb8-13"><Enlace href="#cb8-13" aria-hidden="true" tabindex="-1"></Enlace >  </span>
            <span id="cb8-14"><Enlace href="#cb8-14" aria-hidden="true" tabindex="-1"></Enlace >  <span className="co"># Si el contador llega a 5, terminar el bucle</span></span>
            <span id="cb8-15"><Enlace href="#cb8-15" aria-hidden="true" tabindex="-1"></Enlace >  <span className="cf">if</span> <span className="kw">[[</span> <span className="va">$contador</span> <span className="ot">-eq</span> 5 <span className="kw">]];</span> <span className="cf">then</span></span>
            <span id="cb8-16"><Enlace href="#cb8-16" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">echo</span> <span className="st">&quot;Se alcanzó el 5. Saliendo...&quot;</span></span>
            <span id="cb8-17"><Enlace href="#cb8-17" aria-hidden="true" tabindex="-1"></Enlace >    <span className="cf">break</span></span>
            <span id="cb8-18"><Enlace href="#cb8-18" aria-hidden="true" tabindex="-1"></Enlace >  <span className="cf">fi</span></span>
            <span id="cb8-19"><Enlace href="#cb8-19" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">done</span></span></code></pre>
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
      <div className="sourceCode" id="cb9">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb9-1"><Enlace href="#cb9-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="va">num</span><span className="op">=</span>10</span>
            <span id="cb9-2"><Enlace href="#cb9-2" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb9-3"><Enlace href="#cb9-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">case</span> <span className="va">$num</span> <span className="kw">in</span> </span>
            <span id="cb9-4"><Enlace href="#cb9-4" aria-hidden="true" tabindex="-1"></Enlace >    <span className="ss">1</span><span className="kw">)</span></span>
            <span id="cb9-5"><Enlace href="#cb9-5" aria-hidden="true" tabindex="-1"></Enlace >        <span className="bu">echo</span> <span className="st">&quot;Elegiste uno&quot;</span></span>
            <span id="cb9-6"><Enlace href="#cb9-6" aria-hidden="true" tabindex="-1"></Enlace >        <span className="cf">;;</span></span>
            <span id="cb9-7"><Enlace href="#cb9-7" aria-hidden="true" tabindex="-1"></Enlace >    <span className="ss">2</span><span className="kw">)</span></span>
            <span id="cb9-8"><Enlace href="#cb9-8" aria-hidden="true" tabindex="-1"></Enlace >        <span className="bu">echo</span> <span className="st">&quot;Elegiste dos&quot;</span></span>
            <span id="cb9-9"><Enlace href="#cb9-9" aria-hidden="true" tabindex="-1"></Enlace >        <span className="cf">;;</span></span>
            <span id="cb9-10"><Enlace href="#cb9-10" aria-hidden="true" tabindex="-1"></Enlace >    <span className="pp">*</span><span className="kw">)</span></span>
            <span id="cb9-11"><Enlace href="#cb9-11" aria-hidden="true" tabindex="-1"></Enlace >        <span className="bu">echo</span> <span className="st">&quot;Numero desconocido :v&quot;</span></span>
            <span id="cb9-12"><Enlace href="#cb9-12" aria-hidden="true" tabindex="-1"></Enlace >        <span className="cf">;;</span></span>
            <span id="cb9-13"><Enlace href="#cb9-13" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">esac</span></span></code></pre>
      </div>
      <blockquote>
        <Texto>Cada bloque se cierra con <code>;;</code> y el comodín <code>*</code>
          actúa como <strong>caso por defecto</strong>.</Texto>
      </blockquote>
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
