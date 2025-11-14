import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../../../componentes/organismos/estructura.jsx";
import Enlace from "../../../componentes/atomos/enlace.jsx";
import Linea from "../../../componentes/atomos/linea.jsx";
import Lista from "../../../componentes/moleculas/lista.jsx";
import Texto from "../../../componentes/atomos/texto.jsx";
import Titulo from "../../../componentes/moleculas/titulo.jsx";
import { Tabla, TablaCabezera, TablaFila, TablaUnica } from "../../../componentes/moleculas/tabla.jsx";
import Codigo from "../../../componentes/moleculas/codigo.jsx";

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
            (chmod)</Enlace >
            <Lista>
              <li><Enlace href="#a-modo-simbólico">a) Modo simbólico</Enlace ></li>
              <li><Enlace href="#b-modo-numérico">b) Modo numérico</Enlace ></li>
            </Lista>
          </li>
          <li><Enlace href="#4-cambiar-dueño-o-grupo-chown-chgrp">4. Cambiar dueño o
            grupo (chown, chgrp)</Enlace ></li>
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
            archivos (chattr, lsattr)</Enlace >
            <Lista>
              <li><Enlace href="#ver-atributos">Ver atributos</Enlace ></li>
              <li><Enlace href="#cambiar-atributos-chattr">Cambiar atributos
                (chattr)</Enlace ></li>
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
        <Tabla>
  <TablaCabezera headers={["Símbolo", "Significado", "Valor"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>r</TablaUnica>
      <TablaUnica>Lectura (read)</TablaUnica>
      <TablaUnica>4</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>w</TablaUnica>
      <TablaUnica>Escritura (write)</TablaUnica>
      <TablaUnica>2</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>x</TablaUnica>
      <TablaUnica>Ejecución (execute)</TablaUnica>
      <TablaUnica>1</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
        <Titulo title="h3" id="categorías">Categorías</Titulo>
        <Tabla>
  <TablaCabezera headers={["Categoría", "Se aplica a"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>u</TablaUnica>
      <TablaUnica>Usuario propietario</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>g</TablaUnica>
      <TablaUnica>Grupo propietario</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>o</TablaUnica>
      <TablaUnica>Otros usuarios</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
        <Linea />
        <Titulo title="h2" id="2-ver-permisos">2. Ver permisos</Titulo>
        <Codigo code={`ls -l`} language="bash" />
        <Texto>Ejemplo:</Texto>
        <Codigo code={`-rwxr-xr--  1 francisco users 1234 oct 21  script.sh`} language="bash" />
        <Texto>Significado:</Texto>
        <Lista>
          <li>rwx → usuario</li>
          <li>r-x → grupo</li>
          <li>r-- → otros</li>
          <li>francisco → dueño</li>
          <li>users → grupo</li>
        </Lista>
        <Linea />
        <Titulo title="h2" id="3-cambiar-permisos-chmod">3. Cambiar permisos
          (chmod)</Titulo>
        <Titulo title="h3" id="a-modo-simbólico">a) Modo simbólico</Titulo>
        <Codigo code={`chmod u+x script.sh     # añadir ejecución al usuario
chmod g-w script.sh     # quitar escritura al grupo
chmod o=r file.txt      # solo lectura para otros
chmod a+r file.txt      # todos pueden leer`} language="bash" />
        <Titulo title="h3" id="b-modo-numérico">b) Modo numérico</Titulo>
        <Codigo code={`chmod 755 script.sh`} language="bash" />
        <Tabla>
  <TablaCabezera headers={["Valor", "Permiso", "Descripción"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>7</TablaUnica>
      <TablaUnica>rwx</TablaUnica>
      <TablaUnica>lectura, escritura, ejecución</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>6</TablaUnica>
      <TablaUnica>rw-</TablaUnica>
      <TablaUnica>lectura, escritura</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>5</TablaUnica>
      <TablaUnica>r-x</TablaUnica>
      <TablaUnica>lectura, ejecución</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>4</TablaUnica>
      <TablaUnica>r–</TablaUnica>
      <TablaUnica>solo lectura</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>0</TablaUnica>
      <TablaUnica>—</TablaUnica>
      <TablaUnica>sin permisos</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
        <Linea />
        <Titulo title="h2" id="4-cambiar-dueño-o-grupo-chown-chgrp">4. Cambiar dueño o grupo
          (chown, chgrp)</Titulo>
        <Codigo code={`chown usuario archivo
chgrp grupo archivo
chown usuario:grupo archivo`} language="bash" />
        <Texto>Ejemplo:</Texto>
        <Codigo code={`sudo chown francisco:users script.sh`} language="bash" />
        <Linea />
        <Titulo title="h2" id="5-permisos-especiales">5. Permisos especiales</Titulo>
        <Texto>Existen tres permisos especiales en Linux:</Texto>
        <Tabla>
  <TablaCabezera headers={["Bit", "Valor", "Se aplica a", "Efecto"]} />

  <tbody>
    <TablaFila>
      <TablaUnica><strong>SUID (s)</strong></TablaUnica>
      <TablaUnica>4000</TablaUnica>
      <TablaUnica>Archivos ejecutables</TablaUnica>
      <TablaUnica>Se ejecuta con permisos del dueño</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>SGID (s)</strong></TablaUnica>
      <TablaUnica>2000</TablaUnica>
      <TablaUnica>Archivos / directorios</TablaUnica>
      <TablaUnica>Hereda grupo o ejecuta con grupo del archivo</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>Sticky bit (t)</strong></TablaUnica>
      <TablaUnica>1000</TablaUnica>
      <TablaUnica>Directorios</TablaUnica>
      <TablaUnica>Solo el dueño puede borrar sus archivos</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
        <Titulo title="h3" id="sticky-bit">Sticky Bit</Titulo>
        <Texto>El <strong>sticky bit</strong> se usa en directorios <strong>para
          evitar que otros borren archivos ajenos</strong>.</Texto>
        <Codigo code={`chmod +t /tmp/publico
# o modo numérico
chmod 1777 /tmp/publico`} language="bash" />
        <Texto>Ver resultado:</Texto>
        <Codigo code={`ls -ld /tmp/publico
drwxrwxrwt  9 root root 4096 oct 21 09:00 /tmp/publico`} language="bash" />
        <Texto>drwxrwxrw**t** → el “t” final indica el sticky bit
          activo.</Texto>
        <Texto>Ejemplo típico: El directorio /tmp <strong>siempre lo
          tiene activado</strong>.</Texto>
        <Titulo title="h3" id="suid-y-sgid">SUID y SGID</Titulo>
        <h4 id="suid">SUID</h4>
        <Texto>Ejemplo:</Texto>
        <Codigo code={`ls -l /usr/bin/passwd
-rwsr-xr-x 1 root root 54256 oct 21 /usr/bin/passwd`} language="bash" />
        <Lista>
          <li>La s en lugar de la x del usuario indica
            <strong>SUID activo</strong>.
          </li>
          <li>Permite ejecutar con permisos del <strong>dueño del archivo</strong>
            (en este caso, root).</li>
        </Lista>
        <Texto>Activar o desactivar manualmente:</Texto>
        <Codigo code={`chmod u+s archivo   # activar
chmod u-s archivo   # desactivar`} language="bash" />
        <h4 id="sgid">SGID</h4>
        <Texto>En ejecutables:</Texto>
        <Codigo code={`chmod g+s archivo`} language="bash" />
        <Texto>En directorios:</Texto>
        <Codigo code={`chmod g+s carpeta/`} language="bash" />
        <Texto>Efecto:</Texto>
        <blockquote>
          <Texto>Los nuevos archivos heredan el grupo del directorio, útil para
            carpetas compartidas.</Texto>
        </blockquote>
        <Linea />
        <Titulo title="h2" id="6-atributos-de-archivos-chattr-lsattr">6. Atributos de archivos
          (chattr, lsattr)</Titulo>
        <Texto>Los <strong>atributos</strong> controlan <em>cómo</em> se comporta un
          archivo, más allá de los permisos.</Texto>
        <Titulo title="h3" id="ver-atributos">Ver atributos</Titulo>
        <Codigo code={`lsattr archivo`} language="bash" />
        <Texto>Ejemplo:</Texto>
        <Codigo code={`----i--------e-----  documento.txt`} language="bash" />
        <Titulo title="h3" id="cambiar-atributos-chattr">Cambiar atributos
          (chattr)</Titulo>
        <Texto>Hacer un archivo <strong>inmutable</strong>:</Texto>
        <Codigo code={`sudo chattr +i archivo.txt`} language="bash" />
        <Texto>Solo <strong>root</strong> puede revertirlo:</Texto>
        <Codigo code={`sudo chattr -i archivo.txt`} language="bash" />
        <Texto>Modo <strong>append-only</strong> (solo añadir contenido):</Texto>
        <Codigo code={`sudo chattr +a log.txt`} language="bash" />
        <Titulo title="h3" id="atributos-comunes">Atributos comunes</Titulo>
        <Tabla>
  <TablaCabezera headers={["Letra", "Descripción", "Uso"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>i</TablaUnica>
      <TablaUnica>Inmutable</TablaUnica>
      <TablaUnica>Proteger archivos críticos</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>a</TablaUnica>
      <TablaUnica>Solo append</TablaUnica>
      <TablaUnica>Logs o auditorías</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>c</TablaUnica>
      <TablaUnica>Comprimir</TablaUnica>
      <TablaUnica>Backups</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>d</TablaUnica>
      <TablaUnica>Excluir de dump</TablaUnica>
      <TablaUnica>Archivos temporales</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>e</TablaUnica>
      <TablaUnica>Extents (ext4)</TablaUnica>
      <TablaUnica>Normalmente activo</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>s</TablaUnica>
      <TablaUnica>Borrado seguro</TablaUnica>
      <TablaUnica>Privacidad</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>u</TablaUnica>
      <TablaUnica>Recuperable</TablaUnica>
      <TablaUnica>Auditoría</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
        <Titulo title="h3" id="ejemplo-práctico-en-script-bash">Ejemplo práctico en script
          Bash</Titulo>
        <Codigo code={`#!/bin/bash
# Proteger archivos del sistema

ARCHIVOS=("/etc/passwd" "/etc/shadow" "/etc/fstab")

for f in "$(ARCHIVOS[@])"; do
if [ -f "$f" ]; then
sudo chattr +i "$f"
echo "Protegido: $f"
fi
done

lsattr "$(ARCHIVOS[@])"`} language="bash" />
        <Linea />
        <Titulo title="h2" id="7-resumen-visual">7. Resumen visual</Titulo>
        <Tabla>
  <TablaCabezera headers={["Permiso", "Valor", "Aplica a", "Efecto"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>SUID (u+s)</TablaUnica>
      <TablaUnica>4000</TablaUnica>
      <TablaUnica>Archivos ejecutables</TablaUnica>
      <TablaUnica>Ejecuta con permisos del dueño</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>SGID (g+s)</TablaUnica>
      <TablaUnica>2000</TablaUnica>
      <TablaUnica>Archivos / carpetas</TablaUnica>
      <TablaUnica>Hereda grupo o ejecuta con grupo del archivo</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Sticky (+t)</TablaUnica>
      <TablaUnica>1000</TablaUnica>
      <TablaUnica>Directorios</TablaUnica>
      <TablaUnica>Solo el dueño puede borrar sus archivos</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Inmutable (+i)</TablaUnica>
      <TablaUnica>—</TablaUnica>
      <TablaUnica>Archivos</TablaUnica>
      <TablaUnica>No se puede modificar ni borrar</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Append-only (+a)</TablaUnica>
      <TablaUnica>—</TablaUnica>
      <TablaUnica>Archivos</TablaUnica>
      <TablaUnica>Solo se puede añadir contenido</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}
export default nameabcd;
