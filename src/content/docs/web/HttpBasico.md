---
title: HTTP básico
description: Métodos, status, headers y cookies para labs web.
---

# HTTP básico

Base de casi todo web hacking: petición → respuesta. Solo en labs / con autorización.

| Pieza | Idea |
| ----- | ---- |
| Método | GET, POST, PUT, DELETE, OPTIONS, HEAD… |
| URL / path | Recurso (`/login`, `/api/user?id=1`) |
| Headers | Host, Cookie, User-Agent, Content-Type… |
| Body | Datos (form, JSON) en POST/PUT |
| Status | 200 OK, 301/302 redirect, 401/403, 404, 500 |

## Métodos que más miras

| Método | Uso típico |
| ------ | ---------- |
| GET | Leer; params en query |
| POST | Enviar form / API |
| PUT/PATCH | Actualizar |
| DELETE | Borrar |
| OPTIONS | Qué métodos acepta (CORS a veces) |

## Status útiles

| Código | Significado práctico |
| ------ | -------------------- |
| 200 | OK |
| 301/302 | Redirect (sigue Location) |
| 401 | No autenticado |
| 403 | Autenticado pero sin permiso |
| 404 | No existe (o oculto) |
| 500 | Error de servidor (a veces leak) |

## Cookies / sesión

```http
Cookie: session=abc123; Path=/; HttpOnly
```

Sin `HttpOnly` el JS puede leerla (XSS → robo de sesión). Sin `Secure` viaja en HTTP claro.

## Ejemplo (curl)

```bash
curl -i 'https://ejemplo.lab/login' -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'user=admin&pass=admin'
```

Docs: [MDN HTTP](https://developer.mozilla.org/es/docs/Web/HTTP).

Siguiente: [Burp básico](/WEB-Notas-de-Hacking/web/burpbasico/).
