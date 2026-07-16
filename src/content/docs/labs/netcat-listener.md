---
title: Lab — netcat listener local
description: Lab reproducible — listener TCP en localhost y envío de un mensaje de prueba.
---

# Lab — netcat listener local

## Objetivo

Levantar un listener TCP en `127.0.0.1`, conectar desde otra terminal y comprobar eco/recepción.

## Prerequisitos

- `nc` / `ncat` ([Netcat](/WEB-Notas-de-Hacking/linux/comandos/netcat/), [Ncat](/WEB-Notas-de-Hacking/linux/comandos/ncat/))
- Dos terminales en la misma máquina

## Entorno lab

Solo `localhost`. No abras el puerto a redes externas.

```bash
PORT=4444
```

## Pasos

1. Terminal A — listener:

   ```bash
   nc -lvnp "$PORT" -s 127.0.0.1
   ```

   Si tu `nc` no acepta `-s`, usa: `nc -lvnp "$PORT"` y conecta solo a `127.0.0.1`.

2. Terminal B — cliente:

   ```bash
   echo "lab-ok" | nc 127.0.0.1 "$PORT"
   ```

3. En A debe aparecer `lab-ok`. Cierra con Ctrl+C.

## Verificación

El texto `lab-ok` se ve en el listener. Si falla: puerto ocupado (`ss -ltnp | grep 4444`) o sintaxis distinta de tu
implementación (`nc -h`).

## Referencias

- [Netcat](/WEB-Notas-de-Hacking/linux/comandos/netcat/) — acceso 2026-07-15
- [Ncat](/WEB-Notas-de-Hacking/linux/comandos/ncat/)

## Advertencia

No uses reverse shells hacia hosts ajenos. Listener solo en lab propio / localhost.
