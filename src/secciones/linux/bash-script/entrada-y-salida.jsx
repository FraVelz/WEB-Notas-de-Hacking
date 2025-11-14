import Enlace from "../../../componentes/atomos/enlace.jsx";
import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../../../componentes/organismos/estructura.jsx";
import Linea from "../../../componentes/atomos/linea.jsx";
import Lista from "../../../componentes/moleculas/lista.jsx";
import Texto from "./../../../componentes/atomos/texto.jsx";
import Titulo from "../../../componentes/moleculas/titulo.jsx";
import { Tabla, TablaCabezera, TablaFila, TablaUnica } from "../../../componentes/moleculas/tabla.jsx";
import Codigo from "../../../componentes/moleculas/codigo.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#descriptores-de-archivos">Descriptores de archivos</Enlace >
        <Lista>
          <li><Enlace href="#1-entrada-redirigir-desde-un-archivo-">1 Entrada:
            redirigir desde un archivo &lt;</Enlace ></li>
          <li><Enlace href="#2-salida-redirigir-la-salida-normal--y-">2 Salida:
            redirigir la salida normal &gt; y
            &gt;&gt;</Enlace ></li>
          <li><Enlace href="#3-errores-redirigir-errores-2">3 Errores: redirigir
            errores 2&gt;</Enlace ></li>
        </Lista>
      </li>
      <li><Enlace href="#juntar-salida-y-errores">Juntar salida y errores</Enlace ></li>
      <li><Enlace href="#pipes-">Pipes (|)</Enlace ></li>
      <li><Enlace href="#redirección-combinada-">Redirección combinada
        &amp;&gt;</Enlace ></li>
      <li><Enlace href="#comando-cat-concatenate">Comando cat
        (concatenate)</Enlace ></li>
      <li><Enlace href="#comando-tee">Comando tee</Enlace >
        <Lista>
          <li><Enlace href="#resumen-rápido">Resumen rápido</Enlace ></li>
        </Lista>
      </li>
    </Lista>
  );
}

function nameabcd({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" className="text-center">Entradas y Salidas en Bash
          Script</Titulo>
        <Texto>Este documento explica como usar la <strong>redirección de contenido
          en bash script</strong> de (entradas y salidas y errores en bash).</Texto>
        <Linea />

        <TemarioCompleto temario={Temario} />

        <Titulo title="h2" id="descriptores-de-archivos">Descriptores de archivos</Titulo>
        <Texto>En Bash hay <strong>3 descriptores de archivos
          principales</strong>:</Texto>
        <Tabla>
  <TablaCabezera headers={["Descriptor", "Nombre", "Descripción"]} />

  <tbody>
    <TablaFila>
      <TablaUnica><strong>0</strong></TablaUnica>
      <TablaUnica>Entrada estándar</TablaUnica>
      <TablaUnica>Lo que le das a un programa (normalmente el teclado).</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>1</strong></TablaUnica>
      <TablaUnica>Salida estándar</TablaUnica>
      <TablaUnica>Lo que muestra el programa.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>2</strong></TablaUnica>
      <TablaUnica>Error estándar</TablaUnica>
      <TablaUnica>Mensajes de error.</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
        <Texto>Los descriptores <strong>3, 4, 5, …</strong> son opcionales y se usan
          en programas más avanzados. Para referirse a un descriptor se usa su
          número (por ejemplo 2&gt; archivo). Para el descriptor
          <strong>1</strong>, el número puede omitirse (&gt; equivale
          a 1&gt;).
        </Texto>
        <Titulo title="h3" id="1-entrada-redirigir-desde-un-archivo-">1 Entrada: redirigir desde
          un archivo &lt;</Titulo>
        <Codigo code={`cat < ./4.estControl.sh`} language="bash" />
        <Titulo title="h3" id="2-salida-redirigir-la-salida-normal--y-">2 Salida: redirigir la
          salida normal &gt; y &gt;&gt;</Titulo>
        <Codigo code={`echo "hola," > ./salida.txt    # Sobrescribe el archivo
echo "mundo!" >> ./salida.txt  # Agrega al final`} language="bash" />
        <Titulo title="h3" id="3-errores-redirigir-errores-2">3 Errores: redirigir errores
          2&gt;
        </Titulo>
        <Codigo code={`ls noExiste 2> errores.txt`} language="bash" />
        <Linea />
        <Titulo title="h2" id="juntar-salida-y-errores">Juntar salida y errores</Titulo>
        <Codigo code={`comando > todo.txt 2>&1`} language="bash" />
        <Texto>Esto significa:</Texto>
        <Lista>
          <li>El descriptor <strong>1 (salida estándar)</strong> se envía al
            archivo todo.txt.</li>    <li>El descriptor <strong>2 (errores)</strong> se redirige hacia
              donde va la salida estándar (&amp;1).</li>  </Lista>
        <Texto>En resumen:</Texto>
        <blockquote>
          <Texto>“Manda los errores al mismo lugar donde está yendo la salida
            normal”.</Texto>
        </blockquote>
        <Tabla>
  <TablaCabezera headers={["Símbolo", "Significado"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>&amp;0</TablaUnica>
      <TablaUnica>Hacia donde vaya la entrada estándar</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>&amp;1</TablaUnica>
      <TablaUnica>Hacia donde vaya la salida estándar</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>&amp;2</TablaUnica>
      <TablaUnica>Hacia donde vaya la salida de errores</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
        <Linea />
        <Titulo title="h2" id="pipes">Pipes (|)</Titulo>
        <Codigo code={`ls | grep .txt`} language="bash" />
        <Texto>Envía la salida de ls al comando grep, que
          muestra solo los archivos .txt.</Texto>
        <Linea />
        <Titulo title="h2" id="redirección-combinada">Redirección combinada
          &amp;&gt;
        </Titulo>
        <Codigo code={`ls carpeta_inexistente &> salida.txt`} language="bash" />
        <Texto>Equivale a:</Texto>
        <Codigo code={`ls carpeta_inexistente > salida.txt 2>&1`} language="bash" />
        <Linea />
        <Titulo title="h2" id="comando-cat-concatenate">Comando cat
          (concatenate)</Titulo>
        <Codigo code={`cat ./1.comandosBash/5.EntradaYSalida.sh    # Mostrar un archivo
cat a.txt b.txt > c.txt                     # Unir archivos
cat a.txt >> b.txt                          # Añadir uno al final del otro`} language="bash" />
        <Texto>También puedes crear un archivo nuevo escribiendo directamente:</Texto>
        <Codigo code={`cat > nuevo.txt
Hola
Mundo
# (Presiona CTRL+D para terminar)`} language="bash" />
        <Linea />
        <Titulo title="h2" id="comando-tee">Comando tee</Titulo>
        <Texto>El comando tee <strong>guarda la salida en archivos y
          también la muestra en pantalla</strong>.</Texto>
        <Codigo code={`echo "Hola mundo" | tee salida.txt          # Guardar y mostrar
ls | tee -a lista.txt                       # Modo append
ls | tee archivo1.txt archivo2.txt          # Guardar en varios archivos`} language="bash" />
        <Linea />
        <Titulo title="h3" id="resumen-rápido">Resumen rápido</Titulo>
        <Tabla>
  <TablaCabezera headers={["Operador.", "Descripción"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>&lt;</TablaUnica>
      <TablaUnica>Leer desde archivo</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>&gt;</TablaUnica>
      <TablaUnica>Escribir (sobrescribir)</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>&gt;&gt;</TablaUnica>
      <TablaUnica>Escribir (agregar al final)</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>2&gt;</TablaUnica>
      <TablaUnica>Redirigir errores</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>2&gt;&amp;1</TablaUnica>
      <TablaUnica>Unir errores con salida normal</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>&amp;&gt;</TablaUnica>
      <TablaUnica>Redirigir ambos (salida y errores)</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>`</TablaUnica>
      <TablaUnica>Pipe (enviar salida a otro comando)</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}

export default nameabcd;
