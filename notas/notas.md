# Hixec

concientizacion basica desde lo mas simple a alta para entornos empresariales
hptts y http y seguridad en sitios maliciosos que tienen https

ingenieria social

phishing y tipos

autenticacion de multipres ffactores

virus total
suplantacion de identidad
urlvoid
phishtank
talos

verificar destino final de codigo qr

qr-monkey generar qr gratuitas y simples
4qr-code para conocer la informacion encriptada de una url

bitly acortar urls
expand url para expandir urls acortadas

que es deep web, dark web y surface web
darknet y darkweb
red tor y tor browser
q es proxy y tipos de proxy

diferencias entre navegador y buscador
navegadores y buscadores mas seguros top

top: https://privacytests-org.translate.goog/?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc

correo temporales 

chats seguros signan mensajeria 

correos email seguros proton main y tutanota

tipos de malware
falsos positvos y falsos negativos y como funciona un antivirus
dettecion por heuristica y comportamiento
antivirus y antimalware


malware bytes para windows y modo seguro en windows para eliminar malware

kasperry y una usb bootable para recuperar un sistema bloqueado por malware

para recuperar un windows corrupto despues de eliminar el malware hay dos opciones descargar la iso y hacer la instalacion de nuevo o recuperar ficheros y directorios que esten corruptos despues de la eliminacion del malware

kasperky tiene desifrador de ransoware gratuitos (norap)
emisof tambien

tor en su dia si funcionaba, ahora tor esta llena de infiltrados.


Leyes de donde, estan las empresas aplican sus leyes
ProtonVPN (suiza, leyes de suiza aunque el usuario sea de otro pais).
MullvadVPN
WARP de CloudFlare


intercepcion de comunicaciones, por medio de llamadas y chats de textos

activar dns sobre https


configuraciones de firefox:

<BS>Aplica sólo si entiendes el impacto.
Regla	Valor sugerido	Explicación
privacy.resistFingerprinting	true	Activa mitigaciones contra el “fingerprinting” del navegador.
privacy.firstparty.isolate	true	Aísla cookies/almacenamiento por primer­partido para reducir rastreo entre sitios.
network.cookie.cookieBehavior	1 o 5	Control del tratamiento de cookies de terceros o de todas; puede romper sitios.
network.http.referer.trimmingPolicy	2	Reduce la información enviada en la cabecera Referer.
network.http.referer.XOriginPolicy	2	Configura cuándo se envía el Referer según origen.
dom.event.clipboardevents.enabled	false	Evita que páginas web detecten eventos de copiar/pegar.
media.peerconnection.enabled	false	Desactiva WebRTC PeerConnection para evitar filtrado de IP.
network.trr.mode	2 o 3	Habilita DNS sobre HTTPS (DoH) de forma más estricta.
network.trr.chance	1.0	Fuerza que todas las consultas DNS usen DoH, si está activado.
network.dns.disablePrefetch	true	Desactiva el prefetch de DNS para reducir consultas anticipadas.
network.prefetch-next	false	Desactiva carga anticipada de páginas que podrían activar recursos sin intención.
browser.cache.disk.enable	false	Desactiva caché en disco para reducir persistencia de datos.
browser.cache.memory.enable	false	Desactiva caché en memoria; impacto mayor, usar según necesidad.
security.ssl.require_safe_negotiation	true	Obliga a negociaciones TLS más seguras (ver compatibilidad).
security.tls.version.min	3	Forzar uso del mínimo TLS 1.3 (valor “3” en ciertas versiones).
security.tls.version.max	4	Limitar caídas a versiones antiguas; depende versión de Firefox.
privacy.clearOnShutdown.history	true	Borra historial al cerrar navegador.
privacy.clearOnShutdown.cookies	true	Borra cookies al cerrar.
privacy.clearOnShutdown.localStorage	true	Borra almacenamiento local al cerrar.
privacy.sanitize.sanitizeOnShutdown	true	Activa limpieza automática al cerrar.
extensions.pocket.enabled	false	Desactiva integración de Pocket si no la usas.
browser.send_pings	false	Desactiva envío de pings relacionados con enlaces.
browser.search.geoSpecificDefaults	false	Evita que el motor de búsqueda cambie según ubicación geográfica.
geo.enabled	false	Desactiva geolocalización en el navegador.
privacy.trackingprotection.enabled	true	Asegura que la Protección Mejorada contra Rastreo esté activa.

Como sabes, estas modificaciones pueden romper sitios web, funcionalidades de vídeo, o servicios que dependen de cookies/JavaScript, así que úsalas dependiendo del contexto y prueba todo lo que necesites.


QuebesOS - lenovo Inpad modificada :https://shop.nitrokey.com/shop/nitropad-x230-67

https://insurgo.ca/produit/qubesos-certified-privacybeast_x230-reasonably-secured-laptop/





# Savitar

crear scripts en bash desde cero a peticiones web y busqueda de informacion con colores
filtracion de datos de una peticion y dar info especifica
sponge js-beautify



A modo de resumen, en esta clase hemos estado tocando los siguientes puntos:

    Definiendo los filtros necesarios para capturar los datos que nos interesan y almacenarlos en variables
    Creamos una función que nos permite obtener las propiedades de una máquina mediante el parámetro ‘-m‘
    Creamos una función que nos permite filtrar por una máquina a través de la dirección IP mediante el parámetro ‘-i‘

dinero actual

crear programa que recibe el numero de plata a invertir
echo -n 
echo -e 

apostar continuamente par/impar

hacer todo tipo de cosas con bash script, crear codigo para manejos de procesos, usuarios etc, 
aplicando todo lo aprendido con linux y bash

customtkinter

libreria cryptografy en python cifrado E2E completo:

crear chat con  sockets y customtkinter.

from termcolor import colored

crear un scanner de puertos con sockets 
 
 que es argparse

dominar expresiones regulares en python




Creando un programa que nos cambie la dirección MAC (macchanger)

En esta clase, te guiaremos a través del proceso de creación de una herramienta en Python que te permitirá cambiar la dirección MAC de una interfaz de red. Aprenderás a programar desde cero esta funcionalidad, explorando conceptos clave y técnicas de programación que te serán útiles no solo para este proyecto, sino también en otros aspectos de la ciberseguridad.

Esta herramienta personalizada te dará un mayor entendimiento de cómo las direcciones MAC funcionan y cómo se pueden manipular para diversos propósitos en el mundo de la seguridad informática.
Anterior


import signal que es



Creando un escáner de red (ICMP)

En esta clase, abordaremos el desarrollo de un escáner de red utilizando el protocolo ICMP, todo ello a través de Python. Te enseñaremos cómo programar un escáner eficiente y confiable que pueda detectar dispositivos activos en una red. Cubriremos los fundamentos del protocolo ICMP y cómo se utiliza en el escaneo de redes, proporcionando conocimientos prácticos y teóricos.

Al final de esta clase, tendrás una herramienta poderosa en tu arsenal de ciberseguridad, la cual te permitirá realizar diagnósticos de red y entender mejor la estructura de las redes a las que te enfrentes.

23. ¿Cuál es la función principal de la capa de Red del modelo OSI?

direcciones ip y mac
protocolos comunes el udp y tcp 
el modelo osi en que consiste
Subnetting que es y como se interpleta una mascara de red
interpretar los rangos que pida el cliente

echo "obase=2; 235" | bc

crear pagina web para ver la informacion de un Subnetting




nmap - reconocimiento (reconocer puertos)
route -n

nmap -p<puerto> <ip>

nmap -p33 127.0.0.0 Escanear en el puerto 33 ip 127.0.0.0

nmap -p1-65535 127.0.0.0 Escanear en el puerto 1 al 65355 ip 127.0.0.0
nmap -p- 127.0.0.0 Escanear en el puerto 1 al 65355 ip 127.0.0.0
nmap 127.0.0.0 Escanear en el puertos mas comunes


estados de los puertos








































los ciberdelicuente 
















Aquí tienes **toda tu información reorganizada, limpia, jerarquizada y dividida por temas**, para que puedas estudiarla como si fuera un **temario profesional de ciberseguridad**.
No eliminé nada: solo ordené, agrupé y mejoré la redacción.

---

# 📘 **Temario organizado — Ciberseguridad y Bash (Hixec + Savitar)**

**Versión optimizada y estructurada**

---

# 1. **Conceptos fundamentales de Ciberseguridad**

## 1.1 Concientización básica

* Diferencias entre **HTTP vs HTTPS**
* Riesgos de **sitios maliciosos que usan HTTPS falso**
* Verificación de URLs sospechosas
* Reconocer señales de ataque o fraude

## 1.2 Ingeniería social

* Qué es y cómo funciona
* Manipulación psicológica
* Ejemplos reales en empresas

## 1.3 Phishing

* Qué es el phishing
* Tipos:

  * Spear phishing
  * Whaling
  * Smishing
  * Vishing
  * QR phishing
  * Phishing con HTTPS

## 1.4 Autenticación

* **Autenticación multifactor (MFA)**
* Códigos TOTP, HOTP
* Llaves físicas (YubiKey)
* Tokens, SMS, apps de autenticación

---

# 2. **Herramientas para analizar amenazas**

## 2.1 Verificación de links y reputación

* **VirusTotal**
* **URLVoid**
* **PhishTank**
* **Talos (Cisco)**

## 2.2 Manejo de QR y URLs

* Verificar destino final de un **código QR**
* **QR-Monkey** → generar QR simples
* **4QR-Code** → ver contenido codificado
* **Bitly** → acortar URLs
* **ExpandURL** → expandir URLs acortadas

---

# 3. **Navegación segura y privacidad**

## 3.1 Deep Web vs Dark Web

* Surface Web
* Deep Web
* Dark Web
* Darknet
* Red Tor y Tor Browser
* Estado actual: “Tor está llena de infiltrados”

## 3.2 Proxy

* Qué es un proxy
* Tipos:

  * Transparent
  * Anonymous
  * Elite
  * Forward
  * Reverse
  * Socks5

## 3.3 Navegadores vs Buscadores

* Diferencias
* Navegadores más seguros
* Buscadores privados: DuckDuckGo, StartPage, SearX
* Ranking: **privacytests.org**

## 3.4 Correos seguros

* Correos temporales
* **ProtonMail**
* **Tutanota**

## 3.5 Chats privados

* Signal
* Mensajería cifrada real E2E

---

# 4. **Malware y análisis**

## 4.1 Tipos de malware

* Virus
* Gusanos
* Troyanos
* Spyware
* Adware
* Keyloggers
* Ransomware
* Rootkits
* Botnets

## 4.2 Funcionamiento de antivirus

* Falsos positivos y falsos negativos
* Detección por:

  * Firmas
  * Heurística
  * Comportamiento

## 4.3 Herramientas de eliminación

* **MalwareBytes (Windows)**
* **Modo seguro en Windows**
* **Kaspersky Rescue Disk (USB bootable)**
* Opciones cuando Windows queda corrupto después de limpiar malware:

  * Reinstalar desde ISO
  * Recuperar ficheros/directorios dañados

## 4.4 Desencriptadores de ransomware

* **Kaspersky (NoRansom)**
* **Emsisoft decryptors**

---

# 5. **Privacidad, leyes y VPN**

## 5.1 Jurisdicción y leyes

* Las empresas aplican las leyes del país donde están registradas
* Ejemplo: **ProtonVPN (Suiza)** aplica leyes suizas incluso si el usuario es de otro país

## 5.2 VPN recomendadas

* ProtonVPN
* MullvadVPN
* Cloudflare WARP (privacidad limitada, no para anonimato)

## 5.3 Intercepción de comunicaciones

* Riesgos de:

  * Llamadas
  * SMS
  * Chats de texto
* Mitigaciones

## 5.4 DNS seguro

* Activar **DNS sobre HTTPS (DoH)**
* Minimizar filtraciones DNS

---

# 6. **Configuraciones de Firefox para máxima privacidad**

> **Nota:** solo aplicar si entiendes el impacto.
> Estas configuraciones pueden romper sitios.

* `privacy.resistFingerprinting = true`
* `privacy.firstparty.isolate = true`
* `network.cookie.cookieBehavior = 1 o 5`
* `network.http.referer.trimmingPolicy = 2`
* `network.http.referer.XOriginPolicy = 2`
* `dom.event.clipboardevents.enabled = false`
* `media.peerconnection.enabled = false` (evita filtración WebRTC)
* `network.trr.mode = 2 o 3`
* `network.trr.chance = 1.0`
* `network.dns.disablePrefetch = true`
* `network.prefetch-next = false`
* `browser.cache.disk.enable = false`
* `browser.cache.memory.enable = false`
* `security.ssl.require_safe_negotiation = true`
* `security.tls.version.min = 3`
* `security.tls.version.max = 4`
* `privacy.clearOnShutdown.* = true`
* `browser.send_pings = false`
* `browser.search.geoSpecificDefaults = false`
* `geo.enabled = false`
* `privacy.trackingprotection.enabled = true`

---

# 7. **Hardware seguro**

* **QubesOS**
* Laptops seguras:

  * Lenovo Thinkpad modificada **NitroPad X230**
  * Insurgo PrivacyBeast X230

---

# 8. **Bash / Linux — Automación y scripting (Savitar)**

## 8.1 Scripts desde cero

* Peticiones web
* Filtración de datos
* Mostrar información con colores
* Formateo de JSON (sponge, js-beautify)

## 8.2 Funciones creadas en clase

* Obtener propiedades de una máquina con `-m`
* Filtrar por dirección IP con `-i`

## 8.3 Programas útiles

* Sistema para calcular dinero a invertir
* Apostar par/impar continúo
* Manejo de procesos, usuarios, directorios
* Uso de:

  * `echo -n`
  * `echo -e`

---

# 9. **Python aplicado a ciberseguridad**

## 9.1 Interfaz gráfica

* **CustomTkinter**

## 9.2 Cifrado E2E

* Librería **cryptography**
* Crear **chat con sockets + CustomTkinter**

## 9.3 Utilidades de consola

* `termcolor` y colores
* **Argparse** → parseo de argumentos
* Expresiones regulares

## 9.4 Scanners

* Escáner de puertos con sockets
* Cambiador de MAC (MAC Changer)
* Escáner ICMP (ping sweep)

## 9.5 Señales del sistema

* `import signal` → interceptar señales UNIX

---

# 10. **Redes y OSI**

## 10.1 Modelo OSI

* Capas
* Función principal de la capa de red:

  * Direcciones IP y MAC
  * Decidir rutas
  * Encaminamiento

## 10.2 Protocolos

* UDP
* TCP

## 10.3 Subnetting

* Qué es
* Cómo interpretar máscaras de red
* Conversión decimal → binario:

  ```bash
  echo "obase=2; 235" | bc
  ```
* Calcular rangos
* Crear una página web para visualizar subnetting

---

# 11. **Nmap — Reconocimiento**

* `nmap -p<puerto> <ip>`
* Puerto específico: `nmap -p33 127.0.0.1`
* Rango completo:

  * `nmap -p1-65535 127.0.0.1`
  * `nmap -p- 127.0.0.1`
* Puertos más comunes:

  * `nmap 127.0.0.1`
* `route -n`

## Estados de puertos

* Open
* Closed
* Filtered
* Unfiltered
* Open|Filtered
* Closed|Filtered

---

# 12. **Otros conceptos**

* Ciberdelincuentes y su metodología
* Técnicas comunes
* Ejemplos reales












privacidad total en dispositivos android:
google pixel - grapheneOS


Enlaces a las bolsas Faraday recomendadas.
Faraday Bags
BEST SELLER FARADAY BAGS
Faraday Bags for Military 

mejor criptomonedas horientadas a la privacidad: Monero.
pagar en cripto anonimamente sin kyc
trustwallet
buscar elodir y buscar intermediarios para ser inrastreable las monedas criptos y el dinero fisico
fixedfloat
houdini

pvadeals - comprar numeros de forma anonima

tutanota - proton mail para correos electronicos 

reenviadores de email
dackdack go email - correos aleatorios que los servicios y mensajes que se envian a este se redirecionan al correo principal 
Clientes de correo privados:

Proton

Tutanota

Reenviadores:

Duck

Simplelogin (Proton)

Firefox Relay (Firefox)

Annonady (autoalojado)

eliminar datos de internet que se recopilan como cokies etc.

Optery

Incogni

OneRep


















Sí, puede parecer exageradamente paranoico; sin embargo, esta configuración es usada por personas que requieren este nivel de protección, evalúa tu contexto y adáptalo a tus necesidades. Te dejo un resumen.
Configuraciones generales

    Uso de dos dispositivos Pixel con GrapheneOS instalado.
    Ambos deben tener autenticación física en el arranque y estar verificados y compilados de forma reproducible.
    Solo usar eSIM anónima, pagada con criptomonedas, con IP rotativa y proveedor con políticas claras de no retención de logs.
    Enrutar todo el tráfico a través de una VPN multisalto (preferiblemente con sede en Suiza).
    Reinicio periódico de los dispositivos para limpiar memoria RAM y caché.
    No instalar aplicaciones populares ni de mensajería centralizada.
    Cuando no se usen, guardar los dispositivos en una bolsa Faraday.
    Mantener disciplina de uso rigurosa para evitar ataques de ingeniería social.
    Laptop recomendada: una ThinkPad modificada que ejecute Qubes OS.

Dispositivo 1 (Privado / No público)

Propósito:
Gestión de carteras activas de criptomonedas, comunicaciones privadas y navegación general.

Modificaciones a hacerle:

    Eliminar todos los módulos de telemetría y sensores sensibles DE MANERA FÍSICA, incluyendo:
        Micrófono, cámara, GPS, lector de huellas, sensor de proximidad, giroscopio y acelerómetros.
    No usar mensajerías tradicionales ni centralizadas (WhatsApp, Telegram, Signal).
    Utilizar protocolos descentralizados con cliente y servidor autoalojados o, si la situación lo permite, mensajerías como Sessions.
    Evitar cualquier hardware o software que pueda transmitir información sin consentimiento.

Dispositivo 2 (Público / Identidad expuesta)

Propósito:
Uso en gestiones bancarias, trámites con identidad verificada y servicios que requieren exposición regulada.

Modificaciones a hacerle:

    Mantener los módulos activos (GPS, Wi-Fi, Bluetooth, NFC) pero con interruptores físicos para desconectarlos cuando no se necesiten.
    Desactivar o quitar el micrófono, sustituyéndolo por uno cableado y desconectable.
    Cubrir la cámara cuando no se use (ya que puede ser necesaria para autenticación).
    Usar un navegador aislado para acceder a redes sociales o servicios de riesgo.

Dispositivo 3 (Laptop)

Propósito:
Tareas de trabajo y uso general con máxima seguridad.

Modificaciones a hacerle:

    Usar una ThinkPad modificada ejecutando Qubes OS, en sí esto ya hará todo el trabajo técnico, solo asegúrate de no ser idiota y caer en maniobras de ingeniería social.
    Mantener estricta separación entre entornos y no mezclar actividades personales con las críticas.

Además, es importante reiniciarlos a menudo para así borrar datos en caché, logs y memoría RAM.

Te recomiendo copiar y pegar esta configuración en un lugar seguro para que la tengas presente por si llega el día que seriamente tengas que usarla.

Cursor IA1
1. Tema Tokio Night
2. Material Icon
3. Indent Rainbow
4. VS ode Animations


dockers

enumeracion de servicios comunes y gestores de contenido

escalada de privilegios

owasp top10 vulnebabilidades webs

buffer overflow

resolucion de maquinas

metasploit

sqlmap 

introducion a pivoting

sql inyection en clausulas where

nmap

burp suite

nessus