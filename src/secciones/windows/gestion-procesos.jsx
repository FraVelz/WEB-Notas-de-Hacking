import Titulo from "./../../componentes/titulo.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Linea from "./../../componentes/linea.jsx";

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="comandos-y-cmdlets-de-gestión-de-procesos">Comandos y cmdlets de
        gestión de procesos</Titulo>
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><Enlace href="#comandos-y-cmdlets-de-gestión-de-procesos">Comandos y
          cmdlets de gestión de procesos</Enlace >
          <Lista>
            <li><Enlace href="#temario">Temario</Enlace ></li>
            <li><Enlace href="#1-comandos-de-gestión-de-procesos-en-cmd">1. Comandos de
              gestión de procesos en CMD</Enlace ></li>
            <li><Enlace href="#2-cmdlets-de-gestión-de-procesos-en-powershell">2. Cmdlets
              de gestión de procesos en PowerShell</Enlace ></li>
            <li><Enlace href="#3-comparativa-rápida-cmd-vs-powershell">3. Comparativa
              rápida CMD vs PowerShell</Enlace ></li>
            <li><Enlace href="#4-comandos-gráficos-y-herramientas-integradas">4. Comandos
              gráficos y herramientas integradas</Enlace ></li>
            <li><Enlace href="#ejemplos-útiles-de-powershell">Ejemplos útiles de
              PowerShell</Enlace ></li>
          </Lista>
        </li>
      </Lista>
      <Linea />
      <Titulo title="h2" id="comandos-de-gestión-de-procesos-en-cmd">1. Comandos de gestión
        de procesos en CMD</Titulo>
      <blockquote>
        <Texto>Todos estos se ejecutan en <strong>Símbolo del sistema
          (cmd)</strong>, preferiblemente con permisos de administrador.</Texto>
      </blockquote>
      <table>
        <colgroup>
          <col style="width: 29%" />
          <col style="width: 42%" />
          <col style="width: 28%" />
        </colgroup>
        <thead>
          <tr>
            <th>Comando</th>
            <th>Descripción</th>
            <th>Ejemplo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>tasklist</code></td>
            <td>Muestra todos los procesos en ejecución con su PID (identificador de
              proceso).</td>
            <td><code>tasklist</code></td>
          </tr>
          <tr>
            <td><code>tasklist /v</code></td>
            <td>Muestra información más detallada (ventana, usuario, tiempo,
              etc.).</td>
            <td><code>tasklist /v</code></td>
          </tr>
          <tr>
            <td><code>tasklist /fi "imagename eq notepad.exe"</code></td>
            <td>Filtra procesos por nombre.</td>
            <td><code>tasklist /fi "imagename eq chrome.exe"</code></td>
          </tr>
          <tr>
            <td><code>tasklist /fi "pid eq 1234"</code></td>
            <td>Filtra por PID.</td>
            <td><code>tasklist /fi "pid eq 4567"</code></td>
          </tr>
          <tr>
            <td><code>taskkill /im &lt;nombre&gt;</code></td>
            <td>Cierra un proceso por su nombre.</td>
            <td><code>taskkill /im notepad.exe</code></td>
          </tr>
          <tr>
            <td><code>taskkill /pid &lt;id&gt;</code></td>
            <td>Cierra un proceso por su PID.</td>
            <td><code>taskkill /pid 4567</code></td>
          </tr>
          <tr>
            <td><code>taskkill /f /im &lt;nombre&gt;</code></td>
            <td>Fuerza el cierre de un proceso.</td>
            <td><code>taskkill /f /im chrome.exe</code></td>
          </tr>
          <tr>
            <td><code>taskkill /f /t /im &lt;nombre&gt;</code></td>
            <td>Cierra el proceso y todos sus procesos hijos.</td>
            <td><code>taskkill /f /t /im explorer.exe</code></td>
          </tr>
          <tr>
            <td><code>wmic process list brief</code></td>
            <td>Lista los procesos (más resumido).</td>
            <td><code>wmic process list brief</code></td>
          </tr>
          <tr>
            <td><code>wmic process where name="notepad.exe" get processid</code></td>
            <td>Muestra el PID de un proceso específico.</td>
            <td><code>wmic process where name="chrome.exe" get processid</code></td>
          </tr>
          <tr>
            <td><code>wmic process where name="notepad.exe" call terminate</code></td>
            <td>Termina un proceso específico.</td>
            <td><code>wmic process where name="chrome.exe" call terminate</code></td>
          </tr>
          <tr>
            <td><code>wmic process get name,processid,priority</code></td>
            <td>Muestra procesos con su prioridad.</td>
            <td><code>wmic process get name,processid,priority</code></td>
          </tr>
          <tr>
            <td><code>systeminfo</code></td>
            <td>Información general del sistema, incluyendo tiempo de
              ejecución.</td>
            <td><code>systeminfo</code></td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Titulo title="h2" id="cmdlets-de-gestión-de-procesos-en-powershell">2. Cmdlets de
        gestión de procesos en PowerShell</Titulo>
      <blockquote>
        <Texto>PowerShell ofrece control total sobre los procesos, con más detalle y
          opciones que CMD.</Texto>
      </blockquote>
      <table>
        <colgroup>
          <col style="width: 19%" />
          <col style="width: 27%" />
          <col style="width: 30%" />
          <col style="width: 22%" />
        </colgroup>
        <thead>
          <tr>
            <th>Cmdlet</th>
            <th>Descripción</th>
            <th>Ejemplo</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>Get-Process</code></td>
            <td>Muestra todos los procesos en ejecución.</td>
            <td><code>Get-Process</code></td>
            <td></td>
          </tr>
          <tr>
            <td><code>Get-Process &lt;nombre&gt;</code></td>
            <td>Muestra información de un proceso específico.</td>
            <td><code>Get-Process notepad</code></td>
            <td></td>
          </tr>
          <tr>
            <td><code>Get-Process                         | Sort-Object CPU -Descending</code></td>
            <td>Ordena procesos por uso de CPU.</td>
            <td><em>(muestra los que más consumen CPU)</em></td>
            <td></td>
          </tr>
          <tr>
            <td><code>Stop-Process -Name &lt;nombre&gt;</code></td>
            <td>Detiene un proceso por nombre.</td>
            <td><code>Stop-Process -Name "notepad"</code></td>
            <td></td>
          </tr>
          <tr>
            <td><code>Stop-Process -Id &lt;PID&gt;</code></td>
            <td>Detiene un proceso por ID.</td>
            <td><code>Stop-Process -Id 4567</code></td>
            <td></td>
          </tr>
          <tr>
            <td><code>Stop-Process -Name &lt;nombre&gt; -Force</code></td>
            <td>Fuerza la detención de un proceso.</td>
            <td><code>Stop-Process -Name "chrome" -Force</code></td>
            <td></td>
          </tr>
          <tr>
            <td><code>Start-Process &lt;ruta o nombre&gt;</code></td>
            <td>Inicia un nuevo proceso.</td>
            <td><code>Start-Process notepad</code></td>
            <td></td>
          </tr>
          <tr>
            <td><code>Start-Process &lt;ruta&gt; -Verb RunAs</code></td>
            <td>Ejecuta un proceso como administrador.</td>
            <td><code>Start-Process "cmd.exe" -Verb RunAs</code></td>
            <td></td>
          </tr>
          <tr>
            <td><code>Wait-Process -Name &lt;nombre&gt;</code></td>
            <td>Espera a que un proceso termine antes de continuar.</td>
            <td><code>Wait-Process -Name "notepad"</code></td>
            <td></td>
          </tr>
          <tr>
            <td><code>Debug-Process -Name &lt;nombre&gt;</code></td>
            <td>Inicia depuración de un proceso (avanzado).</td>
            <td><code>Debug-Process -Name "notepad"</code></td>
            <td></td>
          </tr>
          <tr>
            <td><code>Get-WmiObject Win32_Process</code></td>
            <td>Obtiene información avanzada de los procesos.</td>
            <td>
              <code>Get-WmiObject Win32_Process                             | Select-Object Name,ProcessId,ThreadCount</code>
            </td>
            <td></td>
          </tr>
          <tr>
            <td><code>Get-Process                         | Where-Object $_.CPU - gt 50</code></td>
            <td>Filtra procesos que consumen más de cierto valor de CPU.</td>
            <td><em>(personalizable)</em></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Titulo title="h2" id="comparativa-rápida-cmd-vs-powershell">3. Comparativa rápida CMD
        vs PowerShell</Titulo>
      <table>
        <colgroup>
          <col style="width: 23%" />
          <col style="width: 35%" />
          <col style="width: 41%" />
        </colgroup>
        <thead>
          <tr>
            <th>Tarea</th>
            <th>CMD</th>
            <th>PowerShell</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ver todos los procesos</td>
            <td><code>tasklist</code></td>
            <td><code>Get-Process</code></td>
          </tr>
          <tr>
            <td>Ver un proceso específico</td>
            <td><code>tasklist /fi "imagename eq chrome.exe"</code></td>
            <td><code>Get-Process chrome</code></td>
          </tr>
          <tr>
            <td>Terminar un proceso</td>
            <td><code>taskkill /im notepad.exe</code></td>
            <td><code>Stop-Process -Name notepad</code></td>
          </tr>
          <tr>
            <td>Terminar un proceso por ID</td>
            <td><code>taskkill /pid 4567</code></td>
            <td><code>Stop-Process -Id 4567</code></td>
          </tr>
          <tr>
            <td>Forzar cierre</td>
            <td><code>taskkill /f /im chrome.exe</code></td>
            <td><code>Stop-Process -Name chrome -Force</code></td>
          </tr>
          <tr>
            <td>Iniciar un proceso</td>
            <td><em>(no hay comando directo)</em></td>
            <td><code>Start-Process notepad</code></td>
          </tr>
          <tr>
            <td>Ver prioridad</td>
            <td><code>wmic process get name,priority</code></td>
            <td><code>(Get-Process notepad).PriorityClass</code></td>
          </tr>
          <tr>
            <td>Cambiar prioridad</td>
            <td><em>(usando wmic o scripts)</em></td>
            <td><code>(Get-Process notepad).PriorityClass = "High"</code></td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Titulo title="h2" id="comandos-gráficos-y-herramientas-integradas">4. Comandos
        gráficos y herramientas integradas</Titulo>
      <table>
        <colgroup>
          <col style="width: 15%" />
          <col style="width: 84%" />
        </colgroup>
        <thead>
          <tr>
            <th>Comando</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>taskmgr</code></td>
            <td>Abre el <strong>Administrador de tareas</strong>.</td>
          </tr>
          <tr>
            <td><code>resmon</code></td>
            <td>Abre el <strong>Monitor de recursos</strong> (más detallado que el
              Administrador).</td>
          </tr>
          <tr>
            <td><code>perfmon</code></td>
            <td>Abre el <strong>Monitor de rendimiento</strong>.</td>
          </tr>
          <tr>
            <td><code>msconfig</code></td>
            <td>Permite gestionar procesos de inicio.</td>
          </tr>
          <tr>
            <td><code>services.msc</code></td>
            <td>Abre la consola de servicios (algunos procesos se inician como
              servicios).</td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Titulo title="h2" id="ejemplos-útiles-de-powershell">Ejemplos útiles de
        PowerShell</Titulo>
      <div className="sourceCode" id="cb1">
        <pre
          className="sourceCode powershell"><code className="sourceCode powershell"><span id="cb1-1"><Enlace href="#cb1-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Ver los 5 procesos que más consumen CPU</span></span>
            <span id="cb1-2"><Enlace href="#cb1-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">Get-Process</span> <span className="op">|</span> <span className="fu">Sort-Object</span> CPU <span className="op">-</span>Descending <span className="op">|</span> <span className="fu">Select-Object</span> <span className="op">-</span>First <span className="dv">5</span></span>
            <span id="cb1-3"><Enlace href="#cb1-3" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb1-4"><Enlace href="#cb1-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Ver todos los procesos de un usuario específico</span></span>
            <span id="cb1-5"><Enlace href="#cb1-5" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">Get-WmiObject</span> Win32_Process <span className="op">|</span> <span className="fu">Where-Object</span> <span className="op"></span> <span className="va">$_</span><span className="op">.</span><span className="fu">GetOwner</span><span className="op">().</span><span className="fu">User</span> <span className="op">-eq</span> <span className="st">&quot;Francisco&quot;</span> <span className="op"></span></span>
            <span id="cb1-6"><Enlace href="#cb1-6" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb1-7"><Enlace href="#cb1-7" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Cerrar todos los procesos de Notepad</span></span>
            <span id="cb1-8"><Enlace href="#cb1-8" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">Get-Process</span> notepad <span className="op">|</span> <span className="fu">Stop-Process</span> <span className="op">-</span>Force</span>
            <span id="cb1-9"><Enlace href="#cb1-9" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb1-10"><Enlace href="#cb1-10" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Abrir el Bloc de notas como administrador</span></span>
            <span id="cb1-11"><Enlace href="#cb1-11" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">Start-Process</span> <span className="st">&quot;notepad.exe&quot;</span> <span className="op">-</span>Verb RunAs</span></code></pre>
      </div>
      <Linea />
      <Texto><Enlace href="./../readme.md#3-windows">Regresar a la guía
        principal</Enlace ></Texto>
      <blockquote>
        <Texto><strong>Autor:</strong> Fravelz</Texto>
      </blockquote>
    </>
  );
}
export default nameabcd;
