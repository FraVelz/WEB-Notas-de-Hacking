import Enlace from "./../../componentes/enlace.jsx";
import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "./../../componentes/estructura.jsx";
import Linea from "./../../componentes/linea.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Titulo from "./../../componentes/titulo.jsx";
function Temario({ className = "" }) {
  return (
    <Lista className={className}>
              <li><Enlace href="#en-palabras-simples">En palabras simples</Enlace ></li>
              <li><Enlace href="#conceptos-clave">Conceptos clave</Enlace ></li>
              <li><Enlace href="#ejemplo-básico">Ejemplo básico</Enlace ></li>
              <li><Enlace href="#ventajas-del-subnetting">Ventajas del subnetting</Enlace ></li>
    </Lista>
  );
}

function nameabcd({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" className="text-center">Subnetting</Titulo>
        <Linea />

        <TemarioCompleto temario={Temario} />

        <Titulo title="h2" id="en-palabras-simples">En palabras simples</Titulo>
        <Texto><strong>Subnetting</strong> (o <strong>subneteo</strong>) es un
          proceso que se usa en redes informáticas para <strong>dividir una red
            grande en redes más pequeñas llamadas subredes</strong>
          (<em>subnets</em>). Esto se hace para <strong>organizar mejor el
            tráfico</strong>, <strong>aprovechar direcciones IP</strong>,
          <strong>mejorar la seguridad</strong> y <strong>optimizar el
            rendimiento</strong> de la red.
        </Texto>
        <Texto>Imagina que tienes una gran red con muchas computadoras (por ejemplo,
          toda una empresa). En lugar de que todas estén en la misma red —lo que
          puede causar congestión y desorden—, <strong>divides esa red en partes
            más pequeñas</strong> (por departamentos, pisos, o funciones). Cada
          parte se comporta como una “mini red” dentro de la red principal.</Texto>
        <Linea />
        <Titulo title="h2" id="conceptos-clave">Conceptos clave</Titulo>
        <table>
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
        <Linea />
        <Titulo title="h2" id="ejemplo-básico">Ejemplo básico</Titulo>
        <Texto>Supongamos que tienes la red:</Texto>
        <div className="sourceCode" id="cb1">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb1-1"><Enlace href="#cb1-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">192.168.1.0</span> /24</span></code></pre>
        </div>
        <Texto>Esto significa:</Texto>
        <Lista>
          <li><strong>Rango total:</strong> 192.168.1.0 – 192.168.1.255</li>
          <li><strong>256 direcciones posibles (0–255)</strong></li>
          <li><strong>Host válidos:</strong> 254 (porque una es la dirección de
            red y otra la de broadcast)</li>
        </Lista>
        <Texto>Si haces <strong>subnetting</strong> y divides <code>/24</code> en
          <strong>dos subredes /25</strong>, obtienes:
        </Texto>
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
        <Texto>Ahora tienes <strong>dos subredes</strong> con <strong>126 hosts
          válidos</strong> cada una.</Texto>
        <Linea />
        <Titulo title="h2" id="ventajas-del-subnetting">Ventajas del subnetting</Titulo>
        <Texto>✅ Reduce el tráfico innecesario (broadcasts).</Texto>
        <Texto>✅ Mejora la seguridad al aislar segmentos.</Texto>
        <Texto>✅ Permite administrar mejor las direcciones IP.</Texto>
        <Texto>✅ Hace más eficiente la red y su mantenimiento.</Texto>
      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}
export default nameabcd;
