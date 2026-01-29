---
title: Teoria
route: /redes/Teoria
---

# Parte Teórica (conceptos)
Cursos videos de YouTube:

- [Ir curso de YouTube Contando bits - Redes Informáticas](https:/www.youtube.com/watch?v=OLSKCWjI778)
- [Ir curso de YouTube Hixec - Redes para ciberseguridad](https:/www.youtube.com/watch?v=7ejIdyu8hug)

---

## 1. base (fundamentos) {#1-base-fundamentos}
**¿Qué son las redes?**

- Una **red** es un conjunto de dispositivos conectados entre sí que comparten información y recursos.
- Los dispositivos dentro de una red se llaman **nodos**. Los nodos son puntos de conexión y pueden ser cualquier dispositivo capaz de conectarse a la red, como computadoras, teléfonos, impresoras o servidores.
- El **Internet** es la red más grande del mundo, conectando millones de dispositivos alrededor del planeta.

**Componentes de una red:**

- **Nodo:** Cualquier dispositivo conectado a la red.
- **Medio de transmisión:** Puede ser **cableado** (como cables de cobre o fibra óptica) o **inalámbrico** (como Wi-Fi o Bluetooth).
- **Dispositivos de red:** Facilitan el tráfico de información dentro de la red. Ejemplos incluyen **routers**, **switches** y **puntos de acceso**.
- **Protocolo:** Conjunto de reglas y estándares que permite la comunicación entre dos dispositivos, asegurando que se entiendan correctamente.

**Conceptos básicos de redes:**

- **Cliente:** Dispositivo que solicita servicios o información de otro dispositivo (el servidor).
- **Servidor:** Dispositivo que ofrece servicios o información a otros dispositivos (clientes).
- **IP:** Dirección única que identifica a cada dispositivo en la red.
- **Puerto:** Punto de conexión dentro de un dispositivo que permite la comunicación de servicios específicos.
- **Protocolo:** Reglas que regulan cómo se envía y recibe la información en la red.

**Funciones principales:**

- Compartir recursos.
- Comunicación.
- Almacenamiento de datos.

---

## 2. Historia de las redes {#2-historia-de-las-redes}
- **Década de 1960 – Orígenes** <Lista> Se crean las primeras ideas de redes para compartir información entre computadoras.
- **ARPANET (1969)**: La primera red a gran escala, financiada por el Departamento de Defensa de EE. UU., conectaba universidades y laboratorios.
- Objetivo: comunicación eficiente y compartir recursos informáticos.

</li>
</Lista>
<li>
**Década de 1970 – Protocolos y estandarización**

- Se desarrolla **TCP/IP**: protocolo que permite que diferentes redes se comuniquen.
- Se crean redes locales (**LANs**) para conectar computadoras dentro de una misma institución.

</li>
<li>
**Década de 1980 – Expansión**

- Aparición de **Ethernet**: tecnología que facilita la comunicación en redes locales.
- Nace **Internet como red de redes**, conectando múltiples LANs y WANs (redes de área amplia).

</li>
<li>
**Década de 1990 – Internet comercial**

- La red se abre a fines comerciales y al público general.
- Surge la **World Wide Web (WWW)** con navegadores web.
- Popularización del correo electrónico y servicios de mensajería.

</li>
<li>
**Años 2000 en adelante – Redes modernas**

- Expansión de **Wi-Fi** y **redes móviles (3G, 4G, 5G)**.
- Redes sociales, streaming y servicios en la nube transforman la forma de comunicarse.
- Mayor enfoque en seguridad y privacidad.

</li>
---

## 3. Modelos de redes {#3-modelos-de-redes}
Los modelos ayudan a entender cómo funciona la comunicación entre dispositivos:

### <strong>Modelo OSI (Open Systems Interconnection)</strong> {#modelo-osi-open-systems-interconnection}
- Divide la comunicación en **7 capas**: <Lista> **Física**: cables, señales eléctricas o de luz.
- **Enlace de datos**: control de errores y transmisión entre nodos.
- **Red**: direccionamiento y rutas (ej. IP).
- **Transporte**: garantiza entrega correcta de datos (ej. TCP).
- **Sesión**: mantiene la conexión entre aplicaciones.
- **Presentación**: traduce datos (ej. cifrado, formato).
- **Aplicación**: programas que usan la red (ej. navegador, correo).

</li>
</Lista>
### <strong>Modelo TCP/IP</strong> {#modelo-tcpip}
- Más práctico y usado en Internet.
- Tiene **4 capas**:
- **Acceso a red**: transmisión física de datos.
- **Internet**: direccionamiento y enrutamiento (IP).
- **Transporte**: comunicación confiable (TCP) o rápida (UDP).
- **Aplicación**: servicios de red como HTTP, FTP, SMTP.

</Lista >

---

## 4. Tipos de redes según su alcance {#4-tipos-de-redes-según-su-alcance}
- **LAN (Local Area Network)**: red local, p. ej., en una casa o escuela.
- **WAN (Wide Area Network)**: red de largo alcance, p. ej., Internet.
- **MAN (Metropolitan Area Network)**: cubre una ciudad.
- **PAN (Personal Area Network)**: dispositivos cercanos, p. ej., Bluetooth.

---

## 5. Arquitectura Cliente-Servidor {#5-arquitectura-cliente-servidor}
La **arquitectura cliente-servidor** es un modelo de diseño de sistemas en el que las tareas se distribuyen entre dos tipos de entidades: **clientes** y **servidores**.

### <strong>Componentes principales:</strong> {#componentes-principales}
- **Servidor:** Es un equipo o programa que **ofrece servicios** o recursos a otros dispositivos. Ejemplo: un servidor web que envía páginas HTML.
- **Cliente:** Es un equipo o programa que **solicita servicios** al servidor. Ejemplo: un navegador web que solicita páginas a un servidor.
- **Red:** Medio que permite la comunicación entre cliente y servidor. Puede ser cableada (Ethernet) o inalámbrica (Wi-Fi).

### <strong>Funcionamiento:</strong> {#funcionamiento}
- El cliente envía una **solicitud** al servidor.
- El servidor procesa la solicitud.
- El servidor envía una **respuesta** al cliente.

<blockquote>
Ejemplo práctico: Cuando abres YouTube:

- Tú navegador (cliente) pide un video.
- Los servidores de YouTube lo envían.
- Tú navegador reproduce el video.

</blockquote>
### <strong>Ventajas:</strong> {#ventajas}
- Centralización de datos y control.
- Facilita la administración y seguridad.
- Escalabilidad: se pueden añadir más clientes sin cambiar el servidor.

### <strong>Desventajas:</strong> {#desventajas}
- Sí el servidor falla, los clientes quedan sin servicio.
- Requiere buena infraestructura para manejar muchos clientes.

---

## 6. Arquitectura de Red {#6-arquitectura-de-red}
La **arquitectura de red** describe cómo los **dispositivos y servicios están organizados y conectados** para comunicarse. La arquitectura cliente-servidor es un tipo de arquitectura de red, pero existen otros modelos, como **peer-to-peer (P2P)**.

### <strong>Tipos comunes de arquitectura de red:</strong> {#tipos-comunes-de-arquitectura-de-red}
- **Cliente-Servidor (como vimos):** <Lista> Un servidor central da servicios a múltiples clientes.

</li>
<li>
**Peer-to-Peer (P2P):**

- Todos los dispositivos son iguales, pueden **servir y pedir recursos**.
- Ejemplo: aplicaciones de torrents.

</li>
<li>
**Red en estrella:**

- Todos los dispositivos están conectados a un **hub o switch central**.
- Muy usado en redes locales (LAN).

</li>
<li>
**Red en malla:**

- Cada dispositivo está conectado a varios otros dispositivos.
- Alta confiabilidad y redundancia.

</li>
</Lista>
---

## 7. Protocolos de red {#7-protocolos-de-red}
Un **protocolo de red** es un conjunto de **reglas y estándares** que permiten que los dispositivos se comuniquen correctamente a través de una red.

### <strong>Funciones principales de los protocolos:</strong> {#funciones-principales-de-los-protocolos}
- Determinan **cómo se envían los datos**.
- Definen **cómo se reciben y verifican**.
- Aseguran que **dispositivos distintos puedan entenderse**.

### <strong>Ejemplos de protocolos comunes:</strong> {#ejemplos-de-protocolos-comunes}
<!-- Tabla convertida manualmente -->

<blockquote>
Nota: Muchos protocolos trabajan **juntos en capas** según el modelo OSI o TCP/IP.

</blockquote>
---

## 8. Comunicaciones en Redes {#8-comunicaciones-en-redes}
La **comunicación en redes** es el proceso mediante el cual los **dispositivos intercambian información** siguiendo protocolos.

### <strong>Tipos de comunicación:</strong> {#tipos-de-comunicación}
- **Unicast:** <Lista> Comunicación de un dispositivo a otro específico.
- Ejemplo: enviar un mensaje privado.

</li>
<li>
**Broadcast:**

- Comunicación de un dispositivo a **todos** los dispositivos de la red.
- Ejemplo: anuncios dentro de una red local.

</li>
<li>
**Multicast:**

- Comunicación a un **grupo específico** de dispositivos.
- Ejemplo: transmisión de video en vivo a varios usuarios.

</li>
</Lista>
### <strong>Medios de transmisión:</strong> {#medios-de-transmisión}
- **Alámbricos:** Cable Ethernet, fibra óptica.
- **Inalámbricos:** Wi-Fi, Bluetooth, redes móviles (4G/5G).

### <strong>Procesos clave en la comunicación:</strong> {#procesos-clave-en-la-comunicación}
- **Codificación y empaquetado de datos** (se forman los paquetes de información).
- **Transmisión** por el medio (cable o aire).
- **Recepción y verificación** de errores.
- **Entrega** al dispositivo o aplicación correcta.

---

## 9. Protocolos de Aplicación {#9-protocolos-de-aplicación}
Los **protocolos de aplicación** son reglas que permiten a los **programas o aplicaciones** comunicarse a través de la red. Trabajan en la **capa más alta** de los modelos de red (OSI o TCP/IP).

### <strong>Funciones principales:</strong> {#funciones-principales}
- Definen cómo las aplicaciones intercambian datos.
- Permiten que diferentes programas se entiendan aunque sean de fabricantes distintos.
- Usan protocolos de transporte como **TCP o UDP** para enviar los datos.

### <strong>Ejemplos importantes:</strong> {#ejemplos-importantes}
<!-- Tabla convertida manualmente -->

<blockquote>
Nota: Cada protocolo de aplicación funciona **encima de TCP o UDP** para garantizar que los datos lleguen correctamente.

</blockquote>
---

## 10. Direcciones IP {#10-direcciones-ip}
Una **dirección IP (Internet Protocol)** es un **identificador único** que permite que un dispositivo se comunique en una red. Funciona como una **dirección postal** para enviar información.

### <strong>Tipos de direcciones IP:</strong> {#tipos-de-direcciones-ip}
- **IPv4:** <Lista> Formato: 192.168.1.10 (números de 0 a 255).
- Ejemplo: 172.16.0.5
- Tiene espacio limitado (~4.000 millones de direcciones).

</li>
<li>
**IPv6:**

- Formato: 2001:0db8:85a3:0000:0000:8a2e:0370:7334
- Diseñada para soportar millones de dispositivos más.

</li>
</Lista>
### <strong>Clases de direcciones IP (IPv4):</strong> {#clases-de-direcciones-ip-ipv4}
- **Públicas:** Únicas en Internet, accesibles desde cualquier lugar.
- **Privadas:** Usadas en redes locales, no accesibles directamente desde Internet. Ej: 192.168.0.0/16

### <strong>Funciones de la IP:</strong> {#funciones-de-la-ip}
- Identificar dispositivos en la red.
- Dirigir los paquetes de datos hacia el destino correcto.

### <strong>Relación con los protocolos de aplicación:</strong> {#relación-con-los-protocolos-de-aplicación}
- Los **protocolos de aplicación** usan la **IP** para localizar a los dispositivos y el **puerto** para identificar la aplicación dentro de ese dispositivo.

<blockquote>
Ejemplo práctico:

- Quiero abrir un sitio web: <Lista> Mi navegador usa **HTTP/HTTPS** (protocolo de aplicación).
- Se conecta a la **IP del servidor web** (dirección IP).
- Los datos llegan gracias a TCP/IP.

</li>
</Lista>
</blockquote>