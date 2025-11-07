<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">

<head>
  <meta charset="utf-8" />
  <meta name="generator" content="pandoc" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <title>condiciones</title>

</head>

<body>
  <h1 id="condiciones-en-bash-script">Condiciones en Bash Script</h1>
  <hr />
  <h2 id="temario">Temario</h2>
  <ul>
    <li><a href="#condiciones-en-bash-script">Condiciones en Bash Script</a>
      <ul>
        <li><a href="#temario">Temario</a></li>
        <li><a href="#booleanos-en-bash">Booleanos en Bash</a></li>
        <li><a href="#operadores-condicionales">Operadores Condicionales</a>
          <ul>
            <li><a href="#para-números">Para números</a></li>
            <li><a href="#para-cadenas-de-texto">Para cadenas de texto</a></li>
          </ul>
        </li>
        <li><a href="#estructura-if---elif---else">Estructura
            <code>if - elif - else</code></a></li>
        <li><a href="#condiciones-compuestas--">Condiciones compuestas
            (<code>&amp;&amp;</code>, <code>||</code>)</a></li>
        <li><a href="#formas-de-escribir-condiciones">Formas de escribir
            condiciones</a></li>
      </ul>
    </li>
  </ul>
  <p><a href="./../readme.md#3-bash-script">Regresar a la guía
      principal</a></p>
  <hr />
  <h2 id="booleanos-en-bash">Booleanos en Bash</h2>
  <p>En Bash <strong>no existen valores booleanos nativos</strong>, pero
    sí existen <strong>comandos que devuelven verdadero o
      falso</strong>:</p>
  <div class="sourceCode" id="cb1">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="fu">true</span>   <span class="co"># Devuelve 0 (verdadero)</span></span>
<span id="cb1-2"><a href="#cb1-2" aria-hidden="true" tabindex="-1"></a><span class="fu">false</span>  <span class="co"># Devuelve 1 (falso)</span></span></code></pre>
  </div>
  <blockquote>
    <p>En Bash, un <strong>0 significa verdadero</strong> y un
      <strong>número distinto de 0 (generalmente 1)</strong> significa
      falso.
    </p>
  </blockquote>
  <hr />
  <h2 id="operadores-condicionales">Operadores Condicionales</h2>
  <p>Los operadores se usan para comparar <strong>números</strong> o
    <strong>cadenas de texto</strong>.
  </p>
  <h3 id="para-números">Para números</h3>
  <table>
    <thead>
      <tr>
        <th>Operador</th>
        <th>Significado</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>-eq</code></td>
        <td>Igual que</td>
      </tr>
      <tr>
        <td><code>-ne</code></td>
        <td>Distinto que</td>
      </tr>
      <tr>
        <td><code>-lt</code></td>
        <td>Menor que</td>
      </tr>
      <tr>
        <td><code>-le</code></td>
        <td>Menor o igual que</td>
      </tr>
      <tr>
        <td><code>-gt</code></td>
        <td>Mayor que</td>
      </tr>
      <tr>
        <td><code>-ge</code></td>
        <td>Mayor o igual que</td>
      </tr>
    </tbody>
  </table>
  <h3 id="para-cadenas-de-texto">Para cadenas de texto</h3>
  <table>
    <thead>
      <tr>
        <th>Operador</th>
        <th>Significado</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>=</code></td>
        <td>Igual</td>
      </tr>
      <tr>
        <td><code>!=</code></td>
        <td>Diferente</td>
      </tr>
      <tr>
        <td><code>&lt;</code></td>
        <td>Menor lexicográficamente</td>
      </tr>
      <tr>
        <td><code>&gt;</code></td>
        <td>Mayor lexicográficamente</td>
      </tr>
    </tbody>
  </table>
  <hr />
  <h2 id="estructura-if---elif---else">Estructura
    <code>if - elif - else</code>
  </h2>
  <p>Ejemplo de uso básico:</p>
  <div class="sourceCode" id="cb2">
    <pre class="sourceCode bash"><code class="sourceCode bash"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="cf">if</span> <span class="bu">[</span> 3 <span class="ot">-gt</span> 4 <span class="bu">]</span><span class="kw">;</span> <span class="cf">then</span> </span>
<span id="cb2-2"><a href="#cb2-2" aria-hidden="true" tabindex="-1"></a>    <span class="bu">echo</span> <span class="st">&quot;Mayor que 4&quot;</span></span>
<span id="cb2-3"><a href="#cb2-3" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb2-4"><a href="#cb2-4" aria-hidden="true" tabindex="-1"></a><span class="cf">elif</span> <span class="fu">false</span><span class="kw">;</span> <span class="cf">then</span> </span>
<span id="cb2-5"><a href="#cb2-5" aria-hidden="true" tabindex="-1"></a>    <span class="bu">echo</span> <span class="st">&quot;Nunca pasar&quot;</span></span>
<span id="cb2-6"><a href="#cb2-6" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb2-7"><a href="#cb2-7" aria-hidden="true" tabindex="-1"></a><span class="cf">else</span> </span>
<span id="cb2-8"><a href="#cb2-8" aria-hidden="true" tabindex="-1"></a>    <span class="bu">echo</span> <span class="st">&quot;4 o menor&quot;</span></span>
<span id="cb2-9"><a href="#cb2-9" aria-hidden="true" tabindex="-1"></a><span class="cf">fi</span></span></code></pre>
  </div>
  <blockquote>
    <p><strong>Notas:</strong></p>
    <ul>
      <li>Los corchetes <code>[ ]</code> son equivalentes al comando
        <code>test</code>.
      </li>
      <li>Siempre debe haber un <strong>espacio</strong> después del
        <code>[</code> y antes del <code>]</code>.
      </li>
      <li>La instrucción <code>then</code> debe ir en la misma línea o en una
        nueva, separada con <code>;</code>.</li>
    </ul>
  </blockquote>
  <hr />
  <h2 id="condiciones-compuestas">Condiciones compuestas
    (<code>&amp;&amp;</code>, <code>||</code>)</h2>
  <p>Puedes combinar condiciones con operadores lógicos.</p>
  <div class="sourceCode" id="cb3">
    <pre class="sourceCode bash"><code class="sourceCode bash"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a><span class="cf">if</span> <span class="bu">[</span> 10 <span class="ot">-lt</span> 14 <span class="bu">]</span> <span class="kw">&amp;&amp;</span> <span class="bu">[</span> 10 <span class="ot">-gt</span> 12 <span class="bu">]</span><span class="kw">;</span> <span class="cf">then</span> </span>
<span id="cb3-2"><a href="#cb3-2" aria-hidden="true" tabindex="-1"></a>    <span class="bu">echo</span> <span class="st">&quot;verdadero&quot;</span></span>
<span id="cb3-3"><a href="#cb3-3" aria-hidden="true" tabindex="-1"></a><span class="cf">fi</span></span></code></pre>
  </div>
  <p>También puedes usar <code>[[ ... ]]</code> para condiciones más
    seguras (recomendado):</p>
  <div class="sourceCode" id="cb4">
    <pre class="sourceCode bash"><code class="sourceCode bash"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a><span class="cf">if</span> <span class="kw">[[</span> 10 <span class="ot">-lt</span> 14  <span class="kw">&amp;&amp;</span>  10 <span class="ot">-gt</span> 12 <span class="kw">]];</span> <span class="cf">then</span> </span>
<span id="cb4-2"><a href="#cb4-2" aria-hidden="true" tabindex="-1"></a>    <span class="bu">echo</span> <span class="st">&quot;verdadero&quot;</span></span>
<span id="cb4-3"><a href="#cb4-3" aria-hidden="true" tabindex="-1"></a><span class="cf">fi</span></span></code></pre>
  </div>
  <blockquote>
    <p><code>[[ ... ]]</code> permite el uso de operadores lógicos
      <code>&amp;&amp;</code> y <code>||</code> dentro del mismo bloque sin
      necesidad de múltiples <code>[ ]</code>.
    </p>
  </blockquote>
  <hr />
  <h2 id="formas-de-escribir-condiciones">Formas de escribir
    condiciones</h2>
  <p>Las tres siguientes formas son equivalentes:</p>
  <div class="sourceCode" id="cb5">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb5-1"><a href="#cb5-1" aria-hidden="true" tabindex="-1"></a><span class="bu">test</span> condition</span>
<span id="cb5-2"><a href="#cb5-2" aria-hidden="true" tabindex="-1"></a><span class="bu">[</span> condition <span class="bu">]</span></span>
<span id="cb5-3"><a href="#cb5-3" aria-hidden="true" tabindex="-1"></a><span class="kw">[[</span> condition <span class="kw">||</span> condition <span class="kw">]]</span></span></code></pre>
  </div>
  <p>Ejemplo real:</p>
  <div class="sourceCode" id="cb6">
    <pre class="sourceCode bash"><code class="sourceCode bash"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a><span class="cf">if</span> <span class="bu">test</span> 10 <span class="at">-eq</span> 10<span class="kw">;</span> <span class="cf">then</span> </span>
<span id="cb6-2"><a href="#cb6-2" aria-hidden="true" tabindex="-1"></a>    <span class="bu">echo</span> <span class="st">&quot;10 es igual a 10&quot;</span></span>
<span id="cb6-3"><a href="#cb6-3" aria-hidden="true" tabindex="-1"></a><span class="cf">fi</span></span></code></pre>
  </div>
  <hr />
  <p><a href="./../readme.md#2-linux-y-bash-script">Regresar a la guía
      principal</a></p>
  <blockquote>
    <p><strong>Autor:</strong> Fravelz</p>
  </blockquote>
</body>

</html>