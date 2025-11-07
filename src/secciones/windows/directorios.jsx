<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">

<head>
  <meta charset="utf-8" />
  <meta name="generator" content="pandoc" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <title>directorios</title>

</head>

<body>
  <h1 id="directorios-importantes-de-windows">Directorios Importantes de
    Windows</h1>
  <hr />
  <h2 id="temario">Temario</h2>
  <ul>
    <li><a href="#directorios-importantes-de-windows">Directorios
        Importantes de Windows</a>
      <ul>
        <li><a href="#temario">Temario</a></li>
        <li><a href="#directorios-del-sistema">Directorios del sistema</a></li>
        <li><a href="#directorios-de-usuario">Directorios de usuario</a></li>
        <li><a href="#directorios-de-programas">Directorios de
            programas</a></li>
        <li><a href="#directorios-temporales-y-de-sistema-adicional">Directorios
            temporales y de sistema adicional</a></li>
      </ul>
    </li>
  </ul>
  <p><a href="./../readme.md#3-windows">Regresar a la guía
      principal</a></p>
  <hr />
  <h2 id="directorios-del-sistema">Directorios del sistema</h2>
  <p>Estos contienen archivos de Windows y componentes esenciales del
    sistema operativo:</p>
  <table>
    <colgroup>
      <col style="width: 14%" />
      <col style="width: 15%" />
      <col style="width: 70%" />
    </colgroup>
    <thead>
      <tr>
        <th>Directorio</th>
        <th>Ruta típica</th>
        <th>Función</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Windows</strong></td>
        <td><code>C:\Windows</code></td>
        <td>Carpeta principal del sistema operativo. Contiene casi todo lo que
          Windows necesita para funcionar.</td>
      </tr>
      <tr>
        <td><strong>System32</strong></td>
        <td><code>C:\Windows\System32</code></td>
        <td>Archivos críticos del sistema, DLLs, ejecutables y utilidades de
          Windows.</td>
      </tr>
      <tr>
        <td><strong>SysWOW64</strong></td>
        <td><code>C:\Windows\SysWOW64</code></td>
        <td>Versiones de 32 bits de las librerías del sistema en sistemas
          Windows de 64 bits.</td>
      </tr>
      <tr>
        <td><strong>WinSxS</strong></td>
        <td><code>C:\Windows\WinSxS</code></td>
        <td>Componentes del sistema y librerías para compatibilidad.</td>
      </tr>
      <tr>
        <td><strong>Temp del sistema</strong></td>
        <td><code>C:\Windows\Temp</code></td>
        <td>Archivos temporales del sistema. Puede limpiarse para liberar
          espacio.</td>
      </tr>
    </tbody>
  </table>
  <hr />
  <h2 id="directorios-de-usuario">Directorios de usuario</h2>
  <p>Contienen los datos de cada usuario y configuraciones personales:</p>
  <table>
    <colgroup>
      <col style="width: 14%" />
      <col style="width: 20%" />
      <col style="width: 64%" />
    </colgroup>
    <thead>
      <tr>
        <th>Directorio</th>
        <th>Ruta típica</th>
        <th>Función</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Users</strong></td>
        <td><code>C:\Users</code></td>
        <td>Carpeta raíz de los perfiles de usuario.</td>
      </tr>
      <tr>
        <td><strong>Perfil del usuario</strong></td>
        <td><code>C:\Users\&lt;Usuario&gt;</code></td>
        <td>Carpeta personal de cada usuario con documentos, descargas y
          configuraciones.</td>
      </tr>
      <tr>
        <td><strong>Documentos</strong></td>
        <td><code>C:\Users\&lt;Usuario&gt;\Documents</code></td>
        <td>Documentos y archivos del usuario.</td>
      </tr>
      <tr>
        <td><strong>Descargas</strong></td>
        <td><code>C:\Users\&lt;Usuario&gt;\Downloads</code></td>
        <td>Archivos descargados de Internet.</td>
      </tr>
      <tr>
        <td><strong>Escritorio</strong></td>
        <td><code>C:\Users\&lt;Usuario&gt;\Desktop</code></td>
        <td>Archivos y accesos directos visibles en el escritorio.</td>
      </tr>
      <tr>
        <td><strong>AppData</strong></td>
        <td><code>C:\Users\&lt;Usuario&gt;\AppData</code></td>
        <td>Archivos de configuración y datos de aplicaciones. Subcarpetas:
          <code>Local</code>, <code>LocalLow</code>, <code>Roaming</code>.
        </td>
      </tr>
    </tbody>
  </table>
  <hr />
  <h2 id="directorios-de-programas">Directorios de programas</h2>
  <p>Donde se instalan las aplicaciones:</p>
  <table>
    <colgroup>
      <col style="width: 27%" />
      <col style="width: 19%" />
      <col style="width: 52%" />
    </colgroup>
    <thead>
      <tr>
        <th>Directorio</th>
        <th>Ruta típica</th>
        <th>Función</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Archivos de programa (64 bits)</strong></td>
        <td><code>C:\Program Files</code></td>
        <td>Instalaciones de aplicaciones de 64 bits.</td>
      </tr>
      <tr>
        <td><strong>Archivos de programa (32 bits)</strong></td>
        <td><code>C:\Program Files (x86)</code></td>
        <td>Instalaciones de aplicaciones de 32 bits en sistemas de 64
          bits.</td>
      </tr>
    </tbody>
  </table>
  <hr />
  <h2 id="directorios-temporales-y-de-sistema-adicional">Directorios
    temporales y de sistema adicional</h2>
  <ul>
    <li>
      <p><strong>Temp del usuario</strong>:
        <code>C:\Users\&lt;Usuario&gt;\AppData\Local\Temp</code> → Archivos
        temporales de programas.
      </p>
    </li>
    <li>
      <p><strong>Prefetch</strong>: <code>C:\Windows\Prefetch</code> →
        Optimización de arranque y ejecución de programas.</p>
    </li>
    <li>
      <p><strong>Recycle Bin</strong>: <code>C:\$Recycle.Bin</code> →
        Papelera de reciclaje.</p>
    </li>
  </ul>
  <hr />
  <h2 id="tips">Tips</h2>
  <ul>
    <li>
      <p>Nunca elimines carpetas como <code>System32</code> o
        <code>WinSxS</code>.
      </p>
    </li>
    <li>
      <p><code>AppData</code> y <code>Temp</code> se pueden limpiar con
        cuidado para liberar espacio.</p>
    </li>
  </ul>
  <hr />
  <p><a href="./../readme.md#3-windows">Regresar a la guía
      principal</a></p>
  <blockquote>
    <p><strong>Autor:</strong> Fravelz</p>
  </blockquote>
</body>

</html>