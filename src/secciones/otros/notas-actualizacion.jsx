import { Tabla, TablaCabezera, TablaFila, TablaUnica } from "../../componentes/moleculas/tabla.jsx";

import Enlace from "../../componentes/atomos/enlace.jsx";
import Linea from "../../componentes/atomos/linea.jsx";
import Lista from "../../componentes/moleculas/lista.jsx";
import Texto from "./../../componentes/atomos/texto.jsx";
import Titulo from "../../componentes/moleculas/titulo.jsx";
import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../../componentes/organismos/estructura.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#herramientas-utilizadas">Herramientas utilizadas</Enlace ></li>
      <li><Enlace href="#colabores-más-importantes">Colabores más
        importantes</Enlace ></li>
      <li><Enlace href="#actualización-existentes">Actualización
        Existentes</Enlace ></li>
      <li><Enlace href="#actualización-00v---010v">Actualización (0.0v -
        0.1.0v)</Enlace ></li>
      <li><Enlace href="#actualización-10v---020v">Actualización (1.0v -
        0.2.0v)</Enlace ></li>
    </Lista>
  );
}

function nameabcd({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" id="notas-de-actualizaciones">Notas de actualizaciones</Titulo>
        <Texto><strong>creación del repositorio:</strong> 2025-09-4</Texto>
        <Texto>Información general y amplia, de herramientas, colaboradores,
          actualizaciones, etc.</Texto>
        <Linea />

        <TemarioCompleto temario={Temario} />

        <Titulo title="h2" id="herramientas-utilizadas">Herramientas utilizadas</Titulo>
        <Lista>
          <li><strong>VS Code,</strong> para variedad de herramientas para
            largas jornadas de documentación y escritura.</li>    <li><strong>Extensión de VS Code:</strong> markdownlint, para
              documentar archivos en markdown con formato estándar.</li>    <li><strong>Extensión de VS Code:</strong> ltex, para la revisión de
                la ortografía en español.</li>    <li><strong>Extensión de VS Code:</strong> vim para escribir
                  cómodamente y rápido en vs code.</li>    <li><strong>Extensión de VS Code:</strong> cmake tools, para
                    visualizar archivos tipo markdown.</li>    <li><strong>Extensión de VS Code:</strong> markdown All in One,
                      funciones y atajos de teclado para funciones en markdown como el
                      formateo u otros.</li>    <li><strong>nvim</strong> para hacer modificaciones simples y rápidas
                        a archivos y carpetas.</li>  </Lista>
        <Linea />
        <Titulo title="h2" id="colabores-más-importantes">Colabores más importantes</Titulo>
        <ol type="1">
          <li>Student Ethical <strong>(<span className="citation" data-cites="studentethical">@studentethical</span>)</strong>
          </li>
        </ol>
        <Texto>…</Texto>
        <Linea />
        <Titulo title="h2" id="actualización-existentes">Actualización Existentes</Titulo>
        <Texto>Para rangos de fechas -, para fechas específicas
          ;.
        </Texto>
        <Texto><strong>Fase 1:</strong></Texto>
        <Tabla>
          <TablaCabezera headers={["Nombre de la actualización", "fecha de cambios"]} />

          <tbody>
            <TablaFila>
              <TablaUnica>Update 0.0.1</TablaUnica>
              <TablaUnica>Sep 4, 2025</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Update 0.0.2</TablaUnica>
              <TablaUnica>Sep 5, 2025</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Update 0.0.3</TablaUnica>
              <TablaUnica>Sep 6, 2025; Sep 20, 2025 - Sep 22, 2025</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Update 0.0.4</TablaUnica>
              <TablaUnica>Sep 23, 2025</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>
        <Texto><strong>Fase 2:</strong></Texto>
        <Tabla>
          <TablaCabezera headers={["Nombre de la actualización", "fecha de cambios"]} />

          <tbody>
            <TablaFila>
              <TablaUnica>Actualización: 0.0.5</TablaUnica>
              <TablaUnica>Sep 25, 2025</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Actualización: 0.0.6</TablaUnica>
              <TablaUnica>Sep 26, 2025</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Actualización: 0.0.7</TablaUnica>
              <TablaUnica>Sep 27, 2025</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Actualización: 0.0.8</TablaUnica>
              <TablaUnica>Sep 29, 2025</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Actualización: 0.0.9</TablaUnica>
              <TablaUnica>Sep 30, 2025</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Actualización: 0.1.0</TablaUnica>
              <TablaUnica>Oct 1, 2025</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Actualización: 0.1.1</TablaUnica>
              <TablaUnica>Oct 2, 2025</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Actualización: 0.1.2</TablaUnica>
              <TablaUnica>Oct 3, 2025</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Actualización: 0.1.3</TablaUnica>
              <TablaUnica>Oct 9, 2025</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>
        <Linea />
        <Titulo title="h2" id="actualización-0.0v---0.1.0v">Actualización (0.0v - 0.1.0v)</Titulo>
        <Texto><strong>actualizaciones diarias desde:</strong> 2025-09-20</Texto>
        <Texto><strong>cosas implementadas:</strong></Texto>
        <Lista>
          <li>Creación de todas las secciones del readme.md, faltan información
            más completa y especifica de cada sección es decir de ciertas áreas,
            como redes, bash script, comandos bash, forense, osint, criptografía,
            pentesting, etc.</li>    <li>nuevo apartado readme.md =&gt; 3.ramas de ciberseguridad</li>    <li>nuevo apartado readme.md =&gt; 4.pentesting</li>    <li>nuevo apartado readme.md =&gt; 5.osint</li>    <li>nuevo apartado readme.md =&gt; 6.criptografia</li>    <li>nuevo apartado readme.md =&gt; 7.forense</li>    <li>nuevo archivo completo =&gt; _ramasciberseguridad.md</li>  </Lista>
        <Texto>Mejor organización de directorios y archivos. (dentro de cada
          directorio ya contiene aunque sea 1 archivo con una estructura por
          defecto para algunos).</Texto>
        <Lista>
          <li>nuevo directorio creado =&gt; otros</li>    <li>nuevo directorio creado =&gt; 3.ramas</li>    <li>nuevo directorio creado =&gt; 4.pentesting</li>    <li>nuevo directorio creado =&gt; 5.osint</li>    <li>nuevo directorio creado =&gt; 6.criptografia</li>    <li>nuevo directorio creado =&gt; 7.forense</li>    <li>Archivos creados dentro del directorio 3.ramas: me da pereza
            escribir cada nombre, pero son 10 archivos y cada uno ya tiene una
            estructura textual por defecto.</li>    <li>Cambios pequeños como arreglar algunos enlaces, nuevas secciones
              y organizar mejor los textos de diferentes archivos.</li>    <li>Agregando nuevos archivos en la sección del readme.md, google
                doorks.</li>  </Lista>
        <Linea />
        <Titulo title="h2" id="actualización-1.0v---0.2.0v">Actualización (1.0v - 0.2.0v)</Titulo>
        <Texto><strong>cosas implementadas:</strong></Texto>
        <Lista>
          <li><strong>Se organizó mejor el temario</strong> y <strong>los
            títulos</strong> de la parte del readme para que fuesen más
            claros.</li>    <li>Se agregó más contenido, y se completó mucha información
              incompleta como la parte de los no fundamentales del
            <strong>temario</strong>, y el apartado de 3. bash script
            para que ese apartado fuese lo más completo posible explicando temas de
            bash script.
          </li>    <li>En anteriores actualizaciones había organizado las carpetas, en
            esta también se organizaron los archivos en <strong>carpetas mejores
              organizadas y más explícitas,</strong> esto causo que muchos enlaces
            dejaran de funcionar correctamente también se arreglaron estos
            enlaces.</li>    <li>Previamente se habían <strong>agregado también 10
              archivos</strong> que decía una ruta especifica para cada rama en la
            seguridad que aparecen en el apartado de
            5. Ramas y Especializaciones de ciberseguridad.
          </li>    <li>Se agregó un nuevo apartado Windows y también
            Privacidad y anonimato.
          </li>    <li>Se organizó mejor el readme.md archivo principal,
            para que los temas que se muestren en este mismo, sean los más
            importantes y fundamentales.</li>  </Lista>
        <Texto>…</Texto>
      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}

export default nameabcd;
