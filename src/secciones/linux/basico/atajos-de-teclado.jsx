import Enlace from "../../../componentes/atomos/enlace.jsx";
import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../../../componentes/organismos/estructura.jsx";
import Linea from "../../../componentes/atomos/linea.jsx";
import Lista from "../../../componentes/moleculas/lista.jsx";
import Titulo from "../../../componentes/moleculas/titulo.jsx";
import { Tabla, TablaCabezera, TablaFila, TablaUnica } from "../../../componentes/moleculas/tabla.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#atajos-generales-del-sistema">Atajos generales del
        sistema</Enlace ></li>
      <li><Enlace href="#atajos-en-la-terminal-bash-zsh-etc">Atajos en la terminal
        (Bash, Zsh, etc.)</Enlace ></li>
      <li><Enlace href="#atajos-de-administración-de-archivos-gnome--nautilus">Atajos de
        administración de archivos (GNOME / Nautilus)</Enlace ></li>
      <li><Enlace href="#ventanas-y-escritorios">Ventanas y escritorios</Enlace ></li>
      <li><Enlace href="#tips-adicionales">Tips adicionales</Enlace ></li>
    </Lista>
  );
}

function nameabcd({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" id="atajos-de-teclado-en-linux">Atajos de Teclado en linux</Titulo>

        <Linea />

        <TemarioCompleto temario={Temario} />

        <Titulo title="h2" id="atajos-generales-del-sistema">Atajos generales del sistema</Titulo>
        <Tabla>
  <TablaCabezera headers={["Atajo", "Acción"]} />

  <tbody>
    <TablaFila>
      <TablaUnica><strong>Ctrl + Alt + T</strong></TablaUnica>
      <TablaUnica>Abrir una nueva terminal.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>Ctrl + Alt + L</strong></TablaUnica>
      <TablaUnica>Bloquear la pantalla.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>Alt + Tab</strong></TablaUnica>
      <TablaUnica>Cambiar entre ventanas abiertas.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>Alt + F4</strong></TablaUnica>
      <TablaUnica>Cerrar la ventana actual.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>Super (tecla Windows)</strong></TablaUnica>
      <TablaUnica>Abrir el menú principal o buscador.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>Alt + F2</strong></TablaUnica>
      <TablaUnica>Abrir el lanzador de comandos.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>PrtSc (Impr Pant)</strong></TablaUnica>
      <TablaUnica>Captura de pantalla completa.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>Shift + PrtSc</strong></TablaUnica>
      <TablaUnica>Capturar una selección de pantalla.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>Alt + PrtSc</strong></TablaUnica>
      <TablaUnica>Capturar solo la ventana activa.</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
        <Linea />
        <Titulo title="h2" id="atajos-en-la-terminal-bash-zsh-etc.">Atajos en la terminal
          (Bash, Zsh, etc.)</Titulo>
        <Tabla>
  <TablaCabezera headers={["Atajo", "Acción"]} />

  <tbody>
    <TablaFila>
      <TablaUnica><strong>Ctrl + C</strong></TablaUnica>
      <TablaUnica>Detener un proceso en ejecución.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>Ctrl + Z</strong></TablaUnica>
      <TablaUnica>Pausar un proceso (puedes reanudarlo con fg).</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>Ctrl + D</strong></TablaUnica>
      <TablaUnica>Cerrar sesión o salir del shell.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>Ctrl + L</strong></TablaUnica>
      <TablaUnica>Limpiar la pantalla (igual que clear).</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>Ctrl + A</strong></TablaUnica>
      <TablaUnica>Ir al inicio de la línea.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>Ctrl + E</strong></TablaUnica>
      <TablaUnica>Ir al final de la línea.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>Ctrl + U</strong></TablaUnica>
      <TablaUnica>Borrar desde el cursor hasta el inicio.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>Ctrl + K</strong></TablaUnica>
      <TablaUnica>Borrar desde el cursor hasta el final.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>Ctrl + W</strong></TablaUnica>
      <TablaUnica>Borrar la palabra anterior.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>Ctrl + Y</strong></TablaUnica>
      <TablaUnica>Pegar lo último borrado con los atajos anteriores.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>Ctrl + R</strong></TablaUnica>
      <TablaUnica>Buscar en el historial de comandos.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>↑ / ↓ (Flechas)</strong></TablaUnica>
      <TablaUnica>Navegar por el historial de comandos.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>Tab</strong></TablaUnica>
      <TablaUnica>Autocompletar archivos o comandos.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>!!</strong></TablaUnica>
      <TablaUnica>Repetir el último comando.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>!n</strong></TablaUnica>
      <TablaUnica>Ejecutar el comando número <em>n</em> del historial
                (history).</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>Ctrl + Shift + T</strong></TablaUnica>
      <TablaUnica>Nueva pestaña (en terminales como GNOME Terminal).</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>Ctrl + Shift + W</strong></TablaUnica>
      <TablaUnica>Cerrar pestaña.</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
        <Linea />
        <Titulo title="h2" id="atajos-de-administración-de-archivos-gnome-nautilus">Atajos de
          administración de archivos (GNOME / Nautilus)</Titulo>
        <Tabla>
  <TablaCabezera headers={["Atajo", "Acción"]} />

  <tbody>
    <TablaFila>
      <TablaUnica><strong>Ctrl + N</strong></TablaUnica>
      <TablaUnica>Nueva ventana.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>Ctrl + Shift + N</strong></TablaUnica>
      <TablaUnica>Nueva carpeta.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>Ctrl + H</strong></TablaUnica>
      <TablaUnica>Mostrar / ocultar archivos ocultos.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>Ctrl + C / X / V</strong></TablaUnica>
      <TablaUnica>Copiar / cortar / pegar.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>Alt + ↑ / ↓ / ← / →</strong></TablaUnica>
      <TablaUnica>Navegar entre carpetas.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>Ctrl + F</strong></TablaUnica>
      <TablaUnica>Buscar archivos.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>Supr (Delete)</strong></TablaUnica>
      <TablaUnica>Enviar a la papelera.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>Shift + Supr</strong></TablaUnica>
      <TablaUnica>Eliminar permanentemente.</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
        <Linea />
        <Titulo title="h2" id="ventanas-y-escritorios">Ventanas y escritorios</Titulo>
        <Tabla>
  <TablaCabezera headers={["Atajo", "Acción"]} />

  <tbody>
    <TablaFila>
      <TablaUnica><strong>Super + Flechas</strong></TablaUnica>
      <TablaUnica>Ajustar ventanas a los lados o maximizar/minimizar.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>Ctrl + Alt + Flechas</strong></TablaUnica>
      <TablaUnica>Cambiar entre escritorios virtuales.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>Super + Tab</strong></TablaUnica>
      <TablaUnica>Vista general de ventanas.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>Super + D</strong></TablaUnica>
      <TablaUnica>Mostrar el escritorio.</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
        <Linea />
        <Titulo title="h2" id="tips-adicionales">Tips adicionales</Titulo>
        <Lista>
          <li>Puedes <strong>personalizar atajos</strong> en <em>Configuración
            → Teclado → Atajos</em>.</li>    <li>Algunos terminales como <strong>Tilix</strong> o
            <strong>Terminator</strong> permiten dividir la terminal con:
          </li>
          <Lista>
            <li>
              Ctrl + Shift + O (dividir horizontalmente)</li>        <li>Ctrl + Shift + E (dividir verticalmente)</li></Lista>

        </Lista >
      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}

export default nameabcd;
