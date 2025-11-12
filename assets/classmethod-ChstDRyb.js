import{j as e,T as a,b as n,L as i,d,f as r}from"./index-BWuvRKPc.js";import{c as o,T as c,b as l,a as s}from"./tabla-5KrFVZFW.js";import{C as t}from"./codigo-D-8LK2Lm.js";function m({}){return e.jsxs(e.Fragment,{children:[e.jsxs(a,{title:"h1",id:"decorador-classmethod",children:["Decorador ",e.jsx("span",{className:"citation","data-cites":"classmethod",children:"@classmethod"})]}),e.jsxs(n,{children:["@classmethod permite crear funciones que pueden",e.jsx("strong",{children:"acceder o modificar el estado de la clase"}),", sin necesidad de crear un objeto."]}),e.jsx(i,{}),e.jsx(a,{title:"h2",id:"temario",children:"Temario"}),e.jsx(d,{children:e.jsxs("li",{children:[e.jsxs(r,{href:"#decorador-classmethod",children:["Decorador ",e.jsx("span",{className:"citation","data-cites":"classmethod",children:"@classmethod"})]}),e.jsxs(d,{children:[e.jsx("li",{children:e.jsx(r,{href:"#temario",children:"Temario"})}),e.jsx("li",{children:e.jsx(r,{href:"#ejemplo",children:"Ejemplo"})}),e.jsx("li",{children:e.jsx(r,{href:"#diferencias-entre-tipos-de-métodos",children:"Diferencias entre tipos de métodos"})}),e.jsx("li",{children:e.jsx(r,{href:"#en-resumen",children:"En resumen"})})]})]})}),e.jsx(n,{children:e.jsx(r,{href:"./../readme.md#5-python",children:"Regresar a la Guía Principal"})}),e.jsx(i,{}),e.jsx(a,{title:"h2",id:"ejemplo",children:"Ejemplo"}),e.jsx(t,{code:`class Persona:
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
print(Persona.cuantos_hay())  # Hay 2 personas registradas.`,language:"python"}),e.jsx(i,{}),e.jsx(a,{title:"h2",id:"diferencias-entre-tipos-de-métodos",children:"Diferencias entre tipos de métodos"}),e.jsxs(o,{children:[e.jsx(c,{headers:["Tipo de método","Primer parámetro","Accede a atributos de instancia","Accede a atributos de clase","Se llama sin crear objeto"]}),e.jsxs("tbody",{children:[e.jsxs(l,{children:[e.jsx(s,{children:e.jsx("strong",{children:"Normal (def)"})}),e.jsx(s,{children:"self"}),e.jsx(s,{children:"✅ Sí"}),e.jsx(s,{children:"✅ (vía self.__class__)"}),e.jsx(s,{children:"❌ No"})]}),e.jsxs(l,{children:[e.jsx(s,{children:e.jsx("strong",{children:"@classmethod"})}),e.jsx(s,{children:"cls"}),e.jsx(s,{children:"❌ No"}),e.jsx(s,{children:"✅ Sí"}),e.jsx(s,{children:"✅ Sí"})]}),e.jsxs(l,{children:[e.jsx(s,{children:e.jsx("strong",{children:"@staticmethod"})}),e.jsx(s,{children:"ninguno"}),e.jsx(s,{children:"❌ No"}),e.jsx(s,{children:"❌ No"}),e.jsx(s,{children:"✅ Sí"})]})]})]}),e.jsx(i,{}),e.jsx(a,{title:"h2",id:"en-resumen",children:"En resumen"}),e.jsxs(d,{children:[e.jsxs("li",{children:["@staticmethod: método",e.jsx("strong",{children:"independiente"}),", solo usa los parámetros que se le pasen."]}),"    ",e.jsxs("li",{children:["@classmethod: método ",e.jsx("strong",{children:"ligado a la clase"}),", puede ",e.jsx("strong",{children:"usar o modificar atributos de la clase"})," y se puede llamar sin crear una instancia."]}),"  "]}),e.jsx(i,{}),e.jsx(n,{children:e.jsx(r,{href:"./../readme.md#5-python",children:"Regresar a la Guía Principal"})}),e.jsx("blockquote",{children:e.jsxs(n,{children:[e.jsx("strong",{children:"Autor:"})," Fravelz"]})})]})}export{m as default};
