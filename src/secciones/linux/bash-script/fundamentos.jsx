import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../../../componentes/organismos/estructura.jsx";
import { Tabla, TablaCabezera, TablaFila, TablaUnica } from "../../../componentes/moleculas/tabla.jsx";

import Enlace from "../../../componentes/atomos/enlace.jsx";
import Linea from "../../../componentes/atomos/linea.jsx";
import Lista from "../../../componentes/moleculas/lista.jsx";
import Texto from "../../../componentes/atomos/texto.jsx";
import Titulo from "../../../componentes/moleculas/titulo.jsx";
import Codigo from "../../../componentes/moleculas/codigo.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#fundamentos-de-bash-script">Fundamentos de Bash Script</Enlace >
        <Lista>
          <li><Enlace href="#temario">Temario</Enlace ></li>
          <li><Enlace href="#cabecera-del-script">Cabecera del Script</Enlace ></li>
          <li><Enlace href="#imprimir-texto-y-comentarios">Imprimir texto y
            comentarios</Enlace ></li>
          <li><Enlace href="#variables-en-bash">Variables en Bash</Enlace >
            <Lista>
              <li><Enlace href="#variables-especiales">Variables especiales</Enlace ></li>
            </Lista>
          </li>
          <li><Enlace href="#strings">Strings</Enlace ></li>
          <li><Enlace href="#valores-constantes">Valores constantes</Enlace ></li>
          <li><Enlace href="#operaciones-matemáticas">Operaciones matemáticas</Enlace >
            <Lista>
              <li><Enlace href="#símbolos-matemáticos">Símbolos matemáticos</Enlace ></li>
            </Lista>
          </li>
          <li><Enlace href="#leer-entrada-del-usuario">Leer entrada del usuario</Enlace >
            <Lista>
              <li><Enlace href="#parámetros-útiles">Parámetros útiles</Enlace ></li>
            </Lista>
          </li>
        </Lista>
      </li>

    </Lista>
  );
}

function nameabcd({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" id="fundamentos-de-bash-script">Fundamentos de Bash Script</Titulo>
        <Linea />

        <TemarioCompleto temario={Temario} />

        <Texto><b>Recurso Extra:</b> Video de YouTube de Bash Script desde cero:</Texto>

        <Lista className="
            p1 list-disc my-2
            ">
          <li>
            <Enlace href="https:/www.youtube.com/watch?v=RUorAzaDftg">Ir a curso de bash script desde cero - El pinguino de mario (30m)</Enlace>
          </li>
          <li>
            <Enlace href="https:/www.youtube.com/watch?v=H4ayPYcZEfI">Ir a curso de bash script desde cero - Fazt
              (2h 23m)</Enlace>
          </li>
          <li>
            <Enlace href="https:/www.youtube.com/results?search_query=curso+de+bash+script+desde+cero">Buscar curso
              de bash script desde cero</Enlace>
          </li>
        </Lista>

        <Linea />

        <Titulo title="h2" id="cabecera-del-script">Cabecera del Script</Titulo>
        <Texto>La <strong>cabecera</strong> o <em>shebang</em> indica qué intérprete
          ejecutará el script.</Texto>
        <Codigo code={`#!/bin/bash`} language="bash" />

        <Linea />

        <Titulo title="h2" id="imprimir-texto-y-comentarios">Imprimir texto y comentarios</Titulo>
        <Texto>Puedes imprimir texto con echo y escribir comentarios de
          varias formas.</Texto>
        <Codigo code={`# Imprimir texto
echo "hola mundo !!!"    # Imprime hola mundo por consola

# Esto es un comentario de una sola línea.`} language="bash" />
        <Texto>Comentarios multilínea pueden simularse con dos métodos:</Texto>
        <Codigo code={`: '
Comentario (*recomendado)
multilinea simulado
con null command con string.
'

<< 'EOF'
Comentario
multilinea simulado
con here document descartado.
EOF`} language="bash" />
        <Linea />
        <Titulo title="h2" id="variables-en-bash">Variables en Bash</Titulo>
        <Texto>En Bash solo existe un tipo de dato: <strong>string</strong> (cadena
          de texto). Se puede escribir <strong>sin comillas</strong>, o con
          <strong>comillas simples</strong> o <strong>dobles</strong>.
        </Texto>
        <Texto>Ejemplo:</Texto>
        <Codigo code={`name=Fravelz
today="10 09 2025"
message='hola $name'`} language="bash" />
        <blockquote>
          <Texto>Importante: No deben colocarse espacios al declarar una variable.
            Bash es sensible a los espacios.</Texto>
        </blockquote>
        <Texto>Para usar una variable se coloca $ antes de su nombre:
          $variable
        </Texto>
        <Titulo title="h3" id="variables-especiales">Variables especiales</Titulo>
        <Tabla>
          <TablaCabezera headers={["Variable", "Significado"]} />

          <tbody>
            <TablaFila>
              <TablaUnica>$0</TablaUnica>
              <TablaUnica>Nombre del script</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>$1, $2, …</TablaUnica>
              <TablaUnica>Argumentos del script</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>$#</TablaUnica>
              <TablaUnica>Número de argumentos</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>$?</TablaUnica>
              <TablaUnica>Código de salida del último comando</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>$$</TablaUnica>
              <TablaUnica>PID del script actual</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>
        <Texto>Para imprimir valores (evitando errores con espacios), se
          recomienda:</Texto>
        <Codigo code={`echo "$variable"`} language="bash" />
        <Linea />
        <Titulo title="h2" id="strings">Strings</Titulo>
        <Codigo code={`name=Fravelz
today="10 09 2025"
message='hola $name'`} language="bash" />
        <Texto>Los strings pueden ser multilínea (guarda exactamente los saltos de
          líneas que tenga):</Texto>
        <Codigo code={`text="
Este es un string
Multilinea :)
"`} language="bash" />
        <Texto>Llamar a variables e imprimir:</Texto>
        <Codigo code={`echo "Mi nombre es $name y estamos en el year $today"
echo $message
echo $text`} language="bash" />
        <Linea />
        <Titulo title="h2" id="valores-constantes">Valores constantes</Titulo>
        <Texto>Usa readonly para declarar constantes:</Texto>
        <Codigo code={`readonly PI=3.1416`} language="bash" />
        <Linea />
        <Titulo title="h2" id="operaciones-matemáticas">Operaciones matemáticas</Titulo>
        <Texto>Bash permite realizar operaciones aritméticas en las siguientes
          formas:</Texto>
        <Codigo code={`a=1
b=2

echo $((a + b))
echo $(expr $a + $b)`} language="bash" />
        <Titulo title="h3" id="símbolos-matemáticos">Símbolos matemáticos</Titulo>
        <Tabla>
          <TablaCabezera headers={["Símbolo", "Operación"]} />

          <tbody>
            <TablaFila>
              <TablaUnica>+</TablaUnica>
              <TablaUnica>Suma</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>-</TablaUnica>
              <TablaUnica>Resta</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>*</TablaUnica>
              <TablaUnica>Multiplicación</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>/</TablaUnica>
              <TablaUnica>División</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>**</TablaUnica>
              <TablaUnica>Exponente</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>%</TablaUnica>
              <TablaUnica>Módulo (resto)</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>
        <Linea />
        <Titulo title="h2" id="leer-entrada-del-usuario">Leer entrada del usuario</Titulo>
        <Texto>El comando read se usa para leer datos del usuario.</Texto>
        <Titulo title="h3" id="parámetros-útiles">Parámetros útiles</Titulo>

        <Tabla>
          <TablaCabezera headers={["Parámetro", "Descripción"]} />

          <tbody>
            <TablaFila>
              <TablaUnica>-s</TablaUnica>
              <TablaUnica>Oculta la entrada (útil para contraseñas)</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>-p</TablaUnica>
              <TablaUnica>Muestra un mensaje en línea</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>-t</TablaUnica>
              <TablaUnica>Define un límite de tiempo (timeout)</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>

        <Texto>Ejemplo:</Texto>

        <Codigo language="bash"
          code={`echo "Cual es tu User?"
read user

echo "Cual es tu name?"
read -p name

read -t 4 -p "Escribe algo en 4 seg.:" value
echo "Ingresaste $value"`}
        />

      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}
export default nameabcd;
