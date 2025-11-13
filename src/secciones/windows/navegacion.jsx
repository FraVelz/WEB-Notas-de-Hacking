import Enlace from "../../componentes/atomos/enlace.jsx";
import Linea from "../../componentes/atomos/linea.jsx";
import Lista from "../../componentes/moleculas/lista.jsx";
import Texto from "./../../componentes/atomos/texto.jsx";
import Titulo from "../../componentes/moleculas/titulo.jsx";
import { Tabla, TablaCabezera, TablaFila, TablaUnica } from "../../componentes/moleculas/tabla.jsx";
import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../../componentes/organismos/estructura.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
            <li><Enlace href="#1-windows-cmd-command-prompt">1. Windows CMD (Command
              Prompt)</Enlace >
              <Lista>
                <li><Enlace href="#navegación-por-directorios">Navegación por
                  directorios</Enlace ></li>
                <li><Enlace href="#gestión-de-archivos">Gestión de archivos</Enlace ></li>
                <li><Enlace href="#gestión-de-carpetas">Gestión de carpetas</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#2-powershell-cmdlets">2. PowerShell (cmdlets)</Enlace >
              <Lista>
                <li><Enlace href="#navegación-por-directorios-cmdlets">Navegación por
                  directorios (cmdlets)</Enlace ></li>
                <li><Enlace href="#gestión-de-archivos-cmdlets">Gestión de archivos
                  (cmdlets)</Enlace ></li>
                <li><Enlace href="#gestión-de-carpetas-cmdlets">Gestión de carpetas
                  (cmdlets)</Enlace ></li>
              </Lista>
            </li>
    </Lista>
  );
}

function nameabcd({ }) {
  return (
    <>
    <Estructura>
      <Titulo title="h1" id="comandos-de-navegación">Comandos de Navegación</Titulo>
      <Linea />

      <TemarioCompleto temario={Temario} />
      
      <Titulo title="h2" id="windows-cmd-command-prompt">1. Windows CMD (Command Prompt)</Titulo>
      <Titulo title="h3" id="navegación-por-directorios">Navegación por directorios</Titulo>
      <Tabla>
  <TablaCabezera headers={["Comando", "Función"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>cd o chdir</TablaUnica>
      <TablaUnica>Cambiar de directorio. Ej:
              cd C:\Usuarios\Francisco</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>cd ..</TablaUnica>
      <TablaUnica>Subir un nivel de carpeta</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>cd \</TablaUnica>
      <TablaUnica>Ir al directorio raíz de la unidad actual</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>dir</TablaUnica>
      <TablaUnica>Listar archivos y carpetas del directorio actual</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>tree</TablaUnica>
      <TablaUnica>Mostrar la estructura de carpetas en forma de árbol</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
      <Titulo title="h3" id="gestión-de-archivos">Gestión de archivos</Titulo>
      <Tabla>
  <TablaCabezera headers={["Comando", "Función"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>copy origen destino</TablaUnica>
      <TablaUnica>Copiar archivos. Ej: copy archivo.txt D:\Backup\</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>xcopy origen destino /s /e</TablaUnica>
      <TablaUnica>Copiar directorios con subcarpetas</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>move origen destino</TablaUnica>
      <TablaUnica>Mover archivos o cambiar nombre</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>del archivo</TablaUnica>
      <TablaUnica>Borrar un archivo</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>ren archivo nuevo_nombre</TablaUnica>
      <TablaUnica>Cambiar nombre de un archivo</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
      <Titulo title="h3" id="gestión-de-carpetas">Gestión de carpetas</Titulo>
      <Tabla>
  <TablaCabezera headers={["Comando", "Función"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>mkdir nombre_carpeta o
              md nombre_carpeta</TablaUnica>
      <TablaUnica>Crear carpeta</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>rmdir nombre_carpeta o
              rd nombre_carpeta</TablaUnica>
      <TablaUnica>Eliminar carpeta vacía</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>rmdir /s nombre_carpeta</TablaUnica>
      <TablaUnica>Eliminar carpeta con todo su contenido</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
      <Linea />
      <Titulo title="h2" id="powershell-cmdlets">2. PowerShell (cmdlets)</Titulo>
      <Texto>PowerShell tiene cmdlets más potentes y consistentes. Se escriben en
        formato <strong>Verbo-Sustantivo</strong>.</Texto>
      <Titulo title="h3" id="navegación-por-directorios-cmdlets">Navegación por directorios
        (cmdlets)</Titulo>
      <Tabla>
  <TablaCabezera headers={["Cmdlet", "Función"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>Set-Location o cd</TablaUnica>
      <TablaUnica>Cambiar de directorio. Ej:
              Set-Location C:\Usuarios\Francisco</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Get-Location o pwd</TablaUnica>
      <TablaUnica>Mostrar la ruta actual</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Get-ChildItem o ls</TablaUnica>
      <TablaUnica>Listar archivos y carpetas</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Push-Location o pushd</TablaUnica>
      <TablaUnica>Guardar directorio actual y moverse a otro</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Pop-Location o popd</TablaUnica>
      <TablaUnica>Volver al directorio guardado</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
      <Titulo title="h3" id="gestión-de-archivos-cmdlets">Gestión de archivos (cmdlets)</Titulo>
      <Tabla>
  <TablaCabezera headers={["Cmdlet", "Función"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>Copy-Item</TablaUnica>
      <TablaUnica>Copiar archivos o carpetas. Ej:
              Copy-Item archivo.txt D:\Backup\</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Move-Item</TablaUnica>
      <TablaUnica>Mover archivos o cambiar nombre</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Remove-Item</TablaUnica>
      <TablaUnica>Eliminar archivos o carpetas (-Recurse para
              contenido)</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Rename-Item</TablaUnica>
      <TablaUnica>Cambiar nombre de archivo o carpeta</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
      <Titulo title="h3" id="gestión-de-carpetas-cmdlets">Gestión de carpetas (cmdlets)</Titulo>
      <Tabla>
  <TablaCabezera headers={["Cmdlet", "Función"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>New-Item -ItemType Directory -Name "Nombre"</TablaUnica>
      <TablaUnica>Crear carpeta</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Remove-Item -Recurse "Nombre"</TablaUnica>
      <TablaUnica>Eliminar carpeta y contenido</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
      <Texto><strong>Opciones útiles de Get-ChildItem</strong></Texto>
      <Lista>
        <li>-Recurse → listar recursivamente subdirectorios</li>
        <li>-File → solo archivos</li>
        <li>-Directory → solo carpetas</li>
        <li>-Filter "*.txt" → filtrar por extensión</li>
      </Lista>
</Estructura>

<TemarioAsideCompleto temario={Temario} />
    </>
  );
}
export default nameabcd;
