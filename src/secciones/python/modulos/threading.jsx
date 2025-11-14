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
      <li><Enlace href="#threading-en-python">Threading en Python</Enlace >
        <Lista>
            <li><Enlace href="#1-qué-es-threading">1) ¿Qué es threading?</Enlace ></li>
            <li><Enlace href="#2-conceptos-clave">2) Conceptos clave</Enlace ></li>
            <li><Enlace href="#3-crear-y-usar-hilos--ejemplos-básicos">3) Crear y usar
              hilos — ejemplos básicos</Enlace >
              <Lista>
                <li><Enlace href="#a-usando-thread-con-target">a) Usando Thread con
                  target</Enlace ></li>
                <li><Enlace href="#b-subclassing-lhread">b) Subclassing lhread</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#4-daemon-threads-y-uso-correcto">4) Daemon threads y uso
              correcto</Enlace ></li>
            <li><Enlace href="#5-sincronización--primitivas-importantes">5)
              Sincronización — primitivas importantes</Enlace >
              <Lista>
                <li><Enlace href="#lock-mutual-exclusion">Lock (mutual exclusion)</Enlace ></li>
                <li><Enlace href="#rlock-reentrant-lock--permite-re-entradas-desde-mismo-hilo">RLock
                  (reentrant lock) — permite re-entradas desde mismo hilo</Enlace ></li>
                <li><Enlace href="#event--señalización-simple-flag">Event — señalización
                  simple (flag)</Enlace ></li>
                <li><Enlace href="#condition--esperas-con-notificación">Condition — esperas
                  con notificación</Enlace ></li>
                <li><Enlace href="#semaphore--contador">Semaphore — contador</Enlace ></li>
                <li><Enlace href="#barrier--sincronizar-n-hilos-en-un-punto">Barrier —
                  sincronizar N hilos en un punto</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#6-comunicación-segura-entre-hilos-queuequeue">6)
              Comunicación segura entre hilos: queue.Queue</Enlace ></li>
            <li><Enlace href="#7-manejo-de-excepciones-en-hilos">7) Manejo de excepciones
              en hilos</Enlace ></li>
            <li><Enlace href="#8-threadpoolexecutor-alta-abstracción">8)
              ThreadPoolExecutor (alta abstracción)</Enlace ></li>
            <li><Enlace href="#9-gil--cuándo-usar-threading-vs-multiprocessing">9) GIL —
              cuándo usar threading vs multiprocessing</Enlace ></li>
            <li><Enlace href="#10-operaciones-atómicas-y-seguridad">10) Operaciones
              atómicas y seguridad</Enlace ></li>
            <li><Enlace href="#11-cancelación-y-parada-de-hilos">11) Cancelación y parada
              de hilos</Enlace ></li>
            <li><Enlace href="#12-thread-local-storage">12) Thread-local storage</Enlace ></li>
            <li><Enlace href="#13-debugging-y-utilidades">13) Debugging y
              utilidades</Enlace ></li>
            <li><Enlace href="#14-buenas-prácticas">14) Buenas prácticas</Enlace ></li>
            <li><Enlace href="#15-ejemplos-prácticos-útiles">15) Ejemplos prácticos
              (útiles)</Enlace >
              <Lista>
                <li><Enlace href="#a-producer-consumer-con-queue-resumen">a)
                  Producer-consumer con Queue (resumen)</Enlace ></li>
                <li><Enlace href="#b-pool-de-threads-simple-con-thread-y-queue">b) Pool de
                  threads simple con Thread y Queue</Enlace ></li>
                <li><Enlace href="#c-uso-real-con-requests-io-bound">c) Uso real con requests
                  (I/O-bound)</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#16-limitaciones-y-alternativas">16) Limitaciones y
              alternativas</Enlace ></li>
            <li><Enlace href="#17-resumen">17) Resumen</Enlace ></li>
          </Lista>
        </li>
      </Lista>
  );
}

function nameabcd({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" id="threading-en-python">Threading en Python</Titulo>
        <Linea />

        <TemarioCompleto temario={Temario} />

        <Titulo title="h2" id="qué-es-threading">1) ¿Qué es threading?</Titulo>
      <Texto>threading es el módulo estándar de Python para
        <strong>concurrencia mediante hilos</strong> (threads). Permite ejecutar
        varias tareas aparentemente al mismo tiempo dentro del mismo proceso. Es
        ideal para operaciones <strong>I/O-bound</strong> (espera de red, disco,
        etc.). Importarlo:
      </Texto>
      <Codigo code={`import threading`} language="python" />
      <Linea />
      <Titulo title="h2" id="conceptos-clave">2) Conceptos clave</Titulo>
      <Lista>
        <li><strong>Thread (hilo):</strong> unidad de ejecución.</li>
        <li><strong>Daemon thread:</strong> hilo que no impide que el proceso
          termine; se mata cuando el programa principal acaba.</li>
        <li><strong>GIL (Global Interpreter Lock):</strong> en CPython, impide
          que varios hilos ejecuten bytecode Python al mismo tiempo — eso limita
          el paralelismo real para tareas CPU-bound.</li>
        <li><strong>Race condition:</strong> condición de carrera cuando varios
          hilos acceden/actualizan recursos compartidos sin sincronización.</li>
        <li><strong>Thread-safe:</strong> código que puede ejecutarse en varios
          hilos sin errores por concurrencia.</li>
      </Lista>
      <Linea />
      <Titulo title="h2" id="crear-y-usar-hilos-ejemplos-básicos">3) Crear y usar hilos —
        ejemplos básicos</Titulo>
      <Titulo title="h3" id="a-usando-thread-con-target">a) Usando Thread con target</Titulo>
      <Codigo code={`import threading
import time

def worker(n):
print(f"Worker {n} empieza")
time.sleep(1)
print(f"Worker {n} termina")

threads = []
for i in range(3):
t = threading.Thread(target=worker, args=(i,), name=f"worker-{i}")
t.start()
threads.append(t)

for t in threads:
t.join()  # esperar que termine cada hilo

print("Todos terminados")`} language="python" />
      <Titulo title="h3" id="b-subclassing-lhread">b) Subclassing lhread</Titulo>
      <Codigo code={`import threading, time

class MiHilo(threading.Thread):
def __init__(self, n):
super().__init__(name=f"MiHilo-{n}")
self.n = n

def run(self):
print(f"{self.name} comenzar")
time.sleep(1)
print(f"{self.name} terminar")

h = MiHilo(1)
h.start()
h.join()`} language="python" />
      <Linea />
      <Titulo title="h2" id="daemon-threads-y-uso-correcto">4) Daemon threads y uso
        correcto</Titulo>
      <Codigo code={`t = threading.Thread(target=worker, args=(1,), daemon=True)
t.start()
# Si el main thread termina, el hilo daemon se termina abruptamente.`} language="python" />
      <Texto>Usa daemon para tareas de fondo opcionales (logs en tiempo real,
        watchers). Para trabajo crítico, <strong>no</strong> uses daemon;
        asegúrate de join().</Texto>
      <Linea />
      <Titulo title="h2" id="sincronización-primitivas-importantes">5) Sincronización —
        primitivas importantes</Titulo>
      <Titulo title="h3" id="lock-mutual-exclusion">Lock (mutual exclusion)</Titulo>
      <Codigo code={`lock = threading.Lock()
with lock:
# región crítica
pass`} language="python" />
      <Titulo title="h3" id="rlock-reentrant-lock-permite-re-entradas-desde-mismo-hilo">RLock
        (reentrant lock) — permite re-entradas desde mismo hilo</Titulo>
      <Codigo code={`rlock = threading.RLock()`} language="python" />
      <Titulo title="h3" id="event-señalización-simple-flag">Event — señalización simple
        (flag)</Titulo>
      <Codigo code={`event = threading.Event()

# hilo espera:
event.wait()  # bloquea hasta que event.set()
# hilo que despierta:
event.set()`} language="python" />
      <Titulo title="h3" id="condition-esperas-con-notificación">Condition — esperas con
        notificación</Titulo>
      <Codigo code={`cond = threading.Condition()
with cond:
cond.wait()  # espera notificación
# otro hilo:
cond.notify()`} language="python" />
      <Titulo title="h3" id="semaphore-contador">Semaphore — contador</Titulo>
      <Codigo code={`sem = threading.Semaphore(3)  # máximo 3 entradas simultáneas
with sem:
# acceso limitado
pass`} language="python" />
      <Titulo title="h3" id="barrier-sincronizar-n-hilos-en-un-punto">Barrier — sincronizar N
        hilos en un punto</Titulo>
      <Codigo code={`bar = threading.Barrier(3)
bar.wait()  # todos los hilos esperan aquí hasta que lleguen los 3`} language="python" />
      <Linea />
      <Titulo title="h2" id="comunicación-segura-entre-hilos-queue.queue">6) Comunicación
        segura entre hilos: queue.Queue</Titulo>
      <Texto>queue.Queue es <strong>thread-safe</strong> y la forma
        recomendada para pasar datos entre hilos (producer-consumer).</Texto>
      <Codigo code={`import threading, queue, time

q = queue.Queue()

def producer():
for i in range(5):
q.put(i)
print("produjo", i)
time.sleep(0.2)
q.put(None)  # sentinel para indicar fin

def consumer():
while True:
item = q.get()
if item is None:
break
print("consumió", item)
q.task_done()

t1 = threading.Thread(target=producer)
t2 = threading.Thread(target=consumer)
t1.start(); t2.start()
t1.join(); q.join()`} language="python" />
      <Linea />
      <Titulo title="h2" id="manejo-de-excepciones-en-hilos">7) Manejo de excepciones en
        hilos</Titulo>
      <Texto>Las excepciones en Thread no se propagan al hilo
        principal. Opciones:</Texto>
      <Lista>
        <li>Usar concurrent.futures.ThreadPoolExecutor para obtener
          Future y atrapar excepciones.
        </li>
        <li>Capturar y guardar excepciones en el propio hilo y consultarlas
          después. Ejemplo con ThreadPoolExecutor:</li>
      </Lista>
      <Codigo code={`from concurrent.futures import ThreadPoolExecutor

def trabajo(x):
if x == 3:
raise ValueError("boom")
return x*2

with ThreadPoolExecutor(max_workers=3) as ex:
futures = [ex.submit(trabajo, i) for i in range(5)]
for f in futures:
try:
print(f.result())
except Exception as e:
print("error en hilo:", e)`} language="python" />
      <Linea />
      <Titulo title="h2" id="threadpoolexecutor-alta-abstracción">8) ThreadPoolExecutor (alta
        abstracción)</Titulo>
      <Texto>Más cómodo que crear hilos manualmente.</Texto>
      <Codigo code={`from concurrent.futures import ThreadPoolExecutor, as_completed

def tarea(n):
return n*n

with ThreadPoolExecutor(max_workers=4) as pool:
futures = [pool.submit(tarea, i) for i in range(10)]
for f in as_completed(futures):
print(f.result())`} language="python" />
      <Linea />
      <Titulo title="h2" id="gil-cuándo-usar-threading-vs-multiprocessing">9) GIL — cuándo
        usar threading vs multiprocessing</Titulo>
      <Lista>
        <li><strong>I/O-bound:</strong> usa threading (o
          asyncio) — hilos dan mejoras reales (espera de I/O libera
          GIL).
        </li>
        <li><strong>CPU-bound:</strong> threading no escala por
          GIL; usa multiprocessing (procesos) o extensiones nativas
          (numpy, C) que sueltan GIL. Explicación corta: el GIL
          permite que solo un hilo ejecute bytecode Python simultáneamente; por
          eso multiples hilos no aceleran cálculos puros en CPython.</li>
      </Lista>
      <Linea />
      <Titulo title="h2" id="operaciones-atómicas-y-seguridad">10) Operaciones atómicas y
        seguridad</Titulo>
      <Lista>
        <li>Algunos objetos y operaciones son atómicas en CPython (por ejemplo,
          asignación simple de variable, operaciones sobre tipos integrales?) —
          <strong>no confíes en ello</strong>.
        </li>
        <li>Ejemplo inseguro (race):</li>
      </Lista>
      <Codigo code={`# NO usar sin lock
counter = 0
def incr():
global counter
for _ in range(10000):
counter += 1  # no es atómico: leer-modificar-escribir`} language="python" />
      <Texto>Siempre protege con Lock sí hay acceso concurrente.</Texto>
      <Linea />
      <Titulo title="h2" id="cancelación-y-parada-de-hilos">11) Cancelación y parada de
        hilos</Titulo>
      <Texto>No existe Thread.kill() seguro. Patrones para parar:</Texto>
      <Lista>
        <li>Usar threading.Event() como bandera de parada:</li>
      </Lista>
      <Codigo code={`stop_event = threading.Event()

def worker():
while not stop_event.is_set():
# trabajo
pass

# detener:
stop_event.set()`} language="python" />
      <Lista>
        <li>Usar sentinels en queue (None).</li>
      </Lista>
      <Linea />
      <Titulo title="h2" id="thread-local-storage">12) Thread-local storage</Titulo>
      <Texto>Datos separados por hilo:</Texto>
      <Codigo code={`import threading
local = threading.local()
def worker(val):
local.x = val
print(local.x)

t1 = threading.Thread(target=worker, args=(1,))
t2 = threading.Thread(target=worker, args=(2,))
t1.start(); t2.start()`} language="python" />
      <Texto>Cada hilo ve su propio local.x.</Texto>
      <Linea />
      <Titulo title="h2" id="debugging-y-utilidades">13) Debugging y utilidades</Titulo>
      <Lista>
        <li>threading.enumerate() → lista hilos activos.</li>
        <li>threading.active_count() → cuenta.</li>
        <li>threading.current_thread().name → nombre actual.</li>
        <li>Poner logs (no prints) con logging y
          threadName en el formato para seguir hilos.
        </li>
        <li>Para debug avanzado:
          faulthandler.dump_traceback_later() o
          threading.settrace() (poco común).
        </li>
      </Lista>
      <Texto>Ejemplo de logging:</Texto>
      <Codigo code={`import logging, threading, time
logging.basicConfig(level=logging.INFO, format="%(threadName)s: %(message)s")
def worker():
logging.info("start")
time.sleep(1)
logging.info("end")

t = threading.Thread(target=worker, name="hilo-1")
t.start(); t.join()`} language="python" />
      <Linea />
      <Titulo title="h2" id="buenas-prácticas">14) Buenas prácticas</Titulo>
      <Lista>
        <li>Para I/O concurrency, prefiere ThreadPoolExecutor o
          asyncio según el caso.
        </li>
        <li>Evita variables globales mutables; usa queue.Queue y
          Locks.
        </li>
        <li>No uses daemon=True para tareas que deben terminar
          correctamente.</li>
        <li>Mantén regiones críticas lo más cortas posible (reduce
          contención).</li>
        <li>Sí necesitas paralelismo real para CPU-bound, usa
          multiprocessing o librerías que suelten el GIL.
        </li>
        <li>Añade timeouts a join() y bloqueos
          (lock.acquire(timeout=...)) sí corres riesgos de
          deadlock.</li>
      </Lista>
      <Linea />
      <Titulo title="h2" id="ejemplos-prácticos-útiles">15) Ejemplos prácticos (útiles)</Titulo>
      <Titulo title="h3" id="a-producer-consumer-con-queue-resumen">a) Producer-consumer con
        Queue (resumen)</Titulo>
      <Texto>Ya mostrado en la sección de Queue. Es el patrón más útil y seguro
        para comunicación.</Texto>
      <Titulo title="h3" id="b-pool-de-threads-simple-con-thread-y-queue">b) Pool de threads
        simple con Thread y Queue</Titulo>
      <Codigo code={`import threading, queue, time

def worker(q):
while True:
fn, args = q.get()
if fn is None:
break
try:
fn(*args)
finally:
q.task_done()

q = queue.Queue()
threads = []
for _ in range(4):
t = threading.Thread(target=worker, args=(q,))
t.start()
threads.append(t)

# Encolar tareas
for i in range(10):
q.put((print, (f"task {i}",)))

q.join()
# parar hilos
for _ in threads:
q.put((None, None))
for t in threads:
t.join()`} language="python" />
      <Titulo title="h3" id="c-uso-real-con-requests-io-bound">c) Uso real con requests
        (I/O-bound)</Titulo>
      <Codigo code={`import requests
from concurrent.futures import ThreadPoolExecutor

urls = ["https://example.com"]*10

def fetch(url):
r = requests.get(url)
return len(r.content)

with ThreadPoolExecutor(max_workers=5) as ex:
results = list(ex.map(fetch, urls))
print(results)`} language="python" />
      <Linea />
      <Titulo title="h2" id="limitaciones-y-alternativas">16) Limitaciones y
        alternativas</Titulo>
      <Lista>
        <li>threading no es la mejor opción para CPU-bound por
          el GIL.</li>    <li>Alternativas:</li>
        <Lista>
          <li>
            multiprocessing — procesos (paralelismo
            real).</li>        <li>asyncio — concurrencia en un solo hilo usando
              corutinas (muy eficiente para I/O con muchas conexiones).</li>        <li>concurrent.futures.ProcessPoolExecutor — API
                parecida a ThreadPool pero con procesos.</li>      </Lista>
      </Lista>
      <Linea />
      <Titulo title="h2" id="resumen">17) Resumen</Titulo>
      <Lista>
        <li>Usa threading para <strong>I/O-bound</strong>.</li>
        <li>Protege recursos compartidos con Lock,
          RLock, o usa Queue.
        </li>
        <li>Para excepciones y manejo fácil, usa
          ThreadPoolExecutor.
        </li>
        <li>No hay forma segura de matar hilos; implementa mecanismo cooperativo
          (Event/sentinels).</li>
        <li>Sí necesitas paralelismo CPU puro, usa
          multiprocessing.
        </li>
      </Lista>
      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}
export default nameabcd;
