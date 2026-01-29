---
title: GruposYUsuarios
route: /linux/basico/GruposYUsuarios
---

# Grupos y Usuarios
---

## 1. Gestión de usuarios {#1-gestión-de-usuarios}
<!-- Tabla convertida manualmente -->

### useradd vs adduser {#useradd-vs-adduser}
### 1. useradd (programa básico del sistema) {#1-useradd-programa-básico-del-sistema}
- Es el **comando original** de bajo nivel de Linux para crear usuarios.
- Pertenece al paquete **passwd** o **shadow** (dependiendo de la distro).
- No crea automáticamente todo lo necesario (por ejemplo, la carpeta personal).
- Solo ejecuta **una instrucción directa al sistema**, sin preguntar nada.
- Se usa mucho en **scripts o administración avanzada**.

**Ejemplo:**
```bash
sudo useradd francisco
```

Esto **solo** crea la entrada en /etc/passwd, pero:

- No crea /home/francisco
- No copia archivos de configuración por defecto (.bashrc, etc.)
- No asigna contraseña

Tendrías que hacer todo manualmente:
```bash
sudo mkdir /home/francisco
sudo cp -r /etc/skel/. /home/francisco
sudo chown -R francisco:francisco /home/francisco
sudo passwd francisco
```

### 2. adduser (script de alto nivel) {#2-adduser-script-de-alto-nivel}
- Es un **script en Perl** que usa internamente useradd, pero con **asistentes interactivos**.
- **Crea automáticamente:**
- Carpeta personal (/home/usuario)
- Archivos de configuración inicial
- Grupo con el mismo nombre
- Permisos correctos
- Pide la contraseña y otros datos de forma interactiva

<li>
Está pensado para <strong>uso cotidiano y comodidad del
administrador</strong>
</li>
</Lista>

**Ejemplo:**
```bash
sudo adduser francisco
```

Esto:

- Crea /home/francisco
- Crea el grupo francisco
- Copia los archivos de /etc/skel
- Asigna contraseña (te la pide)
- Te deja todo listo en un paso

### Comparación directa {#comparación-directa}
<!-- Tabla convertida manualmente -->

### En resumen (gestión de usuarios) {#en-resumen-gestión-de-usuarios}
- Usa **adduser** cuando creas usuarios manualmente (más seguro y rápido).
- Usa **useradd** en **scripts o configuraciones personalizadas**, donde controlas cada detalle.

---

## 2. Grupos {#2-grupos}
### Gestión de grupos {#gestión-de-grupos}
<!-- Tabla convertida manualmente -->

### ¿Qué es un grupo en Linux? {#qué-es-un-grupo-en-linux}
Un **grupo** es un conjunto de usuarios que **comparten ciertos permisos**. Sirve para **organizar quién puede hacer qué** con los archivos, carpetas o procesos del sistema.

Piensa que un grupo es como un “equipo” dentro del sistema operativo.

### Ejemplo simple {#ejemplo-simple}
Imagina que tienes tres usuarios:
```bash
juan
maria
pedro
```

Y quieres que **solo juan y maria puedan entrar** a una carpeta llamada /proyecto.

En lugar de dar permisos a cada uno individualmente, puedes crear un grupo:
```bash
sudo groupadd proyecto
```

Luego agregas a los usuarios al grupo:
```bash
sudo usermod -aG proyecto juan
sudo usermod -aG proyecto maria
```

Después haces que la carpeta pertenezca a ese grupo:
```bash
sudo chown :proyecto /proyecto
```

Y le das permisos solo al grupo:
```bash
sudo chmod 770 /proyecto
```

Ahora:

- Juan ✅ puede entrar.
- María ✅ puede entrar.
- Pedro ❌ no puede.

### Cada usuario tiene {#cada-usuario-tiene}
<ol type="1">
<li><strong>Un grupo principal (primario):</strong> Se crea
automáticamente con el mismo nombre que el usuario. Ejemplo: el usuario
francisco pertenece al grupo
francisco.
</li> <li>
**Grupos secundarios (suplementarios):** Son grupos extra a los que puede pertenecer. Ejemplo:
```bash
sudo usermod -aG sudo,video,audio francisco
```

Aquí el usuario pertenece a los grupos:

- sudo → puede usar comandos como administrador
- video → puede acceder a la cámara o GPU
- audio → puede usar el micrófono o altavoces

</li>
</ol>
### Ver los grupos de un usuario {#ver-los-grupos-de-un-usuario}
```bash
groups francisco
```

Salida posible:
```bash
francisco : francisco sudo video audio
```

### Archivos donde se guardan los grupos {#archivos-donde-se-guardan-los-grupos}
- /etc/group → lista todos los grupos del sistema. Ejemplo de líneas: ```bash
root:x:0: sudo:x:27:francisco proyecto:x:1002:juan,maria
```

      ### En resumen (gestión de grupos) {#en-resumen-gestión-de-grupos}

      
<!-- Tabla convertida manualmente -->

      ---

      ## 3. Archivos importantes del sistema {#3-archivos-importantes-del-sistema}

      
<!-- Tabla convertida manualmente -->

      ---

      ## 4. Ejemplos prácticos comunes {#4-ejemplos-prácticos-comunes}

      - **Crear un usuario con carpeta personal y shell bash:** ```bash
sudo useradd -m -s /bin/bash francisco
```

- **Cambiar nombre de usuario:** ```bash
sudo usermod -l nuevo_nombre francisco
```

- **Bloquear/desbloquear usuario:** ```bash
sudo usermod -L francisco # Bloquear sudo usermod -U francisco # Desbloquear
```

- **Ver todos los usuarios del sistema:** ```bash
cut -d: -f1 /etc/passwd
```

      ---

      ## Utilidad de grupos y usuarios {#utilidad-de-grupos-y-usuarios}

      ### 1. Cuando hay varios usuarios {#1-cuando-hay-varios-usuarios}

      Ahí es donde **más se nota su función**.

      Ejemplo: En un servidor o una universidad, hay muchos usuarios distintos:

      - Cada uno tiene su cuenta (/home/juan, /home/maria, etc.)
- Cada uno solo puede entrar a su carpeta
- Los administradores (grupo sudo) pueden cambiar configuraciones del sistema
- Otros grupos controlan quién puede acceder a redes, dispositivos USB, cámaras, etc.

      Así, Linux mantiene la **seguridad y el orden** entre todos los usuarios.

      ---

      ### 2. Cuando eres el único usuario {#2-cuando-eres-el-único-usuario}

      Incluso así, **sigue siendo muy útil** por estas razones:

      ### a) Seguridad interna {#a-seguridad-interna}

      - El sistema separa procesos y permisos por usuario.
- Ejemplo: sí un programa malicioso se ejecuta como “usuario normal”, **no puede dañar el sistema**, porque no tiene permisos de administrador.

      Tú usuario normal pertenece a su propio grupo (por ejemplo, francisco:francisco), y no puede tocar archivos del sistema (/etc, /usr, etc.) sin usar sudo.

      ---

      ### b) Servicios y procesos del sistema {#b-servicios-y-procesos-del-sistema}

      Linux trata **cada servicio como sí fuera un usuario separado** para aislarlos.

      Por ejemplo:
```bash
root → superusuario
mysql → usuario del servicio MySQL
www-data → usuario del servidor web Apache o Nginx
nobody → usuario “vacío” usado por procesos sin privilegios
```

      Así, sí un servicio (como un servidor web) es hackeado, el atacante **no puede controlar todo el sistema**, solo ese usuario limitado.

      ---

      ### c) Control de dispositivos y permisos especiales {#c-control-de-dispositivos-y-permisos-especiales}

      Los grupos también controlan **qué puede hacer tú usuario con el hardware**, incluso sí eres el único:

      - audio → para reproducir sonido
- video → para usar la cámara
- network → para cambiar redes
- docker, kvm, vboxusers, etc. → para manejar máquinas virtuales, contenedores, etc.

      Sí no estás en esos grupos, el sistema simplemente **no te deja usar esos recursos**.

      ---

      <h5 id="en-resumen-utilidad-de-grupos-y-usuarios">En resumen (utilidad
      de grupos y usuarios)</h5>
      
<!-- Tabla convertida manualmente -->

      ---

      ### 3. Otros {#3-otros}

      ### 1. Cuando creas o manejas máquinas (virtuales o reales) {#1-cuando-creas-o-manejas-máquinas-virtuales-o-reales}

      Cada máquina (por ejemplo, una que instalas con VirtualBox, KVM o Docker) tiene su propio **sistema Linux**, y dentro de él **todo funciona con usuarios y grupos**.

      Sí no los entiendes:

      - No sabrás **por qué un programa no puede acceder a un archivo.**
- No podrás **dar permisos** a scripts, servidores o procesos.
- No entenderás **por qué “root” puede hacerlo todo** y tú usuario no.

      En máquinas virtuales o servidores, *la seguridad y estabilidad dependen directamente de esos permisos.*

      ### 2. En ciberseguridad o administración {#2-en-ciberseguridad-o-administración}

      Sí quieres aprender hacking ético, pentesting o proteger sistemas, necesitas dominar esto porque:

      - Los atacantes intentan **escapar del usuario limitado** (por ejemplo, www-data) y conseguir permisos de root.
- Los administradores deben **configurar correctamente los grupos y permisos** para que eso no sea posible.

      Ejemplo: Sí un servicio web corre como usuario www-data, no debería poder leer /etc/shadow (donde están las contraseñas). Ese aislamiento lo logran los **usuarios y grupos**.

      ### 3. En desarrollo o automatización {#3-en-desarrollo-o-automatización}

      Cuando haces tus propias máquinas, scripts o aplicaciones:

      - Puedes crear **usuarios específicos para cada proceso** (por seguridad).
- Asignar **grupos** para definir qué scripts pueden acceder a ciertos archivos.
- Controlar **permisos de ejecución (rwx)** para evitar errores o accesos indebidos.

      Ejemplo real:
```bash
sudo useradd -r -s /bin/false servidor_web
```

      Esto crea un usuario “de sistema” sin acceso a terminal, usado solo para ejecutar un servicio.

      ### En resumen (otros) {#en-resumen-otros}

      
<!-- Tabla convertida manualmente -->

      En palabras simples:

      <blockquote>
      Sí no entiendes cómo Linux maneja usuarios, grupos y permisos, nunca tendrás **control real** de una máquina. Pero cuando lo dominas, puedes **construir, romper y proteger sistemas** a tú gusto.

      </blockquote>