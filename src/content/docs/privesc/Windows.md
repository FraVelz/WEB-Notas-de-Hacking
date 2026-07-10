---
title: Windows
description: Vectores típicos de privilege escalation en Windows (lab).
---

# Privilege escalation — Windows

De user bajo a local admin / SYSTEM en lab. Autorización obligatoria.

## Checklist rápido

| Vector | Qué mirar |
| ------ | --------- |
| Whoami / grupos | `whoami /all` — SeImpersonate, Admin? |
| Servicios | Binario/path writable → replace + restart |
| Unquoted service path | Path con espacios sin comillas |
| AlwaysInstallElevated | MSI como SYSTEM si ambas keys = 1 |
| Creds | `cmdkey`, SAM/SYSTEM (si ya tienes acceso), scripts |
| Token / potato | SeImpersonatePrivilege → tools tipo Potato (lab) |
| UAC | Bypass solo si el lab/contexto lo contempla |
| Scheduled tasks | Tareas con binario editable |

## Comandos de triaje

```cmd
whoami /all
net user
net localgroup administrators
systeminfo
```

PowerShell (lab):

```powershell
Get-Service | Where-Object { $_.Status -eq 'Running' }
Get-LocalUser
```

## Flujo mental

1. Enumera privilegios y grupos.
2. Busca misconfigs (servicios, tasks, registry).
3. Creds reutilizadas (mismo pass en otros hosts).
4. Documenta: vector → prueba → `whoami` resultante.

Linux: [PrivEsc Linux](/WEB-Notas-de-Hacking/privesc/linux/). AD: [Conceptos AD](/WEB-Notas-de-Hacking/ad/conceptos/).

Ref lab: [HackTricks Windows PrivEsc](https://book.hacktricks.wiki/en/windows-hardening/windows-local-privilege-escalation/).
