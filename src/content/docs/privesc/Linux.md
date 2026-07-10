---
title: Linux
description: Vectores típicos de privilege escalation en Linux (lab).
---

# Privilege escalation — Linux

De user normal a root (o a otro user más útil). Solo en máquinas de lab / alcance acordado.

## Checklist rápido

| Vector | Qué mirar | Ejemplo |
| ------ | --------- | ------- |
| sudo | `sudo -l` | NOPASSWD a script editable / binario peligroso |
| SUID | `find / -perm -4000 2>/dev/null` | Binarios raros (vim, find, python…) |
| Capabilities | `getcap -r / 2>/dev/null` | `cap_setuid` en binarios |
| Cron | `/etc/cron*`, timers | Scripts world-writable |
| PATH / wildcards | Scripts root con PATH flojo | Binario falso primero en PATH |
| Kernel / exploits | `uname -a` | Solo si el lab lo pide |
| Creds | hist, configs, `.ssh` | Passwords reutilizadas |

## Flujo mínimo

```bash
id
sudo -l
find / -perm -4000 2>/dev/null | head
ls -la /etc/cron* 2>/dev/null
env | grep -i path
```

Si hay script en cron writable:

1. Escribes reverse shell o `chmod +s /bin/bash`.
2. Esperas la ejecución como root.
3. Compruebas `id`.

## GTFOBins

Muchos binarios SUID/sudo tienen trucos documentados: [GTFOBins](https://gtfobins.github.io/).

Automatización en lab: LinPEAS (ruido alto; léelo, no copies ciego).

Windows: [PrivEsc Windows](/WEB-Notas-de-Hacking/privesc/windows/).
