import Enlace from "../../../componentes/atomos/enlace.jsx";
import Linea from "../../../componentes/atomos/linea.jsx";
import Lista from "../../../componentes/moleculas/lista.jsx";
import Texto from "./../../../componentes/atomos/texto.jsx";
import Titulo from "../../../componentes/moleculas/titulo.jsx";
import { Tabla, TablaCabezera, TablaFila, TablaUnica } from "../../../componentes/moleculas/tabla.jsx";
import Codigo from "../../../componentes/moleculas/codigo.jsx";

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
              (os.path)</Enlace >
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
      <Texto>El módulo <strong>os</strong> (Operating System) permite
        <strong>interactuar directamente con el sistema operativo</strong>:
        manejar archivos, carpetas, variables de entorno, procesos, permisos,
        rutas, y más.
      </Texto>
      <Texto>Se importa así:</Texto>
      <Codigo code={`import os`} language="python" />
      <Linea />
      <Titulo title="h2" id="manejo-de-directorios">1. Manejo de directorios</Titulo>
      <Titulo title="h3" id="ver-el-directorio-actual">Ver el directorio actual</Titulo>
      <Codigo code={`print(os.getcwd())  # get current working directory`} language="python" />
      <Titulo title="h3" id="cambiar-de-directorio">Cambiar de directorio</Titulo>
      <Codigo code={`os.chdir("/home/fravelz/Documentos")`} language="python" />
      <Titulo title="h3" id="listar-archivos-y-carpetas">Listar archivos y carpetas</Titulo>
      <Codigo code={`archivos = os.listdir(".")
print(archivos)`} language="python" />
      <Titulo title="h3" id="crear-y-eliminar-carpetas">Crear y eliminar carpetas</Titulo>
      <Codigo code={`os.mkdir("nueva_carpeta")        # Crear una carpeta
os.makedirs("a/b/c", exist_ok=True)  # Crear carpetas anidadas

os.rmdir("nueva_carpeta")        # Eliminar carpeta vacía
os.removedirs("a/b/c")           # Eliminar jerarquía vacía`} language="python" />
      <Linea />
      <Titulo title="h2" id="manejo-de-archivos">2. Manejo de archivos</Titulo>
      <Titulo title="h3" id="eliminar-archivos">Eliminar archivos</Titulo>
      <Codigo code={`os.remove("archivo.txt")`} language="python" />
      <Titulo title="h3" id="renombrar-o-mover">Renombrar o mover</Titulo>
      <Codigo code={`os.rename("viejo.txt", "nuevo.txt")`} language="python" />
      <Linea />
      <Titulo title="h2" id="trabajar-con-rutas-os.path">3. Trabajar con rutas
        (os.path)</Titulo>
      <Titulo title="h3" id="unir-rutas-correctamente-independiente-del-sistema">Unir rutas
        correctamente (independiente del sistema)</Titulo>
      <Codigo code={`ruta = os.path.join("/home/fravelz", "Documentos", "archivo.txt")
print(ruta)`} language="python" />
      <Titulo title="h3" id="obtener-el-nombre-o-carpeta-base">Obtener el nombre o carpeta
        base</Titulo>
      <Codigo code={`print(os.path.basename("/home/fravelz/archivo.txt"))  # archivo.txt
print(os.path.dirname("/home/fravelz/archivo.txt"))   # /home/fravelz`} language="python" />
      <Titulo title="h3" id="comprobar-existencia">Comprobar existencia</Titulo>
      <Codigo code={`print(os.path.exists("archivo.txt"))  # True o False
print(os.path.isfile("archivo.txt"))  # True si es archivo
print(os.path.isdir("carpeta"))       # True si es carpeta`} language="python" />
      <Linea />
      <Titulo title="h2" id="variables-de-entorno">4. Variables de entorno</Titulo>
      <Titulo title="h3" id="ver-todas-las-variables-del-sistema">Ver todas las variables del
        sistema</Titulo>
      <Codigo code={`print(os.environ)`} language="python" />
      <Titulo title="h3" id="obtener-una-variable-específica">Obtener una variable
        específica</Titulo>
      <Codigo code={`usuario = os.getenv("USER")  # En Linux/Mac
print(usuario)`} language="python" />
      <Titulo title="h3" id="crear-o-modificar-una-variable-de-entorno">Crear o modificar una
        variable de entorno</Titulo>
      <Codigo code={`os.environ["MI_VARIABLE"] = "1234"`} language="python" />
      <Linea />
      <Titulo title="h2" id="ejecutar-comandos-del-sistema">5. Ejecutar comandos del
        sistema</Titulo>
      <Codigo code={`os.system("ls")     # Linux/Mac
os.system("dir")    # Windows`} language="python" />
      <Texto>Ejemplo útil:</Texto>
      <Codigo code={`os.system("ping google.com -c 2")`} language="python" />
      <Texto>👉 Sí quieres más control (por ejemplo, capturar la salida del
        comando), es mejor usar el módulo subprocess.</Texto>
      <Linea />
      <Titulo title="h2" id="permisos-y-propiedades">6. Permisos y propiedades</Titulo>
      <Codigo code={`os.chmod("archivo.txt", 0o777)  # Dar todos los permisos
print(os.stat("archivo.txt"))   # Ver información (tamaño, permisos, etc.)`} language="python" />
      <Linea />
      <Titulo title="h2" id="ejemplo-práctico">7. Ejemplo práctico</Titulo>
      <Texto>Este script organiza los archivos de una carpeta en subcarpetas por
        tipo:</Texto>
      <Codigo code={`import os
import shutil

ruta = "/home/fravelz/Descargas"

for archivo in os.listdir(ruta):
ruta_completa = os.path.join(ruta, archivo)

if os.path.isfile(ruta_completa):
extension = archivo.split(".")[-1]
carpeta = os.path.join(ruta, extension.upper())
os.makedirs(carpeta, exist_ok=True)
shutil.move(ruta_completa, os.path.join(carpeta, archivo))`} language="python" />
      <Texto>📦 Sí tienes archivos .png, .mp3,
        .pdf, los moverá a carpetas “PNG”, “MP3”, “PDF”, etc.
      </Texto>
      <Linea />
      <Titulo title="h2" id="combinación-con-otros-módulos">8. Combinación con otros
        módulos</Titulo>
      <Lista>
        <li>os + shutil → mover/copiar archivos.</li>
        <li>os + sys → detectar sistema operativo
          (sys.platform).</li>
        <li>os + subprocess → ejecutar comandos con control
          total.</li>
      </Lista>
      <Linea />
      <Titulo title="h2" id="ejemplo-crear-un-script-portable">9. Ejemplo: crear un script
        portable</Titulo>
      <Codigo code={`import os
import platform

def limpiar_pantalla():
comando = "cls" if platform.system() == "Windows" else "clear"
os.system(comando)

limpiar_pantalla()
print("Pantalla limpia 😎")`} language="python" />
      <Linea />
      <Titulo title="h2" id="resumen-de-funciones-más-útiles">10. Resumen de funciones más
        útiles</Titulo>
      <Tabla>
  <TablaCabezera headers={["Categoría", "Función", "Descripción"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>Directorios</TablaUnica>
      <TablaUnica>os.getcwd()</TablaUnica>
      <TablaUnica>Directorio actual</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica></TablaUnica>
      <TablaUnica>os.chdir()</TablaUnica>
      <TablaUnica>Cambiar directorio</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica></TablaUnica>
      <TablaUnica>os.listdir()</TablaUnica>
      <TablaUnica>Listar contenido</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Archivos</TablaUnica>
      <TablaUnica>os.remove()</TablaUnica>
      <TablaUnica>Eliminar archivo</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica></TablaUnica>
      <TablaUnica>os.rename()</TablaUnica>
      <TablaUnica>Renombrar/mover</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Carpetas</TablaUnica>
      <TablaUnica>os.mkdir()</TablaUnica>
      <TablaUnica>Crear carpeta</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica></TablaUnica>
      <TablaUnica>os.rmdir()</TablaUnica>
      <TablaUnica>Eliminar carpeta vacía</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Rutas</TablaUnica>
      <TablaUnica>os.path.join()</TablaUnica>
      <TablaUnica>Unir rutas</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica></TablaUnica>
      <TablaUnica>os.path.exists()</TablaUnica>
      <TablaUnica>Verificar existencia</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Sistema</TablaUnica>
      <TablaUnica>os.system()</TablaUnica>
      <TablaUnica>Ejecutar comando</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Entorno</TablaUnica>
      <TablaUnica>os.getenv()</TablaUnica>
      <TablaUnica>Leer variable</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica></TablaUnica>
      <TablaUnica>os.environ</TablaUnica>
      <TablaUnica>Acceder/editar variables</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
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
