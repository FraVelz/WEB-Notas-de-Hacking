import Enlace from "../../componentes/enlace.jsx";
import Linea from "./../../componentes/linea.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Titulo from "./../../componentes/titulo.jsx";
function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="redirecciones-en-powershell-operadores-lógicos-y-de-redirección">Redirecciones
        en Powershell (operadores lógicos y de redirección)</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><Enlace href="#redirecciones-en-powershell-operadores-lógicos-y-de-redirección">Redirecciones
          en Powershell (operadores lógicos y de redirección)</Enlace >
          <Lista>
            <li><Enlace href="#temario">Temario</Enlace ></li>
            <li><Enlace href="#tipos-de-salida-en-powershell">Tipos de salida en
              PowerShell</Enlace ></li>
            <li><Enlace href="#operadores-de-redirección">Operadores de
              redirección</Enlace ></li>
            <li><Enlace href="#operadores-lógicos">Operadores lógicos</Enlace ></li>
            <li><Enlace href="#ejemplos-combinados">Ejemplos combinados</Enlace ></li>
            <li><Enlace href="#tip-extra-usar-redirecciones-dentro-de-scripts">Tip extra:
              usar redirecciones dentro de scripts</Enlace ></li>
          </Lista>
        </li>
      </Lista>
      <Texto><Enlace href="./../readme.md#3-windows">Regresar a la guía
        principal</Enlace ></Texto>
      <Linea />
      <Titulo title="h2" id="tipos-de-salida-en-powershell">Tipos de salida en
        PowerShell</Titulo>
      <Texto>PowerShell no solo maneja texto (como CMD), sino <strong>flujos de
        salida (streams)</strong>. Cada flujo tiene un número que se usa para
        redirigirlo:</Texto>
      <table>
        <thead>
          <tr>
            <th>Flujo</th>
            <th>Descripción</th>
            <th>Ejemplo de redirección</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>1</code></td>
            <td><strong>Salida estándar (Output)</strong> — resultado del
              comando</td>
            <td><code>&gt; archivo.txt</code></td>
          </tr>
          <tr>
            <td><code>2</code></td>
            <td><strong>Errores (Error)</strong> — mensajes de error</td>
            <td><code>2&gt; errores.txt</code></td>
          </tr>
          <tr>
            <td><code>3</code></td>
            <td><strong>Mensajes de advertencia (Warning)</strong></td>
            <td><code>3&gt; advertencias.txt</code></td>
          </tr>
          <tr>
            <td><code>4</code></td>
            <td><strong>Mensajes detallados (Verbose)</strong></td>
            <td><code>4&gt; verbose.txt</code></td>
          </tr>
          <tr>
            <td><code>5</code></td>
            <td><strong>Mensajes de depuración (Debug)</strong></td>
            <td><code>5&gt; debug.txt</code></td>
          </tr>
          <tr>
            <td><code>6</code></td>
            <td><strong>Mensajes de información (Information)</strong></td>
            <td><code>6&gt; info.txt</code></td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Titulo title="h2" id="operadores-de-redirección">Operadores de redirección</Titulo>
      <table>
        <thead>
          <tr>
            <th>Operador</th>
            <th>Descripción</th>
            <th>Ejemplo</th>
            <th>Resultado</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>-and</code></td>
            <td><strong>Y lógico</strong> — ambas condiciones deben ser
              verdaderas</td>
            <td><code>($x -gt 5) -and ($x -lt 10)</code></td>
            <td>Verdadero si x está entre 6 y 9</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td><code>-or</code></td>
            <td><strong>O lógico</strong> — una de las condiciones debe ser
              verdadera</td>
            <td><code>($a -eq 10) -or ($b -eq 10)</code></td>
            <td>Verdadero si alguno es 10</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td><code>-not</code> o <code>!</code></td>
            <td><strong>Negación</strong></td>
            <td><code>-not ($x -eq 5)</code> o <code>!($x -eq 5)</code></td>
            <td>Verdadero si x ≠ 5</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td><code>&amp;&amp;</code></td>
            <td><strong>Ejecuta el siguiente comando solo si el primero fue
              exitoso</strong></td>
            <td><code>Test-Path archivo.txt &amp;&amp; Write-Host "Existe"</code></td>
            <td>Muestra “Existe” solo si el archivo existe</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td><code>|                                                                 |</code></td>
            <td><strong>Ejecuta el siguiente comando solo si el primero
              falla</strong></td>
            <td><code>Test-Path archivo.txt |   | Write-Host "No existe"</code></td>
            <td>Muestra “No existe” solo si falla</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td><code>;</code></td>
            <td><strong>Separa comandos</strong> (ejecuta ambos, sin importar si
              fallan)</td>
            <td><code>dir; echo "Hecho"</code></td>
            <td>Siempre ejecuta ambos</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Titulo title="h2" id="ejemplos-combinados">Ejemplos combinados</Titulo>
      <div className="sourceCode" id="cb1">
        <pre
          className="sourceCode powershell"><code className="sourceCode powershell"><span id="cb1-1"><Enlace href="#cb1-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Guarda salida y errores en archivos diferentes</span></span>
            <span id="cb1-2"><Enlace href="#cb1-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">Get-ChildItem</span> C<span className="op">:</span>\ <span className="dv">1</span><span className="op">&gt;</span>salida<span className="op">.</span><span className="fu">txt</span> <span className="dv">2</span><span className="op">&gt;</span>errores<span className="op">.</span><span className="fu">txt</span></span>
            <span id="cb1-3"><Enlace href="#cb1-3" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb1-4"><Enlace href="#cb1-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Guarda todo en un solo archivo</span></span>
            <span id="cb1-5"><Enlace href="#cb1-5" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">Get-ChildItem</span> C<span className="op">:</span>\ <span className="op">*&gt;</span> todo<span className="op">.</span><span className="fu">txt</span></span>
            <span id="cb1-6"><Enlace href="#cb1-6" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb1-7"><Enlace href="#cb1-7" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Si un archivo existe, muestra un mensaje</span></span>
            <span id="cb1-8"><Enlace href="#cb1-8" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">Test-Path</span> <span className="st">&quot;C:\config.txt&quot;</span> <span className="op">&amp;&amp;</span> <span className="fu">Write-Host</span> <span className="st">&quot;Existe&quot;</span> <span className="op">||</span> <span className="fu">Write-Host</span> <span className="st">&quot;No existe&quot;</span></span>
            <span id="cb1-9"><Enlace href="#cb1-9" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb1-10"><Enlace href="#cb1-10" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Redirigir salida a un archivo y también verla en pantalla</span></span>
            <span id="cb1-11"><Enlace href="#cb1-11" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">Get-Process</span> <span className="op">|</span> <span className="fu">Tee-Object</span> <span className="op">-</span>FilePath procesos<span className="op">.</span><span className="fu">txt</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="tip-extra-usar-redirecciones-dentro-de-scripts">Tip extra: usar
        redirecciones dentro de scripts</Titulo>
      <Texto>En scripts (<code>.ps1</code>), puedes controlar redirecciones con
        más precisión:</Texto>
      <div className="sourceCode" id="cb2">
        <pre
          className="sourceCode powershell"><code className="sourceCode powershell"><span id="cb2-1"><Enlace href="#cb2-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="va">$ErrorActionPreference</span> <span className="op">=</span> <span className="st">&quot;SilentlyContinue&quot;</span>   <span className="co"># Ignora errores</span></span>
            <span id="cb2-2"><Enlace href="#cb2-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">Get-Item</span> <span className="st">&quot;C:\noexiste.txt&quot;</span> <span className="op">*&gt;</span> log<span className="op">.</span><span className="fu">txt</span>         <span className="co"># Redirige todo</span></span></code></pre>
      </div>
      <Linea />
      <Texto><Enlace href="./../readme.md#3-windows">Regresar a la guía
        principal</Enlace ></Texto>
      <blockquote>
        <Texto><strong>Autor:</strong> Fravelz</Texto>
      </blockquote>
    </>
  );
}
export default nameabcd;
