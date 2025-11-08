import Titulo from "./../../componentes/titulo.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Linea from "./../../componentes/linea.jsx";

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="decorador-classmethod">Decorador <span class="citation" data-cites="classmethod">@classmethod</span></Titulo>
      <Texto><code>@classmethod</code> permite crear funciones que pueden
        <strong>acceder o modificar el estado de la clase</strong>, sin
        necesidad de crear un objeto.
      </Texto>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><a href="#decorador-classmethod">Decorador <span class="citation"
          data-cites="classmethod">@classmethod</span></a>
          <Lista>
            <li><a href="#temario">Temario</a></li>
            <li><a href="#ejemplo">Ejemplo</a></li>
            <li><a href="#diferencias-entre-tipos-de-métodos">Diferencias entre
              tipos de métodos</a></li>
            <li><a href="#en-resumen">En resumen</a></li>
          </Lista>
        </li>
      </Lista>
      <Texto><a href="./../readme.md#5-python">Regresar a la Guía
        Principal</a></Texto>
      <Linea />
      <Titulo title="h2" id="ejemplo">Ejemplo</Titulo>
      <div class="sourceCode" id="cb1">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="kw">class</span> Persona:</span>
            <span id="cb1-2"><a href="#cb1-2" aria-hidden="true" tabindex="-1"></a>    poblacion <span class="op">=</span> <span class="dv">0</span>  <span class="co"># Atributo de clase</span></span>
            <span id="cb1-3"><a href="#cb1-3" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb1-4"><a href="#cb1-4" aria-hidden="true" tabindex="-1"></a>    <span class="kw">def</span> <span class="fu">__init__</span>(<span class="va">self</span>, nombre):</span>
            <span id="cb1-5"><a href="#cb1-5" aria-hidden="true" tabindex="-1"></a>        <span class="va">self</span>.nombre <span class="op">=</span> nombre</span>
            <span id="cb1-6"><a href="#cb1-6" aria-hidden="true" tabindex="-1"></a>        Persona.poblacion <span class="op">+=</span> <span class="dv">1</span></span>
            <span id="cb1-7"><a href="#cb1-7" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb1-8"><a href="#cb1-8" aria-hidden="true" tabindex="-1"></a>    <span class="at">@classmethod</span></span>
            <span id="cb1-9"><a href="#cb1-9" aria-hidden="true" tabindex="-1"></a>    <span class="kw">def</span> cuantos_hay(cls):</span>
            <span id="cb1-10"><a href="#cb1-10" aria-hidden="true" tabindex="-1"></a>        <span class="cf">return</span> <span class="ss">f&quot;Hay </span><span class="sc">(</span>cls<span class="sc">.</span>poblacion<span class="sc">)</span><span class="ss"> personas registradas.&quot;</span></span>
            <span id="cb1-11"><a href="#cb1-11" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb1-12"><a href="#cb1-12" aria-hidden="true" tabindex="-1"></a><span class="co"># Podemos llamar al método sin crear objetos:</span></span>
            <span id="cb1-13"><a href="#cb1-13" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(Persona.cuantos_hay())  <span class="co"># Hay 0 personas registradas.</span></span>
            <span id="cb1-14"><a href="#cb1-14" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb1-15"><a href="#cb1-15" aria-hidden="true" tabindex="-1"></a><span class="co"># Crear algunos objetos:</span></span>
            <span id="cb1-16"><a href="#cb1-16" aria-hidden="true" tabindex="-1"></a>p1 <span class="op">=</span> Persona(<span class="st">&quot;Ana&quot;</span>)</span>
            <span id="cb1-17"><a href="#cb1-17" aria-hidden="true" tabindex="-1"></a>p2 <span class="op">=</span> Persona(<span class="st">&quot;Luis&quot;</span>)</span>
            <span id="cb1-18"><a href="#cb1-18" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb1-19"><a href="#cb1-19" aria-hidden="true" tabindex="-1"></a><span class="co"># Llamar de nuevo:</span></span>
            <span id="cb1-20"><a href="#cb1-20" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(Persona.cuantos_hay())  <span class="co"># Hay 2 personas registradas.</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="diferencias-entre-tipos-de-métodos">Diferencias entre tipos de
        métodos</Titulo>
      <table>
        <colgroup>
          <col style="width: 16%" />
          <col style="width: 13%" />
          <col style="width: 26%" />
          <col style="width: 22%" />
          <col style="width: 21%" />
        </colgroup>
        <thead>
          <tr>
            <th>Tipo de método</th>
            <th>Primer parámetro</th>
            <th>Accede a atributos de instancia</th>
            <th>Accede a atributos de clase</th>
            <th>Se llama sin crear objeto</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Normal (<code>def</code>)</strong></td>
            <td><code>self</code></td>
            <td>✅ Sí</td>
            <td>✅ (vía <code>self.__class__</code>)</td>
            <td>❌ No</td>
          </tr>
          <tr>
            <td><strong><code>@classmethod</code></strong></td>
            <td><code>cls</code></td>
            <td>❌ No</td>
            <td>✅ Sí</td>
            <td>✅ Sí</td>
          </tr>
          <tr>
            <td><strong><code>@staticmethod</code></strong></td>
            <td>ninguno</td>
            <td>❌ No</td>
            <td>❌ No</td>
            <td>✅ Sí</td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Titulo title="h2" id="en-resumen">En resumen</Titulo>
      <Lista>
        <li><code>@staticmethod</code>: método
          <strong>independiente</strong>, solo usa los parámetros que se le
          pasen.
        </li>    <li><code>@classmethod</code>: método <strong>ligado a la
          clase</strong>, puede <strong>usar o modificar atributos de la
            clase</strong> y se puede llamar sin crear una instancia.</li>  </Lista>
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
