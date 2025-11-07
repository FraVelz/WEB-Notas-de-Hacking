<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">

<head>
  <meta charset="utf-8" />
  <meta name="generator" content="pandoc" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <title>permisos</title>

</head>

<body>
  <h1 id="permisos-en-linux">Permisos en Linux</h1>
  <h2 id="temario">Temario</h2>
  <ul>
    <li><a href="#permisos-en-linux">Permisos en Linux</a>
      <ul>
        <li><a href="#temario">Temario</a></li>
        <li><a href="#1-concepto-básico-de-permisos">1. Concepto básico de
            permisos</a>
          <ul>
            <li><a href="#tipos-de-permisos">Tipos de permisos</a></li>
            <li><a href="#categorías">Categorías</a></li>
          </ul>
        </li>
        <li><a href="#2-ver-permisos">2. Ver permisos</a></li>
        <li><a href="#3-cambiar-permisos-chmod">3. Cambiar permisos
            (<code>chmod</code>)</a>
          <ul>
            <li><a href="#a-modo-simbólico">a) Modo simbólico</a></li>
            <li><a href="#b-modo-numérico">b) Modo numérico</a></li>
          </ul>
        </li>
        <li><a href="#4-cambiar-dueño-o-grupo-chown-chgrp">4. Cambiar dueño o
            grupo (<code>chown</code>, <code>chgrp</code>)</a></li>
        <li><a href="#5-permisos-especiales">5. Permisos especiales</a>
          <ul>
            <li><a href="#sticky-bit">Sticky Bit</a></li>
            <li><a href="#suid-y-sgid">SUID y SGID</a>
              <ul>
                <li><a href="#suid">SUID</a></li>
                <li><a href="#sgid">SGID</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><a href="#6-atributos-de-archivos-chattr-lsattr">6. Atributos de
            archivos (<code>chattr</code>, <code>lsattr</code>)</a>
          <ul>
            <li><a href="#ver-atributos">Ver atributos</a></li>
            <li><a href="#cambiar-atributos-chattr">Cambiar atributos
                (<code>chattr</code>)</a></li>
            <li><a href="#atributos-comunes">Atributos comunes</a></li>
            <li><a href="#ejemplo-práctico-en-script-bash">Ejemplo práctico en
                script Bash</a></li>
          </ul>
        </li>
        <li><a href="#7-resumen-visual">7. Resumen visual</a></li>
      </ul>
    </li>
  </ul>
  <p><a href="./../readme.md#2-linux-y-bash-script">Regresar a la guía
      principal</a></p>
  <hr />
  <h2 id="concepto-básico-de-permisos">1. Concepto básico de permisos</h2>
  <p>Cada archivo o carpeta tiene <strong>3 tipos de permisos</strong> y
    <strong>3 categorías de usuarios</strong>:
  </p>
  <h3 id="tipos-de-permisos">Tipos de permisos</h3>
  <table>
    <thead>
      <tr>
        <th style="text-align: center;">Símbolo</th>
        <th>Significado</th>
        <th style="text-align: center;">Valor</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="text-align: center;"><code>r</code></td>
        <td>Lectura (read)</td>
        <td style="text-align: center;">4</td>
      </tr>
      <tr>
        <td style="text-align: center;"><code>w</code></td>
        <td>Escritura (write)</td>
        <td style="text-align: center;">2</td>
      </tr>
      <tr>
        <td style="text-align: center;"><code>x</code></td>
        <td>Ejecución (execute)</td>
        <td style="text-align: center;">1</td>
      </tr>
    </tbody>
  </table>
  <h3 id="categorías">Categorías</h3>
  <table>
    <thead>
      <tr>
        <th style="text-align: center;">Categoría</th>
        <th>Se aplica a</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="text-align: center;"><code>u</code></td>
        <td>Usuario propietario</td>
      </tr>
      <tr>
        <td style="text-align: center;"><code>g</code></td>
        <td>Grupo propietario</td>
      </tr>
      <tr>
        <td style="text-align: center;"><code>o</code></td>
        <td>Otros usuarios</td>
      </tr>
    </tbody>
  </table>
  <hr />
  <h2 id="ver-permisos">2. Ver permisos</h2>
  <div class="sourceCode" id="cb1">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="fu">ls</span> <span class="at">-l</span></span></code></pre>
  </div>
  <p>Ejemplo:</p>
  <div class="sourceCode" id="cb2">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="ex">-rwxr-xr--</span>  1 francisco users 1234 oct 21  script.sh</span></code></pre>
  </div>
  <p>Significado:</p>
  <ul>
    <li><code>rwx</code> → usuario</li>
    <li><code>r-x</code> → grupo</li>
    <li><code>r--</code> → otros</li>
    <li><code>francisco</code> → dueño</li>
    <li><code>users</code> → grupo</li>
  </ul>
  <hr />
  <h2 id="cambiar-permisos-chmod">3. Cambiar permisos
    (<code>chmod</code>)</h2>
  <h3 id="a-modo-simbólico">a) Modo simbólico</h3>
  <div class="sourceCode" id="cb3">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a><span class="fu">chmod</span> u+x script.sh     <span class="co"># añadir ejecución al usuario</span></span>
<span id="cb3-2"><a href="#cb3-2" aria-hidden="true" tabindex="-1"></a><span class="fu">chmod</span> g-w script.sh     <span class="co"># quitar escritura al grupo</span></span>
<span id="cb3-3"><a href="#cb3-3" aria-hidden="true" tabindex="-1"></a><span class="fu">chmod</span> o=r file.txt      <span class="co"># solo lectura para otros</span></span>
<span id="cb3-4"><a href="#cb3-4" aria-hidden="true" tabindex="-1"></a><span class="fu">chmod</span> a+r file.txt      <span class="co"># todos pueden leer</span></span></code></pre>
  </div>
  <h3 id="b-modo-numérico">b) Modo numérico</h3>
  <div class="sourceCode" id="cb4">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a><span class="fu">chmod</span> 755 script.sh</span></code></pre>
  </div>
  <table>
    <thead>
      <tr>
        <th style="text-align: center;">Valor</th>
        <th style="text-align: center;">Permiso</th>
        <th>Descripción</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="text-align: center;">7</td>
        <td style="text-align: center;">rwx</td>
        <td>lectura, escritura, ejecución</td>
      </tr>
      <tr>
        <td style="text-align: center;">6</td>
        <td style="text-align: center;">rw-</td>
        <td>lectura, escritura</td>
      </tr>
      <tr>
        <td style="text-align: center;">5</td>
        <td style="text-align: center;">r-x</td>
        <td>lectura, ejecución</td>
      </tr>
      <tr>
        <td style="text-align: center;">4</td>
        <td style="text-align: center;">r–</td>
        <td>solo lectura</td>
      </tr>
      <tr>
        <td style="text-align: center;">0</td>
        <td style="text-align: center;">—</td>
        <td>sin permisos</td>
      </tr>
    </tbody>
  </table>
  <hr />
  <h2 id="cambiar-dueño-o-grupo-chown-chgrp">4. Cambiar dueño o grupo
    (<code>chown</code>, <code>chgrp</code>)</h2>
  <div class="sourceCode" id="cb5">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb5-1"><a href="#cb5-1" aria-hidden="true" tabindex="-1"></a><span class="fu">chown</span> usuario archivo</span>
<span id="cb5-2"><a href="#cb5-2" aria-hidden="true" tabindex="-1"></a><span class="fu">chgrp</span> grupo archivo</span>
<span id="cb5-3"><a href="#cb5-3" aria-hidden="true" tabindex="-1"></a><span class="fu">chown</span> usuario:grupo archivo</span></code></pre>
  </div>
  <p>Ejemplo:</p>
  <div class="sourceCode" id="cb6">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> chown francisco:users script.sh</span></code></pre>
  </div>
  <hr />
  <h2 id="permisos-especiales">5. Permisos especiales</h2>
  <p>Existen tres permisos especiales en Linux:</p>
  <table>
    <colgroup>
      <col style="width: 21%" />
      <col style="width: 5%" />
      <col style="width: 24%" />
      <col style="width: 48%" />
    </colgroup>
    <thead>
      <tr>
        <th>Bit</th>
        <th>Valor</th>
        <th>Se aplica a</th>
        <th>Efecto</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>SUID (<code>s</code>)</strong></td>
        <td>4000</td>
        <td>Archivos ejecutables</td>
        <td>Se ejecuta con permisos del dueño</td>
      </tr>
      <tr>
        <td><strong>SGID (<code>s</code>)</strong></td>
        <td>2000</td>
        <td>Archivos / directorios</td>
        <td>Hereda grupo o ejecuta con grupo del archivo</td>
      </tr>
      <tr>
        <td><strong>Sticky bit (<code>t</code>)</strong></td>
        <td>1000</td>
        <td>Directorios</td>
        <td>Solo el dueño puede borrar sus archivos</td>
      </tr>
    </tbody>
  </table>
  <h3 id="sticky-bit">Sticky Bit</h3>
  <p>El <strong>sticky bit</strong> se usa en directorios <strong>para
      evitar que otros borren archivos ajenos</strong>.</p>
  <div class="sourceCode" id="cb7">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb7-1"><a href="#cb7-1" aria-hidden="true" tabindex="-1"></a><span class="fu">chmod</span> +t /tmp/publico</span>
<span id="cb7-2"><a href="#cb7-2" aria-hidden="true" tabindex="-1"></a><span class="co"># o modo numérico</span></span>
<span id="cb7-3"><a href="#cb7-3" aria-hidden="true" tabindex="-1"></a><span class="fu">chmod</span> 1777 /tmp/publico</span></code></pre>
  </div>
  <p>Ver resultado:</p>
  <div class="sourceCode" id="cb8">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb8-1"><a href="#cb8-1" aria-hidden="true" tabindex="-1"></a><span class="fu">ls</span> <span class="at">-ld</span> /tmp/publico</span>
<span id="cb8-2"><a href="#cb8-2" aria-hidden="true" tabindex="-1"></a><span class="ex">drwxrwxrwt</span>  9 root root 4096 oct 21 09:00 /tmp/publico</span></code></pre>
  </div>
  <p><code>drwxrwxrw**t**</code> → el “t” final indica el sticky bit
    activo.</p>
  <p>Ejemplo típico: El directorio <code>/tmp</code> <strong>siempre lo
      tiene activado</strong>.</p>
  <h3 id="suid-y-sgid">SUID y SGID</h3>
  <h4 id="suid">SUID</h4>
  <p>Ejemplo:</p>
  <div class="sourceCode" id="cb9">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb9-1"><a href="#cb9-1" aria-hidden="true" tabindex="-1"></a><span class="fu">ls</span> <span class="at">-l</span> /usr/bin/passwd</span>
<span id="cb9-2"><a href="#cb9-2" aria-hidden="true" tabindex="-1"></a><span class="ex">-rwsr-xr-x</span> 1 root root 54256 oct 21 /usr/bin/passwd</span></code></pre>
  </div>
  <ul>
    <li>La <code>s</code> en lugar de la <code>x</code> del usuario indica
      <strong>SUID activo</strong>.
    </li>
    <li>Permite ejecutar con permisos del <strong>dueño del archivo</strong>
      (en este caso, root).</li>
  </ul>
  <p>Activar o desactivar manualmente:</p>
  <div class="sourceCode" id="cb10">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb10-1"><a href="#cb10-1" aria-hidden="true" tabindex="-1"></a><span class="fu">chmod</span> u+s archivo   <span class="co"># activar</span></span>
<span id="cb10-2"><a href="#cb10-2" aria-hidden="true" tabindex="-1"></a><span class="fu">chmod</span> u-s archivo   <span class="co"># desactivar</span></span></code></pre>
  </div>
  <h4 id="sgid">SGID</h4>
  <p>En ejecutables:</p>
  <div class="sourceCode" id="cb11">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb11-1"><a href="#cb11-1" aria-hidden="true" tabindex="-1"></a><span class="fu">chmod</span> g+s archivo</span></code></pre>
  </div>
  <p>En directorios:</p>
  <div class="sourceCode" id="cb12">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb12-1"><a href="#cb12-1" aria-hidden="true" tabindex="-1"></a><span class="fu">chmod</span> g+s carpeta/</span></code></pre>
  </div>
  <p>Efecto:</p>
  <blockquote>
    <p>Los nuevos archivos heredan el grupo del directorio, útil para
      carpetas compartidas.</p>
  </blockquote>
  <hr />
  <h2 id="atributos-de-archivos-chattr-lsattr">6. Atributos de archivos
    (<code>chattr</code>, <code>lsattr</code>)</h2>
  <p>Los <strong>atributos</strong> controlan <em>cómo</em> se comporta un
    archivo, más allá de los permisos.</p>
  <h3 id="ver-atributos">Ver atributos</h3>
  <div class="sourceCode" id="cb13">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb13-1"><a href="#cb13-1" aria-hidden="true" tabindex="-1"></a><span class="fu">lsattr</span> archivo</span></code></pre>
  </div>
  <p>Ejemplo:</p>
  <div class="sourceCode" id="cb14">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb14-1"><a href="#cb14-1" aria-hidden="true" tabindex="-1"></a><span class="ex">----i--------e-----</span>  documento.txt</span></code></pre>
  </div>
  <h3 id="cambiar-atributos-chattr">Cambiar atributos
    (<code>chattr</code>)</h3>
  <p>Hacer un archivo <strong>inmutable</strong>:</p>
  <div class="sourceCode" id="cb15">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb15-1"><a href="#cb15-1" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> chattr +i archivo.txt</span></code></pre>
  </div>
  <p>Solo <strong>root</strong> puede revertirlo:</p>
  <div class="sourceCode" id="cb16">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb16-1"><a href="#cb16-1" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> chattr <span class="at">-i</span> archivo.txt</span></code></pre>
  </div>
  <p>Modo <strong>append-only</strong> (solo añadir contenido):</p>
  <div class="sourceCode" id="cb17">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb17-1"><a href="#cb17-1" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> chattr +a log.txt</span></code></pre>
  </div>
  <h3 id="atributos-comunes">Atributos comunes</h3>
  <table>
    <thead>
      <tr>
        <th>Letra</th>
        <th>Descripción</th>
        <th>Uso</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>i</code></td>
        <td>Inmutable</td>
        <td>Proteger archivos críticos</td>
      </tr>
      <tr>
        <td><code>a</code></td>
        <td>Solo append</td>
        <td>Logs o auditorías</td>
      </tr>
      <tr>
        <td><code>c</code></td>
        <td>Comprimir</td>
        <td>Backups</td>
      </tr>
      <tr>
        <td><code>d</code></td>
        <td>Excluir de dump</td>
        <td>Archivos temporales</td>
      </tr>
      <tr>
        <td><code>e</code></td>
        <td>Extents (ext4)</td>
        <td>Normalmente activo</td>
      </tr>
      <tr>
        <td><code>s</code></td>
        <td>Borrado seguro</td>
        <td>Privacidad</td>
      </tr>
      <tr>
        <td><code>u</code></td>
        <td>Recuperable</td>
        <td>Auditoría</td>
      </tr>
    </tbody>
  </table>
  <h3 id="ejemplo-práctico-en-script-bash">Ejemplo práctico en script
    Bash</h3>
  <div class="sourceCode" id="cb18">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb18-1"><a href="#cb18-1" aria-hidden="true" tabindex="-1"></a><span class="co">#!/bin/bash</span></span>
<span id="cb18-2"><a href="#cb18-2" aria-hidden="true" tabindex="-1"></a><span class="co"># Proteger archivos del sistema</span></span>
<span id="cb18-3"><a href="#cb18-3" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb18-4"><a href="#cb18-4" aria-hidden="true" tabindex="-1"></a><span class="va">ARCHIVOS</span><span class="op">=</span><span class="va">(</span><span class="st">&quot;/etc/passwd&quot;</span> <span class="st">&quot;/etc/shadow&quot;</span> <span class="st">&quot;/etc/fstab&quot;</span><span class="va">)</span></span>
<span id="cb18-5"><a href="#cb18-5" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb18-6"><a href="#cb18-6" aria-hidden="true" tabindex="-1"></a><span class="cf">for</span> f <span class="kw">in</span> <span class="st">&quot;</span><span class="va">${ARCHIVOS</span><span class="op">[@]</span><span class="va">}</span><span class="st">&quot;</span><span class="kw">;</span> <span class="cf">do</span></span>
<span id="cb18-7"><a href="#cb18-7" aria-hidden="true" tabindex="-1"></a>  <span class="cf">if</span> <span class="bu">[</span> <span class="ot">-f</span> <span class="st">&quot;</span><span class="va">$f</span><span class="st">&quot;</span> <span class="bu">]</span><span class="kw">;</span> <span class="cf">then</span></span>
<span id="cb18-8"><a href="#cb18-8" aria-hidden="true" tabindex="-1"></a>    <span class="fu">sudo</span> chattr +i <span class="st">&quot;</span><span class="va">$f</span><span class="st">&quot;</span></span>
<span id="cb18-9"><a href="#cb18-9" aria-hidden="true" tabindex="-1"></a>    <span class="bu">echo</span> <span class="st">&quot;Protegido: </span><span class="va">$f</span><span class="st">&quot;</span></span>
<span id="cb18-10"><a href="#cb18-10" aria-hidden="true" tabindex="-1"></a>  <span class="cf">fi</span></span>
<span id="cb18-11"><a href="#cb18-11" aria-hidden="true" tabindex="-1"></a><span class="cf">done</span></span>
<span id="cb18-12"><a href="#cb18-12" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb18-13"><a href="#cb18-13" aria-hidden="true" tabindex="-1"></a><span class="fu">lsattr</span> <span class="st">&quot;</span><span class="va">${ARCHIVOS</span><span class="op">[@]</span><span class="va">}</span><span class="st">&quot;</span></span></code></pre>
  </div>
  <hr />
  <h2 id="resumen-visual">7. Resumen visual</h2>
  <table>
    <colgroup>
      <col style="width: 20%" />
      <col style="width: 5%" />
      <col style="width: 22%" />
      <col style="width: 50%" />
    </colgroup>
    <thead>
      <tr>
        <th>Permiso</th>
        <th>Valor</th>
        <th>Aplica a</th>
        <th>Efecto</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>SUID (<code>u+s</code>)</td>
        <td>4000</td>
        <td>Archivos ejecutables</td>
        <td>Ejecuta con permisos del dueño</td>
      </tr>
      <tr>
        <td>SGID (<code>g+s</code>)</td>
        <td>2000</td>
        <td>Archivos / carpetas</td>
        <td>Hereda grupo o ejecuta con grupo del archivo</td>
      </tr>
      <tr>
        <td>Sticky (<code>+t</code>)</td>
        <td>1000</td>
        <td>Directorios</td>
        <td>Solo el dueño puede borrar sus archivos</td>
      </tr>
      <tr>
        <td>Inmutable (<code>+i</code>)</td>
        <td>—</td>
        <td>Archivos</td>
        <td>No se puede modificar ni borrar</td>
      </tr>
      <tr>
        <td>Append-only (<code>+a</code>)</td>
        <td>—</td>
        <td>Archivos</td>
        <td>Solo se puede añadir contenido</td>
      </tr>
    </tbody>
  </table>
  <hr />
  <p><a href="./../readme.md#2-linux-y-bash-script">Regresar a la guía
      principal</a></p>
  <blockquote>
    <p><strong>Autor:</strong> Fravelz</p>
  </blockquote>
</body>

</html>