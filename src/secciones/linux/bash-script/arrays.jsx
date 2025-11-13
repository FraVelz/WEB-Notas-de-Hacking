import Enlace from "./../../../componentes/atomos/enlace.jsx";
import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "./../../../componentes/organismos/estructura.jsx";
import Linea from "./../../../componentes/atomos/linea.jsx";
import Lista from "./../../../componentes/moleculas/lista.jsx";
import Texto from "./../../../componentes/atomos/texto.jsx";
import Titulo from "./../../../componentes/moleculas/titulo.jsx";
import Codigo  from "../../../componentes/moleculas/codigo.jsx";

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
        <Titulo title="h1" id="arrays-en-bash-script">
          Arrays en bash script
        </Titulo>

        <Linea />

        <Titulo title="h2" className="lg:hidden">Temario</Titulo>

        <TemarioCompleto temario={Temario} />

        <Titulo title="h2" id="definir-arrays">1. Definir arrays</Titulo>

        <Codigo language="bash"
        code={`# Array con valores
nombres=("Ana" "Luis" "Pedro")

# Otra forma (asignando por índice)
numeros[0]=10
numeros[1]=20
numeros[2]=30`}
        />

        <Linea />
        <Titulo title="h2" id="acceder-a-elementos">2. Acceder a elementos</Titulo>

        <Codigo language="bash" code=
          {"echo \"${nombres[0]}\"   # Ana\necho \"${nombres[2]}\"   # Pedro"}
        />

        <Texto>Si usas un índice que no existe:</Texto>
        <Codigo language="bash" code=
          {"echo \"${nombres[5]}\"   # vacío"}
        />

        <Linea />
        <Titulo title="h2" id="mostrar-todos-los-elementos">3. Mostrar todos los elementos</Titulo>

        <Codigo language="bash" code=
          {"echo \"${nombres[@]}\"   # Ana Luis Pedro\necho \"${numeros[*]}\"   # 10 20 30"}
        />

        <Linea />
        <Titulo title="h2" id="tamaño-del-array">4. Tamaño del array</Titulo>

        <Codigo language="bash" code=
          {"echo \"${#nombres[@]}\"  # 3"}
        />

        <Linea />
        <Titulo title="h2" id="recorrer-arrays">5. Recorrer arrays</Titulo>
        <Titulo title="h3" id="con-for">Con for</Titulo>

        <Codigo language="bash" code=
          {"for nombre in \"${nombres[@]}\"; do\necho \"Hola $nombre\"\ndone"}
        />

        <Texto>Salida:</Texto>
        <Codigo language="bash" code=
          {`Hola Ana
Hola Luis
Hola Pedro`}
        />

        <Titulo title="h3" id="con-indices">Con índices</Titulo>
        <Codigo language="bash" code=
          {"for i in \"${!nombres[@]}\"; do\n  echo \"Índice: $i → Valor: ${nombres[$i]}\"\ndone"}
        />

        <Linea />

        <Titulo title="h2" id="anadir-y-modificar-elementos">6. Añadir y modificar elementos</Titulo>
        <Codigo language="bash" code=
          {`nombres+=("Carla")      # Agregar al final
nombres[1]="Lucía"       # Modificar el índice 1`}
        />

        <Linea />

        <Titulo title="h2" id="eliminar-elementos">7. Eliminar elementos</Titulo>

        <Codigo language="bash" code=
          {`unset nombres[1]       # Elimina solo el índice 1
unset nombres           # Borra todo el array`}
        />

        <Linea />

        <Titulo title="h2" id="subarrays-rebanadas">8. Subarrays (rebanadas)</Titulo>

        <Codigo language="bash" code=
          {"echo \"${nombres[@]:1:2}\"   # desde índice 1, tomar 2 elementos"}
        />

        <Linea />

        <Titulo title="h2" id="arrays-asociativos-tipo-diccionario">9. Arrays asociativos (tipo diccionario)</Titulo>

        <Texto>Disponibles en <strong>Bash 4+</strong>.</Texto>

        <Codigo language="bash" code=
          {"declare -A capitales\ncapitales[Colombia]=\"Bogotá\"\ncapitales[México]=\"CDMX\"\ncapitales[España]=\"Madrid\"\n\necho \"${capitales[Colombia]}\"   # Bogotá\n\n# Recorrer claves y valores\nfor pais in \"${!capitales[@]}\"; do\n  echo \"$pais → ${capitales[$pais]}\"\ndone"}
        />

        <Texto>Salida:</Texto>
        <Codigo language="bash" code=
          {`México → CDMX
España → Madrid
Colombia → Bogotá`}
        />

        <Linea />

        <Titulo title="h2" id="cosas-utiles">10. Cosas útiles</Titulo>

        <Lista>
          <li>
            <strong>Índice del último elemento</strong>:
            <Codigo language="bash" code=
              {"echo \"${!nombres[@]}\"  # muestra todos los índices"}
            />
          </li>
          <li>
            <strong>Ordenar un array</strong>:
            <Codigo language="bash" code=
              {"numeros=(3 8 1)\nsorted=($(printf \"%s\n\" \"${numeros[@]}\" | sort -n))\necho \"${sorted[@]}\"   # 1 3 8"}
            />
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
