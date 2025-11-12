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
      <Titulo title="h1" id="redirecciones-en-powershell-operadores-lógicos-y-de-redirección">Redirecciones
        en Powershell (operadores lógicos y de redirección)</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><Enlace href="#redirecciones-en-powershell-operadores-lógicos-y-de-redirección">Redirecciones
          en Powershell (operadores lógicos y de redirección)</Enlace >
          <Lista>
            <li><Enlace href="#temario">Temario</Enlace ></li>
            <li><Enlace href="#tipos-de-salida-en-powershell">Tipos de salida en
              PowerShell</Enlace ></li>
            <li><Enlace href="#operadores-de-redirección">Operadores de
              redirección</Enlace ></li>
            <li><Enlace href="#operadores-lógicos">Operadores lógicos</Enlace ></li>
            <li><Enlace href="#ejemplos-combinados">Ejemplos combinados</Enlace ></li>
            <li><Enlace href="#tip-extra-usar-redirecciones-dentro-de-scripts">Tip extra:
              usar redirecciones dentro de scripts</Enlace ></li>
          </Lista>
        </li>
      </Lista>
      <Texto><Enlace href="./../readme.md#3-windows">Regresar a la guía
        principal</Enlace ></Texto>
      <Linea />
      <Titulo title="h2" id="tipos-de-salida-en-powershell">Tipos de salida en
        PowerShell</Titulo>
      <Texto>PowerShell no solo maneja texto (como CMD), sino <strong>flujos de
        salida (streams)</strong>. Cada flujo tiene un número que se usa para
        redirigirlo:</Texto>
      <Tabla>
  <TablaCabezera headers={["Flujo", "Descripción", "Ejemplo de redirección"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>1</TablaUnica>
      <TablaUnica><strong>Salida estándar (Output)</strong> — resultado del
              comando</TablaUnica>
      <TablaUnica>&gt; archivo.txt</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>2</TablaUnica>
      <TablaUnica><strong>Errores (Error)</strong> — mensajes de error</TablaUnica>
      <TablaUnica>2&gt; errores.txt</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>3</TablaUnica>
      <TablaUnica><strong>Mensajes de advertencia (Warning)</strong></TablaUnica>
      <TablaUnica>3&gt; advertencias.txt</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>4</TablaUnica>
      <TablaUnica><strong>Mensajes detallados (Verbose)</strong></TablaUnica>
      <TablaUnica>4&gt; verbose.txt</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>5</TablaUnica>
      <TablaUnica><strong>Mensajes de depuración (Debug)</strong></TablaUnica>
      <TablaUnica>5&gt; debug.txt</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>6</TablaUnica>
      <TablaUnica><strong>Mensajes de información (Information)</strong></TablaUnica>
      <TablaUnica>6&gt; info.txt</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
      <Linea />
      <Titulo title="h2" id="operadores-de-redirección">Operadores de redirección</Titulo>
      <Tabla>
  <TablaCabezera headers={["Operador", "Descripción", "Ejemplo", "Resultado", "", "", "", ""]} />

  <tbody>
    <TablaFila>
      <TablaUnica>-and</TablaUnica>
      <TablaUnica><strong>Y lógico</strong> — ambas condiciones deben ser
              verdaderas</TablaUnica>
      <TablaUnica>($x -gt 5) -and ($x -lt 10)</TablaUnica>
      <TablaUnica>Verdadero sí x está entre 6 y 9</TablaUnica>
      <TablaUnica></TablaUnica>
      <TablaUnica></TablaUnica>
      <TablaUnica></TablaUnica>
      <TablaUnica></TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>-or</TablaUnica>
      <TablaUnica><strong>O lógico</strong> — una de las condiciones debe ser
              verdadera</TablaUnica>
      <TablaUnica>($a -eq 10) -or ($b -eq 10)</TablaUnica>
      <TablaUnica>Verdadero sí alguno es 10</TablaUnica>
      <TablaUnica></TablaUnica>
      <TablaUnica></TablaUnica>
      <TablaUnica></TablaUnica>
      <TablaUnica></TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>-not o !</TablaUnica>
      <TablaUnica><strong>Negación</strong></TablaUnica>
      <TablaUnica>-not ($x -eq 5) o !($x -eq 5)</TablaUnica>
      <TablaUnica>Verdadero sí x ≠ 5</TablaUnica>
      <TablaUnica></TablaUnica>
      <TablaUnica></TablaUnica>
      <TablaUnica></TablaUnica>
      <TablaUnica></TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>&amp;&amp;</TablaUnica>
      <TablaUnica><strong>Ejecuta el siguiente comando solo sí el primero fue
              exitoso</strong></TablaUnica>
      <TablaUnica>Test-Path archivo.txt &amp;&amp; Write-Host "Existe"</TablaUnica>
      <TablaUnica>Muestra “Existe” solo sí el archivo existe</TablaUnica>
      <TablaUnica></TablaUnica>
      <TablaUnica></TablaUnica>
      <TablaUnica></TablaUnica>
      <TablaUnica></TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>|                                                                 |</TablaUnica>
      <TablaUnica><strong>Ejecuta el siguiente comando solo sí el primero
              falla</strong></TablaUnica>
      <TablaUnica>Test-Path archivo.txt |   | Write-Host "No existe"</TablaUnica>
      <TablaUnica>Muestra “No existe” solo sí falla</TablaUnica>
      <TablaUnica></TablaUnica>
      <TablaUnica></TablaUnica>
      <TablaUnica></TablaUnica>
      <TablaUnica></TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>;</TablaUnica>
      <TablaUnica><strong>Separa comandos</strong> (ejecuta ambos, sin importar sí
              fallan)</TablaUnica>
      <TablaUnica>dir; echo "Hecho"</TablaUnica>
      <TablaUnica>Siempre ejecuta ambos</TablaUnica>
      <TablaUnica></TablaUnica>
      <TablaUnica></TablaUnica>
      <TablaUnica></TablaUnica>
      <TablaUnica></TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
      <Linea />
      <Titulo title="h2" id="ejemplos-combinados">Ejemplos combinados</Titulo>
      <CodeBlock code={`# Guarda salida y errores en archivos diferentes
Get-ChildItem C:\ 1>salida.txt 2>errores.txt

# Guarda todo en un solo archivo
Get-ChildItem C:\ *> todo.txt

# Si un archivo existe, muestra un mensaje
Test-Path "C:\config.txt" && Write-Host "Existe" || Write-Host "No existe"

# Redirigir salida a un archivo y también verla en pantalla
Get-Process | Tee-Object -FilePath procesos.txt`} language="bash" />
      <Linea />
      <Titulo title="h2" id="tip-extra-usar-redirecciones-dentro-de-scripts">Tip extra: usar
        redirecciones dentro de scripts</Titulo>
      <Texto>En scripts (.ps1), puedes controlar redirecciones con
        más precisión:</Texto>
      <CodeBlock code={`$ErrorActionPreference = "SilentlyContinue"   # Ignora errores
Get-Item "C:\noexiste.txt" *> log.txt         # Redirige todo`} language="bash" />
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
