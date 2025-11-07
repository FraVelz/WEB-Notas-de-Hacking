<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">

<head>
  <meta charset="utf-8" />
  <meta name="generator" content="pandoc" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <title>cidrs-hosts</title>

</head>

<body>
  <h1 id="cidrs-y-host">Cidrs y Host</h1>
  <hr />
  <h2 id="temario">Temario</h2>
  <ul>
    <li><a href="#cidrs-y-host">Cidrs y Host</a>
      <ul>
        <li><a href="#temario">Temario</a></li>
        <li><a href="#1-qué-es-cidr">1. Qué es CIDR</a>
          <ul>
            <li><a href="#ejemplo">Ejemplo</a></li>
            <li><a href="#cómo-se-interpreta">Cómo se interpreta</a></li>
          </ul>
        </li>
        <li><a href="#2-qué-es-una-máscara-de-red-o-de-host">2. Qué es una
            máscara de red (o de host)</a>
          <ul>
            <li><a href="#máscara-de-host">Máscara de host</a></li>
          </ul>
        </li>
        <li><a href="#3-relación-entre-cidr-y-máscaras">3. Relación entre CIDR y
            máscaras</a></li>
        <li><a href="#4-ejemplo-práctico">4. Ejemplo práctico</a></li>
      </ul>
    </li>
  </ul>
  <p><a href="./../readme.md#4-redes">Regresar a la Guía Principal</a></p>
  <hr />
  <h2 id="qué-es-cidr">1. Qué es CIDR</h2>
  <p><strong>CIDR</strong> significa <strong>Classless Inter-Domain
      Routing</strong>, o en español, <strong>Enrutamiento entre dominios sin
      clases</strong>.</p>
  <p>Se usa para <strong>representar redes IP y su tamaño</strong> de
    forma compacta.</p>
  <hr />
  <h3 id="ejemplo">Ejemplo</h3>
  <div class="sourceCode" id="cb1">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="ex">192.168.1.0/24</span></span></code></pre>
  </div>
  <ul>
    <li><code>192.168.1.0</code> → Dirección de red</li>
    <li><code>/24</code> → Indica <strong>cuántos bits</strong> de la
      dirección se usan para la <strong>parte de red</strong>.</li>
  </ul>
  <p>💭 En este caso:</p>
  <ul>
    <li>24 bits → red</li>
    <li>8 bits restantes (de los 32 de una IPv4) → <strong>hosts</strong> o
      dispositivos</li>
  </ul>
  <hr />
  <h3 id="cómo-se-interpreta">Cómo se interpreta</h3>
  <p>Cada número después de la barra <code>/</code> indica cuántos bits de
    la IP pertenecen a la red:</p>
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
    <p>(Se restan 2 hosts: uno para la dirección de red y otro para
      broadcast)</p>
  </blockquote>
  <hr />
  <h2 id="qué-es-una-máscara-de-red-o-de-host">2. Qué es una máscara de
    red (o de host)</h2>
  <p>Una <strong>máscara de subred</strong> (subnet mask) indica
    <strong>qué parte de la IP identifica la red</strong> y <strong>qué
      parte identifica al host</strong>.
  </p>
  <p>Por ejemplo:</p>
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
  <hr />
  <h3 id="máscara-de-host">Máscara de host</h3>
  <p>A veces se habla de “máscara de host”, que simplemente es <strong>el
      complemento</strong> de la máscara de red.</p>
  <p>👉 Si la máscara de red es <code>255.255.255.0</code> entonces la
    <strong>máscara de host</strong> es:
  </p>
  <div class="sourceCode" id="cb2">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="ex">0.0.0.255</span></span></code></pre>
  </div>
  <p>Porque:</p>
  <ul>
    <li>Los bits 1 (255) indican red</li>
    <li>Los bits 0 (0) indican host</li>
  </ul>
  <p>Es decir, la máscara de host muestra <strong>qué bits pueden
      variar</strong> para asignar direcciones a los dispositivos.</p>
  <hr />
  <h2 id="relación-entre-cidr-y-máscaras">3. Relación entre CIDR y
    máscaras</h2>
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
  <hr />
  <h2 id="ejemplo-práctico">4. Ejemplo práctico</h2>
  <p>Supón que tienes:</p>
  <div class="sourceCode" id="cb3">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a><span class="ex">Red:</span> 10.0.0.0/24</span></code></pre>
  </div>
  <p>Entonces:</p>
  <ul>
    <li>Máscara de red: <code>255.255.255.0</code></li>
    <li>Máscara de host: <code>0.0.0.255</code></li>
    <li>Rango de hosts: <code>10.0.0.1</code> → <code>10.0.0.254</code></li>
    <li>Dirección de broadcast: <code>10.0.0.255</code></li>
    <li>Total hosts: 254</li>
  </ul>
  <hr />
  <p><a href="./../readme.md#4-redes">Regresar a la Guía Principal</a></p>
  <blockquote>
    <p><strong>Autor:</strong> Fravelz</p>
  </blockquote>
</body>

</html>