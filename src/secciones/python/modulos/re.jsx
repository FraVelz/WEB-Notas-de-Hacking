import Enlace from "../../../componentes/atomos/enlace.jsx";
import Linea from "../../../componentes/atomos/linea.jsx";
import Lista from "../../../componentes/moleculas/lista.jsx";
import Texto from "./../../../componentes/atomos/texto.jsx";
import Titulo from "../../../componentes/moleculas/titulo.jsx";
import { Tabla, TablaCabezera, TablaFila, TablaUnica } from "../../../componentes/moleculas/tabla.jsx";
import Codigo from "../../../componentes/moleculas/codigo.jsx";

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="re-en-python-expreciones-regulares">Re en Python (expreciones
        regulares)</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><Enlace href="#re-en-python-expreciones-regulares">Re en Python
          (expreciones regulares)</Enlace >
          <Lista>
            <li><Enlace href="#temario">Temario</Enlace ></li>
            <li><Enlace href="#qué-es-re">¿Qué es re?</Enlace ></li>
            <li><Enlace href="#funciones-principales">FUNCIONES PRINCIPALES</Enlace >
              <Lista>
                <li><Enlace href="#1-rematchpatrón-texto">1. re.match(patrón, texto)</Enlace ></li>
                <li><Enlace href="#2-researchpatrón-texto">2. re.search(patrón,
                  texto)</Enlace ></li>
                <li><Enlace href="#3-refindallpatrón-texto">3. re.findall(patrón,
                  texto)</Enlace ></li>
                <li><Enlace href="#4-refinditerpatrón-texto">4. re.finditer(patrón,
                  texto)</Enlace ></li>
                <li><Enlace href="#5-resubpatrón-reemplazo-texto-count0">5. re.sub(patrón,
                  reemplazo, texto, count=0)</Enlace ></li>
                <li><Enlace href="#6-resplitpatrón-texto-maxsplit0">6. re.split(patrón,
                  texto, maxsplit=0)</Enlace ></li>
                <li><Enlace href="#7-recompilepatrón-flags0">7. re.compile(patrón,
                  flags=0)</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#objetos-match">OBJETOS Match</Enlace ></li>
            <li><Enlace href="#metacaracteres-más-importantes">METACARACTERES MÁS
              IMPORTANTES</Enlace ></li>
            <li><Enlace href="#secuencias-especiales">SECUENCIAS ESPECIALES</Enlace ></li>
            <li><Enlace href="#flags-comunes">FLAGS COMUNES</Enlace ></li>
            <li><Enlace href="#ejemplos-prácticos">EJEMPLOS PRÁCTICOS</Enlace >
              <Lista>
                <li><Enlace href="#1-validar-un-correo-electrónico">1. Validar un correo
                  electrónico</Enlace ></li>
                <li><Enlace href="#2-extraer-números-de-un-texto">2. Extraer números de un
                  texto</Enlace ></li>
                <li><Enlace href="#3-reemplazar-palabras">3. Reemplazar palabras</Enlace ></li>
                <li><Enlace href="#4-separar-texto-por-comas-o-espacios">4. Separar texto por
                  comas o espacios</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#buenas-prácticas">Buenas prácticas</Enlace ></li>
            <li><Enlace href="#ejercicio-rápido">Ejercicio rápido</Enlace ></li>
          </Lista>
        </li>
      </Lista>
      <Texto><Enlace href="./../../readme.md#5-python">Regresar a la Guía
        Principal</Enlace ></Texto>
      <Linea />
      <Titulo title="h2" id="qué-es-re">¿Qué es re?</Titulo>
      <Texto>El módulo <strong>re</strong> (de <em>regular
        expressions</em>, expresiones regulares) permite <strong>buscar,
          reemplazar y analizar texto mediante patrones</strong>.</Texto>
      <Texto>Se importa con:</Texto>
      <Codigo code={`import re`} language="python" />
      <Linea />
      <Titulo title="h2" id="funciones-principales">FUNCIONES PRINCIPALES</Titulo>
      <Titulo title="h3" id="re.matchpatrón-texto">1. re.match(patrón, texto)</Titulo>
      <Texto>Busca <strong>solo al inicio del texto</strong>.</Texto>
      <Codigo code={`import re
m = re.match(r"Hola", "Hola mundo")
print(m.group())  # Hola`} language="python" />
      <Linea />
      <Titulo title="h3" id="re.searchpatrón-texto">2. re.search(patrón, texto)</Titulo>
      <Texto>Busca <strong>en cualquier parte</strong> del texto (la primera
        coincidencia).</Texto>
      <Codigo code={`re.search(r"mundo", "Hola mundo").group()  # mundo`} language="python" />
      <Linea />
      <Titulo title="h3" id="re.findallpatrón-texto">3. re.findall(patrón, texto)</Titulo>
      <Texto>Devuelve <strong>todas las coincidencias</strong> en una lista.</Texto>
      <Codigo code={`re.findall(r"\d+", "Edad 17 años, código 2025")  # ['17', '2025']`} language="python" />
      <Linea />
      <Titulo title="h3" id="re.finditerpatrón-texto">4. re.finditer(patrón, texto)</Titulo>
      <Texto>Devuelve un <strong>iterador</strong> con objetos Match
        (útil para posiciones).</Texto>
      <Codigo code={`for m in re.finditer(r"\d+", "x=5 y=10 z=20"):
print(m.group(), m.start(), m.end())`} language="python" />
      <Linea />
      <Titulo title="h3" id="re.subpatrón-reemplazo-texto-count0">5. re.sub(patrón,
        reemplazo, texto, count=0)</Titulo>
      <Texto><strong>Reemplaza</strong> coincidencias por otro texto.</Texto>
      <Codigo code={`re.sub(r"\d+", "X", "Tengo 2 perros y 3 gatos")  # 'Tengo X perros y X gatos'`} language="python" />
      <Linea />
      <Titulo title="h3" id="re.splitpatrón-texto-maxsplit0">6. re.split(patrón, texto,
        maxsplit=0)</Titulo>
      <Texto><strong>Divide el texto</strong> usando el patrón como separador.</Texto>
      <Codigo code={`re.split(r"\s+", "uno   dos tres")  # ['uno', 'dos', 'tres']`} language="python" />
      <Linea />
      <Titulo title="h3" id="re.compilepatrón-flags0">7. re.compile(patrón, flags=0)</Titulo>
      <Texto>Compila el patrón para reutilizarlo muchas veces (más eficiente).</Texto>
      <Codigo code={`patron = re.compile(r"\d+")
print(patron.findall("a1b22c333"))  # ['1', '22', '333']`} language="python" />
      <Linea />
      <Titulo title="h2" id="objetos-match">OBJETOS Match</Titulo>
      <Texto>Cuando haces match() o search(), obtienes
        un objeto con información útil:</Texto>
      <Codigo code={`m = re.search(r"(\d+)", "Edad: 25 años")
print(m.group())    # '25'
print(m.start())    # 6
print(m.end())      # 8
print(m.span())     # (6, 8)`} language="python" />
      <Texto>Sí hay <strong>grupos</strong> (entre paréntesis):</Texto>
      <Codigo code={`m = re.search(r"(\d+)\s*(años)", "Edad: 25 años")
print(m.groups())   # ('25', 'años')
print(m.group(1))   # '25'
print(m.group(2))   # 'años'`} language="python" />
      <Linea />
      <Titulo title="h2" id="metacaracteres-más-importantes">METACARACTERES MÁS
        IMPORTANTES</Titulo>
      <Tabla>
  <TablaCabezera headers={["Símbolo", "Significado", "Ejemplo"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>.</TablaUnica>
      <TablaUnica>Cualquier carácter excepto \n</TablaUnica>
      <TablaUnica>a.b → “acb”, “arb”</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>^</TablaUnica>
      <TablaUnica>Inicio de línea</TablaUnica>
      <TablaUnica>^Hola</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>$</TablaUnica>
      <TablaUnica>Fin de línea</TablaUnica>
      <TablaUnica>mundo$</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>*</TablaUnica>
      <TablaUnica>0 o más repeticiones</TablaUnica>
      <TablaUnica>a* → ““,”aaa”</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>+</TablaUnica>
      <TablaUnica>1 o más repeticiones</TablaUnica>
      <TablaUnica>a+ → “a”, “aaa”</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>?</TablaUnica>
      <TablaUnica>0 o 1 repetición</TablaUnica>
      <TablaUnica>colou?r → “color”, “colour”</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>{`{n}`}</TablaUnica>
      <TablaUnica>Exactamente n repeticiones</TablaUnica>
      <TablaUnica>\d{`{4}`} → "2025"</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>{`{n,}`}</TablaUnica>
      <TablaUnica>n o más</TablaUnica>
      <TablaUnica>\d{`{2,}`}</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>{`{n, m}`}</TablaUnica>
      <TablaUnica>entre n y m</TablaUnica>
      <TablaUnica>\d{`{2, 4}`}</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>[]</TablaUnica>
      <TablaUnica>Conjunto de caracteres</TablaUnica>
      <TablaUnica>[aeiou], [0-9]</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>|</TablaUnica>
      <TablaUnica>Alternativa (OR) gato|perro</TablaUnica>
      <TablaUnica></TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>()</TablaUnica>
      <TablaUnica>Grupo de captura</TablaUnica>
      <TablaUnica>(abc)+</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>\</TablaUnica>
      <TablaUnica>Escape o secuencia especial</TablaUnica>
      <TablaUnica>\d, \s, \w</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
      <Linea />
      <Titulo title="h2" id="secuencias-especiales">SECUENCIAS ESPECIALES</Titulo>
      <Tabla>
  <TablaCabezera headers={["Secuencia", "Significado", "Ejemplo"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>\d</TablaUnica>
      <TablaUnica>Dígito [0-9]</TablaUnica>
      <TablaUnica>\d+ → “123”</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>\D</TablaUnica>
      <TablaUnica>No dígito</TablaUnica>
      <TablaUnica>\D+ → “abc”</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>\s</TablaUnica>
      <TablaUnica>Espacio, tab, salto de línea</TablaUnica>
      <TablaUnica>\s+</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>\S</TablaUnica>
      <TablaUnica>No espacio</TablaUnica>
      <TablaUnica>\S+</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>\w</TablaUnica>
      <TablaUnica>Alfanumérico [A-Za-z0-9_]</TablaUnica>
      <TablaUnica>\w+</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>\W</TablaUnica>
      <TablaUnica>No alfanumérico</TablaUnica>
      <TablaUnica>\W+</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>\b</TablaUnica>
      <TablaUnica>Límite de palabra</TablaUnica>
      <TablaUnica>\bpalabra\b</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>\B</TablaUnica>
      <TablaUnica>No límite de palabra</TablaUnica>
      <TablaUnica>\Bpalabra\B</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
      <Linea />
      <Titulo title="h2" id="flags-comunes">FLAGS COMUNES</Titulo>
      <Tabla>
  <TablaCabezera headers={["Flag", "Descripción"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>re.IGNORECASE o re.I</TablaUnica>
      <TablaUnica>Ignora mayúsculas/minúsculas</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>re.MULTILINE o re.M</TablaUnica>
      <TablaUnica>^ y $ funcionan por línea</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>re.DOTALL o re.S</TablaUnica>
      <TablaUnica>. incluye saltos de línea</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>re.VERBOSE o re.X</TablaUnica>
      <TablaUnica>Permite comentar y dar formato al patrón</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
      <Texto>Ejemplo:</Texto>
      <Codigo code={`patron = re.compile(r"""
^\d{4}     # 4 dígitos al inicio
-\d{2}     # guion y 2 dígitos
-\d{2}$    # guion y 2 dígitos al final
""", re.VERBOSE)
print(bool(patron.match("2025-10-27")))  # True`} language="python" />
      <Linea />
      <Titulo title="h2" id="ejemplos-prácticos">EJEMPLOS PRÁCTICOS</Titulo>
      <Titulo title="h3" id="validar-un-correo-electrónico">1. Validar un correo
        electrónico</Titulo>
      <Codigo code={`import re
patron = r"^[\w\.-]+@[\w\.-]+\.\w+$"
print(bool(re.match(patron, "usuario@mail.com")))  # True`} language="python" />
      <Linea />
      <Titulo title="h3" id="extraer-números-de-un-texto">2. Extraer números de un texto</Titulo>
      <Codigo code={`re.findall(r"\d+", "ID123, edad 45, año 2025")  # ['123', '45', '2025']`} language="python" />
      <Linea />
      <Titulo title="h3" id="reemplazar-palabras">3. Reemplazar palabras</Titulo>
      <Codigo code={`texto = "Hola mundo cruel"
nuevo = re.sub(r"cruel", "hermoso", texto)
print(nuevo)  # Hola mundo hermoso`} language="python" />
      <Linea />
      <Titulo title="h3" id="separar-texto-por-comas-o-espacios">4. Separar texto por comas o
        espacios</Titulo>
      <Codigo code={`re.split(r"[, ]+", "rojo, verde azul,amarillo")  # ['rojo', 'verde', 'azul', 'amarillo']`} language="python" />
      <Linea />
      <Titulo title="h2" id="buenas-prácticas">Buenas prácticas</Titulo>
      <Texto>✅ Usa r"./..." (raw strings) para no tener que escapar
        \. ✅ Compila patrones que usarás muchas veces con
        re.compile(). ✅ Usa re.fullmatch() sí
        necesitas que toda la cadena coincida. ✅ Usa ? después de
        * o + para <strong>modo no codicioso</strong>
        (lazy).
      </Texto>
      <Codigo code={`re.findall(r"", "")  # ['', '']`} language="python" />
      <Linea />
      <Titulo title="h2" id="ejercicio-rápido">Ejercicio rápido</Titulo>
      <Texto>Extrae todos los nombres de usuario de correos:</Texto>
      <Codigo code={`import re
texto = "Correos: ana@mail.com, juan123@dominio.org"
print(re.findall(r"(\w+)@", texto))  # ['ana', 'juan123']`} language="python" />
      <Linea />
      <Texto><Enlace href="./../../readme.md#5-python">Regresar a la Guía
        Principal</Enlace ></Texto>
      <blockquote>
        <Texto><strong>Autor:</strong> Fravelz</Texto>
      </blockquote>
    </>
  );
}
export default nameabcd;
