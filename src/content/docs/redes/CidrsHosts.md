---
title: Cidrs Hosts
description: CIDR, máscaras de red/host y cuántas IPs caben en cada prefijo.
---

# Cidrs y Host

---

## 1. Qué es CIDR

**CIDR** (_Classless Inter-Domain Routing_) representa una red IP y su tamaño en forma compacta: `IP/prefijo`.

### Ejemplo

```bash
192.168.1.0/24
```

- `192.168.1.0` → dirección de red
- `/24` → 24 bits de red; los 8 restantes (de 32 en IPv4) son hosts

### Cómo se interpreta

| CIDR | Bits host | Direcciones totales | Hosts útiles (−2) | Máscara |
| --- | --- | --- | --- | --- |
| `/24` | 8 | 256 | 254 | `255.255.255.0` |
| `/25` | 7 | 128 | 126 | `255.255.255.128` |
| `/26` | 6 | 64 | 62 | `255.255.255.192` |
| `/27` | 5 | 32 | 30 | `255.255.255.224` |
| `/28` | 4 | 16 | 14 | `255.255.255.240` |
| `/30` | 2 | 4 | 2 | `255.255.255.252` |
| `/32` | 0 | 1 | 1 (host único) | `255.255.255.255` |

Se restan 2: dirección de red y broadcast (salvo `/31` y `/32`, casos especiales).

---

## 2. Qué es una máscara de red (o de host)

La **máscara de subred** marca qué bits son red (1) y cuáles son host (0).

| IP | Máscara | CIDR | Parte red | Parte host |
| --- | --- | --- | --- | --- |
| `192.168.1.10` | `255.255.255.0` | `/24` | `192.168.1` | `.10` |
| `10.0.5.20` | `255.255.0.0` | `/16` | `10.0` | `.5.20` |
| `172.16.0.50` | `255.255.255.128` | `/25` | `172.16.0.0` | `.50` (en el bloque `.0`–`.127`) |

### Máscara de host

Complemento de la máscara de red. Si la de red es `255.255.255.0`, la de host es:

```bash
0.0.0.255
```

- Bits `1` → red
- Bits `0` → host (pueden variar al asignar IPs)

---

## 3. Relación entre CIDR y máscaras

| CIDR | Máscara de red | Máscara de host (aprox.) |
| --- | --- | --- |
| `/8` | `255.0.0.0` | `0.255.255.255` |
| `/16` | `255.255.0.0` | `0.0.255.255` |
| `/24` | `255.255.255.0` | `0.0.0.255` |
| `/25` | `255.255.255.128` | `0.0.0.127` |
| `/30` | `255.255.255.252` | `0.0.0.3` |

Misma idea: CIDR = conteo de bits `1` en la máscara.

---

## 4. Ejemplo práctico

```bash
Red: 10.0.0.0/24
```

- Máscara de red: `255.255.255.0`
- Máscara de host: `0.0.0.255`
- Hosts: `10.0.0.1` → `10.0.0.254`
- Broadcast: `10.0.0.255`
- Total hosts útiles: **254**
