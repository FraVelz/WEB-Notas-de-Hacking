---
title: User Agent
description: Qué es el User-Agent del navegador y cómo se usa o se falsifica.
---

# User Agent

---

## Definición

El **user agent** es una **cadena de texto que un navegador o aplicación envía a un servidor web para identificarse**.
Básicamente dice: _“Hola, soy este navegador, en este sistema operativo, y puedo manejar este tipo de contenido.”_

---

## Qué incluye normalmente

1. **Nombre del navegador** (Chrome, Firefox, Safari…)
2. **Versión del navegador**
3. **Sistema operativo** (Windows, Linux, Android, iOS…)
4. **Detalles adicionales** (motor de renderizado, tipo de dispositivo, compatibilidad)

### Ejemplo de user agent real

```bash
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36
```

Esto indica:

- Navegador: Chrome
- Sistema operativo: Windows 10, 64 bits
- Motor de renderizado: WebKit/AppleWebKit

---

## Para qué sirve

- Los servidores lo usan para **adaptar el contenido** (móvil, compatibilidad, etc.).
- En seguridad: detectar bots o automatización.
- En analítica: qué navegadores/dispositivos hay.

---

## Nota

- Se puede **modificar o falsificar** (simular otro navegador/dispositivo).
- No protege tu identidad por sí solo; solo describe el software cliente.

---

## Cómo modificar el User-Agent

Lo más simple: extensión del navegador.

- Chromium: [User-Agent Switcher and Manager](https://chromewebstore.google.com/detail/user-agent-switcher-and-m/bhchdcejhohfmigjafbampogmaanbfkg)
- Firefox: [User-Agent Switcher and Manager](https://addons.mozilla.org/es/firefox/addon/user-agent-string-switcher/)

---

## Extra

Generadores usados en OSINT / CTI (también abusados):

- Identidades falsas: <https://www.fakenamegenerator.com/>
- Caras sintéticas: <https://thispersondoesnotexist.com/>
