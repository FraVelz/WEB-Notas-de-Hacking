---
title: Directorios
description: Rutas clave del sistema, del perfil de usuario y de instalación de programas en Windows.
---

# Directorios Importantes de Windows

Mapa mental de dónde vive el SO, el perfil del usuario y las apps. Útil en forense, persistencia y limpieza.

---

## Directorios del sistema

Estos contienen archivos de Windows y componentes esenciales del sistema operativo:

| Ruta | Uso |
| ---- | --- |
| `C:\Windows` | Raíz del sistema operativo |
| `C:\Windows\System32` | Binarios y DLLs de 64-bit (y muchos tools de admin) |
| `C:\Windows\SysWOW64` | Binarios de 32-bit en Windows x64 |
| `C:\Windows\WinSxS` | Component Store (versiones lado a lado; no borrar a mano) |
| `C:\Windows\Temp` | Temporales del sistema |
| `C:\Windows\System32\drivers\etc\hosts` | Resolución de nombres local |
| `C:\Windows\System32\config` | Hives del registro (SAM, SYSTEM, SOFTWARE…) |
| `C:\Boot` / EFI | Datos de arranque (según instalación) |

---

## Directorios de usuario

Contienen los datos de cada usuario y configuraciones personales:

| Ruta | Uso |
| ---- | --- |
| `C:\Users\<Usuario>` | Perfil del usuario (`%USERPROFILE%`) |
| `C:\Users\<Usuario>\Desktop` | Escritorio |
| `C:\Users\<Usuario>\Documents` | Documentos |
| `C:\Users\<Usuario>\Downloads` | Descargas |
| `C:\Users\<Usuario>\AppData\Roaming` | Config que puede viajar con el perfil (`%APPDATA%`) |
| `C:\Users\<Usuario>\AppData\Local` | Datos locales de apps (`%LOCALAPPDATA%`) |
| `C:\Users\<Usuario>\AppData\Local\Temp` | Temporales del usuario (`%TEMP%`) |
| `C:\Users\Public` | Carpetas compartidas entre usuarios locales |

---

## Directorios de programas

Donde se instalan las aplicaciones:

| Ruta | Uso |
| ---- | --- |
| `C:\Program Files` | Apps de 64-bit |
| `C:\Program Files (x86)` | Apps de 32-bit en Windows x64 |
| `C:\ProgramData` | Datos de programas para todos los usuarios |
| `C:\Program Files\WindowsApps` | Apps de Microsoft Store (acceso restringido) |

---

## Directorios temporales y de sistema adicional

| Ruta | Uso |
| ---- | --- |
| `C:\Users\<Usuario>\AppData\Local\Temp` | Temporales de programas del usuario |
| `C:\Windows\Prefetch` | Prefetch (arranque/ejecución; útil en forense) |
| `C:\$Recycle.Bin` | Papelera de reciclaje |
| `C:\Windows\Logs` | Logs varios del sistema |
| `C:\Windows\System32\winevt\Logs` | Event logs (`.evtx`) |

---

## Tips

- Nunca elimines carpetas como `System32` o `WinSxS`.
- `AppData` y `Temp` se pueden limpiar con cuidado para liberar espacio.
- En PowerShell: `$env:USERPROFILE`, `$env:APPDATA`, `$env:WINDIR`.
