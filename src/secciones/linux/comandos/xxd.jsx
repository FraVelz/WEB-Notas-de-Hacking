<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">

<head>
  <meta charset="utf-8" />
  <meta name="generator" content="pandoc" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <title>xxd</title>

</head>

<body>
  <h1 id="xxd-en-linux">Xxd en Linux</h1>
  <hr />
  <h2 id="temario">Temario</h2>
  <ul>
    <li><a href="#xxd-en-linux">Xxd en Linux</a>
      <ul>
        <li><a href="#temario">Temario</a></li>
        <li><a href="#que-es-el-comando-xxd">Que es el comando xxd</a></li>
        <li><a href="#sintaxis-básica">Sintaxis básica</a></li>
        <li><a href="#ejemplos-comunes">Ejemplos comunes</a>
          <ul>
            <li><a href="#1-ver-un-archivo-en-formato-hexadecimal">1. Ver un archivo
                en formato hexadecimal</a></li>
            <li><a href="#2-convertir-de-binario-a-texto-hexadecimal">2. Convertir
                de binario a texto hexadecimal</a></li>
            <li><a href="#3-convertir-de-texto-hexadecimal-a-binario">3. Convertir
                de texto hexadecimal a binario</a></li>
            <li><a href="#4-mostrar-solo-los-bytes-sin-dirección-ni-texto-ascii">4.
                Mostrar solo los bytes (sin dirección ni texto ASCII)</a></li>
            <li><a href="#5-ver-solo-los-primeros-bytes">5. Ver solo los primeros
                bytes</a></li>
          </ul>
        </li>
        <li><a href="#en-resumen">En resumen</a></li>
      </ul>
    </li>
  </ul>
  <p><a href="./../../readme.md#5-python">Regresar a la Guía
      Principal</a></p>
  <hr />
  <h2 id="que-es-el-comando-xxd">Que es el comando xxd</h2>
  <p>El comando <code>xxd</code> en Linux (y otros sistemas Unix)
    <strong>convierte datos binarios en una representación
      hexadecimal</strong> y también puede hacer lo contrario (convertir de
    hexadecimal a binario). Es muy útil para inspeccionar o editar archivos
    binarios, ver bytes en formato legible o reconstruir archivos desde
    texto hexadecimal.
  </p>
  <hr />
  <h2 id="sintaxis-básica">Sintaxis básica</h2>
  <div class="sourceCode" id="cb1">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="ex">xxd</span> <span class="pp">[</span><span class="ss">opciones</span><span class="pp">]</span> <span class="pp">[</span><span class="ss">archivo</span><span class="pp">]</span></span></code></pre>
  </div>
  <hr />
  <h2 id="ejemplos-comunes">Ejemplos comunes</h2>
  <h3 id="ver-un-archivo-en-formato-hexadecimal">1. Ver un archivo en
    formato hexadecimal</h3>
  <div class="sourceCode" id="cb2">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="ex">xxd</span> archivo.bin</span></code></pre>
  </div>
  <p>➡️ Muestra el contenido de <code>archivo.bin</code> así:</p>
  <div class="sourceCode" id="cb3">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a><span class="ex">00000000:</span> 486f 6c61 206d 756e 646f          Hola mundo</span></code></pre>
  </div>
  <ul>
    <li>
      <p>La primera columna (<code>00000000</code>) es el desplazamiento
        (offset) en hexadecimal.</p>
    </li>
    <li>
      <p>Luego vienen los bytes en formato hex.</p>
    </li>
    <li>
      <p>A la derecha aparece la interpretación ASCII (si los bytes son
        imprimibles).</p>
    </li>
  </ul>
  <hr />
  <h3 id="convertir-de-binario-a-texto-hexadecimal">2. Convertir de
    binario a texto hexadecimal</h3>
  <div class="sourceCode" id="cb4">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a><span class="fu">cat</span> archivo <span class="kw">|</span> <span class="ex">xxd</span></span></code></pre>
  </div>
  <p>➡️ Convierte los bytes de la entrada estándar en texto
    hexadecimal.</p>
  <hr />
  <h3 id="convertir-de-texto-hexadecimal-a-binario">3. Convertir de texto
    hexadecimal a binario</h3>
  <div class="sourceCode" id="cb5">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb5-1"><a href="#cb5-1" aria-hidden="true" tabindex="-1"></a><span class="fu">cat</span> archivo_hex.txt <span class="kw">|</span> <span class="ex">xxd</span> <span class="at">-r</span> <span class="op">&gt;</span> archivo_original</span></code></pre>
  </div>
  <ul>
    <li><code>-r</code> significa <strong>reverse</strong> (revertir).</li>
    <li>Esto toma una representación en hex (por ejemplo, hecha por
      <code>xxd</code>) y reconstruye el archivo binario original.
    </li>
  </ul>
  <hr />
  <h3 id="mostrar-solo-los-bytes-sin-dirección-ni-texto-ascii">4. Mostrar
    solo los bytes (sin dirección ni texto ASCII)</h3>
  <div class="sourceCode" id="cb6">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a><span class="ex">xxd</span> <span class="at">-p</span> archivo.bin</span></code></pre>
  </div>
  <p>Salida “plana” (plain):</p>
  <div class="sourceCode" id="cb7">
    <pre
      class="sourceCode txt"><code class="sourceCode default"><span id="cb7-1"><a href="#cb7-1" aria-hidden="true" tabindex="-1"></a>486f6c61206d756e646f</span></code></pre>
  </div>
  <p>Perfecta para copiar y pegar en scripts o codificaciones.</p>
  <hr />
  <h3 id="ver-solo-los-primeros-bytes">5. Ver solo los primeros bytes</h3>
  <div class="sourceCode" id="cb8">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb8-1"><a href="#cb8-1" aria-hidden="true" tabindex="-1"></a><span class="ex">xxd</span> <span class="at">-l</span> 16 archivo.bin</span></code></pre>
  </div>
  <p>➡️ Muestra solo los primeros 16 bytes.</p>
  <hr />
  <h2 id="en-resumen">En resumen</h2>
  <table style="width:100%;">
    <colgroup>
      <col style="width: 26%" />
      <col style="width: 31%" />
      <col style="width: 41%" />
    </colgroup>
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
  <hr />
  <p><a href="./../../readme.md#5-python">Regresar a la Guía
      Principal</a></p>
  <blockquote>
    <p><strong>Autor:</strong> Fravelz</p>
  </blockquote>
</body>

</html>