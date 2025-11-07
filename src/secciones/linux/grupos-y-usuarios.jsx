<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">

<head>
  <meta charset="utf-8" />
  <meta name="generator" content="pandoc" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <title>grupos-y-usuarios</title>

</head>

<body>
  <h1 id="grupos-y-usuarios">Grupos y Usuarios</h1>
  <hr />
  <h2 id="temario">Temario</h2>
  <ul>
    <li><a href="#grupos-y-usuarios">Grupos y Usuarios</a>
      <ul>
        <li><a href="#temario">Temario</a></li>
        <li><a href="#1-gestión-de-usuarios">1. Gestión de usuarios</a>
          <ul>
            <li><a href="#useradd-vs-adduser"><code>useradd</code> vs
                <code>adduser</code></a>
              <ul>
                <li><a href="#1-useradd-programa-básico-del-sistema">1.
                    <code>useradd</code> (programa básico del sistema)</a></li>
                <li><a href="#2-adduser-script-de-alto-nivel">2. <code>adduser</code>
                    (script de alto nivel)</a></li>
                <li><a href="#comparación-directa">Comparación directa</a></li>
                <li><a href="#en-resumen-gestión-de-usuarios">En resumen (gestión de
                    usuarios)</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><a href="#2-grupos">2. Grupos</a>
          <ul>
            <li><a href="#gestión-de-grupos">Gestión de grupos</a></li>
            <li><a href="#qué-es-un-grupo-en-linux">¿Qué es un grupo en
                Linux?</a></li>
            <li><a href="#ejemplo-simple">Ejemplo simple</a></li>
            <li><a href="#cada-usuario-tiene">Cada usuario tiene</a></li>
            <li><a href="#ver-los-grupos-de-un-usuario">Ver los grupos de un
                usuario</a></li>
            <li><a href="#archivos-donde-se-guardan-los-grupos">Archivos donde se
                guardan los grupos</a></li>
            <li><a href="#en-resumen-gestión-de-grupos">En resumen (gestión de
                grupos)</a></li>
          </ul>
        </li>
        <li><a href="#3-archivos-importantes-del-sistema">3. Archivos
            importantes del sistema</a></li>
        <li><a href="#4-ejemplos-prácticos-comunes">4. Ejemplos prácticos
            comunes</a></li>
        <li><a href="#utilidad-de-grupos-y-usuarios">Utilidad de grupos y
            usuarios</a>
          <ul>
            <li><a href="#1-cuando-hay-varios-usuarios">1. Cuando hay varios
                usuarios</a></li>
            <li><a href="#2-cuando-eres-el-único-usuario">2. Cuando eres el único
                usuario</a>
              <ul>
                <li><a href="#a-seguridad-interna">a) Seguridad interna</a></li>
                <li><a href="#b-servicios-y-procesos-del-sistema">b) Servicios y
                    procesos del sistema</a></li>
                <li><a href="#c-control-de-dispositivos-y-permisos-especiales">c)
                    Control de dispositivos y permisos especiales</a>
                  <ul>
                    <li><a href="#en-resumen-utilidad-de-grupos-y-usuarios">En resumen
                        (utilidad de grupos y usuarios)</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a href="#3-otros">3. Otros</a>
              <ul>
                <li><a href="#1-cuando-creas-o-manejas-máquinas-virtuales-o-reales">1.
                    Cuando creas o manejas máquinas (virtuales o reales)</a></li>
                <li><a href="#2-en-ciberseguridad-o-administración">2. En ciberseguridad
                    o administración</a></li>
                <li><a href="#3-en-desarrollo-o-automatización">3. En desarrollo o
                    automatización</a></li>
                <li><a href="#en-resumen-otros">En resumen (otros)</a></li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
  <p><a href="./../readme.md#2-linux-y-bash-script">Regresar a la guía
      principal</a></p>
  <hr />
  <h2 id="gestión-de-usuarios">1. Gestión de usuarios</h2>
  <table>
    <colgroup>
      <col style="width: 12%" />
      <col style="width: 47%" />
      <col style="width: 40%" />
    </colgroup>
    <thead>
      <tr>
        <th>Comando</th>
        <th>Descripción</th>
        <th>Ejemplo</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>useradd</code></td>
        <td>Crea un nuevo usuario.</td>
        <td><code>sudo useradd francisco</code></td>
      </tr>
      <tr>
        <td><code>adduser</code></td>
        <td>Variante más amigable de <code>useradd</code> (usa asistentes).</td>
        <td><code>sudo adduser francisco</code></td>
      </tr>
      <tr>
        <td><code>passwd</code></td>
        <td>Asigna o cambia la contraseña de un usuario.</td>
        <td><code>sudo passwd francisco</code></td>
      </tr>
      <tr>
        <td><code>usermod</code></td>
        <td>Modifica las propiedades de un usuario existente.</td>
        <td><code>sudo usermod -aG sudo francisco</code> (añadir a grupo
          sudo)</td>
      </tr>
      <tr>
        <td><code>userdel</code></td>
        <td>Elimina un usuario (sin borrar su carpeta personal).</td>
        <td><code>sudo userdel francisco</code></td>
      </tr>
      <tr>
        <td><code>sudo userdel -r</code></td>
        <td>Elimina un usuario y <strong>su directorio home</strong>.</td>
        <td><code>sudo userdel -r francisco</code></td>
      </tr>
      <tr>
        <td><code>id</code></td>
        <td>Muestra el ID del usuario y sus grupos.</td>
        <td><code>id francisco</code></td>
      </tr>
      <tr>
        <td><code>whoami</code></td>
        <td>Muestra el nombre del usuario actual.</td>
        <td><code>whoami</code></td>
      </tr>
      <tr>
        <td><code>su</code></td>
        <td>Cambia de usuario (abre una sesión de otro usuario).</td>
        <td><code>su francisco</code></td>
      </tr>
      <tr>
        <td><code>sudo</code></td>
        <td>Ejecuta un comando como superusuario o con privilegios
          elevados.</td>
        <td><code>sudo apt update</code></td>
      </tr>
    </tbody>
  </table>
  <h3 id="useradd-vs-adduser"><code>useradd</code> vs
    <code>adduser</code>
  </h3>
  <h4 id="useradd-programa-básico-del-sistema">1. <code>useradd</code>
    (programa básico del sistema)</h4>
  <ul>
    <li>Es el <strong>comando original</strong> de bajo nivel de Linux para
      crear usuarios.</li>
    <li>Pertenece al paquete <strong><code>passwd</code></strong> o
      <strong><code>shadow</code></strong> (dependiendo de la distro).
    </li>
    <li>No crea automáticamente todo lo necesario (por ejemplo, la carpeta
      personal).</li>
    <li>Solo ejecuta <strong>una instrucción directa al sistema</strong>,
      sin preguntar nada.</li>
    <li>Se usa mucho en <strong>scripts o administración
        avanzada</strong>.</li>
  </ul>
  <p><strong>Ejemplo:</strong></p>
  <div class="sourceCode" id="cb1">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> useradd francisco</span></code></pre>
  </div>
  <p>Esto <strong>solo</strong> crea la entrada en
    <code>/etc/passwd</code>, pero:
  </p>
  <ul>
    <li>No crea <code>/home/francisco</code></li>
    <li>No copia archivos de configuración por defecto
      (<code>.bashrc</code>, etc.)</li>
    <li>No asigna contraseña</li>
  </ul>
  <p>Tendrías que hacer todo manualmente:</p>
  <div class="sourceCode" id="cb2">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> mkdir /home/francisco</span>
<span id="cb2-2"><a href="#cb2-2" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> cp <span class="at">-r</span> /etc/skel/. /home/francisco</span>
<span id="cb2-3"><a href="#cb2-3" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> chown <span class="at">-R</span> francisco:francisco /home/francisco</span>
<span id="cb2-4"><a href="#cb2-4" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> passwd francisco</span></code></pre>
  </div>
  <h4 id="adduser-script-de-alto-nivel">2. <code>adduser</code> (script de
    alto nivel)</h4>
  <ul>
    <li>
      <p>Es un <strong>script en Perl</strong> que usa internamente
        <code>useradd</code>, pero con <strong>asistentes
          interactivos</strong>.
      </p>
    </li>
    <li>
      <p><strong>Crea automáticamente:</strong></p>
      <ul>
        <li>Carpeta personal (<code>/home/usuario</code>)</li>
        <li>Archivos de configuración inicial</li>
        <li>Grupo con el mismo nombre</li>
        <li>Permisos correctos</li>
        <li>Pide la contraseña y otros datos de forma interactiva</li>
      </ul>
    </li>
    <li>
      <p>Está pensado para <strong>uso cotidiano y comodidad del
          administrador</strong>.</p>
    </li>
  </ul>
  <p><strong>Ejemplo:</strong></p>
  <div class="sourceCode" id="cb3">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> adduser francisco</span></code></pre>
  </div>
  <p>Esto:</p>
  <ul>
    <li>Crea <code>/home/francisco</code></li>
    <li>Crea el grupo <code>francisco</code></li>
    <li>Copia los archivos de <code>/etc/skel</code></li>
    <li>Asigna contraseña (te la pide)</li>
    <li>Te deja todo listo en un paso</li>
  </ul>
  <h4 id="comparación-directa">Comparación directa</h4>
  <table>
    <colgroup>
      <col style="width: 31%" />
      <col style="width: 38%" />
      <col style="width: 30%" />
    </colgroup>
    <thead>
      <tr>
        <th>Característica</th>
        <th><code>useradd</code></th>
        <th><code>adduser</code></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Tipo de programa</td>
        <td>Binario del sistema</td>
        <td>Script en Perl</td>
      </tr>
      <tr>
        <td>Nivel</td>
        <td>Bajo nivel (más técnico)</td>
        <td>Alto nivel (más amigable)</td>
      </tr>
      <tr>
        <td>Interactivo</td>
        <td>❌ No</td>
        <td>✅ Sí</td>
      </tr>
      <tr>
        <td>Crea carpeta <code>/home</code> automáticamente</td>
        <td>❌ No (debes usar <code>-m</code>)</td>
        <td>✅ Sí</td>
      </tr>
      <tr>
        <td>Crea grupo automáticamente</td>
        <td>❌ No (debes usar <code>-g</code>)</td>
        <td>✅ Sí</td>
      </tr>
      <tr>
        <td>Solicita contraseña</td>
        <td>❌ No</td>
        <td>✅ Sí</td>
      </tr>
      <tr>
        <td>Ideal para</td>
        <td>Scripts, automatización, distros minimalistas</td>
        <td>Uso diario, administración sencilla</td>
      </tr>
    </tbody>
  </table>
  <h4 id="en-resumen-gestión-de-usuarios">En resumen (gestión de
    usuarios)</h4>
  <ul>
    <li>Usa <strong><code>adduser</code></strong> cuando creas usuarios
      manualmente (más seguro y rápido).</li>
    <li>Usa <strong><code>useradd</code></strong> en <strong>scripts o
        configuraciones personalizadas</strong>, donde controlas cada
      detalle.</li>
  </ul>
  <hr />
  <h2 id="grupos">2. Grupos</h2>
  <h3 id="gestión-de-grupos">Gestión de grupos</h3>
  <table>
    <colgroup>
      <col style="width: 12%" />
      <col style="width: 46%" />
      <col style="width: 41%" />
    </colgroup>
    <thead>
      <tr>
        <th>Comando</th>
        <th>Descripción</th>
        <th>Ejemplo</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>groupadd</code></td>
        <td>Crea un nuevo grupo.</td>
        <td><code>sudo groupadd desarrolladores</code></td>
      </tr>
      <tr>
        <td><code>groupdel</code></td>
        <td>Elimina un grupo.</td>
        <td><code>sudo groupdel desarrolladores</code></td>
      </tr>
      <tr>
        <td><code>usermod -aG</code></td>
        <td>Añade un usuario a un grupo.</td>
        <td><code>sudo usermod -aG desarrolladores francisco</code></td>
      </tr>
      <tr>
        <td><code>gpasswd -d</code></td>
        <td>Elimina un usuario de un grupo.</td>
        <td><code>sudo gpasswd -d francisco desarrolladores</code></td>
      </tr>
      <tr>
        <td><code>groups</code></td>
        <td>Muestra los grupos a los que pertenece un usuario.</td>
        <td><code>groups francisco</code></td>
      </tr>
      <tr>
        <td><code>newgrp</code></td>
        <td>Cambia temporalmente el grupo activo en la sesión.</td>
        <td><code>newgrp desarrolladores</code></td>
      </tr>
    </tbody>
  </table>
  <h3 id="qué-es-un-grupo-en-linux">¿Qué es un grupo en Linux?</h3>
  <p>Un <strong>grupo</strong> es un conjunto de usuarios que
    <strong>comparten ciertos permisos</strong>. Sirve para
    <strong>organizar quién puede hacer qué</strong> con los archivos,
    carpetas o procesos del sistema.
  </p>
  <p>Piensa que un grupo es como un “equipo” dentro del sistema
    operativo.</p>
  <h3 id="ejemplo-simple">Ejemplo simple</h3>
  <p>Imagina que tienes tres usuarios:</p>
  <div class="sourceCode" id="cb4">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a><span class="ex">juan</span></span>
<span id="cb4-2"><a href="#cb4-2" aria-hidden="true" tabindex="-1"></a><span class="ex">maria</span></span>
<span id="cb4-3"><a href="#cb4-3" aria-hidden="true" tabindex="-1"></a><span class="ex">pedro</span></span></code></pre>
  </div>
  <p>Y quieres que <strong>solo juan y maria puedan entrar</strong> a una
    carpeta llamada <code>/proyecto</code>.</p>
  <p>En lugar de dar permisos a cada uno individualmente, puedes crear un
    grupo:</p>
  <div class="sourceCode" id="cb5">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb5-1"><a href="#cb5-1" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> groupadd proyecto</span></code></pre>
  </div>
  <p>Luego agregas a los usuarios al grupo:</p>
  <div class="sourceCode" id="cb6">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> usermod <span class="at">-aG</span> proyecto juan</span>
<span id="cb6-2"><a href="#cb6-2" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> usermod <span class="at">-aG</span> proyecto maria</span></code></pre>
  </div>
  <p>Después haces que la carpeta pertenezca a ese grupo:</p>
  <div class="sourceCode" id="cb7">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb7-1"><a href="#cb7-1" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> chown :proyecto /proyecto</span></code></pre>
  </div>
  <p>Y le das permisos solo al grupo:</p>
  <div class="sourceCode" id="cb8">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb8-1"><a href="#cb8-1" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> chmod 770 /proyecto</span></code></pre>
  </div>
  <p>Ahora:</p>
  <ul>
    <li>Juan ✅ puede entrar.</li>
    <li>María ✅ puede entrar.</li>
    <li>Pedro ❌ no puede.</li>
  </ul>
  <h3 id="cada-usuario-tiene">Cada usuario tiene</h3>
  <ol type="1">
    <li>
      <p><strong>Un grupo principal (primario):</strong> Se crea
        automáticamente con el mismo nombre que el usuario. Ejemplo: el usuario
        <code>francisco</code> pertenece al grupo
        <code>francisco</code>.
      </p>
    </li>
    <li>
      <p><strong>Grupos secundarios (suplementarios):</strong> Son grupos
        extra a los que puede pertenecer. Ejemplo:</p>
      <div class="sourceCode" id="cb9">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb9-1"><a href="#cb9-1" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> usermod <span class="at">-aG</span> sudo,video,audio francisco</span></code></pre>
      </div>
      <p>Aquí el usuario pertenece a los grupos:</p>
      <ul>
        <li><code>sudo</code> → puede usar comandos como administrador</li>
        <li><code>video</code> → puede acceder a la cámara o GPU</li>
        <li><code>audio</code> → puede usar el micrófono o altavoces</li>
      </ul>
    </li>
  </ol>
  <h3 id="ver-los-grupos-de-un-usuario">Ver los grupos de un usuario</h3>
  <div class="sourceCode" id="cb10">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb10-1"><a href="#cb10-1" aria-hidden="true" tabindex="-1"></a><span class="fu">groups</span> francisco</span></code></pre>
  </div>
  <p>Salida posible:</p>
  <div class="sourceCode" id="cb11">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb11-1"><a href="#cb11-1" aria-hidden="true" tabindex="-1"></a><span class="ex">francisco</span> : francisco sudo video audio</span></code></pre>
  </div>
  <h3 id="archivos-donde-se-guardan-los-grupos">Archivos donde se guardan
    los grupos</h3>
  <ul>
    <li>
      <p><code>/etc/group</code> → lista todos los grupos del sistema.
        Ejemplo de líneas:</p>
      <div class="sourceCode" id="cb12">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb12-1"><a href="#cb12-1" aria-hidden="true" tabindex="-1"></a><span class="ex">root:x:0:</span></span>
<span id="cb12-2"><a href="#cb12-2" aria-hidden="true" tabindex="-1"></a><span class="ex">sudo:x:27:francisco</span></span>
<span id="cb12-3"><a href="#cb12-3" aria-hidden="true" tabindex="-1"></a><span class="ex">proyecto:x:1002:juan,maria</span></span></code></pre>
      </div>
    </li>
  </ul>
  <h3 id="en-resumen-gestión-de-grupos">En resumen (gestión de
    grupos)</h3>
  <table>
    <colgroup>
      <col style="width: 27%" />
      <col style="width: 72%" />
    </colgroup>
    <thead>
      <tr>
        <th>Concepto</th>
        <th>Significado</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Grupo</strong></td>
        <td>Conjunto de usuarios que comparten permisos.</td>
      </tr>
      <tr>
        <td><strong>Grupo primario</strong></td>
        <td>Grupo principal que tiene cada usuario por defecto.</td>
      </tr>
      <tr>
        <td><strong>Grupos secundarios</strong></td>
        <td>Otros grupos a los que el usuario pertenece.</td>
      </tr>
      <tr>
        <td><strong>Ventaja</strong></td>
        <td>Facilita administrar permisos a varios usuarios a la vez.</td>
      </tr>
    </tbody>
  </table>
  <hr />
  <h2 id="archivos-importantes-del-sistema">3. Archivos importantes del
    sistema</h2>
  <table>
    <colgroup>
      <col style="width: 17%" />
      <col style="width: 82%" />
    </colgroup>
    <thead>
      <tr>
        <th>Archivo</th>
        <th>Contiene</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>/etc/passwd</code></td>
        <td>Información básica de todos los usuarios.</td>
      </tr>
      <tr>
        <td><code>/etc/shadow</code></td>
        <td>Contraseñas cifradas de los usuarios.</td>
      </tr>
      <tr>
        <td><code>/etc/group</code></td>
        <td>Información sobre los grupos del sistema.</td>
      </tr>
      <tr>
        <td><code>/etc/sudoers</code></td>
        <td>Usuarios que tienen permisos de superusuario (editado con
          <code>visudo</code>).
        </td>
      </tr>
    </tbody>
  </table>
  <hr />
  <h2 id="ejemplos-prácticos-comunes">4. Ejemplos prácticos comunes</h2>
  <ul>
    <li>
      <p><strong>Crear un usuario con carpeta personal y shell
          bash:</strong></p>
      <div class="sourceCode" id="cb13">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb13-1"><a href="#cb13-1" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> useradd <span class="at">-m</span> <span class="at">-s</span> /bin/bash francisco</span></code></pre>
      </div>
    </li>
    <li>
      <p><strong>Cambiar nombre de usuario:</strong></p>
      <div class="sourceCode" id="cb14">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb14-1"><a href="#cb14-1" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> usermod <span class="at">-l</span> nuevo_nombre francisco</span></code></pre>
      </div>
    </li>
    <li>
      <p><strong>Bloquear/desbloquear usuario:</strong></p>
      <div class="sourceCode" id="cb15">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb15-1"><a href="#cb15-1" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> usermod <span class="at">-L</span> francisco    <span class="co"># Bloquear</span></span>
<span id="cb15-2"><a href="#cb15-2" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> usermod <span class="at">-U</span> francisco    <span class="co"># Desbloquear</span></span></code></pre>
      </div>
    </li>
    <li>
      <p><strong>Ver todos los usuarios del sistema:</strong></p>
      <div class="sourceCode" id="cb16">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb16-1"><a href="#cb16-1" aria-hidden="true" tabindex="-1"></a><span class="fu">cut</span> <span class="at">-d:</span> <span class="at">-f1</span> /etc/passwd</span></code></pre>
      </div>
    </li>
  </ul>
  <hr />
  <h2 id="utilidad-de-grupos-y-usuarios">Utilidad de grupos y
    usuarios</h2>
  <h3 id="cuando-hay-varios-usuarios">1. Cuando hay varios usuarios</h3>
  <p>Ahí es donde <strong>más se nota su función</strong>.</p>
  <p>Ejemplo: En un servidor o una universidad, hay muchos usuarios
    distintos:</p>
  <ul>
    <li>Cada uno tiene su cuenta (<code>/home/juan</code>,
      <code>/home/maria</code>, etc.)
    </li>
    <li>Cada uno solo puede entrar a su carpeta</li>
    <li>Los administradores (grupo <code>sudo</code>) pueden cambiar
      configuraciones del sistema</li>
    <li>Otros grupos controlan quién puede acceder a redes, dispositivos
      USB, cámaras, etc.</li>
  </ul>
  <p>Así, Linux mantiene la <strong>seguridad y el orden</strong> entre
    todos los usuarios.</p>
  <hr />
  <h3 id="cuando-eres-el-único-usuario">2. Cuando eres el único
    usuario</h3>
  <p>Incluso así, <strong>sigue siendo muy útil</strong> por estas
    razones:</p>
  <h4 id="a-seguridad-interna">a) Seguridad interna</h4>
  <ul>
    <li>El sistema separa procesos y permisos por usuario.</li>
    <li>Ejemplo: si un programa malicioso se ejecuta como “usuario normal”,
      <strong>no puede dañar el sistema</strong>, porque no tiene permisos de
      administrador.
    </li>
  </ul>
  <p>Tu usuario normal pertenece a su propio grupo (por ejemplo,
    <code>francisco:francisco</code>), y no puede tocar archivos del sistema
    (<code>/etc</code>, <code>/usr</code>, etc.) sin usar
    <code>sudo</code>.
  </p>
  <hr />
  <h4 id="b-servicios-y-procesos-del-sistema">b) Servicios y procesos del
    sistema</h4>
  <p>Linux trata <strong>cada servicio como si fuera un usuario
      separado</strong> para aislarlos.</p>
  <p>Por ejemplo:</p>
  <div class="sourceCode" id="cb17">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb17-1"><a href="#cb17-1" aria-hidden="true" tabindex="-1"></a><span class="ex">root</span>       → superusuario</span>
<span id="cb17-2"><a href="#cb17-2" aria-hidden="true" tabindex="-1"></a><span class="ex">mysql</span>      → usuario del servicio MySQL</span>
<span id="cb17-3"><a href="#cb17-3" aria-hidden="true" tabindex="-1"></a><span class="ex">www-data</span>   → usuario del servidor web Apache o Nginx</span>
<span id="cb17-4"><a href="#cb17-4" aria-hidden="true" tabindex="-1"></a><span class="ex">nobody</span>     → usuario “vacío” usado por procesos sin privilegios</span></code></pre>
  </div>
  <p>Así, si un servicio (como un servidor web) es hackeado, el atacante
    <strong>no puede controlar todo el sistema</strong>, solo ese usuario
    limitado.
  </p>
  <hr />
  <h4 id="c-control-de-dispositivos-y-permisos-especiales">c) Control de
    dispositivos y permisos especiales</h4>
  <p>Los grupos también controlan <strong>qué puede hacer tu usuario con
      el hardware</strong>, incluso si eres el único:</p>
  <ul>
    <li><code>audio</code> → para reproducir sonido</li>
    <li><code>video</code> → para usar la cámara</li>
    <li><code>network</code> → para cambiar redes</li>
    <li><code>docker</code>, <code>kvm</code>, <code>vboxusers</code>, etc.
      → para manejar máquinas virtuales, contenedores, etc.</li>
  </ul>
  <p>Si no estás en esos grupos, el sistema simplemente <strong>no te deja
      usar esos recursos</strong>.</p>
  <hr />
  <h5 id="en-resumen-utilidad-de-grupos-y-usuarios">En resumen (utilidad
    de grupos y usuarios)</h5>
  <table>
    <colgroup>
      <col style="width: 27%" />
      <col style="width: 72%" />
    </colgroup>
    <thead>
      <tr>
        <th>Situación</th>
        <th>¿Por qué sirven usuarios y grupos?</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Varios usuarios en un PC</td>
        <td>Controlan el acceso y los permisos entre personas distintas.</td>
      </tr>
      <tr>
        <td>Solo un usuario en el PC</td>
        <td>Protegen el sistema, los servicios y los recursos del hardware.</td>
      </tr>
    </tbody>
  </table>
  <hr />
  <h3 id="otros">3. Otros</h3>
  <h4 id="cuando-creas-o-manejas-máquinas-virtuales-o-reales">1. Cuando
    creas o manejas máquinas (virtuales o reales)</h4>
  <p>Cada máquina (por ejemplo, una que instalas con VirtualBox, KVM o
    Docker) tiene su propio <strong>sistema Linux</strong>, y dentro de él
    <strong>todo funciona con usuarios y grupos</strong>.
  </p>
  <p>Si no los entiendes:</p>
  <ul>
    <li>No sabrás <strong>por qué un programa no puede acceder a un
        archivo.</strong></li>
    <li>No podrás <strong>dar permisos</strong> a scripts, servidores o
      procesos.</li>
    <li>No entenderás <strong>por qué “root” puede hacerlo todo</strong> y
      tu usuario no.</li>
  </ul>
  <p>En máquinas virtuales o servidores, <em>la seguridad y estabilidad
      dependen directamente de esos permisos.</em></p>
  <h4 id="en-ciberseguridad-o-administración">2. En ciberseguridad o
    administración</h4>
  <p>Si quieres aprender hacking ético, pentesting o proteger sistemas,
    necesitas dominar esto porque:</p>
  <ul>
    <li>Los atacantes intentan <strong>escapar del usuario limitado</strong>
      (por ejemplo, <code>www-data</code>) y conseguir permisos de
      <code>root</code>.
    </li>
    <li>Los administradores deben <strong>configurar correctamente los
        grupos y permisos</strong> para que eso no sea posible.</li>
  </ul>
  <p>Ejemplo: Si un servicio web corre como usuario <code>www-data</code>,
    no debería poder leer <code>/etc/shadow</code> (donde están las
    contraseñas). Ese aislamiento lo logran los <strong>usuarios y
      grupos</strong>.</p>
  <h4 id="en-desarrollo-o-automatización">3. En desarrollo o
    automatización</h4>
  <p>Cuando haces tus propias máquinas, scripts o aplicaciones:</p>
  <ul>
    <li>Puedes crear <strong>usuarios específicos para cada proceso</strong>
      (por seguridad).</li>
    <li>Asignar <strong>grupos</strong> para definir qué scripts pueden
      acceder a ciertos archivos.</li>
    <li>Controlar <strong>permisos de ejecución (<code>rwx</code>)</strong>
      para evitar errores o accesos indebidos.</li>
  </ul>
  <p>Ejemplo real:</p>
  <div class="sourceCode" id="cb18">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb18-1"><a href="#cb18-1" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> useradd <span class="at">-r</span> <span class="at">-s</span> /bin/false servidor_web</span></code></pre>
  </div>
  <p>Esto crea un usuario “de sistema” sin acceso a terminal, usado solo
    para ejecutar un servicio.</p>
  <h4 id="en-resumen-otros">En resumen (otros)</h4>
  <table>
    <colgroup>
      <col style="width: 42%" />
      <col style="width: 57%" />
    </colgroup>
    <thead>
      <tr>
        <th>Área</th>
        <th>¿Por qué es importante manejar usuarios y grupos?</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Ciberseguridad</strong></td>
        <td>Aísla procesos, evita escaladas de privilegios.</td>
      </tr>
      <tr>
        <td><strong>Sistemas / servidores</strong></td>
        <td>Controla accesos, protege servicios.</td>
      </tr>
      <tr>
        <td><strong>Programación / DevOps</strong></td>
        <td>Permite ejecutar procesos con seguridad.</td>
      </tr>
      <tr>
        <td><strong>Máquinas virtuales / contenedores</strong></td>
        <td>Cada entorno tiene sus propios usuarios y permisos.</td>
      </tr>
    </tbody>
  </table>
  <p>En palabras simples:</p>
  <blockquote>
    <p>Si no entiendes cómo Linux maneja usuarios, grupos y permisos, nunca
      tendrás <strong>control real</strong> de una máquina. Pero cuando lo
      dominas, puedes <strong>construir, romper y proteger sistemas</strong> a
      tu gusto.</p>
  </blockquote>
  <hr />
  <p><a href="./../readme.md#2-linux-y-bash-script">Regresar a la guía
      principal</a></p>
  <blockquote>
    <p><strong>Autor:</strong> Fravelz</p>
  </blockquote>
</body>

</html>