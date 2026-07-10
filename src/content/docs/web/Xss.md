---
title: XSS
description: XSS reflected/stored y payload mínimo para labs.
---

# Cross-Site Scripting (XSS)

La app refleja input sin escapar → el navegador de la víctima ejecuta tu JS. Solo labs / scope autorizado.

## Tipos

| Tipo | Idea |
| ---- | ---- |
| Reflected | El payload va en la request y vuelve en esa respuesta |
| Stored | Se guarda (comentario, perfil) y pega a otros |
| DOM | El JS del cliente mete el input en el DOM sin sanitizar |

## Prueba mínima

Busca reflejo del input en HTML. Empieza simple:

```html
<script>alert(1)</script>
```

Si filtran tags, prueba contexto (atributo, JS string):

```html
"><img src=x onerror=alert(1)>
```

```html
'"><svg onload=alert(1)>
```

## Impacto (qué reportar)

- Robo de cookie de sesión (si no es HttpOnly)
- Keylogging / phishing en el origen de la app
- Acciones en nombre del usuario

## Defensa

Escape según contexto (HTML/attr/JS/URL), CSP, cookies `HttpOnly` + `Secure` + `SameSite`.

Relacionado: [HTTP](/WEB-Notas-de-Hacking/web/httpbasico/), [Burp](/WEB-Notas-de-Hacking/web/burpbasico/).

Ref: [PortSwigger XSS](https://portswigger.net/web-security/cross-site-scripting).
