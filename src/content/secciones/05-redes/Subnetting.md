---
title: Subnetting
route: /redes/Subnetting
---

# Subnetting
---

## En palabras simples {#en-palabras-simples}
**Subnetting** (o **subneteo**) es un proceso que se usa en redes informáticas para **dividir una red grande en redes más pequeñas llamadas subredes** (*subnets*). Esto se hace para **organizar mejor el tráfico**, **aprovechar direcciones IP**, **mejorar la seguridad** y **optimizar el rendimiento** de la red.

Imagina que tienes una gran red con muchas computadoras (por ejemplo, toda una empresa). En lugar de que todas estén en la misma red —lo que puede causar congestión y desorden—, **divides esa red en partes más pequeñas** (por departamentos, pisos, o funciones). Cada parte se comporta como una “mini red” dentro de la red principal.

---

## Conceptos clave {#conceptos-clave}
<!-- Tabla convertida manualmente -->

---

## Ejemplo básico {#ejemplo-básico}
Supongamos que tienes la red:
```bash
192.168.1.0 /24
```

Esto significa:

- **Rango total:** 192.168.1.0 – 192.168.1.255
- **256 direcciones posibles (0–255)**
- **Host válidos:** 254 (porque una es la dirección de red y otra la de broadcast)

Sí haces **subnetting** y divides /24 en **dos subredes /25**, obtienes:

<!-- Tabla convertida manualmente -->

Ahora tienes **dos subredes** con **126 hosts válidos** cada una.

---

## Ventajas del subnetting {#ventajas-del-subnetting}
✅ Reduce el tráfico innecesario (broadcasts).

✅ Mejora la seguridad al aislar segmentos.

✅ Permite administrar mejor las direcciones IP.

✅ Hace más eficiente la red y su mantenimiento.