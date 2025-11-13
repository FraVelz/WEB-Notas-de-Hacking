import { Tabla, TablaCabezera, TablaFila, TablaUnica } from "../../componentes/moleculas/tabla.jsx";

import Enlace from "../../componentes/atomos/enlace.jsx";
import Linea from "../../componentes/atomos/linea.jsx";
import Lista from "../../componentes/moleculas/lista.jsx";
import Texto from "./../../componentes/atomos/texto.jsx";
import Titulo from "../../componentes/moleculas/titulo.jsx";
import Codigo from "../../componentes/moleculas/codigo.jsx";
import Estructura, { TemarioCompleto } from "../../componentes/organismos/estructura.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#qué-es-una-clase-en-python">¿Qué es una clase en
        Python?</Enlace ></li>
      <li><Enlace href="#sintaxis-básica">Sintaxis básica</Enlace >
        <Lista>
          <li><Enlace href="#explicación">Explicación</Enlace ></li>
        </Lista>
      </li>
      <li><Enlace href="#atributos">Atributos</Enlace >
        <Lista>
          <li><Enlace href="#1-de-instancia">1. De instancia</Enlace ></li>
          <li><Enlace href="#2-de-clase">2. De clase</Enlace ></li>
        </Lista>
      </li>
      <li><Enlace href="#métodos">Métodos</Enlace >
        <Lista>
          <li><Enlace href="#método-de-instancia">Método de instancia</Enlace ></li>
          <li><Enlace href="#método-de-clase">Método de clase</Enlace ></li>
          <li><Enlace href="#método-estático">Método estático</Enlace ></li>
        </Lista>
      </li>
      <li><Enlace href="#herencia">Herencia</Enlace ></li>
      <li><Enlace href="#polimorfismo">Polimorfismo</Enlace ></li>
      <li><Enlace href="#encapsulación">Encapsulación</Enlace ></li>
      <li><Enlace href="#propiedades-property">Propiedades (<span className="citation"
        data-cites="property">@property</span>)</Enlace ></li>
      <li><Enlace href="#composición">Composición</Enlace ></li>
      <li><Enlace href="#ejemplo-completo">Ejemplo completo</Enlace ></li>
      <li><Enlace href="#resumen-rápido">Resumen rápido</Enlace ></li>
    </Lista>
  );
}


function nameabcd({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" id="clases-en-python">Clases en Python</Titulo>
        <Linea />

        <TemarioCompleto temario={Temario} />

        <Titulo title="h2" id="qué-es-una-clase-en-python">¿Qué es una clase en Python?</Titulo>
        <Texto>Una <strong>clase</strong> es una <strong>plantilla o molde</strong>
          para crear <strong>objetos</strong> (instancias) que agrupan
          <strong>datos (atributos)</strong> y <strong>funciones
            (métodos)</strong> relacionados.
        </Texto>
        <Texto>Los <strong>objetos</strong> son las copias o instancias creadas a
          partir de esa clase.</Texto>
        <Linea />
        <Titulo title="h2" id="sintaxis-básica">Sintaxis básica</Titulo>
        <Codigo code={`class Persona:
def __init__(self, nombre, edad):  # Constructor
self.nombre = nombre           # Atributos
self.edad = edad

def saludar(self):                 # Método
print(f"Hola, soy (self.nombre) y tengo (self.edad) años")

# Crear objeto
p1 = Persona("Francisco", 17)
p1.saludar()`} language="python" />
        <Titulo title="h3" id="explicación">Explicación</Titulo>
        <Lista>
          <li>class Persona: → define la clase.</li>
          <li>__init__ → <strong>constructor</strong>, se ejecuta al
            crear el objeto.</li>
          <li>self → referencia al <strong>objeto actual</strong>
            (similar a this en otros lenguajes).</li>
          <li>p1 → <strong>instancia</strong> de la clase
            Persona.
          </li>
        </Lista>
        <Linea />
        <Titulo title="h2" id="atributos">Atributos</Titulo>
        <Titulo title="h3" id="de-instancia">1. De instancia</Titulo>
        <Texto>Son únicos para cada objeto:</Texto>
        <Codigo code={`class Coche:
def __init__(self, marca):
self.marca = marca`} language="python" />
        <Titulo title="h3" id="de-clase">2. De clase</Titulo>
        <Texto>Son <strong>compartidos por todas las instancias</strong>:</Texto>
        <Codigo code={`class Coche:
ruedas = 4  # atributo de clase
def __init__(self, marca):
self.marca = marca`} language="python" />
        <Codigo code={`a = Coche("Toyota")
b = Coche("Honda")
print(a.ruedas, b.ruedas)  # ambos tienen 4`} language="python" />
        <Linea />
        <Titulo title="h2" id="métodos">Métodos</Titulo>
        <Titulo title="h3" id="método-de-instancia">Método de instancia</Titulo>
        <Texto>Opera sobre el objeto (self).</Texto>
        <Codigo code={`def mostrar(self):
print(self.nombre)`} language="python" />
        <Titulo title="h3" id="método-de-clase">Método de clase</Titulo>
        <Texto>Opera sobre la clase, no sobre un objeto.</Texto>
        <Codigo code={`@classmethod
def crear_desde_edad(cls, edad):
return cls("Desconocido", edad)`} language="python" />
        <Titulo title="h3" id="método-estático">Método estático</Titulo>
        <Texto>No usa self ni cls. Funciona como una
          función normal dentro de la clase.</Texto>
        <Codigo code={`@staticmethod
def es_mayor(edad):
return edad >= 18`} language="python" />
        <Linea />
        <Titulo title="h2" id="herencia">Herencia</Titulo>
        <Texto>Permite crear una clase nueva basada en otra (reutiliza código).</Texto>
        <Codigo code={`class Animal:
def hablar(self):
print("El animal hace un sonido")

class Perro(Animal):  # Hereda de Animal
def hablar(self):
print("Guau")

p = Perro()
p.hablar()`} language="python" />
        <Texto>✔️ La clase hija <strong>sobrescribe</strong> métodos de la clase
          padre. ✔️ Se puede usar super() para llamar métodos del
          padre.</Texto>
        <Linea />
        <Titulo title="h2" id="polimorfismo">Polimorfismo</Titulo>
        <Texto>Diferentes clases pueden usar el mismo método con comportamientos
          distintos:</Texto>
        <Codigo code={`class Gato:
def hablar(self): print("Miau")

class Perro:
def hablar(self): print("Guau")

for animal in [Gato(), Perro()]:
animal.hablar()`} language="python" />
        <Linea />
        <Titulo title="h2" id="encapsulación">Encapsulación</Titulo>
        <Texto>Controla la visibilidad de los atributos/métodos.</Texto>
        <Tabla>
          <TablaCabezera headers={["Tipo", "Ejemplo", "Acceso"]} />

          <tbody>
            <TablaFila>
              <TablaUnica>Público</TablaUnica>
              <TablaUnica>self.nombre</TablaUnica>
              <TablaUnica>libre</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Protegido</TablaUnica>
              <TablaUnica>_nombre</TablaUnica>
              <TablaUnica>interno/subclases</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Privado</TablaUnica>
              <TablaUnica>__nombre</TablaUnica>
              <TablaUnica>solo dentro de la clase</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>
        <Codigo code={`class Persona:
def __init__(self, nombre):
self.__nombre = nombre  # privado

def mostrar(self):
print(self.__nombre)`} language="python" />
        <Linea />
        <Titulo title="h2" id="propiedades-property">Propiedades (<span className="citation" data-cites="property">@property</span>)</Titulo>
        <Texto>Permiten acceder a métodos como sí fueran atributos.</Texto>
        <Codigo code={`class Rectangulo:
def __init__(self, base, altura):
self.base = base
self.altura = altura

@property
def area(self):
return self.base * self.altura

r = Rectangulo(4, 5)
print(r.area)  # No se usa paréntesis`} language="python" />
        <Linea />
        <Titulo title="h2" id="composición">Composición</Titulo>
        <Texto>Una clase contiene objetos de otras clases:</Texto>
        <Codigo code={`class Motor:
def arrancar(self):
print("Motor encendido")

class Coche:
def __init__(self):
self.motor = Motor()

c = Coche()
c.motor.arrancar()`} language="python" />
        <Linea />
        <Titulo title="h2" id="ejemplo-completo">Ejemplo completo</Titulo>
        <Codigo code={`class CuentaBancaria:
tasa_interes = 0.05  # atributo de clase

def __init__(self, titular, saldo=0):
self.titular = titular
self.__saldo = saldo  # privado

def depositar(self, cantidad):
self.__saldo += cantidad

def retirar(self, cantidad):
if cantidad <= self.__saldo:
self.__saldo -= cantidad
else:
print("Fondos insuficientes")

@property
def saldo(self):
return self.__saldo

# Uso
cuenta = CuentaBancaria("Francisco", 1000)
cuenta.depositar(500)
cuenta.retirar(200)
print(cuenta.saldo)`} language="python" />
        <Linea />
        <Titulo title="h2" id="resumen-rápido">Resumen rápido</Titulo>
        <Tabla>
          <TablaCabezera headers={["Concepto", "Descripción"]} />

          <tbody>
            <TablaFila>
              <TablaUnica>class</TablaUnica>
              <TablaUnica>Define una clase</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>__init__</TablaUnica>
              <TablaUnica>Constructor</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>self</TablaUnica>
              <TablaUnica>Referencia al objeto actual</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Atributos</TablaUnica>
              <TablaUnica>Datos de objeto o clase</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Métodos</TablaUnica>
              <TablaUnica>Funciones dentro de la clase</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>@classmethod, @staticmethod</TablaUnica>
              <TablaUnica>Métodos especiales</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Herencia</TablaUnica>
              <TablaUnica>Reutilización de código</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Encapsulación</TablaUnica>
              <TablaUnica>Control de acceso</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Polimorfismo</TablaUnica>
              <TablaUnica>Mismo método, distinto comportamiento</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>@property</TablaUnica>
              <TablaUnica>Acceso elegante a métodos como atributos</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>
      </Estructura>

      <TemarioCompleto temario={Temario} />
    </>
  );
}
export default nameabcd;
