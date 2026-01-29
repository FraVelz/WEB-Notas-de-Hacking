---
title: RedireccionesPowershell
route: /windows/RedireccionesPowershell
---

# Redirecciones en Powershell (operadores lógicos y de redirección)
---

## Tipos de salida en PowerShell {#tipos-de-salida-en-powershell}
PowerShell no solo maneja texto (como CMD), sino **flujos de salida (streams)**. Cada flujo tiene un número que se usa para redirigirlo:

<!-- Tabla convertida manualmente -->

---

## Operadores de redirección {#operadores-de-redirección}
<!-- Tabla convertida manualmente -->

---

## Ejemplos combinados {#ejemplos-combinados}
```bash
# Guarda salida y errores en archivos diferentes
Get-ChildItem C:\ 1>salida.txt 2>errores.txt

# Guarda todo en un solo archivo
Get-ChildItem C:\ *> todo.txt

# Si un archivo existe, muestra un mensaje
Test-Path "C:\config.txt" && Write-Host "Existe" || Write-Host "No existe"

# Redirigir salida a un archivo y también verla en pantalla
Get-Process | Tee-Object -FilePath procesos.txt
```

---

## Tip extra: usar redirecciones dentro de scripts {#tip-extra-usar-redirecciones-dentro-de-scripts}
En scripts (.ps1), puedes controlar redirecciones con más precisión:
```bash
$ErrorActionPreference = "SilentlyContinue"   # Ignora errores
Get-Item "C:\noexiste.txt" *> log.txt         # Redirige todo
```