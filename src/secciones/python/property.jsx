import Titulo from "./../../componentes/titulo.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Linea from "./../../componentes/linea.jsx";

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="decorador-property">Decorador <span class="citation" data-cites="property">@property</span></Titulo>
      <Texto><code>@property</code> se usa para <strong>encapsular
        atributos</strong>, <strong>añadir validaciones o lógica
          interna</strong>, pero sin cambiar la forma natural de acceder o
        modificar una variable.</Texto>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><a href="#decorador-property">Decorador <span class="citation" data-cites="property">@property</span></a>
          <Lista>
            <li><a href="#temario">Temario</a></li>
            <li><a href="#qué-hace-property-en-python">¿Qué hace
              <code>@property</code> en Python?</a></li>
            <li><a href="#ejemplo-básico-sin-property">Ejemplo básico sin
              <code>@property</code></a></li>
            <li><a href="#con-property">Con <code>@property</code></a></li>
            <li><a href="#agregando-un-setter-para-modificar-el-valor">Agregando un
              <strong>setter</strong> para modificar el valor</a></li>
            <li><a href="#también-existe-el-deleter-opcional">También existe el
              deleter (opcional)</a></li>
            <li><a href="#en-resumen">En resumen</a></li>
          </Lista>
        </li>
      </Lista>
      <Texto><a href="./../readme.md#5-python">Regresar a la Guía
        Principal</a></Texto>
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
      <div class="sourceCode" id="cb1">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="kw">class</span> Persona:</span>
            <span id="cb1-2"><a href="#cb1-2" aria-hidden="true" tabindex="-1"></a>    <span class="kw">def</span> <span class="fu">__init__</span>(<span class="va">self</span>, nombre):</span>
            <span id="cb1-3"><a href="#cb1-3" aria-hidden="true" tabindex="-1"></a>        <span class="va">self</span>.__nombre <span class="op">=</span> nombre  <span class="co"># atributo privado</span></span>
            <span id="cb1-4"><a href="#cb1-4" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb1-5"><a href="#cb1-5" aria-hidden="true" tabindex="-1"></a>    <span class="kw">def</span> get_nombre(<span class="va">self</span>):</span>
            <span id="cb1-6"><a href="#cb1-6" aria-hidden="true" tabindex="-1"></a>        <span class="cf">return</span> <span class="va">self</span>.__nombre</span></code></pre>
      </div>
      <Texto>Uso:</Texto>
      <div class="sourceCode" id="cb2">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a>p <span class="op">=</span> Persona(<span class="st">&quot;Ana&quot;</span>)</span>
            <span id="cb2-2"><a href="#cb2-2" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(p.get_nombre())  <span class="co"># ✅ Funciona</span></span></code></pre>
      </div>
      <Texto>Pero se ve <em>feo</em> tener que escribir <code>.get_nombre()</code>
        cada vez. Ahí entra <code>@property</code>.</Texto>
      <Linea />
      <Titulo title="h2" id="con-property">Con <code>@property</code></Titulo>
      <div class="sourceCode" id="cb3">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a><span class="kw">class</span> Persona:</span>
            <span id="cb3-2"><a href="#cb3-2" aria-hidden="true" tabindex="-1"></a>    <span class="kw">def</span> <span class="fu">__init__</span>(<span class="va">self</span>, nombre):</span>
            <span id="cb3-3"><a href="#cb3-3" aria-hidden="true" tabindex="-1"></a>        <span class="va">self</span>.__nombre <span class="op">=</span> nombre</span>
            <span id="cb3-4"><a href="#cb3-4" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb3-5"><a href="#cb3-5" aria-hidden="true" tabindex="-1"></a>    <span class="at">@property</span></span>
            <span id="cb3-6"><a href="#cb3-6" aria-hidden="true" tabindex="-1"></a>    <span class="kw">def</span> nombre(<span class="va">self</span>):</span>
            <span id="cb3-7"><a href="#cb3-7" aria-hidden="true" tabindex="-1"></a>        <span class="cf">return</span> <span class="va">self</span>.__nombre</span></code></pre>
      </div>
      <Texto>Uso:</Texto>
      <div class="sourceCode" id="cb4">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a>p <span class="op">=</span> Persona(<span class="st">&quot;Luis&quot;</span>)</span>
            <span id="cb4-2"><a href="#cb4-2" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(p.nombre)  <span class="co"># ✅ Sin paréntesis, parece un atributo</span></span></code></pre>
      </div>
      <Lista>
        <li>Python llama automáticamente al método <code>nombre()</code>
          cuando escribes <code>p.nombre</code>.</li>    <li>Es solo de lectura por ahora (no se puede cambiar el valor
            directamente).</li>  </Lista>
      <Linea />
      <Titulo title="h2" id="agregando-un-setter-para-modificar-el-valor">Agregando un
        <strong>setter</strong> para modificar el valor
      </Titulo>
      <div class="sourceCode" id="cb5">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb5-1"><a href="#cb5-1" aria-hidden="true" tabindex="-1"></a><span class="kw">class</span> Persona:</span>
            <span id="cb5-2"><a href="#cb5-2" aria-hidden="true" tabindex="-1"></a>    <span class="kw">def</span> <span class="fu">__init__</span>(<span class="va">self</span>, nombre):</span>
            <span id="cb5-3"><a href="#cb5-3" aria-hidden="true" tabindex="-1"></a>        <span class="va">self</span>.__nombre <span class="op">=</span> nombre</span>
            <span id="cb5-4"><a href="#cb5-4" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb5-5"><a href="#cb5-5" aria-hidden="true" tabindex="-1"></a>    <span class="at">@property</span></span>
            <span id="cb5-6"><a href="#cb5-6" aria-hidden="true" tabindex="-1"></a>    <span class="kw">def</span> nombre(<span class="va">self</span>):</span>
            <span id="cb5-7"><a href="#cb5-7" aria-hidden="true" tabindex="-1"></a>        <span class="cf">return</span> <span class="va">self</span>.__nombre</span>
            <span id="cb5-8"><a href="#cb5-8" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb5-9"><a href="#cb5-9" aria-hidden="true" tabindex="-1"></a>    <span class="at">@nombre.setter</span></span>
            <span id="cb5-10"><a href="#cb5-10" aria-hidden="true" tabindex="-1"></a>    <span class="kw">def</span> nombre(<span class="va">self</span>, nuevo_nombre):</span>
            <span id="cb5-11"><a href="#cb5-11" aria-hidden="true" tabindex="-1"></a>        <span class="cf">if</span> <span class="bu">len</span>(nuevo_nombre) <span class="op">&gt;</span> <span class="dv">0</span>:</span>
            <span id="cb5-12"><a href="#cb5-12" aria-hidden="true" tabindex="-1"></a>            <span class="va">self</span>.__nombre <span class="op">=</span> nuevo_nombre</span>
            <span id="cb5-13"><a href="#cb5-13" aria-hidden="true" tabindex="-1"></a>        <span class="cf">else</span>:</span>
            <span id="cb5-14"><a href="#cb5-14" aria-hidden="true" tabindex="-1"></a>            <span class="bu">print</span>(<span class="st">&quot;❌ El nombre no puede estar vacío.&quot;</span>)</span></code></pre>
      </div>
      <Texto>Uso:</Texto>
      <div class="sourceCode" id="cb6">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a>p <span class="op">=</span> Persona(<span class="st">&quot;Carlos&quot;</span>)</span>
            <span id="cb6-2"><a href="#cb6-2" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(p.nombre)   <span class="co"># ✅ Getter</span></span>
            <span id="cb6-3"><a href="#cb6-3" aria-hidden="true" tabindex="-1"></a>p.nombre <span class="op">=</span> <span class="st">&quot;Andrés&quot;</span>  <span class="co"># ✅ Setter</span></span>
            <span id="cb6-4"><a href="#cb6-4" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(p.nombre)   <span class="co"># Andrés</span></span>
            <span id="cb6-5"><a href="#cb6-5" aria-hidden="true" tabindex="-1"></a>p.nombre <span class="op">=</span> <span class="st">&quot;&quot;</span>     <span class="co"># ❌ El nombre no puede estar vacío.</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="también-existe-el-deleter-opcional">También existe el deleter
        (opcional)</Titulo>
      <div class="sourceCode" id="cb7">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb7-1"><a href="#cb7-1" aria-hidden="true" tabindex="-1"></a>    <span class="at">@nombre.deleter</span></span>
            <span id="cb7-2"><a href="#cb7-2" aria-hidden="true" tabindex="-1"></a>    <span class="kw">def</span> nombre(<span class="va">self</span>):</span>
            <span id="cb7-3"><a href="#cb7-3" aria-hidden="true" tabindex="-1"></a>        <span class="bu">print</span>(<span class="st">&quot;Eliminando el nombre...&quot;</span>)</span>
            <span id="cb7-4"><a href="#cb7-4" aria-hidden="true" tabindex="-1"></a>        <span class="kw">del</span> <span class="va">self</span>.__nombre</span></code></pre>
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
      <Texto><a href="./../readme.md#5-python">Regresar a la Guía
        Principal</a></Texto>
      <blockquote>
        <Texto><strong>Autor:</strong> Fravelz</Texto>
      </blockquote>
    </>
  );
}
export default nameabcd;
