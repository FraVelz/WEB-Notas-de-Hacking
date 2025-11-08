import Titulo from "../../componentes/titulo";
import Lista from "../../componentes/lista";
import Linea from "../../componentes/linea";
import Texto from "../../componentes/texto";
import Estructura from "../../componentes/estructura";

function nameabcd({ }) {
  return (
    <Estructura>
      <Titulo title="h1" id="atajos-de-teclado-en-linux">Atajos de Teclado en linux</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><a href="#atajos-de-teclado-en-linux">Atajos de Teclado en linux</a>
          <Lista>
            <li><a href="#temario">Temario</a></li>
            <li><a href="#atajos-generales-del-sistema">Atajos generales del
              sistema</a></li>
            <li><a href="#atajos-en-la-terminal-bash-zsh-etc">Atajos en la terminal
              (Bash, Zsh, etc.)</a></li>
            <li><a href="#atajos-de-administración-de-archivos-gnome--nautilus">Atajos de
              administración de archivos (GNOME / Nautilus)</a></li>
            <li><a href="#ventanas-y-escritorios">Ventanas y escritorios</a></li>
            <li><a href="#tips-adicionales">Tips adicionales</a></li>
          </Lista>
        </li>
      </Lista>
      <Texto><a href="./../readme.md#2-linux-y-bash-script">Regresar a la guía
        principal</a></Texto>
      <Linea />
      <Titulo title="h2" id="atajos-generales-del-sistema">Atajos generales del sistema</Titulo>
      <table>
        <thead>
          <tr>
            <th>Atajo</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Ctrl + Alt + T</strong></td>
            <td>Abrir una nueva terminal.</td>
          </tr>
          <tr>
            <td><strong>Ctrl + Alt + L</strong></td>
            <td>Bloquear la pantalla.</td>
          </tr>
          <tr>
            <td><strong>Alt + Tab</strong></td>
            <td>Cambiar entre ventanas abiertas.</td>
          </tr>
          <tr>
            <td><strong>Alt + F4</strong></td>
            <td>Cerrar la ventana actual.</td>
          </tr>
          <tr>
            <td><strong>Super (tecla Windows)</strong></td>
            <td>Abrir el menú principal o buscador.</td>
          </tr>
          <tr>
            <td><strong>Alt + F2</strong></td>
            <td>Abrir el lanzador de comandos.</td>
          </tr>
          <tr>
            <td><strong>PrtSc (Impr Pant)</strong></td>
            <td>Captura de pantalla completa.</td>
          </tr>
          <tr>
            <td><strong>Shift + PrtSc</strong></td>
            <td>Capturar una selección de pantalla.</td>
          </tr>
          <tr>
            <td><strong>Alt + PrtSc</strong></td>
            <td>Capturar solo la ventana activa.</td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Titulo title="h2" id="atajos-en-la-terminal-bash-zsh-etc.">Atajos en la terminal
        (Bash, Zsh, etc.)</Titulo>
      <table>
        <thead>
          <tr>
            <th>Atajo</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Ctrl + C</strong></td>
            <td>Detener un proceso en ejecución.</td>
          </tr>
          <tr>
            <td><strong>Ctrl + Z</strong></td>
            <td>Pausar un proceso (puedes reanudarlo con <code>fg</code>).</td>
          </tr>
          <tr>
            <td><strong>Ctrl + D</strong></td>
            <td>Cerrar sesión o salir del shell.</td>
          </tr>
          <tr>
            <td><strong>Ctrl + L</strong></td>
            <td>Limpiar la pantalla (igual que <code>clear</code>).</td>
          </tr>
          <tr>
            <td><strong>Ctrl + A</strong></td>
            <td>Ir al inicio de la línea.</td>
          </tr>
          <tr>
            <td><strong>Ctrl + E</strong></td>
            <td>Ir al final de la línea.</td>
          </tr>
          <tr>
            <td><strong>Ctrl + U</strong></td>
            <td>Borrar desde el cursor hasta el inicio.</td>
          </tr>
          <tr>
            <td><strong>Ctrl + K</strong></td>
            <td>Borrar desde el cursor hasta el final.</td>
          </tr>
          <tr>
            <td><strong>Ctrl + W</strong></td>
            <td>Borrar la palabra anterior.</td>
          </tr>
          <tr>
            <td><strong>Ctrl + Y</strong></td>
            <td>Pegar lo último borrado con los atajos anteriores.</td>
          </tr>
          <tr>
            <td><strong>Ctrl + R</strong></td>
            <td>Buscar en el historial de comandos.</td>
          </tr>
          <tr>
            <td><strong>↑ / ↓ (Flechas)</strong></td>
            <td>Navegar por el historial de comandos.</td>
          </tr>
          <tr>
            <td><strong>Tab</strong></td>
            <td>Autocompletar archivos o comandos.</td>
          </tr>
          <tr>
            <td><strong>!!</strong></td>
            <td>Repetir el último comando.</td>
          </tr>
          <tr>
            <td><strong>!n</strong></td>
            <td>Ejecutar el comando número <em>n</em> del historial
              (<code>history</code>).</td>
          </tr>
          <tr>
            <td><strong>Ctrl + Shift + T</strong></td>
            <td>Nueva pestaña (en terminales como GNOME Terminal).</td>
          </tr>
          <tr>
            <td><strong>Ctrl + Shift + W</strong></td>
            <td>Cerrar pestaña.</td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Titulo title="h2" id="atajos-de-administración-de-archivos-gnome-nautilus">Atajos de
        administración de archivos (GNOME / Nautilus)</Titulo>
      <table>
        <thead>
          <tr>
            <th>Atajo</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Ctrl + N</strong></td>
            <td>Nueva ventana.</td>
          </tr>
          <tr>
            <td><strong>Ctrl + Shift + N</strong></td>
            <td>Nueva carpeta.</td>
          </tr>
          <tr>
            <td><strong>Ctrl + H</strong></td>
            <td>Mostrar / ocultar archivos ocultos.</td>
          </tr>
          <tr>
            <td><strong>Ctrl + C / X / V</strong></td>
            <td>Copiar / cortar / pegar.</td>
          </tr>
          <tr>
            <td><strong>Alt + ↑ / ↓ / ← / →</strong></td>
            <td>Navegar entre carpetas.</td>
          </tr>
          <tr>
            <td><strong>Ctrl + F</strong></td>
            <td>Buscar archivos.</td>
          </tr>
          <tr>
            <td><strong>Supr (Delete)</strong></td>
            <td>Enviar a la papelera.</td>
          </tr>
          <tr>
            <td><strong>Shift + Supr</strong></td>
            <td>Eliminar permanentemente.</td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Titulo title="h2" id="ventanas-y-escritorios">Ventanas y escritorios</Titulo>
      <table>
        <thead>
          <tr>
            <th>Atajo</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Super + Flechas</strong></td>
            <td>Ajustar ventanas a los lados o maximizar/minimizar.</td>
          </tr>
          <tr>
            <td><strong>Ctrl + Alt + Flechas</strong></td>
            <td>Cambiar entre escritorios virtuales.</td>
          </tr>
          <tr>
            <td><strong>Super + Tab</strong></td>
            <td>Vista general de ventanas.</td>
          </tr>
          <tr>
            <td><strong>Super + D</strong></td>
            <td>Mostrar el escritorio.</td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Titulo title="h2" id="tips-adicionales">Tips adicionales</Titulo>
      <Lista>
        <li>Puedes <strong>personalizar atajos</strong> en <em>Configuración
          → Teclado → Atajos</em>.</li>    <li>Algunos terminales como <strong>Tilix</strong> o
          <strong>Terminator</strong> permiten dividir la terminal con:
        </li>
        <Lista>
          <li>
            <code>Ctrl + Shift + O</code> (dividir horizontalmente)</li>        <li><code>Ctrl + Shift + E</code> (dividir verticalmente)</li></Lista>

      </Lista >
      <Linea />
      <Texto><a href="./../readme.md#2-linux-y-bash-script">Regresar a la guía
        principal</a></Texto>
      <blockquote>
        <Texto><strong>Autor</strong>: Fravelz</Texto>
      </blockquote>
    </Estructura>
  );
}

export default nameabcd;
