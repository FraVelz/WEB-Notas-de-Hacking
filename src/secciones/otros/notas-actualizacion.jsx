import Enlace from "./../../componentes/enlace.jsx";
import Linea from "./../../componentes/linea.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Titulo from "./../../componentes/titulo.jsx";
function Temario({ className = "" }) {
  return (
    <Lista className={className}></Lista>
  );
}

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="notas-de-actualizaciones">Notas de actualizaciones</Titulo>
      <Texto><strong>creación del repositorio:</strong> 2025-09-4</Texto>
      <Texto>Información general y amplia, de herramientas, colaboradores,
        actualizaciones, etc.</Texto>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><Enlace href="#notas-de-actualizaciones">Notas de actualizaciones</Enlace >
          <Lista>
            <li><Enlace href="#temario">Temario</Enlace ></li>
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
        </li>
      </Lista>
      <Texto><Enlace href="./../readme.md#informaci%c3%b3n">Regresar a la guía
        principal</Enlace ></Texto>
      <Linea />
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
      <Texto>Para rangos de fechas <code>-</code>, para fechas específicas
        <code>;</code>.
      </Texto>
      <Texto><strong>Fase 1:</strong></Texto>
      <table>
        <thead>
          <tr>
            <th>Nombre de la actualización</th>
            <th>fecha de cambios</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Update 0.0.1</td>
            <td>Sep 4, 2025</td>
          </tr>
          <tr>
            <td>Update 0.0.2</td>
            <td>Sep 5, 2025</td>
          </tr>
          <tr>
            <td>Update 0.0.3</td>
            <td>Sep 6, 2025; Sep 20, 2025 - Sep 22, 2025</td>
          </tr>
          <tr>
            <td>Update 0.0.4</td>
            <td>Sep 23, 2025</td>
          </tr>
        </tbody>
      </table>
      <Texto><strong>Fase 2:</strong></Texto>
      <table>
        <thead>
          <tr>
            <th>Nombre de la actualización</th>
            <th>fecha de cambios</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Actualización: 0.0.5</td>
            <td>Sep 25, 2025</td>
          </tr>
          <tr>
            <td>Actualización: 0.0.6</td>
            <td>Sep 26, 2025</td>
          </tr>
          <tr>
            <td>Actualización: 0.0.7</td>
            <td>Sep 27, 2025</td>
          </tr>
          <tr>
            <td>Actualización: 0.0.8</td>
            <td>Sep 29, 2025</td>
          </tr>
          <tr>
            <td>Actualización: 0.0.9</td>
            <td>Sep 30, 2025</td>
          </tr>
          <tr>
            <td>Actualización: 0.1.0</td>
            <td>Oct 1, 2025</td>
          </tr>
          <tr>
            <td>Actualización: 0.1.1</td>
            <td>Oct 2, 2025</td>
          </tr>
          <tr>
            <td>Actualización: 0.1.2</td>
            <td>Oct 3, 2025</td>
          </tr>
          <tr>
            <td>Actualización: 0.1.3</td>
            <td>Oct 9, 2025</td>
          </tr>
        </tbody>
      </table>
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
            incompleta como la parte de los <code>no fundamentales</code> del
          <strong>temario</strong>, y el apartado de <code>3. bash script</code>
          para que ese apartado fuese lo más completo posible explicando temas de
          bash script.
        </li>    <li>En anteriores actualizaciones había organizado las carpetas, en
          esta también se organizaron los archivos en <strong>carpetas mejores
            organizadas y más explícitas,</strong> esto causo que muchos enlaces
          dejaran de funcionar correctamente también se arreglaron estos
          enlaces.</li>    <li>Previamente se habían <strong>agregado también 10
            archivos</strong> que decía una ruta especifica para cada rama en la
          seguridad que aparecen en el apartado de
          <code>5. Ramas y Especializaciones de ciberseguridad</code>.
        </li>    <li>Se agregó un nuevo apartado <code>Windows</code> y también
          <code>Privacidad y anonimato</code>.
        </li>    <li>Se organizó mejor el <code>readme.md</code> archivo principal,
          para que los temas que se muestren en este mismo, sean los más
          importantes y fundamentales.</li>  </Lista>
      <Texto>…</Texto>
    </>
  );
}
export default nameabcd;
