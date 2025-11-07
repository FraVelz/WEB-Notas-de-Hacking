<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">

<head>
  <meta charset="utf-8" />
  <meta name="generator" content="pandoc" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <title>property</title>

</head>

<body>
  <h1 id="decorador-property">Decorador <span class="citation" data-cites="property">@property</span></h1>
  <p><code>@property</code> se usa para <strong>encapsular
      atributos</strong>, <strong>añadir validaciones o lógica
      interna</strong>, pero sin cambiar la forma natural de acceder o
    modificar una variable.</p>
  <hr />
  <h2 id="temario">Temario</h2>
  <ul>
    <li><a href="#decorador-property">Decorador <span class="citation" data-cites="property">@property</span></a>
      <ul>
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
      </ul>
    </li>
  </ul>
  <p><a href="./../readme.md#5-python">Regresar a la Guía
      Principal</a></p>
  <hr />
  <h2 id="qué-hace-property-en-python">¿Qué hace <code>@property</code> en
    Python?</h2>
  <p>El decorador <strong><code>@property</code></strong> convierte un
    <strong>método de una clase</strong> en un <strong>atributo “solo de
      lectura”</strong> (al menos inicialmente).
  </p>
  <p>Sirve para <strong>controlar cómo se accede a un atributo</strong>,
    pero permitiendo que el código <strong>parezca estar accediendo
      directamente a una variable</strong>.</p>
  <p>En otras palabras:</p>
  <blockquote>
    <p>Permite usar <em>métodos</em> como si fueran <em>atributos</em>,
      <strong>sin cambiar la sintaxis de acceso</strong>.
    </p>
  </blockquote>
  <hr />
  <h2 id="ejemplo-básico-sin-property">Ejemplo básico sin
    <code>@property</code>
  </h2>
  <div class="sourceCode" id="cb1">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="kw">class</span> Persona:</span>
<span id="cb1-2"><a href="#cb1-2" aria-hidden="true" tabindex="-1"></a>    <span class="kw">def</span> <span class="fu">__init__</span>(<span class="va">self</span>, nombre):</span>
<span id="cb1-3"><a href="#cb1-3" aria-hidden="true" tabindex="-1"></a>        <span class="va">self</span>.__nombre <span class="op">=</span> nombre  <span class="co"># atributo privado</span></span>
<span id="cb1-4"><a href="#cb1-4" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb1-5"><a href="#cb1-5" aria-hidden="true" tabindex="-1"></a>    <span class="kw">def</span> get_nombre(<span class="va">self</span>):</span>
<span id="cb1-6"><a href="#cb1-6" aria-hidden="true" tabindex="-1"></a>        <span class="cf">return</span> <span class="va">self</span>.__nombre</span></code></pre>
  </div>
  <p>Uso:</p>
  <div class="sourceCode" id="cb2">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a>p <span class="op">=</span> Persona(<span class="st">&quot;Ana&quot;</span>)</span>
<span id="cb2-2"><a href="#cb2-2" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(p.get_nombre())  <span class="co"># ✅ Funciona</span></span></code></pre>
  </div>
  <p>Pero se ve <em>feo</em> tener que escribir <code>.get_nombre()</code>
    cada vez. Ahí entra <code>@property</code>.</p>
  <hr />
  <h2 id="con-property">Con <code>@property</code></h2>
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
  <p>Uso:</p>
  <div class="sourceCode" id="cb4">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a>p <span class="op">=</span> Persona(<span class="st">&quot;Luis&quot;</span>)</span>
<span id="cb4-2"><a href="#cb4-2" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(p.nombre)  <span class="co"># ✅ Sin paréntesis, parece un atributo</span></span></code></pre>
  </div>
  <ul>
    <li>
      <p>Python llama automáticamente al método <code>nombre()</code>
        cuando escribes <code>p.nombre</code>.</p>
    </li>
    <li>
      <p>Es solo de lectura por ahora (no se puede cambiar el valor
        directamente).</p>
    </li>
  </ul>
  <hr />
  <h2 id="agregando-un-setter-para-modificar-el-valor">Agregando un
    <strong>setter</strong> para modificar el valor
  </h2>
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
  <p>Uso:</p>
  <div class="sourceCode" id="cb6">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a>p <span class="op">=</span> Persona(<span class="st">&quot;Carlos&quot;</span>)</span>
<span id="cb6-2"><a href="#cb6-2" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(p.nombre)   <span class="co"># ✅ Getter</span></span>
<span id="cb6-3"><a href="#cb6-3" aria-hidden="true" tabindex="-1"></a>p.nombre <span class="op">=</span> <span class="st">&quot;Andrés&quot;</span>  <span class="co"># ✅ Setter</span></span>
<span id="cb6-4"><a href="#cb6-4" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(p.nombre)   <span class="co"># Andrés</span></span>
<span id="cb6-5"><a href="#cb6-5" aria-hidden="true" tabindex="-1"></a>p.nombre <span class="op">=</span> <span class="st">&quot;&quot;</span>     <span class="co"># ❌ El nombre no puede estar vacío.</span></span></code></pre>
  </div>
  <hr />
  <h2 id="también-existe-el-deleter-opcional">También existe el deleter
    (opcional)</h2>
  <div class="sourceCode" id="cb7">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb7-1"><a href="#cb7-1" aria-hidden="true" tabindex="-1"></a>    <span class="at">@nombre.deleter</span></span>
<span id="cb7-2"><a href="#cb7-2" aria-hidden="true" tabindex="-1"></a>    <span class="kw">def</span> nombre(<span class="va">self</span>):</span>
<span id="cb7-3"><a href="#cb7-3" aria-hidden="true" tabindex="-1"></a>        <span class="bu">print</span>(<span class="st">&quot;Eliminando el nombre...&quot;</span>)</span>
<span id="cb7-4"><a href="#cb7-4" aria-hidden="true" tabindex="-1"></a>        <span class="kw">del</span> <span class="va">self</span>.__nombre</span></code></pre>
  </div>
  <hr />
  <h2 id="en-resumen">En resumen</h2>
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
  <hr />
  <p><a href="./../readme.md#5-python">Regresar a la Guía
      Principal</a></p>
  <blockquote>
    <p><strong>Autor:</strong> Fravelz</p>
  </blockquote>
</body>

</html>