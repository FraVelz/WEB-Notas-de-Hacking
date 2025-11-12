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
      <li><Enlace href="#en-resumen">En resumen</Enlace ></li>
      <li><Enlace href="#ejemplo-básico">Ejemplo básico</Enlace ></li>
      <li><Enlace href="#símbolos-principales">Símbolos principales</Enlace ></li>
      <li><Enlace href="#opciones-útiles">Opciones útiles</Enlace ></li>
      <li><Enlace href="#usos-comunes">Usos comunes</Enlace ></li>
    </Lista>
  );
}

function nameabcd({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" className="text-center">Diff en Linux</Titulo>
        <Linea />

        <Titulo title="h2" className="2xl:hidden">Temario</Titulo>

        <TemarioCompleto temario={Temario} />

        <Titulo title="h3" id="en-resumen">En resumen</Titulo>
        <Texto>El comando diff en Linux/Unix se usa para
          <strong>comparar dos archivos (o carpetas)</strong> línea por línea y
          mostrar <strong>las diferencias entre ellos</strong>. 🔍
        </Texto>
        <CodeBlock code={`diff archivo1 archivo2`} language="bash" />
        <Texto>👉 Muestra qué líneas <strong>cambian, se agregan o eliminan</strong>
          de un archivo respecto al otro.</Texto>
        <Linea />
        <Titulo title="h3" id="ejemplo-básico">Ejemplo básico</Titulo>
        <Texto>Supongamos que tienes dos archivos:</Texto>
        <Texto><strong>archivo1.txt:</strong></Texto>
        <CodeBlock code={`hola
mundo
como estas`} language="bash" />
        <Texto><strong>archivo2.txt:</strong></Texto>
        <CodeBlock code={`hola
mundo!!!
como estas`} language="bash" />
        <Texto>Sí ejecutas:</Texto>
        <CodeBlock code={`diff archivo1.txt archivo2.txt`} language="bash" />
        <Texto>La salida será:</Texto>
        <CodeBlock code={`2c2
< mundo
---
> mundo!!!`} language="bash" />
        <Texto>🔍 Significa:</Texto>
        <Lista>
          <li>En la <strong>línea 2</strong> (2c2 → <em>línea 2
            cambiada</em>),</li>
          <li>mundo fue reemplazado por mundo!!!.</li>
        </Lista>
        <Linea />
        <Titulo title="h3" id="símbolos-principales">Símbolos principales</Titulo>
        <Tabla>
  <TablaCabezera headers={["Símbolo", "Significado"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>&lt;</TablaUnica>
      <TablaUnica>línea que <strong>solo está en el primer archivo</strong></TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>&gt;</TablaUnica>
      <TablaUnica>línea que <strong>solo está en el segundo archivo</strong></TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>a</TablaUnica>
      <TablaUnica>“add” — se agregó algo</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>d</TablaUnica>
      <TablaUnica>“delete” — se eliminó algo</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>c</TablaUnica>
      <TablaUnica>“change” — cambió algo</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
        <Linea />
        <Titulo title="h3" id="opciones-útiles">Opciones útiles</Titulo>
        <Tabla>
  <TablaCabezera headers={["Opción", "Descripción"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>-u</TablaUnica>
      <TablaUnica>Muestra diferencias en <strong>formato unificado</strong> (más
                legible, usado por Git).</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>-y</TablaUnica>
      <TablaUnica>Muestra los archivos <strong>lado a lado</strong>.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>-q</TablaUnica>
      <TablaUnica>Solo indica sí los archivos <strong>son diferentes o
                iguales</strong>, sin mostrar detalles.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>-r</TablaUnica>
      <TablaUnica>Compara <strong>directorios recursivamente</strong>.</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
        <Texto>Ejemplo:</Texto>
        <CodeBlock code={`diff -u archivo1.txt archivo2.txt`} language="bash" />
        <Texto>Salida tipo “Git”:</Texto>
        <CodeBlock code={`--- archivo1.txt
+++ archivo2.txt
@@ -1,3 +1,3 @@
hola
-mundo
+mundo!!!
como estas`} language="bash" />
        <Linea />
        <Titulo title="h3" id="usos-comunes">Usos comunes</Titulo>
        <Lista>
          <li>Ver qué cambió entre dos versiones de un archivo.</li>
          <li>Comparar archivos de configuración.</li>
          <li>Analizar diferencias en código fuente.</li>
          <li>Generar <em>parches</em> con diff y aplicarlos con
            patch.
          </li>
        </Lista>
     </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}
export default nameabcd;
