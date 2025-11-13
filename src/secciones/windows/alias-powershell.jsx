import Enlace from "../../componentes/atomos/enlace.jsx";
import Linea from "../../componentes/atomos/linea.jsx";
import Lista from "../../componentes/moleculas/lista.jsx";
import Texto from "./../../componentes/atomos/texto.jsx";
import Titulo from "../../componentes/moleculas/titulo.jsx";
import { Tabla, TablaCabezera, TablaFila, TablaUnica } from "../../componentes/moleculas/tabla.jsx";
import Codigo from "../../componentes/moleculas/codigo.jsx";
import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../../componentes/organismos/estructura.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#qué-es-un-alias">Qué es un alias</Enlace ></li>
      <li><Enlace href="#alias-comunes-en-powershell">Alias comunes en
        PowerShell</Enlace ></li>
      <li><Enlace href="#cmdlets-relacionados-con-alias">Cmdlets relacionados con
        alias</Enlace ></li>
      <li><Enlace href="#ejemplos-prácticos">Ejemplos prácticos</Enlace ></li>
      <li><Enlace href="#alias-persistentes">Alias persistentes</Enlace ></li>
      <li><Enlace href="#nota-importante">Nota importante</Enlace ></li>
    </Lista>
  );
}

function nameabcd({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" id="alias-en-powershell">Alias en powershell</Titulo>
        <Linea />

        <TemarioCompleto temario={Temario} />

        <Titulo title="h2" id="qué-es-un-alias">Qué es un alias</Titulo>
        <Texto>Un <strong>alias</strong> es simplemente un <strong>nombre
          alternativo</strong> para un comando existente. Por ejemplo:</Texto>
        <Codigo code={`Get-ChildItem     # Nombre completo
ls                # Alias`} language="bash" />
        <Texto>Ambos hacen lo mismo: listar archivos y carpetas.</Texto>
        <Linea />
        <Titulo title="h2" id="alias-comunes-en-powershell">Alias comunes en PowerShell</Titulo>
        <Tabla>
          <TablaCabezera headers={["Alias", "Cmdlet equivalente", "Descripción"]} />

          <tbody>
            <TablaFila>
              <TablaUnica>ls</TablaUnica>
              <TablaUnica>Get-ChildItem</TablaUnica>
              <TablaUnica>Lista archivos y carpetas.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>dir</TablaUnica>
              <TablaUnica>Get-ChildItem</TablaUnica>
              <TablaUnica>Igual que ls (compatibilidad con CMD).</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>cd</TablaUnica>
              <TablaUnica>Set-Location</TablaUnica>
              <TablaUnica>Cambia de directorio.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>pwd</TablaUnica>
              <TablaUnica>Get-Location</TablaUnica>
              <TablaUnica>Muestra el directorio actual.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>cat, type</TablaUnica>
              <TablaUnica>Get-Content</TablaUnica>
              <TablaUnica>Muestra el contenido de un archivo.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>echo, write</TablaUnica>
              <TablaUnica>Write-Output</TablaUnica>
              <TablaUnica>Imprime texto en pantalla.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>cls, clear</TablaUnica>
              <TablaUnica>Clear-Host</TablaUnica>
              <TablaUnica>Limpia la pantalla.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>cp, copy</TablaUnica>
              <TablaUnica>Copy-Item</TablaUnica>
              <TablaUnica>Copia archivos o carpetas.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>mv, move</TablaUnica>
              <TablaUnica>Move-Item</TablaUnica>
              <TablaUnica>Mueve o renombra archivos.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>rm, del, erase</TablaUnica>
              <TablaUnica>Remove-Item</TablaUnica>
              <TablaUnica>Elimina archivos o carpetas.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>man, help</TablaUnica>
              <TablaUnica>Get-Help</TablaUnica>
              <TablaUnica>Muestra ayuda de un cmdlet.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>ps</TablaUnica>
              <TablaUnica>Get-Process</TablaUnica>
              <TablaUnica>Lista procesos activos.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>kill</TablaUnica>
              <TablaUnica>Stop-Process</TablaUnica>
              <TablaUnica>Finaliza un proceso.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>gcm</TablaUnica>
              <TablaUnica>Get-Command</TablaUnica>
              <TablaUnica>Busca cmdlets o funciones.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>gal</TablaUnica>
              <TablaUnica>Get-Alias</TablaUnica>
              <TablaUnica>Muestra todos los alias.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>sal</TablaUnica>
              <TablaUnica>Set-Alias</TablaUnica>
              <TablaUnica>Crea un alias nuevo.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>nal</TablaUnica>
              <TablaUnica>New-Alias</TablaUnica>
              <TablaUnica>Crea un alias y lo guarda (persistente sí lo defines en el
                perfil).</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>pal</TablaUnica>
              <TablaUnica>Pop-Location</TablaUnica>
              <TablaUnica>Vuelve al directorio anterior.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>pushd</TablaUnica>
              <TablaUnica>Push-Location</TablaUnica>
              <TablaUnica>Guarda el directorio actual en una pila.</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>
        <Linea />
        <Titulo title="h2" id="cmdlets-relacionados-con-alias">Cmdlets relacionados con
          alias</Titulo>
        <Tabla>
          <TablaCabezera headers={["Cmdlet", "Descripción", "Ejemplo"]} />

          <tbody>
            <TablaFila>
              <TablaUnica>Get-Alias</TablaUnica>
              <TablaUnica>Muestra todos los alias definidos actualmente.</TablaUnica>
              <TablaUnica>Get-Alias</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Get-Alias &lt;alias&gt;</TablaUnica>
              <TablaUnica>Muestra el comando que representa un alias.</TablaUnica>
              <TablaUnica>Get-Alias ls</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Set-Alias &lt;nombre&gt; &lt;comando&gt;</TablaUnica>
              <TablaUnica>Crea un alias temporal.</TablaUnica>
              <TablaUnica>Set-Alias borrar Remove-Item</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>New-Alias &lt;nombre&gt; &lt;comando&gt;</TablaUnica>
              <TablaUnica>Crea un alias (igual que Set-Alias).</TablaUnica>
              <TablaUnica>New-Alias abrir notepad</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Export-Alias &lt;archivo&gt;</TablaUnica>
              <TablaUnica>Exporta todos los alias a un archivo.</TablaUnica>
              <TablaUnica>Export-Alias alias.txt</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Import-Alias &lt;archivo&gt;</TablaUnica>
              <TablaUnica>Importa alias desde un archivo.</TablaUnica>
              <TablaUnica>Import-Alias alias.txt</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Remove-Item alias:&lt;nombre&gt;</TablaUnica>
              <TablaUnica>Elimina un alias.</TablaUnica>
              <TablaUnica>Remove-Item alias:borrar</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>
        <Linea />
        <Titulo title="h2" id="ejemplos-prácticos">Ejemplos prácticos</Titulo>
        <Codigo code={`# Ver todos los alias
Get-Alias

# Crear un alias personalizado
Set-Alias editar "notepad.exe"

# Usar el alias
editar archivo.txt

# Ver qué comando ejecuta un alias
Get-Alias ls

# Eliminar un alias
Remove-Item alias:editar`} language="bash" />
        <Linea />
        <Titulo title="h2" id="alias-persistentes">Alias persistentes</Titulo>
        <Texto>Por defecto, los alias creados con Set-Alias o
          New-Alias <strong>solo duran mientras PowerShell está
            abierto</strong>.
        </Texto>
        <Texto>Para hacerlos <strong>permanentes</strong>, agrégalos al
          <strong>perfil de PowerShell</strong>:
        </Texto>
        <Codigo code={`notepad $PROFILE`} language="bash" />
        <Texto>Luego agrega tus alias personalizados:</Texto>
        <Codigo code={`Set-Alias editar notepad.exe
Set-Alias borrar Remove-Item`} language="bash" />
        <Texto>Guarda el archivo y la próxima vez que abras PowerShell, estarán
          disponibles.</Texto>
        <Linea />
        <Titulo title="h2" id="nota-importante">Nota importante</Titulo>
        <Lista>
          <li>
            Los alias <strong>no aceptan parámetros por defecto</strong>. Por
              ejemplo, Set-Alias buscar "Get-ChildItem -Recurse" no
              funcionará. En ese caso, usa una <strong>función</strong>:
            <Codigo code={`function buscar { Get-ChildItem -Recurse @args }
Set-Alias buscar buscar`} language="bash" />
          </li>
        </Lista>
      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}

export default nameabcd;
