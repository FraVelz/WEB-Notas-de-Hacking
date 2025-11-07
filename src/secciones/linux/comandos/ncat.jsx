<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">

<head>
  <meta charset="utf-8" />
  <meta name="generator" content="pandoc" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <title>ncat</title>

</head>

<body>
  <h1 id="ncat-en-linux">Ncat en Linux</h1>
  <hr />
  <h2 id="temario">Temario</h2>
  <ul>
    <li><a href="#ncat-en-linux">Ncat en Linux</a>
      <ul>
        <li><a href="#temario">Temario</a></li>
        <li><a href="#qué-hace-ecat">¿Qué hace ecat?</a></li>
        <li><a href="#usos-típicos">Usos típicos</a></li>
        <li><a href="#opciones-comunes-útiles-y-seguras">Opciones comunes
            (útiles y seguras)</a></li>
        <li><a href="#ejemplos-prácticos">Ejemplos prácticos</a>
          <ul>
            <li><a href="#cliente-simple-tcp">Cliente simple (TCP)</a></li>
            <li><a href="#servidor-que-acepta-una-conexión">Servidor que acepta una
                conexión</a></li>
            <li><a href="#servidor-que-acepta-múltiples-conexiones-keep-open">Servidor que
                acepta múltiples conexiones (keep-open)</a></li>
            <li><a href="#udp-cliente-y-servidor">UDP (cliente y servidor)</a></li>
            <li><a href="#transferir-archivo-cliente---servidor">Transferir archivo
                (cliente -&gt; servidor)</a></li>
            <li><a href="#conexión-cifrada-ssltls-cliente">Conexión cifrada SSL/TLS
                (cliente)</a></li>
            <li><a href="#usar-proxy-socks5">Usar proxy SOCKS5</a></li>
            <li><a href="#ejecutar-comando-remota-solo-en-entornos-controlados">Ejecutar
                comando remota (solo en entornos controlados)</a></li>
          </ul>
        </li>
        <li><a href="#seguridad-y-buenas-prácticas">Seguridad y buenas
            prácticas</a></li>
      </ul>
    </li>
  </ul>
  <p><a href="./../../readme.md#5-python">Regresar a la Guía
      Principal</a></p>
  <hr />
  <h2 id="qué-hace-ecat">¿Qué hace ecat?</h2>
  <p><code>ncat</code> (o <strong>Ncat</strong>) es la versión moderna de
    <strong>netcat</strong> incluida con <strong>Nmap</strong>. Es una
    herramienta de línea de comandos para leer/escribir datos a través de
    conexiones <strong>TCP</strong> o <strong>UDP</strong>, con muchas
    mejoras: soporte SSL/TLS, proxys, ejecución remota de comandos, modo
    servidor/cliente, reconexiones, y más. Es el “cuchillo suizo” de redes
    pero con opciones extra de seguridad y flexibilidad.
  </p>
  <hr />
  <h2 id="usos-típicos">Usos típicos</h2>
  <ul>
    <li>Conectar a un puerto remoto (cliente).</li>
    <li>Poner un puerto en escucha (servidor).</li>
    <li>Transferir archivos entre máquinas.</li>
    <li>Crear shells remotos / reverse shells (solo en entornos
      controlados).</li>
    <li>Tunelizar con SSL/TLS o a través de proxies.</li>
    <li>Depuración y pruebas de red (chat, eco, escaneo, etc.).</li>
  </ul>
  <hr />
  <h2 id="opciones-comunes-útiles-y-seguras">Opciones comunes (útiles y
    seguras)</h2>
  <ul>
    <li>
      <p><code>-l</code> : escuchar (modo server).</p>
    </li>
    <li>
      <p><code>-p &lt;puerto&gt;</code> : especificar puerto
        local.</p>
    </li>
    <li>
      <p><code>-u</code> : usar UDP en lugar de TCP.</p>
    </li>
    <li>
      <p><code>-v</code> / <code>-vv</code> : verbose (más información de
        debug).</p>
    </li>
    <li>
      <p><code>-k</code> : mantener el listener abierto para
        <strong>múltiples</strong> conexiones (keep-open).
      </p>
    </li>
    <li>
      <p><code>-n</code> : no resolver DNS (usar solo IPs).</p>
    </li>
    <li>
      <p><code>-z</code> : modo “scan” / zero-I/O (suele usarse para
        chequear puertos).</p>
    </li>
    <li>
      <p><code>--ssl</code> : asegurar la conexión con TLS/SSL.</p>
    </li>
    <li>
      <p><code>--send-only</code> / <code>--recv-only</code> : solo enviar
        o solo recibir (útil en transferencias).</p>
    </li>
    <li>
      <p><code>--proxy &lt;host:puerto&gt;</code> y
        <code>--proxy-type {socks4,socks5,http}</code> : conectar a través de un
        proxy.
      </p>
    </li>
    <li>
      <p><code>--exec &lt;comando&gt;</code> o
        <code>-e &lt;programa&gt;</code> : ejecutar un comando al conectar
        (p. ej. crear una shell remota).
      </p>
      <ul>
        <li><strong>ATENCIÓN:</strong> usar con extremo cuidado — esto permite
          ejecución remota y es peligroso si se habilita en producción sin
          control.</li>
      </ul>
    </li>
  </ul>
  <blockquote>
    <p>Nota: Ncat tiene muchas más opciones (certificados TLS, límites de
      tasa, timeouts). Consulta <code>ncat --help</code> o
      <code>man ncat</code> para la lista completa en tu versión.
    </p>
  </blockquote>
  <hr />
  <h2 id="ejemplos-prácticos">Ejemplos prácticos</h2>
  <h3 id="cliente-simple-tcp">Cliente simple (TCP)</h3>
  <div class="sourceCode" id="cb1">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="ex">ncat</span> 192.168.1.10 8080</span></code></pre>
  </div>
  <h3 id="servidor-que-acepta-una-conexión">Servidor que acepta una
    conexión</h3>
  <div class="sourceCode" id="cb2">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="ex">ncat</span> <span class="at">-l</span> <span class="at">-p</span> 8080</span></code></pre>
  </div>
  <h3 id="servidor-que-acepta-múltiples-conexiones-keep-open">Servidor que
    acepta múltiples conexiones (keep-open)</h3>
  <div class="sourceCode" id="cb3">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a><span class="ex">ncat</span> <span class="at">-l</span> <span class="at">-k</span> <span class="at">-p</span> 8080</span></code></pre>
  </div>
  <h3 id="udp-cliente-y-servidor">UDP (cliente y servidor)</h3>
  <p>Servidor UDP:</p>
  <div class="sourceCode" id="cb4">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a><span class="ex">ncat</span> <span class="at">-u</span> <span class="at">-l</span> <span class="at">-p</span> 6000</span></code></pre>
  </div>
  <p>Cliente UDP:</p>
  <div class="sourceCode" id="cb5">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb5-1"><a href="#cb5-1" aria-hidden="true" tabindex="-1"></a><span class="ex">ncat</span> <span class="at">-u</span> 192.168.1.10 6000</span></code></pre>
  </div>
  <h3 id="transferir-archivo-cliente---servidor">Transferir archivo
    (cliente -&gt; servidor)</h3>
  <p>Servidor (recibe):</p>
  <div class="sourceCode" id="cb6">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a><span class="ex">ncat</span> <span class="at">-l</span> <span class="at">-p</span> 9000 <span class="op">&gt;</span> recibido.bin</span></code></pre>
  </div>
  <p>Cliente (envía):</p>
  <div class="sourceCode" id="cb7">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb7-1"><a href="#cb7-1" aria-hidden="true" tabindex="-1"></a><span class="ex">ncat</span> 192.168.1.20 9000 <span class="op">&lt;</span> archivo.bin</span></code></pre>
  </div>
  <h3 id="conexión-cifrada-ssltls-cliente">Conexión cifrada SSL/TLS
    (cliente)</h3>
  <div class="sourceCode" id="cb8">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb8-1"><a href="#cb8-1" aria-hidden="true" tabindex="-1"></a><span class="ex">ncat</span> <span class="at">--ssl</span> ejemplo.com 443</span></code></pre>
  </div>
  <h3 id="usar-proxy-socks5">Usar proxy SOCKS5</h3>
  <div class="sourceCode" id="cb9">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb9-1"><a href="#cb9-1" aria-hidden="true" tabindex="-1"></a><span class="ex">ncat</span> <span class="at">--proxy</span> 10.0.0.1:1080 <span class="at">--proxy-type</span> socks5 ejemplo.com 80</span></code></pre>
  </div>
  <h3 id="ejecutar-comando-remota-solo-en-entornos-controlados">Ejecutar
    comando remota (solo en entornos controlados)</h3>
  <p>Servidor (escucha y ejecuta /bin/bash cuando alguien conecta):</p>
  <div class="sourceCode" id="cb10">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb10-1"><a href="#cb10-1" aria-hidden="true" tabindex="-1"></a><span class="ex">ncat</span> <span class="at">-l</span> <span class="at">-p</span> 4444 <span class="at">--exec</span> <span class="st">&quot;/bin/bash&quot;</span> <span class="at">-k</span></span></code></pre>
  </div>
  <p>Cliente (conecta y obtiene shell):</p>
  <div class="sourceCode" id="cb11">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb11-1"><a href="#cb11-1" aria-hidden="true" tabindex="-1"></a><span class="ex">ncat</span> 192.168.1.20 4444</span></code></pre>
  </div>
  <p><strong>Nunca</strong> hagas esto en máquinas expuestas sin
    autorización.</p>
  <hr />
  <h2 id="seguridad-y-buenas-prácticas">Seguridad y buenas prácticas</h2>
  <ul>
    <li>
      <p><code>--exec</code> / <code>-e</code> y reverse shells son
        poderosas pero <strong>peligrosas</strong>: úsalas solo en entornos de
        laboratorio o con permiso explícito.</p>
    </li>
    <li>
      <p>Si necesitas acceso remoto legítimo, prefiere SSH o túneles TLS
        con autenticación.</p>
    </li>
    <li>
      <p>Si usas <code>--ssl</code>, verifica certificados cuando sea
        necesario (no deshabilites comprobaciones sin entender
        riesgos).</p>
    </li>
    <li>
      <p>Limita escucha a interfaces específicas
        (<code>-l -s &lt;ip&gt;</code>) si tu <code>ncat</code> lo soporta, o
        usa firewall para restringir accesos.</p>
    </li>
    <li>
      <p>Mantén <code>ncat</code> actualizado (la implementación viene con
        Nmap).</p>
    </li>
  </ul>
  <hr />
  <p><a href="./../../readme.md#5-python">Regresar a la Guía
      Principal</a></p>
  <blockquote>
    <p><strong>Autor:</strong> Fravelz</p>
  </blockquote>
</body>

</html>