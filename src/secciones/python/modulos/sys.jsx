import Enlace from "./../../../componentes/enlace.jsx";
import Linea from "./../../../componentes/linea.jsx";
import Lista from "./../../../componentes/lista.jsx";
import Texto from "./../../../componentes/texto.jsx";
import Titulo from "./../../../componentes/titulo.jsx";
function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="sys-en-python">Sys en Python</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><Enlace href="#sys-en-python">Sys en Python</Enlace >
          <Lista>
            <li><Enlace href="#temario">Temario</Enlace ></li>
            <li><Enlace href="#qué-es-sys">¿Qué es sys?</Enlace ></li>
            <li><Enlace href="#uso-básico-y-más-común">Uso básico y más común</Enlace >
              <Lista>
                <li><Enlace href="#sysargv">sys.argv</Enlace ></li>
                <li><Enlace href="#sysexitcodemessage">sys.exit([code|message])</Enlace ></li>
                <li><Enlace href="#syspath">sys.path</Enlace ></li>
                <li><Enlace href="#sysmodules">sys.modules</Enlace ></li>
                <li><Enlace href="#sysstdout-sysstderr-sysstdin">sys.stdout, sys.stderr,
                  sys.stdin</Enlace ></li>
                <li><Enlace href="#sysversion-y-sysversion_info">sys.version y
                  sys.version_info</Enlace ></li>
                <li><Enlace href="#sysplatform">sys.platform</Enlace ></li>
                <li><Enlace href="#sysmaxsize">sys.maxsize</Enlace ></li>
                <li><Enlace href="#sysgetsizeofobj-default">sys.getsizeof(obj[,
                  default])</Enlace ></li>
                <li><Enlace href="#sysgetrecursionlimit--syssetrecursionlimitn">sys.getrecursionlimit()
                  / sys.setrecursionlimit(n)</Enlace ></li>
                <li><Enlace href="#sysexc_info">sys.exc_info()</Enlace ></li>
                <li><Enlace href="#sysexcepthook">sys.excepthook</Enlace ></li>
                <li><Enlace href="#sysgetdefaultencoding-y-sysgetfilesystemencoding">sys.getdefaultencoding()
                  y sys.getfilesystemencoding()</Enlace ></li>
                <li><Enlace href="#sysbyteorder">sys.byteorder</Enlace ></li>
                <li><Enlace href="#sysimplementation">sys.implementation</Enlace ></li>
                <li><Enlace href="#sysflags">sys.flags</Enlace ></li>
                <li><Enlace href="#sysgetwindowsversion-solo-windows">sys.getwindowsversion()
                  (solo Windows)</Enlace ></li>
                <li><Enlace href="#sysgetswitchinterval--syssetswitchinterval">sys.getswitchinterval()
                  / sys.setswitchinterval()</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#ejemplos-prácticos">Ejemplos prácticos</Enlace >
              <Lista>
                <li><Enlace href="#1-script-que-procesa-cli-simple">1) Script que procesa CLI
                  simple</Enlace ></li>
                <li><Enlace href="#2-redirigir-salida-a-un-archivo">2) Redirigir salida a un
                  archivo</Enlace ></li>
                <li><Enlace href="#3-manejo-global-de-excepciones-logging">3) Manejo global
                  de excepciones (logging)</Enlace ></li>
                <li><Enlace href="#4-comprobar-versión-de-python-antes-de-correr">4)
                  Comprobar versión de Python antes de correr</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#buenas-prácticas-y-advertencias">Buenas prácticas y
              advertencias</Enlace ></li>
            <li><Enlace href="#debugging-y-profiling">Debugging y profiling</Enlace ></li>
            <li><Enlace href="#mini-proyectos--ejercicios-sugeridos">Mini-proyectos /
              ejercicios sugeridos</Enlace ></li>
          </Lista>
        </li>
      </Lista>
      <Texto><Enlace href="./../../readme.md#5-python">Regresar a la Guía
        Principal</Enlace ></Texto>
      <Linea />
      <Titulo title="h2" id="qué-es-sys">¿Qué es sys?</Titulo>
      <Texto><code>sys</code> es un módulo integrado que ofrece <strong>interfaz
        con el intérprete de Python</strong> y el entorno donde corre
        (argumentos de línea de comandos, rutas, streams estándar, información
        de la plataforma, manejo de errores, configuración del intérprete,
        etc.). Se importa con:</Texto>
      <div className="sourceCode" id="cb1">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb1-1"><Enlace href="#cb1-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> sys</span></code></pre>
      </div>
      <Titulo title="h2" id="uso-básico-y-más-común">Uso básico y más común</Titulo>
      <Titulo title="h3" id="sys.argv">sys.argv</Titulo>
      <Texto>Lista de argumentos pasados al script (el elemento 0 es el nombre del
        script).</Texto>
      <div className="sourceCode" id="cb2">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb2-1"><Enlace href="#cb2-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># ejemplo.py</span></span>
            <span id="cb2-2"><Enlace href="#cb2-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> sys</span>
            <span id="cb2-3"><Enlace href="#cb2-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(sys.argv)</span>
            <span id="cb2-4"><Enlace href="#cb2-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Ejecuta: python ejemplo.py a b -&gt; [&#39;ejemplo.py&#39;, &#39;a&#39;, &#39;b&#39;]</span></span></code></pre>
      </div>
      <Titulo title="h3" id="sys.exitcodemessage">sys.exit([code|message])</Titulo>
      <Texto>Termina el intérprete lanzando <code>SystemExit</code>.
        <code>code=0</code> indica éxito; cualquier int distinto a 0 indica
        error. También puedes pasar un string (se imprime).
      </Texto>
      <div className="sourceCode" id="cb3">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb3-1"><Enlace href="#cb3-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">if</span> <span className="bu">len</span>(sys.argv) <span className="op">&lt;</span> <span className="dv">2</span>:</span>
            <span id="cb3-2"><Enlace href="#cb3-2" aria-hidden="true" tabindex="-1"></Enlace >    sys.exit(<span className="st">&quot;falta argumento&quot;</span>)</span></code></pre>
      </div>
      <Titulo title="h3" id="sys.path">sys.path</Titulo>
      <Texto>Lista de rutas donde Python busca módulos. Puedes modificarla en
        tiempo de ejecución (útil para scripts).</Texto>
      <div className="sourceCode" id="cb4">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb4-1"><Enlace href="#cb4-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> sys</span>
            <span id="cb4-2"><Enlace href="#cb4-2" aria-hidden="true" tabindex="-1"></Enlace >sys.path.append(<span className="st">&quot;/mi/carpeta/lib&quot;</span>)</span></code></pre>
      </div>
      <Titulo title="h3" id="sys.modules">sys.modules</Titulo>
      <Texto>Diccionario de módulos cargados en memoria
        (<code>name -&gt; module</code>). Útil para inspección o recarga.</Texto>
      <div className="sourceCode" id="cb5">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb5-1"><Enlace href="#cb5-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> importlib</span>
            <span id="cb5-2"><Enlace href="#cb5-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> mi_modulo</span>
            <span id="cb5-3"><Enlace href="#cb5-3" aria-hidden="true" tabindex="-1"></Enlace >importlib.<span className="bu">reload</span>(sys.modules[<span className="st">&#39;mi_modulo&#39;</span>])</span></code></pre>
      </div>
      <Titulo title="h3" id="sys.stdout-sys.stderr-sys.stdin">sys.stdout, sys.stderr,
        sys.stdin</Titulo>
      <Texto>Streams estándar. Permiten redirigir o manipular entrada/salida.</Texto>
      <div className="sourceCode" id="cb6">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb6-1"><Enlace href="#cb6-1" aria-hidden="true" tabindex="-1"></Enlace >sys.stdout.write(<span className="st">&quot;hola</span><span className="ch">\n</span><span className="st">&quot;</span>)</span>
            <span id="cb6-2"><Enlace href="#cb6-2" aria-hidden="true" tabindex="-1"></Enlace >sys.stderr.write(<span className="st">&quot;error!</span><span className="ch">\n</span><span className="st">&quot;</span>)</span>
            <span id="cb6-3"><Enlace href="#cb6-3" aria-hidden="true" tabindex="-1"></Enlace >data <span className="op">=</span> sys.stdin.read()</span></code></pre>
      </div>
      <Texto>También puedes usar <code>sys.stdout.buffer</code> para I/O
        binaria.</Texto>
      <Titulo title="h3" id="sys.version-y-sys.version_info">sys.version y
        sys.version_info</Titulo>
      <Texto>Información de la versión de Python.</Texto>
      <div className="sourceCode" id="cb7">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb7-1"><Enlace href="#cb7-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(sys.version)          <span className="co"># string completa</span></span>
            <span id="cb7-2"><Enlace href="#cb7-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(sys.version_info)     <span className="co"># tupla nombrada (major, minor, micro, ...)</span></span>
            <span id="cb7-3"><Enlace href="#cb7-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">if</span> sys.version_info <span className="op">&lt;</span> (<span className="dv">3</span>,<span className="dv">10</span>):</span>
            <span id="cb7-4"><Enlace href="#cb7-4" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">print</span>(<span className="st">&quot;actualiza python&quot;</span>)</span></code></pre>
      </div>
      <Titulo title="h3" id="sys.platform">sys.platform</Titulo>
      <Texto>Cadena que indica la plataforma (e.g., <code>'linux'</code>,
        <code>'darwin'</code>, <code>'win32'</code>).
      </Texto>
      <div className="sourceCode" id="cb8">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb8-1"><Enlace href="#cb8-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">if</span> sys.platform.startswith(<span className="st">&quot;win&quot;</span>):</span>
            <span id="cb8-2"><Enlace href="#cb8-2" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">print</span>(<span className="st">&quot;Windows&quot;</span>)</span></code></pre>
      </div>
      <Titulo title="h3" id="sys.maxsize">sys.maxsize</Titulo>
      <Texto>Entero que normalmente indica el tamaño máximo práctico de
        estructuras (32/64-bit).</Texto>
      <div className="sourceCode" id="cb9">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb9-1"><Enlace href="#cb9-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(sys.maxsize)</span></code></pre>
      </div>
      <Titulo title="h3" id="sys.getsizeofobj-default">sys.getsizeof(obj[, default])</Titulo>
      <Texto>Devuelve el tamaño en bytes del objeto (solo tamaño del objeto, no
        profundidad).</Texto>
      <div className="sourceCode" id="cb10">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb10-1"><Enlace href="#cb10-1" aria-hidden="true" tabindex="-1"></Enlace >x <span className="op">=</span> [<span className="dv">1</span>,<span className="dv">2</span>,<span className="dv">3</span>]</span>
            <span id="cb10-2"><Enlace href="#cb10-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(sys.getsizeof(x))  <span className="co"># tamaño del objeto lista en memoria (superficial)</span></span></code></pre>
      </div>
      <Titulo title="h3" id="sys.getrecursionlimit-sys.setrecursionlimitn">sys.getrecursionlimit()
        / sys.setrecursionlimit(n)</Titulo>
      <Texto>Leer y ajustar el límite de recursión del intérprete.</Texto>
      <div className="sourceCode" id="cb11">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb11-1"><Enlace href="#cb11-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(sys.getrecursionlimit())</span>
            <span id="cb11-2"><Enlace href="#cb11-2" aria-hidden="true" tabindex="-1"></Enlace >sys.setrecursionlimit(<span className="dv">2000</span>)</span></code></pre>
      </div>
      <Texto>Usar con cuidado: un límite demasiado alto puede provocar
        segfault.</Texto>
      <Titulo title="h3" id="sys.exc_info">sys.exc_info()</Titulo>
      <Texto>Información sobre la excepción actual:
        <code>(exc_type, exc_value, traceback)</code>.
      </Texto>
      <div className="sourceCode" id="cb12">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb12-1"><Enlace href="#cb12-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">try</span>:</span>
            <span id="cb12-2"><Enlace href="#cb12-2" aria-hidden="true" tabindex="-1"></Enlace >    <span className="dv">1</span><span className="op">/</span><span className="dv">0</span></span>
            <span id="cb12-3"><Enlace href="#cb12-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">except</span>:</span>
            <span id="cb12-4"><Enlace href="#cb12-4" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">print</span>(sys.exc_info())</span></code></pre>
      </div>
      <Titulo title="h3" id="sys.excepthook">sys.excepthook</Titulo>
      <Texto>Función que maneja excepciones no capturadas. Puedes reemplazarla
        para logging personalizado.</Texto>
      <div className="sourceCode" id="cb13">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb13-1"><Enlace href="#cb13-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">def</span> mi_handler(exc_type, exc, tb):</span>
            <span id="cb13-2"><Enlace href="#cb13-2" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">print</span>(<span className="st">&quot;Excepción no manejada:&quot;</span>, exc_type, exc)</span>
            <span id="cb13-3"><Enlace href="#cb13-3" aria-hidden="true" tabindex="-1"></Enlace >sys.excepthook <span className="op">=</span> mi_handler</span></code></pre>
      </div>
      <Titulo title="h3" id="sys.getdefaultencoding-y-sys.getfilesystemencoding">sys.getdefaultencoding()
        y sys.getfilesystemencoding()</Titulo>
      <Texto>Codificaciones por defecto (útil para I/O y compatibilidad entre
        plataformas).</Texto>
      <div className="sourceCode" id="cb14">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb14-1"><Enlace href="#cb14-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(sys.getdefaultencoding(), sys.getfilesystemencoding())</span></code></pre>
      </div>
      <Titulo title="h3" id="sys.byteorder">sys.byteorder</Titulo>
      <Texto>Orden de bytes de la máquina: <code>'little'</code> o
        <code>'big'</code>.
      </Texto>
      <div className="sourceCode" id="cb15">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb15-1"><Enlace href="#cb15-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(sys.byteorder)</span></code></pre>
      </div>
      <Titulo title="h3" id="sys.implementation">sys.implementation</Titulo>
      <Texto>Información sobre la implementación de Python (CPython, PyPy,
        etc.)</Texto>
      <div className="sourceCode" id="cb16">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb16-1"><Enlace href="#cb16-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(sys.implementation)</span></code></pre>
      </div>
      <Titulo title="h3" id="sys.flags">sys.flags</Titulo>
      <Texto>Namespace con banderas con las que arrancó el intérprete
        (<code>optimize</code>, <code>debug</code>, <code>interactive</code>,
        etc.).</Texto>
      <div className="sourceCode" id="cb17">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb17-1"><Enlace href="#cb17-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(sys.flags)</span></code></pre>
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
      <div className="sourceCode" id="cb18">
        <pre className="sourceCode python"><code className="sourceCode python"><span id="cb18-1"><Enlace href="#cb18-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># procesador.py</span></span>
          <span id="cb18-2"><Enlace href="#cb18-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> sys</span>
          <span id="cb18-3"><Enlace href="#cb18-3" aria-hidden="true" tabindex="-1"></Enlace ></span>
          <span id="cb18-4"><Enlace href="#cb18-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">def</span> main():</span>
          <span id="cb18-5"><Enlace href="#cb18-5" aria-hidden="true" tabindex="-1"></Enlace >    <span className="cf">if</span> <span className="bu">len</span>(sys.argv) <span className="op">&lt;</span> <span className="dv">2</span>:</span>
          <span id="cb18-6"><Enlace href="#cb18-6" aria-hidden="true" tabindex="-1"></Enlace >        <span className="bu">print</span>(<span className="st">&quot;uso: python procesador.py archivo.txt&quot;</span>)</span>
          <span id="cb18-7"><Enlace href="#cb18-7" aria-hidden="true" tabindex="-1"></Enlace >        sys.exit(<span className="dv">1</span>)</span>
          <span id="cb18-8"><Enlace href="#cb18-8" aria-hidden="true" tabindex="-1"></Enlace >    nombre <span className="op">=</span> sys.argv[<span className="dv">1</span>]</span>
          <span id="cb18-9"><Enlace href="#cb18-9" aria-hidden="true" tabindex="-1"></Enlace >    <span className="cf">with</span> <span className="bu">open</span>(nombre, <span className="st">&quot;r&quot;</span>, encoding<span className="op">=</span><span className="st">&quot;utf-8&quot;</span>) <span className="im">as</span> f:</span>
          <span id="cb18-10"><Enlace href="#cb18-10" aria-hidden="true" tabindex="-1"></Enlace >        <span className="bu">print</span>(f.read())</span>
          <span id="cb18-11"><Enlace href="#cb18-11" aria-hidden="true" tabindex="-1"></Enlace ></span>
          <span id="cb18-12"><Enlace href="#cb18-12" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">if</span> <span className="va">__name__</span> <span className="op">==</span> <span className="st">&quot;__main__&quot;</span>:</span>
          <span id="cb18-13"><Enlace href="#cb18-13" aria-hidden="true" tabindex="-1"></Enlace >    main()</span></code></pre>
      </div>
      <Titulo title="h3" id="redirigir-salida-a-un-archivo">2) Redirigir salida a un
        archivo</Titulo>
      <div className="sourceCode" id="cb19">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb19-1"><Enlace href="#cb19-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> sys</span>
            <span id="cb19-2"><Enlace href="#cb19-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">with</span> <span className="bu">open</span>(<span className="st">&quot;salida.log&quot;</span>, <span className="st">&quot;w&quot;</span>, encoding<span className="op">=</span><span className="st">&quot;utf-8&quot;</span>) <span className="im">as</span> log:</span>
            <span id="cb19-3"><Enlace href="#cb19-3" aria-hidden="true" tabindex="-1"></Enlace >    old_stdout <span className="op">=</span> sys.stdout</span>
            <span id="cb19-4"><Enlace href="#cb19-4" aria-hidden="true" tabindex="-1"></Enlace >    sys.stdout <span className="op">=</span> log</span>
            <span id="cb19-5"><Enlace href="#cb19-5" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">print</span>(<span className="st">&quot;esto va al archivo&quot;</span>)</span>
            <span id="cb19-6"><Enlace href="#cb19-6" aria-hidden="true" tabindex="-1"></Enlace >    sys.stdout <span className="op">=</span> old_stdout</span></code></pre>
      </div>
      <Titulo title="h3" id="manejo-global-de-excepciones-logging">3) Manejo global de
        excepciones (logging)</Titulo>
      <div className="sourceCode" id="cb20">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb20-1"><Enlace href="#cb20-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> sys, traceback, logging</span>
            <span id="cb20-2"><Enlace href="#cb20-2" aria-hidden="true" tabindex="-1"></Enlace >logging.basicConfig(filename<span className="op">=</span><span className="st">&quot;errores.log&quot;</span>, level<span className="op">=</span>logging.ERROR)</span>
            <span id="cb20-3"><Enlace href="#cb20-3" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb20-4"><Enlace href="#cb20-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">def</span> mi_excepthook(exc_type, exc_value, exc_tb):</span>
            <span id="cb20-5"><Enlace href="#cb20-5" aria-hidden="true" tabindex="-1"></Enlace >    logging.error(<span className="st">&quot;&quot;</span>.join(traceback.format_exception(exc_type, exc_value, exc_tb)))</span>
            <span id="cb20-6"><Enlace href="#cb20-6" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb20-7"><Enlace href="#cb20-7" aria-hidden="true" tabindex="-1"></Enlace >sys.excepthook <span className="op">=</span> mi_excepthook</span>
            <span id="cb20-8"><Enlace href="#cb20-8" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># cualquier excepción no capturada irá a errores.log</span></span></code></pre>
      </div>
      <Titulo title="h3" id="comprobar-versión-de-python-antes-de-correr">4) Comprobar
        versión de Python antes de correr</Titulo>
      <div className="sourceCode" id="cb21">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb21-1"><Enlace href="#cb21-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> sys</span>
            <span id="cb21-2"><Enlace href="#cb21-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">if</span> sys.version_info <span className="op">&lt;</span> (<span className="dv">3</span>,<span className="dv">8</span>):</span>
            <span id="cb21-3"><Enlace href="#cb21-3" aria-hidden="true" tabindex="-1"></Enlace >    sys.exit(<span className="st">&quot;Este script requiere Python 3.8+&quot;</span>)</span></code></pre>
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
      <Texto><Enlace href="./../../readme.md#5-python">Regresar a la Guía
        Principal</Enlace ></Texto>
      <blockquote>
        <Texto><strong>Autor:</strong> Fravelz</Texto>
      </blockquote>
    </>
  );
}
export default nameabcd;
