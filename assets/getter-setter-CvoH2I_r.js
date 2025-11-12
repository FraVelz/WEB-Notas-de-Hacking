import{j as e,T as s,L as t,d as a,f as r,b as n}from"./index-BWuvRKPc.js";import{c as d,T as c,b as l,a as o}from"./tabla-5KrFVZFW.js";import{C as i}from"./codigo-D-8LK2Lm.js";function p({}){return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"h1",id:"getters-y-setters",children:"Getters y Setters"}),e.jsx(t,{}),e.jsx(s,{title:"h2",id:"temario",children:"Temario"}),e.jsx(a,{children:e.jsxs("li",{children:[e.jsx(r,{href:"#getters-y-setters",children:"Getters y Setters"}),e.jsxs(a,{children:[e.jsx("li",{children:e.jsx(r,{href:"#temario",children:"Temario"})}),e.jsx("li",{children:e.jsx(r,{href:"#qué-son-los-getters-y-setters",children:"¿Qué son los getters y setters?"})}),e.jsx("li",{children:e.jsx(r,{href:"#ejemplo-básico",children:"Ejemplo básico"})}),e.jsxs("li",{children:[e.jsxs(r,{href:"#pero-python-tiene-una-forma-más-elegante--property",children:["Pero Python tiene una forma más elegante →",e.jsx("strong",{children:"@property"})]}),e.jsx(a,{children:e.jsx("li",{children:e.jsx(r,{href:"#ejemplo-con-property",children:"Ejemplo con @property"})})})]}),e.jsx("li",{children:e.jsxs(r,{href:"#ventajas-de-usar-property",children:["Ventajas de usar ",e.jsx("span",{className:"citation","data-cites":"property",children:"@property"})]})}),e.jsx("li",{children:e.jsx(r,{href:"#en-resumen",children:"En resumen"})})]})]})}),e.jsx(n,{children:e.jsx(r,{href:"./../readme.md#5-python",children:"Regresar a la Guía Principal"})}),e.jsx(t,{}),e.jsx(s,{title:"h2",id:"qué-son-los-getters-y-setters",children:"¿Qué son los getters y setters?"}),e.jsxs(a,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Getter:"})," método que ",e.jsx("strong",{children:"obtiene"}),"(lee) el valor de un atributo."]}),"    ",e.jsxs("li",{children:[e.jsx("strong",{children:"Setter:"})," método que ",e.jsx("strong",{children:"establece"}),"(modifica) el valor de un atributo."]}),"  "]}),e.jsxs(n,{children:["Se usan para ",e.jsx("strong",{children:"controlar el acceso a los atributos"})," de una clase, especialmente cuando son “protegidos” o “privados”."]}),e.jsx(t,{}),e.jsx(s,{title:"h2",id:"ejemplo-básico",children:"Ejemplo básico"}),e.jsx(i,{code:`class Persona:
def __init__(self, nombre):
self.__nombre = nombre  # atributo privado

# Getter
def get_nombre(self):
return self.__nombre

# Setter
def set_nombre(self, nuevo_nombre):
if len(nuevo_nombre) > 0:
self.__nombre = nuevo_nombre
else:
print("❌ El nombre no puede estar vacío.")`,language:"python"}),e.jsx(n,{children:"Uso:"}),e.jsx(i,{code:`p = Persona("Ana")
print(p.get_nombre())  # ✅ Ana

p.set_nombre("Luis")
print(p.get_nombre())  # ✅ Luis

p.set_nombre("")  # ❌ El nombre no puede estar vacío.`,language:"python"}),e.jsx(t,{}),e.jsxs(s,{title:"h2",id:"pero-python-tiene-una-forma-más-elegante-property",children:["Pero Python tiene una forma más elegante →",e.jsx("strong",{children:"@property"})]}),e.jsxs(n,{children:["Python permite crear ",e.jsx("em",{children:"getters"})," y ",e.jsx("em",{children:"setters"})," de manera más limpia y natural usando ",e.jsx("strong",{children:"decoradores"}),"."]}),e.jsx(s,{title:"h3",id:"ejemplo-con-property",children:"Ejemplo con @property"}),e.jsx(i,{code:`class Persona:
def __init__(self, nombre):
self.__nombre = nombre

@property
def nombre(self):
return self.__nombre

@nombre.setter
def nombre(self, nuevo_nombre):
if len(nuevo_nombre) > 0:
self.__nombre = nuevo_nombre
else:
print("❌ El nombre no puede estar vacío.")`,language:"python"}),e.jsxs(n,{children:["Ahora se usa como sí fuera un ",e.jsx("strong",{children:"atributo normal"}),":"]}),e.jsx(i,{code:`p = Persona("Carlos")

print(p.nombre)   # ✅ Llama automáticamente al getter
p.nombre = "Andrés"  # ✅ Llama automáticamente al setter

print(p.nombre)   # ✅ Andrés
p.nombre = ""     # ❌ El nombre no puede estar vacío.`,language:"python"}),e.jsx(t,{}),e.jsxs(s,{title:"h2",id:"ventajas-de-usar-property",children:["Ventajas de usar ",e.jsx("span",{className:"citation","data-cites":"property",children:"@property"})]}),e.jsx(n,{children:"✅ No cambias la forma de usar los atributos. ✅ Puedes añadir validaciones sin romper el código existente. ✅ Encapsulas correctamente los datos. ✅ Evitas accesos o cambios indebidos."}),e.jsx(t,{}),e.jsx(s,{title:"h2",id:"en-resumen",children:"En resumen"}),e.jsxs(d,{children:[e.jsx(c,{headers:["Tipo","Decorador","Se usa para","Ejemplo"]}),e.jsxs("tbody",{children:[e.jsxs(l,{children:[e.jsx(o,{children:e.jsx("strong",{children:"Getter"})}),e.jsx(o,{children:"@property"}),e.jsx(o,{children:"Leer un valor"}),e.jsx(o,{children:"obj.atributo"})]}),e.jsxs(l,{children:[e.jsx(o,{children:e.jsx("strong",{children:"Setter"})}),e.jsx(o,{children:"@atributo.setter"}),e.jsx(o,{children:"Asignar un valor"}),e.jsx(o,{children:"obj.atributo = valor"})]})]})]}),e.jsx(t,{}),e.jsx(n,{children:e.jsx(r,{href:"./../readme.md#5-python",children:"Regresar a la Guía Principal"})}),e.jsx("blockquote",{children:e.jsxs(n,{children:[e.jsx("strong",{children:"Autor:"})," Fravelz"]})})]})}export{p as default};
