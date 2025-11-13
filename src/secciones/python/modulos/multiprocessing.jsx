import Enlace from "../../../componentes/atomos/enlace.jsx";
import Linea from "../../../componentes/atomos/linea.jsx";
import Lista from "../../../componentes/moleculas/lista.jsx";
import Texto from "./../../../componentes/atomos/texto.jsx";
import Titulo from "../../../componentes/moleculas/titulo.jsx";
import { Tabla, TablaCabezera, TablaFila, TablaUnica } from "../../../componentes/moleculas/tabla.jsx";
import Codigo from "../../../componentes/moleculas/codigo.jsx";

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="multiprocessing-en-python">Multiprocessing en Python</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><Enlace href="#multiprocessing-en-python">Multiprocessing en Python</Enlace >
          <Lista>
            <li><Enlace href="#temario">Temario</Enlace ></li>
            <li><Enlace href="#qué-es-multiprocessing">¿Qué es multiprocessing?</Enlace ></li>
            <li><Enlace href="#conceptos-básicos">Conceptos básicos</Enlace >
              <Lista>
                <li><Enlace href="#crear-un-proceso">Crear un proceso</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#enviar-datos-entre-procesos">Enviar datos entre
              procesos</Enlace >
              <Lista>
                <li><Enlace href="#con-queue">Con Queue</Enlace ></li>
                <li><Enlace href="#con-pipe">Con Pipe</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#uso-de-pool-grupo-de-procesos">Uso de Pool (grupo de
              procesos)</Enlace ></li>
            <li><Enlace href="#variables-compartidas">Variables compartidas</Enlace >
              <Lista>
                <li><Enlace href="#value-y-array">Value y Array</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#sincronización-entre-procesos">Sincronización entre
              procesos</Enlace >
              <Lista>
                <li><Enlace href="#ejemplo-con-lock">Ejemplo con Lock</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#ejemplo-completo">Ejemplo completo</Enlace ></li>
            <li><Enlace href="#resumen-rápido">Resumen rápido</Enlace ></li>
          </Lista>
        </li>
      </Lista>
      <Texto><Enlace href="./../../readme.md#5-python">Regresar a la Guía
        Principal</Enlace ></Texto>
      <Linea />
      <Titulo title="h2" id="qué-es-multiprocessing">¿Qué es multiprocessing?</Titulo>
      <Texto>multiprocessing permite <strong>ejecutar varios procesos
        en paralelo</strong>, aprovechando <strong>todos los núcleos del
          CPU</strong>. A diferencia de los <strong>hilos
            (threading)</strong>, cada proceso tiene su <strong>propia
              memoria</strong> → no hay bloqueo por el <strong>GIL (Global Interpreter
                Lock)</strong>.</Texto>
      <Texto>Es ideal para tareas <strong>pesadas en CPU</strong>, como cálculos,
        IA, simulaciones, etc.</Texto>
      <Linea />
      <Titulo title="h2" id="conceptos-básicos">Conceptos básicos</Titulo>
      <Titulo title="h3" id="crear-un-proceso">Crear un proceso</Titulo>
      <Codigo code={`from multiprocessing import Process

def tarea():
print("Ejecutando en otro proceso")

if __name__ == "__main__":
p = Process(target=tarea)  # Crear proceso
p.start()                  # Iniciar
p.join()                   # Esperar a que termine
print("Proceso finalizado")`} language="python" />
      <Lista>
        <li>target: función a ejecutar.</li>
        <li>args: argumentos para esa función.</li>
        <li>start(): inicia el proceso.</li>
        <li>join(): bloquea hasta que el proceso termina.</li>
      </Lista>
      <Linea />
      <Titulo title="h2" id="enviar-datos-entre-procesos">Enviar datos entre procesos</Titulo>
      <Titulo title="h3" id="con-queue">Con Queue</Titulo>
      <Codigo code={`from multiprocessing import Process, Queue

def productor(q):
for i in range(3):
q.put(i)  # Enviar a la cola

def consumidor(q):
while not q.empty():
print("Recibido:", q.get())

if __name__ == "__main__":
q = Queue()
p1 = Process(target=productor, args=(q,))
p2 = Process(target=consumidor, args=(q,))
p1.start(); p1.join()
p2.start(); p2.join()`} language="python" />
      <Linea />
      <Titulo title="h3" id="con-pipe">Con Pipe</Titulo>
      <Codigo code={`from multiprocessing import Process, Pipe

def enviar(conexion):
conexion.send("Hola desde otro proceso")
conexion.close()

if __name__ == "__main__":
conn1, conn2 = Pipe()
p = Process(target=enviar, args=(conn2,))
p.start()
print(conn1.recv())  # Recibe mensaje
p.join()`} language="python" />
      <Linea />
      <Titulo title="h2" id="uso-de-pool-grupo-de-procesos">Uso de Pool (grupo de
        procesos)</Titulo>
      <Texto>Permite ejecutar una función muchas veces en paralelo fácilmente.</Texto>
      <Codigo code={`from multiprocessing import Pool

def cuadrado(x):
return x * x

if __name__ == "__main__":
with Pool(4) as pool:  # 4 procesos
resultados = pool.map(cuadrado, [1, 2, 3, 4, 5])
print(resultados)`} language="python" />
      <Texto>➡️ Ejecuta cuadrado en paralelo para cada valor.</Texto>
      <Linea />
      <Titulo title="h2" id="variables-compartidas">Variables compartidas</Titulo>
      <Texto>Para compartir datos entre procesos de forma segura:</Texto>
      <Titulo title="h3" id="value-y-array">Value y Array</Titulo>
      <Codigo code={`from multiprocessing import Process, Value, Array

def modificar(v, a):
v.value += 10
for i in range(len(a)):
a[i] *= 2

if __name__ == "__main__":
v = Value('i', 5)           # Entero compartido
a = Array('i', [1, 2, 3])   # Arreglo compartido
p = Process(target=modificar, args=(v, a))
p.start(); p.join()
print(v.value, a[:])`} language="python" />
      <Linea />
      <Titulo title="h2" id="sincronización-entre-procesos">Sincronización entre
        procesos</Titulo>
      <Texto>Se usan mecanismos como Lock, Event,
        Semaphore, etc., para evitar conflictos.
      </Texto>
      <Titulo title="h3" id="ejemplo-con-lock">Ejemplo con Lock</Titulo>
      <Codigo code={`from multiprocessing import Process, Lock

def imprimir(lock, texto):
with lock:
print(texto)

if __name__ == "__main__":
lock = Lock()
for i in range(3):
Process(target=imprimir, args=(lock, f"Proceso {i}")).start()`} language="python" />
      <Linea />
      <Titulo title="h2" id="ejemplo-completo">Ejemplo completo</Titulo>
      <Codigo code={`from multiprocessing import Process, Queue, current_process
import time

def trabajo(q):
nombre = current_process().name
q.put(f"{nombre} inicia tarea")
time.sleep(1)
q.put(f"{nombre} termina tarea")

if __name__ == "__main__":
q = Queue()
procesos = [Process(target=trabajo, args=(q,)) for _ in range(4)]

for p in procesos: p.start()
for p in procesos: p.join()

while not q.empty():
print(q.get())`} language="python" />
      <Linea />
      <Titulo title="h2" id="resumen-rápido">Resumen rápido</Titulo>
      <Tabla>
  <TablaCabezera headers={["Herramienta", "Uso principal"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>Process</TablaUnica>
      <TablaUnica>Crear procesos individuales</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Pool</TablaUnica>
      <TablaUnica>Ejecutar muchas tareas paralelas fácilmente</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Queue</TablaUnica>
      <TablaUnica>Comunicación entre procesos</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Pipe</TablaUnica>
      <TablaUnica>Comunicación directa entre dos procesos</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Value, Array</TablaUnica>
      <TablaUnica>Datos compartidos</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Lock, Semaphore, Event</TablaUnica>
      <TablaUnica>Sincronización y seguridad</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
      <Linea />
      <Texto><Enlace href="./../../readme.md#5-python">Regresar a la Guía
        Principal</Enlace ></Texto>
      <blockquote>
        <Texto><strong>Autor:</strong> Fravelz</Texto>
      </blockquote>
    </>
  );
}
export default nameabcd;
