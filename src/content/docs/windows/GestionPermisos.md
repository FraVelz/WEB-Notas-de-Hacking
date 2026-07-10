---
title: Gestion Permisos
description: Ver y cambiar ACL de archivos/carpetas con icacls, takeown y Get-Acl/Set-Acl.
---

# Comandos y cmdlets de gestión de permisos

Quién puede leer, escribir o tomar posesión de un archivo/carpeta. En CMD: `icacls` y `takeown`. En PowerShell: objetos ACL con `Get-Acl` / `Set-Acl`.

---

## CMD — Comandos de Gestión de Permisos

| Comando | Qué hace | Ejemplo |
| ------- | -------- | ------- |
| `icacls <ruta>` | Muestra ACL (permisos) | `icacls C:\Proyecto` |
| `icacls <ruta> /grant <user>:(perms)` | Concede permisos | `icacls C:\Proyecto /grant Juan:(R,W)` |
| `icacls <ruta> /deny <user>:(perms)` | Deniega permisos (gana sobre grant) | `icacls C:\Proyecto /deny Juan:(W)` |
| `icacls <ruta> /remove <user>` | Quita entradas de un usuario | `icacls C:\Proyecto /remove Juan` |
| `icacls <ruta> /reset` | Restaura ACL heredadas por defecto | `icacls C:\Proyecto /reset /T` |
| `icacls <ruta> /inheritance:e\|d\|r` | Activa, desactiva o quita herencia | `icacls C:\Proyecto /inheritance:d` |
| `icacls <ruta> /setowner <user>` | Cambia el propietario | `icacls C:\Proyecto /setowner Juan` |
| `takeown /f <ruta>` | Toma posesión del objeto | `takeown /f C:\Proyecto\archivo.txt` |
| `takeown /f <ruta> /r /d y` | Toma posesión recursiva | `takeown /f C:\Proyecto /r /d y` |
| `cacls` | Legacy (mejor usar `icacls`) | `cacls C:\Proyecto` |

Permisos frecuentes en `icacls`: `F` (full), `M` (modify), `RX` (read+execute), `R` (read), `W` (write).

---

## PowerShell — Cmdlets de Gestión de Permisos

| Comando | Qué hace | Ejemplo |
| ------- | -------- | ------- |
| `Get-Acl` | Obtiene el objeto ACL | `Get-Acl C:\Proyecto` |
| `Get-Acl \| Format-List` | Vista detallada de reglas | `Get-Acl C:\Proyecto \| fl` |
| `Set-Acl` | Aplica un ACL modificado | `Set-Acl C:\Proyecto $acl` |
| `(Get-Acl).Access` | Lista reglas de acceso | `(Get-Acl C:\Proyecto).Access` |
| `(Get-Acl).Owner` | Muestra el propietario | `(Get-Acl C:\Proyecto).Owner` |

Para crear una regla nueva hace falta `FileSystemAccessRule` (ver ejemplo abajo).

---

## Ejemplos prácticos

### CMD

```cmd
icacls "C:\Proyecto" /grant Juan:(R,W)
takeown /f "C:\Proyecto\archivo.txt"
icacls "C:\Proyecto\archivo.txt" /grant %USERNAME%:F
```

### PowerShell

```powershell
$acl = Get-Acl "C:\Proyecto"
$rule = New-Object System.Security.AccessControl.FileSystemAccessRule("Juan","Modify","Allow")
$acl.AddAccessRule($rule)
Set-Acl "C:\Proyecto" $acl

Get-Acl "C:\Proyecto" | Select-Object Path, Owner
```
