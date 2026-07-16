---
title: Hashing
description: MD5/SHA, md5sum/sha256sum y colisiones a nivel práctico.
---

# Hashing

Un hash resume datos en un digest fijo. Sirve para integridad y para almacenar contraseñas (con sal + algoritmo lento).

## Algoritmos que verás

| Algoritmo | Notas prácticas |
| --------- | --------------- |
| MD5 | Rápido; **roto** para seguridad (colisiones). Aún aparece en labs viejos y checksums legacy. |
| SHA-1 | También débil para firmas/colisiones. Evitar en diseño nuevo. |
| SHA-256 / SHA-512 | Uso habitual para integridad de archivos. |
| bcrypt / scrypt / Argon2 | Para **passwords**: lentos a propósito + sal. |

## Comandos (integridad de archivos)

```bash
md5sum archivo.bin
sha256sum archivo.bin
sha256sum -c checksums.sha256   # verificar lista
```

Comparar el digest con el publicado por el autor del ISO/paquete.

## Colisiones (idea)

Dos inputs distintos con el **mismo** hash. En MD5/SHA-1 es factible en contextos de ataque; por eso no se usan para
firmas ni autenticidad seria.

## Passwords

No guardes `md5(password)`. Usa KDF (bcrypt/Argon2) con sal única. En pentest, si encuentras hashes, el tipo (formato
John/Hashcat) marca cómo atacarlos **en lab autorizado**.

## Ejemplo lab

```bash
echo -n 'password' | md5sum
# 5f4dcc3b5aa765d61d8327deb882cf99  -
# mismo string → mismo digest; por eso hace falta sal + KDF lento
```
