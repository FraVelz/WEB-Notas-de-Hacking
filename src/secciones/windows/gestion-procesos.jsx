import Enlace from "../../componentes/atomos/enlace.jsx";
import Linea from "../../componentes/atomos/linea.jsx";
import Lista from "../../componentes/moleculas/lista.jsx";
import Texto from "./../../componentes/atomos/texto.jsx";
import Titulo from "../../componentes/moleculas/titulo.jsx";
import { Tabla, TablaCabezera, TablaFila, TablaUnica } from "../../componentes/moleculas/tabla.jsx";
import CodeBlock from "../../componentes/moleculas/codigo.jsx";

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
      <Tabla>
  <TablaCabezera headers={["Comando", "Descripción", "Ejemplo"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>tasklist</TablaUnica>
      <TablaUnica>Muestra todos los procesos en ejecución con su PID (identificador de
              proceso).</TablaUnica>
      <TablaUnica>tasklist</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>tasklist /v</TablaUnica>
      <TablaUnica>Muestra información más detallada (ventana, usuario, tiempo,
              etc.).</TablaUnica>
      <TablaUnica>tasklist /v</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>tasklist /fi "imagename eq notepad.exe"</TablaUnica>
      <TablaUnica>Filtra procesos por nombre.</TablaUnica>
      <TablaUnica>tasklist /fi "imagename eq chrome.exe"</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>tasklist /fi "pid eq 1234"</TablaUnica>
      <TablaUnica>Filtra por PID.</TablaUnica>
      <TablaUnica>tasklist /fi "pid eq 4567"</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>taskkill /im &lt;nombre&gt;</TablaUnica>
      <TablaUnica>Cierra un proceso por su nombre.</TablaUnica>
      <TablaUnica>taskkill /im notepad.exe</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>taskkill /pid &lt;id&gt;</TablaUnica>
      <TablaUnica>Cierra un proceso por su PID.</TablaUnica>
      <TablaUnica>taskkill /pid 4567</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>taskkill /f /im &lt;nombre&gt;</TablaUnica>
      <TablaUnica>Fuerza el cierre de un proceso.</TablaUnica>
      <TablaUnica>taskkill /f /im chrome.exe</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>taskkill /f /t /im &lt;nombre&gt;</TablaUnica>
      <TablaUnica>Cierra el proceso y todos sus procesos hijos.</TablaUnica>
      <TablaUnica>taskkill /f /t /im explorer.exe</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>wmic process list brief</TablaUnica>
      <TablaUnica>Lista los procesos (más resumido).</TablaUnica>
      <TablaUnica>wmic process list brief</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>wmic process where name="notepad.exe" get processid</TablaUnica>
      <TablaUnica>Muestra el PID de un proceso específico.</TablaUnica>
      <TablaUnica>wmic process where name="chrome.exe" get processid</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>wmic process where name="notepad.exe" call terminate</TablaUnica>
      <TablaUnica>Termina un proceso específico.</TablaUnica>
      <TablaUnica>wmic process where name="chrome.exe" call terminate</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>wmic process get name,processid,priority</TablaUnica>
      <TablaUnica>Muestra procesos con su prioridad.</TablaUnica>
      <TablaUnica>wmic process get name,processid,priority</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>systeminfo</TablaUnica>
      <TablaUnica>Información general del sistema, incluyendo tiempo de
              ejecución.</TablaUnica>
      <TablaUnica>systeminfo</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
      <Linea />
      <Titulo title="h2" id="cmdlets-de-gestión-de-procesos-en-powershell">2. Cmdlets de
        gestión de procesos en PowerShell</Titulo>
      <blockquote>
        <Texto>PowerShell ofrece control total sobre los procesos, con más detalle y
          opciones que CMD.</Texto>
      </blockquote>
      <Tabla>
  <TablaCabezera headers={["Cmdlet", "Descripción", "Ejemplo", ""]} />

  <tbody>
    <TablaFila>
      <TablaUnica>Get-Process</TablaUnica>
      <TablaUnica>Muestra todos los procesos en ejecución.</TablaUnica>
      <TablaUnica>Get-Process</TablaUnica>
      <TablaUnica></TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Get-Process &lt;nombre&gt;</TablaUnica>
      <TablaUnica>Muestra información de un proceso específico.</TablaUnica>
      <TablaUnica>Get-Process notepad</TablaUnica>
      <TablaUnica></TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Get-Process                         | Sort-Object CPU -Descending</TablaUnica>
      <TablaUnica>Ordena procesos por uso de CPU.</TablaUnica>
      <TablaUnica><em>(muestra los que más consumen CPU)</em></TablaUnica>
      <TablaUnica></TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Stop-Process -Name &lt;nombre&gt;</TablaUnica>
      <TablaUnica>Detiene un proceso por nombre.</TablaUnica>
      <TablaUnica>Stop-Process -Name "notepad"</TablaUnica>
      <TablaUnica></TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Stop-Process -Id &lt;PID&gt;</TablaUnica>
      <TablaUnica>Detiene un proceso por ID.</TablaUnica>
      <TablaUnica>Stop-Process -Id 4567</TablaUnica>
      <TablaUnica></TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Stop-Process -Name &lt;nombre&gt; -Force</TablaUnica>
      <TablaUnica>Fuerza la detención de un proceso.</TablaUnica>
      <TablaUnica>Stop-Process -Name "chrome" -Force</TablaUnica>
      <TablaUnica></TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Start-Process &lt;ruta o nombre&gt;</TablaUnica>
      <TablaUnica>Inicia un nuevo proceso.</TablaUnica>
      <TablaUnica>Start-Process notepad</TablaUnica>
      <TablaUnica></TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Start-Process &lt;ruta&gt; -Verb RunAs</TablaUnica>
      <TablaUnica>Ejecuta un proceso como administrador.</TablaUnica>
      <TablaUnica>Start-Process "cmd.exe" -Verb RunAs</TablaUnica>
      <TablaUnica></TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Wait-Process -Name &lt;nombre&gt;</TablaUnica>
      <TablaUnica>Espera a que un proceso termine antes de continuar.</TablaUnica>
      <TablaUnica>Wait-Process -Name "notepad"</TablaUnica>
      <TablaUnica></TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Debug-Process -Name &lt;nombre&gt;</TablaUnica>
      <TablaUnica>Inicia depuración de un proceso (avanzado).</TablaUnica>
      <TablaUnica>Debug-Process -Name "notepad"</TablaUnica>
      <TablaUnica></TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Get-WmiObject Win32_Process</TablaUnica>
      <TablaUnica>Obtiene información avanzada de los procesos.</TablaUnica>
      <TablaUnica>Get-WmiObject Win32_Process                             | Select-Object Name,ProcessId,ThreadCount</TablaUnica>
      <TablaUnica></TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Get-Process                         | Where-Object $_.CPU - gt 50</TablaUnica>
      <TablaUnica>Filtra procesos que consumen más de cierto valor de CPU.</TablaUnica>
      <TablaUnica><em>(personalizable)</em></TablaUnica>
      <TablaUnica></TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
      <Linea />
      <Titulo title="h2" id="comparativa-rápida-cmd-vs-powershell">3. Comparativa rápida CMD
        vs PowerShell</Titulo>
      <Tabla>
  <TablaCabezera headers={["Tarea", "CMD", "PowerShell"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>Ver todos los procesos</TablaUnica>
      <TablaUnica>tasklist</TablaUnica>
      <TablaUnica>Get-Process</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Ver un proceso específico</TablaUnica>
      <TablaUnica>tasklist /fi "imagename eq chrome.exe"</TablaUnica>
      <TablaUnica>Get-Process chrome</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Terminar un proceso</TablaUnica>
      <TablaUnica>taskkill /im notepad.exe</TablaUnica>
      <TablaUnica>Stop-Process -Name notepad</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Terminar un proceso por ID</TablaUnica>
      <TablaUnica>taskkill /pid 4567</TablaUnica>
      <TablaUnica>Stop-Process -Id 4567</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Forzar cierre</TablaUnica>
      <TablaUnica>taskkill /f /im chrome.exe</TablaUnica>
      <TablaUnica>Stop-Process -Name chrome -Force</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Iniciar un proceso</TablaUnica>
      <TablaUnica><em>(no hay comando directo)</em></TablaUnica>
      <TablaUnica>Start-Process notepad</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Ver prioridad</TablaUnica>
      <TablaUnica>wmic process get name,priority</TablaUnica>
      <TablaUnica>(Get-Process notepad).PriorityClass</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Cambiar prioridad</TablaUnica>
      <TablaUnica><em>(usando wmic o scripts)</em></TablaUnica>
      <TablaUnica>(Get-Process notepad).PriorityClass = "High"</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
      <Linea />
      <Titulo title="h2" id="comandos-gráficos-y-herramientas-integradas">4. Comandos
        gráficos y herramientas integradas</Titulo>
      <Tabla>
  <TablaCabezera headers={["Comando", "Descripción"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>taskmgr</TablaUnica>
      <TablaUnica>Abre el <strong>Administrador de tareas</strong>.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>resmon</TablaUnica>
      <TablaUnica>Abre el <strong>Monitor de recursos</strong> (más detallado que el
              Administrador).</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>perfmon</TablaUnica>
      <TablaUnica>Abre el <strong>Monitor de rendimiento</strong>.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>msconfig</TablaUnica>
      <TablaUnica>Permite gestionar procesos de inicio.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>services.msc</TablaUnica>
      <TablaUnica>Abre la consola de servicios (algunos procesos se inician como
              servicios).</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
      <Linea />
      <Titulo title="h2" id="ejemplos-útiles-de-powershell">Ejemplos útiles de
        PowerShell</Titulo>
      <CodeBlock code={`# Ver los 5 procesos que más consumen CPU
Get-Process | Sort-Object CPU -Descending | Select-Object -First 5

# Ver todos los procesos de un usuario específico
Get-WmiObject Win32_Process | Where-Object  $_.GetOwner().User -eq "Francisco"

# Cerrar todos los procesos de Notepad
Get-Process notepad | Stop-Process -Force

# Abrir el Bloc de notas como administrador
Start-Process "notepad.exe" -Verb RunAs`} language="bash" />
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
