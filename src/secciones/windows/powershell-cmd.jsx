import Enlace from "../../componentes/enlace.jsx";
import Linea from "./../../componentes/linea.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Titulo from "./../../componentes/titulo.jsx";
function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="diferencias-entre-powershell-y-cmd">Diferencias entre Powershell
        y CMD</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><Enlace href="#diferencias-entre-powershell-y-cmd">Diferencias entre
          Powershell y CMD</Enlace >
          <Lista>
            <li><Enlace href="#temario">Temario</Enlace ></li>
            <li><Enlace href="#cmd-command-prompt">CMD (Command Prompt)</Enlace ></li>
            <li><Enlace href="#powershell">PowerShell</Enlace ></li>
            <li><Enlace href="#diferencias-clave-en-práctica">Diferencias clave en
              práctica</Enlace ></li>
            <li><Enlace href="#ejemplo">Ejemplo</Enlace ></li>
          </Lista>
        </li>
      </Lista>
      <Texto><Enlace href="./../readme.md#3-windows">Regresar a la guía
        principal</Enlace ></Texto>
      <Linea />
      <Titulo title="h2" id="cmd-command-prompt">CMD (Command Prompt)</Titulo>
      <Lista>
        <li><strong>Origen</strong>: Basado en MS-DOS, presente en Windows
          desde versiones muy antiguas.</li>    <li><strong>Lenguaje</strong>: Usa un lenguaje de comandos muy
            básico, llamado <em>batch</em>.</li>    <li><strong>Funciones principales</strong>:</li>
        <Lista>
          <li>
            Ejecutar comandos simples del sistema (<code>dir</code>,
              <code>copy</code>, <code>del</code>, etc.).
          </li>        <li>Automatizar tareas básicas con archivos
            <code>.bat</code>.
          </li>     
          </Lista>
      <li><strong>Limitaciones</strong>:
      <Lista>
        <li>
          Manejo de objetos muy limitado: CMD trabaja con <strong>texto
            plano</strong>, no con objetos.</li>        <li>Automatización avanzada complicada.</li>        <li>Funciones modernas de Windows (como administración de registros o
              servicios) son más difíciles de hacer.</li>      </Lista>
    </li >
  </Lista >
  <Linea />
  <Titulo title="h2" id="powershell">PowerShell</Titulo>
  <Lista>
    <li><strong>Origen</strong>: Introducido en 2006 como una herramienta
        moderna de administración de Windows.</li>    <li><strong>Lenguaje</strong>: Basado en .NET, orientado a
        objetos.</li>    <li><strong>Funciones principales</strong>:
      <Lista>
        <li>
          <Texto>No solo ejecuta comandos, sino que devuelve <strong>objetos
              completos</strong>, no solo texto.</Texto>
          <Lista>
            <li>Ejemplo: <code>Get-Process</code> devuelve un objeto de proceso con
              propiedades (<code>Id</code>, <code>CPU</code>, <code>Memory</code>,
              etc.) que se pueden filtrar o manipular.</li>
          </Lista>
        </li>
        <li>
          Automatización avanzada: scripts <code>.ps1</code> pueden hacer
            casi cualquier cosa en Windows, desde tareas de administración hasta
            manipulación de servicios, registro, Active Directory, etc.</li>        <li>Combinación de cmdlets (comandos especializados de PowerShell)
            para tareas complejas.</li>      </Lista>
    </li>
    <li><strong>Compatibilidad</strong>: Puede ejecutar casi todos los
        comandos de CMD, y mucho más.</li>    <li><strong>Multiplataforma</strong>: PowerShell 7+ funciona en
        Windows, Linux y macOS.</li>  </Lista >
  <Linea />
  <Titulo title="h2" id="diferencias-clave-en-práctica">Diferencias clave en
    práctica</Titulo>
  <table>
    <thead>
      <tr>
        <th>Característica</th>
        <th>CMD</th>
        <th>PowerShell</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Lenguaje</td>
        <td>Batch / texto</td>
        <td>Basado en objetos / .NET</td>
      </tr>
      <tr>
        <td>Salida de comandos</td>
        <td>Texto plano</td>
        <td>Objetos</td>
      </tr>
      <tr>
        <td>Automatización</td>
        <td>Básica</td>
        <td>Avanzada</td>
      </tr>
      <tr>
        <td>Scripts</td>
        <td><code>.bat</code></td>
        <td><code>.ps1</code></td>
      </tr>
      <tr>
        <td>Administración de Windows</td>
        <td>Limitada</td>
        <td>Completa</td>
      </tr>
      <tr>
        <td>Multiplataforma</td>
        <td>Solo Windows</td>
        <td>Windows, Linux, macOS</td>
      </tr>
    </tbody>
  </table>
  <Linea />
  <Titulo title="h2" id="ejemplo">Ejemplo</Titulo>
  <Lista>
    <li>CMD:</li>
  </Lista>
  <div className="sourceCode" id="cb1">
    <pre
      className="sourceCode cmd"><code className="sourceCode dosbat"><span id="cb1-1"><Enlace href="#cb1-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">dir</span> <span className="kw">|</span> <span className="kw">find</span> <span className="st">&quot;archivo.txt&quot;</span></span></code></pre>
  </div>
  <Lista>
    <li>PowerShell:</li>
  </Lista>
  <div className="sourceCode" id="cb2">
    <pre
      className="sourceCode powershell"><code className="sourceCode powershell"><span id="cb2-1"><Enlace href="#cb2-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">Get-ChildItem</span> <span className="op">|</span> <span className="fu">Where-Object</span> <span className="op">{"{"}</span> <span className="va">$_</span><span className="op">.</span><span className="fu">Name</span> <span className="op">-eq</span> <span className="st">&quot;archivo.txt&quot;</span> <span className="op">{"}"}</span></span></code></pre>
  </div>
  <blockquote>
    <Texto>En PowerShell trabajas con objetos (<code>$_.Name</code>) y no solo
      con texto, lo que te da muchísima más flexibilidad.</Texto>
  </blockquote>
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
