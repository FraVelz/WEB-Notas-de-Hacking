---
title: Basicos
description: Simétrico vs asimétrico, hash, sal y qué mirar en un pentest.
---

# Criptografía — básicos

Ideas mínimas para no mezclar conceptos en labs y reportes.

## Conceptos

| Concepto | Significado |
| -------- | ----------- |
| Cifrado simétrico | Misma clave para cifrar y descifrar (AES, ChaCha20). Rápido; el problema es repartir la clave. |
| Cifrado asimétrico | Par público/privado (RSA, ECC). Público cifra o verifica; privado descifra o firma. |
| Hash | Función de un solo sentido: mismo input → mismo digest. No se “descifra”. |
| Sal (salt) | Valor aleatorio por contraseña antes del hash. Evita rainbow tables compartidas. |
| TLS / HTTPS | Canal cifrado en tránsito (certificados + negociación de cifrado). |

## En pentest / labs (qué mirar)

- Credenciales en claro en tráfico HTTP, configs, dumps.
- Hashes débiles o sin sal (`MD5`, `SHA1` de passwords).
- Certificados autofirmados / caducados (aviso, no siempre “hack”).
- Secretos en reposo: keys en repos, `.env`, backups.

## Relacionado

- [Hashing](/WEB-Notas-de-Hacking/criptografia/hashing/)
- [Encoding vs encryption](/WEB-Notas-de-Hacking/criptografia/encodingvsencryption/)
- César con `tr`: [Cifrado César](/WEB-Notas-de-Hacking/criptografia/cifradocesar/)
