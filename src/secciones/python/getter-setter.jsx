import Titulo from "./../../componentes/titulo.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Linea from "./../../componentes/linea.jsx";
import Enlace from "../../componentes/enlace.jsx";

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="getters-y-setters">Getters y Setters</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><Enlace href="#getters-y-setters">Getters y Setters</Enlace >
          <Lista>
            <li><Enlace href="#temario">Temario</Enlace ></li>
            <li><Enlace href="#qué-son-los-getters-y-setters">¿Qué son los getters y
              setters?</Enlace ></li>
            <li><Enlace href="#ejemplo-básico">Ejemplo básico</Enlace ></li>
            <li><Enlace href="#pero-python-tiene-una-forma-más-elegante--property">Pero
              Python tiene una forma más elegante →
              <strong><code>@property</code></strong></Enlace >
              <Lista>
                <li><Enlace href="#ejemplo-con-property">Ejemplo con
                  <code>@property</code></Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#ventajas-de-usar-property">Ventajas de usar <span className="citation"
              data-cites="property">@property</span></Enlace ></li>
            <li><Enlace href="#en-resumen">En resumen</Enlace ></li>
          </Lista>
        </li>
      </Lista>
      <Texto><Enlace href="./../readme.md#5-python">Regresar a la Guía
        Principal</Enlace ></Texto>
      <Linea />
      <Titulo title="h2" id="qué-son-los-getters-y-setters">¿Qué son los getters y
        setters?</Titulo>
      <Lista>
        <li><strong>Getter:</strong> método que <strong>obtiene</strong>
          (lee) el valor de un atributo.</li>    <li><strong>Setter:</strong> método que <strong>establece</strong>
          (modifica) el valor de un atributo.</li>  </Lista>
      <Texto>Se usan para <strong>controlar el acceso a los atributos</strong> de
        una clase, especialmente cuando son “protegidos” o “privados”.</Texto>
      <Linea />
      <Titulo title="h2" id="ejemplo-básico">Ejemplo básico</Titulo>
      <div className="sourceCode" id="cb1">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb1-1"><Enlace href="#cb1-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">class</span> Persona:</span>
            <span id="cb1-2"><Enlace href="#cb1-2" aria-hidden="true" tabindex="-1"></Enlace >    <span className="kw">def</span> <span className="fu">__init__</span>(<span className="va">self</span>, nombre):</span>
            <span id="cb1-3"><Enlace href="#cb1-3" aria-hidden="true" tabindex="-1"></Enlace >        <span className="va">self</span>.__nombre <span className="op">=</span> nombre  <span className="co"># atributo privado</span></span>
            <span id="cb1-4"><Enlace href="#cb1-4" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb1-5"><Enlace href="#cb1-5" aria-hidden="true" tabindex="-1"></Enlace >    <span className="co"># Getter</span></span>
            <span id="cb1-6"><Enlace href="#cb1-6" aria-hidden="true" tabindex="-1"></Enlace >    <span className="kw">def</span> get_nombre(<span className="va">self</span>):</span>
            <span id="cb1-7"><Enlace href="#cb1-7" aria-hidden="true" tabindex="-1"></Enlace >        <span className="cf">return</span> <span className="va">self</span>.__nombre</span>
            <span id="cb1-8"><Enlace href="#cb1-8" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb1-9"><Enlace href="#cb1-9" aria-hidden="true" tabindex="-1"></Enlace >    <span className="co"># Setter</span></span>
            <span id="cb1-10"><Enlace href="#cb1-10" aria-hidden="true" tabindex="-1"></Enlace >    <span className="kw">def</span> set_nombre(<span className="va">self</span>, nuevo_nombre):</span>
            <span id="cb1-11"><Enlace href="#cb1-11" aria-hidden="true" tabindex="-1"></Enlace >        <span className="cf">if</span> <span className="bu">len</span>(nuevo_nombre) <span className="op">&gt;</span> <span className="dv">0</span>:</span>
            <span id="cb1-12"><Enlace href="#cb1-12" aria-hidden="true" tabindex="-1"></Enlace >            <span className="va">self</span>.__nombre <span className="op">=</span> nuevo_nombre</span>
            <span id="cb1-13"><Enlace href="#cb1-13" aria-hidden="true" tabindex="-1"></Enlace >        <span className="cf">else</span>:</span>
            <span id="cb1-14"><Enlace href="#cb1-14" aria-hidden="true" tabindex="-1"></Enlace >            <span className="bu">print</span>(<span className="st">&quot;❌ El nombre no puede estar vacío.&quot;</span>)</span></code></pre>
      </div>
      <Texto>Uso:</Texto>
      <div className="sourceCode" id="cb2">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb2-1"><Enlace href="#cb2-1" aria-hidden="true" tabindex="-1"></Enlace >p <span className="op">=</span> Persona(<span className="st">&quot;Ana&quot;</span>)</span>
            <span id="cb2-2"><Enlace href="#cb2-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(p.get_nombre())  <span className="co"># ✅ Ana</span></span>
            <span id="cb2-3"><Enlace href="#cb2-3" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb2-4"><Enlace href="#cb2-4" aria-hidden="true" tabindex="-1"></Enlace >p.set_nombre(<span className="st">&quot;Luis&quot;</span>)</span>
            <span id="cb2-5"><Enlace href="#cb2-5" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(p.get_nombre())  <span className="co"># ✅ Luis</span></span>
            <span id="cb2-6"><Enlace href="#cb2-6" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb2-7"><Enlace href="#cb2-7" aria-hidden="true" tabindex="-1"></Enlace >p.set_nombre(<span className="st">&quot;&quot;</span>)  <span className="co"># ❌ El nombre no puede estar vacío.</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="pero-python-tiene-una-forma-más-elegante-property">Pero Python
        tiene una forma más elegante →
        <strong><code>@property</code></strong>
      </Titulo>
      <Texto>Python permite crear <em>getters</em> y <em>setters</em> de manera
        más limpia y natural usando <strong>decoradores</strong>.</Texto>
      <Titulo title="h3" id="ejemplo-con-property">Ejemplo con <code>@property</code></Titulo>
      <div className="sourceCode" id="cb3">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb3-1"><Enlace href="#cb3-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">class</span> Persona:</span>
            <span id="cb3-2"><Enlace href="#cb3-2" aria-hidden="true" tabindex="-1"></Enlace >    <span className="kw">def</span> <span className="fu">__init__</span>(<span className="va">self</span>, nombre):</span>
            <span id="cb3-3"><Enlace href="#cb3-3" aria-hidden="true" tabindex="-1"></Enlace >        <span className="va">self</span>.__nombre <span className="op">=</span> nombre</span>
            <span id="cb3-4"><Enlace href="#cb3-4" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb3-5"><Enlace href="#cb3-5" aria-hidden="true" tabindex="-1"></Enlace >    <span className="at">@property</span></span>
            <span id="cb3-6"><Enlace href="#cb3-6" aria-hidden="true" tabindex="-1"></Enlace >    <span className="kw">def</span> nombre(<span className="va">self</span>):</span>
            <span id="cb3-7"><Enlace href="#cb3-7" aria-hidden="true" tabindex="-1"></Enlace >        <span className="cf">return</span> <span className="va">self</span>.__nombre</span>
            <span id="cb3-8"><Enlace href="#cb3-8" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb3-9"><Enlace href="#cb3-9" aria-hidden="true" tabindex="-1"></Enlace >    <span className="at">@nombre.setter</span></span>
            <span id="cb3-10"><Enlace href="#cb3-10" aria-hidden="true" tabindex="-1"></Enlace >    <span className="kw">def</span> nombre(<span className="va">self</span>, nuevo_nombre):</span>
            <span id="cb3-11"><Enlace href="#cb3-11" aria-hidden="true" tabindex="-1"></Enlace >        <span className="cf">if</span> <span className="bu">len</span>(nuevo_nombre) <span className="op">&gt;</span> <span className="dv">0</span>:</span>
            <span id="cb3-12"><Enlace href="#cb3-12" aria-hidden="true" tabindex="-1"></Enlace >            <span className="va">self</span>.__nombre <span className="op">=</span> nuevo_nombre</span>
            <span id="cb3-13"><Enlace href="#cb3-13" aria-hidden="true" tabindex="-1"></Enlace >        <span className="cf">else</span>:</span>
            <span id="cb3-14"><Enlace href="#cb3-14" aria-hidden="true" tabindex="-1"></Enlace >            <span className="bu">print</span>(<span className="st">&quot;❌ El nombre no puede estar vacío.&quot;</span>)</span></code></pre>
      </div>
      <Texto>Ahora se usa como si fuera un <strong>atributo normal</strong>:</Texto>
      <div className="sourceCode" id="cb4">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb4-1"><Enlace href="#cb4-1" aria-hidden="true" tabindex="-1"></Enlace >p <span className="op">=</span> Persona(<span className="st">&quot;Carlos&quot;</span>)</span>
            <span id="cb4-2"><Enlace href="#cb4-2" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb4-3"><Enlace href="#cb4-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(p.nombre)   <span className="co"># ✅ Llama automáticamente al getter</span></span>
            <span id="cb4-4"><Enlace href="#cb4-4" aria-hidden="true" tabindex="-1"></Enlace >p.nombre <span className="op">=</span> <span className="st">&quot;Andrés&quot;</span>  <span className="co"># ✅ Llama automáticamente al setter</span></span>
            <span id="cb4-5"><Enlace href="#cb4-5" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb4-6"><Enlace href="#cb4-6" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(p.nombre)   <span className="co"># ✅ Andrés</span></span>
            <span id="cb4-7"><Enlace href="#cb4-7" aria-hidden="true" tabindex="-1"></Enlace >p.nombre <span className="op">=</span> <span className="st">&quot;&quot;</span>     <span className="co"># ❌ El nombre no puede estar vacío.</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="ventajas-de-usar-property">Ventajas de usar <span className="citation" data-cites="property">@property</span></Titulo>
      <Texto>✅ No cambias la forma de usar los atributos. ✅ Puedes añadir
        validaciones sin romper el código existente. ✅ Encapsulas correctamente
        los datos. ✅ Evitas accesos o cambios indebidos.</Texto>
      <Linea />
      <Titulo title="h2" id="en-resumen">En resumen</Titulo>
      <table>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Decorador</th>
            <th>Se usa para</th>
            <th>Ejemplo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Getter</strong></td>
            <td><code>@property</code></td>
            <td>Leer un valor</td>
            <td><code>obj.atributo</code></td>
          </tr>
          <tr>
            <td><strong>Setter</strong></td>
            <td><code>@atributo.setter</code></td>
            <td>Asignar un valor</td>
            <td><code>obj.atributo = valor</code></td>
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
