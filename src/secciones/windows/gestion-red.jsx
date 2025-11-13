import { Tabla, TablaCabezera, TablaFila, TablaUnica } from "../../componentes/moleculas/tabla.jsx";
import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../../componentes/organismos/estructura.jsx";

import Enlace from "../../componentes/atomos/enlace.jsx";
import Linea from "../../componentes/atomos/linea.jsx";
import Lista from "../../componentes/moleculas/lista.jsx";
import Texto from "./../../componentes/atomos/texto.jsx";
import Titulo from "../../componentes/moleculas/titulo.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#cmd--comandos-de-red">CMD — Comandos de Red</Enlace ></li>
      <li><Enlace href="#powershell--cmdlets-de-red">PowerShell — Cmdlets de
        Red</Enlace ></li>
    </Lista>
  );
}


function nameabcd({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" id="comandos-y-cmdlets-de-gestión-de-red">Comandos y cmdlets de
          gestión de red</Titulo>
        <Linea />

        <TemarioCompleto temario={Temario} />

        <Titulo title="h2" id="cmd-comandos-de-red">CMD — Comandos de Red</Titulo>
        <Tabla>
          <TablaCabezera headers={["Comando", "Descripción"]} />

          <tbody>
            <TablaFila>
              <TablaUnica>ipconfig</TablaUnica>
              <TablaUnica>Muestra la configuración IP de los adaptadores de red.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>ipconfig /all</TablaUnica>
              <TablaUnica>Muestra información completa, incluyendo direcciones MAC y DNS.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>ipconfig /release</TablaUnica>
              <TablaUnica>Libera la dirección IP obtenida por DHCP.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>ipconfig /renew</TablaUnica>
              <TablaUnica>Solicita una nueva IP al servidor DHCP.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>ping &lt;host&gt;</TablaUnica>
              <TablaUnica>Comprueba la conectividad con otro host o dirección IP.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>tracert &lt;host&gt;</TablaUnica>
              <TablaUnica>Rastrea la ruta que siguen los paquetes hasta un destino.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>nslookup &lt;dominio&gt;</TablaUnica>
              <TablaUnica>Consulta los registros DNS de un dominio.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>netstat</TablaUnica>
              <TablaUnica>Muestra las conexiones de red activas y puertos abiertos.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>netstat -ano</TablaUnica>
              <TablaUnica>Muestra los puertos y procesos asociados (PID).</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>netsh</TablaUnica>
              <TablaUnica>Permite configurar parámetros de red (IP, firewall, Wi-Fi,
                etc.).</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>netsh wlan show profiles</TablaUnica>
              <TablaUnica>Muestra los perfiles de redes Wi-Fi guardadas.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>netsh wlan show profile &lt;nombre&gt; key=clear</TablaUnica>
              <TablaUnica>Muestra la contraseña guardada de una red Wi-Fi.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>route print</TablaUnica>
              <TablaUnica>Muestra la tabla de enrutamiento de Windows.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>arp -a</TablaUnica>
              <TablaUnica>Muestra la tabla ARP (asociación IP–MAC).</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>getmac</TablaUnica>
              <TablaUnica>Muestra las direcciones MAC de los adaptadores de red.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>net use</TablaUnica>
              <TablaUnica>Conecta o muestra conexiones a recursos compartidos.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>net share</TablaUnica>
              <TablaUnica>Muestra o administra carpetas compartidas.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>net view</TablaUnica>
              <TablaUnica>Muestra los equipos disponibles en la red local.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>telnet &lt;host&gt; &lt;puerto&gt;</TablaUnica>
              <TablaUnica>Comprueba sí un puerto remoto está abierto (sí Telnet está
                habilitado).</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>
        <Linea />
        <Titulo title="h2" id="powershell-cmdlets-de-red">PowerShell — Cmdlets de Red</Titulo>
        <Tabla>
          <TablaCabezera headers={["Cmdlet", "Descripción"]} />

          <tbody>
            <TablaFila>
              <TablaUnica>Get-NetIPAddress</TablaUnica>
              <TablaUnica>Muestra las direcciones IP configuradas.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>New-NetIPAddress</TablaUnica>
              <TablaUnica>Asigna una nueva dirección IP manualmente.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Remove-NetIPAddress</TablaUnica>
              <TablaUnica>Elimina una dirección IP configurada.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Get-NetAdapter</TablaUnica>
              <TablaUnica>Muestra los adaptadores de red y su estado.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Enable-NetAdapter /
                Disable-NetAdapter</TablaUnica>
              <TablaUnica>Activa o desactiva un adaptador de red.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Get-NetIPConfiguration</TablaUnica>
              <TablaUnica>Muestra información IP y DNS más detallada.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Get-NetRoute</TablaUnica>
              <TablaUnica>Muestra la tabla de rutas IP.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>New-NetRoute</TablaUnica>
              <TablaUnica>Crea una nueva ruta estática.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Get-DnsClientServerAddress</TablaUnica>
              <TablaUnica>Muestra las direcciones de servidores DNS configuradas.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Set-DnsClientServerAddress</TablaUnica>
              <TablaUnica>Cambia los servidores DNS de un adaptador.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Test-Connection &lt;host&gt;</TablaUnica>
              <TablaUnica>Equivalente avanzado de ping, con más opciones.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Resolve-DnsName &lt;dominio&gt;</TablaUnica>
              <TablaUnica>Consulta DNS (reemplazo de nslookup).</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Get-NetTCPConnection</TablaUnica>
              <TablaUnica>Muestra las conexiones TCP activas (similar a
                netstat).</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Get-NetNeighbor</TablaUnica>
              <TablaUnica>Muestra la tabla ARP (similar a arp -a).</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Get-NetFirewallRule</TablaUnica>
              <TablaUnica>Lista las reglas activas del Firewall de Windows.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>New-NetFirewallRule</TablaUnica>
              <TablaUnica>Crea una nueva regla de firewall.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Set-NetFirewallRule</TablaUnica>
              <TablaUnica>Modifica una regla existente del firewall.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Remove-NetFirewallRule</TablaUnica>
              <TablaUnica>Elimina una regla del firewall.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Get-NetAdapterStatistics</TablaUnica>
              <TablaUnica>Muestra estadísticas de tráfico de red por adaptador.</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>
      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}

export default nameabcd;
