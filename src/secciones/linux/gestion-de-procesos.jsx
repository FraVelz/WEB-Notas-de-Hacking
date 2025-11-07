<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">

<head>
  <meta charset="utf-8" />
  <meta name="generator" content="pandoc" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <title>gestion-de-procesos</title>

</head>

<body>
  <h1 id="gestión-de-procesos">Gestión de procesos</h1>
  <hr />
  <h2 id="temario">Temario</h2>
  <ul>
    <li><a href="#gestión-de-procesos">Gestión de procesos</a>
      <ul>
        <li><a href="#temario">Temario</a></li>
        <li><a href="#terminologías">Terminologías</a></li>
        <li><a href="#comandos-para-ver-procesos">Comandos para ver
            procesos</a></li>
        <li><a href="#ejecución-de-procesos">Ejecución de procesos</a></li>
        <li><a href="#control-de-trabajos">Control de trabajos</a></li>
        <li><a href="#señales-a-procesos">Señales a procesos</a></li>
        <li><a href="#prioridades-de-procesos">Prioridades de procesos</a></li>
        <li><a href="#espera-y-sincronización">Espera y sincronización</a></li>
        <li><a href="#redirección-y-procesos">Redirección y procesos</a></li>
        <li><a href="#información-de-procesos">Información de procesos</a></li>
        <li><a href="#procesos-huérfanos-y-zombis">Procesos huérfanos y
            zombis</a></li>
        <li><a href="#resumen-visual">Resumen visual</a></li>
      </ul>
    </li>
  </ul>
  <p><a href="./../readme.md#2-linux-y-bash-script">Regresar a la guía
      principal</a></p>
  <hr />
  <h2 id="terminologías">Terminologías</h2>
  <ul>
    <li>
      <p><strong>Proceso</strong>: Programa en ejecución administrado por
        el kernel.</p>
    </li>
    <li>
      <p><strong>PID (Process ID)</strong>: Identificador único asignado
        por el sistema a cada proceso.</p>
    </li>
    <li>
      <p><strong>PPID (Parent PID)</strong>: Identificador del proceso
        padre (quien lo creó).</p>
    </li>
    <li>
      <p><strong>Estado</strong>: Indica el estado actual del proceso:</p>
      <ul>
        <li><code>R</code> → ejecutándose (Running)</li>
        <li><code>S</code> → durmiendo (Sleeping)</li>
        <li><code>T</code> → detenido (Stopped)</li>
        <li><code>Z</code> → zombi (Zombie)</li>
      </ul>
    </li>
    <li>
      <p><strong>Señales</strong>: Mensajes que el kernel o el usuario
        pueden enviar a un proceso (ej: <code>SIGKILL</code>,
        <code>SIGSTOP</code>, <code>SIGINT</code>).
      </p>
    </li>
  </ul>
  <hr />
  <h2 id="comandos-para-ver-procesos">Comandos para ver procesos</h2>
  <ul>
    <li>
      <p><strong><code>ps</code></strong>: Lista los procesos activos.</p>
      <div class="sourceCode" id="cb1">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="fu">ps</span> aux                <span class="co"># Para monitoreal recursos</span></span>
<span id="cb1-2"><a href="#cb1-2" aria-hidden="true" tabindex="-1"></a><span class="fu">ps</span> <span class="at">-ef</span>                <span class="co"># Para ver gerarquia y relaciones entre los procesos</span></span></code></pre>
      </div>
    </li>
    <li>
      <p><strong><code>top</code> / <code>htop</code></strong>: Monitor
        interactivo de procesos.</p>
      <p><code>htop</code> es más visual, permite matar o renicear procesos
        fácilmente.</p>
    </li>
    <li>
      <p><strong><code>pgrep</code></strong>: Busca procesos por
        nombre.</p>
      <div class="sourceCode" id="cb2">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="ex">pgrep</span> firefox</span></code></pre>
      </div>
    </li>
    <li>
      <p><strong><code>pstree</code></strong>: Muestra los procesos en
        forma jerárquica (padre-hijo).</p>
      <div class="sourceCode" id="cb3">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a><span class="fu">pstree</span> <span class="at">-p</span>   <span class="co"># incluye los PIDs</span></span></code></pre>
      </div>
    </li>
    <li>
      <p><strong><code>pidof</code></strong>: Muestra el PID de un
        programa activo.</p>
      <div class="sourceCode" id="cb4">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a><span class="fu">pidof</span> bash</span></code></pre>
      </div>
    </li>
  </ul>
  <hr />
  <h2 id="ejecución-de-procesos">Ejecución de procesos</h2>
  <ul>
    <li>
      <p><strong>Primer plano (foreground)</strong>:</p>
      <div class="sourceCode" id="cb5">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb5-1"><a href="#cb5-1" aria-hidden="true" tabindex="-1"></a><span class="ex">./programa</span></span></code></pre>
      </div>
      <p>El terminal queda ocupado hasta que el proceso termine.</p>
    </li>
    <li>
      <p><strong>Segundo plano (background)</strong>:</p>
      <div class="sourceCode" id="cb6">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a><span class="ex">./programa</span> <span class="kw">&amp;</span></span></code></pre>
      </div>
      <p>El shell sigue disponible mientras el proceso corre. Tener en cuenta
        que normalmente al cerrar la shell el proceso se termina, pero se puede
        utilizar el comando <code>disown</code> en la shell para que el proceso,
        no dependa de la shell.</p>
    </li>
    <li>
      <p><strong>Ejemplo práctico:</strong></p>
      <div class="sourceCode" id="cb7">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb7-1"><a href="#cb7-1" aria-hidden="true" tabindex="-1"></a><span class="ex">long_task.sh</span> <span class="kw">&amp;</span></span>
<span id="cb7-2"><a href="#cb7-2" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;Sigo usando la terminal&quot;</span></span></code></pre>
      </div>
    </li>
  </ul>
  <hr />
  <h2 id="control-de-trabajos">Control de trabajos</h2>
  <p>Bash permite gestionar procesos iniciados desde la misma sesión
    (misma terminal en el que se ejecutó el proceso).</p>
  <div class="sourceCode" id="cb8">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb8-1"><a href="#cb8-1" aria-hidden="true" tabindex="-1"></a><span class="bu">jobs</span>          <span class="co"># lista los procesos de fondo en la sesión actual</span></span>
<span id="cb8-2"><a href="#cb8-2" aria-hidden="true" tabindex="-1"></a><span class="bu">fg</span> %1         <span class="co"># lleva el job 1 al primer plano</span></span>
<span id="cb8-3"><a href="#cb8-3" aria-hidden="true" tabindex="-1"></a><span class="bu">bg</span> %2         <span class="co"># reanuda el job 2 en segundo plano</span></span>
<span id="cb8-4"><a href="#cb8-4" aria-hidden="true" tabindex="-1"></a><span class="ex">Ctrl</span> + Z      <span class="co"># pausa el proceso actual</span></span></code></pre>
  </div>
  <p><strong>Ejemplo:</strong> Creamos un proceso en la terminal:</p>
  <div class="sourceCode" id="cb9">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb9-1"><a href="#cb9-1" aria-hidden="true" tabindex="-1"></a><span class="fu">sleep</span> 1d <span class="kw">&amp;&amp;</span> <span class="bu">echo</span> <span class="st">&quot;Ya paso 1 dia&quot;</span></span></code></pre>
  </div>
  <p>Luego das <code>Ctrl+Z</code> se pausa el proceso (importante no
    equivocarse con <code>Ctrl+C</code> porque este terminaría el proceso en
    vez de pausarlo), cuando escribas:</p>
  <div class="sourceCode" id="cb10">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb10-1"><a href="#cb10-1" aria-hidden="true" tabindex="-1"></a><span class="bu">jobs</span></span></code></pre>
  </div>
  <p>Podrás visualizar el proceso, todo se vería algo así:</p>
  <figure>
    <img src="./../images/procesos.png" alt="Ir a Procesos" />
    <figcaption aria-hidden="true">Ir a Procesos</figcaption>
  </figure>
  <p>Con el comando <code>fg %1</code> o <code>bg %1</code> puedes des
    pausar el proceso, con las implicaciones que si dieron arriba.</p>
  <p>Si usas <code>disown</code> en terminal despegas el proceso de la
    terminal (de la sección).</p>
  <p>con <code>ps aux | grep sleep</code> encuentras el proceso en segundo
    plano, filtrando con grep, copias el PID que es el primer número después
    del usuario (supongamos que es 12345 el PID en cada dispositivo es
    diferente el numero) y haces:</p>
  <div class="sourceCode" id="cb11">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb11-1"><a href="#cb11-1" aria-hidden="true" tabindex="-1"></a><span class="bu">kill</span> 12345</span></code></pre>
  </div>
  <p>Así apagas el proceso que previamente habías convertido en proceso de
    segundo plano sin estar conectado a la shell.</p>
  <hr />
  <h2 id="señales-a-procesos">Señales a procesos</h2>
  <ul>
    <li>
      <p><strong>Enviar señales manualmente:</strong></p>
      <div class="sourceCode" id="cb12">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb12-1"><a href="#cb12-1" aria-hidden="true" tabindex="-1"></a><span class="bu">kill</span> <span class="at">-9</span> 1234    <span class="co"># SIGKILL (fuerza el cierre)</span></span>
<span id="cb12-2"><a href="#cb12-2" aria-hidden="true" tabindex="-1"></a><span class="bu">kill</span> <span class="at">-15</span> 1234   <span class="co"># SIGTERM (solicita terminación limpia)</span></span>
<span id="cb12-3"><a href="#cb12-3" aria-hidden="true" tabindex="-1"></a><span class="bu">kill</span> <span class="at">-STOP</span> 1234 <span class="co"># pausa proceso</span></span>
<span id="cb12-4"><a href="#cb12-4" aria-hidden="true" tabindex="-1"></a><span class="bu">kill</span> <span class="at">-CONT</span> 1234 <span class="co"># reanuda proceso detenido</span></span></code></pre>
      </div>
    </li>
    <li>
      <p><strong>Por nombre:</strong></p>
      <div class="sourceCode" id="cb13">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb13-1"><a href="#cb13-1" aria-hidden="true" tabindex="-1"></a><span class="ex">pkill</span> firefox</span>
<span id="cb13-2"><a href="#cb13-2" aria-hidden="true" tabindex="-1"></a><span class="fu">killall</span> nano</span></code></pre>
      </div>
    </li>
    <li>
      <p><strong>Listar señales disponibles:</strong></p>
      <div class="sourceCode" id="cb14">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb14-1"><a href="#cb14-1" aria-hidden="true" tabindex="-1"></a><span class="bu">kill</span> <span class="at">-l</span></span></code></pre>
      </div>
    </li>
  </ul>
  <p>Algunos nombres comunes:</p>
  <table>
    <thead>
      <tr>
        <th>Señal</th>
        <th>Código</th>
        <th>Descripción</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>SIGTERM</code></td>
        <td>15</td>
        <td>Terminación elegante</td>
      </tr>
      <tr>
        <td><code>SIGKILL</code></td>
        <td>9</td>
        <td>Termina sin limpiar recursos</td>
      </tr>
      <tr>
        <td><code>SIGSTOP</code></td>
        <td>19</td>
        <td>Detiene temporalmente</td>
      </tr>
      <tr>
        <td><code>SIGCONT</code></td>
        <td>18</td>
        <td>Reanuda ejecución</td>
      </tr>
      <tr>
        <td><code>SIGINT</code></td>
        <td>2</td>
        <td>Interrupción (Ctrl + C)</td>
      </tr>
      <tr>
        <td><code>SIGHUP</code></td>
        <td>1</td>
        <td>Cierre de terminal o reinicio de servicio</td>
      </tr>
    </tbody>
  </table>
  <hr />
  <h2 id="prioridades-de-procesos">Prioridades de procesos</h2>
  <p>Cada proceso tiene un <strong>“valor bueno”</strong>, que define su
    prioridad de CPU.</p>
  <ul>
    <li>Rango: <strong>-20 (mayor prioridad)</strong> a <strong>19 (menor
        prioridad)</strong>.</li>
    <li>Valor por defecto: <strong>0</strong>.</li>
    <li>Solo <code>root</code> puede asignar valores negativos.</li>
  </ul>
  <p><strong>Cambiar prioridad al iniciar:</strong></p>
  <div class="sourceCode" id="cb15">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb15-1"><a href="#cb15-1" aria-hidden="true" tabindex="-1"></a><span class="fu">nice</span> <span class="at">-n</span> 10 ./programa</span></code></pre>
  </div>
  <p><strong>Modificar proceso existente:</strong></p>
  <div class="sourceCode" id="cb16">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb16-1"><a href="#cb16-1" aria-hidden="true" tabindex="-1"></a><span class="ex">renice</span> <span class="at">-n</span> 5 <span class="at">-p</span> 1234</span></code></pre>
  </div>
  <p><strong>Ver prioridades actuales:</strong></p>
  <div class="sourceCode" id="cb17">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb17-1"><a href="#cb17-1" aria-hidden="true" tabindex="-1"></a><span class="fu">ps</span> <span class="at">-eo</span> pid,ni,comm</span></code></pre>
  </div>
  <hr />
  <h2 id="espera-y-sincronización">Espera y sincronización</h2>
  <ul>
    <li>
      <p><strong><code>wait</code></strong>: Espera que un proceso hijo
        termine.</p>
      <div class="sourceCode" id="cb18">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb18-1"><a href="#cb18-1" aria-hidden="true" tabindex="-1"></a><span class="ex">./script_largo.sh</span> <span class="kw">&amp;</span></span>
<span id="cb18-2"><a href="#cb18-2" aria-hidden="true" tabindex="-1"></a><span class="bu">wait</span>   <span class="co"># espera que finalicen todos los procesos en segundo plano</span></span></code></pre>
      </div>
      <p>También se puede usar con PID:</p>
      <div class="sourceCode" id="cb19">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb19-1"><a href="#cb19-1" aria-hidden="true" tabindex="-1"></a><span class="bu">wait</span> 1234</span></code></pre>
      </div>
    </li>
    <li>
      <p><strong><code>sleep</code></strong>: Pausa ejecución durante un
        tiempo.</p>
      <div class="sourceCode" id="cb20">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb20-1"><a href="#cb20-1" aria-hidden="true" tabindex="-1"></a><span class="fu">sleep</span> 5   <span class="co"># espera 5 segundos</span></span></code></pre>
      </div>
    </li>
    <li>
      <p><strong>Ejemplo combinado:</strong></p>
      <div class="sourceCode" id="cb21">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb21-1"><a href="#cb21-1" aria-hidden="true" tabindex="-1"></a><span class="ex">./task1.sh</span> <span class="kw">&amp;</span> <span class="ex">./task2.sh</span> <span class="kw">&amp;</span></span>
<span id="cb21-2"><a href="#cb21-2" aria-hidden="true" tabindex="-1"></a><span class="bu">wait</span></span>
<span id="cb21-3"><a href="#cb21-3" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;Ambos procesos terminaron.&quot;</span></span></code></pre>
      </div>
    </li>
  </ul>
  <hr />
  <h2 id="redirección-y-procesos">Redirección y procesos</h2>
  <ul>
    <li>
      <p><strong>Enviar salida a archivo y ejecutar en
          background:</strong></p>
      <div class="sourceCode" id="cb22">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb22-1"><a href="#cb22-1" aria-hidden="true" tabindex="-1"></a><span class="ex">./script.sh</span> <span class="op">&gt;</span> salida.log <span class="dv">2</span><span class="op">&gt;&amp;</span><span class="dv">1</span> <span class="kw">&amp;</span></span></code></pre>
      </div>
    </li>
    <li>
      <p><strong>Separar proceso de la terminal:</strong></p>
      <div class="sourceCode" id="cb23">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb23-1"><a href="#cb23-1" aria-hidden="true" tabindex="-1"></a><span class="bu">disown</span></span></code></pre>
      </div>
    </li>
    <li>
      <p><strong>Evitar que termine al cerrar sesión:</strong></p>
      <div class="sourceCode" id="cb24">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb24-1"><a href="#cb24-1" aria-hidden="true" tabindex="-1"></a><span class="fu">nohup</span> ./programa <span class="op">&gt;</span> out.log <span class="dv">2</span><span class="op">&gt;&amp;</span><span class="dv">1</span> <span class="kw">&amp;</span></span></code></pre>
      </div>
    </li>
    <li>
      <p><strong>Ejecución persistente con
          <code>setsid</code>:</strong></p>
      <div class="sourceCode" id="cb25">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb25-1"><a href="#cb25-1" aria-hidden="true" tabindex="-1"></a><span class="ex">setsid</span> ./programa <span class="kw">&amp;</span></span></code></pre>
      </div>
      <p>Crea una nueva sesión, sin conexión con la terminal actual.</p>
    </li>
  </ul>
  <hr />
  <h2 id="información-de-procesos">Información de procesos</h2>
  <ul>
    <li>
      <p><strong>Directorio <code>/proc</code></strong> (virtual):
        Contiene información detallada del sistema y procesos.</p>
      <div class="sourceCode" id="cb26">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb26-1"><a href="#cb26-1" aria-hidden="true" tabindex="-1"></a><span class="fu">cat</span> /proc/1234/status</span>
<span id="cb26-2"><a href="#cb26-2" aria-hidden="true" tabindex="-1"></a><span class="fu">cat</span> /proc/1234/cmdline</span>
<span id="cb26-3"><a href="#cb26-3" aria-hidden="true" tabindex="-1"></a><span class="fu">cat</span> /proc/cpuinfo</span></code></pre>
      </div>
    </li>
    <li>
      <p><strong><code>lsof</code></strong>: Lista archivos abiertos por
        un proceso.</p>
      <div class="sourceCode" id="cb27">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb27-1"><a href="#cb27-1" aria-hidden="true" tabindex="-1"></a><span class="ex">lsof</span> <span class="at">-p</span> 1234</span></code></pre>
      </div>
    </li>
    <li>
      <p><strong><code>strace</code></strong>: Muestra las llamadas al
        sistema realizadas por un proceso (muy útil para depuración).</p>
      <div class="sourceCode" id="cb28">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb28-1"><a href="#cb28-1" aria-hidden="true" tabindex="-1"></a><span class="ex">strace</span> <span class="at">-p</span> 1234</span></code></pre>
      </div>
    </li>
  </ul>
  <hr />
  <h2 id="procesos-huérfanos-y-zombis">Procesos huérfanos y zombis</h2>
  <ul>
    <li>
      <p><strong>Huérfano</strong>: cuando el proceso padre termina antes
        que su hijo. El proceso hijo pasa a ser adoptado por el **init*- o
        <strong>systemd</strong>. No es dañino, pero indica una gestión no
        controlada de procesos.
      </p>
    </li>
    <li>
      <p><strong>Zombi</strong>: proceso que terminó, pero su entrada en
        la tabla de procesos aún existe porque su padre no leyó su estado de
        salida (<code>wait()</code> no fue llamado). Se muestran con estado
        <code>Z</code>:
      </p>
      <div class="sourceCode" id="cb29">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb29-1"><a href="#cb29-1" aria-hidden="true" tabindex="-1"></a><span class="fu">ps</span> aux <span class="kw">|</span> <span class="fu">grep</span> <span class="st">&#39;Z&#39;</span></span></code></pre>
      </div>
      <p>Para eliminarlos, normalmente basta con terminar el proceso
        padre.</p>
    </li>
  </ul>
  <hr />
  <h2 id="resumen-visual">Resumen visual</h2>
  <table>
    <thead>
      <tr>
        <th>Acción</th>
        <th>Comando / Descripción</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Listar procesos</td>
        <td><code>ps aux</code>, <code>top</code>, <code>htop</code></td>
      </tr>
      <tr>
        <td>Buscar por nombre</td>
        <td><code>pgrep nombre</code>, <code>pidof nombre</code></td>
      </tr>
      <tr>
        <td>Árbol de procesos</td>
        <td><code>pstree -p</code></td>
      </tr>
      <tr>
        <td>Ejecutar en background</td>
        <td><code>comando &amp;</code></td>
      </tr>
      <tr>
        <td>Ver jobs</td>
        <td><code>jobs</code></td>
      </tr>
      <tr>
        <td>Pausar proceso</td>
        <td><code>Ctrl + Z</code>, <code>kill -STOP PID</code></td>
      </tr>
      <tr>
        <td>Reanudar proceso</td>
        <td><code>bg %n</code>, <code>kill -CONT PID</code></td>
      </tr>
      <tr>
        <td>Traer a foreground</td>
        <td><code>fg %n</code></td>
      </tr>
      <tr>
        <td>Terminar proceso</td>
        <td><code>kill -9 PID</code>, <code>pkill nombre</code></td>
      </tr>
      <tr>
        <td>Cambiar prioridad</td>
        <td><code>nice</code>, <code>renice</code></td>
      </tr>
      <tr>
        <td>Esperar procesos</td>
        <td><code>wait</code>, <code>sleep</code></td>
      </tr>
      <tr>
        <td>Ignorar cierre de sesión</td>
        <td><code>nohup comando &amp;</code>, <code>disown</code></td>
      </tr>
      <tr>
        <td>Ver info detallada</td>
        <td><code>cat /proc/PID/status</code>, <code>lsof -p PID</code></td>
      </tr>
    </tbody>
  </table>
  <hr />
  <p><a href="./../readme.md#2-linux-y-bash-script">Regresar a la guía
      principal</a></p>
  <blockquote>
    <p><strong>Autor</strong>: Fravelz</p>
  </blockquote>
</body>

</html>