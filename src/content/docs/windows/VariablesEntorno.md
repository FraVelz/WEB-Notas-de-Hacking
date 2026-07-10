---
title: Variables Entorno
description: Variables de sistema y de usuario en Windows (PATH, USERPROFILE, etc.).
---

# Variables de entorno

---

## Tipos

1. **Variables del sistema** — aplican a todos los usuarios:
   - `PATH`: rutas donde Windows busca ejecutables
   - `COMPUTERNAME`: nombre del equipo
   - `SYSTEMROOT`: carpeta del sistema (suele ser `C:\Windows`)
   - `TEMP` / `TMP`: carpeta temporal

2. **Variables de usuario** — solo el usuario actual:
   - `USERNAME`: nombre del usuario
   - `USERPROFILE`: perfil (`C:\Users\TuUsuario`)
   - `HOMEPATH`: ruta relativa (`\Users\TuUsuario`)

---

## Cómo verlas

### CMD

```cmd
set
echo %PATH%
echo %USERPROFILE%
```

### PowerShell

```powershell
Get-ChildItem Env:
$Env:PATH
$Env:USERNAME
```

### GUI

1. `Win + R` → `sysdm.cpl` → Enter
2. **Opciones avanzadas** → **Variables de entorno**
3. Ver / crear / editar / eliminar (usuario o sistema)

---

## Editar o crear (PATH)

1. Abrir **Variables de entorno**
2. Seleccionar `PATH` → Editar → Nuevo → pegar la ruta
3. Guardar y reiniciar CMD/PowerShell para que tome efecto
