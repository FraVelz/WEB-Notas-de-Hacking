---
title: Gestion Procesos
description: Gestion Procesos - Notas de hacking y ciberseguridad.
---

# Comandos y cmdlets de gestión de procesos
---

## 1. Comandos de gestión de procesos en CMD
<blockquote>
Todos estos se ejecutan en **Símbolo del sistema (cmd)**, preferiblemente con permisos de administrador.

</blockquote>

<!-- Tabla convertida manualmente -->

---

## 2. Cmdlets de gestión de procesos en PowerShell
<blockquote>
PowerShell ofrece control total sobre los procesos, con más detalle y opciones que CMD.

</blockquote>

<!-- Tabla convertida manualmente -->

---

## 3. Comparativa rápida CMD vs PowerShell
<!-- Tabla convertida manualmente -->

---

## 4. Comandos gráficos y herramientas integradas
<!-- Tabla convertida manualmente -->

---

## Ejemplos útiles de PowerShell
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