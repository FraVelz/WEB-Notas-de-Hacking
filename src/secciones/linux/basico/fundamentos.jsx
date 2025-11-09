import Titulo from "../../../componentes/titulo.jsx";
import Lista from "../../../componentes/lista.jsx";
import Texto from "../../../componentes/texto.jsx";
import Linea from "../../../componentes/linea.jsx";
import Estructura from "../../../componentes/estructura.jsx";
import Enlace from "../../../componentes/enlace.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
   </Lista>
  );
}

function nameabcd({ }) {
  return (
    <Estructura>
      <Titulo title="h1" id="fundamentos-de-bash-script">Fundamentos de Bash Script</Titulo>
      <Linea />

      <TemarioCompleto temario={Temario}/>

      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><Enlace href="#fundamentos-de-bash-script">Fundamentos de Bash Script</Enlace >
          <Lista>
            <li><Enlace href="#temario">Temario</Enlace ></li>
            <li><Enlace href="#cabecera-del-script">Cabecera del Script</Enlace ></li>
            <li><Enlace href="#imprimir-texto-y-comentarios">Imprimir texto y
              comentarios</Enlace ></li>
            <li><Enlace href="#variables-en-bash">Variables en Bash</Enlace >
              <Lista>
                <li><Enlace href="#variables-especiales">Variables especiales</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#strings">Strings</Enlace ></li>
            <li><Enlace href="#valores-constantes">Valores constantes</Enlace ></li>
            <li><Enlace href="#operaciones-matemáticas">Operaciones matemáticas</Enlace >
              <Lista>
                <li><Enlace href="#símbolos-matemáticos">Símbolos matemáticos</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#leer-entrada-del-usuario">Leer entrada del usuario</Enlace >
              <Lista>
                <li><Enlace href="#parámetros-útiles">Parámetros útiles</Enlace ></li>
              </Lista>
            </li>
          </Lista>
        </li>
      </Lista>
      <Texto><Enlace href="./../readme.md#2-linux-y-bash-script">Regresar a la guía
        principal</Enlace ></Texto>
      <Linea />
      <Titulo title="h2" id="cabecera-del-script">Cabecera del Script</Titulo>
      <Texto>La <strong>cabecera</strong> o <em>shebang</em> indica qué intérprete
        ejecutará el script.</Texto>
      <div className="sourceCode" id="cb1">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb1-1"><Enlace href="#cb1-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="co">#!/bin/bash</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="imprimir-texto-y-comentarios">Imprimir texto y comentarios</Titulo>
      <Texto>Puedes imprimir texto con <code>echo</code> y escribir comentarios de
        varias formas.</Texto>
      <div className="sourceCode" id="cb2">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb2-1"><Enlace href="#cb2-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Imprimir texto</span></span>
            <span id="cb2-2"><Enlace href="#cb2-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">echo</span> <span className="st">&quot;hola mundo !!!&quot;</span>    <span className="co"># Imprime hola mundo por consola</span></span>
            <span id="cb2-3"><Enlace href="#cb2-3" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb2-4"><Enlace href="#cb2-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Esto es un comentario de una sola línea.</span></span></code></pre>
      </div>
      <Texto>Comentarios multilínea pueden simularse con dos métodos:</Texto>
      <div className="sourceCode" id="cb3">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb3-1"><Enlace href="#cb3-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">:</span> <span className="st">&#39;</span></span>
            <span id="cb3-2"><Enlace href="#cb3-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="st">Comentario (*recomendado)</span></span>
            <span id="cb3-3"><Enlace href="#cb3-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="st">multilinea simulado</span></span>
            <span id="cb3-4"><Enlace href="#cb3-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="st">con null command con string.</span></span>
            <span id="cb3-5"><Enlace href="#cb3-5" aria-hidden="true" tabindex="-1"></Enlace ><span className="st">&#39;</span></span>
            <span id="cb3-6"><Enlace href="#cb3-6" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb3-7"><Enlace href="#cb3-7" aria-hidden="true" tabindex="-1"></Enlace ><span className="op">&lt;&lt; &#39;EOF&#39;</span></span>
            <span id="cb3-8"><Enlace href="#cb3-8" aria-hidden="true" tabindex="-1"></Enlace ><span className="st">Comentario </span></span>
            <span id="cb3-9"><Enlace href="#cb3-9" aria-hidden="true" tabindex="-1"></Enlace ><span className="st">multilinea simulado</span></span>
            <span id="cb3-10"><Enlace href="#cb3-10" aria-hidden="true" tabindex="-1"></Enlace ><span className="st">con here document descartado.</span></span>
            <span id="cb3-11"><Enlace href="#cb3-11" aria-hidden="true" tabindex="-1"></Enlace ><span className="op">EOF</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="variables-en-bash">Variables en Bash</Titulo>
      <Texto>En Bash solo existe un tipo de dato: <strong>string</strong> (cadena
        de texto). Se puede escribir <strong>sin comillas</strong>, o con
        <strong>comillas simples</strong> o <strong>dobles</strong>.
      </Texto>
      <Texto>Ejemplo:</Texto>
      <div className="sourceCode" id="cb4">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb4-1"><Enlace href="#cb4-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="va">name</span><span className="op">=</span>Fravelz</span>
            <span id="cb4-2"><Enlace href="#cb4-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="va">today</span><span className="op">=</span><span className="st">&quot;10 09 2025&quot;</span></span>
            <span id="cb4-3"><Enlace href="#cb4-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="va">message</span><span className="op">=</span><span className="st">&#39;hola $name&#39;</span></span></code></pre>
      </div>
      <blockquote>
        <Texto>Importante: No deben colocarse espacios al declarar una variable.
          Bash es sensible a los espacios.</Texto>
      </blockquote>
      <Texto>Para usar una variable se coloca <code>$</code> antes de su nombre:
        <code>$variable</code>
      </Texto>
      <Titulo title="h3" id="variables-especiales">Variables especiales</Titulo>
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
      <Texto>Para imprimir valores (evitando errores con espacios), se
        recomienda:</Texto>
      <div className="sourceCode" id="cb5">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb5-1"><Enlace href="#cb5-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">echo</span> <span className="st">&quot;</span><span className="va">$variable</span><span className="st">&quot;</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="strings">Strings</Titulo>
      <div className="sourceCode" id="cb6">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb6-1"><Enlace href="#cb6-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="va">name</span><span className="op">=</span>Fravelz</span>
            <span id="cb6-2"><Enlace href="#cb6-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="va">today</span><span className="op">=</span><span className="st">&quot;10 09 2025&quot;</span></span>
            <span id="cb6-3"><Enlace href="#cb6-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="va">message</span><span className="op">=</span><span className="st">&#39;hola $name&#39;</span></span></code></pre>
      </div>
      <Texto>Los strings pueden ser multilínea (guarda exactamente los saltos de
        líneas que tenga):</Texto>
      <div className="sourceCode" id="cb7">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb7-1"><Enlace href="#cb7-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="va">text</span><span className="op">=</span><span className="st">&quot;</span></span>
            <span id="cb7-2"><Enlace href="#cb7-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="st">Este es un string</span></span>
            <span id="cb7-3"><Enlace href="#cb7-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="st">Multilinea :)</span></span>
            <span id="cb7-4"><Enlace href="#cb7-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="st">&quot;</span></span></code></pre>
      </div>
      <Texto>Llamar a variables e imprimir:</Texto>
      <div className="sourceCode" id="cb8">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb8-1"><Enlace href="#cb8-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">echo</span> <span className="st">&quot;Mi nombre es </span><span className="va">$name</span><span className="st"> y estamos en el year </span><span className="va">$today</span><span className="st">&quot;</span></span>
            <span id="cb8-2"><Enlace href="#cb8-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">echo</span> <span className="va">$message</span></span>
            <span id="cb8-3"><Enlace href="#cb8-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">echo</span> <span className="va">$text</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="valores-constantes">Valores constantes</Titulo>
      <Texto>Usa <code>readonly</code> para declarar constantes:</Texto>
      <div className="sourceCode" id="cb9">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb9-1"><Enlace href="#cb9-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">readonly</span> <span className="va">PI</span><span className="op">=</span>3.1416</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="operaciones-matemáticas">Operaciones matemáticas</Titulo>
      <Texto>Bash permite realizar operaciones aritméticas en las siguientes
        formas:</Texto>
      <div className="sourceCode" id="cb10">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb10-1"><Enlace href="#cb10-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="va">a</span><span className="op">=</span>1</span>
            <span id="cb10-2"><Enlace href="#cb10-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="va">b</span><span className="op">=</span>2</span>
            <span id="cb10-3"><Enlace href="#cb10-3" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb10-4"><Enlace href="#cb10-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">echo</span> <span className="va">$((a</span> <span className="op">+</span> <span className="va">b))</span>      </span>
            <span id="cb10-5"><Enlace href="#cb10-5" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">echo</span> <span className="va">$(</span><span className="fu">expr</span> <span className="va">$a</span> + <span className="va">$b)</span></span></code></pre>
      </div>
      <Titulo title="h3" id="símbolos-matemáticos">Símbolos matemáticos</Titulo>
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
      <Linea />
      <Titulo title="h2" id="leer-entrada-del-usuario">Leer entrada del usuario</Titulo>
      <Texto>El comando <code>read</code> se usa para leer datos del usuario.</Texto>
      <Titulo title="h3" id="parámetros-útiles">Parámetros útiles</Titulo>
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
      <Texto>Ejemplo:</Texto>
      <div className="sourceCode" id="cb11">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb11-1"><Enlace href="#cb11-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">echo</span> <span className="st">&quot;Cual es tu User?&quot;</span></span>
            <span id="cb11-2"><Enlace href="#cb11-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">read</span> <span className="va">user</span></span>
            <span id="cb11-3"><Enlace href="#cb11-3" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb11-4"><Enlace href="#cb11-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">echo</span> <span className="st">&quot;Cual es tu name?&quot;</span></span>
            <span id="cb11-5"><Enlace href="#cb11-5" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">read</span> <span className="at">-p</span> <span className="va">name</span></span>
            <span id="cb11-6"><Enlace href="#cb11-6" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb11-7"><Enlace href="#cb11-7" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">read</span> <span className="at">-t</span> 4 <span className="at">-p</span> <span className="st">&quot;Escribe algo en 4 seg.:&quot;</span> <span className="va">value</span></span>
            <span id="cb11-8"><Enlace href="#cb11-8" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">echo</span> <span className="st">&quot;Ingresaste </span><span className="va">$value</span><span className="st">&quot;</span></span></code></pre>
      </div>
      <Linea />
      <Texto><Enlace href="./../readme.md#2-linux-y-bash-script">Regresar a la guía
        principal</Enlace ></Texto>
      <blockquote>
        <Texto><strong>Autor:</strong> Fravelz</Texto>
      </blockquote>
    </Estructura>
  );
}
export default nameabcd;
