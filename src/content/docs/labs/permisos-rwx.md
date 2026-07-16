---
title: Lab — permisos rwx
description: Lab reproducible — crear archivo, aplicar chmod y verificar con ls -l.
---

# Lab — permisos rwx

## Objetivo

Comprobar que entiendes bits `rwx` creando un archivo, cambiando permisos y leyendo el resultado de `ls -l`.

## Prerequisitos

- Shell en Linux/WSL/VM
- Lectura de [Permisos](/WEB-Notas-de-Hacking/linux/permisos/)

## Entorno lab

Directorio temporal en **tu** usuario. No uses `/` ni cuentas de producción.

```bash
mkdir -p ~/lab-permisos && cd ~/lab-permisos
```

## Pasos

1. Crear archivo y ver permisos por defecto:

   ```bash
   echo "hola" > nota.txt
   ls -l nota.txt
   ```

2. Quitar lectura a “otros” y verificar:

   ```bash
   chmod o-r nota.txt
   ls -l nota.txt
   ```

3. Dar ejecución al dueño (aunque sea texto; solo para ver el bit `x`):

   ```bash
   chmod u+x nota.txt
   ls -l nota.txt
   ```

4. Restaurar `644` típico:

   ```bash
   chmod 644 nota.txt
   ls -l nota.txt
   ```

## Verificación

Tras el paso 2, la columna de permisos no debe mostrar `r` en el trío de “otros” (p. ej. `-rw-r-----` o similar
según umask). Tras el 4: `-rw-r--r--` (o equivalente con umask).

## Referencias

- [Permisos (notas)](/WEB-Notas-de-Hacking/linux/permisos/) — acceso 2026-07-15
- `man chmod` en tu sistema

## Advertencia

No cambies permisos de binarios del sistema ni de directorios ajenos.
