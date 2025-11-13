import Enlace from "../../componentes/atomos/enlace.jsx";
import Linea from "../../componentes/atomos/linea.jsx";
import Lista from "../../componentes/moleculas/lista.jsx";
import Texto from "./../../componentes/atomos/texto.jsx";
import Titulo from "../../componentes/moleculas/titulo.jsx";
import { Tabla, TablaCabezera, TablaFila, TablaUnica } from "../../componentes/moleculas/tabla.jsx";
import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../../componentes/organismos/estructura.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#1-comandos-de-gestión-de-usuarios-en-cmd">1. Comandos de
        gestión de usuarios en CMD</Enlace ></li>
      <li><Enlace href="#2-cmdlets-de-gestión-de-usuarios-en-powershell">2. Cmdlets
        de gestión de usuarios en PowerShell</Enlace >
        <Lista>
          <li><Enlace href="#usuarios-locales">Usuarios locales</Enlace ></li>
          <li><Enlace href="#grupos-locales">Grupos locales</Enlace ></li>
          <li><Enlace href="#información-y-autenticación">Información y
            autenticación</Enlace ></li>
          <li><Enlace href="#active-directory-solo-sí-tienes-ad-instalado">Active
            Directory (solo sí tienes AD instalado)</Enlace ></li>
        </Lista>
      </li>
      <li><Enlace href="#3-comandos-útiles-para-entornos-mixtos-cmd--powershell">3.
        Comandos útiles para entornos mixtos (CMD + PowerShell)</Enlace ></li>
    </Lista>
  );
}


function nameabcd({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" id="comandos-y-cmdlets-de-gestión-de-usuarios">Comandos y cmdlets de
          gestión de usuarios</Titulo>
        <Linea />

        <TemarioCompleto temario={Temario} />

        <Titulo title="h2" id="comandos-de-gestión-de-usuarios-en-cmd">1. Comandos de gestión
          de usuarios en CMD</Titulo>
        <blockquote>
          <Texto>Estos comandos funcionan directamente desde <strong>Símbolo del
            sistema (cmd)</strong> con permisos de administrador.</Texto>
        </blockquote>
        <Tabla>
          <TablaCabezera headers={["Comando", "Descripción", "Ejemplo", ""]} />

          <tbody>
            <TablaFila>
              <TablaUnica>net user</TablaUnica>
              <TablaUnica>Muestra todos los usuarios locales.</TablaUnica>
              <TablaUnica>net user</TablaUnica>
              <TablaUnica></TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>net user &lt;usuario&gt;</TablaUnica>
              <TablaUnica>Muestra información sobre un usuario.</TablaUnica>
              <TablaUnica>net user Francisco</TablaUnica>
              <TablaUnica></TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>net user &lt;usuario&gt; &lt;contraseña&gt; /add</TablaUnica>
              <TablaUnica>Crea un nuevo usuario.</TablaUnica>
              <TablaUnica>net user Juan 1234 /add</TablaUnica>
              <TablaUnica></TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>net user &lt;usuario&gt; /delete</TablaUnica>
              <TablaUnica>Elimina un usuario.</TablaUnica>
              <TablaUnica>net user Juan /delete</TablaUnica>
              <TablaUnica></TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>net user &lt;usuario&gt; *</TablaUnica>
              <TablaUnica>Cambia la contraseña del usuario (la pedirá).</TablaUnica>
              <TablaUnica>net user Francisco *</TablaUnica>
              <TablaUnica></TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>net user &lt;usuario&gt; /active:yes            | no</TablaUnica>
              <TablaUnica>Activa o desactiva una cuenta.</TablaUnica>
              <TablaUnica>net user Juan /active:no</TablaUnica>
              <TablaUnica></TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>net localgroup</TablaUnica>
              <TablaUnica>Muestra los grupos locales.</TablaUnica>
              <TablaUnica>net localgroup</TablaUnica>
              <TablaUnica></TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>net localgroup &lt;grupo&gt;</TablaUnica>
              <TablaUnica>Muestra los usuarios del grupo.</TablaUnica>
              <TablaUnica>net localgroup Administradores</TablaUnica>
              <TablaUnica></TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>net localgroup &lt;grupo&gt; &lt;usuario&gt; /add</TablaUnica>
              <TablaUnica>Agrega un usuario a un grupo.</TablaUnica>
              <TablaUnica>net localgroup Administradores Juan /add</TablaUnica>
              <TablaUnica></TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>net localgroup &lt;grupo&gt; &lt;usuario&gt; /delete</TablaUnica>
              <TablaUnica>Quita un usuario de un grupo.</TablaUnica>
              <TablaUnica>net localgroup Usuarios Juan /delete</TablaUnica>
              <TablaUnica></TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>whoami</TablaUnica>
              <TablaUnica>Muestra el usuario actual.</TablaUnica>
              <TablaUnica>whoami</TablaUnica>
              <TablaUnica></TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>echo %username%</TablaUnica>
              <TablaUnica>Muestra el nombre de usuario desde variable de entorno.</TablaUnica>
              <TablaUnica>echo %username%</TablaUnica>
              <TablaUnica></TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>control userpasswords2</TablaUnica>
              <TablaUnica>Abre la interfaz avanzada de gestión de usuarios.</TablaUnica>
              <TablaUnica>control userpasswords2</TablaUnica>
              <TablaUnica></TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>lusrmgr.msc</TablaUnica>
              <TablaUnica>Abre la consola de usuarios y grupos locales (solo en Windows
                Pro).</TablaUnica>
              <TablaUnica>lusrmgr.msc</TablaUnica>
              <TablaUnica></TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>
        <Linea />
        <Titulo title="h2" id="cmdlets-de-gestión-de-usuarios-en-powershell">2. Cmdlets de
          gestión de usuarios en PowerShell</Titulo>
        <blockquote>
          <Texto>Estos cmdlets forman parte de los módulos
            <strong>Microsoft.PowerShell.LocalAccounts</strong> o
            <strong>ActiveDirectory</strong> (sí está instalado).
          </Texto>
        </blockquote>
        <Titulo title="h3" id="usuarios-locales">Usuarios locales</Titulo>
        <Tabla>
          <TablaCabezera headers={["Cmdlet", "Descripción", "Ejemplo"]} />

          <tbody>
            <TablaFila>
              <TablaUnica>Get-LocalUser</TablaUnica>
              <TablaUnica>Lista los usuarios locales.</TablaUnica>
              <TablaUnica>Get-LocalUser</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>New-LocalUser</TablaUnica>
              <TablaUnica>Crea un nuevo usuario local.</TablaUnica>
              <TablaUnica>New-LocalUser -Name "Juan" -Password (Read-Host -AsSecureString "Contraseña")</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Remove-LocalUser</TablaUnica>
              <TablaUnica>Elimina un usuario local.</TablaUnica>
              <TablaUnica>Remove-LocalUser -Name "Juan"</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Set-LocalUser</TablaUnica>
              <TablaUnica>Modifica las propiedades de un usuario.</TablaUnica>
              <TablaUnica>Set-LocalUser -Name "Juan" -Description "Usuario de prueba"</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Enable-LocalUser</TablaUnica>
              <TablaUnica>Activa un usuario.</TablaUnica>
              <TablaUnica>Enable-LocalUser -Name "Juan"</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Disable-LocalUser</TablaUnica>
              <TablaUnica>Desactiva un usuario.</TablaUnica>
              <TablaUnica>Disable-LocalUser -Name "Juan"</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>
        <Linea />
        <Titulo title="h3" id="grupos-locales">Grupos locales</Titulo>
        <Tabla>
          <TablaCabezera headers={["Cmdlet", "Descripción", "Ejemplo"]} />

          <tbody>
            <TablaFila>
              <TablaUnica>Get-LocalGroup</TablaUnica>
              <TablaUnica>Lista los grupos locales.</TablaUnica>
              <TablaUnica>Get-LocalGroup</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>New-LocalGroup</TablaUnica>
              <TablaUnica>Crea un grupo nuevo.</TablaUnica>
              <TablaUnica>New-LocalGroup -Name "Desarrolladores" -Description "Equipo de desarrollo"</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Remove-LocalGroup</TablaUnica>
              <TablaUnica>Elimina un grupo.</TablaUnica>
              <TablaUnica>Remove-LocalGroup -Name "Desarrolladores"</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Get-LocalGroupMember</TablaUnica>
              <TablaUnica>Muestra los miembros de un grupo.</TablaUnica>
              <TablaUnica>Get-LocalGroupMember -Group "Administradores"</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Add-LocalGroupMember</TablaUnica>
              <TablaUnica>Agrega un usuario o grupo a un grupo local.</TablaUnica>
              <TablaUnica>Add-LocalGroupMember -Group "Administradores" -Member "Juan"</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Remove-LocalGroupMember</TablaUnica>
              <TablaUnica>Quita un usuario de un grupo local.</TablaUnica>
              <TablaUnica>Remove-LocalGroupMember -Group "Usuarios" -Member "Juan"</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>
        <Linea />
        <Titulo title="h3" id="información-y-autenticación">Información y autenticación</Titulo>
        <Tabla>
          <TablaCabezera headers={["Cmdlet", "Descripción", "Ejemplo"]} />

          <tbody>
            <TablaFila>
              <TablaUnica>whoami</TablaUnica>
              <TablaUnica>Muestra el usuario actual (también en CMD).</TablaUnica>
              <TablaUnica>whoami</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>[System.Security.Principal.WindowsIdentity]::GetCurrent().Name</TablaUnica>
              <TablaUnica>Muestra el usuario actual con más detalle.</TablaUnica>
              <TablaUnica><em>(copiar y ejecutar en PowerShell)</em></TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Get-ChildItem Env:USERNAME</TablaUnica>
              <TablaUnica>Muestra el nombre de usuario como variable de entorno.</TablaUnica>
              <TablaUnica>Get-ChildItem Env:USERNAME</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>
        <Linea />
        <Titulo title="h3" id="active-directory-solo-sí-tienes-ad-instalado">Active Directory
          (solo sí tienes AD instalado)</Titulo>
        <Tabla>
          <TablaCabezera headers={["Cmdlet", "Descripción", "Ejemplo"]} />

          <tbody>
            <TablaFila>
              <TablaUnica>Get-ADUser</TablaUnica>
              <TablaUnica>Muestra información de usuarios del dominio.</TablaUnica>
              <TablaUnica>Get-ADUser -Filter *</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>New-ADUser</TablaUnica>
              <TablaUnica>Crea un nuevo usuario en el dominio.</TablaUnica>
              <TablaUnica>New-ADUser -Name "Carlos" -SamAccountName "carlos" -AccountPassword (Read-Host -AsSecureString "Contraseña") -Enabled $true</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Set-ADUser</TablaUnica>
              <TablaUnica>Modifica propiedades de un usuario del dominio.</TablaUnica>
              <TablaUnica>Set-ADUser carlos -Title "Administrador"</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Enable-ADAccount</TablaUnica>
              <TablaUnica>Activa una cuenta de AD.</TablaUnica>
              <TablaUnica>Enable-ADAccount carlos</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Disable-ADAccount</TablaUnica>
              <TablaUnica>Desactiva una cuenta de AD.</TablaUnica>
              <TablaUnica>Disable-ADAccount carlos</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Get-ADGroup</TablaUnica>
              <TablaUnica>Muestra los grupos de dominio.</TablaUnica>
              <TablaUnica>Get-ADGroup -Filter *</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>
        <Linea />
        <Titulo title="h2" id="comandos-útiles-para-entornos-mixtos-cmd-powershell">3. Comandos
          útiles para entornos mixtos (CMD + PowerShell)</Titulo>
        <Tabla>
          <TablaCabezera headers={["Tarea", "CMD", "PowerShell"]} />

          <tbody>
            <TablaFila>
              <TablaUnica>Ver usuario actual</TablaUnica>
              <TablaUnica>whoami</TablaUnica>
              <TablaUnica>whoami o $Env:USERNAME</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Crear usuario</TablaUnica>
              <TablaUnica>net user Juan 1234 /add</TablaUnica>
              <TablaUnica>New-LocalUser -Name "Juan"</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Eliminar usuario</TablaUnica>
              <TablaUnica>net user Juan /delete</TablaUnica>
              <TablaUnica>Remove-LocalUser -Name "Juan"</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Agregar usuario a grupo</TablaUnica>
              <TablaUnica>net localgroup Administradores Juan /add</TablaUnica>
              <TablaUnica>Add-LocalGroupMember -Group "Administradores" -Member "Juan"</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Ver miembros de grupo</TablaUnica>
              <TablaUnica>net localgroup Administradores</TablaUnica>
              <TablaUnica>Get-LocalGroupMember -Group "Administradores"</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Activar/desactivar usuario</TablaUnica>
              <TablaUnica>net user Juan /active:yes</TablaUnica>
              <TablaUnica>Enable-LocalUser -Name "Juan"</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>
      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}

export default nameabcd;
