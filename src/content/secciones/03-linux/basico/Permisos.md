---
title: Permisos
route: /linux/basico/Permisos
---

# Permisos en Linux
## Temario {#temario}
---

## 1. Concepto básico de permisos {#concepto-básico-de-permisos}
Cada archivo o carpeta tiene **3 tipos de permisos** y **3 categorías de usuarios**:

### Tipos de permisos {#tipos-de-permisos}
<!-- Tabla convertida manualmente -->

### Categorías {#categorías}
<!-- Tabla convertida manualmente -->

---

## 2. Ver permisos {#2-ver-permisos}
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

## 3. Cambiar permisos (chmod) {#3-cambiar-permisos-chmod}
### a) Modo simbólico {#a-modo-simbólico}
```bash
chmod u+x script.sh     # añadir ejecución al usuario
chmod g-w script.sh     # quitar escritura al grupo
chmod o=r file.txt      # solo lectura para otros
chmod a+r file.txt      # todos pueden leer
```

### b) Modo numérico {#b-modo-numérico}
```bash
chmod 755 script.sh
```

<!-- Tabla convertida manualmente -->

---

## 4. Cambiar dueño o grupo (chown, chgrp) {#4-cambiar-dueño-o-grupo-chown-chgrp}
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

## 5. Permisos especiales {#5-permisos-especiales}
Existen tres permisos especiales en Linux:

<!-- Tabla convertida manualmente -->

### Sticky Bit {#sticky-bit}
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

### SUID y SGID {#suid-y-sgid}
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
---

## 6. Atributos de archivos (chattr, lsattr) {#6-atributos-de-archivos-chattr-lsattr}
Los **atributos** controlan *cómo* se comporta un archivo, más allá de los permisos.

### Ver atributos {#ver-atributos}
```bash
lsattr archivo
```

Ejemplo:
```bash
----i--------e-----  documento.txt
```

### Cambiar atributos (chattr) {#cambiar-atributos-chattr}
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

### Atributos comunes {#atributos-comunes}
<!-- Tabla convertida manualmente -->

### Ejemplo práctico en script Bash {#ejemplo-práctico-en-script-bash}
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

## 7. Resumen visual {#7-resumen-visual}
<!-- Tabla convertida manualmente -->