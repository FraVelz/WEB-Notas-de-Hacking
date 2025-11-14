import{j as e,E as F,T as i,L as c,a as v,b as r,d as t,e as H,c as N,f as l}from"./index-DMQoPaND.js";import{c as A,T as S,b as n,a}from"./tabla-Btz_eBuW.js";import{C as o}from"./codigo-CPt7AhUC.js";function D(R){const s=N.c(16),{className:T}=R,E=T===void 0?"":T;let d,h;s[0]===Symbol.for("react.memo_cache_sentinel")?(d=e.jsx("li",{children:e.jsx(l,{href:"#qué-es-una-clase-en-python",children:"¿Qué es una clase en Python?"})}),h=e.jsx(l,{href:"#sintaxis-básica",children:"Sintaxis básica"}),s[0]=d,s[1]=h):(d=s[0],h=s[1]);let j,x;s[2]===Symbol.for("react.memo_cache_sentinel")?(j=e.jsxs("li",{children:[h,e.jsx(t,{children:e.jsx("li",{children:e.jsx(l,{href:"#explicación",children:"Explicación"})})})]}),x=e.jsx(l,{href:"#atributos",children:"Atributos"}),s[2]=j,s[3]=x):(j=s[2],x=s[3]);let m,p;s[4]===Symbol.for("react.memo_cache_sentinel")?(m=e.jsxs("li",{children:[x,e.jsxs(t,{children:[e.jsx("li",{children:e.jsx(l,{href:"#1-de-instancia",children:"1. De instancia"})}),e.jsx("li",{children:e.jsx(l,{href:"#2-de-clase",children:"2. De clase"})})]})]}),p=e.jsx(l,{href:"#métodos",children:"Métodos"}),s[4]=m,s[5]=p):(m=s[4],p=s[5]);let f,u,b,_;s[6]===Symbol.for("react.memo_cache_sentinel")?(b=e.jsxs("li",{children:[p,e.jsxs(t,{children:[e.jsx("li",{children:e.jsx(l,{href:"#método-de-instancia",children:"Método de instancia"})}),e.jsx("li",{children:e.jsx(l,{href:"#método-de-clase",children:"Método de clase"})}),e.jsx("li",{children:e.jsx(l,{href:"#método-estático",children:"Método estático"})})]})]}),_=e.jsx("li",{children:e.jsx(l,{href:"#herencia",children:"Herencia"})}),f=e.jsx("li",{children:e.jsx(l,{href:"#polimorfismo",children:"Polimorfismo"})}),u=e.jsx("li",{children:e.jsx(l,{href:"#encapsulación",children:"Encapsulación"})}),s[6]=f,s[7]=u,s[8]=b,s[9]=_):(f=s[6],u=s[7],b=s[8],_=s[9]);let g,y,C,P;s[10]===Symbol.for("react.memo_cache_sentinel")?(g=e.jsx("li",{children:e.jsxs(l,{href:"#propiedades-property",children:["Propiedades (",e.jsx("span",{className:"citation","data-cites":"property",children:"@property"}),")"]})}),y=e.jsx("li",{children:e.jsx(l,{href:"#composición",children:"Composición"})}),C=e.jsx("li",{children:e.jsx(l,{href:"#ejemplo-completo",children:"Ejemplo completo"})}),P=e.jsx("li",{children:e.jsx(l,{href:"#resumen-rápido",children:"Resumen rápido"})}),s[10]=g,s[11]=y,s[12]=C,s[13]=P):(g=s[10],y=s[11],C=s[12],P=s[13]);let M;return s[14]!==E?(M=e.jsxs(t,{className:E,children:[d,j,m,b,_,f,u,g,y,C,P]}),s[14]=E,s[15]=M):M=s[15],M}function q({}){return e.jsxs(e.Fragment,{children:[e.jsxs(F,{children:[e.jsx(i,{title:"h1",id:"clases-en-python",children:"Clases en Python"}),e.jsx(c,{}),e.jsx(v,{temario:D}),e.jsx(i,{title:"h2",id:"qué-es-una-clase-en-python",children:"¿Qué es una clase en Python?"}),e.jsxs(r,{children:["Una ",e.jsx("strong",{children:"clase"})," es una ",e.jsx("strong",{children:"plantilla o molde"}),"para crear ",e.jsx("strong",{children:"objetos"})," (instancias) que agrupan",e.jsx("strong",{children:"datos (atributos)"})," y ",e.jsx("strong",{children:"funciones (métodos)"})," relacionados."]}),e.jsxs(r,{children:["Los ",e.jsx("strong",{children:"objetos"})," son las copias o instancias creadas a partir de esa clase."]}),e.jsx(c,{}),e.jsx(i,{title:"h2",id:"sintaxis-básica",children:"Sintaxis básica"}),e.jsx(o,{code:`class Persona:
def __init__(self, nombre, edad):  # Constructor
self.nombre = nombre           # Atributos
self.edad = edad

def saludar(self):                 # Método
print(f"Hola, soy (self.nombre) y tengo (self.edad) años")

# Crear objeto
p1 = Persona("Francisco", 17)
p1.saludar()`,language:"python"}),e.jsx(i,{title:"h3",id:"explicación",children:"Explicación"}),e.jsxs(t,{children:[e.jsx("li",{children:"class Persona: → define la clase."}),e.jsxs("li",{children:["__init__ → ",e.jsx("strong",{children:"constructor"}),", se ejecuta al crear el objeto."]}),e.jsxs("li",{children:["self → referencia al ",e.jsx("strong",{children:"objeto actual"}),"(similar a this en otros lenguajes)."]}),e.jsxs("li",{children:["p1 → ",e.jsx("strong",{children:"instancia"})," de la clase Persona."]})]}),e.jsx(c,{}),e.jsx(i,{title:"h2",id:"atributos",children:"Atributos"}),e.jsx(i,{title:"h3",id:"de-instancia",children:"1. De instancia"}),e.jsx(r,{children:"Son únicos para cada objeto:"}),e.jsx(o,{code:`class Coche:
def __init__(self, marca):
self.marca = marca`,language:"python"}),e.jsx(i,{title:"h3",id:"de-clase",children:"2. De clase"}),e.jsxs(r,{children:["Son ",e.jsx("strong",{children:"compartidos por todas las instancias"}),":"]}),e.jsx(o,{code:`class Coche:
ruedas = 4  # atributo de clase
def __init__(self, marca):
self.marca = marca`,language:"python"}),e.jsx(o,{code:`a = Coche("Toyota")
b = Coche("Honda")
print(a.ruedas, b.ruedas)  # ambos tienen 4`,language:"python"}),e.jsx(c,{}),e.jsx(i,{title:"h2",id:"métodos",children:"Métodos"}),e.jsx(i,{title:"h3",id:"método-de-instancia",children:"Método de instancia"}),e.jsx(r,{children:"Opera sobre el objeto (self)."}),e.jsx(o,{code:`def mostrar(self):
print(self.nombre)`,language:"python"}),e.jsx(i,{title:"h3",id:"método-de-clase",children:"Método de clase"}),e.jsx(r,{children:"Opera sobre la clase, no sobre un objeto."}),e.jsx(o,{code:`@classmethod
def crear_desde_edad(cls, edad):
return cls("Desconocido", edad)`,language:"python"}),e.jsx(i,{title:"h3",id:"método-estático",children:"Método estático"}),e.jsx(r,{children:"No usa self ni cls. Funciona como una función normal dentro de la clase."}),e.jsx(o,{code:`@staticmethod
def es_mayor(edad):
return edad >= 18`,language:"python"}),e.jsx(c,{}),e.jsx(i,{title:"h2",id:"herencia",children:"Herencia"}),e.jsx(r,{children:"Permite crear una clase nueva basada en otra (reutiliza código)."}),e.jsx(o,{code:`class Animal:
def hablar(self):
print("El animal hace un sonido")

class Perro(Animal):  # Hereda de Animal
def hablar(self):
print("Guau")

p = Perro()
p.hablar()`,language:"python"}),e.jsxs(r,{children:["✔️ La clase hija ",e.jsx("strong",{children:"sobrescribe"})," métodos de la clase padre. ✔️ Se puede usar super() para llamar métodos del padre."]}),e.jsx(c,{}),e.jsx(i,{title:"h2",id:"polimorfismo",children:"Polimorfismo"}),e.jsx(r,{children:"Diferentes clases pueden usar el mismo método con comportamientos distintos:"}),e.jsx(o,{code:`class Gato:
def hablar(self): print("Miau")

class Perro:
def hablar(self): print("Guau")

for animal in [Gato(), Perro()]:
animal.hablar()`,language:"python"}),e.jsx(c,{}),e.jsx(i,{title:"h2",id:"encapsulación",children:"Encapsulación"}),e.jsx(r,{children:"Controla la visibilidad de los atributos/métodos."}),e.jsxs(A,{children:[e.jsx(S,{headers:["Tipo","Ejemplo","Acceso"]}),e.jsxs("tbody",{children:[e.jsxs(n,{children:[e.jsx(a,{children:"Público"}),e.jsx(a,{children:"self.nombre"}),e.jsx(a,{children:"libre"})]}),e.jsxs(n,{children:[e.jsx(a,{children:"Protegido"}),e.jsx(a,{children:"_nombre"}),e.jsx(a,{children:"interno/subclases"})]}),e.jsxs(n,{children:[e.jsx(a,{children:"Privado"}),e.jsx(a,{children:"__nombre"}),e.jsx(a,{children:"solo dentro de la clase"})]})]})]}),e.jsx(o,{code:`class Persona:
def __init__(self, nombre):
self.__nombre = nombre  # privado

def mostrar(self):
print(self.__nombre)`,language:"python"}),e.jsx(c,{}),e.jsxs(i,{title:"h2",id:"propiedades-property",children:["Propiedades (",e.jsx("span",{className:"citation","data-cites":"property",children:"@property"}),")"]}),e.jsx(r,{children:"Permiten acceder a métodos como sí fueran atributos."}),e.jsx(o,{code:`class Rectangulo:
def __init__(self, base, altura):
self.base = base
self.altura = altura

@property
def area(self):
return self.base * self.altura

r = Rectangulo(4, 5)
print(r.area)  # No se usa paréntesis`,language:"python"}),e.jsx(c,{}),e.jsx(i,{title:"h2",id:"composición",children:"Composición"}),e.jsx(r,{children:"Una clase contiene objetos de otras clases:"}),e.jsx(o,{code:`class Motor:
def arrancar(self):
print("Motor encendido")

class Coche:
def __init__(self):
self.motor = Motor()

c = Coche()
c.motor.arrancar()`,language:"python"}),e.jsx(c,{}),e.jsx(i,{title:"h2",id:"ejemplo-completo",children:"Ejemplo completo"}),e.jsx(o,{code:`class CuentaBancaria:
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
print(cuenta.saldo)`,language:"python"}),e.jsx(c,{}),e.jsx(i,{title:"h2",id:"resumen-rápido",children:"Resumen rápido"}),e.jsxs(A,{children:[e.jsx(S,{headers:["Concepto","Descripción"]}),e.jsxs("tbody",{children:[e.jsxs(n,{children:[e.jsx(a,{children:"class"}),e.jsx(a,{children:"Define una clase"})]}),e.jsxs(n,{children:[e.jsx(a,{children:"__init__"}),e.jsx(a,{children:"Constructor"})]}),e.jsxs(n,{children:[e.jsx(a,{children:"self"}),e.jsx(a,{children:"Referencia al objeto actual"})]}),e.jsxs(n,{children:[e.jsx(a,{children:"Atributos"}),e.jsx(a,{children:"Datos de objeto o clase"})]}),e.jsxs(n,{children:[e.jsx(a,{children:"Métodos"}),e.jsx(a,{children:"Funciones dentro de la clase"})]}),e.jsxs(n,{children:[e.jsx(a,{children:"@classmethod, @staticmethod"}),e.jsx(a,{children:"Métodos especiales"})]}),e.jsxs(n,{children:[e.jsx(a,{children:"Herencia"}),e.jsx(a,{children:"Reutilización de código"})]}),e.jsxs(n,{children:[e.jsx(a,{children:"Encapsulación"}),e.jsx(a,{children:"Control de acceso"})]}),e.jsxs(n,{children:[e.jsx(a,{children:"Polimorfismo"}),e.jsx(a,{children:"Mismo método, distinto comportamiento"})]}),e.jsxs(n,{children:[e.jsx(a,{children:"@property"}),e.jsx(a,{children:"Acceso elegante a métodos como atributos"})]})]})]})]}),e.jsx(H,{temario:D})]})}export{q as default};
