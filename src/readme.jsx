import Titulo from "./componentes/titulo.jsx";
import Linea from "./componentes/linea.jsx";
import Lista from "./componentes/lista.jsx";
import Enlace from "./componentes/enlace.jsx";
import Texto from "./componentes/texto.jsx";

function Readme() {
  return (
    // 
    <div className="
      hyphens-auto hyphens: auto;
      wrap-break-word
    ">

    <Titulo title="h1">
      Repositorio para aprender Ciberseguridad
    </Titulo>

    <Texto>¡Bienvenido y que tengas un buen viaje!</Texto>

    <Linea />

    <Titulo title="h2">Temario</Titulo>
    <Lista className="
          bg-gray-950
          rounded-md
          p-4 mb-4
 
    ">
      <li><Enlace href="#0-conceptos-básicos">0. Conceptos Básicos</Enlace></li>
      <li><Enlace href="#1-virtualización">1. Virtualización</Enlace></li>
      <li>
        <Enlace href="#2-linux-y-bash-script">2. Linux y Bash Script</Enlace>

        <Lista>
          <li><Enlace href="#1-linux-comandos-por-secciones">1. Linux (comandos por secciones)</Enlace></li>
          <li><Enlace href="#2-linux-comandos-individuales">2. Linux (comandos individuales)</Enlace></li>
          <li><Enlace href="#3-bash-script">3. Bash Script</Enlace></li>
          <li><Enlace href="#4-practica-general">4. Practica general</Enlace></li>
        </Lista>
      </li>
      <li><Enlace href="#3-windows">3. Windows</Enlace></li>
      <li><Enlace href="#4-redes">4. Redes</Enlace></li>
      <li><Enlace href="#5-python">5. Python</Enlace></li>
      <li><Enlace href="#6-pentesting">6. Pentesting</Enlace></li>
      <li><Enlace href="#7-osint">7. OSINT</Enlace></li>
      <li>
        <Enlace href="#8-privacidad-y-anonimato">8. Privacidad y Anonimato</Enlace>
      </li>
      <li><Enlace href="#información">Información</Enlace></li>
 
    </Lista>

    <blockquote>
      <Texto>
        <strong>Ruta:</strong> con enfoque principal pentesting, normalmente es
        lo que ayuda a conseguir unas buenas bases en ciberseguridad y trabajo
        es esta área.
      </Texto>
    </blockquote>
    <Texto>
      Los siguientes artículos no son fundamentales, pero te pueden servir para
      enriquecerte de conocimiento en el mundo de la ciberseguridad, y dentro
      del entorno Linux:
    </Texto>
    <ul>
      <li>
        <Texto>
          <Enlace href="./otros/ramas-ciberseguridad.md"
            >Ir a Ramas de ciberseguridad</Enlace>
        </Texto>
      </li>
      <li>
        <Texto>
          <Enlace href="./otros/distribuciones-linux.md"
            >Ir a Distribuciones de Linux</Enlace>
        </Texto>
      </li>
      <li>
        <Texto><Enlace href="./otros/concientizacion.md">Ir a Concientización</Enlace></Texto>
      </li>
      <li>
        <Texto><Enlace href="./otros/herramientas.md">Herramientas Generales</Enlace></Texto>
      </li>
      <li>
        <Texto><Enlace href="./otros/recursos.md">Ir a recursos Adicionales</Enlace></Texto>
      </li>
    </ul>
    <Texto>
      Enlace para aprender a reconocer Phishing, y concientizar a las personas
      en entornos laborales:
    </Texto>
    <ul>
      <li>
        <Enlace href="https:/phishingquiz.withgoogle.com/">Ir a Phishing Quiz With Google</Enlace>
      </li>
    </ul>
    <Linea />

    <Titulo title="h2" id="conceptos-básicos">0. Conceptos Básicos</Titulo>

    <Texto><strong>Duración aproximada:</strong> 20 min.</Texto>
    <Texto>
      Antes de investigar, te recomiendo leer los siguientes
      <code>desmintiendo mitos</code>, <code>Conceptos Básicos</code> y
      <code>legalidad del hacking</code>, donde se explican los términos
      fundamentales, y reglas importantes de la seguridad informática. Es
      importante entenderlos, ya que se usan constantemente en el campo de la
      ciberseguridad y hacking.
    </Texto>
    <Texto>A continuación, el enlace de cada archivo:</Texto>
    <ul>
      <li>
        <Texto>
          <Enlace href="./conceptos-basicos/mitos.md">Ir a Desmintiendo mitos</Enlace>
        </Texto>
      </li>
      <li>
        <Texto>
          <Enlace href="./conceptos-basicos/conceptos-basicos.md"
            >Ir a leer Conceptos Básicos</Enlace>
        </Texto>
      </li>
      <li>
        <Texto>
          <Enlace href="./conceptos-basicos/legalidad-hacking.md"
            >Ir a leer Legalidad del Hacking</Enlace>
        </Texto>
      </li>
    </ul>

    <Linea />

    <Titulo title="h2" id="virtualización">1. Virtualización</Titulo>
    <Texto><strong>Duración aproximada (2h diarias):</strong> 2 días.</Texto>
    <Texto>
      Si quieres ver un video de YouTube completo de virtualización con
      VirtualBox antes de empezar los siguientes pasos, elige alguno para
      aprender a virtualizar y como aprender como funciona VirtualBox:
    </Texto>
    <Texto>
      <Enlace href="https:/www.youtube.com/watch?v=CLdHQPyHeN0"
        >Ir a curso de Virtualización - Hixec (1h 50m)</Enlace>
    </Texto>
    <Texto>
      <Enlace href="https:/www.youtube.com/watch?v=bIoVtXiG9xc&amp;feature=youtu.be"
        >Ir a curso de Virtualización - xerosec (2h)</Enlace>
    </Texto>
    <Texto>
      <Enlace href="https:/www.youtube.com/watch?v=uiFZUfmFAus"
        >Ir a curso de Máquinas Virtuales - HolaMundo (30m)</Enlace>
    </Texto>
    <Texto>Porque descargar Ubuntu y Windows:</Texto>
    <ul>
      <li>
        <Texto>
          Sin importar tu sistema, usa una máquina virtual para trabajar sin
          dañar el original.
        </Texto>
      </li>
      <li>
        <Texto>
          La opción más recomendable es VirtualBox, sencilla y muy utilizada
          (otras personas prefieren WMware, u otras formas de virtualizar).
        </Texto>
      </li>
    </ul>
    <Texto>
      Tras instalar Ubuntu (u otro sistema linux) y Windows, crea un punto de
      restauración en la máquina virtual, esto es muy importante para recuperar
      el sistema si se llega a romper.
    </Texto>
    <ul>
      <li>
        <a
          href="https:/www.youtube.com/results?search_query=como+crear+un+punto+de+restauracion+en+virtualbox"
          >Buscar como crear un punto de restauración en VirtualBox</a
        >
      </li>
    </ul>
    <Texto>Todo lo deberías tener más o menos así en VirtualBox:</Texto>
    <figure>
      <img src="./images/image-virtualbox.png" alt="Imagen de VirtualBox" />
      <figcaption aria-hidden="true">Imagen de VirtualBox</figcaption>
    </figure>
    
    <Linea />

    <Titulo title="h2" id="linux-y-bash-script">2. Linux y Bash Script</Titulo>
    <Texto><strong>Duración aproximada (2h diarias):</strong> 1 mes.</Texto>
    <Texto>
      Estos temas están relacionados porque los comandos que aprendes en Linux
      también se pueden usar dentro de los archivos de Bash Script. En otras
      palabras, Bash actúa como una extensión del sistema que te permite
      automatizar esos comandos, combinarlos y ejecutarlos de forma secuencial o
      condicional sin tener que escribirlos uno por uno en la terminal.
    </Texto>
    <h3 id="linux-comandos-por-secciones">1. Linux (comandos por secciones)</h3>
    <ol type="1">
      <li>
        <Texto>
          <Enlace href="./linux/comandos-linux.md">Ir a Comandos básicos de Linux</Enlace>
        </Texto>
      </li>
      <li>
        <Texto><Enlace href="./linux/ayuda-linux.md">Ir a Obtener Ayuda en Linux</Enlace></Texto>
      </li>
      <li>
        <Texto>
          <Enlace href="./linux/gestion-de-procesos.md"
            >Ir a comandos de gestión de procesos</Enlace>
        </Texto>
      </li>
      <li>
        <Texto>
          <Enlace href="./linux/grupos-y-usuarios.md"
            >Ir a comandos de gestión de usuarios</Enlace>
        </Texto>
      </li>
      <li>
        <Texto><Enlace href="./linux/permisos.md">Ir a permisos en linux</Enlace></Texto>
      </li>
      <li>
        <Texto><Enlace href="./linux/busqueda.md">Ir a comandos de búsqueda</Enlace></Texto>
      </li>
      <li>
        <Texto>
          <Enlace href="./linux/atajos-de-teclado.md"
            >Ir a atajos de teclado en linux</Enlace>
        </Texto>
      </li>
    </ol>
    <Texto>o si prefieres video de YouTube, puedes elegir alguno de estos:</Texto>
    <ul>
      <li>
        <Texto>
          <Enlace href="https:/www.youtube.com/watch?v=L906Kti3gzE"
            >Ir a Curso de Linux - HolaMundo (35m)</Enlace>
        </Texto>
      </li>
      <li>
        <Texto>
          <Enlace href="https:/www.youtube.com/watch?v=8v1cR7-msQ0"
            >Ir a Curso de Linux - Hixec (3h)</Enlace>
        </Texto>
      </li>
      <li>
        <Texto>
          <Enlace href="https:/www.youtube.com/results?search_query=curso+de+linux+desde+cero">Buscar Curso de Linux</Enlace>
        </Texto>
      </li>
    </ul>
    <Texto>Recursos extras:</Texto>
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
        <Texto><Enlace href="./linux/comandos/less.md">Ir a comando less</Enlace></Texto>
      </li>
      <li>
        <Texto><Enlace href="./linux/comandos/ncat.md">Ir a comando ncat</Enlace></Texto>
      </li>
      <li>
        <Texto><Enlace href="./linux/comandos/netcat.md">Ir a comando netcat</Enlace></Texto>
      </li>
      <li>
        <Texto><Enlace href="./linux/comandos/which.md">Ir a comando which</Enlace></Texto>
      </li>
      <li>
        <Texto><Enlace href="./linux/comandos/wc.md">Ir a comando wc</Enlace></Texto>
      </li>
      <li>
        <Texto><Enlace href="./linux/comandos/diff.md">Ir a comando diff</Enlace></Texto>
      </li>
      <li>
        <Texto><Enlace href="./linux/comandos/xxd.md">Ir a comando xxd</Enlace></Texto>
      </li>
      <li>
        <Texto>
          <Enlace href="./linux/comandos/cifrado-cesar-tr.md"
            >Ir a comando cifrado cesar con tr</Enlace>
        </Texto>
      </li>
    </ul>
    <h3 id="bash-script">3. Bash Script</h3>
    <Texto><strong>Básico:</strong></Texto>
    <ol type="1">
      <li><Enlace href="./linux/fundaments.md">Ir a Fundamentos</Enlace></li>
      <li><Enlace href="./linux/condiciones.md">Ir a Condiciones</Enlace></li>
      <li><Enlace href="./linux/estControl.md">Ir a Estructuras de Control</Enlace></li>
      <li>
        <Enlace href="./linux/funciones.md">Ir a Funciones, variables locales y globales</Enlace>
      </li>
      <li>
        <Enlace href="./linux/funciones-externas.md">Ir a Funciones Externas</Enlace>
      </li>
    </ol>
    <Texto><strong>Intermedio-Avanzado:</strong></Texto>
    <ol type="1">
      <li><Enlace href="./linux/arrays.md">Ir a Arrays</Enlace></li>
      <li><Enlace href="./linux/manipulacion-de-strings.md">Ir a Strings</Enlace></li>
      <li>
        <Enlace href="./linux/gestion-de-procesos.md">Ir a Gestiones de Procesos</Enlace>
      </li>
      <li><Enlace href="./linux/entrada-y-salida.md">Ir a Entrada y Salida</Enlace></li>
    </ol>
    <Texto>O si prefieres video de YouTube:</Texto>
    <ul>
      <li>
        <Texto>
          <Enlace href="https:/www.youtube.com/watch?v=RUorAzaDftg"
            >Ir a curso de bash script desde cero - El pinguino de mario
            (30m)</Enlace>
        </Texto>
      </li>
      <li>
        <Texto>
          <Enlace href="https:/www.youtube.com/watch?v=H4ayPYcZEfI"
            >Ir a curso de bash script desde cero - Fazt (2h 23m)</Enlace>
        </Texto>
      </li>
      <li>
        <Texto>
          <Enlace
            href="https:/www.youtube.com/results?search_query=curso+de+bash+script+desde+cero"
            >Buscar curso de bash script desde cero</Enlace>
        </Texto>
      </li>
    </ul>
    <h3 id="practica-general">4. Practica general</h3>
    <ul>
      <li>
        <Enlace href="./linux/bandit-resolucion.md">Ir a Practicar con bandit</Enlace>
      </li>
    </ul>

    <Linea />

    <Titulo title="h2" id="windows">3. Windows</Titulo>
    <Texto><strong>Duración aproximada (2h diarias):</strong> 1 mes.</Texto>
    <Texto>Todo acerca de windows, para el hacking:</Texto>
    <ol type="1">
      <li>
        <Texto><Enlace href="./windows/historia.md">Ir a Historia</Enlace></Texto>
      </li>
      <li>
        <Texto>
          <Enlace href="./windows/powershell-cmd.md"
            >Ir a Diferencia entre powershell y cmd</Enlace>
        </Texto>
      </li>
      <li>
        <Texto>
          <Enlace href="./windows/directorios.md">Ir a Directorios importantes</Enlace>
        </Texto>
      </li>
      <li>
        <Texto><Enlace href="./windows/comodines.md">Ir a Comodines</Enlace></Texto>
      </li>
      <li>
        <Texto>
          <Enlace href="./windows/navegacion.md"
            >Ir a Comandos y cmdlets de navegación</Enlace>
        </Texto>
      </li>
      <li>
        <Texto>
          <Enlace href="./windows/variables-entorno.md">Ir a variables de entorno</Enlace>
        </Texto>
      </li>
      <li>
        <Texto>
          <Enlace href="./windows/ayuda-soporte.md"
            >Ir a Comandos y cmdlets de ayuda y soporte</Enlace>
        </Texto>
      </li>
      <li>
        <Texto>
          <Enlace href="./windows/gestion-usuarios.md"
            >Ir a Comandos y cmdlets de gestión de usuarios</Enlace>
        </Texto>
      </li>
      <li>
        <Texto>
          <Enlace href="./windows/gestion-grupos.md"
            >Ir a Comandos y cmdlets de gestión de grupos</Enlace>
        </Texto>
      </li>
      <li>
        <Texto>
          <Enlace href="./windows/gestion-grupos.md"
            >Ir a Comandos y cmdlets de gestión de grupos</Enlace>
        </Texto>
      </li>
      <li>
        <Texto>
          <Enlace href="./windows/gestion-red.md"
            >Ir a Comandos y cmdlets de gestión de red</Enlace>
        </Texto>
      </li>
      <li>
        <Texto>
          <Enlace href="./windows/gestion-permisos.md"
            >Ir a Comandos y cmdlets de gestión de permisos</Enlace>
        </Texto>
      </li>
      <li>
        <Texto>
          <Enlace href="./windows/redirecciones-powershell.md"
            >Ir a Redirecciones en Powershell</Enlace>
        </Texto>
      </li>
      <li>
        <Texto>
          <Enlace href="./windows/alias-powershell.md">Ir a Alias en Powershell</Enlace>
        </Texto>
      </li>
    </ol>
    <Texto>Comandos y cmdlets de ayuda y soporte</Texto>
    <ul>
      <li>
        <Enlace href="./windows/ayuda-soporte.md">Ir a Comandos y cmdlets de ayuda y soporte</Enlace>
      </li>
    </ul>
    <Texto>O videos de YouTube:</Texto>
    <ul>
      <li>
        <Enlace href="https://www.youtube.com/watch?v=sZ-i7yRZEaI"
          >Ir a curso de Windows - Hixec (2h)</Enlace>
      </li>
    </ul>

    <Linea />

    <Titulo title="h2" id="redes">4. Redes</Titulo>
    <Texto><strong>Duración aproximada (2h diarias):</strong> 1 semana.</Texto>
    <Texto>
      Aprender sobre redes (no es indispensable aprender como funciona, la parte
      teórica te la puedes tomar con calma, lo realmente importante es saber
      usar las herramientas prácticas de Linux, la teoría te ayudara a entender
      mejor el funcionamiento de lo que usas):
    </Texto>
    <Texto>Archivos para leer de redes:</Texto>
    <ul>
      <li>
        <Texto>
          Parte Teórica (conceptos, y mucho más):
          <Enlace href="./redes/teoria.md">Ir a Teoría de Redes</Enlace>
        </Texto>
      </li>
      <li>
        <Texto>
          Parte Práctica (herramientas):
          <Enlace href="./redes/herramientas.md">Ir a Herramientas de Redes</Enlace>
        </Texto>
      </li>
      <li>
        <Texto>Subnetting: <Enlace href="./redes/subnetting.md">Ir a subnetting</Enlace></Texto>
      </li>
      <li>
        <Texto>
          Cidrs y Hosts: <Enlace href="./redes/cidrs-hosts.md">Ir a cidrs y hosts</Enlace>
        </Texto>
      </li>
    </ul>
    <Texto>Cursos videos de YouTube:</Texto>
    <ul>
      <li>
        <Texto>
          <Enlace href="https:/www.youtube.com/watch?v=OLSKCWjI778"
            >Ir curso de YouTube Contando bits - Redes Informáticas</Enlace>
        </Texto>
      </li>
      <li>
        <Texto>
          <Enlace href="https:/www.youtube.com/watch?v=7ejIdyu8hug"
            >Ir curso de YouTube Hixec - Redes para ciberseguridad</Enlace>
        </Texto>
      </li>
    </ul>

    <Linea />

    <Titulo title="h2" id="python">5. Python</Titulo>
    <Texto><strong>Duración aproximada (2h diarias):</strong> 1 mes.</Texto>
    <Texto>Notas:</Texto>
    <ul>
      <li>
        <Texto>
          <Enlace href="./python/todo-python.md">Ir a resumen de Python básico</Enlace>
        </Texto>
      </li>
      <li>
        <Texto>
          <Enlace href="./python/clases-python.md"
            >Ir a resumen de Clases en Python</Enlace>
        </Texto>
      </li>
      <li>
        <Texto>
          <Enlace href="./python/variables-clases.md"
            >Ir a variables privadas y protegidas (clases en Python)</Enlace>
        </Texto>
      </li>
      <li>
        <Texto>
          <Enlace href="./python/getter-setter.md"
            >Ir a Getters y Setters (clases en Python)</Enlace>
        </Texto>
      </li>
      <li>
        <Texto>
          <Enlace href="./python/classmethod.md"
            >Ir a decorador
            <span class="citation" data-cites="classmethod">@classmethod</span>
            (clases en Python)</Enlace>
        </Texto>
      </li>
      <li>
        <Texto>
          <Enlace href="./python/property.md"
            >Ir a decorador
            <span class="citation" data-cites="property">@property</span>
            (clases en Python)</Enlace>
        </Texto>
      </li>
    </ul>
    <Texto>Módulos y librerías resumen de cada uno:</Texto>
    <ul>
      <li>
        <Texto><Enlace href="./python/modulos/os.md">Ir a Os (automatizar)</Enlace></Texto>
      </li>
      <li>
        <Texto>
          <Enlace href="./python/modulos/subprocess.md"
            >Ir a Subprocess (automatizar)</Enlace>
        </Texto>
      </li>
      <li>
        <Texto>
          <Enlace href="./python/modulos/re.md">Ir a Re (uso avanzado de strings)</Enlace>
        </Texto>
      </li>
      <li>
        <Texto>
          <Enlace href="./python/modulos/sys.md"
            >Ir a Sys (funciones del intérprete al programa)</Enlace>
        </Texto>
      </li>
      <li>
        <Texto>
          <Enlace href="./python/modulos/sockets.md"
            >Ir a Sockets (manejo de redes)</Enlace>
        </Texto>
      </li>
      <li>
        <Texto>
          <Enlace href="./python/modulos/request.md"
            >Ir a request (crear peticiones, atrevés de red)</Enlace>
        </Texto>
      </li>
      <li>
        <Texto>
          <Enlace href="./python/modulos/threading.md"
            >Ir a Threading (manejo de hilos, procesos paralelos básicos)</Enlace>
        </Texto>
      </li>
      <li>
        <Texto>
          <Enlace href="./python/modulos/multiprocessing.md"
            >Ir a Multiprocessing (manejo de hilos, procesos paralelos
            avanzados)</Enlace>
        </Texto>
      </li>
      <li>
        <Texto>
          <Enlace href="./python/modulos/tkinter.md"
            >Ir a Tkinter (Crear interfaces graficas)</Enlace>
        </Texto>
      </li>
    </ul>
    <Texto>…</Texto>
    <Texto>Video de YouTube - python desde cero:</Texto>
    <ul>
      <li>
        <Enlace href="https://www.youtube.com/watch?v=nKPbfIU442g">Ir a curso de Python Básico Completo - YoSoyDalto (8h)</Enlace>
      </li>
    </ul>

    <Linea />

    <Titulo title="h2" id="pentesting">6. Pentesting</Titulo>
    <Texto>Temario:</Texto>
    <ol type="1">
      <li>
        <Texto>
          <Enlace href="./pentesting/fases.md"
            >Ir a Que es?, y fases del Pentesting</Enlace>
        </Texto>
      </li>
      <li>
        <Texto><Enlace href="./pentesting/cajas.md">Ir a Cajas en el Pentesting</Enlace></Texto>
      </li>
    </ol>
    <Texto>…</Texto>

    <Linea />
    
    <Titulo title="h2" id="osint">7. OSINT</Titulo>
    <Texto><strong>Temario:</strong></Texto>
    <ol type="1">
      <li>
        <Texto>
          Cosas básicas a tener en cuenta:
          <Enlace href="./osint/basic.md">Ir a OSINT básico</Enlace>
        </Texto>
      </li>
      <li>
        <Texto>
          Google Doorks:
          <Enlace href="./osint/googleDoorks.md">Ir a Google Doorks</Enlace>
        </Texto>
      </li>
    </ol>
    <Texto>…</Texto>

    <Linea />

    <Titulo title="h2" id="privacidad-y-anonimato">8. Privacidad y Anonimato</Titulo>
    <ol type="1">
      <li>
        <Texto>
          Definiciones y diferencias entre privacidad y anonimato:
          <Enlace href="./anonimato/definicion.md">Ir a definiciones</Enlace>
        </Texto>
      </li>
      <li>
        <Texto>
          Huella digital:
          <Enlace href="./anonimato/huella-digital.md">Ir a Huella Digital</Enlace>
        </Texto>
      </li>
      <li>
        <Texto>
          User Agent: <Enlace href="./anonimato/user-agent.md">Ir a user-agent</Enlace>
        </Texto>
      </li>
      <li>
        <Texto>
            Saber si están filtrados tus datos:
            <Enlace href="./anonimato/filtraciones.md">Ir a investigar</Enlace>
          </Texto>
        </li>
      </ol>
      <Texto>…</Texto>
      <Texto>
        Conceptos generales:
        <Enlace href="./anonimato/conceptos-generales.md">Ir a conceptos generales</Enlace>
      </Texto>

      <Linea />
      
      <Titulo title="h2" id="información">Información</Titulo>
      <Texto>
        Te agradecería mucho, que dieras una <strong>estrella (like)</strong> al
        Repositorio, no te cuesta nada y así apoyas al creador, del Repositorio
        estaría muy agradecido.
      </Texto>
     <Texto>Notas de cada actualización, y mucho más:</Texto>
      <Texto>
        <Enlace href="./otros/notas-actualizacion.md">Ir a notas de Actualización</Enlace>
      </Texto>
    </div>
  );
};

export default Readme;
