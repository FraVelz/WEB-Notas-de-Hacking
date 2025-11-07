<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">

<head>
  <meta charset="utf-8" />
  <meta name="generator" content="pandoc" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <title>comandos-linux</title>

</head>

<body>
  <h1 id="introducción-a-linux-para-ciberseguridad">Introducción a Linux
    para Ciberseguridad</h1>
  <p>Linux es un <strong>sistema operativo (SO)</strong>, al igual que
    Windows, macOS, iOS o Android. Un SO gestiona los recursos de hardware
    de una computadora y permite la comunicación entre aplicaciones y
    componentes físicos.</p>
  <p>A diferencia de otros sistemas operativos, Linux es <strong>libre, de
      código abierto</strong> y cuenta con una gran cantidad de
    <strong>distribuciones</strong> (“distros”), adaptadas a diferentes
    necesidades (ejemplo: Ubuntu, Debian, Fedora, Manjaro, Parrot OS,
    etc.).
  </p>
  <p>En ciberseguridad, Linux es un pilar por su <strong>robustez,
      flexibilidad y seguridad</strong>, siendo ampliamente usado en
    servidores, dispositivos embebidos, mainframes y sistemas móviles como
    Android.</p>
  <hr />
  <h2 id="temario">Temario</h2>
  <ul>
    <li><a href="#introducción-a-linux-para-ciberseguridad">Introducción a
        Linux para Ciberseguridad</a>
      <ul>
        <li><a href="#temario">Temario</a></li>
        <li><a href="#1-historia">1. Historia</a></li>
        <li><a href="#2-filosofía-de-linux">2. Filosofía de Linux</a></li>
        <li><a href="#3-componentes-de-linux">3. Componentes de Linux</a></li>
        <li><a href="#4-arquitectura-de-linux">4. Arquitectura de Linux</a></li>
        <li><a href="#5-jerarquía-del-sistema-de-archivos-fhs">5. Jerarquía del
            Sistema de Archivos (FHS)</a></li>
        <li><a href="#6-qué-es-comando">6. Qué es comando?</a></li>
        <li><a href="#7-variables-de-entorno">7. Variables de entorno</a></li>
        <li><a href="#8-comandos-de-linux">8. Comandos de Linux</a></li>
        <li><a href="#9-permisos-y-usuarios">9. Permisos y usuarios</a>
          <ul>
            <li><a href="#ver-permisos">Ver permisos</a></li>
            <li><a href="#cambiar-permisos">Cambiar permisos</a></li>
            <li><a href="#cambiar-propietario">Cambiar propietario</a></li>
          </ul>
        </li>
        <li><a href="#10-sudo">10. Sudo</a>
          <ul>
            <li><a href="#1-ejecutar-un-comando-como-administrador">1.
                <strong>Ejecutar un comando como administrador</strong></a></li>
            <li><a href="#2-ejemplo-práctico">2. <strong>Ejemplo
                  práctico</strong></a></li>
            <li><a href="#3-comando-interactivo">3. <strong>Comando
                  interactivo</strong></a></li>
            <li><a href="#4-seguridad-y-tiempo-de-sesión">4. <strong>Seguridad y
                  tiempo de sesión</strong></a></li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
  <p><a href="./../readme.md#2-linux-y-bash-script">Regresar a la guía
      principal</a></p>
  <hr />
  <h2 id="historia">1. Historia</h2>
  <ul>
    <li>
      <p><strong>1970</strong>: Ken Thompson y Dennis Ritchie (trabajaban
        en AT&amp;T). ellos crean <strong>Unix</strong>.</p>
    </li>
    <li>
      <p><strong>1977</strong>: Surge BSD (Berkeley Software
        Distribution), pero enfrenta problemas legales por usar código de
        AT&amp;T.</p>
    </li>
    <li>
      <p><strong>1983</strong>: Richard Stallman inicia el
        <strong>Proyecto GNU</strong> y crea la <strong>GPL (Licencia Pública
          General)</strong>.
      </p>
    </li>
    <li>
      <p><strong>1991</strong>: Linus Torvalds (estudiante Filandés)
        desarrolla el <strong>núcleo de Linux</strong> como proyecto personal,
        liberado como software libre.</p>
    </li>
    <li>
      <p><strong>Hoy</strong>: Linux cuenta con más de <strong>23 millones
          de líneas de código</strong> y más de <strong>600
          distribuciones</strong>.</p>
    </li>
  </ul>
  <p>Ejemplos de distros populares: Ubuntu, Debian, Fedora, OpenSUSE,
    Manjaro, Gentoo, Red Hat, Linux Mint, Elementary y Parrot OS (enfocada
    en ciberseguridad).</p>
  <hr />
  <h2 id="filosofía-de-linux">2. Filosofía de Linux</h2>
  <p>Linux se basa en la <strong>simplicidad, modularidad y
      apertura</strong>. Su enfoque es crear herramientas pequeñas que
    realizan una tarea bien definida y que pueden combinarse.</p>
  <p><strong>Principios clave:</strong></p>
  <table>
    <colgroup>
      <col style="width: 28%" />
      <col style="width: 71%" />
    </colgroup>
    <thead>
      <tr>
        <th>Principio</th>
        <th>Descripción</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><em>Everything is a file</em></td>
        <td>Todos los elementos del sistema (dispositivos, configuraciones,
          procesos) se gestionan como archivos.</td>
      </tr>
      <tr>
        <td><em>Small, single-purpose programs</em></td>
        <td>Programas pequeños que hacen una sola cosa y la hacen bien.</td>
      </tr>
      <tr>
        <td><em>Ability to chain programs together</em></td>
        <td>Se pueden combinar programas para tareas complejas (ejemplo:
          pipes).</td>
      </tr>
      <tr>
        <td><em>Avoid captive user interfaces</em></td>
        <td>Se privilegia la terminal/shell en lugar de depender de interfaces
          gráficas.</td>
      </tr>
      <tr>
        <td><em>Configuration data stored in text files</em></td>
        <td>Los archivos de configuración son simples archivos de texto
          (ejemplo: <code>/etc/passwd</code>).</td>
      </tr>
    </tbody>
  </table>
  <hr />
  <h2 id="componentes-de-linux">3. Componentes de Linux</h2>
  <table>
    <colgroup>
      <col style="width: 25%" />
      <col style="width: 74%" />
    </colgroup>
    <thead>
      <tr>
        <th>Componente</th>
        <th>Descripción</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Bootloader</strong></td>
        <td>Inicia el arranque del SO (ejemplo: GRUB).</td>
      </tr>
      <tr>
        <td><strong>Kernel (núcleo)</strong></td>
        <td>Gestiona CPU, memoria y hardware.</td>
      </tr>
      <tr>
        <td><strong>Daemons</strong></td>
        <td>Servicios en segundo plano (impresión, programación de tareas,
          etc.).</td>
      </tr>
      <tr>
        <td><strong>Shell</strong></td>
        <td>Interfaz de línea de comandos (ejemplo: Bash, Zsh, Fish).</td>
      </tr>
      <tr>
        <td><strong>Graphics server</strong></td>
        <td>Maneja gráficos y ventanas (ejemplo: servidor X).</td>
      </tr>
      <tr>
        <td><strong>Window Manager / GUI</strong></td>
        <td>Entornos gráficos como GNOME, KDE, MATE.</td>
      </tr>
      <tr>
        <td><strong>Utilities</strong></td>
        <td>Programas y herramientas para el usuario.</td>
      </tr>
    </tbody>
  </table>
  <hr />
  <h2 id="arquitectura-de-linux">4. Arquitectura de Linux</h2>
  <p>Linux se organiza en capas:</p>
  <ol type="1">
    <li>
      <p><strong>Hardware:</strong> CPU, RAM, disco, periféricos.</p>
    </li>
    <li>
      <p><strong>Kernel:</strong> Controla y virtualiza el
        hardware.</p>
    </li>
    <li>
      <p><strong>Shell:</strong> Intérprete de comandos (CLI).</p>
    </li>
    <li>
      <p><strong>System Utilities:</strong> Herramientas y aplicaciones
        que interactúan con el sistema.</p>
    </li>
  </ol>
  <hr />
  <h2 id="jerarquía-del-sistema-de-archivos-fhs">5. Jerarquía del Sistema
    de Archivos (FHS)</h2>
  <p>Linux organiza los archivos en una <strong>estructura en forma de
      árbol</strong>, con <code>/</code> como raíz.</p>
  <table>
    <thead>
      <tr>
        <th>Ruta</th>
        <th>Descripción</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>/</code></td>
        <td>Raíz del sistema. Contiene lo necesario para arrancar.</td>
      </tr>
      <tr>
        <td><code>/bin</code></td>
        <td>Binarios esenciales para el usuario.</td>
      </tr>
      <tr>
        <td><code>/boot</code></td>
        <td>Archivos de arranque (kernel, GRUB).</td>
      </tr>
      <tr>
        <td><code>/dev</code></td>
        <td>Archivos de dispositivos (discos, USBs).</td>
      </tr>
      <tr>
        <td><code>/etc</code></td>
        <td>Configuración del sistema y aplicaciones.</td>
      </tr>
      <tr>
        <td><code>/home</code></td>
        <td>Directorios personales de cada usuario.</td>
      </tr>
      <tr>
        <td><code>/lib</code></td>
        <td>Bibliotecas compartidas necesarias para arrancar.</td>
      </tr>
      <tr>
        <td><code>/media</code></td>
        <td>Punto de montaje para dispositivos externos.</td>
      </tr>
      <tr>
        <td><code>/mnt</code></td>
        <td>Punto de montaje temporal.</td>
      </tr>
      <tr>
        <td><code>/opt</code></td>
        <td>Software opcional de terceros.</td>
      </tr>
      <tr>
        <td><code>/root</code></td>
        <td>Directorio personal del usuario root.</td>
      </tr>
      <tr>
        <td><code>/sbin</code></td>
        <td>Binarios de administración del sistema.</td>
      </tr>
      <tr>
        <td><code>/tmp</code></td>
        <td>Archivos temporales (se borran al reiniciar).</td>
      </tr>
      <tr>
        <td><code>/usr</code></td>
        <td>Programas y utilidades de usuario.</td>
      </tr>
      <tr>
        <td><code>/var</code></td>
        <td>Archivos variables (logs, correo, cron, etc.).</td>
      </tr>
    </tbody>
  </table>
  <hr />
  <p><strong>Analogía</strong>, imagina Linux como una empresa:</p>
  <ul>
    <li>
      <p>El <strong>kernel</strong> es la gerencia (organiza
        recursos).</p>
    </li>
    <li>
      <p>Los <strong>daemons</strong> son empleados invisibles que
        mantienen todo funcionando.</p>
    </li>
    <li>
      <p>El <strong>shell</strong> es la recepción, donde das
        órdenes.</p>
    </li>
    <li>
      <p>La <strong>filosofía</strong> es la cultura de trabajo:
        simplicidad, eficiencia y cooperación.</p>
    </li>
  </ul>
  <hr />
  <h2 id="qué-es-comando">6. Qué es comando?</h2>
  <p>Es un nombre que se coloca en la terminal, que ejecuta varias líneas
    de código.</p>
  <hr />
  <h2 id="variables-de-entorno">7. Variables de entorno</h2>
  <p>son variables de datos por defecto en la terminal, puedes ver cuáles
    son con el comando “env”.</p>
  <p>“export name=data”: Crear una variable de entorno con nombre “name” y
    valor “data”. (Al reiniciar el sistema operativo se borra la
    variable.)</p>
  <p>para visualizar puedes usar “echo $name”. También puedes concatenar
    “name = $name:text” quedaría el texto de la variable name como
    “data:text”</p>
  <hr />
  <h2 id="comandos-de-linux">8. Comandos de Linux</h2>
  <table>
    <colgroup>
      <col style="width: 14%" />
      <col style="width: 10%" />
      <col style="width: 51%" />
      <col style="width: 23%" />
    </colgroup>
    <thead>
      <tr>
        <th>Categoría</th>
        <th>Comando</th>
        <th>Descripción</th>
        <th>Ejemplo</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Navegación</td>
        <td><code>pwd</code></td>
        <td>Muestra la ruta actual.</td>
        <td><code>pwd</code></td>
      </tr>
      <tr>
        <td></td>
        <td><code>ls</code></td>
        <td>Lista los archivos del directorio.</td>
        <td><code>ls -la</code></td>
      </tr>
      <tr>
        <td></td>
        <td><code>cd</code></td>
        <td>Cambia de directorio.</td>
        <td><code>cd /home</code></td>
      </tr>
      <tr>
        <td>Archivos y carpetas</td>
        <td><code>cat</code></td>
        <td>Muestra el contenido de un archivo.</td>
        <td><code>cat archivo.txt</code></td>
      </tr>
      <tr>
        <td></td>
        <td><code>cp</code></td>
        <td>Copia archivos o carpetas.</td>
        <td><code>cp file.txt /tmp/</code></td>
      </tr>
      <tr>
        <td></td>
        <td><code>mv</code></td>
        <td>Mueve o renombra archivos o carpetas.</td>
        <td><code>mv file.txt new.txt</code></td>
      </tr>
      <tr>
        <td></td>
        <td><code>rm</code></td>
        <td>Elimina archivos o carpetas.</td>
        <td><code>rm -rf carpeta</code></td>
      </tr>
      <tr>
        <td></td>
        <td><code>touch</code></td>
        <td>Crea un archivo vacío.</td>
        <td><code>touch nota.txt</code></td>
      </tr>
      <tr>
        <td></td>
        <td><code>mkdir</code></td>
        <td>Crea una carpeta.</td>
        <td><code>mkdir proyectos</code></td>
      </tr>
      <tr>
        <td></td>
        <td><code>rmdir</code></td>
        <td>Eliminar directorios vacíos.</td>
        <td><code>rmdir proyectos</code></td>
      </tr>
      <tr>
        <td></td>
        <td><code>heap -n 3</code></td>
        <td>leer las primeras 3 líneas.</td>
        <td><code>heap -n 3</code></td>
      </tr>
      <tr>
        <td></td>
        <td><code>tail -n 3</code></td>
        <td>leer las últimas 3 líneas.</td>
        <td><code>tail -n 3</code></td>
      </tr>
      <tr>
        <td></td>
        <td><code>tree</code></td>
        <td>Mostrar archivos y carpetas del directorio actual en forma de
          árbol.</td>
        <td><code>tree</code></td>
      </tr>
      <tr>
        <td>Búsqueda</td>
        <td><code>find</code></td>
        <td>Busca archivos en el sistema.</td>
        <td><code>find / -name "contraseña.txt"</code></td>
      </tr>
      <tr>
        <td></td>
        <td><code>grep</code></td>
        <td>Busca texto dentro de archivos.</td>
        <td><code>grep "admin" archivo.txt</code></td>
      </tr>
      <tr>
        <td></td>
        <td><code>locate</code></td>
        <td>Busca rutas de archivos indexadas.</td>
        <td><code>locate passwd</code></td>
      </tr>
      <tr>
        <td>Sistema</td>
        <td><code>whoami</code></td>
        <td>Muestra el usuario actual.</td>
        <td><code>whoami</code></td>
      </tr>
      <tr>
        <td></td>
        <td><code>uname -a</code></td>
        <td>Muestra información del sistema.</td>
        <td><code>uname -a</code></td>
      </tr>
      <tr>
        <td></td>
        <td><code>top</code> o <code>htop</code></td>
        <td>Muestra procesos activos.</td>
        <td><code>htop</code></td>
      </tr>
      <tr>
        <td></td>
        <td><code>ps aux</code></td>
        <td>Lista todos los procesos.</td>
        <td><code>ps aux grep apache</code></td>
      </tr>
      <tr>
        <td></td>
        <td><code>kill</code></td>
        <td>Detiene un proceso.</td>
        <td><code>kill 1234</code></td>
      </tr>
    </tbody>
  </table>
  <p>Y muchos más comandos, y variaciones de los mismos…</p>
  <hr />
  <h2 id="permisos-y-usuarios">9. Permisos y usuarios</h2>
  <p>En Linux, <strong>los permisos controlan quién puede leer, escribir o
      ejecutar un archivo</strong>. Cada archivo tiene permisos para:</p>
  <ul>
    <li><strong>Usuario (u)</strong> – propietario del archivo</li>
    <li><strong>Grupo (g)</strong> – grupo al que pertenece el usuario</li>
    <li><strong>Otros (o)</strong> – todos los demás usuarios</li>
  </ul>
  <h3 id="ver-permisos">Ver permisos</h3>
  <div class="sourceCode" id="cb1">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="fu">ls</span> <span class="at">-l</span></span></code></pre>
  </div>
  <p>Salida típica:</p>
  <div class="sourceCode" id="cb2">
    <pre
      class="sourceCode sh"><code class="sourceCode bash"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="ex">-rwxr-xr--</span></span></code></pre>
  </div>
  <p>Interpretación:</p>
  <ul>
    <li><code>r</code> → leer (read)</li>
    <li><code>w</code> → escribir (write)</li>
    <li><code>x</code> → ejecutar (execute)</li>
  </ul>
  <p>→ Ejemplo anterior:</p>
  <ul>
    <li>Usuario: <strong>rwx</strong> (leer, escribir, ejecutar)</li>
    <li>Grupo: <strong>r-x</strong> (leer, ejecutar)</li>
    <li>Otros: <strong>r–</strong> (solo leer)</li>
  </ul>
  <h3 id="cambiar-permisos">Cambiar permisos</h3>
  <div class="sourceCode" id="cb3">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a><span class="fu">chmod</span> 755 archivo.sh</span></code></pre>
  </div>
  <ul>
    <li><code>7</code> → rwx</li>
    <li><code>5</code> → r-x (Esto da permisos completos al dueño, y solo
      lectura/ejecución al resto.)</li>
  </ul>
  <p>Otra forma:</p>
  <div class="sourceCode" id="cb4">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a><span class="fu">chmod</span> u+x script.sh   <span class="co"># Dar permiso de ejecución al usuario</span></span>
<span id="cb4-2"><a href="#cb4-2" aria-hidden="true" tabindex="-1"></a><span class="fu">chmod</span> g-w archivo.txt <span class="co"># Quitar permiso de escritura al grupo</span></span></code></pre>
  </div>
  <h3 id="cambiar-propietario">Cambiar propietario</h3>
  <div class="sourceCode" id="cb5">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb5-1"><a href="#cb5-1" aria-hidden="true" tabindex="-1"></a><span class="fu">chown</span> usuario:grupo archivo.txt</span></code></pre>
  </div>
  <hr />
  <h2 id="sudo">10. Sudo</h2>
  <p>El comando <code>sudo</code> en Linux y sistemas tipo Unix significa
    <strong>“superuser do”</strong> (hacer como superusuario). Básicamente,
    permite ejecutar comandos con <strong>privilegios de
      administrador</strong>, incluso si tu usuario normal no los tiene. Esto
    es útil porque algunas acciones (como instalar programas, modificar
    archivos del sistema o cambiar configuraciones importantes) requieren
    permisos elevados para proteger el sistema de cambios accidentales. Así
    funciona paso a paso:
  </p>
  <h3 id="ejecutar-un-comando-como-administrador">1. <strong>Ejecutar un
      comando como administrador</strong></h3>
  <p>Cuando escribes:</p>
  <div class="sourceCode" id="cb6">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> comando</span></code></pre>
  </div>
  <p>Linux hace lo siguiente:</p>
  <ul>
    <li>
      <p>Te pregunta la contraseña de tu usuario (no la del root) si no la
        has usado sudo recientemente.</p>
    </li>
    <li>
      <p>Verifica que tu usuario esté en el archivo
        <code>/etc/sudoers</code>, que define quién puede usar sudo y qué
        comandos.
      </p>
    </li>
    <li>
      <p>Si está permitido, ejecuta el comando con <strong>permisos de
          root</strong>, es decir, como si fueras el administrador del
        sistema.</p>
    </li>
  </ul>
  <h3 id="ejemplo-práctico">2. <strong>Ejemplo práctico</strong></h3>
  <div class="sourceCode" id="cb7">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb7-1"><a href="#cb7-1" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> apt update</span></code></pre>
  </div>
  <ul>
    <li>
      <p><code>apt update</code> actualiza la lista de paquetes en
        sistemas basados en Debian (Ubuntu, Mint, etc.).</p>
    </li>
    <li>
      <p>Normalmente un usuario normal no puede cambiar la base de datos
        de paquetes.</p>
    </li>
    <li>
      <p><code>sudo</code> permite hacerlo porque ejecuta el comando con
        permisos de root.</p>
    </li>
  </ul>
  <h3 id="comando-interactivo">3. <strong>Comando
      interactivo</strong></h3>
  <p>Si escribes:</p>
  <div class="sourceCode" id="cb8">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb8-1"><a href="#cb8-1" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> <span class="at">-i</span></span></code></pre>
  </div>
  <p>o</p>
  <div class="sourceCode" id="cb9">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb9-1"><a href="#cb9-1" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> su</span></code></pre>
  </div>
  <ul>
    <li>
      <p>Obtienes un <strong>shell de root</strong>, es decir, todos los
        comandos que escribas después se ejecutan con permisos de
        administrador.</p>
    </li>
    <li>
      <p>Esto es más riesgoso porque cualquier error puede afectar
        gravemente el sistema.</p>
    </li>
  </ul>
  <h3 id="seguridad-y-tiempo-de-sesión">4. <strong>Seguridad y tiempo de
      sesión</strong></h3>
  <ul>
    <li>
      <p><code>sudo</code> recuerda tu contraseña durante unos minutos
        (por defecto 5) para que no tengas que escribirla cada vez.</p>
    </li>
    <li>
      <p>Si tu usuario no está en sudoers, no podrás usarlo.</p>
    </li>
  </ul>
  <hr />
  <p>Listo quieres volver a la guía principal.</p>
  <p><a href="./../readme.md#2-linux-y-bash-script">Regresar a la guía
      principal</a></p>
  <blockquote>
    <p><strong>Autor:</strong> Fravelz<br />
      <strong>Colaborador:</strong> <span class="citation" data-cites="studentethical">@studentethical</span> (Student
      Ethical)
    </p>
  </blockquote>
</body>

</html>