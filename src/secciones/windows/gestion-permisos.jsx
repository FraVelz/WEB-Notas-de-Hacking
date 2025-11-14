import { Tabla, TablaCabezera, TablaFila, TablaUnica } from "../../componentes/moleculas/tabla.jsx";

import Enlace from "../../componentes/atomos/enlace.jsx";
import Linea from "../../componentes/atomos/linea.jsx";
import Lista from "../../componentes/moleculas/lista.jsx";
import Texto from "./../../componentes/atomos/texto.jsx";
import Titulo from "../../componentes/moleculas/titulo.jsx";
import Codigo from "../../componentes/moleculas/codigo.jsx";
import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../../componentes/organismos/estructura.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
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
  );
}

function nameabcd({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" id="comandos-y-cmdlets-de-gestión-de-permisos">Comandos y cmdlets de
          gestión de permisos</Titulo>
        <Linea />

        <TemarioCompleto temario={Temario} />

        <Titulo title="h2" id="cmd--comandos-de-gestión-de-permisos">CMD — Comandos de Gestión
          de Permisos</Titulo>
        <Tabla>
          <TablaCabezera headers={["Comando", "Descripción"]} />

          <tbody>
            <TablaFila>
              <TablaUnica>icacls &lt;ruta&gt;</TablaUnica>
              <TablaUnica>Muestra, modifica, guarda o restaura las listas de control de acceso
                (ACL) de archivos y carpetas.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>icacls &lt;ruta&gt; /grant &lt;usuario&gt;:&lt;permisos&gt;</TablaUnica>
              <TablaUnica>Concede permisos a un usuario. Ejemplo:
                icacls C:\archivo.txt /grant Juan:(R,W)</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>icacls &lt;ruta&gt; /deny &lt;usuario&gt;:&lt;permisos&gt;</TablaUnica>
              <TablaUnica>Deniega permisos específicos.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>icacls &lt;ruta&gt; /remove &lt;usuario&gt;</TablaUnica>
              <TablaUnica>Quita los permisos de un usuario.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>icacls &lt;ruta&gt; /inheritance:r</TablaUnica>
              <TablaUnica>Desactiva la herencia de permisos.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>icacls &lt;ruta&gt; /save permisos.txt /t</TablaUnica>
              <TablaUnica>Guarda los permisos actuales de una carpeta y subcarpetas.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>icacls &lt;ruta&gt; /restore permisos.txt</TablaUnica>
              <TablaUnica>Restaura permisos desde un archivo guardado.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>cacls &lt;ruta&gt;</TablaUnica>
              <TablaUnica>(Obsoleto, reemplazado por icacls) – mostraba y
                modificaba permisos NTFS.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>takeown /f &lt;ruta&gt;</TablaUnica>
              <TablaUnica>Toma posesión de un archivo o carpeta.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>attrib &lt;archivo&gt; [+/-r] [+/-h] [+/-s]</TablaUnica>
              <TablaUnica>Cambia atributos de solo lectura (R), oculto (H), o de sistema
                (S).</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>net share &lt;nombre&gt;=&lt;ruta&gt; /grant:&lt;usuario&gt;,&lt;permiso&gt;</TablaUnica>
              <TablaUnica>Comparte una carpeta con permisos específicos en red. Ejemplo:
                net share Recursos=C:\Recursos /grant:Todos,READ</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>
        <Linea />
        <Titulo title="h2" id="powershell--cmdlets-de-gestión-de-permisos">PowerShell — Cmdlets
          de Gestión de Permisos</Titulo>
        <Tabla>
          <TablaCabezera headers={["Cmdlet", "Descripción"]} />

          <tbody>
            <TablaFila>
              <TablaUnica>Get-Acl &lt;ruta&gt;</TablaUnica>
              <TablaUnica>Obtiene la lista de control de acceso (ACL) de un archivo, carpeta u
                objeto.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Set-Acl &lt;ruta&gt; &lt;objetoACL&gt;</TablaUnica>
              <TablaUnica>Aplica una ACL modificada a un recurso.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>$acl = Get-Acl &lt;ruta&gt;</TablaUnica>
              <TablaUnica>Guarda la ACL actual en una variable.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>$rule = New-Object System.Security.AccessControl.FileSystemAccessRule("Usuario","FullControl","Allow")</TablaUnica>
              <TablaUnica>Crea una nueva regla de permisos.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>$acl.AddAccessRule($rule)</TablaUnica>
              <TablaUnica>Agrega la regla creada al objeto ACL.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Set-Acl &lt;ruta&gt; $acl</TablaUnica>
              <TablaUnica>Aplica los cambios.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>icacls</TablaUnica>
              <TablaUnica>También disponible desde PowerShell (puedes usar los mismos comandos
                de CMD).</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Get-ItemProperty -Path &lt;ruta&gt;</TablaUnica>
              <TablaUnica>Muestra propiedades de un archivo o carpeta (incluye permisos en
                algunos casos).</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Grant-SmbShareAccess -Name &lt;nombre&gt; -AccountName &lt;usuario&gt; -AccessRight Full -Force</TablaUnica>
              <TablaUnica>Concede permisos de acceso a un recurso compartido SMB.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Revoke-SmbShareAccess -Name &lt;nombre&gt; -AccountName &lt;usuario&gt;</TablaUnica>
              <TablaUnica>Revoca permisos de acceso a un recurso compartido.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Get-SmbShareAccess -Name &lt;nombre&gt;</TablaUnica>
              <TablaUnica>Muestra los permisos actuales de un recurso compartido.</TablaUnica>
            </TablaFila>
          </tbody>

        </Tabla>
        <Linea />
        <Titulo title="h2" id="ejemplos-prácticos">Ejemplos prácticos</Titulo>
        <Titulo title="h3" id="cmd">CMD</Titulo>
        <Codigo code={`icacls "C:\Proyecto" /grant Juan:(R,W)
takeown /f "C:\Proyecto\archivo.txt"`} language="bash" />
        <Titulo title="h3" id="powershell">PowerShell</Titulo>
        <Codigo code={`$acl = Get-Acl "C:\Proyecto"
$rule = New-Object System.Security.AccessControl.FileSystemAccessRule("Juan","Modify","Allow")
$acl.AddAccessRule($rule)
Set-Acl "C:\Proyecto" $acl`} language="bash" />
      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}
export default nameabcd;
