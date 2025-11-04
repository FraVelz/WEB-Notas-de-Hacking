import Titulos from "./componentes/titulos.jsx";

function Readme() {
  return (
    <div className="
      margin: 0 auto;
      max-width: 36em;
      padding-left: 50px;
      padding-right: 50px;
      padding-top: 50px;
      padding-bottom: 50px;
      hyphens: auto;
      overflow-wrap: break-word;
      text-rendering: optimizeLegibility;
      font-kerning: normal;
    ">

    <h1 id="repositorio-para-aprender-ciberseguridad">
      Repositorio para aprender Ciberseguridad
    </h1>

    <Titulos title="h1">
      Repositorio para aprender Ciberseguridad
    </Titulos>

    <p>¡Bienvenido y que tengas un buen viaje!</p>

    <hr />

    <Titulos title="h2">Temario</Titulos>

    <ul className="
          bg-gray-950
          rounded-md
          p-4 mb-4
    ">
      <li><a href="#0-conceptos-básicos">0. Conceptos Básicos</a></li>
      <li><a href="#1-virtualización">1. Virtualización</a></li>
      <li>
        <a href="#2-linux-y-bash-script">2. Linux y Bash Script</a>
        <ul>
          <li>
            <a href="#1-linux-comandos-por-secciones"
              >1. Linux (comandos por secciones)</a
            >
          </li>
          <li>
            <a href="#2-linux-comandos-individuales"
              >2. Linux (comandos individuales)</a
            >
          </li>
          <li><a href="#3-bash-script">3. Bash Script</a></li>
          <li><a href="#4-practica-general">4. Practica general</a></li>
        </ul>
      </li>
      <li><a href="#3-windows">3. Windows</a></li>
      <li><a href="#4-redes">4. Redes</a></li>
      <li><a href="#5-python">5. Python</a></li>
      <li><a href="#6-pentesting">6. Pentesting</a></li>
      <li><a href="#7-osint">7. OSINT</a></li>
      <li>
        <a href="#8-privacidad-y-anonimato">8. Privacidad y Anonimato</a>
      </li>
      <li><a href="#información">Información</a></li>
    </ul>


    <blockquote>
      <p>
        <strong>Ruta:</strong> con enfoque principal pentesting, normalmente es
        lo que ayuda a conseguir unas buenas bases en ciberseguridad y trabajo
        es esta área.
      </p>
    </blockquote>
    <p>
      Los siguientes artículos no son fundamentales, pero te pueden servir para
      enriquecerte de conocimiento en el mundo de la ciberseguridad, y dentro
      del entorno Linux:
    </p>
    <ul>
      <li>
        <p>
          <a href="./otros/ramas-ciberseguridad.md"
            >Ir a Ramas de ciberseguridad</a
          >
        </p>
      </li>
      <li>
        <p>
          <a href="./otros/distribuciones-linux.md"
            >Ir a Distribuciones de Linux</a
          >
        </p>
      </li>
      <li>
        <p><a href="./otros/concientizacion.md">Ir a Concientización</a></p>
      </li>
      <li>
        <p><a href="./otros/herramientas.md">Herramientas Generales</a></p>
      </li>
      <li>
        <p><a href="./otros/recursos.md">Ir a recursos Adicionales</a></p>
      </li>
    </ul>
    <p>
      Enlace para aprender a reconocer Phishing, y concientizar a las personas
      en entornos laborales:
    </p>
    <ul>
      <li>
        <a href="https:/phishingquiz.withgoogle.com/"
          >Ir a Phishing Quiz With Google</a
        >
      </li>
    </ul>
    <hr />
    <h2 id="conceptos-básicos">0. Conceptos Básicos</h2>
    <p><strong>Duración aproximada:</strong> 20 min.</p>
    <p>
      Antes de investigar, te recomiendo leer los siguientes
      <code>desmintiendo mitos</code>, <code>Conceptos Básicos</code> y
      <code>legalidad del hacking</code>, donde se explican los términos
      fundamentales, y reglas importantes de la seguridad informática. Es
      importante entenderlos, ya que se usan constantemente en el campo de la
      ciberseguridad y hacking.
    </p>
    <p>A continuación, el enlace de cada archivo:</p>
    <ul>
      <li>
        <p>
          <a href="./conceptos-basicos/mitos.md">Ir a Desmintiendo mitos</a>
        </p>
      </li>
      <li>
        <p>
          <a href="./conceptos-basicos/conceptos-basicos.md"
            >Ir a leer Conceptos Básicos</a
          >
        </p>
      </li>
      <li>
        <p>
          <a href="./conceptos-basicos/legalidad-hacking.md"
            >Ir a leer Legalidad del Hacking</a
          >
        </p>
      </li>
    </ul>
    <hr />
    <h2 id="virtualización">1. Virtualización</h2>
    <p><strong>Duración aproximada (2h diarias):</strong> 2 días.</p>
    <p>
      Si quieres ver un video de YouTube completo de virtualización con
      VirtualBox antes de empezar los siguientes pasos, elige alguno para
      aprender a virtualizar y como aprender como funciona VirtualBox:
    </p>
    <p>
      <a href="https:/www.youtube.com/watch?v=CLdHQPyHeN0"
        >Ir a curso de Virtualización - Hixec (1h 50m)</a
      >
    </p>
    <p>
      <a href="https:/www.youtube.com/watch?v=bIoVtXiG9xc&amp;feature=youtu.be"
        >Ir a curso de Virtualización - xerosec (2h)</a
      >
    </p>
    <p>
      <a href="https:/www.youtube.com/watch?v=uiFZUfmFAus"
        >Ir a curso de Máquinas Virtuales - HolaMundo (30m)</a
      >
    </p>
    <p>Porque descargar Ubuntu y Windows:</p>
    <ul>
      <li>
        <p>
          Sin importar tu sistema, usa una máquina virtual para trabajar sin
          dañar el original.
        </p>
      </li>
      <li>
        <p>
          La opción más recomendable es VirtualBox, sencilla y muy utilizada
          (otras personas prefieren WMware, u otras formas de virtualizar).
        </p>
      </li>
    </ul>
    <p>
      Tras instalar Ubuntu (u otro sistema linux) y Windows, crea un punto de
      restauración en la máquina virtual, esto es muy importante para recuperar
      el sistema si se llega a romper.
    </p>
    <ul>
      <li>
        <a
          href="https:/www.youtube.com/results?search_query=como+crear+un+punto+de+restauracion+en+virtualbox"
          >Buscar como crear un punto de restauración en VirtualBox</a
        >
      </li>
    </ul>
    <p>Todo lo deberías tener más o menos así en VirtualBox:</p>
    <figure>
      <img src="./images/image-virtualbox.png" alt="Imagen de VirtualBox" />
      <figcaption aria-hidden="true">Imagen de VirtualBox</figcaption>
    </figure>
    <hr />
    <h2 id="linux-y-bash-script">2. Linux y Bash Script</h2>
    <p><strong>Duración aproximada (2h diarias):</strong> 1 mes.</p>
    <p>
      Estos temas están relacionados porque los comandos que aprendes en Linux
      también se pueden usar dentro de los archivos de Bash Script. En otras
      palabras, Bash actúa como una extensión del sistema que te permite
      automatizar esos comandos, combinarlos y ejecutarlos de forma secuencial o
      condicional sin tener que escribirlos uno por uno en la terminal.
    </p>
    <h3 id="linux-comandos-por-secciones">1. Linux (comandos por secciones)</h3>
    <ol type="1">
      <li>
        <p>
          <a href="./linux/comandos-linux.md">Ir a Comandos básicos de Linux</a>
        </p>
      </li>
      <li>
        <p><a href="./linux/ayuda-linux.md">Ir a Obtener Ayuda en Linux</a></p>
      </li>
      <li>
        <p>
          <a href="./linux/gestion-de-procesos.md"
            >Ir a comandos de gestión de procesos</a
          >
        </p>
      </li>
      <li>
        <p>
          <a href="./linux/grupos-y-usuarios.md"
            >Ir a comandos de gestión de usuarios</a
          >
        </p>
      </li>
      <li>
        <p><a href="./linux/permisos.md">Ir a permisos en linux</a></p>
      </li>
      <li>
        <p><a href="./linux/busqueda.md">Ir a comandos de búsqueda</a></p>
      </li>
      <li>
        <p>
          <a href="./linux/atajos-de-teclado.md"
            >Ir a atajos de teclado en linux</a
          >
        </p>
      </li>
    </ol>
    <p>o si prefieres video de YouTube, puedes elegir alguno de estos:</p>
    <ul>
      <li>
        <p>
          <a href="https:/www.youtube.com/watch?v=L906Kti3gzE"
            >Ir a Curso de Linux - HolaMundo (35m)</a
          >
        </p>
      </li>
      <li>
        <p>
          <a href="https:/www.youtube.com/watch?v=8v1cR7-msQ0"
            >Ir a Curso de Linux - Hixec (3h)</a
          >
        </p>
      </li>
      <li>
        <p>
          <a
            href="https:/www.youtube.com/results?search_query=curso+de+linux+desde+cero"
            >Buscar Curso de Linux</a
          >
        </p>
      </li>
    </ul>
    <p>Recursos extras:</p>
    <ul>
      <li>
        <a
          href="https://www.bonaval.com/kb/cheats-chuletas/comandos-basicos-linux"
          >Ir a /www.bonaval.com/ Comandos Basicos de Linux</a
        >
      </li>
    </ul>
    <h3 id="linux-comandos-individuales">2. Linux (comandos individuales)</h3>
    <ul>
      <li>
        <p><a href="./linux/comandos/less.md">Ir a comando less</a></p>
      </li>
      <li>
        <p><a href="./linux/comandos/ncat.md">Ir a comando ncat</a></p>
      </li>
      <li>
        <p><a href="./linux/comandos/netcat.md">Ir a comando netcat</a></p>
      </li>
      <li>
        <p><a href="./linux/comandos/which.md">Ir a comando which</a></p>
      </li>
      <li>
        <p><a href="./linux/comandos/wc.md">Ir a comando wc</a></p>
      </li>
      <li>
        <p><a href="./linux/comandos/diff.md">Ir a comando diff</a></p>
      </li>
      <li>
        <p><a href="./linux/comandos/xxd.md">Ir a comando xxd</a></p>
      </li>
      <li>
        <p>
          <a href="./linux/comandos/cifrado-cesar-tr.md"
            >Ir a comando cifrado cesar con tr</a
          >
        </p>
      </li>
    </ul>
    <h3 id="bash-script">3. Bash Script</h3>
    <p><strong>Básico:</strong></p>
    <ol type="1">
      <li><a href="./linux/fundaments.md">Ir a Fundamentos</a></li>
      <li><a href="./linux/condiciones.md">Ir a Condiciones</a></li>
      <li><a href="./linux/estControl.md">Ir a Estructuras de Control</a></li>
      <li>
        <a href="./linux/funciones.md"
          >Ir a Funciones, variables locales y globales</a
        >
      </li>
      <li>
        <a href="./linux/funciones-externas.md">Ir a Funciones Externas</a>
      </li>
    </ol>
    <p><strong>Intermedio-Avanzado:</strong></p>
    <ol type="1">
      <li><a href="./linux/arrays.md">Ir a Arrays</a></li>
      <li><a href="./linux/manipulacion-de-strings.md">Ir a Strings</a></li>
      <li>
        <a href="./linux/gestion-de-procesos.md">Ir a Gestiones de Procesos</a>
      </li>
      <li><a href="./linux/entrada-y-salida.md">Ir a Entrada y Salida</a></li>
    </ol>
    <p>O si prefieres video de YouTube:</p>
    <ul>
      <li>
        <p>
          <a href="https:/www.youtube.com/watch?v=RUorAzaDftg"
            >Ir a curso de bash script desde cero - El pinguino de mario
            (30m)</a
          >
        </p>
      </li>
      <li>
        <p>
          <a href="https:/www.youtube.com/watch?v=H4ayPYcZEfI"
            >Ir a curso de bash script desde cero - Fazt (2h 23m)</a
          >
        </p>
      </li>
      <li>
        <p>
          <a
            href="https:/www.youtube.com/results?search_query=curso+de+bash+script+desde+cero"
            >Buscar curso de bash script desde cero</a
          >
        </p>
      </li>
    </ul>
    <h3 id="practica-general">4. Practica general</h3>
    <ul>
      <li>
        <a href="./linux/bandit-resolucion.md">Ir a Practicar con bandit</a>
      </li>
    </ul>
    <hr />
    <h2 id="windows">3. Windows</h2>
    <p><strong>Duración aproximada (2h diarias):</strong> 1 mes.</p>
    <p>Todo acerca de windows, para el hacking:</p>
    <ol type="1">
      <li>
        <p><a href="./windows/historia.md">Ir a Historia</a></p>
      </li>
      <li>
        <p>
          <a href="./windows/powershell-cmd.md"
            >Ir a Diferencia entre powershell y cmd</a
          >
        </p>
      </li>
      <li>
        <p>
          <a href="./windows/directorios.md">Ir a Directorios importantes</a>
        </p>
      </li>
      <li>
        <p><a href="./windows/comodines.md">Ir a Comodines</a></p>
      </li>
      <li>
        <p>
          <a href="./windows/navegacion.md"
            >Ir a Comandos y cmdlets de navegación</a
          >
        </p>
      </li>
      <li>
        <p>
          <a href="./windows/variables-entorno.md">Ir a variables de entorno</a>
        </p>
      </li>
      <li>
        <p>
          <a href="./windows/ayuda-soporte.md"
            >Ir a Comandos y cmdlets de ayuda y soporte</a
          >
        </p>
      </li>
      <li>
        <p>
          <a href="./windows/gestion-usuarios.md"
            >Ir a Comandos y cmdlets de gestión de usuarios</a
          >
        </p>
      </li>
      <li>
        <p>
          <a href="./windows/gestion-grupos.md"
            >Ir a Comandos y cmdlets de gestión de grupos</a
          >
        </p>
      </li>
      <li>
        <p>
          <a href="./windows/gestion-grupos.md"
            >Ir a Comandos y cmdlets de gestión de grupos</a
          >
        </p>
      </li>
      <li>
        <p>
          <a href="./windows/gestion-red.md"
            >Ir a Comandos y cmdlets de gestión de red</a
          >
        </p>
      </li>
      <li>
        <p>
          <a href="./windows/gestion-permisos.md"
            >Ir a Comandos y cmdlets de gestión de permisos</a
          >
        </p>
      </li>
      <li>
        <p>
          <a href="./windows/redirecciones-powershell.md"
            >Ir a Redirecciones en Powershell</a
          >
        </p>
      </li>
      <li>
        <p>
          <a href="./windows/alias-powershell.md">Ir a Alias en Powershell</a>
        </p>
      </li>
    </ol>
    <p>Comandos y cmdlets de ayuda y soporte</p>
    <ul>
      <li>
        <a href="./windows/ayuda-soporte.md"
          >Ir a Comandos y cmdlets de ayuda y soporte</a
        >
      </li>
    </ul>
    <p>O videos de YouTube:</p>
    <ul>
      <li>
        <a href="https://www.youtube.com/watch?v=sZ-i7yRZEaI"
          >Ir a curso de Windows - Hixec (2h)</a
        >
      </li>
    </ul>
    <hr />
    <h2 id="redes">4. Redes</h2>
    <p><strong>Duración aproximada (2h diarias):</strong> 1 semana.</p>
    <p>
      Aprender sobre redes (no es indispensable aprender como funciona, la parte
      teórica te la puedes tomar con calma, lo realmente importante es saber
      usar las herramientas prácticas de Linux, la teoría te ayudara a entender
      mejor el funcionamiento de lo que usas):
    </p>
    <p>Archivos para leer de redes:</p>
    <ul>
      <li>
        <p>
          Parte Teórica (conceptos, y mucho más):
          <a href="./redes/teoria.md">Ir a Teoría de Redes</a>
        </p>
      </li>
      <li>
        <p>
          Parte Práctica (herramientas):
          <a href="./redes/herramientas.md">Ir a Herramientas de Redes</a>
        </p>
      </li>
      <li>
        <p>Subnetting: <a href="./redes/subnetting.md">Ir a subnetting</a></p>
      </li>
      <li>
        <p>
          Cidrs y Hosts: <a href="./redes/cidrs-hosts.md">Ir a cidrs y hosts</a>
        </p>
      </li>
    </ul>
    <p>Cursos videos de YouTube:</p>
    <ul>
      <li>
        <p>
          <a href="https:/www.youtube.com/watch?v=OLSKCWjI778"
            >Ir curso de YouTube Contando bits - Redes Informáticas</a
          >
        </p>
      </li>
      <li>
        <p>
          <a href="https:/www.youtube.com/watch?v=7ejIdyu8hug"
            >Ir curso de YouTube Hixec - Redes para ciberseguridad</a
          >
        </p>
      </li>
    </ul>
    <hr />
    <h2 id="python">5. Python</h2>
    <p><strong>Duración aproximada (2h diarias):</strong> 1 mes.</p>
    <p>Notas:</p>
    <ul>
      <li>
        <p>
          <a href="./python/todo-python.md">Ir a resumen de Python básico</a>
        </p>
      </li>
      <li>
        <p>
          <a href="./python/clases-python.md"
            >Ir a resumen de Clases en Python</a
          >
        </p>
      </li>
      <li>
        <p>
          <a href="./python/variables-clases.md"
            >Ir a variables privadas y protegidas (clases en Python)</a
          >
        </p>
      </li>
      <li>
        <p>
          <a href="./python/getter-setter.md"
            >Ir a Getters y Setters (clases en Python)</a
          >
        </p>
      </li>
      <li>
        <p>
          <a href="./python/classmethod.md"
            >Ir a decorador
            <span class="citation" data-cites="classmethod">@classmethod</span>
            (clases en Python)</a
          >
        </p>
      </li>
      <li>
        <p>
          <a href="./python/property.md"
            >Ir a decorador
            <span class="citation" data-cites="property">@property</span>
            (clases en Python)</a
          >
        </p>
      </li>
    </ul>
    <p>Módulos y librerías resumen de cada uno:</p>
    <ul>
      <li>
        <p><a href="./python/modulos/os.md">Ir a Os (automatizar)</a></p>
      </li>
      <li>
        <p>
          <a href="./python/modulos/subprocess.md"
            >Ir a Subprocess (automatizar)</a
          >
        </p>
      </li>
      <li>
        <p>
          <a href="./python/modulos/re.md">Ir a Re (uso avanzado de strings)</a>
        </p>
      </li>
      <li>
        <p>
          <a href="./python/modulos/sys.md"
            >Ir a Sys (funciones del intérprete al programa)</a
          >
        </p>
      </li>
      <li>
        <p>
          <a href="./python/modulos/sockets.md"
            >Ir a Sockets (manejo de redes)</a
          >
        </p>
      </li>
      <li>
        <p>
          <a href="./python/modulos/request.md"
            >Ir a request (crear peticiones, atrevés de red)</a
          >
        </p>
      </li>
      <li>
        <p>
          <a href="./python/modulos/threading.md"
            >Ir a Threading (manejo de hilos, procesos paralelos básicos)</a
          >
        </p>
      </li>
      <li>
        <p>
          <a href="./python/modulos/multiprocessing.md"
            >Ir a Multiprocessing (manejo de hilos, procesos paralelos
            avanzados)</a
          >
        </p>
      </li>
      <li>
        <p>
          <a href="./python/modulos/tkinter.md"
            >Ir a Tkinter (Crear interfaces graficas)</a
          >
        </p>
      </li>
    </ul>
    <p>…</p>
    <p>Video de YouTube - python desde cero:</p>
    <ul>
      <li>
        <a href="https://www.youtube.com/watch?v=nKPbfIU442g"
          >Ir a curso de Python Básico Completo - YoSoyDalto (8h)</a
        >
      </li>
    </ul>
    <hr />
    <h2 id="pentesting">6. Pentesting</h2>
    <p>Temario:</p>
    <ol type="1">
      <li>
        <p>
          <a href="./pentesting/fases.md"
            >Ir a Que es?, y fases del Pentesting</a
          >
        </p>
      </li>
      <li>
        <p><a href="./pentesting/cajas.md">Ir a Cajas en el Pentesting</a></p>
      </li>
    </ol>
    <p>…</p>
    <hr />
    <h2 id="osint">7. OSINT</h2>
    <p><strong>Temario:</strong></p>
    <ol type="1">
      <li>
        <p>
          Cosas básicas a tener en cuenta:
          <a href="./osint/basic.md">Ir a OSINT básico</a>
        </p>
      </li>
      <li>
        <p>
          Google Doorks:
          <a href="./osint/googleDoorks.md">Ir a Google Doorks</a>
        </p>
      </li>
    </ol>
    <p>…</p>
    <hr />
    <h2 id="privacidad-y-anonimato">8. Privacidad y Anonimato</h2>
    <ol type="1">
      <li>
        <p>
          Definiciones y diferencias entre privacidad y anonimato:
          <a href="./anonimato/definicion.md">Ir a definiciones</a>
        </p>
      </li>
      <li>
        <p>
          Huella digital:
          <a href="./anonimato/huella-digital.md">Ir a Huella Digital</a>
        </p>
      </li>
      <li>
        <p>
          User Agent: <a href="./anonimato/user-agent.md">Ir a user-agent</a>
        </p>
      </li>
      <li>
        <p>
          Saber si están filtrados tus datos:
          <a href="./anonimato/filtraciones.md">Ir a investigar</a>
        </p>
      </li>
    </ol>
    <p>…</p>
    <p>
      Conceptos generales:
      <a href="./anonimato/conceptos-generales.md">Ir a conceptos generales</a>
    </p>
    <hr />
    <h2 id="información">Información</h2>
    <p>
      Te agradecería mucho, que dieras una <strong>estrella (like)</strong> al
      Repositorio, no te cuesta nada y así apoyas al creador, del Repositorio
      estaría muy agradecido.
    </p>
    <p>Notas de cada actualización, y mucho más:</p>
    <p>
      <a href="./otros/notas-actualizacion.md">Ir a notas de Actualización</a>
    </p>
    <p><strong>Actualización:</strong> 0.2.5</p>
    <p><strong>Autor:</strong> Fravelz</p>

    <script type="module" src="/src/main.jsx"></script>
</div>
  );
};

export default Readme;
