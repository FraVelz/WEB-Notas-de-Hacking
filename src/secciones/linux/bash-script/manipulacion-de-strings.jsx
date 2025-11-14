import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../../../componentes/organismos/estructura.jsx";

import Enlace from "../../../componentes/atomos/enlace.jsx";
import Linea from "../../../componentes/atomos/linea.jsx";
import Lista from "../../../componentes/moleculas/lista.jsx";
import Texto from "./../../../componentes/atomos/texto.jsx";
import Titulo from "../../../componentes/moleculas/titulo.jsx";
import Codigo from "../../../componentes/moleculas/codigo.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#manipulación-de-strings-en-bash-script">Manipulación de
        strings en bash script</Enlace >
        <Lista>
          <li><Enlace href="#temario">Temario</Enlace ></li>
          <li><Enlace href="#1-definir-strings">1. Definir strings</Enlace ></li>
          <li><Enlace href="#2-longitud-de-un-string">2. Longitud de un string</Enlace ></li>
          <li><Enlace href="#3-substrings">3. Substrings</Enlace ></li>
          <li><Enlace href="#4-reemplazos-dentro-de-un-string">4. Reemplazos dentro de
            un string</Enlace ></li>
          <li><Enlace href="#5-eliminar-prefijos-y-sufijos">5. Eliminar prefijos y
            sufijos</Enlace ></li>
          <li><Enlace href="#6-concatenar-strings">6. Concatenar strings</Enlace ></li>
          <li><Enlace href="#7-convertir-mayúsculas--minúsculas-bash-4">7. Convertir
            mayúsculas / minúsculas (Bash 4+)</Enlace ></li>
          <li><Enlace href="#8-buscar-dentro-de-un-string">8. Buscar dentro de un
            string</Enlace ></li>
          <li><Enlace href="#9-dividir-un-string-split">9. Dividir un string
            (split)</Enlace ></li>
          <li><Enlace href="#10-juntar-un-array-en-string">10. Juntar un array en
            string</Enlace ></li>
          <li><Enlace href="#11-expresiones-regulares-en-strings">11. Expresiones
            regulares en strings</Enlace ></li>
          <li><Enlace href="#12-lectura-carácter-por-carácter">12. Lectura carácter por
            carácter</Enlace ></li>
        </Lista>
      </li>
    </Lista>
  );
}

function nameabcd({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" id="manipulación-de-strings-en-bash-script">Manipulación de strings
          en bash script</Titulo>

        <Linea />

        <TemarioCompleto temario={Temario} />

        <Titulo title="h2" id="1-definir-strings">1. Definir strings</Titulo>
        <Codigo code={`cadena="Hola Mundo"`} language="bash" />
        <Lista>
          <li>Siempre usar <strong>comillas</strong> sí hay espacios.</li>
          <li>No existen tipos como en otros lenguajes, todo es texto.</li>
        </Lista>
        <Linea />
        <Titulo title="h2" id="2-longitud-de-un-string">2. Longitud de un string</Titulo>
        <Codigo code={`echo "$(#cadena)"   ## 10`} language="bash" />
        <Linea />
        <Titulo title="h2" id="3-substrings">3. Substrings</Titulo>
        <Codigo code={`echo "$\{cadena:0:4\}"   ## Hola (desde índice 0, tomar 4)
echo "$\{cadena:5\}"     ## Mundo (desde índice 5 hasta el final)`} language="bash" />
        <Linea />
        <Titulo title="h2" id="4-reemplazos-dentro-de-un-string">4. Reemplazos dentro de un
          string</Titulo>
        <Codigo code={`texto="banana"

echo "\${texto/na/NA}"    ## baNAna (primer reemplazo)
echo "\${texto//na/NA}"   ## baNANA (todos los reemplazos)

echo "\${texto/na/}"      ## baana   (borra primer "na")
echo "\${texto//na/}"     ## baa     (borra todos "na")`} language="bash" />
        <Linea />
        <Titulo title="h2" id="5-eliminar-prefijos-y-sufijos">5. Eliminar prefijos y sufijos</Titulo>
        <Codigo code={`archivo="documento.txt"

echo "\${archivo%.txt}"   ## documento  (quita sufijo .txt)
echo "\${archivo#doc}"    ## umento.txt (quita prefijo doc) # Con doble signo borra lo más largo ruta="/home/user/docs/file.txt" echo "{"\${ruta##*/}"}"       # file.txt  (quita todo hasta el último /) echo "{"\${ruta %%/*}"}"       # vacío     (quita todo desde el primer /)`} language="bash" />
        <Linea />
        <Titulo title="h2" id="6-concatenar-strings">6. Concatenar strings</Titulo>
        <Codigo code={`nombre="Francisco"
saludo="Hola, $nombre"
echo "$saludo"`} language="bash" />
        <Texto>También:</Texto>
        <Codigo code={`full="Hola"
full+=" Mundo"
echo "$full"   ## Hola Mundo`} language="bash" />
        <Linea />
        <Titulo title="h2" id="7-convertir-mayúsculas-minúsculas-bash-4">7. Convertir mayúsculas
          / minúsculas (Bash 4+)</Titulo>
        <Codigo code={`texto="hola mundo"

echo "\${texto^^}"   ## HOLA MUNDO
echo "\${texto,,}"   ## hola mundo`} language="bash" />
        <Linea />
        <Titulo title="h2" id="8-buscar-dentro-de-un-string">8. Buscar dentro de un string</Titulo>
        <Codigo code={`cadena="programacion"
if [[ "$cadena" == *"grama"- ]]; then
echo "Contiene 'grama'"
fi`} language="bash" />
        <Linea />
        <Titulo title="h2" id="9-dividir-un-string-split">9. Dividir un string (split)</Titulo>
        <Texto>Con IFS (Internal Field Separator):</Texto>
        <Codigo code={`frase="uno dos tres"
IFS=" " read -r -a palabras <<< "$frase"

echo "\${palabras[0]}"  ## uno
echo "\${palabras[1]}"  ## dos
echo "\${palabras[2]}"  ## tres`} language="bash" />
        <Linea />
        <Titulo title="h2" id="10-juntar-un-array-en-string">10. Juntar un array en string</Titulo>
        <Codigo code={`lista=("a" "b" "c")
echo "\${lista[*]}"   ## a b c
echo "\${lista[@]}"   ## a b c`} language="bash" />
        <Texto>Con separador personalizado:</Texto>
        <Codigo code={`IFS=","; echo "\${lista[*]}"   ## a,b,c`} language="bash" />
        <Linea />
        <Titulo title="h2" id="11-expresiones-regulares-en-strings">11. Expresiones regulares en
          strings</Titulo>
        <Codigo code={`cadena="abc123"
if [[ "$cadena" =~ ^[a-z]+[0-9]+$ ]]; then
echo "Coincide con letras seguidas de números"
fi`} language="bash" />
        <Linea />
        <Titulo title="h2" id="12-lectura-carácter-por-carácter">12. Lectura carácter por
          carácter</Titulo>
        <Codigo code={`texto="Hola"
for (( i=0; i<\${#texto}; i++ )); do
echo "\${texto:$i:1}"
done`} language="bash" />
        <Texto>Imprime cada letra en una línea.</Texto>
        <Linea />
        <Texto><strong>En resumen</strong>:</Texto>
        <Lista>
          <li>${`{#str}`} → longitud</li>
          <li>${`{str:pos:len}`} → substring</li>
          <li>${`{str/patrón/reemplazo}`} → reemplazo</li>
          <li>${`{str%patrón}`} / ${`{str#patrón}`} → quitar
            prefijo/sufijo</li>
          <li>${`{str^^}`} / ${`{str,,}`} →
            mayúsculas/minúsculas</li>
          <li>IFS + read -a → split</li>
        </Lista>
      </Estructura>
      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}

export default nameabcd;
