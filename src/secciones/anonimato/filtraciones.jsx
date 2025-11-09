import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../../componentes/estructura";

import Titulo from "../../componentes/titulo";
import Lista from "../../componentes/lista";
import Texto from "../../componentes/texto";
import Enlace from "../../componentes/enlace";
import Linea from "../../componentes/linea";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li>
        <Enlace href="#precauciones">Precauciones</Enlace >
      </li>
      <li>
        <Enlace href="#1-have-i-been-pwned">1. Have I been pwned</Enlace >
      </li>
      <li>
        <Enlace href="#2-firefox-monitor">2. Firefox Monitor</Enlace >
      </li>
      <li>
        <Enlace href="#3-dark-web-google">3. Dark Web Google</Enlace >
      </li>
      <li>
        <Enlace href="#4-inteligencex">4. InteligenceX</Enlace >
      </li>
      <li>
        <Enlace href="#5-dehashed">5. Dehashed</Enlace >
      </li>
    </Lista>
  );
}

function Filtraciones() {
  return (
    <>
      <Estructura>
        <Titulo title="h1" className="text-center">Filtraciones de datos</Titulo>

        <Texto>Guía para saber si tus datos están filtrados:</Texto>

        <Linea />

        <TemarioCompleto temario={Temario} />
          
        <Titulo title="h2" id="precauciones">Precauciones</Titulo>
        <Texto>
          Para que tus datos no sean filtrados, lo mejor que se puede hacer es no{" "}
          <strong>caer en estafas ni en phishing</strong> por internet.
        </Texto>
        <Texto>
          Como también si una empresa cae en un hackeo y se filtran los datos de
          todos sus clientes como por ejemplo es hackeado Facebook por un
          ciberdelincuente y accede a los datos y los filtra.
        </Texto>
        <Texto>
          Lo que sucede es que la empresa esta obligada a mencionar a sus usuarios
          que fue hackeada, y los usuarios deberán cambiar sus contraseñas lo más
          rápido posible y si hay otras cuentas de otras empresas que utilizas la
          misma contraseña también habrá que cambiarlos.
        </Texto>
        <Linea />
        <Titulo title="h2" id="1-have-i-been-pwned">1. Have I been pwned</Titulo>
        <Texto>
          Anteriormente hablamos de esta herramienta, en la sesión de
          <code>6. herramientas generales</code>, pero la volvemos a mencionar
          porque cumple con la función de las herramientas de esta archivo.
        </Texto>
        <Texto>
          Have I been pwned: (
          <Enlace href="https://haveibeenpwned.com/">Ir a HaveIbeenPwned</Enlace >) Sirve
          para buscar si tu información ha sido filtrada por medio del correo
          electrónico.
        </Texto>
        <Linea />
        <Titulo title="h2" id="2-firefox-monitor">2. Firefox Monitor</Titulo>
        <Texto>
          Esta herramienta Firefox monitor también es igual que la anterior solo
          que es un servicio oficial del propio Firefox{" "}
          <Enlace href="https://www.google.com/url?sa=t&amp;source=web&amp;rct=j&amp;opi=89978449&amp;url=https://translate.google.com/translate%3Fu%3Dhttps://monitor.mozilla.org/%26hl%3Des%26sl%3Den%26tl%3Des%26client%3Dsrp&amp;ved=2ahUKEwj9_qy8-6OQAxUqSjABHZHXDf8QFnoECBUQAQ&amp;usg=AOvVaw2H3Ecmq4usWvGz2VmX9YLp">
            Ir a Firefox Monitor
          </Enlace >
        </Texto>
        <Linea />
        <Titulo title="h2" id="3-dark-web-google">3. Dark Web Google</Titulo>
        <Texto>
          Esta extensión sirve para tu cuenta personal de Google, Google ofrece
          medidas de seguridad para tu cuenta como también medidas de privacidad y
          búsqueda de filtraciones en la Dark Web, puedes acceder en el siguiente
          enlace o también entrando en configuraciones de tu perfil de Google:
        </Texto>
        <Texto>
          <Enlace href="https://myactivity.google.com/dark-web-report/dashboard?hl=es&amp;utm_source=google-account&amp;utm_medium=web&amp;utm_campaign=my_account_dark_web_report_member_card&amp;pli=1">
            Ir a Google Reporte Dark Web
          </Enlace >
        </Texto>
        <Linea />
        <Titulo title="h2" id="4-inteligencex">4. InteligenceX</Titulo>
        <Texto>
          InteligenceX sirve igual como los otros a diferencia que con una
          supscripcion puedes ver los datos filtrados de los correos que busques:
        </Texto>
        <Texto>
          <Enlace href="https://intelx.io/">Ir a InteligenceX</Enlace >
        </Texto>
        <Linea />
        <Titulo title="h2" id="5-dehashed">5. Dehashed</Titulo>
        <Texto>
          Es una herramienta similar a las anteriores, pero reúne las mejores
          cosas: https://dehashed.com/
        </Texto>
        <Texto>Permite ver datos filtrados, con las versiones pagas.</Texto>
      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}

export default Filtraciones;
