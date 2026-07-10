---
title: Ayuda Soporte
description: Cómo pedir ayuda en CMD (/?) y en PowerShell (Get-Help, Update-Help, Get-Command).
---

# Comandos y cmdlets de ayuda y soporte

Cuando no recuerdas un flag o un parámetro: en CMD `/?`, en PowerShell el ecosistema `Get-Help` / `Get-Command`.

---

## 1. Comandos de ayuda y soporte en CMD

| Comando | Qué hace | Ejemplo |
| ------- | -------- | ------- |
| `help` | Lista comandos internos básicos | `help` |
| `help <comando>` | Ayuda corta de un comando interno | `help dir` |
| `<comando> /?` | Manual rápido del comando | `ipconfig /?` |
| `where <exe>` | Localiza un ejecutable en el PATH | `where notepad` |
| `systeminfo` | Resumen del sistema (OS, hotfixes, etc.) | `systeminfo` |
| `winver` | Versión de Windows (GUI) | `winver` |

---

## 2. Cmdlets de ayuda y soporte en PowerShell

| Comando | Qué hace | Ejemplo |
| ------- | -------- | ------- |
| `Get-Help` (`help`, `man`) | Ayuda de un cmdlet | `Get-Help Get-Process` |
| `Get-Help -Examples` | Solo ejemplos | `Get-Help Copy-Item -Examples` |
| `Get-Help -Detailed` | Descripción + parámetros | `Get-Help Get-ChildItem -Detailed` |
| `Get-Help -Full` | Ayuda completa | `Get-Help Get-Acl -Full` |
| `Get-Help -Online` | Abre docs en el navegador | `Get-Help Start-Process -Online` |
| `Update-Help` | Descarga/actualiza ayuda (red) | `Update-Help -Force` |
| `Get-Command` | Busca cmdlets/funciones/alias | `Get-Command *Process*` |
| `Get-Command -Syntax` | Sintaxis compacta | `Get-Command Get-Process -Syntax` |
| `Get-Member` (`gm`) | Propiedades/métodos de un objeto | `Get-Process \| Get-Member` |
| `Show-Command` | GUI para armar un cmdlet | `Show-Command Get-ChildItem` |

---

## 3. Ayuda interactiva y documentación

- En **CMD**:
  - `help` → lista básica.
  - `<comando> /?` → manual rápido.
- En **PowerShell**:
  - `Update-Help` → descarga la ayuda más reciente (requiere conexión).
  - `Get-Help <cmdlet> -Detailed` → descripción, parámetros y ejemplos.
  - `Get-Help <cmdlet> -Online` → abre la documentación oficial en el navegador.

---

## Sugerencia práctica

Para explorar PowerShell:

```powershell
Get-Command | Out-GridView
```

Abre una ventana interactiva donde puedes buscar, filtrar y explorar los cmdlets disponibles.

```powershell
Get-Help Get-Process -Examples
Get-Process | Get-Member | Select-Object Name, MemberType
```
