import Enlace from "../../../componentes/atomos/enlace.jsx";
import Estructura, { TemarioCompleto } from "../../../componentes/organismos/estructura.jsx";
import Linea from "../../../componentes/atomos/linea.jsx";
import Lista from "../../../componentes/moleculas/lista.jsx";
import Texto from "../../../componentes/atomos/texto.jsx";
import Titulo from "../../../componentes/moleculas/titulo.jsx";
import CodeBlock from "../../../componentes/moleculas/codigo.jsx";
function Temario({ className = "" }) {
  return (
    <Lista className={className}>
   </Lista>
  );
}

function nameabcd({ }) {
  return (
    <Estructura>
      <Titulo title="h1" id="comandos-de-gestión-de-búsqueda">Comandos de Gestión de
        Búsqueda</Titulo>
      <Linea />

      <TemarioCompleto temario={Temario}/>

      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><Enlace href="#comandos-de-gestión-de-búsqueda">Comandos de Gestión de
          Búsqueda</Enlace >
          <Lista>
            <li><Enlace href="#temario">Temario</Enlace ></li>
            <li><Enlace href="#1-buscar-archivos-y-directorios">1. Buscar archivos y
              directorios</Enlace >
              <Lista>
                <li><Enlace href="#find">find</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#2-buscar-texto-dentro-de-archivos">2. Buscar texto dentro
              de archivos</Enlace >
              <Lista>
                <li><Enlace href="#grep">grep</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#3-buscar-archivos-rápidamente">3. Buscar archivos
              rápidamente</Enlace >
              <Lista>
                <li><Enlace href="#locate">locate</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#4-buscar-comandos-o-ejecutables">4. Buscar comandos o
              ejecutables</Enlace >
              <Lista>
                <li><Enlace href="#which-whereis-type">which,
                  whereis, type</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#5-buscar-en-el-historial-o-procesos">5. Buscar en el
              historial o procesos</Enlace >
              <Lista>
                <li><Enlace href="#buscar-en-historial">Buscar en historial</Enlace ></li>
                <li><Enlace href="#buscar-procesos-en-ejecución">Buscar procesos en
                  ejecución</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#6-buscar-dentro-de-archivos-comprimidos-o-binarios">6.
              Buscar dentro de archivos comprimidos o binarios</Enlace ></li>
          </Lista>
        </li>
      </Lista>
      <Texto><Enlace href="./../readme.md#2-linux-y-bash-script">Regresar a la guía
        principal</Enlace ></Texto>
      <Linea />
      <Titulo title="h2" id="buscar-archivos-y-directorios">1. Buscar archivos y
        directorios</Titulo>
      <Titulo title="h3" id="find">find</Titulo>
      <Texto>Busca archivos y carpetas según nombre, tipo, tamaño, fecha, etc.</Texto>
      <CodeBlock
        code={`# Buscar por nombre (en todo el sistema)
find / -name "archivo.txt"

# Buscar sin importar mayúsculas/minúsculas
find /home -iname "foto.png"

# Buscar solo directorios
find /home -type d -name "Documentos"

# Buscar archivos mayores de 10 MB
find / -type f -size +10M

# Ejecutar un comando sobre los resultados
find /tmp -name "*.log" -exec rm {} \;`}
        language="bash"
      />
      <Linea />
      <Titulo title="h2" id="buscar-texto-dentro-de-archivos">2. Buscar texto dentro de
        archivos</Titulo>
      <Titulo title="h3" id="grep">grep</Titulo>
      <Texto>Busca texto dentro del contenido de archivos.</Texto>
        <CodeBlock
          code={`# Buscar una palabra en un archivo
grep "error" archivo.log

# Buscar en todos los archivos de una carpeta
grep "main" *.cpp

# Buscar recursivamente (en subcarpetas)
grep -r "usuario" /etc/

# Mostrar el número de línea
grep -n "config" settings.conf

# Ignorar mayúsculas/minúsculas
grep -i "Warning" archivo.log

# Mostrar solo el nombre del archivo donde se encuentra
grep -l "root" /etc/*`}
          language="bash"
        />
      <blockquote>
        <Texto>Tip: Usa grep -rni "palabra" . para buscar en todo el
          directorio actual con número de línea y sin distinguir
          mayúsculas/minúsculas.</Texto>
      </blockquote>
      <Linea />
      <Titulo title="h2" id="buscar-archivos-rápidamente">3. Buscar archivos rápidamente</Titulo>
      <Titulo title="h3" id="locate">locate</Titulo>
      <Texto>Usa una base de datos indexada (más rápido que
        find).
      </Texto>
      <CodeBlock
        code={`# Buscar archivos por nombre
locate archivo.txt

# Buscar archivos que contengan una palabra
locate config

# Actualizar la base de datos de locate
sudo updatedb`}
        language="bash"
      />
      <Linea />
      <Titulo title="h2" id="buscar-comandos-o-ejecutables">4. Buscar comandos o
        ejecutables</Titulo>
      <Titulo title="h3" id="which-whereis-type">which, whereis,
        type
      </Titulo>
      <Texto>Sirven para ubicar programas instalados o saber cómo se ejecutan.</Texto>
      <CodeBlock
        code={`# Ver ruta del ejecutable de un comando
which python3

# Mostrar archivos binarios, man pages, etc.
whereis bash

# Mostrar tipo de comando
type ls`}
        language="bash"
      />
      <Linea />
      <Titulo title="h2" id="buscar-en-el-historial-o-procesos">5. Buscar en el historial o
        procesos</Titulo>
      <Titulo title="h3" id="buscar-en-historial">Buscar en historial</Titulo>
      <CodeBlock
        code={`# Buscar un comando usado anteriormente
history | grep "ssh"`}
        language="bash"
      />
      <Titulo title="h3" id="buscar-procesos-en-ejecución">Buscar procesos en ejecución</Titulo>
      <CodeBlock code={`ps aux | grep firefox`} language="bash" />
      <Linea />
      <Titulo title="h2" id="buscar-dentro-de-archivos-comprimidos-o-binarios">6. Buscar
        dentro de archivos comprimidos o binarios</Titulo>
      <CodeBlock
        code={`# Buscar dentro de un .tar.gz
tar -tzf archivo.tar.gz | grep "config"

# Buscar dentro de un binario (si tiene texto legible)
strings archivo.bin | grep "password"`}
        language="bash"
      />
    </Estructura>
  );
}

export default nameabcd;
