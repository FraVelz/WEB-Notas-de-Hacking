---
title: Gestion De Procesos
description: Ver, pausar, matar y priorizar procesos con ps, jobs, kill y nice.
---

# Gestión de procesos

---

## Terminologías

- **Proceso**: Programa en ejecución administrado por el kernel.
- **PID (Process ID)**: Identificador único asignado por el sistema a cada proceso.
- **PPID (Parent PID)**: Identificador del proceso padre (quien lo creó).
- **Estado**: Indica el estado actual del proceso:
  - R → ejecutándose (Running)
  - S → durmiendo (Sleeping)
  - T → detenido (Stopped)
  - Z → zombi (Zombie)
- **Señales**: Mensajes que el kernel o el usuario pueden enviar a un proceso (ej: SIGKILL, SIGSTOP, SIGINT).

---

## Comandos para ver procesos

- **ps**: Lista los procesos activos.

  ```bash
  ps aux # Para monitorear recursos ps -ef # Para ver jerarquía y relaciones entre los procesos
  ```

- **top / htop**: Monitor interactivo de procesos. htop es más visual, permite matar o renicear procesos fácilmente.
- **pgrep**: Busca procesos por nombre.

  ```bash
  pgrep firefox
  ```

- **pstree**: Muestra los procesos en forma jerárquica (padre-hijo).

  ```bash
  pstree -p # incluye los PIDs
  ```

- **pidof**: Muestra el PID de un programa activo.

  ```bash
  pidof bash
  ```

---

## Ejecución de procesos

- **Primer plano (foreground)**:

  ```bash
  ./programa
  ```

El terminal queda ocupado hasta que el proceso termine.

- **Segundo plano (background)**:

  ```bash
  ./programa &
  ```

El shell sigue disponible mientras el proceso corre. Tener en cuenta que normalmente al cerrar la shell el proceso se
termina, pero se puede utilizar el comando disown en la shell para que el proceso no dependa de la shell.

- **Ejemplo práctico:**

  ```bash
  long_task.sh & echo "Sigo usando la terminal"
  ```

---

## Control de trabajos

Bash permite gestionar procesos iniciados desde la misma sesión (misma terminal en el que se ejecutó el proceso).

```bash
jobs # lista los procesos de fondo en la sesión actual
fg %1 # lleva el job 1 al primer plano
bg %2 # reanuda el job 2 en segundo plano
# Ctrl+Z pausa el proceso actual
```

**Ejemplo:** Creamos un proceso en la terminal:

```bash
sleep 1d && echo "Ya paso 1 dia"
```

Luego das Ctrl+Z y se pausa el proceso (importante no equivocarse con Ctrl+C porque este terminaría el proceso en vez de
pausarlo). Cuando escribas:

```bash
jobs
```

Podrás visualizar el proceso, todo se vería algo así:

![Salida de jobs en la terminal](/WEB-Notas-de-Hacking/imagenes/procesos.png)

Con el comando `fg %1` o `bg %1` puedes despausar el proceso, con las implicaciones que se dieron arriba.

---

## Señales a procesos

- **Enviar señales manualmente:**

  ```bash
  kill -9 1234   # SIGKILL (fuerza el cierre)
  kill -15 1234  # SIGTERM (solicita terminación limpia)
  kill -STOP 1234 # pausa proceso
  kill -CONT 1234 # reanuda proceso detenido
  ```

- **Por nombre:**

  ```bash
  pkill firefox
  killall nano
  ```

Algunos nombres comunes:

| Concepto | Significado |
| -------- | ----------- |
| `SIGTERM` (15) | Pedir cierre limpio (por defecto de `kill`). |
| `SIGKILL` (9) | Forzar terminación; no se puede atrapar. |
| `SIGINT` (2) | Interrumpir (Ctrl+C). |
| `SIGSTOP` | Pausar el proceso (no atrapable). |
| `SIGCONT` | Reanudar tras STOP/Ctrl+Z. |
| `SIGHUP` (1) | “Hang up”; muchos daemons recargan config. |
| `SIGQUIT` (3) | Salir + core dump (Ctrl+\). |

---

## Prioridades de procesos

Cada proceso tiene un **"valor bueno"**, que define su prioridad de CPU.

- Rango: **-20 (mayor prioridad)** a **19 (menor prioridad)**.
- Valor por defecto: **0**.
- Solo root puede asignar valores negativos.

### Cambiar prioridad al iniciar:

```bash
nice -n 10 ./programa
```

### Modificar proceso existente:

```bash
renice -n 5 -p 1234
```

### Ver prioridades actuales:

```bash
ps -eo pid,ni,comm
```

---

## Procesos huérfanos y zombis

- **Huérfano**: cuando el proceso padre termina antes que su hijo. El proceso hijo pasa a ser adoptado por el **init** o
  **systemd**. No es dañino, pero indica una gestión no controlada de procesos.
- **Zombi**: proceso que terminó, pero su entrada en la tabla de procesos aún existe porque su padre no leyó su estado
  de salida (wait() no fue llamado). Se muestran con estado Z.

  ```bash
  ps aux | grep 'Z'
  ```

Para eliminarlos, normalmente basta con terminar el proceso padre.

---

## Resumen visual

| Comando | Qué hace | Ejemplo |
| ------- | -------- | ------- |
| `ps aux` | Lista procesos con usuario y recursos. | `ps aux \| grep nginx` |
| `top` / `htop` | Monitor interactivo. | `htop` |
| `jobs` / `fg` / `bg` | Control de jobs de la sesión. | `fg %1` |
| `kill` / `pkill` | Envía señales a procesos. | `kill -9 1234` |
| `nice` / `renice` | Ajusta prioridad (nice). | `nice -n 10 ./job` |
| `pstree` / `pidof` | Árbol o PID por nombre. | `pidof sshd` |
