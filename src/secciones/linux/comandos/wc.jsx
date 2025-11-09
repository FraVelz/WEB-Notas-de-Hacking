import Titulo from "./../../componentes/titulo.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Linea from "./../../componentes/linea.jsx";
import Enlace from "../../../componentes/enlace.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
   </Lista>
  );
}

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="wc-en-linux">Wc en Linux</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><Enlace href="#wc-en-linux">Wc en Linux</Enlace >
          <Lista>
            <li><Enlace href="#temario">Temario</Enlace ></li>
            <li><Enlace href="#wc--word-count-resumen-rápido">wc — word count (resumen
              rápido)</Enlace >
              <Lista>
                <li><Enlace href="#sintaxis-básica">Sintaxis básica</Enlace ></li>
                <li><Enlace href="#opciones-útiles">Opciones útiles</Enlace ></li>
                <li><Enlace href="#ejemplos">Ejemplos</Enlace ></li>
                <li><Enlace href="#notas-importantes">Notas importantes</Enlace ></li>
              </Lista>
            </li>
          </Lista>
        </li>
      </Lista>
      <Texto><Enlace href="./../../readme.md#5-python">Regresar a la Guía
        Principal</Enlace ></Texto>
      <Linea />
      <Titulo title="h2" id="wc-word-count-resumen-rápido">wc — word count (resumen
        rápido)</Titulo>
      <Texto><code>wc</code> es una utilidad de Unix/Linux que
        <strong>cuenta</strong> cosas en archivos o en la entrada estándar:
        <strong>líneas, palabras, bytes o caracteres</strong>, y también la
        longitud de la línea más larga.
      </Texto>
      <Titulo title="h3" id="sintaxis-básica">Sintaxis básica</Titulo>
      <div className="sourceCode" id="cb1">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb1-1"><Enlace href="#cb1-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">wc</span> <span className="pp">[</span><span className="ss">opciones</span><span className="pp">]</span> <span className="pp">[</span><span className="ss">archivo...</span><span className="pp">]</span></span></code></pre>
      </div>
      <Texto>Si no le pasas archivo lee desde la entrada estándar (útil con
        pipes).</Texto>
      <Titulo title="h3" id="opciones-útiles">Opciones útiles</Titulo>
      <Lista>
        <li><code>-l</code> → cuenta <strong>líneas</strong>.</li>
        <li><code>-w</code> → cuenta <strong>palabras</strong>.</li>
        <li><code>-c</code> → cuenta <strong>bytes</strong>.</li>
        <li><code>-m</code> → cuenta <strong>caracteres</strong> (útil si hay
          multi-byte/UTF-8).</li>
        <li><code>-L</code> → muestra la longitud de la <strong>línea más
          larga</strong>.</li>
      </Lista>
      <Titulo title="h3" id="ejemplos">Ejemplos</Titulo>
      <div className="sourceCode" id="cb2">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb2-1"><Enlace href="#cb2-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">wc</span> archivo.txt</span>
            <span id="cb2-2"><Enlace href="#cb2-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># salida:   10  45  320 archivo.txt</span></span>
            <span id="cb2-3"><Enlace href="#cb2-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># significa: 10 líneas, 45 palabras, 320 bytes</span></span>
            <span id="cb2-4"><Enlace href="#cb2-4" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb2-5"><Enlace href="#cb2-5" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">wc</span> <span className="at">-l</span> archivo.txt</span>
            <span id="cb2-6"><Enlace href="#cb2-6" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># muestra sólo el número de líneas</span></span>
            <span id="cb2-7"><Enlace href="#cb2-7" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb2-8"><Enlace href="#cb2-8" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">cat</span> archivo.txt <span className="kw">|</span> <span className="fu">wc</span> <span className="at">-w</span></span>
            <span id="cb2-9"><Enlace href="#cb2-9" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># cuenta las palabras de la salida del cat (ej. en un pipe)</span></span>
            <span id="cb2-10"><Enlace href="#cb2-10" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb2-11"><Enlace href="#cb2-11" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">grep</span> <span className="at">-R</span> <span className="st">&quot;TODO&quot;</span> src/ <span className="kw">|</span> <span className="fu">wc</span> <span className="at">-l</span></span>
            <span id="cb2-12"><Enlace href="#cb2-12" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># cuenta cuántas líneas contienen &quot;TODO&quot; en todo el árbol src/</span></span></code></pre>
      </div>
      <Titulo title="h3" id="notas-importantes">Notas importantes</Titulo>
      <Lista>
        <li><code>-c</code> cuenta <strong>bytes</strong>, no caracteres — en
          archivos UTF-8 algunos caracteres ocupan varios bytes. Usa
          <code>-m</code> para contar caracteres visibles.
        </li>    <li>Si pasas varios archivos, <code>wc</code> muestra conteos por
          archivo y un <code>total</code> final.</li>    <li><code>wc -l</code> se usa mucho para contar líneas/entradas (por
            ejemplo, cantidad de archivos listados por <code>ls</code>,
          coincidencias de <code>grep</code>, etc.).</li>  </Lista>
      <Texto>–</Texto>
      <Texto><Enlace href="./../../readme.md#5-python">Regresar a la Guía
        Principal</Enlace ></Texto>
      <blockquote>
        <Texto><strong>Autor:</strong> Fravelz</Texto>
      </blockquote>
    </>
  );
}
export default nameabcd;
