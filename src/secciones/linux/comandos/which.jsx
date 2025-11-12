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
      <li><Enlace href="#which-en-linux">Which en Linux</Enlace >
        <Lista>
          <li><Enlace href="#temario">Temario</Enlace ></li>
          <li><Enlace href="#que-es-el-comando-which">¿Que es el comando which?</Enlace >
            <Lista>
              <li><Enlace href="#ejemplo-básico">Ejemplo básico</Enlace ></li>
              <li><Enlace href="#otro-ejemplo">Otro ejemplo</Enlace ></li>
              <li><Enlace href="#sí-el-comando-no-existe">Sí el comando no existe</Enlace ></li>
              <li><Enlace href="#ver-qué-versión-se-usa-sí-hay-varias-instaladas">Ver qué
                versión se usa sí hay varias instaladas</Enlace ></li>
              <li><Enlace href="#en-resumen">En resumen</Enlace ></li>
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
        <Titulo title="h1" id="which-en-linux">Which en Linux</Titulo>

        <Linea />

        <TemarioCompleto temario={Temario} />

        <Titulo title="h2" id="que-es-el-comando-which">¿Que es el comando which?</Titulo>

        <Texto>El comando which en Linux (y otros sistemas Unix) sirve
          para <strong>mostrar la ruta completa del ejecutable</strong> que se
          ejecutará cuando llamas a un comando.</Texto>
        <Texto>🔹 <strong>En pocas palabras:</strong> Te dice <strong>dónde está
          ubicado</strong> el programa que se ejecutará cuando escribes algo como
          python, ls, gcc, etc.
        </Texto>
        <Titulo title="h3" id="ejemplo-básico">Ejemplo básico</Titulo>
        <CodeBlock code={`which python`} language="bash" />
        <Texto>📤 <strong>Salida posible:</strong></Texto>
        <CodeBlock code={`/usr/bin/python`} language="bash" />
        <Texto>➡️ Significa que cuando escribes python en la terminal,
          se ejecuta el archivo /usr/bin/python.</Texto>
        <Linea />
        <Titulo title="h3" id="otro-ejemplo">Otro ejemplo</Titulo>
        <CodeBlock code={`which ls`} language="bash" />
        <Texto>📤 Resultado:</Texto>
        <CodeBlock code={`/bin/ls`} language="bash" />
        <Texto>➡️ ls está en la carpeta /bin.</Texto>
        <Linea />
        <Titulo title="h3" id="sí-el-comando-no-existe">Sí el comando no existe</Titulo>
        <CodeBlock code={`which pepe`} language="bash" />
        <Texto>📤 Resultado:</Texto>
        <CodeBlock code={`pepe not found`} language="bash" />
        <Linea />
        <Titulo title="h3" id="ver-qué-versión-se-usa-sí-hay-varias-instaladas">Ver qué versión
          se usa sí hay varias instaladas</Titulo>
        <CodeBlock code={`which -a python`} language="bash" />
        <Texto>📤 Resultado:</Texto>
        <CodeBlock code={`/usr/bin/python
/usr/local/bin/python`} language="bash" />
        <Texto>➡️ Te muestra <strong>todas</strong> las ubicaciones posibles que
          coinciden, en orden de prioridad según tú $PATH.</Texto>
        <Linea />
        <Titulo title="h3" id="en-resumen">En resumen</Titulo>
        <Tabla>
          <TablaCabezera headers={["Opción", "Descripción"]} />

          <tbody>
            <TablaFila>
              <TablaUnica>which comando</TablaUnica>
              <TablaUnica>Muestra la ruta del ejecutable que se ejecuta al usar ese
                comando</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>which -a comando</TablaUnica>
              <TablaUnica>Muestra todas las rutas donde se encuentra ese comando</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>
      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}
export default nameabcd;
