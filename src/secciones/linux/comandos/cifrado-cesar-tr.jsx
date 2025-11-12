import Enlace from "../../../componentes/atomos/enlace.jsx";
import Linea from "../../../componentes/atomos/linea.jsx";
import Lista from "../../../componentes/moleculas/lista.jsx";
import Texto from "../../../componentes/atomos/texto.jsx";
import Titulo from "../../../componentes/moleculas/titulo.jsx";
import CodeBlock from "../../../componentes/moleculas/codigo.jsx";
import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../../../componentes/organismos/estructura.jsx";
import Imagen from "../../../componentes/atomos/imagen.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#cifrado-cesar-con-tr-en-linux">Cifrado Cesar con tr en
        Linux</Enlace >
        <Lista>
          <li><Enlace href="#temario">Temario</Enlace >
            <Lista>
              <li><Enlace href="#parte-1">Parte 1</Enlace ></li>
              <li><Enlace href="#parte-2">Parte 2</Enlace ></li>
              <li><Enlace href="#3-qué-hace-exactamente-este-caso">3. Qué hace exactamente
                este caso</Enlace ></li>
              <li><Enlace href="#ejemplo-práctico">Ejemplo práctico</Enlace ></li>
              <li><Enlace href="#en-resumen">En resumen</Enlace ></li>
            </Lista>
          </li>
        </Lista>
      </li>

    </Lista>
  );
}

function Cifrado_Cesar_Tr({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" id="cifrado-cesar-con-tr-en-linux">Cifrado Cesar con tr en
          Linux</Titulo>
        <Linea />

        <TemarioCompleto temario={Temario} />

        <Texto>El comando que vamos a revisar y analizar que hace cifrado cesar de
          13 caracteres hacia delante:</Texto>
        <CodeBlock code={`cat data.txt | tr '[A-Za-z]' '[N-ZA-Mn-za-m]'`} language="bash" />
        <Linea />
        <Titulo title="h3" id="parte-1">Parte 1</Titulo>
        <CodeBlock code={`cat data.txt`} language="bash" />
        <Texto>Muestra el contenido del archivo data.txt (lo envía al
          <em>stdout</em>).
        </Texto>
        <Linea />
        <Titulo title="h3" id="parte-2">Parte 2</Titulo>
        <CodeBlock code={`| tr '[A-Za-z]' '[N-ZA-Mn-za-m]'`} language="bash" />
        <Texto>El <strong>pipe (|)</strong> pasa ese texto al comando
          <strong>tr</strong>, que significa <em>translate</em>
          (traducir o sustituir caracteres).
        </Texto>
        <Texto>La sintaxis:</Texto>
        <CodeBlock code={`tr 'caracteres_originales' 'caracteres_nuevos'`} language="bash" />
        <Texto>sustituye cada carácter del primer conjunto por el correspondiente
          del segundo.</Texto>
        <Linea />
        <Titulo title="h3" id="qué-hace-exactamente-este-caso">3. Qué hace exactamente este
          caso</Titulo>
        <Texto>[A-Za-z] → todas las letras del alfabeto (mayúsculas y
          minúsculas).</Texto>
        <Texto>[N-ZA-Mn-za-m] → es el mismo alfabeto, pero
          <strong>rotado 13 posiciones</strong>.
        </Texto>
        <Texto>Esto significa que cada letra se reemplaza por la letra que está
          13 lugares después en el alfabeto.</Texto>
        <Texto>A eso se le llama <strong>cifrado ROT13 (Rotation by 13
          places)</strong>.</Texto>
        <Texto>Es decir de la N-Z es 13 posiciones, de la A-M, de la n-z y de la
          a-m, todas son 13 posiciones, continuación una imagen
          representativa:</Texto>

        <Imagen className="rounded" width={400} src="./abdcedario-cifrado-con-tr.png" alt="Imagen de rotación 13 con el alfabeto completo" />

        <Linea />
        <Titulo title="h3" id="ejemplo-práctico">Ejemplo práctico</Titulo>
        <Texto>Sí data.txt contiene:</Texto>
        <CodeBlock code={`Hola Mundo`} language="bash" />
        <Texto>El comando:</Texto>
        <CodeBlock code={`cat data.txt | tr '[A-Za-z]' '[N-ZA-Mn-za-m]'`} language="bash" />
        <Texto>producirá:</Texto>
        <CodeBlock code={`Uby nZhaqb`} language="bash" />
        <Texto>Y sí vuelves a aplicarlo una segunda vez, vuelve al texto original
          (porque ROT13 es su propio inverso).</Texto>
        <Linea />
        <Titulo title="h3" id="en-resumen">En resumen</Titulo>
        <Texto>Este comando aplica el <strong>cifrado ROT13</strong> al texto del
          archivo data.txt, sustituyendo cada letra por la que está
          13 posiciones más adelante en el alfabeto (y viceversa sí se aplica de
          nuevo).</Texto>
      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}

export default Cifrado_Cesar_Tr;
