<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">

<head>
  <meta charset="utf-8" />
  <meta name="generator" content="pandoc" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <title>getter-setter</title>

</head>

<body>
  <h1 id="getters-y-setters">Getters y Setters</h1>
  <hr />
  <h2 id="temario">Temario</h2>
  <ul>
    <li><a href="#getters-y-setters">Getters y Setters</a>
      <ul>
        <li><a href="#temario">Temario</a></li>
        <li><a href="#qué-son-los-getters-y-setters">¿Qué son los getters y
            setters?</a></li>
        <li><a href="#ejemplo-básico">Ejemplo básico</a></li>
        <li><a href="#pero-python-tiene-una-forma-más-elegante--property">Pero
            Python tiene una forma más elegante →
            <strong><code>@property</code></strong></a>
          <ul>
            <li><a href="#ejemplo-con-property">Ejemplo con
                <code>@property</code></a></li>
          </ul>
        </li>
        <li><a href="#ventajas-de-usar-property">Ventajas de usar <span class="citation"
              data-cites="property">@property</span></a></li>
        <li><a href="#en-resumen">En resumen</a></li>
      </ul>
    </li>
  </ul>
  <p><a href="./../readme.md#5-python">Regresar a la Guía
      Principal</a></p>
  <hr />
  <h2 id="qué-son-los-getters-y-setters">¿Qué son los getters y
    setters?</h2>
  <ul>
    <li>
      <p><strong>Getter:</strong> método que <strong>obtiene</strong>
        (lee) el valor de un atributo.</p>
    </li>
    <li>
      <p><strong>Setter:</strong> método que <strong>establece</strong>
        (modifica) el valor de un atributo.</p>
    </li>
  </ul>
  <p>Se usan para <strong>controlar el acceso a los atributos</strong> de
    una clase, especialmente cuando son “protegidos” o “privados”.</p>
  <hr />
  <h2 id="ejemplo-básico">Ejemplo básico</h2>
  <div class="sourceCode" id="cb1">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="kw">class</span> Persona:</span>
<span id="cb1-2"><a href="#cb1-2" aria-hidden="true" tabindex="-1"></a>    <span class="kw">def</span> <span class="fu">__init__</span>(<span class="va">self</span>, nombre):</span>
<span id="cb1-3"><a href="#cb1-3" aria-hidden="true" tabindex="-1"></a>        <span class="va">self</span>.__nombre <span class="op">=</span> nombre  <span class="co"># atributo privado</span></span>
<span id="cb1-4"><a href="#cb1-4" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb1-5"><a href="#cb1-5" aria-hidden="true" tabindex="-1"></a>    <span class="co"># Getter</span></span>
<span id="cb1-6"><a href="#cb1-6" aria-hidden="true" tabindex="-1"></a>    <span class="kw">def</span> get_nombre(<span class="va">self</span>):</span>
<span id="cb1-7"><a href="#cb1-7" aria-hidden="true" tabindex="-1"></a>        <span class="cf">return</span> <span class="va">self</span>.__nombre</span>
<span id="cb1-8"><a href="#cb1-8" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb1-9"><a href="#cb1-9" aria-hidden="true" tabindex="-1"></a>    <span class="co"># Setter</span></span>
<span id="cb1-10"><a href="#cb1-10" aria-hidden="true" tabindex="-1"></a>    <span class="kw">def</span> set_nombre(<span class="va">self</span>, nuevo_nombre):</span>
<span id="cb1-11"><a href="#cb1-11" aria-hidden="true" tabindex="-1"></a>        <span class="cf">if</span> <span class="bu">len</span>(nuevo_nombre) <span class="op">&gt;</span> <span class="dv">0</span>:</span>
<span id="cb1-12"><a href="#cb1-12" aria-hidden="true" tabindex="-1"></a>            <span class="va">self</span>.__nombre <span class="op">=</span> nuevo_nombre</span>
<span id="cb1-13"><a href="#cb1-13" aria-hidden="true" tabindex="-1"></a>        <span class="cf">else</span>:</span>
<span id="cb1-14"><a href="#cb1-14" aria-hidden="true" tabindex="-1"></a>            <span class="bu">print</span>(<span class="st">&quot;❌ El nombre no puede estar vacío.&quot;</span>)</span></code></pre>
  </div>
  <p>Uso:</p>
  <div class="sourceCode" id="cb2">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a>p <span class="op">=</span> Persona(<span class="st">&quot;Ana&quot;</span>)</span>
<span id="cb2-2"><a href="#cb2-2" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(p.get_nombre())  <span class="co"># ✅ Ana</span></span>
<span id="cb2-3"><a href="#cb2-3" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb2-4"><a href="#cb2-4" aria-hidden="true" tabindex="-1"></a>p.set_nombre(<span class="st">&quot;Luis&quot;</span>)</span>
<span id="cb2-5"><a href="#cb2-5" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(p.get_nombre())  <span class="co"># ✅ Luis</span></span>
<span id="cb2-6"><a href="#cb2-6" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb2-7"><a href="#cb2-7" aria-hidden="true" tabindex="-1"></a>p.set_nombre(<span class="st">&quot;&quot;</span>)  <span class="co"># ❌ El nombre no puede estar vacío.</span></span></code></pre>
  </div>
  <hr />
  <h2 id="pero-python-tiene-una-forma-más-elegante-property">Pero Python
    tiene una forma más elegante →
    <strong><code>@property</code></strong>
  </h2>
  <p>Python permite crear <em>getters</em> y <em>setters</em> de manera
    más limpia y natural usando <strong>decoradores</strong>.</p>
  <h3 id="ejemplo-con-property">Ejemplo con <code>@property</code></h3>
  <div class="sourceCode" id="cb3">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a><span class="kw">class</span> Persona:</span>
<span id="cb3-2"><a href="#cb3-2" aria-hidden="true" tabindex="-1"></a>    <span class="kw">def</span> <span class="fu">__init__</span>(<span class="va">self</span>, nombre):</span>
<span id="cb3-3"><a href="#cb3-3" aria-hidden="true" tabindex="-1"></a>        <span class="va">self</span>.__nombre <span class="op">=</span> nombre</span>
<span id="cb3-4"><a href="#cb3-4" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb3-5"><a href="#cb3-5" aria-hidden="true" tabindex="-1"></a>    <span class="at">@property</span></span>
<span id="cb3-6"><a href="#cb3-6" aria-hidden="true" tabindex="-1"></a>    <span class="kw">def</span> nombre(<span class="va">self</span>):</span>
<span id="cb3-7"><a href="#cb3-7" aria-hidden="true" tabindex="-1"></a>        <span class="cf">return</span> <span class="va">self</span>.__nombre</span>
<span id="cb3-8"><a href="#cb3-8" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb3-9"><a href="#cb3-9" aria-hidden="true" tabindex="-1"></a>    <span class="at">@nombre.setter</span></span>
<span id="cb3-10"><a href="#cb3-10" aria-hidden="true" tabindex="-1"></a>    <span class="kw">def</span> nombre(<span class="va">self</span>, nuevo_nombre):</span>
<span id="cb3-11"><a href="#cb3-11" aria-hidden="true" tabindex="-1"></a>        <span class="cf">if</span> <span class="bu">len</span>(nuevo_nombre) <span class="op">&gt;</span> <span class="dv">0</span>:</span>
<span id="cb3-12"><a href="#cb3-12" aria-hidden="true" tabindex="-1"></a>            <span class="va">self</span>.__nombre <span class="op">=</span> nuevo_nombre</span>
<span id="cb3-13"><a href="#cb3-13" aria-hidden="true" tabindex="-1"></a>        <span class="cf">else</span>:</span>
<span id="cb3-14"><a href="#cb3-14" aria-hidden="true" tabindex="-1"></a>            <span class="bu">print</span>(<span class="st">&quot;❌ El nombre no puede estar vacío.&quot;</span>)</span></code></pre>
  </div>
  <p>Ahora se usa como si fuera un <strong>atributo normal</strong>:</p>
  <div class="sourceCode" id="cb4">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a>p <span class="op">=</span> Persona(<span class="st">&quot;Carlos&quot;</span>)</span>
<span id="cb4-2"><a href="#cb4-2" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb4-3"><a href="#cb4-3" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(p.nombre)   <span class="co"># ✅ Llama automáticamente al getter</span></span>
<span id="cb4-4"><a href="#cb4-4" aria-hidden="true" tabindex="-1"></a>p.nombre <span class="op">=</span> <span class="st">&quot;Andrés&quot;</span>  <span class="co"># ✅ Llama automáticamente al setter</span></span>
<span id="cb4-5"><a href="#cb4-5" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb4-6"><a href="#cb4-6" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(p.nombre)   <span class="co"># ✅ Andrés</span></span>
<span id="cb4-7"><a href="#cb4-7" aria-hidden="true" tabindex="-1"></a>p.nombre <span class="op">=</span> <span class="st">&quot;&quot;</span>     <span class="co"># ❌ El nombre no puede estar vacío.</span></span></code></pre>
  </div>
  <hr />
  <h2 id="ventajas-de-usar-property">Ventajas de usar <span class="citation" data-cites="property">@property</span></h2>
  <p>✅ No cambias la forma de usar los atributos. ✅ Puedes añadir
    validaciones sin romper el código existente. ✅ Encapsulas correctamente
    los datos. ✅ Evitas accesos o cambios indebidos.</p>
  <hr />
  <h2 id="en-resumen">En resumen</h2>
  <table>
    <colgroup>
      <col style="width: 15%" />
      <col style="width: 27%" />
      <col style="width: 24%" />
      <col style="width: 33%" />
    </colgroup>
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
  <hr />
  <p><a href="./../readme.md#5-python">Regresar a la Guía
      Principal</a></p>
  <blockquote>
    <p><strong>Autor:</strong> Fravelz</p>
  </blockquote>
</body>

</html>