import Enlace from "../../../componentes/atomos/enlace.jsx";
import Linea from "../../../componentes/atomos/linea.jsx";
import Lista from "../../../componentes/moleculas/lista.jsx";
import Texto from "./../../../componentes/atomos/texto.jsx";
import Titulo from "../../../componentes/moleculas/titulo.jsx";
import { Tabla, TablaCabezera, TablaFila, TablaUnica } from "../../../componentes/moleculas/tabla.jsx";
import Codigo from "../../../componentes/moleculas/codigo.jsx";

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
      <Texto>Python ofrece el módulo socket para manejar conexiones
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
      <Codigo code={`# servidor_tcp.py
import socket

HOST = '127.0.0.1'   # Dirección local
PORT = 5000          # Puerto del servidor

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
s.bind((HOST, PORT))     # Asociar dirección y puerto
s.listen()               # Escuchar conexiones
print("Servidor TCP esperando conexión...")
conn, addr = s.accept()  # Aceptar cliente
with conn:
print("Conectado a:", addr)
while True:
data = conn.recv(1024)      # Recibir datos
if not data:
break
print("Cliente dice:", data.decode())
conn.sendall(b"Mensaje recibido")`} language="python" />
      <Titulo title="h3" id="cliente-tcp">Cliente TCP</Titulo>
      <Codigo code={`# cliente_tcp.py
import socket

HOST = '127.0.0.1'
PORT = 5000

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
s.connect((HOST, PORT))
s.sendall(b"Hola servidor TCP")
data = s.recv(1024)
print("Servidor responde:", data.decode())`} language="python" />
      <Linea />
      <Titulo title="h2" id="udp-user-datagram-protocol">UDP (User Datagram Protocol)</Titulo>
      <Lista>
        <li>No hay conexión, se envían “paquetes” sin confirmar recepción.</li>
        <li>Más rápido pero menos confiable.</li>
        <li>Ideal para streaming, juegos, mensajes cortos.</li>
      </Lista>
      <Titulo title="h3" id="servidor-udp">Servidor UDP</Titulo>
      <Codigo code={`# servidor_udp.py
import socket

HOST = '127.0.0.1'
PORT = 6000

with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
s.bind((HOST, PORT))
print("Servidor UDP esperando mensajes...")
while True:
data, addr = s.recvfrom(1024)
print("Mensaje de", addr, ":", data.decode())
s.sendto(b"Mensaje recibido", addr)`} language="python" />
      <Titulo title="h3" id="cliente-udp">Cliente UDP</Titulo>
      <Codigo code={`# cliente_udp.py
import socket

HOST = '127.0.0.1'
PORT = 6000

with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
s.sendto(b"Hola servidor UDP", (HOST, PORT))
data, _ = s.recvfrom(1024)
print("Servidor responde:", data.decode())`} language="python" />
      <Linea />
      <Titulo title="h2" id="diferencias-rápidas">Diferencias rápidas</Titulo>
      <Tabla>
  <TablaCabezera headers={["Protocolo", "Conexión", "Fiabilidad", "Velocidad", "Uso típico"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>TCP</TablaUnica>
      <TablaUnica>Sí</TablaUnica>
      <TablaUnica>Alta</TablaUnica>
      <TablaUnica>Media</TablaUnica>
      <TablaUnica>Web, chat, FTP</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>UDP</TablaUnica>
      <TablaUnica>No</TablaUnica>
      <TablaUnica>Baja</TablaUnica>
      <TablaUnica>Alta</TablaUnica>
      <TablaUnica>Juegos, streaming, VoIP</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
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
