import Estructura from "./../../../componentes/estructura.jsx";

import Titulo from "./../../../componentes/titulo.jsx";
import Lista from "./../../../componentes/lista.jsx";
import Texto from "./../../../componentes/texto.jsx";
import Linea from "./../../../componentes/linea.jsx";
import Enlace from "./../../../componentes/enlace.jsx";

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
                <li><Enlace href="#find"><code>find</code></Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#2-buscar-texto-dentro-de-archivos">2. Buscar texto dentro
              de archivos</Enlace >
              <Lista>
                <li><Enlace href="#grep"><code>grep</code></Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#3-buscar-archivos-rápidamente">3. Buscar archivos
              rápidamente</Enlace >
              <Lista>
                <li><Enlace href="#locate"><code>locate</code></Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#4-buscar-comandos-o-ejecutables">4. Buscar comandos o
              ejecutables</Enlace >
              <Lista>
                <li><Enlace href="#which-whereis-type"><code>which</code>,
                  <code>whereis</code>, <code>type</code></Enlace ></li>
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
      <Titulo title="h3" id="find"><code>find</code></Titulo>
      <Texto>Busca archivos y carpetas según nombre, tipo, tamaño, fecha, etc.</Texto>
      <div className="sourceCode" id="cb1">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb1-1"><Enlace href="#cb1-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Buscar por nombre (en todo el sistema)</span></span>
            <span id="cb1-2"><Enlace href="#cb1-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">find</span> / <span className="at">-name</span> <span className="st">&quot;archivo.txt&quot;</span></span>
            <span id="cb1-3"><Enlace href="#cb1-3" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb1-4"><Enlace href="#cb1-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Buscar sin importar mayúsculas/minúsculas</span></span>
            <span id="cb1-5"><Enlace href="#cb1-5" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">find</span> /home <span className="at">-iname</span> <span className="st">&quot;foto.png&quot;</span></span>
            <span id="cb1-6"><Enlace href="#cb1-6" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb1-7"><Enlace href="#cb1-7" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Buscar solo directorios</span></span>
            <span id="cb1-8"><Enlace href="#cb1-8" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">find</span> /home <span className="at">-type</span> d <span className="at">-name</span> <span className="st">&quot;Documentos&quot;</span></span>
            <span id="cb1-9"><Enlace href="#cb1-9" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb1-10"><Enlace href="#cb1-10" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Buscar archivos mayores de 10 MB</span></span>
            <span id="cb1-11"><Enlace href="#cb1-11" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">find</span> / <span className="at">-type</span> f <span className="at">-size</span> +10M</span>
            <span id="cb1-12"><Enlace href="#cb1-12" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb1-13"><Enlace href="#cb1-13" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Ejecutar un comando sobre los resultados</span></span>
            <span id="cb1-14"><Enlace href="#cb1-14" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">find</span> /tmp <span className="at">-name</span> <span className="st">&quot;*.log&quot;</span> <span className="at">-exec</span> rm { } <span className="dt">\;</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="buscar-texto-dentro-de-archivos">2. Buscar texto dentro de
        archivos</Titulo>
      <Titulo title="h3" id="grep"><code>grep</code></Titulo>
      <Texto>Busca texto dentro del contenido de archivos.</Texto>
      <div className="sourceCode" id="cb2">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb2-1"><Enlace href="#cb2-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Buscar una palabra en un archivo</span></span>
            <span id="cb2-2"><Enlace href="#cb2-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">grep</span> <span className="st">&quot;error&quot;</span> archivo.log</span>
            <span id="cb2-3"><Enlace href="#cb2-3" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb2-4"><Enlace href="#cb2-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Buscar en todos los archivos de una carpeta</span></span>
            <span id="cb2-5"><Enlace href="#cb2-5" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">grep</span> <span className="st">&quot;main&quot;</span> <span className="pp">*</span>.cpp</span>
            <span id="cb2-6"><Enlace href="#cb2-6" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb2-7"><Enlace href="#cb2-7" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Buscar recursivamente (en subcarpetas)</span></span>
            <span id="cb2-8"><Enlace href="#cb2-8" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">grep</span> <span className="at">-r</span> <span className="st">&quot;usuario&quot;</span> /etc/</span>
            <span id="cb2-9"><Enlace href="#cb2-9" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb2-10"><Enlace href="#cb2-10" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Mostrar el número de línea</span></span>
            <span id="cb2-11"><Enlace href="#cb2-11" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">grep</span> <span className="at">-n</span> <span className="st">&quot;config&quot;</span> settings.conf</span>
            <span id="cb2-12"><Enlace href="#cb2-12" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb2-13"><Enlace href="#cb2-13" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Ignorar mayúsculas/minúsculas</span></span>
            <span id="cb2-14"><Enlace href="#cb2-14" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">grep</span> <span className="at">-i</span> <span className="st">&quot;Warning&quot;</span> archivo.log</span>
            <span id="cb2-15"><Enlace href="#cb2-15" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb2-16"><Enlace href="#cb2-16" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Mostrar solo el nombre del archivo donde se encuentra</span></span>
            <span id="cb2-17"><Enlace href="#cb2-17" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">grep</span> <span className="at">-l</span> <span className="st">&quot;root&quot;</span> /etc/<span className="pp">*</span></span></code></pre>
      </div>
      <blockquote>
        <Texto>Tip: Usa <code>grep -rni "palabra" .</code> para buscar en todo el
          directorio actual con número de línea y sin distinguir
          mayúsculas/minúsculas.</Texto>
      </blockquote>
      <Linea />
      <Titulo title="h2" id="buscar-archivos-rápidamente">3. Buscar archivos rápidamente</Titulo>
      <Titulo title="h3" id="locate"><code>locate</code></Titulo>
      <Texto>Usa una base de datos indexada (más rápido que
        <code>find</code>).
      </Texto>
      <div className="sourceCode" id="cb3">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb3-1"><Enlace href="#cb3-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Buscar archivos por nombre</span></span>
            <span id="cb3-2"><Enlace href="#cb3-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">locate</span> archivo.txt</span>
            <span id="cb3-3"><Enlace href="#cb3-3" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb3-4"><Enlace href="#cb3-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Buscar archivos que contengan una palabra</span></span>
            <span id="cb3-5"><Enlace href="#cb3-5" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">locate</span> config</span>
            <span id="cb3-6"><Enlace href="#cb3-6" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb3-7"><Enlace href="#cb3-7" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Actualizar la base de datos de locate</span></span>
            <span id="cb3-8"><Enlace href="#cb3-8" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">sudo</span> updatedb</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="buscar-comandos-o-ejecutables">4. Buscar comandos o
        ejecutables</Titulo>
      <Titulo title="h3" id="which-whereis-type"><code>which</code>, <code>whereis</code>,
        <code>type</code>
      </Titulo>
      <Texto>Sirven para ubicar programas instalados o saber cómo se ejecutan.</Texto>
      <div className="sourceCode" id="cb4">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb4-1"><Enlace href="#cb4-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Ver ruta del ejecutable de un comando</span></span>
            <span id="cb4-2"><Enlace href="#cb4-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">which</span> python3</span>
            <span id="cb4-3"><Enlace href="#cb4-3" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb4-4"><Enlace href="#cb4-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Mostrar archivos binarios, man pages, etc.</span></span>
            <span id="cb4-5"><Enlace href="#cb4-5" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">whereis</span> bash</span>
            <span id="cb4-6"><Enlace href="#cb4-6" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb4-7"><Enlace href="#cb4-7" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Mostrar tipo de comando</span></span>
            <span id="cb4-8"><Enlace href="#cb4-8" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">type</span> ls</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="buscar-en-el-historial-o-procesos">5. Buscar en el historial o
        procesos</Titulo>
      <Titulo title="h3" id="buscar-en-historial">Buscar en historial</Titulo>
      <div className="sourceCode" id="cb5">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb5-1"><Enlace href="#cb5-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Buscar un comando usado anteriormente</span></span>
            <span id="cb5-2"><Enlace href="#cb5-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">history</span> <span className="kw">|</span> <span className="fu">grep</span> <span className="st">&quot;ssh&quot;</span></span></code></pre>
      </div>
      <Titulo title="h3" id="buscar-procesos-en-ejecución">Buscar procesos en ejecución</Titulo>
      <div className="sourceCode" id="cb6">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb6-1"><Enlace href="#cb6-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">ps</span> aux <span className="kw">|</span> <span className="fu">grep</span> firefox</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="buscar-dentro-de-archivos-comprimidos-o-binarios">6. Buscar
        dentro de archivos comprimidos o binarios</Titulo>
      <div className="sourceCode" id="cb7">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb7-1"><Enlace href="#cb7-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Buscar dentro de un .tar.gz</span></span>
            <span id="cb7-2"><Enlace href="#cb7-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">tar</span> <span className="at">-tzf</span> archivo.tar.gz <span className="kw">|</span> <span className="fu">grep</span> <span className="st">&quot;config&quot;</span></span>
            <span id="cb7-3"><Enlace href="#cb7-3" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb7-4"><Enlace href="#cb7-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Buscar dentro de un binario (si tiene texto legible)</span></span>
            <span id="cb7-5"><Enlace href="#cb7-5" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">strings</span> archivo.bin <span className="kw">|</span> <span className="fu">grep</span> <span className="st">&quot;password&quot;</span></span></code></pre>
      </div>
    </Estructura>
  );
}

export default nameabcd;
