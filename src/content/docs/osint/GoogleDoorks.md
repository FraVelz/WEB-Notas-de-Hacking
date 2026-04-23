---
title: Google Dorks
description: Operadores de búsqueda avanzada, tabla de referencia y uso responsable.
---

# Google Dorks

Los **dorks** son **operadores de búsqueda avanzada** (en Google u otros buscadores compatibles) para acotar resultados: por sitio, texto en URL, título, tipo de archivo, etc. Son útiles en investigación pasiva y en auditorías **autorizadas**.

## Uso responsable

Encontrar una URL en el índice **no** te da derecho a explotar el sistema, descargar datos privados sin permiso ni eludir controles de acceso. Para el marco legal y ético: [Legalidad del hacking](/conceptos-basicos/legalidadhacking/). En **bug bounty**, respeta siempre el alcance publicado.

No abras enlaces dudosos ni introduzcas credenciales en sitios no oficiales; los resultados pueden incluir páginas HTTP antiguas o trampas.

## Tabla de operadores frecuentes

| Operador | Ejemplo | Idea |
|----------|---------|------|
| `site:` | `site:ejemplo.com` | Limitar a un dominio o host. |
| `inurl:` | `inurl:admin` | La URL contiene el fragmento. |
| `intitle:` | `intitle:"índice de"` | Coincidencia en el título HTML. |
| `filetype:` / `ext:` | `filetype:pdf informe` | Archivos por tipo o extensión indexada. |
| `cache:` | `cache:ejemplo.com` | Versión en caché (si el buscador la muestra). |
| `"frase exacta"` | `"contrato confidencial"` | Búsqueda literal. |
| `-` | `jaguar -coche` | Excluir un término. |

Documentación oficial (Google): [Operadores de búsqueda](https://support.google.com/websearch/answer/2466433).

## Ejemplos de sintaxis

El asterisco (`*`) puede actuar como comodín en algunas consultas:

```bash
site:reddit.*
```

Frases entre comillas:

```bash
intitle:"Tomar un Mate"
```

Formato general `operador:valor` **sin espacio** después de los dos puntos:

```bash
clave:valor
```

Todo lo que va fuera de los operadores suele interpretarse como palabras normales:

```bash
intitle:"Uala prestamos" prestamos sin intereses
```

Aquí también se buscan **préstamos sin intereses** y se filtra el título con **Uala préstamos**.

### Lista numerada de operadores básicos

1. **`site:`** — Restringe al dominio indicado.

```bash
site:reddit.com
```

2. **`inurl:`** — La URL debe contener el fragmento.

```bash
inurl:palabraclave
```

3. **`intitle:`** — Filtra por título visible en resultados.

```bash
intitle:tomarmate
```

4. **`ext:`** y **`filetype:`** — Por extensión o tipo reconocido por el indexador.

```bash
ext:log Errores de reddit
```

```bash
filetype:pdf Cuent
```

## GHDB y recursos

En la **Google Hacking Database** hay consultas de ejemplo usadas en seguridad (para entornos legales y laboratorios):

- [Google Hacking Database (Exploit-DB)](https://www.exploit-db.com/google-hacking-database)

Contexto más amplio: [OSINT básico](/osint/basic/) y [Terminología](/osint/terminologia/).
