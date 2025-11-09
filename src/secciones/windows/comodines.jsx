import Titulo from "./../../componentes/titulo.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Linea from "./../../componentes/linea.jsx";

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="comodines">Comodines</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><Enlace href="#comodines">Comodines</Enlace >
          <Lista>
            <li><Enlace href="#temario">Temario</Enlace ></li>
            <li><Enlace href="#1-comodines-básicos">1. Comodines básicos</Enlace ></li>
            <li><Enlace href="#2-ejemplos-prácticos">2. Ejemplos prácticos</Enlace ></li>
          </Lista>
        </li>
      </Lista>
      <Texto><Enlace href="./../readme.md#3-windows">Regresar a la guía
        principal</Enlace ></Texto>
      <Linea />
      <Titulo title="h2" id="comodines-básicos">1. Comodines básicos</Titulo>
      <table style="width:100%;">
        <colgroup>
          <col style="width: 18%" />
          <col style="width: 26%" />
          <col style="width: 13%" />
          <col style="width: 41%" />
        </colgroup>
        <thead>
          <tr>
            <th>Comodín</th>
            <th>Significado</th>
            <th>Ejemplo CMD / PowerShell</th>
            <th>Explicación</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>*</code></td>
            <td>Cualquier número de caracteres (0 o más)</td>
            <td><code>dir *.txt</code></td>
            <td>Lista todos los archivos que terminan en <code>.txt</code></td>
          </tr>
          <tr>
            <td><code>?</code></td>
            <td>Cualquier carácter individual</td>
            <td><code>dir archivo?.txt</code></td>
            <td>Coincide con <code>archivo1.txt</code>, <code>archivoA.txt</code>,
              pero no <code>archivo10.txt</code></td>
          </tr>
          <tr>
            <td><code>[ ]</code> (solo PowerShell)</td>
            <td>Coincide con un carácter dentro de los corchetes</td>
            <td><code>Get-ChildItem a[12].txt</code></td>
            <td>Coincide con <code>a1.txt</code> y <code>a2.txt</code></td>
          </tr>
          <tr>
            <td><code>[! ]</code> o <code>[^ ]</code> (solo PowerShell)</td>
            <td>Negación de caracteres</td>
            <td><code>Get-ChildItem a[!1].txt</code></td>
            <td>Coincide con archivos que empiecen con <code>a</code> y no tengan
              <code>1</code> en esa posición
            </td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Titulo title="h2" id="ejemplos-prácticos">2. Ejemplos prácticos</Titulo>
      <Lista>
        <li><strong>Listar todos los archivos de un tipo</strong>:</li>
      </Lista>
      <div className="sourceCode" id="cb1">
        <pre
          className="sourceCode cmd"><code className="sourceCode dosbat"><span id="cb1-1"><Enlace href="#cb1-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">dir</span> *.jpg</span></code></pre>
      </div>
      <Texto>o en PowerShell:</Texto>
      <div className="sourceCode" id="cb2">
        <pre
          className="sourceCode powershell"><code className="sourceCode powershell"><span id="cb2-1"><Enlace href="#cb2-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">Get-ChildItem</span> <span className="op">*.</span><span className="fu">jpg</span></span></code></pre>
      </div>
      <Lista>
        <li><strong>Borrar todos los archivos de texto</strong>:</li>
      </Lista>
      <div className="sourceCode" id="cb3">
        <pre
          className="sourceCode cmd"><code className="sourceCode dosbat"><span id="cb3-1"><Enlace href="#cb3-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">del</span> *.txt</span></code></pre>
      </div>
      <Texto>o PowerShell:</Texto>
      <div className="sourceCode" id="cb4">
        <pre
          className="sourceCode powershell"><code className="sourceCode powershell"><span id="cb4-1"><Enlace href="#cb4-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">Remove-Item</span> <span className="op">*.</span><span className="fu">txt</span></span></code></pre>
      </div>
      <Lista>
        <li><strong>Copiar todos los archivos que empiecen con
          “doc”</strong>:</li>
      </Lista>
      <div className="sourceCode" id="cb5">
        <pre
          className="sourceCode cmd"><code className="sourceCode dosbat"><span id="cb5-1"><Enlace href="#cb5-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">copy</span> doc*.* D:\Backup\</span></code></pre>
      </div>
      <Lista>
        <li><strong>Renombrar archivos específicos con patrón</strong>
          (PowerShell):</li>
      </Lista>
      <div className="sourceCode" id="cb6">
        <pre
          className="sourceCode powershell"><code className="sourceCode powershell"><span id="cb6-1"><Enlace href="#cb6-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">Rename-Item</span> <span className="st">&quot;archivo?.txt&quot;</span> <span className="op">-</span>NewName <span className="st">&quot;nuevo_?.txt&quot;</span></span></code></pre>
      </div>
      <Linea />
      <Texto><strong>Tip importante:</strong></Texto>
      <Texto>En CMD los comodines son muy básicos (<code>*</code> y
        <code>?</code>), mientras que en PowerShell puedes usar expresiones más
        avanzadas con corchetes, rangos y negaciones.
      </Texto>
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
