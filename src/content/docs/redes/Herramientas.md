---
title: Herramientas
description: "Wireshark, Nmap y Metasploit: qué hacen, un ejemplo y cuándo usarlas."
---

# Herramientas de red (práctica)

Tres herramientas que salen todo el rato en labs y pentests. Solo en redes propias o con permiso.

---

## Wireshark

Captura e inspecciona paquetes en una interfaz. Sirve para ver handshakes TCP, HTTP en claro, retransmisiones, etc.

- Filtros de visualización: `http`, `ip.addr == 10.0.0.5`, `tcp.flags.syn == 1`
- Capture filter vs display filter: el primero limita qué se guarda; el segundo filtra lo ya capturado

```bash
# Ejemplo: captura en eth0 (GUI o tshark)
tshark -i eth0 -f "tcp port 80"
```

**Cuándo:** diagnóstico de red, entender un protocolo, forense de tráfico en lab.

---

## Nmap

Descubre hosts, puertos y servicios. Suele ser el primer vistazo a una red.

```bash
nmap -sn 192.168.1.0/24          # hosts vivos
nmap -sV -p 1-1000 10.10.10.5    # puertos + versiones
```

- Host discovery → port scan → service/version (`-sV`)
- Scripts NSE cuando hace falta (`-sC` o `--script`)

**Cuándo:** inventario, superficie de ataque inicial, comprobar qué quedó abierto tras un cambio.

---

## Metasploit

Framework modular (auxiliary / exploit / payload / post) para validar vulnerabilidades en entornos controlados.

```bash
msfconsole
# search type:exploit name:eternalblue
# use exploit/... ; set RHOSTS ... ; run
```

**Cuándo:** después de tener un vector claro (Nmap + CVE/lab) y quieres PoC de explotación o post-explotación. Solo labs
(Metasploitable, HTB, THM) o pruebas autorizadas.

---

## Orden habitual

1. **Nmap** — qué hay y qué escucha.
2. **Wireshark** — si necesitas mirar el tráfico concreto.
3. **Metasploit** — validar un fallo ya identificado.

Docs: [Wireshark](https://www.wireshark.org/docs/) · [Nmap](https://nmap.org/book/man.html) ·
[Metasploit](https://docs.metasploit.com/)
