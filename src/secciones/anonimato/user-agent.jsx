function User_Agent() {
  return (
    <>
      <h1 id="user-agent">User Agent</h1>
      <hr />
      <h2 id="temario">Temario</h2>
      <ul>
        <li>
          <a href="#user-agent">User Agent</a>
          <ul>
            <li>
              <a href="#temario">Temario</a>
            </li>
            <li>
              <a href="#definición">Definición</a>
            </li>
            <li>
              <a href="#qué-incluye-normalmente">Qué incluye normalmente</a>
            </li>
            <li>
              <a href="#para-qué-sirve">Para qué sirve</a>
            </li>
            <li>
              <a href="#nota">Nota</a>
            </li>
            <li>
              <a href="#como-modificar-tu-user-agent">
                Como modificar tu User-Agent
              </a>
            </li>
            <li>
              <a href="#extra">Extra</a>
            </li>
          </ul>
        </li>
      </ul>
      <p>
        <a href="./../readme.md#9-privacidad-y-anonimato">
          Regresar a la guía principal
        </a>
      </p>
      <hr />
      <h2 id="definición">Definición</h2>
      <p>
        El <strong>user agent</strong> es una{" "}
        <strong>
          cadena de texto que un navegador o aplicación envía a un servidor web
          para identificarse
        </strong>
        . Básicamente dice:
      </p>
      <blockquote>
        <p>
          “Hola, soy este navegador, en este sistema operativo, y puedo manejar
          este tipo de contenido.”
        </p>
      </blockquote>
      <hr />
      <h2 id="qué-incluye-normalmente">Qué incluye normalmente</h2>
      <ol type="1">
        <li>
          <p>
            <strong>Nombre del navegador</strong> (Chrome, Firefox, Safari…)
          </p>
        </li>
        <li>
          <p>
            <strong>Versión del navegador</strong>
          </p>
        </li>
        <li>
          <p>
            <strong>Sistema operativo</strong> (Windows, Linux, Android, iOS…)
          </p>
        </li>
        <li>
          <p>
            <strong>Detalles adicionales</strong> (motor de renderizado, tipo de
            dispositivo, compatibilidad con características)
          </p>
        </li>
      </ol>
      <p>
        <strong>Ejemplo de user agent real:</strong>
      </p>
      <div class="sourceCode" id="cb1">
        <pre class="sourceCode txt">
          <code class="sourceCode default">
            <span id="cb1-1">
              <a href="#cb1-1" aria-hidden="true" tabindex="-1"></a>Mozilla/5.0
              (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like
              Gecko) Chrome/117.0.0.0 Safari/537.36
            </span>
          </code>
        </pre>
      </div>
      <p>Esto indica:</p>
      <ul>
        <li>Navegador: Chrome</li>
        <li>Sistema operativo: Windows 10, 64 bits</li>
        <li>Motor de renderizado: WebKit/AppleWebKit</li>
      </ul>
      <hr />
      <h2 id="para-qué-sirve">Para qué sirve</h2>
      <ul>
        <li>
          <p>
            Los servidores web usan el user agent para{" "}
            <strong>adaptar el contenido</strong>: versión móvil, compatible con
            ciertos navegadores, etc.
          </p>
        </li>
        <li>
          <p>
            En <strong>ciberseguridad</strong> se puede usar para
            <strong>identificar bots o ataques automatizados</strong>.
          </p>
        </li>
        <li>
          <p>
            También sirve en <strong>analítica web</strong> para conocer qué
            navegadores y dispositivos usan los usuarios.
          </p>
        </li>
      </ul>
      <hr />
      <h2 id="nota">Nota</h2>
      <ul>
        <li>
          <p>
            Se puede <strong>modificar o falsificar</strong> el user agent. Por
            ejemplo, los desarrolladores o hackers lo cambian para simular otro
            navegador o dispositivo.
          </p>
        </li>
        <li>
          <p>
            No protege tu identidad por sí mismo; solo dice qué software estás
            usando.
          </p>
        </li>
      </ul>
      <hr />
      <h2 id="como-modificar-tu-user-agent">Como modificar tu User-Agent</h2>
      <p>
        <em>Hay diferentes formas de modificar el user-agent,</em> pero la más
        fácil y simple de implementar es usando una extensión web,
        <strong>aquí la extensión más recomendada</strong> aunque existen muchas
        más:
      </p>
      <p>
        Enlace a la extensión (Chromium):{" "}
        <a href="https://chromewebstore.google.com/detail/user-agent-switcher-and-m/bhchdcejhohfmigjafbampogmaanbfkg">
          Ir a User-Agent Switcher and Manager
        </a>
      </p>
      <p>
        Enlace a la extensión (Firefox):{" "}
        <a href="https://addons.mozilla.org/es/firefox/addon/user-agent-string-switcher/">
          Ir a User-Agent Switcher and Manager
        </a>
      </p>
      <hr />
      <h2 id="extra">Extra</h2>
      <p>
        Crear información falsa, e imágenes de personas (usos de
        ciberinteligencia aunque también lo usan los ciberdelincuentes en la
        darkweb):
      </p>
      <ul>
        <li>
          <p>
            Enlace al generador de identidades falsas:
            https://www.fakenamegenerator.com/
          </p>
        </li>
        <li>
          <p>
            Enlace a ThisPersonDoesNotExist: https://thispersondoesnotexist.com/
          </p>
        </li>
      </ul>
      <hr />
      <p>
        <a href="./../readme.md#9-privacidad-y-anonimato">
          Regresar a la guía principal
        </a>
      </p>
      <blockquote>
        <p>
          <strong>Autor:</strong> Fravelz
        </p>
      </blockquote>
    </>
  );
}

export default User_Agent;
