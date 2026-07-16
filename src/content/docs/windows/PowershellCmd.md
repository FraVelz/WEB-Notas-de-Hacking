---
title: Powershell Cmd
description: Diferencias prácticas entre CMD (texto/batch) y PowerShell (objetos y cmdlets).
---

# Diferencias entre Powershell y CMD

Dos shells en Windows: CMD es el clásico basado en texto; PowerShell trabaja con **objetos .NET** y automatiza
administración moderna.

---

## CMD (Command Prompt)

- **Origen**: Basado en MS-DOS, presente en Windows desde versiones muy antiguas.
- **Lenguaje**: Usa un lenguaje de comandos muy básico, llamado _batch_.
- **Funciones principales**:
  - Ejecutar comandos simples del sistema (`dir`, `copy`, `del`, etc.).
  - Automatizar tareas básicas con archivos `.bat`.
- **Limitaciones**:
  - Manejo de objetos muy limitado: CMD trabaja con **texto plano**, no con objetos.
  - Automatización avanzada complicada.
  - Funciones modernas de Windows (registro, servicios, AD) son más difíciles.

---

## PowerShell

- **Origen**: Introducido en 2006 como herramienta moderna de administración de Windows.
- **Lenguaje**: Basado en .NET, orientado a objetos.
- **Funciones principales**:
  - Devuelve **objetos completos**, no solo texto.
  - Ejemplo: `Get-Process` devuelve un objeto con propiedades (`Id`, `CPU`, `WorkingSet`…) filtrables.
  - Scripts `.ps1` para admin, servicios, registro, Active Directory, etc.
  - Encadena cmdlets por pipeline.
- **Compatibilidad**: Puede ejecutar casi todos los comandos de CMD, y mucho más.
- **Multiplataforma**: PowerShell 7+ funciona en Windows, Linux y macOS.

---

## Diferencias clave en práctica

| Aspecto | CMD | PowerShell |
| ------- | --- | ---------- |
| Modelo de datos | Texto plano | Objetos .NET |
| Sintaxis | Comandos cortos (`dir`, `copy`) | Verbo-Sustantivo (`Get-ChildItem`, `Copy-Item`) |
| Pipeline | Pasa texto entre comandos | Pasa objetos (`$_.Name`, propiedades) |
| Scripts | `.bat` / `.cmd` | `.ps1` |
| Filtrado | `find`, `findstr` | `Where-Object`, `Select-Object` |
| Variables | `%VAR%` | `$var` / `$env:VAR` |
| Ayuda | `comando /?` | `Get-Help comando` |
| Admin moderna | Limitada | Servicios, ACL, AD, CIM/WMI nativos |
| Alias útiles | Pocos | `ls`, `cd`, `cat`, `ps` → cmdlets |

---

## Ejemplo

- CMD:

```cmd
dir | find "archivo.txt"
```

- PowerShell:

```powershell
Get-ChildItem | Where-Object { $_.Name -eq "archivo.txt" }
```

En PowerShell trabajas con objetos (`$_.Name`) y no solo con texto, lo que da más flexibilidad al filtrar y encadenar.
