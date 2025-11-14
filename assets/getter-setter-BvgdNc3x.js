import{j as e,E as g,T as t,L as o,a as v,d as x,b as a,e as E,c as S,f as n}from"./index-DMQoPaND.js";import{c as T,T as P,b as f,a as s}from"./tabla-Btz_eBuW.js";import{C as j}from"./codigo-CPt7AhUC.js";function _(y){const r=S.c(8),{className:b}=y,u=b===void 0?"":b;let l;r[0]===Symbol.for("react.memo_cache_sentinel")?(l=e.jsx(n,{href:"#getters-y-setters",children:"Getters y Setters"}),r[0]=l):l=r[0];let i,c;r[1]===Symbol.for("react.memo_cache_sentinel")?(i=e.jsx("li",{children:e.jsx(n,{href:"#qué-son-los-getters-y-setters",children:"¿Qué son los getters y setters?"})}),c=e.jsx("li",{children:e.jsx(n,{href:"#ejemplo-básico",children:"Ejemplo básico"})}),r[1]=i,r[2]=c):(i=r[1],c=r[2]);let d;r[3]===Symbol.for("react.memo_cache_sentinel")?(d=e.jsxs(n,{href:"#pero-python-tiene-una-forma-más-elegante--property",children:["Pero Python tiene una forma más elegante →",e.jsx("strong",{children:"@property"})]}),r[3]=d):d=r[3];let m;r[4]===Symbol.for("react.memo_cache_sentinel")?(m=e.jsxs("li",{children:[d,e.jsx(x,{children:e.jsx("li",{children:e.jsx(n,{href:"#ejemplo-con-property",children:"Ejemplo con @property"})})})]}),r[4]=m):m=r[4];let h;r[5]===Symbol.for("react.memo_cache_sentinel")?(h=e.jsxs("li",{children:[l,e.jsxs(x,{children:[i,c,m,e.jsx("li",{children:e.jsxs(n,{href:"#ventajas-de-usar-property",children:["Ventajas de usar ",e.jsx("span",{className:"citation","data-cites":"property",children:"@property"})]})}),e.jsx("li",{children:e.jsx(n,{href:"#en-resumen",children:"En resumen"})})]})]}),r[5]=h):h=r[5];let p;return r[6]!==u?(p=e.jsx(x,{className:u,children:h}),r[6]=u,r[7]=p):p=r[7],p}function G({}){return e.jsxs(e.Fragment,{children:[e.jsxs(g,{children:[e.jsx(t,{title:"h1",id:"getters-y-setters",children:"Getters y Setters"}),e.jsx(o,{}),e.jsx(v,{temario:_}),e.jsx(t,{title:"h2",id:"qué-son-los-getters-y-setters",children:"¿Qué son los getters y setters?"}),e.jsxs(x,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Getter:"})," método que ",e.jsx("strong",{children:"obtiene"}),"(lee) el valor de un atributo."]}),"    ",e.jsxs("li",{children:[e.jsx("strong",{children:"Setter:"})," método que ",e.jsx("strong",{children:"establece"}),"(modifica) el valor de un atributo."]}),"  "]}),e.jsxs(a,{children:["Se usan para ",e.jsx("strong",{children:"controlar el acceso a los atributos"})," de una clase, especialmente cuando son “protegidos” o “privados”."]}),e.jsx(o,{}),e.jsx(t,{title:"h2",id:"ejemplo-básico",children:"Ejemplo básico"}),e.jsx(j,{code:`class Persona:
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
print("❌ El nombre no puede estar vacío.")`,language:"python"}),e.jsx(a,{children:"Uso:"}),e.jsx(j,{code:`p = Persona("Ana")
print(p.get_nombre())  # ✅ Ana

p.set_nombre("Luis")
print(p.get_nombre())  # ✅ Luis

p.set_nombre("")  # ❌ El nombre no puede estar vacío.`,language:"python"}),e.jsx(o,{}),e.jsxs(t,{title:"h2",id:"pero-python-tiene-una-forma-más-elegante-property",children:["Pero Python tiene una forma más elegante →",e.jsx("strong",{children:"@property"})]}),e.jsxs(a,{children:["Python permite crear ",e.jsx("em",{children:"getters"})," y ",e.jsx("em",{children:"setters"})," de manera más limpia y natural usando ",e.jsx("strong",{children:"decoradores"}),"."]}),e.jsx(t,{title:"h3",id:"ejemplo-con-property",children:"Ejemplo con @property"}),e.jsx(j,{code:`class Persona:
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
print("❌ El nombre no puede estar vacío.")`,language:"python"}),e.jsxs(a,{children:["Ahora se usa como sí fuera un ",e.jsx("strong",{children:"atributo normal"}),":"]}),e.jsx(j,{code:`p = Persona("Carlos")

print(p.nombre)   # ✅ Llama automáticamente al getter
p.nombre = "Andrés"  # ✅ Llama automáticamente al setter

print(p.nombre)   # ✅ Andrés
p.nombre = ""     # ❌ El nombre no puede estar vacío.`,language:"python"}),e.jsx(o,{}),e.jsxs(t,{title:"h2",id:"ventajas-de-usar-property",children:["Ventajas de usar ",e.jsx("span",{className:"citation","data-cites":"property",children:"@property"})]}),e.jsx(a,{children:"✅ No cambias la forma de usar los atributos. ✅ Puedes añadir validaciones sin romper el código existente. ✅ Encapsulas correctamente los datos. ✅ Evitas accesos o cambios indebidos."}),e.jsx(o,{}),e.jsx(t,{title:"h2",id:"en-resumen",children:"En resumen"}),e.jsxs(T,{children:[e.jsx(P,{headers:["Tipo","Decorador","Se usa para","Ejemplo"]}),e.jsxs("tbody",{children:[e.jsxs(f,{children:[e.jsx(s,{children:e.jsx("strong",{children:"Getter"})}),e.jsx(s,{children:"@property"}),e.jsx(s,{children:"Leer un valor"}),e.jsx(s,{children:"obj.atributo"})]}),e.jsxs(f,{children:[e.jsx(s,{children:e.jsx("strong",{children:"Setter"})}),e.jsx(s,{children:"@atributo.setter"}),e.jsx(s,{children:"Asignar un valor"}),e.jsx(s,{children:"obj.atributo = valor"})]})]})]})]}),e.jsx(E,{temario:_})]})}export{G as default};
