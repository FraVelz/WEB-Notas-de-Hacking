import { Tabla, TablaCabezera, TablaFila, TablaUnica } from "../../componentes/moleculas/tabla.jsx";

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
      <li><Enlace href="#1-comodines-básicos">1. Comodines básicos</Enlace ></li>
      <li><Enlace href="#2-ejemplos-prácticos">2. Ejemplos prácticos</Enlace ></li>
    </Lista>
  );
}


function nameabcd({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" id="comodines">Comodines</Titulo>
        <Linea />

        <TemarioCompleto temario={Temario} />

        <Titulo title="h2" id="comodines-básicos">1. Comodines básicos</Titulo>
        <Tabla>
          <TablaCabezera headers={["Comodín", "Significado", "Ejemplo CMD / PowerShell", "Explicación"]} />

          <tbody>
            <TablaFila>
              <TablaUnica>*</TablaUnica>
              <TablaUnica>Cualquier número de caracteres (0 o más)</TablaUnica>
              <TablaUnica>dir *.txt</TablaUnica>
              <TablaUnica>Lista todos los archivos que terminan en .txt</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>?</TablaUnica>
              <TablaUnica>Cualquier carácter individual</TablaUnica>
              <TablaUnica>dir archivo?.txt</TablaUnica>
              <TablaUnica>Coincide con archivo1.txt, archivoA.txt,
                pero no archivo10.txt</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>[ ] (solo PowerShell)</TablaUnica>
              <TablaUnica>Coincide con un carácter dentro de los corchetes</TablaUnica>
              <TablaUnica>Get-ChildItem a[12].txt</TablaUnica>
              <TablaUnica>Coincide con a1.txt y a2.txt</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>[! ] o [^ ] (solo PowerShell)</TablaUnica>
              <TablaUnica>Negación de caracteres</TablaUnica>
              <TablaUnica>Get-ChildItem a[!1].txt</TablaUnica>
              <TablaUnica>Coincide con archivos que empiecen con a y no tengan
                1 en esa posición</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>
        <Linea />
        <Titulo title="h2" id="ejemplos-prácticos">2. Ejemplos prácticos</Titulo>
        <Lista>
          <li><strong>Listar todos los archivos de un tipo</strong>:</li>
        </Lista>
        <Codigo code={`dir *.jpg`} language="bash" />
        <Texto>o en PowerShell:</Texto>
        <Codigo code={`Get-ChildItem *.jpg`} language="bash" />
        <Lista>
          <li><strong>Borrar todos los archivos de texto</strong>:</li>
        </Lista>
        <Codigo code={`del *.txt`} language="bash" />
        <Texto>o PowerShell:</Texto>
        <Codigo code={`Remove-Item *.txt`} language="bash" />
        <Lista>
          <li><strong>Copiar todos los archivos que empiecen con
            “doc”</strong>:</li>
        </Lista>
        <Codigo code={`copy doc*.* D:\/Backup\/`} language="bash" />
        <Lista>
          <li><strong>Renombrar archivos específicos con patrón</strong>
            (PowerShell):</li>
        </Lista>
        <Codigo code={`Rename-Item "archivo?.txt" -NewName "nuevo_?.txt"`} language="bash" />
        <Linea />
        <Texto><strong>Tip importante:</strong></Texto>
        <Texto>En CMD los comodines son muy básicos (* y
          ?), mientras que en PowerShell puedes usar expresiones más
          avanzadas con corchetes, rangos y negaciones.
        </Texto>
      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}

export default nameabcd;
