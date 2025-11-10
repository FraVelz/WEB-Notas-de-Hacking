import Titulo from "./../../../componentes/titulo.jsx";
import Lista from "./../../../componentes/lista.jsx";
import Texto from "./../../../componentes/texto.jsx";
import Linea from "./../../../componentes/linea.jsx";
import Enlace from "./../../../componentes/enlace.jsx";

import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "./../../../componentes/estructura.jsx";

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
        <Texto>El comando <code>xxd</code> en Linux (y otros sistemas Unix)
          <strong>convierte datos binarios en una representación
            hexadecimal</strong> y también puede hacer lo contrario (convertir de
          hexadecimal a binario). Es muy útil para inspeccionar o editar archivos
          binarios, ver bytes en formato legible o reconstruir archivos desde
          texto hexadecimal.
        </Texto>
        <Linea />
        <Titulo title="h2" id="sintaxis-básica">Sintaxis básica</Titulo>
        <div className="sourceCode" id="cb1">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb1-1"><Enlace href="#cb1-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">xxd</span> <span className="pp">[</span><span className="ss">opciones</span><span className="pp">]</span> <span className="pp">[</span><span className="ss">archivo</span><span className="pp">]</span></span></code></pre>
        </div>
        <Linea />
        <Titulo title="h2" id="ejemplos-comunes">Ejemplos comunes</Titulo>
        <Titulo title="h3" id="ver-un-archivo-en-formato-hexadecimal">1. Ver un archivo en
          formato hexadecimal</Titulo>
        <div className="sourceCode" id="cb2">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb2-1"><Enlace href="#cb2-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">xxd</span> archivo.bin</span></code></pre>
        </div>
        <Texto>➡️ Muestra el contenido de <code>archivo.bin</code> así:</Texto>
        <div className="sourceCode" id="cb3">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb3-1"><Enlace href="#cb3-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">00000000:</span> 486f 6c61 206d 756e 646f          Hola mundo</span></code></pre>
        </div>
        <Lista>
          <li>La primera columna (<code>00000000</code>) es el desplazamiento
            (offset) en hexadecimal.</li>    <li>Luego vienen los bytes en formato hex.</li>    <li>A la derecha aparece la interpretación ASCII (si los bytes son
              imprimibles).</li>  </Lista>
        <Linea />
        <Titulo title="h3" id="convertir-de-binario-a-texto-hexadecimal">2. Convertir de
          binario a texto hexadecimal</Titulo>
        <div className="sourceCode" id="cb4">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb4-1"><Enlace href="#cb4-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">cat</span> archivo <span className="kw">|</span> <span className="ex">xxd</span></span></code></pre>
        </div>
        <Texto>➡️ Convierte los bytes de la entrada estándar en texto
          hexadecimal.</Texto>
        <Linea />
        <Titulo title="h3" id="convertir-de-texto-hexadecimal-a-binario">3. Convertir de texto
          hexadecimal a binario</Titulo>
        <div className="sourceCode" id="cb5">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb5-1"><Enlace href="#cb5-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">cat</span> archivo_hex.txt <span className="kw">|</span> <span className="ex">xxd</span> <span className="at">-r</span> <span className="op">&gt;</span> archivo_original</span></code></pre>
        </div>
        <Lista>
          <li><code>-r</code> significa <strong>reverse</strong> (revertir).</li>
          <li>Esto toma una representación en hex (por ejemplo, hecha por
            <code>xxd</code>) y reconstruye el archivo binario original.
          </li>
        </Lista>
        <Linea />
        <Titulo title="h3" id="mostrar-solo-los-bytes-sin-dirección-ni-texto-ascii">4. Mostrar
          solo los bytes (sin dirección ni texto ASCII)</Titulo>
        <div className="sourceCode" id="cb6">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb6-1"><Enlace href="#cb6-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">xxd</span> <span className="at">-p</span> archivo.bin</span></code></pre>
        </div>
        <Texto>Salida “plana” (plain):</Texto>
        <div className="sourceCode" id="cb7">
          <pre
            className="sourceCode txt"><code className="sourceCode default"><span id="cb7-1"><Enlace href="#cb7-1" aria-hidden="true" tabindex="-1"></Enlace >486f6c61206d756e646f</span></code></pre>
        </div>
        <Texto>Perfecta para copiar y pegar en scripts o codificaciones.</Texto>
        <Linea />
        <Titulo title="h3" id="ver-solo-los-primeros-bytes">5. Ver solo los primeros bytes</Titulo>
        <div className="sourceCode" id="cb8">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb8-1"><Enlace href="#cb8-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">xxd</span> <span className="at">-l</span> 16 archivo.bin</span></code></pre>
        </div>
        <Texto>➡️ Muestra solo los primeros 16 bytes.</Texto>
        <Linea />
        <Titulo title="h2" id="en-resumen">En resumen</Titulo>
        <table>
          <thead>
            <tr>
              <th>Modo</th>
              <th>Comando</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hex dump</td>
              <td><code>xxd archivo</code></td>
              <td>Ver bytes en hex y ASCII</td>
            </tr>
            <tr>
              <td>Hex plano</td>
              <td><code>xxd -p archivo</code></td>
              <td>Solo bytes hex sin formato</td>
            </tr>
            <tr>
              <td>Binario desde hex</td>
              <td><code>xxd -r archivo_hex</code></td>
              <td>Reconstruir archivo</td>
            </tr>
            <tr>
              <td>Limitar bytes</td>
              <td><code>xxd -l N archivo</code></td>
              <td>Muestra solo N bytes</td>
            </tr>
          </tbody>
        </table>
      </Estructura>
      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}

export default nameabcd;
