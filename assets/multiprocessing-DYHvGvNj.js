import{j as e,T as s,L as o,d as c,f as r,b as n}from"./index-BWuvRKPc.js";import{c as t,T as d,b as l,a as i}from"./tabla-5KrFVZFW.js";import{C as a}from"./codigo-D-8LK2Lm.js";function x({}){return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"h1",id:"multiprocessing-en-python",children:"Multiprocessing en Python"}),e.jsx(o,{}),e.jsx(s,{title:"h2",id:"temario",children:"Temario"}),e.jsx(c,{children:e.jsxs("li",{children:[e.jsx(r,{href:"#multiprocessing-en-python",children:"Multiprocessing en Python"}),e.jsxs(c,{children:[e.jsx("li",{children:e.jsx(r,{href:"#temario",children:"Temario"})}),e.jsx("li",{children:e.jsx(r,{href:"#qué-es-multiprocessing",children:"¿Qué es multiprocessing?"})}),e.jsxs("li",{children:[e.jsx(r,{href:"#conceptos-básicos",children:"Conceptos básicos"}),e.jsx(c,{children:e.jsx("li",{children:e.jsx(r,{href:"#crear-un-proceso",children:"Crear un proceso"})})})]}),e.jsxs("li",{children:[e.jsx(r,{href:"#enviar-datos-entre-procesos",children:"Enviar datos entre procesos"}),e.jsxs(c,{children:[e.jsx("li",{children:e.jsx(r,{href:"#con-queue",children:"Con Queue"})}),e.jsx("li",{children:e.jsx(r,{href:"#con-pipe",children:"Con Pipe"})})]})]}),e.jsx("li",{children:e.jsx(r,{href:"#uso-de-pool-grupo-de-procesos",children:"Uso de Pool (grupo de procesos)"})}),e.jsxs("li",{children:[e.jsx(r,{href:"#variables-compartidas",children:"Variables compartidas"}),e.jsx(c,{children:e.jsx("li",{children:e.jsx(r,{href:"#value-y-array",children:"Value y Array"})})})]}),e.jsxs("li",{children:[e.jsx(r,{href:"#sincronización-entre-procesos",children:"Sincronización entre procesos"}),e.jsx(c,{children:e.jsx("li",{children:e.jsx(r,{href:"#ejemplo-con-lock",children:"Ejemplo con Lock"})})})]}),e.jsx("li",{children:e.jsx(r,{href:"#ejemplo-completo",children:"Ejemplo completo"})}),e.jsx("li",{children:e.jsx(r,{href:"#resumen-rápido",children:"Resumen rápido"})})]})]})}),e.jsx(n,{children:e.jsx(r,{href:"./../../readme.md#5-python",children:"Regresar a la Guía Principal"})}),e.jsx(o,{}),e.jsx(s,{title:"h2",id:"qué-es-multiprocessing",children:"¿Qué es multiprocessing?"}),e.jsxs(n,{children:["multiprocessing permite ",e.jsx("strong",{children:"ejecutar varios procesos en paralelo"}),", aprovechando ",e.jsx("strong",{children:"todos los núcleos del CPU"}),". A diferencia de los ",e.jsx("strong",{children:"hilos (threading)"}),", cada proceso tiene su ",e.jsx("strong",{children:"propia memoria"})," → no hay bloqueo por el ",e.jsx("strong",{children:"GIL (Global Interpreter Lock)"}),"."]}),e.jsxs(n,{children:["Es ideal para tareas ",e.jsx("strong",{children:"pesadas en CPU"}),", como cálculos, IA, simulaciones, etc."]}),e.jsx(o,{}),e.jsx(s,{title:"h2",id:"conceptos-básicos",children:"Conceptos básicos"}),e.jsx(s,{title:"h3",id:"crear-un-proceso",children:"Crear un proceso"}),e.jsx(a,{code:`from multiprocessing import Process

def tarea():
print("Ejecutando en otro proceso")

if __name__ == "__main__":
p = Process(target=tarea)  # Crear proceso
p.start()                  # Iniciar
p.join()                   # Esperar a que termine
print("Proceso finalizado")`,language:"python"}),e.jsxs(c,{children:[e.jsx("li",{children:"target: función a ejecutar."}),e.jsx("li",{children:"args: argumentos para esa función."}),e.jsx("li",{children:"start(): inicia el proceso."}),e.jsx("li",{children:"join(): bloquea hasta que el proceso termina."})]}),e.jsx(o,{}),e.jsx(s,{title:"h2",id:"enviar-datos-entre-procesos",children:"Enviar datos entre procesos"}),e.jsx(s,{title:"h3",id:"con-queue",children:"Con Queue"}),e.jsx(a,{code:`from multiprocessing import Process, Queue

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
p2.start(); p2.join()`,language:"python"}),e.jsx(o,{}),e.jsx(s,{title:"h3",id:"con-pipe",children:"Con Pipe"}),e.jsx(a,{code:`from multiprocessing import Process, Pipe

def enviar(conexion):
conexion.send("Hola desde otro proceso")
conexion.close()

if __name__ == "__main__":
conn1, conn2 = Pipe()
p = Process(target=enviar, args=(conn2,))
p.start()
print(conn1.recv())  # Recibe mensaje
p.join()`,language:"python"}),e.jsx(o,{}),e.jsx(s,{title:"h2",id:"uso-de-pool-grupo-de-procesos",children:"Uso de Pool (grupo de procesos)"}),e.jsx(n,{children:"Permite ejecutar una función muchas veces en paralelo fácilmente."}),e.jsx(a,{code:`from multiprocessing import Pool

def cuadrado(x):
return x * x

if __name__ == "__main__":
with Pool(4) as pool:  # 4 procesos
resultados = pool.map(cuadrado, [1, 2, 3, 4, 5])
print(resultados)`,language:"python"}),e.jsx(n,{children:"➡️ Ejecuta cuadrado en paralelo para cada valor."}),e.jsx(o,{}),e.jsx(s,{title:"h2",id:"variables-compartidas",children:"Variables compartidas"}),e.jsx(n,{children:"Para compartir datos entre procesos de forma segura:"}),e.jsx(s,{title:"h3",id:"value-y-array",children:"Value y Array"}),e.jsx(a,{code:`from multiprocessing import Process, Value, Array

def modificar(v, a):
v.value += 10
for i in range(len(a)):
a[i] *= 2

if __name__ == "__main__":
v = Value('i', 5)           # Entero compartido
a = Array('i', [1, 2, 3])   # Arreglo compartido
p = Process(target=modificar, args=(v, a))
p.start(); p.join()
print(v.value, a[:])`,language:"python"}),e.jsx(o,{}),e.jsx(s,{title:"h2",id:"sincronización-entre-procesos",children:"Sincronización entre procesos"}),e.jsx(n,{children:"Se usan mecanismos como Lock, Event, Semaphore, etc., para evitar conflictos."}),e.jsx(s,{title:"h3",id:"ejemplo-con-lock",children:"Ejemplo con Lock"}),e.jsx(a,{code:`from multiprocessing import Process, Lock

def imprimir(lock, texto):
with lock:
print(texto)

if __name__ == "__main__":
lock = Lock()
for i in range(3):
Process(target=imprimir, args=(lock, f"Proceso {i}")).start()`,language:"python"}),e.jsx(o,{}),e.jsx(s,{title:"h2",id:"ejemplo-completo",children:"Ejemplo completo"}),e.jsx(a,{code:`from multiprocessing import Process, Queue, current_process
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
print(q.get())`,language:"python"}),e.jsx(o,{}),e.jsx(s,{title:"h2",id:"resumen-rápido",children:"Resumen rápido"}),e.jsxs(t,{children:[e.jsx(d,{headers:["Herramienta","Uso principal"]}),e.jsxs("tbody",{children:[e.jsxs(l,{children:[e.jsx(i,{children:"Process"}),e.jsx(i,{children:"Crear procesos individuales"})]}),e.jsxs(l,{children:[e.jsx(i,{children:"Pool"}),e.jsx(i,{children:"Ejecutar muchas tareas paralelas fácilmente"})]}),e.jsxs(l,{children:[e.jsx(i,{children:"Queue"}),e.jsx(i,{children:"Comunicación entre procesos"})]}),e.jsxs(l,{children:[e.jsx(i,{children:"Pipe"}),e.jsx(i,{children:"Comunicación directa entre dos procesos"})]}),e.jsxs(l,{children:[e.jsx(i,{children:"Value, Array"}),e.jsx(i,{children:"Datos compartidos"})]}),e.jsxs(l,{children:[e.jsx(i,{children:"Lock, Semaphore, Event"}),e.jsx(i,{children:"Sincronización y seguridad"})]})]})]}),e.jsx(o,{}),e.jsx(n,{children:e.jsx(r,{href:"./../../readme.md#5-python",children:"Regresar a la Guía Principal"})}),e.jsx("blockquote",{children:e.jsxs(n,{children:[e.jsx("strong",{children:"Autor:"})," Fravelz"]})})]})}export{x as default};
