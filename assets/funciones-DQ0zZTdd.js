import{j as e,E as L,T as a,b as n,L as o,a as A,e as D,c as F,f as c,d as T}from"./index-CpeyxQ3i.js";import{c as p,T as v,b as i,a as s}from"./tabla-CtO-7Jid.js";import{C as l}from"./codigo-D2If7uI6.js";function V(C){const r=F.c(12),{className:E}=C,y=E===void 0?"":E;let d,h,t,j,x,u,m;r[0]===Symbol.for("react.memo_cache_sentinel")?(d=e.jsx("li",{children:e.jsx(c,{href:"#1-definición-de-funciones",children:"1. Definición de funciones"})}),h=e.jsx("li",{children:e.jsx(c,{href:"#2-parámetros-en-funciones",children:"2. Parámetros en funciones"})}),t=e.jsx("li",{children:e.jsx(c,{href:"#3-devolver-valores",children:"3. Devolver valores"})}),j=e.jsx("li",{children:e.jsx(c,{href:"#4-variables-globales-y-locales",children:"4. Variables Globales y Locales"})}),x=e.jsx("li",{children:e.jsx(c,{href:"#5-argumentos-en-scripts",children:"5. Argumentos en scripts"})}),u=e.jsx("li",{children:e.jsx(c,{href:"#6-validaciones-útiles",children:"6. Validaciones útiles"})}),m=e.jsx(c,{href:"#7-recorrer-argumentos",children:"7. Recorrer argumentos"}),r[0]=d,r[1]=h,r[2]=t,r[3]=j,r[4]=x,r[5]=u,r[6]=m):(d=r[0],h=r[1],t=r[2],j=r[3],x=r[4],u=r[5],m=r[6]);let g,f,b;r[7]===Symbol.for("react.memo_cache_sentinel")?(b=e.jsxs("li",{children:[m,e.jsxs(T,{children:[e.jsx("li",{children:e.jsx(c,{href:"#con-for",children:"Con for"})}),e.jsx("li",{children:e.jsx(c,{href:"#con-shift",children:"Con shift"})})]})]}),g=e.jsx("li",{children:e.jsx(c,{href:"#8-ejemplo-práctico-mini-calculadora",children:"8. Ejemplo práctico: mini calculadora"})}),f=e.jsx("li",{children:e.jsx(c,{href:"#en-resumen",children:"En resumen"})}),r[7]=g,r[8]=f,r[9]=b):(g=r[7],f=r[8],b=r[9]);let $;return r[10]!==y?($=e.jsxs(T,{className:y,children:[d,h,t,j,x,u,b,g,f]}),r[10]=y,r[11]=$):$=r[11],$}function R({}){return e.jsxs(e.Fragment,{children:[e.jsxs(L,{children:[e.jsx(a,{title:"h1",id:"funciones-variables-y-argumentos-en-bash-script",children:"Funciones, Variables y Argumentos en Bash Script"}),e.jsxs(n,{children:["Este documento explica como usar ",e.jsx("strong",{children:"funciones"}),",",e.jsx("strong",{children:"variables globales y locales"}),", y",e.jsx("strong",{children:"argumentos"}),"."]}),e.jsx(o,{}),e.jsx(A,{temario:V}),e.jsx(a,{title:"h2",id:"definición-de-funciones",children:"1. Definición de funciones"}),e.jsx(n,{children:"En Bash, una función agrupa comandos que puedes reutilizar. Existen dos formas equivalentes:"}),e.jsx(l,{code:`# Forma 1 (más común)
mi_funcion() {
echo "Hola desde la función"
}

# Forma 2 (menos usada)
function mi_funcion2 }
echo "Hola desde la función 2"
}`,language:"bash"}),e.jsx(n,{children:e.jsx("strong",{children:"Llamar una función:"})}),e.jsx(l,{code:"mi_funcion",language:"bash"}),e.jsx(o,{}),e.jsx(a,{title:"h2",id:"parámetros-en-funciones",children:"2. Parámetros en funciones"}),e.jsx(n,{children:"Los argumentos se manejan igual que en un script:"}),e.jsxs(p,{children:[e.jsx(v,{headers:["Variable","Significado"]}),e.jsxs("tbody",{children:[e.jsxs(i,{children:[e.jsx(s,{children:"$1"}),e.jsx(s,{children:"Primer argumento"})]}),e.jsxs(i,{children:[e.jsx(s,{children:"$2"}),e.jsx(s,{children:"Segundo argumento"})]}),e.jsxs(i,{children:[e.jsx(s,{children:"$@"}),e.jsx(s,{children:"Todos los argumentos"})]}),e.jsxs(i,{children:[e.jsx(s,{children:"$#"}),e.jsx(s,{children:"Cantidad de argumentos"})]})]})]}),e.jsx(n,{children:"Ejemplo:"}),e.jsx(l,{code:`saludar() {
echo "Hola $1 $2"
}

saludar "Francisco" "Vélez"
# → Hola Francisco Vélez`,language:"bash"}),e.jsx(o,{}),e.jsx(a,{title:"h2",id:"devolver-valores",children:"3. Devolver valores"}),e.jsxs(n,{children:["En Bash, return solo devuelve ",e.jsx("strong",{children:"códigos de salida (= éxito, ≠0 = error)"}),". Para devolver datos reales se usa echo y ",e.jsx("strong",{children:"captura de comandos"}),":"]}),e.jsx(l,{code:`sumar() {
echo $(( $1 + $2 ))
}

resultado=$(sumar 5 7)
echo "La suma es: $resultado"
# → La suma es: 12`,language:"bash"}),e.jsx(o,{}),e.jsx(a,{title:"h2",id:"variables-globales-y-locales",children:"4. Variables Globales y Locales"}),e.jsxs(n,{children:["Por defecto, todas las variables son ",e.jsx("strong",{children:"globales"}),". Para que existan solo dentro de la función, usa local."]}),e.jsx(l,{code:`mensaje="Hola mundo"

cambiar() {
local mensaje="Soy local"
echo "Dentro: $mensaje"
}

echo "Antes: $mensaje"
cambiar
echo "Después: $mensaje"`,language:"bash"}),e.jsx(n,{children:e.jsx("strong",{children:"Diferencias clave:"})}),e.jsxs(p,{children:[e.jsx(v,{headers:["Tipo","Alcance","Vida útil"]}),e.jsxs("tbody",{children:[e.jsxs(i,{children:[e.jsx(s,{children:"Global"}),e.jsx(s,{children:"Todo el script"}),e.jsx(s,{children:"Hasta que termina el script"})]}),e.jsxs(i,{children:[e.jsx(s,{children:"Local"}),e.jsx(s,{children:"Solo dentro de la función"}),e.jsx(s,{children:"Se destruye al salir de la función"})]})]})]}),e.jsxs(n,{children:["Usa ",e.jsx("strong",{children:"local"})," para evitar modificar variables globales sin querer."]}),e.jsx(o,{}),e.jsx(a,{title:"h2",id:"argumentos-en-scripts",children:"5. Argumentos en scripts"}),e.jsx(n,{children:"Cuando ejecutas un script, puedes pasarle argumentos:"}),e.jsx(l,{code:`#!/bin/bash
echo "Hola $1"`,language:"bash"}),e.jsx(n,{children:"Ejecución:"}),e.jsx(l,{code:`bash script.sh Francisco
# → Hola Francisco`,language:"bash"}),e.jsx(n,{children:"Variables especiales:"}),e.jsxs(p,{children:[e.jsx(v,{headers:["Variable","Significado"]}),e.jsxs("tbody",{children:[e.jsxs(i,{children:[e.jsx(s,{children:"$0"}),e.jsx(s,{children:"Nombre del script"})]}),e.jsxs(i,{children:[e.jsx(s,{children:"$1, $2..."}),e.jsx(s,{children:"Argumentos individuales"})]}),e.jsxs(i,{children:[e.jsx(s,{children:"$#"}),e.jsx(s,{children:"Número de argumentos"})]}),e.jsxs(i,{children:[e.jsx(s,{children:"$@"}),e.jsx(s,{children:"Todos los argumentos como lista"})]}),e.jsxs(i,{children:[e.jsx(s,{children:"$*"}),e.jsx(s,{children:"Todos los argumentos como una sola cadena"})]})]})]}),e.jsx(o,{}),e.jsx(a,{title:"h2",id:"validaciones-útiles",children:"6. Validaciones útiles"}),e.jsx(n,{children:e.jsx("strong",{children:"Validar número de argumentos:"})}),e.jsx(l,{code:`if [ $# -ne 2 ]; then
echo "Uso: $0 num1 num2"
exit 1
fi`,language:"bash"}),e.jsx(n,{children:e.jsx("strong",{children:"Validar argumento vacío:"})}),e.jsx(l,{code:`if [ -z "$1" ]; then
echo "Error: falta argumento"
exit 1
fi`,language:"bash"}),e.jsx(n,{children:e.jsx("strong",{children:"Validar que sea un número:"})}),e.jsx(l,{code:`if ! [[ "$1" =~ ^[0-9]+$ ]]; then
echo "Error: $1 no es un número"
exit 1
fi`,language:"bash"}),e.jsx(o,{}),e.jsx(a,{title:"h2",id:"recorrer-argumentos",children:"7. Recorrer argumentos"}),e.jsx(a,{title:"h3",id:"con-for",children:"Con for"}),e.jsx(l,{code:`for arg in "$@"; do
echo "Argumento: $arg"
done`,language:"bash"}),e.jsx(a,{title:"h3",id:"con-shift",children:"Con shift"}),e.jsx(n,{children:"shift elimina el primer argumento ($1) y mueve los demás a la izquierda."}),e.jsx(l,{code:`while [ $# -gt 0 ]; do
echo "Actual: $1"
shift
done`,language:"bash"}),e.jsx(n,{children:"shift 2 eliminaría los dos primeros argumentos de golpe."}),e.jsx(o,{}),e.jsx(a,{title:"h2",id:"ejemplo-práctico-mini-calculadora",children:"8. Ejemplo práctico: mini calculadora"}),e.jsx(l,{code:`#!/bin/bash

sumar() { echo $(( $1 + $2 )); }
restar() { echo $(( $1 - $2 )); }

if [ $# -lt 3 ]; then
echo "Uso: $0 [suma|resta] num1 num2"
exit 1
fi

op=$1
shift

case $op in
suma)  echo "Resultado: $(sumar $1 $2)" ;;
resta) echo "Resultado: $(restar $1 $2)" ;;
*)     echo "Operación inválida" ;;
esac`,language:"bash"}),e.jsx(o,{}),e.jsx(a,{title:"h2",id:"en-resumen",children:"En resumen"}),e.jsxs(p,{children:[e.jsx(v,{headers:["Concepto","Clave"]}),e.jsxs("tbody",{children:[e.jsxs(i,{children:[e.jsx(s,{children:"Definir función"}),e.jsx(s,{children:"nombre() {... }"})]}),e.jsxs(i,{children:[e.jsx(s,{children:"Llamar función"}),e.jsx(s,{children:"nombre"})]}),e.jsxs(i,{children:[e.jsx(s,{children:"Argumentos"}),e.jsx(s,{children:"$1, $2, $@, $#"})]}),e.jsxs(i,{children:[e.jsx(s,{children:"Devolver valor"}),e.jsx(s,{children:"echo + $(comando)"})]}),e.jsxs(i,{children:[e.jsx(s,{children:"Variable local"}),e.jsx(s,{children:"local nombre=valor"})]}),e.jsxs(i,{children:[e.jsx(s,{children:"Recorrer argumentos"}),e.jsx(s,{children:'for arg in "$@" o while [ $# -gt 0 ]; do ...; shift; done'})]})]})]})]}),e.jsx(D,{temario:V})]})}export{R as default};
