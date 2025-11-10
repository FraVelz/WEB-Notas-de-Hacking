import Titulo from "./../../../componentes/titulo.jsx";
import Lista from "./../../../componentes/lista.jsx";
import Texto from "./../../../componentes/texto.jsx";
import Linea from "./../../../componentes/linea.jsx";
import Enlace from "./../../../componentes/enlace.jsx";

import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../../../componentes/estructura.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
          <li><Enlace href="#1-concepto-básico-de-permisos">1. Concepto básico de
            permisos</Enlace >
            <Lista>
              <li><Enlace href="#tipos-de-permisos">Tipos de permisos</Enlace ></li>
              <li><Enlace href="#categorías">Categorías</Enlace ></li>
            </Lista>
          </li>
          <li><Enlace href="#2-ver-permisos">2. Ver permisos</Enlace ></li>
          <li><Enlace href="#3-cambiar-permisos-chmod">3. Cambiar permisos
            (<code>chmod</code>)</Enlace >
            <Lista>
              <li><Enlace href="#a-modo-simbólico">a) Modo simbólico</Enlace ></li>
              <li><Enlace href="#b-modo-numérico">b) Modo numérico</Enlace ></li>
            </Lista>
          </li>
          <li><Enlace href="#4-cambiar-dueño-o-grupo-chown-chgrp">4. Cambiar dueño o
            grupo (<code>chown</code>, <code>chgrp</code>)</Enlace ></li>
          <li><Enlace href="#5-permisos-especiales">5. Permisos especiales</Enlace >
            <Lista>
              <li><Enlace href="#sticky-bit">Sticky Bit</Enlace ></li>
              <li><Enlace href="#suid-y-sgid">SUID y SGID</Enlace >
                <Lista>
                  <li><Enlace href="#suid">SUID</Enlace ></li>
                  <li><Enlace href="#sgid">SGID</Enlace ></li>
                </Lista>
              </li>
            </Lista>
          </li>
          <li><Enlace href="#6-atributos-de-archivos-chattr-lsattr">6. Atributos de
            archivos (<code>chattr</code>, <code>lsattr</code>)</Enlace >
            <Lista>
              <li><Enlace href="#ver-atributos">Ver atributos</Enlace ></li>
              <li><Enlace href="#cambiar-atributos-chattr">Cambiar atributos
                (<code>chattr</code>)</Enlace ></li>
              <li><Enlace href="#atributos-comunes">Atributos comunes</Enlace ></li>
              <li><Enlace href="#ejemplo-práctico-en-script-bash">Ejemplo práctico en
                script Bash</Enlace ></li>
            </Lista>
          </li>
          <li><Enlace href="#7-resumen-visual">7. Resumen visual</Enlace ></li>
    </Lista>
  );
}

function nameabcd({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" id="permisos-en-linux">Permisos en Linux</Titulo>
        <Titulo title="h2" id="temario">Temario</Titulo>

        <Linea />

        <TemarioCompleto temario={Temario} />

        <Titulo title="h2" id="concepto-básico-de-permisos">1. Concepto básico de permisos</Titulo>
        <Texto>Cada archivo o carpeta tiene <strong>3 tipos de permisos</strong> y
          <strong>3 categorías de usuarios</strong>:
        </Texto>
        <Titulo title="h3" id="tipos-de-permisos">Tipos de permisos</Titulo>
        <table>
          <thead>
            <tr>
              <th>Símbolo</th>
              <th>Significado</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>r</code></td>
              <td>Lectura (read)</td>
              <td>4</td>
            </tr>
            <tr>
              <td><code>w</code></td>
              <td>Escritura (write)</td>
              <td>2</td>
            </tr>
            <tr>
              <td><code>x</code></td>
              <td>Ejecución (execute)</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
        <Titulo title="h3" id="categorías">Categorías</Titulo>
        <table>
          <thead>
            <tr>
              <th>Categoría</th>
              <th>Se aplica a</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>u</code></td>
              <td>Usuario propietario</td>
            </tr>
            <tr>
              <td><code>g</code></td>
              <td>Grupo propietario</td>
            </tr>
            <tr>
              <td><code>o</code></td>
              <td>Otros usuarios</td>
            </tr>
          </tbody>
        </table>
        <Linea />
        <Titulo title="h2" id="ver-permisos">2. Ver permisos</Titulo>
        <div className="sourceCode" id="cb1">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb1-1"><Enlace href="#cb1-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">ls</span> <span className="at">-l</span></span></code></pre>
        </div>
        <Texto>Ejemplo:</Texto>
        <div className="sourceCode" id="cb2">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb2-1"><Enlace href="#cb2-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">-rwxr-xr--</span>  1 francisco users 1234 oct 21  script.sh</span></code></pre>
        </div>
        <Texto>Significado:</Texto>
        <Lista>
          <li><code>rwx</code> → usuario</li>
          <li><code>r-x</code> → grupo</li>
          <li><code>r--</code> → otros</li>
          <li><code>francisco</code> → dueño</li>
          <li><code>users</code> → grupo</li>
        </Lista>
        <Linea />
        <Titulo title="h2" id="cambiar-permisos-chmod">3. Cambiar permisos
          (<code>chmod</code>)</Titulo>
        <Titulo title="h3" id="a-modo-simbólico">a) Modo simbólico</Titulo>
        <div className="sourceCode" id="cb3">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb3-1"><Enlace href="#cb3-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">chmod</span> u+x script.sh     <span className="co"># añadir ejecución al usuario</span></span>
              <span id="cb3-2"><Enlace href="#cb3-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">chmod</span> g-w script.sh     <span className="co"># quitar escritura al grupo</span></span>
              <span id="cb3-3"><Enlace href="#cb3-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">chmod</span> o=r file.txt      <span className="co"># solo lectura para otros</span></span>
              <span id="cb3-4"><Enlace href="#cb3-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">chmod</span> a+r file.txt      <span className="co"># todos pueden leer</span></span></code></pre>
        </div>
        <Titulo title="h3" id="b-modo-numérico">b) Modo numérico</Titulo>
        <div className="sourceCode" id="cb4">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb4-1"><Enlace href="#cb4-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">chmod</span> 755 script.sh</span></code></pre>
        </div>
        <table>
          <thead>
            <tr>
              <th>Valor</th>
              <th>Permiso</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>7</td>
              <td>rwx</td>
              <td>lectura, escritura, ejecución</td>
            </tr>
            <tr>
              <td>6</td>
              <td>rw-</td>
              <td>lectura, escritura</td>
            </tr>
            <tr>
              <td>5</td>
              <td>r-x</td>
              <td>lectura, ejecución</td>
            </tr>
            <tr>
              <td>4</td>
              <td>r–</td>
              <td>solo lectura</td>
            </tr>
            <tr>
              <td>0</td>
              <td>—</td>
              <td>sin permisos</td>
            </tr>
          </tbody>
        </table>
        <Linea />
        <Titulo title="h2" id="cambiar-dueño-o-grupo-chown-chgrp">4. Cambiar dueño o grupo
          (<code>chown</code>, <code>chgrp</code>)</Titulo>
        <div className="sourceCode" id="cb5">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb5-1"><Enlace href="#cb5-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">chown</span> usuario archivo</span>
              <span id="cb5-2"><Enlace href="#cb5-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">chgrp</span> grupo archivo</span>
              <span id="cb5-3"><Enlace href="#cb5-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">chown</span> usuario:grupo archivo</span></code></pre>
        </div>
        <Texto>Ejemplo:</Texto>
        <div className="sourceCode" id="cb6">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb6-1"><Enlace href="#cb6-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">sudo</span> chown francisco:users script.sh</span></code></pre>
        </div>
        <Linea />
        <Titulo title="h2" id="permisos-especiales">5. Permisos especiales</Titulo>
        <Texto>Existen tres permisos especiales en Linux:</Texto>
        <table>
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
        <Titulo title="h3" id="sticky-bit">Sticky Bit</Titulo>
        <Texto>El <strong>sticky bit</strong> se usa en directorios <strong>para
          evitar que otros borren archivos ajenos</strong>.</Texto>
        <div className="sourceCode" id="cb7">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb7-1"><Enlace href="#cb7-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">chmod</span> +t /tmp/publico</span>
              <span id="cb7-2"><Enlace href="#cb7-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># o modo numérico</span></span>
              <span id="cb7-3"><Enlace href="#cb7-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">chmod</span> 1777 /tmp/publico</span></code></pre>
        </div>
        <Texto>Ver resultado:</Texto>
        <div className="sourceCode" id="cb8">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb8-1"><Enlace href="#cb8-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">ls</span> <span className="at">-ld</span> /tmp/publico</span>
              <span id="cb8-2"><Enlace href="#cb8-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">drwxrwxrwt</span>  9 root root 4096 oct 21 09:00 /tmp/publico</span></code></pre>
        </div>
        <Texto><code>drwxrwxrw**t**</code> → el “t” final indica el sticky bit
          activo.</Texto>
        <Texto>Ejemplo típico: El directorio <code>/tmp</code> <strong>siempre lo
          tiene activado</strong>.</Texto>
        <Titulo title="h3" id="suid-y-sgid">SUID y SGID</Titulo>
        <h4 id="suid">SUID</h4>
        <Texto>Ejemplo:</Texto>
        <div className="sourceCode" id="cb9">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb9-1"><Enlace href="#cb9-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">ls</span> <span className="at">-l</span> /usr/bin/passwd</span>
              <span id="cb9-2"><Enlace href="#cb9-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">-rwsr-xr-x</span> 1 root root 54256 oct 21 /usr/bin/passwd</span></code></pre>
        </div>
        <Lista>
          <li>La <code>s</code> en lugar de la <code>x</code> del usuario indica
            <strong>SUID activo</strong>.
          </li>
          <li>Permite ejecutar con permisos del <strong>dueño del archivo</strong>
            (en este caso, root).</li>
        </Lista>
        <Texto>Activar o desactivar manualmente:</Texto>
        <div className="sourceCode" id="cb10">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb10-1"><Enlace href="#cb10-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">chmod</span> u+s archivo   <span className="co"># activar</span></span>
              <span id="cb10-2"><Enlace href="#cb10-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">chmod</span> u-s archivo   <span className="co"># desactivar</span></span></code></pre>
        </div>
        <h4 id="sgid">SGID</h4>
        <Texto>En ejecutables:</Texto>
        <div className="sourceCode" id="cb11">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb11-1"><Enlace href="#cb11-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">chmod</span> g+s archivo</span></code></pre>
        </div>
        <Texto>En directorios:</Texto>
        <div className="sourceCode" id="cb12">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb12-1"><Enlace href="#cb12-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">chmod</span> g+s carpeta/</span></code></pre>
        </div>
        <Texto>Efecto:</Texto>
        <blockquote>
          <Texto>Los nuevos archivos heredan el grupo del directorio, útil para
            carpetas compartidas.</Texto>
        </blockquote>
        <Linea />
        <Titulo title="h2" id="atributos-de-archivos-chattr-lsattr">6. Atributos de archivos
          (<code>chattr</code>, <code>lsattr</code>)</Titulo>
        <Texto>Los <strong>atributos</strong> controlan <em>cómo</em> se comporta un
          archivo, más allá de los permisos.</Texto>
        <Titulo title="h3" id="ver-atributos">Ver atributos</Titulo>
        <div className="sourceCode" id="cb13">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb13-1"><Enlace href="#cb13-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">lsattr</span> archivo</span></code></pre>
        </div>
        <Texto>Ejemplo:</Texto>
        <div className="sourceCode" id="cb14">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb14-1"><Enlace href="#cb14-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">----i--------e-----</span>  documento.txt</span></code></pre>
        </div>
        <Titulo title="h3" id="cambiar-atributos-chattr">Cambiar atributos
          (<code>chattr</code>)</Titulo>
        <Texto>Hacer un archivo <strong>inmutable</strong>:</Texto>
        <div className="sourceCode" id="cb15">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb15-1"><Enlace href="#cb15-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">sudo</span> chattr +i archivo.txt</span></code></pre>
        </div>
        <Texto>Solo <strong>root</strong> puede revertirlo:</Texto>
        <div className="sourceCode" id="cb16">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb16-1"><Enlace href="#cb16-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">sudo</span> chattr <span className="at">-i</span> archivo.txt</span></code></pre>
        </div>
        <Texto>Modo <strong>append-only</strong> (solo añadir contenido):</Texto>
        <div className="sourceCode" id="cb17">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb17-1"><Enlace href="#cb17-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">sudo</span> chattr +a log.txt</span></code></pre>
        </div>
        <Titulo title="h3" id="atributos-comunes">Atributos comunes</Titulo>
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
        <Titulo title="h3" id="ejemplo-práctico-en-script-bash">Ejemplo práctico en script
          Bash</Titulo>
        <div className="sourceCode" id="cb18">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb18-1"><Enlace href="#cb18-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="co">#!/bin/bash</span></span>
              <span id="cb18-2"><Enlace href="#cb18-2" aria-hidden="true" tabindex="-1"></Enlace ><span className="co"># Proteger archivos del sistema</span></span>
              <span id="cb18-3"><Enlace href="#cb18-3" aria-hidden="true" tabindex="-1"></Enlace ></span>
              <span id="cb18-4"><Enlace href="#cb18-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="va">ARCHIVOS</span><span className="op">=</span><span className="va">(</span><span className="st">&quot;/etc/passwd&quot;</span> <span className="st">&quot;/etc/shadow&quot;</span> <span className="st">&quot;/etc/fstab&quot;</span><span className="va">)</span></span>
              <span id="cb18-5"><Enlace href="#cb18-5" aria-hidden="true" tabindex="-1"></Enlace ></span>
              <span id="cb18-6"><Enlace href="#cb18-6" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">for</span> f <span className="kw">in</span> <span className="st">&quot;</span><span className="va">$(ARCHIVOS</span><span className="op">[@]</span><span className="va">)</span><span className="st">&quot;</span><span className="kw">;</span> <span className="cf">do</span></span>
              <span id="cb18-7"><Enlace href="#cb18-7" aria-hidden="true" tabindex="-1"></Enlace >  <span className="cf">if</span> <span className="bu">[</span> <span className="ot">-f</span> <span className="st">&quot;</span><span className="va">$f</span><span className="st">&quot;</span> <span className="bu">]</span><span className="kw">;</span> <span className="cf">then</span></span>
              <span id="cb18-8"><Enlace href="#cb18-8" aria-hidden="true" tabindex="-1"></Enlace >    <span className="fu">sudo</span> chattr +i <span className="st">&quot;</span><span className="va">$f</span><span className="st">&quot;</span></span>
              <span id="cb18-9"><Enlace href="#cb18-9" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">echo</span> <span className="st">&quot;Protegido: </span><span className="va">$f</span><span className="st">&quot;</span></span>
              <span id="cb18-10"><Enlace href="#cb18-10" aria-hidden="true" tabindex="-1"></Enlace >  <span className="cf">fi</span></span>
              <span id="cb18-11"><Enlace href="#cb18-11" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">done</span></span>
              <span id="cb18-12"><Enlace href="#cb18-12" aria-hidden="true" tabindex="-1"></Enlace ></span>
              <span id="cb18-13"><Enlace href="#cb18-13" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">lsattr</span> <span className="st">&quot;</span><span className="va">$(ARCHIVOS</span><span className="op">[@]</span><span className="va">)</span><span className="st">&quot;</span></span></code></pre>
        </div>
        <Linea />
        <Titulo title="h2" id="resumen-visual">7. Resumen visual</Titulo>
        <table>
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
      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}
export default nameabcd;
