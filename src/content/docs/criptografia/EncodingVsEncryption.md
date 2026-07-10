---
title: Encoding Vs Encryption
description: Base64 y URL encoding no son cifrado; diferencia práctica.
---

# Encoding vs encryption

Error típico: tratar Base64 como “contraseña cifrada”.

| | Encoding | Encryption |
| --- | -------- | ---------- |
| Objetivo | Representar datos (ASCII-safe, URL-safe) | Confidencialidad |
| Secreto | No hace falta clave | Hace falta clave (o par de claves) |
| Reversible | Cualquiera puede decodificar | Solo quien tiene la clave |
| Ejemplos | Base64, URL encode, hex | AES, RSA+AES híbrido |

## Base64

```bash
echo -n 'hola' | base64
echo 'aG9sYQ==' | base64 -d
```

En tráfico o configs, `eyJ...` suele ser JWT en Base64url, no “cifrado mágico”.

## URL encoding

Espacios y caracteres especiales → `%20`, `%3D`, etc. Solo para transporte en URLs/forms.

## Checklist rápido

- ¿Hay clave? → puede ser cifrado (o al menos autenticación).
- ¿Solo `base64` / hex / URL? → **encoding**, léelo y sigue.
- Hash ≠ cifrado: el hash no se “descifra”; se compara o se ataca por fuerza bruta/diccionario.
