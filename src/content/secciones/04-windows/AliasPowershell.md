---
title: AliasPowershell
route: /windows/AliasPowershell
---

# Alias en powershell
---

## Qué es un alias {#qué-es-un-alias}
Un **alias** es simplemente un **nombre alternativo** para un comando existente. Por ejemplo:
```bash
Get-ChildItem     # Nombre completo
ls                # Alias
```

Ambos hacen lo mismo: listar archivos y carpetas.

---

## Alias comunes en PowerShell {#alias-comunes-en-powershell}
<!-- Tabla convertida manualmente -->

---

## Cmdlets relacionados con alias {#cmdlets-relacionados-con-alias}
<!-- Tabla convertida manualmente -->

---

## Ejemplos prácticos {#ejemplos-prácticos}
```bash
# Ver todos los alias
Get-Alias

# Crear un alias personalizado
Set-Alias editar "notepad.exe"

# Usar el alias
editar archivo.txt

# Ver qué comando ejecuta un alias
Get-Alias ls

# Eliminar un alias
Remove-Item alias:editar
```

---

## Alias persistentes {#alias-persistentes}
Por defecto, los alias creados con Set-Alias o New-Alias **solo duran mientras PowerShell está abierto**.

Para hacerlos **permanentes**, agrégalos al **perfil de PowerShell**:
```bash
notepad $PROFILE
```

Luego agrega tus alias personalizados:
```bash
Set-Alias editar notepad.exe
Set-Alias borrar Remove-Item
```

Guarda el archivo y la próxima vez que abras PowerShell, estarán disponibles.

---

## Nota importante {#nota-importante}
- Los alias **no aceptan parámetros por defecto**. Por ejemplo, Set-Alias buscar "Get-ChildItem -Recurse" no funcionará. En ese caso, usa una **función**: ```bash
function buscar { Get-ChildItem -Recurse @args } Set-Alias buscar buscar
```