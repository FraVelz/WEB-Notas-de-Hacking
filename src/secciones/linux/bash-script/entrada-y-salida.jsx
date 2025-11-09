import Estructura, { TemarioCompleto, TemarioAsideCompleto } from "../../../componentes/estructura.jsx";

import Titulo from "../../../componentes/titulo.jsx";
import Lista from "../../../componentes/lista.jsx";
import Texto from "../../../componentes/texto.jsx";
import Linea from "../../../componentes/linea.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#descriptores-de-archivos">Descriptores de archivos</Enlace >
        <Lista>
          <li><Enlace href="#1-entrada-redirigir-desde-un-archivo-">1 Entrada:
            redirigir desde un archivo <code>&lt;</code></Enlace ></li>
          <li><Enlace href="#2-salida-redirigir-la-salida-normal--y-">2 Salida:
            redirigir la salida normal <code>&gt;</code> y
            <code>&gt;&gt;</code></Enlace ></li>
          <li><Enlace href="#3-errores-redirigir-errores-2">3 Errores: redirigir
            errores <code>2&gt;</code></Enlace ></li>
        </Lista>
      </li>
      <li><Enlace href="#juntar-salida-y-errores">Juntar salida y errores</Enlace ></li>
      <li><Enlace href="#pipes-">Pipes (<code>|</code>)</Enlace ></li>
      <li><Enlace href="#redirección-combinada-">Redirección combinada
        <code>&amp;&gt;</code></Enlace ></li>
      <li><Enlace href="#comando-cat-concatenate">Comando <code>cat</code>
        (concatenate)</Enlace ></li>
      <li><Enlace href="#comando-tee">Comando <code>tee</code></Enlace >
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

        <Texto><Enlace href="./../readme.md#2-linux-y-bash-script">Regresar a la guía
          principal</Enlace ></Texto>
        <Linea />
        <Titulo title="h2" id="descriptores-de-archivos">Descriptores de archivos</Titulo>
        <Texto>En Bash hay <strong>3 descriptores de archivos
          principales</strong>:</Texto>
        <table>
          <colgroup>
            <col style="width: 12%" />
            <col style="width: 20%" />
            <col style="width: 67%" />
          </colgroup>
          <thead>
            <tr>
              <th>Descriptor</th>
              <th>Nombre</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>0</strong></td>
              <td>Entrada estándar</td>
              <td>Lo que le das a un programa (normalmente el teclado).</td>
            </tr>
            <tr>
              <td><strong>1</strong></td>
              <td>Salida estándar</td>
              <td>Lo que muestra el programa.</td>
            </tr>
            <tr>
              <td><strong>2</strong></td>
              <td>Error estándar</td>
              <td>Mensajes de error.</td>
            </tr>
          </tbody>
        </table>
        <Texto>Los descriptores <strong>3, 4, 5, …</strong> son opcionales y se usan
          en programas más avanzados. Para referirse a un descriptor se usa su
          número (por ejemplo <code>2&gt; archivo</code>). Para el descriptor
          <strong>1</strong>, el número puede omitirse (<code>&gt;</code> equivale
          a <code>1&gt;</code>).
        </Texto>
        <Titulo title="h3" id="entrada-redirigir-desde-un-archivo">1 Entrada: redirigir desde
          un archivo <code>&lt;</code></Titulo>
        <div className="sourceCode" id="cb1">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb1-1"><Enlace href="#cb1-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">cat</span> <span className="op">&lt;</span> ./4.estControl.sh</span></code></pre>
        </div>
        <Titulo title="h3" id="salida-redirigir-la-salida-normal-y">2 Salida: redirigir la
          salida normal <code>&gt;</code> y <code>&gt;&gt;</code></Titulo>
        <div className="sourceCode" id="cb2">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb2-1"><Enlace href="#cb2-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">echo</span> <span className="st">&quot;hola,&quot;</span> <span className="op">&gt;</span> ./salida.txt    <span className="co"># Sobrescribe el archivo</span></span>
              <span id="cb2-2"><Enlace href="#cb2-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">echo</span> <span className="st">&quot;mundo!&quot;</span> <span className="op">&gt;&gt;</span> ./salida.txt  <span className="co"># Agrega al final</span></span></code></pre>
        </div>
        <Titulo title="h3" id="errores-redirigir-errores-2">3 Errores: redirigir errores
          <code>2&gt;</code>
        </Titulo>
        <div className="sourceCode" id="cb3">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb3-1"><Enlace href="#cb3-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">ls</span> noExiste <span className="dv">2</span><span className="op">&gt;</span> errores.txt</span></code></pre>
        </div>
        <Linea />
        <Titulo title="h2" id="juntar-salida-y-errores">Juntar salida y errores</Titulo>
        <div className="sourceCode" id="cb4">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb4-1"><Enlace href="#cb4-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">comando</span> <span className="op">&gt;</span> todo.txt <span className="dv">2</span><span className="op">&gt;&amp;</span><span className="dv">1</span></span></code></pre>
        </div>
        <Texto>Esto significa:</Texto>
        <Lista>
          <li>El descriptor <strong>1 (salida estándar)</strong> se envía al
            archivo <code>todo.txt</code>.</li>    <li>El descriptor <strong>2 (errores)</strong> se redirige hacia
              donde va la salida estándar (<code>&amp;1</code>).</li>  </Lista>
        <Texto>En resumen:</Texto>
        <blockquote>
          <Texto>“Manda los errores al mismo lugar donde está yendo la salida
            normal”.</Texto>
        </blockquote>
        <table>
          <thead>
            <tr>
              <th>Símbolo</th>
              <th>Significado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>&amp;0</code></td>
              <td>Hacia donde vaya la entrada estándar</td>
            </tr>
            <tr>
              <td><code>&amp;1</code></td>
              <td>Hacia donde vaya la salida estándar</td>
            </tr>
            <tr>
              <td><code>&amp;2</code></td>
              <td>Hacia donde vaya la salida de errores</td>
            </tr>
          </tbody>
        </table>
        <Linea />
        <Titulo title="h2" id="pipes">Pipes (<code>|</code>)</Titulo>
        <div className="sourceCode" id="cb5">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb5-1"><Enlace href="#cb5-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">ls</span> <span className="kw">|</span> <span className="fu">grep</span> .txt</span></code></pre>
        </div>
        <Texto>Envía la salida de <code>ls</code> al comando <code>grep</code>, que
          muestra solo los archivos <code>.txt</code>.</Texto>
        <Linea />
        <Titulo title="h2" id="redirección-combinada">Redirección combinada
          <code>&amp;&gt;</code>
        </Titulo>
        <div className="sourceCode" id="cb6">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb6-1"><Enlace href="#cb6-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">ls</span> carpeta_inexistente <span className="op">&amp;&gt;</span> salida.txt</span></code></pre>
        </div>
        <Texto>Equivale a:</Texto>
        <div className="sourceCode" id="cb7">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb7-1"><Enlace href="#cb7-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">ls</span> carpeta_inexistente <span className="op">&gt;</span> salida.txt <span className="dv">2</span><span className="op">&gt;&amp;</span><span className="dv">1</span></span></code></pre>
        </div>
        <Linea />
        <Titulo title="h2" id="comando-cat-concatenate">Comando <code>cat</code>
          (concatenate)</Titulo>
        <div className="sourceCode" id="cb8">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb8-1"><Enlace href="#cb8-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">cat</span> ./1.comandosBash/5.EntradaYSalida.sh    <span className="co"># Mostrar un archivo</span></span>
              <span id="cb8-2"><Enlace href="#cb8-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">cat</span> a.txt b.txt <span className="op">&gt;</span> c.txt                     <span className="co"># Unir archivos</span></span>
              <span id="cb8-3"><Enlace href="#cb8-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">cat</span> a.txt <span className="op">&gt;&gt;</span> b.txt                          <span className="co"># Añadir uno al final del otro</span></span></code></pre>
        </div>
        <Texto>También puedes crear un archivo nuevo escribiendo directamente:</Texto>
        <div className="sourceCode" id="cb9">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb9-1"><Enlace href="#cb9-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">cat</span> <span className="op">&gt;</span> nuevo.txt</span>
              <span id="cb9-2"><Enlace href="#cb9-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">Hola</span></span>
              <span id="cb9-3"><Enlace href="#cb9-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">Mundo</span></span>
              <span id="cb9-4"><Enlace href="#cb9-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># (Presiona CTRL+D para terminar)</span></span></code></pre>
        </div>
        <Linea />
        <Titulo title="h2" id="comando-tee">Comando <code>tee</code></Titulo>
        <Texto>El comando <code>tee</code> <strong>guarda la salida en archivos y
          también la muestra en pantalla</strong>.</Texto>
        <div className="sourceCode" id="cb10">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb10-1"><Enlace href="#cb10-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">echo</span> <span className="st">&quot;Hola mundo&quot;</span> <span className="kw">|</span> <span className="fu">tee</span> salida.txt          <span className="co"># Guardar y mostrar</span></span>
              <span id="cb10-2"><Enlace href="#cb10-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">ls</span> <span className="kw">|</span> <span className="fu">tee</span> <span className="at">-a</span> lista.txt                       <span className="co"># Modo append</span></span>
              <span id="cb10-3"><Enlace href="#cb10-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">ls</span> <span className="kw">|</span> <span className="fu">tee</span> archivo1.txt archivo2.txt          <span className="co"># Guardar en varios archivos</span></span></code></pre>
        </div>
        <Linea />
        <Titulo title="h3" id="resumen-rápido">Resumen rápido</Titulo>
        <table>
          <thead>
            <tr>
              <th>Operador.</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>&lt;</code></td>
              <td>Leer desde archivo</td>
            </tr>
            <tr>
              <td><code>&gt;</code></td>
              <td>Escribir (sobrescribir)</td>
            </tr>
            <tr>
              <td><code>&gt;&gt;</code></td>
              <td>Escribir (agregar al final)</td>
            </tr>
            <tr>
              <td><code>2&gt;</code></td>
              <td>Redirigir errores</td>
            </tr>
            <tr>
              <td><code>2&gt;&amp;1</code></td>
              <td>Unir errores con salida normal</td>
            </tr>
            <tr>
              <td><code>&amp;&gt;</code></td>
              <td>Redirigir ambos (salida y errores)</td>
            </tr>
            <tr>
              <td>`</td>
              <td>Pipe (enviar salida a otro comando)</td>
            </tr>
          </tbody>
        </table>
      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}

export default nameabcd;
