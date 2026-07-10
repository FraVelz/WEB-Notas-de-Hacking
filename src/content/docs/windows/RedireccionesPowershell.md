---
title: Redirecciones Powershell
description: Streams de salida y operadores >, >>, *>, Tee-Object y && / || en PowerShell.
---

# Redirecciones en Powershell (operadores lógicos y de redirección)

Mandar stdout/stderr (y otros streams) a archivos, o encadenar comandos según éxito/fallo. PowerShell numera varios flujos, no solo “pantalla vs error” como CMD.

---

## Tipos de salida en PowerShell

PowerShell no solo maneja texto (como CMD), sino **flujos de salida (streams)**. Cada flujo tiene un número que se usa para redirigirlo:

| Nº | Stream | Qué es |
| -- | ------ | ------ |
| 1 | Output / Success | Salida normal del cmdlet |
| 2 | Error | Errores no terminantes / mensajes de error |
| 3 | Warning | Advertencias (`Write-Warning`) |
| 4 | Verbose | Mensajes `-Verbose` |
| 5 | Debug | Mensajes `-Debug` |
| 6 | Information | `Write-Information` / `Write-Host` (según versión) |

---

## Operadores de redirección

| Operador | Qué hace | Ejemplo |
| -------- | -------- | ------- |
| `>` / `1>` | Sobrescribe archivo con salida success | `Get-Process > procs.txt` |
| `>>` / `1>>` | Añade al final | `Get-Date >> log.txt` |
| `2>` | Redirige errores | `Get-Item C:\nope 2> err.txt` |
| `2>>` | Añade errores al archivo | `cmdlet 2>> err.txt` |
| `*>` | Redirige **todos** los streams | `Get-ChildItem C:\ *> todo.txt` |
| `*>>` | Añade todos los streams | `Get-ChildItem *>> todo.txt` |
| `2>&1` | Mezcla errores con la salida success | `cmdlet > out.txt 2>&1` |
| `3>` / `4>` / `5>` / `6>` | Redirige warning / verbose / debug / info | `cmdlet 4> verbose.txt` |
| `\| Tee-Object` | Escribe a archivo **y** sigue en pipeline | `Get-Process \| Tee-Object procs.txt` |
| `&&` | Ejecuta el siguiente si el anterior OK (PS 7+) | `Test-Path a.txt && Get-Content a.txt` |
| `\|\|` | Ejecuta el siguiente si el anterior falló (PS 7+) | `Test-Path a.txt \|\| Write-Host "falta"` |

En Windows PowerShell 5.1, `&&` / `||` no existen; usa `if` / `-and` o `;` según el caso.

---

## Ejemplos combinados

```powershell
# Guarda salida y errores en archivos diferentes
Get-ChildItem C:\ 1>salida.txt 2>errores.txt

# Guarda todo en un solo archivo
Get-ChildItem C:\ *> todo.txt

# Si un archivo existe, muestra un mensaje (PowerShell 7+)
Test-Path "C:\config.txt" && Write-Host "Existe" || Write-Host "No existe"

# Redirigir salida a un archivo y también verla en pantalla
Get-Process | Tee-Object -FilePath procesos.txt
```

---

## Tip extra: usar redirecciones dentro de scripts

En scripts (`.ps1`), puedes controlar redirecciones con más precisión:

```powershell
$ErrorActionPreference = "SilentlyContinue"   # Ignora errores no terminantes
Get-Item "C:\noexiste.txt" *> log.txt         # Redirige todo
```
