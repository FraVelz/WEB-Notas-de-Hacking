import Enlace from "./../../../componentes/enlace.jsx";
import Linea from "./../../../componentes/linea.jsx";
import Lista from "./../../../componentes/lista.jsx";
import Texto from "./../../../componentes/texto.jsx";
import Titulo from "./../../../componentes/titulo.jsx";
function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="threading-en-python">Threading en Python</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><Enlace href="#threading-en-python">Threading en Python</Enlace >
          <Lista>
            <li><Enlace href="#temario">Temario</Enlace ></li>
            <li><Enlace href="#1-qué-es-threading">1) ¿Qué es threading?</Enlace ></li>
            <li><Enlace href="#2-conceptos-clave">2) Conceptos clave</Enlace ></li>
            <li><Enlace href="#3-crear-y-usar-hilos--ejemplos-básicos">3) Crear y usar
              hilos — ejemplos básicos</Enlace >
              <Lista>
                <li><Enlace href="#a-usando-thread-con-target">a) Usando Thread con
                  target</Enlace ></li>
                <li><Enlace href="#b-subclassing-lhread">b) Subclassing lhread</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#4-daemon-threads-y-uso-correcto">4) Daemon threads y uso
              correcto</Enlace ></li>
            <li><Enlace href="#5-sincronización--primitivas-importantes">5)
              Sincronización — primitivas importantes</Enlace >
              <Lista>
                <li><Enlace href="#lock-mutual-exclusion">Lock (mutual exclusion)</Enlace ></li>
                <li><Enlace href="#rlock-reentrant-lock--permite-re-entradas-desde-mismo-hilo">RLock
                  (reentrant lock) — permite re-entradas desde mismo hilo</Enlace ></li>
                <li><Enlace href="#event--señalización-simple-flag">Event — señalización
                  simple (flag)</Enlace ></li>
                <li><Enlace href="#condition--esperas-con-notificación">Condition — esperas
                  con notificación</Enlace ></li>
                <li><Enlace href="#semaphore--contador">Semaphore — contador</Enlace ></li>
                <li><Enlace href="#barrier--sincronizar-n-hilos-en-un-punto">Barrier —
                  sincronizar N hilos en un punto</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#6-comunicación-segura-entre-hilos-queuequeue">6)
              Comunicación segura entre hilos: queue.Queue</Enlace ></li>
            <li><Enlace href="#7-manejo-de-excepciones-en-hilos">7) Manejo de excepciones
              en hilos</Enlace ></li>
            <li><Enlace href="#8-threadpoolexecutor-alta-abstracción">8)
              ThreadPoolExecutor (alta abstracción)</Enlace ></li>
            <li><Enlace href="#9-gil--cuándo-usar-threading-vs-multiprocessing">9) GIL —
              cuándo usar threading vs multiprocessing</Enlace ></li>
            <li><Enlace href="#10-operaciones-atómicas-y-seguridad">10) Operaciones
              atómicas y seguridad</Enlace ></li>
            <li><Enlace href="#11-cancelación-y-parada-de-hilos">11) Cancelación y parada
              de hilos</Enlace ></li>
            <li><Enlace href="#12-thread-local-storage">12) Thread-local storage</Enlace ></li>
            <li><Enlace href="#13-debugging-y-utilidades">13) Debugging y
              utilidades</Enlace ></li>
            <li><Enlace href="#14-buenas-prácticas">14) Buenas prácticas</Enlace ></li>
            <li><Enlace href="#15-ejemplos-prácticos-útiles">15) Ejemplos prácticos
              (útiles)</Enlace >
              <Lista>
                <li><Enlace href="#a-producer-consumer-con-queue-resumen">a)
                  Producer-consumer con Queue (resumen)</Enlace ></li>
                <li><Enlace href="#b-pool-de-threads-simple-con-thread-y-queue">b) Pool de
                  threads simple con Thread y Queue</Enlace ></li>
                <li><Enlace href="#c-uso-real-con-requests-io-bound">c) Uso real con requests
                  (I/O-bound)</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#16-limitaciones-y-alternativas">16) Limitaciones y
              alternativas</Enlace ></li>
            <li><Enlace href="#17-resumen">17) Resumen</Enlace ></li>
          </Lista>
        </li>
      </Lista>
      <Texto><Enlace href="./../../readme.md#5-python">Regresar a la Guía
        Principal</Enlace ></Texto>
      <Linea />
      <Titulo title="h2" id="qué-es-threading">1) ¿Qué es threading?</Titulo>
      <Texto><code>threading</code> es el módulo estándar de Python para
        <strong>concurrencia mediante hilos</strong> (threads). Permite ejecutar
        varias tareas aparentemente al mismo tiempo dentro del mismo proceso. Es
        ideal para operaciones <strong>I/O-bound</strong> (espera de red, disco,
        etc.). Importarlo:
      </Texto>
      <div className="sourceCode" id="cb1">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb1-1"><Enlace href="#cb1-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> threading</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="conceptos-clave">2) Conceptos clave</Titulo>
      <Lista>
        <li><strong>Thread (hilo):</strong> unidad de ejecución.</li>
        <li><strong>Daemon thread:</strong> hilo que no impide que el proceso
          termine; se mata cuando el programa principal acaba.</li>
        <li><strong>GIL (Global Interpreter Lock):</strong> en CPython, impide
          que varios hilos ejecuten bytecode Python al mismo tiempo — eso limita
          el paralelismo real para tareas CPU-bound.</li>
        <li><strong>Race condition:</strong> condición de carrera cuando varios
          hilos acceden/actualizan recursos compartidos sin sincronización.</li>
        <li><strong>Thread-safe:</strong> código que puede ejecutarse en varios
          hilos sin errores por concurrencia.</li>
      </Lista>
      <Linea />
      <Titulo title="h2" id="crear-y-usar-hilos-ejemplos-básicos">3) Crear y usar hilos —
        ejemplos básicos</Titulo>
      <Titulo title="h3" id="a-usando-thread-con-target">a) Usando Thread con target</Titulo>
      <div className="sourceCode" id="cb2">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb2-1"><Enlace href="#cb2-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> threading</span>
            <span id="cb2-2"><Enlace href="#cb2-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> time</span>
            <span id="cb2-3"><Enlace href="#cb2-3" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb2-4"><Enlace href="#cb2-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">def</span> worker(n):</span>
            <span id="cb2-5"><Enlace href="#cb2-5" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">print</span>(<span className="ss">f&quot;Worker </span><span className="sc">{"{"}</span>n<span className="sc">{"}"}</span><span className="ss"> empieza&quot;</span>)</span>
            <span id="cb2-6"><Enlace href="#cb2-6" aria-hidden="true" tabindex="-1"></Enlace >    time.sleep(<span className="dv">1</span>)</span>
            <span id="cb2-7"><Enlace href="#cb2-7" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">print</span>(<span className="ss">f&quot;Worker </span><span className="sc">{"{"}</span>n<span className="sc">{"}"}</span><span className="ss"> termina&quot;</span>)</span>
            <span id="cb2-8"><Enlace href="#cb2-8" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb2-9"><Enlace href="#cb2-9" aria-hidden="true" tabindex="-1"></Enlace >threads <span className="op">=</span> []</span>
            <span id="cb2-10"><Enlace href="#cb2-10" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">for</span> i <span className="kw">in</span> <span className="bu">range</span>(<span className="dv">3</span>):</span>
            <span id="cb2-11"><Enlace href="#cb2-11" aria-hidden="true" tabindex="-1"></Enlace >    t <span className="op">=</span> threading.Thread(target<span className="op">=</span>worker, args<span className="op">=</span>(i,), name<span className="op">=</span><span className="ss">f&quot;worker-</span><span className="sc">{"{"}</span>i<span className="sc">{"}"}</span><span className="ss">&quot;</span>)</span>
            <span id="cb2-12"><Enlace href="#cb2-12" aria-hidden="true" tabindex="-1"></Enlace >    t.start()</span>
            <span id="cb2-13"><Enlace href="#cb2-13" aria-hidden="true" tabindex="-1"></Enlace >    threads.append(t)</span>
            <span id="cb2-14"><Enlace href="#cb2-14" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb2-15"><Enlace href="#cb2-15" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">for</span> t <span className="kw">in</span> threads:</span>
            <span id="cb2-16"><Enlace href="#cb2-16" aria-hidden="true" tabindex="-1"></Enlace >    t.join()  <span className="co"># esperar que termine cada hilo</span></span>
            <span id="cb2-17"><Enlace href="#cb2-17" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb2-18"><Enlace href="#cb2-18" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(<span className="st">&quot;Todos terminados&quot;</span>)</span></code></pre>
      </div>
      <Titulo title="h3" id="b-subclassing-lhread">b) Subclassing lhread</Titulo>
      <div className="sourceCode" id="cb3">
        <pre className="sourceCode python"><code className="sourceCode python"><span id="cb3-1"><Enlace href="#cb3-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> threading, time</span>
          <span id="cb3-2"><Enlace href="#cb3-2" aria-hidden="true" tabindex="-1"></Enlace ></span>
          <span id="cb3-3"><Enlace href="#cb3-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">class</span> MiHilo(threading.Thread):</span>
          <span id="cb3-4"><Enlace href="#cb3-4" aria-hidden="true" tabindex="-1"></Enlace >    <span className="kw">def</span> <span className="fu">__init__</span>(<span className="va">self</span>, n):</span>
          <span id="cb3-5"><Enlace href="#cb3-5" aria-hidden="true" tabindex="-1"></Enlace >        <span className="bu">super</span>().<span className="fu">__init__</span>(name<span className="op">=</span><span className="ss">f&quot;MiHilo-</span><span className="sc">{"{"}</span>n<span className="sc">{"}"}</span><span className="ss">&quot;</span>)</span>
          <span id="cb3-6"><Enlace href="#cb3-6" aria-hidden="true" tabindex="-1"></Enlace >        <span className="va">self</span>.n <span className="op">=</span> n</span>
          <span id="cb3-7"><Enlace href="#cb3-7" aria-hidden="true" tabindex="-1"></Enlace ></span>
          <span id="cb3-8"><Enlace href="#cb3-8" aria-hidden="true" tabindex="-1"></Enlace >    <span className="kw">def</span> run(<span className="va">self</span>):</span>
          <span id="cb3-9"><Enlace href="#cb3-9" aria-hidden="true" tabindex="-1"></Enlace >        <span className="bu">print</span>(<span className="ss">f&quot;</span><span className="sc">{"{"}</span><span className="va">self</span><span className="sc">.</span>name<span className="sc">{"}"}</span><span className="ss"> comenzar&quot;</span>)</span>
          <span id="cb3-10"><Enlace href="#cb3-10" aria-hidden="true" tabindex="-1"></Enlace >        time.sleep(<span className="dv">1</span>)</span>
          <span id="cb3-11"><Enlace href="#cb3-11" aria-hidden="true" tabindex="-1"></Enlace >        <span className="bu">print</span>(<span className="ss">f&quot;</span><span className="sc">{"{"}</span><span className="va">self</span><span className="sc">.</span>name<span className="sc">{"}"}</span><span className="ss"> terminar&quot;</span>)</span>
          <span id="cb3-12"><Enlace href="#cb3-12" aria-hidden="true" tabindex="-1"></Enlace ></span>
          <span id="cb3-13"><Enlace href="#cb3-13" aria-hidden="true" tabindex="-1"></Enlace >h <span className="op">=</span> MiHilo(<span className="dv">1</span>)</span>
          <span id="cb3-14"><Enlace href="#cb3-14" aria-hidden="true" tabindex="-1"></Enlace >h.start()</span>
          <span id="cb3-15"><Enlace href="#cb3-15" aria-hidden="true" tabindex="-1"></Enlace >h.join()</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="daemon-threads-y-uso-correcto">4) Daemon threads y uso
        correcto</Titulo>
      <div className="sourceCode" id="cb4">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb4-1"><Enlace href="#cb4-1" aria-hidden="true" tabindex="-1"></Enlace >t <span className="op">=</span> threading.Thread(target<span className="op">=</span>worker, args<span className="op">=</span>(<span className="dv">1</span>,), daemon<span className="op">=</span><span className="va">True</span>)</span>
            <span id="cb4-2"><Enlace href="#cb4-2" aria-hidden="true" tabindex="-1"></Enlace >t.start()</span>
            <span id="cb4-3"><Enlace href="#cb4-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Si el main thread termina, el hilo daemon se termina abruptamente.</span></span></code></pre>
      </div>
      <Texto>Usa daemon para tareas de fondo opcionales (logs en tiempo real,
        watchers). Para trabajo crítico, <strong>no</strong> uses daemon;
        asegúrate de <code>join()</code>.</Texto>
      <Linea />
      <Titulo title="h2" id="sincronización-primitivas-importantes">5) Sincronización —
        primitivas importantes</Titulo>
      <Titulo title="h3" id="lock-mutual-exclusion">Lock (mutual exclusion)</Titulo>
      <div className="sourceCode" id="cb5">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb5-1"><Enlace href="#cb5-1" aria-hidden="true" tabindex="-1"></Enlace >lock <span className="op">=</span> threading.Lock()</span>
            <span id="cb5-2"><Enlace href="#cb5-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">with</span> lock:</span>
            <span id="cb5-3"><Enlace href="#cb5-3" aria-hidden="true" tabindex="-1"></Enlace >    <span className="co"># región crítica</span></span>
            <span id="cb5-4"><Enlace href="#cb5-4" aria-hidden="true" tabindex="-1"></Enlace >    <span className="cf">pass</span></span></code></pre>
      </div>
      <Titulo title="h3" id="rlock-reentrant-lock-permite-re-entradas-desde-mismo-hilo">RLock
        (reentrant lock) — permite re-entradas desde mismo hilo</Titulo>
      <div className="sourceCode" id="cb6">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb6-1"><Enlace href="#cb6-1" aria-hidden="true" tabindex="-1"></Enlace >rlock <span className="op">=</span> threading.RLock()</span></code></pre>
      </div>
      <Titulo title="h3" id="event-señalización-simple-flag">Event — señalización simple
        (flag)</Titulo>
      <div className="sourceCode" id="cb7">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb7-1"><Enlace href="#cb7-1" aria-hidden="true" tabindex="-1"></Enlace >event <span className="op">=</span> threading.Event()</span>
            <span id="cb7-2"><Enlace href="#cb7-2" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb7-3"><Enlace href="#cb7-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># hilo espera:</span></span>
            <span id="cb7-4"><Enlace href="#cb7-4" aria-hidden="true" tabindex="-1"></Enlace >event.wait()  <span className="co"># bloquea hasta que event.set()</span></span>
            <span id="cb7-5"><Enlace href="#cb7-5" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># hilo que despierta:</span></span>
            <span id="cb7-6"><Enlace href="#cb7-6" aria-hidden="true" tabindex="-1"></Enlace >event.<span className="bu">set</span>()</span></code></pre>
      </div>
      <Titulo title="h3" id="condition-esperas-con-notificación">Condition — esperas con
        notificación</Titulo>
      <div className="sourceCode" id="cb8">
        <pre className="sourceCode python"><code className="sourceCode python"><span id="cb8-1"><Enlace href="#cb8-1" aria-hidden="true" tabindex="-1"></Enlace >cond <span className="op">=</span> threading.Condition()</span>
          <span id="cb8-2"><Enlace href="#cb8-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">with</span> cond:</span>
          <span id="cb8-3"><Enlace href="#cb8-3" aria-hidden="true" tabindex="-1"></Enlace >    cond.wait()  <span className="co"># espera notificación</span></span>
          <span id="cb8-4"><Enlace href="#cb8-4" aria-hidden="true" tabindex="-1"></Enlace >    <span className="co"># otro hilo:</span></span>
          <span id="cb8-5"><Enlace href="#cb8-5" aria-hidden="true" tabindex="-1"></Enlace >    cond.notify()</span></code></pre>
      </div>
      <Titulo title="h3" id="semaphore-contador">Semaphore — contador</Titulo>
      <div className="sourceCode" id="cb9">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb9-1"><Enlace href="#cb9-1" aria-hidden="true" tabindex="-1"></Enlace >sem <span className="op">=</span> threading.Semaphore(<span className="dv">3</span>)  <span className="co"># máximo 3 entradas simultáneas</span></span>
            <span id="cb9-2"><Enlace href="#cb9-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">with</span> sem:</span>
            <span id="cb9-3"><Enlace href="#cb9-3" aria-hidden="true" tabindex="-1"></Enlace >    <span className="co"># acceso limitado</span></span>
            <span id="cb9-4"><Enlace href="#cb9-4" aria-hidden="true" tabindex="-1"></Enlace >    <span className="cf">pass</span></span></code></pre>
      </div>
      <Titulo title="h3" id="barrier-sincronizar-n-hilos-en-un-punto">Barrier — sincronizar N
        hilos en un punto</Titulo>
      <div className="sourceCode" id="cb10">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb10-1"><Enlace href="#cb10-1" aria-hidden="true" tabindex="-1"></Enlace >bar <span className="op">=</span> threading.Barrier(<span className="dv">3</span>)</span>
            <span id="cb10-2"><Enlace href="#cb10-2" aria-hidden="true" tabindex="-1"></Enlace >bar.wait()  <span className="co"># todos los hilos esperan aquí hasta que lleguen los 3</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="comunicación-segura-entre-hilos-queue.queue">6) Comunicación
        segura entre hilos: queue.Queue</Titulo>
      <Texto><code>queue.Queue</code> es <strong>thread-safe</strong> y la forma
        recomendada para pasar datos entre hilos (producer-consumer).</Texto>
      <div className="sourceCode" id="cb11">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb11-1"><Enlace href="#cb11-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> threading, queue, time</span>
            <span id="cb11-2"><Enlace href="#cb11-2" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb11-3"><Enlace href="#cb11-3" aria-hidden="true" tabindex="-1"></Enlace >q <span className="op">=</span> queue.Queue()</span>
            <span id="cb11-4"><Enlace href="#cb11-4" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb11-5"><Enlace href="#cb11-5" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">def</span> producer():</span>
            <span id="cb11-6"><Enlace href="#cb11-6" aria-hidden="true" tabindex="-1"></Enlace >    <span className="cf">for</span> i <span className="kw">in</span> <span className="bu">range</span>(<span className="dv">5</span>):</span>
            <span id="cb11-7"><Enlace href="#cb11-7" aria-hidden="true" tabindex="-1"></Enlace >        q.put(i)</span>
            <span id="cb11-8"><Enlace href="#cb11-8" aria-hidden="true" tabindex="-1"></Enlace >        <span className="bu">print</span>(<span className="st">&quot;produjo&quot;</span>, i)</span>
            <span id="cb11-9"><Enlace href="#cb11-9" aria-hidden="true" tabindex="-1"></Enlace >        time.sleep(<span className="fl">0.2</span>)</span>
            <span id="cb11-10"><Enlace href="#cb11-10" aria-hidden="true" tabindex="-1"></Enlace >    q.put(<span className="va">None</span>)  <span className="co"># sentinel para indicar fin</span></span>
            <span id="cb11-11"><Enlace href="#cb11-11" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb11-12"><Enlace href="#cb11-12" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">def</span> consumer():</span>
            <span id="cb11-13"><Enlace href="#cb11-13" aria-hidden="true" tabindex="-1"></Enlace >    <span className="cf">while</span> <span className="va">True</span>:</span>
            <span id="cb11-14"><Enlace href="#cb11-14" aria-hidden="true" tabindex="-1"></Enlace >        item <span className="op">=</span> q.get()</span>
            <span id="cb11-15"><Enlace href="#cb11-15" aria-hidden="true" tabindex="-1"></Enlace >        <span className="cf">if</span> item <span className="kw">is</span> <span className="va">None</span>:</span>
            <span id="cb11-16"><Enlace href="#cb11-16" aria-hidden="true" tabindex="-1"></Enlace >            <span className="cf">break</span></span>
            <span id="cb11-17"><Enlace href="#cb11-17" aria-hidden="true" tabindex="-1"></Enlace >        <span className="bu">print</span>(<span className="st">&quot;consumió&quot;</span>, item)</span>
            <span id="cb11-18"><Enlace href="#cb11-18" aria-hidden="true" tabindex="-1"></Enlace >        q.task_done()</span>
            <span id="cb11-19"><Enlace href="#cb11-19" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb11-20"><Enlace href="#cb11-20" aria-hidden="true" tabindex="-1"></Enlace >t1 <span className="op">=</span> threading.Thread(target<span className="op">=</span>producer)</span>
            <span id="cb11-21"><Enlace href="#cb11-21" aria-hidden="true" tabindex="-1"></Enlace >t2 <span className="op">=</span> threading.Thread(target<span className="op">=</span>consumer)</span>
            <span id="cb11-22"><Enlace href="#cb11-22" aria-hidden="true" tabindex="-1"></Enlace >t1.start()<span className="op">;</span> t2.start()</span>
            <span id="cb11-23"><Enlace href="#cb11-23" aria-hidden="true" tabindex="-1"></Enlace >t1.join()<span className="op">;</span> q.join()</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="manejo-de-excepciones-en-hilos">7) Manejo de excepciones en
        hilos</Titulo>
      <Texto>Las excepciones en <code>Thread</code> no se propagan al hilo
        principal. Opciones:</Texto>
      <Lista>
        <li>Usar <code>concurrent.futures.ThreadPoolExecutor</code> para obtener
          <code>Future</code> y atrapar excepciones.
        </li>
        <li>Capturar y guardar excepciones en el propio hilo y consultarlas
          después. Ejemplo con <code>ThreadPoolExecutor</code>:</li>
      </Lista>
      <div className="sourceCode" id="cb12">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb12-1"><Enlace href="#cb12-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">from</span> concurrent.futures <span className="im">import</span> ThreadPoolExecutor</span>
            <span id="cb12-2"><Enlace href="#cb12-2" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb12-3"><Enlace href="#cb12-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">def</span> trabajo(x):</span>
            <span id="cb12-4"><Enlace href="#cb12-4" aria-hidden="true" tabindex="-1"></Enlace >    <span className="cf">if</span> x <span className="op">==</span> <span className="dv">3</span>:</span>
            <span id="cb12-5"><Enlace href="#cb12-5" aria-hidden="true" tabindex="-1"></Enlace >        <span className="cf">raise</span> <span className="pp">ValueError</span>(<span className="st">&quot;boom&quot;</span>)</span>
            <span id="cb12-6"><Enlace href="#cb12-6" aria-hidden="true" tabindex="-1"></Enlace >    <span className="cf">return</span> x<span className="op">*</span><span className="dv">2</span></span>
            <span id="cb12-7"><Enlace href="#cb12-7" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb12-8"><Enlace href="#cb12-8" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">with</span> ThreadPoolExecutor(max_workers<span className="op">=</span><span className="dv">3</span>) <span className="im">as</span> ex:</span>
            <span id="cb12-9"><Enlace href="#cb12-9" aria-hidden="true" tabindex="-1"></Enlace >    futures <span className="op">=</span> [ex.submit(trabajo, i) <span className="cf">for</span> i <span className="kw">in</span> <span className="bu">range</span>(<span className="dv">5</span>)]</span>
            <span id="cb12-10"><Enlace href="#cb12-10" aria-hidden="true" tabindex="-1"></Enlace >    <span className="cf">for</span> f <span className="kw">in</span> futures:</span>
            <span id="cb12-11"><Enlace href="#cb12-11" aria-hidden="true" tabindex="-1"></Enlace >        <span className="cf">try</span>:</span>
            <span id="cb12-12"><Enlace href="#cb12-12" aria-hidden="true" tabindex="-1"></Enlace >            <span className="bu">print</span>(f.result())</span>
            <span id="cb12-13"><Enlace href="#cb12-13" aria-hidden="true" tabindex="-1"></Enlace >        <span className="cf">except</span> <span className="pp">Exception</span> <span className="im">as</span> e:</span>
            <span id="cb12-14"><Enlace href="#cb12-14" aria-hidden="true" tabindex="-1"></Enlace >            <span className="bu">print</span>(<span className="st">&quot;error en hilo:&quot;</span>, e)</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="threadpoolexecutor-alta-abstracción">8) ThreadPoolExecutor (alta
        abstracción)</Titulo>
      <Texto>Más cómodo que crear hilos manualmente.</Texto>
      <div className="sourceCode" id="cb13">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb13-1"><Enlace href="#cb13-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">from</span> concurrent.futures <span className="im">import</span> ThreadPoolExecutor, as_completed</span>
            <span id="cb13-2"><Enlace href="#cb13-2" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb13-3"><Enlace href="#cb13-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">def</span> tarea(n):</span>
            <span id="cb13-4"><Enlace href="#cb13-4" aria-hidden="true" tabindex="-1"></Enlace >    <span className="cf">return</span> n<span className="op">*</span>n</span>
            <span id="cb13-5"><Enlace href="#cb13-5" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb13-6"><Enlace href="#cb13-6" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">with</span> ThreadPoolExecutor(max_workers<span className="op">=</span><span className="dv">4</span>) <span className="im">as</span> pool:</span>
            <span id="cb13-7"><Enlace href="#cb13-7" aria-hidden="true" tabindex="-1"></Enlace >    futures <span className="op">=</span> [pool.submit(tarea, i) <span className="cf">for</span> i <span className="kw">in</span> <span className="bu">range</span>(<span className="dv">10</span>)]</span>
            <span id="cb13-8"><Enlace href="#cb13-8" aria-hidden="true" tabindex="-1"></Enlace >    <span className="cf">for</span> f <span className="kw">in</span> as_completed(futures):</span>
            <span id="cb13-9"><Enlace href="#cb13-9" aria-hidden="true" tabindex="-1"></Enlace >        <span className="bu">print</span>(f.result())</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="gil-cuándo-usar-threading-vs-multiprocessing">9) GIL — cuándo
        usar threading vs multiprocessing</Titulo>
      <Lista>
        <li><strong>I/O-bound:</strong> usa <code>threading</code> (o
          <code>asyncio</code>) — hilos dan mejoras reales (espera de I/O libera
          GIL).
        </li>
        <li><strong>CPU-bound:</strong> <code>threading</code> no escala por
          GIL; usa <code>multiprocessing</code> (procesos) o extensiones nativas
          (<code>numpy</code>, C) que sueltan GIL. Explicación corta: el GIL
          permite que solo un hilo ejecute bytecode Python simultáneamente; por
          eso multiples hilos no aceleran cálculos puros en CPython.</li>
      </Lista>
      <Linea />
      <Titulo title="h2" id="operaciones-atómicas-y-seguridad">10) Operaciones atómicas y
        seguridad</Titulo>
      <Lista>
        <li>Algunos objetos y operaciones son atómicas en CPython (por ejemplo,
          asignación simple de variable, operaciones sobre tipos integrales?) —
          <strong>no confíes en ello</strong>.
        </li>
        <li>Ejemplo inseguro (race):</li>
      </Lista>
      <div className="sourceCode" id="cb14">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb14-1"><Enlace href="#cb14-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># NO usar sin lock</span></span>
            <span id="cb14-2"><Enlace href="#cb14-2" aria-hidden="true" tabindex="-1"></Enlace >counter <span className="op">=</span> <span className="dv">0</span></span>
            <span id="cb14-3"><Enlace href="#cb14-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">def</span> incr():</span>
            <span id="cb14-4"><Enlace href="#cb14-4" aria-hidden="true" tabindex="-1"></Enlace >    <span className="kw">global</span> counter</span>
            <span id="cb14-5"><Enlace href="#cb14-5" aria-hidden="true" tabindex="-1"></Enlace >    <span className="cf">for</span> _ <span className="kw">in</span> <span className="bu">range</span>(<span className="dv">10000</span>):</span>
            <span id="cb14-6"><Enlace href="#cb14-6" aria-hidden="true" tabindex="-1"></Enlace >        counter <span className="op">+=</span> <span className="dv">1</span>  <span className="co"># no es atómico: leer-modificar-escribir</span></span></code></pre>
      </div>
      <Texto>Siempre protege con <code>Lock</code> si hay acceso concurrente.</Texto>
      <Linea />
      <Titulo title="h2" id="cancelación-y-parada-de-hilos">11) Cancelación y parada de
        hilos</Titulo>
      <Texto>No existe <code>Thread.kill()</code> seguro. Patrones para parar:</Texto>
      <Lista>
        <li>Usar <code>threading.Event()</code> como bandera de parada:</li>
      </Lista>
      <div className="sourceCode" id="cb15">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb15-1"><Enlace href="#cb15-1" aria-hidden="true" tabindex="-1"></Enlace >stop_event <span className="op">=</span> threading.Event()</span>
            <span id="cb15-2"><Enlace href="#cb15-2" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb15-3"><Enlace href="#cb15-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">def</span> worker():</span>
            <span id="cb15-4"><Enlace href="#cb15-4" aria-hidden="true" tabindex="-1"></Enlace >    <span className="cf">while</span> <span className="kw">not</span> stop_event.is_set():</span>
            <span id="cb15-5"><Enlace href="#cb15-5" aria-hidden="true" tabindex="-1"></Enlace >        <span className="co"># trabajo</span></span>
            <span id="cb15-6"><Enlace href="#cb15-6" aria-hidden="true" tabindex="-1"></Enlace >        <span className="cf">pass</span></span>
            <span id="cb15-7"><Enlace href="#cb15-7" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb15-8"><Enlace href="#cb15-8" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># detener:</span></span>
            <span id="cb15-9"><Enlace href="#cb15-9" aria-hidden="true" tabindex="-1"></Enlace >stop_event.<span className="bu">set</span>()</span></code></pre>
      </div>
      <Lista>
        <li>Usar sentinels en <code>queue</code> (<code>None</code>).</li>
      </Lista>
      <Linea />
      <Titulo title="h2" id="thread-local-storage">12) Thread-local storage</Titulo>
      <Texto>Datos separados por hilo:</Texto>
      <div className="sourceCode" id="cb16">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb16-1"><Enlace href="#cb16-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> threading</span>
            <span id="cb16-2"><Enlace href="#cb16-2" aria-hidden="true" tabindex="-1"></Enlace >local <span className="op">=</span> threading.local()</span>
            <span id="cb16-3"><Enlace href="#cb16-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">def</span> worker(val):</span>
            <span id="cb16-4"><Enlace href="#cb16-4" aria-hidden="true" tabindex="-1"></Enlace >    local.x <span className="op">=</span> val</span>
            <span id="cb16-5"><Enlace href="#cb16-5" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">print</span>(local.x)</span>
            <span id="cb16-6"><Enlace href="#cb16-6" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb16-7"><Enlace href="#cb16-7" aria-hidden="true" tabindex="-1"></Enlace >t1 <span className="op">=</span> threading.Thread(target<span className="op">=</span>worker, args<span className="op">=</span>(<span className="dv">1</span>,))</span>
            <span id="cb16-8"><Enlace href="#cb16-8" aria-hidden="true" tabindex="-1"></Enlace >t2 <span className="op">=</span> threading.Thread(target<span className="op">=</span>worker, args<span className="op">=</span>(<span className="dv">2</span>,))</span>
            <span id="cb16-9"><Enlace href="#cb16-9" aria-hidden="true" tabindex="-1"></Enlace >t1.start()<span className="op">;</span> t2.start()</span></code></pre>
      </div>
      <Texto>Cada hilo ve su propio <code>local.x</code>.</Texto>
      <Linea />
      <Titulo title="h2" id="debugging-y-utilidades">13) Debugging y utilidades</Titulo>
      <Lista>
        <li><code>threading.enumerate()</code> → lista hilos activos.</li>
        <li><code>threading.active_count()</code> → cuenta.</li>
        <li><code>threading.current_thread().name</code> → nombre actual.</li>
        <li>Poner logs (no prints) con <code>logging</code> y
          <code>threadName</code> en el formato para seguir hilos.
        </li>
        <li>Para debug avanzado:
          <code>faulthandler.dump_traceback_later()</code> o
          <code>threading.settrace()</code> (poco común).
        </li>
      </Lista>
      <Texto>Ejemplo de logging:</Texto>
      <div className="sourceCode" id="cb17">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb17-1"><Enlace href="#cb17-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> logging, threading, time</span>
            <span id="cb17-2"><Enlace href="#cb17-2" aria-hidden="true" tabindex="-1"></Enlace >logging.basicConfig(level<span className="op">=</span>logging.INFO, <span className="bu">format</span><span className="op">=</span><span className="st">&quot;</span><span className="sc">%(threadName)s</span><span className="st">: </span><span className="sc">%(message)s</span><span className="st">&quot;</span>)</span>
            <span id="cb17-3"><Enlace href="#cb17-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">def</span> worker():</span>
            <span id="cb17-4"><Enlace href="#cb17-4" aria-hidden="true" tabindex="-1"></Enlace >    logging.info(<span className="st">&quot;start&quot;</span>)</span>
            <span id="cb17-5"><Enlace href="#cb17-5" aria-hidden="true" tabindex="-1"></Enlace >    time.sleep(<span className="dv">1</span>)</span>
            <span id="cb17-6"><Enlace href="#cb17-6" aria-hidden="true" tabindex="-1"></Enlace >    logging.info(<span className="st">&quot;end&quot;</span>)</span>
            <span id="cb17-7"><Enlace href="#cb17-7" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb17-8"><Enlace href="#cb17-8" aria-hidden="true" tabindex="-1"></Enlace >t <span className="op">=</span> threading.Thread(target<span className="op">=</span>worker, name<span className="op">=</span><span className="st">&quot;hilo-1&quot;</span>)</span>
            <span id="cb17-9"><Enlace href="#cb17-9" aria-hidden="true" tabindex="-1"></Enlace >t.start()<span className="op">;</span> t.join()</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="buenas-prácticas">14) Buenas prácticas</Titulo>
      <Lista>
        <li>Para I/O concurrency, prefiere <code>ThreadPoolExecutor</code> o
          <code>asyncio</code> según el caso.
        </li>
        <li>Evita variables globales mutables; usa <code>queue.Queue</code> y
          <code>Locks</code>.
        </li>
        <li>No uses <code>daemon=True</code> para tareas que deben terminar
          correctamente.</li>
        <li>Mantén regiones críticas lo más cortas posible (reduce
          contención).</li>
        <li>Si necesitas paralelismo real para CPU-bound, usa
          <code>multiprocessing</code> o librerías que suelten el GIL.
        </li>
        <li>Añade timeouts a <code>join()</code> y bloqueos
          (<code>lock.acquire(timeout=...)</code>) si corres riesgos de
          deadlock.</li>
      </Lista>
      <Linea />
      <Titulo title="h2" id="ejemplos-prácticos-útiles">15) Ejemplos prácticos (útiles)</Titulo>
      <Titulo title="h3" id="a-producer-consumer-con-queue-resumen">a) Producer-consumer con
        Queue (resumen)</Titulo>
      <Texto>Ya mostrado en la sección de Queue. Es el patrón más útil y seguro
        para comunicación.</Texto>
      <Titulo title="h3" id="b-pool-de-threads-simple-con-thread-y-queue">b) Pool de threads
        simple con Thread y Queue</Titulo>
      <div className="sourceCode" id="cb18">
        <pre className="sourceCode python"><code className="sourceCode python"><span id="cb18-1"><Enlace href="#cb18-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> threading, queue, time</span>
          <span id="cb18-2"><Enlace href="#cb18-2" aria-hidden="true" tabindex="-1"></Enlace ></span>
          <span id="cb18-3"><Enlace href="#cb18-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">def</span> worker(q):</span>
          <span id="cb18-4"><Enlace href="#cb18-4" aria-hidden="true" tabindex="-1"></Enlace >    <span className="cf">while</span> <span className="va">True</span>:</span>
          <span id="cb18-5"><Enlace href="#cb18-5" aria-hidden="true" tabindex="-1"></Enlace >        fn, args <span className="op">=</span> q.get()</span>
          <span id="cb18-6"><Enlace href="#cb18-6" aria-hidden="true" tabindex="-1"></Enlace >        <span className="cf">if</span> fn <span className="kw">is</span> <span className="va">None</span>:</span>
          <span id="cb18-7"><Enlace href="#cb18-7" aria-hidden="true" tabindex="-1"></Enlace >            <span className="cf">break</span></span>
          <span id="cb18-8"><Enlace href="#cb18-8" aria-hidden="true" tabindex="-1"></Enlace >        <span className="cf">try</span>:</span>
          <span id="cb18-9"><Enlace href="#cb18-9" aria-hidden="true" tabindex="-1"></Enlace >            fn(<span className="op">*</span>args)</span>
          <span id="cb18-10"><Enlace href="#cb18-10" aria-hidden="true" tabindex="-1"></Enlace >        <span className="cf">finally</span>:</span>
          <span id="cb18-11"><Enlace href="#cb18-11" aria-hidden="true" tabindex="-1"></Enlace >            q.task_done()</span>
          <span id="cb18-12"><Enlace href="#cb18-12" aria-hidden="true" tabindex="-1"></Enlace ></span>
          <span id="cb18-13"><Enlace href="#cb18-13" aria-hidden="true" tabindex="-1"></Enlace >q <span className="op">=</span> queue.Queue()</span>
          <span id="cb18-14"><Enlace href="#cb18-14" aria-hidden="true" tabindex="-1"></Enlace >threads <span className="op">=</span> []</span>
          <span id="cb18-15"><Enlace href="#cb18-15" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">for</span> _ <span className="kw">in</span> <span className="bu">range</span>(<span className="dv">4</span>):</span>
          <span id="cb18-16"><Enlace href="#cb18-16" aria-hidden="true" tabindex="-1"></Enlace >    t <span className="op">=</span> threading.Thread(target<span className="op">=</span>worker, args<span className="op">=</span>(q,))</span>
          <span id="cb18-17"><Enlace href="#cb18-17" aria-hidden="true" tabindex="-1"></Enlace >    t.start()</span>
          <span id="cb18-18"><Enlace href="#cb18-18" aria-hidden="true" tabindex="-1"></Enlace >    threads.append(t)</span>
          <span id="cb18-19"><Enlace href="#cb18-19" aria-hidden="true" tabindex="-1"></Enlace ></span>
          <span id="cb18-20"><Enlace href="#cb18-20" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Encolar tareas</span></span>
          <span id="cb18-21"><Enlace href="#cb18-21" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">for</span> i <span className="kw">in</span> <span className="bu">range</span>(<span className="dv">10</span>):</span>
          <span id="cb18-22"><Enlace href="#cb18-22" aria-hidden="true" tabindex="-1"></Enlace >    q.put((<span className="bu">print</span>, (<span className="ss">f&quot;task </span><span className="sc">{"{"}</span>i<span className="sc">{"}"}</span><span className="ss">&quot;</span>,)))</span>
          <span id="cb18-23"><Enlace href="#cb18-23" aria-hidden="true" tabindex="-1"></Enlace ></span>
          <span id="cb18-24"><Enlace href="#cb18-24" aria-hidden="true" tabindex="-1"></Enlace >q.join()</span>
          <span id="cb18-25"><Enlace href="#cb18-25" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># parar hilos</span></span>
          <span id="cb18-26"><Enlace href="#cb18-26" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">for</span> _ <span className="kw">in</span> threads:</span>
          <span id="cb18-27"><Enlace href="#cb18-27" aria-hidden="true" tabindex="-1"></Enlace >    q.put((<span className="va">None</span>, <span className="va">None</span>))</span>
          <span id="cb18-28"><Enlace href="#cb18-28" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">for</span> t <span className="kw">in</span> threads:</span>
          <span id="cb18-29"><Enlace href="#cb18-29" aria-hidden="true" tabindex="-1"></Enlace >    t.join()</span></code></pre>
      </div>
      <Titulo title="h3" id="c-uso-real-con-requests-io-bound">c) Uso real con requests
        (I/O-bound)</Titulo>
      <div className="sourceCode" id="cb19">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb19-1"><Enlace href="#cb19-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> requests</span>
            <span id="cb19-2"><Enlace href="#cb19-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">from</span> concurrent.futures <span className="im">import</span> ThreadPoolExecutor</span>
            <span id="cb19-3"><Enlace href="#cb19-3" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb19-4"><Enlace href="#cb19-4" aria-hidden="true" tabindex="-1"></Enlace >urls <span className="op">=</span> [<span className="st">&quot;https://example.com&quot;</span>]<span className="op">*</span><span className="dv">10</span></span>
            <span id="cb19-5"><Enlace href="#cb19-5" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb19-6"><Enlace href="#cb19-6" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">def</span> fetch(url):</span>
            <span id="cb19-7"><Enlace href="#cb19-7" aria-hidden="true" tabindex="-1"></Enlace >    r <span className="op">=</span> requests.get(url)</span>
            <span id="cb19-8"><Enlace href="#cb19-8" aria-hidden="true" tabindex="-1"></Enlace >    <span className="cf">return</span> <span className="bu">len</span>(r.content)</span>
            <span id="cb19-9"><Enlace href="#cb19-9" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb19-10"><Enlace href="#cb19-10" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">with</span> ThreadPoolExecutor(max_workers<span className="op">=</span><span className="dv">5</span>) <span className="im">as</span> ex:</span>
            <span id="cb19-11"><Enlace href="#cb19-11" aria-hidden="true" tabindex="-1"></Enlace >    results <span className="op">=</span> <span className="bu">list</span>(ex.<span className="bu">map</span>(fetch, urls))</span>
            <span id="cb19-12"><Enlace href="#cb19-12" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(results)</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="limitaciones-y-alternativas">16) Limitaciones y
        alternativas</Titulo>
      <Lista>
        <li><code>threading</code> no es la mejor opción para CPU-bound por
          el GIL.</li>    <li>Alternativas:</li>
        <Lista>
          <li>
            <code>multiprocessing</code> — procesos (paralelismo
            real).</li>        <li><code>asyncio</code> — concurrencia en un solo hilo usando
              corutinas (muy eficiente para I/O con muchas conexiones).</li>        <li><code>concurrent.futures.ProcessPoolExecutor</code> — API
                parecida a ThreadPool pero con procesos.</li>      </Lista>
      </Lista>
      <Linea />
      <Titulo title="h2" id="resumen">17) Resumen</Titulo>
      <Lista>
        <li>Usa <code>threading</code> para <strong>I/O-bound</strong>.</li>
        <li>Protege recursos compartidos con <code>Lock</code>,
          <code>RLock</code>, o usa <code>Queue</code>.
        </li>
        <li>Para excepciones y manejo fácil, usa
          <code>ThreadPoolExecutor</code>.
        </li>
        <li>No hay forma segura de matar hilos; implementa mecanismo cooperativo
          (Event/sentinels).</li>
        <li>Si necesitas paralelismo CPU puro, usa
          <code>multiprocessing</code>.
        </li>
      </Lista>
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
