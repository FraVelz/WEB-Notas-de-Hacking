---
title: Permisos
description: Permisos rwx, chmod/chown, SUID/SGID/sticky y atributos con chattr.
---

# Permisos en Linux

Quién puede leer, escribir o ejecutar: dueño, grupo y otros. Más SUID/SGID/sticky y atributos `chattr`.

---

## Tipos y categorías

| Concepto | Significado |
| -------- | ----------- |
| `r` | Leer archivo / listar directorio. |
| `w` | Modificar archivo / crear-borrar en dir. |
| `x` | Ejecutar / entrar al dir (`cd`). |
| `u` / `g` / `o` / `a` | Dueño / grupo / otros / todos. |

```bash
ls -l
# -rwxr-xr--  1 francisco users 1234 oct 21  script.sh
#  u=rwx g=r-x o=r--
```

---

## chmod / chown

```bash
chmod u+x script.sh
chmod g-w script.sh
chmod o=r file.txt
chmod 755 script.sh
sudo chown francisco:users script.sh
```

| Concepto | Significado |
| -------- | ----------- |
| `4` / `2` / `1` | r / w / x |
| `7` | rwx |
| `5` | r-x |
| `755` | dueño rwx, resto r-x |
| `644` | dueño rw-, resto r-- |

---

## Permisos especiales

| Concepto | Significado |
| -------- | ----------- |
| SUID (`u+s`) | Proceso corre con UID del dueño del binario. |
| SGID (`g+s`) | En binario: GID del grupo; en dir: nuevos archivos heredan el grupo. |
| Sticky (`+t`) | En dir: solo el dueño (o root) borra sus archivos (`/tmp`). |

```bash
chmod +t /tmp/publico
chmod 1777 /tmp/publico
ls -ld /tmp/publico
# drwxrwxrwt ...

ls -l /usr/bin/passwd
# -rwsr-xr-x ...   ← s = SUID
chmod u+s archivo
chmod g+s carpeta/
```

---

## Atributos (chattr / lsattr)

Más allá de rwx: comportamiento del archivo en el FS.

| Concepto | Significado |
| -------- | ----------- |
| `+i` / `-i` | Inmutable (solo root quita `i`). |
| `+a` / `-a` | Append-only (logs). |
| `e` | Extents (ext4); suele salir en `lsattr`. |

```bash
lsattr archivo.txt
sudo chattr +i archivo.txt
sudo chattr -i archivo.txt
sudo chattr +a log.txt
```

| Comando | Qué hace | Ejemplo |
| ------- | -------- | ------- |
| `ls -l` | Ver permisos, dueño, grupo. | `ls -l script.sh` |
| `chmod` | Cambiar permisos. | `chmod 755 script.sh` |
| `chown` / `chgrp` | Dueño / grupo. | `chown user:group f` |
| `chmod u+s` / `g+s` / `+t` | SUID, SGID, sticky. | `chmod 1777 /tmp/pub` |
| `lsattr` / `chattr` | Atributos extendidos. | `sudo chattr +i f` |

Docs: [man chmod](https://man7.org/linux/man-pages/man1/chmod.1.html), [man chattr](https://man7.org/linux/man-pages/man1/chattr.1.html).
