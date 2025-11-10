import Titulo from "./../../../componentes/titulo.jsx";
import Lista from "./../../../componentes/lista.jsx";
import Texto from "./../../../componentes/texto.jsx";
import Linea from "./../../../componentes/linea.jsx";
import Estructura from "./../../../componentes/estructura.jsx";
import Enlace from "./../../../componentes/enlace.jsx";

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
    <Estructura>
      <Titulo title="h1" id="gestión-de-procesos">Gestión de procesos</Titulo>
      <Linea />


      <Texto>
        <Enlace href="./../readme.md#2-linux-y-bash-script">Regresar a la guía principal</Enlace >
      </Texto>

      <Linea />
      <Titulo title="h2" id="terminologías">Terminologías</Titulo>
      <Lista>
        <li><strong>Proceso</strong>: Programa en ejecución administrado por el kernel.</li>
        <li><strong>PID (Process ID)</strong>: Identificador único asignado por el sistema a cada proceso.</li>
        <li><strong>PPID (Parent PID)</strong>: Identificador del proceso padre (quien lo creó).</li>
        <li>
          <strong>Estado</strong>: Indica el estado actual del proceso:
          <Lista>
            <li><code>R</code> → ejecutándose (Running)</li>
            <li><code>S</code> → durmiendo (Sleeping)</li>
            <li><code>T</code> → detenido (Stopped)</li>
            <li><code>Z</code> → zombi (Zombie)</li>
          </Lista>
        </li>
        <li>
          <strong>Señales</strong>: Mensajes que el kernel o el usuario pueden enviar a un proceso
          (ej: <code>SIGKILL</code>, <code>SIGSTOP</code>, <code>SIGINT</code>).
        </li>
      </Lista>

      <Linea />
      <Titulo title="h2" id="comandos-para-ver-procesos">Comandos para ver procesos</Titulo>
      <Lista>
        <li>
          <Texto>
            <strong><code>ps</code></strong>: Lista los procesos activos.
          </Texto>
          <div className="sourceCode">
            <pre className="sourceCode bash">
              <code className="sourceCode bash">
                ps aux                # Para monitorear recursos
                ps -ef                # Para ver jerarquía y relaciones entre los procesos
              </code>
            </pre>
          </div>
        </li>
        <li>
          <Texto>
            <strong><code>top</code> / <code>htop</code></strong>: Monitor interactivo de procesos.
          </Texto>
          <Texto>
            <code>htop</code> es más visual, permite matar o renicear procesos fácilmente.
          </Texto>
        </li>
        <li>
          <Texto>
            <strong><code>pgrep</code></strong>: Busca procesos por nombre.
          </Texto>
          <div className="sourceCode">
            <pre className="sourceCode bash">
              <code className="sourceCode bash">pgrep firefox</code>
            </pre>
          </div>
        </li>
        <li>
          <Texto>
            <strong><code>pstree</code></strong>: Muestra los procesos en forma jerárquica (padre-hijo).
          </Texto>
          <div className="sourceCode">
            <pre className="sourceCode bash">
              <code className="sourceCode bash">pstree -p   # incluye los PIDs</code>
            </pre>
          </div>
        </li>
        <li>
          <Texto>
            <strong><code>pidof</code></strong>: Muestra el PID de un programa activo.
          </Texto>
          <div className="sourceCode">
            <pre className="sourceCode bash">
              <code className="sourceCode bash">pidof bash</code>
            </pre>
          </div>
        </li>
      </Lista>

      <Linea />
      <Titulo title="h2" id="ejecución-de-procesos">Ejecución de procesos</Titulo>
      <Lista>
        <li>
          <Texto><strong>Primer plano (foreground)</strong>:</Texto>
          <div className="sourceCode">
            <pre className="sourceCode bash">
              <code className="sourceCode bash">./programa</code>
            </pre>
          </div>
          <Texto>El terminal queda ocupado hasta que el proceso termine.</Texto>
        </li>
        <li>
          <Texto><strong>Segundo plano (background)</strong>:</Texto>
          <div className="sourceCode">
            <pre className="sourceCode bash">
              <code className="sourceCode bash">./programa &</code>
            </pre>
          </div>
          <Texto>
            El shell sigue disponible mientras el proceso corre. Tener en cuenta que normalmente
            al cerrar la shell el proceso se termina, pero se puede utilizar el comando <code>disown</code>
            en la shell para que el proceso no dependa de la shell.
          </Texto>
        </li>
        <li>
          <Texto><strong>Ejemplo práctico:</strong></Texto>
          <div className="sourceCode">
            <pre className="sourceCode bash">
              <code className="sourceCode bash">
                long_task.sh &
                echo "Sigo usando la terminal"
              </code>
            </pre>
          </div>
        </li>
      </Lista>

      <Linea />
      <Titulo title="h2" id="control-de-trabajos">Control de trabajos</Titulo>
      <Texto>
        Bash permite gestionar procesos iniciados desde la misma sesión
        (misma terminal en el que se ejecutó el proceso).
      </Texto>
      <div className="sourceCode">
        <pre className="sourceCode bash">
          <code className="sourceCode bash">
            jobs          # lista los procesos de fondo en la sesión actual
            fg %1         # lleva el job 1 al primer plano
            bg %2         # reanuda el job 2 en segundo plano
            Ctrl + Z      # pausa el proceso actual
          </code>
        </pre>
      </div>

      <Texto><strong>Ejemplo:</strong> Creamos un proceso en la terminal:</Texto>
      <div className="sourceCode">
        <pre className="sourceCode bash">
          <code className="sourceCode bash">sleep 1d && echo "Ya paso 1 dia"</code>
        </pre>
      </div>

      <Texto>
        Luego das <code>Ctrl+Z</code> se pausa el proceso (importante no equivocarse con
        <code>Ctrl+C</code> porque este terminaría el proceso en vez de pausarlo), cuando escribas:
      </Texto>

      <div className="sourceCode">
        <pre className="sourceCode bash">
          <code className="sourceCode bash">jobs</code>
        </pre>
      </div>

      <Texto>Podrás visualizar el proceso, todo se vería algo así:</Texto>
      <figure>
        <img src="./../images/procesos.png" alt="Ir a Procesos" />
        <figcaption>Ir a Procesos</figcaption>
      </figure>

      <Texto>
        Con el comando <code>fg %1</code> o <code>bg %1</code> puedes des pausar el proceso,
        con las implicaciones que se dieron arriba.
      </Texto>

      <Linea />
      <Titulo title="h2" id="señales-a-procesos">Señales a procesos</Titulo>
      <Lista>
        <li>
          <Texto><strong>Enviar señales manualmente:</strong></Texto>
          <div className="sourceCode">
            <pre className="sourceCode bash">
              <code className="sourceCode bash">
                kill -9 1234    # SIGKILL (fuerza el cierre)
                kill -15 1234   # SIGTERM (solicita terminación limpia)
                kill -STOP 1234 # pausa proceso
                kill -CONT 1234 # reanuda proceso detenido
              </code>
            </pre>
          </div>
        </li>
        <li>
          <Texto><strong>Por nombre:</strong></Texto>
          <div className="sourceCode">
            <pre className="sourceCode bash">
              <code className="sourceCode bash">
                pkill firefox
                killall nano
              </code>
            </pre>
          </div>
        </li>
      </Lista>

      <Texto>Algunos nombres comunes:</Texto>
      <table>
        <thead>
          <tr>
            <th>Señal</th>
            <th>Código</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>SIGTERM</code></td>
            <td>15</td>
            <td>Terminación elegante</td>
          </tr>
          <tr>
            <td><code>SIGKILL</code></td>
            <td>9</td>
            <td>Termina sin limpiar recursos</td>
          </tr>
          <tr>
            <td><code>SIGSTOP</code></td>
            <td>19</td>
            <td>Detiene temporalmente</td>
          </tr>
          <tr>
            <td><code>SIGCONT</code></td>
            <td>18</td>
            <td>Reanuda ejecución</td>
          </tr>
          <tr>
            <td><code>SIGINT</code></td>
            <td>2</td>
            <td>Interrupción (Ctrl + C)</td>
          </tr>
          <tr>
            <td><code>SIGHUP</code></td>
            <td>1</td>
            <td>Cierre de terminal o reinicio de servicio</td>
          </tr>
        </tbody>
      </table>

      <Linea />
      <Titulo title="h2" id="prioridades-de-procesos">Prioridades de procesos</Titulo>
      <Texto>
        Cada proceso tiene un <strong>"valor bueno"</strong>, que define su prioridad de CPU.
      </Texto>
      <Lista>
        <li>Rango: <strong>-20 (mayor prioridad)</strong> a <strong>19 (menor prioridad)</strong>.</li>
        <li>Valor por defecto: <strong>0</strong>.</li>
        <li>Solo <code>root</code> puede asignar valores negativos.</li>
      </Lista>

      <Texto><strong>Cambiar prioridad al iniciar:</strong></Texto>
      <div className="sourceCode">
        <pre className="sourceCode bash">
          <code className="sourceCode bash">nice -n 10 ./programa</code>
        </pre>
      </div>

      <Texto><strong>Modificar proceso existente:</strong></Texto>
      <div className="sourceCode">
        <pre className="sourceCode bash">
          <code className="sourceCode bash">renice -n 5 -p 1234</code>
        </pre>
      </div>

      <Texto><strong>Ver prioridades actuales:</strong></Texto>
      <div className="sourceCode">
        <pre className="sourceCode bash">
          <code className="sourceCode bash">ps -eo pid,ni,comm</code>
        </pre>
      </div>

      <Linea />
      <Titulo title="h2" id="procesos-huérfanos-y-zombis">Procesos huérfanos y zombis</Titulo>
      <Lista>
        <li>
          <Texto>
            <strong>Huérfano</strong>: cuando el proceso padre termina antes que su hijo.
            El proceso hijo pasa a ser adoptado por el <strong>init</strong> o <strong>systemd</strong>.
            No es dañino, pero indica una gestión no controlada de procesos.
          </Texto>
        </li>
        <li>
          <Texto>
            <strong>Zombi</strong>: proceso que terminó, pero su entrada en la tabla de procesos
            aún existe porque su padre no leyó su estado de salida (<code>wait()</code> no fue llamado).
            Se muestran con estado <code>Z</code>.
          </Texto>
          <div className="sourceCode">
            <pre className="sourceCode bash">
              <code className="sourceCode bash">ps aux | grep 'Z'</code>
            </pre>
          </div>
          <Texto>Para eliminarlos, normalmente basta con terminar el proceso padre.</Texto>
        </li>
      </Lista>

      <Linea />
      <Titulo title="h2" id="resumen-visual">Resumen visual</Titulo>
      <table>
        <thead>
          <tr>
            <th>Acción</th>
            <th>Comando / Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Listar procesos</td>
            <td><code>ps aux</code>, <code>top</code>, <code>htop</code></td>
          </tr>
          <tr>
            <td>Buscar por nombre</td>
            <td><code>pgrep nombre</code>, <code>pidof nombre</code></td>
          </tr>
          <tr>
            <td>Árbol de procesos</td>
            <td><code>pstree -p</code></td>
          </tr>
          <tr>
            <td>Ejecutar en background</td>
            <td><code>comando &</code></td>
          </tr>
          <tr>
            <td>Ver jobs</td>
            <td><code>jobs</code></td>
          </tr>
          <tr>
            <td>Pausar proceso</td>
            <td><code>Ctrl + Z</code>, <code>kill -STOP PID</code></td>
          </tr>
          <tr>
            <td>Reanudar proceso</td>
            <td><code>bg %n</code>, <code>kill -CONT PID</code></td>
          </tr>
          <tr>
            <td>Traer a foreground</td>
            <td><code>fg %n</code></td>
          </tr>
          <tr>
            <td>Terminar proceso</td>
            <td><code>kill -9 PID</code>, <code>pkill nombre</code></td>
          </tr>
        </tbody>
      </table>
    </Estructura >
  );
}

export default Gestion_Procesos;