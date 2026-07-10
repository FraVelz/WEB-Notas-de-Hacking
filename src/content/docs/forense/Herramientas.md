---
title: Herramientas
description: Checklist corta de tools forenses y para qué sirve cada una.
---

# Herramientas forenses (checklist)

Solo en evidencias propias o con autorización. Preferir copia/imagen, no el original.

| Herramienta | Para qué |
| ----------- | -------- |
| `file` | Tipo real del archivo (no te fíes solo de la extensión) |
| `strings` | Cadenas legibles en binarios / dumps |
| `sha256sum` / `md5sum` | Integridad de imágenes y archivos |
| `xxd` / `hexdump` | Hex a mano |
| Autopsy / Sleuth Kit | Análisis de imágenes de disco (GUI + CLI) |
| Volatility / mem tools | Análisis de RAM (procesos, conexiones, inyecciones) |
| Wireshark | Tráfico capturado (pcap) |
| ExifTool | Metadatos de archivos |

## Flujo mínimo en lab

1. Hashear la evidencia.  
2. Trabajar sobre **copia**.  
3. Anotar comandos y hallazgos.  
4. Correlacionar logs + binarios + red.

## Relacionado

- [Básicos](/WEB-Notas-de-Hacking/forense/basicos/)
- [Artefactos](/WEB-Notas-de-Hacking/forense/artefactos/)
- Hashing: [criptografia/hashing](/WEB-Notas-de-Hacking/criptografia/hashing/)
