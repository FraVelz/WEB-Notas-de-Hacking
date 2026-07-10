---
title: Basicos
description: Cadena de custodia intro, volatilidad y qué no tocar en un incidente.
---

# Forense — básicos

Apuntes de entrada. En un caso real mandan procedimiento legal y el equipo IR; aquí solo el mapa mental.

## Orden de volatilidad (idea)

Recoger primero lo que se pierde al apagar:

1. Memoria RAM / procesos en ejecución  
2. Red (conexiones, ARP)  
3. Disco / sistemas de archivos  
4. Logs remotos / backups  

Apagar a lo bruto puede borrar evidencia volátil (y a veces activar cifrado de disco).

## Cadena de custodia (intro)

| Paso | Idea |
| ---- | ---- |
| Identificar | Qué dispositivo/evidencia es |
| Documentar | Quién, cuándo, cómo se obtuvo |
| Hashear | Digest del imagen/archivo (integridad) |
| Conservar | Copia de trabajo vs original |
| Transferir | Registro de cada cambio de manos |

Sin eso, la evidencia puede no servir en un proceso.

## Qué no hacer

- Trabajar sobre el disco original sin imagen.
- Instalar tools en el sistema comprometido si puedes evitarlo (contaminas).
- Confiar solo en el reloj del host atacado.
- Publicar dumps con datos personales.

## Relacionado

- [Artefactos](/WEB-Notas-de-Hacking/forense/artefactos/)
- [Herramientas](/WEB-Notas-de-Hacking/forense/herramientas/)
