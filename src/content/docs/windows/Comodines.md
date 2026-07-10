---
title: Comodines
description: Patrones * ? y [] para filtrar archivos en CMD y PowerShell.
---

# Comodines

Caracteres especiales para emparejar nombres de archivo sin escribirlos uno a uno. En CMD bastan `*` y `?`; PowerShell añade clases de caracteres `[]`.

---

## 1. Comodines básicos

| Comodín | Qué hace | Ejemplo |
| ------- | -------- | ------- |
| `*` | Cualquier secuencia de caracteres (incluida vacía) | `*.txt` → todos los `.txt` |
| `?` | Exactamente un carácter | `archivo?.log` → `archivo1.log`, no `archivo10.log` |
| `[abc]` | Un carácter de ese conjunto (PowerShell / .NET) | `file[12].txt` → `file1.txt` o `file2.txt` |
| `[a-z]` | Un carácter en el rango (PowerShell) | `doc[a-c].txt` |
| `[!abc]` / `[^abc]` | Un carácter que **no** esté en el conjunto (según contexto) | `*[!e].txt` (en PS con `-Path` / filtros) |

En CMD, `dir` y `del` usan `*` y `?`. Los corchetes son más fiables en PowerShell (`Get-ChildItem`, `-Filter` vs `-Include` tienen matices).

---

## 2. Ejemplos prácticos

- **Listar todos los archivos de un tipo**:

```cmd
dir *.jpg
```

o en PowerShell:

```powershell
Get-ChildItem *.jpg
```

- **Borrar todos los archivos de texto**:

```cmd
del *.txt
```

o PowerShell:

```powershell
Remove-Item *.txt
```

- **Copiar todos los archivos que empiecen con “doc”**:

```cmd
copy doc*.* D:\Backup\
```

- **Un solo carácter desconocido**:

```cmd
dir informe?.docx
```

- **Clase de caracteres (PowerShell)**:

```powershell
Get-ChildItem file[0-9].txt
```

- **Renombrar con patrón** (PowerShell; a menudo hace falta un bucle):

```powershell
Get-ChildItem archivo?.txt | ForEach-Object {
  Rename-Item $_.Name ($_.Name -replace 'archivo','nuevo')
}
```

---

### Tip importante

En CMD los comodines son muy básicos (`*` y `?`), mientras que en PowerShell puedes usar expresiones más avanzadas con corchetes, rangos y, para filtros complejos, `-match` / regex sobre `$_.Name`.
