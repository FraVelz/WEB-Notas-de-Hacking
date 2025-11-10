import Estructura, { TemarioAside, TemarioAsideCompleto, TemarioCompleto } from "./../../componentes/estructura.jsx";

import Titulo from "./../../componentes/titulo.jsx";
import Linea from "./../../componentes/linea.jsx";
import Lista from "./../../componentes/lista.jsx";
import Enlace from "./../../componentes/enlace.jsx";
import Texto from "./../../componentes/texto.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li>
        <Enlace href="#definición">Definición</Enlace >
      </li>
      <li>
        <Enlace href="#qué-incluye-normalmente">Qué incluye normalmente</Enlace >
      </li>
      <li>
        <Enlace href="#para-qué-sirve">Para qué sirve</Enlace >
      </li>
      <li>
        <Enlace href="#nota">Nota</Enlace >
      </li>
      <li>
        <Enlace href="#como-modificar-tu-user-agent">
          Como modificar tu User-Agent
        </Enlace >
      </li>
      <li>
        <Enlace href="#extra">Extra</Enlace >
      </li>
    </Lista>
  );
}


function User_Agent() {
  return (
    <>
      <Estructura>
        <Titulo title="h1" className="text-center">User Agent</Titulo>
        <Linea />

        <TemarioCompleto temario={Temario} />

        <Titulo title="h2" id="definición">Definición</Titulo>
        <Texto>
          El <strong>user agent</strong> es una{" "}
          <strong>
            cadena de texto que un navegador o aplicación envía a un servidor web
            para identificarse
          </strong>
          . Básicamente dice:
        </Texto>
        <blockquote>
          <Texto>
            “Hola, soy este navegador, en este sistema operativo, y puedo manejar
            este tipo de contenido.”
          </Texto>
        </blockquote>
        <Linea />
        <Titulo title="h2" id="qué-incluye-normalmente">Qué incluye normalmente</Titulo>
        <ol type="1">
          <li>
            <strong>Nombre del navegador</strong> (Chrome, Firefox, Safari…)
          </li>        <li>
            <strong>Versión del navegador</strong>
          </li>        <li>
            <strong>Sistema operativo</strong> (Windows, Linux, Android, iOS…)
          </li>        <li>
            <strong>Detalles adicionales</strong> (motor de renderizado, tipo de
            dispositivo, compatibilidad con características)
          </li>      </ol>
        <Texto>
          <strong>Ejemplo de user agent real:</strong>
        </Texto>
        <div className="sourceCode" id="cb1">
          <pre className="sourceCode txt">
            <code className="sourceCode default">
              <span id="cb1-1">
                <Enlace href="#cb1-1" aria-hidden="true" tabindex="-1"></Enlace >Mozilla/5.0
                (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like
                Gecko) Chrome/117.0.0.0 Safari/537.36
              </span>
            </code>
          </pre>
        </div>
        <Texto>Esto indica:</Texto>
        <Lista>
          <li>Navegador: Chrome</li>
          <li>Sistema operativo: Windows 10, 64 bits</li>
          <li>Motor de renderizado: WebKit/AppleWebKit</li>
        </Lista>
        <Linea />
        <Titulo title="h2" id="para-qué-sirve">Para qué sirve</Titulo>
        <Lista>
          <li>
            Los servidores web usan el user agent para{" "}
            <strong>adaptar el contenido</strong>: versión móvil, compatible con
            ciertos navegadores, etc.
          </li>        <li>
            En <strong>ciberseguridad</strong> se puede usar para
            <strong>identificar bots o ataques automatizados</strong>.
          </li>        <li>
            También sirve en <strong>analítica web</strong> para conocer qué
            navegadores y dispositivos usan los usuarios.
          </li>      </Lista>
        <Linea />
        <Titulo title="h2" id="nota">Nota</Titulo>
        <Lista>
          <li>
            Se puede <strong>modificar o falsificar</strong> el user agent. Por
            ejemplo, los desarrolladores o hackers lo cambian para simular otro
            navegador o dispositivo.
          </li>        <li>
            No protege tu identidad por sí mismo; solo dice qué software estás
            usando.
          </li>      </Lista>
        <Linea />
        <Titulo title="h2" id="como-modificar-tu-user-agent">Como modificar tu User-Agent</Titulo>
        <Texto>
          <em>Hay diferentes formas de modificar el user-agent,</em> pero la más
          fácil y simple de implementar es usando una extensión web,
          <strong>aquí la extensión más recomendada</strong> aunque existen muchas
          más:
        </Texto>
        <Texto>
          Enlace a la extensión (Chromium):{" "}
          <Enlace href="https://chromewebstore.google.com/detail/user-agent-switcher-and-m/bhchdcejhohfmigjafbampogmaanbfkg">
            Ir a User-Agent Switcher and Manager
          </Enlace >
        </Texto>
        <Texto>
          Enlace a la extensión (Firefox):{" "}
          <Enlace href="https://addons.mozilla.org/es/firefox/addon/user-agent-string-switcher/">
            Ir a User-Agent Switcher and Manager
          </Enlace >
        </Texto>
        <Linea />
        <Titulo title="h2" id="extra">Extra</Titulo>
        <Texto>
          Crear información falsa, e imágenes de personas (usos de
          ciberinteligencia aunque también lo usan los ciberdelincuentes en la
          darkweb):
        </Texto>
        <Lista>
          <li>
            Enlace al generador de identidades falsas:
            https://www.fakenamegenerator.com/
          </li>        <li>
            Enlace a ThisPersonDoesNotExist: https://thispersondoesnotexist.com/
          </li>      </Lista>
      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
   </>
  );
}

export default User_Agent;
