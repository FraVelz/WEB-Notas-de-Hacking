<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">

<head>
  <meta charset="utf-8" />
  <meta name="generator" content="pandoc" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <title>gestion-permisos</title>

</head>

<body>
  <h1 id="comandos-y-cmdlets-de-gestión-de-permisos">Comandos y cmdlets de
    gestión de permisos</h1>
  <hr />
  <h2 id="temario">Temario</h2>
  <ul>
    <li><a href="#comandos-y-cmdlets-de-gestión-de-permisos">Comandos y
        cmdlets de gestión de permisos</a>
      <ul>
        <li><a href="#temario">Temario</a></li>
        <li><a href="#cmd--comandos-de-gestión-de-permisos">CMD — Comandos de
            Gestión de Permisos</a></li>
        <li><a href="#powershell--cmdlets-de-gestión-de-permisos">PowerShell —
            Cmdlets de Gestión de Permisos</a></li>
        <li><a href="#ejemplos-prácticos">Ejemplos prácticos</a>
          <ul>
            <li><a href="#cmd">CMD</a></li>
            <li><a href="#powershell">PowerShell</a></li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
  <p><a href="./../readme.md#3-windows">Regresar a la guía
      principal</a></p>
  <hr />
  <h2 id="cmd-comandos-de-gestión-de-permisos">CMD — Comandos de Gestión
    de Permisos</h2>
  <table>
    <colgroup>
      <col style="width: 32%" />
      <col style="width: 67%" />
    </colgroup>
    <thead>
      <tr>
        <th>Comando</th>
        <th>Descripción</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>icacls &lt;ruta&gt;</code></td>
        <td>Muestra, modifica, guarda o restaura las listas de control de acceso
          (ACL) de archivos y carpetas.</td>
      </tr>
      <tr>
        <td><code>icacls &lt;ruta&gt; /grant &lt;usuario&gt;:&lt;permisos&gt;</code></td>
        <td>Concede permisos a un usuario. Ejemplo:
          <code>icacls C:\archivo.txt /grant Juan:(R,W)</code>
        </td>
      </tr>
      <tr>
        <td><code>icacls &lt;ruta&gt; /deny &lt;usuario&gt;:&lt;permisos&gt;</code></td>
        <td>Deniega permisos específicos.</td>
      </tr>
      <tr>
        <td><code>icacls &lt;ruta&gt; /remove &lt;usuario&gt;</code></td>
        <td>Quita los permisos de un usuario.</td>
      </tr>
      <tr>
        <td><code>icacls &lt;ruta&gt; /inheritance:r</code></td>
        <td>Desactiva la herencia de permisos.</td>
      </tr>
      <tr>
        <td><code>icacls &lt;ruta&gt; /save permisos.txt /t</code></td>
        <td>Guarda los permisos actuales de una carpeta y subcarpetas.</td>
      </tr>
      <tr>
        <td><code>icacls &lt;ruta&gt; /restore permisos.txt</code></td>
        <td>Restaura permisos desde un archivo guardado.</td>
      </tr>
      <tr>
        <td><code>cacls &lt;ruta&gt;</code></td>
        <td>(Obsoleto, reemplazado por <code>icacls</code>) – mostraba y
          modificaba permisos NTFS.</td>
      </tr>
      <tr>
        <td><code>takeown /f &lt;ruta&gt;</code></td>
        <td>Toma posesión de un archivo o carpeta.</td>
      </tr>
      <tr>
        <td><code>attrib &lt;archivo&gt; [+/-r] [+/-h] [+/-s]</code></td>
        <td>Cambia atributos de solo lectura (R), oculto (H), o de sistema
          (S).</td>
      </tr>
      <tr>
        <td><code>net share &lt;nombre&gt;=&lt;ruta&gt; /grant:&lt;usuario&gt;,&lt;permiso&gt;</code></td>
        <td>Comparte una carpeta con permisos específicos en red. Ejemplo:
          <code>net share Recursos=C:\Recursos /grant:Todos,READ</code>
        </td>
      </tr>
    </tbody>
  </table>
  <hr />
  <h2 id="powershell-cmdlets-de-gestión-de-permisos">PowerShell — Cmdlets
    de Gestión de Permisos</h2>
  <table>
    <colgroup>
      <col style="width: 56%" />
      <col style="width: 43%" />
    </colgroup>
    <thead>
      <tr>
        <th>Cmdlet</th>
        <th>Descripción</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>Get-Acl &lt;ruta&gt;</code></td>
        <td>Obtiene la lista de control de acceso (ACL) de un archivo, carpeta u
          objeto.</td>
      </tr>
      <tr>
        <td><code>Set-Acl &lt;ruta&gt; &lt;objetoACL&gt;</code></td>
        <td>Aplica una ACL modificada a un recurso.</td>
      </tr>
      <tr>
        <td><code>$acl = Get-Acl &lt;ruta&gt;</code></td>
        <td>Guarda la ACL actual en una variable.</td>
      </tr>
      <tr>
        <td>
          <code>$rule = New-Object System.Security.AccessControl.FileSystemAccessRule("Usuario","FullControl","Allow")</code>
        </td>
        <td>Crea una nueva regla de permisos.</td>
      </tr>
      <tr>
        <td><code>$acl.AddAccessRule($rule)</code></td>
        <td>Agrega la regla creada al objeto ACL.</td>
      </tr>
      <tr>
        <td><code>Set-Acl &lt;ruta&gt; $acl</code></td>
        <td>Aplica los cambios.</td>
      </tr>
      <tr>
        <td><code>icacls</code></td>
        <td>También disponible desde PowerShell (puedes usar los mismos comandos
          de CMD).</td>
      </tr>
      <tr>
        <td><code>Get-ItemProperty -Path &lt;ruta&gt;</code></td>
        <td>Muestra propiedades de un archivo o carpeta (incluye permisos en
          algunos casos).</td>
      </tr>
      <tr>
        <td><code>Grant-SmbShareAccess -Name &lt;nombre&gt; -AccountName &lt;usuario&gt; -AccessRight Full -Force</code>
        </td>
        <td>Concede permisos de acceso a un recurso compartido SMB.</td>
      </tr>
      <tr>
        <td><code>Revoke-SmbShareAccess -Name &lt;nombre&gt; -AccountName &lt;usuario&gt;</code></td>
        <td>Revoca permisos de acceso a un recurso compartido.</td>
      </tr>
      <tr>
        <td><code>Get-SmbShareAccess -Name &lt;nombre&gt;</code></td>
        <td>Muestra los permisos actuales de un recurso compartido.</td>
      </tr>
    </tbody>
  </table>
  <hr />
  <h2 id="ejemplos-prácticos">Ejemplos prácticos</h2>
  <h3 id="cmd">CMD</h3>
  <div class="sourceCode" id="cb1">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="ex">icacls</span> <span class="st">&quot;C:\Proyecto&quot;</span> /grant Juan:<span class="er">(</span><span class="ex">R,W</span><span class="kw">)</span></span>
<span id="cb1-2"><a href="#cb1-2" aria-hidden="true" tabindex="-1"></a><span class="ex">takeown</span> /f <span class="st">&quot;C:\Proyecto\archivo.txt&quot;</span></span></code></pre>
  </div>
  <h3 id="powershell">PowerShell</h3>
  <div class="sourceCode" id="cb2">
    <pre
      class="sourceCode powershell"><code class="sourceCode powershell"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="va">$acl</span> <span class="op">=</span> <span class="fu">Get-Acl</span> <span class="st">&quot;C:\Proyecto&quot;</span></span>
<span id="cb2-2"><a href="#cb2-2" aria-hidden="true" tabindex="-1"></a><span class="va">$rule</span> <span class="op">=</span> <span class="fu">New-Object</span> System<span class="op">.</span><span class="fu">Security</span><span class="op">.</span><span class="fu">AccessControl</span><span class="op">.</span><span class="fu">FileSystemAccessRule</span><span class="op">(</span><span class="st">&quot;Juan&quot;</span><span class="op">,</span><span class="st">&quot;Modify&quot;</span><span class="op">,</span><span class="st">&quot;Allow&quot;</span><span class="op">)</span></span>
<span id="cb2-3"><a href="#cb2-3" aria-hidden="true" tabindex="-1"></a><span class="va">$acl</span><span class="op">.</span><span class="fu">AddAccessRule</span><span class="op">(</span><span class="va">$rule</span><span class="op">)</span></span>
<span id="cb2-4"><a href="#cb2-4" aria-hidden="true" tabindex="-1"></a><span class="fu">Set-Acl</span> <span class="st">&quot;C:\Proyecto&quot;</span> <span class="va">$acl</span></span></code></pre>
  </div>
  <hr />
  <p><a href="./../readme.md#3-windows">Regresar a la guía
      principal</a></p>
  <blockquote>
    <p><strong>Autor:</strong> Fravelz</p>
  </blockquote>
</body>

</html>