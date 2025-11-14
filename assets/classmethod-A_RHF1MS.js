import{j as e,E as p,T as n,b as u,L as d,a as f,d as h,e as b,c as g,f as l}from"./index-DMQoPaND.js";import{c as _,T,b as t,a as s}from"./tabla-Btz_eBuW.js";import{C as y}from"./codigo-CPt7AhUC.js";function j(x){const a=g.c(4),{className:m}=x,c=m===void 0?"":m;let r;a[0]===Symbol.for("react.memo_cache_sentinel")?(r=e.jsxs(l,{href:"#decorador-classmethod",children:["Decorador ",e.jsx("span",{className:"citation","data-cites":"classmethod",children:"@classmethod"})]}),a[0]=r):r=a[0];let o;a[1]===Symbol.for("react.memo_cache_sentinel")?(o=e.jsxs("li",{children:[r,e.jsxs(h,{children:[e.jsx("li",{children:e.jsx(l,{href:"#ejemplo",children:"Ejemplo"})}),e.jsx("li",{children:e.jsx(l,{href:"#diferencias-entre-tipos-de-métodos",children:"Diferencias entre tipos de métodos"})}),e.jsx("li",{children:e.jsx(l,{href:"#en-resumen",children:"En resumen"})})]})]}),a[1]=o):o=a[1];let i;return a[2]!==c?(i=e.jsx(h,{className:c,children:o}),a[2]=c,a[3]=i):i=a[3],i}function S({}){return e.jsxs(e.Fragment,{children:[e.jsxs(p,{children:[e.jsxs(n,{title:"h1",id:"decorador-classmethod",children:["Decorador ",e.jsx("span",{className:"citation","data-cites":"classmethod",children:"@classmethod"})]}),e.jsxs(u,{children:["@classmethod permite crear funciones que pueden",e.jsx("strong",{children:"acceder o modificar el estado de la clase"}),", sin necesidad de crear un objeto."]}),e.jsx(d,{}),e.jsx(f,{temario:j}),e.jsx(n,{title:"h2",id:"ejemplo",children:"Ejemplo"}),e.jsx(y,{code:`class Persona:
poblacion = 0  # Atributo de clase

def __init__(self, nombre):
self.nombre = nombre
Persona.poblacion += 1

@classmethod
def cuantos_hay(cls):
return f"Hay (cls.poblacion) personas registradas."

# Podemos llamar al método sin crear objetos:
print(Persona.cuantos_hay())  # Hay 0 personas registradas.

# Crear algunos objetos:
p1 = Persona("Ana")
p2 = Persona("Luis")

# Llamar de nuevo:
print(Persona.cuantos_hay())  # Hay 2 personas registradas.`,language:"python"}),e.jsx(d,{}),e.jsx(n,{title:"h2",id:"diferencias-entre-tipos-de-métodos",children:"Diferencias entre tipos de métodos"}),e.jsxs(_,{children:[e.jsx(T,{headers:["Tipo de método","Primer parámetro","Accede a atributos de instancia","Accede a atributos de clase","Se llama sin crear objeto"]}),e.jsxs("tbody",{children:[e.jsxs(t,{children:[e.jsx(s,{children:e.jsx("strong",{children:"Normal (def)"})}),e.jsx(s,{children:"self"}),e.jsx(s,{children:"✅ Sí"}),e.jsx(s,{children:"✅ (vía self.__class__)"}),e.jsx(s,{children:"❌ No"})]}),e.jsxs(t,{children:[e.jsx(s,{children:e.jsx("strong",{children:"@classmethod"})}),e.jsx(s,{children:"cls"}),e.jsx(s,{children:"❌ No"}),e.jsx(s,{children:"✅ Sí"}),e.jsx(s,{children:"✅ Sí"})]}),e.jsxs(t,{children:[e.jsx(s,{children:e.jsx("strong",{children:"@staticmethod"})}),e.jsx(s,{children:"ninguno"}),e.jsx(s,{children:"❌ No"}),e.jsx(s,{children:"❌ No"}),e.jsx(s,{children:"✅ Sí"})]})]})]}),e.jsx(d,{}),e.jsx(n,{title:"h2",id:"en-resumen",children:"En resumen"}),e.jsxs(h,{children:[e.jsxs("li",{children:["@staticmethod: método",e.jsx("strong",{children:"independiente"}),", solo usa los parámetros que se le pasen."]}),"    ",e.jsxs("li",{children:["@classmethod: método ",e.jsx("strong",{children:"ligado a la clase"}),", puede ",e.jsx("strong",{children:"usar o modificar atributos de la clase"})," y se puede llamar sin crear una instancia."]}),"  "]})]}),e.jsx(b,{temario:j})]})}export{S as default};
