---
title: Grupos YUsuarios
description: Crear y gestionar usuarios y grupos; archivos `/etc/passwd`, `/etc/group` y `/etc/shadow`.
---

# Grupos y Usuarios

Usuarios y grupos definen quién puede tocar qué. En lab y en servidores es la base de permisos y aislamiento.

---

## Gestión de usuarios

| Comando | Qué hace | Ejemplo |
| ------- | -------- | ------- |
| `useradd` | Crea usuario (bajo nivel). | `sudo useradd -m lab` |
| `adduser` | Crea usuario interactivo (Debian/Ubuntu). | `sudo adduser lab` |
| `passwd` | Define o cambia contraseña. | `sudo passwd lab` |
| `usermod` | Modifica cuenta (shell, grupos, bloqueo…). | `sudo usermod -aG sudo lab` |
| `userdel` | Elimina usuario. | `sudo userdel -r lab` |
| `id` / `whoami` | Identidad y grupos. | `id lab` |
| `su` / `sudo` | Cambiar de usuario / elevar. | `su - lab` |

### useradd vs adduser

| Concepto | Significado |
| -------- | ----------- |
| `useradd` | Bajo nivel; no crea home ni pide password por defecto. |
| `adduser` | Script amigable; crea home, grupo, skel y pide datos. |
| Uso típico | `useradd` en scripts; `adduser` a mano en Debian/Ubuntu. |

```bash
sudo useradd francisco          # solo entrada en /etc/passwd
sudo useradd -m -s /bin/bash lab
sudo adduser francisco          # home + skel + password interactivo
```

Si usas `useradd` sin `-m`, el home hay que montarlo a mano:

```bash
sudo mkdir /home/francisco
sudo cp -r /etc/skel/. /home/francisco
sudo chown -R francisco:francisco /home/francisco
sudo passwd francisco
```

Otros útiles:

```bash
sudo usermod -l nuevo_nombre francisco
sudo usermod -L francisco   # bloquear
sudo usermod -U francisco   # desbloquear
cut -d: -f1 /etc/passwd     # listar usuarios
```

---

## Grupos

Un grupo agrupa usuarios para compartir permisos sobre archivos/directorios.

| Comando | Qué hace | Ejemplo |
| ------- | -------- | ------- |
| `groupadd` | Crea un grupo. | `sudo groupadd proyecto` |
| `groupdel` | Elimina un grupo. | `sudo groupdel proyecto` |
| `groupmod` | Renombra o cambia GID. | `sudo groupmod -n nuevo viejo` |
| `usermod -aG` | Añade a grupos secundarios (sin quitar los actuales). | `sudo usermod -aG docker lab` |
| `gpasswd` | Administra miembros. | `sudo gpasswd -a lab proyecto` |
| `groups` | Lista grupos de un usuario. | `groups lab` |

Cada usuario tiene:

| Concepto | Significado |
| -------- | ----------- |
| Grupo primario | Suele crearse con el mismo nombre que el usuario. |
| Grupos secundarios | Extra (`sudo`, `docker`, `audio`…). |
| `/etc/group` | Lista de grupos y miembros. |

```bash
sudo groupadd proyecto
sudo usermod -aG proyecto juan
sudo usermod -aG proyecto maria
sudo chown :proyecto /proyecto
sudo chmod 770 /proyecto
groups francisco
# francisco : francisco sudo video audio
```

---

## Archivos del sistema

| Concepto | Significado |
| -------- | ----------- |
| `/etc/passwd` | Usuarios, UID, GID, home, shell (legible). |
| `/etc/shadow` | Hashes de contraseñas (solo root). |
| `/etc/group` | Grupos y miembros. |
| `/etc/gshadow` | Secretos/admins de grupos. |
| `/etc/sudoers` | Quién puede usar `sudo` (editar con `visudo`). |
| `/home/<user>` | Directorio personal. |
| `/etc/skel` | Plantilla al crear home. |

---

## Para qué sirve en la práctica

| Concepto | Significado |
| -------- | ----------- |
| Varios usuarios | Aísla homes y limita quién toca qué. |
| Un solo usuario | Procesos sin root no pueden romper el sistema. |
| Servicios | Cada daemon con su usuario (`www-data`, `mysql`…). |
| Hardware | Grupos `audio`, `video`, `docker` controlan dispositivos. |
| Pentesting | Objetivo típico: salir de un usuario limitado hacia root. |
| Automatización | Usuarios de sistema (`-r`, shell `/bin/false`) para daemons. |

```bash
sudo useradd -r -s /bin/false servidor_web
```

Docs: [man useradd](https://man7.org/linux/man-pages/man8/useradd.8.html), [man groupadd](https://man7.org/linux/man-pages/man8/groupadd.8.html).
