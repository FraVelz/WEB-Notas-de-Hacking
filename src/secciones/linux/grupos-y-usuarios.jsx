import Titulo from "./../../componentes/titulo.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Linea from "./../../componentes/linea.jsx";

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="grupos-y-usuarios">Grupos y Usuarios</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><a href="#grupos-y-usuarios">Grupos y Usuarios</a>
          <Lista>
            <li><a href="#temario">Temario</a></li>
            <li><a href="#1-gestión-de-usuarios">1. Gestión de usuarios</a>
              <Lista>
                <li><a href="#useradd-vs-adduser"><code>useradd</code> vs
                  <code>adduser</code></a>
                  <Lista>
                    <li><a href="#1-useradd-programa-básico-del-sistema">1.
                      <code>useradd</code> (programa básico del sistema)</a></li>
                    <li><a href="#2-adduser-script-de-alto-nivel">2. <code>adduser</code>
                      (script de alto nivel)</a></li>
                    <li><a href="#comparación-directa">Comparación directa</a></li>
                    <li><a href="#en-resumen-gestión-de-usuarios">En resumen (gestión de
                      usuarios)</a></li>
                  </Lista>
                </li>
              </Lista>
            </li>
            <li><a href="#2-grupos">2. Grupos</a>
              <Lista>
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
              </Lista>
            </li>
            <li><a href="#3-archivos-importantes-del-sistema">3. Archivos
              importantes del sistema</a></li>
            <li><a href="#4-ejemplos-prácticos-comunes">4. Ejemplos prácticos
              comunes</a></li>
            <li><a href="#utilidad-de-grupos-y-usuarios">Utilidad de grupos y
              usuarios</a>
              <Lista>
                <li><a href="#1-cuando-hay-varios-usuarios">1. Cuando hay varios
                  usuarios</a></li>
                <li><a href="#2-cuando-eres-el-único-usuario">2. Cuando eres el único
                  usuario</a>
                  <Lista>
                    <li><a href="#a-seguridad-interna">a) Seguridad interna</a></li>
                    <li><a href="#b-servicios-y-procesos-del-sistema">b) Servicios y
                      procesos del sistema</a></li>
                    <li><a href="#c-control-de-dispositivos-y-permisos-especiales">c)
                      Control de dispositivos y permisos especiales</a>
                      <Lista>
                        <li><a href="#en-resumen-utilidad-de-grupos-y-usuarios">En resumen
                          (utilidad de grupos y usuarios)</a></li>
                      </Lista>
                    </li>
                  </Lista>
                </li>
                <li><a href="#3-otros">3. Otros</a>
                  <Lista>
                    <li><a href="#1-cuando-creas-o-manejas-máquinas-virtuales-o-reales">1.
                      Cuando creas o manejas máquinas (virtuales o reales)</a></li>
                    <li><a href="#2-en-ciberseguridad-o-administración">2. En ciberseguridad
                      o administración</a></li>
                    <li><a href="#3-en-desarrollo-o-automatización">3. En desarrollo o
                      automatización</a></li>
                    <li><a href="#en-resumen-otros">En resumen (otros)</a></li>
                  </Lista>
                </li>
              </Lista>
            </li>
          </Lista>
        </li>
      </Lista>
      <Texto><a href="./../readme.md#2-linux-y-bash-script">Regresar a la guía
        principal</a></Texto>
      <Linea />
      <Titulo title="h2" id="gestión-de-usuarios">1. Gestión de usuarios</Titulo>
      <table>
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
      <Titulo title="h3" id="useradd-vs-adduser"><code>useradd</code> vs
        <code>adduser</code>
      </Titulo>
      <h4 id="useradd-programa-básico-del-sistema">1. <code>useradd</code>
        (programa básico del sistema)</h4>
      <Lista>
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
      </Lista>
      <Texto><strong>Ejemplo:</strong></Texto>
      <div class="sourceCode" id="cb1">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> useradd francisco</span></code></pre>
      </div>
      <Texto>Esto <strong>solo</strong> crea la entrada en
        <code>/etc/passwd</code>, pero:
      </Texto>
      <Lista>
        <li>No crea <code>/home/francisco</code></li>
        <li>No copia archivos de configuración por defecto
          (<code>.bashrc</code>, etc.)</li>
        <li>No asigna contraseña</li>
      </Lista>
      <Texto>Tendrías que hacer todo manualmente:</Texto>
      <div class="sourceCode" id="cb2">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> mkdir /home/francisco</span>
            <span id="cb2-2"><a href="#cb2-2" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> cp <span class="at">-r</span> /etc/skel/. /home/francisco</span>
            <span id="cb2-3"><a href="#cb2-3" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> chown <span class="at">-R</span> francisco:francisco /home/francisco</span>
            <span id="cb2-4"><a href="#cb2-4" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> passwd francisco</span></code></pre>
      </div>
      <h4 id="adduser-script-de-alto-nivel">2. <code>adduser</code> (script de
        alto nivel)</h4>

      <Lista>
        <li>Es un <strong>script en Perl</strong> que usa internamente
          <code>useradd</code>, pero con <strong>asistentes
            interactivos</strong>.
        </li>

        <li><strong>Crea automáticamente:</strong></li>

        <Lista>
          <li>Carpeta personal (<code>/home/usuario</code>)</li>
          <li>Archivos de configuración inicial</li>
          <li>Grupo con el mismo nombre</li>
          <li>Permisos correctos</li>
          <li>Pide la contraseña y otros datos de forma interactiva</li>
        </Lista>
        <li>
          <Texto>Está pensado para <strong>uso cotidiano y comodidad del
            administrador</strong>
          </Texto>
        </li>
      </Lista>

      <Texto><strong>Ejemplo:</strong></Texto>
      <div class="sourceCode" id="cb3">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> adduser francisco</span></code></pre>
      </div>
      <Texto>Esto:</Texto>
      <Lista>
        <li>Crea <code>/home/francisco</code></li>
        <li>Crea el grupo <code>francisco</code></li>
        <li>Copia los archivos de <code>/etc/skel</code></li>
        <li>Asigna contraseña (te la pide)</li>
        <li>Te deja todo listo en un paso</li>
      </Lista>
      <h4 id="comparación-directa">Comparación directa</h4>
      <table>
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
      <Lista>
        <li>Usa <strong><code>adduser</code></strong> cuando creas usuarios
          manualmente (más seguro y rápido).</li>
        <li>Usa <strong><code>useradd</code></strong> en <strong>scripts o
          configuraciones personalizadas</strong>, donde controlas cada
          detalle.</li>
      </Lista>
      <Linea />
      <Titulo title="h2" id="grupos">2. Grupos</Titulo>
      <Titulo title="h3" id="gestión-de-grupos">Gestión de grupos</Titulo>
      <table>
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
      <Titulo title="h3" id="qué-es-un-grupo-en-linux">¿Qué es un grupo en Linux?</Titulo>
      <Texto>Un <strong>grupo</strong> es un conjunto de usuarios que
        <strong>comparten ciertos permisos</strong>. Sirve para
        <strong>organizar quién puede hacer qué</strong> con los archivos,
        carpetas o procesos del sistema.
      </Texto>
      <Texto>Piensa que un grupo es como un “equipo” dentro del sistema
        operativo.</Texto>
      <Titulo title="h3" id="ejemplo-simple">Ejemplo simple</Titulo>
      <Texto>Imagina que tienes tres usuarios:</Texto>
      <div class="sourceCode" id="cb4">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a><span class="ex">juan</span></span>
            <span id="cb4-2"><a href="#cb4-2" aria-hidden="true" tabindex="-1"></a><span class="ex">maria</span></span>
            <span id="cb4-3"><a href="#cb4-3" aria-hidden="true" tabindex="-1"></a><span class="ex">pedro</span></span></code></pre>
      </div>
      <Texto>Y quieres que <strong>solo juan y maria puedan entrar</strong> a una
        carpeta llamada <code>/proyecto</code>.</Texto>
      <Texto>En lugar de dar permisos a cada uno individualmente, puedes crear un
        grupo:</Texto>
      <div class="sourceCode" id="cb5">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb5-1"><a href="#cb5-1" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> groupadd proyecto</span></code></pre>
      </div>
      <Texto>Luego agregas a los usuarios al grupo:</Texto>
      <div class="sourceCode" id="cb6">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> usermod <span class="at">-aG</span> proyecto juan</span>
            <span id="cb6-2"><a href="#cb6-2" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> usermod <span class="at">-aG</span> proyecto maria</span></code></pre>
      </div>
      <Texto>Después haces que la carpeta pertenezca a ese grupo:</Texto>
      <div class="sourceCode" id="cb7">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb7-1"><a href="#cb7-1" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> chown :proyecto /proyecto</span></code></pre>
      </div>
      <Texto>Y le das permisos solo al grupo:</Texto>
      <div class="sourceCode" id="cb8">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb8-1"><a href="#cb8-1" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> chmod 770 /proyecto</span></code></pre>
      </div>
      <Texto>Ahora:</Texto>
      <Lista>
        <li>Juan ✅ puede entrar.</li>
        <li>María ✅ puede entrar.</li>
        <li>Pedro ❌ no puede.</li>
      </Lista>
      <Titulo title="h3" id="cada-usuario-tiene">Cada usuario tiene</Titulo>
      <ol type="1">
        <li><strong>Un grupo principal (primario):</strong> Se crea
          automáticamente con el mismo nombre que el usuario. Ejemplo: el usuario
          <code>francisco</code> pertenece al grupo
          <code>francisco</code>.
        </li>    <li>
          <Texto><strong>Grupos secundarios (suplementarios):</strong> Son grupos
            extra a los que puede pertenecer. Ejemplo:</Texto>
          <div class="sourceCode" id="cb9">
            <pre
              class="sourceCode bash"><code class="sourceCode bash"><span id="cb9-1"><a href="#cb9-1" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> usermod <span class="at">-aG</span> sudo,video,audio francisco</span></code></pre>
          </div>
          <Texto>Aquí el usuario pertenece a los grupos:</Texto>
          <Lista>
            <li><code>sudo</code> → puede usar comandos como administrador</li>
            <li><code>video</code> → puede acceder a la cámara o GPU</li>
            <li><code>audio</code> → puede usar el micrófono o altavoces</li>
          </Lista>
        </li>
      </ol>
      <Titulo title="h3" id="ver-los-grupos-de-un-usuario">Ver los grupos de un usuario</Titulo>
      <div class="sourceCode" id="cb10">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb10-1"><a href="#cb10-1" aria-hidden="true" tabindex="-1"></a><span class="fu">groups</span> francisco</span></code></pre>
      </div>
      <Texto>Salida posible:</Texto>
      <div class="sourceCode" id="cb11">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb11-1"><a href="#cb11-1" aria-hidden="true" tabindex="-1"></a><span class="ex">francisco</span> : francisco sudo video audio</span></code></pre>
      </div>
      <Titulo title="h3" id="archivos-donde-se-guardan-los-grupos">Archivos donde se guardan
        los grupos</Titulo>
      <Lista>
        <li>
          <Texto><code>/etc/group</code> → lista todos los grupos del sistema.
            Ejemplo de líneas:</Texto>
          <div class="sourceCode" id="cb12">
            <pre
              class="sourceCode bash"><code class="sourceCode bash"><span id="cb12-1"><a href="#cb12-1" aria-hidden="true" tabindex="-1"></a><span class="ex">root:x:0:</span></span>
                <span id="cb12-2"><a href="#cb12-2" aria-hidden="true" tabindex="-1"></a><span class="ex">sudo:x:27:francisco</span></span>
                <span id="cb12-3"><a href="#cb12-3" aria-hidden="true" tabindex="-1"></a><span class="ex">proyecto:x:1002:juan,maria</span></span></code></pre>
          </div>
        </li>
      </Lista>
      <Titulo title="h3" id="en-resumen-gestión-de-grupos">En resumen (gestión de
        grupos)</Titulo>
      <table>
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
      <Linea />
      <Titulo title="h2" id="archivos-importantes-del-sistema">3. Archivos importantes del
        sistema</Titulo>
      <table>
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
      <Linea />
      <Titulo title="h2" id="ejemplos-prácticos-comunes">4. Ejemplos prácticos comunes</Titulo>
      <Lista>
        <li>
          <Texto><strong>Crear un usuario con carpeta personal y shell
            bash:</strong></Texto>
          <div class="sourceCode" id="cb13">
            <pre
              class="sourceCode bash"><code class="sourceCode bash"><span id="cb13-1"><a href="#cb13-1" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> useradd <span class="at">-m</span> <span class="at">-s</span> /bin/bash francisco</span></code></pre>
          </div>
        </li>
        <li>
          <Texto><strong>Cambiar nombre de usuario:</strong></Texto>
          <div class="sourceCode" id="cb14">
            <pre
              class="sourceCode bash"><code class="sourceCode bash"><span id="cb14-1"><a href="#cb14-1" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> usermod <span class="at">-l</span> nuevo_nombre francisco</span></code></pre>
          </div>
        </li>
        <li>
          <Texto><strong>Bloquear/desbloquear usuario:</strong></Texto>
          <div class="sourceCode" id="cb15">
            <pre
              class="sourceCode bash"><code class="sourceCode bash"><span id="cb15-1"><a href="#cb15-1" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> usermod <span class="at">-L</span> francisco    <span class="co"># Bloquear</span></span>
                <span id="cb15-2"><a href="#cb15-2" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> usermod <span class="at">-U</span> francisco    <span class="co"># Desbloquear</span></span></code></pre>
          </div>
        </li>
        <li>
          <Texto><strong>Ver todos los usuarios del sistema:</strong></Texto>
          <div class="sourceCode" id="cb16">
            <pre
              class="sourceCode bash"><code class="sourceCode bash"><span id="cb16-1"><a href="#cb16-1" aria-hidden="true" tabindex="-1"></a><span class="fu">cut</span> <span class="at">-d:</span> <span class="at">-f1</span> /etc/passwd</span></code></pre>
          </div>
        </li>
      </Lista>
      <Linea />
      <Titulo title="h2" id="utilidad-de-grupos-y-usuarios">Utilidad de grupos y
        usuarios</Titulo>
      <Titulo title="h3" id="cuando-hay-varios-usuarios">1. Cuando hay varios usuarios</Titulo>
      <Texto>Ahí es donde <strong>más se nota su función</strong>.</Texto>
      <Texto>Ejemplo: En un servidor o una universidad, hay muchos usuarios
        distintos:</Texto>
      <Lista>
        <li>Cada uno tiene su cuenta (<code>/home/juan</code>,
          <code>/home/maria</code>, etc.)
        </li>
        <li>Cada uno solo puede entrar a su carpeta</li>
        <li>Los administradores (grupo <code>sudo</code>) pueden cambiar
          configuraciones del sistema</li>
        <li>Otros grupos controlan quién puede acceder a redes, dispositivos
          USB, cámaras, etc.</li>
      </Lista>
      <Texto>Así, Linux mantiene la <strong>seguridad y el orden</strong> entre
        todos los usuarios.</Texto>
      <Linea />
      <Titulo title="h3" id="cuando-eres-el-único-usuario">2. Cuando eres el único
        usuario</Titulo>
      <Texto>Incluso así, <strong>sigue siendo muy útil</strong> por estas
        razones:</Texto>
      <h4 id="a-seguridad-interna">a) Seguridad interna</h4>
      <Lista>
        <li>El sistema separa procesos y permisos por usuario.</li>
        <li>Ejemplo: si un programa malicioso se ejecuta como “usuario normal”,
          <strong>no puede dañar el sistema</strong>, porque no tiene permisos de
          administrador.
        </li>
      </Lista>
      <Texto>Tu usuario normal pertenece a su propio grupo (por ejemplo,
        <code>francisco:francisco</code>), y no puede tocar archivos del sistema
        (<code>/etc</code>, <code>/usr</code>, etc.) sin usar
        <code>sudo</code>.
      </Texto>
      <Linea />
      <h4 id="b-servicios-y-procesos-del-sistema">b) Servicios y procesos del
        sistema</h4>
      <Texto>Linux trata <strong>cada servicio como si fuera un usuario
        separado</strong> para aislarlos.</Texto>
      <Texto>Por ejemplo:</Texto>
      <div class="sourceCode" id="cb17">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb17-1"><a href="#cb17-1" aria-hidden="true" tabindex="-1"></a><span class="ex">root</span>       → superusuario</span>
            <span id="cb17-2"><a href="#cb17-2" aria-hidden="true" tabindex="-1"></a><span class="ex">mysql</span>      → usuario del servicio MySQL</span>
            <span id="cb17-3"><a href="#cb17-3" aria-hidden="true" tabindex="-1"></a><span class="ex">www-data</span>   → usuario del servidor web Apache o Nginx</span>
            <span id="cb17-4"><a href="#cb17-4" aria-hidden="true" tabindex="-1"></a><span class="ex">nobody</span>     → usuario “vacío” usado por procesos sin privilegios</span></code></pre>
      </div>
      <Texto>Así, si un servicio (como un servidor web) es hackeado, el atacante
        <strong>no puede controlar todo el sistema</strong>, solo ese usuario
        limitado.
      </Texto>
      <Linea />
      <h4 id="c-control-de-dispositivos-y-permisos-especiales">c) Control de
        dispositivos y permisos especiales</h4>
      <Texto>Los grupos también controlan <strong>qué puede hacer tu usuario con
        el hardware</strong>, incluso si eres el único:</Texto>
      <Lista>
        <li><code>audio</code> → para reproducir sonido</li>
        <li><code>video</code> → para usar la cámara</li>
        <li><code>network</code> → para cambiar redes</li>
        <li><code>docker</code>, <code>kvm</code>, <code>vboxusers</code>, etc.
          → para manejar máquinas virtuales, contenedores, etc.</li>
      </Lista>
      <Texto>Si no estás en esos grupos, el sistema simplemente <strong>no te deja
        usar esos recursos</strong>.</Texto>
      <Linea />
      <h5 id="en-resumen-utilidad-de-grupos-y-usuarios">En resumen (utilidad
        de grupos y usuarios)</h5>
      <table>
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
      <Linea />
      <Titulo title="h3" id="otros">3. Otros</Titulo>
      <h4 id="cuando-creas-o-manejas-máquinas-virtuales-o-reales">1. Cuando
        creas o manejas máquinas (virtuales o reales)</h4>
      <Texto>Cada máquina (por ejemplo, una que instalas con VirtualBox, KVM o
        Docker) tiene su propio <strong>sistema Linux</strong>, y dentro de él
        <strong>todo funciona con usuarios y grupos</strong>.
      </Texto>
      <Texto>Si no los entiendes:</Texto>
      <Lista>
        <li>No sabrás <strong>por qué un programa no puede acceder a un
          archivo.</strong></li>
        <li>No podrás <strong>dar permisos</strong> a scripts, servidores o
          procesos.</li>
        <li>No entenderás <strong>por qué “root” puede hacerlo todo</strong> y
          tu usuario no.</li>
      </Lista>
      <Texto>En máquinas virtuales o servidores, <em>la seguridad y estabilidad
        dependen directamente de esos permisos.</em></Texto>
      <h4 id="en-ciberseguridad-o-administración">2. En ciberseguridad o
        administración</h4>
      <Texto>Si quieres aprender hacking ético, pentesting o proteger sistemas,
        necesitas dominar esto porque:</Texto>
      <Lista>
        <li>Los atacantes intentan <strong>escapar del usuario limitado</strong>
          (por ejemplo, <code>www-data</code>) y conseguir permisos de
          <code>root</code>.
        </li>
        <li>Los administradores deben <strong>configurar correctamente los
          grupos y permisos</strong> para que eso no sea posible.</li>
      </Lista>
      <Texto>Ejemplo: Si un servicio web corre como usuario <code>www-data</code>,
        no debería poder leer <code>/etc/shadow</code> (donde están las
        contraseñas). Ese aislamiento lo logran los <strong>usuarios y
          grupos</strong>.</Texto>
      <h4 id="en-desarrollo-o-automatización">3. En desarrollo o
        automatización</h4>
      <Texto>Cuando haces tus propias máquinas, scripts o aplicaciones:</Texto>
      <Lista>
        <li>Puedes crear <strong>usuarios específicos para cada proceso</strong>
          (por seguridad).</li>
        <li>Asignar <strong>grupos</strong> para definir qué scripts pueden
          acceder a ciertos archivos.</li>
        <li>Controlar <strong>permisos de ejecución (<code>rwx</code>)</strong>
          para evitar errores o accesos indebidos.</li>
      </Lista>
      <Texto>Ejemplo real:</Texto>
      <div class="sourceCode" id="cb18">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb18-1"><a href="#cb18-1" aria-hidden="true" tabindex="-1"></a><span class="fu">sudo</span> useradd <span class="at">-r</span> <span class="at">-s</span> /bin/false servidor_web</span></code></pre>
      </div>
      <Texto>Esto crea un usuario “de sistema” sin acceso a terminal, usado solo
        para ejecutar un servicio.</Texto>
      <h4 id="en-resumen-otros">En resumen (otros)</h4>
      <table>
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
      <Texto>En palabras simples:</Texto>
      <blockquote>
        <Texto>Si no entiendes cómo Linux maneja usuarios, grupos y permisos, nunca
          tendrás <strong>control real</strong> de una máquina. Pero cuando lo
          dominas, puedes <strong>construir, romper y proteger sistemas</strong> a
          tu gusto.</Texto>
      </blockquote>
      <Linea />
      <Texto><a href="./../readme.md#2-linux-y-bash-script">Regresar a la guía
        principal</a></Texto>
      <blockquote>
        <Texto><strong>Autor:</strong> Fravelz</Texto>
      </blockquote>
    </>
  );
}
export default nameabcd;
