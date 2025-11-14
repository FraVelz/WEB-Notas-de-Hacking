import Enlace from "../../componentes/atomos/enlace.jsx";
import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../../componentes/organismos/estructura.jsx";
import Linea from "../../componentes/atomos/linea.jsx";
import Lista from "../../componentes/moleculas/lista.jsx";
import Texto from "./../../componentes/atomos/texto.jsx";
import Titulo from "../../componentes/moleculas/titulo.jsx";
import Codigo from "../../componentes/moleculas/codigo.jsx";
import { Tabla, TablaCabezera, TablaFila, TablaUnica } from "../../componentes/moleculas/tabla.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#python">Python</Enlace >
        <Lista>
              <li><Enlace href="#1-qué-es-python">1. ¿Qué es Python?</Enlace ></li>
              <li><Enlace href="#2-sintaxis-básica">2. Sintaxis básica</Enlace >
                <Lista>
                  <li><Enlace href="#variables-y-tipos-de-datos">Variables y tipos de
                    datos</Enlace ></li>
                  <li><Enlace href="#operadores">Operadores</Enlace ></li>
                </Lista>
              </li>
              <li><Enlace href="#3-control-de-flujo">3. Control de flujo</Enlace >
                <Lista>
                  <li><Enlace href="#condicionales">Condicionales</Enlace ></li>
                  <li><Enlace href="#bucles">Bucles</Enlace ></li>
                </Lista>
              </li>
              <li><Enlace href="#4-estructuras-de-datos">4. Estructuras de datos</Enlace >
                <Lista>
                  <li><Enlace href="#listas">Listas</Enlace ></li>
                  <li><Enlace href="#tuplas">Tuplas</Enlace ></li>
                  <li><Enlace href="#conjuntos">Conjuntos</Enlace ></li>
                  <li><Enlace href="#diccionarios">Diccionarios</Enlace ></li>
                </Lista>
              </li>
              <li><Enlace href="#5-funciones">5. Funciones</Enlace ></li>
              <li><Enlace href="#6-programación-orientada-a-objetos-poo">6. Programación
                orientada a objetos (POO)</Enlace ></li>
              <li><Enlace href="#7-módulos-y-paquetes">7. Módulos y paquetes</Enlace ></li>
              <li><Enlace href="#8-archivos">8. Archivos</Enlace ></li>
              <li><Enlace href="#9-librerías-populares-por-áreas">9. Librerías populares
                (por áreas)</Enlace ></li>
              <li><Enlace href="#10-conceptos-avanzados">10. Conceptos avanzados</Enlace ></li>
              <li><Enlace href="#11-herramientas-y-entorno">11. Herramientas y
                entorno</Enlace ></li>
            </Lista>
          </li>
        </Lista>
  );
}

function nameabcd({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" id="python">Python</Titulo>
        <Texto><b>Recurso extra:</b> Video de YouTube - python desde cero:</Texto>

        <Lista>
          <li>
            <Enlace href="https://www.youtube.com/watch?v=nKPbfIU442g">Ir a curso de Python Básico Completo - YoSoyDalto
              (8h)</Enlace>
          </li>
        </Lista>

        <Linea />

        <TemarioCompleto temario={Temario} />

        <Titulo title="h2" id="qué-es-python">1. ¿Qué es Python?</Titulo>
        <Texto><strong>Python</strong> es un lenguaje de programación:</Texto>
        <Lista>
          <li><strong>Interpretado</strong> (no necesitas compilar).</li>
          <li><strong>De alto nivel</strong> (fácil de leer).</li>
          <li><strong>Multiparadigma</strong> (permite programación estructurada,
            orientada a objetos y funcional).</li>
          <li><strong>De propósito general</strong> (sirve para web, IA, hacking,
            data science, automatización, etc.).</li>
        </Lista>
        <Texto>Ejemplo básico:</Texto>
        <Codigo code={`print("Hola, mundo!")`} language="python" />
        <Linea />
        <Titulo title="h2" id="sintaxis-básica">2. Sintaxis básica</Titulo>
        <Titulo title="h3" id="variables-y-tipos-de-datos">Variables y tipos de datos</Titulo>
        <Codigo code={`nombre = "Francisco"
edad = 17
altura = 1.75
es_estudiante = True`} language="python" />
        <Texto>Tipos básicos:</Texto>
        <Lista>
          <li>int: números enteros</li>
          <li>float: decimales</li>
          <li>str: texto</li>
          <li>bool: verdadero/falso</li>
        </Lista>
        <Titulo title="h3" id="operadores">Operadores</Titulo>
        <Codigo code={`a = 5
b = 2
print(a + b)  # Suma
print(a ** b) # Potencia
print(a // b) # División entera`} language="python" />
        <Linea />
        <Titulo title="h2" id="control-de-flujo">3. Control de flujo</Titulo>
        <Titulo title="h3" id="condicionales">Condicionales</Titulo>
        <Codigo code={`if edad >= 18:
print("Eres adulto")
elif edad >= 13:
print("Eres adolescente")
else:
print("Eres niño")`} language="python" />
        <Titulo title="h3" id="bucles">Bucles</Titulo>
        <Codigo code={`for i in range(5):
print(i)  # Imprime 0 a 4

while edad < 18:
edad += 1`} language="python" />
        <Linea />
        <Titulo title="h2" id="estructuras-de-datos">4. Estructuras de datos</Titulo>
        <Titulo title="h3" id="listas">Listas</Titulo>
        <Codigo code={`nombres = ["Ana", "Luis", "Carlos"]
nombres.append("Sofía")
print(nombres[0])  # "Ana"`} language="python" />
        <Titulo title="h3" id="tuplas">Tuplas</Titulo>
        <Codigo code={`coordenadas = (10, 20)`} language="python" />
        <Titulo title="h3" id="conjuntos">Conjuntos</Titulo>
        <Codigo code={`numeros = {"{1, 2, 3, 3}"}
print(numeros)  # {"{1, 2, 3}"} (no repite)`} language="python" />
        <Titulo title="h3" id="diccionarios">Diccionarios</Titulo>
        <Codigo code={`persona = {"nombre": "Francisco", "edad": 17I}
print(persona["nombre"])`} language="python" />
        <Linea />
        <Titulo title="h2" id="funciones">5. Funciones</Titulo>
        <Codigo code={`def saludar(nombre):
return f"Hola, {"{nombre}"}"

print(saludar("Francisco"))`} language="python" />

            <Linea />
            <Titulo title="h2" id="programación-orientada-a-objetos-poo">6. Programación orientada
              a objetos (POO)</Titulo>
            <Codigo code={`class Persona:
def __init__(self, nombre, edad):
self.nombre = nombre
self.edad = edad

def saludar(self):
print(f"Hola, soy {"{self.nombre}"}")

p1 = Persona("Francisco", 17)
p1.saludar()`} language="python" />
            <Linea />
            <Titulo title="h2" id="módulos-y-paquetes">7. Módulos y paquetes</Titulo>
            <Codigo code={`import math
print(math.sqrt(16))  # 4.0`} language="python" />
            <Texto>También puedes crear tus propios módulos (mimodulo.py) y
              luego:</Texto>
            <Codigo code={`import mimodulo`} language="python" />
            <Linea />
            <Titulo title="h2" id="archivos">8. Archivos</Titulo>
            <Codigo code={`with open("datos.txt", "w") as archivo:
archivo.write("Hola mundo")

with open("datos.txt", "r") as archivo:
print(archivo.read())`} language="python" />
            <Linea />
            <Titulo title="h2" id="librerías-populares-por-áreas">9. Librerías populares (por
              áreas)</Titulo>
            <Tabla>
  <TablaCabezera headers={["Área", "Librerías"]} />

  <tbody>
    <TablaFila>
      <TablaUnica><strong>IA / Machine Learning</strong></TablaUnica>
      <TablaUnica>numpy, pandas, scikit-learn,
                    tensorflow, torch</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>Hacking / Ciberseguridad</strong></TablaUnica>
      <TablaUnica>scapy, socket, requests,
                    paramiko</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>Desarrollo web</strong></TablaUnica>
      <TablaUnica>flask, django, fastapi</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>Automatización</strong></TablaUnica>
      <TablaUnica>os, shutil, subprocess,
                    pyautogui, selenium</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>Ciencia de datos</strong></TablaUnica>
      <TablaUnica>matplotlib, seaborn,
                    pandas</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>Videojuegos</strong></TablaUnica>
      <TablaUnica>pygame</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>Bots / APIs</strong></TablaUnica>
      <TablaUnica>discord.py, telebot,
                    requests</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
            <Linea />
            <Titulo title="h2" id="conceptos-avanzados">10. Conceptos avanzados</Titulo>
            <Lista>
              <li><strong>List comprehensions:</strong>
                <Codigo code={`cuadrados = [x**2 for x in range(5)]`} language="python" />
              </li>
              <li>
                <strong>Funciones lambda:</strong>
                <Codigo code={`doble = lambda x: x*2`} language="python" />
              </li>
              <li>
                <strong>Decoradores</strong></li>    <li><strong>Generadores (yield)</strong></li>    <li><strong>Manejo de errores
                  (try/except)</strong></li>    <li><strong>Multithreading y multiprocessing</strong></li>    <li><strong>Expresiones regulares (re)</strong></li>  </Lista >
            <Linea />
            <Titulo title="h2" id="herramientas-y-entorno">11. Herramientas y entorno</Titulo>
            <Lista>
              <li><strong>Ejecutar:</strong>
                python archivo.py
              </li>    <li><strong>Gestor de paquetes:</strong>
                pip install nombre_paquete
              </li>    <li>
                <strong>Entornos virtuales:</strong>
                <Codigo code={`python -m venv entorno
source entorno/bin/activate  # Linux
entorno\Scripts\activate     # Windows`} language="bash" />
              </li>
            </Lista>
      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}
export default nameabcd;
