import{j as e,T as a,L as n,d as c,f as i,b as r}from"./index-BWuvRKPc.js";import{c as d,T as t,b as l,a as s}from"./tabla-5KrFVZFW.js";import{C as o}from"./codigo-D-8LK2Lm.js";function p({}){return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"h1",id:"clases-en-python",children:"Clases en Python"}),e.jsx(n,{}),e.jsx(a,{title:"h2",id:"temario",children:"Temario"}),e.jsx(c,{children:e.jsxs("li",{children:[e.jsx(i,{href:"#clases-en-python",children:"Clases en Python"}),e.jsxs(c,{children:[e.jsx("li",{children:e.jsx(i,{href:"#temario",children:"Temario"})}),e.jsx("li",{children:e.jsx(i,{href:"#qué-es-una-clase-en-python",children:"¿Qué es una clase en Python?"})}),e.jsxs("li",{children:[e.jsx(i,{href:"#sintaxis-básica",children:"Sintaxis básica"}),e.jsx(c,{children:e.jsx("li",{children:e.jsx(i,{href:"#explicación",children:"Explicación"})})})]}),e.jsxs("li",{children:[e.jsx(i,{href:"#atributos",children:"Atributos"}),e.jsxs(c,{children:[e.jsx("li",{children:e.jsx(i,{href:"#1-de-instancia",children:"1. De instancia"})}),e.jsx("li",{children:e.jsx(i,{href:"#2-de-clase",children:"2. De clase"})})]})]}),e.jsxs("li",{children:[e.jsx(i,{href:"#métodos",children:"Métodos"}),e.jsxs(c,{children:[e.jsx("li",{children:e.jsx(i,{href:"#método-de-instancia",children:"Método de instancia"})}),e.jsx("li",{children:e.jsx(i,{href:"#método-de-clase",children:"Método de clase"})}),e.jsx("li",{children:e.jsx(i,{href:"#método-estático",children:"Método estático"})})]})]}),e.jsx("li",{children:e.jsx(i,{href:"#herencia",children:"Herencia"})}),e.jsx("li",{children:e.jsx(i,{href:"#polimorfismo",children:"Polimorfismo"})}),e.jsx("li",{children:e.jsx(i,{href:"#encapsulación",children:"Encapsulación"})}),e.jsx("li",{children:e.jsxs(i,{href:"#propiedades-property",children:["Propiedades (",e.jsx("span",{className:"citation","data-cites":"property",children:"@property"}),")"]})}),e.jsx("li",{children:e.jsx(i,{href:"#composición",children:"Composición"})}),e.jsx("li",{children:e.jsx(i,{href:"#ejemplo-completo",children:"Ejemplo completo"})}),e.jsx("li",{children:e.jsx(i,{href:"#resumen-rápido",children:"Resumen rápido"})})]})]})}),e.jsx(r,{children:e.jsx(i,{href:"./../readme.md#5-python",children:"Regresar a la Guía Principal"})}),e.jsx(n,{}),e.jsx(a,{title:"h2",id:"qué-es-una-clase-en-python",children:"¿Qué es una clase en Python?"}),e.jsxs(r,{children:["Una ",e.jsx("strong",{children:"clase"})," es una ",e.jsx("strong",{children:"plantilla o molde"}),"para crear ",e.jsx("strong",{children:"objetos"})," (instancias) que agrupan",e.jsx("strong",{children:"datos (atributos)"})," y ",e.jsx("strong",{children:"funciones (métodos)"})," relacionados."]}),e.jsxs(r,{children:["Los ",e.jsx("strong",{children:"objetos"})," son las copias o instancias creadas a partir de esa clase."]}),e.jsx(n,{}),e.jsx(a,{title:"h2",id:"sintaxis-básica",children:"Sintaxis básica"}),e.jsx(o,{code:`class Persona:
def __init__(self, nombre, edad):  # Constructor
self.nombre = nombre           # Atributos
self.edad = edad

def saludar(self):                 # Método
print(f"Hola, soy (self.nombre) y tengo (self.edad) años")

# Crear objeto
p1 = Persona("Francisco", 17)
p1.saludar()`,language:"python"}),e.jsx(a,{title:"h3",id:"explicación",children:"Explicación"}),e.jsxs(c,{children:[e.jsx("li",{children:"class Persona: → define la clase."}),e.jsxs("li",{children:["__init__ → ",e.jsx("strong",{children:"constructor"}),", se ejecuta al crear el objeto."]}),e.jsxs("li",{children:["self → referencia al ",e.jsx("strong",{children:"objeto actual"}),"(similar a this en otros lenguajes)."]}),e.jsxs("li",{children:["p1 → ",e.jsx("strong",{children:"instancia"})," de la clase Persona."]})]}),e.jsx(n,{}),e.jsx(a,{title:"h2",id:"atributos",children:"Atributos"}),e.jsx(a,{title:"h3",id:"de-instancia",children:"1. De instancia"}),e.jsx(r,{children:"Son únicos para cada objeto:"}),e.jsx(o,{code:`class Coche:
def __init__(self, marca):
self.marca = marca`,language:"python"}),e.jsx(a,{title:"h3",id:"de-clase",children:"2. De clase"}),e.jsxs(r,{children:["Son ",e.jsx("strong",{children:"compartidos por todas las instancias"}),":"]}),e.jsx(o,{code:`class Coche:
ruedas = 4  # atributo de clase
def __init__(self, marca):
self.marca = marca`,language:"python"}),e.jsx(o,{code:`a = Coche("Toyota")
b = Coche("Honda")
print(a.ruedas, b.ruedas)  # ambos tienen 4`,language:"python"}),e.jsx(n,{}),e.jsx(a,{title:"h2",id:"métodos",children:"Métodos"}),e.jsx(a,{title:"h3",id:"método-de-instancia",children:"Método de instancia"}),e.jsx(r,{children:"Opera sobre el objeto (self)."}),e.jsx(o,{code:`def mostrar(self):
print(self.nombre)`,language:"python"}),e.jsx(a,{title:"h3",id:"método-de-clase",children:"Método de clase"}),e.jsx(r,{children:"Opera sobre la clase, no sobre un objeto."}),e.jsx(o,{code:`@classmethod
def crear_desde_edad(cls, edad):
return cls("Desconocido", edad)`,language:"python"}),e.jsx(a,{title:"h3",id:"método-estático",children:"Método estático"}),e.jsx(r,{children:"No usa self ni cls. Funciona como una función normal dentro de la clase."}),e.jsx(o,{code:`@staticmethod
def es_mayor(edad):
return edad >= 18`,language:"python"}),e.jsx(n,{}),e.jsx(a,{title:"h2",id:"herencia",children:"Herencia"}),e.jsx(r,{children:"Permite crear una clase nueva basada en otra (reutiliza código)."}),e.jsx(o,{code:`class Animal:
def hablar(self):
print("El animal hace un sonido")

class Perro(Animal):  # Hereda de Animal
def hablar(self):
print("Guau")

p = Perro()
p.hablar()`,language:"python"}),e.jsxs(r,{children:["✔️ La clase hija ",e.jsx("strong",{children:"sobrescribe"})," métodos de la clase padre. ✔️ Se puede usar super() para llamar métodos del padre."]}),e.jsx(n,{}),e.jsx(a,{title:"h2",id:"polimorfismo",children:"Polimorfismo"}),e.jsx(r,{children:"Diferentes clases pueden usar el mismo método con comportamientos distintos:"}),e.jsx(o,{code:`class Gato:
def hablar(self): print("Miau")

class Perro:
def hablar(self): print("Guau")

for animal in [Gato(), Perro()]:
animal.hablar()`,language:"python"}),e.jsx(n,{}),e.jsx(a,{title:"h2",id:"encapsulación",children:"Encapsulación"}),e.jsx(r,{children:"Controla la visibilidad de los atributos/métodos."}),e.jsxs(d,{children:[e.jsx(t,{headers:["Tipo","Ejemplo","Acceso"]}),e.jsxs("tbody",{children:[e.jsxs(l,{children:[e.jsx(s,{children:"Público"}),e.jsx(s,{children:"self.nombre"}),e.jsx(s,{children:"libre"})]}),e.jsxs(l,{children:[e.jsx(s,{children:"Protegido"}),e.jsx(s,{children:"_nombre"}),e.jsx(s,{children:"interno/subclases"})]}),e.jsxs(l,{children:[e.jsx(s,{children:"Privado"}),e.jsx(s,{children:"__nombre"}),e.jsx(s,{children:"solo dentro de la clase"})]})]})]}),e.jsx(o,{code:`class Persona:
def __init__(self, nombre):
self.__nombre = nombre  # privado

def mostrar(self):
print(self.__nombre)`,language:"python"}),e.jsx(n,{}),e.jsxs(a,{title:"h2",id:"propiedades-property",children:["Propiedades (",e.jsx("span",{className:"citation","data-cites":"property",children:"@property"}),")"]}),e.jsx(r,{children:"Permiten acceder a métodos como sí fueran atributos."}),e.jsx(o,{code:`class Rectangulo:
def __init__(self, base, altura):
self.base = base
self.altura = altura

@property
def area(self):
return self.base * self.altura

r = Rectangulo(4, 5)
print(r.area)  # No se usa paréntesis`,language:"python"}),e.jsx(n,{}),e.jsx(a,{title:"h2",id:"composición",children:"Composición"}),e.jsx(r,{children:"Una clase contiene objetos de otras clases:"}),e.jsx(o,{code:`class Motor:
def arrancar(self):
print("Motor encendido")

class Coche:
def __init__(self):
self.motor = Motor()

c = Coche()
c.motor.arrancar()`,language:"python"}),e.jsx(n,{}),e.jsx(a,{title:"h2",id:"ejemplo-completo",children:"Ejemplo completo"}),e.jsx(o,{code:`class CuentaBancaria:
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
print(cuenta.saldo)`,language:"python"}),e.jsx(n,{}),e.jsx(a,{title:"h2",id:"resumen-rápido",children:"Resumen rápido"}),e.jsxs(d,{children:[e.jsx(t,{headers:["Concepto","Descripción"]}),e.jsxs("tbody",{children:[e.jsxs(l,{children:[e.jsx(s,{children:"class"}),e.jsx(s,{children:"Define una clase"})]}),e.jsxs(l,{children:[e.jsx(s,{children:"__init__"}),e.jsx(s,{children:"Constructor"})]}),e.jsxs(l,{children:[e.jsx(s,{children:"self"}),e.jsx(s,{children:"Referencia al objeto actual"})]}),e.jsxs(l,{children:[e.jsx(s,{children:"Atributos"}),e.jsx(s,{children:"Datos de objeto o clase"})]}),e.jsxs(l,{children:[e.jsx(s,{children:"Métodos"}),e.jsx(s,{children:"Funciones dentro de la clase"})]}),e.jsxs(l,{children:[e.jsx(s,{children:"@classmethod, @staticmethod"}),e.jsx(s,{children:"Métodos especiales"})]}),e.jsxs(l,{children:[e.jsx(s,{children:"Herencia"}),e.jsx(s,{children:"Reutilización de código"})]}),e.jsxs(l,{children:[e.jsx(s,{children:"Encapsulación"}),e.jsx(s,{children:"Control de acceso"})]}),e.jsxs(l,{children:[e.jsx(s,{children:"Polimorfismo"}),e.jsx(s,{children:"Mismo método, distinto comportamiento"})]}),e.jsxs(l,{children:[e.jsx(s,{children:"@property"}),e.jsx(s,{children:"Acceso elegante a métodos como atributos"})]})]})]}),e.jsx(n,{}),e.jsx(r,{children:e.jsx(i,{href:"./../readme.md#5-python",children:"Regresar a la Guía Principal"})}),e.jsx("blockquote",{children:e.jsxs(r,{children:[e.jsx("strong",{children:"Autor:"})," Fravelz"]})})]})}export{p as default};
