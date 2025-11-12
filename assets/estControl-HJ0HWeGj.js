import{j as e,T as c,b as n,L as o,a as b,f as r,c as g,d as p}from"./index-BWuvRKPc.js";import{C as a}from"./codigo-D-8LK2Lm.js";function f(m){const s=g.c(7),{className:x}=m,j=x===void 0?"":x;let l,i,t,d,u;s[0]===Symbol.for("react.memo_cache_sentinel")?(l=e.jsx("li",{children:e.jsx(r,{href:"#bucle-for",children:"Bucle for"})}),i=e.jsx("li",{children:e.jsx(r,{href:"#bucle-while",children:"Bucle while"})}),t=e.jsx("li",{children:e.jsx(r,{href:"#bucle-until",children:"Bucle until"})}),d=e.jsx("li",{children:e.jsx(r,{href:"#comandos-continue-y-break",children:"Comandos continue y break"})}),u=e.jsx("li",{children:e.jsx(r,{href:"#estructura-case",children:"Estructura case"})}),s[0]=l,s[1]=i,s[2]=t,s[3]=d,s[4]=u):(l=s[0],i=s[1],t=s[2],d=s[3],u=s[4]);let h;return s[5]!==j?(h=e.jsxs(p,{className:j,children:[l,i,t,d,u]}),s[5]=j,s[6]=h):h=s[6],h}function k({}){return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"h1",id:"estructuras-de-control-en-bash-script",children:"Estructuras de Control en Bash Script"}),e.jsxs(n,{children:["Este documento explica cómo usar ",e.jsx("strong",{children:"bucles"}),",",e.jsx("strong",{children:"estructuras de control"})," y el comando",e.jsx("strong",{children:"case"})," en Bash.",e.jsx("br",{}),"Incluye ejemplos prácticos y comentarios explicativos."]}),e.jsx(o,{}),e.jsx(b,{temario:f}),e.jsx(n,{children:e.jsx(r,{href:"./../readme.md#2-linux-y-bash-script",children:"Regresar a la guía principal"})}),e.jsx(o,{}),e.jsx(c,{title:"h2",id:"bucle-for",children:"Bucle for"}),e.jsx(n,{children:"El bucle for permite ejecutar una serie de comandos repetidamente para una lista de valores o rangos numéricos."}),e.jsx(n,{children:e.jsx("strong",{children:"Ejemplo 1: Lista de elementos:"})}),e.jsx(a,{code:`for fruta in manzana mango pera; do
echo "Me gusta la $fruta"
done`,language:"bash"}),e.jsx("blockquote",{children:e.jsx(n,{children:"Recorre una lista de palabras (en este caso, frutas) y ejecuta el bloque do ... done para cada elemento."})}),e.jsx(n,{children:e.jsx("strong",{children:"Ejemplo 2: Rango de números:"})}),e.jsx(a,{code:`for i in {1..3}; do
echo "Contando: $i"
done`,language:"bash"}),e.jsx("blockquote",{children:e.jsxs(n,{children:["{1..3}"," genera una secuencia del 1 al 3."]})}),e.jsx(n,{children:e.jsx("strong",{children:"Ejemplo 3: Sintaxis estilo C"})}),e.jsx(a,{code:`for (( j=10; j>=5; j-- )) do
echo "Cuenta regresiva: $j"
done`,language:"bash"}),e.jsxs("blockquote",{children:[e.jsx(n,{children:"Esta forma usa la sintaxis tradicional tipo C:"}),e.jsx(a,{code:"for (( inicialización; condición; incremento ))",language:"bash"})]}),e.jsx(o,{}),e.jsx(c,{title:"h2",id:"bucle-while",children:"Bucle while"}),e.jsxs(n,{children:["Ejecuta un bloque de código ",e.jsx("strong",{children:"mientras una condición sea verdadera"}),"."]}),e.jsx(a,{code:`i=0

while [[ $i -lt 3 ]] do
echo "i = $i"
((i++))
done`,language:"bash"}),e.jsx("blockquote",{children:e.jsx(n,{children:"En este ejemplo, el bucle incrementa i desde 0 hasta que ya no sea menor que 3."})}),e.jsx(n,{children:e.jsx("strong",{children:"Leer líneas desde un archivo:"})}),e.jsx(n,{children:"Puedes usar while junto con read para leer archivos línea por línea."}),e.jsx(a,{code:`while read line; do
echo "- $line"
done < archivo.txt`,language:"bash"}),e.jsx("blockquote",{children:e.jsx(n,{children:"Esto imprimirá cada línea del archivo precedida por un guion."})}),e.jsx(o,{}),e.jsx(c,{title:"h2",id:"bucle-until",children:"Bucle until"}),e.jsxs(n,{children:["El bucle until funciona igual que while, pero ",e.jsx("strong",{children:"se ejecuta mientras la condición sea falsa"}),"."]}),e.jsx(a,{code:`contador=1

until [[ $contador -gt 5 ]]; do
echo "Contando: $contador"
((contador++))
done
'`,language:"bash"}),e.jsx("blockquote",{children:e.jsx(n,{children:"En este ejemplo, el bucle incrementa i desde 1 hasta 5."})}),e.jsx(o,{}),e.jsx(c,{title:"h2",id:"comandos-continue-y-break",children:"Comandos continue y break"}),e.jsxs(n,{children:["Los comandos continue y break sirven para",e.jsx("strong",{children:"controlar el flujo dentro de los bucles"}),"."]}),e.jsx(a,{code:`contador=0

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
done`,language:"bash"}),e.jsx("blockquote",{children:e.jsxs(n,{children:["break n rompe n niveles de bucles anidados.",e.jsx("br",{}),"continue salta directamente a la siguiente iteración."]})}),e.jsx(o,{}),e.jsx(c,{title:"h2",id:"estructura-case",children:"Estructura case"}),e.jsx(n,{children:"La estructura case permite comparar una variable con múltiples patrones, similar al switch en otros lenguajes."}),e.jsx(a,{code:`num=10

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
esac`,language:"bash"}),e.jsx("blockquote",{children:e.jsxs(n,{children:["Cada bloque se cierra con ;; y el comodín * actúa como ",e.jsx("strong",{children:"caso por defecto"}),"."]})}),e.jsx(o,{}),e.jsx(n,{children:e.jsx(r,{href:"./../readme.md#2-linux-y-bash-script",children:"Regresar a la guía principal"})}),e.jsx("blockquote",{children:e.jsxs(n,{children:[e.jsx("strong",{children:"Autor:"})," Fravelz"]})})]})}export{k as default};
