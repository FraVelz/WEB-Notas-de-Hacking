import Titulo from "./../../../componentes/titulo.jsx";
import Lista from "./../../../componentes/lista.jsx";
import Texto from "./../../../componentes/texto.jsx";
import Linea from "./../../../componentes/linea.jsx";
import Enlace from "./../../../componentes/enlace.jsx";
import { TemarioCompleto } from "./../../../componentes/estructura.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#manipulación-de-strings-en-bash-script">Manipulación de
        strings en bash script</Enlace >
        <Lista>
          <li><Enlace href="#temario">Temario</Enlace ></li>
          <li><Enlace href="#1-definir-strings">1. Definir strings</Enlace ></li>
          <li><Enlace href="#2-longitud-de-un-string">2. Longitud de un string</Enlace ></li>
          <li><Enlace href="#3-substrings">3. Substrings</Enlace ></li>
          <li><Enlace href="#4-reemplazos-dentro-de-un-string">4. Reemplazos dentro de
            un string</Enlace ></li>
          <li><Enlace href="#5-eliminar-prefijos-y-sufijos">5. Eliminar prefijos y
            sufijos</Enlace ></li>
          <li><Enlace href="#6-concatenar-strings">6. Concatenar strings</Enlace ></li>
          <li><Enlace href="#7-convertir-mayúsculas--minúsculas-bash-4">7. Convertir
            mayúsculas / minúsculas (Bash 4+)</Enlace ></li>
          <li><Enlace href="#8-buscar-dentro-de-un-string">8. Buscar dentro de un
            string</Enlace ></li>
          <li><Enlace href="#9-dividir-un-string-split">9. Dividir un string
            (split)</Enlace ></li>
          <li><Enlace href="#10-juntar-un-array-en-string">10. Juntar un array en
            string</Enlace ></li>
          <li><Enlace href="#11-expresiones-regulares-en-strings">11. Expresiones
            regulares en strings</Enlace ></li>
          <li><Enlace href="#12-lectura-carácter-por-carácter">12. Lectura carácter por
            carácter</Enlace ></li>
        </Lista>
      </li>
    </Lista>
  );
}

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="manipulación-de-strings-en-bash-script">Manipulación de strings
        en bash script</Titulo>

      <Linea />

      <TemarioCompleto temario={Temario} />

      <Titulo title="h2" id="definir-strings">1. Definir strings</Titulo>
      <div className="sourceCode" id="cb1">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb1-1"><Enlace href="#cb1-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="va">cadena</span><span className="op">=</span><span className="st">&quot;Hola Mundo&quot;</span></span></code></pre>
      </div>
      <Lista>
        <li>Siempre usar <strong>comillas</strong> si hay espacios.</li>
        <li>No existen tipos como en otros lenguajes, todo es texto.</li>
      </Lista>
      <Linea />
      <Titulo title="h2" id="longitud-de-un-string">2. Longitud de un string</Titulo>
      <div className="sourceCode" id="cb2">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb2-1"><Enlace href="#cb2-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">echo</span> <span className="st">&quot;</span><span className="va">$(</span><span className="op">#</span><span className="va">cadena)</span><span className="st">&quot;</span>   <span className="co">## 10</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="substrings">3. Substrings</Titulo>
      <div className="sourceCode" id="cb3">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb3-1"><Enlace href="#cb3-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">echo</span> <span className="st">&quot;</span><span className="va">${"{"}cadena</span><span className="op">:</span><span className="dv">0</span><span className="op">:</span><span className="dv">4</span><span className="va">{"}"}</span><span className="st">&quot;</span>   <span className="co">## Hola (desde índice 0, tomar 4)</span></span>
            <span id="cb3-2"><Enlace href="#cb3-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">echo</span> <span className="st">&quot;</span><span className="va">$i{"{"}cadena</span><span className="op">:</span><span className="dv">5</span><span className="va">{"}"}</span><span className="st">&quot;</span>     <span className="co">## Mundo (desde índice 5 hasta el final)</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="reemplazos-dentro-de-un-string">4. Reemplazos dentro de un
        string</Titulo>
      <div className="sourceCode" id="cb4">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb4-1"><Enlace href="#cb4-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="va">texto</span><span className="op">=</span><span className="st">&quot;banana&quot;</span></span>
            <span id="cb4-2"><Enlace href="#cb4-2" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb4-3"><Enlace href="#cb4-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">echo</span> <span className="st">&quot;</span><span className="va">${"{"}texto</span><span className="op">/</span><span className="ss">na</span><span className="op">/</span>NA<span className="va">{"}"}</span><span className="st">&quot;</span>    <span className="co">## baNAna (primer reemplazo)</span></span>
            <span id="cb4-4"><Enlace href="#cb4-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">echo</span> <span className="st">&quot;</span><span className="va">${"{"}texto</span><span className="op">//</span><span className="ss">na</span><span className="op">/</span>NA<span className="va">{"}"}</span><span className="st">&quot;</span>   <span className="co">## baNANA (todos los reemplazos)</span></span>
            <span id="cb4-5"><Enlace href="#cb4-5" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb4-6"><Enlace href="#cb4-6" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">echo</span> <span className="st">&quot;</span><span className="va">${"{"}texto</span><span className="op">/</span><span className="ss">na</span><span className="op">/</span><span className="va">{"}"}</span><span className="st">&quot;</span>      <span className="co">## baana   (borra primer &quot;na&quot;)</span></span>
            <span id="cb4-7"><Enlace href="#cb4-7" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">echo</span> <span className="st">&quot;</span><span className="va">${"{"}texto</span><span className="op">//</span><span className="ss">na</span><span className="op">/</span><span className="va">{"}"}</span><span className="st">&quot;</span>     <span className="co">## baa     (borra todos &quot;na&quot;)</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="eliminar-prefijos-y-sufijos">5. Eliminar prefijos y sufijos</Titulo>
      <div className="sourceCode" id="cb5">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb5-1"><Enlace href="#cb5-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="va">archivo</span><span className="op">=</span><span className="st">&quot;documento.txt&quot;</span></span>
            <span id="cb5-2"><Enlace href="#cb5-2" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb5-3"><Enlace href="#cb5-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">echo</span> <span className="st">&quot;</span><span className="va">${"{"}archivo</span><span className="op">%</span>.txt<span className="va">{"}"}</span><span className="st">&quot;</span>   <span className="co">## documento  (quita sufijo .txt)</span></span>
            <span id="cb5-4"><Enlace href="#cb5-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">echo</span> <span className="st">&quot;</span><span className="va">${"{"}archivo</span><span className="op">#</span>doc<span className="va">{"}"}</span><span className="st">&quot;</span>    <span className="co">## umento.txt (quita prefijo doc) # Con doble signo borra lo más largo ruta=&quot;/home/user/docs/file.txt&quot; echo &quot;{"${ruta##*/}"}&quot;       # file.txt  (quita todo hasta el último /) echo &quot;{"${ruta %%/*}"}&quot;       # vacío     (quita todo desde el primer /)</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="concatenar-strings">6. Concatenar strings</Titulo>
      <div className="sourceCode" id="cb6">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb6-1"><Enlace href="#cb6-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="va">nombre</span><span className="op">=</span><span className="st">&quot;Francisco&quot;</span></span>
            <span id="cb6-2"><Enlace href="#cb6-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="va">saludo</span><span className="op">=</span><span className="st">&quot;Hola, </span><span className="va">$nombre</span><span className="st">&quot;</span></span>
            <span id="cb6-3"><Enlace href="#cb6-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">echo</span> <span className="st">&quot;</span><span className="va">$saludo</span><span className="st">&quot;</span></span></code></pre>
      </div>
      <Texto>También:</Texto>
      <div className="sourceCode" id="cb7">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb7-1"><Enlace href="#cb7-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="va">full</span><span className="op">=</span><span className="st">&quot;Hola&quot;</span> </span>
            <span id="cb7-2"><Enlace href="#cb7-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="va">full</span><span className="op">+=</span><span className="st">&quot; Mundo&quot;</span></span>
            <span id="cb7-3"><Enlace href="#cb7-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">echo</span> <span className="st">&quot;</span><span className="va">$full</span><span className="st">&quot;</span>   <span className="co">## Hola Mundo</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="convertir-mayúsculas-minúsculas-bash-4">7. Convertir mayúsculas
        / minúsculas (Bash 4+)</Titulo>
      <div className="sourceCode" id="cb8">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb8-1"><Enlace href="#cb8-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="va">texto</span><span className="op">=</span><span className="st">&quot;hola mundo&quot;</span></span>
            <span id="cb8-2"><Enlace href="#cb8-2" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb8-3"><Enlace href="#cb8-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">echo</span> <span className="st">&quot;</span><span className="va">${"{"}texto</span><span className="op">^^</span><span className="va">{"}"}</span><span className="st">&quot;</span>   <span className="co">## HOLA MUNDO</span></span>
            <span id="cb8-4"><Enlace href="#cb8-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">echo</span> <span className="st">&quot;</span><span className="va">${"{"}texto</span><span className="op">,,</span><span className="va">{"}"}</span><span className="st">&quot;</span>   <span className="co">## hola mundo</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="buscar-dentro-de-un-string">8. Buscar dentro de un string</Titulo>
      <div className="sourceCode" id="cb9">
        <pre className="sourceCode bash"><code className="sourceCode bash"><span id="cb9-1"><Enlace href="#cb9-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="va">cadena</span><span className="op">=</span><span className="st">&quot;programacion&quot;</span></span>
          <span id="cb9-2"><Enlace href="#cb9-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">if</span> <span className="kw">[[</span> <span className="st">&quot;</span><span className="va">$cadena</span><span className="st">&quot;</span> <span className="ot">==</span> <span className="pp">*</span><span className="st">&quot;grama&quot;</span>- <span className="kw">]];</span> <span className="cf">then</span></span>
          <span id="cb9-3"><Enlace href="#cb9-3" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">echo</span> <span className="st">&quot;Contiene &#39;grama&#39;&quot;</span></span>
          <span id="cb9-4"><Enlace href="#cb9-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">fi</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="dividir-un-string-split">9. Dividir un string (split)</Titulo>
      <Texto>Con <code>IFS</code> (Internal Field Separator):</Texto>
      <div className="sourceCode" id="cb10">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb10-1"><Enlace href="#cb10-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="va">frase</span><span className="op">=</span><span className="st">&quot;uno dos tres&quot;</span></span>
            <span id="cb10-2"><Enlace href="#cb10-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="va">IFS</span><span className="op">=</span><span className="st">&quot; &quot;</span> <span className="bu">read</span> <span className="at">-r</span> <span className="at">-a</span> <span className="va">palabras</span> <span className="op">&lt;&lt;&lt;</span> <span className="st">&quot;</span><span className="va">$frase</span><span className="st">&quot;</span></span>
            <span id="cb10-3"><Enlace href="#cb10-3" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb10-4"><Enlace href="#cb10-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">echo</span> <span className="st">&quot;</span><span className="va">${"{"}palabras</span><span className="op">[</span><span className="dv">0</span><span className="op">]</span><span className="va">{"}"}</span><span className="st">&quot;</span>  <span className="co">## uno</span></span>
            <span id="cb10-5"><Enlace href="#cb10-5" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">echo</span> <span className="st">&quot;</span><span className="va">${"{"}palabras</span><span className="op">[</span><span className="dv">1</span><span className="op">]</span><span className="va">{"}"}</span><span className="st">&quot;</span>  <span className="co">## dos</span></span>
            <span id="cb10-6"><Enlace href="#cb10-6" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">echo</span> <span className="st">&quot;</span><span className="va">${"{"}palabras</span><span className="op">[</span><span className="dv">2</span><span className="op">]</span><span className="va">{"}"}</span><span className="st">&quot;</span>  <span className="co">## tres</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="juntar-un-array-en-string">10. Juntar un array en string</Titulo>
      <div className="sourceCode" id="cb11">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb11-1"><Enlace href="#cb11-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="va">lista</span><span className="op">=</span><span className="va">(</span><span className="st">&quot;a&quot;</span> <span className="st">&quot;b&quot;</span> <span className="st">&quot;c&quot;</span><span className="va">)</span></span>
            <span id="cb11-2"><Enlace href="#cb11-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">echo</span> <span className="st">&quot;</span><span className="va">${"{"}lista</span><span className="op">[*]</span><span className="va">{"}"}</span><span className="st">&quot;</span>   <span className="co">## a b c</span></span>
            <span id="cb11-3"><Enlace href="#cb11-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">echo</span> <span className="st">&quot;</span><span className="va">${"{"}lista</span><span className="op">[@]</span><span className="va">{"}"}</span><span className="st">&quot;</span>   <span className="co">## a b c</span></span></code></pre>
      </div>
      <Texto>Con separador personalizado:</Texto>
      <div className="sourceCode" id="cb12">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb12-1"><Enlace href="#cb12-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="va">IFS</span><span className="op">=</span><span className="st">&quot;,&quot;</span><span className="kw">;</span> <span className="bu">echo</span> <span className="st">&quot;</span><span className="va">${"{"}lista</span><span className="op">[*]</span><span className="va">{"}"}</span><span className="st">&quot;</span>   <span className="co">## a,b,c</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="expresiones-regulares-en-strings">11. Expresiones regulares en
        strings</Titulo>
      <div className="sourceCode" id="cb13">
        <pre className="sourceCode bash"><code className="sourceCode bash"><span id="cb13-1"><Enlace href="#cb13-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="va">cadena</span><span className="op">=</span><span className="st">&quot;abc123&quot;</span></span>
          <span id="cb13-2"><Enlace href="#cb13-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">if</span> <span className="kw">[[</span> <span className="st">&quot;</span><span className="va">$cadena</span><span className="st">&quot;</span> <span className="ot">=~</span> <span className="pp">^</span><span className="op">[</span><span className="ss">a</span><span className="op">-</span><span className="ss">z</span><span className="op">]</span><span className="pp">+</span><span className="op">[</span><span className="ss">0</span><span className="op">-</span><span className="ss">9</span><span className="op">]</span><span className="pp">+</span><span className="op">$</span> <span className="kw">]];</span> <span className="cf">then</span></span>
          <span id="cb13-3"><Enlace href="#cb13-3" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">echo</span> <span className="st">&quot;Coincide con letras seguidas de números&quot;</span></span>
          <span id="cb13-4"><Enlace href="#cb13-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">fi</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="lectura-carácter-por-carácter">12. Lectura carácter por
        carácter</Titulo>
      <div className="sourceCode" id="cb14">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb14-1"><Enlace href="#cb14-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="va">texto</span><span className="op">=</span><span className="st">&quot;Hola&quot;</span></span>
            <span id="cb14-2"><Enlace href="#cb14-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">for</span> <span className="kw">((</span> <span className="va">i</span><span className="op">=</span><span className="dv">0</span><span className="kw">;</span> <span className="va">i</span><span className="op">&lt;</span><span className="va">${"{"}</span><span className="op">#</span><span className="va">texto{"}"}</span><span className="kw">;</span> <span className="va">i</span><span className="op">++</span> <span className="kw">));</span> <span className="cf">do</span></span>
            <span id="cb14-3"><Enlace href="#cb14-3" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">echo</span> <span className="st">&quot;</span><span className="va">${"{"}texto</span><span className="op">:</span><span className="va">$i</span><span className="op">:</span><span className="dv">1</span><span className="va">{"}"}</span><span className="st">&quot;</span></span>
            <span id="cb14-4"><Enlace href="#cb14-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">done</span></span></code></pre>
      </div>
      <Texto>Imprime cada letra en una línea.</Texto>
      <Linea />
      <Texto><strong>En resumen</strong>:</Texto>
      <Lista>
        <li><code>${"{"}#str}</code> → longitud</li>
        <li><code>${"{"}str:pos:len{"}"}</code> → substring</li>
        <li><code>${"{"}str/patrón/reemplazo{"}"}</code> → reemplazo</li>
        <li><code>${"{"}str%patrón{"}"}</code> / <code>${"{"}str#patrón{"}"}</code> → quitar
          prefijo/sufijo</li>
        <li><code>${"{"}str^^{"}"}</code> / <code>${"{"}str,,{"}"}</code> →
          mayúsculas/minúsculas</li>
        <li><code>IFS</code> + <code>read -a</code> → split</li>
      </Lista>
      <Linea />
      <Texto><Enlace href="./../readme.md#2-linux-y-bash-script">Regresar a la guía
        principal</Enlace ></Texto>
      <blockquote>
        <Texto><strong>Autor:</strong> Fravelz</Texto>
      </blockquote>
    </>
  );
}
export default nameabcd;
