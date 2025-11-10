import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "./../../../componentes/estructura.jsx";

import Titulo from "./../../../componentes/titulo.jsx";
import Lista from "./../../../componentes/lista.jsx";
import Texto from "./../../../componentes/texto.jsx";
import Linea from "./../../../componentes/linea.jsx";
import Enlace from "./../../../componentes/enlace.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#1-definir-arrays">1. Definir arrays</Enlace></li>
      <li><Enlace href="#2-acceder-a-elementos">2. Acceder a elementos</Enlace></li>
      <li><Enlace href="#3-mostrar-todos-los-elementos">3. Mostrar todos los elementos</Enlace></li>
      <li><Enlace href="#4-tamaño-del-array">4. Tamaño del array</Enlace></li>
      <li>
        <Enlace href="#5-recorrer-arrays">5. Recorrer arrays</Enlace>
        <Lista>
          <li><Enlace href="#con-for">Con for</Enlace></li>
          <li><Enlace href="#con-indices">Con índices</Enlace></li>
        </Lista>
      </li>
      <li><Enlace href="#6-anadir-y-modificar-elementos">6. Añadir y modificar elementos</Enlace></li>
      <li><Enlace href="#7-eliminar-elementos">7. Eliminar elementos</Enlace></li>
      <li><Enlace href="#8-subarrays-rebanadas">8. Subarrays (rebanadas)</Enlace></li>
      <li><Enlace href="#9-arrays-asociativos-tipo-diccionario">9. Arrays asociativos (tipo diccionario)</Enlace></li>
      <li><Enlace href="#10-cosas-utiles">10. Cosas útiles</Enlace></li>
    </Lista>
  );
}

function Arrays() {
  return (
    <>
      <Estructura>

            <Linea />

           <Texto>O si prefieres video de YouTube:</Texto>

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

            <Texto>Practica general</Texto>

            <Lista className="
            p1 list-disc my-2
            ">
                <li>
                    <Enlace href="./linux/bandit-resolucion.md">Ir a Practicar con bandit</Enlace>
                </li>
            </Lista>

 
        <Titulo title="h1" id="arrays-en-bash-script">
          Arrays en bash script
        </Titulo>

        <Linea />

        <Titulo title="h2" className="lg:hidden">Temario</Titulo>

        <TemarioCompleto temario={Temario} />

        <Titulo title="h2" id="definir-arrays">1. Definir arrays</Titulo>

        <pre className="sourceCode bash">
          {`# Array con valores
nombres=("Ana" "Luis" "Pedro")

# Otra forma (asignando por índice)
numeros[0]=10
numeros[1]=20
numeros[2]=30`}
        </pre>

        <Linea />
        <Titulo title="h2" id="acceder-a-elementos">2. Acceder a elementos</Titulo>

        <pre className="sourceCode bash">
          {"echo \"${nombres[0]}\"   # Ana\necho \"${nombres[2]}\"   # Pedro"}
        </pre>

        <Texto>Si usas un índice que no existe:</Texto>
        <pre className="sourceCode bash">
          {"echo \"${nombres[5]}\"   # vacío"}
        </pre>

        <Linea />
        <Titulo title="h2" id="mostrar-todos-los-elementos">3. Mostrar todos los elementos</Titulo>

        <pre className="sourceCode bash">
          {"echo \"${nombres[@]}\"   # Ana Luis Pedro\necho \"${numeros[*]}\"   # 10 20 30"}
        </pre>

        <Linea />
        <Titulo title="h2" id="tamaño-del-array">4. Tamaño del array</Titulo>

        <pre className="sourceCode bash">
          {"echo \"${#nombres[@]}\"  # 3"}
        </pre>

        <Linea />
        <Titulo title="h2" id="recorrer-arrays">5. Recorrer arrays</Titulo>
        <Titulo title="h3" id="con-for">Con for</Titulo>

        <pre className="sourceCode bash">
          {"for nombre in \"${nombres[@]}\"; do\necho \"Hola $nombre\"\ndone"}
        </pre>

        <Texto>Salida:</Texto>
        <pre className="sourceCode txt">
          {`Hola Ana
Hola Luis
Hola Pedro`}
        </pre>

        <Titulo title="h3" id="con-indices">Con índices</Titulo>
        <pre className="sourceCode bash">
          {"for i in \"${!nombres[@]}\"; do\n  echo \"Índice: $i → Valor: ${nombres[$i]}\"\ndone"}
        </pre>

        <Linea />

        <Titulo title="h2" id="anadir-y-modificar-elementos">6. Añadir y modificar elementos</Titulo>
        <pre className="sourceCode bash">
          {`nombres+=("Carla")      # Agregar al final
nombres[1]="Lucía"       # Modificar el índice 1`}
        </pre>

        <Linea />

        <Titulo title="h2" id="eliminar-elementos">7. Eliminar elementos</Titulo>

        <pre className="sourceCode bash">
          {`unset nombres[1]       # Elimina solo el índice 1
unset nombres           # Borra todo el array`}
        </pre>

        <Linea />

        <Titulo title="h2" id="subarrays-rebanadas">8. Subarrays (rebanadas)</Titulo>

        <pre className="sourceCode bash">
          {"echo \"${nombres[@]:1:2}\"   # desde índice 1, tomar 2 elementos"}
        </pre>

        <Linea />

        <Titulo title="h2" id="arrays-asociativos-tipo-diccionario">9. Arrays asociativos (tipo diccionario)</Titulo>

        <Texto>Disponibles en <strong>Bash 4+</strong>.</Texto>

        <pre className="sourceCode bash">
          {"declare -A capitales\ncapitales[Colombia]=\"Bogotá\"\ncapitales[México]=\"CDMX\"\ncapitales[España]=\"Madrid\"\n\necho \"${capitales[Colombia]}\"   # Bogotá\n\n# Recorrer claves y valores\nfor pais in \"${!capitales[@]}\"; do\n  echo \"$pais → ${capitales[$pais]}\"\ndone"}
        </pre>

        <Texto>Salida:</Texto>
        <pre className="sourceCode txt">
          {`México → CDMX
España → Madrid
Colombia → Bogotá`}
        </pre>

        <Linea />

        <Titulo title="h2" id="cosas-utiles">10. Cosas útiles</Titulo>

        <Lista>
          <li>
            <Texto><strong>Índice del último elemento</strong>:</Texto>
            <pre className="sourceCode bash">
              {"echo \"${!nombres[@]}\"  # muestra todos los índices"}
            </pre>
          </li>
          <li>
            <Texto><strong>Ordenar un array</strong>:</Texto>
            <pre className="sourceCode bash">
              {"numeros=(3 8 1)\nsorted=($(printf \"%s\n\" \"${numeros[@]}\" | sort -n))\necho \"${sorted[@]}\"   # 1 3 8"}
            </pre>
          </li>
        </Lista>

        <Linea />
        <Texto>En resumen:</Texto>
        <Lista>
          <li>{"array=(val1 val2 val3) → define."}</li>
          <li>{"${array[i]} → acceder."}</li>
          <li>{"${array[@]} → todos los valores."}</li>
          <li>{"declare -A → arrays asociativos."}</li>
        </Lista>
      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}

export default Arrays;
