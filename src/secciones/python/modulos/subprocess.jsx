import Titulo from "./../../componentes/titulo.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Linea from "./../../componentes/linea.jsx";

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="subprocess-en-python">Subprocess en Python</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><a href="#subprocess-en-python">Subprocess en Python</a>
          <Lista>
            <li><a href="#temario">Temario</a></li>
            <li><a href="#qué-es-subprocess">¿Qué es subprocess?</a></li>
            <li><a href="#1-diferencias-con-ossystem">1. Diferencias con
              os.system()</a></li>
            <li><a href="#2-ejecutar-comandos-básicos">2. Ejecutar comandos
              básicos</a></li>
            <li><a href="#3-capturar-la-salida-del-comando">3. Capturar la salida
              del comando</a>
              <Lista>
                <li><a href="#atributos-útiles">Atributos útiles</a></li>
              </Lista>
            </li>
            <li><a href="#4-manejar-errores">4. Manejar errores</a></li>
            <li><a href="#5-capturar-y-procesar-salida-directamente">5. Capturar y
              procesar salida directamente</a></li>
            <li><a href="#6-enviar-entrada-al-proceso">6. Enviar entrada al
              proceso</a></li>
            <li><a href="#7-ejecutar-múltiples-procesos-encadenados">7. Ejecutar
              múltiples procesos (encadenados)</a></li>
            <li><a href="#8-popen-explicado-modo-avanzado">8. Popen explicado (modo
              avanzado)</a></li>
            <li><a href="#9-ejecutar-en-segundo-plano">9. Ejecutar en segundo
              plano</a></li>
            <li><a href="#10-consejos-de-seguridad">10. Consejos de
              seguridad</a></li>
            <li><a href="#11-ejemplo-práctico-medir-tiempo-de-ejecución">11. Ejemplo
              práctico: medir tiempo de ejecución</a></li>
            <li><a href="#12-ejemplo-completo-automatizador-de-sistema">12. Ejemplo
              completo: automatizador de sistema</a></li>
            <li><a href="#13-resumen-general">13. Resumen general</a></li>
          </Lista>
        </li>
      </Lista>
      <Texto><a href="./../../readme.md#5-python">Regresar a la Guía
        Principal</a></Texto>
      <Linea />
      <Titulo title="h2" id="qué-es-subprocess">¿Qué es subprocess?</Titulo>
      <Texto><code>subprocess</code> (sub-proceso) permite ejecutar
        <strong>programas externos</strong> o <strong>comandos del sistema
          operativo</strong> desde Python.
      </Texto>
      <Texto>🔹 Ejemplo:</Texto>
      <div class="sourceCode" id="cb1">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> subprocess</span>
            <span id="cb1-2"><a href="#cb1-2" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb1-3"><a href="#cb1-3" aria-hidden="true" tabindex="-1"></a>subprocess.run([<span class="st">&quot;ls&quot;</span>])</span></code></pre>
      </div>
      <Texto>👉 Ejecuta el comando <code>ls</code> (en Linux/Mac) igual que si lo
        escribieras en la terminal.</Texto>
      <Linea />
      <Titulo title="h2" id="diferencias-con-os.system">1. Diferencias con os.system()</Titulo>
      <table>
        <colgroup>
          <col style="width: 29%" />
          <col style="width: 34%" />
          <col style="width: 35%" />
        </colgroup>
        <thead>
          <tr>
            <th>Característica</th>
            <th><code>os.system()</code></th>
            <th><code>subprocess</code></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Devuelve la salida</td>
            <td>❌ No</td>
            <td>✅ Sí</td>
          </tr>
          <tr>
            <td>Control de errores</td>
            <td>❌ Limitado</td>
            <td>✅ Avanzado</td>
          </tr>
          <tr>
            <td>Interactuar con el proceso</td>
            <td>❌ No</td>
            <td>✅ Sí</td>
          </tr>
          <tr>
            <td>Seguridad</td>
            <td>🚫 Inseguro (interpreta shell)</td>
            <td>✅ Seguro (argumentos separados)</td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Titulo title="h2" id="ejecutar-comandos-básicos">2. Ejecutar comandos básicos</Titulo>
      <div class="sourceCode" id="cb2">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> subprocess</span>
            <span id="cb2-2"><a href="#cb2-2" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb2-3"><a href="#cb2-3" aria-hidden="true" tabindex="-1"></a><span class="co"># Forma segura (lista de argumentos)</span></span>
            <span id="cb2-4"><a href="#cb2-4" aria-hidden="true" tabindex="-1"></a>subprocess.run([<span class="st">&quot;echo&quot;</span>, <span class="st">&quot;Hola desde Python!&quot;</span>])</span></code></pre>
      </div>
      <Texto>También puedes pasar <code>shell=True</code> (aunque menos
        seguro):</Texto>
      <div class="sourceCode" id="cb3">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a>subprocess.run(<span class="st">&quot;echo Hola desde Python!&quot;</span>, shell<span class="op">=</span><span class="va">True</span>)</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="capturar-la-salida-del-comando">3. Capturar la salida del
        comando</Titulo>
      <Texto>Para <strong>guardar el texto que produce el comando</strong>, usa
        <code>capture_output=True</code>:
      </Texto>
      <div class="sourceCode" id="cb4">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a>resultado <span class="op">=</span> subprocess.run([<span class="st">&quot;ls&quot;</span>], capture_output<span class="op">=</span><span class="va">True</span>, text<span class="op">=</span><span class="va">True</span>)</span>
            <span id="cb4-2"><a href="#cb4-2" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(<span class="st">&quot;Salida:&quot;</span>, resultado.stdout)</span></code></pre>
      </div>
      <Titulo title="h3" id="atributos-útiles">Atributos útiles</Titulo>
      <Lista>
        <li><code>resultado.stdout</code> → salida estándar (lo que imprime el
          comando)</li>
        <li><code>resultado.stderr</code> → errores (si los hay)</li>
        <li><code>resultado.returncode</code> → código de salida (0 =
          correcto)</li>
      </Lista>
      <Linea />
      <Titulo title="h2" id="manejar-errores">4. Manejar errores</Titulo>
      <Texto>Si quieres que el programa <strong>lance una excepción</strong>
        cuando el comando falle:</Texto>
      <div class="sourceCode" id="cb5">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb5-1"><a href="#cb5-1" aria-hidden="true" tabindex="-1"></a><span class="cf">try</span>:</span>
            <span id="cb5-2"><a href="#cb5-2" aria-hidden="true" tabindex="-1"></a>    subprocess.run([<span class="st">&quot;ls&quot;</span>, <span class="st">&quot;/carpeta_que_no_existe&quot;</span>], check<span class="op">=</span><span class="va">True</span>)</span>
            <span id="cb5-3"><a href="#cb5-3" aria-hidden="true" tabindex="-1"></a><span class="cf">except</span> subprocess.CalledProcessError <span class="im">as</span> e:</span>
            <span id="cb5-4"><a href="#cb5-4" aria-hidden="true" tabindex="-1"></a>    <span class="bu">print</span>(<span class="st">&quot;Error al ejecutar el comando:&quot;</span>, e)</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="capturar-y-procesar-salida-directamente">5. Capturar y procesar
        salida directamente</Titulo>
      <Texto>Si solo necesitas la salida (más cómodo que <code>.run()</code>):</Texto>
      <div class="sourceCode" id="cb6">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a>salida <span class="op">=</span> subprocess.check_output([<span class="st">&quot;whoami&quot;</span>], text<span class="op">=</span><span class="va">True</span>)</span>
            <span id="cb6-2"><a href="#cb6-2" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(<span class="st">&quot;Usuario actual:&quot;</span>, salida.strip())</span></code></pre>
      </div>
      <Texto>👉 Esto ejecuta el comando y <strong>devuelve la salida como
        string</strong>.</Texto>
      <Linea />
      <Titulo title="h2" id="enviar-entrada-al-proceso">6. Enviar entrada al proceso</Titulo>
      <Texto>Puedes <strong>enviar datos</strong> al proceso con
        <code>input=</code>:
      </Texto>
      <div class="sourceCode" id="cb7">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb7-1"><a href="#cb7-1" aria-hidden="true" tabindex="-1"></a>resultado <span class="op">=</span> subprocess.run(</span>
            <span id="cb7-2"><a href="#cb7-2" aria-hidden="true" tabindex="-1"></a>    [<span class="st">&quot;grep&quot;</span>, <span class="st">&quot;hola&quot;</span>],</span>
            <span id="cb7-3"><a href="#cb7-3" aria-hidden="true" tabindex="-1"></a>    <span class="bu">input</span><span class="op">=</span><span class="st">&quot;hola mundo</span><span class="ch">\n</span><span class="st">adiós mundo</span><span class="ch">\n</span><span class="st">&quot;</span>,</span>
            <span id="cb7-4"><a href="#cb7-4" aria-hidden="true" tabindex="-1"></a>    text<span class="op">=</span><span class="va">True</span>,</span>
            <span id="cb7-5"><a href="#cb7-5" aria-hidden="true" tabindex="-1"></a>    capture_output<span class="op">=</span><span class="va">True</span></span>
            <span id="cb7-6"><a href="#cb7-6" aria-hidden="true" tabindex="-1"></a>)</span>
            <span id="cb7-7"><a href="#cb7-7" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(resultado.stdout)</span></code></pre>
      </div>
      <Texto>🔹 Resultado:</Texto>
      <div class="sourceCode" id="cb8">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb8-1"><a href="#cb8-1" aria-hidden="true" tabindex="-1"></a><span class="ex">hola</span> mundo</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="ejecutar-múltiples-procesos-encadenados">7. Ejecutar múltiples
        procesos (encadenados)</Titulo>
      <Texto>Puedes <strong>conectar la salida de un comando a otro</strong> como
        en una tubería (<code>|</code> en la terminal):</Texto>
      <div class="sourceCode" id="cb9">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb9-1"><a href="#cb9-1" aria-hidden="true" tabindex="-1"></a>p1 <span class="op">=</span> subprocess.Popen([<span class="st">&quot;ls&quot;</span>], stdout<span class="op">=</span>subprocess.PIPE)</span>
            <span id="cb9-2"><a href="#cb9-2" aria-hidden="true" tabindex="-1"></a>p2 <span class="op">=</span> subprocess.Popen([<span class="st">&quot;grep&quot;</span>, <span class="st">&quot;py&quot;</span>], stdin<span class="op">=</span>p1.stdout, stdout<span class="op">=</span>subprocess.PIPE, text<span class="op">=</span><span class="va">True</span>)</span>
            <span id="cb9-3"><a href="#cb9-3" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb9-4"><a href="#cb9-4" aria-hidden="true" tabindex="-1"></a>salida, _ <span class="op">=</span> p2.communicate()</span>
            <span id="cb9-5"><a href="#cb9-5" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(<span class="st">&quot;Archivos .py:</span><span class="ch">\n</span><span class="st">&quot;</span>, salida)</span></code></pre>
      </div>
      <Texto>👉 Aquí:</Texto>
      <Lista>
        <li><code>Popen()</code> crea procesos manualmente.</li>
        <li><code>stdout=subprocess.PIPE</code> permite conectar procesos.</li>
        <li><code>communicate()</code> espera y obtiene la salida.</li>
      </Lista>
      <Linea />
      <Titulo title="h2" id="popen-explicado-modo-avanzado">8. Popen explicado (modo
        avanzado)</Titulo>
      <Texto><code>Popen</code> es la clase base de <code>subprocess</code>, te da
        <strong>control total</strong> sobre el proceso.
      </Texto>
      <div class="sourceCode" id="cb10">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb10-1"><a href="#cb10-1" aria-hidden="true" tabindex="-1"></a><span class="im">from</span> subprocess <span class="im">import</span> Popen, PIPE</span>
            <span id="cb10-2"><a href="#cb10-2" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb10-3"><a href="#cb10-3" aria-hidden="true" tabindex="-1"></a>p <span class="op">=</span> Popen([<span class="st">&quot;ping&quot;</span>, <span class="st">&quot;-c&quot;</span>, <span class="st">&quot;2&quot;</span>, <span class="st">&quot;google.com&quot;</span>], stdout<span class="op">=</span>PIPE, stderr<span class="op">=</span>PIPE, text<span class="op">=</span><span class="va">True</span>)</span>
            <span id="cb10-4"><a href="#cb10-4" aria-hidden="true" tabindex="-1"></a>salida, error <span class="op">=</span> p.communicate()</span>
            <span id="cb10-5"><a href="#cb10-5" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb10-6"><a href="#cb10-6" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(<span class="st">&quot;Salida:&quot;</span>, salida)</span>
            <span id="cb10-7"><a href="#cb10-7" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(<span class="st">&quot;Errores:&quot;</span>, error)</span>
            <span id="cb10-8"><a href="#cb10-8" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(<span class="st">&quot;Código de salida:&quot;</span>, p.returncode)</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="ejecutar-en-segundo-plano">9. Ejecutar en segundo plano</Titulo>
      <Texto>Si no quieres que el programa espere:</Texto>
      <div class="sourceCode" id="cb11">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb11-1"><a href="#cb11-1" aria-hidden="true" tabindex="-1"></a>subprocess.Popen([<span class="st">&quot;vlc&quot;</span>, <span class="st">&quot;video.mp4&quot;</span>])</span></code></pre>
      </div>
      <Texto>Esto abrirá VLC <strong>sin bloquear</strong> el resto de tu
        script.</Texto>
      <Linea />
      <Titulo title="h2" id="consejos-de-seguridad">10. Consejos de seguridad</Titulo>
      <Texto>✅ <strong>Haz esto:</strong></Texto>
      <div class="sourceCode" id="cb12">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb12-1"><a href="#cb12-1" aria-hidden="true" tabindex="-1"></a>subprocess.run([<span class="st">&quot;ls&quot;</span>, <span class="st">&quot;/home&quot;</span>])</span></code></pre>
      </div>
      <Texto>🚫 <strong>Evita esto (riesgo de inyección):</strong></Texto>
      <div class="sourceCode" id="cb13">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb13-1"><a href="#cb13-1" aria-hidden="true" tabindex="-1"></a>subprocess.run(<span class="st">&quot;ls /home &amp;&amp; rm -rf /&quot;</span>, shell<span class="op">=</span><span class="va">True</span>)</span></code></pre>
      </div>
      <Texto>Usar <code>shell=True</code> puede ejecutar código malicioso si la
        entrada del usuario no está validada.</Texto>
      <Linea />
      <Titulo title="h2" id="ejemplo-práctico-medir-tiempo-de-ejecución">11. Ejemplo
        práctico: medir tiempo de ejecución</Titulo>
      <div class="sourceCode" id="cb14">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb14-1"><a href="#cb14-1" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> subprocess</span>
            <span id="cb14-2"><a href="#cb14-2" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> time</span>
            <span id="cb14-3"><a href="#cb14-3" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb14-4"><a href="#cb14-4" aria-hidden="true" tabindex="-1"></a>inicio <span class="op">=</span> time.time()</span>
            <span id="cb14-5"><a href="#cb14-5" aria-hidden="true" tabindex="-1"></a>subprocess.run([<span class="st">&quot;python3&quot;</span>, <span class="st">&quot;mi_script.py&quot;</span>])</span>
            <span id="cb14-6"><a href="#cb14-6" aria-hidden="true" tabindex="-1"></a>fin <span class="op">=</span> time.time()</span>
            <span id="cb14-7"><a href="#cb14-7" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb14-8"><a href="#cb14-8" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(<span class="ss">f&quot;Tiempo de ejecución: </span><span class="sc">{</span>fin <span class="op">-</span> inicio<span class="sc">:.2f}</span><span class="ss"> segundos&quot;</span>)</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="ejemplo-completo-automatizador-de-sistema">12. Ejemplo completo:
        automatizador de sistema</Titulo>
      <div class="sourceCode" id="cb15">
        <pre
          class="sourceCode python"><code class="sourceCode python"><span id="cb15-1"><a href="#cb15-1" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> subprocess</span>
            <span id="cb15-2"><a href="#cb15-2" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb15-3"><a href="#cb15-3" aria-hidden="true" tabindex="-1"></a>comandos <span class="op">=</span> [</span>
            <span id="cb15-4"><a href="#cb15-4" aria-hidden="true" tabindex="-1"></a>    [<span class="st">&quot;sudo&quot;</span>, <span class="st">&quot;apt&quot;</span>, <span class="st">&quot;update&quot;</span>],</span>
            <span id="cb15-5"><a href="#cb15-5" aria-hidden="true" tabindex="-1"></a>    [<span class="st">&quot;sudo&quot;</span>, <span class="st">&quot;apt&quot;</span>, <span class="st">&quot;upgrade&quot;</span>, <span class="st">&quot;-y&quot;</span>],</span>
            <span id="cb15-6"><a href="#cb15-6" aria-hidden="true" tabindex="-1"></a>    [<span class="st">&quot;sudo&quot;</span>, <span class="st">&quot;apt&quot;</span>, <span class="st">&quot;autoremove&quot;</span>, <span class="st">&quot;-y&quot;</span>]</span>
            <span id="cb15-7"><a href="#cb15-7" aria-hidden="true" tabindex="-1"></a>]</span>
            <span id="cb15-8"><a href="#cb15-8" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb15-9"><a href="#cb15-9" aria-hidden="true" tabindex="-1"></a><span class="cf">for</span> cmd <span class="kw">in</span> comandos:</span>
            <span id="cb15-10"><a href="#cb15-10" aria-hidden="true" tabindex="-1"></a>    <span class="bu">print</span>(<span class="st">&quot;Ejecutando:&quot;</span>, <span class="st">&quot; &quot;</span>.join(cmd))</span>
            <span id="cb15-11"><a href="#cb15-11" aria-hidden="true" tabindex="-1"></a>    resultado <span class="op">=</span> subprocess.run(cmd, capture_output<span class="op">=</span><span class="va">True</span>, text<span class="op">=</span><span class="va">True</span>)</span>
            <span id="cb15-12"><a href="#cb15-12" aria-hidden="true" tabindex="-1"></a>    <span class="bu">print</span>(resultado.stdout)</span></code></pre>
      </div>
      <Texto>🧹 Esto ejecuta varios comandos del sistema uno tras otro y muestra
        su salida.</Texto>
      <Linea />
      <Titulo title="h2" id="resumen-general">13. Resumen general</Titulo>
      <table>
        <colgroup>
          <col style="width: 40%" />
          <col style="width: 59%" />
        </colgroup>
        <thead>
          <tr>
            <th>Función</th>
            <th>Qué hace</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>subprocess.run()</code></td>
            <td>Ejecuta un comando y espera que termine</td>
          </tr>
          <tr>
            <td><code>subprocess.check_output()</code></td>
            <td>Devuelve solo la salida</td>
          </tr>
          <tr>
            <td><code>subprocess.Popen()</code></td>
            <td>Crea un proceso controlado manualmente</td>
          </tr>
          <tr>
            <td><code>stdout=PIPE</code></td>
            <td>Captura la salida estándar</td>
          </tr>
          <tr>
            <td><code>stderr=PIPE</code></td>
            <td>Captura los errores</td>
          </tr>
          <tr>
            <td><code>input=</code></td>
            <td>Envía datos al proceso</td>
          </tr>
          <tr>
            <td><code>shell=True</code></td>
            <td>Ejecuta dentro de un shell (⚠️ inseguro)</td>
          </tr>
          <tr>
            <td><code>check=True</code></td>
            <td>Lanza excepción si falla</td>
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
