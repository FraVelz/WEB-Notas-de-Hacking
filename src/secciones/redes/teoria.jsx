import Titulo from "./../../componentes/titulo.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Linea from "./../../componentes/linea.jsx";
import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../../componentes/estructura.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#1-base-fundamentos">1. base (fundamentos)</Enlace ></li>
      <li><Enlace href="#2-historia-de-las-redes">2. Historia de las redes</Enlace ></li>
      <li><Enlace href="#3-modelos-de-redes">3. Modelos de redes</Enlace >
        <Lista>
          <li><Enlace href="#modelo-osi-open-systems-interconnection"><strong>Modelo
            OSI (Open Systems Interconnection)</strong></Enlace ></li>
          <li><Enlace href="#modelo-tcpip"><strong>Modelo TCP/IP</strong></Enlace ></li>
        </Lista>
      </li>
      <li><Enlace href="#4-tipos-de-redes-según-su-alcance">4. Tipos de redes según
        su alcance</Enlace ></li>
      <li><Enlace href="#5-arquitectura-cliente-servidor">5. Arquitectura
        Cliente-Servidor</Enlace >
        <Lista>
          <li><Enlace href="#componentes-principales"><strong>Componentes
            principales:</strong></Enlace ></li>
          <li><Enlace href="#funcionamiento"><strong>Funcionamiento:</strong></Enlace ></li>
          <li><Enlace href="#ventajas"><strong>Ventajas:</strong></Enlace ></li>
          <li><Enlace href="#desventajas"><strong>Desventajas:</strong></Enlace ></li>
        </Lista>
      </li>
      <li><Enlace href="#6-arquitectura-de-red">6. Arquitectura de Red</Enlace >
        <Lista>
          <li><Enlace href="#tipos-comunes-de-arquitectura-de-red"><strong>Tipos
            comunes de arquitectura de red:</strong></Enlace ></li>
        </Lista>
      </li>
      <li><Enlace href="#7-protocolos-de-red">7. Protocolos de red</Enlace >
        <Lista>
          <li><Enlace href="#funciones-principales-de-los-protocolos"><strong>Funciones
            principales de los protocolos:</strong></Enlace ></li>
          <li><Enlace href="#ejemplos-de-protocolos-comunes"><strong>Ejemplos de
            protocolos comunes:</strong></Enlace ></li>
        </Lista>
      </li>
      <li><Enlace href="#8-comunicaciones-en-redes">8. Comunicaciones en Redes</Enlace >
        <Lista>
          <li><Enlace href="#tipos-de-comunicación"><strong>Tipos de
            comunicación:</strong></Enlace ></li>
          <li><Enlace href="#medios-de-transmisión"><strong>Medios de
            transmisión:</strong></Enlace ></li>
          <li><Enlace href="#procesos-clave-en-la-comunicación"><strong>Procesos clave
            en la comunicación:</strong></Enlace ></li>
        </Lista>
      </li>
      <li><Enlace href="#9-protocolos-de-aplicación">9. Protocolos de
        Aplicación</Enlace >
        <Lista>
          <li><Enlace href="#funciones-principales"><strong>Funciones
            principales:</strong></Enlace ></li>
          <li><Enlace href="#ejemplos-importantes"><strong>Ejemplos
            importantes:</strong></Enlace ></li>
        </Lista>
      </li>
      <li><Enlace href="#10-direcciones-ip">10. Direcciones IP</Enlace >
        <Lista>
          <li><Enlace href="#tipos-de-direcciones-ip"><strong>Tipos de direcciones
            IP:</strong></Enlace ></li>
          <li><Enlace href="#clases-de-direcciones-ip-ipv4"><strong>Clases de
            direcciones IP (IPv4):</strong></Enlace ></li>
          <li><Enlace href="#funciones-de-la-ip"><strong>Funciones de la
            IP:</strong></Enlace ></li>
          <li><Enlace href="#relación-con-los-protocolos-de-aplicación"><strong>Relación con
            los protocolos de aplicación:</strong></Enlace ></li>
        </Lista>
      </li>
    </Lista>
  );
}

function nameabcd({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" className="text-center">Parte Teórica (conceptos)</Titulo>

        <Linea />
        <TemarioCompleto temario={Temario} />

        <Titulo title="h2" id="base-fundamentos">1. base (fundamentos)</Titulo>
        <Texto><strong>¿Qué son las redes?</strong></Texto>
        <Lista>
          <li>Una <strong>red</strong> es un conjunto de dispositivos
            conectados entre sí que comparten información y recursos.</li>    <li>Los dispositivos dentro de una red se llaman
            <strong>nodos</strong>. Los nodos son puntos de conexión y pueden ser
            cualquier dispositivo capaz de conectarse a la red, como computadoras,
            teléfonos, impresoras o servidores.
          </li>    <li>El <strong>Internet</strong> es la red más grande del mundo,
            conectando millones de dispositivos alrededor del planeta.</li>  </Lista>
        <Texto><strong>Componentes de una red:</strong></Texto>
        <Lista>
          <li><strong>Nodo:</strong> Cualquier dispositivo conectado a la
            red.</li>    <li><strong>Medio de transmisión:</strong> Puede ser
            <strong>cableado</strong> (como cables de cobre o fibra óptica) o
            <strong>inalámbrico</strong> (como Wi-Fi o Bluetooth).
          </li>    <li><strong>Dispositivos de red:</strong> Facilitan el tráfico de
            información dentro de la red. Ejemplos incluyen
            <strong>routers</strong>, <strong>switches</strong> y <strong>puntos de
              acceso</strong>.
          </li>    <li><strong>Protocolo:</strong> Conjunto de reglas y estándares que
            permite la comunicación entre dos dispositivos, asegurando que se
            entiendan correctamente.</li>  </Lista>
        <Texto><strong>Conceptos básicos de redes:</strong></Texto>
        <Lista>
          <li><strong>Cliente:</strong> Dispositivo que solicita servicios o
            información de otro dispositivo (el servidor).</li>    <li><strong>Servidor:</strong> Dispositivo que ofrece servicios o
              información a otros dispositivos (clientes).</li>    <li><strong>IP:</strong> Dirección única que identifica a cada
                dispositivo en la red.</li>    <li><strong>Puerto:</strong> Punto de conexión dentro de un
                  dispositivo que permite la comunicación de servicios
                  específicos.</li>    <li><strong>Protocolo:</strong> Reglas que regulan cómo se envía y
                    recibe la información en la red.</li>  </Lista>
        <Texto><strong>Funciones principales:</strong></Texto>
        <Lista>
          <li>Compartir recursos.</li>
          <li>Comunicación.</li>
          <li>Almacenamiento de datos.</li>
        </Lista>

        <Linea />

        <Titulo title="h2" id="historia-de-las-redes">2. Historia de las redes</Titulo>

        <Lista>
          <li><strong>Década de 1960 – Orígenes</strong>
            <Lista>
              <li>Se crean las primeras ideas de redes para compartir información
                entre computadoras.</li>
              <li><strong>ARPANET (1969)</strong>: La primera red a gran escala,
                financiada por el Departamento de Defensa de EE. UU., conectaba
                universidades y laboratorios.</li>
              <li>Objetivo: comunicación eficiente y compartir recursos
                informáticos.</li>
            </Lista>
          </li>
        </Lista>
        <li>
          <Texto><strong>Década de 1970 – Protocolos y
            estandarización</strong></Texto>
          <Lista>
            <li>Se desarrolla <strong>TCP/IP</strong>: protocolo que permite que
              diferentes redes se comuniquen.</li>
            <li>Se crean redes locales (<strong>LANs</strong>) para conectar
              computadoras dentro de una misma institución.</li>
          </Lista>
        </li>
        <li>
          <Texto><strong>Década de 1980 – Expansión</strong></Texto>
          <Lista>
            <li>Aparición de <strong>Ethernet</strong>: tecnología que facilita la
              comunicación en redes locales.</li>
            <li>Nace <strong>Internet como red de redes</strong>, conectando
              múltiples LANs y WANs (redes de área amplia).</li>
          </Lista>
        </li>
        <li>
          <Texto><strong>Década de 1990 – Internet comercial</strong></Texto>
          <Lista>
            <li>La red se abre a fines comerciales y al público general.</li>
            <li>Surge la <strong>World Wide Web (WWW)</strong> con navegadores
              web.</li>
            <li>Popularización del correo electrónico y servicios de
              mensajería.</li>
          </Lista>
        </li>
        <li>
          <Texto><strong>Años 2000 en adelante – Redes modernas</strong></Texto>
          <Lista>
            <li>Expansión de <strong>Wi-Fi</strong> y <strong>redes móviles (3G, 4G,
              5G)</strong>.</li>
            <li>Redes sociales, streaming y servicios en la nube transforman la
              forma de comunicarse.</li>
            <li>Mayor enfoque en seguridad y privacidad.</li>
          </Lista>
        </li>
        <Linea />
        <Titulo title="h2" id="modelos-de-redes">3. Modelos de redes</Titulo>
        <Texto>Los modelos ayudan a entender cómo funciona la comunicación entre
          dispositivos:</Texto>
        <Titulo title="h3" id="modelo-osi-open-systems-interconnection"><strong>Modelo OSI
          (Open Systems Interconnection)</strong></Titulo>
        <Lista>
          <li>
            <Texto>Divide la comunicación en <strong>7 capas</strong>:</Texto>
            <Lista>
              <li><strong>Física</strong>: cables, señales eléctricas o de luz.</li>
              <li><strong>Enlace de datos</strong>: control de errores y transmisión
                entre nodos.</li>
              <li><strong>Red</strong>: direccionamiento y rutas (ej. IP).</li>
              <li><strong>Transporte</strong>: garantiza entrega correcta de datos
                (ej. TCP).</li>
              <li><strong>Sesión</strong>: mantiene la conexión entre
                aplicaciones.</li>
              <li><strong>Presentación</strong>: traduce datos (ej. cifrado,
                formato).</li>
              <li><strong>Aplicación</strong>: programas que usan la red (ej.
                navegador, correo).</li>
            </Lista>
          </li>
        </Lista>
        <Titulo title="h3" id="modelo-tcpip"><strong>Modelo TCP/IP</strong></Titulo>
        <Lista>
          <li>
            Más práctico y usado en Internet.</li>

          <li>Tiene <strong>4 capas</strong>:</li>

          <Lista>
            <li><strong>Acceso a red</strong>: transmisión física de datos.</li>
            <li><strong>Internet</strong>: direccionamiento y enrutamiento
              (IP).</li>
            <li><strong>Transporte</strong>: comunicación confiable (TCP) o rápida
              (UDP).</li>
            <li><strong>Aplicación</strong>: servicios de red como HTTP, FTP,
              SMTP.</li>
          </Lista>
        </Lista >

        <Linea />
        <Titulo title="h2" id="tipos-de-redes-según-su-alcance">4. Tipos de redes según su
          alcance</Titulo>
        <Lista>
          <li><strong>LAN (Local Area Network)</strong>: red local, p. ej., en una
            casa o escuela.</li>
          <li><strong>WAN (Wide Area Network)</strong>: red de largo alcance,
            p. ej., Internet.</li>
          <li><strong>MAN (Metropolitan Area Network)</strong>: cubre una
            ciudad.</li>
          <li><strong>PAN (Personal Area Network)</strong>: dispositivos cercanos,
            p. ej., Bluetooth.</li>
        </Lista>
        <Linea />
        <Titulo title="h2" id="arquitectura-cliente-servidor">5. Arquitectura
          Cliente-Servidor</Titulo>
        <Texto>La <strong>arquitectura cliente-servidor</strong> es un modelo de
          diseño de sistemas en el que las tareas se distribuyen entre dos tipos
          de entidades: <strong>clientes</strong> y
          <strong>servidores</strong>.
        </Texto>
        <Titulo title="h3" id="componentes-principales"><strong>Componentes
          principales:</strong></Titulo>
        <Lista>
          <li>
            <strong>Servidor:</strong> Es un equipo o programa que
            <strong>ofrece servicios</strong> o recursos a otros dispositivos.
            Ejemplo: un servidor web que envía páginas HTML.
          </li>    <li><strong>Cliente:</strong> Es un equipo o programa que
            <strong>solicita servicios</strong> al servidor. Ejemplo: un navegador
            web que solicita páginas a un servidor.
          </li>    <li><strong>Red:</strong> Medio que permite la comunicación entre
            cliente y servidor. Puede ser cableada (Ethernet) o inalámbrica
            (Wi-Fi).</li>  </Lista>
        <Titulo title="h3" id="funcionamiento"><strong>Funcionamiento:</strong></Titulo>
        <Lista>
          <li>El cliente envía una <strong>solicitud</strong> al servidor.</li>
          <li>El servidor procesa la solicitud.</li>
          <li>El servidor envía una <strong>respuesta</strong> al cliente.</li>
        </Lista>
        <blockquote>
          <Texto>Ejemplo práctico: Cuando abres YouTube:</Texto>
          <Lista>
            <li>Tu navegador (cliente) pide un video.</li>
            <li>Los servidores de YouTube lo envían.</li>
            <li>Tu navegador reproduce el video.</li>
          </Lista>
        </blockquote>
        <Titulo title="h3" id="ventajas"><strong>Ventajas:</strong></Titulo>
        <Lista>
          <li>Centralización de datos y control.</li>
          <li>Facilita la administración y seguridad.</li>
          <li>Escalabilidad: se pueden añadir más clientes sin cambiar el
            servidor.</li>
        </Lista>
        <Titulo title="h3" id="desventajas"><strong>Desventajas:</strong></Titulo>
        <Lista>
          <li>Si el servidor falla, los clientes quedan sin servicio.</li>
          <li>Requiere buena infraestructura para manejar muchos clientes.</li>
        </Lista>
        <Linea />
        <Titulo title="h2" id="arquitectura-de-red">6. Arquitectura de Red</Titulo>
        <Texto>La <strong>arquitectura de red</strong> describe cómo los
          <strong>dispositivos y servicios están organizados y conectados</strong>
          para comunicarse. La arquitectura cliente-servidor es un tipo de
          arquitectura de red, pero existen otros modelos, como
          <strong>peer-to-peer (P2P)</strong>.
        </Texto>
        <Titulo title="h3" id="tipos-comunes-de-arquitectura-de-red"><strong>Tipos comunes de
          arquitectura de red:</strong></Titulo>
        <Lista>
          <li>
            <Texto><strong>Cliente-Servidor (como vimos):</strong></Texto>
            <Lista>
              <li>Un servidor central da servicios a múltiples clientes.</li>
            </Lista>
          </li>
          <li>
            <Texto><strong>Peer-to-Peer (P2P):</strong></Texto>
            <Lista>
              <li>Todos los dispositivos son iguales, pueden <strong>servir y pedir
                recursos</strong>.</li>
              <li>Ejemplo: aplicaciones de torrents.</li>
            </Lista>
          </li>
          <li>
            <Texto><strong>Red en estrella:</strong></Texto>
            <Lista>
              <li>Todos los dispositivos están conectados a un <strong>hub o switch
                central</strong>.</li>
              <li>Muy usado en redes locales (LAN).</li>
            </Lista>
          </li>
          <li>
            <Texto><strong>Red en malla:</strong></Texto>
            <Lista>
              <li>Cada dispositivo está conectado a varios otros dispositivos.</li>
              <li>Alta confiabilidad y redundancia.</li>
            </Lista>
          </li>
        </Lista>
        <Linea />
        <Titulo title="h2" id="protocolos-de-red">7. Protocolos de red</Titulo>
        <Texto>Un <strong>protocolo de red</strong> es un conjunto de <strong>reglas
          y estándares</strong> que permiten que los dispositivos se comuniquen
          correctamente a través de una red.</Texto>
        <Titulo title="h3" id="funciones-principales-de-los-protocolos"><strong>Funciones
          principales de los protocolos:</strong></Titulo>
        <Lista>
          <li>Determinan <strong>cómo se envían los datos</strong>.</li>
          <li>Definen <strong>cómo se reciben y verifican</strong>.</li>
          <li>Aseguran que <strong>dispositivos distintos puedan
            entenderse</strong>.</li>
        </Lista>
        <Titulo title="h3" id="ejemplos-de-protocolos-comunes"><strong>Ejemplos de protocolos
          comunes:</strong></Titulo>
        <table>
          <colgroup>
            <col style="width: 31%" />
            <col style="width: 41%" />
            <col style="width: 27%" />
          </colgroup>
          <thead>
            <tr>
              <th>Protocolo</th>
              <th>Función principal</th>
              <th>Ejemplo de uso</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>TCP (Transmission Control Protocol)</strong></td>
              <td>Asegura la entrega de datos sin errores y en orden</td>
              <td>Navegación web, correos electrónicos</td>
            </tr>
            <tr>
              <td><strong>IP (Internet Protocol)</strong></td>
              <td>Direcciona los datos para que lleguen al dispositivo correcto</td>
              <td>Internet, redes privadas</td>
            </tr>
            <tr>
              <td><strong>HTTP / HTTPS</strong></td>
              <td>Transfiere páginas web</td>
              <td>Navegadores web, sitios web</td>
            </tr>
            <tr>
              <td><strong>FTP (File Transfer Protocol)</strong></td>
              <td>Transfiere archivos entre dispositivos</td>
              <td>Subida y descarga de archivos</td>
            </tr>
            <tr>
              <td><strong>SMTP / IMAP / POP3</strong></td>
              <td>Envía y recibe correos electrónicos</td>
              <td>Gmail, Outlook</td>
            </tr>
            <tr>
              <td><strong>DNS (Domain Name System)</strong></td>
              <td>Convierte nombres de dominio en direcciones IP</td>
              <td>Acceder a “google.com” desde el navegador</td>
            </tr>
            <tr>
              <td><strong>DHCP (Dynamic Host Configuration Protocol)</strong></td>
              <td>Asigna direcciones IP automáticamente</td>
              <td>Redes domésticas y corporativas</td>
            </tr>
          </tbody>
        </table>
        <blockquote>
          <Texto>Nota: Muchos protocolos trabajan <strong>juntos en capas</strong>
            según el modelo OSI o TCP/IP.</Texto>
        </blockquote>
        <Linea />
        <Titulo title="h2" id="comunicaciones-en-redes">8. Comunicaciones en Redes</Titulo>
        <Texto>La <strong>comunicación en redes</strong> es el proceso mediante el
          cual los <strong>dispositivos intercambian información</strong>
          siguiendo protocolos.</Texto>
        <Titulo title="h3" id="tipos-de-comunicación"><strong>Tipos de
          comunicación:</strong></Titulo>
        <Lista>
          <li>
            <Texto><strong>Unicast:</strong></Texto>
            <Lista>
              <li>Comunicación de un dispositivo a otro específico.</li>
              <li>Ejemplo: enviar un mensaje privado.</li>
            </Lista>
          </li>
          <li>
            <Texto><strong>Broadcast:</strong></Texto>
            <Lista>
              <li>Comunicación de un dispositivo a <strong>todos</strong> los
                dispositivos de la red.</li>
              <li>Ejemplo: anuncios dentro de una red local.</li>
            </Lista>
          </li>
          <li>
            <Texto><strong>Multicast:</strong></Texto>
            <Lista>
              <li>Comunicación a un <strong>grupo específico</strong> de
                dispositivos.</li>
              <li>Ejemplo: transmisión de video en vivo a varios usuarios.</li>
            </Lista>
          </li>
        </Lista>
        <Titulo title="h3" id="medios-de-transmisión"><strong>Medios de
          transmisión:</strong></Titulo>
        <Lista>
          <li><strong>Alámbricos:</strong> Cable Ethernet, fibra óptica.</li>
          <li><strong>Inalámbricos:</strong> Wi-Fi, Bluetooth, redes móviles
            (4G/5G).</li>
        </Lista>
        <Titulo title="h3" id="procesos-clave-en-la-comunicación"><strong>Procesos clave en la
          comunicación:</strong></Titulo>
        <Lista>
          <li><strong>Codificación y empaquetado de datos</strong> (se forman los
            paquetes de información).</li>
          <li><strong>Transmisión</strong> por el medio (cable o aire).</li>
          <li><strong>Recepción y verificación</strong> de errores.</li>
          <li><strong>Entrega</strong> al dispositivo o aplicación correcta.</li>
        </Lista>
        <Linea />
        <Titulo title="h2" id="protocolos-de-aplicación">9. Protocolos de Aplicación</Titulo>
        <Texto>Los <strong>protocolos de aplicación</strong> son reglas que permiten
          a los <strong>programas o aplicaciones</strong> comunicarse a través de
          la red. Trabajan en la <strong>capa más alta</strong> de los modelos de
          red (OSI o TCP/IP).</Texto>
        <Titulo title="h3" id="funciones-principales"><strong>Funciones
          principales:</strong></Titulo>
        <Lista>
          <li>Definen cómo las aplicaciones intercambian datos.</li>
          <li>Permiten que diferentes programas se entiendan aunque sean de
            fabricantes distintos.</li>
          <li>Usan protocolos de transporte como <strong>TCP o UDP</strong> para
            enviar los datos.</li>
        </Lista>
        <Titulo title="h3" id="ejemplos-importantes"><strong>Ejemplos
          importantes:</strong></Titulo>
        <table>
          <colgroup>
            <col style="width: 20%" />
            <col style="width: 40%" />
            <col style="width: 39%" />
          </colgroup>
          <thead>
            <tr>
              <th>Protocolo</th>
              <th>Función</th>
              <th>Ejemplo de uso</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>HTTP / HTTPS</strong></td>
              <td>Transferencia de páginas web</td>
              <td>Navegadores, sitios web</td>
            </tr>
            <tr>
              <td><strong>FTP / SFTP</strong></td>
              <td>Transferencia de archivos</td>
              <td>Subida y descarga de archivos</td>
            </tr>
            <tr>
              <td><strong>SMTP</strong></td>
              <td>Envío de correo electrónico</td>
              <td>Servidores de correo</td>
            </tr>
            <tr>
              <td><strong>IMAP / POP3</strong></td>
              <td>Recepción de correo</td>
              <td>Clientes de correo como Outlook</td>
            </tr>
            <tr>
              <td><strong>DNS</strong></td>
              <td>Resolución de nombres de dominio</td>
              <td>Convertir “google.com” en IP</td>
            </tr>
            <tr>
              <td><strong>Telnet / SSH</strong></td>
              <td>Acceso remoto a sistemas</td>
              <td>Administración de servidores</td>
            </tr>
          </tbody>
        </table>
        <blockquote>
          <Texto>Nota: Cada protocolo de aplicación funciona <strong>encima de TCP o
            UDP</strong> para garantizar que los datos lleguen correctamente.</Texto>
        </blockquote>
        <Linea />
        <Titulo title="h2" id="direcciones-ip">10. Direcciones IP</Titulo>
        <Texto>Una <strong>dirección IP (Internet Protocol)</strong> es un
          <strong>identificador único</strong> que permite que un dispositivo se
          comunique en una red. Funciona como una <strong>dirección
            postal</strong> para enviar información.
        </Texto>
        <Titulo title="h3" id="tipos-de-direcciones-ip"><strong>Tipos de direcciones
          IP:</strong></Titulo>
        <Lista>
          <li>
            <Texto><strong>IPv4:</strong></Texto>
            <Lista>
              <li>Formato: <code>192.168.1.10</code> (números de 0 a 255).</li>
              <li>Ejemplo: <code>172.16.0.5</code></li>
              <li>Tiene espacio limitado (~4.000 millones de direcciones).</li>
            </Lista>
          </li>
          <li>
            <Texto><strong>IPv6:</strong></Texto>
            <Lista>
              <li>Formato: <code>2001:0db8:85a3:0000:0000:8a2e:0370:7334</code></li>
              <li>Diseñada para soportar millones de dispositivos más.</li>
            </Lista>
          </li>
        </Lista>
        <Titulo title="h3" id="clases-de-direcciones-ip-ipv4"><strong>Clases de direcciones IP
          (IPv4):</strong></Titulo>
        <Lista>
          <li><strong>Públicas:</strong> Únicas en Internet, accesibles desde
            cualquier lugar.</li>
          <li><strong>Privadas:</strong> Usadas en redes locales, no accesibles
            directamente desde Internet. Ej: <code>192.168.0.0/16</code></li>
        </Lista>
        <Titulo title="h3" id="funciones-de-la-ip"><strong>Funciones de la IP:</strong></Titulo>
        <Lista>
          <li>Identificar dispositivos en la red.</li>
          <li>Dirigir los paquetes de datos hacia el destino correcto.</li>
        </Lista>
        <Titulo title="h3" id="relación-con-los-protocolos-de-aplicación"><strong>Relación con
          los protocolos de aplicación:</strong></Titulo>
        <Lista>
          <li>Los <strong>protocolos de aplicación</strong> usan la
            <strong>IP</strong> para localizar a los dispositivos y el
            <strong>puerto</strong> para identificar la aplicación dentro de ese
            dispositivo.
          </li>
        </Lista>
        <blockquote>
          <Texto>Ejemplo práctico:</Texto>
          <Lista>
            <li>
              <Texto>Quiero abrir un sitio web:</Texto>
              <Lista>
                <li>Mi navegador usa <strong>HTTP/HTTPS</strong> (protocolo de
                  aplicación).</li>
                <li>Se conecta a la <strong>IP del servidor web</strong> (dirección
                  IP).</li>
                <li>Los datos llegan gracias a TCP/IP.</li>
              </Lista>
            </li>
          </Lista>
        </blockquote>
      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}
export default nameabcd;
