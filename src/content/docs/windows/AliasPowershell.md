---
title: Alias Powershell
description: Alias built-in (ls, cd, cat) y cómo crear, listar y persistir alias en PowerShell.
---

# Alias en powershell

Un **alias** es un **nombre corto** para un comando existente. Por ejemplo:

```powershell
Get-ChildItem     # Nombre completo
ls                # Alias
```

Ambos listan archivos y carpetas.

---

## Alias comunes en PowerShell

| Alias | Cmdlet real | Uso típico |
| ----- | ----------- | ---------- |
| `ls` / `dir` / `gci` | `Get-ChildItem` | Listar archivos |
| `cd` / `sl` / `chdir` | `Set-Location` | Cambiar directorio |
| `pwd` / `gl` | `Get-Location` | Ruta actual |
| `cat` / `gc` / `type` | `Get-Content` | Leer archivo |
| `cp` / `copy` / `cpi` | `Copy-Item` | Copiar |
| `mv` / `move` / `mi` | `Move-Item` | Mover/renombrar |
| `rm` / `del` / `ri` | `Remove-Item` | Borrar |
| `ps` / `gps` | `Get-Process` | Procesos |
| `kill` / `spps` | `Stop-Process` | Matar proceso |
| `echo` / `write` | `Write-Output` | Escribir a la pipeline |
| `cls` / `clear` | `Clear-Host` | Limpiar pantalla |
| `sleep` | `Start-Sleep` | Esperar N segundos |
| `%` | `ForEach-Object` | Bucle en pipeline |
| `?` | `Where-Object` | Filtrar en pipeline |

---

## Cmdlets relacionados con alias

| Comando | Qué hace | Ejemplo |
| ------- | -------- | ------- |
| `Get-Alias` | Lista alias (todos o uno) | `Get-Alias ls` |
| `Get-Alias -Definition <cmdlet>` | Alias que apuntan a un cmdlet | `Get-Alias -Definition Get-ChildItem` |
| `Set-Alias` | Crea o cambia un alias | `Set-Alias editar notepad.exe` |
| `New-Alias` | Crea alias (falla si ya existe) | `New-Alias np notepad` |
| `Export-Alias` | Exporta alias a archivo | `Export-Alias aliases.txt` |
| `Import-Alias` | Importa alias desde archivo | `Import-Alias aliases.txt` |
| `Remove-Item alias:<nombre>` | Elimina un alias de la sesión | `Remove-Item alias:editar` |

---

## Ejemplos prácticos

```powershell
# Ver todos los alias
Get-Alias

# Crear un alias personalizado
Set-Alias editar notepad.exe

# Usar el alias
editar archivo.txt

# Ver qué comando ejecuta un alias
Get-Alias ls

# Eliminar un alias
Remove-Item alias:editar
```

---

## Alias persistentes

Por defecto, los alias creados con `Set-Alias` o `New-Alias` **solo duran mientras PowerShell está abierto**.

Para hacerlos **permanentes**, agrégalos al **perfil de PowerShell**:

```powershell
notepad $PROFILE
```

Luego agrega tus alias personalizados:

```powershell
Set-Alias editar notepad.exe
Set-Alias borrar Remove-Item
```

Guarda el archivo y la próxima vez que abras PowerShell, estarán disponibles.

---

## Nota importante

- Los alias **no aceptan parámetros por defecto**. Por ejemplo, `Set-Alias buscar "Get-ChildItem -Recurse"` no funcionará.
  En ese caso, usa una **función**:

```powershell
function buscar { Get-ChildItem -Recurse @args }
Set-Alias buscar buscar
```
