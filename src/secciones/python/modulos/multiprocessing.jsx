import Titulo from "./../../../componentes/titulo.jsx";
import Lista from "./../../../componentes/lista.jsx";
import Texto from "./../../../componentes/texto.jsx";
import Linea from "./../../../componentes/linea.jsx";
import Enlace from "./../../../componentes/enlace.jsx";

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="multiprocessing-en-python">Multiprocessing en Python</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><Enlace href="#multiprocessing-en-python">Multiprocessing en Python</Enlace >
          <Lista>
            <li><Enlace href="#temario">Temario</Enlace ></li>
            <li><Enlace href="#qué-es-multiprocessing">¿Qué es multiprocessing?</Enlace ></li>
            <li><Enlace href="#conceptos-básicos">Conceptos básicos</Enlace >
              <Lista>
                <li><Enlace href="#crear-un-proceso">Crear un proceso</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#enviar-datos-entre-procesos">Enviar datos entre
              procesos</Enlace >
              <Lista>
                <li><Enlace href="#con-queue">Con Queue</Enlace ></li>
                <li><Enlace href="#con-pipe">Con Pipe</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#uso-de-pool-grupo-de-procesos">Uso de Pool (grupo de
              procesos)</Enlace ></li>
            <li><Enlace href="#variables-compartidas">Variables compartidas</Enlace >
              <Lista>
                <li><Enlace href="#value-y-array">Value y Array</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#sincronización-entre-procesos">Sincronización entre
              procesos</Enlace >
              <Lista>
                <li><Enlace href="#ejemplo-con-lock">Ejemplo con Lock</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#ejemplo-completo">Ejemplo completo</Enlace ></li>
            <li><Enlace href="#resumen-rápido">Resumen rápido</Enlace ></li>
          </Lista>
        </li>
      </Lista>
      <Texto><Enlace href="./../../readme.md#5-python">Regresar a la Guía
        Principal</Enlace ></Texto>
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
      <div className="sourceCode" id="cb1">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb1-1"><Enlace href="#cb1-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">from</span> multiprocessing <span className="im">import</span> Process</span>
            <span id="cb1-2"><Enlace href="#cb1-2" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb1-3"><Enlace href="#cb1-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">def</span> tarea():</span>
            <span id="cb1-4"><Enlace href="#cb1-4" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">print</span>(<span className="st">&quot;Ejecutando en otro proceso&quot;</span>)</span>
            <span id="cb1-5"><Enlace href="#cb1-5" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb1-6"><Enlace href="#cb1-6" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">if</span> <span className="va">__name__</span> <span className="op">==</span> <span className="st">&quot;__main__&quot;</span>:</span>
            <span id="cb1-7"><Enlace href="#cb1-7" aria-hidden="true" tabindex="-1"></Enlace >    p <span className="op">=</span> Process(target<span className="op">=</span>tarea)  <span className="co"># Crear proceso</span></span>
            <span id="cb1-8"><Enlace href="#cb1-8" aria-hidden="true" tabindex="-1"></Enlace >    p.start()                  <span className="co"># Iniciar</span></span>
            <span id="cb1-9"><Enlace href="#cb1-9" aria-hidden="true" tabindex="-1"></Enlace >    p.join()                   <span className="co"># Esperar a que termine</span></span>
            <span id="cb1-10"><Enlace href="#cb1-10" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">print</span>(<span className="st">&quot;Proceso finalizado&quot;</span>)</span></code></pre>
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
      <div className="sourceCode" id="cb2">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb2-1"><Enlace href="#cb2-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">from</span> multiprocessing <span className="im">import</span> Process, Queue</span>
            <span id="cb2-2"><Enlace href="#cb2-2" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb2-3"><Enlace href="#cb2-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">def</span> productor(q):</span>
            <span id="cb2-4"><Enlace href="#cb2-4" aria-hidden="true" tabindex="-1"></Enlace >    <span className="cf">for</span> i <span className="kw">in</span> <span className="bu">range</span>(<span className="dv">3</span>):</span>
            <span id="cb2-5"><Enlace href="#cb2-5" aria-hidden="true" tabindex="-1"></Enlace >        q.put(i)  <span className="co"># Enviar a la cola</span></span>
            <span id="cb2-6"><Enlace href="#cb2-6" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb2-7"><Enlace href="#cb2-7" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">def</span> consumidor(q):</span>
            <span id="cb2-8"><Enlace href="#cb2-8" aria-hidden="true" tabindex="-1"></Enlace >    <span className="cf">while</span> <span className="kw">not</span> q.empty():</span>
            <span id="cb2-9"><Enlace href="#cb2-9" aria-hidden="true" tabindex="-1"></Enlace >        <span className="bu">print</span>(<span className="st">&quot;Recibido:&quot;</span>, q.get())</span>
            <span id="cb2-10"><Enlace href="#cb2-10" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb2-11"><Enlace href="#cb2-11" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">if</span> <span className="va">__name__</span> <span className="op">==</span> <span className="st">&quot;__main__&quot;</span>:</span>
            <span id="cb2-12"><Enlace href="#cb2-12" aria-hidden="true" tabindex="-1"></Enlace >    q <span className="op">=</span> Queue()</span>
            <span id="cb2-13"><Enlace href="#cb2-13" aria-hidden="true" tabindex="-1"></Enlace >    p1 <span className="op">=</span> Process(target<span className="op">=</span>productor, args<span className="op">=</span>(q,))</span>
            <span id="cb2-14"><Enlace href="#cb2-14" aria-hidden="true" tabindex="-1"></Enlace >    p2 <span className="op">=</span> Process(target<span className="op">=</span>consumidor, args<span className="op">=</span>(q,))</span>
            <span id="cb2-15"><Enlace href="#cb2-15" aria-hidden="true" tabindex="-1"></Enlace >    p1.start()<span className="op">;</span> p1.join()</span>
            <span id="cb2-16"><Enlace href="#cb2-16" aria-hidden="true" tabindex="-1"></Enlace >    p2.start()<span className="op">;</span> p2.join()</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h3" id="con-pipe">Con Pipe</Titulo>
      <div className="sourceCode" id="cb3">
        <pre className="sourceCode python"><code className="sourceCode python"><span id="cb3-1"><Enlace href="#cb3-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">from</span> multiprocessing <span className="im">import</span> Process, Pipe</span>
          <span id="cb3-2"><Enlace href="#cb3-2" aria-hidden="true" tabindex="-1"></Enlace ></span>
          <span id="cb3-3"><Enlace href="#cb3-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">def</span> enviar(conexion):</span>
          <span id="cb3-4"><Enlace href="#cb3-4" aria-hidden="true" tabindex="-1"></Enlace >    conexion.send(<span className="st">&quot;Hola desde otro proceso&quot;</span>)</span>
          <span id="cb3-5"><Enlace href="#cb3-5" aria-hidden="true" tabindex="-1"></Enlace >    conexion.close()</span>
          <span id="cb3-6"><Enlace href="#cb3-6" aria-hidden="true" tabindex="-1"></Enlace ></span>
          <span id="cb3-7"><Enlace href="#cb3-7" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">if</span> <span className="va">__name__</span> <span className="op">==</span> <span className="st">&quot;__main__&quot;</span>:</span>
          <span id="cb3-8"><Enlace href="#cb3-8" aria-hidden="true" tabindex="-1"></Enlace >    conn1, conn2 <span className="op">=</span> Pipe()</span>
          <span id="cb3-9"><Enlace href="#cb3-9" aria-hidden="true" tabindex="-1"></Enlace >    p <span className="op">=</span> Process(target<span className="op">=</span>enviar, args<span className="op">=</span>(conn2,))</span>
          <span id="cb3-10"><Enlace href="#cb3-10" aria-hidden="true" tabindex="-1"></Enlace >    p.start()</span>
          <span id="cb3-11"><Enlace href="#cb3-11" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">print</span>(conn1.recv())  <span className="co"># Recibe mensaje</span></span>
          <span id="cb3-12"><Enlace href="#cb3-12" aria-hidden="true" tabindex="-1"></Enlace >    p.join()</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="uso-de-pool-grupo-de-procesos">Uso de Pool (grupo de
        procesos)</Titulo>
      <Texto>Permite ejecutar una función muchas veces en paralelo fácilmente.</Texto>
      <div className="sourceCode" id="cb4">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb4-1"><Enlace href="#cb4-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">from</span> multiprocessing <span className="im">import</span> Pool</span>
            <span id="cb4-2"><Enlace href="#cb4-2" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb4-3"><Enlace href="#cb4-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">def</span> cuadrado(x):</span>
            <span id="cb4-4"><Enlace href="#cb4-4" aria-hidden="true" tabindex="-1"></Enlace >    <span className="cf">return</span> x <span className="op">*</span> x</span>
            <span id="cb4-5"><Enlace href="#cb4-5" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb4-6"><Enlace href="#cb4-6" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">if</span> <span className="va">__name__</span> <span className="op">==</span> <span className="st">&quot;__main__&quot;</span>:</span>
            <span id="cb4-7"><Enlace href="#cb4-7" aria-hidden="true" tabindex="-1"></Enlace >    <span className="cf">with</span> Pool(<span className="dv">4</span>) <span className="im">as</span> pool:  <span className="co"># 4 procesos</span></span>
            <span id="cb4-8"><Enlace href="#cb4-8" aria-hidden="true" tabindex="-1"></Enlace >        resultados <span className="op">=</span> pool.<span className="bu">map</span>(cuadrado, [<span className="dv">1</span>, <span className="dv">2</span>, <span className="dv">3</span>, <span className="dv">4</span>, <span className="dv">5</span>])</span>
            <span id="cb4-9"><Enlace href="#cb4-9" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">print</span>(resultados)</span></code></pre>
      </div>
      <Texto>➡️ Ejecuta <code>cuadrado</code> en paralelo para cada valor.</Texto>
      <Linea />
      <Titulo title="h2" id="variables-compartidas">Variables compartidas</Titulo>
      <Texto>Para compartir datos entre procesos de forma segura:</Texto>
      <Titulo title="h3" id="value-y-array">Value y Array</Titulo>
      <div className="sourceCode" id="cb5">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb5-1"><Enlace href="#cb5-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">from</span> multiprocessing <span className="im">import</span> Process, Value, Array</span>
            <span id="cb5-2"><Enlace href="#cb5-2" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb5-3"><Enlace href="#cb5-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">def</span> modificar(v, a):</span>
            <span id="cb5-4"><Enlace href="#cb5-4" aria-hidden="true" tabindex="-1"></Enlace >    v.value <span className="op">+=</span> <span className="dv">10</span></span>
            <span id="cb5-5"><Enlace href="#cb5-5" aria-hidden="true" tabindex="-1"></Enlace >    <span className="cf">for</span> i <span className="kw">in</span> <span className="bu">range</span>(<span className="bu">len</span>(a)):</span>
            <span id="cb5-6"><Enlace href="#cb5-6" aria-hidden="true" tabindex="-1"></Enlace >        a[i] <span className="op">*=</span> <span className="dv">2</span></span>
            <span id="cb5-7"><Enlace href="#cb5-7" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb5-8"><Enlace href="#cb5-8" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">if</span> <span className="va">__name__</span> <span className="op">==</span> <span className="st">&quot;__main__&quot;</span>:</span>
            <span id="cb5-9"><Enlace href="#cb5-9" aria-hidden="true" tabindex="-1"></Enlace >    v <span className="op">=</span> Value(<span className="st">&#39;i&#39;</span>, <span className="dv">5</span>)           <span className="co"># Entero compartido</span></span>
            <span id="cb5-10"><Enlace href="#cb5-10" aria-hidden="true" tabindex="-1"></Enlace >    a <span className="op">=</span> Array(<span className="st">&#39;i&#39;</span>, [<span className="dv">1</span>, <span className="dv">2</span>, <span className="dv">3</span>])   <span className="co"># Arreglo compartido</span></span>
            <span id="cb5-11"><Enlace href="#cb5-11" aria-hidden="true" tabindex="-1"></Enlace >    p <span className="op">=</span> Process(target<span className="op">=</span>modificar, args<span className="op">=</span>(v, a))</span>
            <span id="cb5-12"><Enlace href="#cb5-12" aria-hidden="true" tabindex="-1"></Enlace >    p.start()<span className="op">;</span> p.join()</span>
            <span id="cb5-13"><Enlace href="#cb5-13" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">print</span>(v.value, a[:])</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="sincronización-entre-procesos">Sincronización entre
        procesos</Titulo>
      <Texto>Se usan mecanismos como <code>Lock</code>, <code>Event</code>,
        <code>Semaphore</code>, etc., para evitar conflictos.
      </Texto>
      <Titulo title="h3" id="ejemplo-con-lock">Ejemplo con Lock</Titulo>
      <div className="sourceCode" id="cb6">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb6-1"><Enlace href="#cb6-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">from</span> multiprocessing <span className="im">import</span> Process, Lock</span>
            <span id="cb6-2"><Enlace href="#cb6-2" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb6-3"><Enlace href="#cb6-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">def</span> imprimir(lock, texto):</span>
            <span id="cb6-4"><Enlace href="#cb6-4" aria-hidden="true" tabindex="-1"></Enlace >    <span className="cf">with</span> lock:</span>
            <span id="cb6-5"><Enlace href="#cb6-5" aria-hidden="true" tabindex="-1"></Enlace >        <span className="bu">print</span>(texto)</span>
            <span id="cb6-6"><Enlace href="#cb6-6" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb6-7"><Enlace href="#cb6-7" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">if</span> <span className="va">__name__</span> <span className="op">==</span> <span className="st">&quot;__main__&quot;</span>:</span>
            <span id="cb6-8"><Enlace href="#cb6-8" aria-hidden="true" tabindex="-1"></Enlace >    lock <span className="op">=</span> Lock()</span>
            <span id="cb6-9"><Enlace href="#cb6-9" aria-hidden="true" tabindex="-1"></Enlace >    <span className="cf">for</span> i <span className="kw">in</span> <span className="bu">range</span>(<span className="dv">3</span>):</span>
            <span id="cb6-10"><Enlace href="#cb6-10" aria-hidden="true" tabindex="-1"></Enlace >        Process(target<span className="op">=</span>imprimir, args<span className="op">=</span>(lock, <span className="ss">f&quot;Proceso </span><span className="sc">{"{"}</span>i<span className="sc">{"}"}</span><span className="ss">&quot;</span>)).start()</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="ejemplo-completo">Ejemplo completo</Titulo>
      <div className="sourceCode" id="cb7">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb7-1"><Enlace href="#cb7-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">from</span> multiprocessing <span className="im">import</span> Process, Queue, current_process</span>
            <span id="cb7-2"><Enlace href="#cb7-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> time</span>
            <span id="cb7-3"><Enlace href="#cb7-3" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb7-4"><Enlace href="#cb7-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">def</span> trabajo(q):</span>
            <span id="cb7-5"><Enlace href="#cb7-5" aria-hidden="true" tabindex="-1"></Enlace >    nombre <span className="op">=</span> current_process().name</span>
            <span id="cb7-6"><Enlace href="#cb7-6" aria-hidden="true" tabindex="-1"></Enlace >    q.put(<span className="ss">f&quot;</span><span className="sc">{"{"}</span>nombre<span className="sc">{"}"}</span><span className="ss"> inicia tarea&quot;</span>)</span>
            <span id="cb7-7"><Enlace href="#cb7-7" aria-hidden="true" tabindex="-1"></Enlace >    time.sleep(<span className="dv">1</span>)</span>
            <span id="cb7-8"><Enlace href="#cb7-8" aria-hidden="true" tabindex="-1"></Enlace >    q.put(<span className="ss">f&quot;</span><span className="sc">{"{"}</span>nombre<span className="sc">{"}"}</span><span className="ss"> termina tarea&quot;</span>)</span>
            <span id="cb7-9"><Enlace href="#cb7-9" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb7-10"><Enlace href="#cb7-10" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">if</span> <span className="va">__name__</span> <span className="op">==</span> <span className="st">&quot;__main__&quot;</span>:</span>
            <span id="cb7-11"><Enlace href="#cb7-11" aria-hidden="true" tabindex="-1"></Enlace >    q <span className="op">=</span> Queue()</span>
            <span id="cb7-12"><Enlace href="#cb7-12" aria-hidden="true" tabindex="-1"></Enlace >    procesos <span className="op">=</span> [Process(target<span className="op">=</span>trabajo, args<span className="op">=</span>(q,)) <span className="cf">for</span> _ <span className="kw">in</span> <span className="bu">range</span>(<span className="dv">4</span>)]</span>
            <span id="cb7-13"><Enlace href="#cb7-13" aria-hidden="true" tabindex="-1"></Enlace >    </span>
            <span id="cb7-14"><Enlace href="#cb7-14" aria-hidden="true" tabindex="-1"></Enlace >    <span className="cf">for</span> p <span className="kw">in</span> procesos: p.start()</span>
            <span id="cb7-15"><Enlace href="#cb7-15" aria-hidden="true" tabindex="-1"></Enlace >    <span className="cf">for</span> p <span className="kw">in</span> procesos: p.join()</span>
            <span id="cb7-16"><Enlace href="#cb7-16" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb7-17"><Enlace href="#cb7-17" aria-hidden="true" tabindex="-1"></Enlace >    <span className="cf">while</span> <span className="kw">not</span> q.empty():</span>
            <span id="cb7-18"><Enlace href="#cb7-18" aria-hidden="true" tabindex="-1"></Enlace >        <span className="bu">print</span>(q.get())</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="resumen-rápido">Resumen rápido</Titulo>
      <table>
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
      <Texto><Enlace href="./../../readme.md#5-python">Regresar a la Guía
        Principal</Enlace ></Texto>
      <blockquote>
        <Texto><strong>Autor:</strong> Fravelz</Texto>
      </blockquote>
    </>
  );
}
export default nameabcd;
