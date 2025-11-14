import { Tabla, TablaCabezera, TablaFila, TablaUnica } from "../../../componentes/moleculas/tabla.jsx";
import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../../../componentes/organismos/estructura.jsx";

import Enlace from "../../../componentes/atomos/enlace.jsx";
import Linea from "../../../componentes/atomos/linea.jsx";
import Lista from "../../../componentes/moleculas/lista.jsx";
import Texto from "../../../componentes/atomos/texto.jsx";
import Titulo from "../../../componentes/moleculas/titulo.jsx";
import Codigo from "../../../componentes/moleculas/codigo.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#1-historia">1. Historia</Enlace ></li>
      <li><Enlace href="#2-filosofía-de-linux">2. Filosofía de Linux</Enlace ></li>
      <li><Enlace href="#3-componentes-de-linux">3. Componentes de Linux</Enlace ></li>
      <li><Enlace href="#4-arquitectura-de-linux">4. Arquitectura de Linux</Enlace ></li>
      <li><Enlace href="#5-jerarquía-del-sistema-de-archivos-fhs">5. Jerarquía del Sistema de Archivos (FHS)</Enlace ></li>
      <li><Enlace href="#6-qué-es-comando">6. Qué es comando?</Enlace ></li>
      <li><Enlace href="#7-variables-de-entorno">7. Variables de entorno</Enlace ></li>
      <li><Enlace href="#8-comandos-de-linux">8. Comandos de Linux</Enlace ></li>
      <li>
        <Enlace href="#9-permisos-y-usuarios">9. Permisos y usuarios</Enlace >
        <Lista>
          <li><Enlace href="#ver-permisos">Ver permisos</Enlace ></li>
          <li><Enlace href="#cambiar-permisos">Cambiar permisos</Enlace ></li>
          <li><Enlace href="#cambiar-propietario">Cambiar propietario</Enlace ></li>
        </Lista>
      </li>
      <li><Enlace href="#10-sudo">10. Sudo</Enlace ></li>
    </Lista>
  );
}

function Comandos_Linux({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1">Introducción a Linux para Ciberseguridad</Titulo>

        <Texto>Linux es un <strong>sistema operativo (SO)</strong>, al igual que
          Windows, macOS, iOS o Android. Un SO gestiona los recursos de hardware
          de una computadora y permite la comunicación entre aplicaciones y
          componentes físicos.</Texto>
        <Texto>A diferencia de otros sistemas operativos, Linux es <strong>libre, de
          código abierto</strong> y cuenta con una gran cantidad de
          <strong>distribuciones</strong> (“distros”), adaptadas a diferentes
          necesidades (ejemplo: Ubuntu, Debian, Fedora, Manjaro, Parrot OS,
          etc.).
        </Texto>
        <Texto>En ciberseguridad, Linux es un pilar por su <strong>robustez,
          flexibilidad y seguridad</strong>, siendo ampliamente usado en
          servidores, dispositivos embebidos, mainframes y sistemas móviles como
          Android.</Texto>
        <Linea />

        <TemarioCompleto temario={Temario} />

        <Titulo title="h2" id="1-historia">1. Historia</Titulo>

        <Lista>
          <li><strong>1970</strong>: Ken Thompson y Dennis Ritchie (trabajaban
            en AT&amp;T). ellos crean <strong>Unix</strong>.</li>
          <li><strong>1977</strong>: Surge BSD (Berkeley Software
            Distribution), pero enfrenta problemas legales por usar código de
            AT&amp;T.</li>
          <li><strong>1983</strong>: Richard Stallman inicia el
            <strong>Proyecto GNU</strong> y crea la <strong>GPL (Licencia Pública
              General)</strong>.
          </li>
          <li><strong>1991</strong>: Linus Torvalds (estudiante Filandés)
            desarrolla el <strong>núcleo de Linux</strong> como proyecto personal,
            liberado como software libre.</li>
          <li><strong>Hoy</strong>: Linux cuenta con más de <strong>23 millones
            de líneas de código</strong> y más de <strong>600
              distribuciones</strong>.</li>
        </Lista>

        <Texto>Ejemplos de distros populares: Ubuntu, Debian, Fedora, OpenSUSE,
          Manjaro, Gentoo, Red Hat, Linux Mint, Elementary y Parrot OS (enfocada
          en ciberseguridad).</Texto>

        <Linea />

        <Titulo title="h2" id="2-filosofía-de-linux">2. Filosofía de Linux</Titulo>

        <Texto>Linux se basa en la <strong>simplicidad, modularidad y
          apertura</strong>. Su enfoque es crear herramientas pequeñas que
          realizan una tarea bien definida y que pueden combinarse.</Texto>
        <Texto><strong>Principios clave:</strong></Texto>

        <Tabla>
          <TablaCabezera headers={["Principio", "Descripción"]} />

          <tbody>
            <TablaFila>
              <TablaUnica><em>Everything is a file</em></TablaUnica>
              <TablaUnica>Todos los elementos del sistema (dispositivos, configuraciones,
                procesos) se gestionan como archivos.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica><em>Small, single-purpose programs</em></TablaUnica>
              <TablaUnica>Programas pequeños que hacen una sola cosa y la hacen bien.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica><em>Ability to chain programs together</em></TablaUnica>
              <TablaUnica>Se pueden combinar programas para tareas complejas (ejemplo:
                pipes).</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica><em>Avoid captive user interfaces</em></TablaUnica>
              <TablaUnica>Se privilegia la terminal/shell en lugar de depender de interfaces
                gráficas.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica><em>Configuration data stored in text files</em></TablaUnica>
              <TablaUnica>Los archivos de configuración son simples archivos de texto
                (ejemplo: /etc/passwd).</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>

        <Linea />

        <Titulo title="h2" id="3-componentes-de-linux">3. Componentes de Linux</Titulo>

        <Tabla>
          <TablaCabezera headers={["Componente", "Descripción"]} />

          <tbody>
            <TablaFila>
              <TablaUnica><strong>Bootloader</strong></TablaUnica>
              <TablaUnica>Inicia el arranque del SO (ejemplo: GRUB).</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica><strong>Kernel (núcleo)</strong></TablaUnica>
              <TablaUnica>Gestiona CPU, memoria y hardware.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica><strong>Daemons</strong></TablaUnica>
              <TablaUnica>Servicios en segundo plano (impresión, programación de tareas,
                etc.).</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica><strong>Shell</strong></TablaUnica>
              <TablaUnica>Interfaz de línea de comandos (ejemplo: Bash, Zsh, Fish).</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica><strong>Graphics server</strong></TablaUnica>
              <TablaUnica>Maneja gráficos y ventanas (ejemplo: servidor X).</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica><strong>Window Manager / GUI</strong></TablaUnica>
              <TablaUnica>Entornos gráficos como GNOME, KDE, MATE.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica><strong>Utilities</strong></TablaUnica>
              <TablaUnica>Programas y herramientas para el usuario.</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>

        <Linea />

        <Titulo title="h2" id="4-arquitectura-de-linux">4. Arquitectura de Linux</Titulo>

        <Texto>Linux se organiza en capas:</Texto>

        <Lista>
          <li><strong>Hardware:</strong> CPU, RAM, disco, periféricos.</li>
          <li><strong>Kernel:</strong> Controla y virtualiza el
            hardware.</li>
          <li><strong>Shell:</strong> Intérprete de comandos (CLI).</li>
          <li><strong>System Utilities:</strong> Herramientas y aplicaciones
            que interactúan con el sistema.</li>
        </Lista>

        <Linea />

        <Titulo title="h2" id="5-jerarquía-del-sistema-de-archivos-fhs">5. Jerarquía del Sistema
          de Archivos (FHS)</Titulo>

        <Texto>Linux organiza los archivos en una <strong>estructura en forma de
          árbol</strong>, con / como raíz.</Texto>
        <Tabla>
          <TablaCabezera headers={["Ruta", "Descripción"]} />
          <tbody>
            <TablaFila>
              <TablaUnica>/</TablaUnica>
              <TablaUnica>Raíz del sistema. Contiene lo necesario para arrancar.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>/bin</TablaUnica>
              <TablaUnica>Binarios esenciales para el usuario.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>/boot</TablaUnica>
              <TablaUnica>Archivos de arranque (kernel, GRUB).</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>/dev</TablaUnica>
              <TablaUnica>Archivos de dispositivos (discos, USBs).</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>/etc</TablaUnica>
              <TablaUnica>Configuración del sistema y aplicaciones.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>/home</TablaUnica>
              <TablaUnica>Directorios personales de cada usuario.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>/lib</TablaUnica>
              <TablaUnica>Bibliotecas compartidas necesarias para arrancar.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>/media</TablaUnica>
              <TablaUnica>Punto de montaje para dispositivos externos.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>/mnt</TablaUnica>
              <TablaUnica>Punto de montaje temporal.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>/opt</TablaUnica>
              <TablaUnica>Software opcional de terceros.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>/root</TablaUnica>
              <TablaUnica>Directorio personal del usuario root.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>/sbin</TablaUnica>
              <TablaUnica>Binarios de administración del sistema.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>/tmp</TablaUnica>
              <TablaUnica>Archivos temporales (se borran al reiniciar).</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>/usr</TablaUnica>
              <TablaUnica>Programas y utilidades de usuario.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>/var</TablaUnica>
              <TablaUnica>Archivos variables (logs, correo, cron, etc.).</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>
        <Linea />
        <Texto><strong>Analogía</strong>, imagina Linux como una empresa:</Texto>
        <Lista>
          <li>El <strong>kernel</strong> es la gerencia (organiza
            recursos).</li>
          <li>Los <strong>daemons</strong> son empleados invisibles que
            mantienen todo funcionando.</li>
          <li>El <strong>shell</strong> es la recepción, donde das
            órdenes.</li>
          <li>La <strong>filosofía</strong> es la cultura de trabajo:
            simplicidad, eficiencia y cooperación.</li>
        </Lista>
        <Linea />
        <Titulo title="h2" id="6-qué-es-comando">6. Qué es comando?</Titulo>
        <Texto>Es un nombre que se coloca en la terminal, que ejecuta varias líneas
          de código.</Texto>
        <Linea />
        <Titulo title="h2" id="7-variables-de-entorno">7. Variables de entorno</Titulo>
        <Texto>son variables de datos por defecto en la terminal, puedes ver cuáles
          son con el comando “env”.</Texto>
        <Texto>“export name=data”: Crear una variable de entorno con nombre “name” y
          valor “data”. (Al reiniciar el sistema operativo se borra la
          variable.)</Texto>
        <Texto>para visualizar puedes usar “echo $name”. También puedes concatenar
          “name = $name:text” quedaría el texto de la variable name como
          “data:text”</Texto>
        <Linea />
        <Titulo title="h2" id="8-comandos-de-linux">8. Comandos de Linux</Titulo>

        <Tabla>
          <TablaCabezera headers={["Categoría", "Comando", "Descripción", "Ejemplo"]} />

          <tbody>
            <TablaFila>
              <TablaUnica>Navegación</TablaUnica>
              <TablaUnica>pwd</TablaUnica>
              <TablaUnica>Muestra la ruta actual.</TablaUnica>
              <TablaUnica>pwd</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica></TablaUnica>
              <TablaUnica>ls</TablaUnica>
              <TablaUnica>Lista los archivos del directorio.</TablaUnica>
              <TablaUnica>ls -la</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica></TablaUnica>
              <TablaUnica>cd</TablaUnica>
              <TablaUnica>Cambia de directorio.</TablaUnica>
              <TablaUnica>cd /home</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Archivos y carpetas</TablaUnica>
              <TablaUnica>cat</TablaUnica>
              <TablaUnica>Muestra el contenido de un archivo.</TablaUnica>
              <TablaUnica>cat archivo.txt</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica></TablaUnica>
              <TablaUnica>cp</TablaUnica>
              <TablaUnica>Copia archivos o carpetas.</TablaUnica>
              <TablaUnica>cp file.txt /tmp/</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica></TablaUnica>
              <TablaUnica>mv</TablaUnica>
              <TablaUnica>Mueve o renombra archivos o carpetas.</TablaUnica>
              <TablaUnica>mv file.txt new.txt</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica></TablaUnica>
              <TablaUnica>rm</TablaUnica>
              <TablaUnica>Elimina archivos o carpetas.</TablaUnica>
              <TablaUnica>rm -rf carpeta</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica></TablaUnica>
              <TablaUnica>touch</TablaUnica>
              <TablaUnica>Crea un archivo vacío.</TablaUnica>
              <TablaUnica>touch nota.txt</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica></TablaUnica>
              <TablaUnica>mkdir</TablaUnica>
              <TablaUnica>Crea una carpeta.</TablaUnica>
              <TablaUnica>mkdir proyectos</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica></TablaUnica>
              <TablaUnica>rmdir</TablaUnica>
              <TablaUnica>Eliminar directorios vacíos.</TablaUnica>
              <TablaUnica>rmdir proyectos</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica></TablaUnica>
              <TablaUnica>head -n 3</TablaUnica>
              <TablaUnica>leer las primeras 3 líneas.</TablaUnica>
              <TablaUnica>head -n 3</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica></TablaUnica>
              <TablaUnica>tail -n 3</TablaUnica>
              <TablaUnica>leer las últimas 3 líneas.</TablaUnica>
              <TablaUnica>tail -n 3</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica></TablaUnica>
              <TablaUnica>tree</TablaUnica>
              <TablaUnica>Mostrar archivos y carpetas del directorio actual en forma de.</TablaUnica>
              <TablaUnica>tree</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Búsqueda</TablaUnica>
              <TablaUnica>find</TablaUnica>
              <TablaUnica>Busca archivos en el sistema.</TablaUnica>
              <TablaUnica>find / -name "contraseña.txt"</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica></TablaUnica>
              <TablaUnica>grep</TablaUnica>
              <TablaUnica>Busca texto dentro de archivos.</TablaUnica>
              <TablaUnica>grep "admin" archivo.txt</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica></TablaUnica>
              <TablaUnica>locate</TablaUnica>
              <TablaUnica>Busca rutas de archivos indexadas.</TablaUnica>
              <TablaUnica>locate passwd</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Sistema</TablaUnica>
              <TablaUnica>whoami</TablaUnica>
              <TablaUnica>Muestra el usuario actual.</TablaUnica>
              <TablaUnica>whoami</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica></TablaUnica>
              <TablaUnica>uname -a</TablaUnica>
              <TablaUnica>Muestra información del sistema.</TablaUnica>
              <TablaUnica>uname -a</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica></TablaUnica>
              <TablaUnica>top o htop</TablaUnica>
              <TablaUnica>Muestra procesos activos.</TablaUnica>
              <TablaUnica>htop</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica></TablaUnica>
              <TablaUnica>ps aux</TablaUnica>
              <TablaUnica>Lista todos los procesos.</TablaUnica>
              <TablaUnica>ps aux | grep apache</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica></TablaUnica>
              <TablaUnica>kill</TablaUnica>
              <TablaUnica>Detiene un proceso.</TablaUnica>
              <TablaUnica>kill 1234</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>
        <Texto>Y muchos más comandos, y variaciones de los mismos…</Texto>
        <Linea />
        <Titulo title="h2" id="9-permisos-y-usuarios">9. Permisos y usuarios</Titulo>
        <Texto>En Linux, <strong>los permisos controlan quién puede leer, escribir o
          ejecutar un archivo</strong>. Cada archivo tiene permisos para:</Texto>
        <Lista>
          <li><strong>Usuario (u)</strong> – propietario del archivo</li>
          <li><strong>Grupo (g)</strong> – grupo al que pertenece el usuario</li>
          <li><strong>Otros (o)</strong> – todos los demás usuarios</li>
        </Lista>
        <Titulo title="h3" id="ver-permisos">Ver permisos</Titulo>
        <Codigo code="ls -l" language="bash" />
        <Texto>Salida típica:</Texto>
        <Codigo code="-rwxr-xr--" language="bash" />
        <Texto>Interpretación:</Texto>
        <Lista>
          <li>r → leer (read)</li>
          <li>w → escribir (write)</li>
          <li>x → ejecutar (execute)</li>
        </Lista>
        <Texto>→ Ejemplo anterior:</Texto>
        <Lista>
          <li>Usuario: <strong>rwx</strong> (leer, escribir, ejecutar)</li>
          <li>Grupo: <strong>r-x</strong> (leer, ejecutar)</li>
          <li>Otros: <strong>r–</strong> (solo leer)</li>
        </Lista>
        <Titulo title="h3" id="cambiar-permisos">Cambiar permisos</Titulo>
        <Codigo code="chmod 755 archivo.sh" language="bash" />
        <Lista>
          <li>7 → rwx</li>
          <li>5 → r-x (Esto da permisos completos al dueño, y solo
            lectura/ejecución al resto.)</li>
        </Lista>
        <Texto>Otra forma:</Texto>
        <Codigo code={`chmod u+x script.sh   # Dar permiso de ejecución al usuario
chmod g-w archivo.txt # Quitar permiso de escritura al grupo`} language="bash" />
        <Titulo title="h3" id="cambiar-propietario">Cambiar propietario</Titulo>
        <Codigo code="chown usuario:grupo archivo.txt" language="bash" />
        <Linea />

        <Titulo title="h2" id="10-sudo">10. Sudo</Titulo>

        <Texto>El comando sudo en Linux y sistemas tipo Unix significa
          <strong>“superuser do”</strong> (hacer como superusuario). Básicamente,
          permite ejecutar comandos con <strong>privilegios de
            administrador</strong>, incluso sí tú usuario normal no los tiene. Esto
          es útil porque algunas acciones (como instalar programas, modificar
          archivos del sistema o cambiar configuraciones importantes) requieren
          permisos elevados para proteger el sistema de cambios accidentales. Así
          funciona paso a paso:
        </Texto>
        <Titulo title="h3" id="ejecutar-un-comando-como-administrador">1. <strong>Ejecutar un
          comando como administrador</strong></Titulo>
        <Texto>Cuando escribes:</Texto>
        <Codigo code="sudo comando" language="bash" />
        <Texto>Linux hace lo siguiente:</Texto>
        <Lista>
          <li>Te pregunta la contraseña de tú usuario (no la del root) sí no la
            has usado sudo recientemente.</li>
          <li>Verifica que tú usuario esté en el archivo
            /etc/sudoers, que define quién puede usar sudo y qué
            comandos.
          </li>
          <li>Sí está permitido, ejecuta el comando con <strong>permisos de
            root</strong>, es decir, como sí fueras el administrador del
            sistema.</li>
        </Lista>
        <Titulo title="h3" id="ejemplo-práctico">2. <strong>Ejemplo práctico</strong></Titulo>
        <Codigo code="sudo apt update" language="bash" />
        <Lista>
          <li>apt update actualiza la lista de paquetes en
            sistemas basados en Debian (Ubuntu, Mint, etc.).</li>
          <li>Normalmente un usuario normal no puede cambiar la base de datos
            de paquetes.</li>
          <li>sudo permite hacerlo porque ejecuta el comando con
            permisos de root.</li>
        </Lista>
        <Titulo title="h3" id="comando-interactivo">3. <strong>Comando
          interactivo</strong></Titulo>
        <Texto>Sí escribes:</Texto>
        <Codigo code="sudo -i" language="bash" />

        <Texto>o</Texto>

        <Codigo code="sudo su" language="bash" />

        <Lista>
          <li>Obtienes un <strong>shell de root</strong>, es decir, todos los
            comandos que escribas después se ejecutan con permisos de
            administrador.</li>
          <li>Esto es más riesgoso porque cualquier error puede afectar
            gravemente el sistema.</li>
        </Lista>

        <Titulo title="h3" id="seguridad-y-tiempo-de-sesión">4. <strong>Seguridad y tiempo de
          sesión</strong></Titulo>

        <Lista>
          <li>sudo recuerda tú contraseña durante unos minutos
            (por defecto 5) para que no tengas que escribirla cada vez.</li>
          <li>Sí tú usuario no está en sudoers, no podrás usarlo.</li>
        </Lista>

        <Linea />

        <blockquote>
          <Texto><strong>Autor:</strong> Fravelz<br />
            <strong>Colaborador:</strong> <span className="citation" data-cites="studentethical">@studentethical</span> (Student
            Ethical)
          </Texto>
        </blockquote>
      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}
export default Comandos_Linux;
