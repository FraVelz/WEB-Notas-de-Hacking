<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">

<head>
  <meta charset="utf-8" />
  <meta name="generator" content="pandoc" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <title>sockets</title>

</head>

<body>
  <h1 id="python">Python</h1>
  <hr />
  <h2 id="temario">Temario</h2>
  <ul>
    <li><a href="#python">Python</a>
      <ul>
        <li><a href="#temario">Temario</a></li>
        <li><a href="#resumen">Resumen</a></li>
        <li><a href="#️tcp-transmission-control-protocol">️TCP (Transmission
            Control Protocol)</a>
          <ul>
            <li><a href="#servidor-tcp">Servidor TCP</a></li>
            <li><a href="#cliente-tcp">Cliente TCP</a></li>
          </ul>
        </li>
        <li><a href="#udp-user-datagram-protocol">UDP (User Datagram
            Protocol)</a>
          <ul>
            <li><a href="#servidor-udp">Servidor UDP</a></li>
            <li><a href="#cliente-udp">Cliente UDP</a></li>
          </ul>
        </li>
        <li><a href="#diferencias-rápidas">Diferencias rápidas</a></li>
      </ul>
    </li>
  </ul>
  <p><a href="./../../readme.md#5-python">Regresar a la Guía
      Principal</a></p>
  <hr />
  <h2 id="resumen">Resumen</h2>
  <p>Los <strong>sockets</strong> permiten la <strong>comunicación entre
      computadoras o procesos</strong> a través de una red (como Internet o
    una LAN).</p>
  <p>Python ofrece el módulo <code>socket</code> para manejar conexiones
    <strong>TCP</strong> (orientadas a conexión) y <strong>UDP</strong> (sin
    conexión).
  </p>
  <hr />
  <h2 id="tcp-transmission-control-protocol">️TCP (Transmission Control
    Protocol)</h2>
  <ul>
    <li>Conexión establecida entre cliente y servidor (3-way
      handshake).</li>
    <li>Garantiza entrega, orden y fiabilidad.</li>
    <li>Ideal para chats, transferencias, HTTP, etc.</li>
  </ul>
  <h3 id="servidor-tcp">Servidor TCP</h3>
  <div class="sourceCode" id="cb1">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="co"># servidor_tcp.py</span></span>
<span id="cb1-2"><a href="#cb1-2" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> socket</span>
<span id="cb1-3"><a href="#cb1-3" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb1-4"><a href="#cb1-4" aria-hidden="true" tabindex="-1"></a>HOST <span class="op">=</span> <span class="st">&#39;127.0.0.1&#39;</span>   <span class="co"># Dirección local</span></span>
<span id="cb1-5"><a href="#cb1-5" aria-hidden="true" tabindex="-1"></a>PORT <span class="op">=</span> <span class="dv">5000</span>          <span class="co"># Puerto del servidor</span></span>
<span id="cb1-6"><a href="#cb1-6" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb1-7"><a href="#cb1-7" aria-hidden="true" tabindex="-1"></a><span class="cf">with</span> socket.socket(socket.AF_INET, socket.SOCK_STREAM) <span class="im">as</span> s:</span>
<span id="cb1-8"><a href="#cb1-8" aria-hidden="true" tabindex="-1"></a>    s.bind((HOST, PORT))     <span class="co"># Asociar dirección y puerto</span></span>
<span id="cb1-9"><a href="#cb1-9" aria-hidden="true" tabindex="-1"></a>    s.listen()               <span class="co"># Escuchar conexiones</span></span>
<span id="cb1-10"><a href="#cb1-10" aria-hidden="true" tabindex="-1"></a>    <span class="bu">print</span>(<span class="st">&quot;Servidor TCP esperando conexión...&quot;</span>)</span>
<span id="cb1-11"><a href="#cb1-11" aria-hidden="true" tabindex="-1"></a>    conn, addr <span class="op">=</span> s.accept()  <span class="co"># Aceptar cliente</span></span>
<span id="cb1-12"><a href="#cb1-12" aria-hidden="true" tabindex="-1"></a>    <span class="cf">with</span> conn:</span>
<span id="cb1-13"><a href="#cb1-13" aria-hidden="true" tabindex="-1"></a>        <span class="bu">print</span>(<span class="st">&quot;Conectado a:&quot;</span>, addr)</span>
<span id="cb1-14"><a href="#cb1-14" aria-hidden="true" tabindex="-1"></a>        <span class="cf">while</span> <span class="va">True</span>:</span>
<span id="cb1-15"><a href="#cb1-15" aria-hidden="true" tabindex="-1"></a>            data <span class="op">=</span> conn.recv(<span class="dv">1024</span>)      <span class="co"># Recibir datos</span></span>
<span id="cb1-16"><a href="#cb1-16" aria-hidden="true" tabindex="-1"></a>            <span class="cf">if</span> <span class="kw">not</span> data:</span>
<span id="cb1-17"><a href="#cb1-17" aria-hidden="true" tabindex="-1"></a>                <span class="cf">break</span></span>
<span id="cb1-18"><a href="#cb1-18" aria-hidden="true" tabindex="-1"></a>            <span class="bu">print</span>(<span class="st">&quot;Cliente dice:&quot;</span>, data.decode())</span>
<span id="cb1-19"><a href="#cb1-19" aria-hidden="true" tabindex="-1"></a>            conn.sendall(<span class="st">b&quot;Mensaje recibido&quot;</span>)</span></code></pre>
  </div>
  <h3 id="cliente-tcp">Cliente TCP</h3>
  <div class="sourceCode" id="cb2">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="co"># cliente_tcp.py</span></span>
<span id="cb2-2"><a href="#cb2-2" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> socket</span>
<span id="cb2-3"><a href="#cb2-3" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb2-4"><a href="#cb2-4" aria-hidden="true" tabindex="-1"></a>HOST <span class="op">=</span> <span class="st">&#39;127.0.0.1&#39;</span></span>
<span id="cb2-5"><a href="#cb2-5" aria-hidden="true" tabindex="-1"></a>PORT <span class="op">=</span> <span class="dv">5000</span></span>
<span id="cb2-6"><a href="#cb2-6" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb2-7"><a href="#cb2-7" aria-hidden="true" tabindex="-1"></a><span class="cf">with</span> socket.socket(socket.AF_INET, socket.SOCK_STREAM) <span class="im">as</span> s:</span>
<span id="cb2-8"><a href="#cb2-8" aria-hidden="true" tabindex="-1"></a>    s.<span class="ex">connect</span>((HOST, PORT))</span>
<span id="cb2-9"><a href="#cb2-9" aria-hidden="true" tabindex="-1"></a>    s.sendall(<span class="st">b&quot;Hola servidor TCP&quot;</span>)</span>
<span id="cb2-10"><a href="#cb2-10" aria-hidden="true" tabindex="-1"></a>    data <span class="op">=</span> s.recv(<span class="dv">1024</span>)</span>
<span id="cb2-11"><a href="#cb2-11" aria-hidden="true" tabindex="-1"></a>    <span class="bu">print</span>(<span class="st">&quot;Servidor responde:&quot;</span>, data.decode())</span></code></pre>
  </div>
  <hr />
  <h2 id="udp-user-datagram-protocol">UDP (User Datagram Protocol)</h2>
  <ul>
    <li>No hay conexión, se envían “paquetes” sin confirmar recepción.</li>
    <li>Más rápido pero menos confiable.</li>
    <li>Ideal para streaming, juegos, mensajes cortos.</li>
  </ul>
  <h3 id="servidor-udp">Servidor UDP</h3>
  <div class="sourceCode" id="cb3">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a><span class="co"># servidor_udp.py</span></span>
<span id="cb3-2"><a href="#cb3-2" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> socket</span>
<span id="cb3-3"><a href="#cb3-3" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb3-4"><a href="#cb3-4" aria-hidden="true" tabindex="-1"></a>HOST <span class="op">=</span> <span class="st">&#39;127.0.0.1&#39;</span></span>
<span id="cb3-5"><a href="#cb3-5" aria-hidden="true" tabindex="-1"></a>PORT <span class="op">=</span> <span class="dv">6000</span></span>
<span id="cb3-6"><a href="#cb3-6" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb3-7"><a href="#cb3-7" aria-hidden="true" tabindex="-1"></a><span class="cf">with</span> socket.socket(socket.AF_INET, socket.SOCK_DGRAM) <span class="im">as</span> s:</span>
<span id="cb3-8"><a href="#cb3-8" aria-hidden="true" tabindex="-1"></a>    s.bind((HOST, PORT))</span>
<span id="cb3-9"><a href="#cb3-9" aria-hidden="true" tabindex="-1"></a>    <span class="bu">print</span>(<span class="st">&quot;Servidor UDP esperando mensajes...&quot;</span>)</span>
<span id="cb3-10"><a href="#cb3-10" aria-hidden="true" tabindex="-1"></a>    <span class="cf">while</span> <span class="va">True</span>:</span>
<span id="cb3-11"><a href="#cb3-11" aria-hidden="true" tabindex="-1"></a>        data, addr <span class="op">=</span> s.recvfrom(<span class="dv">1024</span>)</span>
<span id="cb3-12"><a href="#cb3-12" aria-hidden="true" tabindex="-1"></a>        <span class="bu">print</span>(<span class="st">&quot;Mensaje de&quot;</span>, addr, <span class="st">&quot;:&quot;</span>, data.decode())</span>
<span id="cb3-13"><a href="#cb3-13" aria-hidden="true" tabindex="-1"></a>        s.sendto(<span class="st">b&quot;Mensaje recibido&quot;</span>, addr)</span></code></pre>
  </div>
  <h3 id="cliente-udp">Cliente UDP</h3>
  <div class="sourceCode" id="cb4">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a><span class="co"># cliente_udp.py</span></span>
<span id="cb4-2"><a href="#cb4-2" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> socket</span>
<span id="cb4-3"><a href="#cb4-3" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb4-4"><a href="#cb4-4" aria-hidden="true" tabindex="-1"></a>HOST <span class="op">=</span> <span class="st">&#39;127.0.0.1&#39;</span></span>
<span id="cb4-5"><a href="#cb4-5" aria-hidden="true" tabindex="-1"></a>PORT <span class="op">=</span> <span class="dv">6000</span></span>
<span id="cb4-6"><a href="#cb4-6" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb4-7"><a href="#cb4-7" aria-hidden="true" tabindex="-1"></a><span class="cf">with</span> socket.socket(socket.AF_INET, socket.SOCK_DGRAM) <span class="im">as</span> s:</span>
<span id="cb4-8"><a href="#cb4-8" aria-hidden="true" tabindex="-1"></a>    s.sendto(<span class="st">b&quot;Hola servidor UDP&quot;</span>, (HOST, PORT))</span>
<span id="cb4-9"><a href="#cb4-9" aria-hidden="true" tabindex="-1"></a>    data, _ <span class="op">=</span> s.recvfrom(<span class="dv">1024</span>)</span>
<span id="cb4-10"><a href="#cb4-10" aria-hidden="true" tabindex="-1"></a>    <span class="bu">print</span>(<span class="st">&quot;Servidor responde:&quot;</span>, data.decode())</span></code></pre>
  </div>
  <hr />
  <h2 id="diferencias-rápidas">Diferencias rápidas</h2>
  <table>
    <colgroup>
      <col style="width: 15%" />
      <col style="width: 13%" />
      <col style="width: 16%" />
      <col style="width: 15%" />
      <col style="width: 38%" />
    </colgroup>
    <thead>
      <tr>
        <th>Protocolo</th>
        <th>Conexión</th>
        <th>Fiabilidad</th>
        <th>Velocidad</th>
        <th>Uso típico</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>TCP</td>
        <td>Sí</td>
        <td>Alta</td>
        <td>Media</td>
        <td>Web, chat, FTP</td>
      </tr>
      <tr>
        <td>UDP</td>
        <td>No</td>
        <td>Baja</td>
        <td>Alta</td>
        <td>Juegos, streaming, VoIP</td>
      </tr>
    </tbody>
  </table>
  <hr />
  <p><a href="./../../readme.md#5-python">Regresar a la Guía
      Principal</a></p>
  <blockquote>
    <p><strong>Autor:</strong> Fravelz</p>
  </blockquote>
</body>

</html>