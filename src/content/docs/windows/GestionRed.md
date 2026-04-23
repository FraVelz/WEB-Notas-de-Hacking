---
title: Gestión de red (CMD y PowerShell)
description: Comandos y cmdlets habituales para diagnóstico y configuración de red en Windows.
---

# Comandos y cmdlets de gestión de red

Referencia rápida para **CMD** y **PowerShell**. Muchas operaciones requieren **ejecutar como administrador**. Para fundamentos TCP/IP y DNS, complementa con [Teoría de redes](/redes/teoria/) y [Herramientas de red](/redes/herramientas/).

## CMD — Comandos de red

| Comando | Uso típico |
|---------|------------|
| `ipconfig` | Muestra configuración IP; `/all` incluye DNS, DHCP y MAC. |
| `ipconfig /release` y `ipconfig /renew` | Liberar/renovar DHCP (interfaz activa). |
| `ipconfig /flushdns` | Vaciar caché de resolución DNS local. |
| `ping <host>` | Prueba ICMP de conectividad (si el firewall lo permite). |
| `tracert <host>` | Ruta aproximada (*traceroute*) hasta el destino. |
| `pathping <host>` | Combina traza y estadísticas de pérdida por salto. |
| `nslookup <host>` | Consultas DNS interactivas o puntuales. |
| `netstat -ano` | Conexiones, puertos en escucha y PID (`-a` todas, `-n` numérico, `-o` PID). |
| `arp -a` | Tabla ARP (vecinos en la subred). |
| `route print` | Tabla de enrutamiento IPv4/IPv6. |
| `netsh interface show interface` | Estado de interfaces (también sirve para diagnósticos avanzados con `netsh`). |

## PowerShell — Cmdlets de red

Ejecuta PowerShell como administrador cuando cambies configuración del sistema.

| Cmdlet | Uso típico |
|--------|------------|
| `Get-NetIPAddress` | Direcciones IP asignadas por interfaz/familia. |
| `Get-NetAdapter` | Adaptadores físnicos y virtuales, estado y velocidad. |
| `Get-DnsClientServerAddress` | Servidores DNS configurados por interfaz. |
| `Resolve-DnsName <nombre>` | Resolución DNS (similar a consultas avanzadas de `nslookup`). |
| `Test-NetConnection -ComputerName <host> -Port <n>` | Comprueba conectividad TCP a un puerto (y path de diagnóstico). |
| `Test-Connection <host>` | Ping con objeto de salida configurable (`-Count`, etc.). |
| `Get-NetTCPConnection` | Conexiones TCP (estado, puerto local/remoto, owning process). |
| `Get-NetRoute` | Rutas IP (equivalente moderno a partes de `route print`). |

### Ejemplos rápidos

```powershell
Get-NetAdapter | Where-Object Status -eq 'Up'
Test-NetConnection -ComputerName 1.1.1.1 -Port 443
Resolve-DnsName google.com
```

## Notas

- **ICMP** puede estar bloqueado por firewalls; un `ping` fallido no implica que el host esté caído.
- `netstat` y `Get-NetTCPConnection` ayudan a ver **qué proceso** usa un puerto (`-ano` / propiedades del objeto).
- En entornos de dominio, políticas de grupo pueden restringir qué comandos están disponibles o qué registros DNS se usan.
