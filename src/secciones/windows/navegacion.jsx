import Titulo from "./../../componentes/titulo.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Linea from "./../../componentes/linea.jsx";
import Enlace from "../../componentes/enlace.jsx";

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="comandos-de-navegación">Comandos de Navegación</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><Enlace href="#comandos-de-navegación">Comandos de Navegación</Enlace >
          <Lista>
            <li><Enlace href="#temario">Temario</Enlace ></li>
            <li><Enlace href="#1-windows-cmd-command-prompt">1. Windows CMD (Command
              Prompt)</Enlace >
              <Lista>
                <li><Enlace href="#navegación-por-directorios">Navegación por
                  directorios</Enlace ></li>
                <li><Enlace href="#gestión-de-archivos">Gestión de archivos</Enlace ></li>
                <li><Enlace href="#gestión-de-carpetas">Gestión de carpetas</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#2-powershell-cmdlets">2. PowerShell (cmdlets)</Enlace >
              <Lista>
                <li><Enlace href="#navegación-por-directorios-cmdlets">Navegación por
                  directorios (cmdlets)</Enlace ></li>
                <li><Enlace href="#gestión-de-archivos-cmdlets">Gestión de archivos
                  (cmdlets)</Enlace ></li>
                <li><Enlace href="#gestión-de-carpetas-cmdlets">Gestión de carpetas
                  (cmdlets)</Enlace ></li>
              </Lista>
            </li>
          </Lista>
        </li>
      </Lista>
      <Texto><Enlace href="./../readme.md#3-windows">Regresar a la guía
        principal</Enlace ></Texto>
      <Linea />
      <Titulo title="h2" id="windows-cmd-command-prompt">1. Windows CMD (Command Prompt)</Titulo>
      <Titulo title="h3" id="navegación-por-directorios">Navegación por directorios</Titulo>
      <table>
        <thead>
          <tr>
            <th>Comando</th>
            <th>Función</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>cd</code> o <code>chdir</code></td>
            <td>Cambiar de directorio. Ej:
              <code>cd C:\Usuarios\Francisco</code>
            </td>
          </tr>
          <tr>
            <td><code>cd ..</code></td>
            <td>Subir un nivel de carpeta</td>
          </tr>
          <tr>
            <td><code>cd \</code></td>
            <td>Ir al directorio raíz de la unidad actual</td>
          </tr>
          <tr>
            <td><code>dir</code></td>
            <td>Listar archivos y carpetas del directorio actual</td>
          </tr>
          <tr>
            <td><code>tree</code></td>
            <td>Mostrar la estructura de carpetas en forma de árbol</td>
          </tr>
        </tbody>
      </table>
      <Titulo title="h3" id="gestión-de-archivos">Gestión de archivos</Titulo>
      <table>
        <thead>
          <tr>
            <th>Comando</th>
            <th>Función</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>copy origen destino</code></td>
            <td>Copiar archivos. Ej: <code>copy archivo.txt D:\Backup\</code></td>
          </tr>
          <tr>
            <td><code>xcopy origen destino /s /e</code></td>
            <td>Copiar directorios con subcarpetas</td>
          </tr>
          <tr>
            <td><code>move origen destino</code></td>
            <td>Mover archivos o cambiar nombre</td>
          </tr>
          <tr>
            <td><code>del archivo</code></td>
            <td>Borrar un archivo</td>
          </tr>
          <tr>
            <td><code>ren archivo nuevo_nombre</code></td>
            <td>Cambiar nombre de un archivo</td>
          </tr>
        </tbody>
      </table>
      <Titulo title="h3" id="gestión-de-carpetas">Gestión de carpetas</Titulo>
      <table>
        <thead>
          <tr>
            <th>Comando</th>
            <th>Función</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>mkdir nombre_carpeta</code> o
              <code>md nombre_carpeta</code>
            </td>
            <td>Crear carpeta</td>
          </tr>
          <tr>
            <td><code>rmdir nombre_carpeta</code> o
              <code>rd nombre_carpeta</code>
            </td>
            <td>Eliminar carpeta vacía</td>
          </tr>
          <tr>
            <td><code>rmdir /s nombre_carpeta</code></td>
            <td>Eliminar carpeta con todo su contenido</td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Titulo title="h2" id="powershell-cmdlets">2. PowerShell (cmdlets)</Titulo>
      <Texto>PowerShell tiene cmdlets más potentes y consistentes. Se escriben en
        formato <strong>Verbo-Sustantivo</strong>.</Texto>
      <Titulo title="h3" id="navegación-por-directorios-cmdlets">Navegación por directorios
        (cmdlets)</Titulo>
      <table>
        <thead>
          <tr>
            <th>Cmdlet</th>
            <th>Función</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>Set-Location</code> o <code>cd</code></td>
            <td>Cambiar de directorio. Ej:
              <code>Set-Location C:\Usuarios\Francisco</code>
            </td>
          </tr>
          <tr>
            <td><code>Get-Location</code> o <code>pwd</code></td>
            <td>Mostrar la ruta actual</td>
          </tr>
          <tr>
            <td><code>Get-ChildItem</code> o <code>ls</code></td>
            <td>Listar archivos y carpetas</td>
          </tr>
          <tr>
            <td><code>Push-Location</code> o <code>pushd</code></td>
            <td>Guardar directorio actual y moverse a otro</td>
          </tr>
          <tr>
            <td><code>Pop-Location</code> o <code>popd</code></td>
            <td>Volver al directorio guardado</td>
          </tr>
        </tbody>
      </table>
      <Titulo title="h3" id="gestión-de-archivos-cmdlets">Gestión de archivos (cmdlets)</Titulo>
      <table>
        <thead>
          <tr>
            <th>Cmdlet</th>
            <th>Función</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>Copy-Item</code></td>
            <td>Copiar archivos o carpetas. Ej:
              <code>Copy-Item archivo.txt D:\Backup\</code>
            </td>
          </tr>
          <tr>
            <td><code>Move-Item</code></td>
            <td>Mover archivos o cambiar nombre</td>
          </tr>
          <tr>
            <td><code>Remove-Item</code></td>
            <td>Eliminar archivos o carpetas (<code>-Recurse</code> para
              contenido)</td>
          </tr>
          <tr>
            <td><code>Rename-Item</code></td>
            <td>Cambiar nombre de archivo o carpeta</td>
          </tr>
        </tbody>
      </table>
      <Titulo title="h3" id="gestión-de-carpetas-cmdlets">Gestión de carpetas (cmdlets)</Titulo>
      <table>
        <thead>
          <tr>
            <th>Cmdlet</th>
            <th>Función</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>New-Item -ItemType Directory -Name "Nombre"</code></td>
            <td>Crear carpeta</td>
          </tr>
          <tr>
            <td><code>Remove-Item -Recurse "Nombre"</code></td>
            <td>Eliminar carpeta y contenido</td>
          </tr>
        </tbody>
      </table>
      <Texto><strong>Opciones útiles de <code>Get-ChildItem</code></strong></Texto>
      <Lista>
        <li><code>-Recurse</code> → listar recursivamente subdirectorios</li>
        <li><code>-File</code> → solo archivos</li>
        <li><code>-Directory</code> → solo carpetas</li>
        <li><code>-Filter "*.txt"</code> → filtrar por extensión</li>
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
