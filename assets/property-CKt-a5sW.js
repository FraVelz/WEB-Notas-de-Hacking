import{j as e,T as o,b as r,L as i,d as l,f as n}from"./index-CpeyxQ3i.js";import{c,T as d,b as t,a as s}from"./tabla-CtO-7Jid.js";import{C as a}from"./codigo-D2If7uI6.js";function j({}){return e.jsxs(e.Fragment,{children:[e.jsxs(o,{title:"h1",id:"decorador-property",children:["Decorador ",e.jsx("span",{className:"citation","data-cites":"property",children:"@property"})]}),e.jsxs(r,{children:["@property se usa para ",e.jsx("strong",{children:"encapsular atributos"}),", ",e.jsx("strong",{children:"añadir validaciones o lógica interna"}),", pero sin cambiar la forma natural de acceder o modificar una variable."]}),e.jsx(i,{}),e.jsx(o,{title:"h2",id:"temario",children:"Temario"}),e.jsx(l,{children:e.jsxs("li",{children:[e.jsxs(n,{href:"#decorador-property",children:["Decorador ",e.jsx("span",{className:"citation","data-cites":"property",children:"@property"})]}),e.jsxs(l,{children:[e.jsx("li",{children:e.jsx(n,{href:"#temario",children:"Temario"})}),e.jsx("li",{children:e.jsx(n,{href:"#qué-hace-property-en-python",children:"¿Qué hace @property en Python?"})}),e.jsx("li",{children:e.jsx(n,{href:"#ejemplo-básico-sin-property",children:"Ejemplo básico sin @property"})}),e.jsx("li",{children:e.jsx(n,{href:"#con-property",children:"Con @property"})}),e.jsx("li",{children:e.jsxs(n,{href:"#agregando-un-setter-para-modificar-el-valor",children:["Agregando un",e.jsx("strong",{children:"setter"})," para modificar el valor"]})}),e.jsx("li",{children:e.jsx(n,{href:"#también-existe-el-deleter-opcional",children:"También existe el deleter (opcional)"})}),e.jsx("li",{children:e.jsx(n,{href:"#en-resumen",children:"En resumen"})})]})]})}),e.jsx(r,{children:e.jsx(n,{href:"./../readme.md#5-python",children:"Regresar a la Guía Principal"})}),e.jsx(i,{}),e.jsx(o,{title:"h2",id:"qué-hace-property-en-python",children:"¿Qué hace @property en Python?"}),e.jsxs(r,{children:["El decorador ",e.jsx("strong",{children:"@property"})," convierte un",e.jsx("strong",{children:"método de una clase"})," en un ",e.jsx("strong",{children:"atributo “solo de lectura”"})," (al menos inicialmente)."]}),e.jsxs(r,{children:["Sirve para ",e.jsx("strong",{children:"controlar cómo se accede a un atributo"}),", pero permitiendo que el código ",e.jsx("strong",{children:"parezca estar accediendo directamente a una variable"}),"."]}),e.jsx(r,{children:"En otras palabras:"}),e.jsx("blockquote",{children:e.jsxs(r,{children:["Permite usar ",e.jsx("em",{children:"métodos"})," como sí fueran ",e.jsx("em",{children:"atributos"}),",",e.jsx("strong",{children:"sin cambiar la sintaxis de acceso"}),"."]})}),e.jsx(i,{}),e.jsx(o,{title:"h2",id:"ejemplo-básico-sin-property",children:"Ejemplo básico sin @property"}),e.jsx(a,{code:`class Persona:
def __init__(self, nombre):
self.__nombre = nombre  # atributo privado

def get_nombre(self):
return self.__nombre`,language:"python"}),e.jsx(r,{children:"Uso:"}),e.jsx(a,{code:`p = Persona("Ana")
print(p.get_nombre())  # ✅ Funciona`,language:"python"}),e.jsxs(r,{children:["Pero se ve ",e.jsx("em",{children:"feo"})," tener que escribir .get_nombre() cada vez. Ahí entra @property."]}),e.jsx(i,{}),e.jsx(o,{title:"h2",id:"con-property",children:"Con @property"}),e.jsx(a,{code:`class Persona:
def __init__(self, nombre):
self.__nombre = nombre

@property
def nombre(self):
return self.__nombre`,language:"python"}),e.jsx(r,{children:"Uso:"}),e.jsx(a,{code:`p = Persona("Luis")
print(p.nombre)  # ✅ Sin paréntesis, parece un atributo`,language:"python"}),e.jsxs(l,{children:[e.jsx("li",{children:"Python llama automáticamente al método nombre() cuando escribes p.nombre."}),"    ",e.jsx("li",{children:"Es solo de lectura por ahora (no se puede cambiar el valor directamente)."}),"  "]}),e.jsx(i,{}),e.jsxs(o,{title:"h2",id:"agregando-un-setter-para-modificar-el-valor",children:["Agregando un",e.jsx("strong",{children:"setter"})," para modificar el valor"]}),e.jsx(a,{code:`class Persona:
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
print("❌ El nombre no puede estar vacío.")`,language:"python"}),e.jsx(r,{children:"Uso:"}),e.jsx(a,{code:`p = Persona("Carlos")
print(p.nombre)   # ✅ Getter
p.nombre = "Andrés"  # ✅ Setter
print(p.nombre)   # Andrés
p.nombre = ""     # ❌ El nombre no puede estar vacío.`,language:"python"}),e.jsx(i,{}),e.jsx(o,{title:"h2",id:"también-existe-el-deleter-opcional",children:"También existe el deleter (opcional)"}),e.jsx(a,{code:`@nombre.deleter
def nombre(self):
print("Eliminando el nombre...")
del self.__nombre`,language:"python"}),e.jsx(i,{}),e.jsx(o,{title:"h2",id:"en-resumen",children:"En resumen"}),e.jsxs(c,{children:[e.jsx(d,{headers:["Decorador","Función","Qué hace"]}),e.jsxs("tbody",{children:[e.jsxs(t,{children:[e.jsx(s,{children:"@property"}),e.jsx(s,{children:"Getter"}),e.jsx(s,{children:"Devuelve el valor (lectura)"})]}),e.jsxs(t,{children:[e.jsx(s,{children:"@atributo.setter"}),e.jsx(s,{children:"Setter"}),e.jsx(s,{children:"Modifica el valor (escritura)"})]}),e.jsxs(t,{children:[e.jsx(s,{children:"@atributo.deleter"}),e.jsx(s,{children:"Deleter"}),e.jsx(s,{children:"Elimina el atributo"})]})]})]}),e.jsx(i,{}),e.jsx(r,{children:e.jsx(n,{href:"./../readme.md#5-python",children:"Regresar a la Guía Principal"})}),e.jsx("blockquote",{children:e.jsxs(r,{children:[e.jsx("strong",{children:"Autor:"})," Fravelz"]})})]})}export{j as default};
