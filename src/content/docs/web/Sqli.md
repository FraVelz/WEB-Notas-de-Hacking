---
title: SQLi
description: Idea de inyección SQL y prueba mínima en lab autorizado.
---

# SQL injection (SQLi)

Metes SQL donde la app esperaba un valor. Solo en labs / bug bounty con scope.

## Idea

```text
SELECT * FROM users WHERE user = '$input' AND pass = '...'
```

Si `$input` es `' OR '1'='1`, la condición se vuelve siempre verdadera (según query).

## Dónde suele salir

- Login, búsqueda, filtros, `id=` en URL
- A veces headers / cookies

## Prueba mínima (lab)

1. Encuentra un param que hable con DB.
2. Prueba comilla: `'` → ¿error SQL / 500?
3. Lógica: `' OR '1'='1` / `" OR "1"="1`
4. Comenta resto: `' OR 1=1--` (sintaxis según motor)

```http
GET /item?id=1' HTTP/1.1
```

Si hay error de MySQL/Postgres/MSSQL, hay pista del motor.

## Tipos (mapa)

| Tipo | Idea |
| ---- | ---- |
| In-band | Resultado en la misma respuesta (UNION, error) |
| Blind | Sí/no por tiempo o contenido |
| Out-of-band | Canal aparte (DNS/HTTP) — menos frecuente en CTF |

## Defensa (para reportes)

Prepared statements / queries parametrizadas. Escapar a mano suele fallar.

Herramienta: [Burp](/WEB-Notas-de-Hacking/web/burpbasico/). Ref: [PortSwigger SQLi](https://portswigger.net/web-security/sql-injection).
