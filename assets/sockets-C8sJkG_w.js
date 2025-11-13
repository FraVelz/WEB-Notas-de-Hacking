import{j as e,T as s,L as n,d as o,f as r,b as d}from"./index-CpeyxQ3i.js";import{c as t,T as l,b as a,a as i}from"./tabla-CtO-7Jid.js";import{C as c}from"./codigo-D2If7uI6.js";function p({}){return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"h1",id:"python",children:"Python"}),e.jsx(n,{}),e.jsx(s,{title:"h2",id:"temario",children:"Temario"}),e.jsx(o,{children:e.jsxs("li",{children:[e.jsx(r,{href:"#python",children:"Python"}),e.jsxs(o,{children:[e.jsx("li",{children:e.jsx(r,{href:"#temario",children:"Temario"})}),e.jsx("li",{children:e.jsx(r,{href:"#resumen",children:"Resumen"})}),e.jsxs("li",{children:[e.jsx(r,{href:"#️tcp-transmission-control-protocol",children:"️TCP (Transmission Control Protocol)"}),e.jsxs(o,{children:[e.jsx("li",{children:e.jsx(r,{href:"#servidor-tcp",children:"Servidor TCP"})}),e.jsx("li",{children:e.jsx(r,{href:"#cliente-tcp",children:"Cliente TCP"})})]})]}),e.jsxs("li",{children:[e.jsx(r,{href:"#udp-user-datagram-protocol",children:"UDP (User Datagram Protocol)"}),e.jsxs(o,{children:[e.jsx("li",{children:e.jsx(r,{href:"#servidor-udp",children:"Servidor UDP"})}),e.jsx("li",{children:e.jsx(r,{href:"#cliente-udp",children:"Cliente UDP"})})]})]}),e.jsx("li",{children:e.jsx(r,{href:"#diferencias-rápidas",children:"Diferencias rápidas"})})]})]})}),e.jsx(d,{children:e.jsx(r,{href:"./../../readme.md#5-python",children:"Regresar a la Guía Principal"})}),e.jsx(n,{}),e.jsx(s,{title:"h2",id:"resumen",children:"Resumen"}),e.jsxs(d,{children:["Los ",e.jsx("strong",{children:"sockets"})," permiten la ",e.jsx("strong",{children:"comunicación entre computadoras o procesos"})," a través de una red (como Internet o una LAN)."]}),e.jsxs(d,{children:["Python ofrece el módulo socket para manejar conexiones",e.jsx("strong",{children:"TCP"})," (orientadas a conexión) y ",e.jsx("strong",{children:"UDP"})," (sin conexión)."]}),e.jsx(n,{}),e.jsx(s,{title:"h2",id:"tcp-transmission-control-protocol",children:"️TCP (Transmission Control Protocol)"}),e.jsxs(o,{children:[e.jsx("li",{children:"Conexión establecida entre cliente y servidor (3-way handshake)."}),e.jsx("li",{children:"Garantiza entrega, orden y fiabilidad."}),e.jsx("li",{children:"Ideal para chats, transferencias, HTTP, etc."})]}),e.jsx(s,{title:"h3",id:"servidor-tcp",children:"Servidor TCP"}),e.jsx(c,{code:`# servidor_tcp.py
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
conn.sendall(b"Mensaje recibido")`,language:"python"}),e.jsx(s,{title:"h3",id:"cliente-tcp",children:"Cliente TCP"}),e.jsx(c,{code:`# cliente_tcp.py
import socket

HOST = '127.0.0.1'
PORT = 5000

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
s.connect((HOST, PORT))
s.sendall(b"Hola servidor TCP")
data = s.recv(1024)
print("Servidor responde:", data.decode())`,language:"python"}),e.jsx(n,{}),e.jsx(s,{title:"h2",id:"udp-user-datagram-protocol",children:"UDP (User Datagram Protocol)"}),e.jsxs(o,{children:[e.jsx("li",{children:"No hay conexión, se envían “paquetes” sin confirmar recepción."}),e.jsx("li",{children:"Más rápido pero menos confiable."}),e.jsx("li",{children:"Ideal para streaming, juegos, mensajes cortos."})]}),e.jsx(s,{title:"h3",id:"servidor-udp",children:"Servidor UDP"}),e.jsx(c,{code:`# servidor_udp.py
import socket

HOST = '127.0.0.1'
PORT = 6000

with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
s.bind((HOST, PORT))
print("Servidor UDP esperando mensajes...")
while True:
data, addr = s.recvfrom(1024)
print("Mensaje de", addr, ":", data.decode())
s.sendto(b"Mensaje recibido", addr)`,language:"python"}),e.jsx(s,{title:"h3",id:"cliente-udp",children:"Cliente UDP"}),e.jsx(c,{code:`# cliente_udp.py
import socket

HOST = '127.0.0.1'
PORT = 6000

with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
s.sendto(b"Hola servidor UDP", (HOST, PORT))
data, _ = s.recvfrom(1024)
print("Servidor responde:", data.decode())`,language:"python"}),e.jsx(n,{}),e.jsx(s,{title:"h2",id:"diferencias-rápidas",children:"Diferencias rápidas"}),e.jsxs(t,{children:[e.jsx(l,{headers:["Protocolo","Conexión","Fiabilidad","Velocidad","Uso típico"]}),e.jsxs("tbody",{children:[e.jsxs(a,{children:[e.jsx(i,{children:"TCP"}),e.jsx(i,{children:"Sí"}),e.jsx(i,{children:"Alta"}),e.jsx(i,{children:"Media"}),e.jsx(i,{children:"Web, chat, FTP"})]}),e.jsxs(a,{children:[e.jsx(i,{children:"UDP"}),e.jsx(i,{children:"No"}),e.jsx(i,{children:"Baja"}),e.jsx(i,{children:"Alta"}),e.jsx(i,{children:"Juegos, streaming, VoIP"})]})]})]}),e.jsx(n,{}),e.jsx(d,{children:e.jsx(r,{href:"./../../readme.md#5-python",children:"Regresar a la Guía Principal"})}),e.jsx("blockquote",{children:e.jsxs(d,{children:[e.jsx("strong",{children:"Autor:"})," Fravelz"]})})]})}export{p as default};
