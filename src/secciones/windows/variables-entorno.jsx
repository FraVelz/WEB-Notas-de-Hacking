import Enlace from "../../componentes/atomos/enlace.jsx";
import Linea from "../../componentes/atomos/linea.jsx";
import Lista from "../../componentes/moleculas/lista.jsx";
import Texto from "./../../componentes/atomos/texto.jsx";
import Titulo from "../../componentes/moleculas/titulo.jsx";
import Codigo from "../../componentes/moleculas/codigo.jsx";
import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../../componentes/organismos/estructura.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#tipos-de-variables-de-entorno">Tipos de variables de
        entorno</Enlace ></li>
      <li><Enlace href="#cómo-ver-las-variables-de-entorno">Cómo ver las variables
        de entorno</Enlace ></li>
      <li><Enlace href="#editar-o-crear-variables">Editar o crear
        variables</Enlace ></li>
    </Lista>
  );
}

function nameabcd({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" id="variables-de-entorno">Variables de Entorno</Titulo>
        <Linea />

        <TemarioCompleto temario={Temario} />

        <Titulo title="h3" id="tipos-de-variables-de-entorno">Tipos de variables de
          entorno</Titulo>
        <ol type="1">
          <li><strong>Variables del sistema</strong>: Aplican a todos los
            usuarios del equipo. Por ejemplo:
            <Lista>
              <li>PATH: lista de rutas donde Windows busca
                ejecutables.</li>
              <li>COMPUTERNAME: nombre del equipo.</li>
              <li>SYSTEMROOT: ruta de la carpeta del sistema,
                generalmente C:\Windows.</li>
              <li>TEMP o TMP: carpeta temporal.</li>
            </Lista>
          </li>
          <li>
            <Texto><strong>Variables de usuario</strong>: Solo aplican al usuario
              actual. Por ejemplo:</Texto>
            <Lista>
              <li>USERNAME: nombre del usuario actual.</li>
              <li>USERPROFILE: ruta del perfil del usuario
                (C:\Users\TuUsuario).</li>
              <li>HOMEPATH: ruta relativa de la carpeta del usuario
                (\Users\TuUsuario).</li>
            </Lista>
          </li>
        </ol >
        <Linea />
        <Titulo title="h3" id="cómo-ver-las-variables-de-entorno">Cómo ver las variables de
          entorno</Titulo>
        <ol type="1">
          <li>
            <Texto><strong>Usando CMD</strong>:</Texto>
            <Lista>
              <li>
                set → muestra todas las variables de usuario y del
                sistema.</li>

              <li>echo %VARIABLE% → muestra el valor de una variable
                específica. Ejemplo:

                <Codigo code={`echo %PATH%
echo %USERPROFILE%`} language="bash" />
              </li>
            </Lista>
          </li >
          <li>
            <Texto><strong>Usando PowerShell</strong>:</Texto>
            <Lista>
              <li>
                Get-ChildItem Env: → lista todas las
                variables.</li>        <li>
                $Env:VARIABLE → muestra el valor de una variable
                  específica. Ejemplo:
                <Codigo code={`$Env:PATH
$Env:USERNAME`} language="bash" />
              </li>
            </Lista>
          </li>
          <li>
            <Texto><strong>Usando la interfaz gráfica</strong>:</Texto>
            <Lista>
              <li>Presiona Win + R → escribe sysdm.cpl →
                Enter.</li>
              <li>Ve a la pestaña <strong>Opciones avanzadas</strong> →
                <strong>Variables de entorno</strong>.
              </li>
              <li>Aquí puedes <strong>ver, crear, editar o eliminar</strong> variables
                de usuario o del sistema.</li>
            </Lista>
          </li>
        </ol >
        <Linea />
        <Titulo title="h3" id="editar-o-crear-variables">Editar o crear variables</Titulo>
        <Lista>
          <li>
            Para agregar una carpeta al PATH:
            <ol type="1">
              <li>Abrir <strong>Variables de entorno</strong>.</li>
              <li>Seleccionar PATH → Editar → Nuevo → pegar la ruta.</li>
              <li>Guardar y reiniciar CMD/PowerShell para que tome efecto.</li>
            </ol>
          </li>
        </Lista>
      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}
export default nameabcd;
