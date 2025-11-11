import Enlace from "../../../componentes/enlace.jsx";
import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "./../../../componentes/estructura.jsx";
import Linea from "./../../../componentes/linea.jsx";
import Lista from "./../../../componentes/lista.jsx";
import Texto from "./../../../componentes/texto.jsx";
import Titulo from "./../../../componentes/titulo.jsx";
function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#which-en-linux">Which en Linux</Enlace >
        <Lista>
          <li><Enlace href="#temario">Temario</Enlace ></li>
          <li><Enlace href="#que-es-el-comando-which">¿Que es el comando which?</Enlace >
            <Lista>
              <li><Enlace href="#ejemplo-básico">Ejemplo básico</Enlace ></li>
              <li><Enlace href="#otro-ejemplo">Otro ejemplo</Enlace ></li>
              <li><Enlace href="#si-el-comando-no-existe">Si el comando no existe</Enlace ></li>
              <li><Enlace href="#ver-qué-versión-se-usa-si-hay-varias-instaladas">Ver qué
                versión se usa si hay varias instaladas</Enlace ></li>
              <li><Enlace href="#en-resumen">En resumen</Enlace ></li>
            </Lista>
          </li>
        </Lista>
      </li>
    </Lista>
  );
}

function nameabcd({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" id="which-en-linux">Which en Linux</Titulo>

        <Linea />

        <TemarioCompleto temario={Temario} />

        <Titulo title="h2" id="que-es-el-comando-which">¿Que es el comando which?</Titulo>

        <Texto>El comando <code>which</code> en Linux (y otros sistemas Unix) sirve
          para <strong>mostrar la ruta completa del ejecutable</strong> que se
          ejecutará cuando llamas a un comando.</Texto>
        <Texto>🔹 <strong>En pocas palabras:</strong> Te dice <strong>dónde está
          ubicado</strong> el programa que se ejecutará cuando escribes algo como
          <code>python</code>, <code>ls</code>, <code>gcc</code>, etc.
        </Texto>
        <Titulo title="h3" id="ejemplo-básico">Ejemplo básico</Titulo>
        <div className="sourceCode" id="cb1">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb1-1"><Enlace href="#cb1-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">which</span> python</span></code></pre>
        </div>
        <Texto>📤 <strong>Salida posible:</strong></Texto>
        <div className="sourceCode" id="cb2">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb2-1"><Enlace href="#cb2-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">/usr/bin/python</span></span></code></pre>
        </div>
        <Texto>➡️ Significa que cuando escribes <code>python</code> en la terminal,
          se ejecuta el archivo <code>/usr/bin/python</code>.</Texto>
        <Linea />
        <Titulo title="h3" id="otro-ejemplo">Otro ejemplo</Titulo>
        <div className="sourceCode" id="cb3">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb3-1"><Enlace href="#cb3-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">which</span> ls</span></code></pre>
        </div>
        <Texto>📤 Resultado:</Texto>
        <div className="sourceCode" id="cb4">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb4-1"><Enlace href="#cb4-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">/bin/ls</span></span></code></pre>
        </div>
        <Texto>➡️ <code>ls</code> está en la carpeta <code>/bin</code>.</Texto>
        <Linea />
        <Titulo title="h3" id="si-el-comando-no-existe">Si el comando no existe</Titulo>
        <div className="sourceCode" id="cb5">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb5-1"><Enlace href="#cb5-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">which</span> pepe</span></code></pre>
        </div>
        <Texto>📤 Resultado:</Texto>
        <div className="sourceCode" id="cb6">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb6-1"><Enlace href="#cb6-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">pepe</span> not found</span></code></pre>
        </div>
        <Linea />
        <Titulo title="h3" id="ver-qué-versión-se-usa-si-hay-varias-instaladas">Ver qué versión
          se usa si hay varias instaladas</Titulo>
        <div className="sourceCode" id="cb7">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb7-1"><Enlace href="#cb7-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">which</span> <span className="at">-a</span> python</span></code></pre>
        </div>
        <Texto>📤 Resultado:</Texto>
        <div className="sourceCode" id="cb8">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb8-1"><Enlace href="#cb8-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">/usr/bin/python</span></span>
              <span id="cb8-2"><Enlace href="#cb8-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">/usr/local/bin/python</span></span></code></pre>
        </div>
        <Texto>➡️ Te muestra <strong>todas</strong> las ubicaciones posibles que
          coinciden, en orden de prioridad según tu <code>$PATH</code>.</Texto>
        <Linea />
        <Titulo title="h3" id="en-resumen">En resumen</Titulo>
        <table>
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
        <Texto><Enlace href="./../../readme.md#5-python">Regresar a la Guía
          Principal</Enlace ></Texto>
        <blockquote>
          <Texto><strong>Autor:</strong> Fravelz</Texto>
        </blockquote>
      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}
export default nameabcd;
