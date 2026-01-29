---
title: PowershellCmd
route: /windows/PowershellCmd
---

# Diferencias entre Powershell y CMD
---

## CMD (Command Prompt) {#cmd-command-prompt}
- **Origen**: Basado en MS-DOS, presente en Windows desde versiones muy antiguas.
- **Lenguaje**: Usa un lenguaje de comandos muy básico, llamado *batch*.
- **Funciones principales**:
- Ejecutar comandos simples del sistema (dir, copy, del, etc.).
- Automatizar tareas básicas con archivos .bat.

<li><strong>Limitaciones</strong>:
- Manejo de objetos muy limitado: CMD trabaja con **texto plano**, no con objetos.
- Automatización avanzada complicada.
- Funciones modernas de Windows (como administración de registros o servicios) son más difíciles de hacer.

</li >
</Lista >
---

## PowerShell {#powershell}
- **Origen**: Introducido en 2006 como una herramienta moderna de administración de Windows.
- **Lenguaje**: Basado en .NET, orientado a objetos.
- **Funciones principales**: <Lista> No solo ejecuta comandos, sino que devuelve **objetos completos**, no solo texto. <Lista> Ejemplo: Get-Process devuelve un objeto de proceso con propiedades (Id, CPU, Memory, etc.) que se pueden filtrar o manipular.

</li>
<li>
Automatización avanzada: scripts .ps1 pueden hacer
casi cualquier cosa en Windows, desde tareas de administración hasta
manipulación de servicios, registro, Active Directory, etc.</li> <li>Combinación de cmdlets (comandos especializados de PowerShell)
para tareas complejas.</li> </Lista>
</li>
<li><strong>Compatibilidad</strong>: Puede ejecutar casi todos los
comandos de CMD, y mucho más.</li> <li><strong>Multiplataforma</strong>: PowerShell 7+ funciona en
Windows, Linux y macOS.</li> </Lista >
---

## Diferencias clave en práctica {#diferencias-clave-en-práctica}
<!-- Tabla convertida manualmente -->

---

## Ejemplo {#ejemplo}
- CMD:
```bash
dir | find "archivo.txt"
```

- PowerShell:
```bash
Get-ChildItem | Where-Object { $_.Name -eq "archivo.txt" }
```

<blockquote>
En PowerShell trabajas con objetos ($_.Name) y no solo con texto, lo que te da muchísima más flexibilidad.

</blockquote>