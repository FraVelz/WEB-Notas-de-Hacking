---
title: Ataques lab
description: AS-REP, Kerberoast y PtH a nivel checklist (solo lab autorizado).
---

# AD — ataques típicos de lab

Apuntes de **qué es** y **cuándo aplica**. Sin PoCs de exploit; usa las tools del lab con autorización.

| Técnica | Condición típica | Idea |
| ------- | ---------------- | ---- |
| AS-REP Roasting | User sin Kerberos preauth | Pides AS-REP, crackeas el hash offline |
| Kerberoasting | Cuenta con SPN (service) | Pides TGS, crackeas offline |
| Pass-the-Hash | Tienes NT hash | Reutilizas hash NTLM sin cleartext |
| Password spraying | Política conocida | Pocas passwords × muchos users (lento, ruidoso) |
| ACL abuse | GenericAll / WriteDACL… | Cambias permisos/password según el edge |

## Orden mental en CTF/lab

1. Enum users → AS-REP roastables / SPNs.
2. Crack offline (hashcat/john) si el diccionario alcanza.
3. Con creds: más enum, BloodHound, lateral movement.
4. PtH / tickets solo si el lab lo contempla y tienes hashes/tickets.

## Notas de cuidado

- Spraying y fuerza bruta pueden **lockear** cuentas: respeta política del lab.
- No uses estas técnicas fuera de entornos autorizados.
- Documenta: hallazgo → prueba → impacto (user → DA?).

PrivEsc local: [Windows](/WEB-Notas-de-Hacking/privesc/windows/). Enum: [Enumeración](/WEB-Notas-de-Hacking/ad/enumeracion/).

Ref: [HackTricks AD](https://book.hacktricks.wiki/en/windows-hardening/active-directory-methodology/).
