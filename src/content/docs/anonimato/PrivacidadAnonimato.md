---
title: Privacidad Anonimato
description: Capas de Internet, Deep vs Dark Web, TOR/VPN y diferencia privacidad vs anonimato.
---

# Conceptos Generales (privacidad, Anonimato y mucho más)

---

## 1. Internet: niveles o capas

El Internet se suele dividir en tres niveles según **visibilidad y accesibilidad**:

| Capa | Qué es | Acceso |
| --- | --- | --- |
| Surface Web | Lo indexado por buscadores (Google, Bing…). | Navegador normal. |
| Deep Web | Contenido no indexado: paneles, APIs, bases de datos, intranet, paywalls. | Login, URL directa o permisos. |
| Dark Web | Parte de la Deep Web en redes overlay (p. ej. `.onion` en Tor). | Cliente especial (Tor Browser, etc.). |

---

## 2. El anonimato digital

El **anonimato** es ocultar tu identidad real (nombre, IP, ubicación, etc.) en Internet.

### Cómo se logra

- **Red TOR (The Onion Router):** enruta el tráfico por varios nodos cifrados; dificulta rastrear tu IP real.
- **VPN (Red Privada Virtual):** oculta tu IP y cifra la conexión, pero el proveedor VPN ve tu tráfico (no es anonimato total).
- **Tails OS:** live USB sin rastro local; Tor por defecto.
- **Whonix:** VMs separadas (gateway Tor + workstation).
- **Cifrado:** PGP, HTTPS, mensajería cifrada (Signal, Session, etc.).

### Buenas prácticas de anonimato

- No usar correos o alias reales.
- No compartir fotos o metadatos.
- No usar redes sociales personales.
- No mezclar identidad real con la anónima (mismo nick en ambos lados).
- Desactivar JavaScript en Tor (menos superficie de exploits).
- No descargar archivos desde la Dark Web (pueden filtrar tu IP).

---

## 3. Deep Web vs Dark Web

| Concepto | Deep Web | Dark Web |
| --- | --- | --- |
| Definición | Todo lo no indexado por buscadores. | Subconjunto en redes anónimas (Tor, I2P…). |
| Ejemplos | Banca online, correo, Moodle, APIs privadas. | Sitios `.onion`, mercados, foros ocultos. |
| Acceso | Credenciales / URL; a veces red corporativa. | Tor Browser u otro cliente overlay. |
| Legalidad | En sí misma legal (casi todo Internet “útil”). | Acceder es legal; el contenido ilegal no lo es. |

---

## 4. Legalidad y ética

- **Usar la Deep Web o Tor es legal.**
- Lo **ilegal** es acceder, comprar o distribuir contenido prohibido (drogas, armas, CSAM, datos robados, etc.).
- Periodistas, activistas e investigadores usan la Dark Web para proteger fuentes o investigar.
- Proyectos legítimos: SecureDrop, índices `.onion`, foros de privacidad/criptografía.

---

## 5. Tecnologías principales

| Tecnología | Qué hace | Límite / nota |
| --- | --- | --- |
| Tor | Multihop cifrado; oculta IP al destino. | Salida (exit) ve tráfico no cifrado; errores de OPSEC te delatan. |
| VPN | Túnel cifrado hasta el servidor VPN. | Confías en el proveedor; no sustituye Tor. |
| I2P | Red overlay P2P (más “interna” que web pública). | Menos sitios “tipo web” que Tor. |
| Tails / Whonix | SO/VMs orientados a no dejar rastro y forzar Tor. | Hardware, VM mal aislada o leaks DNS siguen siendo riesgo. |
| PGP / Signal | Cifrado de mensajes / identidad criptográfica. | No ocultan metadatos de red por sí solos. |

---

## 6. Riesgos de la Dark Web

- Estafas y vendedores falsos.
- Malware / exploits en descargas.
- Contenido ilegal extremo.
- Errores humanos que permiten rastreo.
- Phishing y troyanos (cripto, credenciales).

---

## 7. Usos legítimos del anonimato y la Dark Web

- Periodismo de investigación.
- Denuncias anónimas en países represivos.
- Privacidad de activistas o disidentes.
- Intercambio técnico sin censura.
- Acceso a información bloqueada por gobiernos.

---

## 8. Privacidad

La **privacidad** es el **control sobre tu información personal**: qué compartes, con quién, cuándo y para qué.

- Idea: “Yo decido quién sabe qué sobre mí.”
- Ejemplo: limitar quién ve tus fotos en redes; dar el correo a un servicio solo para ese uso.

Privacidad = control de tus datos.

---

## 9. Anonimato

El **anonimato** significa que **nadie puede vincular las acciones a tu identidad real**.

- Idea: “Pueden ver lo que hago, pero no saben que soy yo.”
- Ejemplo: comentar con seudónimo o navegar por Tor sin revelar identidad; whistleblowers buscan anonimato.

Anonimato = ocultar identidad.

---

## 10. Diferencias clave

| | Privacidad | Anonimato |
| --- | --- | --- |
| Pregunta | ¿Quién controla mis datos? | ¿Se sabe quién soy? |
| Objetivo | Limitar uso/acceso a información personal. | Desvincular acciones de la identidad real. |
| Ejemplo | Banco sabe quién eres, pero no vende tus datos. | Publicas con nick; nadie sabe tu nombre real. |

- **Privacidad sin anonimato:** el banco te identifica, pero protege tus datos.
- **Anonimato sin privacidad:** seudónimo, pero mensajes guardados/analizados → identidad oculta, datos expuestos.
