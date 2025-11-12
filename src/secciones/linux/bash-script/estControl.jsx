import { TemarioCompleto } from "../../../componentes/organismos/estructura.jsx";
import Enlace from "../../../componentes/atomos/enlace.jsx";
import Linea from "../../../componentes/atomos/linea.jsx";
import Lista from "../../../componentes/moleculas/lista.jsx";
import Texto from "./../../../componentes/atomos/texto.jsx";
import Titulo from "../../../componentes/moleculas/titulo.jsx";
import CodeBlock from "../../../componentes/moleculas/codigo.jsx";
function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#bucle-for">Bucle for</Enlace ></li>
      <li><Enlace href="#bucle-while">Bucle while</Enlace ></li>
      <li><Enlace href="#bucle-until">Bucle until</Enlace ></li>
      <li><Enlace href="#comandos-continue-y-break">Comandos continue
        y break</Enlace ></li>
      <li><Enlace href="#estructura-case">Estructura case</Enlace ></li>
    </Lista>
  );
}

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="estructuras-de-control-en-bash-script">Estructuras de Control en
        Bash Script</Titulo>
      <Texto>Este documento explica cómo usar <strong>bucles</strong>,
        <strong>estructuras de control</strong> y el comando
        <strong>case</strong> en Bash.<br />
        Incluye ejemplos prácticos y comentarios explicativos.
      </Texto>
      <Linea />

      <TemarioCompleto temario={Temario}/>

      <Texto><Enlace href="./../readme.md#2-linux-y-bash-script">Regresar a la guía
        principal</Enlace ></Texto>
      <Linea />
      <Titulo title="h2" id="bucle-for">Bucle for</Titulo>
      <Texto>El bucle for permite ejecutar una serie de comandos
        repetidamente para una lista de valores o rangos numéricos.</Texto>
      <Texto><strong>Ejemplo 1: Lista de elementos:</strong></Texto>
      <CodeBlock code={`for fruta in manzana mango pera; do
echo "Me gusta la $fruta"
done`} language="bash" />
      <blockquote>
        <Texto>Recorre una lista de palabras (en este caso, frutas) y ejecuta el
          bloque do ... done para cada elemento.</Texto>
      </blockquote>
      <Texto><strong>Ejemplo 2: Rango de números:</strong></Texto>
      <CodeBlock code={`for i in {1..3}; do
echo "Contando: $i"
done`} language="bash" />
      <blockquote>
        <Texto>{"{1..3}"} genera una secuencia del 1 al 3.</Texto>
      </blockquote>
      <Texto><strong>Ejemplo 3: Sintaxis estilo C</strong></Texto>
      <CodeBlock code={`for (( j=10; j>=5; j-- )) do
echo "Cuenta regresiva: $j"
done`} language="bash" />
      <blockquote>
        <Texto>Esta forma usa la sintaxis tradicional tipo C:</Texto>
        <CodeBlock code={`for (( inicialización; condición; incremento ))`} language="bash" />
      </blockquote>
      <Linea />
      <Titulo title="h2" id="bucle-while">Bucle while</Titulo>
      <Texto>Ejecuta un bloque de código <strong>mientras una condición sea
        verdadera</strong>.</Texto>
      <CodeBlock code={`i=0

while [[ $i -lt 3 ]] do
echo "i = $i"
((i++))
done`} language="bash" />
      <blockquote>
        <Texto>En este ejemplo, el bucle incrementa i desde 0 hasta que
          ya no sea menor que 3.</Texto>
      </blockquote>
      <Texto><strong>Leer líneas desde un archivo:</strong></Texto>
      <Texto>Puedes usar while junto con read para leer
        archivos línea por línea.</Texto>
      <CodeBlock code={`while read line; do
echo "- $line"
done < archivo.txt`} language="bash" />
      <blockquote>
        <Texto>Esto imprimirá cada línea del archivo precedida por un guion.</Texto>
      </blockquote>
      <Linea />
      <Titulo title="h2" id="bucle-until">Bucle until</Titulo>
      <Texto>El bucle until funciona igual que while,
        pero <strong>se ejecuta mientras la condición sea falsa</strong>.</Texto>
      <CodeBlock code={`contador=1

until [[ $contador -gt 5 ]]; do
echo "Contando: $contador"
((contador++))
done
'`} language="bash" />
      <blockquote>
        <Texto>En este ejemplo, el bucle incrementa i desde 1 hasta
          5.</Texto>
      </blockquote>
      <Linea />
      <Titulo title="h2" id="comandos-continue-y-break">Comandos continue y
        break
      </Titulo>
      <Texto>Los comandos continue y break sirven para
        <strong>controlar el flujo dentro de los bucles</strong>.
      </Texto>
      <CodeBlock code={`contador=0

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
done`} language="bash" />
      <blockquote>
        <Texto>break n rompe n niveles de bucles
          anidados.<br />
          continue salta directamente a la siguiente iteración.
        </Texto>
      </blockquote>
      <Linea />
      <Titulo title="h2" id="estructura-case">Estructura case</Titulo>
      <Texto>La estructura case permite comparar una variable con
        múltiples patrones, similar al switch en otros
        lenguajes.</Texto>
      <CodeBlock code={`num=10

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
esac`} language="bash" />
      <blockquote>
        <Texto>Cada bloque se cierra con ;; y el comodín *
          actúa como <strong>caso por defecto</strong>.</Texto>
      </blockquote>
      <Linea />
      <Texto><Enlace href="./../readme.md#2-linux-y-bash-script">Regresar a la guía
        principal</Enlace ></Texto>
      <blockquote>
        <Texto><strong>Autor:</strong> Fravelz</Texto>
      </blockquote>
    </>
  );
}
export default nameabcd;
