import Titulo from "./../../componentes/titulo.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Linea from "./../../componentes/linea.jsx";

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="sys-en-python">Sys en Python</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><a href="#sys-en-python">Sys en Python</a>
          <Lista>
            <li><a href="#temario">Temario</a></li>
            <li><a href="#qué-es-sys">¿Qué es sys?</a></li>
            <li><a href="#uso-básico-y-más-común">Uso básico y más común</a>
              <Lista>
                <li><a href="#sysargv">sys.argv</a></li>
                <li><a href="#sysexitcodemessage">sys.exit([code|message])</a></li>
                <li><a href="#syspath">sys.path</a></li>
                <li><a href="#sysmodules">sys.modules</a></li>
                <li><a href="#sysstdout-sysstderr-sysstdin">sys.stdout, sys.stderr,
                  sys.stdin</a></li>
                <li><a href="#sysversion-y-sysversion_info">sys.version y
                  sys.version_info</a></li>
                <li><a href="#sysplatform">sys.platform</a></li>
                <li><a href="#sysmaxsize">sys.maxsize</a></li>
                <li><a href="#sysgetsizeofobj-default">sys.getsizeof(obj[,
                  default])</a></li>
                <li><a href="#sysgetrecursionlimit--syssetrecursionlimitn">sys.getrecursionlimit()
                  / sys.setrecursionlimit(n)</a></li>
                <li><a href="#sysexc_info">sys.exc_info()</a></li>
                <li><a href="#sysexcepthook">sys.excepthook</a></li>
                <li><a href="#sysgetdefaultencoding-y-sysgetfilesystemencoding">sys.getdefaultencoding()
                  y sys.getfilesystemencoding()</a></li>
                <li><a href="#sysbyteorder">sys.byteorder</a></li>
                <li><a href="#sysimplementation">sys.implementation</a></li>
                <li><a href="#sysflags">sys.flags</a></li>
                <li><a href="#sysgetwindowsversion-solo-windows">sys.getwindowsversion()
                  (solo Windows)</a></li>
                <li><a href="#sysgetswitchinterval--syssetswitchinterval">sys.getswitchinterval()
                  / sys.setswitchinterval()</a></li>
              </Lista>
            </li>
            <li><a href="#ejemplos-prácticos">Ejemplos prácticos</a>
              <Lista>
                <li><a href="#1-script-que-procesa-cli-simple">1) Script que procesa CLI
                  simple</a></li>
                <li><a href="#2-redirigir-salida-a-un-archivo">2) Redirigir salida a un
                  archivo</a></li>
                <li><a href="#3-manejo-global-de-excepciones-logging">3) Manejo global
                  de excepciones (logging)</a></li>
                <li><a href="#4-comprobar-versión-de-python-antes-de-correr">4)
                  Comprobar versión de Python antes de correr</a></li>
              </Lista>
            </li>
            <li><a href="#buenas-prácticas-y-advertencias">Buenas prácticas y
              advertencias</a></li>
            <li><a href="#debugging-y-profiling">Debugging y profiling</a></li>
            <li><a href="#mini-proyectos--ejercicios-sugeridos">Mini-proyectos /
              ejercicios sugeridos</a></li>
          </Lista>
        </li>
      </Lista>
      <Texto><a href="./../../readme.md#5-python">Regresar a la Guía
        Principal</a></Texto>
      <Linea />
      <Titulo title="h2" id="qué-es-sys">¿Qué es sys?</Titulo>
      <Texto><code>sys</code> es un módulo integrado que ofrece <strong>interfaz
        con el intérprete de Python</strong> y el entorno donde corre
        (argumentos de línea de comandos, rutas, streams estándar, información
        de la plataforma, manejo de errores, configuración del intérprete,
        etc.). Se importa con:</Texto>
      <div class="sourceCode" id="cb1">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> sys</span></code></pre>
      </div>
      <Titulo title="h2" id="uso-básico-y-más-común">Uso básico y más común</Titulo>
      <Titulo title="h3" id="sys.argv">sys.argv</Titulo>
      <Texto>Lista de argumentos pasados al script (el elemento 0 es el nombre del
        script).</Texto>
      <div class="sourceCode" id="cb2">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="co"># ejemplo.py</span></span>
            <span id="cb2-2"><a href="#cb2-2" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> sys</span>
            <span id="cb2-3"><a href="#cb2-3" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(sys.argv)</span>
            <span id="cb2-4"><a href="#cb2-4" aria-hidden="true" tabindex="-1"></a><span class="co"># Ejecuta: python ejemplo.py a b -&gt; [&#39;ejemplo.py&#39;, &#39;a&#39;, &#39;b&#39;]</span></span></code></pre>
      </div>
      <Titulo title="h3" id="sys.exitcodemessage">sys.exit([code|message])</Titulo>
      <Texto>Termina el intérprete lanzando <code>SystemExit</code>.
        <code>code=0</code> indica éxito; cualquier int distinto a 0 indica
        error. También puedes pasar un string (se imprime).
      </Texto>
      <div class="sourceCode" id="cb3">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a><span class="cf">if</span> <span class="bu">len</span>(sys.argv) <span class="op">&lt;</span> <span class="dv">2</span>:</span>
            <span id="cb3-2"><a href="#cb3-2" aria-hidden="true" tabindex="-1"></a>    sys.exit(<span class="st">&quot;falta argumento&quot;</span>)</span></code></pre>
      </div>
      <Titulo title="h3" id="sys.path">sys.path</Titulo>
      <Texto>Lista de rutas donde Python busca módulos. Puedes modificarla en
        tiempo de ejecución (útil para scripts).</Texto>
      <div class="sourceCode" id="cb4">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> sys</span>
            <span id="cb4-2"><a href="#cb4-2" aria-hidden="true" tabindex="-1"></a>sys.path.append(<span class="st">&quot;/mi/carpeta/lib&quot;</span>)</span></code></pre>
      </div>
      <Titulo title="h3" id="sys.modules">sys.modules</Titulo>
      <Texto>Diccionario de módulos cargados en memoria
        (<code>name -&gt; module</code>). Útil para inspección o recarga.</Texto>
      <div class="sourceCode" id="cb5">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb5-1"><a href="#cb5-1" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> importlib</span>
            <span id="cb5-2"><a href="#cb5-2" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> mi_modulo</span>
            <span id="cb5-3"><a href="#cb5-3" aria-hidden="true" tabindex="-1"></a>importlib.<span class="bu">reload</span>(sys.modules[<span class="st">&#39;mi_modulo&#39;</span>])</span></code></pre>
      </div>
      <Titulo title="h3" id="sys.stdout-sys.stderr-sys.stdin">sys.stdout, sys.stderr,
        sys.stdin</Titulo>
      <Texto>Streams estándar. Permiten redirigir o manipular entrada/salida.</Texto>
      <div class="sourceCode" id="cb6">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a>sys.stdout.write(<span class="st">&quot;hola</span><span class="ch">\n</span><span class="st">&quot;</span>)</span>
            <span id="cb6-2"><a href="#cb6-2" aria-hidden="true" tabindex="-1"></a>sys.stderr.write(<span class="st">&quot;error!</span><span class="ch">\n</span><span class="st">&quot;</span>)</span>
            <span id="cb6-3"><a href="#cb6-3" aria-hidden="true" tabindex="-1"></a>data <span class="op">=</span> sys.stdin.read()</span></code></pre>
      </div>
      <Texto>También puedes usar <code>sys.stdout.buffer</code> para I/O
        binaria.</Texto>
      <Titulo title="h3" id="sys.version-y-sys.version_info">sys.version y
        sys.version_info</Titulo>
      <Texto>Información de la versión de Python.</Texto>
      <div class="sourceCode" id="cb7">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb7-1"><a href="#cb7-1" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(sys.version)          <span class="co"># string completa</span></span>
            <span id="cb7-2"><a href="#cb7-2" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(sys.version_info)     <span class="co"># tupla nombrada (major, minor, micro, ...)</span></span>
            <span id="cb7-3"><a href="#cb7-3" aria-hidden="true" tabindex="-1"></a><span class="cf">if</span> sys.version_info <span class="op">&lt;</span> (<span class="dv">3</span>,<span class="dv">10</span>):</span>
            <span id="cb7-4"><a href="#cb7-4" aria-hidden="true" tabindex="-1"></a>    <span class="bu">print</span>(<span class="st">&quot;actualiza python&quot;</span>)</span></code></pre>
      </div>
      <Titulo title="h3" id="sys.platform">sys.platform</Titulo>
      <Texto>Cadena que indica la plataforma (e.g., <code>'linux'</code>,
        <code>'darwin'</code>, <code>'win32'</code>).
      </Texto>
      <div class="sourceCode" id="cb8">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb8-1"><a href="#cb8-1" aria-hidden="true" tabindex="-1"></a><span class="cf">if</span> sys.platform.startswith(<span class="st">&quot;win&quot;</span>):</span>
            <span id="cb8-2"><a href="#cb8-2" aria-hidden="true" tabindex="-1"></a>    <span class="bu">print</span>(<span class="st">&quot;Windows&quot;</span>)</span></code></pre>
      </div>
      <Titulo title="h3" id="sys.maxsize">sys.maxsize</Titulo>
      <Texto>Entero que normalmente indica el tamaño máximo práctico de
        estructuras (32/64-bit).</Texto>
      <div class="sourceCode" id="cb9">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb9-1"><a href="#cb9-1" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(sys.maxsize)</span></code></pre>
      </div>
      <Titulo title="h3" id="sys.getsizeofobj-default">sys.getsizeof(obj[, default])</Titulo>
      <Texto>Devuelve el tamaño en bytes del objeto (solo tamaño del objeto, no
        profundidad).</Texto>
      <div class="sourceCode" id="cb10">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb10-1"><a href="#cb10-1" aria-hidden="true" tabindex="-1"></a>x <span class="op">=</span> [<span class="dv">1</span>,<span class="dv">2</span>,<span class="dv">3</span>]</span>
            <span id="cb10-2"><a href="#cb10-2" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(sys.getsizeof(x))  <span class="co"># tamaño del objeto lista en memoria (superficial)</span></span></code></pre>
      </div>
      <Titulo title="h3" id="sys.getrecursionlimit-sys.setrecursionlimitn">sys.getrecursionlimit()
        / sys.setrecursionlimit(n)</Titulo>
      <Texto>Leer y ajustar el límite de recursión del intérprete.</Texto>
      <div class="sourceCode" id="cb11">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb11-1"><a href="#cb11-1" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(sys.getrecursionlimit())</span>
            <span id="cb11-2"><a href="#cb11-2" aria-hidden="true" tabindex="-1"></a>sys.setrecursionlimit(<span class="dv">2000</span>)</span></code></pre>
      </div>
      <Texto>Usar con cuidado: un límite demasiado alto puede provocar
        segfault.</Texto>
      <Titulo title="h3" id="sys.exc_info">sys.exc_info()</Titulo>
      <Texto>Información sobre la excepción actual:
        <code>(exc_type, exc_value, traceback)</code>.
      </Texto>
      <div class="sourceCode" id="cb12">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb12-1"><a href="#cb12-1" aria-hidden="true" tabindex="-1"></a><span class="cf">try</span>:</span>
            <span id="cb12-2"><a href="#cb12-2" aria-hidden="true" tabindex="-1"></a>    <span class="dv">1</span><span class="op">/</span><span class="dv">0</span></span>
            <span id="cb12-3"><a href="#cb12-3" aria-hidden="true" tabindex="-1"></a><span class="cf">except</span>:</span>
            <span id="cb12-4"><a href="#cb12-4" aria-hidden="true" tabindex="-1"></a>    <span class="bu">print</span>(sys.exc_info())</span></code></pre>
      </div>
      <Titulo title="h3" id="sys.excepthook">sys.excepthook</Titulo>
      <Texto>Función que maneja excepciones no capturadas. Puedes reemplazarla
        para logging personalizado.</Texto>
      <div class="sourceCode" id="cb13">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb13-1"><a href="#cb13-1" aria-hidden="true" tabindex="-1"></a><span class="kw">def</span> mi_handler(exc_type, exc, tb):</span>
            <span id="cb13-2"><a href="#cb13-2" aria-hidden="true" tabindex="-1"></a>    <span class="bu">print</span>(<span class="st">&quot;Excepción no manejada:&quot;</span>, exc_type, exc)</span>
            <span id="cb13-3"><a href="#cb13-3" aria-hidden="true" tabindex="-1"></a>sys.excepthook <span class="op">=</span> mi_handler</span></code></pre>
      </div>
      <Titulo title="h3" id="sys.getdefaultencoding-y-sys.getfilesystemencoding">sys.getdefaultencoding()
        y sys.getfilesystemencoding()</Titulo>
      <Texto>Codificaciones por defecto (útil para I/O y compatibilidad entre
        plataformas).</Texto>
      <div class="sourceCode" id="cb14">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb14-1"><a href="#cb14-1" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(sys.getdefaultencoding(), sys.getfilesystemencoding())</span></code></pre>
      </div>
      <Titulo title="h3" id="sys.byteorder">sys.byteorder</Titulo>
      <Texto>Orden de bytes de la máquina: <code>'little'</code> o
        <code>'big'</code>.
      </Texto>
      <div class="sourceCode" id="cb15">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb15-1"><a href="#cb15-1" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(sys.byteorder)</span></code></pre>
      </div>
      <Titulo title="h3" id="sys.implementation">sys.implementation</Titulo>
      <Texto>Información sobre la implementación de Python (CPython, PyPy,
        etc.)</Texto>
      <div class="sourceCode" id="cb16">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb16-1"><a href="#cb16-1" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(sys.implementation)</span></code></pre>
      </div>
      <Titulo title="h3" id="sys.flags">sys.flags</Titulo>
      <Texto>Namespace con banderas con las que arrancó el intérprete
        (<code>optimize</code>, <code>debug</code>, <code>interactive</code>,
        etc.).</Texto>
      <div class="sourceCode" id="cb17">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb17-1"><a href="#cb17-1" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(sys.flags)</span></code></pre>
      </div>
      <Titulo title="h3" id="sys.getwindowsversion-solo-windows">sys.getwindowsversion()
        (solo Windows)</Titulo>
      <Texto>Disponible solo en Windows; usar
        <code>hasattr(sys, "getwindowsversion")</code> para comprobar.
      </Texto>
      <Titulo title="h3" id="sys.getswitchinterval-sys.setswitchinterval">sys.getswitchinterval()
        / sys.setswitchinterval()</Titulo>
      <Texto>Controla la frecuencia de cambio de contexto entre threads
        (CPython).</Texto>
      <Linea />
      <Titulo title="h2" id="ejemplos-prácticos">Ejemplos prácticos</Titulo>
      <Titulo title="h3" id="script-que-procesa-cli-simple">1) Script que procesa CLI
        simple</Titulo>
      <div class="sourceCode" id="cb18">
        <pre class="sourceCode python"><code class="sourceCode python"><span id="cb18-1"><a href="#cb18-1" aria-hidden="true" tabindex="-1"></a><span class="co"># procesador.py</span></span>
          <span id="cb18-2"><a href="#cb18-2" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> sys</span>
          <span id="cb18-3"><a href="#cb18-3" aria-hidden="true" tabindex="-1"></a></span>
          <span id="cb18-4"><a href="#cb18-4" aria-hidden="true" tabindex="-1"></a><span class="kw">def</span> main():</span>
          <span id="cb18-5"><a href="#cb18-5" aria-hidden="true" tabindex="-1"></a>    <span class="cf">if</span> <span class="bu">len</span>(sys.argv) <span class="op">&lt;</span> <span class="dv">2</span>:</span>
          <span id="cb18-6"><a href="#cb18-6" aria-hidden="true" tabindex="-1"></a>        <span class="bu">print</span>(<span class="st">&quot;uso: python procesador.py archivo.txt&quot;</span>)</span>
          <span id="cb18-7"><a href="#cb18-7" aria-hidden="true" tabindex="-1"></a>        sys.exit(<span class="dv">1</span>)</span>
          <span id="cb18-8"><a href="#cb18-8" aria-hidden="true" tabindex="-1"></a>    nombre <span class="op">=</span> sys.argv[<span class="dv">1</span>]</span>
          <span id="cb18-9"><a href="#cb18-9" aria-hidden="true" tabindex="-1"></a>    <span class="cf">with</span> <span class="bu">open</span>(nombre, <span class="st">&quot;r&quot;</span>, encoding<span class="op">=</span><span class="st">&quot;utf-8&quot;</span>) <span class="im">as</span> f:</span>
          <span id="cb18-10"><a href="#cb18-10" aria-hidden="true" tabindex="-1"></a>        <span class="bu">print</span>(f.read())</span>
          <span id="cb18-11"><a href="#cb18-11" aria-hidden="true" tabindex="-1"></a></span>
          <span id="cb18-12"><a href="#cb18-12" aria-hidden="true" tabindex="-1"></a><span class="cf">if</span> <span class="va">__name__</span> <span class="op">==</span> <span class="st">&quot;__main__&quot;</span>:</span>
          <span id="cb18-13"><a href="#cb18-13" aria-hidden="true" tabindex="-1"></a>    main()</span></code></pre>
      </div>
      <Titulo title="h3" id="redirigir-salida-a-un-archivo">2) Redirigir salida a un
        archivo</Titulo>
      <div class="sourceCode" id="cb19">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb19-1"><a href="#cb19-1" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> sys</span>
            <span id="cb19-2"><a href="#cb19-2" aria-hidden="true" tabindex="-1"></a><span class="cf">with</span> <span class="bu">open</span>(<span class="st">&quot;salida.log&quot;</span>, <span class="st">&quot;w&quot;</span>, encoding<span class="op">=</span><span class="st">&quot;utf-8&quot;</span>) <span class="im">as</span> log:</span>
            <span id="cb19-3"><a href="#cb19-3" aria-hidden="true" tabindex="-1"></a>    old_stdout <span class="op">=</span> sys.stdout</span>
            <span id="cb19-4"><a href="#cb19-4" aria-hidden="true" tabindex="-1"></a>    sys.stdout <span class="op">=</span> log</span>
            <span id="cb19-5"><a href="#cb19-5" aria-hidden="true" tabindex="-1"></a>    <span class="bu">print</span>(<span class="st">&quot;esto va al archivo&quot;</span>)</span>
            <span id="cb19-6"><a href="#cb19-6" aria-hidden="true" tabindex="-1"></a>    sys.stdout <span class="op">=</span> old_stdout</span></code></pre>
      </div>
      <Titulo title="h3" id="manejo-global-de-excepciones-logging">3) Manejo global de
        excepciones (logging)</Titulo>
      <div class="sourceCode" id="cb20">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb20-1"><a href="#cb20-1" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> sys, traceback, logging</span>
            <span id="cb20-2"><a href="#cb20-2" aria-hidden="true" tabindex="-1"></a>logging.basicConfig(filename<span class="op">=</span><span class="st">&quot;errores.log&quot;</span>, level<span class="op">=</span>logging.ERROR)</span>
            <span id="cb20-3"><a href="#cb20-3" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb20-4"><a href="#cb20-4" aria-hidden="true" tabindex="-1"></a><span class="kw">def</span> mi_excepthook(exc_type, exc_value, exc_tb):</span>
            <span id="cb20-5"><a href="#cb20-5" aria-hidden="true" tabindex="-1"></a>    logging.error(<span class="st">&quot;&quot;</span>.join(traceback.format_exception(exc_type, exc_value, exc_tb)))</span>
            <span id="cb20-6"><a href="#cb20-6" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb20-7"><a href="#cb20-7" aria-hidden="true" tabindex="-1"></a>sys.excepthook <span class="op">=</span> mi_excepthook</span>
            <span id="cb20-8"><a href="#cb20-8" aria-hidden="true" tabindex="-1"></a><span class="co"># cualquier excepción no capturada irá a errores.log</span></span></code></pre>
      </div>
      <Titulo title="h3" id="comprobar-versión-de-python-antes-de-correr">4) Comprobar
        versión de Python antes de correr</Titulo>
      <div class="sourceCode" id="cb21">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb21-1"><a href="#cb21-1" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> sys</span>
            <span id="cb21-2"><a href="#cb21-2" aria-hidden="true" tabindex="-1"></a><span class="cf">if</span> sys.version_info <span class="op">&lt;</span> (<span class="dv">3</span>,<span class="dv">8</span>):</span>
            <span id="cb21-3"><a href="#cb21-3" aria-hidden="true" tabindex="-1"></a>    sys.exit(<span class="st">&quot;Este script requiere Python 3.8+&quot;</span>)</span></code></pre>
      </div>
      <Titulo title="h2" id="buenas-prácticas-y-advertencias">Buenas prácticas y
        advertencias</Titulo>
      <Lista>
        <li><strong>No abuses de <code>sys.path.append()</code></strong> en
          producción; usa paquetes instalables o
          <code>PYTHONPATH</code>/virtualenvs.
        </li>    <li><code>sys.getsizeof()</code> da tamaño superficial; para medir
          memoria profunda usa <code>pympler</code> o
          <code>tracemalloc</code>.
        </li>    <li>Cambiar el límite de recursión con
          <code>setrecursionlimit()</code> solo si entiendes el riesgo.
        </li>    <li><code>sys.exit()</code> en bibliotecas es mala idea: las
          bibliotecas deben lanzar excepciones, no terminar el proceso.</li>    <li>Evita escribir directamente a <code>sys.stdout</code> si usas
            frameworks que gestionan I/O (mejor usar logging).</li>  </Lista>
      <Titulo title="h2" id="debugging-y-profiling">Debugging y profiling</Titulo>
      <Lista>
        <li><code>sys.setrecursionlimit()</code> para debugging de recursión
          (con cuidado).</li>    <li>Para profiling de memoria/ejecución usa módulos especializados
            (<code>tracemalloc</code>, <code>profile</code>, <code>cProfile</code>),
          no <code>sys</code> directamente.</li>  </Lista>
      <Titulo title="h2" id="mini-proyectos-ejercicios-sugeridos">Mini-proyectos / ejercicios
        sugeridos</Titulo>
      <ol type="1">
        <li>Script CLI con <code>argparse</code> que use
          <code>sys.argv</code> como fallback y registre errores en
          <code>sys.stderr</code>.
        </li>    <li>Programa que redirija <code>sys.stdout</code> a un archivo y
          luego restaure la salida normal.</li>    <li>Wrapper que compruebe <code>sys.version_info</code> y ejecute un
            comportamiento alterno para versiones antiguas.</li>    <li>Logger global usando <code>sys.excepthook</code> para capturar
              excepciones no manejadas.</li>    <li>Herramienta que inspeccione <code>sys.modules</code> para listar
                módulos cargados y su ruta (<code>module.__file__</code>).</li>  </ol>
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
