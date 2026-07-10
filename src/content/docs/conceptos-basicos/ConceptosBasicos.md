---
title: Conceptos Basicos
description: CIA, exploit/payload, malware, riesgo y roles red/blue.
---

# Conceptos básicos

Glosario corto para no mezclar términos en labs y reportes.

## Tres capas (a menudo se confunden)

| Concepto | Alcance |
| -------- | ------- |
| Seguridad de la información | Datos en cualquier formato |
| Seguridad informática | Datos en sistemas informáticos (físico + digital) |
| Ciberseguridad | Sobre todo el entorno digital / redes |

## CIA

| Objetivo | Idea |
| -------- | ---- |
| Confidencialidad | Solo quien debe, lee |
| Integridad | No se altera sin permiso |
| Disponibilidad | Accesible cuando hace falta |

## Exploit, payload, 0-day

| Concepto | Significado |
| -------- | ----------- |
| Vulnerabilidad | Fallo de diseño, config o implementación |
| Exploit | Método/código que aprovecha esa falla |
| Payload | Qué ejecutas tras entrar (shell, downloader, etc.) |
| 0-day | Vuln aún sin parche público; el fabricante tiene “día cero” |

En Metasploit: eliges exploit + payload.

Payloads típicos: reverse shell, Meterpreter, downloader, privesc.

## Malware (tipos que salen mucho)

| Tipo | Idea |
| ---- | ---- |
| Virus | Se adjunta a archivos; necesita ejecución |
| Gusano | Se propaga solo por red |
| Troyano | Parece legítimo; abre puerta |
| Ransomware | Cifra y pide rescate |
| Spyware / keylogger / stealer | Roba actividad o creds |
| Rootkit / bootkit | Se esconde (o en el boot) |
| Botnet / RAT | Control remoto / red de bots |
| Fileless | Vive en memoria / Living-off-the-Land |
| Cryptominer | Mina con tu CPU/GPU |

## Amenaza, vulnerabilidad, riesgo

| Concepto | Significado |
| -------- | ----------- |
| Amenaza | Qué puede pasar (actor o evento) |
| Vulnerabilidad | Debilidad explotable |
| Riesgo | Probabilidad × impacto si la amenaza usa la vuln |

## Amenazas / vectores habituales

- Malware, phishing, ingeniería social, DDoS, exploits
- Vectores: correo, Wi‑Fi flojo, descargas, apps, USB

## Prácticas mínimas

Contraseñas distintas + 2FA, updates, backups, VPN en redes públicas, no clicar links raros.

## Áreas y roles

| Área / rol | Idea |
| ---------- | ---- |
| Redes / info / cloud / cripto / CTI / hacking ético | Especializaciones habituales |
| White / black / grey hat | Por intención y permiso |
| Red team | Ofensivo (simula ataque) |
| Blue team | Defensivo (detecta/responde) |
| Purple team | Colaboración red + blue |

## Tools básicas

| Tool | Para qué |
| ---- | -------- |
| Wireshark | Tráfico |
| Nmap | Puertos / hosts |
| Metasploit | Exploits en lab |
| Kali (u otra distro) | Caja de tools |

Video de refuerzo: [conceptos — Hixec](https://www.youtube.com/watch?v=spMYZHepjko).

Legal: [Legalidad del hacking](/WEB-Notas-de-Hacking/conceptos-basicos/legalidadhacking/).
