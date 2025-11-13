import{j as e,E as u,T as r,L as a,a as x,d as i,f as s,b as c,c as j}from"./index-CpeyxQ3i.js";import{C as o}from"./codigo-D2If7uI6.js";function m(h){const n=j.c(2),{className:l}=h,t=l===void 0?"":l;let d;return n[0]!==t?(d=e.jsx(i,{className:t}),n[0]=t,n[1]=d):d=n[1],d}function g({}){return e.jsxs(u,{children:[e.jsx(r,{title:"h1",id:"comandos-de-gestión-de-búsqueda",children:"Comandos de Gestión de Búsqueda"}),e.jsx(a,{}),e.jsx(x,{temario:m}),e.jsx(r,{title:"h2",id:"temario",children:"Temario"}),e.jsx(i,{children:e.jsxs("li",{children:[e.jsx(s,{href:"#comandos-de-gestión-de-búsqueda",children:"Comandos de Gestión de Búsqueda"}),e.jsxs(i,{children:[e.jsx("li",{children:e.jsx(s,{href:"#temario",children:"Temario"})}),e.jsxs("li",{children:[e.jsx(s,{href:"#1-buscar-archivos-y-directorios",children:"1. Buscar archivos y directorios"}),e.jsx(i,{children:e.jsx("li",{children:e.jsx(s,{href:"#find",children:"find"})})})]}),e.jsxs("li",{children:[e.jsx(s,{href:"#2-buscar-texto-dentro-de-archivos",children:"2. Buscar texto dentro de archivos"}),e.jsx(i,{children:e.jsx("li",{children:e.jsx(s,{href:"#grep",children:"grep"})})})]}),e.jsxs("li",{children:[e.jsx(s,{href:"#3-buscar-archivos-rápidamente",children:"3. Buscar archivos rápidamente"}),e.jsx(i,{children:e.jsx("li",{children:e.jsx(s,{href:"#locate",children:"locate"})})})]}),e.jsxs("li",{children:[e.jsx(s,{href:"#4-buscar-comandos-o-ejecutables",children:"4. Buscar comandos o ejecutables"}),e.jsx(i,{children:e.jsx("li",{children:e.jsx(s,{href:"#which-whereis-type",children:"which, whereis, type"})})})]}),e.jsxs("li",{children:[e.jsx(s,{href:"#5-buscar-en-el-historial-o-procesos",children:"5. Buscar en el historial o procesos"}),e.jsxs(i,{children:[e.jsx("li",{children:e.jsx(s,{href:"#buscar-en-historial",children:"Buscar en historial"})}),e.jsx("li",{children:e.jsx(s,{href:"#buscar-procesos-en-ejecución",children:"Buscar procesos en ejecución"})})]})]}),e.jsx("li",{children:e.jsx(s,{href:"#6-buscar-dentro-de-archivos-comprimidos-o-binarios",children:"6. Buscar dentro de archivos comprimidos o binarios"})})]})]})}),e.jsx(c,{children:e.jsx(s,{href:"./../readme.md#2-linux-y-bash-script",children:"Regresar a la guía principal"})}),e.jsx(a,{}),e.jsx(r,{title:"h2",id:"buscar-archivos-y-directorios",children:"1. Buscar archivos y directorios"}),e.jsx(r,{title:"h3",id:"find",children:"find"}),e.jsx(c,{children:"Busca archivos y carpetas según nombre, tipo, tamaño, fecha, etc."}),e.jsx(o,{code:`# Buscar por nombre (en todo el sistema)
find / -name "archivo.txt"

# Buscar sin importar mayúsculas/minúsculas
find /home -iname "foto.png"

# Buscar solo directorios
find /home -type d -name "Documentos"

# Buscar archivos mayores de 10 MB
find / -type f -size +10M

# Ejecutar un comando sobre los resultados
find /tmp -name "*.log" -exec rm {} ;`,language:"bash"}),e.jsx(a,{}),e.jsx(r,{title:"h2",id:"buscar-texto-dentro-de-archivos",children:"2. Buscar texto dentro de archivos"}),e.jsx(r,{title:"h3",id:"grep",children:"grep"}),e.jsx(c,{children:"Busca texto dentro del contenido de archivos."}),e.jsx(o,{code:`# Buscar una palabra en un archivo
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
grep -l "root" /etc/*`,language:"bash"}),e.jsx("blockquote",{children:e.jsx(c,{children:'Tip: Usa grep -rni "palabra" . para buscar en todo el directorio actual con número de línea y sin distinguir mayúsculas/minúsculas.'})}),e.jsx(a,{}),e.jsx(r,{title:"h2",id:"buscar-archivos-rápidamente",children:"3. Buscar archivos rápidamente"}),e.jsx(r,{title:"h3",id:"locate",children:"locate"}),e.jsx(c,{children:"Usa una base de datos indexada (más rápido que find)."}),e.jsx(o,{code:`# Buscar archivos por nombre
locate archivo.txt

# Buscar archivos que contengan una palabra
locate config

# Actualizar la base de datos de locate
sudo updatedb`,language:"bash"}),e.jsx(a,{}),e.jsx(r,{title:"h2",id:"buscar-comandos-o-ejecutables",children:"4. Buscar comandos o ejecutables"}),e.jsx(r,{title:"h3",id:"which-whereis-type",children:"which, whereis, type"}),e.jsx(c,{children:"Sirven para ubicar programas instalados o saber cómo se ejecutan."}),e.jsx(o,{code:`# Ver ruta del ejecutable de un comando
which python3

# Mostrar archivos binarios, man pages, etc.
whereis bash

# Mostrar tipo de comando
type ls`,language:"bash"}),e.jsx(a,{}),e.jsx(r,{title:"h2",id:"buscar-en-el-historial-o-procesos",children:"5. Buscar en el historial o procesos"}),e.jsx(r,{title:"h3",id:"buscar-en-historial",children:"Buscar en historial"}),e.jsx(o,{code:`# Buscar un comando usado anteriormente
history | grep "ssh"`,language:"bash"}),e.jsx(r,{title:"h3",id:"buscar-procesos-en-ejecución",children:"Buscar procesos en ejecución"}),e.jsx(o,{code:"ps aux | grep firefox",language:"bash"}),e.jsx(a,{}),e.jsx(r,{title:"h2",id:"buscar-dentro-de-archivos-comprimidos-o-binarios",children:"6. Buscar dentro de archivos comprimidos o binarios"}),e.jsx(o,{code:`# Buscar dentro de un .tar.gz
tar -tzf archivo.tar.gz | grep "config"

# Buscar dentro de un binario (si tiene texto legible)
strings archivo.bin | grep "password"`,language:"bash"})]})}export{g as default};
