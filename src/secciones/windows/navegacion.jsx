<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">

<head>
  <meta charset="utf-8" />
  <meta name="generator" content="pandoc" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <title>navegacion</title>

</head>

<body>
  <h1 id="comandos-de-navegación">Comandos de Navegación</h1>
  <hr />
  <h2 id="temario">Temario</h2>
  <ul>
    <li><a href="#comandos-de-navegación">Comandos de Navegación</a>
      <ul>
        <li><a href="#temario">Temario</a></li>
        <li><a href="#1-windows-cmd-command-prompt">1. Windows CMD (Command
            Prompt)</a>
          <ul>
            <li><a href="#navegación-por-directorios">Navegación por
                directorios</a></li>
            <li><a href="#gestión-de-archivos">Gestión de archivos</a></li>
            <li><a href="#gestión-de-carpetas">Gestión de carpetas</a></li>
          </ul>
        </li>
        <li><a href="#2-powershell-cmdlets">2. PowerShell (cmdlets)</a>
          <ul>
            <li><a href="#navegación-por-directorios-cmdlets">Navegación por
                directorios (cmdlets)</a></li>
            <li><a href="#gestión-de-archivos-cmdlets">Gestión de archivos
                (cmdlets)</a></li>
            <li><a href="#gestión-de-carpetas-cmdlets">Gestión de carpetas
                (cmdlets)</a></li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
  <p><a href="./../readme.md#3-windows">Regresar a la guía
      principal</a></p>
  <hr />
  <h2 id="windows-cmd-command-prompt">1. Windows CMD (Command Prompt)</h2>
  <h3 id="navegación-por-directorios">Navegación por directorios</h3>
  <table>
    <colgroup>
      <col style="width: 20%" />
      <col style="width: 79%" />
    </colgroup>
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
  <h3 id="gestión-de-archivos">Gestión de archivos</h3>
  <table>
    <colgroup>
      <col style="width: 35%" />
      <col style="width: 64%" />
    </colgroup>
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
  <h3 id="gestión-de-carpetas">Gestión de carpetas</h3>
  <table>
    <colgroup>
      <col style="width: 53%" />
      <col style="width: 46%" />
    </colgroup>
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
  <hr />
  <h2 id="powershell-cmdlets">2. PowerShell (cmdlets)</h2>
  <p>PowerShell tiene cmdlets más potentes y consistentes. Se escriben en
    formato <strong>Verbo-Sustantivo</strong>.</p>
  <h3 id="navegación-por-directorios-cmdlets">Navegación por directorios
    (cmdlets)</h3>
  <table>
    <colgroup>
      <col style="width: 28%" />
      <col style="width: 71%" />
    </colgroup>
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
  <h3 id="gestión-de-archivos-cmdlets">Gestión de archivos (cmdlets)</h3>
  <table>
    <colgroup>
      <col style="width: 16%" />
      <col style="width: 83%" />
    </colgroup>
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
  <h3 id="gestión-de-carpetas-cmdlets">Gestión de carpetas (cmdlets)</h3>
  <table>
    <colgroup>
      <col style="width: 61%" />
      <col style="width: 38%" />
    </colgroup>
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
  <p><strong>Opciones útiles de <code>Get-ChildItem</code></strong></p>
  <ul>
    <li><code>-Recurse</code> → listar recursivamente subdirectorios</li>
    <li><code>-File</code> → solo archivos</li>
    <li><code>-Directory</code> → solo carpetas</li>
    <li><code>-Filter "*.txt"</code> → filtrar por extensión</li>
  </ul>
  <hr />
  <p><a href="./../readme.md#3-windows">Regresar a la guía
      principal</a></p>
  <blockquote>
    <p><strong>Autor:</strong> Fravelz</p>
  </blockquote>
</body>

</html>