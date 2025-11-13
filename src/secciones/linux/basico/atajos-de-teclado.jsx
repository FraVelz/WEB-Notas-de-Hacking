import Estructura from "../../../componentes/organismos/estructura.jsx";
import { Tabla, TablaCabezera, TablaFila, TablaUnica } from "../../../componentes/moleculas/tabla.jsx";

import Linea from "../../../componentes/atomos/linea.jsx";
import Titulo from "../../../componentes/moleculas/titulo.jsx";

function nameabcd({ }) {
  return (
    <Estructura>
        <Titulo title="h1" id="atajos-de-teclado-en-linux">Atajos de Teclado en linux</Titulo>

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
      </Estructura>
  );
}

export default nameabcd;
