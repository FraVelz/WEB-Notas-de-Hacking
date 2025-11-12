import Enlace from "../../componentes/atomos/enlace";
import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../../componentes/organismos/estructura";
import Linea from "../../componentes/atomos/linea";
import Lista from "../../componentes/moleculas/lista";
import Texto from "./../../componentes/atomos/texto";
import Titulo from "../../componentes/moleculas/titulo";
function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li>
        <Enlace href="#qué-es-la-huella-digital">¿Qué es la huella digital?</Enlace >
      </li>
      <li>
        <Enlace href="#tipos-de-huella-digital">Tipos de huella digital</Enlace >
      </li>
      <li>
        <Enlace href="#por-qué-es-importante">Por qué es importante</Enlace >
      </li>
      <li>
        <Enlace href="#cómo-protegerla">Cómo protegerla</Enlace >
      </li>
      <li>
        <Enlace href="#visualizar-tú-huella-digital-al-navegar">
          Visualizar tú huella digital al navegar
        </Enlace >
      </li>
    </Lista>
  );
}

function Huella_Digital() {
  return (
    <>
      <Estructura>

        <Titulo title="h1" className="text-center">Definiciones</Titulo>

        <Texto>Definiciones y diferencias entre privacidad y anonimato.</Texto>

        <Linea />

        <TemarioCompleto temario={Temario} />

        <Titulo title="h2" id="qué-es-la-huella-digital">¿Qué es la huella digital?</Titulo>

        <Texto>
          Es{" "}
          <strong>
            el rastro que dejamos cada vez que usamos internet o dispositivos
            digitales
          </strong>
          . Incluye todo lo que generamos, compartimos o registramos en línea.
        </Texto>
        <Lista>
          <li>
            <strong>Ejemplo:</strong>
            <Lista>
              <li>Publicar fotos o comentarios en redes sociales</li>
              <li>Entrar a un sitio web o buscar algo en Google</li>
              <li>Comprar en tiendas online</li>
              <li>Usar apps o enviar mensajes</li>
            </Lista>
          </li>
        </Lista >
        <Texto>
          Cada acción deja{" "}
          <strong>
            información que puede ser almacenada, analizada o usada por terceros
          </strong>
          .
        </Texto>
        <Linea />
        <Titulo title="h2" id="tipos-de-huella-digital">Tipos de huella digital</Titulo>
        <ol type="1">
          <li>
            <Texto>
              <strong>Activa:</strong>
            </Texto>
            <Lista>
              <li>
                Todo lo que{" "}
                <strong>tú publicas o compartes voluntariamente</strong>.
              </li>
              <li>
                Ejemplo: fotos en Instagram, comentarios en foros, mensajes en
                WhatsApp.
              </li>
            </Lista>
          </li>
          <li>
            <Texto>
              <strong>Pasiva:</strong>
            </Texto>
            <Lista>
              <li>
                Información que{" "}
                <strong>se genera sin que tú la publiques directamente</strong>.
              </li>
              <li>
                Ejemplo: dirección IP, historial de navegación, cookies,
                geolocalización de tú celular.
              </li>
            </Lista>
          </li>
        </ol>
        <Linea />
        <Titulo title="h2" id="por-qué-es-importante">Por qué es importante</Titulo>
        <Lista>
          <li>
            Puede afectar tú <strong>privacidad</strong> y seguridad.
          </li>        <li>
            Las empresas y gobiernos pueden usar tú huella digital para
            <strong>publicidad, análisis de comportamiento o vigilancia</strong>
            .
          </li>        <li>
            También puede afectar tú <strong>reputación</strong>, profesional o
            personal, sí algo que publicaste se hace público o se interpreta
            mal.
          </li>      </Lista>
        <Linea />
        <Titulo title="h2" id="cómo-protegerla">Cómo protegerla</Titulo>
        <Lista>
          <li>
            Configura <strong>privacidad</strong> en redes sociales y apps.
          </li>
          <li>Borra cookies y rastros de navegación periódicamente.</li>
          <li>
            Usa herramientas de <strong>anonimato</strong> (VPN, Tor, navegadores
            privados).
          </li>
          <li>
            Piensa antes de publicar: todo lo que subes deja un{" "}
            <strong>rastro permanente</strong>.
          </li>
        </Lista>
        <Linea />
        <Titulo title="h2" id="visualizar-tú-huella-digital-al-navegar">
          Visualizar tú huella digital al navegar
        </Titulo>
        <Texto>
          En la página <em>“Cover your tracks”</em>,{" "}
          <strong>puedes ver toda la información actual que tú navegador</strong>{" "}
          puede dar a las páginas webs, cuando tú navegas, te dan incluso algunos
          consejos para ciertos casos.
        </Texto>
        <Texto>
          <Enlace href="https://coveryourtracks.eff.org/">Ir a Cover your tracks</Enlace >
        </Texto>
      </Estructura >

      <TemarioAsideCompleto temario={Temario} />
   </>
  );
}

export default Huella_Digital;

