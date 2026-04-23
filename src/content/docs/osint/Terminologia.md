---
title: Terminología OSINT
description: Glosario de términos útiles para inteligencia de fuentes abiertas, redes y huella digital.
---

# Terminología OSINT

Definiciones breves para leer el resto de la sección **OSINT** y enlaces con [Teoría de redes](/redes/teoria/). Para práctica guiada: [OSINT básico](/osint/basic/) y [Google Dorks](/osint/googledoorks/).

## Dominio

Nombre registrado en el DNS que identifica un sitio (por ejemplo `ejemplo.com`). Incluye una etiqueta y una zona de primer nivel (TLD como `.com`, `.org`, `.gob.ar`, etc.).

## Subdominio y FQDN

Un **subdominio** es un prefijo bajo el dominio principal (`www`, `mail`, `api`, etc.). El **FQDN** (*Fully Qualified Domain Name*) es el nombre completo hasta la raíz implícita del DNS, por ejemplo `api.ejemplo.com.`

## DNS

Sistema que resuelve nombres a registros: **A/AAAA** (direcciones), **MX** (correo), **TXT** (verificaciones, SPF, etc.), **NS**, **CNAME**. En OSINT pasivo, los registros públicos ayudan a entender servicios y proveedores.

## WHOIS

Consulta a bases de datos de registro de dominios. Puede mostrar fechas, *nameservers* y a veces datos de contacto. Muchos TLD ocultan datos por privacidad; igual es una fuente habitual en footprinting.

## Dirección IP pública

Identificador de un host o de un punto de salida hacia Internet (IPv4 o IPv6). La geolocalización por IP es **aproximada**; el contexto de routing y ASN suele ser más fiable que el mapa.

## ASN

*Número de sistema autónomo* (**Autonomous System Number**): identifica un conjunto de prefijos IP gestionados con la misma política de enrutamiento (ISP, empresa, CDN). Sirve para agrupar infraestructura relacionada.

## Footprinting

Fase inicial de reconocimiento: cartografiar lo que es **público** (dominios, hosts, servicios, menciones) sin pasar a pruebas invasivas. Es el “mapa” antes de pentesting u OSINT más profundo, siempre con marco legal.

## Huella digital

Rastro acumulado de una persona u organización en Internet: perfiles, menciones, documentos con metadatos, reutilización de nombres de usuario. Relacionado con la página [Huella digital](/anonimato/huelladigital/).

## Breach / filtración

Incidente en el que datos copiados o expuestos acaban públicos o en mercados ilegales. Los servicios de verificación ética suelen usar *hashes* o estados sin redistribuir contraseñas en claro.

## Doxing

Reunir y publicar datos personales con intención de acosar, intimidar o dañar. **No** es OSINT profesional y puede ser delito según jurisdicción y contexto.

## Metadatos y EXIF

Datos embebidos en archivos (autor, software, fechas; a veces ubicación en imágenes). **EXIF** es habitual en fotos. Borrar metadatos antes de publicar reduce fugas involuntarias.

## OSINT y SocMINT

- **OSINT** (*Open Source Intelligence*): inteligencia a partir de fuentes abiertas y legales en general.
- **SocMINT**: subconjunto centrado en redes sociales, foros y comunidades.

Para metodología y herramientas: [OSINT básico](/osint/basic/).
