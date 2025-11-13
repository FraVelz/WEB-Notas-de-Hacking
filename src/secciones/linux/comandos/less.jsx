import Enlace from "../../../componentes/atomos/enlace.jsx";
import Linea from "../../../componentes/atomos/linea.jsx";
import Lista from "../../../componentes/moleculas/lista.jsx";
import Texto from "../../../componentes/atomos/texto.jsx";
import Titulo from "../../../componentes/moleculas/titulo.jsx";
import { Tabla, TablaCabezera, TablaFila, TablaUnica } from "../../../componentes/moleculas/tabla.jsx";
import Codigo from "../../../componentes/moleculas/codigo.jsx";
import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../../../componentes/organismos/estructura.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#qué-hace-exactamente">¿Qué hace exactamente?</Enlace ></li>
      <li><Enlace href="#controles-básicos-dentro-de-less">Controles básicos dentro
        de less</Enlace ></li>
      <li><Enlace href="#ejemplos-útiles">Ejemplos útiles</Enlace ></li>
      <li><Enlace href="#en-resumen">En resumen</Enlace ></li>
    </Lista>
  );
}

function nameabcd({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" id="less-en-linux">Less en Linux</Titulo>
        <Linea />
        <TemarioCompleto temario={Temario} />
        <Titulo title="h3" id="qué-hace-exactamente">¿Qué hace exactamente?</Titulo>
        <Texto>less muestra el contenido <strong>por páginas</strong>,
          no todo de golpe. Esto es muy útil cuando el archivo es largo (como
          logs, código, o configuraciones grandes).</Texto>
        <Texto>Ejemplo:</Texto>
        <Codigo code={`less archivo.txt`} language="bash" />
        <Linea />
        <Titulo title="h3" id="controles-básicos-dentro-de-less">Controles básicos dentro de
          less
        </Titulo>
        <Texto>Una vez abierto el archivo:</Texto>
        <Tabla>
          <TablaCabezera headers={["Tecla", "Acción"]} />

          <tbody>
            <TablaFila>
              <TablaUnica>↓ o <strong>Espacio</strong></TablaUnica>
              <TablaUnica>Avanza una página</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>↑ o <strong>b</strong></TablaUnica>
              <TablaUnica>Retrocede una página</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica><strong>g</strong></TablaUnica>
              <TablaUnica>Ir al principio del archivo</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica><strong>G</strong></TablaUnica>
              <TablaUnica>Ir al final del archivo</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica><strong>/texto</strong></TablaUnica>
              <TablaUnica>Buscar “texto” hacia adelante</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica><strong>n</strong></TablaUnica>
              <TablaUnica>Repetir la búsqueda siguiente</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica><strong>N</strong></TablaUnica>
              <TablaUnica>Repetir la búsqueda anterior</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica><strong>q</strong></TablaUnica>
              <TablaUnica>Salir</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>
        <Linea />
        <Titulo title="h3" id="ejemplos-útiles">Ejemplos útiles</Titulo>
        <Texto>Ver varios archivos:</Texto>
        <Codigo code={`less *.txt`} language="bash" />
        <Texto>(Mueve con :n para siguiente archivo y :p
          para anterior)</Texto>
        <Texto>Ver salida de un comando largo (por ejemplo, un ls con
          muchos resultados):</Texto>
        <Codigo code={`ls -l | less`} language="bash" />
        <Texto>Buscar dentro de un log:</Texto>
        <Codigo code={`less /var/log/syslog
# Luego escribe /error para buscar la palabra "error"`} language="bash" />
        <Linea />
        <Titulo title="h3" id="en-resumen">En resumen</Titulo>
        <Texto>less:</Texto>
        <Lista>
          <li><strong>No edita archivos</strong>, solo los muestra.</li>
          <li><strong>Carga rápido</strong>, aunque el archivo sea enorme.</li>
          <li><strong>Permite búsqueda y navegación avanzada</strong>.</li>
        </Lista>
      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}
export default nameabcd;
