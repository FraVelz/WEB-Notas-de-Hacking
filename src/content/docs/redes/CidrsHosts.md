---
title: Cidrs Hosts
description: Cidrs Hosts - Notas de hacking y ciberseguridad.
---

# Cidrs y Host
---

## 1. Qué es CIDR
**CIDR** significa **Classless Inter-Domain Routing**, o en español, **Enrutamiento entre dominios sin clases**.

Se usa para **representar redes IP y su tamaño** de forma compacta.

---

### Ejemplo
```bash
192.168.1.0/24
```

- 192.168.1.0 → Dirección de red
- /24 → Indica **cuántos bits** de la dirección se usan para la **parte de red**.

💭 En este caso:

- 24 bits → red
- 8 bits restantes (de los 32 de una IPv4) → **hosts** o dispositivos

---

### Cómo se interpreta
Cada número después de la barra / indica cuántos bits de la IP pertenecen a la red:

<!-- Tabla convertida manualmente -->

<blockquote>
(Se restan 2 hosts: uno para la dirección de red y otro para broadcast)

</blockquote>
---

## 2. Qué es una máscara de red (o de host)
Una **máscara de subred** (subnet mask) indica **qué parte de la IP identifica la red** y **qué parte identifica al host**.

Por ejemplo:

<!-- Tabla convertida manualmente -->

---

### Máscara de host
A veces se habla de “máscara de host”, que simplemente es **el complemento** de la máscara de red.

👉 Sí la máscara de red es 255.255.255.0 entonces la **máscara de host** es:
```bash
0.0.0.255
```

Porque:

- Los bits 1 (255) indican red
- Los bits 0 (0) indican host

Es decir, la máscara de host muestra **qué bits pueden variar** para asignar direcciones a los dispositivos.

---

## 3. Relación entre CIDR y máscaras
<!-- Tabla convertida manualmente -->

---

## 4. Ejemplo práctico
Supón que tienes:
```bash
Red: 10.0.0.0/24
```

Entonces:

- Máscara de red: 255.255.255.0
- Máscara de host: 0.0.0.255
- Rango de hosts: 10.0.0.1 → 10.0.0.254
- Dirección de broadcast: 10.0.0.255
- Total hosts: 254