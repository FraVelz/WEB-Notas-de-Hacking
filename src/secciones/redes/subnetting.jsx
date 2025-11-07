<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">

<head>
  <meta charset="utf-8" />
  <meta name="generator" content="pandoc" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <title>subnetting</title>

</head>

<body>
  <h1 id="subnetting">Subnetting</h1>
  <hr />
  <h2 id="temario">Temario</h2>
  <ul>
    <li><a href="#subnetting">Subnetting</a>
      <ul>
        <li><a href="#temario">Temario</a></li>
        <li><a href="#en-palabras-simples">En palabras simples</a></li>
        <li><a href="#conceptos-clave">Conceptos clave</a></li>
        <li><a href="#ejemplo-básico">Ejemplo básico</a></li>
        <li><a href="#ventajas-del-subnetting">Ventajas del subnetting</a></li>
      </ul>
    </li>
  </ul>
  <p><a href="./../readme.md#4-redes">Regresar a la Guía Principal</a></p>
  <hr />
  <h2 id="en-palabras-simples">En palabras simples</h2>
  <p><strong>Subnetting</strong> (o <strong>subneteo</strong>) es un
    proceso que se usa en redes informáticas para <strong>dividir una red
      grande en redes más pequeñas llamadas subredes</strong>
    (<em>subnets</em>). Esto se hace para <strong>organizar mejor el
      tráfico</strong>, <strong>aprovechar direcciones IP</strong>,
    <strong>mejorar la seguridad</strong> y <strong>optimizar el
      rendimiento</strong> de la red.
  </p>
  <p>Imagina que tienes una gran red con muchas computadoras (por ejemplo,
    toda una empresa). En lugar de que todas estén en la misma red —lo que
    puede causar congestión y desorden—, <strong>divides esa red en partes
      más pequeñas</strong> (por departamentos, pisos, o funciones). Cada
    parte se comporta como una “mini red” dentro de la red principal.</p>
  <hr />
  <h2 id="conceptos-clave">Conceptos clave</h2>
  <table>
    <colgroup>
      <col style="width: 16%" />
      <col style="width: 83%" />
    </colgroup>
    <thead>
      <tr>
        <th>Término</th>
        <th>Significado</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>IP Address</strong></td>
        <td>Dirección única que identifica un dispositivo en la red (ej:
          <code>192.168.1.10</code>).
        </td>
      </tr>
      <tr>
        <td><strong>Network ID</strong></td>
        <td>Parte de la IP que identifica la red.</td>
      </tr>
      <tr>
        <td><strong>Host ID</strong></td>
        <td>Parte que identifica a un dispositivo (host) dentro de esa red.</td>
      </tr>
      <tr>
        <td><strong>Subnet Mask</strong></td>
        <td>Indica cuántos bits pertenecen a la red y cuántos al host. (Ej:
          <code>255.255.255.0</code> o <code>/24</code>).
        </td>
      </tr>
      <tr>
        <td><strong>CIDR Notation</strong></td>
        <td>Forma abreviada de expresar la máscara (ej: <code>/24</code>
          equivale a <code>255.255.255.0</code>).</td>
      </tr>
    </tbody>
  </table>
  <hr />
  <h2 id="ejemplo-básico">Ejemplo básico</h2>
  <p>Supongamos que tienes la red:</p>
  <div class="sourceCode" id="cb1">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="ex">192.168.1.0</span> /24</span></code></pre>
  </div>
  <p>Esto significa:</p>
  <ul>
    <li><strong>Rango total:</strong> 192.168.1.0 – 192.168.1.255</li>
    <li><strong>256 direcciones posibles (0–255)</strong></li>
    <li><strong>Host válidos:</strong> 254 (porque una es la dirección de
      red y otra la de broadcast)</li>
  </ul>
  <p>Si haces <strong>subnetting</strong> y divides <code>/24</code> en
    <strong>dos subredes /25</strong>, obtienes:
  </p>
  <table>
    <thead>
      <tr>
        <th>Subred</th>
        <th>Rango de IPs</th>
        <th>Broadcast</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>192.168.1.0/25</td>
        <td>192.168.1.0 – 192.168.1.127</td>
        <td>192.168.1.127</td>
      </tr>
      <tr>
        <td>192.168.1.128/25</td>
        <td>192.168.1.128 – 192.168.1.255</td>
        <td>192.168.1.255</td>
      </tr>
    </tbody>
  </table>
  <p>Ahora tienes <strong>dos subredes</strong> con <strong>126 hosts
      válidos</strong> cada una.</p>
  <hr />
  <h2 id="ventajas-del-subnetting">Ventajas del subnetting</h2>
  <p>✅ Reduce el tráfico innecesario (broadcasts).</p>
  <p>✅ Mejora la seguridad al aislar segmentos.</p>
  <p>✅ Permite administrar mejor las direcciones IP.</p>
  <p>✅ Hace más eficiente la red y su mantenimiento.</p>
  <hr />
  <p><a href="./../readme.md#4-redes">Regresar a la Guía Principal</a></p>
  <blockquote>
    <p><strong>Autor:</strong> Fravelz</p>
  </blockquote>
</body>

</html>