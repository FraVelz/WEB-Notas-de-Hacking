import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../../../componentes/organismos/estructura.jsx";
import { Tabla, TablaCabezera, TablaFila, TablaUnica } from "../../../componentes/moleculas/tabla.jsx";

import Codigo from "../../../componentes/moleculas/codigo.jsx";
import Enlace from "../../../componentes/atomos/enlace.jsx";
import Linea from "../../../componentes/atomos/linea.jsx";
import Lista from "../../../componentes/moleculas/lista.jsx";
import Texto from "../../../componentes/atomos/texto.jsx";
import Titulo from "../../../componentes/moleculas/titulo.jsx";
import Imagen from "../../../componentes/atomos/imagen.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#terminologías">Terminologías</Enlace ></li>
      <li><Enlace href="#comandos-para-ver-procesos">Comandos para ver procesos</Enlace ></li>
      <li><Enlace href="#ejecución-de-procesos">Ejecución de procesos</Enlace ></li>
      <li><Enlace href="#control-de-trabajos">Control de trabajos</Enlace ></li>
      <li><Enlace href="#señales-a-procesos">Señales a procesos</Enlace ></li>
      <li><Enlace href="#prioridades-de-procesos">Prioridades de procesos</Enlace ></li>
      <li><Enlace href="#espera-y-sincronización">Espera y sincronización</Enlace ></li>
      <li><Enlace href="#redirección-y-procesos">Redirección y procesos</Enlace ></li>
      <li><Enlace href="#información-de-procesos">Información de procesos</Enlace ></li>
      <li><Enlace href="#procesos-huérfanos-y-zombis">Procesos huérfanos y zombis</Enlace ></li>
      <li><Enlace href="#resumen-visual">Resumen visual</Enlace ></li>
    </Lista>
  );
}

function Gestion_Procesos() {
  return (
    <>
      <Estructura>
        <Titulo title="h1" id="gestión-de-procesos">Gestión de procesos</Titulo>
        <Linea />

        <TemarioCompleto temario={Temario} />

        <Titulo title="h2" id="terminologías">Terminologías</Titulo>
        <Lista>
          <li><strong>Proceso</strong>: Programa en ejecución administrado por el kernel.</li>
          <li><strong>PID (Process ID)</strong>: Identificador único asignado por el sistema a cada proceso.</li>
          <li><strong>PPID (Parent PID)</strong>: Identificador del proceso padre (quien lo creó).</li>
          <li>
            <strong>Estado</strong>: Indica el estado actual del proceso:
            <Lista>
              <li>R → ejecutándose (Running)</li>
              <li>S → durmiendo (Sleeping)</li>
              <li>T → detenido (Stopped)</li>
              <li>Z → zombi (Zombie)</li>
            </Lista>
          </li>
          <li>
            <strong>Señales</strong>: Mensajes que el kernel o el usuario pueden enviar a un proceso
            (ej: SIGKILL, SIGSTOP, SIGINT).
          </li>
        </Lista>

        <Linea />

        <Titulo title="h2" id="comandos-para-ver-procesos">Comandos para ver procesos</Titulo>

        <Lista>
          <li>
            <strong>ps</strong>: Lista los procesos activos.
            <Codigo code={`ps aux                # Para monitorear recursos
ps -ef                # Para ver jerarquía y relaciones entre los procesos`} language="bash" />
          </li>
          <li>
            <strong>top / htop</strong>: Monitor interactivo de procesos.
            htop es más visual, permite matar o renicear procesos fácilmente.
          </li>
          <li>
            <strong>pgrep</strong>: Busca procesos por nombre.
            <Codigo code={`pgrep firefox`} language="bash" />
          </li>
          <li>
            <strong>pstree</strong>: Muestra los procesos en forma jerárquica (padre-hijo).
            <Codigo code={`pstree -p   # incluye los PIDs`} language="bash" />
          </li>
          <li>
            <strong>pidof</strong>: Muestra el PID de un programa activo.
            <Codigo code={`pidof bash`} language="bash" />
          </li>
        </Lista>

        <Linea />

        <Titulo title="h2" id="ejecución-de-procesos">Ejecución de procesos</Titulo>

        <Lista>
          <li>
            <strong>Primer plano (foreground)</strong>:
            <Codigo code={`./programa`} language="bash" />
            <Texto>El terminal queda ocupado hasta que el proceso termine.</Texto>
          </li>
          <li>
            <strong>Segundo plano (background)</strong>:
            <Codigo code={`./programa &`} language="bash" />
            <Texto>
              El shell sigue disponible mientras el proceso corre. Tener en cuenta que normalmente
              al cerrar la shell el proceso se termina, pero se puede utilizar el comando disown
              en la shell para que el proceso no dependa de la shell.
            </Texto>
          </li>
          <li>
            <strong>Ejemplo práctico:</strong>
            <Codigo code={`long_task.sh &
echo "Sigo usando la terminal"`} language="bash" />
          </li>
        </Lista>

        <Linea />

        <Titulo title="h2" id="control-de-trabajos">Control de trabajos</Titulo>

        <Texto>
          Bash permite gestionar procesos iniciados desde la misma sesión
          (misma terminal en el que se ejecutó el proceso).
        </Texto>

        <Codigo code={`jobs          # lista los procesos de fondo en la sesión actual
fg %1         # lleva el job 1 al primer plano
bg %2         # reanuda el job 2 en segundo plano
Ctrl + Z      # pausa el proceso actual`} language="bash" />

        <Texto><strong>Ejemplo:</strong> Creamos un proceso en la terminal:</Texto>
        <Codigo code={`sleep 1d && echo "Ya paso 1 dia"`} language="bash" />

        <Texto>
          Luego das Ctrl+Z se pausa el proceso (importante no equivocarse con
          Ctrl+C porque este terminaría el proceso en vez de pausarlo), cuando escribas:
        </Texto>

        <Codigo code={`jobs`} language="bash" />

        <Texto>Podrás visualizar el proceso, todo se vería algo así:</Texto>
        <Imagen width={500} src="./procesos.png" alt="Ir a Procesos" />

        <Texto>
          Con el comando fg %1 o bg %1 puedes des pausar el proceso,
          con las implicaciones que se dieron arriba.
        </Texto>

        <Linea />

        <Titulo title="h2" id="señales-a-procesos">Señales a procesos</Titulo>

        <Lista>
          <li>
            <strong>Enviar señales manualmente:</strong>
            <Codigo code={`kill -9 1234    # SIGKILL (fuerza el cierre)
kill -15 1234   # SIGTERM (solicita terminación limpia)
kill -STOP 1234 # pausa proceso
kill -CONT 1234 # reanuda proceso detenido`} language="bash" />
          </li>
          <li>
            <strong>Por nombre:</strong>
            <Codigo code={`pkill firefox
killall nano`} language="bash" />
          </li>
        </Lista>

        <Texto>Algunos nombres comunes:</Texto>
        <Tabla>
          <TablaCabezera headers={["Señal", "Código", "Descripción"]} />

          <tbody>
            <TablaFila>
              <TablaUnica>SIGTERM</TablaUnica>
              <TablaUnica>15</TablaUnica>
              <TablaUnica>Terminación elegante</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>SIGKILL</TablaUnica>
              <TablaUnica>9</TablaUnica>
              <TablaUnica>Termina sin limpiar recursos</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>SIGSTOP</TablaUnica>
              <TablaUnica>19</TablaUnica>
              <TablaUnica>Detiene temporalmente</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>SIGCONT</TablaUnica>
              <TablaUnica>18</TablaUnica>
              <TablaUnica>Reanuda ejecución</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>SIGINT</TablaUnica>
              <TablaUnica>2</TablaUnica>
              <TablaUnica>Interrupción (Ctrl + C)</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>SIGHUP</TablaUnica>
              <TablaUnica>1</TablaUnica>
              <TablaUnica>Cierre de terminal o reinicio de servicio</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>

        <Linea />
        <Titulo title="h2" id="prioridades-de-procesos">Prioridades de procesos</Titulo>
        <Texto>
          Cada proceso tiene un <strong>"valor bueno"</strong>, que define su prioridad de CPU.
        </Texto>
        <Lista>
          <li>Rango: <strong>-20 (mayor prioridad)</strong> a <strong>19 (menor prioridad)</strong>.</li>
          <li>Valor por defecto: <strong>0</strong>.</li>
          <li>Solo root puede asignar valores negativos.</li>
        </Lista>

        <Texto><strong>Cambiar prioridad al iniciar:</strong></Texto>
        <Codigo code={`nice -n 10 ./programa`} language="bash" />

        <Texto><strong>Modificar proceso existente:</strong></Texto>
        <Codigo code={`renice -n 5 -p 1234`} language="bash" />

        <Texto><strong>Ver prioridades actuales:</strong></Texto>
        <Codigo code={`ps -eo pid,ni,comm`} language="bash" />

        <Linea />
        <Titulo title="h2" id="procesos-huérfanos-y-zombis">Procesos huérfanos y zombis</Titulo>
        <Lista>
          <li>
              <strong>Huérfano</strong>: cuando el proceso padre termina antes que su hijo.
              El proceso hijo pasa a ser adoptado por el <strong>init</strong> o <strong>systemd</strong>.
              No es dañino, pero indica una gestión no controlada de procesos.
          </li>
          <li>
              <strong>Zombi</strong>: proceso que terminó, pero su entrada en la tabla de procesos
              aún existe porque su padre no leyó su estado de salida (wait() no fue llamado).
              Se muestran con estado Z.
            <Codigo code={`ps aux | grep 'Z'`} language="bash" />
            <Texto>Para eliminarlos, normalmente basta con terminar el proceso padre.</Texto>
          </li>
        </Lista>

        <Linea />
        <Titulo title="h2" id="resumen-visual">Resumen visual</Titulo>
        <Tabla>
          <TablaCabezera headers={["Acción", "Comando / Descripción"]} />

          <tbody>
            <TablaFila>
              <TablaUnica>Listar procesos</TablaUnica>
              <TablaUnica>ps aux, top, htop</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Buscar por nombre</TablaUnica>
              <TablaUnica>pgrep nombre, pidof nombre</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Árbol de procesos</TablaUnica>
              <TablaUnica>pstree -p</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Ejecutar en background</TablaUnica>
              <TablaUnica>comando &</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Ver jobs</TablaUnica>
              <TablaUnica>jobs</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Pausar proceso</TablaUnica>
              <TablaUnica>Ctrl + Z, kill -STOP PID</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Reanudar proceso</TablaUnica>
              <TablaUnica>bg %n, kill -CONT PID</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Traer a foreground</TablaUnica>
              <TablaUnica>fg %n</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Terminar proceso</TablaUnica>
              <TablaUnica>kill -9 PID, pkill nombre</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>
      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}

export default Gestion_Procesos;