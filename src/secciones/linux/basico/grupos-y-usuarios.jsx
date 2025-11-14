import Enlace from "../../../componentes/atomos/enlace.jsx";
import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../../../componentes/organismos/estructura.jsx";
import Linea from "../../../componentes/atomos/linea.jsx";
import Lista from "../../../componentes/moleculas/lista.jsx";
import Texto from "../../../componentes/atomos/texto.jsx";
import Titulo from "../../../componentes/moleculas/titulo.jsx";
import { Tabla, TablaCabezera, TablaFila, TablaUnica } from "../../../componentes/moleculas/tabla.jsx";
import Codigo from "../../../componentes/moleculas/codigo.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#1-gestión-de-usuarios">1. Gestión de usuarios</Enlace >
        <Lista>
          <li><Enlace href="#useradd-vs-adduser">useradd vs
            adduser</Enlace >
            <Lista>
              <li><Enlace href="#1-useradd-programa-básico-del-sistema">1.
                useradd (programa básico del sistema)</Enlace ></li>
              <li><Enlace href="#2-adduser-script-de-alto-nivel">2. adduser
                (script de alto nivel)</Enlace ></li>
              <li><Enlace href="#comparación-directa">Comparación directa</Enlace ></li>
              <li><Enlace href="#en-resumen-gestión-de-usuarios">En resumen (gestión de
                usuarios)</Enlace ></li>
            </Lista>
          </li>
        </Lista>
      </li>
      <li><Enlace href="#2-grupos">2. Grupos</Enlace >
        <Lista>
          <li><Enlace href="#gestión-de-grupos">Gestión de grupos</Enlace ></li>
          <li><Enlace href="#qué-es-un-grupo-en-linux">¿Qué es un grupo en
            Linux?</Enlace ></li>
          <li><Enlace href="#ejemplo-simple">Ejemplo simple</Enlace ></li>
          <li><Enlace href="#cada-usuario-tiene">Cada usuario tiene</Enlace ></li>
          <li><Enlace href="#ver-los-grupos-de-un-usuario">Ver los grupos de un
            usuario</Enlace ></li>
          <li><Enlace href="#archivos-donde-se-guardan-los-grupos">Archivos donde se
            guardan los grupos</Enlace ></li>
          <li><Enlace href="#en-resumen-gestión-de-grupos">En resumen (gestión de
            grupos)</Enlace ></li>
        </Lista>
      </li>
      <li><Enlace href="#3-archivos-importantes-del-sistema">3. Archivos
        importantes del sistema</Enlace ></li>
      <li><Enlace href="#4-ejemplos-prácticos-comunes">4. Ejemplos prácticos
        comunes</Enlace ></li>
      <li><Enlace href="#utilidad-de-grupos-y-usuarios">Utilidad de grupos y
        usuarios</Enlace >
        <Lista>
          <li><Enlace href="#1-cuando-hay-varios-usuarios">1. Cuando hay varios
            usuarios</Enlace ></li>
          <li><Enlace href="#2-cuando-eres-el-único-usuario">2. Cuando eres el único
            usuario</Enlace >
            <Lista>
              <li><Enlace href="#a-seguridad-interna">a) Seguridad interna</Enlace ></li>
              <li><Enlace href="#b-servicios-y-procesos-del-sistema">b) Servicios y
                procesos del sistema</Enlace ></li>
              <li><Enlace href="#c-control-de-dispositivos-y-permisos-especiales">c)
                Control de dispositivos y permisos especiales</Enlace >
                <li><Enlace href="#en-resumen-utilidad-de-grupos-y-usuarios">En resumen
                  (utilidad de grupos y usuarios)</Enlace ></li>
              </li>
            </Lista>
          </li>
          <li><Enlace href="#3-otros">3. Otros</Enlace >
            <Lista>
              <li><Enlace href="#1-cuando-creas-o-manejas-máquinas-virtuales-o-reales">1.
                Cuando creas o manejas máquinas (virtuales o reales)</Enlace ></li>
              <li><Enlace href="#2-en-ciberseguridad-o-administración">2. En ciberseguridad
                o administración</Enlace ></li>
              <li><Enlace href="#3-en-desarrollo-o-automatización">3. En desarrollo o
                automatización</Enlace ></li>
              <li><Enlace href="#en-resumen-otros">En resumen (otros)</Enlace ></li>
            </Lista>
          </li>
        </Lista>
      </li>
    </Lista>
  );
}

function nameabcd({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" id="grupos-y-usuarios">Grupos y Usuarios</Titulo>

        <Linea />

        <TemarioCompleto temario={Temario} />

        <Titulo title="h2" id="1-gestión-de-usuarios">1. Gestión de usuarios</Titulo>
        <Tabla>
          <TablaCabezera headers={["Comando", "Descripción", "Ejemplo"]} />

          <tbody>
            <TablaFila>
              <TablaUnica>useradd</TablaUnica>
              <TablaUnica>Crea un nuevo usuario.</TablaUnica>
              <TablaUnica>sudo useradd francisco</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>adduser</TablaUnica>
              <TablaUnica>Variante más amigable de useradd (usa asistentes).</TablaUnica>
              <TablaUnica>sudo adduser francisco</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>passwd</TablaUnica>
              <TablaUnica>Asigna o cambia la contraseña de un usuario.</TablaUnica>
              <TablaUnica>sudo passwd francisco</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>usermod</TablaUnica>
              <TablaUnica>Modifica las propiedades de un usuario existente.</TablaUnica>
              <TablaUnica>sudo usermod -aG sudo francisco (añadir a grupo
                sudo)</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>userdel</TablaUnica>
              <TablaUnica>Elimina un usuario (sin borrar su carpeta personal).</TablaUnica>
              <TablaUnica>sudo userdel francisco</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>sudo userdel -r</TablaUnica>
              <TablaUnica>Elimina un usuario y <strong>su directorio home</strong>.</TablaUnica>
              <TablaUnica>sudo userdel -r francisco</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>id</TablaUnica>
              <TablaUnica>Muestra el ID del usuario y sus grupos.</TablaUnica>
              <TablaUnica>id francisco</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>whoami</TablaUnica>
              <TablaUnica>Muestra el nombre del usuario actual.</TablaUnica>
              <TablaUnica>whoami</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>su</TablaUnica>
              <TablaUnica>Cambia de usuario (abre una sesión de otro usuario).</TablaUnica>
              <TablaUnica>su francisco</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>sudo</TablaUnica>
              <TablaUnica>Ejecuta un comando como superusuario o con privilegios
                elevados.</TablaUnica>
              <TablaUnica>sudo apt update</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>
        <Titulo title="h3" id="useradd-vs-adduser">useradd vs
          adduser
        </Titulo>
        <Titulo title="h3" id="1-useradd-programa-básico-del-sistema">1. useradd
          (programa básico del sistema)</Titulo>
        <Lista>
          <li>Es el <strong>comando original</strong> de bajo nivel de Linux para
            crear usuarios.</li>
          <li>Pertenece al paquete <strong>passwd</strong> o
            <strong>shadow</strong> (dependiendo de la distro).
          </li>
          <li>No crea automáticamente todo lo necesario (por ejemplo, la carpeta
            personal).</li>
          <li>Solo ejecuta <strong>una instrucción directa al sistema</strong>,
            sin preguntar nada.</li>
          <li>Se usa mucho en <strong>scripts o administración
            avanzada</strong>.</li>
        </Lista>
        <Texto><strong>Ejemplo:</strong></Texto>
        <Codigo code={`sudo useradd francisco`} language="bash" />
        <Texto>Esto <strong>solo</strong> crea la entrada en
          /etc/passwd, pero:
        </Texto>
        <Lista>
          <li>No crea /home/francisco</li>
          <li>No copia archivos de configuración por defecto
            (.bashrc, etc.)</li>
          <li>No asigna contraseña</li>
        </Lista>
        <Texto>Tendrías que hacer todo manualmente:</Texto>
        <Codigo code={`sudo mkdir /home/francisco
sudo cp -r /etc/skel/. /home/francisco
sudo chown -R francisco:francisco /home/francisco
sudo passwd francisco`} language="bash" />
        <Titulo title="h3" id="2-adduser-script-de-alto-nivel">2. adduser (script de
          alto nivel)</Titulo>

        <Lista>
          <li>Es un <strong>script en Perl</strong> que usa internamente
            useradd, pero con <strong>asistentes
              interactivos</strong>.
          </li>

          <li><strong>Crea automáticamente:</strong></li>

          <Lista>
            <li>Carpeta personal (/home/usuario)</li>
            <li>Archivos de configuración inicial</li>
            <li>Grupo con el mismo nombre</li>
            <li>Permisos correctos</li>
            <li>Pide la contraseña y otros datos de forma interactiva</li>
          </Lista>
          <li>
            Está pensado para <strong>uso cotidiano y comodidad del
              administrador</strong>
          </li>
        </Lista>

        <Texto><strong>Ejemplo:</strong></Texto>
        <Codigo code={`sudo adduser francisco`} language="bash" />
        <Texto>Esto:</Texto>
        <Lista>
          <li>Crea /home/francisco</li>
          <li>Crea el grupo francisco</li>
          <li>Copia los archivos de /etc/skel</li>
          <li>Asigna contraseña (te la pide)</li>
          <li>Te deja todo listo en un paso</li>
        </Lista>
        <Titulo title="h3" id="comparación-directa">Comparación directa</Titulo>
        <Tabla>
          <TablaCabezera headers={["Característica", "useradd", "adduser"]} />

          <tbody>
            <TablaFila>
              <TablaUnica>Tipo de programa</TablaUnica>
              <TablaUnica>Binario del sistema</TablaUnica>
              <TablaUnica>Script en Perl</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Nivel</TablaUnica>
              <TablaUnica>Bajo nivel (más técnico)</TablaUnica>
              <TablaUnica>Alto nivel (más amigable)</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Interactivo</TablaUnica>
              <TablaUnica>❌ No</TablaUnica>
              <TablaUnica>✅ Sí</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Crea carpeta /home automáticamente</TablaUnica>
              <TablaUnica>❌ No (debes usar -m)</TablaUnica>
              <TablaUnica>✅ Sí</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Crea grupo automáticamente</TablaUnica>
              <TablaUnica>❌ No (debes usar -g)</TablaUnica>
              <TablaUnica>✅ Sí</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Solicita contraseña</TablaUnica>
              <TablaUnica>❌ No</TablaUnica>
              <TablaUnica>✅ Sí</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Ideal para</TablaUnica>
              <TablaUnica>Scripts, automatización, distros minimalistas</TablaUnica>
              <TablaUnica>Uso diario, administración sencilla</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>
        <Titulo title="h3" id="en-resumen-gestión-de-usuarios">En resumen (gestión de
          usuarios)</Titulo>
        <Lista>
          <li>Usa <strong>adduser</strong> cuando creas usuarios
            manualmente (más seguro y rápido).</li>
          <li>Usa <strong>useradd</strong> en <strong>scripts o
            configuraciones personalizadas</strong>, donde controlas cada
            detalle.</li>
        </Lista>
        <Linea />
        <Titulo title="h2" id="2-grupos">2. Grupos</Titulo>
        <Titulo title="h3" id="gestión-de-grupos">Gestión de grupos</Titulo>
        <Tabla>
          <TablaCabezera headers={["Comando", "Descripción", "Ejemplo"]} />

          <tbody>
            <TablaFila>
              <TablaUnica>groupadd</TablaUnica>
              <TablaUnica>Crea un nuevo grupo.</TablaUnica>
              <TablaUnica>sudo groupadd desarrolladores</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>groupdel</TablaUnica>
              <TablaUnica>Elimina un grupo.</TablaUnica>
              <TablaUnica>sudo groupdel desarrolladores</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>usermod -aG</TablaUnica>
              <TablaUnica>Añade un usuario a un grupo.</TablaUnica>
              <TablaUnica>sudo usermod -aG desarrolladores francisco</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>gpasswd -d</TablaUnica>
              <TablaUnica>Elimina un usuario de un grupo.</TablaUnica>
              <TablaUnica>sudo gpasswd -d francisco desarrolladores</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>groups</TablaUnica>
              <TablaUnica>Muestra los grupos a los que pertenece un usuario.</TablaUnica>
              <TablaUnica>groups francisco</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>newgrp</TablaUnica>
              <TablaUnica>Cambia temporalmente el grupo activo en la sesión.</TablaUnica>
              <TablaUnica>newgrp desarrolladores</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>
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
        <Codigo code={`juan
maria
pedro`} language="bash" />
        <Texto>Y quieres que <strong>solo juan y maria puedan entrar</strong> a una
          carpeta llamada /proyecto.</Texto>
        <Texto>En lugar de dar permisos a cada uno individualmente, puedes crear un
          grupo:</Texto>
        <Codigo code={`sudo groupadd proyecto`} language="bash" />
        <Texto>Luego agregas a los usuarios al grupo:</Texto>
        <Codigo code={`sudo usermod -aG proyecto juan
sudo usermod -aG proyecto maria`} language="bash" />
        <Texto>Después haces que la carpeta pertenezca a ese grupo:</Texto>
        <Codigo code={`sudo chown :proyecto /proyecto`} language="bash" />
        <Texto>Y le das permisos solo al grupo:</Texto>
        <Codigo code={`sudo chmod 770 /proyecto`} language="bash" />
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
            francisco pertenece al grupo
            francisco.
          </li>    <li>
            <Texto><strong>Grupos secundarios (suplementarios):</strong> Son grupos
              extra a los que puede pertenecer. Ejemplo:</Texto>
            <Codigo code={`sudo usermod -aG sudo,video,audio francisco`} language="bash" />
            <Texto>Aquí el usuario pertenece a los grupos:</Texto>
            <Lista>
              <li>sudo → puede usar comandos como administrador</li>
              <li>video → puede acceder a la cámara o GPU</li>
              <li>audio → puede usar el micrófono o altavoces</li>
            </Lista>
          </li>
        </ol>
        <Titulo title="h3" id="ver-los-grupos-de-un-usuario">Ver los grupos de un usuario</Titulo>
        <Codigo code={`groups francisco`} language="bash" />
        <Texto>Salida posible:</Texto>
        <Codigo code={`francisco : francisco sudo video audio`} language="bash" />
        <Titulo title="h3" id="archivos-donde-se-guardan-los-grupos">Archivos donde se guardan
          los grupos</Titulo>
        <Lista>
          <li>
            /etc/group → lista todos los grupos del sistema.
            Ejemplo de líneas:
            <Codigo code={`root:x:0:
sudo:x:27:francisco
proyecto:x:1002:juan,maria`} language="bash" />
          </li>
        </Lista>
        <Titulo title="h3" id="en-resumen-gestión-de-grupos">En resumen (gestión de
          grupos)</Titulo>
        <Tabla>
          <TablaCabezera headers={["Concepto", "Significado"]} />

          <tbody>
            <TablaFila>
              <TablaUnica><strong>Grupo</strong></TablaUnica>
              <TablaUnica>Conjunto de usuarios que comparten permisos.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica><strong>Grupo primario</strong></TablaUnica>
              <TablaUnica>Grupo principal que tiene cada usuario por defecto.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica><strong>Grupos secundarios</strong></TablaUnica>
              <TablaUnica>Otros grupos a los que el usuario pertenece.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica><strong>Ventaja</strong></TablaUnica>
              <TablaUnica>Facilita administrar permisos a varios usuarios a la vez.</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>
        <Linea />
        <Titulo title="h2" id="3-archivos-importantes-del-sistema">3. Archivos importantes del
          sistema</Titulo>
        <Tabla>
          <TablaCabezera headers={["Archivo", "Contiene"]} />

          <tbody>
            <TablaFila>
              <TablaUnica>/etc/passwd</TablaUnica>
              <TablaUnica>Información básica de todos los usuarios.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>/etc/shadow</TablaUnica>
              <TablaUnica>Contraseñas cifradas de los usuarios.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>/etc/group</TablaUnica>
              <TablaUnica>Información sobre los grupos del sistema.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>/etc/sudoers</TablaUnica>
              <TablaUnica>Usuarios que tienen permisos de superusuario (editado con
                visudo).</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>
        <Linea />
        <Titulo title="h2" id="4-ejemplos-prácticos-comunes">4. Ejemplos prácticos comunes</Titulo>
        <Lista>
          <li>
            <strong>Crear un usuario con carpeta personal y shell
              bash:</strong>
            <Codigo code={`sudo useradd -m -s /bin/bash francisco`} language="bash" />
          </li>
          <li>
            <strong>Cambiar nombre de usuario:</strong>
            <Codigo code={`sudo usermod -l nuevo_nombre francisco`} language="bash" />
          </li>
          <li>
            <strong>Bloquear/desbloquear usuario:</strong>
            <Codigo code={`sudo usermod -L francisco    # Bloquear
sudo usermod -U francisco    # Desbloquear`} language="bash" />
          </li>
          <li>
            <strong>Ver todos los usuarios del sistema:</strong>
            <Codigo code={`cut -d: -f1 /etc/passwd`} language="bash" />
          </li>
        </Lista>
        <Linea />
        <Titulo title="h2" id="utilidad-de-grupos-y-usuarios">Utilidad de grupos y
          usuarios</Titulo>
        <Titulo title="h3" id="1-cuando-hay-varios-usuarios">1. Cuando hay varios usuarios</Titulo>
        <Texto>Ahí es donde <strong>más se nota su función</strong>.</Texto>
        <Texto>Ejemplo: En un servidor o una universidad, hay muchos usuarios
          distintos:</Texto>
        <Lista>
          <li>Cada uno tiene su cuenta (/home/juan,
            /home/maria, etc.)
          </li>
          <li>Cada uno solo puede entrar a su carpeta</li>
          <li>Los administradores (grupo sudo) pueden cambiar
            configuraciones del sistema</li>
          <li>Otros grupos controlan quién puede acceder a redes, dispositivos
            USB, cámaras, etc.</li>
        </Lista>
        <Texto>Así, Linux mantiene la <strong>seguridad y el orden</strong> entre
          todos los usuarios.</Texto>
        <Linea />
        <Titulo title="h3" id="2-cuando-eres-el-único-usuario">2. Cuando eres el único
          usuario</Titulo>
        <Texto>Incluso así, <strong>sigue siendo muy útil</strong> por estas
          razones:</Texto>
        <Titulo title="h3" id="a-seguridad-interna">a) Seguridad interna</Titulo>
        <Lista>
          <li>El sistema separa procesos y permisos por usuario.</li>
          <li>Ejemplo: sí un programa malicioso se ejecuta como “usuario normal”,
            <strong>no puede dañar el sistema</strong>, porque no tiene permisos de
            administrador.
          </li>
        </Lista>
        <Texto>Tú usuario normal pertenece a su propio grupo (por ejemplo,
          francisco:francisco), y no puede tocar archivos del sistema
          (/etc, /usr, etc.) sin usar
          sudo.
        </Texto>
        <Linea />
        <Titulo title="h3" id="b-servicios-y-procesos-del-sistema">b) Servicios y procesos del
          sistema</Titulo>
        <Texto>Linux trata <strong>cada servicio como sí fuera un usuario
          separado</strong> para aislarlos.</Texto>
        <Texto>Por ejemplo:</Texto>
        <Codigo code={`root       → superusuario
mysql      → usuario del servicio MySQL
www-data   → usuario del servidor web Apache o Nginx
nobody     → usuario “vacío” usado por procesos sin privilegios`} language="bash" />
        <Texto>Así, sí un servicio (como un servidor web) es hackeado, el atacante
          <strong>no puede controlar todo el sistema</strong>, solo ese usuario
          limitado.
        </Texto>
        <Linea />
        <Titulo title="h3" id="c-control-de-dispositivos-y-permisos-especiales">c) Control de
          dispositivos y permisos especiales</Titulo>
        <Texto>Los grupos también controlan <strong>qué puede hacer tú usuario con
          el hardware</strong>, incluso sí eres el único:</Texto>
        <Lista>
          <li>audio → para reproducir sonido</li>
          <li>video → para usar la cámara</li>
          <li>network → para cambiar redes</li>
          <li>docker, kvm, vboxusers, etc.
            → para manejar máquinas virtuales, contenedores, etc.</li>
        </Lista>
        <Texto>Sí no estás en esos grupos, el sistema simplemente <strong>no te deja
          usar esos recursos</strong>.</Texto>
        <Linea />
        <h5 id="en-resumen-utilidad-de-grupos-y-usuarios">En resumen (utilidad
          de grupos y usuarios)</h5>
        <Tabla>
          <TablaCabezera headers={["Situación", "¿Por qué sirven usuarios y grupos?"]} />

          <tbody>
            <TablaFila>
              <TablaUnica>Varios usuarios en un PC</TablaUnica>
              <TablaUnica>Controlan el acceso y los permisos entre personas distintas.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Solo un usuario en el PC</TablaUnica>
              <TablaUnica>Protegen el sistema, los servicios y los recursos del hardware.</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>
        <Linea />
        <Titulo title="h3" id="3-otros">3. Otros</Titulo>
        <Titulo title="h3" id="1-cuando-creas-o-manejas-máquinas-virtuales-o-reales">1. Cuando
          creas o manejas máquinas (virtuales o reales)</Titulo>
        <Texto>Cada máquina (por ejemplo, una que instalas con VirtualBox, KVM o
          Docker) tiene su propio <strong>sistema Linux</strong>, y dentro de él
          <strong>todo funciona con usuarios y grupos</strong>.
        </Texto>
        <Texto>Sí no los entiendes:</Texto>
        <Lista>
          <li>No sabrás <strong>por qué un programa no puede acceder a un
            archivo.</strong></li>
          <li>No podrás <strong>dar permisos</strong> a scripts, servidores o
            procesos.</li>
          <li>No entenderás <strong>por qué “root” puede hacerlo todo</strong> y
            tú usuario no.</li>
        </Lista>
        <Texto>En máquinas virtuales o servidores, <em>la seguridad y estabilidad
          dependen directamente de esos permisos.</em></Texto>
        <Titulo title="h3" id="2-en-ciberseguridad-o-administración">2. En ciberseguridad o
          administración</Titulo>
        <Texto>Sí quieres aprender hacking ético, pentesting o proteger sistemas,
          necesitas dominar esto porque:</Texto>
        <Lista>
          <li>Los atacantes intentan <strong>escapar del usuario limitado</strong>
            (por ejemplo, www-data) y conseguir permisos de
            root.
          </li>
          <li>Los administradores deben <strong>configurar correctamente los
            grupos y permisos</strong> para que eso no sea posible.</li>
        </Lista>
        <Texto>Ejemplo: Sí un servicio web corre como usuario www-data,
          no debería poder leer /etc/shadow (donde están las
          contraseñas). Ese aislamiento lo logran los <strong>usuarios y
            grupos</strong>.</Texto>
        <Titulo title="h3" id="3-en-desarrollo-o-automatización">3. En desarrollo o
          automatización</Titulo>
        <Texto>Cuando haces tus propias máquinas, scripts o aplicaciones:</Texto>
        <Lista>
          <li>Puedes crear <strong>usuarios específicos para cada proceso</strong>
            (por seguridad).</li>
          <li>Asignar <strong>grupos</strong> para definir qué scripts pueden
            acceder a ciertos archivos.</li>
          <li>Controlar <strong>permisos de ejecución (rwx)</strong>
            para evitar errores o accesos indebidos.</li>
        </Lista>
        <Texto>Ejemplo real:</Texto>
        <Codigo code={`sudo useradd -r -s /bin/false servidor_web`} language="bash" />
        <Texto>Esto crea un usuario “de sistema” sin acceso a terminal, usado solo
          para ejecutar un servicio.</Texto>
        <Titulo title="h3" id="en-resumen-otros">En resumen (otros)</Titulo>
        <Tabla>
          <TablaCabezera headers={["Área", "¿Por qué es importante manejar usuarios y grupos?"]} />

          <tbody>
            <TablaFila>
              <TablaUnica><strong>Ciberseguridad</strong></TablaUnica>
              <TablaUnica>Aísla procesos, evita escaladas de privilegios.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica><strong>Sistemas / servidores</strong></TablaUnica>
              <TablaUnica>Controla accesos, protege servicios.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica><strong>Programación / DevOps</strong></TablaUnica>
              <TablaUnica>Permite ejecutar procesos con seguridad.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica><strong>Máquinas virtuales / contenedores</strong></TablaUnica>
              <TablaUnica>Cada entorno tiene sus propios usuarios y permisos.</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>
        <Texto>En palabras simples:</Texto>
        <blockquote>
          <Texto>Sí no entiendes cómo Linux maneja usuarios, grupos y permisos, nunca
            tendrás <strong>control real</strong> de una máquina. Pero cuando lo
            dominas, puedes <strong>construir, romper y proteger sistemas</strong> a
            tú gusto.</Texto>
        </blockquote>
      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}

export default nameabcd;
