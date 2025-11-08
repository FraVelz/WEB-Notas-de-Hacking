import Titulo from "./../../componentes/titulo.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Linea from "./../../componentes/linea.jsx";

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="herramientas-externas-en-bash">Herramientas externas en
        Bash</Titulo>
      <Texto>Todo lo que se usa para comandos bash se puede usar para comandos de
        la terminal, también y a la viceversa.</Texto>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><a href="#herramientas-externas-en-bash">Herramientas externas en
          Bash</a>
          <Lista>
            <li><a href="#temario">Temario</a></li>
            <li><a href="#1-manejo-de-texto">1. <strong>Manejo de
              texto</strong></a></li>
            <li><a href="#2-búsqueda-y-filtrado">2. <strong>Búsqueda y
              filtrado</strong></a></li>
            <li><a href="#3-transformación-de-texto">3. <strong>Transformación de
              texto</strong></a></li>
            <li><a href="#4-procesos-y-sistema">4. <strong>Procesos y
              sistema</strong></a></li>
            <li><a href="#5-archivos-y-directorios">5. <strong>Archivos y
              directorios</strong></a></li>
            <li><a href="#6-compresión-y-empaquetado">6. <strong>Compresión y
              empaquetado</strong></a></li>
            <li><a href="#7-red-y-comunicación">7. <strong>Red y
              comunicación</strong></a></li>
            <li><a href="#8-otros-útiles">8. <strong>Otros útiles</strong></a></li>
          </Lista>
        </li>
      </Lista>
      <Texto><a href="./../readme.md#2-linux-y-bash-script">Regresar a la guía
        principal</a></Texto>
      <Linea />
      <Titulo title="h2" id="manejo-de-texto">1. <strong>Manejo de texto</strong></Titulo>
      <Lista>
        <li><strong><code>cat</code></strong>: Muestra el contenido de
          archivos.</Texto>
        <div class="sourceCode" id="cb1">
          <pre
            class="sourceCode bash"><code class="sourceCode bash"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="fu">cat</span> archivo.txt</span></code></pre>
        </div>
      </li>
      <li>
        <Texto><strong><code>less</code> / <code>more</code></strong>: Permiten
          ver un archivo por páginas.</Texto>
        <div class="sourceCode" id="cb2">
          <pre
            class="sourceCode bash"><code class="sourceCode bash"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="fu">less</span> archivo.txt</span></code></pre>
        </div>
      </li>
      <li>
        <Texto><strong><code>head</code></strong>: Muestra las primeras N
          líneas.</Texto>
        <div class="sourceCode" id="cb3">
          <pre
            class="sourceCode bash"><code class="sourceCode bash"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a><span class="fu">head</span> <span class="at">-n</span> 5 archivo.txt</span></code></pre>
        </div>
      </li>
      <li>
        <Texto><strong><code>tail</code></strong>: Muestra las últimas N líneas,
          o sigue cambios en tiempo real.</Texto>
        <div class="sourceCode" id="cb4">
          <pre
            class="sourceCode bash"><code class="sourceCode bash"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a><span class="fu">tail</span> <span class="at">-f</span> log.txt</span></code></pre>
        </div>
      </li>
      <li>
        <Texto><strong><code>wc</code></strong>: Cuenta líneas, palabras y
          caracteres.</Texto>
        <div class="sourceCode" id="cb5">
          <pre
            class="sourceCode bash"><code class="sourceCode bash"><span id="cb5-1"><a href="#cb5-1" aria-hidden="true" tabindex="-1"></a><span class="fu">wc</span> <span class="at">-l</span> archivo.txt   <span class="co"># número de líneas</span></span>
              <span id="cb5-2"><a href="#cb5-2" aria-hidden="true" tabindex="-1"></a><span class="fu">wc</span> <span class="at">-w</span> archivo.txt   <span class="co"># número de palabras</span></span></code></pre>
        </div>
      </li>
    </Lista >
  <Linea />
  <Titulo title="h2" id="búsqueda-y-filtrado">2. <strong>Búsqueda y
      filtrado</strong></Titulo>
  <Lista>
    <li>
      <Texto><strong><code>grep</code></strong>: Busca patrones de texto.</Texto>
      <div class="sourceCode" id="cb6">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a><span class="fu">grep</span> <span class="st">&quot;error&quot;</span> log.txt</span></code></pre>
      </div>
    </li>
    <li>
      <Texto><strong><code>egrep</code></strong>: Igual que <code>grep</code>
        pero con expresiones regulares extendidas.</li>    <li><strong><code>fgrep</code></strong>: Busca texto literal, sin
        interpretar regex.</li>    <li><strong><code>find</code></strong>: Busca archivos en el
        sistema.</Texto>
      <div class="sourceCode" id="cb7">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb7-1"><a href="#cb7-1" aria-hidden="true" tabindex="-1"></a><span class="fu">find</span> /home <span class="at">-name</span> <span class="st">&quot;*.txt&quot;</span></span></code></pre>
      </div>
    </li>
    <li>
      <Texto><strong><code>locate</code></strong>: Búsqueda rápida en una base
        de datos actualizada con <code>updatedb</code>.</li>  </Lista >
  <Linea />
  <Titulo title="h2" id="transformación-de-texto">3. <strong>Transformación de
      texto</strong></Titulo>
  <Lista>
    <li><strong><code>cut</code></strong>: Extrae columnas de texto.</Texto>
      <div class="sourceCode" id="cb8">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb8-1"><a href="#cb8-1" aria-hidden="true" tabindex="-1"></a><span class="fu">cut</span> <span class="at">-d</span><span class="st">&#39;,&#39;</span> <span class="at">-f1</span> nombres.csv</span></code></pre>
      </div>
    </li>
    <li>
      <Texto><strong><code>sort</code></strong>: Ordena líneas.</Texto>
      <div class="sourceCode" id="cb9">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb9-1"><a href="#cb9-1" aria-hidden="true" tabindex="-1"></a><span class="fu">sort</span> lista.txt</span></code></pre>
      </div>
    </li>
    <li>
      <Texto><strong><code>uniq</code></strong>: Elimina duplicados (requiere
        que el archivo esté ordenado).</Texto>
      <div class="sourceCode" id="cb10">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb10-1"><a href="#cb10-1" aria-hidden="true" tabindex="-1"></a><span class="fu">sort</span> lista.txt <span class="kw">|</span> <span class="fu">uniq</span></span></code></pre>
      </div>
    </li>
    <li>
      <Texto><strong><code>tr</code></strong>: Reemplaza o elimina
        caracteres.</Texto>
      <div class="sourceCode" id="cb11">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb11-1"><a href="#cb11-1" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;hola&quot;</span> <span class="kw">|</span> <span class="fu">tr</span> a-z A-Z   <span class="co"># convierte a mayúsculas</span></span></code></pre>
      </div>
    </li>
    <li>
      <Texto><strong><code>sed</code></strong>: Editor de texto en flujo
        (reemplazo, borrado, inserción).</Texto>
      <div class="sourceCode" id="cb12">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb12-1"><a href="#cb12-1" aria-hidden="true" tabindex="-1"></a><span class="fu">sed</span> <span class="st">&#39;s/error/ERROR/g&#39;</span> log.txt</span></code></pre>
      </div>
    </li>
    <li>
      <Texto><strong><code>awk</code></strong>: Procesador de texto por
        columnas, muy útil en reportes.</Texto>
      <div class="sourceCode" id="cb13">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb13-1"><a href="#cb13-1" aria-hidden="true" tabindex="-1"></a><span class="fu">awk</span> <span class="st">&#39;{print $1,$3}&#39;</span> archivo.txt</span></code></pre>
      </div>
    </li>
  </Lista >
  <Linea />
  <Titulo title="h2" id="procesos-y-sistema">4. <strong>Procesos y sistema</strong></Titulo>
  <Lista>
    <li>
      <Texto><strong><code>ps</code></strong>: Lista procesos.</Texto>
      <div class="sourceCode" id="cb14">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb14-1"><a href="#cb14-1" aria-hidden="true" tabindex="-1"></a><span class="fu">ps</span> aux <span class="kw">|</span> <span class="fu">grep</span> firefox</span></code></pre>
      </div>
    </li>
    <li>
      <Texto><strong><code>top</code> / <code>htop</code></strong>: Monitor de
        procesos en tiempo real.</li>    <li><strong><code>kill</code></strong>: Termina un proceso.</Texto>
      <div class="sourceCode" id="cb15">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb15-1"><a href="#cb15-1" aria-hidden="true" tabindex="-1"></a><span class="bu">kill</span> <span class="at">-9</span> 1234</span></code></pre>
      </div>
    </li>
    <li>
      <Texto><strong><code>jobs</code>, <code>bg</code>,
          <code>fg</code></strong>: Control de trabajos en Bash.</li>  </Lista >
  <Linea />
  <Titulo title="h2" id="archivos-y-directorios">5. <strong>Archivos y
      directorios</strong></Titulo>
  <Lista>
    <li><strong><code>ls</code></strong>: Lista archivos.</li>    <li><strong><code>cp</code></strong>: Copia.</li>    <li><strong><code>mv</code></strong>: Mueve/renombra.</li>    <li><strong><code>rm</code></strong>: Elimina.</li>    <li><strong><code>file</code></strong>: Muestra el tipo de un
        archivo.</Texto>
      <div class="sourceCode" id="cb16">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb16-1"><a href="#cb16-1" aria-hidden="true" tabindex="-1"></a><span class="fu">file</span> imagen.png</span></code></pre>
      </div>
    </li>
    <li>
      <Texto><strong><code>stat</code></strong>: Muestra metadatos del
        archivo.</li>  </Lista >
  <Linea />
  <Titulo title="h2" id="compresión-y-empaquetado">6. <strong>Compresión y
      empaquetado</strong></Titulo>
  <Lista>
    <li><strong><code>tar</code></strong>: Empaqueta múltiples
        archivos.</Texto>
      <div class="sourceCode" id="cb17">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb17-1"><a href="#cb17-1" aria-hidden="true" tabindex="-1"></a><span class="fu">tar</span> <span class="at">-cvf</span> backup.tar directorio/</span></code></pre>
      </div>
    </li>
    <li>
      <Texto><strong><code>gzip</code> / <code>gunzip</code></strong>:
        Comprime y descomprime.</li>    <li><strong><code>zip</code> / <code>unzip</code></strong>: Comprime
        y descomprime en formato ZIP.</li>  </Lista >
  <Linea />
  <Titulo title="h2" id="red-y-comunicación">7. <strong>Red y comunicación</strong></Titulo>
  <Lista>
    <li><strong><code>ping</code></strong>: Verifica
        conectividad.</li>    <li><strong><code>curl</code></strong>: Descarga o envía datos por
        HTTP.</Texto>
      <div class="sourceCode" id="cb18">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb18-1"><a href="#cb18-1" aria-hidden="true" tabindex="-1"></a><span class="ex">curl</span> https://ejemplo.com</span></code></pre>
      </div>
    </li>
    <li>
      <Texto><strong><code>wget</code></strong>: Descarga archivos.</li>    <li><strong><code>ssh</code></strong>: Conexión remota
        segura.</li>    <li><strong><code>scp</code></strong>: Copiar archivos entre equipos
        vía SSH.</li>    <li><strong><code>netstat</code> / <code>ss</code></strong>:
        Información de puertos y conexiones.</li>  </Lista >
  <Linea />
  <Titulo title="h2" id="otros-útiles">8. <strong>Otros útiles</strong></Titulo>
  <Lista>
    <li><strong><code>date</code></strong>: Fecha y hora.</li>    <li>
      <Texto><strong><code>bc</code></strong>: Calculadora de precisión
        arbitraria.</Texto>
      <div class="sourceCode" id="cb19">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb19-1"><a href="#cb19-1" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="st">&quot;2+3*5&quot;</span> <span class="kw">|</span> <span class="fu">bc</span></span></code></pre>
      </div>
    </li>
    <li>
      <Texto><strong><code>xargs</code></strong>: Construye comandos a partir
        de entradas.</Texto>
      <div class="sourceCode" id="cb20">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb20-1"><a href="#cb20-1" aria-hidden="true" tabindex="-1"></a><span class="fu">cat</span> lista.txt <span class="kw">|</span> <span class="fu">xargs</span> rm</span></code></pre>
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
  <div class="sourceCode" id="cb21">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb21-1"><a href="#cb21-1" aria-hidden="true" tabindex="-1"></a><span class="fu">grep</span> <span class="st">&quot;ERROR&quot;</span> log.txt <span class="kw">|</span> <span class="fu">wc</span> <span class="at">-l</span> <span class="op">&gt;</span> total_errores.txt</span></code></pre>
  </div>
  <Linea />
  <Texto><a href="./../readme.md#2-linux-y-bash-script">Regresar a la guía
      principal</a></Texto>
  <blockquote>
    <Texto><strong>Autor:</strong> Fravelz</Texto>
  </blockquote>
</>
);
}
export default nameabcd;
