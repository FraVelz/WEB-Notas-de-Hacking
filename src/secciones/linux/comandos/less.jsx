import Titulo from "./../../componentes/titulo.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Linea from "./../../componentes/linea.jsx";

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="less-en-linux">Less en Linux</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><a href="#less-en-linux">Less en Linux</a>
          <Lista>
            <li><a href="#temario">Temario</a>
              <Lista>
                <li><a href="#qué-hace-exactamente">¿Qué hace exactamente?</a></li>
                <li><a href="#controles-básicos-dentro-de-less">Controles básicos dentro
                  de <code>less</code></a></li>
                <li><a href="#ejemplos-útiles">Ejemplos útiles</a></li>
                <li><a href="#en-resumen">En resumen</a></li>
              </Lista>
            </li>
          </Lista>
        </li>
      </Lista>
      <Texto><a href="./../readme.md#5-python">Regresar a la Guía
        Principal</a></Texto>
      <Texto>–</Texto>
      <Titulo title="h3" id="qué-hace-exactamente">¿Qué hace exactamente?</Titulo>
      <Texto><code>less</code> muestra el contenido <strong>por páginas</strong>,
        no todo de golpe. Esto es muy útil cuando el archivo es largo (como
        logs, código, o configuraciones grandes).</Texto>
      <Texto>Ejemplo:</Texto>
      <div class="sourceCode" id="cb1">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="fu">less</span> archivo.txt</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h3" id="controles-básicos-dentro-de-less">Controles básicos dentro de
        <code>less</code>
      </Titulo>
      <Texto>Una vez abierto el archivo:</Texto>
      <table>
        <thead>
          <tr>
            <th>Tecla</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>↓ o <strong>Espacio</strong></td>
            <td>Avanza una página</td>
          </tr>
          <tr>
            <td>↑ o <strong>b</strong></td>
            <td>Retrocede una página</td>
          </tr>
          <tr>
            <td><strong>g</strong></td>
            <td>Ir al principio del archivo</td>
          </tr>
          <tr>
            <td><strong>G</strong></td>
            <td>Ir al final del archivo</td>
          </tr>
          <tr>
            <td><strong>/texto</strong></td>
            <td>Buscar “texto” hacia adelante</td>
          </tr>
          <tr>
            <td><strong>n</strong></td>
            <td>Repetir la búsqueda siguiente</td>
          </tr>
          <tr>
            <td><strong>N</strong></td>
            <td>Repetir la búsqueda anterior</td>
          </tr>
          <tr>
            <td><strong>q</strong></td>
            <td>Salir</td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Titulo title="h3" id="ejemplos-útiles">Ejemplos útiles</Titulo>
      <Texto>Ver varios archivos:</Texto>
      <div class="sourceCode" id="cb2">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="fu">less</span> <span class="pp">*</span>.txt</span></code></pre>
      </div>
      <Texto>(Mueve con <code>:n</code> para siguiente archivo y <code>:p</code>
        para anterior)</Texto>
      <Texto>Ver salida de un comando largo (por ejemplo, un <code>ls</code> con
        muchos resultados):</Texto>
      <div class="sourceCode" id="cb3">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a><span class="fu">ls</span> <span class="at">-l</span> <span class="kw">|</span> <span class="fu">less</span></span></code></pre>
      </div>
      <Texto>Buscar dentro de un log:</Texto>
      <div class="sourceCode" id="cb4">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a><span class="fu">less</span> /var/log/syslog</span>
            <span id="cb4-2"><a href="#cb4-2" aria-hidden="true" tabindex="-1"></a><span class="co"># Luego escribe /error para buscar la palabra &quot;error&quot;</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h3" id="en-resumen">En resumen</Titulo>
      <Texto><code>less</code>:</Texto>
      <Lista>
        <li><strong>No edita archivos</strong>, solo los muestra.</li>
        <li><strong>Carga rápido</strong>, aunque el archivo sea enorme.</li>
        <li><strong>Permite búsqueda y navegación avanzada</strong>.</li>
      </Lista>
      <Linea />
      <Texto><a href="./../readme.md#5-python">Regresar a la Guía
        Principal</a></Texto>
      <blockquote>
        <Texto><strong>Autor:</strong> Fravelz</Texto>
      </blockquote>
    </>
  );
}
export default nameabcd;
