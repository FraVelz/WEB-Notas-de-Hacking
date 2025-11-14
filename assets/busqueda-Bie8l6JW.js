import{j as e,E as w,T as a,L as i,a as S,b as n,f as r,e as q,c as T,d as o}from"./index-DMQoPaND.js";import{C as c}from"./codigo-CPt7AhUC.js";function y(_){const s=T.c(13),{className:B}=_,v=B===void 0?"":B;let t;s[0]===Symbol.for("react.memo_cache_sentinel")?(t=e.jsx(r,{href:"#comandos-de-gestión-de-búsqueda",children:"Comandos de Gestión de Búsqueda"}),s[0]=t):t=s[0];let l;s[1]===Symbol.for("react.memo_cache_sentinel")?(l=e.jsx(r,{href:"#1-buscar-archivos-y-directorios",children:"1. Buscar archivos y directorios"}),s[1]=l):l=s[1];let d,h;s[2]===Symbol.for("react.memo_cache_sentinel")?(d=e.jsxs("li",{children:[l,e.jsx(o,{children:e.jsx("li",{children:e.jsx(r,{href:"#find",children:"find"})})})]}),h=e.jsx(r,{href:"#2-buscar-texto-dentro-de-archivos",children:"2. Buscar texto dentro de archivos"}),s[2]=d,s[3]=h):(d=s[2],h=s[3]);let u,m;s[4]===Symbol.for("react.memo_cache_sentinel")?(u=e.jsxs("li",{children:[h,e.jsx(o,{children:e.jsx("li",{children:e.jsx(r,{href:"#grep",children:"grep"})})})]}),m=e.jsx(r,{href:"#3-buscar-archivos-rápidamente",children:"3. Buscar archivos rápidamente"}),s[4]=u,s[5]=m):(u=s[4],m=s[5]);let x,j;s[6]===Symbol.for("react.memo_cache_sentinel")?(x=e.jsxs("li",{children:[m,e.jsx(o,{children:e.jsx("li",{children:e.jsx(r,{href:"#locate",children:"locate"})})})]}),j=e.jsx(r,{href:"#4-buscar-comandos-o-ejecutables",children:"4. Buscar comandos o ejecutables"}),s[6]=x,s[7]=j):(x=s[6],j=s[7]);let p,b;s[8]===Symbol.for("react.memo_cache_sentinel")?(p=e.jsxs("li",{children:[j,e.jsx(o,{children:e.jsx("li",{children:e.jsx(r,{href:"#which-whereis-type",children:"which, whereis, type"})})})]}),b=e.jsx(r,{href:"#5-buscar-en-el-historial-o-procesos",children:"5. Buscar en el historial o procesos"}),s[8]=p,s[9]=b):(p=s[8],b=s[9]);let f;s[10]===Symbol.for("react.memo_cache_sentinel")?(f=e.jsxs("li",{children:[t,e.jsxs(o,{children:[d,u,x,p,e.jsxs("li",{children:[b,e.jsxs(o,{children:[e.jsx("li",{children:e.jsx(r,{href:"#buscar-en-historial",children:"Buscar en historial"})}),e.jsx("li",{children:e.jsx(r,{href:"#buscar-procesos-en-ejecución",children:"Buscar procesos en ejecución"})})]})]}),e.jsx("li",{children:e.jsx(r,{href:"#6-buscar-dentro-de-archivos-comprimidos-o-binarios",children:"6. Buscar dentro de archivos comprimidos o binarios"})})]})]}),s[10]=f):f=s[10];let g;return s[11]!==v?(g=e.jsx(o,{className:v,children:f}),s[11]=v,s[12]=g):g=s[12],g}function M({}){return e.jsxs(e.Fragment,{children:[e.jsxs(w,{children:[e.jsx(a,{title:"h1",id:"comandos-de-gestión-de-búsqueda",children:"Comandos de Gestión de Búsqueda"}),e.jsx(i,{}),e.jsx(S,{temario:y}),e.jsx(n,{children:e.jsx(r,{href:"./../readme.md#2-linux-y-bash-script",children:"Regresar a la guía principal"})}),e.jsx(i,{}),e.jsx(a,{title:"h2",id:"1-buscar-archivos-y-directorios",children:"1. Buscar archivos y directorios"}),e.jsx(a,{title:"h3",id:"find",children:"find"}),e.jsx(n,{children:"Busca archivos y carpetas según nombre, tipo, tamaño, fecha, etc."}),e.jsx(c,{code:`# Buscar por nombre (en todo el sistema)
find / -name "archivo.txt"

# Buscar sin importar mayúsculas/minúsculas
find /home -iname "foto.png"

# Buscar solo directorios
find /home -type d -name "Documentos"

# Buscar archivos mayores de 10 MB
find / -type f -size +10M

# Ejecutar un comando sobre los resultados
find /tmp -name "*.log" -exec rm {} ;`,language:"bash"}),e.jsx(i,{}),e.jsx(a,{title:"h2",id:"2-buscar-texto-dentro-de-archivos",children:"2. Buscar texto dentro de archivos"}),e.jsx(a,{title:"h3",id:"grep",children:"grep"}),e.jsx(n,{children:"Busca texto dentro del contenido de archivos."}),e.jsx(c,{code:`# Buscar una palabra en un archivo
grep "error" archivo.log

# Buscar en todos los archivos de una carpeta
grep "main" *.cpp

# Buscar recursivamente (en subcarpetas)
grep -r "usuario" /etc/

# Mostrar el número de línea
grep -n "config" settings.conf

# Ignorar mayúsculas/minúsculas
grep -i "Warning" archivo.log

# Mostrar solo el nombre del archivo donde se encuentra
grep -l "root" /etc/*`,language:"bash"}),e.jsx("blockquote",{children:e.jsx(n,{children:'Tip: Usa grep -rni "palabra" . para buscar en todo el directorio actual con número de línea y sin distinguir mayúsculas/minúsculas.'})}),e.jsx(i,{}),e.jsx(a,{title:"h2",id:"3-buscar-archivos-rápidamente",children:"3. Buscar archivos rápidamente"}),e.jsx(a,{title:"h3",id:"locate",children:"locate"}),e.jsx(n,{children:"Usa una base de datos indexada (más rápido que find)."}),e.jsx(c,{code:`# Buscar archivos por nombre
locate archivo.txt

# Buscar archivos que contengan una palabra
locate config

# Actualizar la base de datos de locate
sudo updatedb`,language:"bash"}),e.jsx(i,{}),e.jsx(a,{title:"h2",id:"4-buscar-comandos-o-ejecutables",children:"4. Buscar comandos o ejecutables"}),e.jsx(a,{title:"h3",id:"which-whereis-type",children:"which, whereis, type"}),e.jsx(n,{children:"Sirven para ubicar programas instalados o saber cómo se ejecutan."}),e.jsx(c,{code:`# Ver ruta del ejecutable de un comando
which python3

# Mostrar archivos binarios, man pages, etc.
whereis bash

# Mostrar tipo de comando
type ls`,language:"bash"}),e.jsx(i,{}),e.jsx(a,{title:"h2",id:"5-buscar-en-el-historial-o-procesos",children:"5. Buscar en el historial o procesos"}),e.jsx(a,{title:"h3",id:"buscar-en-historial",children:"Buscar en historial"}),e.jsx(c,{code:`# Buscar un comando usado anteriormente
history | grep "ssh"`,language:"bash"}),e.jsx(a,{title:"h3",id:"buscar-procesos-en-ejecución",children:"Buscar procesos en ejecución"}),e.jsx(c,{code:"ps aux | grep firefox",language:"bash"}),e.jsx(i,{}),e.jsx(a,{title:"h2",id:"6-buscar-dentro-de-archivos-comprimidos-o-binarios",children:"6. Buscar dentro de archivos comprimidos o binarios"}),e.jsx(c,{code:`# Buscar dentro de un .tar.gz
tar -tzf archivo.tar.gz | grep "config"

# Buscar dentro de un binario (si tiene texto legible)
strings archivo.bin | grep "password"`,language:"bash"})]}),e.jsx(q,{temario:y})]})}export{M as default};
