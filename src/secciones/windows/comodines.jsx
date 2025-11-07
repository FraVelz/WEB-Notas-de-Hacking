<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">

<head>
  <meta charset="utf-8" />
  <meta name="generator" content="pandoc" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <title>comodines</title>

</head>

<body>
  <h1 id="comodines">Comodines</h1>
  <hr />
  <h2 id="temario">Temario</h2>
  <ul>
    <li><a href="#comodines">Comodines</a>
      <ul>
        <li><a href="#temario">Temario</a></li>
        <li><a href="#1-comodines-básicos">1. Comodines básicos</a></li>
        <li><a href="#2-ejemplos-prácticos">2. Ejemplos prácticos</a></li>
      </ul>
    </li>
  </ul>
  <p><a href="./../readme.md#3-windows">Regresar a la guía
      principal</a></p>
  <hr />
  <h2 id="comodines-básicos">1. Comodines básicos</h2>
  <table style="width:100%;">
    <colgroup>
      <col style="width: 18%" />
      <col style="width: 26%" />
      <col style="width: 13%" />
      <col style="width: 41%" />
    </colgroup>
    <thead>
      <tr>
        <th>Comodín</th>
        <th>Significado</th>
        <th>Ejemplo CMD / PowerShell</th>
        <th>Explicación</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>*</code></td>
        <td>Cualquier número de caracteres (0 o más)</td>
        <td><code>dir *.txt</code></td>
        <td>Lista todos los archivos que terminan en <code>.txt</code></td>
      </tr>
      <tr>
        <td><code>?</code></td>
        <td>Cualquier carácter individual</td>
        <td><code>dir archivo?.txt</code></td>
        <td>Coincide con <code>archivo1.txt</code>, <code>archivoA.txt</code>,
          pero no <code>archivo10.txt</code></td>
      </tr>
      <tr>
        <td><code>[ ]</code> (solo PowerShell)</td>
        <td>Coincide con un carácter dentro de los corchetes</td>
        <td><code>Get-ChildItem a[12].txt</code></td>
        <td>Coincide con <code>a1.txt</code> y <code>a2.txt</code></td>
      </tr>
      <tr>
        <td><code>[! ]</code> o <code>[^ ]</code> (solo PowerShell)</td>
        <td>Negación de caracteres</td>
        <td><code>Get-ChildItem a[!1].txt</code></td>
        <td>Coincide con archivos que empiecen con <code>a</code> y no tengan
          <code>1</code> en esa posición
        </td>
      </tr>
    </tbody>
  </table>
  <hr />
  <h2 id="ejemplos-prácticos">2. Ejemplos prácticos</h2>
  <ul>
    <li><strong>Listar todos los archivos de un tipo</strong>:</li>
  </ul>
  <div class="sourceCode" id="cb1">
    <pre
      class="sourceCode cmd"><code class="sourceCode dosbat"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="bu">dir</span> *.jpg</span></code></pre>
  </div>
  <p>o en PowerShell:</p>
  <div class="sourceCode" id="cb2">
    <pre
      class="sourceCode powershell"><code class="sourceCode powershell"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="fu">Get-ChildItem</span> <span class="op">*.</span><span class="fu">jpg</span></span></code></pre>
  </div>
  <ul>
    <li><strong>Borrar todos los archivos de texto</strong>:</li>
  </ul>
  <div class="sourceCode" id="cb3">
    <pre
      class="sourceCode cmd"><code class="sourceCode dosbat"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a><span class="bu">del</span> *.txt</span></code></pre>
  </div>
  <p>o PowerShell:</p>
  <div class="sourceCode" id="cb4">
    <pre
      class="sourceCode powershell"><code class="sourceCode powershell"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a><span class="fu">Remove-Item</span> <span class="op">*.</span><span class="fu">txt</span></span></code></pre>
  </div>
  <ul>
    <li><strong>Copiar todos los archivos que empiecen con
        “doc”</strong>:</li>
  </ul>
  <div class="sourceCode" id="cb5">
    <pre
      class="sourceCode cmd"><code class="sourceCode dosbat"><span id="cb5-1"><a href="#cb5-1" aria-hidden="true" tabindex="-1"></a><span class="bu">copy</span> doc*.* D:\Backup\</span></code></pre>
  </div>
  <ul>
    <li><strong>Renombrar archivos específicos con patrón</strong>
      (PowerShell):</li>
  </ul>
  <div class="sourceCode" id="cb6">
    <pre
      class="sourceCode powershell"><code class="sourceCode powershell"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a><span class="fu">Rename-Item</span> <span class="st">&quot;archivo?.txt&quot;</span> <span class="op">-</span>NewName <span class="st">&quot;nuevo_?.txt&quot;</span></span></code></pre>
  </div>
  <hr />
  <p><strong>Tip importante:</strong></p>
  <p>En CMD los comodines son muy básicos (<code>*</code> y
    <code>?</code>), mientras que en PowerShell puedes usar expresiones más
    avanzadas con corchetes, rangos y negaciones.
  </p>
  <hr />
  <p><a href="./../readme.md#3-windows">Regresar a la guía
      principal</a></p>
  <blockquote>
    <p><strong>Autor:</strong> Fravelz</p>
  </blockquote>
</body>

</html>