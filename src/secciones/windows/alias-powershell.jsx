import Titulo from "./../../componentes/titulo.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Linea from "./../../componentes/linea.jsx";
import Enlace from "../../componentes/enlace.jsx";

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="alias-en-powershell">Alias en powershell</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><Enlace href="#alias-en-powershell">Alias en powershell</Enlace >
          <Lista>
            <li><Enlace href="#temario">Temario</Enlace ></li>
            <li><Enlace href="#qué-es-un-alias">Qué es un alias</Enlace ></li>
            <li><Enlace href="#alias-comunes-en-powershell">Alias comunes en
              PowerShell</Enlace ></li>
            <li><Enlace href="#cmdlets-relacionados-con-alias">Cmdlets relacionados con
              alias</Enlace ></li>
            <li><Enlace href="#ejemplos-prácticos">Ejemplos prácticos</Enlace ></li>
            <li><Enlace href="#alias-persistentes">Alias persistentes</Enlace ></li>
            <li><Enlace href="#nota-importante">Nota importante</Enlace ></li>
          </Lista>
        </li>
      </Lista>
      <Texto><Enlace href="./../readme.md#3-windows">Regresar a la guía
        principal</Enlace ></Texto>
      <Linea />
      <Titulo title="h2" id="qué-es-un-alias">Qué es un alias</Titulo>
      <Texto>Un <strong>alias</strong> es simplemente un <strong>nombre
        alternativo</strong> para un comando existente. Por ejemplo:</Texto>
      <div className="sourceCode" id="cb1">
        <pre
          className="sourceCode powershell"><code className="sourceCode powershell"><span id="cb1-1"><Enlace href="#cb1-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">Get-ChildItem</span>     <span className="co"># Nombre completo</span></span>
            <span id="cb1-2"><Enlace href="#cb1-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">ls</span>                <span className="co"># Alias</span></span></code></pre>
      </div>
      <Texto>Ambos hacen lo mismo: listar archivos y carpetas.</Texto>
      <Linea />
      <Titulo title="h2" id="alias-comunes-en-powershell">Alias comunes en PowerShell</Titulo>
      <table>
        <thead>
          <tr>
            <th>Alias</th>
            <th>Cmdlet equivalente</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>ls</code></td>
            <td><code>Get-ChildItem</code></td>
            <td>Lista archivos y carpetas.</td>
          </tr>
          <tr>
            <td><code>dir</code></td>
            <td><code>Get-ChildItem</code></td>
            <td>Igual que <code>ls</code> (compatibilidad con CMD).</td>
          </tr>
          <tr>
            <td><code>cd</code></td>
            <td><code>Set-Location</code></td>
            <td>Cambia de directorio.</td>
          </tr>
          <tr>
            <td><code>pwd</code></td>
            <td><code>Get-Location</code></td>
            <td>Muestra el directorio actual.</td>
          </tr>
          <tr>
            <td><code>cat</code>, <code>type</code></td>
            <td><code>Get-Content</code></td>
            <td>Muestra el contenido de un archivo.</td>
          </tr>
          <tr>
            <td><code>echo</code>, <code>write</code></td>
            <td><code>Write-Output</code></td>
            <td>Imprime texto en pantalla.</td>
          </tr>
          <tr>
            <td><code>cls</code>, <code>clear</code></td>
            <td><code>Clear-Host</code></td>
            <td>Limpia la pantalla.</td>
          </tr>
          <tr>
            <td><code>cp</code>, <code>copy</code></td>
            <td><code>Copy-Item</code></td>
            <td>Copia archivos o carpetas.</td>
          </tr>
          <tr>
            <td><code>mv</code>, <code>move</code></td>
            <td><code>Move-Item</code></td>
            <td>Mueve o renombra archivos.</td>
          </tr>
          <tr>
            <td><code>rm</code>, <code>del</code>, <code>erase</code></td>
            <td><code>Remove-Item</code></td>
            <td>Elimina archivos o carpetas.</td>
          </tr>
          <tr>
            <td><code>man</code>, <code>help</code></td>
            <td><code>Get-Help</code></td>
            <td>Muestra ayuda de un cmdlet.</td>
          </tr>
          <tr>
            <td><code>ps</code></td>
            <td><code>Get-Process</code></td>
            <td>Lista procesos activos.</td>
          </tr>
          <tr>
            <td><code>kill</code></td>
            <td><code>Stop-Process</code></td>
            <td>Finaliza un proceso.</td>
          </tr>
          <tr>
            <td><code>gcm</code></td>
            <td><code>Get-Command</code></td>
            <td>Busca cmdlets o funciones.</td>
          </tr>
          <tr>
            <td><code>gal</code></td>
            <td><code>Get-Alias</code></td>
            <td>Muestra todos los alias.</td>
          </tr>
          <tr>
            <td><code>sal</code></td>
            <td><code>Set-Alias</code></td>
            <td>Crea un alias nuevo.</td>
          </tr>
          <tr>
            <td><code>nal</code></td>
            <td><code>New-Alias</code></td>
            <td>Crea un alias y lo guarda (persistente si lo defines en el
              perfil).</td>
          </tr>
          <tr>
            <td><code>pal</code></td>
            <td><code>Pop-Location</code></td>
            <td>Vuelve al directorio anterior.</td>
          </tr>
          <tr>
            <td><code>pushd</code></td>
            <td><code>Push-Location</code></td>
            <td>Guarda el directorio actual en una pila.</td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Titulo title="h2" id="cmdlets-relacionados-con-alias">Cmdlets relacionados con
        alias</Titulo>
      <table>
        <thead>
          <tr>
            <th>Cmdlet</th>
            <th>Descripción</th>
            <th>Ejemplo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>Get-Alias</code></td>
            <td>Muestra todos los alias definidos actualmente.</td>
            <td><code>Get-Alias</code></td>
          </tr>
          <tr>
            <td><code>Get-Alias &lt;alias&gt;</code></td>
            <td>Muestra el comando que representa un alias.</td>
            <td><code>Get-Alias ls</code></td>
          </tr>
          <tr>
            <td><code>Set-Alias &lt;nombre&gt; &lt;comando&gt;</code></td>
            <td>Crea un alias temporal.</td>
            <td><code>Set-Alias borrar Remove-Item</code></td>
          </tr>
          <tr>
            <td><code>New-Alias &lt;nombre&gt; &lt;comando&gt;</code></td>
            <td>Crea un alias (igual que <code>Set-Alias</code>).</td>
            <td><code>New-Alias abrir notepad</code></td>
          </tr>
          <tr>
            <td><code>Export-Alias &lt;archivo&gt;</code></td>
            <td>Exporta todos los alias a un archivo.</td>
            <td><code>Export-Alias alias.txt</code></td>
          </tr>
          <tr>
            <td><code>Import-Alias &lt;archivo&gt;</code></td>
            <td>Importa alias desde un archivo.</td>
            <td><code>Import-Alias alias.txt</code></td>
          </tr>
          <tr>
            <td><code>Remove-Item alias:&lt;nombre&gt;</code></td>
            <td>Elimina un alias.</td>
            <td><code>Remove-Item alias:borrar</code></td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Titulo title="h2" id="ejemplos-prácticos">Ejemplos prácticos</Titulo>
      <div className="sourceCode" id="cb2">
        <pre
          className="sourceCode powershell"><code className="sourceCode powershell"><span id="cb2-1"><Enlace href="#cb2-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Ver todos los alias</span></span>
            <span id="cb2-2"><Enlace href="#cb2-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">Get-Alias</span></span>
            <span id="cb2-3"><Enlace href="#cb2-3" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb2-4"><Enlace href="#cb2-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Crear un alias personalizado</span></span>
            <span id="cb2-5"><Enlace href="#cb2-5" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">Set-Alias</span> editar <span className="st">&quot;notepad.exe&quot;</span></span>
            <span id="cb2-6"><Enlace href="#cb2-6" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb2-7"><Enlace href="#cb2-7" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Usar el alias</span></span>
            <span id="cb2-8"><Enlace href="#cb2-8" aria-hidden="true" tabindex="-1"></Enlace >editar archivo<span className="op">.</span><span className="fu">txt</span></span>
            <span id="cb2-9"><Enlace href="#cb2-9" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb2-10"><Enlace href="#cb2-10" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Ver qué comando ejecuta un alias</span></span>
            <span id="cb2-11"><Enlace href="#cb2-11" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">Get-Alias</span> <span className="fu">ls</span></span>
            <span id="cb2-12"><Enlace href="#cb2-12" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb2-13"><Enlace href="#cb2-13" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Eliminar un alias</span></span>
            <span id="cb2-14"><Enlace href="#cb2-14" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">Remove-Item</span> alias<span className="op">:</span>editar</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="alias-persistentes">Alias persistentes</Titulo>
      <Texto>Por defecto, los alias creados con <code>Set-Alias</code> o
        <code>New-Alias</code> <strong>solo duran mientras PowerShell está
          abierto</strong>.
      </Texto>
      <Texto>Para hacerlos <strong>permanentes</strong>, agrégalos al
        <strong>perfil de PowerShell</strong>:
      </Texto>
      <div className="sourceCode" id="cb3">
        <pre
          className="sourceCode powershell"><code className="sourceCode powershell"><span id="cb3-1"><Enlace href="#cb3-1" aria-hidden="true" tabindex="-1"></Enlace >notepad <span className="va">$PROFILE</span></span></code></pre>
      </div>
      <Texto>Luego agrega tus alias personalizados:</Texto>
      <div className="sourceCode" id="cb4">
        <pre
          className="sourceCode powershell"><code className="sourceCode powershell"><span id="cb4-1"><Enlace href="#cb4-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">Set-Alias</span> editar notepad<span className="op">.</span><span className="fu">exe</span></span>
            <span id="cb4-2"><Enlace href="#cb4-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">Set-Alias</span> borrar <span className="fu">Remove-Item</span></span></code></pre>
      </div>
      <Texto>Guarda el archivo y la próxima vez que abras PowerShell, estarán
        disponibles.</Texto>
      <Linea />
      <Titulo title="h2" id="nota-importante">Nota importante</Titulo>
      <Lista>
        <li>
          <Texto>Los alias <strong>no aceptan parámetros por defecto</strong>. Por
            ejemplo, <code>Set-Alias buscar "Get-ChildItem -Recurse"</code> ❌ no
            funcionará. En ese caso, usa una <strong>función</strong>:</Texto>
          <div className="sourceCode" id="cb5">
            <pre
              className="sourceCode powershell"><code className="sourceCode powershell"><span id="cb5-1"><Enlace href="#cb5-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">function</span> buscar <span className="op">{"{"}</span> <span className="fu">Get-ChildItem</span> <span className="op">-</span>Recurse @args <span className="op">{"}"}</span></span>
                <span id="cb5-2"><Enlace href="#cb5-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">Set-Alias</span> buscar buscar</span></code></pre>
          </div>
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
