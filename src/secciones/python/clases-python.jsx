<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">

<head>
  <meta charset="utf-8" />
  <meta name="generator" content="pandoc" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <title>clases-python</title>

</head>

<body>
  <h1 id="clases-en-python">Clases en Python</h1>
  <hr />
  <h2 id="temario">Temario</h2>
  <ul>
    <li><a href="#clases-en-python">Clases en Python</a>
      <ul>
        <li><a href="#temario">Temario</a></li>
        <li><a href="#qué-es-una-clase-en-python">¿Qué es una clase en
            Python?</a></li>
        <li><a href="#sintaxis-básica">Sintaxis básica</a>
          <ul>
            <li><a href="#explicación">Explicación</a></li>
          </ul>
        </li>
        <li><a href="#atributos">Atributos</a>
          <ul>
            <li><a href="#1-de-instancia">1. De instancia</a></li>
            <li><a href="#2-de-clase">2. De clase</a></li>
          </ul>
        </li>
        <li><a href="#métodos">Métodos</a>
          <ul>
            <li><a href="#método-de-instancia">Método de instancia</a></li>
            <li><a href="#método-de-clase">Método de clase</a></li>
            <li><a href="#método-estático">Método estático</a></li>
          </ul>
        </li>
        <li><a href="#herencia">Herencia</a></li>
        <li><a href="#polimorfismo">Polimorfismo</a></li>
        <li><a href="#encapsulación">Encapsulación</a></li>
        <li><a href="#propiedades-property">Propiedades (<span class="citation"
              data-cites="property">@property</span>)</a></li>
        <li><a href="#composición">Composición</a></li>
        <li><a href="#ejemplo-completo">Ejemplo completo</a></li>
        <li><a href="#resumen-rápido">Resumen rápido</a></li>
      </ul>
    </li>
  </ul>
  <p><a href="./../readme.md#5-python">Regresar a la Guía
      Principal</a></p>
  <hr />
  <h2 id="qué-es-una-clase-en-python">¿Qué es una clase en Python?</h2>
  <p>Una <strong>clase</strong> es una <strong>plantilla o molde</strong>
    para crear <strong>objetos</strong> (instancias) que agrupan
    <strong>datos (atributos)</strong> y <strong>funciones
      (métodos)</strong> relacionados.
  </p>
  <p>Los <strong>objetos</strong> son las copias o instancias creadas a
    partir de esa clase.</p>
  <hr />
  <h2 id="sintaxis-básica">Sintaxis básica</h2>
  <div class="sourceCode" id="cb1">
    <pre class="sourceCode python"><code class="sourceCode python"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="kw">class</span> Persona:</span>
<span id="cb1-2"><a href="#cb1-2" aria-hidden="true" tabindex="-1"></a>    <span class="kw">def</span> <span class="fu">__init__</span>(<span class="va">self</span>, nombre, edad):  <span class="co"># Constructor</span></span>
<span id="cb1-3"><a href="#cb1-3" aria-hidden="true" tabindex="-1"></a>        <span class="va">self</span>.nombre <span class="op">=</span> nombre           <span class="co"># Atributos</span></span>
<span id="cb1-4"><a href="#cb1-4" aria-hidden="true" tabindex="-1"></a>        <span class="va">self</span>.edad <span class="op">=</span> edad</span>
<span id="cb1-5"><a href="#cb1-5" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb1-6"><a href="#cb1-6" aria-hidden="true" tabindex="-1"></a>    <span class="kw">def</span> saludar(<span class="va">self</span>):                 <span class="co"># Método</span></span>
<span id="cb1-7"><a href="#cb1-7" aria-hidden="true" tabindex="-1"></a>        <span class="bu">print</span>(<span class="ss">f&quot;Hola, soy </span><span class="sc">{</span><span class="va">self</span><span class="sc">.</span>nombre<span class="sc">}</span><span class="ss"> y tengo </span><span class="sc">{</span><span class="va">self</span><span class="sc">.</span>edad<span class="sc">}</span><span class="ss"> años&quot;</span>)</span>
<span id="cb1-8"><a href="#cb1-8" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb1-9"><a href="#cb1-9" aria-hidden="true" tabindex="-1"></a><span class="co"># Crear objeto</span></span>
<span id="cb1-10"><a href="#cb1-10" aria-hidden="true" tabindex="-1"></a>p1 <span class="op">=</span> Persona(<span class="st">&quot;Francisco&quot;</span>, <span class="dv">17</span>)</span>
<span id="cb1-11"><a href="#cb1-11" aria-hidden="true" tabindex="-1"></a>p1.saludar()</span></code></pre>
  </div>
  <h3 id="explicación">Explicación</h3>
  <ul>
    <li><code>class Persona:</code> → define la clase.</li>
    <li><code>__init__</code> → <strong>constructor</strong>, se ejecuta al
      crear el objeto.</li>
    <li><code>self</code> → referencia al <strong>objeto actual</strong>
      (similar a <code>this</code> en otros lenguajes).</li>
    <li><code>p1</code> → <strong>instancia</strong> de la clase
      <code>Persona</code>.
    </li>
  </ul>
  <hr />
  <h2 id="atributos">Atributos</h2>
  <h3 id="de-instancia">1. De instancia</h3>
  <p>Son únicos para cada objeto:</p>
  <div class="sourceCode" id="cb2">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="kw">class</span> Coche:</span>
<span id="cb2-2"><a href="#cb2-2" aria-hidden="true" tabindex="-1"></a>    <span class="kw">def</span> <span class="fu">__init__</span>(<span class="va">self</span>, marca):</span>
<span id="cb2-3"><a href="#cb2-3" aria-hidden="true" tabindex="-1"></a>        <span class="va">self</span>.marca <span class="op">=</span> marca</span></code></pre>
  </div>
  <h3 id="de-clase">2. De clase</h3>
  <p>Son <strong>compartidos por todas las instancias</strong>:</p>
  <div class="sourceCode" id="cb3">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a><span class="kw">class</span> Coche:</span>
<span id="cb3-2"><a href="#cb3-2" aria-hidden="true" tabindex="-1"></a>    ruedas <span class="op">=</span> <span class="dv">4</span>  <span class="co"># atributo de clase</span></span>
<span id="cb3-3"><a href="#cb3-3" aria-hidden="true" tabindex="-1"></a>    <span class="kw">def</span> <span class="fu">__init__</span>(<span class="va">self</span>, marca):</span>
<span id="cb3-4"><a href="#cb3-4" aria-hidden="true" tabindex="-1"></a>        <span class="va">self</span>.marca <span class="op">=</span> marca</span></code></pre>
  </div>
  <div class="sourceCode" id="cb4">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a>a <span class="op">=</span> Coche(<span class="st">&quot;Toyota&quot;</span>)</span>
<span id="cb4-2"><a href="#cb4-2" aria-hidden="true" tabindex="-1"></a>b <span class="op">=</span> Coche(<span class="st">&quot;Honda&quot;</span>)</span>
<span id="cb4-3"><a href="#cb4-3" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(a.ruedas, b.ruedas)  <span class="co"># ambos tienen 4</span></span></code></pre>
  </div>
  <hr />
  <h2 id="métodos">Métodos</h2>
  <h3 id="método-de-instancia">Método de instancia</h3>
  <p>Opera sobre el objeto (<code>self</code>).</p>
  <div class="sourceCode" id="cb5">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb5-1"><a href="#cb5-1" aria-hidden="true" tabindex="-1"></a><span class="kw">def</span> mostrar(<span class="va">self</span>):</span>
<span id="cb5-2"><a href="#cb5-2" aria-hidden="true" tabindex="-1"></a>    <span class="bu">print</span>(<span class="va">self</span>.nombre)</span></code></pre>
  </div>
  <h3 id="método-de-clase">Método de clase</h3>
  <p>Opera sobre la clase, no sobre un objeto.</p>
  <div class="sourceCode" id="cb6">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a><span class="at">@classmethod</span></span>
<span id="cb6-2"><a href="#cb6-2" aria-hidden="true" tabindex="-1"></a><span class="kw">def</span> crear_desde_edad(cls, edad):</span>
<span id="cb6-3"><a href="#cb6-3" aria-hidden="true" tabindex="-1"></a>    <span class="cf">return</span> cls(<span class="st">&quot;Desconocido&quot;</span>, edad)</span></code></pre>
  </div>
  <h3 id="método-estático">Método estático</h3>
  <p>No usa <code>self</code> ni <code>cls</code>. Funciona como una
    función normal dentro de la clase.</p>
  <div class="sourceCode" id="cb7">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb7-1"><a href="#cb7-1" aria-hidden="true" tabindex="-1"></a><span class="at">@staticmethod</span></span>
<span id="cb7-2"><a href="#cb7-2" aria-hidden="true" tabindex="-1"></a><span class="kw">def</span> es_mayor(edad):</span>
<span id="cb7-3"><a href="#cb7-3" aria-hidden="true" tabindex="-1"></a>    <span class="cf">return</span> edad <span class="op">&gt;=</span> <span class="dv">18</span></span></code></pre>
  </div>
  <hr />
  <h2 id="herencia">Herencia</h2>
  <p>Permite crear una clase nueva basada en otra (reutiliza código).</p>
  <div class="sourceCode" id="cb8">
    <pre class="sourceCode python"><code class="sourceCode python"><span id="cb8-1"><a href="#cb8-1" aria-hidden="true" tabindex="-1"></a><span class="kw">class</span> Animal:</span>
<span id="cb8-2"><a href="#cb8-2" aria-hidden="true" tabindex="-1"></a>    <span class="kw">def</span> hablar(<span class="va">self</span>):</span>
<span id="cb8-3"><a href="#cb8-3" aria-hidden="true" tabindex="-1"></a>        <span class="bu">print</span>(<span class="st">&quot;El animal hace un sonido&quot;</span>)</span>
<span id="cb8-4"><a href="#cb8-4" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb8-5"><a href="#cb8-5" aria-hidden="true" tabindex="-1"></a><span class="kw">class</span> Perro(Animal):  <span class="co"># Hereda de Animal</span></span>
<span id="cb8-6"><a href="#cb8-6" aria-hidden="true" tabindex="-1"></a>    <span class="kw">def</span> hablar(<span class="va">self</span>):</span>
<span id="cb8-7"><a href="#cb8-7" aria-hidden="true" tabindex="-1"></a>        <span class="bu">print</span>(<span class="st">&quot;Guau&quot;</span>)</span>
<span id="cb8-8"><a href="#cb8-8" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb8-9"><a href="#cb8-9" aria-hidden="true" tabindex="-1"></a>p <span class="op">=</span> Perro()</span>
<span id="cb8-10"><a href="#cb8-10" aria-hidden="true" tabindex="-1"></a>p.hablar()</span></code></pre>
  </div>
  <p>✔️ La clase hija <strong>sobrescribe</strong> métodos de la clase
    padre. ✔️ Se puede usar <code>super()</code> para llamar métodos del
    padre.</p>
  <hr />
  <h2 id="polimorfismo">Polimorfismo</h2>
  <p>Diferentes clases pueden usar el mismo método con comportamientos
    distintos:</p>
  <div class="sourceCode" id="cb9">
    <pre class="sourceCode python"><code class="sourceCode python"><span id="cb9-1"><a href="#cb9-1" aria-hidden="true" tabindex="-1"></a><span class="kw">class</span> Gato:</span>
<span id="cb9-2"><a href="#cb9-2" aria-hidden="true" tabindex="-1"></a>    <span class="kw">def</span> hablar(<span class="va">self</span>): <span class="bu">print</span>(<span class="st">&quot;Miau&quot;</span>)</span>
<span id="cb9-3"><a href="#cb9-3" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb9-4"><a href="#cb9-4" aria-hidden="true" tabindex="-1"></a><span class="kw">class</span> Perro:</span>
<span id="cb9-5"><a href="#cb9-5" aria-hidden="true" tabindex="-1"></a>    <span class="kw">def</span> hablar(<span class="va">self</span>): <span class="bu">print</span>(<span class="st">&quot;Guau&quot;</span>)</span>
<span id="cb9-6"><a href="#cb9-6" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb9-7"><a href="#cb9-7" aria-hidden="true" tabindex="-1"></a><span class="cf">for</span> animal <span class="kw">in</span> [Gato(), Perro()]:</span>
<span id="cb9-8"><a href="#cb9-8" aria-hidden="true" tabindex="-1"></a>    animal.hablar()</span></code></pre>
  </div>
  <hr />
  <h2 id="encapsulación">Encapsulación</h2>
  <p>Controla la visibilidad de los atributos/métodos.</p>
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
  <div class="sourceCode" id="cb10">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb10-1"><a href="#cb10-1" aria-hidden="true" tabindex="-1"></a><span class="kw">class</span> Persona:</span>
<span id="cb10-2"><a href="#cb10-2" aria-hidden="true" tabindex="-1"></a>    <span class="kw">def</span> <span class="fu">__init__</span>(<span class="va">self</span>, nombre):</span>
<span id="cb10-3"><a href="#cb10-3" aria-hidden="true" tabindex="-1"></a>        <span class="va">self</span>.__nombre <span class="op">=</span> nombre  <span class="co"># privado</span></span>
<span id="cb10-4"><a href="#cb10-4" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb10-5"><a href="#cb10-5" aria-hidden="true" tabindex="-1"></a>    <span class="kw">def</span> mostrar(<span class="va">self</span>):</span>
<span id="cb10-6"><a href="#cb10-6" aria-hidden="true" tabindex="-1"></a>        <span class="bu">print</span>(<span class="va">self</span>.__nombre)</span></code></pre>
  </div>
  <hr />
  <h2 id="propiedades-property">Propiedades (<span class="citation" data-cites="property">@property</span>)</h2>
  <p>Permiten acceder a métodos como si fueran atributos.</p>
  <div class="sourceCode" id="cb11">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb11-1"><a href="#cb11-1" aria-hidden="true" tabindex="-1"></a><span class="kw">class</span> Rectangulo:</span>
<span id="cb11-2"><a href="#cb11-2" aria-hidden="true" tabindex="-1"></a>    <span class="kw">def</span> <span class="fu">__init__</span>(<span class="va">self</span>, base, altura):</span>
<span id="cb11-3"><a href="#cb11-3" aria-hidden="true" tabindex="-1"></a>        <span class="va">self</span>.base <span class="op">=</span> base</span>
<span id="cb11-4"><a href="#cb11-4" aria-hidden="true" tabindex="-1"></a>        <span class="va">self</span>.altura <span class="op">=</span> altura</span>
<span id="cb11-5"><a href="#cb11-5" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb11-6"><a href="#cb11-6" aria-hidden="true" tabindex="-1"></a>    <span class="at">@property</span></span>
<span id="cb11-7"><a href="#cb11-7" aria-hidden="true" tabindex="-1"></a>    <span class="kw">def</span> area(<span class="va">self</span>):</span>
<span id="cb11-8"><a href="#cb11-8" aria-hidden="true" tabindex="-1"></a>        <span class="cf">return</span> <span class="va">self</span>.base <span class="op">*</span> <span class="va">self</span>.altura</span>
<span id="cb11-9"><a href="#cb11-9" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb11-10"><a href="#cb11-10" aria-hidden="true" tabindex="-1"></a>r <span class="op">=</span> Rectangulo(<span class="dv">4</span>, <span class="dv">5</span>)</span>
<span id="cb11-11"><a href="#cb11-11" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(r.area)  <span class="co"># No se usa paréntesis</span></span></code></pre>
  </div>
  <hr />
  <h2 id="composición">Composición</h2>
  <p>Una clase contiene objetos de otras clases:</p>
  <div class="sourceCode" id="cb12">
    <pre class="sourceCode python"><code class="sourceCode python"><span id="cb12-1"><a href="#cb12-1" aria-hidden="true" tabindex="-1"></a><span class="kw">class</span> Motor:</span>
<span id="cb12-2"><a href="#cb12-2" aria-hidden="true" tabindex="-1"></a>    <span class="kw">def</span> arrancar(<span class="va">self</span>):</span>
<span id="cb12-3"><a href="#cb12-3" aria-hidden="true" tabindex="-1"></a>        <span class="bu">print</span>(<span class="st">&quot;Motor encendido&quot;</span>)</span>
<span id="cb12-4"><a href="#cb12-4" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb12-5"><a href="#cb12-5" aria-hidden="true" tabindex="-1"></a><span class="kw">class</span> Coche:</span>
<span id="cb12-6"><a href="#cb12-6" aria-hidden="true" tabindex="-1"></a>    <span class="kw">def</span> <span class="fu">__init__</span>(<span class="va">self</span>):</span>
<span id="cb12-7"><a href="#cb12-7" aria-hidden="true" tabindex="-1"></a>        <span class="va">self</span>.motor <span class="op">=</span> Motor()</span>
<span id="cb12-8"><a href="#cb12-8" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb12-9"><a href="#cb12-9" aria-hidden="true" tabindex="-1"></a>c <span class="op">=</span> Coche()</span>
<span id="cb12-10"><a href="#cb12-10" aria-hidden="true" tabindex="-1"></a>c.motor.arrancar()</span></code></pre>
  </div>
  <hr />
  <h2 id="ejemplo-completo">Ejemplo completo</h2>
  <div class="sourceCode" id="cb13">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb13-1"><a href="#cb13-1" aria-hidden="true" tabindex="-1"></a><span class="kw">class</span> CuentaBancaria:</span>
<span id="cb13-2"><a href="#cb13-2" aria-hidden="true" tabindex="-1"></a>    tasa_interes <span class="op">=</span> <span class="fl">0.05</span>  <span class="co"># atributo de clase</span></span>
<span id="cb13-3"><a href="#cb13-3" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb13-4"><a href="#cb13-4" aria-hidden="true" tabindex="-1"></a>    <span class="kw">def</span> <span class="fu">__init__</span>(<span class="va">self</span>, titular, saldo<span class="op">=</span><span class="dv">0</span>):</span>
<span id="cb13-5"><a href="#cb13-5" aria-hidden="true" tabindex="-1"></a>        <span class="va">self</span>.titular <span class="op">=</span> titular</span>
<span id="cb13-6"><a href="#cb13-6" aria-hidden="true" tabindex="-1"></a>        <span class="va">self</span>.__saldo <span class="op">=</span> saldo  <span class="co"># privado</span></span>
<span id="cb13-7"><a href="#cb13-7" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb13-8"><a href="#cb13-8" aria-hidden="true" tabindex="-1"></a>    <span class="kw">def</span> depositar(<span class="va">self</span>, cantidad):</span>
<span id="cb13-9"><a href="#cb13-9" aria-hidden="true" tabindex="-1"></a>        <span class="va">self</span>.__saldo <span class="op">+=</span> cantidad</span>
<span id="cb13-10"><a href="#cb13-10" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb13-11"><a href="#cb13-11" aria-hidden="true" tabindex="-1"></a>    <span class="kw">def</span> retirar(<span class="va">self</span>, cantidad):</span>
<span id="cb13-12"><a href="#cb13-12" aria-hidden="true" tabindex="-1"></a>        <span class="cf">if</span> cantidad <span class="op">&lt;=</span> <span class="va">self</span>.__saldo:</span>
<span id="cb13-13"><a href="#cb13-13" aria-hidden="true" tabindex="-1"></a>            <span class="va">self</span>.__saldo <span class="op">-=</span> cantidad</span>
<span id="cb13-14"><a href="#cb13-14" aria-hidden="true" tabindex="-1"></a>        <span class="cf">else</span>:</span>
<span id="cb13-15"><a href="#cb13-15" aria-hidden="true" tabindex="-1"></a>            <span class="bu">print</span>(<span class="st">&quot;Fondos insuficientes&quot;</span>)</span>
<span id="cb13-16"><a href="#cb13-16" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb13-17"><a href="#cb13-17" aria-hidden="true" tabindex="-1"></a>    <span class="at">@property</span></span>
<span id="cb13-18"><a href="#cb13-18" aria-hidden="true" tabindex="-1"></a>    <span class="kw">def</span> saldo(<span class="va">self</span>):</span>
<span id="cb13-19"><a href="#cb13-19" aria-hidden="true" tabindex="-1"></a>        <span class="cf">return</span> <span class="va">self</span>.__saldo</span>
<span id="cb13-20"><a href="#cb13-20" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb13-21"><a href="#cb13-21" aria-hidden="true" tabindex="-1"></a><span class="co"># Uso</span></span>
<span id="cb13-22"><a href="#cb13-22" aria-hidden="true" tabindex="-1"></a>cuenta <span class="op">=</span> CuentaBancaria(<span class="st">&quot;Francisco&quot;</span>, <span class="dv">1000</span>)</span>
<span id="cb13-23"><a href="#cb13-23" aria-hidden="true" tabindex="-1"></a>cuenta.depositar(<span class="dv">500</span>)</span>
<span id="cb13-24"><a href="#cb13-24" aria-hidden="true" tabindex="-1"></a>cuenta.retirar(<span class="dv">200</span>)</span>
<span id="cb13-25"><a href="#cb13-25" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(cuenta.saldo)</span></code></pre>
  </div>
  <hr />
  <h2 id="resumen-rápido">Resumen rápido</h2>
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
  <hr />
  <p><a href="./../readme.md#5-python">Regresar a la Guía
      Principal</a></p>
  <blockquote>
    <p><strong>Autor:</strong> Fravelz</p>
  </blockquote>
</body>

</html>