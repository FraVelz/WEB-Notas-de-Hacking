---
title: Gestion Usuarios
description: Crear, listar y modificar usuarios locales (y AD) desde CMD y PowerShell.
---

# Comandos y cmdlets de gestión de usuarios

Alta, baja y consulta de cuentas. En local usas `net user` o el módulo **LocalAccounts**; en dominio, el módulo **ActiveDirectory**. Casi todo pide **ejecutar como administrador**.

---

## 1. Comandos de gestión de usuarios en CMD

Estos comandos funcionan desde **Símbolo del sistema (cmd)** con permisos de administrador.

| Comando | Qué hace | Ejemplo |
| ------- | -------- | ------- |
| `net user` | Lista usuarios locales | `net user` |
| `net user <nombre>` | Detalle de una cuenta | `net user Administrator` |
| `net user <nombre> <pass> /add` | Crea usuario local | `net user lab Pass123! /add` |
| `net user <nombre> /delete` | Elimina usuario | `net user lab /delete` |
| `net user <nombre> <pass>` | Cambia la contraseña | `net user lab NuevaPass!` |
| `net user <nombre> /active:yes\|no` | Activa o desactiva la cuenta | `net user lab /active:no` |
| `net localgroup Administrators <user> /add` | Añade usuario a un grupo local | `net localgroup Administrators lab /add` |
| `whoami` | Usuario y contexto actuales | `whoami /all` |

---

## 2. Cmdlets de gestión de usuarios en PowerShell

Estos cmdlets forman parte de los módulos **Microsoft.PowerShell.LocalAccounts** o **ActiveDirectory** (si está instalado).

### Usuarios locales

| Comando | Qué hace | Ejemplo |
| ------- | -------- | ------- |
| `Get-LocalUser` | Lista usuarios locales | `Get-LocalUser` |
| `Get-LocalUser -Name <n>` | Detalle de un usuario | `Get-LocalUser -Name lab` |
| `New-LocalUser` | Crea usuario local | `New-LocalUser -Name lab -Password (Read-Host -AsSecureString)` |
| `Remove-LocalUser` | Elimina usuario | `Remove-LocalUser -Name lab` |
| `Set-LocalUser` | Modifica propiedades (pass, descripción…) | `Set-LocalUser -Name lab -Description "cuenta lab"` |
| `Enable-LocalUser` / `Disable-LocalUser` | Activa o desactiva | `Disable-LocalUser -Name lab` |

---

### Grupos locales

| Comando | Qué hace | Ejemplo |
| ------- | -------- | ------- |
| `Get-LocalGroup` | Lista grupos locales | `Get-LocalGroup` |
| `Get-LocalGroupMember` | Miembros de un grupo | `Get-LocalGroupMember -Group Administrators` |
| `Add-LocalGroupMember` | Añade miembro a un grupo | `Add-LocalGroupMember -Group Administrators -Member lab` |
| `Remove-LocalGroupMember` | Quita miembro de un grupo | `Remove-LocalGroupMember -Group Users -Member lab` |

---

### Información y autenticación

| Comando | Qué hace | Ejemplo |
| ------- | -------- | ------- |
| `whoami` | Identidad actual (también en PS) | `whoami /groups` |
| `$env:USERNAME` | Nombre del usuario de la sesión | `$env:USERNAME` |
| `Get-ComputerInfo` | Info del equipo (incluye dominio, etc.) | `Get-ComputerInfo \| Select CsName, CsDomain` |
| `query user` | Sesiones interactivas conectadas | `query user` |

---

### Active Directory (solo si tienes AD instalado)

| Comando | Qué hace | Ejemplo |
| ------- | -------- | ------- |
| `Get-ADUser` | Consulta usuarios de dominio | `Get-ADUser -Identity jdoe -Properties *` |
| `New-ADUser` | Crea usuario en AD | `New-ADUser -Name "Lab User" -SamAccountName lab` |
| `Set-ADUser` | Modifica atributos | `Set-ADUser -Identity lab -Enabled $true` |
| `Remove-ADUser` | Elimina usuario de AD | `Remove-ADUser -Identity lab` |
| `Get-ADGroupMember` | Miembros de un grupo de dominio | `Get-ADGroupMember "Domain Admins"` |

---

## 3. Comandos útiles para entornos mixtos (CMD + PowerShell)

| Comando | Qué hace | Ejemplo |
| ------- | -------- | ------- |
| `net user` | Sigue funcionando dentro de PowerShell | `net user` |
| `runas /user:<u> cmd` | Abre CMD como otro usuario | `runas /user:lab cmd` |
| `Start-Process -Verb RunAs` | Eleva a administrador | `Start-Process powershell -Verb RunAs` |
| `Get-LocalUser \| Format-Table` | Listado legible en PS | `Get-LocalUser \| ft Name, Enabled` |

```powershell
Get-LocalUser | Where-Object Enabled -eq $true
net localgroup Administrators
```
