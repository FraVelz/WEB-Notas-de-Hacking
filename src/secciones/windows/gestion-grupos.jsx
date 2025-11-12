import Enlace from "../../componentes/atomos/enlace.jsx";
import Linea from "../../componentes/atomos/linea.jsx";
import Lista from "../../componentes/moleculas/lista.jsx";
import Texto from "./../../componentes/atomos/texto.jsx";
import Titulo from "../../componentes/moleculas/titulo.jsx";
import { Tabla, TablaCabezera, TablaFila, TablaUnica } from "../../componentes/moleculas/tabla.jsx";

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="comandos-y-cmdlets-de-grupos">Comandos y cmdlets de grupos</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><Enlace href="#comandos-y-cmdlets-de-grupos">Comandos y cmdlets de
          grupos</Enlace >
          <Lista>
            <li><Enlace href="#temario">Temario</Enlace ></li>
            <li><Enlace href="#1-comandos-de-gestión-de-grupos-en-cmd">1. Comandos de
              gestión de grupos en CMD</Enlace ></li>
            <li><Enlace href="#2-cmdlets-de-gestión-de-grupos-en-powershell">2. Cmdlets
              de gestión de grupos en PowerShell</Enlace >
              <Lista>
                <li><Enlace href="#grupos-locales">Grupos locales</Enlace ></li>
                <li><Enlace href="#grupos-de-dominio-active-directory">Grupos de dominio
                  (Active Directory)</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#3-comparativa-cmd-vs-powershell">3. Comparativa CMD vs
              PowerShell</Enlace ></li>
            <li><Enlace href="#4-atajos-y-comandos-gráficos">4. Atajos y comandos
              gráficos</Enlace ></li>
          </Lista>
        </li>
      </Lista>
      <Texto><Enlace href="./../readme.md#3-windows">Regresar a la guía
        principal</Enlace ></Texto>
      <Linea />
      <Titulo title="h2" id="comandos-de-gestión-de-grupos-en-cmd">1. Comandos de gestión de
        grupos en CMD</Titulo>
      <blockquote>
        <Texto>Todos estos comandos se ejecutan en <strong>Símbolo del sistema
          (CMD)</strong> con permisos de administrador.</Texto>
      </blockquote>
      <Tabla>
  <TablaCabezera headers={["Comando", "Descripción", "Ejemplo"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>net localgroup</TablaUnica>
      <TablaUnica>Muestra todos los grupos locales del equipo.</TablaUnica>
      <TablaUnica>net localgroup</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>net localgroup &lt;nombre_grupo&gt;</TablaUnica>
      <TablaUnica>Muestra los miembros del grupo.</TablaUnica>
      <TablaUnica>net localgroup Administradores</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>net localgroup &lt;nombre_grupo&gt; /add</TablaUnica>
      <TablaUnica>Crea un nuevo grupo local.</TablaUnica>
      <TablaUnica>net localgroup Desarrolladores /add</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>net localgroup &lt;nombre_grupo&gt; /delete</TablaUnica>
      <TablaUnica>Elimina un grupo local.</TablaUnica>
      <TablaUnica>net localgroup Desarrolladores /delete</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>net localgroup &lt;nombre_grupo&gt; &lt;usuario&gt; /add</TablaUnica>
      <TablaUnica>Agrega un usuario al grupo.</TablaUnica>
      <TablaUnica>net localgroup Administradores Juan /add</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>net localgroup &lt;nombre_grupo&gt; &lt;usuario&gt; /delete</TablaUnica>
      <TablaUnica>Elimina un usuario del grupo.</TablaUnica>
      <TablaUnica>net localgroup Administradores Juan /delete</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>net user &lt;usuario&gt;</TablaUnica>
      <TablaUnica>Muestra los grupos a los que pertenece el usuario.</TablaUnica>
      <TablaUnica>net user Juan</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>net group</TablaUnica>
      <TablaUnica>(En redes de dominio) Muestra los grupos de dominio.</TablaUnica>
      <TablaUnica>net group</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>net group &lt;nombre_grupo&gt;</TablaUnica>
      <TablaUnica>Muestra los miembros del grupo de dominio.</TablaUnica>
      <TablaUnica>net group Ventas</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>net group &lt;nombre_grupo&gt; /add</TablaUnica>
      <TablaUnica>Crea un grupo de dominio (solo en AD).</TablaUnica>
      <TablaUnica>net group Finanzas /add</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>net group &lt;nombre_grupo&gt; /delete</TablaUnica>
      <TablaUnica>Elimina un grupo de dominio.</TablaUnica>
      <TablaUnica>net group Finanzas /delete</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>net group &lt;nombre_grupo&gt; &lt;usuario&gt; /add</TablaUnica>
      <TablaUnica>Agrega un usuario a un grupo del dominio.</TablaUnica>
      <TablaUnica>net group Finanzas Juan /add</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
      <Linea />
      <Titulo title="h2" id="cmdlets-de-gestión-de-grupos-en-powershell">2. Cmdlets de
        gestión de grupos en PowerShell</Titulo>
      <blockquote>
        <Texto>Estos cmdlets pertenecen al módulo
          <strong>Microsoft.PowerShell.LocalAccounts</strong> (para grupos
          locales). Sí usas Active Directory, también hay cmdlets del módulo
          <strong>ActiveDirectory</strong>.
        </Texto>
      </blockquote>
      <Linea />
      <Titulo title="h3" id="grupos-locales">Grupos locales</Titulo>
      <Tabla>
  <TablaCabezera headers={["Cmdlet", "Descripción", "Ejemplo"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>Get-LocalGroup</TablaUnica>
      <TablaUnica>Muestra todos los grupos locales del sistema.</TablaUnica>
      <TablaUnica>Get-LocalGroup</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Get-LocalGroup -Name &lt;nombre&gt;</TablaUnica>
      <TablaUnica>Muestra información detallada de un grupo.</TablaUnica>
      <TablaUnica>Get-LocalGroup -Name "Administradores"</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>New-LocalGroup</TablaUnica>
      <TablaUnica>Crea un grupo local nuevo.</TablaUnica>
      <TablaUnica>New-LocalGroup -Name "Desarrolladores" -Description "Equipo de desarrollo"</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Remove-LocalGroup</TablaUnica>
      <TablaUnica>Elimina un grupo local.</TablaUnica>
      <TablaUnica>Remove-LocalGroup -Name "Desarrolladores"</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Get-LocalGroupMember</TablaUnica>
      <TablaUnica>Muestra los miembros de un grupo local.</TablaUnica>
      <TablaUnica>Get-LocalGroupMember -Group "Administradores"</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Add-LocalGroupMember</TablaUnica>
      <TablaUnica>Agrega un usuario o grupo a un grupo local.</TablaUnica>
      <TablaUnica>Add-LocalGroupMember -Group "Administradores" -Member "Juan"</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Remove-LocalGroupMember</TablaUnica>
      <TablaUnica>Quita un usuario o grupo de un grupo local.</TablaUnica>
      <TablaUnica>Remove-LocalGroupMember -Group "Usuarios" -Member "Juan"</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
      <Linea />
      <Titulo title="h3" id="grupos-de-dominio-active-directory">Grupos de dominio (Active
        Directory)</Titulo>
      <Texto><em>(solo sí tienes instalado el módulo ActiveDirectory
        y estás en un dominio)</em></Texto>
      <Tabla>
  <TablaCabezera headers={["Cmdlet", "Descripción", "Ejemplo"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>Get-ADGroup</TablaUnica>
      <TablaUnica>Lista los grupos del dominio.</TablaUnica>
      <TablaUnica>Get-ADGroup -Filter *</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Get-ADGroupMember</TablaUnica>
      <TablaUnica>Muestra los miembros de un grupo del dominio.</TablaUnica>
      <TablaUnica>Get-ADGroupMember -Identity "Ventas"</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>New-ADGroup</TablaUnica>
      <TablaUnica>Crea un grupo en Active Directory.</TablaUnica>
      <TablaUnica>New-ADGroup -Name "Finanzas" -GroupScope Global -Path "OU=Departamentos,DC=empresa,DC=com"</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Remove-ADGroup</TablaUnica>
      <TablaUnica>Elimina un grupo del dominio.</TablaUnica>
      <TablaUnica>Remove-ADGroup -Identity "Finanzas"</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Add-ADGroupMember</TablaUnica>
      <TablaUnica>Agrega usuarios o grupos a un grupo de dominio.</TablaUnica>
      <TablaUnica>Add-ADGroupMember -Identity "Finanzas" -Members "Juan","Maria"</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Remove-ADGroupMember</TablaUnica>
      <TablaUnica>Elimina miembros de un grupo de dominio.</TablaUnica>
      <TablaUnica>Remove-ADGroupMember -Identity "Finanzas" -Members "Juan"</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Set-ADGroup</TablaUnica>
      <TablaUnica>Modifica propiedades de un grupo.</TablaUnica>
      <TablaUnica>Set-ADGroup -Identity "Finanzas" -Description "Grupo del área contable"</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
      <Linea />
      <Titulo title="h2" id="comparativa-cmd-vs-powershell">3. Comparativa CMD vs
        PowerShell</Titulo>
      <Tabla>
  <TablaCabezera headers={["Tarea", "CMD", "PowerShell"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>Ver grupos locales</TablaUnica>
      <TablaUnica>net localgroup</TablaUnica>
      <TablaUnica>Get-LocalGroup</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Ver miembros de un grupo</TablaUnica>
      <TablaUnica>net localgroup Administradores</TablaUnica>
      <TablaUnica>Get-LocalGroupMember -Group "Administradores"</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Crear un grupo</TablaUnica>
      <TablaUnica>net localgroup Desarrolladores /add</TablaUnica>
      <TablaUnica>New-LocalGroup -Name "Desarrolladores"</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Eliminar un grupo</TablaUnica>
      <TablaUnica>net localgroup Desarrolladores /delete</TablaUnica>
      <TablaUnica>Remove-LocalGroup -Name "Desarrolladores"</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Agregar usuario a grupo</TablaUnica>
      <TablaUnica>net localgroup Administradores Juan /add</TablaUnica>
      <TablaUnica>Add-LocalGroupMember -Group "Administradores" -Member "Juan"</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Quitar usuario del grupo</TablaUnica>
      <TablaUnica>net localgroup Administradores Juan /delete</TablaUnica>
      <TablaUnica>Remove-LocalGroupMember -Group "Administradores" -Member "Juan"</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Listar grupos de dominio</TablaUnica>
      <TablaUnica>net group</TablaUnica>
      <TablaUnica>Get-ADGroup -Filter *</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Crear grupo en dominio</TablaUnica>
      <TablaUnica>net group Ventas /add</TablaUnica>
      <TablaUnica>New-ADGroup -Name "Ventas" -GroupScope Global</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>

      <Linea />
      <Titulo title="h2" id="atajos-y-comandos-gráficos">4. Atajos y comandos gráficos</Titulo>
      <Tabla>
  <TablaCabezera headers={["Comando", "Descripción"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>lusrmgr.msc</TablaUnica>
      <TablaUnica>Abre la consola gráfica de <strong>Usuarios y Grupos
              locales</strong> (solo Windows Pro y superior).</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>control userpasswords2</TablaUnica>
      <TablaUnica>Permite administrar usuarios y grupos de forma avanzada.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>compmgmt.msc → “Usuarios y grupos locales”</TablaUnica>
      <TablaUnica>Alternativa para versiones Pro.</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
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
