<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">

<head>
  <meta charset="utf-8" />
  <meta name="generator" content="pandoc" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <title>busqueda</title>

</head>

<body>
  <h1 id="comandos-de-gestión-de-búsqueda">Comandos de Gestión de
    Búsqueda</h1>
  <hr />
  <h2 id="temario">Temario</h2>
  <ul>
    <li><a href="#comandos-de-gestión-de-búsqueda">Comandos de Gestión de
        Búsqueda</a>
      <ul>
        <li><a href="#temario">Temario</a></li>
        <li><a href="#1-buscar-archivos-y-directorios">1. Buscar archivos y
            directorios</a>
          <ul>
            <li><a href="#find"><code>find</code></a></li>
          </ul>
        </li>
        <li><a href="#2-buscar-texto-dentro-de-archivos">2. Buscar texto dentro
            de archivos</a>
          <ul>
            <li><a href="#grep"><code>grep</code></a></li>
          </ul>
        </li>
        <li><a href="#3-buscar-archivos-rápidamente">3. Buscar archivos
            rápidamente</a>
          <ul>
            <li><a href="#locate"><code>locate</code></a></li>
          </ul>
        </li>
        <li><a href="#4-buscar-comandos-o-ejecutables">4. Buscar comandos o
            ejecutables</a>
          <ul>
            <li><a href="#which-whereis-type"><code>which</code>,
                <code>whereis</code>, <code>type</code></a></li>
          </ul>
        </li>
        <li><a href="#5-buscar-en-el-historial-o-procesos">5. Buscar en el
            historial o procesos</a>
          <ul>
            <li><a href="#buscar-en-historial">Buscar en historial</a></li>
            <li><a href="#buscar-procesos-en-ejecución">Buscar procesos en
                ejecución</a></li>
          </ul>
        </li>
        <li><a href="#6-buscar-dentro-de-archivos-comprimidos-o-binarios">6.
            Buscar dentro de archivos comprimidos o binarios</a></li>
      </ul>
    </li>
  </ul>
  <p><a href="./../readme.md#2-linux-y-bash-script">Regresar a la guía
      principal</a></p>
  <hr />
  <h2 id="buscar-archivos-y-directorios">1. Buscar archivos y
    directorios</h2>
  <h3 id="find"><code>find</code></h3>
  <p>Busca archivos y carpetas según nombre, tipo, tamaño, fecha, etc.</p>
  <div class="sourceCode" id="cb1">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="co"># Buscar por nombre (en todo el sistema)</span></span>
<span id="cb1-2"><a href="#cb1-2" aria-hidden="true" tabindex="-1"></a><span class="fu">find</span> / <span class="at">-name</span> <span class="st">&quot;archivo.txt&quot;</span></span>
<span id="cb1-3"><a href="#cb1-3" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb1-4"><a href="#cb1-4" aria-hidden="true" tabindex="-1"></a><span class="co"># Buscar sin importar mayúsculas/minúsculas</span></span>
<span id="cb1-5"><a href="#cb1-5" aria-hidden="true" tabindex="-1"></a><span class="fu">find</span> /home <span class="at">-iname</span> <span class="st">&quot;foto.png&quot;</span></span>
<span id="cb1-6"><a href="#cb1-6" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb1-7"><a href="#cb1-7" aria-hidden="true" tabindex="-1"></a><span class="co"># Buscar solo directorios</span></span>
<span id="cb1-8"><a href="#cb1-8" aria-hidden="true" tabindex="-1"></a><span class="fu">find</span> /home <span class="at">-type</span> d <span class="at">-name</span> <span class="st">&quot;Documentos&quot;</span></span>
<span id="cb1-9"><a href="#cb1-9" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb1-10"><a href="#cb1-10" aria-hidden="true" tabindex="-1"></a><span class="co"># Buscar archivos mayores de 10 MB</span></span>
<span id="cb1-11"><a href="#cb1-11" aria-hidden="true" tabindex="-1"></a><span class="fu">find</span> / <span class="at">-type</span> f <span class="at">-size</span> +10M</span>
<span id="cb1-12"><a href="#cb1-12" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb1-13"><a href="#cb1-13" aria-hidden="true" tabindex="-1"></a><span class="co"># Ejecutar un comando sobre los resultados</span></span>
<span id="cb1-14"><a href="#cb1-14" aria-hidden="true" tabindex="-1"></a><span class="fu">find</span> /tmp <span class="at">-name</span> <span class="st">&quot;*.log&quot;</span> <span class="at">-exec</span> rm {} <span class="dt">\;</span></span></code></pre>
  </div>
  <hr />
  <h2 id="buscar-texto-dentro-de-archivos">2. Buscar texto dentro de
    archivos</h2>
  <h3 id="grep"><code>grep</code></h3>
  <p>Busca texto dentro del contenido de archivos.</p>
  <div class="sourceCode" id="cb2">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="co"># Buscar una palabra en un archivo</span></span>
<span id="cb2-2"><a href="#cb2-2" aria-hidden="true" tabindex="-1"></a><span class="fu">grep</span> <span class="st">&quot;error&quot;</span> archivo.log</span>
<span id="cb2-3"><a href="#cb2-3" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb2-4"><a href="#cb2-4" aria-hidden="true" tabindex="-1"></a><span class="co"># Buscar en todos los archivos de una carpeta</span></span>
<span id="cb2-5"><a href="#cb2-5" aria-hidden="true" tabindex="-1"></a><span class="fu">grep</span> <span class="st">&quot;main&quot;</span> <span class="pp">*</span>.cpp</span>
<span id="cb2-6"><a href="#cb2-6" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb2-7"><a href="#cb2-7" aria-hidden="true" tabindex="-1"></a><span class="co"># Buscar recursivamente (en subcarpetas)</span></span>
<span id="cb2-8"><a href="#cb2-8" aria-hidden="true" tabindex="-1"></a><span class="fu">grep</span> <span class="at">-r</span> <span class="st">&quot;usuario&quot;</span> /etc/</span>
<span id="cb2-9"><a href="#cb2-9" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb2-10"><a href="#cb2-10" aria-hidden="true" tabindex="-1"></a><span class="co"># Mostrar el número de línea</span></span>
<span id="cb2-11"><a href="#cb2-11" aria-hidden="true" tabindex="-1"></a><span class="fu">grep</span> <span class="at">-n</span> <span class="st">&quot;config&quot;</span> settings.conf</span>
<span id="cb2-12"><a href="#cb2-12" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb2-13"><a href="#cb2-13" aria-hidden="true" tabindex="-1"></a><span class="co"># Ignorar mayúsculas/minúsculas</span></span>
<span id="cb2-14"><a href="#cb2-14" aria-hidden="true" tabindex="-1"></a><span class="fu">grep</span> <span class="at">-i</span> <span class="st">&quot;Warning&quot;</span> archivo.log</span>
<span id="cb2-15"><a href="#cb2-15" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb2-16"><a href="#cb2-16" aria-hidden="true" tabindex="-1"></a><span class="co"># Mostrar solo el nombre del archivo donde se encuentra</span></span>
<span id="cb2-17"><a href="#cb2-17" aria-hidden="true" tabindex="-1"></a><span class="fu">grep</span> <span class="at">-l</span> <span class="st">&quot;root&quot;</span> /etc/<span class="pp">*</span></span></code></pre>
  </div>
  <blockquote>
    <p>Tip: Usa <code>grep -rni "palabra" .</code> para buscar en todo el
      directorio actual con número de línea y sin distinguir
      mayúsculas/minúsculas.</p>
  </blockquote>
  <hr />
  <h2 id="buscar-archivos-rápidamente">3. Buscar archivos rápidamente</h2>
  <h3 id="locate"><code>locate</code></h3>
  <p>Usa una base de datos indexada (más rápido que
    <code>find</code>).
  </p>
  <div class="sourceCode" id="cb3">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a><span class="co"># Buscar archivos por nombre</span></span>
<span id="cb3-2"><a href="#cb3-2" aria-hidden="true" tabindex="-1"></a><span class="fu">locate</span> archivo.txt</span>
<span id="cb3-3"><a href="#cb3-3" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb3-4"><a href="#cb3-4" aria-hidden="true" tabindex="-1"></a><span class="co"># Buscar archivos que contengan una palabra</span></span>
<span id="cb3-5"><a href="#cb3-5" aria-hidden="true" tabindex="-1"></a><span class="fu">locate</span> config</span>
<span id="cb3-6"><a href="#cb3-6" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb3-7"><a href="#cb3-7" aria-hidden="true" tabindex="-1"></a><span class="co"># Actualizar la base de datos de locate</span></span>
<span id="cb3-8"><a href="#cb3-8" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> updatedb</span></code></pre>
  </div>
  <hr />
  <h2 id="buscar-comandos-o-ejecutables">4. Buscar comandos o
    ejecutables</h2>
  <h3 id="which-whereis-type"><code>which</code>, <code>whereis</code>,
    <code>type</code>
  </h3>
  <p>Sirven para ubicar programas instalados o saber cómo se ejecutan.</p>
  <div class="sourceCode" id="cb4">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a><span class="co"># Ver ruta del ejecutable de un comando</span></span>
<span id="cb4-2"><a href="#cb4-2" aria-hidden="true" tabindex="-1"></a><span class="fu">which</span> python3</span>
<span id="cb4-3"><a href="#cb4-3" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb4-4"><a href="#cb4-4" aria-hidden="true" tabindex="-1"></a><span class="co"># Mostrar archivos binarios, man pages, etc.</span></span>
<span id="cb4-5"><a href="#cb4-5" aria-hidden="true" tabindex="-1"></a><span class="fu">whereis</span> bash</span>
<span id="cb4-6"><a href="#cb4-6" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb4-7"><a href="#cb4-7" aria-hidden="true" tabindex="-1"></a><span class="co"># Mostrar tipo de comando</span></span>
<span id="cb4-8"><a href="#cb4-8" aria-hidden="true" tabindex="-1"></a><span class="bu">type</span> ls</span></code></pre>
  </div>
  <hr />
  <h2 id="buscar-en-el-historial-o-procesos">5. Buscar en el historial o
    procesos</h2>
  <h3 id="buscar-en-historial">Buscar en historial</h3>
  <div class="sourceCode" id="cb5">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb5-1"><a href="#cb5-1" aria-hidden="true" tabindex="-1"></a><span class="co"># Buscar un comando usado anteriormente</span></span>
<span id="cb5-2"><a href="#cb5-2" aria-hidden="true" tabindex="-1"></a><span class="bu">history</span> <span class="kw">|</span> <span class="fu">grep</span> <span class="st">&quot;ssh&quot;</span></span></code></pre>
  </div>
  <h3 id="buscar-procesos-en-ejecución">Buscar procesos en ejecución</h3>
  <div class="sourceCode" id="cb6">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a><span class="fu">ps</span> aux <span class="kw">|</span> <span class="fu">grep</span> firefox</span></code></pre>
  </div>
  <hr />
  <h2 id="buscar-dentro-de-archivos-comprimidos-o-binarios">6. Buscar
    dentro de archivos comprimidos o binarios</h2>
  <div class="sourceCode" id="cb7">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb7-1"><a href="#cb7-1" aria-hidden="true" tabindex="-1"></a><span class="co"># Buscar dentro de un .tar.gz</span></span>
<span id="cb7-2"><a href="#cb7-2" aria-hidden="true" tabindex="-1"></a><span class="fu">tar</span> <span class="at">-tzf</span> archivo.tar.gz <span class="kw">|</span> <span class="fu">grep</span> <span class="st">&quot;config&quot;</span></span>
<span id="cb7-3"><a href="#cb7-3" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb7-4"><a href="#cb7-4" aria-hidden="true" tabindex="-1"></a><span class="co"># Buscar dentro de un binario (si tiene texto legible)</span></span>
<span id="cb7-5"><a href="#cb7-5" aria-hidden="true" tabindex="-1"></a><span class="fu">strings</span> archivo.bin <span class="kw">|</span> <span class="fu">grep</span> <span class="st">&quot;password&quot;</span></span></code></pre>
  </div>
  <hr />
  <p><a href="./../readme.md#2-linux-y-bash-script">Regresar a la guía
      principal</a></p>
  <blockquote>
    <p><strong>Autor</strong>: Fravelz</p>
  </blockquote>
</body>

</html>