import Enlace from "../../componentes/atomos/enlace.jsx";
import Linea from "../../componentes/atomos/linea.jsx";
import Lista from "../../componentes/moleculas/lista.jsx";
import Texto from "./../../componentes/atomos/texto.jsx";
import Titulo from "../../componentes/moleculas/titulo.jsx";
import { Tabla, TablaCabezera, TablaFila, TablaUnica } from "../../componentes/moleculas/tabla.jsx";
import CodeBlock from "../../componentes/moleculas/codigo.jsx";

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="diferencias-entre-powershell-y-cmd">Diferencias entre Powershell
        y CMD</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><Enlace href="#diferencias-entre-powershell-y-cmd">Diferencias entre
          Powershell y CMD</Enlace >
          <Lista>
            <li><Enlace href="#temario">Temario</Enlace ></li>
            <li><Enlace href="#cmd-command-prompt">CMD (Command Prompt)</Enlace ></li>
            <li><Enlace href="#powershell">PowerShell</Enlace ></li>
            <li><Enlace href="#diferencias-clave-en-práctica">Diferencias clave en
              práctica</Enlace ></li>
            <li><Enlace href="#ejemplo">Ejemplo</Enlace ></li>
          </Lista>
        </li>
      </Lista>
      <Texto><Enlace href="./../readme.md#3-windows">Regresar a la guía
        principal</Enlace ></Texto>
      <Linea />
      <Titulo title="h2" id="cmd-command-prompt">CMD (Command Prompt)</Titulo>
      <Lista>
        <li><strong>Origen</strong>: Basado en MS-DOS, presente en Windows
          desde versiones muy antiguas.</li>    <li><strong>Lenguaje</strong>: Usa un lenguaje de comandos muy
            básico, llamado <em>batch</em>.</li>    <li><strong>Funciones principales</strong>:</li>
        <Lista>
          <li>
            Ejecutar comandos simples del sistema (dir,
              copy, del, etc.).
          </li>        <li>Automatizar tareas básicas con archivos
            .bat.
          </li>     
          </Lista>
      <li><strong>Limitaciones</strong>:
      <Lista>
        <li>
          Manejo de objetos muy limitado: CMD trabaja con <strong>texto
            plano</strong>, no con objetos.</li>        <li>Automatización avanzada complicada.</li>        <li>Funciones modernas de Windows (como administración de registros o
              servicios) son más difíciles de hacer.</li>      </Lista>
    </li >
  </Lista >
  <Linea />
  <Titulo title="h2" id="powershell">PowerShell</Titulo>
  <Lista>
    <li><strong>Origen</strong>: Introducido en 2006 como una herramienta
        moderna de administración de Windows.</li>    <li><strong>Lenguaje</strong>: Basado en .NET, orientado a
        objetos.</li>    <li><strong>Funciones principales</strong>:
      <Lista>
        <li>
          <Texto>No solo ejecuta comandos, sino que devuelve <strong>objetos
              completos</strong>, no solo texto.</Texto>
          <Lista>
            <li>Ejemplo: Get-Process devuelve un objeto de proceso con
              propiedades (Id, CPU, Memory,
              etc.) que se pueden filtrar o manipular.</li>
          </Lista>
        </li>
        <li>
          Automatización avanzada: scripts .ps1 pueden hacer
            casi cualquier cosa en Windows, desde tareas de administración hasta
            manipulación de servicios, registro, Active Directory, etc.</li>        <li>Combinación de cmdlets (comandos especializados de PowerShell)
            para tareas complejas.</li>      </Lista>
    </li>
    <li><strong>Compatibilidad</strong>: Puede ejecutar casi todos los
        comandos de CMD, y mucho más.</li>    <li><strong>Multiplataforma</strong>: PowerShell 7+ funciona en
        Windows, Linux y macOS.</li>  </Lista >
  <Linea />
  <Titulo title="h2" id="diferencias-clave-en-práctica">Diferencias clave en
    práctica</Titulo>
  <Tabla>
  <TablaCabezera headers={["Característica", "CMD", "PowerShell"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>Lenguaje</TablaUnica>
      <TablaUnica>Batch / texto</TablaUnica>
      <TablaUnica>Basado en objetos / .NET</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Salida de comandos</TablaUnica>
      <TablaUnica>Texto plano</TablaUnica>
      <TablaUnica>Objetos</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Automatización</TablaUnica>
      <TablaUnica>Básica</TablaUnica>
      <TablaUnica>Avanzada</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Scripts</TablaUnica>
      <TablaUnica>.bat</TablaUnica>
      <TablaUnica>.ps1</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Administración de Windows</TablaUnica>
      <TablaUnica>Limitada</TablaUnica>
      <TablaUnica>Completa</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Multiplataforma</TablaUnica>
      <TablaUnica>Solo Windows</TablaUnica>
      <TablaUnica>Windows, Linux, macOS</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
  <Linea />
  <Titulo title="h2" id="ejemplo">Ejemplo</Titulo>
  <Lista>
    <li>CMD:</li>
  </Lista>
  <CodeBlock code={`dir | find "archivo.txt"`} language="bash" />
  <Lista>
    <li>PowerShell:</li>
  </Lista>
  <CodeBlock code={`Get-ChildItem | Where-Object { $_.Name -eq "archivo.txt" }`} language="bash" />
  <blockquote>
    <Texto>En PowerShell trabajas con objetos ($_.Name) y no solo
      con texto, lo que te da muchísima más flexibilidad.</Texto>
  </blockquote>
  <Linea />
  <Texto><Enlace href="./../readme.md#3-windows">Regresar a la guía
      principal</Enlace ></Texto>
  <blockquote>
    <Texto><strong>Autor:</strong> Fravelz</Texto>
  </blockquote>
</>
);
}
export default nameabcd;
