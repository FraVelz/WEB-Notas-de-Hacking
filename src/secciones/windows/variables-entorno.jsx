<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">

<head>
  <meta charset="utf-8" />
  <meta name="generator" content="pandoc" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <title>variables-entorno</title>

</head>

<body>
  <h1 id="variables-de-entorno">Variables de Entorno</h1>
  <hr />
  <h2 id="temario">Temario</h2>
  <ul>
    <li><a href="#variables-de-entorno">Variables de Entorno</a>
      <ul>
        <li><a href="#temario">Temario</a>
          <ul>
            <li><a href="#tipos-de-variables-de-entorno">Tipos de variables de
                entorno</a></li>
            <li><a href="#cómo-ver-las-variables-de-entorno">Cómo ver las variables
                de entorno</a></li>
            <li><a href="#editar-o-crear-variables">Editar o crear
                variables</a></li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
  <p><a href="./../readme.md#3-windows">Regresar a la guía
      principal</a></p>
  <hr />
  <h3 id="tipos-de-variables-de-entorno">Tipos de variables de
    entorno</h3>
  <ol type="1">
    <li>
      <p><strong>Variables del sistema</strong>: Aplican a todos los
        usuarios del equipo. Por ejemplo:</p>
      <ul>
        <li><code>PATH</code>: lista de rutas donde Windows busca
          ejecutables.</li>
        <li><code>COMPUTERNAME</code>: nombre del equipo.</li>
        <li><code>SYSTEMROOT</code>: ruta de la carpeta del sistema,
          generalmente <code>C:\Windows</code>.</li>
        <li><code>TEMP</code> o <code>TMP</code>: carpeta temporal.</li>
      </ul>
    </li>
    <li>
      <p><strong>Variables de usuario</strong>: Solo aplican al usuario
        actual. Por ejemplo:</p>
      <ul>
        <li><code>USERNAME</code>: nombre del usuario actual.</li>
        <li><code>USERPROFILE</code>: ruta del perfil del usuario
          (<code>C:\Users\TuUsuario</code>).</li>
        <li><code>HOMEPATH</code>: ruta relativa de la carpeta del usuario
          (<code>\Users\TuUsuario</code>).</li>
      </ul>
    </li>
  </ol>
  <hr />
  <h3 id="cómo-ver-las-variables-de-entorno">Cómo ver las variables de
    entorno</h3>
  <ol type="1">
    <li>
      <p><strong>Usando CMD</strong>:</p>
      <ul>
        <li>
          <p><code>set</code> → muestra todas las variables de usuario y del
            sistema.</p>
        </li>
        <li>
          <p><code>echo %VARIABLE%</code> → muestra el valor de una variable
            específica. Ejemplo:</p>
          <div class="sourceCode" id="cb1">
            <pre
              class="sourceCode cmd"><code class="sourceCode dosbat"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="pp">%</span><span class="va">PATH</span><span class="pp">%</span></span>
<span id="cb1-2"><a href="#cb1-2" aria-hidden="true" tabindex="-1"></a><span class="bu">echo</span> <span class="pp">%</span><span class="va">USERPROFILE</span><span class="pp">%</span></span></code></pre>
          </div>
        </li>
      </ul>
    </li>
    <li>
      <p><strong>Usando PowerShell</strong>:</p>
      <ul>
        <li>
          <p><code>Get-ChildItem Env:</code> → lista todas las
            variables.</p>
        </li>
        <li>
          <p><code>$Env:VARIABLE</code> → muestra el valor de una variable
            específica. Ejemplo:</p>
          <div class="sourceCode" id="cb2">
            <pre
              class="sourceCode powershell"><code class="sourceCode powershell"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="va">$Env</span><span class="op">:</span><span class="va">PATH</span></span>
<span id="cb2-2"><a href="#cb2-2" aria-hidden="true" tabindex="-1"></a><span class="va">$Env</span><span class="op">:</span><span class="va">USERNAME</span></span></code></pre>
          </div>
        </li>
      </ul>
    </li>
    <li>
      <p><strong>Usando la interfaz gráfica</strong>:</p>
      <ul>
        <li>Presiona <code>Win + R</code> → escribe <code>sysdm.cpl</code> →
          Enter.</li>
        <li>Ve a la pestaña <strong>Opciones avanzadas</strong> →
          <strong>Variables de entorno</strong>.
        </li>
        <li>Aquí puedes <strong>ver, crear, editar o eliminar</strong> variables
          de usuario o del sistema.</li>
      </ul>
    </li>
  </ol>
  <hr />
  <h3 id="editar-o-crear-variables">Editar o crear variables</h3>
  <ul>
    <li>
      <p>Para agregar una carpeta al <code>PATH</code>:</p>
      <ol type="1">
        <li>Abrir <strong>Variables de entorno</strong>.</li>
        <li>Seleccionar <code>PATH</code> → Editar → Nuevo → pegar la ruta.</li>
        <li>Guardar y reiniciar CMD/PowerShell para que tome efecto.</li>
      </ol>
    </li>
  </ul>
  <hr />
  <p><a href="./../readme.md#3-windows">Regresar a la guía
      principal</a></p>
  <blockquote>
    <p><strong>Autor:</strong> Fravelz</p>
  </blockquote>
</body>

</html>