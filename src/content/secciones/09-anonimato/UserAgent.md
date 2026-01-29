---
title: UserAgent
route: /anonimato/UserAgent
---

# User Agent
---

## Definición {#definición}
El **user agent** es una{" "} ** cadena de texto que un navegador o aplicación envía a un servidor web para identificarse ** . Básicamente dice:

<blockquote>
“Hola, soy este navegador, en este sistema operativo, y puedo manejar este tipo de contenido.”

</blockquote>
---

## Qué incluye normalmente {#qué-incluye-normalmente}
<ol type="1">
<li>
<strong>Nombre del navegador</strong> (Chrome, Firefox, Safari…)
</li> <li>
<strong>Versión del navegador</strong>
</li> <li>
<strong>Sistema operativo</strong> (Windows, Linux, Android, iOS…)
</li> <li>
<strong>Detalles adicionales</strong> (motor de renderizado, tipo de
dispositivo, compatibilidad con características)
</li> </ol>
**Ejemplo de user agent real:**
```bash
Mozilla/5.0
(Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like
Gecko) Chrome/117.0.0.0 Safari/537.36
```

Esto indica:

- Navegador: Chrome
- Sistema operativo: Windows 10, 64 bits
- Motor de renderizado: WebKit/AppleWebKit

---

## Para qué sirve {#para-qué-sirve}
- Los servidores web usan el user agent para{" "} **adaptar el contenido**: versión móvil, compatible con ciertos navegadores, etc.
- En **ciberseguridad** se puede usar para **identificar bots o ataques automatizados**.
- También sirve en **analítica web** para conocer qué navegadores y dispositivos usan los usuarios.

---

## Nota {#nota}
- Se puede **modificar o falsificar** el user agent. Por ejemplo, los desarrolladores o hackers lo cambian para simular otro navegador o dispositivo.
- No protege tú identidad por sí mismo; solo dice qué software estás usando.

---

## Como modificar tú User-Agent {#como-modificar-tú-user-agent}
*Hay diferentes formas de modificar el user-agent,* pero la más fácil y simple de implementar es usando una extensión web, **aquí la extensión más recomendada** aunque existen muchas más:

Enlace a la extensión (Chromium):{" "} [Ir a User-Agent Switcher and Manager](https://chromewebstore.google.com/detail/user-agent-switcher-and-m/bhchdcejhohfmigjafbampogmaanbfkg)

Enlace a la extensión (Firefox):{" "} [Ir a User-Agent Switcher and Manager](https://addons.mozilla.org/es/firefox/addon/user-agent-string-switcher/)

---

## Extra {#extra}
Crear información falsa, e imágenes de personas (usos de ciberinteligencia aunque también lo usan los ciberdelincuentes en la darkweb):

- Enlace al generador de identidades falsas: https://www.fakenamegenerator.com/
- Enlace a ThisPersonDoesNotExist: https://thispersondoesnotexist.com/