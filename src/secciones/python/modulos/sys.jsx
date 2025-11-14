import Enlace from "../../../componentes/atomos/enlace.jsx";
import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../../../componentes/organismos/estructura.jsx";
import Linea from "../../../componentes/atomos/linea.jsx";
import Lista from "../../../componentes/moleculas/lista.jsx";
import Texto from "./../../../componentes/atomos/texto.jsx";
import Titulo from "../../../componentes/moleculas/titulo.jsx";
import Codigo from "../../../componentes/moleculas/codigo.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#sys-en-python">Sys en Python</Enlace >
        <Lista>
            <li><Enlace href="#qué-es-sys">¿Qué es sys?</Enlace ></li>
            <li><Enlace href="#uso-básico-y-más-común">Uso básico y más común</Enlace >
              <Lista>
                <li><Enlace href="#sysargv">sys.argv</Enlace ></li>
                <li><Enlace href="#sysexitcodemessage">sys.exit([code|message])</Enlace ></li>
                <li><Enlace href="#syspath">sys.path</Enlace ></li>
                <li><Enlace href="#sysmodules">sys.modules</Enlace ></li>
                <li><Enlace href="#sysstdout-sysstderr-sysstdin">sys.stdout, sys.stderr,
                  sys.stdin</Enlace ></li>
                <li><Enlace href="#sysversion-y-sysversion_info">sys.version y
                  sys.version_info</Enlace ></li>
                <li><Enlace href="#sysplatform">sys.platform</Enlace ></li>
                <li><Enlace href="#sysmaxsize">sys.maxsize</Enlace ></li>
                <li><Enlace href="#sysgetsizeofobj-default">sys.getsizeof(obj[,
                  default])</Enlace ></li>
                <li><Enlace href="#sysgetrecursionlimit--syssetrecursionlimitn">sys.getrecursionlimit()
                  / sys.setrecursionlimit(n)</Enlace ></li>
                <li><Enlace href="#sysexc_info">sys.exc_info()</Enlace ></li>
                <li><Enlace href="#sysexcepthook">sys.excepthook</Enlace ></li>
                <li><Enlace href="#sysgetdefaultencoding-y-sysgetfilesystemencoding">sys.getdefaultencoding()
                  y sys.getfilesystemencoding()</Enlace ></li>
                <li><Enlace href="#sysbyteorder">sys.byteorder</Enlace ></li>
                <li><Enlace href="#sysimplementation">sys.implementation</Enlace ></li>
                <li><Enlace href="#sysflags">sys.flags</Enlace ></li>
                <li><Enlace href="#sysgetwindowsversion-solo-windows">sys.getwindowsversion()
                  (solo Windows)</Enlace ></li>
                <li><Enlace href="#sysgetswitchinterval--syssetswitchinterval">sys.getswitchinterval()
                  / sys.setswitchinterval()</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#ejemplos-prácticos">Ejemplos prácticos</Enlace >
              <Lista>
                <li><Enlace href="#1-script-que-procesa-cli-simple">1) Script que procesa CLI
                  simple</Enlace ></li>
                <li><Enlace href="#2-redirigir-salida-a-un-archivo">2) Redirigir salida a un
                  archivo</Enlace ></li>
                <li><Enlace href="#3-manejo-global-de-excepciones-logging">3) Manejo global
                  de excepciones (logging)</Enlace ></li>
                <li><Enlace href="#4-comprobar-versión-de-python-antes-de-correr">4)
                  Comprobar versión de Python antes de correr</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#buenas-prácticas-y-advertencias">Buenas prácticas y
              advertencias</Enlace ></li>
            <li><Enlace href="#debugging-y-profiling">Debugging y profiling</Enlace ></li>
            <li><Enlace href="#mini-proyectos--ejercicios-sugeridos">Mini-proyectos /
              ejercicios sugeridos</Enlace ></li>
          </Lista>
        </li>
      </Lista>
  );
}

function nameabcd({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" id="sys-en-python">Sys en Python</Titulo>
        <Linea />

        <TemarioCompleto temario={Temario} />

        <Titulo title="h2" id="qué-es-sys">¿Qué es sys?</Titulo>
      <Texto>sys es un módulo integrado que ofrece <strong>interfaz
        con el intérprete de Python</strong> y el entorno donde corre
        (argumentos de línea de comandos, rutas, streams estándar, información
        de la plataforma, manejo de errores, configuración del intérprete,
        etc.). Se importa con:</Texto>
      <Codigo code={`import sys`} language="python" />
      <Titulo title="h2" id="uso-básico-y-más-común">Uso básico y más común</Titulo>
      <Titulo title="h3" id="sys.argv">sys.argv</Titulo>
      <Texto>Lista de argumentos pasados al script (el elemento 0 es el nombre del
        script).</Texto>
      <Codigo code={`# ejemplo.py
import sys
print(sys.argv)
# Ejecuta: python ejemplo.py a b -> ['ejemplo.py', 'a', 'b']`} language="python" />
      <Titulo title="h3" id="sys.exitcodemessage">sys.exit([code|message])</Titulo>
      <Texto>Termina el intérprete lanzando SystemExit.
        code=0 indica éxito; cualquier int distinto a 0 indica
        error. También puedes pasar un string (se imprime).
      </Texto>
      <Codigo code={`if len(sys.argv) < 2:
sys.exit("falta argumento")`} language="python" />
      <Titulo title="h3" id="sys.path">sys.path</Titulo>
      <Texto>Lista de rutas donde Python busca módulos. Puedes modificarla en
        tiempo de ejecución (útil para scripts).</Texto>
      <Codigo code={`import sys
sys.path.append("/mi/carpeta/lib")`} language="python" />
      <Titulo title="h3" id="sys.modules">sys.modules</Titulo>
      <Texto>Diccionario de módulos cargados en memoria
        (name -&gt; module). Útil para inspección o recarga.</Texto>
      <Codigo code={`import importlib
import mi_modulo
importlib.reload(sys.modules['mi_modulo'])`} language="python" />
      <Titulo title="h3" id="sys.stdout-sys.stderr-sys.stdin">sys.stdout, sys.stderr,
        sys.stdin</Titulo>
      <Texto>Streams estándar. Permiten redirigir o manipular entrada/salida.</Texto>
      <Codigo code={`sys.stdout.write("hola\n")
sys.stderr.write("error!\n")
data = sys.stdin.read()`} language="python" />
      <Texto>También puedes usar sys.stdout.buffer para I/O
        binaria.</Texto>
      <Titulo title="h3" id="sys.version-y-sys.version_info">sys.version y
        sys.version_info</Titulo>
      <Texto>Información de la versión de Python.</Texto>
      <Codigo code={`print(sys.version)          # string completa
print(sys.version_info)     # tupla nombrada (major, minor, micro, ...)
if sys.version_info < (3,10):
print("actualiza python")`} language="python" />
      <Titulo title="h3" id="sys.platform">sys.platform</Titulo>
      <Texto>Cadena que indica la plataforma (e.g., 'linux',
        'darwin', 'win32').
      </Texto>
      <Codigo code={`if sys.platform.startswith("win"):
print("Windows")`} language="python" />
      <Titulo title="h3" id="sys.maxsize">sys.maxsize</Titulo>
      <Texto>Entero que normalmente indica el tamaño máximo práctico de
        estructuras (32/64-bit).</Texto>
      <Codigo code={`print(sys.maxsize)`} language="python" />
      <Titulo title="h3" id="sys.getsizeofobj-default">sys.getsizeof(obj[, default])</Titulo>
      <Texto>Devuelve el tamaño en bytes del objeto (solo tamaño del objeto, no
        profundidad).</Texto>
      <Codigo code={`x = [1,2,3]
print(sys.getsizeof(x))  # tamaño del objeto lista en memoria (superficial)`} language="python" />
      <Titulo title="h3" id="sys.getrecursionlimit-sys.setrecursionlimitn">sys.getrecursionlimit()
        / sys.setrecursionlimit(n)</Titulo>
      <Texto>Leer y ajustar el límite de recursión del intérprete.</Texto>
      <Codigo code={`print(sys.getrecursionlimit())
sys.setrecursionlimit(2000)`} language="python" />
      <Texto>Usar con cuidado: un límite demasiado alto puede provocar
        segfault.</Texto>
      <Titulo title="h3" id="sys.exc_info">sys.exc_info()</Titulo>
      <Texto>Información sobre la excepción actual:
        (exc_type, exc_value, traceback).
      </Texto>
      <Codigo code={`try:
1/0
except:
print(sys.exc_info())`} language="python" />
      <Titulo title="h3" id="sys.excepthook">sys.excepthook</Titulo>
      <Texto>Función que maneja excepciones no capturadas. Puedes reemplazarla
        para logging personalizado.</Texto>
      <Codigo code={`def mi_handler(exc_type, exc, tb):
print("Excepción no manejada:", exc_type, exc)
sys.excepthook = mi_handler`} language="python" />
      <Titulo title="h3" id="sys.getdefaultencoding-y-sys.getfilesystemencoding">sys.getdefaultencoding()
        y sys.getfilesystemencoding()</Titulo>
      <Texto>Codificaciones por defecto (útil para I/O y compatibilidad entre
        plataformas).</Texto>
      <Codigo code={`print(sys.getdefaultencoding(), sys.getfilesystemencoding())`} language="python" />
      <Titulo title="h3" id="sys.byteorder">sys.byteorder</Titulo>
      <Texto>Orden de bytes de la máquina: 'little' o
        'big'.
      </Texto>
      <Codigo code={`print(sys.byteorder)`} language="python" />
      <Titulo title="h3" id="sys.implementation">sys.implementation</Titulo>
      <Texto>Información sobre la implementación de Python (CPython, PyPy,
        etc.)</Texto>
      <Codigo code={`print(sys.implementation)`} language="python" />
      <Titulo title="h3" id="sys.flags">sys.flags</Titulo>
      <Texto>Namespace con banderas con las que arrancó el intérprete
        (optimize, debug, interactive,
        etc.).</Texto>
      <Codigo code={`print(sys.flags)`} language="python" />
      <Titulo title="h3" id="sys.getwindowsversion-solo-windows">sys.getwindowsversion()
        (solo Windows)</Titulo>
      <Texto>Disponible solo en Windows; usar
        hasattr(sys, "getwindowsversion") para comprobar.
      </Texto>
      <Titulo title="h3" id="sys.getswitchinterval-sys.setswitchinterval">sys.getswitchinterval()
        / sys.setswitchinterval()</Titulo>
      <Texto>Controla la frecuencia de cambio de contexto entre threads
        (CPython).</Texto>
      <Linea />
      <Titulo title="h2" id="ejemplos-prácticos">Ejemplos prácticos</Titulo>
      <Titulo title="h3" id="script-que-procesa-cli-simple">1) Script que procesa CLI
        simple</Titulo>
      <Codigo code={`# procesador.py
import sys

def main():
if len(sys.argv) < 2:
print("uso: python procesador.py archivo.txt")
sys.exit(1)
nombre = sys.argv[1]
with open(nombre, "r", encoding="utf-8") as f:
print(f.read())

if __name__ == "__main__":
main()`} language="python" />
      <Titulo title="h3" id="redirigir-salida-a-un-archivo">2) Redirigir salida a un
        archivo</Titulo>
      <Codigo code={`import sys
with open("salida.log", "w", encoding="utf-8") as log:
old_stdout = sys.stdout
sys.stdout = log
print("esto va al archivo")
sys.stdout = old_stdout`} language="python" />
      <Titulo title="h3" id="manejo-global-de-excepciones-logging">3) Manejo global de
        excepciones (logging)</Titulo>
      <Codigo code={`import sys, traceback, logging
logging.basicConfig(filename="errores.log", level=logging.ERROR)

def mi_excepthook(exc_type, exc_value, exc_tb):
logging.error("".join(traceback.format_exception(exc_type, exc_value, exc_tb)))

sys.excepthook = mi_excepthook
# cualquier excepción no capturada irá a errores.log`} language="python" />
      <Titulo title="h3" id="comprobar-versión-de-python-antes-de-correr">4) Comprobar
        versión de Python antes de correr</Titulo>
      <Codigo code={`import sys
if sys.version_info < (3,8):
sys.exit("Este script requiere Python 3.8+")`} language="python" />
      <Titulo title="h2" id="buenas-prácticas-y-advertencias">Buenas prácticas y
        advertencias</Titulo>
      <Lista>
        <li><strong>No abuses de sys.path.append()</strong> en
          producción; usa paquetes instalables o
          PYTHONPATH/virtualenvs.
        </li>    <li>sys.getsizeof() da tamaño superficial; para medir
          memoria profunda usa pympler o
          tracemalloc.
        </li>    <li>Cambiar el límite de recursión con
          setrecursionlimit() solo sí entiendes el riesgo.
        </li>    <li>sys.exit() en bibliotecas es mala idea: las
          bibliotecas deben lanzar excepciones, no terminar el proceso.</li>    <li>Evita escribir directamente a sys.stdout sí usas
            frameworks que gestionan I/O (mejor usar logging).</li>  </Lista>
      <Titulo title="h2" id="debugging-y-profiling">Debugging y profiling</Titulo>
      <Lista>
        <li>sys.setrecursionlimit() para debugging de recursión
          (con cuidado).</li>    <li>Para profiling de memoria/ejecución usa módulos especializados
            (tracemalloc, profile, cProfile),
          no sys directamente.</li>  </Lista>
      <Titulo title="h2" id="mini-proyectos-ejercicios-sugeridos">Mini-proyectos / ejercicios
        sugeridos</Titulo>
      <ol type="1">
        <li>Script CLI con argparse que use
          sys.argv como fallback y registre errores en
          sys.stderr.
        </li>    <li>Programa que redirija sys.stdout a un archivo y
          luego restaure la salida normal.</li>    <li>Wrapper que compruebe sys.version_info y ejecute un
            comportamiento alterno para versiones antiguas.</li>    <li>Logger global usando sys.excepthook para capturar
              excepciones no manejadas.</li>    <li>Herramienta que inspeccione sys.modules para listar
                módulos cargados y su ruta (module.__file__).</li>  </ol>
      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}
export default nameabcd;
