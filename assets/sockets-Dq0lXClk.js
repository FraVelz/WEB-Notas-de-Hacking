import{j as e,E as b,T as i,L as j,a as S,b as u,d as o,e as v,c as k,f as n}from"./index-DMQoPaND.js";import{c as y,T as g,b as P,a as r}from"./tabla-Btz_eBuW.js";import{C as p}from"./codigo-CPt7AhUC.js";function f(C){const s=k.c(8),{className:T}=C,m=T===void 0?"":T;let t;s[0]===Symbol.for("react.memo_cache_sentinel")?(t=e.jsx(n,{href:"#python",children:"Python"}),s[0]=t):t=s[0];let c,a;s[1]===Symbol.for("react.memo_cache_sentinel")?(c=e.jsx("li",{children:e.jsx(n,{href:"#resumen",children:"Resumen"})}),a=e.jsx(n,{href:"#️tcp-transmission-control-protocol",children:"️TCP (Transmission Control Protocol)"}),s[1]=c,s[2]=a):(c=s[1],a=s[2]);let d,l;s[3]===Symbol.for("react.memo_cache_sentinel")?(d=e.jsxs("li",{children:[a,e.jsxs(o,{children:[e.jsx("li",{children:e.jsx(n,{href:"#servidor-tcp",children:"Servidor TCP"})}),e.jsx("li",{children:e.jsx(n,{href:"#cliente-tcp",children:"Cliente TCP"})})]})]}),l=e.jsx(n,{href:"#udp-user-datagram-protocol",children:"UDP (User Datagram Protocol)"}),s[3]=d,s[4]=l):(d=s[3],l=s[4]);let h;s[5]===Symbol.for("react.memo_cache_sentinel")?(h=e.jsxs("li",{children:[t,e.jsxs(o,{children:[c,d,e.jsxs("li",{children:[l,e.jsxs(o,{children:[e.jsx("li",{children:e.jsx(n,{href:"#servidor-udp",children:"Servidor UDP"})}),e.jsx("li",{children:e.jsx(n,{href:"#cliente-udp",children:"Cliente UDP"})})]})]}),e.jsx("li",{children:e.jsx(n,{href:"#diferencias-rápidas",children:"Diferencias rápidas"})})]})]}),s[5]=h):h=s[5];let x;return s[6]!==m?(x=e.jsx(o,{className:m,children:h}),s[6]=m,s[7]=x):x=s[7],x}function R({}){return e.jsxs(e.Fragment,{children:[e.jsxs(b,{children:[e.jsx(i,{title:"h1",id:"python",children:"Python"}),e.jsx(j,{}),e.jsx(S,{temario:f}),e.jsx(i,{title:"h2",id:"resumen",children:"Resumen"}),e.jsxs(u,{children:["Los ",e.jsx("strong",{children:"sockets"})," permiten la ",e.jsx("strong",{children:"comunicación entre computadoras o procesos"})," a través de una red (como Internet o una LAN)."]}),e.jsxs(u,{children:["Python ofrece el módulo socket para manejar conexiones",e.jsx("strong",{children:"TCP"})," (orientadas a conexión) y ",e.jsx("strong",{children:"UDP"})," (sin conexión)."]}),e.jsx(j,{}),e.jsx(i,{title:"h2",id:"tcp-transmission-control-protocol",children:"️TCP (Transmission Control Protocol)"}),e.jsxs(o,{children:[e.jsx("li",{children:"Conexión establecida entre cliente y servidor (3-way handshake)."}),e.jsx("li",{children:"Garantiza entrega, orden y fiabilidad."}),e.jsx("li",{children:"Ideal para chats, transferencias, HTTP, etc."})]}),e.jsx(i,{title:"h3",id:"servidor-tcp",children:"Servidor TCP"}),e.jsx(p,{code:`# servidor_tcp.py
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
conn.sendall(b"Mensaje recibido")`,language:"python"}),e.jsx(i,{title:"h3",id:"cliente-tcp",children:"Cliente TCP"}),e.jsx(p,{code:`# cliente_tcp.py
import socket

HOST = '127.0.0.1'
PORT = 5000

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
s.connect((HOST, PORT))
s.sendall(b"Hola servidor TCP")
data = s.recv(1024)
print("Servidor responde:", data.decode())`,language:"python"}),e.jsx(j,{}),e.jsx(i,{title:"h2",id:"udp-user-datagram-protocol",children:"UDP (User Datagram Protocol)"}),e.jsxs(o,{children:[e.jsx("li",{children:"No hay conexión, se envían “paquetes” sin confirmar recepción."}),e.jsx("li",{children:"Más rápido pero menos confiable."}),e.jsx("li",{children:"Ideal para streaming, juegos, mensajes cortos."})]}),e.jsx(i,{title:"h3",id:"servidor-udp",children:"Servidor UDP"}),e.jsx(p,{code:`# servidor_udp.py
import socket

HOST = '127.0.0.1'
PORT = 6000

with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
s.bind((HOST, PORT))
print("Servidor UDP esperando mensajes...")
while True:
data, addr = s.recvfrom(1024)
print("Mensaje de", addr, ":", data.decode())
s.sendto(b"Mensaje recibido", addr)`,language:"python"}),e.jsx(i,{title:"h3",id:"cliente-udp",children:"Cliente UDP"}),e.jsx(p,{code:`# cliente_udp.py
import socket

HOST = '127.0.0.1'
PORT = 6000

with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
s.sendto(b"Hola servidor UDP", (HOST, PORT))
data, _ = s.recvfrom(1024)
print("Servidor responde:", data.decode())`,language:"python"}),e.jsx(j,{}),e.jsx(i,{title:"h2",id:"diferencias-rápidas",children:"Diferencias rápidas"}),e.jsxs(y,{children:[e.jsx(g,{headers:["Protocolo","Conexión","Fiabilidad","Velocidad","Uso típico"]}),e.jsxs("tbody",{children:[e.jsxs(P,{children:[e.jsx(r,{children:"TCP"}),e.jsx(r,{children:"Sí"}),e.jsx(r,{children:"Alta"}),e.jsx(r,{children:"Media"}),e.jsx(r,{children:"Web, chat, FTP"})]}),e.jsxs(P,{children:[e.jsx(r,{children:"UDP"}),e.jsx(r,{children:"No"}),e.jsx(r,{children:"Baja"}),e.jsx(r,{children:"Alta"}),e.jsx(r,{children:"Juegos, streaming, VoIP"})]})]})]})]}),e.jsx(v,{temario:f})]})}export{R as default};
