import Titulo from "./../../componentes/titulo.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Linea from "./../../componentes/linea.jsx";
import Enlace from "../../componentes/enlace.jsx";

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="directorios-importantes-de-windows">Directorios Importantes de
        Windows</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><Enlace href="#directorios-importantes-de-windows">Directorios
          Importantes de Windows</Enlace >
          <Lista>
            <li><Enlace href="#temario">Temario</Enlace ></li>
            <li><Enlace href="#directorios-del-sistema">Directorios del sistema</Enlace ></li>
            <li><Enlace href="#directorios-de-usuario">Directorios de usuario</Enlace ></li>
            <li><Enlace href="#directorios-de-programas">Directorios de
              programas</Enlace ></li>
            <li><Enlace href="#directorios-temporales-y-de-sistema-adicional">Directorios
              temporales y de sistema adicional</Enlace ></li>
          </Lista>
        </li>
      </Lista>
      <Texto><Enlace href="./../readme.md#3-windows">Regresar a la guía
        principal</Enlace ></Texto>
      <Linea />
      <Titulo title="h2" id="directorios-del-sistema">Directorios del sistema</Titulo>
      <Texto>Estos contienen archivos de Windows y componentes esenciales del
        sistema operativo:</Texto>
      <table>
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
      <Linea />
      <Titulo title="h2" id="directorios-de-usuario">Directorios de usuario</Titulo>
      <Texto>Contienen los datos de cada usuario y configuraciones personales:</Texto>
      <table>
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
      <Linea />
      <Titulo title="h2" id="directorios-de-programas">Directorios de programas</Titulo>
      <Texto>Donde se instalan las aplicaciones:</Texto>
      <table>
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
      <Linea />
      <Titulo title="h2" id="directorios-temporales-y-de-sistema-adicional">Directorios
        temporales y de sistema adicional</Titulo>
      <Lista>
        <li><strong>Temp del usuario</strong>:
          <code>C:\Users\&lt;Usuario&gt;\AppData\Local\Temp</code> → Archivos
          temporales de programas.
        </li>    <li><strong>Prefetch</strong>: <code>C:\Windows\Prefetch</code> →
          Optimización de arranque y ejecución de programas.</li>    <li><strong>Recycle Bin</strong>: <code>C:\$Recycle.Bin</code> →
            Papelera de reciclaje.</li>  </Lista>
      <Linea />
      <Titulo title="h2" id="tips">Tips</Titulo>
      <Lista>
        <li>Nunca elimines carpetas como <code>System32</code> o
          <code>WinSxS</code>.
        </li>    <li><code>AppData</code> y <code>Temp</code> se pueden limpiar con
          cuidado para liberar espacio.</li>  </Lista>
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
