---
title: Burp básico
description: Proxy, Repeater e Inspector para interceptar HTTP en lab.
---

# Burp Suite (básico)

Proxy HTTP(S) para ver y tocar peticiones. Community basta para labs.

## Piezas que usas ya

| Herramienta | Para qué |
| ----------- | -------- |
| Proxy | Interceptar request/response |
| HTTP history | Historial de lo que pasó |
| Repeater | Reenviar y editar a mano |
| Intruder | Fuerza bruta / fuzz (lento en Community) |
| Decoder | Base64, URL encode, etc. |

## Setup mínimo

1. Burp escucha `127.0.0.1:8080`.
2. Navegador (o FoxyProxy) → proxy a ese puerto.
3. Instala el CA de Burp para HTTPS (si no, solo ves CONNECT).
4. Scope: limita al host del lab (menos ruido).

## Qué mirar

- Params en query/body (id, role, file…)
- Cookies / tokens / JWT
- Headers raros (`X-Original-URL`, `X-Forwarded-For`)
- Diferencias 200 vs 403 al cambiar un valor

## Flujo típico

1. Navega la app con intercept off; revisa **HTTP history**.
2. Manda una petición interesante a **Repeater**.
3. Cambia un parámetro → compara respuesta.
4. Si hay lista de valores → Intruder (o script).

Relacionado: [HTTP básico](/WEB-Notas-de-Hacking/web/httpbasico/), [SQLi](/WEB-Notas-de-Hacking/web/sqli/), [XSS](/WEB-Notas-de-Hacking/web/xss/).

Docs: [Burp docs](https://portswigger.net/burp/documentation).
