---
title: Lab — WHOIS y DNS pasivo
description: Lab reproducible — consulta WHOIS/DNS de un dominio propio o de ejemplo público.
---

# Lab — WHOIS y DNS pasivo

## Objetivo

Documentar registros públicos (WHOIS + DNS) de un dominio **propio** o de un TLD de ejemplo sin autenticarte en
servicios de pago.

## Prerequisitos

- [OSINT básico](/WEB-Notas-de-Hacking/osint/basic/) y [Terminología](/WEB-Notas-de-Hacking/osint/terminologia/)
- `whois` y `dig` (o `nslookup`)

## Entorno lab

Tu portátil. Usa un dominio que controles o `example.com` (IANA).

```bash
DOMAIN=example.com
```

## Pasos

1. WHOIS (datos pueden estar redactados por privacidad):

   ```bash
   whois "$DOMAIN" | head -n 40
   ```

2. Registros A / NS / MX:

   ```bash
   dig +short A "$DOMAIN"
   dig +short NS "$DOMAIN"
   dig +short MX "$DOMAIN"
   ```

3. Anota fecha, herramienta y resultado (homónimos ≠ certeza).

## Verificación

`dig +short NS example.com` devuelve nameservers IANA (p. ej. `a.iana-servers.net`). Si usas tu dominio, ves tus NS.

## Referencias

- [IANA example domains](https://www.iana.org/domains/reserved) — acceso 2026-07-15
- [OSINT básico](/WEB-Notas-de-Hacking/osint/basic/)

## Advertencia

No uses dorks ni scraping para acosar personas. Respeta TOS y leyes locales.
