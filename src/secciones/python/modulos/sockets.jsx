import Titulo from "./../../componentes/titulo.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Linea from "./../../componentes/linea.jsx";

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="python">Python</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><Enlace href="#python">Python</Enlace >
          <Lista>
            <li><Enlace href="#temario">Temario</Enlace ></li>
            <li><Enlace href="#resumen">Resumen</Enlace ></li>
            <li><Enlace href="#️tcp-transmission-control-protocol">️TCP (Transmission
              Control Protocol)</Enlace >
              <Lista>
                <li><Enlace href="#servidor-tcp">Servidor TCP</Enlace ></li>
                <li><Enlace href="#cliente-tcp">Cliente TCP</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#udp-user-datagram-protocol">UDP (User Datagram
              Protocol)</Enlace >
              <Lista>
                <li><Enlace href="#servidor-udp">Servidor UDP</Enlace ></li>
                <li><Enlace href="#cliente-udp">Cliente UDP</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#diferencias-rápidas">Diferencias rápidas</Enlace ></li>
          </Lista>
        </li>
      </Lista>
      <Texto><Enlace href="./../../readme.md#5-python">Regresar a la Guía
        Principal</Enlace ></Texto>
      <Linea />
      <Titulo title="h2" id="resumen">Resumen</Titulo>
      <Texto>Los <strong>sockets</strong> permiten la <strong>comunicación entre
        computadoras o procesos</strong> a través de una red (como Internet o
        una LAN).</Texto>
      <Texto>Python ofrece el módulo <code>socket</code> para manejar conexiones
        <strong>TCP</strong> (orientadas a conexión) y <strong>UDP</strong> (sin
        conexión).
      </Texto>
      <Linea />
      <Titulo title="h2" id="tcp-transmission-control-protocol">️TCP (Transmission Control
        Protocol)</Titulo>
      <Lista>
        <li>Conexión establecida entre cliente y servidor (3-way
          handshake).</li>
        <li>Garantiza entrega, orden y fiabilidad.</li>
        <li>Ideal para chats, transferencias, HTTP, etc.</li>
      </Lista>
      <Titulo title="h3" id="servidor-tcp">Servidor TCP</Titulo>
      <div className="sourceCode" id="cb1">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb1-1"><Enlace href="#cb1-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># servidor_tcp.py</span></span>
            <span id="cb1-2"><Enlace href="#cb1-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> socket</span>
            <span id="cb1-3"><Enlace href="#cb1-3" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb1-4"><Enlace href="#cb1-4" aria-hidden="true" tabindex="-1"></Enlace >HOST <span className="op">=</span> <span className="st">&#39;127.0.0.1&#39;</span>   <span className="co"># Dirección local</span></span>
            <span id="cb1-5"><Enlace href="#cb1-5" aria-hidden="true" tabindex="-1"></Enlace >PORT <span className="op">=</span> <span className="dv">5000</span>          <span className="co"># Puerto del servidor</span></span>
            <span id="cb1-6"><Enlace href="#cb1-6" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb1-7"><Enlace href="#cb1-7" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">with</span> socket.socket(socket.AF_INET, socket.SOCK_STREAM) <span className="im">as</span> s:</span>
            <span id="cb1-8"><Enlace href="#cb1-8" aria-hidden="true" tabindex="-1"></Enlace >    s.bind((HOST, PORT))     <span className="co"># Asociar dirección y puerto</span></span>
            <span id="cb1-9"><Enlace href="#cb1-9" aria-hidden="true" tabindex="-1"></Enlace >    s.listen()               <span className="co"># Escuchar conexiones</span></span>
            <span id="cb1-10"><Enlace href="#cb1-10" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">print</span>(<span className="st">&quot;Servidor TCP esperando conexión...&quot;</span>)</span>
            <span id="cb1-11"><Enlace href="#cb1-11" aria-hidden="true" tabindex="-1"></Enlace >    conn, addr <span className="op">=</span> s.accept()  <span className="co"># Aceptar cliente</span></span>
            <span id="cb1-12"><Enlace href="#cb1-12" aria-hidden="true" tabindex="-1"></Enlace >    <span className="cf">with</span> conn:</span>
            <span id="cb1-13"><Enlace href="#cb1-13" aria-hidden="true" tabindex="-1"></Enlace >        <span className="bu">print</span>(<span className="st">&quot;Conectado a:&quot;</span>, addr)</span>
            <span id="cb1-14"><Enlace href="#cb1-14" aria-hidden="true" tabindex="-1"></Enlace >        <span className="cf">while</span> <span className="va">True</span>:</span>
            <span id="cb1-15"><Enlace href="#cb1-15" aria-hidden="true" tabindex="-1"></Enlace >            data <span className="op">=</span> conn.recv(<span className="dv">1024</span>)      <span className="co"># Recibir datos</span></span>
            <span id="cb1-16"><Enlace href="#cb1-16" aria-hidden="true" tabindex="-1"></Enlace >            <span className="cf">if</span> <span className="kw">not</span> data:</span>
            <span id="cb1-17"><Enlace href="#cb1-17" aria-hidden="true" tabindex="-1"></Enlace >                <span className="cf">break</span></span>
            <span id="cb1-18"><Enlace href="#cb1-18" aria-hidden="true" tabindex="-1"></Enlace >            <span className="bu">print</span>(<span className="st">&quot;Cliente dice:&quot;</span>, data.decode())</span>
            <span id="cb1-19"><Enlace href="#cb1-19" aria-hidden="true" tabindex="-1"></Enlace >            conn.sendall(<span className="st">b&quot;Mensaje recibido&quot;</span>)</span></code></pre>
      </div>
      <Titulo title="h3" id="cliente-tcp">Cliente TCP</Titulo>
      <div className="sourceCode" id="cb2">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb2-1"><Enlace href="#cb2-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># cliente_tcp.py</span></span>
            <span id="cb2-2"><Enlace href="#cb2-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> socket</span>
            <span id="cb2-3"><Enlace href="#cb2-3" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb2-4"><Enlace href="#cb2-4" aria-hidden="true" tabindex="-1"></Enlace >HOST <span className="op">=</span> <span className="st">&#39;127.0.0.1&#39;</span></span>
            <span id="cb2-5"><Enlace href="#cb2-5" aria-hidden="true" tabindex="-1"></Enlace >PORT <span className="op">=</span> <span className="dv">5000</span></span>
            <span id="cb2-6"><Enlace href="#cb2-6" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb2-7"><Enlace href="#cb2-7" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">with</span> socket.socket(socket.AF_INET, socket.SOCK_STREAM) <span className="im">as</span> s:</span>
            <span id="cb2-8"><Enlace href="#cb2-8" aria-hidden="true" tabindex="-1"></Enlace >    s.<span className="ex">connect</span>((HOST, PORT))</span>
            <span id="cb2-9"><Enlace href="#cb2-9" aria-hidden="true" tabindex="-1"></Enlace >    s.sendall(<span className="st">b&quot;Hola servidor TCP&quot;</span>)</span>
            <span id="cb2-10"><Enlace href="#cb2-10" aria-hidden="true" tabindex="-1"></Enlace >    data <span className="op">=</span> s.recv(<span className="dv">1024</span>)</span>
            <span id="cb2-11"><Enlace href="#cb2-11" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">print</span>(<span className="st">&quot;Servidor responde:&quot;</span>, data.decode())</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="udp-user-datagram-protocol">UDP (User Datagram Protocol)</Titulo>
      <Lista>
        <li>No hay conexión, se envían “paquetes” sin confirmar recepción.</li>
        <li>Más rápido pero menos confiable.</li>
        <li>Ideal para streaming, juegos, mensajes cortos.</li>
      </Lista>
      <Titulo title="h3" id="servidor-udp">Servidor UDP</Titulo>
      <div className="sourceCode" id="cb3">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb3-1"><Enlace href="#cb3-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># servidor_udp.py</span></span>
            <span id="cb3-2"><Enlace href="#cb3-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> socket</span>
            <span id="cb3-3"><Enlace href="#cb3-3" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb3-4"><Enlace href="#cb3-4" aria-hidden="true" tabindex="-1"></Enlace >HOST <span className="op">=</span> <span className="st">&#39;127.0.0.1&#39;</span></span>
            <span id="cb3-5"><Enlace href="#cb3-5" aria-hidden="true" tabindex="-1"></Enlace >PORT <span className="op">=</span> <span className="dv">6000</span></span>
            <span id="cb3-6"><Enlace href="#cb3-6" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb3-7"><Enlace href="#cb3-7" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">with</span> socket.socket(socket.AF_INET, socket.SOCK_DGRAM) <span className="im">as</span> s:</span>
            <span id="cb3-8"><Enlace href="#cb3-8" aria-hidden="true" tabindex="-1"></Enlace >    s.bind((HOST, PORT))</span>
            <span id="cb3-9"><Enlace href="#cb3-9" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">print</span>(<span className="st">&quot;Servidor UDP esperando mensajes...&quot;</span>)</span>
            <span id="cb3-10"><Enlace href="#cb3-10" aria-hidden="true" tabindex="-1"></Enlace >    <span className="cf">while</span> <span className="va">True</span>:</span>
            <span id="cb3-11"><Enlace href="#cb3-11" aria-hidden="true" tabindex="-1"></Enlace >        data, addr <span className="op">=</span> s.recvfrom(<span className="dv">1024</span>)</span>
            <span id="cb3-12"><Enlace href="#cb3-12" aria-hidden="true" tabindex="-1"></Enlace >        <span className="bu">print</span>(<span className="st">&quot;Mensaje de&quot;</span>, addr, <span className="st">&quot;:&quot;</span>, data.decode())</span>
            <span id="cb3-13"><Enlace href="#cb3-13" aria-hidden="true" tabindex="-1"></Enlace >        s.sendto(<span className="st">b&quot;Mensaje recibido&quot;</span>, addr)</span></code></pre>
      </div>
      <Titulo title="h3" id="cliente-udp">Cliente UDP</Titulo>
      <div className="sourceCode" id="cb4">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb4-1"><Enlace href="#cb4-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># cliente_udp.py</span></span>
            <span id="cb4-2"><Enlace href="#cb4-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> socket</span>
            <span id="cb4-3"><Enlace href="#cb4-3" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb4-4"><Enlace href="#cb4-4" aria-hidden="true" tabindex="-1"></Enlace >HOST <span className="op">=</span> <span className="st">&#39;127.0.0.1&#39;</span></span>
            <span id="cb4-5"><Enlace href="#cb4-5" aria-hidden="true" tabindex="-1"></Enlace >PORT <span className="op">=</span> <span className="dv">6000</span></span>
            <span id="cb4-6"><Enlace href="#cb4-6" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb4-7"><Enlace href="#cb4-7" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">with</span> socket.socket(socket.AF_INET, socket.SOCK_DGRAM) <span className="im">as</span> s:</span>
            <span id="cb4-8"><Enlace href="#cb4-8" aria-hidden="true" tabindex="-1"></Enlace >    s.sendto(<span className="st">b&quot;Hola servidor UDP&quot;</span>, (HOST, PORT))</span>
            <span id="cb4-9"><Enlace href="#cb4-9" aria-hidden="true" tabindex="-1"></Enlace >    data, _ <span className="op">=</span> s.recvfrom(<span className="dv">1024</span>)</span>
            <span id="cb4-10"><Enlace href="#cb4-10" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">print</span>(<span className="st">&quot;Servidor responde:&quot;</span>, data.decode())</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="diferencias-rápidas">Diferencias rápidas</Titulo>
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
