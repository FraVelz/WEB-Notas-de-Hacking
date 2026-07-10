---
title: Navegacion
description: Comandos CMD y cmdlets de PowerShell para moverte, listar y gestionar archivos y carpetas.
---

# Comandos de Navegación

Moverte por el sistema de archivos y crear/copiar/borrar cosas desde la terminal. En CMD son comandos clásicos; en PowerShell, cmdlets Verbo-Sustantivo (muchos tienen alias tipo `ls`, `cd`, `cp`).

---

## 1. Windows CMD (Command Prompt)

### Navegación por directorios

| Comando | Qué hace | Ejemplo |
| ------- | -------- | ------- |
| `cd` / `chdir` | Cambia el directorio actual | `cd C:\Users\Admin` |
| `cd ..` | Sube un nivel | `cd ..` |
| `cd \` | Va a la raíz del disco actual | `cd \` |
| `dir` | Lista archivos y carpetas | `dir /a` |
| `pushd` | Guarda la ruta actual y cambia a otra | `pushd D:\Labs` |
| `popd` | Vuelve a la ruta guardada con `pushd` | `popd` |
| `X:` | Cambia de unidad (letra de disco) | `D:` |

### Gestión de archivos

| Comando | Qué hace | Ejemplo |
| ------- | -------- | ------- |
| `type` | Muestra el contenido de un archivo de texto | `type notas.txt` |
| `copy` | Copia archivos | `copy a.txt D:\Backup\` |
| `xcopy` | Copia archivos/carpetas con más opciones | `xcopy src dest /E /I` |
| `robocopy` | Copia robusta (reintentos, logs, espejo) | `robocopy C:\Datos D:\Backup /MIR` |
| `move` | Mueve o renombra archivos | `move a.txt D:\` |
| `ren` / `rename` | Renombra un archivo | `ren viejo.txt nuevo.txt` |
| `del` / `erase` | Borra archivos | `del *.tmp` |
| `attrib` | Ve o cambia atributos (oculto, solo lectura…) | `attrib +h secreto.txt` |

### Gestión de carpetas

| Comando | Qué hace | Ejemplo |
| ------- | -------- | ------- |
| `mkdir` / `md` | Crea una carpeta | `mkdir C:\Labs` |
| `rmdir` / `rd` | Elimina una carpeta vacía | `rmdir C:\Labs` |
| `rmdir /s /q` | Elimina carpeta y contenido sin preguntar | `rmdir /s /q C:\Temp\old` |
| `tree` | Árbol de directorios | `tree C:\Users /F` |

---

## 2. PowerShell (cmdlets)

PowerShell tiene cmdlets más potentes y consistentes. Se escriben en formato **Verbo-Sustantivo**.

### Navegación por directorios (cmdlets)

| Comando | Qué hace | Ejemplo |
| ------- | -------- | ------- |
| `Set-Location` (`cd`, `sl`) | Cambia el directorio actual | `Set-Location C:\Windows` |
| `Get-Location` (`pwd`, `gl`) | Muestra la ruta actual | `Get-Location` |
| `Push-Location` | Guarda la ruta y cambia | `Push-Location D:\Labs` |
| `Pop-Location` | Vuelve a la ruta guardada | `Pop-Location` |
| `Get-ChildItem` (`ls`, `dir`, `gci`) | Lista archivos y carpetas | `Get-ChildItem -Force` |

### Gestión de archivos (cmdlets)

| Comando | Qué hace | Ejemplo |
| ------- | -------- | ------- |
| `Get-Content` (`cat`, `gc`) | Lee el contenido de un archivo | `Get-Content notas.txt` |
| `Set-Content` | Escribe/sobrescribe contenido | `Set-Content out.txt "hola"` |
| `Add-Content` | Añade texto al final | `Add-Content log.txt "linea"` |
| `Copy-Item` (`cp`, `copy`) | Copia archivos o carpetas | `Copy-Item a.txt D:\Backup\` |
| `Move-Item` (`mv`, `move`) | Mueve o renombra | `Move-Item a.txt D:\` |
| `Rename-Item` (`ren`) | Renombra | `Rename-Item viejo.txt nuevo.txt` |
| `Remove-Item` (`rm`, `del`) | Borra archivos o carpetas | `Remove-Item *.tmp` |
| `New-Item` | Crea archivo (o carpeta con `-ItemType`) | `New-Item archivo.txt -ItemType File` |

### Gestión de carpetas (cmdlets)

| Comando | Qué hace | Ejemplo |
| ------- | -------- | ------- |
| `New-Item -ItemType Directory` (`mkdir`) | Crea una carpeta | `New-Item C:\Labs -ItemType Directory` |
| `Remove-Item -Recurse` | Borra carpeta y contenido | `Remove-Item C:\Temp\old -Recurse -Force` |
| `Test-Path` | Comprueba si existe una ruta | `Test-Path C:\Windows\System32` |

### Opciones útiles de Get-ChildItem

- `-Recurse` → listar recursivamente subdirectorios
- `-File` → solo archivos
- `-Directory` → solo carpetas
- `-Filter "*.txt"` → filtrar por extensión
- `-Force` → incluye ocultos y de sistema

```powershell
Get-ChildItem C:\Users -Directory
Get-ChildItem . -Recurse -Filter "*.log"
```
