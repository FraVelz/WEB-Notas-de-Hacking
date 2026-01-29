---
title: Comodines
route: /windows/Comodines
---

# Comodines
---

## 1. Comodines básicos {#1-comodines-básicos}
<!-- Tabla convertida manualmente -->

---

## 2. Ejemplos prácticos {#2-ejemplos-prácticos}
- **Listar todos los archivos de un tipo**:
```bash
dir *.jpg
```

o en PowerShell:
```bash
Get-ChildItem *.jpg
```

- **Borrar todos los archivos de texto**:
```bash
del *.txt
```

o PowerShell:
```bash
Remove-Item *.txt
```

- **Copiar todos los archivos que empiecen con “doc”**:
```bash
copy doc*.* D:\/Backup\/
```

- **Renombrar archivos específicos con patrón** (PowerShell):
```bash
Rename-Item "archivo?.txt" -NewName "nuevo_?.txt"
```

---

**Tip importante:**

En CMD los comodines son muy básicos (* y ?), mientras que en PowerShell puedes usar expresiones más avanzadas con corchetes, rangos y negaciones.