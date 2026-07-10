---
title: Teoria
description: "Fundamentos de redes: OSI/TCP-IP, protocolos, IPs y arquitecturas."
---

# Parte Teórica (conceptos)

Cursos videos de YouTube:

- [Ir curso de YouTube Contando bits - Redes Informáticas](https://www.youtube.com/watch?v=OLSKCWjI778)
- [Ir curso de YouTube Hixec - Redes para ciberseguridad](https://www.youtube.com/watch?v=7ejIdyu8hug)

---

## 1. base (fundamentos)

### ¿Qué son las redes?

- Una **red** es un conjunto de dispositivos conectados entre sí que comparten información y recursos.
- Los dispositivos dentro de una red se llaman **nodos**. Los nodos son puntos de conexión y pueden ser cualquier
  dispositivo capaz de conectarse a la red, como computadoras, teléfonos, impresoras o servidores.
- El **Internet** es la red más grande del mundo, conectando millones de dispositivos alrededor del planeta.

### Componentes de una red:

- **Nodo:** Cualquier dispositivo conectado a la red.
- **Medio de transmisión:** Puede ser **cableado** (como cables de cobre o fibra óptica) o **inalámbrico** (como Wi-Fi o
  Bluetooth).
- **Dispositivos de red:** Facilitan el tráfico de información dentro de la red. Ejemplos incluyen **routers**,
  **switches** y **puntos de acceso**.
- **Protocolo:** Conjunto de reglas y estándares que permite la comunicación entre dos dispositivos, asegurando que se
  entiendan correctamente.

### Conceptos básicos de redes:

- **Cliente:** Dispositivo que solicita servicios o información de otro dispositivo (el servidor).
- **Servidor:** Dispositivo que ofrece servicios o información a otros dispositivos (clientes).
- **IP:** Dirección única que identifica a cada dispositivo en la red.
- **Puerto:** Punto de conexión dentro de un dispositivo que permite la comunicación de servicios específicos.
- **Protocolo:** Reglas que regulan cómo se envía y recibe la información en la red.

### Funciones principales:

- Compartir recursos.
- Comunicación.
- Almacenamiento de datos.

---

## 2. Historia de las redes

- **Década de 1960 – Orígenes**: se crean las primeras ideas de redes para compartir información entre computadoras.
- **ARPANET (1969)**: la primera red a gran escala, financiada por el Departamento de Defensa de EE. UU., conectaba
  universidades y laboratorios.
- **Objetivo**: comunicación eficiente y compartir recursos informáticos.
- **Década de 1970 – Protocolos y estandarización**
  - Se desarrolla **TCP/IP**: protocolo que permite que diferentes redes se comuniquen.
  - Se crean redes locales (**LANs**) para conectar computadoras dentro de una misma institución.
- **Década de 1980 – Expansión**
  - Aparición de **Ethernet**: tecnología que facilita la comunicación en redes locales.
  - Nace **Internet como red de redes**, conectando múltiples LANs y WANs (redes de área amplia).
- **Década de 1990 – Internet comercial**
  - La red se abre a fines comerciales y al público general.
  - Surge la **World Wide Web (WWW)** con navegadores web.
  - Popularización del correo electrónico y servicios de mensajería.
- **Años 2000 en adelante – Redes modernas**
  - Expansión de **Wi-Fi** y **redes móviles (3G, 4G, 5G)**.
  - Redes sociales, streaming y servicios en la nube transforman la forma de comunicarse.
  - Mayor enfoque en seguridad y privacidad.

---

## 3. Modelos de redes

Los modelos ayudan a entender cómo funciona la comunicación entre dispositivos:

### Modelo OSI (Open Systems Interconnection)

- Divide la comunicación en **7 capas**:
  - **Física**: cables, señales eléctricas o de luz.
  - **Enlace de datos**: control de errores y transmisión entre nodos.
  - **Red**: direccionamiento y rutas (ej. IP).
  - **Transporte**: garantiza entrega correcta de datos (ej. TCP).
  - **Sesión**: mantiene la conexión entre aplicaciones.
  - **Presentación**: traduce datos (ej. cifrado, formato).
  - **Aplicación**: programas que usan la red (ej. navegador, correo).

### Modelo TCP/IP

- Más práctico y usado en Internet.
- Tiene **4 capas**:
  - **Acceso a red**: transmisión física de datos.
  - **Internet**: direccionamiento y enrutamiento (IP).
  - **Transporte**: comunicación confiable (TCP) o rápida (UDP).
  - **Aplicación**: servicios de red como HTTP, FTP, SMTP.

---

## 4. Tipos de redes según su alcance

- **LAN (Local Area Network)**: red local, p. ej., en una casa o escuela.
- **WAN (Wide Area Network)**: red de largo alcance, p. ej., Internet.
- **MAN (Metropolitan Area Network)**: cubre una ciudad.
- **PAN (Personal Area Network)**: dispositivos cercanos, p. ej., Bluetooth.

---

## 5. Arquitectura Cliente-Servidor

La **arquitectura cliente-servidor** es un modelo de diseño de sistemas en el que las tareas se distribuyen entre dos
tipos de entidades: **clientes** y **servidores**.

| Rol | Idea |
| --- | ---- |
| Servidor | Ofrece servicios (ej. web → HTML) |
| Cliente | Pide servicios (ej. navegador) |
| Red | Cable (Ethernet) o Wi‑Fi |

Flujo: solicitud → el servidor procesa → respuesta.

Ejemplo: abres YouTube → el navegador pide el video → los servidores lo mandan → se reproduce.

| A favor | En contra |
| ------- | --------- |
| Datos y control centralizados | Si cae el servidor, no hay servicio |
| Más fácil de administrar/asegurar | Hace falta infra para muchos clientes |
| Escalas clientes sin rehacer el servidor | |

---

## 6. Arquitectura de Red

La **arquitectura de red** describe cómo los **dispositivos y servicios están organizados y conectados** para
comunicarse. La arquitectura cliente-servidor es un tipo de arquitectura de red, pero existen otros modelos, como
**peer-to-peer (P2P)**.

### Tipos comunes

- **Cliente-Servidor (como vimos):** un servidor central da servicios a múltiples clientes.
- **Peer-to-Peer (P2P):**
  - Todos los dispositivos son iguales, pueden **servir y pedir recursos**.
  - Ejemplo: aplicaciones de torrents.
- **Red en estrella:**
  - Todos los dispositivos están conectados a un **hub o switch central**.
  - Muy usado en redes locales (LAN).
- **Red en malla:**
  - Cada dispositivo está conectado a varios otros dispositivos.
  - Alta confiabilidad y redundancia.

---

## 7. Protocolos de red

Un **protocolo de red** es un conjunto de **reglas y estándares** que permiten que los dispositivos se comuniquen
correctamente a través de una red.

### Funciones principales de los protocolos:

- Determinan **cómo se envían los datos**.
- Definen **cómo se reciben y verifican**.
- Aseguran que **dispositivos distintos puedan entenderse**.

### Ejemplos de protocolos comunes:

| Concepto | Significado |
| --- | --- |
| IP | Direccionamiento y enrutamiento de paquetes (capa Internet / red). |
| TCP | Transporte confiable: conexión, reordenamiento, retransmisión. |
| UDP | Transporte rápido sin garantía de entrega (DNS, streaming, juegos). |
| ICMP | Diagnóstico y errores de red (`ping`, mensajes de unreachable). |
| ARP | Resuelve IP → MAC en la red local. |
| DNS | Resuelve nombres → IP. |
| DHCP | Asigna IP, máscara, gateway y DNS automáticamente. |
| HTTP / HTTPS | Web; HTTPS añade TLS. |
| FTP / SFTP | Transferencia de archivos (SFTP va sobre SSH). |
| SMTP / IMAP / POP3 | Envío / lectura de correo. |
| SSH | Acceso remoto cifrado a shells/servidores. |

Muchos protocolos trabajan **juntos en capas** (OSI o TCP/IP).

---

## 8. Comunicaciones en Redes

La **comunicación en redes** es el proceso mediante el cual los **dispositivos intercambian información** siguiendo
protocolos.

### Tipos de comunicación:

- **Unicast:** comunicación de un dispositivo a otro específico.
  - Ejemplo: enviar un mensaje privado.
- **Broadcast:**
  - Comunicación de un dispositivo a **todos** los dispositivos de la red.
  - Ejemplo: anuncios dentro de una red local.
- **Multicast:**
  - Comunicación a un **grupo específico** de dispositivos.
  - Ejemplo: transmisión de video en vivo a varios usuarios.

### Medios de transmisión:

- **Alámbricos:** Cable Ethernet, fibra óptica.
- **Inalámbricos:** Wi-Fi, Bluetooth, redes móviles (4G/5G).

### Procesos clave en la comunicación:

- **Codificación y empaquetado de datos** (se forman los paquetes de información).
- **Transmisión** por el medio (cable o aire).
- **Recepción y verificación** de errores.
- **Entrega** al dispositivo o aplicación correcta.

---

## 9. Protocolos de Aplicación

Los **protocolos de aplicación** son reglas que permiten a los **programas o aplicaciones** comunicarse a través de la
red. Trabajan en la **capa más alta** de los modelos de red (OSI o TCP/IP).

### Funciones principales:

- Definen cómo las aplicaciones intercambian datos.
- Permiten que diferentes programas se entiendan aunque sean de fabricantes distintos.
- Usan protocolos de transporte como **TCP o UDP** para enviar los datos.

### Ejemplos importantes:

| Concepto | Significado |
| --- | --- |
| HTTP | Petición/respuesta web en texto claro (puerto 80). |
| HTTPS | HTTP sobre TLS (puerto 443). |
| DNS | Consultas de nombres; suele ir sobre UDP/53 (TCP en respuestas grandes/zona). |
| SMTP | Envío de correo entre servidores/clientes. |
| IMAP | Leer correo dejando mensajes en el servidor. |
| POP3 | Descargar correo al cliente (suele borrarlo del servidor). |
| FTP | Transferencia de archivos (control + datos; poco seguro sin TLS). |
| SSH | Shell remoto y túneles cifrados (puerto 22). |
| NTP | Sincronización de reloj. |
| SNMP | Monitorización de equipos de red. |

Cada uno va **encima de TCP o UDP** (capa de transporte).

---

## 10. Direcciones IP

Una **dirección IP (Internet Protocol)** es un **identificador único** que permite que un dispositivo se comunique en
una red. Funciona como una **dirección postal** para enviar información.

### Tipos de direcciones IP:

- **IPv4:**
  - Formato: 192.168.1.10 (números de 0 a 255).
  - Ejemplo: 172.16.0.5
  - Tiene espacio limitado (~4.000 millones de direcciones).
- **IPv6:**
  - Formato: 2001:0db8:85a3:0000:0000:8a2e:0370:7334
  - Diseñada para soportar millones de dispositivos más.

| Tipo IPv4 | Idea |
| --------- | ---- |
| Pública | Única en Internet |
| Privada | LAN; no enrutable directo a Internet (ej. `192.168.0.0/16`) |

La IP identifica el host y enruta paquetes. La app usa **IP + puerto** (HTTP/HTTPS → 80/443).

Ejemplo: el navegador habla HTTPS con la IP del servidor; TCP/IP mueve los datos.
