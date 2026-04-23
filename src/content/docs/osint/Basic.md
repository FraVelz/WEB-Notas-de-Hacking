---
title: OSINT básico
description: Metodología, ética, herramientas por categoría y enlaces oficiales para inteligencia de fuentes abiertas.
---

# OSINT básico

**OSINT** (*Open Source Intelligence*) es recopilar, contrastar y usar información de **fuentes públicas y legales** (web, registros, redes, fugas ya agregadas de forma responsable, etc.). No sustituye a un mandato legal ni a un contrato de pentesting: el marco general está en [Legalidad del hacking](/conceptos-basicos/legalidadhacking/).

## Ética y límites

- **Proporcionalidad:** recopila solo lo necesario para un fin legítimo (empleo, investigación autorizada, reducir tu propia huella).
- **No acoso:** seguir, publicar datos para intimidar o contactar de forma obsesiva no es OSINT profesional.
- **Datos personales:** respeta la normativa local (RGPD y equivalentes) y las políticas del cliente.
- **Filtraciones:** comprobar si un correo apareció en brechas puede ser válido para conciencia de riesgo; **descargar o comercializar** bases filtradas suele ser ilegal.

## Metodología básica

1. **Definir objetivo y alcance** (dominio, persona pública, infra propia).
2. **Elegir fuentes** (DNS/WHOIS, buscadores, redes, índices de servicios expuestos).
3. **Documentar:** URL, fecha y herramienta (y captura si el informe lo requiere).
4. **Verificar:** cruza fuentes; los homónimos y perfiles falsos son frecuentes.

Glosario: [Terminología OSINT](/osint/terminologia/). Búsqueda avanzada: [Google Dorks](/osint/googledoorks/).

## Navegador y tecnologías web

- **[Wappalyzer](https://www.wappalyzer.com/)** — Identifica tecnologías del sitio (CMS, analytics, frameworks).
- **[BuiltWith](https://builtwith.com/)** — Perfil tecnológico del dominio (histórico y relacionados).

## Búsqueda y archivo web

- Operadores de búsqueda: [Google Dorks](/osint/googledoorks/).
- **[Internet Archive (Wayback Machine)](https://web.archive.org/)** — Versiones antiguas de páginas.

## Dominio, DNS y subdominios

Recolección **pasiva:** registros públicos, transparencia de certificados, agregadores. Herramienta típica:

- **[theHarvester](https://github.com/laramies/theHarvester)** — Correos, hosts y subdominios desde fuentes públicas.

## Correo, usuarios e identidad

- **[Have I Been Pwned](https://haveibeenpwned.com/)** — Comprobar correo en filtraciones conocidas.
- **[WhatsMyName](https://whatsmyname.app/)** — Comprobar un nombre de usuario en muchas plataformas.
- **[Sherlock](https://github.com/sherlock-project/sherlock)** y **[Maigret](https://github.com/soxoj/maigret)** — Búsqueda de perfiles por *handle* (uso ético imprescindible).
- **[Epieos](https://epieos.com/)** — Varios pivotes OSINT en torno a correo/teléfono (respeta TOS y leyes).

## Archivos y metadatos

- **[ExifTool](https://exiftool.org/)** — Metadatos en imágenes, PDF y más.
- **[FotoForensics](https://fotoforensics.com/)** — Indicios de manipulación (p. ej. ELA).
- Búsqueda inversa: [Google Lens](https://lens.google/), Yandex, Bing Images.

## Infraestructura expuesta

Motores que **indexan** servicios visibles en Internet (no sustituyen autorización para probar sistemas ajenos):

- **[Shodan](https://www.shodan.io/)**
- **[Censys](https://search.censys.io/)**

## Marcos y automatización

- **[OSINT Framework](https://osintframework.com/)** — Mapa de enlaces por categoría.
- **[Maltego](https://www.maltego.com/)** — Grafos de relaciones entre entidades (producto comercial).
- **[SpiderFoot](https://www.spiderfoot.net/)** — Automatización modular (autohospedable).
- **[DataSploit](https://github.com/datasploit/datasploit)** — Conjunto de scripts; revisa mantenimiento antes de depender de ello.

Herramientas antiguas como **creepy** suelen estar desactualizadas; prioriza proyectos con soporte activo.

## SocMINT (redes sociales)

Rama del OSINT centrada en **redes sociales y foros**: publicaciones públicas, hashtags, eventos. Sirve para verificación o investigaciones con mandato claro. Cruza con [Huella digital](/anonimato/huelladigital/) y [Concientización](/otros/concientizacion/) para el lado defensivo.

## Herramientas generales del día a día

Enlaces rápidos en [Herramientas](/otros/herramientas/) (VirusTotal, reputación de dominios, contraseñas).
