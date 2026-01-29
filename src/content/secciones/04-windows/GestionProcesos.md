---
title: GestionProcesos
route: /windows/GestionProcesos
---

# Comandos y cmdlets de gestión de procesos
---

## 1. Comandos de gestión de procesos en CMD {#1-comandos-de-gestión-de-procesos-en-cmd}
<blockquote>
Todos estos se ejecutan en **Símbolo del sistema (cmd)**, preferiblemente con permisos de administrador.

</blockquote>

<!-- Tabla convertida manualmente -->

---

## 2. Cmdlets de gestión de procesos en PowerShell {#2-cmdlets-de-gestión-de-procesos-en-powershell}
<blockquote>
PowerShell ofrece control total sobre los procesos, con más detalle y opciones que CMD.

</blockquote>

<!-- Tabla convertida manualmente -->

---

## 3. Comparativa rápida CMD vs PowerShell {#3-comparativa-rápida-cmd-vs-powershell}
<!-- Tabla convertida manualmente -->

---

## 4. Comandos gráficos y herramientas integradas {#4-comandos-gráficos-y-herramientas-integradas}
<!-- Tabla convertida manualmente -->

---

## Ejemplos útiles de PowerShell {#ejemplos-útiles-de-powershell}
```bash
# Ver los 5 procesos que más consumen CPU
Get-Process | Sort-Object CPU -Descending | Select-Object -First 5

# Ver todos los procesos de un usuario específico
Get-WmiObject Win32_Process | Where-Object  $_.GetOwner().User -eq "Francisco"

# Cerrar todos los procesos de Notepad
Get-Process notepad | Stop-Process -Force

# Abrir el Bloc de notas como administrador
Start-Process "notepad.exe" -Verb RunAs
```