import{j as e,E as k,T as s,L as n,a as L,b as a,d as l,e as S,c as T,f as o}from"./index-DMQoPaND.js";import{c as A,T as Q,b as t,a as i}from"./tabla-Btz_eBuW.js";import{C as c}from"./codigo-CPt7AhUC.js";function E(C){const r=T.c(14),{className:q}=C,v=q===void 0?"":q;let d,p;r[0]===Symbol.for("react.memo_cache_sentinel")?(d=e.jsx("li",{children:e.jsx(o,{href:"#qué-es-multiprocessing",children:"¿Qué es multiprocessing?"})}),p=e.jsx(o,{href:"#conceptos-básicos",children:"Conceptos básicos"}),r[0]=d,r[1]=p):(d=r[0],p=r[1]);let m,h;r[2]===Symbol.for("react.memo_cache_sentinel")?(m=e.jsxs("li",{children:[p,e.jsx(l,{children:e.jsx("li",{children:e.jsx(o,{href:"#crear-un-proceso",children:"Crear un proceso"})})})]}),h=e.jsx(o,{href:"#enviar-datos-entre-procesos",children:"Enviar datos entre procesos"}),r[2]=m,r[3]=h):(m=r[2],h=r[3]);let j,u,x;r[4]===Symbol.for("react.memo_cache_sentinel")?(j=e.jsxs("li",{children:[h,e.jsxs(l,{children:[e.jsx("li",{children:e.jsx(o,{href:"#con-queue",children:"Con Queue"})}),e.jsx("li",{children:e.jsx(o,{href:"#con-pipe",children:"Con Pipe"})})]})]}),u=e.jsx("li",{children:e.jsx(o,{href:"#uso-de-pool-grupo-de-procesos",children:"Uso de Pool (grupo de procesos)"})}),x=e.jsx(o,{href:"#variables-compartidas",children:"Variables compartidas"}),r[4]=j,r[5]=u,r[6]=x):(j=r[4],u=r[5],x=r[6]);let f,_;r[7]===Symbol.for("react.memo_cache_sentinel")?(_=e.jsxs("li",{children:[x,e.jsx(l,{children:e.jsx("li",{children:e.jsx(o,{href:"#value-y-array",children:"Value y Array"})})})]}),f=e.jsx(o,{href:"#sincronización-entre-procesos",children:"Sincronización entre procesos"}),r[7]=f,r[8]=_):(f=r[7],_=r[8]);let g,b,P;r[9]===Symbol.for("react.memo_cache_sentinel")?(g=e.jsxs("li",{children:[f,e.jsx(l,{children:e.jsx("li",{children:e.jsx(o,{href:"#ejemplo-con-lock",children:"Ejemplo con Lock"})})})]}),b=e.jsx("li",{children:e.jsx(o,{href:"#ejemplo-completo",children:"Ejemplo completo"})}),P=e.jsx("li",{children:e.jsx(o,{href:"#resumen-rápido",children:"Resumen rápido"})}),r[9]=g,r[10]=b,r[11]=P):(g=r[9],b=r[10],P=r[11]);let y;return r[12]!==v?(y=e.jsxs(l,{className:v,children:[d,m,j,u,_,g,b,P]}),r[12]=v,r[13]=y):y=r[13],y}function U({}){return e.jsxs(e.Fragment,{children:[e.jsxs(k,{children:[e.jsx(s,{title:"h1",id:"multiprocessing-en-python",children:"Multiprocessing en Python"}),e.jsx(n,{}),e.jsx(L,{temario:E}),e.jsx(s,{title:"h2",id:"qué-es-multiprocessing",children:"¿Qué es multiprocessing?"}),e.jsxs(a,{children:["multiprocessing permite ",e.jsx("strong",{children:"ejecutar varios procesos en paralelo"}),", aprovechando ",e.jsx("strong",{children:"todos los núcleos del CPU"}),". A diferencia de los ",e.jsx("strong",{children:"hilos (threading)"}),", cada proceso tiene su ",e.jsx("strong",{children:"propia memoria"})," → no hay bloqueo por el ",e.jsx("strong",{children:"GIL (Global Interpreter Lock)"}),"."]}),e.jsxs(a,{children:["Es ideal para tareas ",e.jsx("strong",{children:"pesadas en CPU"}),", como cálculos, IA, simulaciones, etc."]}),e.jsx(n,{}),e.jsx(s,{title:"h2",id:"conceptos-básicos",children:"Conceptos básicos"}),e.jsx(s,{title:"h3",id:"crear-un-proceso",children:"Crear un proceso"}),e.jsx(c,{code:`from multiprocessing import Process

def tarea():
print("Ejecutando en otro proceso")

if __name__ == "__main__":
p = Process(target=tarea)  # Crear proceso
p.start()                  # Iniciar
p.join()                   # Esperar a que termine
print("Proceso finalizado")`,language:"python"}),e.jsxs(l,{children:[e.jsx("li",{children:"target: función a ejecutar."}),e.jsx("li",{children:"args: argumentos para esa función."}),e.jsx("li",{children:"start(): inicia el proceso."}),e.jsx("li",{children:"join(): bloquea hasta que el proceso termina."})]}),e.jsx(n,{}),e.jsx(s,{title:"h2",id:"enviar-datos-entre-procesos",children:"Enviar datos entre procesos"}),e.jsx(s,{title:"h3",id:"con-queue",children:"Con Queue"}),e.jsx(c,{code:`from multiprocessing import Process, Queue

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
p2.start(); p2.join()`,language:"python"}),e.jsx(n,{}),e.jsx(s,{title:"h3",id:"con-pipe",children:"Con Pipe"}),e.jsx(c,{code:`from multiprocessing import Process, Pipe

def enviar(conexion):
conexion.send("Hola desde otro proceso")
conexion.close()

if __name__ == "__main__":
conn1, conn2 = Pipe()
p = Process(target=enviar, args=(conn2,))
p.start()
print(conn1.recv())  # Recibe mensaje
p.join()`,language:"python"}),e.jsx(n,{}),e.jsx(s,{title:"h2",id:"uso-de-pool-grupo-de-procesos",children:"Uso de Pool (grupo de procesos)"}),e.jsx(a,{children:"Permite ejecutar una función muchas veces en paralelo fácilmente."}),e.jsx(c,{code:`from multiprocessing import Pool

def cuadrado(x):
return x * x

if __name__ == "__main__":
with Pool(4) as pool:  # 4 procesos
resultados = pool.map(cuadrado, [1, 2, 3, 4, 5])
print(resultados)`,language:"python"}),e.jsx(a,{children:"➡️ Ejecuta cuadrado en paralelo para cada valor."}),e.jsx(n,{}),e.jsx(s,{title:"h2",id:"variables-compartidas",children:"Variables compartidas"}),e.jsx(a,{children:"Para compartir datos entre procesos de forma segura:"}),e.jsx(s,{title:"h3",id:"value-y-array",children:"Value y Array"}),e.jsx(c,{code:`from multiprocessing import Process, Value, Array

def modificar(v, a):
v.value += 10
for i in range(len(a)):
a[i] *= 2

if __name__ == "__main__":
v = Value('i', 5)           # Entero compartido
a = Array('i', [1, 2, 3])   # Arreglo compartido
p = Process(target=modificar, args=(v, a))
p.start(); p.join()
print(v.value, a[:])`,language:"python"}),e.jsx(n,{}),e.jsx(s,{title:"h2",id:"sincronización-entre-procesos",children:"Sincronización entre procesos"}),e.jsx(a,{children:"Se usan mecanismos como Lock, Event, Semaphore, etc., para evitar conflictos."}),e.jsx(s,{title:"h3",id:"ejemplo-con-lock",children:"Ejemplo con Lock"}),e.jsx(c,{code:`from multiprocessing import Process, Lock

def imprimir(lock, texto):
with lock:
print(texto)

if __name__ == "__main__":
lock = Lock()
for i in range(3):
Process(target=imprimir, args=(lock, f"Proceso {i}")).start()`,language:"python"}),e.jsx(n,{}),e.jsx(s,{title:"h2",id:"ejemplo-completo",children:"Ejemplo completo"}),e.jsx(c,{code:`from multiprocessing import Process, Queue, current_process
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
print(q.get())`,language:"python"}),e.jsx(n,{}),e.jsx(s,{title:"h2",id:"resumen-rápido",children:"Resumen rápido"}),e.jsxs(A,{children:[e.jsx(Q,{headers:["Herramienta","Uso principal"]}),e.jsxs("tbody",{children:[e.jsxs(t,{children:[e.jsx(i,{children:"Process"}),e.jsx(i,{children:"Crear procesos individuales"})]}),e.jsxs(t,{children:[e.jsx(i,{children:"Pool"}),e.jsx(i,{children:"Ejecutar muchas tareas paralelas fácilmente"})]}),e.jsxs(t,{children:[e.jsx(i,{children:"Queue"}),e.jsx(i,{children:"Comunicación entre procesos"})]}),e.jsxs(t,{children:[e.jsx(i,{children:"Pipe"}),e.jsx(i,{children:"Comunicación directa entre dos procesos"})]}),e.jsxs(t,{children:[e.jsx(i,{children:"Value, Array"}),e.jsx(i,{children:"Datos compartidos"})]}),e.jsxs(t,{children:[e.jsx(i,{children:"Lock, Semaphore, Event"}),e.jsx(i,{children:"Sincronización y seguridad"})]})]})]})]}),e.jsx(S,{temario:E})]})}export{U as default};
