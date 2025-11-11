import Enlace from "./../../../componentes/enlace.jsx";
import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "./../../../componentes/estructura.jsx";
import Linea from "./../../../componentes/linea.jsx";
import Lista from "./../../../componentes/lista.jsx";
import Texto from "./../../../componentes/texto.jsx";
import Titulo from "./../../../componentes/titulo.jsx";
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
          <li><strong><code>cat</code></strong>: Muestra el contenido de
            archivos.
            <div className="sourceCode" id="cb1">
              <pre
                className="sourceCode bash"><code className="sourceCode bash"><span id="cb1-1"><Enlace href="#cb1-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">cat</span> archivo.txt</span></code></pre>
            </div>
          </li>
          <li>
            <strong><code>less</code> / <code>more</code></strong>: Permiten
            ver un archivo por páginas.
            <div className="sourceCode" id="cb2">
              <pre
                className="sourceCode bash"><code className="sourceCode bash"><span id="cb2-1"><Enlace href="#cb2-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">less</span> archivo.txt</span></code></pre>
            </div>
          </li>
          <li>
            <strong><code>head</code></strong>: Muestra las primeras N
            líneas.
            <div className="sourceCode" id="cb3">
              <pre
                className="sourceCode bash"><code className="sourceCode bash"><span id="cb3-1"><Enlace href="#cb3-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">head</span> <span className="at">-n</span> 5 archivo.txt</span></code></pre>
            </div>
          </li>
          <li>
            <strong><code>tail</code></strong>: Muestra las últimas N líneas,
            o sigue cambios en tiempo real.
            <div className="sourceCode" id="cb4">
              <pre
                className="sourceCode bash"><code className="sourceCode bash"><span id="cb4-1"><Enlace href="#cb4-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">tail</span> <span className="at">-f</span> log.txt</span></code></pre>
            </div>
          </li>
          <li>
            <strong><code>wc</code></strong>: Cuenta líneas, palabras y
            caracteres.
            <div className="sourceCode" id="cb5">
              <pre
                className="sourceCode bash"><code className="sourceCode bash"><span id="cb5-1"><Enlace href="#cb5-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">wc</span> <span className="at">-l</span> archivo.txt   <span className="co"># número de líneas</span></span>
                  <span id="cb5-2"><Enlace href="#cb5-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">wc</span> <span className="at">-w</span> archivo.txt   <span className="co"># número de palabras</span></span></code></pre>
            </div>
          </li>
        </Lista>

        <Linea />

        <Titulo title="h2" id="búsqueda-y-filtrado">2. <strong>Búsqueda y filtrado</strong></Titulo>

        <Lista>
          <li>
            <strong><code>grep</code></strong>: Busca patrones de texto.
            <div className="sourceCode" id="cb6">
              <pre
                className="sourceCode bash"><code className="sourceCode bash"><span id="cb6-1"><Enlace href="#cb6-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">grep</span> <span className="st">&quot;error&quot;</span> log.txt</span></code></pre>
            </div>
          </li>
          <li>
            <strong><code>egrep</code></strong>: Igual que <code>grep</code>
            pero con expresiones regulares extendidas.</li>    <li><strong><code>fgrep</code></strong>: Busca texto literal, sin
              interpretar regex.</li>    <li><strong><code>find</code></strong>: Busca archivos en el
                sistema.
            <div className="sourceCode" id="cb7">
              <pre
                className="sourceCode bash"><code className="sourceCode bash"><span id="cb7-1"><Enlace href="#cb7-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">find</span> /home <span className="at">-name</span> <span className="st">&quot;*.txt&quot;</span></span></code></pre>
            </div>
          </li>
          <li>
            <strong><code>locate</code></strong>: Búsqueda rápida en una base
            de datos actualizada con <code>updatedb</code>.</li>
        </Lista>

        <Linea />

        <Titulo title="h2" id="transformación-de-texto">3. <strong>Transformación de texto</strong></Titulo>

        <Lista>
          <li><strong><code>cut</code></strong>: Extrae columnas de texto.
            <div className="sourceCode" id="cb8">
              <pre
                className="sourceCode bash"><code className="sourceCode bash"><span id="cb8-1"><Enlace href="#cb8-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">cut</span> <span className="at">-d</span><span className="st">&#39;,&#39;</span> <span className="at">-f1</span> nombres.csv</span></code></pre>
            </div>
          </li>
          <li>
            <strong><code>sort</code></strong>: Ordena líneas.
            <div className="sourceCode" id="cb9">
              <pre
                className="sourceCode bash"><code className="sourceCode bash"><span id="cb9-1"><Enlace href="#cb9-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">sort</span> lista.txt</span></code></pre>
            </div>
          </li>
          <li>
            <strong><code>uniq</code></strong>: Elimina duplicados (requiere
            que el archivo esté ordenado).
            <div className="sourceCode" id="cb10">
              <pre
                className="sourceCode bash"><code className="sourceCode bash"><span id="cb10-1"><Enlace href="#cb10-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">sort</span> lista.txt <span className="kw">|</span> <span className="fu">uniq</span></span></code></pre>
            </div>
          </li>
          <li>
            <strong><code>tr</code></strong>: Reemplaza o elimina
            caracteres.
            <div className="sourceCode" id="cb11">
              <pre
                className="sourceCode bash"><code className="sourceCode bash"><span id="cb11-1"><Enlace href="#cb11-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">echo</span> <span className="st">&quot;hola&quot;</span> <span className="kw">|</span> <span className="fu">tr</span> a-z A-Z   <span className="co"># convierte a mayúsculas</span></span></code></pre>
            </div>
          </li>
          <li>
            <strong><code>sed</code></strong>: Editor de texto en flujo
            (reemplazo, borrado, inserción).
            <div className="sourceCode" id="cb12">
              <pre
                className="sourceCode bash"><code className="sourceCode bash"><span id="cb12-1"><Enlace href="#cb12-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">sed</span> <span className="st">&#39;s/error/ERROR/g&#39;</span> log.txt</span></code></pre>
            </div>
          </li>
          <li>
            <strong><code>awk</code></strong>: Procesador de texto por
            columnas, muy útil en reportes.
            <div className="sourceCode" id="cb13">
              <pre
                className="sourceCode bash"><code className="sourceCode bash"><span id="cb13-1"><Enlace href="#cb13-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">awk</span> <span className="st">&#39;{"{print $1,$3}"}&#39;</span> archivo.txt</span></code></pre>
            </div>
          </li>
        </Lista >

        <Linea />

        <Titulo title="h2" id="procesos-y-sistema">4. <strong>Procesos y sistema</strong></Titulo>

        <Lista>
          <li>
            <strong><code>ps</code></strong>: Lista procesos.
            <div className="sourceCode" id="cb14">
              <pre
                className="sourceCode bash"><code className="sourceCode bash"><span id="cb14-1"><Enlace href="#cb14-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">ps</span> aux <span className="kw">|</span> <span className="fu">grep</span> firefox</span></code></pre>
            </div>
          </li>

          <li>
            <strong><code>top</code> / <code>htop</code></strong>: Monitor de
            procesos en tiempo real.</li>

            <li><strong><code>kill</code></strong>: Termina un proceso.</li>

            <div className="sourceCode" id="cb15">
              <pre
                className="sourceCode bash"><code className="sourceCode bash"><span id="cb15-1"><Enlace href="#cb15-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">kill</span> <span className="at">-9</span> 1234</span></code></pre>
            </div>

            <li>
              <strong><code>jobs</code>, <code>bg</code>,
                <code>fg</code></strong>: Control de trabajos en Bash.</li>
        </Lista>
        <Linea />

        <Titulo title="h2" id="archivos-y-directorios">5. <strong>Archivos y
          directorios</strong></Titulo>

        <Lista>
          <li><strong><code>ls</code></strong>: Lista archivos.</li>    <li><strong><code>cp</code></strong>: Copia.</li>    <li><strong><code>mv</code></strong>: Mueve/renombra.</li>    <li><strong><code>rm</code></strong>: Elimina.</li>    <li><strong><code>file</code></strong>: Muestra el tipo de un
            archivo.
            <div className="sourceCode" id="cb16">
              <pre
                className="sourceCode bash"><code className="sourceCode bash"><span id="cb16-1"><Enlace href="#cb16-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">file</span> imagen.png</span></code></pre>
            </div>
          </li>
          <li>
            <strong><code>stat</code></strong>: Muestra metadatos del
            archivo.</li>  </Lista>
        <Linea />
        <Titulo title="h2" id="compresión-y-empaquetado">6. <strong>Compresión y
          empaquetado</strong></Titulo>
        <Lista>
          <li><strong><code>tar</code></strong>: Empaqueta múltiples
            archivos.
            <div className="sourceCode" id="cb17">
              <pre
                className="sourceCode bash"><code className="sourceCode bash"><span id="cb17-1"><Enlace href="#cb17-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">tar</span> <span className="at">-cvf</span> backup.tar directorio/</span></code></pre>
            </div>
          </li>
          <li>
            <strong><code>gzip</code> / <code>gunzip</code></strong>:
            Comprime y descomprime.</li>    <li><strong><code>zip</code> / <code>unzip</code></strong>: Comprime
              y descomprime en formato ZIP.</li>  </Lista >
        <Linea />
        <Titulo title="h2" id="red-y-comunicación">7. <strong>Red y comunicación</strong></Titulo>
        <Lista>
          <li><strong><code>ping</code></strong>: Verifica
            conectividad.</li>    <li><strong><code>curl</code></strong>: Descarga o envía datos por
              HTTP.
            <div className="sourceCode" id="cb18">
              <pre
                className="sourceCode bash"><code className="sourceCode bash"><span id="cb18-1"><Enlace href="#cb18-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">curl</span> https://ejemplo.com</span></code></pre>
            </div>
          </li>
          <li>
            <strong><code>wget</code></strong>: Descarga archivos.</li>    <li><strong><code>ssh</code></strong>: Conexión remota
              segura.</li>    <li><strong><code>scp</code></strong>: Copiar archivos entre equipos
                vía SSH.</li>    <li><strong><code>netstat</code> / <code>ss</code></strong>:
                  Información de puertos y conexiones.</li>  </Lista >

        <Linea />

        <Titulo title="h2" id="otros-útiles">8. <strong>Otros útiles</strong></Titulo>

        <Lista>
          <li><strong><code>date</code></strong>: Fecha y hora.</li>    <li>
            <strong><code>bc</code></strong>: Calculadora de precisión
              arbitraria.
            <div className="sourceCode" id="cb19">
              <pre
                className="sourceCode bash"><code className="sourceCode bash"><span id="cb19-1"><Enlace href="#cb19-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">echo</span> <span className="st">&quot;2+3*5&quot;</span> <span className="kw">|</span> <span className="fu">bc</span></span></code></pre>
            </div>
          </li>
          <li>
            <strong><code>xargs</code></strong>: Construye comandos a partir
              de entradas.
            <div className="sourceCode" id="cb20">
              <pre
                className="sourceCode bash"><code className="sourceCode bash"><span id="cb20-1"><Enlace href="#cb20-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">cat</span> lista.txt <span className="kw">|</span> <span className="fu">xargs</span> rm</span></code></pre>
            </div>
          </li>
        </Lista>

        <Linea />

        <Texto><strong>Idea clave</strong>:</Texto>

        <Texto>Bash es más poderoso <strong>cuando combinas estas
          herramientas</strong> usando <strong>pipes (<code>|</code>)</strong> y
          redirecciones (<code>&gt;</code>, <code>&lt;</code>,
          <code>&gt;&gt;</code>). Ejemplo: buscar errores en un log, contarlos y
          guardarlos:
        </Texto>
        <div className="sourceCode" id="cb21">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb21-1"><Enlace href="#cb21-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">grep</span> <span className="st">&quot;ERROR&quot;</span> log.txt <span className="kw">|</span> <span className="fu">wc</span> <span className="at">-l</span> <span className="op">&gt;</span> total_errores.txt</span></code></pre>
        </div>
    </Estructura >

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}

export default nameabcd;
