---
title: Sockets
route: /python/modulos/Sockets
---

# Python
---

## Resumen {#resumen}
Los **sockets** permiten la **comunicación entre computadoras o procesos** a través de una red (como Internet o una LAN).

Python ofrece el módulo socket para manejar conexiones **TCP** (orientadas a conexión) y **UDP** (sin conexión).

---

## ️TCP (Transmission Control Protocol) {#tcp-transmission-control-protocol}
- Conexión establecida entre cliente y servidor (3-way handshake).
- Garantiza entrega, orden y fiabilidad.
- Ideal para chats, transferencias, HTTP, etc.

### Servidor TCP {#servidor-tcp}
```python
# servidor_tcp.py
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
conn.sendall(b"Mensaje recibido")
```

### Cliente TCP {#cliente-tcp}
```python
# cliente_tcp.py
HOST = '127.0.0.1'
PORT = 5000

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
s.connect((HOST, PORT))
s.sendall(b"Hola servidor TCP")
data = s.recv(1024)
print("Servidor responde:", data.decode())
```

---

## UDP (User Datagram Protocol) {#udp-user-datagram-protocol}
- No hay conexión, se envían “paquetes” sin confirmar recepción.
- Más rápido pero menos confiable.
- Ideal para streaming, juegos, mensajes cortos.

### Servidor UDP {#servidor-udp}
```python
# servidor_udp.py
HOST = '127.0.0.1'
PORT = 6000

with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
s.bind((HOST, PORT))
print("Servidor UDP esperando mensajes...")
while True:
data, addr = s.recvfrom(1024)
print("Mensaje de", addr, ":", data.decode())
s.sendto(b"Mensaje recibido", addr)
```

### Cliente UDP {#cliente-udp}
```python
# cliente_udp.py
HOST = '127.0.0.1'
PORT = 6000

with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
s.sendto(b"Hola servidor UDP", (HOST, PORT))
data, _ = s.recvfrom(1024)
print("Servidor responde:", data.decode())
```

---

## Diferencias rápidas {#diferencias-rápidas}
<!-- Tabla convertida manualmente -->