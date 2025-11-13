import { Tabla, TablaCabezera, TablaFila, TablaUnica } from "../../componentes/moleculas/tabla.jsx";
import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../../componentes/organismos/estructura.jsx";

import Enlace from "../../componentes/atomos/enlace.jsx";
import Linea from "../../componentes/atomos/linea.jsx";
import Lista from "../../componentes/moleculas/lista.jsx";
import Texto from "./../../componentes/atomos/texto.jsx";
import Titulo from "../../componentes/moleculas/titulo.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#directorios-del-sistema">Directorios del sistema</Enlace ></li>
      <li><Enlace href="#directorios-de-usuario">Directorios de usuario</Enlace ></li>
      <li><Enlace href="#directorios-de-programas">Directorios de
        programas</Enlace ></li>
      <li><Enlace href="#directorios-temporales-y-de-sistema-adicional">Directorios
        temporales y de sistema adicional</Enlace ></li>

    </Lista>
  );
}

function nameabcd({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" id="directorios-importantes-de-windows">Directorios Importantes de Windows</Titulo>
        <Linea />

        <TemarioCompleto temario={Temario} />

        <Titulo title="h2" id="directorios-del-sistema">Directorios del sistema</Titulo>
        <Texto>Estos contienen archivos de Windows y componentes esenciales del
          sistema operativo:</Texto>
        <Tabla>
          <TablaCabezera headers={["Directorio", "Ruta típica", "Función"]} />

          <tbody>
            <TablaFila>
              <TablaUnica><strong>Windows</strong></TablaUnica>
              <TablaUnica>C:\Windows</TablaUnica>
              <TablaUnica>Carpeta principal del sistema operativo. Contiene casi todo lo que
                Windows necesita para funcionar.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica><strong>System32</strong></TablaUnica>
              <TablaUnica>C:\Windows\System32</TablaUnica>
              <TablaUnica>Archivos críticos del sistema, DLLs, ejecutables y utilidades de
                Windows.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica><strong>SysWOW64</strong></TablaUnica>
              <TablaUnica>C:\Windows\SysWOW64</TablaUnica>
              <TablaUnica>Versiones de 32 bits de las librerías del sistema en sistemas
                Windows de 64 bits.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica><strong>WinSxS</strong></TablaUnica>
              <TablaUnica>C:\Windows\WinSxS</TablaUnica>
              <TablaUnica>Componentes del sistema y librerías para compatibilidad.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica><strong>Temp del sistema</strong></TablaUnica>
              <TablaUnica>C:\Windows\Temp</TablaUnica>
              <TablaUnica>Archivos temporales del sistema. Puede limpiarse para liberar
                espacio.</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>
        <Linea />
        <Titulo title="h2" id="directorios-de-usuario">Directorios de usuario</Titulo>
        <Texto>Contienen los datos de cada usuario y configuraciones personales:</Texto>
        <Tabla>
          <TablaCabezera headers={["Directorio", "Ruta típica", "Función"]} />

          <tbody>
            <TablaFila>
              <TablaUnica><strong>Users</strong></TablaUnica>
              <TablaUnica>C:\Users</TablaUnica>
              <TablaUnica>Carpeta raíz de los perfiles de usuario.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica><strong>Perfil del usuario</strong></TablaUnica>
              <TablaUnica>C:\Users\&lt;Usuario&gt;</TablaUnica>
              <TablaUnica>Carpeta personal de cada usuario con documentos, descargas y
                configuraciones.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica><strong>Documentos</strong></TablaUnica>
              <TablaUnica>C:\Users\&lt;Usuario&gt;\Documents</TablaUnica>
              <TablaUnica>Documentos y archivos del usuario.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica><strong>Descargas</strong></TablaUnica>
              <TablaUnica>C:\Users\&lt;Usuario&gt;\Downloads</TablaUnica>
              <TablaUnica>Archivos descargados de Internet.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica><strong>Escritorio</strong></TablaUnica>
              <TablaUnica>C:\Users\&lt;Usuario&gt;\Desktop</TablaUnica>
              <TablaUnica>Archivos y accesos directos visibles en el escritorio.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica><strong>AppData</strong></TablaUnica>
              <TablaUnica>C:\Users\&lt;Usuario&gt;\AppData</TablaUnica>
              <TablaUnica>Archivos de configuración y datos de aplicaciones. Subcarpetas:
                Local, LocalLow, Roaming.</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>
        <Linea />
        <Titulo title="h2" id="directorios-de-programas">Directorios de programas</Titulo>
        <Texto>Donde se instalan las aplicaciones:</Texto>
        <Tabla>
          <TablaCabezera headers={["Directorio", "Ruta típica", "Función"]} />

          <tbody>
            <TablaFila>
              <TablaUnica><strong>Archivos de programa (64 bits)</strong></TablaUnica>
              <TablaUnica>C:\Program Files</TablaUnica>
              <TablaUnica>Instalaciones de aplicaciones de 64 bits.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica><strong>Archivos de programa (32 bits)</strong></TablaUnica>
              <TablaUnica>C:\Program Files (x86)</TablaUnica>
              <TablaUnica>Instalaciones de aplicaciones de 32 bits en sistemas de 64
                bits.</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>
        <Linea />
        <Titulo title="h2" id="directorios-temporales-y-de-sistema-adicional">Directorios
          temporales y de sistema adicional</Titulo>
        <Lista>
          <li><strong>Temp del usuario</strong>:
            C:\Users\&lt;Usuario&gt;\AppData\Local\Temp → Archivos
            temporales de programas.
          </li>    <li><strong>Prefetch</strong>: C:\Windows\Prefetch →
            Optimización de arranque y ejecución de programas.</li>    <li><strong>Recycle Bin</strong>: C:\$Recycle.Bin →
              Papelera de reciclaje.</li>  </Lista>
        <Linea />
        <Titulo title="h2" id="tips">Tips</Titulo>
        <Lista>
          <li>Nunca elimines carpetas como System32 o
            WinSxS.
          </li>    <li>AppData y Temp se pueden limpiar con
            cuidado para liberar espacio.</li>  </Lista>
      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}
export default nameabcd;
