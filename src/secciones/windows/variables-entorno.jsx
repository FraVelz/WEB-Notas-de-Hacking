import Enlace from "../../componentes/enlace.jsx";
import Linea from "./../../componentes/linea.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Titulo from "./../../componentes/titulo.jsx";
function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="variables-de-entorno">Variables de Entorno</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><Enlace href="#variables-de-entorno">Variables de Entorno</Enlace >
          <Lista>
            <li><Enlace href="#temario">Temario</Enlace >
              <Lista>
                <li><Enlace href="#tipos-de-variables-de-entorno">Tipos de variables de
                  entorno</Enlace ></li>
                <li><Enlace href="#cómo-ver-las-variables-de-entorno">Cómo ver las variables
                  de entorno</Enlace ></li>
                <li><Enlace href="#editar-o-crear-variables">Editar o crear
                  variables</Enlace ></li>
              </Lista>
            </li>
          </Lista>
        </li>
      </Lista>
      <Texto><Enlace href="./../readme.md#3-windows">Regresar a la guía
        principal</Enlace ></Texto>
      <Linea />
      <Titulo title="h3" id="tipos-de-variables-de-entorno">Tipos de variables de
        entorno</Titulo>
      <ol type="1">
        <li><strong>Variables del sistema</strong>: Aplican a todos los
          usuarios del equipo. Por ejemplo:
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
          <code>set</code> → muestra todas las variables de usuario y del
            sistema.</li>        <li><code>echo %VARIABLE%</code> → muestra el valor de una variable
            específica. Ejemplo:
          <div className="sourceCode" id="cb1">
            <pre
              className="sourceCode cmd"><code className="sourceCode dosbat"><span id="cb1-1"><Enlace href="#cb1-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">echo</span> <span className="pp">%</span><span className="va">PATH</span><span className="pp">%</span></span>
<span id="cb1-2"><Enlace href="#cb1-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">echo</span> <span className="pp">%</span><span className="va">USERPROFILE</span><span className="pp">%</span></span></code></pre>
          </div>
        </li>
      </Lista>
    </li >
    <li>
      <Texto><strong>Usando PowerShell</strong>:</Texto>
      <Lista>
        <li>
          <code>Get-ChildItem Env:</code> → lista todas las
            variables.</li>        <li>
          <Texto><code>$Env:VARIABLE</code> → muestra el valor de una variable
            específica. Ejemplo:</Texto>
          <div className="sourceCode" id="cb2">
            <pre
              className="sourceCode powershell"><code className="sourceCode powershell"><span id="cb2-1"><Enlace href="#cb2-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="va">$Env</span><span className="op">:</span><span className="va">PATH</span></span>
<span id="cb2-2"><Enlace href="#cb2-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="va">$Env</span><span className="op">:</span><span className="va">USERNAME</span></span></code></pre>
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
  <Texto><Enlace href="./../readme.md#3-windows">Regresar a la guía
      principal</Enlace ></Texto>
  <blockquote>
    <Texto><strong>Autor:</strong> Fravelz</Texto>
  </blockquote>
</>
);
}
export default nameabcd;
