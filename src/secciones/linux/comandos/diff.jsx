import Titulo from "./../../../componentes/titulo.jsx";
import Lista from "./../../../componentes/lista.jsx";
import Texto from "./../../../componentes/texto.jsx";
import Linea from "./../../../componentes/linea.jsx";
import Enlace from "./../../../componentes/enlace.jsx";
import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "./../../../componentes/estructura.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#en-resumen">En resumen</Enlace ></li>
      <li><Enlace href="#ejemplo-básico">Ejemplo básico</Enlace ></li>
      <li><Enlace href="#símbolos-principales">Símbolos principales</Enlace ></li>
      <li><Enlace href="#opciones-útiles">Opciones útiles</Enlace ></li>
      <li><Enlace href="#usos-comunes">Usos comunes</Enlace ></li>
    </Lista>
  );
}

function nameabcd({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" className="text-center">Diff en Linux</Titulo>
        <Linea />

        <Titulo title="h2" className="2xl:hidden">Temario</Titulo>

        <TemarioCompleto temario={Temario} />

        <Titulo title="h3" id="en-resumen">En resumen</Titulo>
        <Texto>El comando <code>diff</code> en Linux/Unix se usa para
          <strong>comparar dos archivos (o carpetas)</strong> línea por línea y
          mostrar <strong>las diferencias entre ellos</strong>. 🔍
        </Texto>
        <div className="sourceCode" id="cb1">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb1-1"><Enlace href="#cb1-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">diff</span> archivo1 archivo2</span></code></pre>
        </div>
        <Texto>👉 Muestra qué líneas <strong>cambian, se agregan o eliminan</strong>
          de un archivo respecto al otro.</Texto>
        <Linea />
        <Titulo title="h3" id="ejemplo-básico">Ejemplo básico</Titulo>
        <Texto>Supongamos que tienes dos archivos:</Texto>
        <Texto><strong>archivo1.txt:</strong></Texto>
        <div className="sourceCode" id="cb2">
          <pre className="sourceCode txt"><code className="sourceCode default"><span id="cb2-1"><Enlace href="#cb2-1" aria-hidden="true" tabindex="-1"></Enlace >hola</span>
            <span id="cb2-2"><Enlace href="#cb2-2" aria-hidden="true" tabindex="-1"></Enlace >mundo</span>
            <span id="cb2-3"><Enlace href="#cb2-3" aria-hidden="true" tabindex="-1"></Enlace >como estas</span></code></pre>
        </div>
        <Texto><strong>archivo2.txt:</strong></Texto>
        <div className="sourceCode" id="cb3">
          <pre className="sourceCode txt"><code className="sourceCode default"><span id="cb3-1"><Enlace href="#cb3-1" aria-hidden="true" tabindex="-1"></Enlace >hola</span>
            <span id="cb3-2"><Enlace href="#cb3-2" aria-hidden="true" tabindex="-1"></Enlace >mundo!!!</span>
            <span id="cb3-3"><Enlace href="#cb3-3" aria-hidden="true" tabindex="-1"></Enlace >como estas</span></code></pre>
        </div>
        <Texto>Si ejecutas:</Texto>
        <div className="sourceCode" id="cb4">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb4-1"><Enlace href="#cb4-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">diff</span> archivo1.txt archivo2.txt</span></code></pre>
        </div>
        <Texto>La salida será:</Texto>
        <div className="sourceCode" id="cb5">
          <pre
            className="sourceCode diff"><code className="sourceCode diff"><span id="cb5-1"><Enlace href="#cb5-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="dt">2c2</span></span>
              <span id="cb5-2"><Enlace href="#cb5-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="st">&lt; mundo</span></span>
              <span id="cb5-3"><Enlace href="#cb5-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">---</span></span>
              <span id="cb5-4"><Enlace href="#cb5-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="va">&gt; mundo!!!</span></span></code></pre>
        </div>
        <Texto>🔍 Significa:</Texto>
        <Lista>
          <li>En la <strong>línea 2</strong> (<code>2c2</code> → <em>línea 2
            cambiada</em>),</li>
          <li><code>mundo</code> fue reemplazado por <code>mundo!!!</code>.</li>
        </Lista>
        <Linea />
        <Titulo title="h3" id="símbolos-principales">Símbolos principales</Titulo>
        <table>
          <thead>
            <tr>
              <th>Símbolo</th>
              <th>Significado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>&lt;</code></td>
              <td>línea que <strong>solo está en el primer archivo</strong></td>
            </tr>
            <tr>
              <td><code>&gt;</code></td>
              <td>línea que <strong>solo está en el segundo archivo</strong></td>
            </tr>
            <tr>
              <td><code>a</code></td>
              <td>“add” — se agregó algo</td>
            </tr>
            <tr>
              <td><code>d</code></td>
              <td>“delete” — se eliminó algo</td>
            </tr>
            <tr>
              <td><code>c</code></td>
              <td>“change” — cambió algo</td>
            </tr>
          </tbody>
        </table>
        <Linea />
        <Titulo title="h3" id="opciones-útiles">Opciones útiles</Titulo>
        <table>
          <thead>
            <tr>
              <th>Opción</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>-u</code></td>
              <td>Muestra diferencias en <strong>formato unificado</strong> (más
                legible, usado por Git).</td>
            </tr>
            <tr>
              <td><code>-y</code></td>
              <td>Muestra los archivos <strong>lado a lado</strong>.</td>
            </tr>
            <tr>
              <td><code>-q</code></td>
              <td>Solo indica si los archivos <strong>son diferentes o
                iguales</strong>, sin mostrar detalles.</td>
            </tr>
            <tr>
              <td><code>-r</code></td>
              <td>Compara <strong>directorios recursivamente</strong>.</td>
            </tr>
          </tbody>
        </table>
        <Texto>Ejemplo:</Texto>
        <div className="sourceCode" id="cb6">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb6-1"><Enlace href="#cb6-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">diff</span> <span className="at">-u</span> archivo1.txt archivo2.txt</span></code></pre>
        </div>
        <Texto>Salida tipo “Git”:</Texto>
        <div className="sourceCode" id="cb7">
          <pre className="sourceCode diff"><code className="sourceCode diff"><span id="cb7-1"><Enlace href="#cb7-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">--- archivo1.txt</span></span>
            <span id="cb7-2"><Enlace href="#cb7-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="dt">+++ archivo2.txt</span></span>
            <span id="cb7-3"><Enlace href="#cb7-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="dt">@@ -1,3 +1,3 @@</span></span>
            <span id="cb7-4"><Enlace href="#cb7-4" aria-hidden="true" tabindex="-1"></Enlace > hola</span>
            <span id="cb7-5"><Enlace href="#cb7-5" aria-hidden="true" tabindex="-1"></Enlace ><span className="st">-mundo</span></span>
            <span id="cb7-6"><Enlace href="#cb7-6" aria-hidden="true" tabindex="-1"></Enlace ><span className="va">+mundo!!!</span></span>
            <span id="cb7-7"><Enlace href="#cb7-7" aria-hidden="true" tabindex="-1"></Enlace > como estas</span></code></pre>
        </div>
        <Linea />
        <Titulo title="h3" id="usos-comunes">Usos comunes</Titulo>
        <Lista>
          <li>Ver qué cambió entre dos versiones de un archivo.</li>
          <li>Comparar archivos de configuración.</li>
          <li>Analizar diferencias en código fuente.</li>
          <li>Generar <em>parches</em> con <code>diff</code> y aplicarlos con
            <code>patch</code>.
          </li>
        </Lista>
     </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}
export default nameabcd;
