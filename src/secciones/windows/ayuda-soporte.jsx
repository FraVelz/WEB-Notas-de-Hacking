import Titulo from "./../../componentes/titulo.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Linea from "./../../componentes/linea.jsx";
import Enlace from "../../componentes/enlace.jsx";

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="comandos-y-cmdlets-de-ayuda-y-soporte">Comandos y cmdlets de
        ayuda y soporte</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><Enlace href="#comandos-y-cmdlets-de-ayuda-y-soporte">Comandos y cmdlets
          de ayuda y soporte</Enlace >
          <Lista>
            <li><Enlace href="#temario">Temario</Enlace ></li>
            <li><Enlace href="#1-comandos-de-ayuda-y-soporte-en-cmd">1. Comandos de ayuda
              y soporte en CMD</Enlace ></li>
            <li><Enlace href="#2-cmdlets-de-ayuda-y-soporte-en-powershell">2. Cmdlets de
              ayuda y soporte en PowerShell</Enlace ></li>
            <li><Enlace href="#3-ayuda-interactiva-y-documentación">3. Ayuda interactiva
              y documentación</Enlace ></li>
            <li><Enlace href="#sugerencia-práctica">Sugerencia práctica</Enlace ></li>
          </Lista>
        </li>
      </Lista>
      <Texto><Enlace href="./../readme.md#3-windows">Regresar a la guía
        principal</Enlace ></Texto>
      <Linea />
      <Titulo title="h2" id="comandos-de-ayuda-y-soporte-en-cmd">1. Comandos de ayuda y
        soporte en CMD</Titulo>
      <table>
        <thead>
          <tr>
            <th>Comando</th>
            <th>Descripción</th>
            <th>Ejemplo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>help</code></td>
            <td>Muestra todos los comandos disponibles de CMD.</td>
            <td><code>help</code></td>
          </tr>
          <tr>
            <td><code>help &lt;comando&gt;</code></td>
            <td>Muestra información sobre un comando específico.</td>
            <td><code>help dir</code></td>
          </tr>
          <tr>
            <td><code>&lt;comando&gt; /?</code></td>
            <td>Muestra la ayuda de un comando. Es equivalente a
              <code>help &lt;comando&gt;</code>.
            </td>
            <td><code>ipconfig /?</code></td>
          </tr>
          <tr>
            <td><code>systeminfo</code></td>
            <td>Muestra información detallada del sistema (versión, RAM, BIOS, red,
              etc.).</td>
            <td><code>systeminfo</code></td>
          </tr>
          <tr>
            <td><code>hostname</code></td>
            <td>Muestra el nombre del equipo.</td>
            <td><code>hostname</code></td>
          </tr>
          <tr>
            <td><code>ver</code></td>
            <td>Muestra la versión de Windows.</td>
            <td><code>ver</code></td>
          </tr>
          <tr>
            <td><code>set</code></td>
            <td>Lista todas las variables de entorno.</td>
            <td><code>set</code></td>
          </tr>
          <tr>
            <td><code>echo %VARIABLE%</code></td>
            <td>Muestra el valor de una variable de entorno.</td>
            <td><code>echo %PATH%</code></td>
          </tr>
          <tr>
            <td><code>driverquery</code></td>
            <td>Lista los controladores instalados.</td>
            <td><code>driverquery /v</code></td>
          </tr>
          <tr>
            <td><code>tasklist</code></td>
            <td>Muestra los procesos en ejecución.</td>
            <td><code>tasklist</code></td>
          </tr>
          <tr>
            <td><code>taskkill</code></td>
            <td>Cierra un proceso por nombre o PID.</td>
            <td><code>taskkill /IM notepad.exe /F</code></td>
          </tr>
          <tr>
            <td><code>sfc /scannow</code></td>
            <td>Escanea y repara archivos del sistema dañados.</td>
            <td><code>sfc /scannow</code></td>
          </tr>
          <tr>
            <td><code>chkdsk</code></td>
            <td>Verifica y repara errores en el disco.</td>
            <td><code>chkdsk C: /f</code></td>
          </tr>
          <tr>
            <td><code>ipconfig /all</code></td>
            <td>Muestra toda la información de red.</td>
            <td><code>ipconfig /all</code></td>
          </tr>
          <tr>
            <td><code>ping</code></td>
            <td>Comprueba la conectividad con un host.</td>
            <td><code>ping google.com</code></td>
          </tr>
          <tr>
            <td><code>tracert</code></td>
            <td>Muestra la ruta que sigue un paquete hasta un destino.</td>
            <td><code>tracert google.com</code></td>
          </tr>
          <tr>
            <td><code>netstat</code></td>
            <td>Muestra conexiones de red activas.</td>
            <td><code>netstat -an</code></td>
          </tr>
          <tr>
            <td><code>systemreset</code></td>
            <td>Abre el asistente para restablecer Windows.</td>
            <td><code>systemreset</code></td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Titulo title="h2" id="cmdlets-de-ayuda-y-soporte-en-powershell">2. Cmdlets de ayuda y
        soporte en PowerShell</Titulo>
      <table>
        <thead>
          <tr>
            <th>Cmdlet</th>
            <th>Descripción</th>
            <th>Ejemplo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>Get-Help</code></td>
            <td>Muestra ayuda general o detallada sobre un cmdlet.</td>
            <td><code>Get-Help Get-Process</code></td>
          </tr>
          <tr>
            <td><code>Get-Command</code></td>
            <td>Lista todos los cmdlets disponibles.</td>
            <td><code>Get-Command</code></td>
          </tr>
          <tr>
            <td><code>Get-Alias</code></td>
            <td>Muestra los alias (atajos) de comandos.</td>
            <td><code>Get-Alias</code></td>
          </tr>
          <tr>
            <td><code>Get-Process</code></td>
            <td>Lista los procesos activos.</td>
            <td><code>Get-Process</code></td>
          </tr>
          <tr>
            <td><code>Stop-Process</code></td>
            <td>Termina un proceso.</td>
            <td><code>Stop-Process -Name notepad -Force</code></td>
          </tr>
          <tr>
            <td><code>Get-Service</code></td>
            <td>Lista los servicios del sistema.</td>
            <td><code>Get-Service</code></td>
          </tr>
          <tr>
            <td><code>Restart-Service</code></td>
            <td>Reinicia un servicio.</td>
            <td><code>Restart-Service -Name Spooler</code></td>
          </tr>
          <tr>
            <td><code>Get-EventLog</code></td>
            <td>Muestra eventos del sistema, aplicación o seguridad.</td>
            <td><code>Get-EventLog -LogName System -Newest 10</code></td>
          </tr>
          <tr>
            <td><code>Get-ComputerInfo</code></td>
            <td>Información detallada del sistema (hardware, BIOS, red, etc.).</td>
            <td><code>Get-ComputerInfo</code></td>
          </tr>
          <tr>
            <td><code>Test-Connection</code></td>
            <td>Versión avanzada de <code>ping</code>.</td>
            <td><code>Test-Connection google.com -Count 4</code></td>
          </tr>
          <tr>
            <td><code>Get-HotFix</code></td>
            <td>Muestra actualizaciones instaladas.</td>
            <td><code>Get-HotFix</code></td>
          </tr>
          <tr>
            <td><code>Get-WmiObject Win32_OperatingSystem</code></td>
            <td>Información avanzada del sistema operativo.</td>
            <td><code>Get-WmiObject Win32_OperatingSystem</code></td>
          </tr>
          <tr>
            <td><code>Get-ChildItem Env:</code></td>
            <td>Lista las variables de entorno.</td>
            <td><code>Get-ChildItem Env:</code></td>
          </tr>
          <tr>
            <td><code>$Env:PATH</code></td>
            <td>Muestra una variable de entorno.</td>
            <td><code>$Env:PATH</code></td>
          </tr>
          <tr>
            <td><code>Clear-Host</code></td>
            <td>Limpia la consola (equivalente a <code>cls</code>).</td>
            <td><code>Clear-Host</code></td>
          </tr>
          <tr>
            <td><code>Get-EventViewer</code> <em>(nuevo en PS 7+)</em></td>
            <td>Acceso más directo al Visor de Eventos.</td>
            <td><code>Get-EventViewer -LogName Application</code></td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Titulo title="h2" id="ayuda-interactiva-y-documentación">3. Ayuda interactiva y
        documentación</Titulo>
      <Lista>
        <li>
          <Texto>En <strong>CMD</strong>:</Texto>
          <Lista>
            <li><code>help</code> → lista básica.</li>
            <li><code>&lt;comando&gt; /?</code> → manual rápido.</li>
          </Lista>
        </li>
        <li>
          <Texto>En <strong>PowerShell</strong>:</Texto>
          <Lista>
            <li><code>Update-Help</code> → descarga la ayuda más reciente (requiere
              conexión).</li>
            <li><code>Get-Help &lt;cmdlet&gt; -Detailed</code> → descripción,
              parámetros y ejemplos.</li>
            <li><code>Get-Help &lt;cmdlet&gt; -Online</code> → abre la documentación
              oficial en el navegador.</li>
          </Lista>
        </li>
      </Lista>
      <Linea />
      <Titulo title="h2" id="sugerencia-práctica">Sugerencia práctica</Titulo>
      <Texto>Para explorar PowerShell como un pro:</Texto>
      <div className="sourceCode" id="cb1">
        <pre
          className="sourceCode powershell"><code className="sourceCode powershell"><span id="cb1-1"><Enlace href="#cb1-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">Get-Command</span> <span className="op">|</span> <span className="fu">Out-GridView</span></span></code></pre>
      </div>
      <Texto>Te abre una ventana interactiva donde puedes <strong>buscar, filtrar
        y explorar</strong> todos los cmdlets disponibles.</Texto>
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
