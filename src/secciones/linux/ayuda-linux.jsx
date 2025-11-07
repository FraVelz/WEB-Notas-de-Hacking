<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">

<head>
  <meta charset="utf-8" />
  <meta name="generator" content="pandoc" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <title>ayuda-linux</title>

</head>

<body>
  <h1 id="obtener-ayuda">Obtener ayuda</h1>
  <p>Tras haber establecido una base sólida sobre la estructura de Linux,
    sus diversas distribuciones y el propósito del <em>shell</em>, estamos
    listos para poner en práctica estos conocimientos. Es hora de
    profundizar en el uso de comandos directamente en la terminal y aprender
    a buscar ayuda cuando nos encontremos con comandos desconocidos.</p>
  <p>Siempre nos encontraremos con herramientas cuyos parámetros
    opcionales desconocemos de memoria o que nunca hemos visto. Por lo
    tanto, es vital saber cómo podemos familiarizarnos con ellas. Las dos
    primeras maneras son las páginas de manual y las funciones de ayuda.
    Siempre es buena idea familiarizarse primero con la herramienta que
    queremos probar. También aprenderemos algunos trucos con algunas
    herramientas que creíamos imposibles. En las páginas de manual
    encontraremos manuales detallados con explicaciones completas.</p>
  <hr />
  <h2 id="temario">Temario</h2>
  <ul>
    <li><a href="#obtener-ayuda">Obtener ayuda</a>
      <ul>
        <li><a href="#temario">Temario</a></li>
        <li><a href="#primer-comando">Primer comando</a></li>
        <li><a href="#ayuda-rápida---help-y--h">Ayuda rápida
            (<code>--help</code> y <code>-h</code>)</a></li>
        <li><a href="#buscar-comandos-y-documentación-relacionada-apropos">Buscar
            comandos y documentación relacionada (<code>apropos</code>)</a></li>
        <li><a href="#conclusión">Conclusión</a></li>
      </ul>
    </li>
  </ul>
  <p><a href="./../readme.md#2-linux-y-bash-script">Regresar a la guía
      principal</a></p>
  <hr />
  <h2 id="primer-comando">Primer comando</h2>
  <div class="sourceCode" id="cb1">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="ex">fravelz@htb[/htb]$</span> ls</span>
<span id="cb1-2"><a href="#cb1-2" aria-hidden="true" tabindex="-1"></a><span class="ex">cacert.der</span>  Documents  Music     Public     Videos</span>
<span id="cb1-3"><a href="#cb1-3" aria-hidden="true" tabindex="-1"></a><span class="ex">Desktop</span>     Downloads  Pictures  Templates</span></code></pre>
  </div>
  <p>El comando <code>ls</code> en sistemas Linux y Unix se utiliza para
    listar los archivos y directorios dentro de la carpeta actual o de
    cualquier directorio especificado, lo que permite ver su contenido y
    administrar los archivos de forma más eficaz. Como la mayoría de los
    comandos de Linux, <code>ls</code> incluye opciones y funciones
    adicionales que ayudan a filtrar o formatear la salida para mostrar
    exactamente lo que se desea. Para descubrir qué opciones ofrece una
    herramienta o comando, existen varias maneras de obtener ayuda. Una de
    ellas es usar el comando <code>man</code>, que muestra las páginas del
    manual de los comandos y proporciona información detallada sobre su
    uso.</p>
  <p><strong>Sintaxis:</strong></p>
  <div class="sourceCode" id="cb2">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="ex">fravelz@htb[/htb]$</span> man <span class="op">&lt;</span>tool<span class="op">&gt;</span></span></code></pre>
  </div>
  <p>Veamos un ejemplo y obtengamos ayuda para el comando
    <code>ls</code>:
  </p>
  <p><strong>Ejemplo:</strong></p>
  <div class="sourceCode" id="cb3">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a><span class="ex">fravelz@htb[/htb]$</span> man ls</span></code></pre>
  </div>
  <div class="sourceCode" id="cb4">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a><span class="ex">LS</span><span class="er">(</span><span class="ex">1</span><span class="kw">)</span>                            <span class="ex">User</span> Commands                           LS<span class="er">(</span><span class="ex">1</span><span class="kw">)</span></span>
<span id="cb4-2"><a href="#cb4-2" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb4-3"><a href="#cb4-3" aria-hidden="true" tabindex="-1"></a><span class="ex">NAME</span></span>
<span id="cb4-4"><a href="#cb4-4" aria-hidden="true" tabindex="-1"></a>       <span class="fu">ls</span> <span class="at">-</span> list directory contents</span>
<span id="cb4-5"><a href="#cb4-5" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb4-6"><a href="#cb4-6" aria-hidden="true" tabindex="-1"></a><span class="ex">SYNOPSIS</span></span>
<span id="cb4-7"><a href="#cb4-7" aria-hidden="true" tabindex="-1"></a>       <span class="fu">ls</span> <span class="pp">[</span><span class="ss">OPTION</span><span class="pp">]</span>... <span class="pp">[</span><span class="ss">FILE</span><span class="pp">]</span>...</span>
<span id="cb4-8"><a href="#cb4-8" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb4-9"><a href="#cb4-9" aria-hidden="true" tabindex="-1"></a><span class="ex">DESCRIPTION</span></span>
<span id="cb4-10"><a href="#cb4-10" aria-hidden="true" tabindex="-1"></a>       <span class="ex">List</span>  information  about  the FILEs <span class="er">(</span><span class="ex">the</span> current directory by default<span class="kw">)</span><span class="bu">.</span></span>
<span id="cb4-11"><a href="#cb4-11" aria-hidden="true" tabindex="-1"></a>       <span class="ex">Sort</span> entries alphabetically if none of <span class="at">-cftuvSUX</span> nor <span class="at">--sort</span>  is  speci‐</span>
<span id="cb4-12"><a href="#cb4-12" aria-hidden="true" tabindex="-1"></a>       <span class="ex">fied.</span></span>
<span id="cb4-13"><a href="#cb4-13" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb4-14"><a href="#cb4-14" aria-hidden="true" tabindex="-1"></a>       <span class="ex">Mandatory</span>  arguments  to  long  options are mandatory for short options</span>
<span id="cb4-15"><a href="#cb4-15" aria-hidden="true" tabindex="-1"></a>       <span class="ex">too.</span></span>
<span id="cb4-16"><a href="#cb4-16" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb4-17"><a href="#cb4-17" aria-hidden="true" tabindex="-1"></a>       <span class="ex">-a,</span> <span class="at">--all</span></span>
<span id="cb4-18"><a href="#cb4-18" aria-hidden="true" tabindex="-1"></a>              <span class="cf">do</span> <span class="ex">not</span> ignore entries starting with .</span>
<span id="cb4-19"><a href="#cb4-19" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb4-20"><a href="#cb4-20" aria-hidden="true" tabindex="-1"></a>       <span class="ex">-A,</span> <span class="at">--almost-all</span></span>
<span id="cb4-21"><a href="#cb4-21" aria-hidden="true" tabindex="-1"></a>              <span class="cf">do</span> <span class="ex">not</span> list implied . and ..</span>
<span id="cb4-22"><a href="#cb4-22" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb4-23"><a href="#cb4-23" aria-hidden="true" tabindex="-1"></a>       <span class="ex">--author</span></span>
<span id="cb4-24"><a href="#cb4-24" aria-hidden="true" tabindex="-1"></a> <span class="ex">Manual</span> page ls<span class="er">(</span><span class="ex">1</span><span class="kw">)</span> <span class="ex">line</span> 1 <span class="er">(</span><span class="ex">press</span> h for help or q to quit<span class="kw">)</span></span></code></pre>
  </div>
  <p>Tras ver algunos ejemplos, también podemos consultar rápidamente los
    parámetros opcionales sin tener que consultar toda la documentación.
    Disponemos de varias maneras de hacerlo.</p>
  <hr />
  <h2 id="ayuda-rápida---help-y--h">Ayuda rápida (<code>--help</code> y
    <code>-h</code>)
  </h2>
  <p><strong>Sintaxis:</strong></p>
  <div class="sourceCode" id="cb5">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb5-1"><a href="#cb5-1" aria-hidden="true" tabindex="-1"></a><span class="co"># Obtener ayuda</span></span>
<span id="cb5-2"><a href="#cb5-2" aria-hidden="true" tabindex="-1"></a><span class="ex">fravelz@htb[/htb]$</span> <span class="op">&lt;</span>tool<span class="op">&gt;</span> --help</span></code></pre>
  </div>
  <p><strong>Ejemplo:</strong></p>
  <div class="sourceCode" id="cb6">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a><span class="co"># Obtener ayuda</span></span>
<span id="cb6-2"><a href="#cb6-2" aria-hidden="true" tabindex="-1"></a><span class="ex">fravelz@htb[/htb]$</span> ls <span class="at">--help</span></span></code></pre>
  </div>
  <div class="sourceCode" id="cb7">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb7-1"><a href="#cb7-1" aria-hidden="true" tabindex="-1"></a><span class="ex">Usage:</span> ls <span class="pp">[</span><span class="ss">OPTION</span><span class="pp">]</span>... <span class="pp">[</span><span class="ss">FILE</span><span class="pp">]</span>...</span>
<span id="cb7-2"><a href="#cb7-2" aria-hidden="true" tabindex="-1"></a><span class="ex">List</span> information about the FILEs <span class="er">(</span><span class="ex">the</span> current directory by default<span class="kw">)</span><span class="bu">.</span></span>
<span id="cb7-3"><a href="#cb7-3" aria-hidden="true" tabindex="-1"></a><span class="ex">Sort</span> entries alphabetically if none of <span class="at">-cftuvSUX</span> nor <span class="at">--sort</span> is specified.</span>
<span id="cb7-4"><a href="#cb7-4" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb7-5"><a href="#cb7-5" aria-hidden="true" tabindex="-1"></a><span class="ex">Mandatory</span> arguments to long options are mandatory for short options too.</span>
<span id="cb7-6"><a href="#cb7-6" aria-hidden="true" tabindex="-1"></a>  <span class="ex">-a,</span> <span class="at">--all</span>                  do not ignore entries starting with .</span>
<span id="cb7-7"><a href="#cb7-7" aria-hidden="true" tabindex="-1"></a>  <span class="ex">-A,</span> <span class="at">--almost-all</span>           do not list implied . and ..</span>
<span id="cb7-8"><a href="#cb7-8" aria-hidden="true" tabindex="-1"></a>      <span class="ex">--author</span>               with <span class="at">-l,</span> print the author of each file</span>
<span id="cb7-9"><a href="#cb7-9" aria-hidden="true" tabindex="-1"></a>  <span class="ex">-b,</span> <span class="at">--escape</span>               print C-style escapes for nongraphic characters</span>
<span id="cb7-10"><a href="#cb7-10" aria-hidden="true" tabindex="-1"></a>      <span class="ex">--block-size=SIZE</span>      with <span class="at">-l,</span> scale sizes by SIZE when printing them<span class="kw">;</span></span>
<span id="cb7-11"><a href="#cb7-11" aria-hidden="true" tabindex="-1"></a>                             <span class="ex">e.g.,</span> <span class="st">&#39;--block-size=M&#39;</span><span class="kw">;</span> <span class="ex">see</span> SIZE format below</span>
<span id="cb7-12"><a href="#cb7-12" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb7-13"><a href="#cb7-13" aria-hidden="true" tabindex="-1"></a>  <span class="ex">-B,</span> <span class="at">--ignore-backups</span>       do not list implied entries ending with ~</span>
<span id="cb7-14"><a href="#cb7-14" aria-hidden="true" tabindex="-1"></a>  <span class="ex">-c</span>                         with <span class="at">-lt:</span> sort by, and show, ctime <span class="er">(</span><span class="bu">time</span> of last</span>
<span id="cb7-15"><a href="#cb7-15" aria-hidden="true" tabindex="-1"></a>                             <span class="ex">modification</span> of file status information<span class="kw">);</span></span>
<span id="cb7-16"><a href="#cb7-16" aria-hidden="true" tabindex="-1"></a>                             <span class="ex">with</span> <span class="at">-l:</span> show ctime and sort by name<span class="kw">;</span></span>
<span id="cb7-17"><a href="#cb7-17" aria-hidden="true" tabindex="-1"></a>                             <span class="ex">otherwise:</span> sort by ctime, newest first</span>
<span id="cb7-18"><a href="#cb7-18" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb7-19"><a href="#cb7-19" aria-hidden="true" tabindex="-1"></a>  <span class="ex">-C</span>                         list entries by columns</span>
<span id="cb7-20"><a href="#cb7-20" aria-hidden="true" tabindex="-1"></a><span class="op">&lt;</span>SNIP<span class="op">&gt;</span></span></code></pre>
  </div>
  <p>Algunas herramientas proporcionan una versión corta de ayuda usando
    <code>-h</code> en lugar de <code>--help</code>:
  </p>
  <p><strong>Sintaxis:</strong></p>
  <div class="sourceCode" id="cb8">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb8-1"><a href="#cb8-1" aria-hidden="true" tabindex="-1"></a><span class="co"># Obtener ayuda</span></span>
<span id="cb8-2"><a href="#cb8-2" aria-hidden="true" tabindex="-1"></a><span class="ex">fravelz@htb[/htb]$</span> <span class="op">&lt;</span>tool<span class="op">&gt;</span> -h</span></code></pre>
  </div>
  <p><strong>Ejemplo:</strong></p>
  <div class="sourceCode" id="cb9">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb9-1"><a href="#cb9-1" aria-hidden="true" tabindex="-1"></a><span class="ex">fravelz@htb[/htb]$</span> curl <span class="at">-h</span></span></code></pre>
  </div>
  <div class="sourceCode" id="cb10">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb10-1"><a href="#cb10-1" aria-hidden="true" tabindex="-1"></a><span class="ex">Usage:</span> curl <span class="pp">[</span><span class="ss">options...</span><span class="pp">]</span> <span class="op">&lt;</span>url<span class="op">&gt;</span></span>
<span id="cb10-2"><a href="#cb10-2" aria-hidden="true" tabindex="-1"></a>     <span class="ex">--abstract-unix-socket</span> <span class="op">&lt;</span>path<span class="op">&gt;</span> Connect via abstract Unix domain socket</span>
<span id="cb10-3"><a href="#cb10-3" aria-hidden="true" tabindex="-1"></a>     <span class="ex">--anyauth</span>       Pick any authentication method</span>
<span id="cb10-4"><a href="#cb10-4" aria-hidden="true" tabindex="-1"></a> <span class="ex">-a,</span> <span class="at">--append</span>        Append to target file when uploading</span>
<span id="cb10-5"><a href="#cb10-5" aria-hidden="true" tabindex="-1"></a>     <span class="ex">--basic</span>         Use HTTP Basic Authentication</span>
<span id="cb10-6"><a href="#cb10-6" aria-hidden="true" tabindex="-1"></a>     <span class="ex">--cacert</span> <span class="op">&lt;</span>file<span class="op">&gt;</span> CA certificate to verify peer against</span>
<span id="cb10-7"><a href="#cb10-7" aria-hidden="true" tabindex="-1"></a>     <span class="ex">--capath</span> <span class="op">&lt;</span>dir<span class="op">&gt;</span>  CA directory to verify peer against</span>
<span id="cb10-8"><a href="#cb10-8" aria-hidden="true" tabindex="-1"></a> <span class="ex">-E,</span> <span class="at">--cert</span> <span class="op">&lt;</span>certificate<span class="pp">[</span><span class="ss">:password</span><span class="pp">]</span><span class="op">&gt;</span> Client certificate file and password</span>
<span id="cb10-9"><a href="#cb10-9" aria-hidden="true" tabindex="-1"></a><span class="op">&lt;</span>SNIP<span class="op">&gt;</span></span></code></pre>
  </div>
  <p>Como podemos ver, los resultados no difieren mucho en este ejemplo:
    <code>man</code> ofrece la documentación completa y
    <code>--help</code>/<code>-h</code> suele dar un resumen rápido y
    práctico.
  </p>
  <hr />
  <h2 id="buscar-comandos-y-documentación-relacionada-apropos">Buscar
    comandos y documentación relacionada (<code>apropos</code>)</h2>
  <p>Otra herramienta útil al principio es <code>apropos</code>. Cada
    página del manual incluye una breve descripción. Esta herramienta busca
    en las descripciones instancias de una palabra clave determinada.</p>
  <p><strong>Sintaxis:</strong></p>
  <div class="sourceCode" id="cb11">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb11-1"><a href="#cb11-1" aria-hidden="true" tabindex="-1"></a><span class="co"># Obtener ayuda</span></span>
<span id="cb11-2"><a href="#cb11-2" aria-hidden="true" tabindex="-1"></a><span class="ex">fravelz@htb[/htb]$</span> apropos <span class="op">&lt;</span>keyword<span class="op">&gt;</span></span></code></pre>
  </div>
  <p><strong>Ejemplo:</strong></p>
  <div class="sourceCode" id="cb12">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb12-1"><a href="#cb12-1" aria-hidden="true" tabindex="-1"></a><span class="co"># Obtener ayuda</span></span>
<span id="cb12-2"><a href="#cb12-2" aria-hidden="true" tabindex="-1"></a><span class="ex">fravelz@htb[/htb]$</span> apropos sudo</span></code></pre>
  </div>
  <div class="sourceCode" id="cb13">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb13-1"><a href="#cb13-1" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> <span class="er">(</span><span class="ex">8</span><span class="kw">)</span>             <span class="ex">-</span> execute a command as another user</span>
<span id="cb13-2"><a href="#cb13-2" aria-hidden="true" tabindex="-1"></a><span class="ex">sudo.conf</span> <span class="er">(</span><span class="ex">5</span><span class="kw">)</span>        <span class="ex">-</span> configuration for sudo front end</span>
<span id="cb13-3"><a href="#cb13-3" aria-hidden="true" tabindex="-1"></a><span class="ex">sudo_plugin</span> <span class="er">(</span><span class="ex">8</span><span class="kw">)</span>      <span class="ex">-</span> Sudo Plugin API</span>
<span id="cb13-4"><a href="#cb13-4" aria-hidden="true" tabindex="-1"></a><span class="ex">sudo_root</span> <span class="er">(</span><span class="ex">8</span><span class="kw">)</span>        <span class="ex">-</span> How to run administrative commands</span>
<span id="cb13-5"><a href="#cb13-5" aria-hidden="true" tabindex="-1"></a><span class="ex">sudoedit</span> <span class="er">(</span><span class="ex">8</span><span class="kw">)</span>         <span class="ex">-</span> execute a command as another user</span>
<span id="cb13-6"><a href="#cb13-6" aria-hidden="true" tabindex="-1"></a><span class="ex">sudoers</span> <span class="er">(</span><span class="ex">5</span><span class="kw">)</span>          <span class="ex">-</span> default sudo security policy plugin</span>
<span id="cb13-7"><a href="#cb13-7" aria-hidden="true" tabindex="-1"></a><span class="ex">sudoreplay</span> <span class="er">(</span><span class="ex">8</span><span class="kw">)</span>       <span class="ex">-</span> replay sudo session logs</span>
<span id="cb13-8"><a href="#cb13-8" aria-hidden="true" tabindex="-1"></a><span class="ex">visudo</span> <span class="er">(</span><span class="ex">8</span><span class="kw">)</span>           <span class="ex">-</span> edit the sudoers file</span></code></pre>
  </div>
  <p>Otro recurso útil cuando tenemos problemas para entender un comando
    largo es: <a href="https://explainshell.com/">https://explainshell.com/</a></p>
  <hr />
  <h2 id="conclusión">Conclusión</h2>
  <p>A continuación cubriremos una gran cantidad de comandos, muchos de
    los cuales pueden ser nuevos para usted. Sin embargo, ahora sabe cómo
    buscar ayuda con cualquier comando que no conozca o con el que no esté
    seguro de sus opciones. Además, le animamos a explorar su curiosidad y a
    dedicar el tiempo que necesite para experimentar con las herramientas
    presentadas. Siempre será tiempo bien invertido.</p>
  <p><a href="./../readme.md#2-linux-y-bash-script">Regresar a la guía
      principal</a></p>
  <blockquote>
    <p><strong>Autor:</strong> Fravelz<br />
      <strong>Colaborador:</strong> <span class="citation" data-cites="studentethical">@studentethical</span> (Student
      Ethical)
    </p>
  </blockquote>
</body>

</html>