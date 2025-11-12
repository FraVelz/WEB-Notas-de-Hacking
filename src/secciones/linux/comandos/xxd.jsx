import Enlace from "../../../componentes/atomos/enlace.jsx";
import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../../../componentes/organismos/estructura.jsx";
import Linea from "../../../componentes/atomos/linea.jsx";
import Lista from "../../../componentes/moleculas/lista.jsx";
import Texto from "../../../componentes/atomos/texto.jsx";
import Titulo from "../../../componentes/moleculas/titulo.jsx";
import { Tabla, TablaCabezera, TablaFila, TablaUnica } from "../../../componentes/moleculas/tabla.jsx";
import CodeBlock from "../../../componentes/moleculas/codigo.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#temario">Temario</Enlace ></li>
      <li><Enlace href="#que-es-el-comando-xxd">Que es el comando xxd</Enlace ></li>
      <li><Enlace href="#sintaxis-básica">Sintaxis básica</Enlace ></li>
      <li><Enlace href="#ejemplos-comunes">Ejemplos comunes</Enlace >
        <Lista>
          <li><Enlace href="#1-ver-un-archivo-en-formato-hexadecimal">1. Ver un archivo
            en formato hexadecimal</Enlace ></li>
          <li><Enlace href="#2-convertir-de-binario-a-texto-hexadecimal">2. Convertir
            de binario a texto hexadecimal</Enlace ></li>
          <li><Enlace href="#3-convertir-de-texto-hexadecimal-a-binario">3. Convertir
            de texto hexadecimal a binario</Enlace ></li>
          <li><Enlace href="#4-mostrar-solo-los-bytes-sin-dirección-ni-texto-ascii">4.
            Mostrar solo los bytes (sin dirección ni texto ASCII)</Enlace ></li>
          <li><Enlace href="#5-ver-solo-los-primeros-bytes">5. Ver solo los primeros
            bytes</Enlace ></li>
        </Lista>
      </li>
      <li><Enlace href="#en-resumen">En resumen</Enlace ></li>
    </Lista>
  );
}

function nameabcd({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" id="xxd-en-linux">Xxd en Linux</Titulo>

        <Linea />

        <TemarioCompleto temario={Temario} />

        <Titulo title="h2" id="que-es-el-comando-xxd">Que es el comando xxd</Titulo>
        <Texto>El comando xxd en Linux (y otros sistemas Unix)
          <strong>convierte datos binarios en una representación
            hexadecimal</strong> y también puede hacer lo contrario (convertir de
          hexadecimal a binario). Es muy útil para inspeccionar o editar archivos
          binarios, ver bytes en formato legible o reconstruir archivos desde
          texto hexadecimal.
        </Texto>
        <Linea />
        <Titulo title="h2" id="sintaxis-básica">Sintaxis básica</Titulo>
        <CodeBlock code={`xxd [opciones] [archivo]`} language="bash" />
        <Linea />
        <Titulo title="h2" id="ejemplos-comunes">Ejemplos comunes</Titulo>
        <Titulo title="h3" id="ver-un-archivo-en-formato-hexadecimal">1. Ver un archivo en
          formato hexadecimal</Titulo>
        <CodeBlock code={`xxd archivo.bin`} language="bash" />
        <Texto>➡️ Muestra el contenido de archivo.bin así:</Texto>
        <CodeBlock code={`00000000: 486f 6c61 206d 756e 646f          Hola mundo`} language="bash" />
        <Lista>
          <li>La primera columna (00000000) es el desplazamiento
            (offset) en hexadecimal.</li>    <li>Luego vienen los bytes en formato hex.</li>    <li>A la derecha aparece la interpretación ASCII (sí los bytes son
              imprimibles).</li>  </Lista>
        <Linea />
        <Titulo title="h3" id="convertir-de-binario-a-texto-hexadecimal">2. Convertir de
          binario a texto hexadecimal</Titulo>
        <CodeBlock code={`cat archivo | xxd`} language="bash" />
        <Texto>➡️ Convierte los bytes de la entrada estándar en texto
          hexadecimal.</Texto>
        <Linea />
        <Titulo title="h3" id="convertir-de-texto-hexadecimal-a-binario">3. Convertir de texto
          hexadecimal a binario</Titulo>
        <CodeBlock code={`cat archivo_hex.txt | xxd -r > archivo_original`} language="bash" />
        <Lista>
          <li>-r significa <strong>reverse</strong> (revertir).</li>
          <li>Esto toma una representación en hex (por ejemplo, hecha por
            xxd) y reconstruye el archivo binario original.
          </li>
        </Lista>
        <Linea />
        <Titulo title="h3" id="mostrar-solo-los-bytes-sin-dirección-ni-texto-ascii">4. Mostrar
          solo los bytes (sin dirección ni texto ASCII)</Titulo>
        <CodeBlock code={`xxd -p archivo.bin`} language="bash" />
        <Texto>Salida “plana” (plain):</Texto>
        <CodeBlock code={`486f6c61206d756e646f`} language="bash" />
        <Texto>Perfecta para copiar y pegar en scripts o codificaciones.</Texto>
        <Linea />
        <Titulo title="h3" id="ver-solo-los-primeros-bytes">5. Ver solo los primeros bytes</Titulo>
        <CodeBlock code={`xxd -l 16 archivo.bin`} language="bash" />
        <Texto>➡️ Muestra solo los primeros 16 bytes.</Texto>
        <Linea />
        <Titulo title="h2" id="en-resumen">En resumen</Titulo>
        <Tabla>
  <TablaCabezera headers={["Modo", "Comando", "Descripción"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>Hex dump</TablaUnica>
      <TablaUnica>xxd archivo</TablaUnica>
      <TablaUnica>Ver bytes en hex y ASCII</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Hex plano</TablaUnica>
      <TablaUnica>xxd -p archivo</TablaUnica>
      <TablaUnica>Solo bytes hex sin formato</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Binario desde hex</TablaUnica>
      <TablaUnica>xxd -r archivo_hex</TablaUnica>
      <TablaUnica>Reconstruir archivo</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Limitar bytes</TablaUnica>
      <TablaUnica>xxd -l N archivo</TablaUnica>
      <TablaUnica>Muestra solo N bytes</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
      </Estructura>
      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}

export default nameabcd;
