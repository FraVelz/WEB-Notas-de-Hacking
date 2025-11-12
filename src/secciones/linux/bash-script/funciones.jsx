import Enlace from "../../../componentes/atomos/enlace.jsx";
import { TemarioCompleto } from "../../../componentes/organismos/estructura.jsx";
import Linea from "../../../componentes/atomos/linea.jsx";
import Lista from "../../../componentes/moleculas/lista.jsx";
import Texto from "./../../../componentes/atomos/texto.jsx";
import Titulo from "../../../componentes/moleculas/titulo.jsx";
import { Tabla, TablaCabezera, TablaFila, TablaUnica } from "../../../componentes/moleculas/tabla.jsx";
import CodeBlock from "../../../componentes/moleculas/codigo.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#1-definición-de-funciones">1. Definición de
        funciones</Enlace ></li>
      <li><Enlace href="#2-parámetros-en-funciones">2. Parámetros en
        funciones</Enlace ></li>
      <li><Enlace href="#3-devolver-valores">3. Devolver valores</Enlace ></li>
      <li><Enlace href="#4-variables-globales-y-locales">4. Variables Globales y
        Locales</Enlace ></li>
      <li><Enlace href="#5-argumentos-en-scripts">5. Argumentos en scripts</Enlace ></li>
      <li><Enlace href="#6-validaciones-útiles">6. Validaciones útiles</Enlace ></li>
      <li><Enlace href="#7-recorrer-argumentos">7. Recorrer argumentos</Enlace >
        <Lista>
          <li><Enlace href="#con-for">Con for</Enlace ></li>
          <li><Enlace href="#con-shift">Con shift</Enlace ></li>
        </Lista>
      </li>
      <li><Enlace href="#8-ejemplo-práctico-mini-calculadora">8. Ejemplo práctico:
        mini calculadora</Enlace ></li>
      <li><Enlace href="#en-resumen">En resumen</Enlace ></li>
    </Lista>
  );
}

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="funciones-variables-y-argumentos-en-bash-script">Funciones,
        Variables y Argumentos en Bash Script</Titulo>
      <Texto>Este documento explica como usar <strong>funciones</strong>,
        <strong>variables globales y locales</strong>, y
        <strong>argumentos</strong>.
      </Texto>
      <Linea />

      <TemarioCompleto temario={Temario}/>

      <Texto><Enlace href="./../readme.md#2-linux-y-bash-script">Regresar a la guía
        principal</Enlace ></Texto>
      <Linea />
      <Titulo title="h2" id="definición-de-funciones">1. Definición de funciones</Titulo>
      <Texto>En Bash, una función agrupa comandos que puedes reutilizar. Existen
        dos formas equivalentes:</Texto>
      <CodeBlock code={`# Forma 1 (más común)
mi_funcion() {
echo "Hola desde la función"
}

# Forma 2 (menos usada)
function mi_funcion2 }
echo "Hola desde la función 2"
}`} language="bash" />
      <Texto><strong>Llamar una función:</strong></Texto>
      <CodeBlock code={`mi_funcion`} language="bash" />
      <Linea />
      <Titulo title="h2" id="parámetros-en-funciones">2. Parámetros en funciones</Titulo>
      <Texto>Los argumentos se manejan igual que en un script:</Texto>
      <Tabla>
  <TablaCabezera headers={["Variable", "Significado"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>$1</TablaUnica>
      <TablaUnica>Primer argumento</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>$2</TablaUnica>
      <TablaUnica>Segundo argumento</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>$@</TablaUnica>
      <TablaUnica>Todos los argumentos</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>$#</TablaUnica>
      <TablaUnica>Cantidad de argumentos</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
      <Texto>Ejemplo:</Texto>
      <CodeBlock code={`saludar() {
echo "Hola $1 $2"
}

saludar "Francisco" "Vélez"
# → Hola Francisco Vélez`} language="bash" />
      <Linea />
      <Titulo title="h2" id="devolver-valores">3. Devolver valores</Titulo>
      <Texto>En Bash, return solo devuelve <strong>códigos de salida
        (= éxito, ≠0 = error)</strong>. Para devolver datos reales se usa
        echo y <strong>captura de comandos</strong>:
      </Texto>
      <CodeBlock code={`sumar() {
echo $(( $1 + $2 ))
}

resultado=$(sumar 5 7)
echo "La suma es: $resultado"
# → La suma es: 12`} language="bash" />
      <Linea />
      <Titulo title="h2" id="variables-globales-y-locales">4. Variables Globales y
        Locales</Titulo>
      <Texto>Por defecto, todas las variables son <strong>globales</strong>. Para
        que existan solo dentro de la función, usa local.</Texto>
      <CodeBlock code={`mensaje="Hola mundo"

cambiar() {
local mensaje="Soy local"
echo "Dentro: $mensaje"
}

echo "Antes: $mensaje"
cambiar
echo "Después: $mensaje"`} language="bash" />
      <Texto><strong>Diferencias clave:</strong></Texto>
      <Tabla>
  <TablaCabezera headers={["Tipo", "Alcance", "Vida útil"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>Global</TablaUnica>
      <TablaUnica>Todo el script</TablaUnica>
      <TablaUnica>Hasta que termina el script</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Local</TablaUnica>
      <TablaUnica>Solo dentro de la función</TablaUnica>
      <TablaUnica>Se destruye al salir de la función</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
      <Texto>Usa <strong>local</strong> para evitar modificar
        variables globales sin querer.</Texto>
      <Linea />
      <Titulo title="h2" id="argumentos-en-scripts">5. Argumentos en scripts</Titulo>
      <Texto>Cuando ejecutas un script, puedes pasarle argumentos:</Texto>
      <CodeBlock code={`#!/bin/bash
echo "Hola $1"`} language="bash" />
      <Texto>Ejecución:</Texto>
      <CodeBlock code={`bash script.sh Francisco
# → Hola Francisco`} language="bash" />
      <Texto>Variables especiales:</Texto>
      <Tabla>
  <TablaCabezera headers={["Variable", "Significado"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>$0</TablaUnica>
      <TablaUnica>Nombre del script</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>$1, $2...</TablaUnica>
      <TablaUnica>Argumentos individuales</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>$#</TablaUnica>
      <TablaUnica>Número de argumentos</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>$@</TablaUnica>
      <TablaUnica>Todos los argumentos como lista</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>$*</TablaUnica>
      <TablaUnica>Todos los argumentos como una sola cadena</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
      <Linea />
      <Titulo title="h2" id="validaciones-útiles">6. Validaciones útiles</Titulo>
      <Texto><strong>Validar número de argumentos:</strong></Texto>
      <CodeBlock code={`if [ $# -ne 2 ]; then
echo "Uso: $0 num1 num2"
exit 1
fi`} language="bash" />
      <Texto><strong>Validar argumento vacío:</strong></Texto>
      <CodeBlock code={`if [ -z "$1" ]; then
echo "Error: falta argumento"
exit 1
fi`} language="bash" />
      <Texto><strong>Validar que sea un número:</strong></Texto>
      <CodeBlock code={`if ! [[ "$1" =~ ^[0-9]+$ ]]; then
echo "Error: $1 no es un número"
exit 1
fi`} language="bash" />
      <Linea />
      <Titulo title="h2" id="recorrer-argumentos">7. Recorrer argumentos</Titulo>
      <Titulo title="h3" id="con-for">Con for</Titulo>
      <CodeBlock code={`for arg in "$@"; do
echo "Argumento: $arg"
done`} language="bash" />
      <Titulo title="h3" id="con-shift">Con shift</Titulo>
      <Texto>shift elimina el primer argumento ($1) y
        mueve los demás a la izquierda.</Texto>
      <CodeBlock code={`while [ $# -gt 0 ]; do
echo "Actual: $1"
shift
done`} language="bash" />
      <Texto>shift 2 eliminaría los dos primeros argumentos de
        golpe.</Texto>
      <Linea />
      <Titulo title="h2" id="ejemplo-práctico-mini-calculadora">8. Ejemplo práctico: mini
        calculadora</Titulo>
      <CodeBlock code={`#!/bin/bash

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
esac`} language="bash" />
      <Linea />
      <Titulo title="h2" id="en-resumen">En resumen</Titulo>
      <Tabla>
  <TablaCabezera headers={["Concepto", "Clave"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>Definir función</TablaUnica>
      <TablaUnica>{"nombre() {... }"}</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Llamar función</TablaUnica>
      <TablaUnica>nombre</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Argumentos</TablaUnica>
      <TablaUnica>$1, $2, $@,
              $#</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Devolver valor</TablaUnica>
      <TablaUnica>echo + $(comando)</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Variable local</TablaUnica>
      <TablaUnica>local nombre=valor</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Recorrer argumentos</TablaUnica>
      <TablaUnica>for arg in "$@" o
              while [ $# -gt 0 ]; do ...; shift; done</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
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
