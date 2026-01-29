---
title: GestionPermisos
route: /windows/GestionPermisos
---

# Comandos y cmdlets de gestión de permisos
---

## CMD — Comandos de Gestión de Permisos {#cmd--comandos-de-gestión-de-permisos}
<!-- Tabla convertida manualmente -->

---

## PowerShell — Cmdlets de Gestión de Permisos {#powershell--cmdlets-de-gestión-de-permisos}
<!-- Tabla convertida manualmente -->

---

## Ejemplos prácticos {#ejemplos-prácticos}
### CMD {#cmd}
```bash
icacls "C:\Proyecto" /grant Juan:(R,W)
takeown /f "C:\Proyecto\archivo.txt"
```

### PowerShell {#powershell}
```bash
$acl = Get-Acl "C:\Proyecto"
$rule = New-Object System.Security.AccessControl.FileSystemAccessRule("Juan","Modify","Allow")
$acl.AddAccessRule($rule)
Set-Acl "C:\Proyecto" $acl
```