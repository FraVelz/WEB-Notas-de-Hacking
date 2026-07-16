---
title: Lab — verificar hash SHA-256
description: Lab reproducible — generar SHA-256 de un archivo y comprobar integridad.
---

# Lab — verificar hash SHA-256

## Objetivo

Generar el hash de un archivo, alterarlo y demostrar que el digest cambia (integridad).

## Prerequisitos

- [Hashing](/WEB-Notas-de-Hacking/criptografia/hashing/)
- `sha256sum` (GNU coreutils) o `shasum -a 256`

## Entorno lab

```bash
mkdir -p ~/lab-hash && cd ~/lab-hash
printf 'payload-lab\n' > archivo.bin
```

## Pasos

1. Calcular digest y guardarlo:

   ```bash
   sha256sum archivo.bin | tee archivo.sha256
   ```

2. Verificar contra el fichero de hashes:

   ```bash
   sha256sum -c archivo.sha256
   ```

3. Alterar un byte y volver a verificar (debe fallar):

   ```bash
   echo x >> archivo.bin
   sha256sum -c archivo.sha256 || true
   ```

## Verificación

Paso 2: `archivo.bin: OK`. Paso 3: `FAILED` o mensaje de mismatch. Recalcula el hash tras el cambio y confirma que
difiere del guardado.

## Referencias

- [Hashing (notas)](/WEB-Notas-de-Hacking/criptografia/hashing/) — acceso 2026-07-15
- `man sha256sum`

## Advertencia

Hash ≠ cifrado. No publiques hashes de dumps reales con datos personales.
