import Enlace from "./../../../componentes/enlace.jsx";
import Linea from "./../../../componentes/linea.jsx";
import Lista from "./../../../componentes/lista.jsx";
import Texto from "./../../../componentes/texto.jsx";
import Titulo from "./../../../componentes/titulo.jsx";
function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="subprocess-en-python">Subprocess en Python</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><Enlace href="#subprocess-en-python">Subprocess en Python</Enlace >
          <Lista>
            <li><Enlace href="#temario">Temario</Enlace ></li>
            <li><Enlace href="#qué-es-subprocess">¿Qué es subprocess?</Enlace ></li>
            <li><Enlace href="#1-diferencias-con-ossystem">1. Diferencias con
              os.system()</Enlace ></li>
            <li><Enlace href="#2-ejecutar-comandos-básicos">2. Ejecutar comandos
              básicos</Enlace ></li>
            <li><Enlace href="#3-capturar-la-salida-del-comando">3. Capturar la salida
              del comando</Enlace >
              <Lista>
                <li><Enlace href="#atributos-útiles">Atributos útiles</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#4-manejar-errores">4. Manejar errores</Enlace ></li>
            <li><Enlace href="#5-capturar-y-procesar-salida-directamente">5. Capturar y
              procesar salida directamente</Enlace ></li>
            <li><Enlace href="#6-enviar-entrada-al-proceso">6. Enviar entrada al
              proceso</Enlace ></li>
            <li><Enlace href="#7-ejecutar-múltiples-procesos-encadenados">7. Ejecutar
              múltiples procesos (encadenados)</Enlace ></li>
            <li><Enlace href="#8-popen-explicado-modo-avanzado">8. Popen explicado (modo
              avanzado)</Enlace ></li>
            <li><Enlace href="#9-ejecutar-en-segundo-plano">9. Ejecutar en segundo
              plano</Enlace ></li>
            <li><Enlace href="#10-consejos-de-seguridad">10. Consejos de
              seguridad</Enlace ></li>
            <li><Enlace href="#11-ejemplo-práctico-medir-tiempo-de-ejecución">11. Ejemplo
              práctico: medir tiempo de ejecución</Enlace ></li>
            <li><Enlace href="#12-ejemplo-completo-automatizador-de-sistema">12. Ejemplo
              completo: automatizador de sistema</Enlace ></li>
            <li><Enlace href="#13-resumen-general">13. Resumen general</Enlace ></li>
          </Lista>
        </li>
      </Lista>
      <Texto><Enlace href="./../../readme.md#5-python">Regresar a la Guía
        Principal</Enlace ></Texto>
      <Linea />
      <Titulo title="h2" id="qué-es-subprocess">¿Qué es subprocess?</Titulo>
      <Texto><code>subprocess</code> (sub-proceso) permite ejecutar
        <strong>programas externos</strong> o <strong>comandos del sistema
          operativo</strong> desde Python.
      </Texto>
      <Texto>🔹 Ejemplo:</Texto>
      <div className="sourceCode" id="cb1">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb1-1"><Enlace href="#cb1-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> subprocess</span>
            <span id="cb1-2"><Enlace href="#cb1-2" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb1-3"><Enlace href="#cb1-3" aria-hidden="true" tabindex="-1"></Enlace >subprocess.run([<span className="st">&quot;ls&quot;</span>])</span></code></pre>
      </div>
      <Texto>👉 Ejecuta el comando <code>ls</code> (en Linux/Mac) igual que si lo
        escribieras en la terminal.</Texto>
      <Linea />
      <Titulo title="h2" id="diferencias-con-os.system">1. Diferencias con os.system()</Titulo>
      <table>
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
      <div className="sourceCode" id="cb2">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb2-1"><Enlace href="#cb2-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> subprocess</span>
            <span id="cb2-2"><Enlace href="#cb2-2" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb2-3"><Enlace href="#cb2-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Forma segura (lista de argumentos)</span></span>
            <span id="cb2-4"><Enlace href="#cb2-4" aria-hidden="true" tabindex="-1"></Enlace >subprocess.run([<span className="st">&quot;echo&quot;</span>, <span className="st">&quot;Hola desde Python!&quot;</span>])</span></code></pre>
      </div>
      <Texto>También puedes pasar <code>shell=True</code> (aunque menos
        seguro):</Texto>
      <div className="sourceCode" id="cb3">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb3-1"><Enlace href="#cb3-1" aria-hidden="true" tabindex="-1"></Enlace >subprocess.run(<span className="st">&quot;echo Hola desde Python!&quot;</span>, shell<span className="op">=</span><span className="va">True</span>)</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="capturar-la-salida-del-comando">3. Capturar la salida del
        comando</Titulo>
      <Texto>Para <strong>guardar el texto que produce el comando</strong>, usa
        <code>capture_output=True</code>:
      </Texto>
      <div className="sourceCode" id="cb4">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb4-1"><Enlace href="#cb4-1" aria-hidden="true" tabindex="-1"></Enlace >resultado <span className="op">=</span> subprocess.run([<span className="st">&quot;ls&quot;</span>], capture_output<span className="op">=</span><span className="va">True</span>, text<span className="op">=</span><span className="va">True</span>)</span>
            <span id="cb4-2"><Enlace href="#cb4-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(<span className="st">&quot;Salida:&quot;</span>, resultado.stdout)</span></code></pre>
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
      <div className="sourceCode" id="cb5">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb5-1"><Enlace href="#cb5-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">try</span>:</span>
            <span id="cb5-2"><Enlace href="#cb5-2" aria-hidden="true" tabindex="-1"></Enlace >    subprocess.run([<span className="st">&quot;ls&quot;</span>, <span className="st">&quot;/carpeta_que_no_existe&quot;</span>], check<span className="op">=</span><span className="va">True</span>)</span>
            <span id="cb5-3"><Enlace href="#cb5-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">except</span> subprocess.CalledProcessError <span className="im">as</span> e:</span>
            <span id="cb5-4"><Enlace href="#cb5-4" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">print</span>(<span className="st">&quot;Error al ejecutar el comando:&quot;</span>, e)</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="capturar-y-procesar-salida-directamente">5. Capturar y procesar
        salida directamente</Titulo>
      <Texto>Si solo necesitas la salida (más cómodo que <code>.run()</code>):</Texto>
      <div className="sourceCode" id="cb6">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb6-1"><Enlace href="#cb6-1" aria-hidden="true" tabindex="-1"></Enlace >salida <span className="op">=</span> subprocess.check_output([<span className="st">&quot;whoami&quot;</span>], text<span className="op">=</span><span className="va">True</span>)</span>
            <span id="cb6-2"><Enlace href="#cb6-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(<span className="st">&quot;Usuario actual:&quot;</span>, salida.strip())</span></code></pre>
      </div>
      <Texto>👉 Esto ejecuta el comando y <strong>devuelve la salida como
        string</strong>.</Texto>
      <Linea />
      <Titulo title="h2" id="enviar-entrada-al-proceso">6. Enviar entrada al proceso</Titulo>
      <Texto>Puedes <strong>enviar datos</strong> al proceso con
        <code>input=</code>:
      </Texto>
      <div className="sourceCode" id="cb7">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb7-1"><Enlace href="#cb7-1" aria-hidden="true" tabindex="-1"></Enlace >resultado <span className="op">=</span> subprocess.run(</span>
            <span id="cb7-2"><Enlace href="#cb7-2" aria-hidden="true" tabindex="-1"></Enlace >    [<span className="st">&quot;grep&quot;</span>, <span className="st">&quot;hola&quot;</span>],</span>
            <span id="cb7-3"><Enlace href="#cb7-3" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">input</span><span className="op">=</span><span className="st">&quot;hola mundo</span><span className="ch">\n</span><span className="st">adiós mundo</span><span className="ch">\n</span><span className="st">&quot;</span>,</span>
            <span id="cb7-4"><Enlace href="#cb7-4" aria-hidden="true" tabindex="-1"></Enlace >    text<span className="op">=</span><span className="va">True</span>,</span>
            <span id="cb7-5"><Enlace href="#cb7-5" aria-hidden="true" tabindex="-1"></Enlace >    capture_output<span className="op">=</span><span className="va">True</span></span>
            <span id="cb7-6"><Enlace href="#cb7-6" aria-hidden="true" tabindex="-1"></Enlace >)</span>
            <span id="cb7-7"><Enlace href="#cb7-7" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(resultado.stdout)</span></code></pre>
      </div>
      <Texto>🔹 Resultado:</Texto>
      <div className="sourceCode" id="cb8">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb8-1"><Enlace href="#cb8-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">hola</span> mundo</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="ejecutar-múltiples-procesos-encadenados">7. Ejecutar múltiples
        procesos (encadenados)</Titulo>
      <Texto>Puedes <strong>conectar la salida de un comando a otro</strong> como
        en una tubería (<code>|</code> en la terminal):</Texto>
      <div className="sourceCode" id="cb9">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb9-1"><Enlace href="#cb9-1" aria-hidden="true" tabindex="-1"></Enlace >p1 <span className="op">=</span> subprocess.Popen([<span className="st">&quot;ls&quot;</span>], stdout<span className="op">=</span>subprocess.PIPE)</span>
            <span id="cb9-2"><Enlace href="#cb9-2" aria-hidden="true" tabindex="-1"></Enlace >p2 <span className="op">=</span> subprocess.Popen([<span className="st">&quot;grep&quot;</span>, <span className="st">&quot;py&quot;</span>], stdin<span className="op">=</span>p1.stdout, stdout<span className="op">=</span>subprocess.PIPE, text<span className="op">=</span><span className="va">True</span>)</span>
            <span id="cb9-3"><Enlace href="#cb9-3" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb9-4"><Enlace href="#cb9-4" aria-hidden="true" tabindex="-1"></Enlace >salida, _ <span className="op">=</span> p2.communicate()</span>
            <span id="cb9-5"><Enlace href="#cb9-5" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(<span className="st">&quot;Archivos .py:</span><span className="ch">\n</span><span className="st">&quot;</span>, salida)</span></code></pre>
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
      <div className="sourceCode" id="cb10">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb10-1"><Enlace href="#cb10-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">from</span> subprocess <span className="im">import</span> Popen, PIPE</span>
            <span id="cb10-2"><Enlace href="#cb10-2" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb10-3"><Enlace href="#cb10-3" aria-hidden="true" tabindex="-1"></Enlace >p <span className="op">=</span> Popen([<span className="st">&quot;ping&quot;</span>, <span className="st">&quot;-c&quot;</span>, <span className="st">&quot;2&quot;</span>, <span className="st">&quot;google.com&quot;</span>], stdout<span className="op">=</span>PIPE, stderr<span className="op">=</span>PIPE, text<span className="op">=</span><span className="va">True</span>)</span>
            <span id="cb10-4"><Enlace href="#cb10-4" aria-hidden="true" tabindex="-1"></Enlace >salida, error <span className="op">=</span> p.communicate()</span>
            <span id="cb10-5"><Enlace href="#cb10-5" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb10-6"><Enlace href="#cb10-6" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(<span className="st">&quot;Salida:&quot;</span>, salida)</span>
            <span id="cb10-7"><Enlace href="#cb10-7" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(<span className="st">&quot;Errores:&quot;</span>, error)</span>
            <span id="cb10-8"><Enlace href="#cb10-8" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(<span className="st">&quot;Código de salida:&quot;</span>, p.returncode)</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="ejecutar-en-segundo-plano">9. Ejecutar en segundo plano</Titulo>
      <Texto>Si no quieres que el programa espere:</Texto>
      <div className="sourceCode" id="cb11">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb11-1"><Enlace href="#cb11-1" aria-hidden="true" tabindex="-1"></Enlace >subprocess.Popen([<span className="st">&quot;vlc&quot;</span>, <span className="st">&quot;video.mp4&quot;</span>])</span></code></pre>
      </div>
      <Texto>Esto abrirá VLC <strong>sin bloquear</strong> el resto de tu
        script.</Texto>
      <Linea />
      <Titulo title="h2" id="consejos-de-seguridad">10. Consejos de seguridad</Titulo>
      <Texto>✅ <strong>Haz esto:</strong></Texto>
      <div className="sourceCode" id="cb12">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb12-1"><Enlace href="#cb12-1" aria-hidden="true" tabindex="-1"></Enlace >subprocess.run([<span className="st">&quot;ls&quot;</span>, <span className="st">&quot;/home&quot;</span>])</span></code></pre>
      </div>
      <Texto>🚫 <strong>Evita esto (riesgo de inyección):</strong></Texto>
      <div className="sourceCode" id="cb13">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb13-1"><Enlace href="#cb13-1" aria-hidden="true" tabindex="-1"></Enlace >subprocess.run(<span className="st">&quot;ls /home &amp;&amp; rm -rf /&quot;</span>, shell<span className="op">=</span><span className="va">True</span>)</span></code></pre>
      </div>
      <Texto>Usar <code>shell=True</code> puede ejecutar código malicioso si la
        entrada del usuario no está validada.</Texto>
      <Linea />
      <Titulo title="h2" id="ejemplo-práctico-medir-tiempo-de-ejecución">11. Ejemplo
        práctico: medir tiempo de ejecución</Titulo>
      <div className="sourceCode" id="cb14">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb14-1"><Enlace href="#cb14-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> subprocess</span>
            <span id="cb14-2"><Enlace href="#cb14-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> time</span>
            <span id="cb14-3"><Enlace href="#cb14-3" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb14-4"><Enlace href="#cb14-4" aria-hidden="true" tabindex="-1"></Enlace >inicio <span className="op">=</span> time.time()</span>
            <span id="cb14-5"><Enlace href="#cb14-5" aria-hidden="true" tabindex="-1"></Enlace >subprocess.run([<span className="st">&quot;python3&quot;</span>, <span className="st">&quot;mi_script.py&quot;</span>])</span>
            <span id="cb14-6"><Enlace href="#cb14-6" aria-hidden="true" tabindex="-1"></Enlace >fin <span className="op">=</span> time.time()</span>
            <span id="cb14-7"><Enlace href="#cb14-7" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb14-8"><Enlace href="#cb14-8" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(<span className="ss">f&quot;Tiempo de ejecución: </span><span className="sc">{"{"}</span>fin <span className="op">-</span> inicio<span className="sc">:.2f{"}"}</span><span className="ss"> segundos&quot;</span>)</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="ejemplo-completo-automatizador-de-sistema">12. Ejemplo completo:
        automatizador de sistema</Titulo>
      <div className="sourceCode" id="cb15">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb15-1"><Enlace href="#cb15-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> subprocess</span>
            <span id="cb15-2"><Enlace href="#cb15-2" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb15-3"><Enlace href="#cb15-3" aria-hidden="true" tabindex="-1"></Enlace >comandos <span className="op">=</span> [</span>
            <span id="cb15-4"><Enlace href="#cb15-4" aria-hidden="true" tabindex="-1"></Enlace >    [<span className="st">&quot;sudo&quot;</span>, <span className="st">&quot;apt&quot;</span>, <span className="st">&quot;update&quot;</span>],</span>
            <span id="cb15-5"><Enlace href="#cb15-5" aria-hidden="true" tabindex="-1"></Enlace >    [<span className="st">&quot;sudo&quot;</span>, <span className="st">&quot;apt&quot;</span>, <span className="st">&quot;upgrade&quot;</span>, <span className="st">&quot;-y&quot;</span>],</span>
            <span id="cb15-6"><Enlace href="#cb15-6" aria-hidden="true" tabindex="-1"></Enlace >    [<span className="st">&quot;sudo&quot;</span>, <span className="st">&quot;apt&quot;</span>, <span className="st">&quot;autoremove&quot;</span>, <span className="st">&quot;-y&quot;</span>]</span>
            <span id="cb15-7"><Enlace href="#cb15-7" aria-hidden="true" tabindex="-1"></Enlace >]</span>
            <span id="cb15-8"><Enlace href="#cb15-8" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb15-9"><Enlace href="#cb15-9" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">for</span> cmd <span className="kw">in</span> comandos:</span>
            <span id="cb15-10"><Enlace href="#cb15-10" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">print</span>(<span className="st">&quot;Ejecutando:&quot;</span>, <span className="st">&quot; &quot;</span>.join(cmd))</span>
            <span id="cb15-11"><Enlace href="#cb15-11" aria-hidden="true" tabindex="-1"></Enlace >    resultado <span className="op">=</span> subprocess.run(cmd, capture_output<span className="op">=</span><span className="va">True</span>, text<span className="op">=</span><span className="va">True</span>)</span>
            <span id="cb15-12"><Enlace href="#cb15-12" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">print</span>(resultado.stdout)</span></code></pre>
      </div>
      <Texto>🧹 Esto ejecuta varios comandos del sistema uno tras otro y muestra
        su salida.</Texto>
      <Linea />
      <Titulo title="h2" id="resumen-general">13. Resumen general</Titulo>
      <table>
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
      <Texto><Enlace href="./../../readme.md#5-python">Regresar a la Guía
        Principal</Enlace ></Texto>
      <blockquote>
        <Texto><strong>Autor:</strong> Fravelz</Texto>
      </blockquote>
    </>
  );
}

export default nameabcd;
