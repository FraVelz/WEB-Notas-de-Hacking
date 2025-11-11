import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "./../../../componentes/estructura.jsx";
import Enlace from "./../../../componentes/enlace.jsx";
import Linea from "./../../../componentes/linea.jsx";
import Lista from "./../../../componentes/lista.jsx";
import Texto from "./../../../componentes/texto.jsx";
import Titulo from "./../../../componentes/titulo.jsx";
function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#obtener-ayuda">Obtener ayuda</Enlace >
        <Lista>
          <li><Enlace href="#temario">Temario</Enlace ></li>
          <li><Enlace href="#primer-comando">Primer comando</Enlace ></li>
          <li><Enlace href="#ayuda-rápida---help-y--h">Ayuda rápida
            (<code>--help</code> y <code>-h</code>)</Enlace ></li>
          <li><Enlace href="#buscar-comandos-y-documentación-relacionada-apropos">Buscar
            comandos y documentación relacionada (<code>apropos</code>)</Enlace ></li>
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
        <div className="sourceCode" id="cb1">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb1-1"><Enlace href="#cb1-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">fravelz@htb[/htb]$</span> ls</span>
              <span id="cb1-2"><Enlace href="#cb1-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">cacert.der</span>  Documents  Music     Public     Videos</span>
              <span id="cb1-3"><Enlace href="#cb1-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">Desktop</span>     Downloads  Pictures  Templates</span></code></pre>
        </div>
        <Texto>El comando <code>ls</code> en sistemas Linux y Unix se utiliza para
          listar los archivos y directorios dentro de la carpeta actual o de
          cualquier directorio especificado, lo que permite ver su contenido y
          administrar los archivos de forma más eficaz. Como la mayoría de los
          comandos de Linux, <code>ls</code> incluye opciones y funciones
          adicionales que ayudan a filtrar o formatear la salida para mostrar
          exactamente lo que se desea. Para descubrir qué opciones ofrece una
          herramienta o comando, existen varias maneras de obtener ayuda. Una de
          ellas es usar el comando <code>man</code>, que muestra las páginas del
          manual de los comandos y proporciona información detallada sobre su
          uso.</Texto>
        <Texto><strong>Sintaxis:</strong></Texto>
        <div className="sourceCode" id="cb2">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb2-1"><Enlace href="#cb2-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">fravelz@htb[/htb]$</span> man <span className="op">&lt;</span>tool<span className="op">&gt;</span></span></code></pre>
        </div>
        <Texto>Veamos un ejemplo y obtengamos ayuda para el comando
          <code>ls</code>:
        </Texto>
        <Texto><strong>Ejemplo:</strong></Texto>
        <div className="sourceCode" id="cb3">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb3-1"><Enlace href="#cb3-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">fravelz@htb[/htb]$</span> man ls</span></code></pre>
        </div>
        <div className="sourceCode" id="cb4">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb4-1"><Enlace href="#cb4-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">LS</span><span className="er">(</span><span className="ex">1</span><span className="kw">)</span>                            <span className="ex">User</span> Commands                           LS<span className="er">(</span><span className="ex">1</span><span className="kw">)</span></span>
              <span id="cb4-2"><Enlace href="#cb4-2" aria-hidden="true" tabindex="-1"></Enlace ></span>
              <span id="cb4-3"><Enlace href="#cb4-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">NAME</span></span>
              <span id="cb4-4"><Enlace href="#cb4-4" aria-hidden="true" tabindex="-1"></Enlace >       <span className="fu">ls</span> <span className="at">-</span> list directory contents</span>
              <span id="cb4-5"><Enlace href="#cb4-5" aria-hidden="true" tabindex="-1"></Enlace ></span>
              <span id="cb4-6"><Enlace href="#cb4-6" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">SYNOPSIS</span></span>
              <span id="cb4-7"><Enlace href="#cb4-7" aria-hidden="true" tabindex="-1"></Enlace >       <span className="fu">ls</span> <span className="pp">[</span><span className="ss">OPTION</span><span className="pp">]</span>... <span className="pp">[</span><span className="ss">FILE</span><span className="pp">]</span>...</span>
              <span id="cb4-8"><Enlace href="#cb4-8" aria-hidden="true" tabindex="-1"></Enlace ></span>
              <span id="cb4-9"><Enlace href="#cb4-9" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">DESCRIPTION</span></span>
              <span id="cb4-10"><Enlace href="#cb4-10" aria-hidden="true" tabindex="-1"></Enlace >       <span className="ex">List</span>  information  about  the FILEs <span className="er">(</span><span className="ex">the</span> current directory by default<span className="kw">)</span><span className="bu">.</span></span>
              <span id="cb4-11"><Enlace href="#cb4-11" aria-hidden="true" tabindex="-1"></Enlace >       <span className="ex">Sort</span> entries alphabetically if none of <span className="at">-cftuvSUX</span> nor <span className="at">--sort</span>  is  speci‐</span>
              <span id="cb4-12"><Enlace href="#cb4-12" aria-hidden="true" tabindex="-1"></Enlace >       <span className="ex">fied.</span></span>
              <span id="cb4-13"><Enlace href="#cb4-13" aria-hidden="true" tabindex="-1"></Enlace ></span>
              <span id="cb4-14"><Enlace href="#cb4-14" aria-hidden="true" tabindex="-1"></Enlace >       <span className="ex">Mandatory</span>  arguments  to  long  options are mandatory for short options</span>
              <span id="cb4-15"><Enlace href="#cb4-15" aria-hidden="true" tabindex="-1"></Enlace >       <span className="ex">too.</span></span>
              <span id="cb4-16"><Enlace href="#cb4-16" aria-hidden="true" tabindex="-1"></Enlace ></span>
              <span id="cb4-17"><Enlace href="#cb4-17" aria-hidden="true" tabindex="-1"></Enlace >       <span className="ex">-a,</span> <span className="at">--all</span></span>
              <span id="cb4-18"><Enlace href="#cb4-18" aria-hidden="true" tabindex="-1"></Enlace >              <span className="cf">do</span> <span className="ex">not</span> ignore entries starting with .</span>
              <span id="cb4-19"><Enlace href="#cb4-19" aria-hidden="true" tabindex="-1"></Enlace ></span>
              <span id="cb4-20"><Enlace href="#cb4-20" aria-hidden="true" tabindex="-1"></Enlace >       <span className="ex">-A,</span> <span className="at">--almost-all</span></span>
              <span id="cb4-21"><Enlace href="#cb4-21" aria-hidden="true" tabindex="-1"></Enlace >              <span className="cf">do</span> <span className="ex">not</span> list implied . and ..</span>
              <span id="cb4-22"><Enlace href="#cb4-22" aria-hidden="true" tabindex="-1"></Enlace ></span>
              <span id="cb4-23"><Enlace href="#cb4-23" aria-hidden="true" tabindex="-1"></Enlace >       <span className="ex">--author</span></span>
              <span id="cb4-24"><Enlace href="#cb4-24" aria-hidden="true" tabindex="-1"></Enlace > <span className="ex">Manual</span> page ls<span className="er">(</span><span className="ex">1</span><span className="kw">)</span> <span className="ex">line</span> 1 <span className="er">(</span><span className="ex">press</span> h for help or q to quit<span className="kw">)</span></span></code></pre>
        </div>
        <Texto>Tras ver algunos ejemplos, también podemos consultar rápidamente los
          parámetros opcionales sin tener que consultar toda la documentación.
          Disponemos de varias maneras de hacerlo.</Texto>
        <Linea />
        <Titulo title="h2" id="ayuda-rápida---help-y--h">Ayuda rápida (<code>--help</code> y
          <code>-h</code>)
        </Titulo>
        <Texto><strong>Sintaxis:</strong></Texto>
        <div className="sourceCode" id="cb5">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb5-1"><Enlace href="#cb5-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Obtener ayuda</span></span>
              <span id="cb5-2"><Enlace href="#cb5-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">fravelz@htb[/htb]$</span> <span className="op">&lt;</span>tool<span className="op">&gt;</span> --help</span></code></pre>
        </div>
        <Texto><strong>Ejemplo:</strong></Texto>
        <div className="sourceCode" id="cb6">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb6-1"><Enlace href="#cb6-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Obtener ayuda</span></span>
              <span id="cb6-2"><Enlace href="#cb6-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">fravelz@htb[/htb]$</span> ls <span className="at">--help</span></span></code></pre>
        </div>
        <div className="sourceCode" id="cb7">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb7-1"><Enlace href="#cb7-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">Usage:</span> ls <span className="pp">[</span><span className="ss">OPTION</span><span className="pp">]</span>... <span className="pp">[</span><span className="ss">FILE</span><span className="pp">]</span>...</span>
              <span id="cb7-2"><Enlace href="#cb7-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">List</span> information about the FILEs <span className="er">(</span><span className="ex">the</span> current directory by default<span className="kw">)</span><span className="bu">.</span></span>
              <span id="cb7-3"><Enlace href="#cb7-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">Sort</span> entries alphabetically if none of <span className="at">-cftuvSUX</span> nor <span className="at">--sort</span> is specified.</span>
              <span id="cb7-4"><Enlace href="#cb7-4" aria-hidden="true" tabindex="-1"></Enlace ></span>
              <span id="cb7-5"><Enlace href="#cb7-5" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">Mandatory</span> arguments to long options are mandatory for short options too.</span>
              <span id="cb7-6"><Enlace href="#cb7-6" aria-hidden="true" tabindex="-1"></Enlace >  <span className="ex">-a,</span> <span className="at">--all</span>                  do not ignore entries starting with .</span>
              <span id="cb7-7"><Enlace href="#cb7-7" aria-hidden="true" tabindex="-1"></Enlace >  <span className="ex">-A,</span> <span className="at">--almost-all</span>           do not list implied . and ..</span>
              <span id="cb7-8"><Enlace href="#cb7-8" aria-hidden="true" tabindex="-1"></Enlace >      <span className="ex">--author</span>               with <span className="at">-l,</span> print the author of each file</span>
              <span id="cb7-9"><Enlace href="#cb7-9" aria-hidden="true" tabindex="-1"></Enlace >  <span className="ex">-b,</span> <span className="at">--escape</span>               print C-style escapes for nongraphic characters</span>
              <span id="cb7-10"><Enlace href="#cb7-10" aria-hidden="true" tabindex="-1"></Enlace >      <span className="ex">--block-size=SIZE</span>      with <span className="at">-l,</span> scale sizes by SIZE when printing them<span className="kw">;</span></span>
              <span id="cb7-11"><Enlace href="#cb7-11" aria-hidden="true" tabindex="-1"></Enlace >                             <span className="ex">e.g.,</span> <span className="st">&#39;--block-size=M&#39;</span><span className="kw">;</span> <span className="ex">see</span> SIZE format below</span>
              <span id="cb7-12"><Enlace href="#cb7-12" aria-hidden="true" tabindex="-1"></Enlace ></span>
              <span id="cb7-13"><Enlace href="#cb7-13" aria-hidden="true" tabindex="-1"></Enlace >  <span className="ex">-B,</span> <span className="at">--ignore-backups</span>       do not list implied entries ending with ~</span>
              <span id="cb7-14"><Enlace href="#cb7-14" aria-hidden="true" tabindex="-1"></Enlace >  <span className="ex">-c</span>                         with <span className="at">-lt:</span> sort by, and show, ctime <span className="er">(</span><span className="bu">time</span> of last</span>
              <span id="cb7-15"><Enlace href="#cb7-15" aria-hidden="true" tabindex="-1"></Enlace >                             <span className="ex">modification</span> of file status information<span className="kw">);</span></span>
              <span id="cb7-16"><Enlace href="#cb7-16" aria-hidden="true" tabindex="-1"></Enlace >                             <span className="ex">with</span> <span className="at">-l:</span> show ctime and sort by name<span className="kw">;</span></span>
              <span id="cb7-17"><Enlace href="#cb7-17" aria-hidden="true" tabindex="-1"></Enlace >                             <span className="ex">otherwise:</span> sort by ctime, newest first</span>
              <span id="cb7-18"><Enlace href="#cb7-18" aria-hidden="true" tabindex="-1"></Enlace ></span>
              <span id="cb7-19"><Enlace href="#cb7-19" aria-hidden="true" tabindex="-1"></Enlace >  <span className="ex">-C</span>                         list entries by columns</span>
              <span id="cb7-20"><Enlace href="#cb7-20" aria-hidden="true" tabindex="-1"></Enlace ><span className="op">&lt;</span>SNIP<span className="op">&gt;</span></span></code></pre>
        </div>
        <Texto>Algunas herramientas proporcionan una versión corta de ayuda usando
          <code>-h</code> en lugar de <code>--help</code>:
        </Texto>
        <Texto><strong>Sintaxis:</strong></Texto>
        <div className="sourceCode" id="cb8">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb8-1"><Enlace href="#cb8-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Obtener ayuda</span></span>
              <span id="cb8-2"><Enlace href="#cb8-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">fravelz@htb[/htb]$</span> <span className="op">&lt;</span>tool<span className="op">&gt;</span> -h</span></code></pre>
        </div>
        <Texto><strong>Ejemplo:</strong></Texto>
        <div className="sourceCode" id="cb9">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb9-1"><Enlace href="#cb9-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">fravelz@htb[/htb]$</span> curl <span className="at">-h</span></span></code></pre>
        </div>
        <div className="sourceCode" id="cb10">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb10-1"><Enlace href="#cb10-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">Usage:</span> curl <span className="pp">[</span><span className="ss">options...</span><span className="pp">]</span> <span className="op">&lt;</span>url<span className="op">&gt;</span></span>
              <span id="cb10-2"><Enlace href="#cb10-2" aria-hidden="true" tabindex="-1"></Enlace >     <span className="ex">--abstract-unix-socket</span> <span className="op">&lt;</span>path<span className="op">&gt;</span> Connect via abstract Unix domain socket</span>
              <span id="cb10-3"><Enlace href="#cb10-3" aria-hidden="true" tabindex="-1"></Enlace >     <span className="ex">--anyauth</span>       Pick any authentication method</span>
              <span id="cb10-4"><Enlace href="#cb10-4" aria-hidden="true" tabindex="-1"></Enlace > <span className="ex">-a,</span> <span className="at">--append</span>        Append to target file when uploading</span>
              <span id="cb10-5"><Enlace href="#cb10-5" aria-hidden="true" tabindex="-1"></Enlace >     <span className="ex">--basic</span>         Use HTTP Basic Authentication</span>
              <span id="cb10-6"><Enlace href="#cb10-6" aria-hidden="true" tabindex="-1"></Enlace >     <span className="ex">--cacert</span> <span className="op">&lt;</span>file<span className="op">&gt;</span> CA certificate to verify peer against</span>
              <span id="cb10-7"><Enlace href="#cb10-7" aria-hidden="true" tabindex="-1"></Enlace >     <span className="ex">--capath</span> <span className="op">&lt;</span>dir<span className="op">&gt;</span>  CA directory to verify peer against</span>
              <span id="cb10-8"><Enlace href="#cb10-8" aria-hidden="true" tabindex="-1"></Enlace > <span className="ex">-E,</span> <span className="at">--cert</span> <span className="op">&lt;</span>certificate<span className="pp">[</span><span className="ss">:password</span><span className="pp">]</span><span className="op">&gt;</span> Client certificate file and password</span>
              <span id="cb10-9"><Enlace href="#cb10-9" aria-hidden="true" tabindex="-1"></Enlace ><span className="op">&lt;</span>SNIP<span className="op">&gt;</span></span></code></pre>
        </div>
        <Texto>Como podemos ver, los resultados no difieren mucho en este ejemplo:
          <code>man</code> ofrece la documentación completa y
          <code>--help</code>/<code>-h</code> suele dar un resumen rápido y
          práctico.
        </Texto>
        <Linea />
        <Titulo title="h2" id="buscar-comandos-y-documentación-relacionada-apropos">Buscar
          comandos y documentación relacionada (<code>apropos</code>)</Titulo>
        <Texto>Otra herramienta útil al principio es <code>apropos</code>. Cada
          página del manual incluye una breve descripción. Esta herramienta busca
          en las descripciones instancias de una palabra clave determinada.</Texto>
        <Texto><strong>Sintaxis:</strong></Texto>
        <div className="sourceCode" id="cb11">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb11-1"><Enlace href="#cb11-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Obtener ayuda</span></span>
              <span id="cb11-2"><Enlace href="#cb11-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">fravelz@htb[/htb]$</span> apropos <span className="op">&lt;</span>keyword<span className="op">&gt;</span></span></code></pre>
        </div>
        <Texto><strong>Ejemplo:</strong></Texto>
        <div className="sourceCode" id="cb12">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb12-1"><Enlace href="#cb12-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Obtener ayuda</span></span>
              <span id="cb12-2"><Enlace href="#cb12-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">fravelz@htb[/htb]$</span> apropos sudo</span></code></pre>
        </div>
        <div className="sourceCode" id="cb13">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb13-1"><Enlace href="#cb13-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">sudo</span> <span className="er">(</span><span className="ex">8</span><span className="kw">)</span>             <span className="ex">-</span> execute a command as another user</span>
              <span id="cb13-2"><Enlace href="#cb13-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">sudo.conf</span> <span className="er">(</span><span className="ex">5</span><span className="kw">)</span>        <span className="ex">-</span> configuration for sudo front end</span>
              <span id="cb13-3"><Enlace href="#cb13-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">sudo_plugin</span> <span className="er">(</span><span className="ex">8</span><span className="kw">)</span>      <span className="ex">-</span> Sudo Plugin API</span>
              <span id="cb13-4"><Enlace href="#cb13-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">sudo_root</span> <span className="er">(</span><span className="ex">8</span><span className="kw">)</span>        <span className="ex">-</span> How to run administrative commands</span>
              <span id="cb13-5"><Enlace href="#cb13-5" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">sudoedit</span> <span className="er">(</span><span className="ex">8</span><span className="kw">)</span>         <span className="ex">-</span> execute a command as another user</span>
              <span id="cb13-6"><Enlace href="#cb13-6" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">sudoers</span> <span className="er">(</span><span className="ex">5</span><span className="kw">)</span>          <span className="ex">-</span> default sudo security policy plugin</span>
              <span id="cb13-7"><Enlace href="#cb13-7" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">sudoreplay</span> <span className="er">(</span><span className="ex">8</span><span className="kw">)</span>       <span className="ex">-</span> replay sudo session logs</span>
              <span id="cb13-8"><Enlace href="#cb13-8" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">visudo</span> <span className="er">(</span><span className="ex">8</span><span className="kw">)</span>           <span className="ex">-</span> edit the sudoers file</span></code></pre>
        </div>
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
