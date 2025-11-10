import Titulo from "./../../../componentes/titulo.jsx";
import Lista from "./../../../componentes/lista.jsx";
import Texto from "./../../../componentes/texto.jsx";
import Linea from "./../../../componentes/linea.jsx";
import Enlace from "./../../../componentes/enlace.jsx";

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="os-en-python">Os en Python</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><Enlace href="#os-en-python">os en Python</Enlace >
          <Lista>
            <li><Enlace href="#temario">Temario</Enlace ></li>
            <li><Enlace href="#qué-es-os-en-python">¿Qué es os en Python?</Enlace ></li>
            <li><Enlace href="#1-manejo-de-directorios">1. Manejo de directorios</Enlace >
              <Lista>
                <li><Enlace href="#ver-el-directorio-actual">Ver el directorio
                  actual</Enlace ></li>
                <li><Enlace href="#cambiar-de-directorio">Cambiar de directorio</Enlace ></li>
                <li><Enlace href="#listar-archivos-y-carpetas">Listar archivos y
                  carpetas</Enlace ></li>
                <li><Enlace href="#crear-y-eliminar-carpetas">Crear y eliminar
                  carpetas</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#2-manejo-de-archivos">2. Manejo de archivos</Enlace >
              <Lista>
                <li><Enlace href="#eliminar-archivos">Eliminar archivos</Enlace ></li>
                <li><Enlace href="#renombrar-o-mover">Renombrar o mover</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#3-trabajar-con-rutas-ospath">3. Trabajar con rutas
              (<code>os.path</code>)</Enlace >
              <Lista>
                <li><Enlace href="#unir-rutas-correctamente-independiente-del-sistema">Unir
                  rutas correctamente (independiente del sistema)</Enlace ></li>
                <li><Enlace href="#obtener-el-nombre-o-carpeta-base">Obtener el nombre o
                  carpeta base</Enlace ></li>
                <li><Enlace href="#comprobar-existencia">Comprobar existencia</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#4-variables-de-entorno">4. Variables de entorno</Enlace >
              <Lista>
                <li><Enlace href="#ver-todas-las-variables-del-sistema">Ver todas las
                  variables del sistema</Enlace ></li>
                <li><Enlace href="#obtener-una-variable-específica">Obtener una variable
                  específica</Enlace ></li>
                <li><Enlace href="#crear-o-modificar-una-variable-de-entorno">Crear o
                  modificar una variable de entorno</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#5-ejecutar-comandos-del-sistema">5. Ejecutar comandos del
              sistema</Enlace ></li>
            <li><Enlace href="#6-permisos-y-propiedades">6. Permisos y
              propiedades</Enlace ></li>
            <li><Enlace href="#7-ejemplo-práctico">7. Ejemplo práctico</Enlace ></li>
            <li><Enlace href="#8-combinación-con-otros-módulos">8. Combinación con otros
              módulos</Enlace ></li>
            <li><Enlace href="#9-ejemplo-crear-un-script-portable">9. Ejemplo: crear un
              script portable</Enlace ></li>
            <li><Enlace href="#10-resumen-de-funciones-más-útiles">10. Resumen de
              funciones más útiles</Enlace ></li>
          </Lista>
        </li>
      </Lista>
      <Texto><Enlace href="./../../readme.md#5-python">Regresar a la Guía
        Principal</Enlace ></Texto>
      <Linea />
      <Titulo title="h2" id="qué-es-os-en-python">¿Qué es os en Python?</Titulo>
      <Texto>El módulo <strong><code>os</code></strong> (Operating System) permite
        <strong>interactuar directamente con el sistema operativo</strong>:
        manejar archivos, carpetas, variables de entorno, procesos, permisos,
        rutas, y más.
      </Texto>
      <Texto>Se importa así:</Texto>
      <div className="sourceCode" id="cb1">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb1-1"><Enlace href="#cb1-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> os</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="manejo-de-directorios">1. Manejo de directorios</Titulo>
      <Titulo title="h3" id="ver-el-directorio-actual">Ver el directorio actual</Titulo>
      <div className="sourceCode" id="cb2">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb2-1"><Enlace href="#cb2-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(os.getcwd())  <span className="co"># get current working directory</span></span></code></pre>
      </div>
      <Titulo title="h3" id="cambiar-de-directorio">Cambiar de directorio</Titulo>
      <div className="sourceCode" id="cb3">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb3-1"><Enlace href="#cb3-1" aria-hidden="true" tabindex="-1"></Enlace >os.chdir(<span className="st">&quot;/home/fravelz/Documentos&quot;</span>)</span></code></pre>
      </div>
      <Titulo title="h3" id="listar-archivos-y-carpetas">Listar archivos y carpetas</Titulo>
      <div className="sourceCode" id="cb4">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb4-1"><Enlace href="#cb4-1" aria-hidden="true" tabindex="-1"></Enlace >archivos <span className="op">=</span> os.listdir(<span className="st">&quot;.&quot;</span>)</span>
            <span id="cb4-2"><Enlace href="#cb4-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(archivos)</span></code></pre>
      </div>
      <Titulo title="h3" id="crear-y-eliminar-carpetas">Crear y eliminar carpetas</Titulo>
      <div className="sourceCode" id="cb5">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb5-1"><Enlace href="#cb5-1" aria-hidden="true" tabindex="-1"></Enlace >os.mkdir(<span className="st">&quot;nueva_carpeta&quot;</span>)        <span className="co"># Crear una carpeta</span></span>
            <span id="cb5-2"><Enlace href="#cb5-2" aria-hidden="true" tabindex="-1"></Enlace >os.makedirs(<span className="st">&quot;a/b/c&quot;</span>, exist_ok<span className="op">=</span><span className="va">True</span>)  <span className="co"># Crear carpetas anidadas</span></span>
            <span id="cb5-3"><Enlace href="#cb5-3" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb5-4"><Enlace href="#cb5-4" aria-hidden="true" tabindex="-1"></Enlace >os.rmdir(<span className="st">&quot;nueva_carpeta&quot;</span>)        <span className="co"># Eliminar carpeta vacía</span></span>
            <span id="cb5-5"><Enlace href="#cb5-5" aria-hidden="true" tabindex="-1"></Enlace >os.removedirs(<span className="st">&quot;a/b/c&quot;</span>)           <span className="co"># Eliminar jerarquía vacía</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="manejo-de-archivos">2. Manejo de archivos</Titulo>
      <Titulo title="h3" id="eliminar-archivos">Eliminar archivos</Titulo>
      <div className="sourceCode" id="cb6">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb6-1"><Enlace href="#cb6-1" aria-hidden="true" tabindex="-1"></Enlace >os.remove(<span className="st">&quot;archivo.txt&quot;</span>)</span></code></pre>
      </div>
      <Titulo title="h3" id="renombrar-o-mover">Renombrar o mover</Titulo>
      <div className="sourceCode" id="cb7">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb7-1"><Enlace href="#cb7-1" aria-hidden="true" tabindex="-1"></Enlace >os.rename(<span className="st">&quot;viejo.txt&quot;</span>, <span className="st">&quot;nuevo.txt&quot;</span>)</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="trabajar-con-rutas-os.path">3. Trabajar con rutas
        (<code>os.path</code>)</Titulo>
      <Titulo title="h3" id="unir-rutas-correctamente-independiente-del-sistema">Unir rutas
        correctamente (independiente del sistema)</Titulo>
      <div className="sourceCode" id="cb8">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb8-1"><Enlace href="#cb8-1" aria-hidden="true" tabindex="-1"></Enlace >ruta <span className="op">=</span> os.path.join(<span className="st">&quot;/home/fravelz&quot;</span>, <span className="st">&quot;Documentos&quot;</span>, <span className="st">&quot;archivo.txt&quot;</span>)</span>
            <span id="cb8-2"><Enlace href="#cb8-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(ruta)</span></code></pre>
      </div>
      <Titulo title="h3" id="obtener-el-nombre-o-carpeta-base">Obtener el nombre o carpeta
        base</Titulo>
      <div className="sourceCode" id="cb9">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb9-1"><Enlace href="#cb9-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(os.path.basename(<span className="st">&quot;/home/fravelz/archivo.txt&quot;</span>))  <span className="co"># archivo.txt</span></span>
            <span id="cb9-2"><Enlace href="#cb9-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(os.path.dirname(<span className="st">&quot;/home/fravelz/archivo.txt&quot;</span>))   <span className="co"># /home/fravelz</span></span></code></pre>
      </div>
      <Titulo title="h3" id="comprobar-existencia">Comprobar existencia</Titulo>
      <div className="sourceCode" id="cb10">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb10-1"><Enlace href="#cb10-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(os.path.exists(<span className="st">&quot;archivo.txt&quot;</span>))  <span className="co"># True o False</span></span>
            <span id="cb10-2"><Enlace href="#cb10-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(os.path.isfile(<span className="st">&quot;archivo.txt&quot;</span>))  <span className="co"># True si es archivo</span></span>
            <span id="cb10-3"><Enlace href="#cb10-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(os.path.isdir(<span className="st">&quot;carpeta&quot;</span>))       <span className="co"># True si es carpeta</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="variables-de-entorno">4. Variables de entorno</Titulo>
      <Titulo title="h3" id="ver-todas-las-variables-del-sistema">Ver todas las variables del
        sistema</Titulo>
      <div className="sourceCode" id="cb11">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb11-1"><Enlace href="#cb11-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(os.environ)</span></code></pre>
      </div>
      <Titulo title="h3" id="obtener-una-variable-específica">Obtener una variable
        específica</Titulo>
      <div className="sourceCode" id="cb12">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb12-1"><Enlace href="#cb12-1" aria-hidden="true" tabindex="-1"></Enlace >usuario <span className="op">=</span> os.getenv(<span className="st">&quot;USER&quot;</span>)  <span className="co"># En Linux/Mac</span></span>
            <span id="cb12-2"><Enlace href="#cb12-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(usuario)</span></code></pre>
      </div>
      <Titulo title="h3" id="crear-o-modificar-una-variable-de-entorno">Crear o modificar una
        variable de entorno</Titulo>
      <div className="sourceCode" id="cb13">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb13-1"><Enlace href="#cb13-1" aria-hidden="true" tabindex="-1"></Enlace >os.environ[<span className="st">&quot;MI_VARIABLE&quot;</span>] <span className="op">=</span> <span className="st">&quot;1234&quot;</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="ejecutar-comandos-del-sistema">5. Ejecutar comandos del
        sistema</Titulo>
      <div className="sourceCode" id="cb14">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb14-1"><Enlace href="#cb14-1" aria-hidden="true" tabindex="-1"></Enlace >os.system(<span className="st">&quot;ls&quot;</span>)     <span className="co"># Linux/Mac</span></span>
            <span id="cb14-2"><Enlace href="#cb14-2" aria-hidden="true" tabindex="-1"></Enlace >os.system(<span className="st">&quot;dir&quot;</span>)    <span className="co"># Windows</span></span></code></pre>
      </div>
      <Texto>Ejemplo útil:</Texto>
      <div className="sourceCode" id="cb15">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb15-1"><Enlace href="#cb15-1" aria-hidden="true" tabindex="-1"></Enlace >os.system(<span className="st">&quot;ping google.com -c 2&quot;</span>)</span></code></pre>
      </div>
      <Texto>👉 Si quieres más control (por ejemplo, capturar la salida del
        comando), es mejor usar el módulo <code>subprocess</code>.</Texto>
      <Linea />
      <Titulo title="h2" id="permisos-y-propiedades">6. Permisos y propiedades</Titulo>
      <div className="sourceCode" id="cb16">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb16-1"><Enlace href="#cb16-1" aria-hidden="true" tabindex="-1"></Enlace >os.chmod(<span className="st">&quot;archivo.txt&quot;</span>, <span className="bn">0o777</span>)  <span className="co"># Dar todos los permisos</span></span>
            <span id="cb16-2"><Enlace href="#cb16-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(os.stat(<span className="st">&quot;archivo.txt&quot;</span>))   <span className="co"># Ver información (tamaño, permisos, etc.)</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="ejemplo-práctico">7. Ejemplo práctico</Titulo>
      <Texto>Este script organiza los archivos de una carpeta en subcarpetas por
        tipo:</Texto>
      <div className="sourceCode" id="cb17">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb17-1"><Enlace href="#cb17-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> os</span>
            <span id="cb17-2"><Enlace href="#cb17-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> shutil</span>
            <span id="cb17-3"><Enlace href="#cb17-3" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb17-4"><Enlace href="#cb17-4" aria-hidden="true" tabindex="-1"></Enlace >ruta <span className="op">=</span> <span className="st">&quot;/home/fravelz/Descargas&quot;</span></span>
            <span id="cb17-5"><Enlace href="#cb17-5" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb17-6"><Enlace href="#cb17-6" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">for</span> archivo <span className="kw">in</span> os.listdir(ruta):</span>
            <span id="cb17-7"><Enlace href="#cb17-7" aria-hidden="true" tabindex="-1"></Enlace >    ruta_completa <span className="op">=</span> os.path.join(ruta, archivo)</span>
            <span id="cb17-8"><Enlace href="#cb17-8" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb17-9"><Enlace href="#cb17-9" aria-hidden="true" tabindex="-1"></Enlace >    <span className="cf">if</span> os.path.isfile(ruta_completa):</span>
            <span id="cb17-10"><Enlace href="#cb17-10" aria-hidden="true" tabindex="-1"></Enlace >        extension <span className="op">=</span> archivo.split(<span className="st">&quot;.&quot;</span>)[<span className="op">-</span><span className="dv">1</span>]</span>
            <span id="cb17-11"><Enlace href="#cb17-11" aria-hidden="true" tabindex="-1"></Enlace >        carpeta <span className="op">=</span> os.path.join(ruta, extension.upper())</span>
            <span id="cb17-12"><Enlace href="#cb17-12" aria-hidden="true" tabindex="-1"></Enlace >        os.makedirs(carpeta, exist_ok<span className="op">=</span><span className="va">True</span>)</span>
            <span id="cb17-13"><Enlace href="#cb17-13" aria-hidden="true" tabindex="-1"></Enlace >        shutil.move(ruta_completa, os.path.join(carpeta, archivo))</span></code></pre>
      </div>
      <Texto>📦 Si tienes archivos <code>.png</code>, <code>.mp3</code>,
        <code>.pdf</code>, los moverá a carpetas “PNG”, “MP3”, “PDF”, etc.
      </Texto>
      <Linea />
      <Titulo title="h2" id="combinación-con-otros-módulos">8. Combinación con otros
        módulos</Titulo>
      <Lista>
        <li><code>os + shutil</code> → mover/copiar archivos.</li>
        <li><code>os + sys</code> → detectar sistema operativo
          (<code>sys.platform</code>).</li>
        <li><code>os + subprocess</code> → ejecutar comandos con control
          total.</li>
      </Lista>
      <Linea />
      <Titulo title="h2" id="ejemplo-crear-un-script-portable">9. Ejemplo: crear un script
        portable</Titulo>
      <div className="sourceCode" id="cb18">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb18-1"><Enlace href="#cb18-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> os</span>
            <span id="cb18-2"><Enlace href="#cb18-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> platform</span>
            <span id="cb18-3"><Enlace href="#cb18-3" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb18-4"><Enlace href="#cb18-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">def</span> limpiar_pantalla():</span>
            <span id="cb18-5"><Enlace href="#cb18-5" aria-hidden="true" tabindex="-1"></Enlace >    comando <span className="op">=</span> <span className="st">&quot;cls&quot;</span> <span className="cf">if</span> platform.system() <span className="op">==</span> <span className="st">&quot;Windows&quot;</span> <span className="cf">else</span> <span className="st">&quot;clear&quot;</span></span>
            <span id="cb18-6"><Enlace href="#cb18-6" aria-hidden="true" tabindex="-1"></Enlace >    os.system(comando)</span>
            <span id="cb18-7"><Enlace href="#cb18-7" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb18-8"><Enlace href="#cb18-8" aria-hidden="true" tabindex="-1"></Enlace >limpiar_pantalla()</span>
            <span id="cb18-9"><Enlace href="#cb18-9" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(<span className="st">&quot;Pantalla limpia 😎&quot;</span>)</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="resumen-de-funciones-más-útiles">10. Resumen de funciones más
        útiles</Titulo>
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
      <Linea />
      <Texto><Enlace href="./../../readme.md#5-python">Regresar a la Guía
        Principal</Enlace ></Texto>
      <blockquote>
        <Texto><strong>Autor:</strong> Fravelz</Texto>
      </blockquote>
    </>
  );
}
export default nameabcd;
