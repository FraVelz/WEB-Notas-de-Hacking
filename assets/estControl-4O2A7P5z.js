import{j as e,E as g,T as a,b as n,L as c,a as p,e as f,c as E,f as r,d as q}from"./index-CpeyxQ3i.js";import{C as s}from"./codigo-D2If7uI6.js";function m(b){const o=E.c(7),{className:x}=b,j=x===void 0?"":x;let l,i,t,d,u;o[0]===Symbol.for("react.memo_cache_sentinel")?(l=e.jsx("li",{children:e.jsx(r,{href:"#bucle-for",children:"Bucle for"})}),i=e.jsx("li",{children:e.jsx(r,{href:"#bucle-while",children:"Bucle while"})}),t=e.jsx("li",{children:e.jsx(r,{href:"#bucle-until",children:"Bucle until"})}),d=e.jsx("li",{children:e.jsx(r,{href:"#comandos-continue-y-break",children:"Comandos continue y break"})}),u=e.jsx("li",{children:e.jsx(r,{href:"#estructura-case",children:"Estructura case"})}),o[0]=l,o[1]=i,o[2]=t,o[3]=d,o[4]=u):(l=o[0],i=o[1],t=o[2],d=o[3],u=o[4]);let h;return o[5]!==j?(h=e.jsxs(q,{className:j,children:[l,i,t,d,u]}),o[5]=j,o[6]=h):h=o[6],h}function C({}){return e.jsxs(e.Fragment,{children:[e.jsxs(g,{children:[e.jsx(a,{title:"h1",id:"estructuras-de-control-en-bash-script",children:"Estructuras de Control en Bash Script"}),e.jsxs(n,{children:["Este documento explica cómo usar ",e.jsx("strong",{children:"bucles"}),",",e.jsx("strong",{children:"estructuras de control"})," y el comando",e.jsx("strong",{children:"case"})," en Bash.",e.jsx("br",{}),"Incluye ejemplos prácticos y comentarios explicativos."]}),e.jsx(c,{}),e.jsx(p,{temario:m}),e.jsx(a,{title:"h2",id:"bucle-for",children:"Bucle for"}),e.jsx(n,{children:"El bucle for permite ejecutar una serie de comandos repetidamente para una lista de valores o rangos numéricos."}),e.jsx(n,{children:e.jsx("strong",{children:"Ejemplo 1: Lista de elementos:"})}),e.jsx(s,{code:`for fruta in manzana mango pera; do
echo "Me gusta la $fruta"
done`,language:"bash"}),e.jsx("blockquote",{children:e.jsx(n,{children:"Recorre una lista de palabras (en este caso, frutas) y ejecuta el bloque do ... done para cada elemento."})}),e.jsx(n,{children:e.jsx("strong",{children:"Ejemplo 2: Rango de números:"})}),e.jsx(s,{code:`for i in {1..3}; do
echo "Contando: $i"
done`,language:"bash"}),e.jsx("blockquote",{children:e.jsxs(n,{children:["{1..3}"," genera una secuencia del 1 al 3."]})}),e.jsx(n,{children:e.jsx("strong",{children:"Ejemplo 3: Sintaxis estilo C"})}),e.jsx(s,{code:`for (( j=10; j>=5; j-- )) do
echo "Cuenta regresiva: $j"
done`,language:"bash"}),e.jsxs("blockquote",{children:[e.jsx(n,{children:"Esta forma usa la sintaxis tradicional tipo C:"}),e.jsx(s,{code:"for (( inicialización; condición; incremento ))",language:"bash"})]}),e.jsx(c,{}),e.jsx(a,{title:"h2",id:"bucle-while",children:"Bucle while"}),e.jsxs(n,{children:["Ejecuta un bloque de código ",e.jsx("strong",{children:"mientras una condición sea verdadera"}),"."]}),e.jsx(s,{code:`i=0

while [[ $i -lt 3 ]] do
echo "i = $i"
((i++))
done`,language:"bash"}),e.jsx("blockquote",{children:e.jsx(n,{children:"En este ejemplo, el bucle incrementa i desde 0 hasta que ya no sea menor que 3."})}),e.jsx(n,{children:e.jsx("strong",{children:"Leer líneas desde un archivo:"})}),e.jsx(n,{children:"Puedes usar while junto con read para leer archivos línea por línea."}),e.jsx(s,{code:`while read line; do
echo "- $line"
done < archivo.txt`,language:"bash"}),e.jsx("blockquote",{children:e.jsx(n,{children:"Esto imprimirá cada línea del archivo precedida por un guion."})}),e.jsx(c,{}),e.jsx(a,{title:"h2",id:"bucle-until",children:"Bucle until"}),e.jsxs(n,{children:["El bucle until funciona igual que while, pero ",e.jsx("strong",{children:"se ejecuta mientras la condición sea falsa"}),"."]}),e.jsx(s,{code:`contador=1

until [[ $contador -gt 5 ]]; do
echo "Contando: $contador"
((contador++))
done
'`,language:"bash"}),e.jsx("blockquote",{children:e.jsx(n,{children:"En este ejemplo, el bucle incrementa i desde 1 hasta 5."})}),e.jsx(c,{}),e.jsx(a,{title:"h2",id:"comandos-continue-y-break",children:"Comandos continue y break"}),e.jsxs(n,{children:["Los comandos continue y break sirven para",e.jsx("strong",{children:"controlar el flujo dentro de los bucles"}),"."]}),e.jsx(s,{code:`contador=0

while true; do
((contador++))

# Si el contador es 3, saltar esta vuelta
if [[ $contador -eq 3 ]]; then
echo "Saltando el número 3..."
continue
fi

echo "Número: $contador"

# Si el contador llega a 5, terminar el bucle
if [[ $contador -eq 5 ]]; then
echo "Se alcanzó el 5. Saliendo..."
break
fi
done`,language:"bash"}),e.jsx("blockquote",{children:e.jsxs(n,{children:["break n rompe n niveles de bucles anidados.",e.jsx("br",{}),"continue salta directamente a la siguiente iteración."]})}),e.jsx(c,{}),e.jsx(a,{title:"h2",id:"estructura-case",children:"Estructura case"}),e.jsx(n,{children:"La estructura case permite comparar una variable con múltiples patrones, similar al switch en otros lenguajes."}),e.jsx(s,{code:`num=10

case $num in
1)
echo "Elegiste uno"
;;
2)
echo "Elegiste dos"
;;
*)
echo "Numero desconocido :v"
;;
esac`,language:"bash"}),e.jsx("blockquote",{children:e.jsxs(n,{children:["Cada bloque se cierra con ;; y el comodín * actúa como ",e.jsx("strong",{children:"caso por defecto"}),"."]})})]}),e.jsx(f,{temario:m})]})}export{C as default};
