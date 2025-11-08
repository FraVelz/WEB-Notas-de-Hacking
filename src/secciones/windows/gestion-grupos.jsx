import Titulo from "./../../componentes/titulo.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Linea from "./../../componentes/linea.jsx";

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="comandos-y-cmdlets-de-grupos">Comandos y cmdlets de grupos</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><a href="#comandos-y-cmdlets-de-grupos">Comandos y cmdlets de
          grupos</a>
          <Lista>
            <li><a href="#temario">Temario</a></li>
            <li><a href="#1-comandos-de-gestión-de-grupos-en-cmd">1. Comandos de
              gestión de grupos en CMD</a></li>
            <li><a href="#2-cmdlets-de-gestión-de-grupos-en-powershell">2. Cmdlets
              de gestión de grupos en PowerShell</a>
              <Lista>
                <li><a href="#grupos-locales">Grupos locales</a></li>
                <li><a href="#grupos-de-dominio-active-directory">Grupos de dominio
                  (Active Directory)</a></li>
              </Lista>
            </li>
            <li><a href="#3-comparativa-cmd-vs-powershell">3. Comparativa CMD vs
              PowerShell</a></li>
            <li><a href="#4-atajos-y-comandos-gráficos">4. Atajos y comandos
              gráficos</a></li>
          </Lista>
        </li>
      </Lista>
      <Texto><a href="./../readme.md#3-windows">Regresar a la guía
        principal</a></Texto>
      <Linea />
      <Titulo title="h2" id="comandos-de-gestión-de-grupos-en-cmd">1. Comandos de gestión de
        grupos en CMD</Titulo>
      <blockquote>
        <Texto>Todos estos comandos se ejecutan en <strong>Símbolo del sistema
          (CMD)</strong> con permisos de administrador.</Texto>
      </blockquote>
      <table>
        <colgroup>
          <col style="width: 33%" />
          <col style="width: 35%" />
          <col style="width: 30%" />
        </colgroup>
        <thead>
          <tr>
            <th>Comando</th>
            <th>Descripción</th>
            <th>Ejemplo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>net localgroup</code></td>
            <td>Muestra todos los grupos locales del equipo.</td>
            <td><code>net localgroup</code></td>
          </tr>
          <tr>
            <td><code>net localgroup &lt;nombre_grupo&gt;</code></td>
            <td>Muestra los miembros del grupo.</td>
            <td><code>net localgroup Administradores</code></td>
          </tr>
          <tr>
            <td><code>net localgroup &lt;nombre_grupo&gt; /add</code></td>
            <td>Crea un nuevo grupo local.</td>
            <td><code>net localgroup Desarrolladores /add</code></td>
          </tr>
          <tr>
            <td><code>net localgroup &lt;nombre_grupo&gt; /delete</code></td>
            <td>Elimina un grupo local.</td>
            <td><code>net localgroup Desarrolladores /delete</code></td>
          </tr>
          <tr>
            <td><code>net localgroup &lt;nombre_grupo&gt; &lt;usuario&gt; /add</code></td>
            <td>Agrega un usuario al grupo.</td>
            <td><code>net localgroup Administradores Juan /add</code></td>
          </tr>
          <tr>
            <td><code>net localgroup &lt;nombre_grupo&gt; &lt;usuario&gt; /delete</code></td>
            <td>Elimina un usuario del grupo.</td>
            <td><code>net localgroup Administradores Juan /delete</code></td>
          </tr>
          <tr>
            <td><code>net user &lt;usuario&gt;</code></td>
            <td>Muestra los grupos a los que pertenece el usuario.</td>
            <td><code>net user Juan</code></td>
          </tr>
          <tr>
            <td><code>net group</code></td>
            <td>(En redes de dominio) Muestra los grupos de dominio.</td>
            <td><code>net group</code></td>
          </tr>
          <tr>
            <td><code>net group &lt;nombre_grupo&gt;</code></td>
            <td>Muestra los miembros del grupo de dominio.</td>
            <td><code>net group Ventas</code></td>
          </tr>
          <tr>
            <td><code>net group &lt;nombre_grupo&gt; /add</code></td>
            <td>Crea un grupo de dominio (solo en AD).</td>
            <td><code>net group Finanzas /add</code></td>
          </tr>
          <tr>
            <td><code>net group &lt;nombre_grupo&gt; /delete</code></td>
            <td>Elimina un grupo de dominio.</td>
            <td><code>net group Finanzas /delete</code></td>
          </tr>
          <tr>
            <td><code>net group &lt;nombre_grupo&gt; &lt;usuario&gt; /add</code></td>
            <td>Agrega un usuario a un grupo del dominio.</td>
            <td><code>net group Finanzas Juan /add</code></td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Titulo title="h2" id="cmdlets-de-gestión-de-grupos-en-powershell">2. Cmdlets de
        gestión de grupos en PowerShell</Titulo>
      <blockquote>
        <Texto>Estos cmdlets pertenecen al módulo
          <strong>Microsoft.PowerShell.LocalAccounts</strong> (para grupos
          locales). Si usas Active Directory, también hay cmdlets del módulo
          <strong>ActiveDirectory</strong>.
        </Texto>
      </blockquote>
      <Linea />
      <Titulo title="h3" id="grupos-locales">Grupos locales</Titulo>
      <table>
        <colgroup>
          <col style="width: 20%" />
          <col style="width: 29%" />
          <col style="width: 50%" />
        </colgroup>
        <thead>
          <tr>
            <th>Cmdlet</th>
            <th>Descripción</th>
            <th>Ejemplo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>Get-LocalGroup</code></td>
            <td>Muestra todos los grupos locales del sistema.</td>
            <td><code>Get-LocalGroup</code></td>
          </tr>
          <tr>
            <td><code>Get-LocalGroup -Name &lt;nombre&gt;</code></td>
            <td>Muestra información detallada de un grupo.</td>
            <td><code>Get-LocalGroup -Name "Administradores"</code></td>
          </tr>
          <tr>
            <td><code>New-LocalGroup</code></td>
            <td>Crea un grupo local nuevo.</td>
            <td><code>New-LocalGroup -Name "Desarrolladores" -Description "Equipo de desarrollo"</code></td>
          </tr>
          <tr>
            <td><code>Remove-LocalGroup</code></td>
            <td>Elimina un grupo local.</td>
            <td><code>Remove-LocalGroup -Name "Desarrolladores"</code></td>
          </tr>
          <tr>
            <td><code>Get-LocalGroupMember</code></td>
            <td>Muestra los miembros de un grupo local.</td>
            <td><code>Get-LocalGroupMember -Group "Administradores"</code></td>
          </tr>
          <tr>
            <td><code>Add-LocalGroupMember</code></td>
            <td>Agrega un usuario o grupo a un grupo local.</td>
            <td><code>Add-LocalGroupMember -Group "Administradores" -Member "Juan"</code></td>
          </tr>
          <tr>
            <td><code>Remove-LocalGroupMember</code></td>
            <td>Quita un usuario o grupo de un grupo local.</td>
            <td><code>Remove-LocalGroupMember -Group "Usuarios" -Member "Juan"</code></td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Titulo title="h3" id="grupos-de-dominio-active-directory">Grupos de dominio (Active
        Directory)</Titulo>
      <Texto><em>(solo si tienes instalado el módulo <code>ActiveDirectory</code>
        y estás en un dominio)</em></Texto>
      <table>
        <colgroup>
          <col style="width: 13%" />
          <col style="width: 29%" />
          <col style="width: 57%" />
        </colgroup>
        <thead>
          <tr>
            <th>Cmdlet</th>
            <th>Descripción</th>
            <th>Ejemplo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>Get-ADGroup</code></td>
            <td>Lista los grupos del dominio.</td>
            <td><code>Get-ADGroup -Filter *</code></td>
          </tr>
          <tr>
            <td><code>Get-ADGroupMember</code></td>
            <td>Muestra los miembros de un grupo del dominio.</td>
            <td><code>Get-ADGroupMember -Identity "Ventas"</code></td>
          </tr>
          <tr>
            <td><code>New-ADGroup</code></td>
            <td>Crea un grupo en Active Directory.</td>
            <td><code>New-ADGroup -Name "Finanzas" -GroupScope Global -Path "OU=Departamentos,DC=empresa,DC=com"</code></td>
          </tr>
          <tr>
            <td><code>Remove-ADGroup</code></td>
            <td>Elimina un grupo del dominio.</td>
            <td><code>Remove-ADGroup -Identity "Finanzas"</code></td>
          </tr>
          <tr>
            <td><code>Add-ADGroupMember</code></td>
            <td>Agrega usuarios o grupos a un grupo de dominio.</td>
            <td><code>Add-ADGroupMember -Identity "Finanzas" -Members "Juan","Maria"</code></td>
          </tr>
          <tr>
            <td><code>Remove-ADGroupMember</code></td>
            <td>Elimina miembros de un grupo de dominio.</td>
            <td><code>Remove-ADGroupMember -Identity "Finanzas" -Members "Juan"</code></td>
          </tr>
          <tr>
            <td><code>Set-ADGroup</code></td>
            <td>Modifica propiedades de un grupo.</td>
            <td><code>Set-ADGroup -Identity "Finanzas" -Description "Grupo del área contable"</code></td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Titulo title="h2" id="comparativa-cmd-vs-powershell">3. Comparativa CMD vs
        PowerShell</Titulo>
      <table>
        <colgroup>
          <col style="width: 17%" />
          <col style="width: 33%" />
          <col style="width: 48%" />
        </colgroup>
        <thead>
          <tr>
            <th>Tarea</th>
            <th>CMD</th>
            <th>PowerShell</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ver grupos locales</td>
            <td><code>net localgroup</code></td>
            <td><code>Get-LocalGroup</code></td>
          </tr>
          <tr>
            <td>Ver miembros de un grupo</td>
            <td><code>net localgroup Administradores</code></td>
            <td><code>Get-LocalGroupMember -Group "Administradores"</code></td>
          </tr>
          <tr>
            <td>Crear un grupo</td>
            <td><code>net localgroup Desarrolladores /add</code></td>
            <td><code>New-LocalGroup -Name "Desarrolladores"</code></td>
          </tr>
          <tr>
            <td>Eliminar un grupo</td>
            <td><code>net localgroup Desarrolladores /delete</code></td>
            <td><code>Remove-LocalGroup -Name "Desarrolladores"</code></td>
          </tr>
          <tr>
            <td>Agregar usuario a grupo</td>
            <td><code>net localgroup Administradores Juan /add</code></td>
            <td><code>Add-LocalGroupMember -Group "Administradores" -Member "Juan"</code></td>
          </tr>
          <tr>
            <td>Quitar usuario del grupo</td>
            <td><code>net localgroup Administradores Juan /delete</code></td>
            <td><code>Remove-LocalGroupMember -Group "Administradores" -Member "Juan"</code></td>
          </tr>
          <tr>
            <td>Listar grupos de dominio</td>
            <td><code>net group</code></td>
            <td><code>Get-ADGroup -Filter *</code></td>
          </tr>
          <tr>
            <td>Crear grupo en dominio</td>
            <td><code>net group Ventas /add</code></td>
            <td><code>New-ADGroup -Name "Ventas" -GroupScope Global</code></td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Titulo title="h2" id="atajos-y-comandos-gráficos">4. Atajos y comandos gráficos</Titulo>
      <table>
        <colgroup>
          <col style="width: 33%" />
          <col style="width: 66%" />
        </colgroup>
        <thead>
          <tr>
            <th>Comando</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>lusrmgr.msc</code></td>
            <td>Abre la consola gráfica de <strong>Usuarios y Grupos
              locales</strong> (solo Windows Pro y superior).</td>
          </tr>
          <tr>
            <td><code>control userpasswords2</code></td>
            <td>Permite administrar usuarios y grupos de forma avanzada.</td>
          </tr>
          <tr>
            <td><code>compmgmt.msc</code> → “Usuarios y grupos locales”</td>
            <td>Alternativa para versiones Pro.</td>
          </tr>
        </tbody>
      </table>
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
