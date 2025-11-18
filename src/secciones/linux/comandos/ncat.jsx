import Enlace from "../../../componentes/atomos/enlace.jsx";
import Linea from "../../../componentes/atomos/linea.jsx";
import Lista from "../../../componentes/moleculas/lista.jsx";
import Texto from "../../../componentes/atomos/texto.jsx";
import Titulo from "../../../componentes/moleculas/titulo.jsx";
import Codigo from "../../../componentes/moleculas/codigo.jsx";
import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../../../componentes/organismos/estructura.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#qué-hace-ncat">¿Qué hace ncat?</Enlace ></li>
      <li><Enlace href="#usos-típicos">Usos típicos</Enlace ></li>
      <li><Enlace href="#opciones-comunes-útiles-y-seguras">Opciones comunes
        (útiles y seguras)</Enlace ></li>
      <li><Enlace href="#ejemplos-prácticos">Ejemplos prácticos</Enlace >
        <Lista>
          <li><Enlace href="#cliente-simple-tcp">Cliente simple (TCP)</Enlace ></li>
          <li><Enlace href="#servidor-que-acepta-una-conexión">Servidor que acepta una
            conexión</Enlace ></li>
          <li><Enlace href="#servidor-que-acepta-múltiples-conexiones-keep-open">Servidor que
            acepta múltiples conexiones (keep-open)</Enlace ></li>
          <li><Enlace href="#udp-cliente-y-servidor">UDP (cliente y servidor)</Enlace ></li>
          <li><Enlace href="#transferir-archivo-cliente---servidor">Transferir archivo
            (cliente -&gt; servidor)</Enlace ></li>
          <li><Enlace href="#conexión-cifrada-ssltls-cliente">Conexión cifrada SSL/TLS
            (cliente)</Enlace ></li>
          <li><Enlace href="#usar-proxy-socks5">Usar proxy SOCKS5</Enlace ></li>
          <li><Enlace href="#ejecutar-comando-remota-solo-en-entornos-controlados">Ejecutar
            comando remota (solo en entornos controlados)</Enlace ></li>
        </Lista>
      </li>
      <li><Enlace href="#seguridad-y-buenas-prácticas">Seguridad y buenas
        prácticas</Enlace ></li>
    </Lista>
  );
}

function nameabcd({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" id="ncat-en-linux">Ncat en Linux</Titulo>
        <Linea />

        <TemarioCompleto temario={Temario} />

        <Titulo title="h2" id="qué-hace-ncat">¿Qué hace ncat?</Titulo>
        <Texto>ncat (o <strong>Ncat</strong>) es la versión moderna de
          <strong>netcat</strong> incluida con <strong>Nmap</strong>. Es una
          herramienta de línea de comandos para leer/escribir datos a través de
          conexiones <strong>TCP</strong> o <strong>UDP</strong>, con muchas
          mejoras: soporte SSL/TLS, proxys, ejecución remota de comandos, modo
          servidor/cliente, reconexiones, y más. Es el “cuchillo suizo” de redes
          pero con opciones extra de seguridad y flexibilidad.
        </Texto>
        <Linea />
        <Titulo title="h2" id="usos-típicos">Usos típicos</Titulo>
        <Lista>
          <li>Conectar a un puerto remoto (cliente).</li>
          <li>Poner un puerto en escucha (servidor).</li>
          <li>Transferir archivos entre máquinas.</li>
          <li>Crear shells remotos / reverse shells (solo en entornos
            controlados).</li>
          <li>Tunelizar con SSL/TLS o a través de proxies.</li>
          <li>Depuración y pruebas de red (chat, eco, escaneo, etc.).</li>
        </Lista>
        <Linea />
        <Titulo title="h2" id="opciones-comunes-útiles-y-seguras">Opciones comunes (útiles y
          seguras)</Titulo>
        <Lista>
          <li>-l : escuchar (modo server).</li>    <li>-p &lt;puerto&gt; : especificar puerto
            local.</li>    <li>-u : usar UDP en lugar de TCP.</li>    <li>-v / -vv : verbose (más información de
              debug).</li>    <li>-k : mantener el listener abierto para
            <strong>múltiples</strong> conexiones (keep-open).
          </li>    <li>-n : no resolver DNS (usar solo IPs).</li>    <li>-z : modo “scan” / zero-I/O (suele usarse para
            chequear puertos).</li>    <li>--ssl : asegurar la conexión con TLS/SSL.</li>    <li>--send-only / --recv-only : solo enviar
              o solo recibir (útil en transferencias).</li>    <li>--proxy &lt;host:puerto&gt; y
                --proxy-type socks4, socks5, http : conectar a través de un
                proxy.
          </li>    <li>--exec &lt;comando&gt; o
            -e &lt;programa&gt; : ejecutar un comando al conectar
            (p.ej. crear una shell remota).

            <Lista>
              <li><strong>ATENCIÓN:</strong> usar con extremo cuidado — esto permite
                ejecución remota y es peligroso sí se habilita en producción sin
                control.</li>
            </Lista>
          </li>
        </Lista >
        <blockquote>
          <Texto>Nota: Ncat tiene muchas más opciones (certificados TLS, límites de
            tasa, timeouts). Consulta ncat --help o
            man ncat para la lista completa en tú versión.
          </Texto>
        </blockquote>
        <Linea />
        <Titulo title="h2" id="ejemplos-prácticos">Ejemplos prácticos</Titulo>
        <Titulo title="h3" id="cliente-simple-tcp">Cliente simple (TCP)</Titulo>
        <Codigo code={`ncat 192.168.1.10 8080`} language="bash" />
        <Titulo title="h3" id="servidor-que-acepta-una-conexión">Servidor que acepta una
          conexión</Titulo>
        <Codigo code={`ncat -l -p 8080`} language="bash" />
        <Titulo title="h3" id="servidor-que-acepta-múltiples-conexiones-keep-open">Servidor que
          acepta múltiples conexiones (keep-open)</Titulo>
        <Codigo code={`ncat -l -k -p 8080`} language="bash" />
        <Titulo title="h3" id="udp-cliente-y-servidor">UDP (cliente y servidor)</Titulo>
        <Texto>Servidor UDP:</Texto>
        <Codigo code={`ncat -u -l -p 6000`} language="bash" />
        <Texto>Cliente UDP:</Texto>
        <Codigo code={`ncat -u 192.168.1.10 6000`} language="bash" />
        <Titulo title="h3" id="transferir-archivo-cliente---servidor">Transferir archivo
          (cliente -&gt; servidor)</Titulo>
        <Texto>Servidor (recibe):</Texto>
        <Codigo code={`ncat -l -p 9000 > recibido.bin`} language="bash" />
        <Texto>Cliente (envía):</Texto>
        <Codigo code={`ncat 192.168.1.20 9000 < archivo.bin`} language="bash" />
        <Titulo title="h3" id="conexión-cifrada-ssltls-cliente">Conexión cifrada SSL/TLS
          (cliente)</Titulo>
        <Codigo code={`ncat --ssl ejemplo.com 443`} language="bash" />
        <Titulo title="h3" id="usar-proxy-socks5">Usar proxy SOCKS5</Titulo>
        <Codigo code={`ncat --proxy 10.0.0.1:1080 --proxy-type socks5 ejemplo.com 80`} language="bash" />
        <Titulo title="h3" id="ejecutar-comando-remota-solo-en-entornos-controlados">Ejecutar
          comando remota (solo en entornos controlados)</Titulo>
        <Texto>Servidor (escucha y ejecuta /bin/bash cuando alguien conecta):</Texto>
        <Codigo code={`ncat -l -p 4444 --exec "/bin/bash" -k`} language="bash" />
        <Texto>Cliente (conecta y obtiene shell):</Texto>
        <Codigo code={`ncat 192.168.1.20 4444`} language="bash" />
        <Texto><strong>Nunca</strong> hagas esto en máquinas expuestas sin
          autorización.</Texto>
        <Linea />
        <Titulo title="h2" id="seguridad-y-buenas-prácticas">Seguridad y buenas prácticas</Titulo>
        <Lista>
          <li>
            --exec / -e y reverse shells son
            poderosas pero <strong>peligrosas</strong>: úsalas solo en entornos de
            laboratorio o con permiso explícito.</li>    <li>Sí necesitas acceso remoto legítimo, prefiere SSH o túneles TLS
              con autenticación.</li>    <li>Sí usas --ssl, verifica certificados cuando sea
                necesario (no deshabilites comprobaciones sin entender
                riesgos).</li>    <li>Limita escucha a interfaces específicas
                  (-l -s &lt;ip&gt;) sí tú ncat lo soporta, o
                  usa firewall para restringir accesos.</li>    <li>Mantén ncat actualizado (la implementación viene con
                    Nmap).</li>  </Lista>
      </Estructura>
      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}
export default nameabcd;
