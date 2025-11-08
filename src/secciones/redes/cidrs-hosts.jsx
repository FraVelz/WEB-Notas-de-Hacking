import Titulo from "./../../componentes/titulo.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Linea from "./../../componentes/linea.jsx";

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="cidrs-y-host">Cidrs y Host</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><a href="#cidrs-y-host">Cidrs y Host</a>
          <Lista>
            <li><a href="#temario">Temario</a></li>
            <li><a href="#1-qué-es-cidr">1. Qué es CIDR</a>
              <Lista>
                <li><a href="#ejemplo">Ejemplo</a></li>
                <li><a href="#cómo-se-interpreta">Cómo se interpreta</a></li>
              </Lista>
            </li>
            <li><a href="#2-qué-es-una-máscara-de-red-o-de-host">2. Qué es una
              máscara de red (o de host)</a>
              <Lista>
                <li><a href="#máscara-de-host">Máscara de host</a></li>
              </Lista>
            </li>
            <li><a href="#3-relación-entre-cidr-y-máscaras">3. Relación entre CIDR y
              máscaras</a></li>
            <li><a href="#4-ejemplo-práctico">4. Ejemplo práctico</a></li>
          </Lista>
        </li>
      </Lista>
      <Texto><a href="./../readme.md#4-redes">Regresar a la Guía Principal</a></Texto>
      <Linea />
      <Titulo title="h2" id="qué-es-cidr">1. Qué es CIDR</Titulo>
      <Texto><strong>CIDR</strong> significa <strong>Classless Inter-Domain
        Routing</strong>, o en español, <strong>Enrutamiento entre dominios sin
          clases</strong>.</Texto>
      <Texto>Se usa para <strong>representar redes IP y su tamaño</strong> de
        forma compacta.</Texto>
      <Linea />
      <Titulo title="h3" id="ejemplo">Ejemplo</Titulo>
      <div class="sourceCode" id="cb1">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="ex">192.168.1.0/24</span></span></code></pre>
      </div>
      <Lista>
        <li><code>192.168.1.0</code> → Dirección de red</li>
        <li><code>/24</code> → Indica <strong>cuántos bits</strong> de la
          dirección se usan para la <strong>parte de red</strong>.</li>
      </Lista>
      <Texto>💭 En este caso:</Texto>
      <Lista>
        <li>24 bits → red</li>
        <li>8 bits restantes (de los 32 de una IPv4) → <strong>hosts</strong> o
          dispositivos</li>
      </Lista>
      <Linea />
      <Titulo title="h3" id="cómo-se-interpreta">Cómo se interpreta</Titulo>
      <Texto>Cada número después de la barra <code>/</code> indica cuántos bits de
        la IP pertenecen a la red:</Texto>
      <table>
        <thead>
          <tr>
            <th>CIDR</th>
            <th>Máscara de subred</th>
            <th># de hosts posibles</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>/8</td>
            <td>255.0.0.0</td>
            <td>16,777,214</td>
          </tr>
          <tr>
            <td>/16</td>
            <td>255.255.0.0</td>
            <td>65,534</td>
          </tr>
          <tr>
            <td>/24</td>
            <td>255.255.255.0</td>
            <td>254</td>
          </tr>
          <tr>
            <td>/30</td>
            <td>255.255.255.252</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
      <blockquote>
        <Texto>(Se restan 2 hosts: uno para la dirección de red y otro para
          broadcast)</Texto>
      </blockquote>
      <Linea />
      <Titulo title="h2" id="qué-es-una-máscara-de-red-o-de-host">2. Qué es una máscara de
        red (o de host)</Titulo>
      <Texto>Una <strong>máscara de subred</strong> (subnet mask) indica
        <strong>qué parte de la IP identifica la red</strong> y <strong>qué
          parte identifica al host</strong>.
      </Texto>
      <Texto>Por ejemplo:</Texto>
      <table>
        <colgroup>
          <col style="width: 13%" />
          <col style="width: 14%" />
          <col style="width: 38%" />
          <col style="width: 33%" />
        </colgroup>
        <thead>
          <tr>
            <th>IP</th>
            <th>Máscara</th>
            <th>Binario (simplificado)</th>
            <th>Significado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>192.168.1.10</td>
            <td>255.255.255.0</td>
            <td>11111111.11111111.11111111.00000000</td>
            <td>24 bits para red, 8 para hosts</td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Titulo title="h3" id="máscara-de-host">Máscara de host</Titulo>
      <Texto>A veces se habla de “máscara de host”, que simplemente es <strong>el
        complemento</strong> de la máscara de red.</Texto>
      <Texto>👉 Si la máscara de red es <code>255.255.255.0</code> entonces la
        <strong>máscara de host</strong> es:
      </Texto>
      <div class="sourceCode" id="cb2">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="ex">0.0.0.255</span></span></code></pre>
      </div>
      <Texto>Porque:</Texto>
      <Lista>
        <li>Los bits 1 (255) indican red</li>
        <li>Los bits 0 (0) indican host</li>
      </Lista>
      <Texto>Es decir, la máscara de host muestra <strong>qué bits pueden
        variar</strong> para asignar direcciones a los dispositivos.</Texto>
      <Linea />
      <Titulo title="h2" id="relación-entre-cidr-y-máscaras">3. Relación entre CIDR y
        máscaras</Titulo>
      <table>
        <thead>
          <tr>
            <th>CIDR</th>
            <th>Máscara de red</th>
            <th>Máscara de host</th>
            <th># Hosts válidos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>/8</td>
            <td>255.0.0.0</td>
            <td>0.255.255.255</td>
            <td>16,777,214</td>
          </tr>
          <tr>
            <td>/16</td>
            <td>255.255.0.0</td>
            <td>0.0.255.255</td>
            <td>65,534</td>
          </tr>
          <tr>
            <td>/24</td>
            <td>255.255.255.0</td>
            <td>0.0.0.255</td>
            <td>254</td>
          </tr>
          <tr>
            <td>/30</td>
            <td>255.255.255.252</td>
            <td>0.0.0.3</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Titulo title="h2" id="ejemplo-práctico">4. Ejemplo práctico</Titulo>
      <Texto>Supón que tienes:</Texto>
      <div class="sourceCode" id="cb3">
        <pre
          class="sourceCode bash"><code class="sourceCode bash"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a><span class="ex">Red:</span> 10.0.0.0/24</span></code></pre>
      </div>
      <Texto>Entonces:</Texto>
      <Lista>
        <li>Máscara de red: <code>255.255.255.0</code></li>
        <li>Máscara de host: <code>0.0.0.255</code></li>
        <li>Rango de hosts: <code>10.0.0.1</code> → <code>10.0.0.254</code></li>
        <li>Dirección de broadcast: <code>10.0.0.255</code></li>
        <li>Total hosts: 254</li>
      </Lista>
      <Linea />
      <Texto><a href="./../readme.md#4-redes">Regresar a la Guía Principal</a></Texto>
      <blockquote>
        <Texto><strong>Autor:</strong> Fravelz</Texto>
      </blockquote>
    </>
  );
}
export default nameabcd;
