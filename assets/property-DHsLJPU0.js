import{j as e,E as _,T as o,b as n,L as t,a as g,d as b,e as v,c as E,f as a}from"./index-CkBmp7G8.js";import{c as T,T as P,b as j,a as s}from"./tabla-DhckDj_H.js";import{C as i}from"./codigo-B1-Qus_U.js";function f(y){const r=E.c(7),{className:u}=y,x=u===void 0?"":u;let l;r[0]===Symbol.for("react.memo_cache_sentinel")?(l=e.jsxs(a,{href:"#decorador-property",children:["Decorador ",e.jsx("span",{className:"citation","data-cites":"property",children:"@property"})]}),r[0]=l):l=r[0];let c,d,p;r[1]===Symbol.for("react.memo_cache_sentinel")?(c=e.jsx("li",{children:e.jsx(a,{href:"#qué-hace-property-en-python",children:"¿Qué hace @property en Python?"})}),d=e.jsx("li",{children:e.jsx(a,{href:"#ejemplo-básico-sin-property",children:"Ejemplo básico sin @property"})}),p=e.jsx("li",{children:e.jsx(a,{href:"#con-property",children:"Con @property"})}),r[1]=c,r[2]=d,r[3]=p):(c=r[1],d=r[2],p=r[3]);let m;r[4]===Symbol.for("react.memo_cache_sentinel")?(m=e.jsxs("li",{children:[l,e.jsxs(b,{children:[c,d,p,e.jsx("li",{children:e.jsxs(a,{href:"#agregando-un-setter-para-modificar-el-valor",children:["Agregando un",e.jsx("strong",{children:"setter"})," para modificar el valor"]})}),e.jsx("li",{children:e.jsx(a,{href:"#también-existe-el-deleter-opcional",children:"También existe el deleter (opcional)"})}),e.jsx("li",{children:e.jsx(a,{href:"#en-resumen",children:"En resumen"})})]})]}),r[4]=m):m=r[4];let h;return r[5]!==x?(h=e.jsx(b,{className:x,children:m}),r[5]=x,r[6]=h):h=r[6],h}function q({}){return e.jsxs(e.Fragment,{children:[e.jsxs(_,{children:[e.jsxs(o,{title:"h1",id:"decorador-property",children:["Decorador ",e.jsx("span",{className:"citation","data-cites":"property",children:"@property"})]}),e.jsxs(n,{children:["@property se usa para ",e.jsx("strong",{children:"encapsular atributos"}),", ",e.jsx("strong",{children:"añadir validaciones o lógica interna"}),", pero sin cambiar la forma natural de acceder o modificar una variable."]}),e.jsx(t,{}),e.jsx(g,{temario:f}),e.jsx(o,{title:"h2",id:"qué-hace-property-en-python",children:"¿Qué hace @property en Python?"}),e.jsxs(n,{children:["El decorador ",e.jsx("strong",{children:"@property"})," convierte un",e.jsx("strong",{children:"método de una clase"})," en un ",e.jsx("strong",{children:"atributo “solo de lectura”"})," (al menos inicialmente)."]}),e.jsxs(n,{children:["Sirve para ",e.jsx("strong",{children:"controlar cómo se accede a un atributo"}),", pero permitiendo que el código ",e.jsx("strong",{children:"parezca estar accediendo directamente a una variable"}),"."]}),e.jsx(n,{children:"En otras palabras:"}),e.jsx("blockquote",{children:e.jsxs(n,{children:["Permite usar ",e.jsx("em",{children:"métodos"})," como sí fueran ",e.jsx("em",{children:"atributos"}),",",e.jsx("strong",{children:"sin cambiar la sintaxis de acceso"}),"."]})}),e.jsx(t,{}),e.jsx(o,{title:"h2",id:"ejemplo-básico-sin-property",children:"Ejemplo básico sin @property"}),e.jsx(i,{code:`class Persona:
def __init__(self, nombre):
self.__nombre = nombre  # atributo privado

def get_nombre(self):
return self.__nombre`,language:"python"}),e.jsx(n,{children:"Uso:"}),e.jsx(i,{code:`p = Persona("Ana")
print(p.get_nombre())  # ✅ Funciona`,language:"python"}),e.jsxs(n,{children:["Pero se ve ",e.jsx("em",{children:"feo"})," tener que escribir .get_nombre() cada vez. Ahí entra @property."]}),e.jsx(t,{}),e.jsx(o,{title:"h2",id:"con-property",children:"Con @property"}),e.jsx(i,{code:`class Persona:
def __init__(self, nombre):
self.__nombre = nombre

@property
def nombre(self):
return self.__nombre`,language:"python"}),e.jsx(n,{children:"Uso:"}),e.jsx(i,{code:`p = Persona("Luis")
print(p.nombre)  # ✅ Sin paréntesis, parece un atributo`,language:"python"}),e.jsxs(b,{children:[e.jsx("li",{children:"Python llama automáticamente al método nombre() cuando escribes p.nombre."}),"    ",e.jsx("li",{children:"Es solo de lectura por ahora (no se puede cambiar el valor directamente)."}),"  "]}),e.jsx(t,{}),e.jsxs(o,{title:"h2",id:"agregando-un-setter-para-modificar-el-valor",children:["Agregando un",e.jsx("strong",{children:"setter"})," para modificar el valor"]}),e.jsx(i,{code:`class Persona:
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
print("❌ El nombre no puede estar vacío.")`,language:"python"}),e.jsx(n,{children:"Uso:"}),e.jsx(i,{code:`p = Persona("Carlos")
print(p.nombre)   # ✅ Getter
p.nombre = "Andrés"  # ✅ Setter
print(p.nombre)   # Andrés
p.nombre = ""     # ❌ El nombre no puede estar vacío.`,language:"python"}),e.jsx(t,{}),e.jsx(o,{title:"h2",id:"también-existe-el-deleter-opcional",children:"También existe el deleter (opcional)"}),e.jsx(i,{code:`@nombre.deleter
def nombre(self):
print("Eliminando el nombre...")
del self.__nombre`,language:"python"}),e.jsx(t,{}),e.jsx(o,{title:"h2",id:"en-resumen",children:"En resumen"}),e.jsxs(T,{children:[e.jsx(P,{headers:["Decorador","Función","Qué hace"]}),e.jsxs("tbody",{children:[e.jsxs(j,{children:[e.jsx(s,{children:"@property"}),e.jsx(s,{children:"Getter"}),e.jsx(s,{children:"Devuelve el valor (lectura)"})]}),e.jsxs(j,{children:[e.jsx(s,{children:"@atributo.setter"}),e.jsx(s,{children:"Setter"}),e.jsx(s,{children:"Modifica el valor (escritura)"})]}),e.jsxs(j,{children:[e.jsx(s,{children:"@atributo.deleter"}),e.jsx(s,{children:"Deleter"}),e.jsx(s,{children:"Elimina el atributo"})]})]})]})]}),e.jsx(v,{temario:f})]})}export{q as default};
