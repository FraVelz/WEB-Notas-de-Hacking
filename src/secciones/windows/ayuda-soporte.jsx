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
      <Tabla>
  <TablaCabezera headers={["Comando", "Descripción", "Ejemplo"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>help</TablaUnica>
      <TablaUnica>Muestra todos los comandos disponibles de CMD.</TablaUnica>
      <TablaUnica>help</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>help &lt;comando&gt;</TablaUnica>
      <TablaUnica>Muestra información sobre un comando específico.</TablaUnica>
      <TablaUnica>help dir</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>&lt;comando&gt; /?</TablaUnica>
      <TablaUnica>Muestra la ayuda de un comando. Es equivalente a
              help &lt;comando&gt;.</TablaUnica>
      <TablaUnica>ipconfig /?</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>systeminfo</TablaUnica>
      <TablaUnica>Muestra información detallada del sistema (versión, RAM, BIOS, red,
              etc.).</TablaUnica>
      <TablaUnica>systeminfo</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>hostname</TablaUnica>
      <TablaUnica>Muestra el nombre del equipo.</TablaUnica>
      <TablaUnica>hostname</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>ver</TablaUnica>
      <TablaUnica>Muestra la versión de Windows.</TablaUnica>
      <TablaUnica>ver</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>set</TablaUnica>
      <TablaUnica>Lista todas las variables de entorno.</TablaUnica>
      <TablaUnica>set</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>echo %VARIABLE%</TablaUnica>
      <TablaUnica>Muestra el valor de una variable de entorno.</TablaUnica>
      <TablaUnica>echo %PATH%</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>driverquery</TablaUnica>
      <TablaUnica>Lista los controladores instalados.</TablaUnica>
      <TablaUnica>driverquery /v</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>tasklist</TablaUnica>
      <TablaUnica>Muestra los procesos en ejecución.</TablaUnica>
      <TablaUnica>tasklist</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>taskkill</TablaUnica>
      <TablaUnica>Cierra un proceso por nombre o PID.</TablaUnica>
      <TablaUnica>taskkill /IM notepad.exe /F</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>sfc /scannow</TablaUnica>
      <TablaUnica>Escanea y repara archivos del sistema dañados.</TablaUnica>
      <TablaUnica>sfc /scannow</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>chkdsk</TablaUnica>
      <TablaUnica>Verifica y repara errores en el disco.</TablaUnica>
      <TablaUnica>chkdsk C: /f</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>ipconfig /all</TablaUnica>
      <TablaUnica>Muestra toda la información de red.</TablaUnica>
      <TablaUnica>ipconfig /all</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>ping</TablaUnica>
      <TablaUnica>Comprueba la conectividad con un host.</TablaUnica>
      <TablaUnica>ping google.com</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>tracert</TablaUnica>
      <TablaUnica>Muestra la ruta que sigue un paquete hasta un destino.</TablaUnica>
      <TablaUnica>tracert google.com</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>netstat</TablaUnica>
      <TablaUnica>Muestra conexiones de red activas.</TablaUnica>
      <TablaUnica>netstat -an</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>systemreset</TablaUnica>
      <TablaUnica>Abre el asistente para restablecer Windows.</TablaUnica>
      <TablaUnica>systemreset</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
      <Linea />
      <Titulo title="h2" id="cmdlets-de-ayuda-y-soporte-en-powershell">2. Cmdlets de ayuda y
        soporte en PowerShell</Titulo>
      <Tabla>
  <TablaCabezera headers={["Cmdlet", "Descripción", "Ejemplo"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>Get-Help</TablaUnica>
      <TablaUnica>Muestra ayuda general o detallada sobre un cmdlet.</TablaUnica>
      <TablaUnica>Get-Help Get-Process</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Get-Command</TablaUnica>
      <TablaUnica>Lista todos los cmdlets disponibles.</TablaUnica>
      <TablaUnica>Get-Command</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Get-Alias</TablaUnica>
      <TablaUnica>Muestra los alias (atajos) de comandos.</TablaUnica>
      <TablaUnica>Get-Alias</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Get-Process</TablaUnica>
      <TablaUnica>Lista los procesos activos.</TablaUnica>
      <TablaUnica>Get-Process</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Stop-Process</TablaUnica>
      <TablaUnica>Termina un proceso.</TablaUnica>
      <TablaUnica>Stop-Process -Name notepad -Force</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Get-Service</TablaUnica>
      <TablaUnica>Lista los servicios del sistema.</TablaUnica>
      <TablaUnica>Get-Service</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Restart-Service</TablaUnica>
      <TablaUnica>Reinicia un servicio.</TablaUnica>
      <TablaUnica>Restart-Service -Name Spooler</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Get-EventLog</TablaUnica>
      <TablaUnica>Muestra eventos del sistema, aplicación o seguridad.</TablaUnica>
      <TablaUnica>Get-EventLog -LogName System -Newest 10</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Get-ComputerInfo</TablaUnica>
      <TablaUnica>Información detallada del sistema (hardware, BIOS, red, etc.).</TablaUnica>
      <TablaUnica>Get-ComputerInfo</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Test-Connection</TablaUnica>
      <TablaUnica>Versión avanzada de ping.</TablaUnica>
      <TablaUnica>Test-Connection google.com -Count 4</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Get-HotFix</TablaUnica>
      <TablaUnica>Muestra actualizaciones instaladas.</TablaUnica>
      <TablaUnica>Get-HotFix</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Get-WmiObject Win32_OperatingSystem</TablaUnica>
      <TablaUnica>Información avanzada del sistema operativo.</TablaUnica>
      <TablaUnica>Get-WmiObject Win32_OperatingSystem</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Get-ChildItem Env:</TablaUnica>
      <TablaUnica>Lista las variables de entorno.</TablaUnica>
      <TablaUnica>Get-ChildItem Env:</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>$Env:PATH</TablaUnica>
      <TablaUnica>Muestra una variable de entorno.</TablaUnica>
      <TablaUnica>$Env:PATH</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Clear-Host</TablaUnica>
      <TablaUnica>Limpia la consola (equivalente a cls).</TablaUnica>
      <TablaUnica>Clear-Host</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Get-EventViewer <em>(nuevo en PS 7+)</em></TablaUnica>
      <TablaUnica>Acceso más directo al Visor de Eventos.</TablaUnica>
      <TablaUnica>Get-EventViewer -LogName Application</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
      <Linea />
      <Titulo title="h2" id="ayuda-interactiva-y-documentación">3. Ayuda interactiva y
        documentación</Titulo>
      <Lista>
        <li>
          <Texto>En <strong>CMD</strong>:</Texto>
          <Lista>
            <li>help → lista básica.</li>
            <li>&lt;comando&gt; /? → manual rápido.</li>
          </Lista>
        </li>
        <li>
          <Texto>En <strong>PowerShell</strong>:</Texto>
          <Lista>
            <li>Update-Help → descarga la ayuda más reciente (requiere
              conexión).</li>
            <li>Get-Help &lt;cmdlet&gt; -Detailed → descripción,
              parámetros y ejemplos.</li>
            <li>Get-Help &lt;cmdlet&gt; -Online → abre la documentación
              oficial en el navegador.</li>
          </Lista>
        </li>
      </Lista>
      <Linea />
      <Titulo title="h2" id="sugerencia-práctica">Sugerencia práctica</Titulo>
      <Texto>Para explorar PowerShell como un pro:</Texto>
      <CodeBlock code={`Get-Command | Out-GridView`} language="bash" />
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
