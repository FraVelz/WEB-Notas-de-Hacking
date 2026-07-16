---
title: Lab — nmap host discovery
description: Lab reproducible — descubrir hosts vivos en una red lab con nmap -sn.
---

# Lab — nmap host discovery

## Objetivo

Listar hosts que responden en una **red de laboratorio** (VM host-only / NAT propia), no en Internet ajeno.

## Prerequisitos

- `nmap` instalado (`sudo apt install nmap` o equivalente)
- [Herramientas de red](/WEB-Notas-de-Hacking/redes/herramientas/)
- Permiso explícito sobre el rango (tu lab)

## Entorno lab

Red privada de VMs (ej. `192.168.56.0/24` VirtualBox host-only). Sustituye el CIDR por el tuyo:

```bash
ip -br a    # identifica interfaz y red lab
```

## Pasos

1. Discovery sin port scan:

   ```bash
   nmap -sn 192.168.56.0/24
   ```

2. Anota IPs “Host is up”.

3. (Opcional) Versiones en un host lab concreto:

   ```bash
   nmap -sV -p 22,80 192.168.56.101
   ```

## Verificación

La salida de `-sn` muestra al menos tu gateway/host o las VMs encendidas. Si todo está apagado, 0 hosts (válido):
enciende una VM y repite.

## Referencias

- [Nmap Reference Guide](https://nmap.org/book/man.html) — acceso 2026-07-15
- [Herramientas](/WEB-Notas-de-Hacking/redes/herramientas/)

## Advertencia

Escanear redes de terceros sin autorización es ilegal. Solo CIDR de lab propio.
