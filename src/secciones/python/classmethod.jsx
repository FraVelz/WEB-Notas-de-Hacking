import Titulo from "./../../componentes/titulo.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Linea from "./../../componentes/linea.jsx";

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="decorador-classmethod">Decorador <span className="citation" data-cites="classmethod">@classmethod</span></Titulo>
      <Texto><code>@classmethod</code> permite crear funciones que pueden
        <strong>acceder o modificar el estado de la clase</strong>, sin
        necesidad de crear un objeto.
      </Texto>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><Enlace href="#decorador-classmethod">Decorador <span className="citation"
          data-cites="classmethod">@classmethod</span></Enlace >
          <Lista>
            <li><Enlace href="#temario">Temario</Enlace ></li>
            <li><Enlace href="#ejemplo">Ejemplo</Enlace ></li>
            <li><Enlace href="#diferencias-entre-tipos-de-métodos">Diferencias entre
              tipos de métodos</Enlace ></li>
            <li><Enlace href="#en-resumen">En resumen</Enlace ></li>
          </Lista>
        </li>
      </Lista>
      <Texto><Enlace href="./../readme.md#5-python">Regresar a la Guía
        Principal</Enlace ></Texto>
      <Linea />
      <Titulo title="h2" id="ejemplo">Ejemplo</Titulo>
      <div className="sourceCode" id="cb1">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb1-1"><Enlace href="#cb1-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">class</span> Persona:</span>
            <span id="cb1-2"><Enlace href="#cb1-2" aria-hidden="true" tabindex="-1"></Enlace >    poblacion <span className="op">=</span> <span className="dv">0</span>  <span className="co"># Atributo de clase</span></span>
            <span id="cb1-3"><Enlace href="#cb1-3" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb1-4"><Enlace href="#cb1-4" aria-hidden="true" tabindex="-1"></Enlace >    <span className="kw">def</span> <span className="fu">__init__</span>(<span className="va">self</span>, nombre):</span>
            <span id="cb1-5"><Enlace href="#cb1-5" aria-hidden="true" tabindex="-1"></Enlace >        <span className="va">self</span>.nombre <span className="op">=</span> nombre</span>
            <span id="cb1-6"><Enlace href="#cb1-6" aria-hidden="true" tabindex="-1"></Enlace >        Persona.poblacion <span className="op">+=</span> <span className="dv">1</span></span>
            <span id="cb1-7"><Enlace href="#cb1-7" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb1-8"><Enlace href="#cb1-8" aria-hidden="true" tabindex="-1"></Enlace >    <span className="at">@classmethod</span></span>
            <span id="cb1-9"><Enlace href="#cb1-9" aria-hidden="true" tabindex="-1"></Enlace >    <span className="kw">def</span> cuantos_hay(cls):</span>
            <span id="cb1-10"><Enlace href="#cb1-10" aria-hidden="true" tabindex="-1"></Enlace >        <span className="cf">return</span> <span className="ss">f&quot;Hay </span><span className="sc">(</span>cls<span className="sc">.</span>poblacion<span className="sc">)</span><span className="ss"> personas registradas.&quot;</span></span>
            <span id="cb1-11"><Enlace href="#cb1-11" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb1-12"><Enlace href="#cb1-12" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Podemos llamar al método sin crear objetos:</span></span>
            <span id="cb1-13"><Enlace href="#cb1-13" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(Persona.cuantos_hay())  <span className="co"># Hay 0 personas registradas.</span></span>
            <span id="cb1-14"><Enlace href="#cb1-14" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb1-15"><Enlace href="#cb1-15" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Crear algunos objetos:</span></span>
            <span id="cb1-16"><Enlace href="#cb1-16" aria-hidden="true" tabindex="-1"></Enlace >p1 <span className="op">=</span> Persona(<span className="st">&quot;Ana&quot;</span>)</span>
            <span id="cb1-17"><Enlace href="#cb1-17" aria-hidden="true" tabindex="-1"></Enlace >p2 <span className="op">=</span> Persona(<span className="st">&quot;Luis&quot;</span>)</span>
            <span id="cb1-18"><Enlace href="#cb1-18" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb1-19"><Enlace href="#cb1-19" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Llamar de nuevo:</span></span>
            <span id="cb1-20"><Enlace href="#cb1-20" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(Persona.cuantos_hay())  <span className="co"># Hay 2 personas registradas.</span></span></code></pre>
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
      <Texto><Enlace href="./../readme.md#5-python">Regresar a la Guía
        Principal</Enlace ></Texto>
      <blockquote>
        <Texto><strong>Autor:</strong> Fravelz</Texto>
      </blockquote>
    </>
  );
}
export default nameabcd;
