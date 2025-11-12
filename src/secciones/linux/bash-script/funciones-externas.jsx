import Enlace from "../../../componentes/atomos/enlace.jsx";
import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../../../componentes/organismos/estructura.jsx";
import Linea from "../../../componentes/atomos/linea.jsx";
import Lista from "../../../componentes/moleculas/lista.jsx";
import Texto from "./../../../componentes/atomos/texto.jsx";
import Titulo from "../../../componentes/moleculas/titulo.jsx";
import CodeBlock from "../../../componentes/moleculas/codigo.jsx";
function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#1-manejo-de-texto">1. <strong>Manejo de texto</strong></Enlace ></li>
      <li><Enlace href="#2-búsqueda-y-filtrado">2. <strong>Búsqueda y filtrado</strong></Enlace ></li>
      <li><Enlace href="#3-transformación-de-texto">3. <strong>Transformación de texto</strong></Enlace ></li>
      <li><Enlace href="#4-procesos-y-sistema">4. <strong>Procesos y sistema</strong></Enlace ></li>
      <li><Enlace href="#5-archivos-y-directorios">5. <strong>Archivos y directorios</strong></Enlace ></li>
      <li><Enlace href="#6-compresión-y-empaquetado">6. <strong>Compresión y empaquetado</strong></Enlace ></li>
      <li><Enlace href="#7-red-y-comunicación">7. <strong>Red y comunicación</strong></Enlace ></li>
      <li><Enlace href="#8-otros-útiles">8. <strong>Otros útiles</strong></Enlace ></li>
    </Lista>
  );
}

function nameabcd({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" id="herramientas-externas-en-bash">Herramientas externas en
          Bash</Titulo>
        <Texto>Todo lo que se usa para comandos bash se puede usar para comandos de
          la terminal, también y a la viceversa.</Texto>

        <Linea />

        <TemarioCompleto temario={Temario} />

        <Titulo title="h2" id="manejo-de-texto">1. <strong>Manejo de texto</strong></Titulo>

        <Lista>
          <li><strong>cat</strong>: Muestra el contenido de
            archivos.
            <CodeBlock code={`cat archivo.txt`} language="bash" />
          </li>
          <li>
            <strong>less / more</strong>: Permiten
            ver un archivo por páginas.
            <CodeBlock code={`less archivo.txt`} language="bash" />
          </li>
          <li>
            <strong>head</strong>: Muestra las primeras N
            líneas.
            <CodeBlock code={`head -n 5 archivo.txt`} language="bash" />
          </li>
          <li>
            <strong>tail</strong>: Muestra las últimas N líneas,
            o sigue cambios en tiempo real.
            <CodeBlock code={`tail -f log.txt`} language="bash" />
          </li>
          <li>
            <strong>wc</strong>: Cuenta líneas, palabras y
            caracteres.
            <CodeBlock code={`wc -l archivo.txt   # número de líneas
wc -w archivo.txt   # número de palabras`} language="bash" />
          </li>
        </Lista>

        <Linea />

        <Titulo title="h2" id="búsqueda-y-filtrado">2. <strong>Búsqueda y filtrado</strong></Titulo>

        <Lista>
          <li>
            <strong>grep</strong>: Busca patrones de texto.
            <CodeBlock code={`grep "error" log.txt`} language="bash" />
          </li>
          <li>
            <strong>egrep</strong>: Igual que grep
            pero con expresiones regulares extendidas.</li>    <li><strong>fgrep</strong>: Busca texto literal, sin
              interpretar regex.</li>    <li><strong>find</strong>: Busca archivos en el
                sistema.
            <CodeBlock code={`find /home -name "*.txt"`} language="bash" />
          </li>
          <li>
            <strong>locate</strong>: Búsqueda rápida en una base
            de datos actualizada con updatedb.</li>
        </Lista>

        <Linea />

        <Titulo title="h2" id="transformación-de-texto">3. <strong>Transformación de texto</strong></Titulo>

        <Lista>
          <li><strong>cut</strong>: Extrae columnas de texto.
            <CodeBlock code={`cut -d',' -f1 nombres.csv`} language="bash" />
          </li>
          <li>
            <strong>sort</strong>: Ordena líneas.
            <CodeBlock code={`sort lista.txt`} language="bash" />
          </li>
          <li>
            <strong>uniq</strong>: Elimina duplicados (requiere
            que el archivo esté ordenado).
            <CodeBlock code={`sort lista.txt | uniq`} language="bash" />
          </li>
          <li>
            <strong>tr</strong>: Reemplaza o elimina
            caracteres.
            <CodeBlock code={`echo "hola" | tr a-z A-Z   # convierte a mayúsculas`} language="bash" />
          </li>
          <li>
            <strong>sed</strong>: Editor de texto en flujo
            (reemplazo, borrado, inserción).
            <CodeBlock code={`sed 's/error/ERROR/g' log.txt`} language="bash" />
          </li>
          <li>
            <strong>awk</strong>: Procesador de texto por
            columnas, muy útil en reportes.
            <CodeBlock code={`awk '{"{print $1,$3}"}' archivo.txt`} language="bash" />
          </li>
        </Lista >

        <Linea />

        <Titulo title="h2" id="procesos-y-sistema">4. <strong>Procesos y sistema</strong></Titulo>

        <Lista>
          <li>
            <strong>ps</strong>: Lista procesos.
            <CodeBlock code={`ps aux | grep firefox`} language="bash" />
          </li>

          <li>
            <strong>top / htop</strong>: Monitor de
            procesos en tiempo real.</li>

            <li><strong>kill</strong>: Termina un proceso.</li>

            <CodeBlock code={`kill -9 1234`} language="bash" />

            <li>
              <strong>jobs, bg,
                fg</strong>: Control de trabajos en Bash.</li>
        </Lista>
        <Linea />

        <Titulo title="h2" id="archivos-y-directorios">5. <strong>Archivos y
          directorios</strong></Titulo>

        <Lista>
          <li><strong>ls</strong>: Lista archivos.</li>    <li><strong>cp</strong>: Copia.</li>    <li><strong>mv</strong>: Mueve/renombra.</li>    <li><strong>rm</strong>: Elimina.</li>    <li><strong>file</strong>: Muestra el tipo de un
            archivo.
            <CodeBlock code={`file imagen.png`} language="bash" />
          </li>
          <li>
            <strong>stat</strong>: Muestra metadatos del
            archivo.</li>  </Lista>
        <Linea />
        <Titulo title="h2" id="compresión-y-empaquetado">6. <strong>Compresión y
          empaquetado</strong></Titulo>
        <Lista>
          <li><strong>tar</strong>: Empaqueta múltiples
            archivos.
            <CodeBlock code={`tar -cvf backup.tar directorio/`} language="bash" />
          </li>
          <li>
            <strong>gzip / gunzip</strong>:
            Comprime y descomprime.</li>    <li><strong>zip / unzip</strong>: Comprime
              y descomprime en formato ZIP.</li>  </Lista >
        <Linea />
        <Titulo title="h2" id="red-y-comunicación">7. <strong>Red y comunicación</strong></Titulo>
        <Lista>
          <li><strong>ping</strong>: Verifica
            conectividad.</li>    <li><strong>curl</strong>: Descarga o envía datos por
              HTTP.
            <CodeBlock code={`curl https://ejemplo.com`} language="bash" />
          </li>
          <li>
            <strong>wget</strong>: Descarga archivos.</li>    <li><strong>ssh</strong>: Conexión remota
              segura.</li>    <li><strong>scp</strong>: Copiar archivos entre equipos
                vía SSH.</li>    <li><strong>netstat / ss</strong>:
                  Información de puertos y conexiones.</li>  </Lista >

        <Linea />

        <Titulo title="h2" id="otros-útiles">8. <strong>Otros útiles</strong></Titulo>

        <Lista>
          <li><strong>date</strong>: Fecha y hora.</li>    <li>
            <strong>bc</strong>: Calculadora de precisión
              arbitraria.
            <CodeBlock code={`echo "2+3*5" | bc`} language="bash" />
          </li>
          <li>
            <strong>xargs</strong>: Construye comandos a partir
              de entradas.
            <CodeBlock code={`cat lista.txt | xargs rm`} language="bash" />
          </li>
        </Lista>

        <Linea />

        <Texto><strong>Idea clave</strong>:</Texto>

        <Texto>Bash es más poderoso <strong>cuando combinas estas
          herramientas</strong> usando <strong>pipes (|)</strong> y
          redirecciones (&gt;, &lt;,
          &gt;&gt;). Ejemplo: buscar errores en un log, contarlos y
          guardarlos:
        </Texto>
        <CodeBlock code={`grep "ERROR" log.txt | wc -l > total_errores.txt`} language="bash" />
    </Estructura >

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}

export default nameabcd;
