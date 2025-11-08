import Titulo from "./../../componentes/titulo.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Linea from "./../../componentes/linea.jsx";

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="variables-protegidas-y-privadas-en-clases">Variables protegidas
        y privadas en clases</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><a href="#variables-protegidas-y-privadas-en-clases">Variables
          protegidas y privadas en clases</a>
          <Lista>
            <li><a href="#temario">Temario</a></li>
            <li><a href="#1-self_variable-un-guion-bajo">1. self._variable (un guion
              bajo)</a></li>
            <li><a href="#2-self__variable-doble-guion-bajo">2. self.__variable
              (doble guion bajo)</a></li>
            <li><a href="#en-resumen">En resumen</a></li>
          </Lista>
        </li>
      </Lista>
      <Texto><a href="./../readme.md#5-python">Regresar a la Guía
        Principal</a></Texto>
      <Linea />
      <Titulo title="h2" id="self._variable-un-guion-bajo">1. self._variable (un guion
        bajo)</Titulo>
      <Texto>Por <strong>convención</strong>, el <strong>guion bajo simple
        <code>_</code></strong> indica que el atributo es <strong>“protegido”
          (protected)</strong>, o sea:</Texto>
      <blockquote>
        <Texto>“No lo uses directamente fuera de la clase, aunque *puedes- hacerlo
          si realmente quieres”.</Texto>
      </blockquote>
      <Texto>Python <strong>no bloquea</strong> su acceso; es solo una
        <strong>advertencia entre programadores</strong>.
      </Texto>
      <div class="sourceCode" id="cb1">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="kw">class</span> Persona:</span>
            <span id="cb1-2"><a href="#cb1-2" aria-hidden="true" tabindex="-1"></a>    <span class="kw">def</span> <span class="fu">__init__</span>(<span class="va">self</span>, nombre):</span>
            <span id="cb1-3"><a href="#cb1-3" aria-hidden="true" tabindex="-1"></a>        <span class="va">self</span>._nombre <span class="op">=</span> nombre  <span class="co"># protegido</span></span>
            <span id="cb1-4"><a href="#cb1-4" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb1-5"><a href="#cb1-5" aria-hidden="true" tabindex="-1"></a>p <span class="op">=</span> Persona(<span class="st">&quot;Ana&quot;</span>)</span>
            <span id="cb1-6"><a href="#cb1-6" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(p._nombre)  <span class="co"># 😅 Funciona, pero no deberías accederlo así</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="self.__variable-doble-guion-bajo">2. self.__variable (doble
        guion bajo)</Titulo>
      <Texto>El <strong>doble guion bajo <code>__</code></strong> activa el
        mecanismo de <strong>name mangling</strong> o “ofuscación de
        nombre”.</Texto>
      <Texto>Eso significa que Python <strong>cambia internamente el nombre del
        atributo</strong> para evitar que se sobrescriba o se acceda fácilmente
        desde fuera de la clase.</Texto>
      <Texto>Por ejemplo:</Texto>
      <div class="sourceCode" id="cb2">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="kw">class</span> Persona:</span>
            <span id="cb2-2"><a href="#cb2-2" aria-hidden="true" tabindex="-1"></a>    <span class="kw">def</span> <span class="fu">__init__</span>(<span class="va">self</span>, nombre):</span>
            <span id="cb2-3"><a href="#cb2-3" aria-hidden="true" tabindex="-1"></a>        <span class="va">self</span>.__nombre <span class="op">=</span> nombre  <span class="co"># privado (name mangling)</span></span>
            <span id="cb2-4"><a href="#cb2-4" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb2-5"><a href="#cb2-5" aria-hidden="true" tabindex="-1"></a>p <span class="op">=</span> Persona(<span class="st">&quot;Luis&quot;</span>)</span>
            <span id="cb2-6"><a href="#cb2-6" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb2-7"><a href="#cb2-7" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(p.__nombre)  <span class="co"># ❌ Error: AttributeError</span></span></code></pre>
      </div>
      <Texto>Pero internamente Python lo guarda así</Texto>
      <div class="sourceCode" id="cb3">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(p._Persona__nombre)  <span class="co"># ✅ Luis</span></span></code></pre>
      </div>
      <Texto>En otras palabras:</Texto>
      <Lista>
        <li>No lo vuelve <em>totalmente privado</em>, pero
          <strong>dificulta</strong> su acceso externo.
        </li>
        <li>Se usa para <strong>evitar colisiones de nombres</strong> en clases
          hijas (herencia) y <strong>proteger la integridad interna</strong>.</li>
      </Lista>
      <Linea />
      <Titulo title="h2" id="en-resumen">En resumen</Titulo>
      <table>
        <colgroup>
          <col style="width: 12%" />
          <col style="width: 16%" />
          <col style="width: 10%" />
          <col style="width: 22%" />
          <col style="width: 38%" />
        </colgroup>
        <thead>
          <tr>
            <th>Notación</th>
            <th>Nombre</th>
            <th>Protección</th>
            <th>Accesible desde fuera</th>
            <th>Uso común</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>self.variable</code></td>
            <td>Pública</td>
            <td>❌ No protegida</td>
            <td>✅ Sí</td>
            <td>Atributos normales</td>
          </tr>
          <tr>
            <td><code>self._variable</code></td>
            <td>Protegida</td>
            <td>⚠️ Semiprivada</td>
            <td>✅ Sí (por convención, no tocar)</td>
            <td>Uso interno o en subclases</td>
          </tr>
          <tr>
            <td><code>self.__variable</code></td>
            <td>Privada (name mangling)</td>
            <td>✅ Más protegida</td>
            <td>🚫 No directamente</td>
            <td>Evitar acceso desde fuera o sobrescritura en herencia</td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Texto><a href="./../readme.md#5-python">Regresar a la Guía
        Principal</a></Texto>
      <blockquote>
        <Texto><strong>Autor:</strong> Fravelz</Texto>
      </blockquote>
    </>
  );
}
export default nameabcd;
