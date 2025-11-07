<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">

<head>
  <meta charset="utf-8" />
  <meta name="generator" content="pandoc" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <title>os</title>

</head>

<body>
  <h1 id="os-en-python">Os en Python</h1>
  <hr />
  <h2 id="temario">Temario</h2>
  <ul>
    <li><a href="#os-en-python">os en Python</a>
      <ul>
        <li><a href="#temario">Temario</a></li>
        <li><a href="#qué-es-os-en-python">¿Qué es os en Python?</a></li>
        <li><a href="#1-manejo-de-directorios">1. Manejo de directorios</a>
          <ul>
            <li><a href="#ver-el-directorio-actual">Ver el directorio
                actual</a></li>
            <li><a href="#cambiar-de-directorio">Cambiar de directorio</a></li>
            <li><a href="#listar-archivos-y-carpetas">Listar archivos y
                carpetas</a></li>
            <li><a href="#crear-y-eliminar-carpetas">Crear y eliminar
                carpetas</a></li>
          </ul>
        </li>
        <li><a href="#2-manejo-de-archivos">2. Manejo de archivos</a>
          <ul>
            <li><a href="#eliminar-archivos">Eliminar archivos</a></li>
            <li><a href="#renombrar-o-mover">Renombrar o mover</a></li>
          </ul>
        </li>
        <li><a href="#3-trabajar-con-rutas-ospath">3. Trabajar con rutas
            (<code>os.path</code>)</a>
          <ul>
            <li><a href="#unir-rutas-correctamente-independiente-del-sistema">Unir
                rutas correctamente (independiente del sistema)</a></li>
            <li><a href="#obtener-el-nombre-o-carpeta-base">Obtener el nombre o
                carpeta base</a></li>
            <li><a href="#comprobar-existencia">Comprobar existencia</a></li>
          </ul>
        </li>
        <li><a href="#4-variables-de-entorno">4. Variables de entorno</a>
          <ul>
            <li><a href="#ver-todas-las-variables-del-sistema">Ver todas las
                variables del sistema</a></li>
            <li><a href="#obtener-una-variable-específica">Obtener una variable
                específica</a></li>
            <li><a href="#crear-o-modificar-una-variable-de-entorno">Crear o
                modificar una variable de entorno</a></li>
          </ul>
        </li>
        <li><a href="#5-ejecutar-comandos-del-sistema">5. Ejecutar comandos del
            sistema</a></li>
        <li><a href="#6-permisos-y-propiedades">6. Permisos y
            propiedades</a></li>
        <li><a href="#7-ejemplo-práctico">7. Ejemplo práctico</a></li>
        <li><a href="#8-combinación-con-otros-módulos">8. Combinación con otros
            módulos</a></li>
        <li><a href="#9-ejemplo-crear-un-script-portable">9. Ejemplo: crear un
            script portable</a></li>
        <li><a href="#10-resumen-de-funciones-más-útiles">10. Resumen de
            funciones más útiles</a></li>
      </ul>
    </li>
  </ul>
  <p><a href="./../../readme.md#5-python">Regresar a la Guía
      Principal</a></p>
  <hr />
  <h2 id="qué-es-os-en-python">¿Qué es os en Python?</h2>
  <p>El módulo <strong><code>os</code></strong> (Operating System) permite
    <strong>interactuar directamente con el sistema operativo</strong>:
    manejar archivos, carpetas, variables de entorno, procesos, permisos,
    rutas, y más.
  </p>
  <p>Se importa así:</p>
  <div class="sourceCode" id="cb1">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> os</span></code></pre>
  </div>
  <hr />
  <h2 id="manejo-de-directorios">1. Manejo de directorios</h2>
  <h3 id="ver-el-directorio-actual">Ver el directorio actual</h3>
  <div class="sourceCode" id="cb2">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(os.getcwd())  <span class="co"># get current working directory</span></span></code></pre>
  </div>
  <h3 id="cambiar-de-directorio">Cambiar de directorio</h3>
  <div class="sourceCode" id="cb3">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a>os.chdir(<span class="st">&quot;/home/fravelz/Documentos&quot;</span>)</span></code></pre>
  </div>
  <h3 id="listar-archivos-y-carpetas">Listar archivos y carpetas</h3>
  <div class="sourceCode" id="cb4">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a>archivos <span class="op">=</span> os.listdir(<span class="st">&quot;.&quot;</span>)</span>
<span id="cb4-2"><a href="#cb4-2" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(archivos)</span></code></pre>
  </div>
  <h3 id="crear-y-eliminar-carpetas">Crear y eliminar carpetas</h3>
  <div class="sourceCode" id="cb5">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb5-1"><a href="#cb5-1" aria-hidden="true" tabindex="-1"></a>os.mkdir(<span class="st">&quot;nueva_carpeta&quot;</span>)        <span class="co"># Crear una carpeta</span></span>
<span id="cb5-2"><a href="#cb5-2" aria-hidden="true" tabindex="-1"></a>os.makedirs(<span class="st">&quot;a/b/c&quot;</span>, exist_ok<span class="op">=</span><span class="va">True</span>)  <span class="co"># Crear carpetas anidadas</span></span>
<span id="cb5-3"><a href="#cb5-3" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb5-4"><a href="#cb5-4" aria-hidden="true" tabindex="-1"></a>os.rmdir(<span class="st">&quot;nueva_carpeta&quot;</span>)        <span class="co"># Eliminar carpeta vacía</span></span>
<span id="cb5-5"><a href="#cb5-5" aria-hidden="true" tabindex="-1"></a>os.removedirs(<span class="st">&quot;a/b/c&quot;</span>)           <span class="co"># Eliminar jerarquía vacía</span></span></code></pre>
  </div>
  <hr />
  <h2 id="manejo-de-archivos">2. Manejo de archivos</h2>
  <h3 id="eliminar-archivos">Eliminar archivos</h3>
  <div class="sourceCode" id="cb6">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a>os.remove(<span class="st">&quot;archivo.txt&quot;</span>)</span></code></pre>
  </div>
  <h3 id="renombrar-o-mover">Renombrar o mover</h3>
  <div class="sourceCode" id="cb7">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb7-1"><a href="#cb7-1" aria-hidden="true" tabindex="-1"></a>os.rename(<span class="st">&quot;viejo.txt&quot;</span>, <span class="st">&quot;nuevo.txt&quot;</span>)</span></code></pre>
  </div>
  <hr />
  <h2 id="trabajar-con-rutas-os.path">3. Trabajar con rutas
    (<code>os.path</code>)</h2>
  <h3 id="unir-rutas-correctamente-independiente-del-sistema">Unir rutas
    correctamente (independiente del sistema)</h3>
  <div class="sourceCode" id="cb8">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb8-1"><a href="#cb8-1" aria-hidden="true" tabindex="-1"></a>ruta <span class="op">=</span> os.path.join(<span class="st">&quot;/home/fravelz&quot;</span>, <span class="st">&quot;Documentos&quot;</span>, <span class="st">&quot;archivo.txt&quot;</span>)</span>
<span id="cb8-2"><a href="#cb8-2" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(ruta)</span></code></pre>
  </div>
  <h3 id="obtener-el-nombre-o-carpeta-base">Obtener el nombre o carpeta
    base</h3>
  <div class="sourceCode" id="cb9">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb9-1"><a href="#cb9-1" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(os.path.basename(<span class="st">&quot;/home/fravelz/archivo.txt&quot;</span>))  <span class="co"># archivo.txt</span></span>
<span id="cb9-2"><a href="#cb9-2" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(os.path.dirname(<span class="st">&quot;/home/fravelz/archivo.txt&quot;</span>))   <span class="co"># /home/fravelz</span></span></code></pre>
  </div>
  <h3 id="comprobar-existencia">Comprobar existencia</h3>
  <div class="sourceCode" id="cb10">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb10-1"><a href="#cb10-1" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(os.path.exists(<span class="st">&quot;archivo.txt&quot;</span>))  <span class="co"># True o False</span></span>
<span id="cb10-2"><a href="#cb10-2" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(os.path.isfile(<span class="st">&quot;archivo.txt&quot;</span>))  <span class="co"># True si es archivo</span></span>
<span id="cb10-3"><a href="#cb10-3" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(os.path.isdir(<span class="st">&quot;carpeta&quot;</span>))       <span class="co"># True si es carpeta</span></span></code></pre>
  </div>
  <hr />
  <h2 id="variables-de-entorno">4. Variables de entorno</h2>
  <h3 id="ver-todas-las-variables-del-sistema">Ver todas las variables del
    sistema</h3>
  <div class="sourceCode" id="cb11">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb11-1"><a href="#cb11-1" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(os.environ)</span></code></pre>
  </div>
  <h3 id="obtener-una-variable-específica">Obtener una variable
    específica</h3>
  <div class="sourceCode" id="cb12">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb12-1"><a href="#cb12-1" aria-hidden="true" tabindex="-1"></a>usuario <span class="op">=</span> os.getenv(<span class="st">&quot;USER&quot;</span>)  <span class="co"># En Linux/Mac</span></span>
<span id="cb12-2"><a href="#cb12-2" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(usuario)</span></code></pre>
  </div>
  <h3 id="crear-o-modificar-una-variable-de-entorno">Crear o modificar una
    variable de entorno</h3>
  <div class="sourceCode" id="cb13">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb13-1"><a href="#cb13-1" aria-hidden="true" tabindex="-1"></a>os.environ[<span class="st">&quot;MI_VARIABLE&quot;</span>] <span class="op">=</span> <span class="st">&quot;1234&quot;</span></span></code></pre>
  </div>
  <hr />
  <h2 id="ejecutar-comandos-del-sistema">5. Ejecutar comandos del
    sistema</h2>
  <div class="sourceCode" id="cb14">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb14-1"><a href="#cb14-1" aria-hidden="true" tabindex="-1"></a>os.system(<span class="st">&quot;ls&quot;</span>)     <span class="co"># Linux/Mac</span></span>
<span id="cb14-2"><a href="#cb14-2" aria-hidden="true" tabindex="-1"></a>os.system(<span class="st">&quot;dir&quot;</span>)    <span class="co"># Windows</span></span></code></pre>
  </div>
  <p>Ejemplo útil:</p>
  <div class="sourceCode" id="cb15">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb15-1"><a href="#cb15-1" aria-hidden="true" tabindex="-1"></a>os.system(<span class="st">&quot;ping google.com -c 2&quot;</span>)</span></code></pre>
  </div>
  <p>👉 Si quieres más control (por ejemplo, capturar la salida del
    comando), es mejor usar el módulo <code>subprocess</code>.</p>
  <hr />
  <h2 id="permisos-y-propiedades">6. Permisos y propiedades</h2>
  <div class="sourceCode" id="cb16">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb16-1"><a href="#cb16-1" aria-hidden="true" tabindex="-1"></a>os.chmod(<span class="st">&quot;archivo.txt&quot;</span>, <span class="bn">0o777</span>)  <span class="co"># Dar todos los permisos</span></span>
<span id="cb16-2"><a href="#cb16-2" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(os.stat(<span class="st">&quot;archivo.txt&quot;</span>))   <span class="co"># Ver información (tamaño, permisos, etc.)</span></span></code></pre>
  </div>
  <hr />
  <h2 id="ejemplo-práctico">7. Ejemplo práctico</h2>
  <p>Este script organiza los archivos de una carpeta en subcarpetas por
    tipo:</p>
  <div class="sourceCode" id="cb17">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb17-1"><a href="#cb17-1" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> os</span>
<span id="cb17-2"><a href="#cb17-2" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> shutil</span>
<span id="cb17-3"><a href="#cb17-3" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb17-4"><a href="#cb17-4" aria-hidden="true" tabindex="-1"></a>ruta <span class="op">=</span> <span class="st">&quot;/home/fravelz/Descargas&quot;</span></span>
<span id="cb17-5"><a href="#cb17-5" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb17-6"><a href="#cb17-6" aria-hidden="true" tabindex="-1"></a><span class="cf">for</span> archivo <span class="kw">in</span> os.listdir(ruta):</span>
<span id="cb17-7"><a href="#cb17-7" aria-hidden="true" tabindex="-1"></a>    ruta_completa <span class="op">=</span> os.path.join(ruta, archivo)</span>
<span id="cb17-8"><a href="#cb17-8" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb17-9"><a href="#cb17-9" aria-hidden="true" tabindex="-1"></a>    <span class="cf">if</span> os.path.isfile(ruta_completa):</span>
<span id="cb17-10"><a href="#cb17-10" aria-hidden="true" tabindex="-1"></a>        extension <span class="op">=</span> archivo.split(<span class="st">&quot;.&quot;</span>)[<span class="op">-</span><span class="dv">1</span>]</span>
<span id="cb17-11"><a href="#cb17-11" aria-hidden="true" tabindex="-1"></a>        carpeta <span class="op">=</span> os.path.join(ruta, extension.upper())</span>
<span id="cb17-12"><a href="#cb17-12" aria-hidden="true" tabindex="-1"></a>        os.makedirs(carpeta, exist_ok<span class="op">=</span><span class="va">True</span>)</span>
<span id="cb17-13"><a href="#cb17-13" aria-hidden="true" tabindex="-1"></a>        shutil.move(ruta_completa, os.path.join(carpeta, archivo))</span></code></pre>
  </div>
  <p>📦 Si tienes archivos <code>.png</code>, <code>.mp3</code>,
    <code>.pdf</code>, los moverá a carpetas “PNG”, “MP3”, “PDF”, etc.
  </p>
  <hr />
  <h2 id="combinación-con-otros-módulos">8. Combinación con otros
    módulos</h2>
  <ul>
    <li><code>os + shutil</code> → mover/copiar archivos.</li>
    <li><code>os + sys</code> → detectar sistema operativo
      (<code>sys.platform</code>).</li>
    <li><code>os + subprocess</code> → ejecutar comandos con control
      total.</li>
  </ul>
  <hr />
  <h2 id="ejemplo-crear-un-script-portable">9. Ejemplo: crear un script
    portable</h2>
  <div class="sourceCode" id="cb18">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb18-1"><a href="#cb18-1" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> os</span>
<span id="cb18-2"><a href="#cb18-2" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> platform</span>
<span id="cb18-3"><a href="#cb18-3" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb18-4"><a href="#cb18-4" aria-hidden="true" tabindex="-1"></a><span class="kw">def</span> limpiar_pantalla():</span>
<span id="cb18-5"><a href="#cb18-5" aria-hidden="true" tabindex="-1"></a>    comando <span class="op">=</span> <span class="st">&quot;cls&quot;</span> <span class="cf">if</span> platform.system() <span class="op">==</span> <span class="st">&quot;Windows&quot;</span> <span class="cf">else</span> <span class="st">&quot;clear&quot;</span></span>
<span id="cb18-6"><a href="#cb18-6" aria-hidden="true" tabindex="-1"></a>    os.system(comando)</span>
<span id="cb18-7"><a href="#cb18-7" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb18-8"><a href="#cb18-8" aria-hidden="true" tabindex="-1"></a>limpiar_pantalla()</span>
<span id="cb18-9"><a href="#cb18-9" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(<span class="st">&quot;Pantalla limpia 😎&quot;</span>)</span></code></pre>
  </div>
  <hr />
  <h2 id="resumen-de-funciones-más-útiles">10. Resumen de funciones más
    útiles</h2>
  <table>
    <thead>
      <tr>
        <th>Categoría</th>
        <th>Función</th>
        <th>Descripción</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Directorios</td>
        <td><code>os.getcwd()</code></td>
        <td>Directorio actual</td>
      </tr>
      <tr>
        <td></td>
        <td><code>os.chdir()</code></td>
        <td>Cambiar directorio</td>
      </tr>
      <tr>
        <td></td>
        <td><code>os.listdir()</code></td>
        <td>Listar contenido</td>
      </tr>
      <tr>
        <td>Archivos</td>
        <td><code>os.remove()</code></td>
        <td>Eliminar archivo</td>
      </tr>
      <tr>
        <td></td>
        <td><code>os.rename()</code></td>
        <td>Renombrar/mover</td>
      </tr>
      <tr>
        <td>Carpetas</td>
        <td><code>os.mkdir()</code></td>
        <td>Crear carpeta</td>
      </tr>
      <tr>
        <td></td>
        <td><code>os.rmdir()</code></td>
        <td>Eliminar carpeta vacía</td>
      </tr>
      <tr>
        <td>Rutas</td>
        <td><code>os.path.join()</code></td>
        <td>Unir rutas</td>
      </tr>
      <tr>
        <td></td>
        <td><code>os.path.exists()</code></td>
        <td>Verificar existencia</td>
      </tr>
      <tr>
        <td>Sistema</td>
        <td><code>os.system()</code></td>
        <td>Ejecutar comando</td>
      </tr>
      <tr>
        <td>Entorno</td>
        <td><code>os.getenv()</code></td>
        <td>Leer variable</td>
      </tr>
      <tr>
        <td></td>
        <td><code>os.environ</code></td>
        <td>Acceder/editar variables</td>
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