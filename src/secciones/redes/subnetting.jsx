import Enlace from "../../componentes/atomos/enlace.jsx";
import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../../componentes/organismos/estructura.jsx";
import Linea from "../../componentes/atomos/linea.jsx";
import Lista from "../../componentes/moleculas/lista.jsx";
import Texto from "./../../componentes/atomos/texto.jsx";
import Titulo from "../../componentes/moleculas/titulo.jsx";
import { Tabla, TablaCabezera, TablaFila, TablaUnica } from "../../componentes/moleculas/tabla.jsx";
import Codigo from "../../componentes/moleculas/codigo.jsx";

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
        <Tabla>
  <TablaCabezera headers={["Término", "Significado"]} />

  <tbody>
    <TablaFila>
      <TablaUnica><strong>IP Address</strong></TablaUnica>
      <TablaUnica>Dirección única que identifica un dispositivo en la red (ej:
                192.168.1.10).</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>Network ID</strong></TablaUnica>
      <TablaUnica>Parte de la IP que identifica la red.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>Host ID</strong></TablaUnica>
      <TablaUnica>Parte que identifica a un dispositivo (host) dentro de esa red.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>Subnet Mask</strong></TablaUnica>
      <TablaUnica>Indica cuántos bits pertenecen a la red y cuántos al host. (Ej:
                255.255.255.0 o /24).</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>CIDR Notation</strong></TablaUnica>
      <TablaUnica>Forma abreviada de expresar la máscara (ej: /24
                equivale a 255.255.255.0).</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
        <Linea />
        <Titulo title="h2" id="ejemplo-básico">Ejemplo básico</Titulo>
        <Texto>Supongamos que tienes la red:</Texto>
        <Codigo code={`192.168.1.0 /24`} language="bash" />
        <Texto>Esto significa:</Texto>
        <Lista>
          <li><strong>Rango total:</strong> 192.168.1.0 – 192.168.1.255</li>
          <li><strong>256 direcciones posibles (0–255)</strong></li>
          <li><strong>Host válidos:</strong> 254 (porque una es la dirección de
            red y otra la de broadcast)</li>
        </Lista>
        <Texto>Sí haces <strong>subnetting</strong> y divides /24 en
          <strong>dos subredes /25</strong>, obtienes:
        </Texto>
        <Tabla>
  <TablaCabezera headers={["Subred", "Rango de IPs", "Broadcast"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>192.168.1.0/25</TablaUnica>
      <TablaUnica>192.168.1.0 – 192.168.1.127</TablaUnica>
      <TablaUnica>192.168.1.127</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>192.168.1.128/25</TablaUnica>
      <TablaUnica>192.168.1.128 – 192.168.1.255</TablaUnica>
      <TablaUnica>192.168.1.255</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
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
