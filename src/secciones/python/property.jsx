import Titulo from "./../../componentes/titulo.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Linea from "./../../componentes/linea.jsx";
import Enlace from "../../componentes/enlace.jsx";

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="decorador-property">Decorador <span className="citation" data-cites="property">@property</span></Titulo>
      <Texto><code>@property</code> se usa para <strong>encapsular
        atributos</strong>, <strong>añadir validaciones o lógica
          interna</strong>, pero sin cambiar la forma natural de acceder o
        modificar una variable.</Texto>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><Enlace href="#decorador-property">Decorador <span className="citation" data-cites="property">@property</span></Enlace >
          <Lista>
            <li><Enlace href="#temario">Temario</Enlace ></li>
            <li><Enlace href="#qué-hace-property-en-python">¿Qué hace
              <code>@property</code> en Python?</Enlace ></li>
            <li><Enlace href="#ejemplo-básico-sin-property">Ejemplo básico sin
              <code>@property</code></Enlace ></li>
            <li><Enlace href="#con-property">Con <code>@property</code></Enlace ></li>
            <li><Enlace href="#agregando-un-setter-para-modificar-el-valor">Agregando un
              <strong>setter</strong> para modificar el valor</Enlace ></li>
            <li><Enlace href="#también-existe-el-deleter-opcional">También existe el
              deleter (opcional)</Enlace ></li>
            <li><Enlace href="#en-resumen">En resumen</Enlace ></li>
          </Lista>
        </li>
      </Lista>
      <Texto><Enlace href="./../readme.md#5-python">Regresar a la Guía
        Principal</Enlace ></Texto>
      <Linea />
      <Titulo title="h2" id="qué-hace-property-en-python">¿Qué hace <code>@property</code> en
        Python?</Titulo>
      <Texto>El decorador <strong><code>@property</code></strong> convierte un
        <strong>método de una clase</strong> en un <strong>atributo “solo de
          lectura”</strong> (al menos inicialmente).
      </Texto>
      <Texto>Sirve para <strong>controlar cómo se accede a un atributo</strong>,
        pero permitiendo que el código <strong>parezca estar accediendo
          directamente a una variable</strong>.</Texto>
      <Texto>En otras palabras:</Texto>
      <blockquote>
        <Texto>Permite usar <em>métodos</em> como si fueran <em>atributos</em>,
          <strong>sin cambiar la sintaxis de acceso</strong>.
        </Texto>
      </blockquote>
      <Linea />
      <Titulo title="h2" id="ejemplo-básico-sin-property">Ejemplo básico sin
        <code>@property</code>
      </Titulo>
      <div className="sourceCode" id="cb1">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb1-1"><Enlace href="#cb1-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">class</span> Persona:</span>
            <span id="cb1-2"><Enlace href="#cb1-2" aria-hidden="true" tabindex="-1"></Enlace >    <span className="kw">def</span> <span className="fu">__init__</span>(<span className="va">self</span>, nombre):</span>
            <span id="cb1-3"><Enlace href="#cb1-3" aria-hidden="true" tabindex="-1"></Enlace >        <span className="va">self</span>.__nombre <span className="op">=</span> nombre  <span className="co"># atributo privado</span></span>
            <span id="cb1-4"><Enlace href="#cb1-4" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb1-5"><Enlace href="#cb1-5" aria-hidden="true" tabindex="-1"></Enlace >    <span className="kw">def</span> get_nombre(<span className="va">self</span>):</span>
            <span id="cb1-6"><Enlace href="#cb1-6" aria-hidden="true" tabindex="-1"></Enlace >        <span className="cf">return</span> <span className="va">self</span>.__nombre</span></code></pre>
      </div>
      <Texto>Uso:</Texto>
      <div className="sourceCode" id="cb2">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb2-1"><Enlace href="#cb2-1" aria-hidden="true" tabindex="-1"></Enlace >p <span className="op">=</span> Persona(<span className="st">&quot;Ana&quot;</span>)</span>
            <span id="cb2-2"><Enlace href="#cb2-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(p.get_nombre())  <span className="co"># ✅ Funciona</span></span></code></pre>
      </div>
      <Texto>Pero se ve <em>feo</em> tener que escribir <code>.get_nombre()</code>
        cada vez. Ahí entra <code>@property</code>.</Texto>
      <Linea />
      <Titulo title="h2" id="con-property">Con <code>@property</code></Titulo>
      <div className="sourceCode" id="cb3">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb3-1"><Enlace href="#cb3-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">class</span> Persona:</span>
            <span id="cb3-2"><Enlace href="#cb3-2" aria-hidden="true" tabindex="-1"></Enlace >    <span className="kw">def</span> <span className="fu">__init__</span>(<span className="va">self</span>, nombre):</span>
            <span id="cb3-3"><Enlace href="#cb3-3" aria-hidden="true" tabindex="-1"></Enlace >        <span className="va">self</span>.__nombre <span className="op">=</span> nombre</span>
            <span id="cb3-4"><Enlace href="#cb3-4" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb3-5"><Enlace href="#cb3-5" aria-hidden="true" tabindex="-1"></Enlace >    <span className="at">@property</span></span>
            <span id="cb3-6"><Enlace href="#cb3-6" aria-hidden="true" tabindex="-1"></Enlace >    <span className="kw">def</span> nombre(<span className="va">self</span>):</span>
            <span id="cb3-7"><Enlace href="#cb3-7" aria-hidden="true" tabindex="-1"></Enlace >        <span className="cf">return</span> <span className="va">self</span>.__nombre</span></code></pre>
      </div>
      <Texto>Uso:</Texto>
      <div className="sourceCode" id="cb4">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb4-1"><Enlace href="#cb4-1" aria-hidden="true" tabindex="-1"></Enlace >p <span className="op">=</span> Persona(<span className="st">&quot;Luis&quot;</span>)</span>
            <span id="cb4-2"><Enlace href="#cb4-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(p.nombre)  <span className="co"># ✅ Sin paréntesis, parece un atributo</span></span></code></pre>
      </div>
      <Lista>
        <li>Python llama automáticamente al método <code>nombre()</code>
          cuando escribes <code>p.nombre</code>.</li>    <li>Es solo de lectura por ahora (no se puede cambiar el valor
            directamente).</li>  </Lista>
      <Linea />
      <Titulo title="h2" id="agregando-un-setter-para-modificar-el-valor">Agregando un
        <strong>setter</strong> para modificar el valor
      </Titulo>
      <div className="sourceCode" id="cb5">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb5-1"><Enlace href="#cb5-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">class</span> Persona:</span>
            <span id="cb5-2"><Enlace href="#cb5-2" aria-hidden="true" tabindex="-1"></Enlace >    <span className="kw">def</span> <span className="fu">__init__</span>(<span className="va">self</span>, nombre):</span>
            <span id="cb5-3"><Enlace href="#cb5-3" aria-hidden="true" tabindex="-1"></Enlace >        <span className="va">self</span>.__nombre <span className="op">=</span> nombre</span>
            <span id="cb5-4"><Enlace href="#cb5-4" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb5-5"><Enlace href="#cb5-5" aria-hidden="true" tabindex="-1"></Enlace >    <span className="at">@property</span></span>
            <span id="cb5-6"><Enlace href="#cb5-6" aria-hidden="true" tabindex="-1"></Enlace >    <span className="kw">def</span> nombre(<span className="va">self</span>):</span>
            <span id="cb5-7"><Enlace href="#cb5-7" aria-hidden="true" tabindex="-1"></Enlace >        <span className="cf">return</span> <span className="va">self</span>.__nombre</span>
            <span id="cb5-8"><Enlace href="#cb5-8" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb5-9"><Enlace href="#cb5-9" aria-hidden="true" tabindex="-1"></Enlace >    <span className="at">@nombre.setter</span></span>
            <span id="cb5-10"><Enlace href="#cb5-10" aria-hidden="true" tabindex="-1"></Enlace >    <span className="kw">def</span> nombre(<span className="va">self</span>, nuevo_nombre):</span>
            <span id="cb5-11"><Enlace href="#cb5-11" aria-hidden="true" tabindex="-1"></Enlace >        <span className="cf">if</span> <span className="bu">len</span>(nuevo_nombre) <span className="op">&gt;</span> <span className="dv">0</span>:</span>
            <span id="cb5-12"><Enlace href="#cb5-12" aria-hidden="true" tabindex="-1"></Enlace >            <span className="va">self</span>.__nombre <span className="op">=</span> nuevo_nombre</span>
            <span id="cb5-13"><Enlace href="#cb5-13" aria-hidden="true" tabindex="-1"></Enlace >        <span className="cf">else</span>:</span>
            <span id="cb5-14"><Enlace href="#cb5-14" aria-hidden="true" tabindex="-1"></Enlace >            <span className="bu">print</span>(<span className="st">&quot;❌ El nombre no puede estar vacío.&quot;</span>)</span></code></pre>
      </div>
      <Texto>Uso:</Texto>
      <div className="sourceCode" id="cb6">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb6-1"><Enlace href="#cb6-1" aria-hidden="true" tabindex="-1"></Enlace >p <span className="op">=</span> Persona(<span className="st">&quot;Carlos&quot;</span>)</span>
            <span id="cb6-2"><Enlace href="#cb6-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(p.nombre)   <span className="co"># ✅ Getter</span></span>
            <span id="cb6-3"><Enlace href="#cb6-3" aria-hidden="true" tabindex="-1"></Enlace >p.nombre <span className="op">=</span> <span className="st">&quot;Andrés&quot;</span>  <span className="co"># ✅ Setter</span></span>
            <span id="cb6-4"><Enlace href="#cb6-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(p.nombre)   <span className="co"># Andrés</span></span>
            <span id="cb6-5"><Enlace href="#cb6-5" aria-hidden="true" tabindex="-1"></Enlace >p.nombre <span className="op">=</span> <span className="st">&quot;&quot;</span>     <span className="co"># ❌ El nombre no puede estar vacío.</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="también-existe-el-deleter-opcional">También existe el deleter
        (opcional)</Titulo>
      <div className="sourceCode" id="cb7">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb7-1"><Enlace href="#cb7-1" aria-hidden="true" tabindex="-1"></Enlace >    <span className="at">@nombre.deleter</span></span>
            <span id="cb7-2"><Enlace href="#cb7-2" aria-hidden="true" tabindex="-1"></Enlace >    <span className="kw">def</span> nombre(<span className="va">self</span>):</span>
            <span id="cb7-3"><Enlace href="#cb7-3" aria-hidden="true" tabindex="-1"></Enlace >        <span className="bu">print</span>(<span className="st">&quot;Eliminando el nombre...&quot;</span>)</span>
            <span id="cb7-4"><Enlace href="#cb7-4" aria-hidden="true" tabindex="-1"></Enlace >        <span className="kw">del</span> <span className="va">self</span>.__nombre</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="en-resumen">En resumen</Titulo>
      <table>
        <thead>
          <tr>
            <th>Decorador</th>
            <th>Función</th>
            <th>Qué hace</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>@property</code></td>
            <td>Getter</td>
            <td>Devuelve el valor (lectura)</td>
          </tr>
          <tr>
            <td><code>@atributo.setter</code></td>
            <td>Setter</td>
            <td>Modifica el valor (escritura)</td>
          </tr>
          <tr>
            <td><code>@atributo.deleter</code></td>
            <td>Deleter</td>
            <td>Elimina el atributo</td>
          </tr>
        </tbody>
      </table>
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
