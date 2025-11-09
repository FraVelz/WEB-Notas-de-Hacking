import Titulo from "./../../componentes/titulo.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Linea from "./../../componentes/linea.jsx";

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="clases-en-python">Clases en Python</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><Enlace href="#clases-en-python">Clases en Python</Enlace >
          <Lista>
            <li><Enlace href="#temario">Temario</Enlace ></li>
            <li><Enlace href="#qué-es-una-clase-en-python">¿Qué es una clase en
              Python?</Enlace ></li>
            <li><Enlace href="#sintaxis-básica">Sintaxis básica</Enlace >
              <Lista>
                <li><Enlace href="#explicación">Explicación</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#atributos">Atributos</Enlace >
              <Lista>
                <li><Enlace href="#1-de-instancia">1. De instancia</Enlace ></li>
                <li><Enlace href="#2-de-clase">2. De clase</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#métodos">Métodos</Enlace >
              <Lista>
                <li><Enlace href="#método-de-instancia">Método de instancia</Enlace ></li>
                <li><Enlace href="#método-de-clase">Método de clase</Enlace ></li>
                <li><Enlace href="#método-estático">Método estático</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#herencia">Herencia</Enlace ></li>
            <li><Enlace href="#polimorfismo">Polimorfismo</Enlace ></li>
            <li><Enlace href="#encapsulación">Encapsulación</Enlace ></li>
            <li><Enlace href="#propiedades-property">Propiedades (<span className="citation"
              data-cites="property">@property</span>)</Enlace ></li>
            <li><Enlace href="#composición">Composición</Enlace ></li>
            <li><Enlace href="#ejemplo-completo">Ejemplo completo</Enlace ></li>
            <li><Enlace href="#resumen-rápido">Resumen rápido</Enlace ></li>
          </Lista>
        </li>
      </Lista>
      <Texto><Enlace href="./../readme.md#5-python">Regresar a la Guía
        Principal</Enlace ></Texto>
      <Linea />
      <Titulo title="h2" id="qué-es-una-clase-en-python">¿Qué es una clase en Python?</Titulo>
      <Texto>Una <strong>clase</strong> es una <strong>plantilla o molde</strong>
        para crear <strong>objetos</strong> (instancias) que agrupan
        <strong>datos (atributos)</strong> y <strong>funciones
          (métodos)</strong> relacionados.
      </Texto>
      <Texto>Los <strong>objetos</strong> son las copias o instancias creadas a
        partir de esa clase.</Texto>
      <Linea />
      <Titulo title="h2" id="sintaxis-básica">Sintaxis básica</Titulo>
      <div className="sourceCode" id="cb1">
        <pre className="sourceCode python"><code className="sourceCode python"><span id="cb1-1"><Enlace href="#cb1-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">class</span> Persona:</span>
          <span id="cb1-2"><Enlace href="#cb1-2" aria-hidden="true" tabindex="-1"></Enlace >    <span className="kw">def</span> <span className="fu">__init__</span>(<span className="va">self</span>, nombre, edad):  <span className="co"># Constructor</span></span>
          <span id="cb1-3"><Enlace href="#cb1-3" aria-hidden="true" tabindex="-1"></Enlace >        <span className="va">self</span>.nombre <span className="op">=</span> nombre           <span className="co"># Atributos</span></span>
          <span id="cb1-4"><Enlace href="#cb1-4" aria-hidden="true" tabindex="-1"></Enlace >        <span className="va">self</span>.edad <span className="op">=</span> edad</span>
          <span id="cb1-5"><Enlace href="#cb1-5" aria-hidden="true" tabindex="-1"></Enlace ></span>
          <span id="cb1-6"><Enlace href="#cb1-6" aria-hidden="true" tabindex="-1"></Enlace >    <span className="kw">def</span> saludar(<span className="va">self</span>):                 <span className="co"># Método</span></span>
          <span id="cb1-7"><Enlace href="#cb1-7" aria-hidden="true" tabindex="-1"></Enlace >        <span className="bu">print</span>(<span className="ss">f&quot;Hola, soy </span><span className="sc">(</span><span className="va">self</span><span className="sc">.</span>nombre<span className="sc">)</span><span className="ss"> y tengo </span><span className="sc">(</span><span className="va">self</span><span className="sc">.</span>edad<span className="sc">)</span><span className="ss"> años&quot;</span>)</span>
          <span id="cb1-8"><Enlace href="#cb1-8" aria-hidden="true" tabindex="-1"></Enlace ></span>
          <span id="cb1-9"><Enlace href="#cb1-9" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Crear objeto</span></span>
          <span id="cb1-10"><Enlace href="#cb1-10" aria-hidden="true" tabindex="-1"></Enlace >p1 <span className="op">=</span> Persona(<span className="st">&quot;Francisco&quot;</span>, <span className="dv">17</span>)</span>
          <span id="cb1-11"><Enlace href="#cb1-11" aria-hidden="true" tabindex="-1"></Enlace >p1.saludar()</span></code></pre>
      </div>
      <Titulo title="h3" id="explicación">Explicación</Titulo>
      <Lista>
        <li><code>class Persona:</code> → define la clase.</li>
        <li><code>__init__</code> → <strong>constructor</strong>, se ejecuta al
          crear el objeto.</li>
        <li><code>self</code> → referencia al <strong>objeto actual</strong>
          (similar a <code>this</code> en otros lenguajes).</li>
        <li><code>p1</code> → <strong>instancia</strong> de la clase
          <code>Persona</code>.
        </li>
      </Lista>
      <Linea />
      <Titulo title="h2" id="atributos">Atributos</Titulo>
      <Titulo title="h3" id="de-instancia">1. De instancia</Titulo>
      <Texto>Son únicos para cada objeto:</Texto>
      <div className="sourceCode" id="cb2">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb2-1"><Enlace href="#cb2-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">class</span> Coche:</span>
            <span id="cb2-2"><Enlace href="#cb2-2" aria-hidden="true" tabindex="-1"></Enlace >    <span className="kw">def</span> <span className="fu">__init__</span>(<span className="va">self</span>, marca):</span>
            <span id="cb2-3"><Enlace href="#cb2-3" aria-hidden="true" tabindex="-1"></Enlace >        <span className="va">self</span>.marca <span className="op">=</span> marca</span></code></pre>
      </div>
      <Titulo title="h3" id="de-clase">2. De clase</Titulo>
      <Texto>Son <strong>compartidos por todas las instancias</strong>:</Texto>
      <div className="sourceCode" id="cb3">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb3-1"><Enlace href="#cb3-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">class</span> Coche:</span>
            <span id="cb3-2"><Enlace href="#cb3-2" aria-hidden="true" tabindex="-1"></Enlace >    ruedas <span className="op">=</span> <span className="dv">4</span>  <span className="co"># atributo de clase</span></span>
            <span id="cb3-3"><Enlace href="#cb3-3" aria-hidden="true" tabindex="-1"></Enlace >    <span className="kw">def</span> <span className="fu">__init__</span>(<span className="va">self</span>, marca):</span>
            <span id="cb3-4"><Enlace href="#cb3-4" aria-hidden="true" tabindex="-1"></Enlace >        <span className="va">self</span>.marca <span className="op">=</span> marca</span></code></pre>
      </div>
      <div className="sourceCode" id="cb4">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb4-1"><Enlace href="#cb4-1" aria-hidden="true" tabindex="-1"></Enlace >a <span className="op">=</span> Coche(<span className="st">&quot;Toyota&quot;</span>)</span>
            <span id="cb4-2"><Enlace href="#cb4-2" aria-hidden="true" tabindex="-1"></Enlace >b <span className="op">=</span> Coche(<span className="st">&quot;Honda&quot;</span>)</span>
            <span id="cb4-3"><Enlace href="#cb4-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(a.ruedas, b.ruedas)  <span className="co"># ambos tienen 4</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="métodos">Métodos</Titulo>
      <Titulo title="h3" id="método-de-instancia">Método de instancia</Titulo>
      <Texto>Opera sobre el objeto (<code>self</code>).</Texto>
      <div className="sourceCode" id="cb5">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb5-1"><Enlace href="#cb5-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">def</span> mostrar(<span className="va">self</span>):</span>
            <span id="cb5-2"><Enlace href="#cb5-2" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">print</span>(<span className="va">self</span>.nombre)</span></code></pre>
      </div>
      <Titulo title="h3" id="método-de-clase">Método de clase</Titulo>
      <Texto>Opera sobre la clase, no sobre un objeto.</Texto>
      <div className="sourceCode" id="cb6">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb6-1"><Enlace href="#cb6-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="at">@classmethod</span></span>
            <span id="cb6-2"><Enlace href="#cb6-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">def</span> crear_desde_edad(cls, edad):</span>
            <span id="cb6-3"><Enlace href="#cb6-3" aria-hidden="true" tabindex="-1"></Enlace >    <span className="cf">return</span> cls(<span className="st">&quot;Desconocido&quot;</span>, edad)</span></code></pre>
      </div>
      <Titulo title="h3" id="método-estático">Método estático</Titulo>
      <Texto>No usa <code>self</code> ni <code>cls</code>. Funciona como una
        función normal dentro de la clase.</Texto>
      <div className="sourceCode" id="cb7">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb7-1"><Enlace href="#cb7-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="at">@staticmethod</span></span>
            <span id="cb7-2"><Enlace href="#cb7-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">def</span> es_mayor(edad):</span>
            <span id="cb7-3"><Enlace href="#cb7-3" aria-hidden="true" tabindex="-1"></Enlace >    <span className="cf">return</span> edad <span className="op">&gt;=</span> <span className="dv">18</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="herencia">Herencia</Titulo>
      <Texto>Permite crear una clase nueva basada en otra (reutiliza código).</Texto>
      <div className="sourceCode" id="cb8">
        <pre className="sourceCode python"><code className="sourceCode python"><span id="cb8-1"><Enlace href="#cb8-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">class</span> Animal:</span>
          <span id="cb8-2"><Enlace href="#cb8-2" aria-hidden="true" tabindex="-1"></Enlace >    <span className="kw">def</span> hablar(<span className="va">self</span>):</span>
          <span id="cb8-3"><Enlace href="#cb8-3" aria-hidden="true" tabindex="-1"></Enlace >        <span className="bu">print</span>(<span className="st">&quot;El animal hace un sonido&quot;</span>)</span>
          <span id="cb8-4"><Enlace href="#cb8-4" aria-hidden="true" tabindex="-1"></Enlace ></span>
          <span id="cb8-5"><Enlace href="#cb8-5" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">class</span> Perro(Animal):  <span className="co"># Hereda de Animal</span></span>
          <span id="cb8-6"><Enlace href="#cb8-6" aria-hidden="true" tabindex="-1"></Enlace >    <span className="kw">def</span> hablar(<span className="va">self</span>):</span>
          <span id="cb8-7"><Enlace href="#cb8-7" aria-hidden="true" tabindex="-1"></Enlace >        <span className="bu">print</span>(<span className="st">&quot;Guau&quot;</span>)</span>
          <span id="cb8-8"><Enlace href="#cb8-8" aria-hidden="true" tabindex="-1"></Enlace ></span>
          <span id="cb8-9"><Enlace href="#cb8-9" aria-hidden="true" tabindex="-1"></Enlace >p <span className="op">=</span> Perro()</span>
          <span id="cb8-10"><Enlace href="#cb8-10" aria-hidden="true" tabindex="-1"></Enlace >p.hablar()</span></code></pre>
      </div>
      <Texto>✔️ La clase hija <strong>sobrescribe</strong> métodos de la clase
        padre. ✔️ Se puede usar <code>super()</code> para llamar métodos del
        padre.</Texto>
      <Linea />
      <Titulo title="h2" id="polimorfismo">Polimorfismo</Titulo>
      <Texto>Diferentes clases pueden usar el mismo método con comportamientos
        distintos:</Texto>
      <div className="sourceCode" id="cb9">
        <pre className="sourceCode python"><code className="sourceCode python"><span id="cb9-1"><Enlace href="#cb9-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">class</span> Gato:</span>
          <span id="cb9-2"><Enlace href="#cb9-2" aria-hidden="true" tabindex="-1"></Enlace >    <span className="kw">def</span> hablar(<span className="va">self</span>): <span className="bu">print</span>(<span className="st">&quot;Miau&quot;</span>)</span>
          <span id="cb9-3"><Enlace href="#cb9-3" aria-hidden="true" tabindex="-1"></Enlace ></span>
          <span id="cb9-4"><Enlace href="#cb9-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">class</span> Perro:</span>
          <span id="cb9-5"><Enlace href="#cb9-5" aria-hidden="true" tabindex="-1"></Enlace >    <span className="kw">def</span> hablar(<span className="va">self</span>): <span className="bu">print</span>(<span className="st">&quot;Guau&quot;</span>)</span>
          <span id="cb9-6"><Enlace href="#cb9-6" aria-hidden="true" tabindex="-1"></Enlace ></span>
          <span id="cb9-7"><Enlace href="#cb9-7" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">for</span> animal <span className="kw">in</span> [Gato(), Perro()]:</span>
          <span id="cb9-8"><Enlace href="#cb9-8" aria-hidden="true" tabindex="-1"></Enlace >    animal.hablar()</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="encapsulación">Encapsulación</Titulo>
      <Texto>Controla la visibilidad de los atributos/métodos.</Texto>
      <table>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Ejemplo</th>
            <th>Acceso</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Público</td>
            <td><code>self.nombre</code></td>
            <td>libre</td>
          </tr>
          <tr>
            <td>Protegido</td>
            <td><code>_nombre</code></td>
            <td>interno/subclases</td>
          </tr>
          <tr>
            <td>Privado</td>
            <td><code>__nombre</code></td>
            <td>solo dentro de la clase</td>
          </tr>
        </tbody>
      </table>
      <div className="sourceCode" id="cb10">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb10-1"><Enlace href="#cb10-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">class</span> Persona:</span>
            <span id="cb10-2"><Enlace href="#cb10-2" aria-hidden="true" tabindex="-1"></Enlace >    <span className="kw">def</span> <span className="fu">__init__</span>(<span className="va">self</span>, nombre):</span>
            <span id="cb10-3"><Enlace href="#cb10-3" aria-hidden="true" tabindex="-1"></Enlace >        <span className="va">self</span>.__nombre <span className="op">=</span> nombre  <span className="co"># privado</span></span>
            <span id="cb10-4"><Enlace href="#cb10-4" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb10-5"><Enlace href="#cb10-5" aria-hidden="true" tabindex="-1"></Enlace >    <span className="kw">def</span> mostrar(<span className="va">self</span>):</span>
            <span id="cb10-6"><Enlace href="#cb10-6" aria-hidden="true" tabindex="-1"></Enlace >        <span className="bu">print</span>(<span className="va">self</span>.__nombre)</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="propiedades-property">Propiedades (<span className="citation" data-cites="property">@property</span>)</Titulo>
      <Texto>Permiten acceder a métodos como si fueran atributos.</Texto>
      <div className="sourceCode" id="cb11">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb11-1"><Enlace href="#cb11-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">class</span> Rectangulo:</span>
            <span id="cb11-2"><Enlace href="#cb11-2" aria-hidden="true" tabindex="-1"></Enlace >    <span className="kw">def</span> <span className="fu">__init__</span>(<span className="va">self</span>, base, altura):</span>
            <span id="cb11-3"><Enlace href="#cb11-3" aria-hidden="true" tabindex="-1"></Enlace >        <span className="va">self</span>.base <span className="op">=</span> base</span>
            <span id="cb11-4"><Enlace href="#cb11-4" aria-hidden="true" tabindex="-1"></Enlace >        <span className="va">self</span>.altura <span className="op">=</span> altura</span>
            <span id="cb11-5"><Enlace href="#cb11-5" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb11-6"><Enlace href="#cb11-6" aria-hidden="true" tabindex="-1"></Enlace >    <span className="at">@property</span></span>
            <span id="cb11-7"><Enlace href="#cb11-7" aria-hidden="true" tabindex="-1"></Enlace >    <span className="kw">def</span> area(<span className="va">self</span>):</span>
            <span id="cb11-8"><Enlace href="#cb11-8" aria-hidden="true" tabindex="-1"></Enlace >        <span className="cf">return</span> <span className="va">self</span>.base <span className="op">*</span> <span className="va">self</span>.altura</span>
            <span id="cb11-9"><Enlace href="#cb11-9" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb11-10"><Enlace href="#cb11-10" aria-hidden="true" tabindex="-1"></Enlace >r <span className="op">=</span> Rectangulo(<span className="dv">4</span>, <span className="dv">5</span>)</span>
            <span id="cb11-11"><Enlace href="#cb11-11" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(r.area)  <span className="co"># No se usa paréntesis</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="composición">Composición</Titulo>
      <Texto>Una clase contiene objetos de otras clases:</Texto>
      <div className="sourceCode" id="cb12">
        <pre className="sourceCode python"><code className="sourceCode python"><span id="cb12-1"><Enlace href="#cb12-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">class</span> Motor:</span>
          <span id="cb12-2"><Enlace href="#cb12-2" aria-hidden="true" tabindex="-1"></Enlace >    <span className="kw">def</span> arrancar(<span className="va">self</span>):</span>
          <span id="cb12-3"><Enlace href="#cb12-3" aria-hidden="true" tabindex="-1"></Enlace >        <span className="bu">print</span>(<span className="st">&quot;Motor encendido&quot;</span>)</span>
          <span id="cb12-4"><Enlace href="#cb12-4" aria-hidden="true" tabindex="-1"></Enlace ></span>
          <span id="cb12-5"><Enlace href="#cb12-5" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">class</span> Coche:</span>
          <span id="cb12-6"><Enlace href="#cb12-6" aria-hidden="true" tabindex="-1"></Enlace >    <span className="kw">def</span> <span className="fu">__init__</span>(<span className="va">self</span>):</span>
          <span id="cb12-7"><Enlace href="#cb12-7" aria-hidden="true" tabindex="-1"></Enlace >        <span className="va">self</span>.motor <span className="op">=</span> Motor()</span>
          <span id="cb12-8"><Enlace href="#cb12-8" aria-hidden="true" tabindex="-1"></Enlace ></span>
          <span id="cb12-9"><Enlace href="#cb12-9" aria-hidden="true" tabindex="-1"></Enlace >c <span className="op">=</span> Coche()</span>
          <span id="cb12-10"><Enlace href="#cb12-10" aria-hidden="true" tabindex="-1"></Enlace >c.motor.arrancar()</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="ejemplo-completo">Ejemplo completo</Titulo>
      <div className="sourceCode" id="cb13">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb13-1"><Enlace href="#cb13-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">class</span> CuentaBancaria:</span>
            <span id="cb13-2"><Enlace href="#cb13-2" aria-hidden="true" tabindex="-1"></Enlace >    tasa_interes <span className="op">=</span> <span className="fl">0.05</span>  <span className="co"># atributo de clase</span></span>
            <span id="cb13-3"><Enlace href="#cb13-3" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb13-4"><Enlace href="#cb13-4" aria-hidden="true" tabindex="-1"></Enlace >    <span className="kw">def</span> <span className="fu">__init__</span>(<span className="va">self</span>, titular, saldo<span className="op">=</span><span className="dv">0</span>):</span>
            <span id="cb13-5"><Enlace href="#cb13-5" aria-hidden="true" tabindex="-1"></Enlace >        <span className="va">self</span>.titular <span className="op">=</span> titular</span>
            <span id="cb13-6"><Enlace href="#cb13-6" aria-hidden="true" tabindex="-1"></Enlace >        <span className="va">self</span>.__saldo <span className="op">=</span> saldo  <span className="co"># privado</span></span>
            <span id="cb13-7"><Enlace href="#cb13-7" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb13-8"><Enlace href="#cb13-8" aria-hidden="true" tabindex="-1"></Enlace >    <span className="kw">def</span> depositar(<span className="va">self</span>, cantidad):</span>
            <span id="cb13-9"><Enlace href="#cb13-9" aria-hidden="true" tabindex="-1"></Enlace >        <span className="va">self</span>.__saldo <span className="op">+=</span> cantidad</span>
            <span id="cb13-10"><Enlace href="#cb13-10" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb13-11"><Enlace href="#cb13-11" aria-hidden="true" tabindex="-1"></Enlace >    <span className="kw">def</span> retirar(<span className="va">self</span>, cantidad):</span>
            <span id="cb13-12"><Enlace href="#cb13-12" aria-hidden="true" tabindex="-1"></Enlace >        <span className="cf">if</span> cantidad <span className="op">&lt;=</span> <span className="va">self</span>.__saldo:</span>
            <span id="cb13-13"><Enlace href="#cb13-13" aria-hidden="true" tabindex="-1"></Enlace >            <span className="va">self</span>.__saldo <span className="op">-=</span> cantidad</span>
            <span id="cb13-14"><Enlace href="#cb13-14" aria-hidden="true" tabindex="-1"></Enlace >        <span className="cf">else</span>:</span>
            <span id="cb13-15"><Enlace href="#cb13-15" aria-hidden="true" tabindex="-1"></Enlace >            <span className="bu">print</span>(<span className="st">&quot;Fondos insuficientes&quot;</span>)</span>
            <span id="cb13-16"><Enlace href="#cb13-16" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb13-17"><Enlace href="#cb13-17" aria-hidden="true" tabindex="-1"></Enlace >    <span className="at">@property</span></span>
            <span id="cb13-18"><Enlace href="#cb13-18" aria-hidden="true" tabindex="-1"></Enlace >    <span className="kw">def</span> saldo(<span className="va">self</span>):</span>
            <span id="cb13-19"><Enlace href="#cb13-19" aria-hidden="true" tabindex="-1"></Enlace >        <span className="cf">return</span> <span className="va">self</span>.__saldo</span>
            <span id="cb13-20"><Enlace href="#cb13-20" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb13-21"><Enlace href="#cb13-21" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Uso</span></span>
            <span id="cb13-22"><Enlace href="#cb13-22" aria-hidden="true" tabindex="-1"></Enlace >cuenta <span className="op">=</span> CuentaBancaria(<span className="st">&quot;Francisco&quot;</span>, <span className="dv">1000</span>)</span>
            <span id="cb13-23"><Enlace href="#cb13-23" aria-hidden="true" tabindex="-1"></Enlace >cuenta.depositar(<span className="dv">500</span>)</span>
            <span id="cb13-24"><Enlace href="#cb13-24" aria-hidden="true" tabindex="-1"></Enlace >cuenta.retirar(<span className="dv">200</span>)</span>
            <span id="cb13-25"><Enlace href="#cb13-25" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(cuenta.saldo)</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="resumen-rápido">Resumen rápido</Titulo>
      <table>
        <colgroup>
          <col style="width: 43%" />
          <col style="width: 56%" />
        </colgroup>
        <thead>
          <tr>
            <th>Concepto</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>class</code></td>
            <td>Define una clase</td>
          </tr>
          <tr>
            <td><code>__init__</code></td>
            <td>Constructor</td>
          </tr>
          <tr>
            <td><code>self</code></td>
            <td>Referencia al objeto actual</td>
          </tr>
          <tr>
            <td>Atributos</td>
            <td>Datos de objeto o clase</td>
          </tr>
          <tr>
            <td>Métodos</td>
            <td>Funciones dentro de la clase</td>
          </tr>
          <tr>
            <td><code>@classmethod</code>, <code>@staticmethod</code></td>
            <td>Métodos especiales</td>
          </tr>
          <tr>
            <td>Herencia</td>
            <td>Reutilización de código</td>
          </tr>
          <tr>
            <td>Encapsulación</td>
            <td>Control de acceso</td>
          </tr>
          <tr>
            <td>Polimorfismo</td>
            <td>Mismo método, distinto comportamiento</td>
          </tr>
          <tr>
            <td><code>@property</code></td>
            <td>Acceso elegante a métodos como atributos</td>
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
