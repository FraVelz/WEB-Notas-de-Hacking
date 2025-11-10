import Estructura, { TemarioCompleto, TemarioAsideCompleto } from "./../../../componentes/estructura.jsx";

import Titulo from "./../../../componentes/titulo.jsx";
import Lista from "./../../../componentes/lista.jsx";
import Texto from "./../../../componentes/texto.jsx";
import Linea from "./../../../componentes/linea.jsx";
import Enlace from "./../../../componentes/enlace.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#booleanos-en-bash">Booleanos en Bash</Enlace ></li>
      <li><Enlace href="#operadores-condicionales">Operadores Condicionales</Enlace >
        <Lista>
          <li><Enlace href="#para-números">Para números</Enlace ></li>
          <li><Enlace href="#para-cadenas-de-texto">Para cadenas de texto</Enlace ></li>
        </Lista>
      </li>
      <li><Enlace href="#estructura-if---elif---else">Estructura
        <code>if - elif - else</code></Enlace ></li>
      <li><Enlace href="#condiciones-compuestas--">Condiciones compuestas
        (<code>&amp;&amp;</code>, <code>||</code>)</Enlace ></li>
      <li><Enlace href="#formas-de-escribir-condiciones">Formas de escribir
        condiciones</Enlace ></li>
    </Lista>
  );
}

function nameabcd({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" id="condiciones-en-bash-script">Condiciones en Bash Script</Titulo>

        <Linea />

        <TemarioCompleto temario={Temario} />

        <Titulo title="h2" id="booleanos-en-bash">Booleanos en Bash</Titulo>

        <Texto>En Bash <strong>no existen valores booleanos nativos</strong>, pero
          sí existen <strong>comandos que devuelven verdadero o
            falso</strong>:</Texto>
        <div className="sourceCode" id="cb1">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb1-1"><Enlace href="#cb1-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">true</span>   <span className="co"># Devuelve 0 (verdadero)</span></span>
              <span id="cb1-2"><Enlace href="#cb1-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">false</span>  <span className="co"># Devuelve 1 (falso)</span></span></code></pre>
        </div>
        <blockquote>
          <Texto>En Bash, un <strong>0 significa verdadero</strong> y un
            <strong>número distinto de 0 (generalmente 1)</strong> significa
            falso.
          </Texto>
        </blockquote>
        <Linea />
        <Titulo title="h2" id="operadores-condicionales">Operadores Condicionales</Titulo>
        <Texto>Los operadores se usan para comparar <strong>números</strong> o
          <strong>cadenas de texto</strong>.
        </Texto>
        <Titulo title="h3" id="para-números">Para números</Titulo>
        <table>
          <thead>
            <tr>
              <th>Operador</th>
              <th>Significado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>-eq</code></td>
              <td>Igual que</td>
            </tr>
            <tr>
              <td><code>-ne</code></td>
              <td>Distinto que</td>
            </tr>
            <tr>
              <td><code>-lt</code></td>
              <td>Menor que</td>
            </tr>
            <tr>
              <td><code>-le</code></td>
              <td>Menor o igual que</td>
            </tr>
            <tr>
              <td><code>-gt</code></td>
              <td>Mayor que</td>
            </tr>
            <tr>
              <td><code>-ge</code></td>
              <td>Mayor o igual que</td>
            </tr>
          </tbody>
        </table>
        <Titulo title="h3" id="para-cadenas-de-texto">Para cadenas de texto</Titulo>
        <table>
          <thead>
            <tr>
              <th>Operador</th>
              <th>Significado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>=</code></td>
              <td>Igual</td>
            </tr>
            <tr>
              <td><code>!=</code></td>
              <td>Diferente</td>
            </tr>
            <tr>
              <td><code>&lt;</code></td>
              <td>Menor lexicográficamente</td>
            </tr>
            <tr>
              <td><code>&gt;</code></td>
              <td>Mayor lexicográficamente</td>
            </tr>
          </tbody>
        </table>
        <Linea />
        <Titulo title="h2" id="estructura-if---elif---else">Estructura
          <code>if - elif - else</code>
        </Titulo>
        <Texto>Ejemplo de uso básico:</Texto>
        <div className="sourceCode" id="cb2">
          <pre className="sourceCode bash"><code className="sourceCode bash"><span id="cb2-1"><Enlace href="#cb2-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">if</span> <span className="bu">[</span> 3 <span className="ot">-gt</span> 4 <span className="bu">]</span><span className="kw">;</span> <span className="cf">then</span> </span>
            <span id="cb2-2"><Enlace href="#cb2-2" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">echo</span> <span className="st">&quot;Mayor que 4&quot;</span></span>
            <span id="cb2-3"><Enlace href="#cb2-3" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb2-4"><Enlace href="#cb2-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">elif</span> <span className="fu">false</span><span className="kw">;</span> <span className="cf">then</span> </span>
            <span id="cb2-5"><Enlace href="#cb2-5" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">echo</span> <span className="st">&quot;Nunca pasar&quot;</span></span>
            <span id="cb2-6"><Enlace href="#cb2-6" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb2-7"><Enlace href="#cb2-7" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">else</span> </span>
            <span id="cb2-8"><Enlace href="#cb2-8" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">echo</span> <span className="st">&quot;4 o menor&quot;</span></span>
            <span id="cb2-9"><Enlace href="#cb2-9" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">fi</span></span></code></pre>
        </div>
        <blockquote>
          <Texto><strong>Notas:</strong></Texto>
          <Lista>
            <li>Los corchetes <code>[ ]</code> son equivalentes al comando
              <code>test</code>.
            </li>
            <li>Siempre debe haber un <strong>espacio</strong> después del
              <code>[</code> y antes del <code>]</code>.
            </li>
            <li>La instrucción <code>then</code> debe ir en la misma línea o en una
              nueva, separada con <code>;</code>.</li>
          </Lista>
        </blockquote>
        <Linea />
        <Titulo title="h2" id="condiciones-compuestas">Condiciones compuestas
          (<code>&amp;&amp;</code>, <code>||</code>)</Titulo>
        <Texto>Puedes combinar condiciones con operadores lógicos.</Texto>
        <div className="sourceCode" id="cb3">
          <pre className="sourceCode bash"><code className="sourceCode bash"><span id="cb3-1"><Enlace href="#cb3-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">if</span> <span className="bu">[</span> 10 <span className="ot">-lt</span> 14 <span className="bu">]</span> <span className="kw">&amp;&amp;</span> <span className="bu">[</span> 10 <span className="ot">-gt</span> 12 <span className="bu">]</span><span className="kw">;</span> <span className="cf">then</span> </span>
            <span id="cb3-2"><Enlace href="#cb3-2" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">echo</span> <span className="st">&quot;verdadero&quot;</span></span>
            <span id="cb3-3"><Enlace href="#cb3-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">fi</span></span></code></pre>
        </div>
        <Texto>También puedes usar <code>[[ ... ]]</code> para condiciones más
          seguras (recomendado):</Texto>
        <div className="sourceCode" id="cb4">
          <pre className="sourceCode bash"><code className="sourceCode bash"><span id="cb4-1"><Enlace href="#cb4-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">if</span> <span className="kw">[[</span> 10 <span className="ot">-lt</span> 14  <span className="kw">&amp;&amp;</span>  10 <span className="ot">-gt</span> 12 <span className="kw">]];</span> <span className="cf">then</span> </span>
            <span id="cb4-2"><Enlace href="#cb4-2" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">echo</span> <span className="st">&quot;verdadero&quot;</span></span>
            <span id="cb4-3"><Enlace href="#cb4-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">fi</span></span></code></pre>
        </div>
        <blockquote>
          <Texto><code>[[ ... ]]</code> permite el uso de operadores lógicos
            <code>&amp;&amp;</code> y <code>||</code> dentro del mismo bloque sin
            necesidad de múltiples <code>[ ]</code>.
          </Texto>
        </blockquote>
        <Linea />
        <Titulo title="h2" id="formas-de-escribir-condiciones">Formas de escribir
          condiciones</Titulo>
        <Texto>Las tres siguientes formas son equivalentes:</Texto>
        <div className="sourceCode" id="cb5">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb5-1"><Enlace href="#cb5-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">test</span> condition</span>
              <span id="cb5-2"><Enlace href="#cb5-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">[</span> condition <span className="bu">]</span></span>
              <span id="cb5-3"><Enlace href="#cb5-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">[[</span> condition <span className="kw">||</span> condition <span className="kw">]]</span></span></code></pre>
        </div>
        <Texto>Ejemplo real:</Texto>
        <div className="sourceCode" id="cb6">
          <pre className="sourceCode bash"><code className="sourceCode bash"><span id="cb6-1"><Enlace href="#cb6-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">if</span> <span className="bu">test</span> 10 <span className="at">-eq</span> 10<span className="kw">;</span> <span className="cf">then</span> </span>
            <span id="cb6-2"><Enlace href="#cb6-2" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">echo</span> <span className="st">&quot;10 es igual a 10&quot;</span></span>
            <span id="cb6-3"><Enlace href="#cb6-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">fi</span></span></code></pre>
        </div>
      </Estructura>
      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}
export default nameabcd;
