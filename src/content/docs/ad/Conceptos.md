---
title: Conceptos
description: Dominio, DC, usuarios/grupos y Kerberos a nivel mapa mental.
---

# Active Directory — conceptos

Directorio de identidades en redes Windows. En labs (HTB/THM) casi siempre hay un dominio.

| Concepto | Significado |
| -------- | ----------- |
| Dominio | Espacio de nombres + políticas (ej. `lab.local`) |
| Forest / tree | Jerarquía de dominios |
| DC (Domain Controller) | Servidor que autentica y guarda el AD |
| Usuario / grupo | Identidades y membresías |
| OU | Contenedor para organizar y aplicar GPO |
| GPO | Políticas (password, scripts, hardening) |
| SPN | Nombre de servicio ligado a una cuenta (Kerberoast) |
| SID | Identificador de seguridad de un principal |

## Autenticación (idea)

| Protocolo | Idea |
| --------- | ---- |
| Kerberos | Tickets (TGT / TGS); reloj sincronizado importa |
| NTLM | Challenge-response legacy; aún aparece |
| LDAP | Consultas al directorio (puerto 389/636) |

Flujo mental Kerberos: user pide TGT al DC → con TGT pide TGS para un servicio → presenta TGS al servicio.

## Por qué importa en pentest

Comprometer un user de dominio ≠ game over, pero abre enum masiva, pivotes y a menudo camino a DA (Domain Admin) si hay misconfigs.

Siguiente: [Enumeración](/WEB-Notas-de-Hacking/ad/enumeracion/), [Ataques lab](/WEB-Notas-de-Hacking/ad/ataqueslab/).
