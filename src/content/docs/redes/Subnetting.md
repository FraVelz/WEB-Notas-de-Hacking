---
title: Subnetting
description: Dividir una red IP en subredes más pequeñas cambiando la máscara (CIDR).
---

# Subnetting

---

## Qué es

**Subnetting** (subneteo) es dividir una red grande en **subredes** más pequeñas. Sirve para organizar tráfico, aprovechar IPs y aislar segmentos.

---

## Conceptos clave

| Concepto | Significado |
| --- | --- |
| Red / subred | Bloque de IPs que comparten el mismo prefijo (misma máscara). |
| Máscara / CIDR | Bits de red vs bits de host (`/24` = 24 bits de red). |
| Dirección de red | Primera IP del bloque; identifica la subred (no se asigna a un host). |
| Broadcast | Última IP del bloque; llega a todos los hosts de esa subred. |
| Hosts válidos | IPs asignables: total − 2 (red y broadcast). Fórmula: `2^(bits host) − 2`. |
| Prefijo más largo | Más bits de red → subredes más chicas (menos hosts cada una). |

---

## Ejemplo básico

Red de partida:

```bash
192.168.1.0/24
```

- Rango: `192.168.1.0` – `192.168.1.255`
- 256 direcciones; **254 hosts** válidos

Si divides `/24` en dos `/25`:

| Subred | Rango | Red | Broadcast | Hosts válidos |
| --- | --- | --- | --- | --- |
| `192.168.1.0/25` | `.0` – `.127` | `.0` | `.127` | 126 (`.1`–`.126`) |
| `192.168.1.128/25` | `.128` – `.255` | `.128` | `.255` | 126 (`.129`–`.254`) |

Dos subredes, **126 hosts** cada una.

---

## Para qué sirve (rápido)

- Menos broadcasts por segmento.
- Aislar departamentos / VLANs / labs.
- Asignar solo las IPs que necesitas (menos desperdicio).
