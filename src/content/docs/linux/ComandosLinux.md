---
title: Comandos Linux
description: Historia breve, FHS, variables de entorno y comandos básicos de Linux.
---

# Introducción a Linux

SO libre/open source con muchas distros (Ubuntu, Debian, Fedora, Parrot…). En ciberseguridad aparece en servidores, labs
y Android (kernel).

---

## Historia (muy breve)

| Año | Qué pasó |
| --- | -------- |
| 1970 | Thompson y Ritchie crean Unix (AT&T). |
| 1977 | BSD (luego líos legales con código AT&T). |
| 1983 | Stallman: proyecto GNU + GPL. |
| 1991 | Torvalds libera el kernel Linux. |

Distros típicas: Ubuntu, Debian, Fedora, OpenSUSE, Manjaro, Gentoo, RHEL, Mint, Parrot OS.

---

## Filosofía y componentes

| Concepto | Significado |
| -------- | ----------- |
| Todo es un archivo | Dispositivos, pipes y sockets se tratan como archivos. |
| Una herramienta, una tarea | Programas pequeños combinados con pipes. |
| Texto plano | Configs y logs legibles; fácil de automatizar. |
| Kernel | Memoria, CPU, drivers, procesos. |
| Shell | Intérprete (bash, zsh…). |
| Daemons | Servicios en segundo plano (sshd, units de systemd). |

Capas: hardware → kernel → shell/utilidades → apps.

---

## Jerarquía FHS

| Concepto | Significado |
| -------- | ----------- |
| `/` | Raíz. |
| `/bin`, `/usr/bin` | Binarios esenciales / de usuario. |
| `/sbin`, `/usr/sbin` | Binarios de administración. |
| `/etc` | Configuración. |
| `/home` | Homes de usuarios. |
| `/root` | Home de root. |
| `/var` | Datos variables (logs, spools). |
| `/tmp` | Temporal. |
| `/proc`, `/sys` | Interfaces al kernel. |
| `/dev` | Dispositivos. |
| `/opt` | Software de terceros. |
| `/usr` | Programas y datos compartidos. |

---

## Variables de entorno

```bash
env                    # listar
export name=data       # crear (se pierde al reiniciar la sesión)
echo $name
name="$name:text"      # concatenar
```

---

## Comandos básicos

| Comando | Qué hace | Ejemplo |
| ------- | -------- | ------- |
| `ls` | Lista archivos. | `ls -la` |
| `cd` | Cambia de directorio. | `cd /var/log` |
| `pwd` | Directorio actual. | `pwd` |
| `cat` | Muestra/concatena archivos. | `cat /etc/passwd` |
| `cp` / `mv` / `rm` | Copiar, mover, borrar. | `cp a.txt b.txt` |
| `mkdir` / `rmdir` | Crear / borrar dirs vacíos. | `mkdir lab` |
| `grep` | Busca texto. | `grep root /etc/passwd` |
| `find` | Busca archivos. | `find / -name "*.conf"` |
| `chmod` / `chown` | Permisos y dueño. | `chmod 755 script.sh` |
| `ps` / `kill` | Procesos. | `ps aux` |
| `sudo` | Ejecutar como root (si estás en sudoers). | `sudo apt update` |
| `man` | Manual. | `man ls` |

Más detalle de permisos: [Permisos](/WEB-Notas-de-Hacking/linux/permisos/). Ayuda en terminal:
[AyudaLinux](/WEB-Notas-de-Hacking/linux/ayudalinux/).

---

## Permisos (rápido)

```bash
ls -l
# -rwxr-xr--  → u=rwx, g=r-x, o=r--
chmod 755 archivo.sh
chmod u+x script.sh
chown usuario:grupo archivo.txt
```

---

## sudo

Ejecuta un comando con privilegios de root si tu usuario está en `/etc/sudoers` (editar con `visudo`). Pide tu password
(no la de root) y la cachea unos minutos.

```bash
sudo apt update
sudo -i          # shell de root (cuidado)
```

**Autor:** Fravelz · **Colaborador:** @studentethical (Student Ethical)
