---
title: ComandosLinux
route: /linux/basico/ComandosLinux
---

# Introducción a Linux para Ciberseguridad
Linux es un **sistema operativo (SO)**, al igual que Windows, macOS, iOS o Android. Un SO gestiona los recursos de hardware de una computadora y permite la comunicación entre aplicaciones y componentes físicos.

A diferencia de otros sistemas operativos, Linux es **libre, de código abierto** y cuenta con una gran cantidad de **distribuciones** (“distros”), adaptadas a diferentes necesidades (ejemplo: Ubuntu, Debian, Fedora, Manjaro, Parrot OS, etc.).

En ciberseguridad, Linux es un pilar por su **robustez, flexibilidad y seguridad**, siendo ampliamente usado en servidores, dispositivos embebidos, mainframes y sistemas móviles como Android.

---

## 1. Historia {#1-historia}
- **1970**: Ken Thompson y Dennis Ritchie (trabajaban en AT&amp;T). ellos crean **Unix**.
- **1977**: Surge BSD (Berkeley Software Distribution), pero enfrenta problemas legales por usar código de AT&amp;T.
- **1983**: Richard Stallman inicia el **Proyecto GNU** y crea la **GPL (Licencia Pública General)**.
- **1991**: Linus Torvalds (estudiante Filandés) desarrolla el **núcleo de Linux** como proyecto personal, liberado como software libre.
- **Hoy**: Linux cuenta con más de **23 millones de líneas de código** y más de **600 distribuciones**.

Ejemplos de distros populares: Ubuntu, Debian, Fedora, OpenSUSE, Manjaro, Gentoo, Red Hat, Linux Mint, Elementary y Parrot OS (enfocada en ciberseguridad).

---

## 2. Filosofía de Linux {#2-filosofía-de-linux}
Linux se basa en la **simplicidad, modularidad y apertura**. Su enfoque es crear herramientas pequeñas que realizan una tarea bien definida y que pueden combinarse.

**Principios clave:**

<!-- Tabla convertida manualmente -->

---

## 3. Componentes de Linux {#3-componentes-de-linux}
<!-- Tabla convertida manualmente -->

---

## 4. Arquitectura de Linux {#4-arquitectura-de-linux}
Linux se organiza en capas:

- **Hardware:** CPU, RAM, disco, periféricos.
- **Kernel:** Controla y virtualiza el hardware.
- **Shell:** Intérprete de comandos (CLI).
- **System Utilities:** Herramientas y aplicaciones que interactúan con el sistema.

---

## 5. Jerarquía del Sistema de Archivos (FHS) {#5-jerarquía-del-sistema-de-archivos-fhs}
Linux organiza los archivos en una **estructura en forma de árbol**, con / como raíz.

<!-- Tabla convertida manualmente -->

---

**Analogía**, imagina Linux como una empresa:

- El **kernel** es la gerencia (organiza recursos).
- Los **daemons** son empleados invisibles que mantienen todo funcionando.
- El **shell** es la recepción, donde das órdenes.
- La **filosofía** es la cultura de trabajo: simplicidad, eficiencia y cooperación.

---

## 6. Qué es comando? {#6-qué-es-comando}
Es un nombre que se coloca en la terminal, que ejecuta varias líneas de código.

---

## 7. Variables de entorno {#7-variables-de-entorno}
son variables de datos por defecto en la terminal, puedes ver cuáles son con el comando “env”.

“export name=data”: Crear una variable de entorno con nombre “name” y valor “data”. (Al reiniciar el sistema operativo se borra la variable.)

para visualizar puedes usar “echo $name”. También puedes concatenar “name = $name:text” quedaría el texto de la variable name como “data:text”

---

## 8. Comandos de Linux {#8-comandos-de-linux}
<!-- Tabla convertida manualmente -->

Y muchos más comandos, y variaciones de los mismos…

---

## 9. Permisos y usuarios {#9-permisos-y-usuarios}
En Linux, **los permisos controlan quién puede leer, escribir o ejecutar un archivo**. Cada archivo tiene permisos para:

- **Usuario (u)** – propietario del archivo
- **Grupo (g)** – grupo al que pertenece el usuario
- **Otros (o)** – todos los demás usuarios

### Ver permisos {#ver-permisos}
<Codigo code="ls -l" language="bash" />
Salida típica:

<Codigo code="-rwxr-xr--" language="bash" />
Interpretación:

- r → leer (read)
- w → escribir (write)
- x → ejecutar (execute)

→ Ejemplo anterior:

- Usuario: **rwx** (leer, escribir, ejecutar)
- Grupo: **r-x** (leer, ejecutar)
- Otros: **r–** (solo leer)

### Cambiar permisos {#cambiar-permisos}
<Codigo code="chmod 755 archivo.sh" language="bash" />
- 7 → rwx
- 5 → r-x (Esto da permisos completos al dueño, y solo lectura/ejecución al resto.)

Otra forma:
```bash
chmod u+x script.sh   # Dar permiso de ejecución al usuario
chmod g-w archivo.txt # Quitar permiso de escritura al grupo
```

### Cambiar propietario {#cambiar-propietario}
<Codigo code="chown usuario:grupo archivo.txt" language="bash" />
---

## 10. Sudo {#10-sudo}
El comando sudo en Linux y sistemas tipo Unix significa **“superuser do”** (hacer como superusuario). Básicamente, permite ejecutar comandos con **privilegios de administrador**, incluso sí tú usuario normal no los tiene. Esto es útil porque algunas acciones (como instalar programas, modificar archivos del sistema o cambiar configuraciones importantes) requieren permisos elevados para proteger el sistema de cambios accidentales. Así funciona paso a paso:

### 1. <strong>Ejecutar un comando como administrador</strong> {#ejecutar-un-comando-como-administrador}
Cuando escribes:

<Codigo code="sudo comando" language="bash" />
Linux hace lo siguiente:

- Te pregunta la contraseña de tú usuario (no la del root) sí no la has usado sudo recientemente.
- Verifica que tú usuario esté en el archivo /etc/sudoers, que define quién puede usar sudo y qué comandos.
- Sí está permitido, ejecuta el comando con **permisos de root**, es decir, como sí fueras el administrador del sistema.

### 2. <strong>Ejemplo práctico</strong> {#ejemplo-práctico}
<Codigo code="sudo apt update" language="bash" />
- apt update actualiza la lista de paquetes en sistemas basados en Debian (Ubuntu, Mint, etc.).
- Normalmente un usuario normal no puede cambiar la base de datos de paquetes.
- sudo permite hacerlo porque ejecuta el comando con permisos de root.

### 3. <strong>Comando interactivo</strong> {#comando-interactivo}
Sí escribes:

<Codigo code="sudo -i" language="bash" />

o

<Codigo code="sudo su" language="bash" />

- Obtienes un **shell de root**, es decir, todos los comandos que escribas después se ejecutan con permisos de administrador.
- Esto es más riesgoso porque cualquier error puede afectar gravemente el sistema.

### 4. <strong>Seguridad y tiempo de sesión</strong> {#seguridad-y-tiempo-de-sesión}
- sudo recuerda tú contraseña durante unos minutos (por defecto 5) para que no tengas que escribirla cada vez.
- Sí tú usuario no está en sudoers, no podrás usarlo.

---

<blockquote>
**Autor:** Fravelz<br /> **Colaborador:** <span className="citation" data-cites="studentethical">@studentethical</span> (Student Ethical)

</blockquote>