---
title: Permisos
description: Permisos rwx, chmod/chown, SUID/SGID/sticky y atributos con chattr.
---

# Permisos en Linux

## Temario

---

## 1. Concepto básico de permisos

Cada archivo o carpeta tiene **3 tipos de permisos** y **3 categorías de usuarios**:

### Tipos de permisos

| Concepto | Significado |
| -------- | ----------- |
| `r` (read) | Leer archivo / listar directorio. |
| `w` (write) | Modificar archivo / crear-borrar en directorio. |
| `x` (execute) | Ejecutar archivo / entrar al directorio (`cd`). |

### Categorías

| Concepto | Significado |
| -------- | ----------- |
| `u` (user) | Dueño del archivo. |
| `g` (group) | Grupo propietario. |
| `o` (others) | Resto de usuarios. |
| `a` (all) | u + g + o. |

---

## 2. Ver permisos

```bash
ls -l
```

Ejemplo:

```bash
-rwxr-xr--  1 francisco users 1234 oct 21  script.sh
```

Significado:

- rwx → usuario
- r-x → grupo
- r-- → otros
- francisco → dueño
- users → grupo

---

## 3. Cambiar permisos (chmod)

### a) Modo simbólico

```bash
chmod u+x script.sh     # añadir ejecución al usuario
chmod g-w script.sh     # quitar escritura al grupo
chmod o=r file.txt      # solo lectura para otros
chmod a+r file.txt      # todos pueden leer
```

### b) Modo numérico

```bash
chmod 755 script.sh
```

| Concepto | Significado |
| -------- | ----------- |
| `4` | Lectura (`r`). |
| `2` | Escritura (`w`). |
| `1` | Ejecución (`x`). |
| `7` (`4+2+1`) | rwx |
| `5` (`4+1`) | r-x |
| `755` | dueño rwx, grupo r-x, otros r-x |
| `644` | dueño rw-, grupo/otros r-- |

---

## 4. Cambiar dueño o grupo (chown, chgrp)

```bash
chown usuario archivo
chgrp grupo archivo
chown usuario:grupo archivo
```

Ejemplo:

```bash
sudo chown francisco:users script.sh
```

---

## 5. Permisos especiales

Existen tres permisos especiales en Linux:

| Concepto | Significado |
| -------- | ----------- |
| SUID | El proceso corre con el UID del dueño del binario (`u+s`). |
| SGID | En binario: GID del grupo; en dir: nuevos archivos heredan el grupo (`g+s`). |
| Sticky bit | En directorios: solo el dueño (o root) borra sus archivos (`+t`, típico `/tmp`). |

### Sticky Bit

El **sticky bit** se usa en directorios **para evitar que otros borren archivos ajenos**.

```bash
chmod +t /tmp/publico
# o modo numérico
chmod 1777 /tmp/publico
```

Ver resultado:

```bash
ls -ld /tmp/publico
drwxrwxrwt  9 root root 4096 oct 21 09:00 /tmp/publico
```

drwxrwxrw**t** → el “t” final indica el sticky bit activo.

Ejemplo típico: El directorio /tmp **siempre lo tiene activado**.

### SUID y SGID

<h4 id="suid">SUID</h4>
Ejemplo:
```bash
ls -l /usr/bin/passwd
-rwsr-xr-x 1 root root 54256 oct 21 /usr/bin/passwd
```

- La s en lugar de la x del usuario indica **SUID activo**.
- Permite ejecutar con permisos del **dueño del archivo** (en este caso, root).

Activar o desactivar manualmente:

```bash
chmod u+s archivo   # activar
chmod u-s archivo   # desactivar
```

<h4 id="sgid">SGID</h4>
En ejecutables:
```bash
chmod g+s archivo
```

En directorios:

```bash
chmod g+s carpeta/
```

Efecto:

<blockquote>
Los nuevos archivos heredan el grupo del directorio, útil para carpetas compartidas.

</blockquote>
***

## 6. Atributos de archivos (chattr, lsattr)

Los **atributos** controlan _cómo_ se comporta un archivo, más allá de los permisos.

### Ver atributos

```bash
lsattr archivo
```

Ejemplo:

```bash
----i--------e-----  documento.txt
```

### Cambiar atributos (chattr)

Hacer un archivo **inmutable**:

```bash
sudo chattr +i archivo.txt
```

Solo **root** puede revertirlo:

```bash
sudo chattr -i archivo.txt
```

Modo **append-only** (solo añadir contenido):

```bash
sudo chattr +a log.txt
```

### Atributos comunes

| Concepto | Significado |
| -------- | ----------- |
| `+i` / `-i` | Inmutable: no borrar ni modificar (solo root quita `i`). |
| `+a` / `-a` | Append-only: solo añadir al final (logs). |
| `+c` | Compresión (según FS). |
| `+s` | Secure deletion (según FS). |
| `e` | Extents (ext4); suele aparecer en `lsattr`. |

### Ejemplo práctico en script Bash

```bash
#!/bin/bash
# Proteger archivos del sistema
ARCHIVOS=("/etc/passwd" "/etc/shadow" "/etc/fstab")

for f in "$(ARCHIVOS[@])"; do
if [ -f "$f" ]; then
sudo chattr +i "$f"
echo "Protegido: $f"
fi
done

lsattr "$(ARCHIVOS[@])"
```

---

## 7. Resumen visual

| Comando | Qué hace | Ejemplo |
| ------- | -------- | ------- |
| `ls -l` | Ver permisos, dueño y grupo. | `ls -l script.sh` |
| `chmod` | Cambiar permisos (simbólico o numérico). | `chmod 755 script.sh` |
| `chown` / `chgrp` | Cambiar dueño / grupo. | `chown user:group f` |
| `chmod u+s` / `g+s` / `+t` | SUID, SGID, sticky. | `chmod 1777 /tmp/pub` |
| `lsattr` / `chattr` | Ver / cambiar atributos extendidos. | `sudo chattr +i f` |
