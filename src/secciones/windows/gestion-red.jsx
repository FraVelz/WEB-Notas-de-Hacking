import Titulo from "./../../componentes/titulo.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Linea from "./../../componentes/linea.jsx";
import Enlace from "../../componentes/enlace.jsx";

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="comandos-y-cmdlets-de-gestión-de-red">Comandos y cmdlets de
        gestión de red</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><Enlace href="#comandos-y-cmdlets-de-gestión-de-red">Comandos y cmdlets
          de gestión de red</Enlace >
          <Lista>
            <li><Enlace href="#temario">Temario</Enlace ></li>
            <li><Enlace href="#cmd--comandos-de-red">CMD — Comandos de Red</Enlace ></li>
            <li><Enlace href="#powershell--cmdlets-de-red">PowerShell — Cmdlets de
              Red</Enlace ></li>
          </Lista>
        </li>
      </Lista>
      <Texto><Enlace href="./../readme.md#3-windows">Regresar a la guía
        principal</Enlace ></Texto>
      <Linea />
      <Titulo title="h2" id="cmd-comandos-de-red">CMD — Comandos de Red</Titulo>
      <table>
        <thead>
          <tr>
            <th>Comando</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>ipconfig</code></td>
            <td>Muestra la configuración IP de los adaptadores de red.</td>
          </tr>
          <tr>
            <td><code>ipconfig /all</code></td>
            <td>Muestra información completa, incluyendo direcciones MAC y DNS.</td>
          </tr>
          <tr>
            <td><code>ipconfig /release</code></td>
            <td>Libera la dirección IP obtenida por DHCP.</td>
          </tr>
          <tr>
            <td><code>ipconfig /renew</code></td>
            <td>Solicita una nueva IP al servidor DHCP.</td>
          </tr>
          <tr>
            <td><code>ping &lt;host&gt;</code></td>
            <td>Comprueba la conectividad con otro host o dirección IP.</td>
          </tr>
          <tr>
            <td><code>tracert &lt;host&gt;</code></td>
            <td>Rastrea la ruta que siguen los paquetes hasta un destino.</td>
          </tr>
          <tr>
            <td><code>nslookup &lt;dominio&gt;</code></td>
            <td>Consulta los registros DNS de un dominio.</td>
          </tr>
          <tr>
            <td><code>netstat</code></td>
            <td>Muestra las conexiones de red activas y puertos abiertos.</td>
          </tr>
          <tr>
            <td><code>netstat -ano</code></td>
            <td>Muestra los puertos y procesos asociados (PID).</td>
          </tr>
          <tr>
            <td><code>netsh</code></td>
            <td>Permite configurar parámetros de red (IP, firewall, Wi-Fi,
              etc.).</td>
          </tr>
          <tr>
            <td><code>netsh wlan show profiles</code></td>
            <td>Muestra los perfiles de redes Wi-Fi guardadas.</td>
          </tr>
          <tr>
            <td><code>netsh wlan show profile &lt;nombre&gt; key=clear</code></td>
            <td>Muestra la contraseña guardada de una red Wi-Fi.</td>
          </tr>
          <tr>
            <td><code>route print</code></td>
            <td>Muestra la tabla de enrutamiento de Windows.</td>
          </tr>
          <tr>
            <td><code>arp -a</code></td>
            <td>Muestra la tabla ARP (asociación IP–MAC).</td>
          </tr>
          <tr>
            <td><code>getmac</code></td>
            <td>Muestra las direcciones MAC de los adaptadores de red.</td>
          </tr>
          <tr>
            <td><code>net use</code></td>
            <td>Conecta o muestra conexiones a recursos compartidos.</td>
          </tr>
          <tr>
            <td><code>net share</code></td>
            <td>Muestra o administra carpetas compartidas.</td>
          </tr>
          <tr>
            <td><code>net view</code></td>
            <td>Muestra los equipos disponibles en la red local.</td>
          </tr>
          <tr>
            <td><code>telnet &lt;host&gt; &lt;puerto&gt;</code></td>
            <td>Comprueba si un puerto remoto está abierto (si Telnet está
              habilitado).</td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Titulo title="h2" id="powershell-cmdlets-de-red">PowerShell — Cmdlets de Red</Titulo>
      <table>
        <thead>
          <tr>
            <th>Cmdlet</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>Get-NetIPAddress</code></td>
            <td>Muestra las direcciones IP configuradas.</td>
          </tr>
          <tr>
            <td><code>New-NetIPAddress</code></td>
            <td>Asigna una nueva dirección IP manualmente.</td>
          </tr>
          <tr>
            <td><code>Remove-NetIPAddress</code></td>
            <td>Elimina una dirección IP configurada.</td>
          </tr>
          <tr>
            <td><code>Get-NetAdapter</code></td>
            <td>Muestra los adaptadores de red y su estado.</td>
          </tr>
          <tr>
            <td><code>Enable-NetAdapter</code> /
              <code>Disable-NetAdapter</code>
            </td>
            <td>Activa o desactiva un adaptador de red.</td>
          </tr>
          <tr>
            <td><code>Get-NetIPConfiguration</code></td>
            <td>Muestra información IP y DNS más detallada.</td>
          </tr>
          <tr>
            <td><code>Get-NetRoute</code></td>
            <td>Muestra la tabla de rutas IP.</td>
          </tr>
          <tr>
            <td><code>New-NetRoute</code></td>
            <td>Crea una nueva ruta estática.</td>
          </tr>
          <tr>
            <td><code>Get-DnsClientServerAddress</code></td>
            <td>Muestra las direcciones de servidores DNS configuradas.</td>
          </tr>
          <tr>
            <td><code>Set-DnsClientServerAddress</code></td>
            <td>Cambia los servidores DNS de un adaptador.</td>
          </tr>
          <tr>
            <td><code>Test-Connection &lt;host&gt;</code></td>
            <td>Equivalente avanzado de <code>ping</code>, con más opciones.</td>
          </tr>
          <tr>
            <td><code>Resolve-DnsName &lt;dominio&gt;</code></td>
            <td>Consulta DNS (reemplazo de <code>nslookup</code>).</td>
          </tr>
          <tr>
            <td><code>Get-NetTCPConnection</code></td>
            <td>Muestra las conexiones TCP activas (similar a
              <code>netstat</code>).
            </td>
          </tr>
          <tr>
            <td><code>Get-NetNeighbor</code></td>
            <td>Muestra la tabla ARP (similar a <code>arp -a</code>).</td>
          </tr>
          <tr>
            <td><code>Get-NetFirewallRule</code></td>
            <td>Lista las reglas activas del Firewall de Windows.</td>
          </tr>
          <tr>
            <td><code>New-NetFirewallRule</code></td>
            <td>Crea una nueva regla de firewall.</td>
          </tr>
          <tr>
            <td><code>Set-NetFirewallRule</code></td>
            <td>Modifica una regla existente del firewall.</td>
          </tr>
          <tr>
            <td><code>Remove-NetFirewallRule</code></td>
            <td>Elimina una regla del firewall.</td>
          </tr>
          <tr>
            <td><code>Get-NetAdapterStatistics</code></td>
            <td>Muestra estadísticas de tráfico de red por adaptador.</td>
          </tr>
        </tbody>
      </table>
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
