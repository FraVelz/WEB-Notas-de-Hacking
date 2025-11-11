import Enlace from "../../componentes/enlace.jsx";
import Linea from "./../../componentes/linea.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Titulo from "./../../componentes/titulo.jsx";
function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="comandos-y-cmdlets-de-gestión-de-usuarios">Comandos y cmdlets de
        gestión de usuarios</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><Enlace href="#comandos-y-cmdlets-de-gestión-de-usuarios">Comandos y
          cmdlets de gestión de usuarios</Enlace >
          <Lista>
            <li><Enlace href="#temario">Temario</Enlace ></li>
            <li><Enlace href="#1-comandos-de-gestión-de-usuarios-en-cmd">1. Comandos de
              gestión de usuarios en CMD</Enlace ></li>
            <li><Enlace href="#2-cmdlets-de-gestión-de-usuarios-en-powershell">2. Cmdlets
              de gestión de usuarios en PowerShell</Enlace >
              <Lista>
                <li><Enlace href="#usuarios-locales">Usuarios locales</Enlace ></li>
                <li><Enlace href="#grupos-locales">Grupos locales</Enlace ></li>
                <li><Enlace href="#información-y-autenticación">Información y
                  autenticación</Enlace ></li>
                <li><Enlace href="#active-directory-solo-si-tienes-ad-instalado">Active
                  Directory (solo si tienes AD instalado)</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#3-comandos-útiles-para-entornos-mixtos-cmd--powershell">3.
              Comandos útiles para entornos mixtos (CMD + PowerShell)</Enlace ></li>
          </Lista>
        </li>
      </Lista>
      <Texto><Enlace href="./../readme.md#3-windows">Regresar a la guía
        principal</Enlace ></Texto>
      <Linea />
      <Titulo title="h2" id="comandos-de-gestión-de-usuarios-en-cmd">1. Comandos de gestión
        de usuarios en CMD</Titulo>
      <blockquote>
        <Texto>Estos comandos funcionan directamente desde <strong>Símbolo del
          sistema (cmd)</strong> con permisos de administrador.</Texto>
      </blockquote>
      <table>
        <thead>
          <tr>
            <th>Comando</th>
            <th>Descripción</th>
            <th>Ejemplo</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>net user</code></td>
            <td>Muestra todos los usuarios locales.</td>
            <td><code>net user</code></td>
            <td></td>
          </tr>
          <tr>
            <td><code>net user &lt;usuario&gt;</code></td>
            <td>Muestra información sobre un usuario.</td>
            <td><code>net user Francisco</code></td>
            <td></td>
          </tr>
          <tr>
            <td><code>net user &lt;usuario&gt; &lt;contraseña&gt; /add</code></td>
            <td>Crea un nuevo usuario.</td>
            <td><code>net user Juan 1234 /add</code></td>
            <td></td>
          </tr>
          <tr>
            <td><code>net user &lt;usuario&gt; /delete</code></td>
            <td>Elimina un usuario.</td>
            <td><code>net user Juan /delete</code></td>
            <td></td>
          </tr>
          <tr>
            <td><code>net user &lt;usuario&gt; *</code></td>
            <td>Cambia la contraseña del usuario (la pedirá).</td>
            <td><code>net user Francisco *</code></td>
            <td></td>
          </tr>
          <tr>
            <td><code>net user &lt;usuario&gt; /active:yes            | no</code></td>
            <td>Activa o desactiva una cuenta.</td>
            <td><code>net user Juan /active:no</code></td>
            <td></td>
          </tr>
          <tr>
            <td><code>net localgroup</code></td>
            <td>Muestra los grupos locales.</td>
            <td><code>net localgroup</code></td>
            <td></td>
          </tr>
          <tr>
            <td><code>net localgroup &lt;grupo&gt;</code></td>
            <td>Muestra los usuarios del grupo.</td>
            <td><code>net localgroup Administradores</code></td>
            <td></td>
          </tr>
          <tr>
            <td><code>net localgroup &lt;grupo&gt; &lt;usuario&gt; /add</code></td>
            <td>Agrega un usuario a un grupo.</td>
            <td><code>net localgroup Administradores Juan /add</code></td>
            <td></td>
          </tr>
          <tr>
            <td><code>net localgroup &lt;grupo&gt; &lt;usuario&gt; /delete</code></td>
            <td>Quita un usuario de un grupo.</td>
            <td><code>net localgroup Usuarios Juan /delete</code></td>
            <td></td>
          </tr>
          <tr>
            <td><code>whoami</code></td>
            <td>Muestra el usuario actual.</td>
            <td><code>whoami</code></td>
            <td></td>
          </tr>
          <tr>
            <td><code>echo %username%</code></td>
            <td>Muestra el nombre de usuario desde variable de entorno.</td>
            <td><code>echo %username%</code></td>
            <td></td>
          </tr>
          <tr>
            <td><code>control userpasswords2</code></td>
            <td>Abre la interfaz avanzada de gestión de usuarios.</td>
            <td><code>control userpasswords2</code></td>
            <td></td>
          </tr>
          <tr>
            <td><code>lusrmgr.msc</code></td>
            <td>Abre la consola de usuarios y grupos locales (solo en Windows
              Pro).</td>
            <td><code>lusrmgr.msc</code></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Titulo title="h2" id="cmdlets-de-gestión-de-usuarios-en-powershell">2. Cmdlets de
        gestión de usuarios en PowerShell</Titulo>
      <blockquote>
        <Texto>Estos cmdlets forman parte de los módulos
          <strong>Microsoft.PowerShell.LocalAccounts</strong> o
          <strong>ActiveDirectory</strong> (si está instalado).
        </Texto>
      </blockquote>
      <Titulo title="h3" id="usuarios-locales">Usuarios locales</Titulo>
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
            <td><code>Get-LocalUser</code></td>
            <td>Lista los usuarios locales.</td>
            <td><code>Get-LocalUser</code></td>
          </tr>
          <tr>
            <td><code>New-LocalUser</code></td>
            <td>Crea un nuevo usuario local.</td>
            <td><code>New-LocalUser -Name "Juan" -Password (Read-Host -AsSecureString "Contraseña")</code></td>
          </tr>
          <tr>
            <td><code>Remove-LocalUser</code></td>
            <td>Elimina un usuario local.</td>
            <td><code>Remove-LocalUser -Name "Juan"</code></td>
          </tr>
          <tr>
            <td><code>Set-LocalUser</code></td>
            <td>Modifica las propiedades de un usuario.</td>
            <td><code>Set-LocalUser -Name "Juan" -Description "Usuario de prueba"</code></td>
          </tr>
          <tr>
            <td><code>Enable-LocalUser</code></td>
            <td>Activa un usuario.</td>
            <td><code>Enable-LocalUser -Name "Juan"</code></td>
          </tr>
          <tr>
            <td><code>Disable-LocalUser</code></td>
            <td>Desactiva un usuario.</td>
            <td><code>Disable-LocalUser -Name "Juan"</code></td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Titulo title="h3" id="grupos-locales">Grupos locales</Titulo>
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
            <td><code>Get-LocalGroup</code></td>
            <td>Lista los grupos locales.</td>
            <td><code>Get-LocalGroup</code></td>
          </tr>
          <tr>
            <td><code>New-LocalGroup</code></td>
            <td>Crea un grupo nuevo.</td>
            <td><code>New-LocalGroup -Name "Desarrolladores" -Description "Equipo de desarrollo"</code></td>
          </tr>
          <tr>
            <td><code>Remove-LocalGroup</code></td>
            <td>Elimina un grupo.</td>
            <td><code>Remove-LocalGroup -Name "Desarrolladores"</code></td>
          </tr>
          <tr>
            <td><code>Get-LocalGroupMember</code></td>
            <td>Muestra los miembros de un grupo.</td>
            <td><code>Get-LocalGroupMember -Group "Administradores"</code></td>
          </tr>
          <tr>
            <td><code>Add-LocalGroupMember</code></td>
            <td>Agrega un usuario o grupo a un grupo local.</td>
            <td><code>Add-LocalGroupMember -Group "Administradores" -Member "Juan"</code></td>
          </tr>
          <tr>
            <td><code>Remove-LocalGroupMember</code></td>
            <td>Quita un usuario de un grupo local.</td>
            <td><code>Remove-LocalGroupMember -Group "Usuarios" -Member "Juan"</code></td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Titulo title="h3" id="información-y-autenticación">Información y autenticación</Titulo>
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
            <td><code>whoami</code></td>
            <td>Muestra el usuario actual (también en CMD).</td>
            <td><code>whoami</code></td>
          </tr>
          <tr>
            <td><code>[System.Security.Principal.WindowsIdentity]::GetCurrent().Name</code></td>
            <td>Muestra el usuario actual con más detalle.</td>
            <td><em>(copiar y ejecutar en PowerShell)</em></td>
          </tr>
          <tr>
            <td><code>Get-ChildItem Env:USERNAME</code></td>
            <td>Muestra el nombre de usuario como variable de entorno.</td>
            <td><code>Get-ChildItem Env:USERNAME</code></td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Titulo title="h3" id="active-directory-solo-si-tienes-ad-instalado">Active Directory
        (solo si tienes AD instalado)</Titulo>
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
            <td><code>Get-ADUser</code></td>
            <td>Muestra información de usuarios del dominio.</td>
            <td><code>Get-ADUser -Filter *</code></td>
          </tr>
          <tr>
            <td><code>New-ADUser</code></td>
            <td>Crea un nuevo usuario en el dominio.</td>
            <td>
              <code>New-ADUser -Name "Carlos" -SamAccountName "carlos" -AccountPassword (Read-Host -AsSecureString "Contraseña") -Enabled $true</code>
            </td>
          </tr>
          <tr>
            <td><code>Set-ADUser</code></td>
            <td>Modifica propiedades de un usuario del dominio.</td>
            <td><code>Set-ADUser carlos -Title "Administrador"</code></td>
          </tr>
          <tr>
            <td><code>Enable-ADAccount</code></td>
            <td>Activa una cuenta de AD.</td>
            <td><code>Enable-ADAccount carlos</code></td>
          </tr>
          <tr>
            <td><code>Disable-ADAccount</code></td>
            <td>Desactiva una cuenta de AD.</td>
            <td><code>Disable-ADAccount carlos</code></td>
          </tr>
          <tr>
            <td><code>Get-ADGroup</code></td>
            <td>Muestra los grupos de dominio.</td>
            <td><code>Get-ADGroup -Filter *</code></td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Titulo title="h2" id="comandos-útiles-para-entornos-mixtos-cmd-powershell">3. Comandos
        útiles para entornos mixtos (CMD + PowerShell)</Titulo>
      <table>
        <thead>
          <tr>
            <th>Tarea</th>
            <th>CMD</th>
            <th>PowerShell</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ver usuario actual</td>
            <td><code>whoami</code></td>
            <td><code>whoami</code> o <code>$Env:USERNAME</code></td>
          </tr>
          <tr>
            <td>Crear usuario</td>
            <td><code>net user Juan 1234 /add</code></td>
            <td><code>New-LocalUser -Name "Juan"</code></td>
          </tr>
          <tr>
            <td>Eliminar usuario</td>
            <td><code>net user Juan /delete</code></td>
            <td><code>Remove-LocalUser -Name "Juan"</code></td>
          </tr>
          <tr>
            <td>Agregar usuario a grupo</td>
            <td><code>net localgroup Administradores Juan /add</code></td>
            <td><code>Add-LocalGroupMember -Group "Administradores" -Member "Juan"</code></td>
          </tr>
          <tr>
            <td>Ver miembros de grupo</td>
            <td><code>net localgroup Administradores</code></td>
            <td><code>Get-LocalGroupMember -Group "Administradores"</code></td>
          </tr>
          <tr>
            <td>Activar/desactivar usuario</td>
            <td><code>net user Juan /active:yes</code></td>
            <td><code>Enable-LocalUser -Name "Juan"</code></td>
          </tr>
        </tbody>
      </table>
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
