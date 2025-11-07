<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">

<head>
  <meta charset="utf-8" />
  <meta name="generator" content="pandoc" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <title>powershell-cmd</title>

</head>

<body>
  <h1 id="diferencias-entre-powershell-y-cmd">Diferencias entre Powershell
    y CMD</h1>
  <hr />
  <h2 id="temario">Temario</h2>
  <ul>
    <li><a href="#diferencias-entre-powershell-y-cmd">Diferencias entre
        Powershell y CMD</a>
      <ul>
        <li><a href="#temario">Temario</a></li>
        <li><a href="#cmd-command-prompt">CMD (Command Prompt)</a></li>
        <li><a href="#powershell">PowerShell</a></li>
        <li><a href="#diferencias-clave-en-práctica">Diferencias clave en
            práctica</a></li>
        <li><a href="#ejemplo">Ejemplo</a></li>
      </ul>
    </li>
  </ul>
  <p><a href="./../readme.md#3-windows">Regresar a la guía
      principal</a></p>
  <hr />
  <h2 id="cmd-command-prompt">CMD (Command Prompt)</h2>
  <ul>
    <li>
      <p><strong>Origen</strong>: Basado en MS-DOS, presente en Windows
        desde versiones muy antiguas.</p>
    </li>
    <li>
      <p><strong>Lenguaje</strong>: Usa un lenguaje de comandos muy
        básico, llamado <em>batch</em>.</p>
    </li>
    <li>
      <p><strong>Funciones principales</strong>:</p>
      <ul>
        <li>
          <p>Ejecutar comandos simples del sistema (<code>dir</code>,
            <code>copy</code>, <code>del</code>, etc.).
          </p>
        </li>
        <li>
          <p>Automatizar tareas básicas con archivos
            <code>.bat</code>.
          </p>
        </li>
      </ul>
    </li>
    <li>
      <p><strong>Limitaciones</strong>:</p>
      <ul>
        <li>
          <p>Manejo de objetos muy limitado: CMD trabaja con <strong>texto
              plano</strong>, no con objetos.</p>
        </li>
        <li>
          <p>Automatización avanzada complicada.</p>
        </li>
        <li>
          <p>Funciones modernas de Windows (como administración de registros o
            servicios) son más difíciles de hacer.</p>
        </li>
      </ul>
    </li>
  </ul>
  <hr />
  <h2 id="powershell">PowerShell</h2>
  <ul>
    <li>
      <p><strong>Origen</strong>: Introducido en 2006 como una herramienta
        moderna de administración de Windows.</p>
    </li>
    <li>
      <p><strong>Lenguaje</strong>: Basado en .NET, orientado a
        objetos.</p>
    </li>
    <li>
      <p><strong>Funciones principales</strong>:</p>
      <ul>
        <li>
          <p>No solo ejecuta comandos, sino que devuelve <strong>objetos
              completos</strong>, no solo texto.</p>
          <ul>
            <li>Ejemplo: <code>Get-Process</code> devuelve un objeto de proceso con
              propiedades (<code>Id</code>, <code>CPU</code>, <code>Memory</code>,
              etc.) que se pueden filtrar o manipular.</li>
          </ul>
        </li>
        <li>
          <p>Automatización avanzada: scripts <code>.ps1</code> pueden hacer
            casi cualquier cosa en Windows, desde tareas de administración hasta
            manipulación de servicios, registro, Active Directory, etc.</p>
        </li>
        <li>
          <p>Combinación de cmdlets (comandos especializados de PowerShell)
            para tareas complejas.</p>
        </li>
      </ul>
    </li>
    <li>
      <p><strong>Compatibilidad</strong>: Puede ejecutar casi todos los
        comandos de CMD, y mucho más.</p>
    </li>
    <li>
      <p><strong>Multiplataforma</strong>: PowerShell 7+ funciona en
        Windows, Linux y macOS.</p>
    </li>
  </ul>
  <hr />
  <h2 id="diferencias-clave-en-práctica">Diferencias clave en
    práctica</h2>
  <table>
    <thead>
      <tr>
        <th>Característica</th>
        <th>CMD</th>
        <th>PowerShell</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Lenguaje</td>
        <td>Batch / texto</td>
        <td>Basado en objetos / .NET</td>
      </tr>
      <tr>
        <td>Salida de comandos</td>
        <td>Texto plano</td>
        <td>Objetos</td>
      </tr>
      <tr>
        <td>Automatización</td>
        <td>Básica</td>
        <td>Avanzada</td>
      </tr>
      <tr>
        <td>Scripts</td>
        <td><code>.bat</code></td>
        <td><code>.ps1</code></td>
      </tr>
      <tr>
        <td>Administración de Windows</td>
        <td>Limitada</td>
        <td>Completa</td>
      </tr>
      <tr>
        <td>Multiplataforma</td>
        <td>Solo Windows</td>
        <td>Windows, Linux, macOS</td>
      </tr>
    </tbody>
  </table>
  <hr />
  <h2 id="ejemplo">Ejemplo</h2>
  <ul>
    <li>CMD:</li>
  </ul>
  <div class="sourceCode" id="cb1">
    <pre
      class="sourceCode cmd"><code class="sourceCode dosbat"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="bu">dir</span> <span class="kw">|</span> <span class="kw">find</span> <span class="st">&quot;archivo.txt&quot;</span></span></code></pre>
  </div>
  <ul>
    <li>PowerShell:</li>
  </ul>
  <div class="sourceCode" id="cb2">
    <pre
      class="sourceCode powershell"><code class="sourceCode powershell"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="fu">Get-ChildItem</span> <span class="op">|</span> <span class="fu">Where-Object</span> <span class="op">{</span> <span class="va">$_</span><span class="op">.</span><span class="fu">Name</span> <span class="op">-eq</span> <span class="st">&quot;archivo.txt&quot;</span> <span class="op">}</span></span></code></pre>
  </div>
  <blockquote>
    <p>En PowerShell trabajas con objetos (<code>$_.Name</code>) y no solo
      con texto, lo que te da muchísima más flexibilidad.</p>
  </blockquote>
  <hr />
  <p><a href="./../readme.md#3-windows">Regresar a la guía
      principal</a></p>
  <blockquote>
    <p><strong>Autor:</strong> Fravelz</p>
  </blockquote>
</body>

</html>