import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../../../componentes/organismos/estructura.jsx";
import Enlace from "../../../componentes/atomos/enlace.jsx";
import Linea from "../../../componentes/atomos/linea.jsx";
import Lista from "../../../componentes/moleculas/lista.jsx";
import Texto from "../../../componentes/atomos/texto.jsx";
import Titulo from "../../../componentes/moleculas/titulo.jsx";
import CodeBlock from "../../../componentes/moleculas/codigo.jsx";
function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#obtener-ayuda">Obtener ayuda</Enlace >
        <Lista>
          <li><Enlace href="#temario">Temario</Enlace ></li>
          <li><Enlace href="#primer-comando">Primer comando</Enlace ></li>
          <li><Enlace href="#ayuda-rápida---help-y--h">Ayuda rápida
            (--help y -h)</Enlace ></li>
          <li><Enlace href="#buscar-comandos-y-documentación-relacionada-apropos">Buscar
            comandos y documentación relacionada (apropos)</Enlace ></li>
          <li><Enlace href="#conclusión">Conclusión</Enlace ></li>
        </Lista>
      </li>

    </Lista>
  );
}

function nameabcd({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" className="text-center">Obtener ayuda</Titulo>

        <Texto>Tras haber establecido una base sólida sobre la estructura de Linux,
          sus diversas distribuciones y el propósito del <em>shell</em>, estamos
          listos para poner en práctica estos conocimientos. Es hora de
          profundizar en el uso de comandos directamente en la terminal y aprender
          a buscar ayuda cuando nos encontremos con comandos desconocidos.</Texto>
        <Texto>Siempre nos encontraremos con herramientas cuyos parámetros
          opcionales desconocemos de memoria o que nunca hemos visto. Por lo
          tanto, es vital saber cómo podemos familiarizarnos con ellas. Las dos
          primeras maneras son las páginas de manual y las funciones de ayuda.
          Siempre es buena idea familiarizarse primero con la herramienta que
          queremos probar. También aprenderemos algunos trucos con algunas
          herramientas que creíamos imposibles. En las páginas de manual
          encontraremos manuales detallados con explicaciones completas.</Texto>

        <Linea />

        <TemarioCompleto temario={Temario} />

        <Titulo title="h2" id="primer-comando">Primer comando</Titulo>
        <CodeBlock code={`fravelz@htb[/htb]$ ls
cacert.der  Documents  Music     Public     Videos
Desktop     Downloads  Pictures  Templates`} language="bash" />
        <Texto>El comando ls en sistemas Linux y Unix se utiliza para
          listar los archivos y directorios dentro de la carpeta actual o de
          cualquier directorio especificado, lo que permite ver su contenido y
          administrar los archivos de forma más eficaz. Como la mayoría de los
          comandos de Linux, ls incluye opciones y funciones
          adicionales que ayudan a filtrar o formatear la salida para mostrar
          exactamente lo que se desea. Para descubrir qué opciones ofrece una
          herramienta o comando, existen varias maneras de obtener ayuda. Una de
          ellas es usar el comando man, que muestra las páginas del
          manual de los comandos y proporciona información detallada sobre su
          uso.</Texto>
        <Texto><strong>Sintaxis:</strong></Texto>
        <CodeBlock code={`fravelz@htb[/htb]$ man`} language="bash" />
        <Texto>Veamos un ejemplo y obtengamos ayuda para el comando
          ls:
        </Texto>
        <Texto><strong>Ejemplo:</strong></Texto>
        <CodeBlock code={`fravelz@htb[/htb]$ man ls`} language="bash" />
        <CodeBlock code={`LS(1)                            User Commands                           LS(1)

NAME
ls - list directory contents

SYNOPSIS
ls [OPTION]... [FILE]...

DESCRIPTION
List  information  about  the FILEs (the current directory by default).
Sort entries alphabetically if none of -cftuvSUX nor --sort  is  speci‐
fied.

Mandatory  arguments  to  long  options are mandatory for short options
too.

-a, --all
do not ignore entries starting with .

-A, --almost-all
do not list implied . and ..

--author
Manual page ls(1) line 1 (press h for help or q to quit)`} language="bash" />
        <Texto>Tras ver algunos ejemplos, también podemos consultar rápidamente los
          parámetros opcionales sin tener que consultar toda la documentación.
          Disponemos de varias maneras de hacerlo.</Texto>
        <Linea />
        <Titulo title="h2" id="ayuda-rápida---help-y--h">Ayuda rápida (--help y
          -h)
        </Titulo>
        <Texto><strong>Sintaxis:</strong></Texto>
        <CodeBlock code={`# Obtener ayuda
fravelz@htb[/htb]$  --help`} language="bash" />
        <Texto><strong>Ejemplo:</strong></Texto>
        <CodeBlock code={`# Obtener ayuda
fravelz@htb[/htb]$ ls --help`} language="bash" />
        <CodeBlock code={`Usage: ls [OPTION]... [FILE]...
List information about the FILEs (the current directory by default).
Sort entries alphabetically if none of -cftuvSUX nor --sort is specified.

Mandatory arguments to long options are mandatory for short options too.
-a, --all                  do not ignore entries starting with .
-A, --almost-all           do not list implied . and ..
--author               with -l, print the author of each file
-b, --escape               print C-style escapes for nongraphic characters
--block-size=SIZE      with -l, scale sizes by SIZE when printing them;
e.g., '--block-size=M'; see SIZE format below

-B, --ignore-backups       do not list implied entries ending with ~
-c                         with -lt: sort by, and show, ctime (time of last
modification of file status information);
with -l: show ctime and sort by name;
otherwise: sort by ctime, newest first

-C                         list entries by columns`} language="bash" />
        <Texto>Algunas herramientas proporcionan una versión corta de ayuda usando
          -h en lugar de --help:
        </Texto>
        <Texto><strong>Sintaxis:</strong></Texto>
        <CodeBlock code={`# Obtener ayuda
fravelz@htb[/htb]$  -h`} language="bash" />
        <Texto><strong>Ejemplo:</strong></Texto>
        <CodeBlock code={`fravelz@htb[/htb]$ curl -h`} language="bash" />
        <CodeBlock code={`Usage: curl [options...]
--abstract-unix-socket  Connect via abstract Unix domain socket
--anyauth       Pick any authentication method
-a, --append        Append to target file when uploading
--basic         Use HTTP Basic Authentication
--cacert  CA certificate to verify peer against
--capath   CA directory to verify peer against
-E, --cert  Client certificate file and password`} language="bash" />
        <Texto>Como podemos ver, los resultados no difieren mucho en este ejemplo:
          man ofrece la documentación completa y
          --help/-h suele dar un resumen rápido y
          práctico.
        </Texto>
        <Linea />
        <Titulo title="h2" id="buscar-comandos-y-documentación-relacionada-apropos">Buscar
          comandos y documentación relacionada (apropos)</Titulo>
        <Texto>Otra herramienta útil al principio es apropos. Cada
          página del manual incluye una breve descripción. Esta herramienta busca
          en las descripciones instancias de una palabra clave determinada.</Texto>
        <Texto><strong>Sintaxis:</strong></Texto>
        <CodeBlock code={`# Obtener ayuda
fravelz@htb[/htb]$ apropos`} language="bash" />
        <Texto><strong>Ejemplo:</strong></Texto>
        <CodeBlock code={`# Obtener ayuda
fravelz@htb[/htb]$ apropos sudo`} language="bash" />
        <CodeBlock code={`sudo (8)             - execute a command as another user
sudo.conf (5)        - configuration for sudo front end
sudo_plugin (8)      - Sudo Plugin API
sudo_root (8)        - How to run administrative commands
sudoedit (8)         - execute a command as another user
sudoers (5)          - default sudo security policy plugin
sudoreplay (8)       - replay sudo session logs
visudo (8)           - edit the sudoers file`} language="bash" />
        <Texto>Otro recurso útil cuando tenemos problemas para entender un comando
          largo es: <Enlace href="https://explainshell.com/">https://explainshell.com/</Enlace ></Texto>
        <Linea />
        <Titulo title="h2" id="conclusión">Conclusión</Titulo>
        <Texto>A continuación cubriremos una gran cantidad de comandos, muchos de
          los cuales pueden ser nuevos para usted. Sin embargo, ahora sabe cómo
          buscar ayuda con cualquier comando que no conozca o con el que no esté
          seguro de sus opciones. Además, le animamos a explorar su curiosidad y a
          dedicar el tiempo que necesite para experimentar con las herramientas
          presentadas. Siempre será tiempo bien invertido.</Texto>
        <Texto><Enlace href="./../readme.md#2-linux-y-bash-script">Regresar a la guía
          principal</Enlace ></Texto>
        <Texto>
          <strong>Colaborador:</strong> <span className="citation" data-cites="studentethical">@studentethical</span> (Student
          Ethical)
        </Texto>
      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}
export default nameabcd;
