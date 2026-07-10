---
title: Artefactos
description: Logs, historial y metadatos que suelen mirarse en un análisis forense.
---

# Artefactos (visión general)

Sitios típicos donde queda rastro. Depende del SO y de lo que el atacante haya borrado.

## Linux (ejemplos)

| Artefacto | Para qué |
| --------- | -------- |
| `/var/log/auth.log`, `secure` | Logins, sudo, ssh |
| `~/.bash_history` | Comandos del usuario (fácil de limpiar) |
| `journalctl` | Logs systemd |
| crontab / timers | Persistencia |
| `~/.ssh/` | Claves y known_hosts |

## Windows (ejemplos)

| Artefacto | Para qué |
| --------- | -------- |
| Event Viewer (Security, System) | Logons, servicios, errores |
| Prefetch / Amcache | Programas ejecutados |
| Registry (Run keys, services) | Persistencia |
| `$MFT` / papelera | Archivos borrados / metadatos NTFS |
| Historial de navegador | URLs, descargas |

## Metadatos

- Archivos: autor, fechas (EXIF en imágenes; cuidado, se manipulan).
- Documentos Office/PDF: a veces rutas y usuarios internos.

## Ejemplo (Linux, lab propio)

```bash
sudo grep -E 'Failed|Accepted' /var/log/auth.log | tail
journalctl -u ssh --since '1 hour ago' | tail
last -a | head
```

## Nota

Listas incompletas a propósito: el forense serio usa playbooks por escenario (malware, insider, ransomware…).
