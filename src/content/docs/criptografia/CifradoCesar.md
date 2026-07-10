---
title: Cifrado Cesar
description: César/ROT13 como juguete; enlace a la práctica con tr en Linux.
---

# Cifrado César

Desplaza cada letra N posiciones en el alfabeto. ROT13 = desplazamiento 13 (simétrico: aplicarlo dos veces vuelve al texto).

Útil en CTFs y Bandit; **no** es seguridad real (26 claves posibles en alfabeto latino).

## Ejemplo mental

```text
A B C D ...
N O P Q ...   (ROT13)
```

`hola` → `ubyn` (ROT13).

## En Linux

Notas con `tr` (pipe + tablas de caracteres):

→ [Cifrado Cesar con tr](/WEB-Notas-de-Hacking/linux/comandos/cifradocesartr/)

```bash
echo 'hola' | tr 'A-Za-z' 'N-ZA-Mn-za-m'
# ubyn
echo 'ubyn' | tr 'A-Za-z' 'N-ZA-Mn-za-m'
# hola  (ROT13 otra vez = original)
```

Fuerza bruta mental: 25 desplazamientos distintos (además de 0). En CTF a veces basta un script o CyberChef.

## Relacionado

- [Básicos de cripto](/WEB-Notas-de-Hacking/criptografia/basicos/)
- [Encoding vs encryption](/WEB-Notas-de-Hacking/criptografia/encodingvsencryption/)
