import Titulo from "./../../componentes/titulo.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Linea from "./../../componentes/linea.jsx";

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="which-en-linux">Which en Linux</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><a href="#which-en-linux">Which en Linux</a>
          <Lista>
            <li><a href="#temario">Temario</a></li>
            <li><a href="#que-es-el-comando-which">¿Que es el comando which?</a>
              <Lista>
                <li><a href="#ejemplo-básico">Ejemplo básico</a></li>
                <li><a href="#otro-ejemplo">Otro ejemplo</a></li>
                <li><a href="#si-el-comando-no-existe">Si el comando no existe</a></li>
                <li><a href="#ver-qué-versión-se-usa-si-hay-varias-instaladas">Ver qué
                  versión se usa si hay varias instaladas</a></li>
                <li><a href="#en-resumen">En resumen</a></li>
              </Lista>
            </li>
          </Lista>
        </li>
      </Lista>
      <Texto><a href="./../../readme.md#5-python">Regresar a la Guía
        Principal</a></Texto>
      <Linea />
      <Titulo title="h2" id="que-es-el-comando-which">¿Que es el comando which?</Titulo>
      <Texto>El comando <code>which</code> en Linux (y otros sistemas Unix) sirve
        para <strong>mostrar la ruta completa del ejecutable</strong> que se
        ejecutará cuando llamas a un comando.</Texto>
      <Texto>🔹 <strong>En pocas palabras:</strong> Te dice <strong>dónde está
        ubicado</strong> el programa que se ejecutará cuando escribes algo como
        <code>python</code>, <code>ls</code>, <code>gcc</code>, etc.
      </Texto>
      <Titulo title="h3" id="ejemplo-básico">Ejemplo básico</Titulo>
      <div class="sourceCode" id="cb1">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="fu">which</span> python</span></code></pre>
      </div>
      <Texto>📤 <strong>Salida posible:</strong></Texto>
      <div class="sourceCode" id="cb2">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="ex">/usr/bin/python</span></span></code></pre>
      </div>
      <Texto>➡️ Significa que cuando escribes <code>python</code> en la terminal,
        se ejecuta el archivo <code>/usr/bin/python</code>.</Texto>
      <Linea />
      <Titulo title="h3" id="otro-ejemplo">Otro ejemplo</Titulo>
      <div class="sourceCode" id="cb3">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a><span class="fu">which</span> ls</span></code></pre>
      </div>
      <Texto>📤 Resultado:</Texto>
      <div class="sourceCode" id="cb4">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a><span class="ex">/bin/ls</span></span></code></pre>
      </div>
      <Texto>➡️ <code>ls</code> está en la carpeta <code>/bin</code>.</Texto>
      <Linea />
      <Titulo title="h3" id="si-el-comando-no-existe">Si el comando no existe</Titulo>
      <div class="sourceCode" id="cb5">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb5-1"><a href="#cb5-1" aria-hidden="true" tabindex="-1"></a><span class="fu">which</span> pepe</span></code></pre>
      </div>
      <Texto>📤 Resultado:</Texto>
      <div class="sourceCode" id="cb6">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a><span class="ex">pepe</span> not found</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h3" id="ver-qué-versión-se-usa-si-hay-varias-instaladas">Ver qué versión
        se usa si hay varias instaladas</Titulo>
      <div class="sourceCode" id="cb7">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb7-1"><a href="#cb7-1" aria-hidden="true" tabindex="-1"></a><span class="fu">which</span> <span class="at">-a</span> python</span></code></pre>
      </div>
      <Texto>📤 Resultado:</Texto>
      <div class="sourceCode" id="cb8">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb8-1"><a href="#cb8-1" aria-hidden="true" tabindex="-1"></a><span class="ex">/usr/bin/python</span></span>
            <span id="cb8-2"><a href="#cb8-2" aria-hidden="true" tabindex="-1"></a><span class="ex">/usr/local/bin/python</span></span></code></pre>
      </div>
      <Texto>➡️ Te muestra <strong>todas</strong> las ubicaciones posibles que
        coinciden, en orden de prioridad según tu <code>$PATH</code>.</Texto>
      <Linea />
      <Titulo title="h3" id="en-resumen">En resumen</Titulo>
      <table>
        <colgroup>
          <col style="width: 21%" />
          <col style="width: 78%" />
        </colgroup>
        <thead>
          <tr>
            <th>Opción</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>which comando</code></td>
            <td>Muestra la ruta del ejecutable que se ejecuta al usar ese
              comando</td>
          </tr>
          <tr>
            <td><code>which -a comando</code></td>
            <td>Muestra todas las rutas donde se encuentra ese comando</td>
          </tr>
        </tbody>
      </table>
      <Texto></Texto>
      <Texto><a href="./../../readme.md#5-python">Regresar a la Guía
        Principal</a></Texto>
      <blockquote>
        <Texto><strong>Autor:</strong> Fravelz</Texto>
      </blockquote>
    </>
  );
}
export default nameabcd;
