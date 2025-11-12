import Enlace from "../../../componentes/atomos/enlace.jsx";
import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../../../componentes/organismos/estructura.jsx";
import Linea from "../../../componentes/atomos/linea.jsx";
import Lista from "../../../componentes/moleculas/lista.jsx";
import Texto from "../../../componentes/atomos/texto.jsx";
import Titulo from "../../../componentes/moleculas/titulo.jsx";
import Codigo from "../../../componentes/moleculas/codigo.jsx";
import { Tabla, TablaCabezera, TablaFila, TablaUnica } from "../../../componentes/moleculas/tabla.jsx";
import CodeBlock from "../../../componentes/moleculas/codigo.jsx";

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

        <Titulo title="h2" id="cabecera-del-script">Cabecera del Script</Titulo>
        <Texto>La <strong>cabecera</strong> o <em>shebang</em> indica qué intérprete
          ejecutará el script.</Texto>
        <CodeBlock code={`#!/bin/bash`} language="bash" />
        <Texto>o sí prefieres video de YouTube, puedes elegir alguno de estos:</Texto>

        <Lista className="
            p1 list-disc my-2
            ">
          <li>
            <Enlace href="https:/www.youtube.com/watch?v=L906Kti3gzE">Ir a Curso de Linux - HolaMundo (35m)</Enlace>
          </li>

          <li>
            <Enlace href="https:/www.youtube.com/watch?v=8v1cR7-msQ0">Ir a Curso de Linux - Hixec (3h)</Enlace>
          </li>

          <li>
            <Enlace href="https:/www.youtube.com/results?search_query=curso+de+linux+desde+cero">Buscar Curso de Linux
            </Enlace>
          </li>
        </Lista>

        <Texto>Recursos extras:</Texto>

        <Lista className="
            p1 list-disc my-2
            ">
          <li>
            <Enlace href="https://www.bonaval.com/kb/cheats-chuletas/comandos-basicos-linux">Ir a /www.bonaval.com/ Comandos
              Basicos de Linux</Enlace>
          </li>
        </Lista>


        <Linea />
        <Titulo title="h2" id="imprimir-texto-y-comentarios">Imprimir texto y comentarios</Titulo>
        <Texto>Puedes imprimir texto con echo y escribir comentarios de
          varias formas.</Texto>
        <CodeBlock code={`# Imprimir texto
echo "hola mundo !!!"    # Imprime hola mundo por consola

# Esto es un comentario de una sola línea.`} language="bash" />
        <Texto>Comentarios multilínea pueden simularse con dos métodos:</Texto>
        <CodeBlock code={`: '
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
        <CodeBlock code={`name=Fravelz
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
        <CodeBlock code={`echo "$variable"`} language="bash" />
        <Linea />
        <Titulo title="h2" id="strings">Strings</Titulo>
        <CodeBlock code={`name=Fravelz
today="10 09 2025"
message='hola $name'`} language="bash" />
        <Texto>Los strings pueden ser multilínea (guarda exactamente los saltos de
          líneas que tenga):</Texto>
        <CodeBlock code={`text="
Este es un string
Multilinea :)
"`} language="bash" />
        <Texto>Llamar a variables e imprimir:</Texto>
        <CodeBlock code={`echo "Mi nombre es $name y estamos en el year $today"
echo $message
echo $text`} language="bash" />
        <Linea />
        <Titulo title="h2" id="valores-constantes">Valores constantes</Titulo>
        <Texto>Usa readonly para declarar constantes:</Texto>
        <CodeBlock code={`readonly PI=3.1416`} language="bash" />
        <Linea />
        <Titulo title="h2" id="operaciones-matemáticas">Operaciones matemáticas</Titulo>
        <Texto>Bash permite realizar operaciones aritméticas en las siguientes
          formas:</Texto>
        <CodeBlock code={`a=1
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
