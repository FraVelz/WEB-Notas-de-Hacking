import Titulo from "./../../../componentes/titulo.jsx";
import Lista from "./../../../componentes/lista.jsx";
import Texto from "./../../../componentes/texto.jsx";
import Linea from "./../../../componentes/linea.jsx";
import Enlace from "./../../../componentes/enlace.jsx";
import Estructura from "../../../componentes/estructura.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
   </Lista>
  );
}

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="ncat-en-linux">Ncat en Linux</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><Enlace href="#ncat-en-linux">Ncat en Linux</Enlace >
          <Lista>
            <li><Enlace href="#temario">Temario</Enlace ></li>
            <li><Enlace href="#qué-hace-ecat">¿Qué hace ecat?</Enlace ></li>
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
        </li>
      </Lista>
      <Texto><Enlace href="./../../readme.md#5-python">Regresar a la Guía
        Principal</Enlace ></Texto>
      <Linea />
      <Titulo title="h2" id="qué-hace-ecat">¿Qué hace ecat?</Titulo>
      <Texto><code>ncat</code> (o <strong>Ncat</strong>) es la versión moderna de
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
        <li><code>-l</code> : escuchar (modo server).</li>    <li><code>-p &lt;puerto&gt;</code> : especificar puerto
          local.</li>    <li><code>-u</code> : usar UDP en lugar de TCP.</li>    <li><code>-v</code> / <code>-vv</code> : verbose (más información de
            debug).</li>    <li><code>-k</code> : mantener el listener abierto para
          <strong>múltiples</strong> conexiones (keep-open).
        </li>    <li><code>-n</code> : no resolver DNS (usar solo IPs).</li>    <li><code>-z</code> : modo “scan” / zero-I/O (suele usarse para
          chequear puertos).</li>    <li><code>--ssl</code> : asegurar la conexión con TLS/SSL.</li>    <li><code>--send-only</code> / <code>--recv-only</code> : solo enviar
            o solo recibir (útil en transferencias).</li>    <li><code>--proxy &lt;host:puerto&gt;</code> y
          <code>--proxy-type socks4, socks5, http</code> : conectar a través de un
          proxy.
        </li>    <li><code>--exec &lt;comando&gt;</code> o
          <code>-e &lt;programa&gt;</code> : ejecutar un comando al conectar
          (p.ej. crear una shell remota).

          <Lista>
            <li><strong>ATENCIÓN:</strong> usar con extremo cuidado — esto permite
              ejecución remota y es peligroso si se habilita en producción sin
              control.</li>
          </Lista>
        </li>
      </Lista >
      <blockquote>
        <Texto>Nota: Ncat tiene muchas más opciones (certificados TLS, límites de
          tasa, timeouts). Consulta <code>ncat --help</code> o
          <code>man ncat</code> para la lista completa en tu versión.
        </Texto>
      </blockquote>
      <Linea />
      <Titulo title="h2" id="ejemplos-prácticos">Ejemplos prácticos</Titulo>
      <Titulo title="h3" id="cliente-simple-tcp">Cliente simple (TCP)</Titulo>
      <div className="sourceCode" id="cb1">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb1-1"><Enlace href="#cb1-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">ncat</span> 192.168.1.10 8080</span></code></pre>
      </div>
      <Titulo title="h3" id="servidor-que-acepta-una-conexión">Servidor que acepta una
        conexión</Titulo>
      <div className="sourceCode" id="cb2">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb2-1"><Enlace href="#cb2-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">ncat</span> <span className="at">-l</span> <span className="at">-p</span> 8080</span></code></pre>
      </div>
      <Titulo title="h3" id="servidor-que-acepta-múltiples-conexiones-keep-open">Servidor que
        acepta múltiples conexiones (keep-open)</Titulo>
      <div className="sourceCode" id="cb3">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb3-1"><Enlace href="#cb3-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">ncat</span> <span className="at">-l</span> <span className="at">-k</span> <span className="at">-p</span> 8080</span></code></pre>
      </div>
      <Titulo title="h3" id="udp-cliente-y-servidor">UDP (cliente y servidor)</Titulo>
      <Texto>Servidor UDP:</Texto>
      <div className="sourceCode" id="cb4">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb4-1"><Enlace href="#cb4-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">ncat</span> <span className="at">-u</span> <span className="at">-l</span> <span className="at">-p</span> 6000</span></code></pre>
      </div>
      <Texto>Cliente UDP:</Texto>
      <div className="sourceCode" id="cb5">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb5-1"><Enlace href="#cb5-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">ncat</span> <span className="at">-u</span> 192.168.1.10 6000</span></code></pre>
      </div>
      <Titulo title="h3" id="transferir-archivo-cliente---servidor">Transferir archivo
        (cliente -&gt; servidor)</Titulo>
      <Texto>Servidor (recibe):</Texto>
      <div className="sourceCode" id="cb6">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb6-1"><Enlace href="#cb6-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">ncat</span> <span className="at">-l</span> <span className="at">-p</span> 9000 <span className="op">&gt;</span> recibido.bin</span></code></pre>
      </div>
      <Texto>Cliente (envía):</Texto>
      <div className="sourceCode" id="cb7">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb7-1"><Enlace href="#cb7-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">ncat</span> 192.168.1.20 9000 <span className="op">&lt;</span> archivo.bin</span></code></pre>
      </div>
      <Titulo title="h3" id="conexión-cifrada-ssltls-cliente">Conexión cifrada SSL/TLS
        (cliente)</Titulo>
      <div className="sourceCode" id="cb8">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb8-1"><Enlace href="#cb8-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">ncat</span> <span className="at">--ssl</span> ejemplo.com 443</span></code></pre>
      </div>
      <Titulo title="h3" id="usar-proxy-socks5">Usar proxy SOCKS5</Titulo>
      <div className="sourceCode" id="cb9">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb9-1"><Enlace href="#cb9-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">ncat</span> <span className="at">--proxy</span> 10.0.0.1:1080 <span className="at">--proxy-type</span> socks5 ejemplo.com 80</span></code></pre>
      </div>
      <Titulo title="h3" id="ejecutar-comando-remota-solo-en-entornos-controlados">Ejecutar
        comando remota (solo en entornos controlados)</Titulo>
      <Texto>Servidor (escucha y ejecuta /bin/bash cuando alguien conecta):</Texto>
      <div className="sourceCode" id="cb10">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb10-1"><Enlace href="#cb10-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">ncat</span> <span className="at">-l</span> <span className="at">-p</span> 4444 <span className="at">--exec</span> <span className="st">&quot;/bin/bash&quot;</span> <span className="at">-k</span></span></code></pre>
      </div>
      <Texto>Cliente (conecta y obtiene shell):</Texto>
      <div className="sourceCode" id="cb11">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb11-1"><Enlace href="#cb11-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">ncat</span> 192.168.1.20 4444</span></code></pre>
      </div>
      <Texto><strong>Nunca</strong> hagas esto en máquinas expuestas sin
        autorización.</Texto>
      <Linea />
      <Titulo title="h2" id="seguridad-y-buenas-prácticas">Seguridad y buenas prácticas</Titulo>
      <Lista>
        <li>
          <code>--exec</code> / <code>-e</code> y reverse shells son
            poderosas pero <strong>peligrosas</strong>: úsalas solo en entornos de
            laboratorio o con permiso explícito.</li>    <li>Si necesitas acceso remoto legítimo, prefiere SSH o túneles TLS
              con autenticación.</li>    <li>Si usas <code>--ssl</code>, verifica certificados cuando sea
                necesario (no deshabilites comprobaciones sin entender
                riesgos).</li>    <li>Limita escucha a interfaces específicas
                  (<code>-l -s &lt;ip&gt;</code>) si tu <code>ncat</code> lo soporta, o
          usa firewall para restringir accesos.</li>    <li>Mantén <code>ncat</code> actualizado (la implementación viene con
            Nmap).</li>  </Lista>
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
