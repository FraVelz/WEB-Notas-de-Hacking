import Titulo from "./../../componentes/titulo.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Linea from "./../../componentes/linea.jsx";

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="multiprocessing-en-python">Multiprocessing en Python</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><a href="#multiprocessing-en-python">Multiprocessing en Python</a>
          <Lista>
            <li><a href="#temario">Temario</a></li>
            <li><a href="#qué-es-multiprocessing">¿Qué es multiprocessing?</a></li>
            <li><a href="#conceptos-básicos">Conceptos básicos</a>
              <Lista>
                <li><a href="#crear-un-proceso">Crear un proceso</a></li>
              </Lista>
            </li>
            <li><a href="#enviar-datos-entre-procesos">Enviar datos entre
              procesos</a>
              <Lista>
                <li><a href="#con-queue">Con Queue</a></li>
                <li><a href="#con-pipe">Con Pipe</a></li>
              </Lista>
            </li>
            <li><a href="#uso-de-pool-grupo-de-procesos">Uso de Pool (grupo de
              procesos)</a></li>
            <li><a href="#variables-compartidas">Variables compartidas</a>
              <Lista>
                <li><a href="#value-y-array">Value y Array</a></li>
              </Lista>
            </li>
            <li><a href="#sincronización-entre-procesos">Sincronización entre
              procesos</a>
              <Lista>
                <li><a href="#ejemplo-con-lock">Ejemplo con Lock</a></li>
              </Lista>
            </li>
            <li><a href="#ejemplo-completo">Ejemplo completo</a></li>
            <li><a href="#resumen-rápido">Resumen rápido</a></li>
          </Lista>
        </li>
      </Lista>
      <Texto><a href="./../../readme.md#5-python">Regresar a la Guía
        Principal</a></Texto>
      <Linea />
      <Titulo title="h2" id="qué-es-multiprocessing">¿Qué es multiprocessing?</Titulo>
      <Texto><code>multiprocessing</code> permite <strong>ejecutar varios procesos
        en paralelo</strong>, aprovechando <strong>todos los núcleos del
          CPU</strong>. A diferencia de los <strong>hilos
            (<code>threading</code>)</strong>, cada proceso tiene su <strong>propia
              memoria</strong> → no hay bloqueo por el <strong>GIL (Global Interpreter
                Lock)</strong>.</Texto>
      <Texto>Es ideal para tareas <strong>pesadas en CPU</strong>, como cálculos,
        IA, simulaciones, etc.</Texto>
      <Linea />
      <Titulo title="h2" id="conceptos-básicos">Conceptos básicos</Titulo>
      <Titulo title="h3" id="crear-un-proceso">Crear un proceso</Titulo>
      <div class="sourceCode" id="cb1">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="im">from</span> multiprocessing <span class="im">import</span> Process</span>
            <span id="cb1-2"><a href="#cb1-2" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb1-3"><a href="#cb1-3" aria-hidden="true" tabindex="-1"></a><span class="kw">def</span> tarea():</span>
            <span id="cb1-4"><a href="#cb1-4" aria-hidden="true" tabindex="-1"></a>    <span class="bu">print</span>(<span class="st">&quot;Ejecutando en otro proceso&quot;</span>)</span>
            <span id="cb1-5"><a href="#cb1-5" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb1-6"><a href="#cb1-6" aria-hidden="true" tabindex="-1"></a><span class="cf">if</span> <span class="va">__name__</span> <span class="op">==</span> <span class="st">&quot;__main__&quot;</span>:</span>
            <span id="cb1-7"><a href="#cb1-7" aria-hidden="true" tabindex="-1"></a>    p <span class="op">=</span> Process(target<span class="op">=</span>tarea)  <span class="co"># Crear proceso</span></span>
            <span id="cb1-8"><a href="#cb1-8" aria-hidden="true" tabindex="-1"></a>    p.start()                  <span class="co"># Iniciar</span></span>
            <span id="cb1-9"><a href="#cb1-9" aria-hidden="true" tabindex="-1"></a>    p.join()                   <span class="co"># Esperar a que termine</span></span>
            <span id="cb1-10"><a href="#cb1-10" aria-hidden="true" tabindex="-1"></a>    <span class="bu">print</span>(<span class="st">&quot;Proceso finalizado&quot;</span>)</span></code></pre>
      </div>
      <Lista>
        <li><code>target</code>: función a ejecutar.</li>
        <li><code>args</code>: argumentos para esa función.</li>
        <li><code>start()</code>: inicia el proceso.</li>
        <li><code>join()</code>: bloquea hasta que el proceso termina.</li>
      </Lista>
      <Linea />
      <Titulo title="h2" id="enviar-datos-entre-procesos">Enviar datos entre procesos</Titulo>
      <Titulo title="h3" id="con-queue">Con Queue</Titulo>
      <div class="sourceCode" id="cb2">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="im">from</span> multiprocessing <span class="im">import</span> Process, Queue</span>
            <span id="cb2-2"><a href="#cb2-2" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb2-3"><a href="#cb2-3" aria-hidden="true" tabindex="-1"></a><span class="kw">def</span> productor(q):</span>
            <span id="cb2-4"><a href="#cb2-4" aria-hidden="true" tabindex="-1"></a>    <span class="cf">for</span> i <span class="kw">in</span> <span class="bu">range</span>(<span class="dv">3</span>):</span>
            <span id="cb2-5"><a href="#cb2-5" aria-hidden="true" tabindex="-1"></a>        q.put(i)  <span class="co"># Enviar a la cola</span></span>
            <span id="cb2-6"><a href="#cb2-6" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb2-7"><a href="#cb2-7" aria-hidden="true" tabindex="-1"></a><span class="kw">def</span> consumidor(q):</span>
            <span id="cb2-8"><a href="#cb2-8" aria-hidden="true" tabindex="-1"></a>    <span class="cf">while</span> <span class="kw">not</span> q.empty():</span>
            <span id="cb2-9"><a href="#cb2-9" aria-hidden="true" tabindex="-1"></a>        <span class="bu">print</span>(<span class="st">&quot;Recibido:&quot;</span>, q.get())</span>
            <span id="cb2-10"><a href="#cb2-10" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb2-11"><a href="#cb2-11" aria-hidden="true" tabindex="-1"></a><span class="cf">if</span> <span class="va">__name__</span> <span class="op">==</span> <span class="st">&quot;__main__&quot;</span>:</span>
            <span id="cb2-12"><a href="#cb2-12" aria-hidden="true" tabindex="-1"></a>    q <span class="op">=</span> Queue()</span>
            <span id="cb2-13"><a href="#cb2-13" aria-hidden="true" tabindex="-1"></a>    p1 <span class="op">=</span> Process(target<span class="op">=</span>productor, args<span class="op">=</span>(q,))</span>
            <span id="cb2-14"><a href="#cb2-14" aria-hidden="true" tabindex="-1"></a>    p2 <span class="op">=</span> Process(target<span class="op">=</span>consumidor, args<span class="op">=</span>(q,))</span>
            <span id="cb2-15"><a href="#cb2-15" aria-hidden="true" tabindex="-1"></a>    p1.start()<span class="op">;</span> p1.join()</span>
            <span id="cb2-16"><a href="#cb2-16" aria-hidden="true" tabindex="-1"></a>    p2.start()<span class="op">;</span> p2.join()</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h3" id="con-pipe">Con Pipe</Titulo>
      <div class="sourceCode" id="cb3">
        <pre class="sourceCode python"><code class="sourceCode python"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a><span class="im">from</span> multiprocessing <span class="im">import</span> Process, Pipe</span>
          <span id="cb3-2"><a href="#cb3-2" aria-hidden="true" tabindex="-1"></a></span>
          <span id="cb3-3"><a href="#cb3-3" aria-hidden="true" tabindex="-1"></a><span class="kw">def</span> enviar(conexion):</span>
          <span id="cb3-4"><a href="#cb3-4" aria-hidden="true" tabindex="-1"></a>    conexion.send(<span class="st">&quot;Hola desde otro proceso&quot;</span>)</span>
          <span id="cb3-5"><a href="#cb3-5" aria-hidden="true" tabindex="-1"></a>    conexion.close()</span>
          <span id="cb3-6"><a href="#cb3-6" aria-hidden="true" tabindex="-1"></a></span>
          <span id="cb3-7"><a href="#cb3-7" aria-hidden="true" tabindex="-1"></a><span class="cf">if</span> <span class="va">__name__</span> <span class="op">==</span> <span class="st">&quot;__main__&quot;</span>:</span>
          <span id="cb3-8"><a href="#cb3-8" aria-hidden="true" tabindex="-1"></a>    conn1, conn2 <span class="op">=</span> Pipe()</span>
          <span id="cb3-9"><a href="#cb3-9" aria-hidden="true" tabindex="-1"></a>    p <span class="op">=</span> Process(target<span class="op">=</span>enviar, args<span class="op">=</span>(conn2,))</span>
          <span id="cb3-10"><a href="#cb3-10" aria-hidden="true" tabindex="-1"></a>    p.start()</span>
          <span id="cb3-11"><a href="#cb3-11" aria-hidden="true" tabindex="-1"></a>    <span class="bu">print</span>(conn1.recv())  <span class="co"># Recibe mensaje</span></span>
          <span id="cb3-12"><a href="#cb3-12" aria-hidden="true" tabindex="-1"></a>    p.join()</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="uso-de-pool-grupo-de-procesos">Uso de Pool (grupo de
        procesos)</Titulo>
      <Texto>Permite ejecutar una función muchas veces en paralelo fácilmente.</Texto>
      <div class="sourceCode" id="cb4">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a><span class="im">from</span> multiprocessing <span class="im">import</span> Pool</span>
            <span id="cb4-2"><a href="#cb4-2" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb4-3"><a href="#cb4-3" aria-hidden="true" tabindex="-1"></a><span class="kw">def</span> cuadrado(x):</span>
            <span id="cb4-4"><a href="#cb4-4" aria-hidden="true" tabindex="-1"></a>    <span class="cf">return</span> x <span class="op">*</span> x</span>
            <span id="cb4-5"><a href="#cb4-5" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb4-6"><a href="#cb4-6" aria-hidden="true" tabindex="-1"></a><span class="cf">if</span> <span class="va">__name__</span> <span class="op">==</span> <span class="st">&quot;__main__&quot;</span>:</span>
            <span id="cb4-7"><a href="#cb4-7" aria-hidden="true" tabindex="-1"></a>    <span class="cf">with</span> Pool(<span class="dv">4</span>) <span class="im">as</span> pool:  <span class="co"># 4 procesos</span></span>
            <span id="cb4-8"><a href="#cb4-8" aria-hidden="true" tabindex="-1"></a>        resultados <span class="op">=</span> pool.<span class="bu">map</span>(cuadrado, [<span class="dv">1</span>, <span class="dv">2</span>, <span class="dv">3</span>, <span class="dv">4</span>, <span class="dv">5</span>])</span>
            <span id="cb4-9"><a href="#cb4-9" aria-hidden="true" tabindex="-1"></a>    <span class="bu">print</span>(resultados)</span></code></pre>
      </div>
      <Texto>➡️ Ejecuta <code>cuadrado</code> en paralelo para cada valor.</Texto>
      <Linea />
      <Titulo title="h2" id="variables-compartidas">Variables compartidas</Titulo>
      <Texto>Para compartir datos entre procesos de forma segura:</Texto>
      <Titulo title="h3" id="value-y-array">Value y Array</Titulo>
      <div class="sourceCode" id="cb5">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb5-1"><a href="#cb5-1" aria-hidden="true" tabindex="-1"></a><span class="im">from</span> multiprocessing <span class="im">import</span> Process, Value, Array</span>
            <span id="cb5-2"><a href="#cb5-2" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb5-3"><a href="#cb5-3" aria-hidden="true" tabindex="-1"></a><span class="kw">def</span> modificar(v, a):</span>
            <span id="cb5-4"><a href="#cb5-4" aria-hidden="true" tabindex="-1"></a>    v.value <span class="op">+=</span> <span class="dv">10</span></span>
            <span id="cb5-5"><a href="#cb5-5" aria-hidden="true" tabindex="-1"></a>    <span class="cf">for</span> i <span class="kw">in</span> <span class="bu">range</span>(<span class="bu">len</span>(a)):</span>
            <span id="cb5-6"><a href="#cb5-6" aria-hidden="true" tabindex="-1"></a>        a[i] <span class="op">*=</span> <span class="dv">2</span></span>
            <span id="cb5-7"><a href="#cb5-7" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb5-8"><a href="#cb5-8" aria-hidden="true" tabindex="-1"></a><span class="cf">if</span> <span class="va">__name__</span> <span class="op">==</span> <span class="st">&quot;__main__&quot;</span>:</span>
            <span id="cb5-9"><a href="#cb5-9" aria-hidden="true" tabindex="-1"></a>    v <span class="op">=</span> Value(<span class="st">&#39;i&#39;</span>, <span class="dv">5</span>)           <span class="co"># Entero compartido</span></span>
            <span id="cb5-10"><a href="#cb5-10" aria-hidden="true" tabindex="-1"></a>    a <span class="op">=</span> Array(<span class="st">&#39;i&#39;</span>, [<span class="dv">1</span>, <span class="dv">2</span>, <span class="dv">3</span>])   <span class="co"># Arreglo compartido</span></span>
            <span id="cb5-11"><a href="#cb5-11" aria-hidden="true" tabindex="-1"></a>    p <span class="op">=</span> Process(target<span class="op">=</span>modificar, args<span class="op">=</span>(v, a))</span>
            <span id="cb5-12"><a href="#cb5-12" aria-hidden="true" tabindex="-1"></a>    p.start()<span class="op">;</span> p.join()</span>
            <span id="cb5-13"><a href="#cb5-13" aria-hidden="true" tabindex="-1"></a>    <span class="bu">print</span>(v.value, a[:])</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="sincronización-entre-procesos">Sincronización entre
        procesos</Titulo>
      <Texto>Se usan mecanismos como <code>Lock</code>, <code>Event</code>,
        <code>Semaphore</code>, etc., para evitar conflictos.
      </Texto>
      <Titulo title="h3" id="ejemplo-con-lock">Ejemplo con Lock</Titulo>
      <div class="sourceCode" id="cb6">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a><span class="im">from</span> multiprocessing <span class="im">import</span> Process, Lock</span>
            <span id="cb6-2"><a href="#cb6-2" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb6-3"><a href="#cb6-3" aria-hidden="true" tabindex="-1"></a><span class="kw">def</span> imprimir(lock, texto):</span>
            <span id="cb6-4"><a href="#cb6-4" aria-hidden="true" tabindex="-1"></a>    <span class="cf">with</span> lock:</span>
            <span id="cb6-5"><a href="#cb6-5" aria-hidden="true" tabindex="-1"></a>        <span class="bu">print</span>(texto)</span>
            <span id="cb6-6"><a href="#cb6-6" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb6-7"><a href="#cb6-7" aria-hidden="true" tabindex="-1"></a><span class="cf">if</span> <span class="va">__name__</span> <span class="op">==</span> <span class="st">&quot;__main__&quot;</span>:</span>
            <span id="cb6-8"><a href="#cb6-8" aria-hidden="true" tabindex="-1"></a>    lock <span class="op">=</span> Lock()</span>
            <span id="cb6-9"><a href="#cb6-9" aria-hidden="true" tabindex="-1"></a>    <span class="cf">for</span> i <span class="kw">in</span> <span class="bu">range</span>(<span class="dv">3</span>):</span>
            <span id="cb6-10"><a href="#cb6-10" aria-hidden="true" tabindex="-1"></a>        Process(target<span class="op">=</span>imprimir, args<span class="op">=</span>(lock, <span class="ss">f&quot;Proceso </span><span class="sc">{</span>i<span class="sc">}</span><span class="ss">&quot;</span>)).start()</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="ejemplo-completo">Ejemplo completo</Titulo>
      <div class="sourceCode" id="cb7">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb7-1"><a href="#cb7-1" aria-hidden="true" tabindex="-1"></a><span class="im">from</span> multiprocessing <span class="im">import</span> Process, Queue, current_process</span>
            <span id="cb7-2"><a href="#cb7-2" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> time</span>
            <span id="cb7-3"><a href="#cb7-3" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb7-4"><a href="#cb7-4" aria-hidden="true" tabindex="-1"></a><span class="kw">def</span> trabajo(q):</span>
            <span id="cb7-5"><a href="#cb7-5" aria-hidden="true" tabindex="-1"></a>    nombre <span class="op">=</span> current_process().name</span>
            <span id="cb7-6"><a href="#cb7-6" aria-hidden="true" tabindex="-1"></a>    q.put(<span class="ss">f&quot;</span><span class="sc">{</span>nombre<span class="sc">}</span><span class="ss"> inicia tarea&quot;</span>)</span>
            <span id="cb7-7"><a href="#cb7-7" aria-hidden="true" tabindex="-1"></a>    time.sleep(<span class="dv">1</span>)</span>
            <span id="cb7-8"><a href="#cb7-8" aria-hidden="true" tabindex="-1"></a>    q.put(<span class="ss">f&quot;</span><span class="sc">{</span>nombre<span class="sc">}</span><span class="ss"> termina tarea&quot;</span>)</span>
            <span id="cb7-9"><a href="#cb7-9" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb7-10"><a href="#cb7-10" aria-hidden="true" tabindex="-1"></a><span class="cf">if</span> <span class="va">__name__</span> <span class="op">==</span> <span class="st">&quot;__main__&quot;</span>:</span>
            <span id="cb7-11"><a href="#cb7-11" aria-hidden="true" tabindex="-1"></a>    q <span class="op">=</span> Queue()</span>
            <span id="cb7-12"><a href="#cb7-12" aria-hidden="true" tabindex="-1"></a>    procesos <span class="op">=</span> [Process(target<span class="op">=</span>trabajo, args<span class="op">=</span>(q,)) <span class="cf">for</span> _ <span class="kw">in</span> <span class="bu">range</span>(<span class="dv">4</span>)]</span>
            <span id="cb7-13"><a href="#cb7-13" aria-hidden="true" tabindex="-1"></a>    </span>
            <span id="cb7-14"><a href="#cb7-14" aria-hidden="true" tabindex="-1"></a>    <span class="cf">for</span> p <span class="kw">in</span> procesos: p.start()</span>
            <span id="cb7-15"><a href="#cb7-15" aria-hidden="true" tabindex="-1"></a>    <span class="cf">for</span> p <span class="kw">in</span> procesos: p.join()</span>
            <span id="cb7-16"><a href="#cb7-16" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb7-17"><a href="#cb7-17" aria-hidden="true" tabindex="-1"></a>    <span class="cf">while</span> <span class="kw">not</span> q.empty():</span>
            <span id="cb7-18"><a href="#cb7-18" aria-hidden="true" tabindex="-1"></a>        <span class="bu">print</span>(q.get())</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="resumen-rápido">Resumen rápido</Titulo>
      <table>
        <colgroup>
          <col style="width: 39%" />
          <col style="width: 60%" />
        </colgroup>
        <thead>
          <tr>
            <th>Herramienta</th>
            <th>Uso principal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>Process</code></td>
            <td>Crear procesos individuales</td>
          </tr>
          <tr>
            <td><code>Pool</code></td>
            <td>Ejecutar muchas tareas paralelas fácilmente</td>
          </tr>
          <tr>
            <td><code>Queue</code></td>
            <td>Comunicación entre procesos</td>
          </tr>
          <tr>
            <td><code>Pipe</code></td>
            <td>Comunicación directa entre dos procesos</td>
          </tr>
          <tr>
            <td><code>Value</code>, <code>Array</code></td>
            <td>Datos compartidos</td>
          </tr>
          <tr>
            <td><code>Lock</code>, <code>Semaphore</code>, <code>Event</code></td>
            <td>Sincronización y seguridad</td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Texto><a href="./../../readme.md#5-python">Regresar a la Guía
        Principal</a></Texto>
      <blockquote>
        <Texto><strong>Autor:</strong> Fravelz</Texto>
      </blockquote>
    </>
  );
}
export default nameabcd;
