import Enlace from "../../../componentes/atomos/enlace.jsx";
import Linea from "../../../componentes/atomos/linea.jsx";
import Lista from "../../../componentes/moleculas/lista.jsx";
import Texto from "../../../componentes/atomos/texto.jsx";
import Titulo from "../../../componentes/moleculas/titulo.jsx";
import Codigo from "../../../componentes/moleculas/codigo.jsx";
import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../../../componentes/organismos/estructura.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#wc--word-count-resumen-rápido">wc — word count (resumen
        rápido)</Enlace >
        <Lista>
          <li><Enlace href="#sintaxis-básica">Sintaxis básica</Enlace ></li>
          <li><Enlace href="#opciones-útiles">Opciones útiles</Enlace ></li>
          <li><Enlace href="#ejemplos">Ejemplos</Enlace ></li>
          <li><Enlace href="#notas-importantes">Notas importantes</Enlace ></li>
        </Lista>
      </li>
    </Lista>
  );
}

function nameabcd({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" id="wc-en-linux">Wc en Linux</Titulo>
        <Linea />

        <TemarioCompleto temario={Temario} />

        <Titulo title="h2" id="wc-word-count-resumen-rápido">wc — word count (resumen
          rápido)</Titulo>
        <Texto>wc es una utilidad de Unix/Linux que
          <strong>cuenta</strong> cosas en archivos o en la entrada estándar:
          <strong>líneas, palabras, bytes o caracteres</strong>, y también la
          longitud de la línea más larga.
        </Texto>
        <Titulo title="h3" id="sintaxis-básica">Sintaxis básica</Titulo>
        <Codigo code={`wc [opciones] [archivo...]`} language="bash" />
        <Texto>Sí no le pasas archivo lee desde la entrada estándar (útil con
          pipes).</Texto>
        <Titulo title="h3" id="opciones-útiles">Opciones útiles</Titulo>
        <Lista>
          <li>-l → cuenta <strong>líneas</strong>.</li>
          <li>-w → cuenta <strong>palabras</strong>.</li>
          <li>-c → cuenta <strong>bytes</strong>.</li>
          <li>-m → cuenta <strong>caracteres</strong> (útil sí hay
            multi-byte/UTF-8).</li>
          <li>-L → muestra la longitud de la <strong>línea más
            larga</strong>.</li>
        </Lista>
        <Titulo title="h3" id="ejemplos">Ejemplos</Titulo>
        <Codigo code={`wc archivo.txt
# salida:   10  45  320 archivo.txt
# significa: 10 líneas, 45 palabras, 320 bytes

wc -l archivo.txt
# muestra sólo el número de líneas

cat archivo.txt | wc -w
# cuenta las palabras de la salida del cat (ej. en un pipe)

grep -R "TODO" src/ | wc -l
# cuenta cuántas líneas contienen "TODO" en todo el árbol src/`} language="bash" />
        <Titulo title="h3" id="notas-importantes">Notas importantes</Titulo>
        <Lista>
          <li>-c cuenta <strong>bytes</strong>, no caracteres — en
            archivos UTF-8 algunos caracteres ocupan varios bytes. Usa
            -m para contar caracteres visibles.
          </li>    <li>Sí pasas varios archivos, wc muestra conteos por
            archivo y un total final.</li>    <li>wc -l se usa mucho para contar líneas/entradas (por
              ejemplo, cantidad de archivos listados por ls,
              coincidencias de grep, etc.).</li>  </Lista>
      </Estructura>
      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}
export default nameabcd;
