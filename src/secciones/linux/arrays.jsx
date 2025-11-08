
function Arrays({ }) {
  return (
    <>
      <Titulo title="h1" id="arrays-en-bash-script">Arrays en bash script</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><a href="#arrays-en-bash-script">Arrays en bash script</a>
          <Lista>
            <li><a href="#temario">Temario</a></li>
            <li><a href="#1-definir-arrays">1. Definir arrays</a></li>
            <li><a href="#2-acceder-a-elementos">2. Acceder a elementos</a></li>
            <li><a href="#3-mostrar-todos-los-elementos">3. Mostrar todos los
              elementos</a></li>
            <li><a href="#4-tamaño-del-array">4. Tamaño del array</a></li>
            <li><a href="#5-recorrer-arrays">5. Recorrer arrays</a>
              <Lista>
                <li><a href="#con-for">Con for</a></li>
                <li><a href="#con-índices">Con índices</a></li>
              </Lista>
            </li>
            <li><a href="#6-añadir-y-modificar-elementos">6. Añadir y modificar
              elementos</a></li>
            <li><a href="#7-eliminar-elementos">7. Eliminar elementos</a></li>
            <li><a href="#8-subarrays-rebanadas">8. Subarrays (rebanadas)</a></li>
            <li><a href="#9-arrays-asociativos-tipo-diccionario">9. Arrays
              asociativos (tipo diccionario)</a></li>
            <li><a href="#10-cosas-útiles">10. Cosas útiles</a></li>
          </Lista>
        </li>
      </Lista>
      <Texto><a href="./../readme.md#2-linux-y-bash-script">Regresar a la guía
        principal</a></Texto>
      <Linea />
      <Titulo title="h2" id="definir-arrays">1. Definir arrays</Titulo>
      <div class="sourceCode" id="cb1">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="co"># Array con valores</span></span>
            <span id="cb1-2"><a href="#cb1-2" aria-hidden="true" tabindex="-1"></a><span class="va">nombres</span><span class="op">=</span><span class="va">(</span><span class="st">&quot;Ana&quot;</span> <span class="st">&quot;Luis&quot;</span> <span class="st">&quot;Pedro&quot;</span><span class="va">)</span></span>
            <span id="cb1-3"><a href="#cb1-3" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb1-4"><a href="#cb1-4" aria-hidden="true" tabindex="-1"></a><span class="co"># Otra forma (asignando por índice)</span></span>
            <span id="cb1-5"><a href="#cb1-5" aria-hidden="true" tabindex="-1"></a><span class="va">numeros</span><span class="op">[</span><span class="dv">0</span><span class="op">]=</span>10</span>
            <span id="cb1-6"><a href="#cb1-6" aria-hidden="true" tabindex="-1"></a><span class="va">numeros</span><span class="op">[</span><span class="dv">1</span><span class="op">]=</span>20</span>
            <span id="cb1-7"><a href="#cb1-7" aria-hidden="true" tabindex="-1"></a><span class="va">numeros</span><span class="op">[</span><span class="dv">2</span><span class="op">]=</span>30</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="acceder-a-elementos">2. Acceder a elementos</Titulo>
      <div class="sourceCode" id="cb2">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;</span><span class="va">${nombres</span><span class="op">[</span><span class="dv">0</span><span class="op">]</span><span class="va">}</span><span class="st">&quot;</span>   <span class="co"># Ana</span></span>
            <span id="cb2-2"><a href="#cb2-2" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;</span><span class="va">${nombres</span><span class="op">[</span><span class="dv">2</span><span class="op">]</span><span class="va">}</span><span class="st">&quot;</span>   <span class="co"># Pedro</span></span></code></pre>
      </div>
      <Texto>Si usas un índice que no existe:</Texto>
      <div class="sourceCode" id="cb3">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;</span><span class="va">${nombres</span><span class="op">[</span><span class="dv">5</span><span class="op">]</span><span class="va">}</span><span class="st">&quot;</span>   <span class="co"># vacío</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="mostrar-todos-los-elementos">3. Mostrar todos los elementos</Titulo>
      <div class="sourceCode" id="cb4">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;</span><span class="va">${nombres</span><span class="op">[@]</span><span class="va">}</span><span class="st">&quot;</span>   <span class="co"># Ana Luis Pedro</span></span>
            <span id="cb4-2"><a href="#cb4-2" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;</span><span class="va">${numeros</span><span class="op">[*]</span><span class="va">}</span><span class="st">&quot;</span>   <span class="co"># 10 20 30</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="tamaño-del-array">4. Tamaño del array</Titulo>
      <div class="sourceCode" id="cb5">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb5-1"><a href="#cb5-1" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;</span><span class="va">${</span><span class="op">#</span><span class="va">nombres</span><span class="op">[@]</span><span class="va">}</span><span class="st">&quot;</span>  <span class="co"># 3</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="recorrer-arrays">5. Recorrer arrays</Titulo>
      <Titulo title="h3" id="con-for">Con for</Titulo>
      <div class="sourceCode" id="cb6">
        <pre class="sourceCode bash"><code class="sourceCode bash"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a><span class="cf">for</span> nombre <span class="kw">in</span> <span class="st">&quot;</span><span class="va">${nombres</span><span class="op">[@]</span><span class="va">}</span><span class="st">&quot;</span><span class="kw">;</span> <span class="cf">do</span></span>
          <span id="cb6-2"><a href="#cb6-2" aria-hidden="true" tabindex="-1"></a>    <span class="bu">echo</span> <span class="st">&quot;Hola </span><span class="va">$nombre</span><span class="st">&quot;</span></span>
          <span id="cb6-3"><a href="#cb6-3" aria-hidden="true" tabindex="-1"></a><span class="cf">done</span></span></code></pre>
      </div>
      <Texto>Salida:</Texto>
      <div class="sourceCode" id="cb7">
        <pre class="sourceCode txt"><code class="sourceCode default"><span id="cb7-1"><a href="#cb7-1" aria-hidden="true" tabindex="-1"></a>Hola Ana</span>
          <span id="cb7-2"><a href="#cb7-2" aria-hidden="true" tabindex="-1"></a>Hola Luis</span>
          <span id="cb7-3"><a href="#cb7-3" aria-hidden="true" tabindex="-1"></a>Hola Pedro</span></code></pre>
      </div>
      <Titulo title="h3" id="con-índices">Con índices</Titulo>
      <div class="sourceCode" id="cb8">
        <pre class="sourceCode bash"><code class="sourceCode bash"><span id="cb8-1"><a href="#cb8-1" aria-hidden="true" tabindex="-1"></a><span class="cf">for</span> i <span class="kw">in</span> <span class="st">&quot;</span><span class="va">${</span><span class="op">!</span><span class="va">nombres</span><span class="op">[@]</span><span class="va">}</span><span class="st">&quot;</span><span class="kw">;</span> <span class="cf">do</span></span>
          <span id="cb8-2"><a href="#cb8-2" aria-hidden="true" tabindex="-1"></a>    <span class="bu">echo</span> <span class="st">&quot;Índice: </span><span class="va">$i</span><span class="st"> → Valor: </span><span class="va">${nombres</span><span class="op">[</span><span class="va">$i</span><span class="op">]</span><span class="va">}</span><span class="st">&quot;</span></span>
          <span id="cb8-3"><a href="#cb8-3" aria-hidden="true" tabindex="-1"></a><span class="cf">done</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="añadir-y-modificar-elementos">6. Añadir y modificar
        elementos</Titulo>
      <div class="sourceCode" id="cb9">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb9-1"><a href="#cb9-1" aria-hidden="true" tabindex="-1"></a><span class="va">nombres</span><span class="op">+=</span><span class="va">(</span><span class="st">&quot;Carla&quot;</span><span class="va">)</span>      <span class="co"># Agregar al final</span></span>
            <span id="cb9-2"><a href="#cb9-2" aria-hidden="true" tabindex="-1"></a><span class="va">nombres</span><span class="op">[</span><span class="dv">1</span><span class="op">]=</span><span class="st">&quot;Lucía&quot;</span>      <span class="co"># Modificar el índice 1</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="eliminar-elementos">7. Eliminar elementos</Titulo>
      <div class="sourceCode" id="cb10">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb10-1"><a href="#cb10-1" aria-hidden="true" tabindex="-1"></a><span class="bu">unset</span> <span class="va">nombres[</span><span class="dv">1</span><span class="op">]</span>       <span class="co"># Elimina solo el índice 1</span></span>
            <span id="cb10-2"><a href="#cb10-2" aria-hidden="true" tabindex="-1"></a><span class="bu">unset</span> <span class="va">nombres</span>          <span class="co"># Borra todo el array</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="subarrays-rebanadas">8. Subarrays (rebanadas)</Titulo>
      <div class="sourceCode" id="cb11">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb11-1"><a href="#cb11-1" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;</span><span class="va">${nombres</span><span class="op">[@]:</span><span class="dv">1</span><span class="op">:</span><span class="dv">2</span><span class="va">}</span><span class="st">&quot;</span>   <span class="co"># desde índice 1, tomar 2 elementos</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="arrays-asociativos-tipo-diccionario">9. Arrays asociativos (tipo
        diccionario)</Titulo>
      <Texto>Disponibles en <strong>Bash 4+</strong>.</Texto>
      <div class="sourceCode" id="cb12">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb12-1"><a href="#cb12-1" aria-hidden="true" tabindex="-1"></a><span class="bu">declare</span> <span class="at">-A</span> <span class="va">capitales</span></span>
            <span id="cb12-2"><a href="#cb12-2" aria-hidden="true" tabindex="-1"></a><span class="va">capitales</span><span class="op">[</span>Colombia<span class="op">]=</span><span class="st">&quot;Bogotá&quot;</span></span>
            <span id="cb12-3"><a href="#cb12-3" aria-hidden="true" tabindex="-1"></a><span class="va">capitales</span><span class="op">[</span>México<span class="op">]=</span><span class="st">&quot;CDMX&quot;</span></span>
            <span id="cb12-4"><a href="#cb12-4" aria-hidden="true" tabindex="-1"></a><span class="va">capitales</span><span class="op">[</span>España<span class="op">]=</span><span class="st">&quot;Madrid&quot;</span></span>
            <span id="cb12-5"><a href="#cb12-5" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb12-6"><a href="#cb12-6" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;</span><span class="va">${capitales</span><span class="op">[</span>Colombia<span class="op">]</span><span class="va">}</span><span class="st">&quot;</span>   <span class="co"># Bogotá</span></span>
            <span id="cb12-7"><a href="#cb12-7" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb12-8"><a href="#cb12-8" aria-hidden="true" tabindex="-1"></a><span class="co"># Recorrer claves y valores</span></span>
            <span id="cb12-9"><a href="#cb12-9" aria-hidden="true" tabindex="-1"></a><span class="cf">for</span> pais <span class="kw">in</span> <span class="st">&quot;</span><span class="va">${</span><span class="op">!</span><span class="va">capitales</span><span class="op">[@]</span><span class="va">}</span><span class="st">&quot;</span><span class="kw">;</span> <span class="cf">do</span></span>
            <span id="cb12-10"><a href="#cb12-10" aria-hidden="true" tabindex="-1"></a>    <span class="bu">echo</span> <span class="st">&quot;</span><span class="va">$pais</span><span class="st"> → </span><span class="va">${capitales</span><span class="op">[</span><span class="va">$pais</span><span class="op">]</span><span class="va">}</span><span class="st">&quot;</span></span>
            <span id="cb12-11"><a href="#cb12-11" aria-hidden="true" tabindex="-1"></a><span class="cf">done</span></span></code></pre>
      </div>
      <Texto>Salida:</Texto>
      <div class="sourceCode" id="cb13">
        <pre class="sourceCode txt"><code class="sourceCode default"><span id="cb13-1"><a href="#cb13-1" aria-hidden="true" tabindex="-1"></a>México → CDMX</span>
          <span id="cb13-2"><a href="#cb13-2" aria-hidden="true" tabindex="-1"></a>España → Madrid</span>
          <span id="cb13-3"><a href="#cb13-3" aria-hidden="true" tabindex="-1"></a>Colombia → Bogotá</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="cosas-útiles">10. Cosas útiles</Titulo>
      <Lista>
        <li>
          <Texto><strong>Índice del último elemento</strong>:</Texto>
          <div class="sourceCode" id="cb14">
            <pre
              class="sourceCode bash"><code class="sourceCode bash"><span id="cb14-1"><a href="#cb14-1" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;</span><span class="va">${</span><span class="op">!</span><span class="va">nombres</span><span class="op">[@]</span><span class="va">}</span><span class="st">&quot;</span>  <span class="co"># muestra todos los índices</span></span></code></pre>
          </div>
        </li>
        <li>
          <Texto><strong>Ordenar un array</strong>:</Texto>
          <div class="sourceCode" id="cb15">
            <pre
              class="sourceCode bash"><code class="sourceCode bash"><span id="cb15-1"><a href="#cb15-1" aria-hidden="true" tabindex="-1"></a><span class="va">numeros</span><span class="op">=</span><span class="va">(</span>3 8 1<span class="va">)</span></span>
                <span id="cb15-2"><a href="#cb15-2" aria-hidden="true" tabindex="-1"></a><span class="va">sorted</span><span class="op">=</span><span class="va">($(</span><span class="bu">printf</span> <span class="st">&quot;%s\n&quot;</span> <span class="st">&quot;</span><span class="va">${numeros</span><span class="op">[@]</span><span class="va">}</span><span class="st">&quot;</span> <span class="kw">|</span> <span class="fu">sort</span> <span class="at">-n</span><span class="va">))</span></span>
                <span id="cb15-3"><a href="#cb15-3" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;</span><span class="va">${sorted</span><span class="op">[@]</span><span class="va">}</span><span class="st">&quot;</span>   <span class="co"># 1 3 5 8</span></span></code></pre>
          </div>
        </li>
      </Lista>
      <Linea />
      <Texto>En resumen:</Texto>
      <Lista>
        <li><code>array=(val1 val2 val3)</code> → define.</li>
        <li><code>${array[i]}</code> → acceder.</li>
        <li><code>${array[@]}</code> → todos los valores.</li>
        <li><code>declare -A</code> → arrays asociativos.</li>
      </Lista>
      <Linea />
      <Texto><a href="./../readme.md#2-linux-y-bash-script">Regresar a la guía
        principal</a></Texto>
      <blockquote>
        <Texto><strong>Autor:</strong> Fravelz</Texto>
      </blockquote>
    </>
  );
}

export default Arrays;
