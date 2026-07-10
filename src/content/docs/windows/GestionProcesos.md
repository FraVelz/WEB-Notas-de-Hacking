---
title: Gestion Procesos
description: Listar, iniciar y matar procesos con tasklist/taskkill y Get-Process/Stop-Process.
---

# Comandos y cmdlets de gestión de procesos

Ver qué corre, cuánta CPU/RAM come y matarlo si hace falta. CMD: `tasklist` / `taskkill`. PowerShell: objetos con `Get-Process`.

---

## 1. Comandos de gestión de procesos en CMD

Todos estos se ejecutan en **Símbolo del sistema (cmd)**, preferiblemente con permisos de administrador.

| Comando | Qué hace | Ejemplo |
| ------- | -------- | ------- |
| `tasklist` | Lista procesos en ejecución | `tasklist` |
| `tasklist /v` | Vista detallada (ventana, usuario…) | `tasklist /v` |
| `tasklist /fi "imagename eq notepad.exe"` | Filtra por nombre | `tasklist /fi "imagename eq chrome.exe"` |
| `tasklist /fi "pid eq 1234"` | Filtra por PID | `tasklist /fi "pid eq 1234"` |
| `tasklist /svc` | Procesos y servicios asociados | `tasklist /svc` |
| `taskkill /PID <pid>` | Termina por PID | `taskkill /PID 1234` |
| `taskkill /IM <nombre> /F` | Termina por imagen (forzado) | `taskkill /IM notepad.exe /F` |
| `start` | Lanza un programa o ventana | `start notepad.exe` |
| `wmic process` | Legacy WMI (deprecado, aún aparece) | `wmic process where name="notepad.exe" get ProcessId` |

---

## 2. Cmdlets de gestión de procesos en PowerShell

PowerShell ofrece control total sobre los procesos, con más detalle y opciones que CMD.

| Comando | Qué hace | Ejemplo |
| ------- | -------- | ------- |
| `Get-Process` (`ps`, `gps`) | Lista procesos (objetos) | `Get-Process` |
| `Get-Process -Name <n>` | Filtra por nombre | `Get-Process -Name notepad` |
| `Get-Process -Id <pid>` | Filtra por PID | `Get-Process -Id 1234` |
| `Start-Process` (`start`) | Inicia un proceso | `Start-Process notepad` |
| `Start-Process -Verb RunAs` | Inicia elevado | `Start-Process powershell -Verb RunAs` |
| `Stop-Process` (`kill`, `spps`) | Termina proceso | `Stop-Process -Name notepad -Force` |
| `Stop-Process -Id <pid>` | Termina por PID | `Stop-Process -Id 1234 -Force` |
| `Wait-Process` | Espera a que termine | `Wait-Process -Name setup` |
| `Debug-Process` | Adjunta el depurador | `Debug-Process -Name notepad` |

---

## 3. Comparativa rápida CMD vs PowerShell

| Tarea | CMD | PowerShell |
| ----- | --- | ---------- |
| Listar | `tasklist` | `Get-Process` |
| Filtrar | `tasklist /fi "..."` | `Get-Process \| Where-Object ...` |
| Matar | `taskkill /IM x /F` | `Stop-Process -Name x -Force` |
| Iniciar | `start app.exe` | `Start-Process app.exe` |
| Ordenar por CPU | difícil (texto) | `Get-Process \| Sort-Object CPU -Descending` |

---

## 4. Comandos gráficos y herramientas integradas

| Herramienta | Qué hace | Cómo abrirla |
| ----------- | -------- | ------------ |
| Administrador de tareas | GUI de procesos, rendimiento, inicio | `Ctrl+Shift+Esc` o `taskmgr` |
| Monitor de recursos | CPU, disco, red por proceso | `resmon` o desde el Administrador de tareas |
| Process Explorer (Sysinternals) | Árbol de procesos, handles, DLLs | Descargar de Microsoft Sysinternals |
| `msinfo32` | Información del sistema | `msinfo32` |

---

## Ejemplos útiles de PowerShell

```powershell
# Ver los 5 procesos que más consumen CPU
Get-Process | Sort-Object CPU -Descending | Select-Object -First 5

# Ver dueño de procesos (WMI)
Get-WmiObject Win32_Process | ForEach-Object {
  $o = $_.GetOwner()
  [PSCustomObject]@{ Name = $_.Name; PID = $_.ProcessId; User = $o.User }
}

# Cerrar todos los procesos de Notepad
Get-Process notepad -ErrorAction SilentlyContinue | Stop-Process -Force

# Abrir el Bloc de notas como administrador
Start-Process "notepad.exe" -Verb RunAs
```
