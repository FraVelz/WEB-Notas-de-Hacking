---
title: Gestion Grupos
description: Crear grupos locales, añadir miembros y consultar grupos de dominio desde CMD y PowerShell.
---

# Comandos y cmdlets de grupos

Los grupos agrupan permisos: metes usuarios y heredas derechos. Local con `net localgroup` / LocalAccounts; en dominio con el módulo ActiveDirectory.

---

## 1. Comandos de gestión de grupos en CMD

Todos estos comandos se ejecutan en **Símbolo del sistema (CMD)** con permisos de administrador.

| Comando | Qué hace | Ejemplo |
| ------- | -------- | ------- |
| `net localgroup` | Lista grupos locales | `net localgroup` |
| `net localgroup <grupo>` | Miembros de un grupo | `net localgroup Administrators` |
| `net localgroup <grupo> /add` | Crea un grupo local | `net localgroup LabGroup /add` |
| `net localgroup <grupo> /delete` | Elimina un grupo local | `net localgroup LabGroup /delete` |
| `net localgroup <grupo> <user> /add` | Añade usuario al grupo | `net localgroup Administrators lab /add` |
| `net localgroup <grupo> <user> /delete` | Quita usuario del grupo | `net localgroup Users lab /delete` |
| `net group` | Grupos de dominio (solo en DC / con red de dominio) | `net group "Domain Admins"` |

---

## 2. Cmdlets de gestión de grupos en PowerShell

Estos cmdlets pertenecen al módulo **Microsoft.PowerShell.LocalAccounts** (grupos locales). Si usas Active Directory, también hay cmdlets del módulo **ActiveDirectory**.

### Grupos locales

| Comando | Qué hace | Ejemplo |
| ------- | -------- | ------- |
| `Get-LocalGroup` | Lista grupos locales | `Get-LocalGroup` |
| `Get-LocalGroup -Name <g>` | Detalle de un grupo | `Get-LocalGroup -Name Administrators` |
| `New-LocalGroup` | Crea grupo local | `New-LocalGroup -Name LabGroup -Description "labs"` |
| `Remove-LocalGroup` | Elimina grupo local | `Remove-LocalGroup -Name LabGroup` |
| `Get-LocalGroupMember` | Lista miembros | `Get-LocalGroupMember -Group Administrators` |
| `Add-LocalGroupMember` | Añade miembro | `Add-LocalGroupMember -Group LabGroup -Member lab` |
| `Remove-LocalGroupMember` | Quita miembro | `Remove-LocalGroupMember -Group LabGroup -Member lab` |
| `Set-LocalGroup` | Cambia descripción u otras props | `Set-LocalGroup -Name LabGroup -Description "nuevo"` |

---

### Grupos de dominio (Active Directory)

_(solo si tienes instalado el módulo ActiveDirectory y estás en un dominio)_

| Comando | Qué hace | Ejemplo |
| ------- | -------- | ------- |
| `Get-ADGroup` | Consulta grupos de dominio | `Get-ADGroup -Filter *` |
| `Get-ADGroupMember` | Miembros de un grupo AD | `Get-ADGroupMember "Domain Admins"` |
| `New-ADGroup` | Crea grupo en AD | `New-ADGroup -Name "Lab-SG" -GroupScope Global` |
| `Add-ADGroupMember` | Añade miembros | `Add-ADGroupMember -Identity Lab-SG -Members lab` |
| `Remove-ADGroupMember` | Quita miembros | `Remove-ADGroupMember -Identity Lab-SG -Members lab` |
| `Remove-ADGroup` | Elimina el grupo | `Remove-ADGroup -Identity Lab-SG` |

---

## 3. Comparativa CMD vs PowerShell

| Tarea | CMD | PowerShell |
| ----- | --- | ---------- |
| Listar grupos | `net localgroup` | `Get-LocalGroup` |
| Ver miembros | `net localgroup Administrators` | `Get-LocalGroupMember Administrators` |
| Crear grupo | `net localgroup X /add` | `New-LocalGroup -Name X` |
| Añadir usuario | `net localgroup X user /add` | `Add-LocalGroupMember -Group X -Member user` |
| Salida | Texto plano | Objetos (filtrables con `Where-Object`) |

---

## 4. Atajos y comandos gráficos

| Comando / ruta | Qué hace | Ejemplo |
| -------------- | -------- | ------- |
| `lusrmgr.msc` | Usuarios y grupos locales (GUI) | `lusrmgr.msc` |
| `compmgmt.msc` | Administración de equipos (incluye usuarios locales) | `compmgmt.msc` |
| Win + R → `netplwiz` | Cuentas de usuario (GUI clásica) | `netplwiz` |
| Configuración → Cuentas | UI moderna de cuentas | — |

```powershell
Get-LocalGroupMember -Group Administrators
net localgroup Administrators
```
