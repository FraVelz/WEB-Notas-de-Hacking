---
title: Cheatsheet
description: Triaje rápido recon → enum → exploit → privesc en CTF/lab.
---

# CTF / lab — cheatsheet de triaje

Orden mental cuando entras a una caja. Ajusta al enunciado.

| Fase | Pregunta | Acciones típicas |
| ---- | -------- | ---------------- |
| Recon | ¿Qué es el target? | IP, puertos, web, SMB, SSH |
| Enum | ¿Qué servicios y versiones? | Nmap `-sC -sV`, dirs, shares |
| Exploit | ¿Hay entrada? | Creds default, vulns conocidas, web bugs |
| PrivEsc | ¿User → root/admin? | sudo/SUID, servicios, AD paths |
| Flag | ¿Dónde está? | `user.txt` / `root.txt` / web root |

## Nmap mínimo

```bash
nmap -sC -sV -oA scan <IP>
nmap -p- --min-rate 2000 <IP>   # si hace falta full port
```

## Web

- `/robots.txt`, `/sitemap.xml`
- Dirs: feroxbuster/gobuster
- Params → [Burp](/WEB-Notas-de-Hacking/web/burpbasico/), [SQLi](/WEB-Notas-de-Hacking/web/sqli/), [XSS](/WEB-Notas-de-Hacking/web/xss/)

## Shell → privesc

- Linux: [PrivEsc Linux](/WEB-Notas-de-Hacking/privesc/linux/)
- Windows: [PrivEsc Windows](/WEB-Notas-de-Hacking/privesc/windows/)
- Dominio: [AD](/WEB-Notas-de-Hacking/ad/conceptos/)

## Documentar

Usa la [plantilla](/WEB-Notas-de-Hacking/ctf/plantilla/). Bandit ya resuelto: [Bandit](/WEB-Notas-de-Hacking/linux/banditresolucion/).
