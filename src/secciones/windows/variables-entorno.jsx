import Titulo from "./../../componentes/titulo.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Linea from "./../../componentes/linea.jsx";

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="variables-de-entorno">Variables de Entorno</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><a href="#variables-de-entorno">Variables de Entorno</a>
          <Lista>
            <li><a href="#temario">Temario</a>
              <Lista>
                <li><a href="#tipos-de-variables-de-entorno">Tipos de variables de
                  entorno</a></li>
                <li><a href="#cómo-ver-las-variables-de-entorno">Cómo ver las variables
                  de entorno</a></li>
                <li><a href="#editar-o-crear-variables">Editar o crear
                  variables</a></li>
              </Lista>
            </li>
          </Lista>
        </li>
      </Lista>
      <Texto><a href="./../readme.md#3-windows">Regresar a la guía
        principal</a></Texto>
      <Linea />
      <Titulo title="h3" id="tipos-de-variables-de-entorno">Tipos de variables de
        entorno</Titulo>
      <ol type="1">
        <li><strong>Variables del sistema</strong>: Aplican a todos los
          usuarios del equipo. Por ejemplo:</Texto>
        <Lista>
          <li><code>PATH</code>: lista de rutas donde Windows busca
            ejecutables.</li>
          <li><code>COMPUTERNAME</code>: nombre del equipo.</li>
          <li><code>SYSTEMROOT</code>: ruta de la carpeta del sistema,
            generalmente <code>C:\Windows</code>.</li>
          <li><code>TEMP</code> o <code>TMP</code>: carpeta temporal.</li>
        </Lista>
      </li>
      <li>
        <Texto><strong>Variables de usuario</strong>: Solo aplican al usuario
          actual. Por ejemplo:</Texto>
        <Lista>
          <li><code>USERNAME</code>: nombre del usuario actual.</li>
          <li><code>USERPROFILE</code>: ruta del perfil del usuario
            (<code>C:\Users\TuUsuario</code>).</li>
          <li><code>HOMEPATH</code>: ruta relativa de la carpeta del usuario
            (<code>\Users\TuUsuario</code>).</li>
        </Lista>
      </li>
    </ol >
  <Linea />
  <Titulo title="h3" id="cómo-ver-las-variables-de-entorno">Cómo ver las variables de
    entorno</Titulo>
  <ol type="1">
    <li>
      <Texto><strong>Usando CMD</strong>:</Texto>
      <Lista>
        <li>
          <Texto><code>set</code> → muestra todas las variables de usuario y del
            sistema.</li>        <li><code>echo %VARIABLE%</code> → muestra el valor de una variable
            específica. Ejemplo:</Texto>
          <div class="sourceCode" id="cb1">
            <pre
              class="sourceCode cmd"><code class="sourceCode dosbat"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="pp">%</span><span class="va">PATH</span><span class="pp">%</span></span>
<span id="cb1-2"><a href="#cb1-2" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="pp">%</span><span class="va">USERPROFILE</span><span class="pp">%</span></span></code></pre>
          </div>
        </li>
      </Lista>
    </li >
    <li>
      <Texto><strong>Usando PowerShell</strong>:</Texto>
      <Lista>
        <li>
          <Texto><code>Get-ChildItem Env:</code> → lista todas las
            variables.</li>        <li>
          <Texto><code>$Env:VARIABLE</code> → muestra el valor de una variable
            específica. Ejemplo:</Texto>
          <div class="sourceCode" id="cb2">
            <pre
              class="sourceCode powershell"><code class="sourceCode powershell"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="va">$Env</span><span class="op">:</span><span class="va">PATH</span></span>
<span id="cb2-2"><a href="#cb2-2" aria-hidden="true" tabindex="-1"></a><span class="va">$Env</span><span class="op">:</span><span class="va">USERNAME</span></span></code></pre>
          </div>
        </li>
      </Lista>
    </li>
    <li>
      <Texto><strong>Usando la interfaz gráfica</strong>:</Texto>
      <Lista>
        <li>Presiona <code>Win + R</code> → escribe <code>sysdm.cpl</code> →
          Enter.</li>
        <li>Ve a la pestaña <strong>Opciones avanzadas</strong> →
          <strong>Variables de entorno</strong>.
        </li>
        <li>Aquí puedes <strong>ver, crear, editar o eliminar</strong> variables
          de usuario o del sistema.</li>
      </Lista>
    </li>
  </ol >
  <Linea />
  <Titulo title="h3" id="editar-o-crear-variables">Editar o crear variables</Titulo>
  <Lista>
    <li>
      <Texto>Para agregar una carpeta al <code>PATH</code>:</Texto>
      <ol type="1">
        <li>Abrir <strong>Variables de entorno</strong>.</li>
        <li>Seleccionar <code>PATH</code> → Editar → Nuevo → pegar la ruta.</li>
        <li>Guardar y reiniciar CMD/PowerShell para que tome efecto.</li>
      </ol>
    </li>
  </Lista>
  <Linea />
  <Texto><a href="./../readme.md#3-windows">Regresar a la guía
      principal</a></Texto>
  <blockquote>
    <Texto><strong>Autor:</strong> Fravelz</Texto>
  </blockquote>
</>
);
}
export default nameabcd;
