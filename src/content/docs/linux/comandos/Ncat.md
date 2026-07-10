---
title: Ncat
description: "Ncat (netcat de Nmap): cliente/servidor TCP-UDP, transferencias y shells."
---

# Ncat en Linux

Versión de netcat de Nmap: cliente/servidor TCP/UDP, transferencias, SSL, proxies. En lab, también shells remotas (solo entornos controlados).

---

## Opciones útiles

| Comando / flag | Qué hace | Ejemplo |
| -------------- | -------- | ------- |
| `-l` | Escuchar (servidor). | `ncat -l -p 8080` |
| `-p <puerto>` | Puerto local. | `ncat -l -p 9000` |
| `-u` | UDP. | `ncat -u -l -p 6000` |
| `-k` | Keep-open (varias conexiones). | `ncat -l -k -p 8080` |
| `-n` | Sin DNS. | `ncat -n 10.0.0.1 80` |
| `-v` / `-vv` | Verbose. | `ncat -v host 22` |
| `-z` | Zero-I/O (probar puerto). | `ncat -z host 443` |
| `--ssl` | TLS/SSL. | `ncat --ssl ejemplo.com 443` |
| `--proxy` | Via proxy. | `ncat --proxy 10.0.0.1:1080 --proxy-type socks5 host 80` |
| `--exec` / `-e` | Ejecutar comando al conectar (peligroso). | solo lab |

---

## Ejemplos

```bash
# Cliente / servidor TCP
ncat 192.168.1.10 8080
ncat -l -p 8080
ncat -l -k -p 8080

# UDP
ncat -u -l -p 6000
ncat -u 192.168.1.10 6000

# Transferir archivo
ncat -l -p 9000 > recibido.bin          # receptor
ncat 192.168.1.20 9000 < archivo.bin    # emisor

# SSL y proxy
ncat --ssl ejemplo.com 443
ncat --proxy 10.0.0.1:1080 --proxy-type socks5 ejemplo.com 80
```

Shell en lab (nunca en máquinas expuestas sin autorización):

```bash
ncat -l -p 4444 --exec "/bin/bash" -k   # servidor
ncat 192.168.1.20 4444                  # cliente
```

Preferir SSH o túneles TLS con auth para acceso remoto real. Docs: [Ncat](https://nmap.org/ncat/), `man ncat`.
