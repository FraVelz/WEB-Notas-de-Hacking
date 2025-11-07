<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">

<head>
  <meta charset="utf-8" />
  <meta name="generator" content="pandoc" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <title>redirecciones-powershell</title>

</head>

<body>
  <h1 id="redirecciones-en-powershell-operadores-lógicos-y-de-redirección">Redirecciones
    en Powershell (operadores lógicos y de redirección)</h1>
  <hr />
  <h2 id="temario">Temario</h2>
  <ul>
    <li><a href="#redirecciones-en-powershell-operadores-lógicos-y-de-redirección">Redirecciones
        en Powershell (operadores lógicos y de redirección)</a>
      <ul>
        <li><a href="#temario">Temario</a></li>
        <li><a href="#tipos-de-salida-en-powershell">Tipos de salida en
            PowerShell</a></li>
        <li><a href="#operadores-de-redirección">Operadores de
            redirección</a></li>
        <li><a href="#operadores-lógicos">Operadores lógicos</a></li>
        <li><a href="#ejemplos-combinados">Ejemplos combinados</a></li>
        <li><a href="#tip-extra-usar-redirecciones-dentro-de-scripts">Tip extra:
            usar redirecciones dentro de scripts</a></li>
      </ul>
    </li>
  </ul>
  <p><a href="./../readme.md#3-windows">Regresar a la guía
      principal</a></p>
  <hr />
  <h2 id="tipos-de-salida-en-powershell">Tipos de salida en
    PowerShell</h2>
  <p>PowerShell no solo maneja texto (como CMD), sino <strong>flujos de
      salida (streams)</strong>. Cada flujo tiene un número que se usa para
    redirigirlo:</p>
  <table>
    <colgroup>
      <col style="width: 6%" />
      <col style="width: 65%" />
      <col style="width: 27%" />
    </colgroup>
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
  <hr />
  <h2 id="operadores-de-redirección">Operadores de redirección</h2>
  <table style="width:100%;">
    <colgroup>
      <col style="width: 4%" />
      <col style="width: 26%" />
      <col style="width: 20%" />
      <col style="width: 26%" />
      <col style="width: 21%" />
    </colgroup>
    <thead>
      <tr>
        <th>Operador</th>
        <th>Significado</th>
        <th>Ejemplo</th>
        <th>Resultado</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>&gt;</code></td>
        <td>Redirige la <strong>salida estándar (1)</strong> y sobrescribe el
          archivo</td>
        <td><code>Get-Process &gt; salida.txt</code></td>
        <td>Guarda los procesos, sobrescribiendo el archivo si ya existe</td>
        <td></td>
      </tr>
      <tr>
        <td><code>&gt;&gt;</code></td>
        <td>Redirige y <strong>agrega (append)</strong> al final del
          archivo</td>
        <td><code>Get-Service &gt;&gt; salida.txt</code></td>
        <td>Agrega los servicios al final sin borrar lo anterior</td>
        <td></td>
      </tr>
      <tr>
        <td><code>2&gt;</code></td>
        <td>Redirige <strong>errores</strong> a un archivo</td>
        <td><code>Get-Item archivo_inexistente 2&gt; errores.txt</code></td>
        <td>Guarda los errores</td>
        <td></td>
      </tr>
      <tr>
        <td><code>2&gt;&gt;</code></td>
        <td>Redirige errores y <strong>agrega</strong> al archivo</td>
        <td><code>Get-Item archivo_inexistente 2&gt;&gt; errores.txt</code></td>
        <td>No sobrescribe</td>
        <td></td>
      </tr>
      <tr>
        <td><code>*&gt;</code></td>
        <td>Redirige <strong>todos los flujos</strong> a un archivo</td>
        <td><code>Get-Command *&gt; todo.txt</code></td>
        <td>Guarda salidas, errores, advertencias, etc.</td>
        <td></td>
      </tr>
      <tr>
        <td><code>*&gt;</code></td>
        <td>También puede combinarse con <code>&gt;&gt;</code></td>
        <td><code>*&gt;</code> sobrescribe / <code>*&gt;&gt;</code> agrega</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td><code>Out-File</code></td>
        <td>Envía la salida a un archivo (alternativa más potente)</td>
        <td><code>Get-Process                                   | Out-File procesos.txt -Append</code></td>
        <td>Más control (codificación, ancho de línea, etc.)</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <hr />
  <h2 id="operadores-lógicos">Operadores lógicos</h2>
  <p>PowerShell usa operadores <strong>lógicos</strong> y <strong>de
      control de flujo</strong> más avanzados que CMD:</p>
  <table>
    <colgroup>
      <col style="width: 4%" />
      <col style="width: 24%" />
      <col style="width: 17%" />
      <col style="width: 22%" />
      <col style="width: 8%" />
      <col style="width: 0%" />
      <col style="width: 8%" />
      <col style="width: 12%" />
    </colgroup>
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
  <hr />
  <h2 id="ejemplos-combinados">Ejemplos combinados</h2>
  <div class="sourceCode" id="cb1">
    <pre
      class="sourceCode powershell"><code class="sourceCode powershell"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="co"># Guarda salida y errores en archivos diferentes</span></span>
<span id="cb1-2"><a href="#cb1-2" aria-hidden="true" tabindex="-1"></a><span class="fu">Get-ChildItem</span> C<span class="op">:</span>\ <span class="dv">1</span><span class="op">&gt;</span>salida<span class="op">.</span><span class="fu">txt</span> <span class="dv">2</span><span class="op">&gt;</span>errores<span class="op">.</span><span class="fu">txt</span></span>
<span id="cb1-3"><a href="#cb1-3" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb1-4"><a href="#cb1-4" aria-hidden="true" tabindex="-1"></a><span class="co"># Guarda todo en un solo archivo</span></span>
<span id="cb1-5"><a href="#cb1-5" aria-hidden="true" tabindex="-1"></a><span class="fu">Get-ChildItem</span> C<span class="op">:</span>\ <span class="op">*&gt;</span> todo<span class="op">.</span><span class="fu">txt</span></span>
<span id="cb1-6"><a href="#cb1-6" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb1-7"><a href="#cb1-7" aria-hidden="true" tabindex="-1"></a><span class="co"># Si un archivo existe, muestra un mensaje</span></span>
<span id="cb1-8"><a href="#cb1-8" aria-hidden="true" tabindex="-1"></a><span class="fu">Test-Path</span> <span class="st">&quot;C:\config.txt&quot;</span> <span class="op">&amp;&amp;</span> <span class="fu">Write-Host</span> <span class="st">&quot;Existe&quot;</span> <span class="op">||</span> <span class="fu">Write-Host</span> <span class="st">&quot;No existe&quot;</span></span>
<span id="cb1-9"><a href="#cb1-9" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb1-10"><a href="#cb1-10" aria-hidden="true" tabindex="-1"></a><span class="co"># Redirigir salida a un archivo y también verla en pantalla</span></span>
<span id="cb1-11"><a href="#cb1-11" aria-hidden="true" tabindex="-1"></a><span class="fu">Get-Process</span> <span class="op">|</span> <span class="fu">Tee-Object</span> <span class="op">-</span>FilePath procesos<span class="op">.</span><span class="fu">txt</span></span></code></pre>
  </div>
  <hr />
  <h2 id="tip-extra-usar-redirecciones-dentro-de-scripts">Tip extra: usar
    redirecciones dentro de scripts</h2>
  <p>En scripts (<code>.ps1</code>), puedes controlar redirecciones con
    más precisión:</p>
  <div class="sourceCode" id="cb2">
    <pre
      class="sourceCode powershell"><code class="sourceCode powershell"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="va">$ErrorActionPreference</span> <span class="op">=</span> <span class="st">&quot;SilentlyContinue&quot;</span>   <span class="co"># Ignora errores</span></span>
<span id="cb2-2"><a href="#cb2-2" aria-hidden="true" tabindex="-1"></a><span class="fu">Get-Item</span> <span class="st">&quot;C:\noexiste.txt&quot;</span> <span class="op">*&gt;</span> log<span class="op">.</span><span class="fu">txt</span>         <span class="co"># Redirige todo</span></span></code></pre>
  </div>
  <hr />
  <p><a href="./../readme.md#3-windows">Regresar a la guía
      principal</a></p>
  <blockquote>
    <p><strong>Autor:</strong> Fravelz</p>
  </blockquote>
</body>

</html>