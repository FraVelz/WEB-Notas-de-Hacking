import Enlace from "../../componentes/enlace.jsx";
import Linea from "./../../componentes/linea.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Titulo from "./../../componentes/titulo.jsx";
function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="comandos-y-cmdlets-de-gestión-de-permisos">Comandos y cmdlets de
        gestión de permisos</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><Enlace href="#comandos-y-cmdlets-de-gestión-de-permisos">Comandos y
          cmdlets de gestión de permisos</Enlace >
          <Lista>
            <li><Enlace href="#temario">Temario</Enlace ></li>
            <li><Enlace href="#cmd--comandos-de-gestión-de-permisos">CMD — Comandos de
              Gestión de Permisos</Enlace ></li>
            <li><Enlace href="#powershell--cmdlets-de-gestión-de-permisos">PowerShell —
              Cmdlets de Gestión de Permisos</Enlace ></li>
            <li><Enlace href="#ejemplos-prácticos">Ejemplos prácticos</Enlace >
              <Lista>
                <li><Enlace href="#cmd">CMD</Enlace ></li>
                <li><Enlace href="#powershell">PowerShell</Enlace ></li>
              </Lista>
            </li>
          </Lista>
        </li>
      </Lista>
      <Texto><Enlace href="./../readme.md#3-windows">Regresar a la guía
        principal</Enlace ></Texto>
      <Linea />
      <Titulo title="h2" id="cmd-comandos-de-gestión-de-permisos">CMD — Comandos de Gestión
        de Permisos</Titulo>
      <table>
        <thead>
          <tr>
            <th>Comando</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>icacls &lt;ruta&gt;</code></td>
            <td>Muestra, modifica, guarda o restaura las listas de control de acceso
              (ACL) de archivos y carpetas.</td>
          </tr>
          <tr>
            <td><code>icacls &lt;ruta&gt; /grant &lt;usuario&gt;:&lt;permisos&gt;</code></td>
            <td>Concede permisos a un usuario. Ejemplo:
              <code>icacls C:\archivo.txt /grant Juan:(R,W)</code>
            </td>
          </tr>
          <tr>
            <td><code>icacls &lt;ruta&gt; /deny &lt;usuario&gt;:&lt;permisos&gt;</code></td>
            <td>Deniega permisos específicos.</td>
          </tr>
          <tr>
            <td><code>icacls &lt;ruta&gt; /remove &lt;usuario&gt;</code></td>
            <td>Quita los permisos de un usuario.</td>
          </tr>
          <tr>
            <td><code>icacls &lt;ruta&gt; /inheritance:r</code></td>
            <td>Desactiva la herencia de permisos.</td>
          </tr>
          <tr>
            <td><code>icacls &lt;ruta&gt; /save permisos.txt /t</code></td>
            <td>Guarda los permisos actuales de una carpeta y subcarpetas.</td>
          </tr>
          <tr>
            <td><code>icacls &lt;ruta&gt; /restore permisos.txt</code></td>
            <td>Restaura permisos desde un archivo guardado.</td>
          </tr>
          <tr>
            <td><code>cacls &lt;ruta&gt;</code></td>
            <td>(Obsoleto, reemplazado por <code>icacls</code>) – mostraba y
              modificaba permisos NTFS.</td>
          </tr>
          <tr>
            <td><code>takeown /f &lt;ruta&gt;</code></td>
            <td>Toma posesión de un archivo o carpeta.</td>
          </tr>
          <tr>
            <td><code>attrib &lt;archivo&gt; [+/-r] [+/-h] [+/-s]</code></td>
            <td>Cambia atributos de solo lectura (R), oculto (H), o de sistema
              (S).</td>
          </tr>
          <tr>
            <td><code>net share &lt;nombre&gt;=&lt;ruta&gt; /grant:&lt;usuario&gt;,&lt;permiso&gt;</code></td>
            <td>Comparte una carpeta con permisos específicos en red. Ejemplo:
              <code>net share Recursos=C:\Recursos /grant:Todos,READ</code>
            </td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Titulo title="h2" id="powershell-cmdlets-de-gestión-de-permisos">PowerShell — Cmdlets
        de Gestión de Permisos</Titulo>
      <table>
        <thead>
          <tr>
            <th>Cmdlet</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>Get-Acl &lt;ruta&gt;</code></td>
            <td>Obtiene la lista de control de acceso (ACL) de un archivo, carpeta u
              objeto.</td>
          </tr>
          <tr>
            <td><code>Set-Acl &lt;ruta&gt; &lt;objetoACL&gt;</code></td>
            <td>Aplica una ACL modificada a un recurso.</td>
          </tr>
          <tr>
            <td><code>$acl = Get-Acl &lt;ruta&gt;</code></td>
            <td>Guarda la ACL actual en una variable.</td>
          </tr>
          <tr>
            <td>
              <code>$rule = New-Object System.Security.AccessControl.FileSystemAccessRule("Usuario","FullControl","Allow")</code>
            </td>
            <td>Crea una nueva regla de permisos.</td>
          </tr>
          <tr>
            <td><code>$acl.AddAccessRule($rule)</code></td>
            <td>Agrega la regla creada al objeto ACL.</td>
          </tr>
          <tr>
            <td><code>Set-Acl &lt;ruta&gt; $acl</code></td>
            <td>Aplica los cambios.</td>
          </tr>
          <tr>
            <td><code>icacls</code></td>
            <td>También disponible desde PowerShell (puedes usar los mismos comandos
              de CMD).</td>
          </tr>
          <tr>
            <td><code>Get-ItemProperty -Path &lt;ruta&gt;</code></td>
            <td>Muestra propiedades de un archivo o carpeta (incluye permisos en
              algunos casos).</td>
          </tr>
          <tr>
            <td><code>Grant-SmbShareAccess -Name &lt;nombre&gt; -AccountName &lt;usuario&gt; -AccessRight Full -Force</code>
            </td>
            <td>Concede permisos de acceso a un recurso compartido SMB.</td>
          </tr>
          <tr>
            <td><code>Revoke-SmbShareAccess -Name &lt;nombre&gt; -AccountName &lt;usuario&gt;</code></td>
            <td>Revoca permisos de acceso a un recurso compartido.</td>
          </tr>
          <tr>
            <td><code>Get-SmbShareAccess -Name &lt;nombre&gt;</code></td>
            <td>Muestra los permisos actuales de un recurso compartido.</td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Titulo title="h2" id="ejemplos-prácticos">Ejemplos prácticos</Titulo>
      <Titulo title="h3" id="cmd">CMD</Titulo>
      <div className="sourceCode" id="cb1">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb1-1"><Enlace href="#cb1-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">icacls</span> <span className="st">&quot;C:\Proyecto&quot;</span> /grant Juan:<span className="er">(</span><span className="ex">R,W</span><span className="kw">)</span></span>
            <span id="cb1-2"><Enlace href="#cb1-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">takeown</span> /f <span className="st">&quot;C:\Proyecto\archivo.txt&quot;</span></span></code></pre>
      </div>
      <Titulo title="h3" id="powershell">PowerShell</Titulo>
      <div className="sourceCode" id="cb2">
        <pre
          className="sourceCode powershell"><code className="sourceCode powershell"><span id="cb2-1"><Enlace href="#cb2-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="va">$acl</span> <span className="op">=</span> <span className="fu">Get-Acl</span> <span className="st">&quot;C:\Proyecto&quot;</span></span>
            <span id="cb2-2"><Enlace href="#cb2-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="va">$rule</span> <span className="op">=</span> <span className="fu">New-Object</span> System<span className="op">.</span><span className="fu">Security</span><span className="op">.</span><span className="fu">AccessControl</span><span className="op">.</span><span className="fu">FileSystemAccessRule</span><span className="op">(</span><span className="st">&quot;Juan&quot;</span><span className="op">,</span><span className="st">&quot;Modify&quot;</span><span className="op">,</span><span className="st">&quot;Allow&quot;</span><span className="op">)</span></span>
            <span id="cb2-3"><Enlace href="#cb2-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="va">$acl</span><span className="op">.</span><span className="fu">AddAccessRule</span><span className="op">(</span><span className="va">$rule</span><span className="op">)</span></span>
            <span id="cb2-4"><Enlace href="#cb2-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">Set-Acl</span> <span className="st">&quot;C:\Proyecto&quot;</span> <span className="va">$acl</span></span></code></pre>
      </div>
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
