---
title: Gestion Permisos
description: Gestion Permisos - Notas de hacking y ciberseguridad.
---

# Comandos y cmdlets de gestión de permisos
---

## CMD — Comandos de Gestión de Permisos
<!-- Tabla convertida manualmente -->

---

## PowerShell — Cmdlets de Gestión de Permisos
<!-- Tabla convertida manualmente -->

---

## Ejemplos prácticos
### CMD
```bash
icacls "C:\Proyecto" /grant Juan:(R,W)
takeown /f "C:\Proyecto\archivo.txt"
```

### PowerShell
```bash
$acl = Get-Acl "C:\Proyecto"
$rule = New-Object System.Security.AccessControl.FileSystemAccessRule("Juan","Modify","Allow")
$acl.AddAccessRule($rule)
Set-Acl "C:\Proyecto" $acl
```