---
title: Huella Digital
description: Huella digital activa vs pasiva y mitigaciones prácticas al navegar.
---

# Huella digital

Rastro que dejas al usar internet o dispositivos: lo que publicas y lo que el sistema genera sin que lo “subas”.

---

## Activa vs pasiva

| Tipo | Qué es | Ejemplos |
| --- | --- | --- |
| **Activa** | Lo publicas o compartes a propósito | Posts, fotos, comentarios, mensajes en foros |
| **Pasiva** | Se genera sin que lo publiques | IP, cookies, historial, fingerprint del navegador, geoloc de apps |

La activa la controlas más (privacidad de cuentas, qué subes). La pasiva es más técnica: headers, canvas/WebGL, fuentes, plugins, resolución, etc.

---

## Mitigaciones concretas

- Revisar privacidad de redes/apps (quién ve posts, listas, ubicación).
- Limpiar cookies / usar contenedores o perfiles separados (trabajo vs personal).
- VPN o Tor según el caso: VPN oculta IP al destino; Tor es más fuerte en anonimato pero más lento y a veces bloqueado.
- No reutilizar el mismo “perfil” (mismo UA + misma IP + mismos logins) si quieres separar identidades.
- Pensar antes de publicar: lo activo suele quedar indexado o archivado.

---

## Ver qué filtra tu navegador

[Cover Your Tracks (EFF)](https://coveryourtracks.eff.org/) muestra qué datos puede leer un sitio de tu navegador y cómo de única es tu huella.
