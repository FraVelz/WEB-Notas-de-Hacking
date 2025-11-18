import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../../componentes/organismos/estructura.jsx";

import Enlace from "../../componentes/atomos/enlace.jsx";
import Linea from "../../componentes/atomos/linea.jsx";
import Lista from "../../componentes/moleculas/lista.jsx";
import Texto from "./../../componentes/atomos/texto.jsx";
import Titulo from "../../componentes/moleculas/titulo.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#qué-es-la-concientización-en-ciberseguridad">¿Qué es la
        concientización en ciberseguridad?</Enlace ></li>
      <li><Enlace href="#1-redes-wi-fi-públicas-o-desconocidas">1. Redes Wi-Fi
        públicas o desconocidas</Enlace ></li>
      <li><Enlace href="#2-phishing-suplantación-para-robar-datos">2. Phishing
        (suplantación para robar datos)</Enlace ></li>
      <li><Enlace href="#3-enlaces-y-urls-maliciosas">3. Enlaces y URLs
        maliciosas</Enlace ></li>
      <li><Enlace href="#4-códigos-qr-maliciosos">4. Códigos QR maliciosos</Enlace ></li>
      <li><Enlace href="#5-contraseñas-débiles-o-reutilizadas">5. Contraseñas
        débiles o reutilizadas</Enlace ></li>
      <li><Enlace href="#6-software-y-actualizaciones">6. Software y
        actualizaciones</Enlace ></li>
      <li><Enlace href="#7-ingeniería-social">7. Ingeniería social</Enlace ></li>
      <li><Enlace href="#8-dispositivos-físicos">8. Dispositivos físicos</Enlace ></li>
      <li><Enlace href="#hábitos-esenciales-de-ciberseguridad-personal">Hábitos
        esenciales de ciberseguridad personal</Enlace ></li>
      <li><Enlace href="#en-resumen">En resumen</Enlace ></li>
    </Lista>
  );
}

function nameabcd({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" id="la-concientización-en-la-ciberseguridad">La Concientización en
          la Ciberseguridad</Titulo>

        <Texto>
          Enlace para aprender a reconocer Phishing, y concientizar a las personas en entornos laborales:
        </Texto>

        <Lista className="
            p1 list-disc
            ">
          <li>
            <Enlace href="https:/phishingquiz.withgoogle.com/">Ir a Phishing Quiz With Google</Enlace>
          </li>
        </Lista>
        <Texto>La concientización en ciberseguridad es uno de los pilares más
          importantes para proteger una empresa, o uno mismo, de ataques
          cibernéticos. La mayoría los ataques no se basan en hackeos avanzados,
          sino en errores humanos, por ejemplo, dar clic en un enlace malicioso,
          usar una red pública sin protección o compartir información sensible sin
          pensarlo.</Texto>

        <TemarioCompleto temario={Temario} />

        <Linea />

        <Titulo title="h2" id="qué-es-la-concientización-en-ciberseguridad">¿Qué es la
          concientización en ciberseguridad?</Titulo>
        <Texto>Es el conjunto de conocimientos, hábitos y comportamientos que te
          ayudan a reconocer, evitar y responder correctamente ante amenazas
          digitales. Su objetivo es que tú seas la primera línea de defensa,
          evitando caer en trampas que los hackers usan para robar información o
          dinero.</Texto>
        <Texto>A continuación los riesgos más comunes y cómo prevenirlos…</Texto>
        <Linea />
        <Titulo title="h2" id="1-redes-wi-fi-públicas-o-desconocidas">1. Redes Wi-Fi públicas o
          desconocidas</Titulo>
        <Texto><strong>Ejemplo:</strong> Conectarte al Wi-Fi gratis de un café,
          aeropuerto o centro comercial.</Texto>
        <Texto><strong>Riesgo:</strong> Los atacantes pueden:</Texto>
        <Lista>
          <li>Espiar lo que haces (interceptar tráfico no cifrado).</li>
          <li>Crear una red falsa con un nombre similar (“FreeAirportWiFi”).</li>
          <li>Inyectar virus o redirigirte a sitios falsos.</li>
        </Lista>
        <Texto><strong>Qué hacer:</strong></Texto>
        <Lista>
          <li>Evita conectarte a redes públicas sin necesidad.</li>
          <li>Sí debes hacerlo, usa una VPN.</li>
          <li>Nunca entres a tú banco, correo o redes sociales en una red
            pública.</li>
          <li>Desactiva la conexión automática a redes Wi-Fi.</li>
        </Lista>
        <Linea />
        <Titulo title="h2" id="2-phishing-suplantación-para-robar-datos">2. Phishing
          (suplantación para robar datos)</Titulo>
        <Texto><strong>Ejemplo:</strong> Te llega un correo o mensaje diciendo que
          tú cuenta será suspendida, con un botón para “verificar”.</Texto>
        <Texto><strong>Riesgo:</strong> El enlace te lleva a una página falsa (muy
          parecida a la real) que roba tus credenciales.</Texto>
        <Texto><strong>Cómo detectarlo:</strong></Texto>
        <Lista>
          <li>El remitente o dominio es sospechoso (por ejemplo:
            micorreo@banc0.com en lugar de
            micorreo@banco.com).
          </li>    <li>Te presionan con urgencia (“haz clic ahora o perderás tú
            cuenta”).</li>    <li>Tiene errores ortográficos o frases extrañas.</li>  </Lista>
        <Texto><strong>Qué hacer:</strong></Texto>
        <Lista>
          <li>No abras enlaces desde correos o mensajes sospechosos.</li>
          <li>Escribe tú mismo la URL oficial en el navegador.</li>
          <li>Activa la verificación en dos pasos (2FA) en tus cuentas.</li>
        </Lista>
        <Linea />
        <Titulo title="h2" id="3-enlaces-y-urls-maliciosas">3. Enlaces y URLs maliciosas</Titulo>
        <Texto><strong>Ejemplo:</strong> Un amigo te manda un enlace “gracioso” o de
          una “oferta increíble”.</Texto>
        <Texto><strong>Riesgo:</strong> Puede ser una web que descarga malware o
          roba tú sesión.</Texto>
        <Texto><strong>Cómo protegerte:</strong></Texto>
        <Lista>
          <li>Pasa el cursor por encima del enlace antes de abrirlo (sin hacer
            clic) para ver la dirección real.</li>
          <li>Usa acortadores con precaución (bit.ly,
            tinyurl) —algunos ocultan direcciones falsas.
          </li>
          <li>Sí dudas, analiza el enlace con <Enlace href="https://www.virustotal.com">VirusTotal.com</Enlace >.</li>
        </Lista>
        <Linea />
        <Titulo title="h2" id="4-códigos-qr-maliciosos">4. Códigos QR maliciosos</Titulo>
        <Texto><strong>Ejemplo:</strong> Ves un QR pegado en una pared o en una mesa
          de restaurante.</Texto>
        <Texto><strong>Riesgo:</strong> Puede redirigirte a una web fraudulenta o
          descargar una app maliciosa.</Texto>
        <Texto><strong>Prevención:</strong></Texto>
        <Lista>
          <li>No escanees QRs en lugares desconocidos o públicos.</li>
          <li>Verifica que el QR no esté pegado encima de otro (común en
            fraudes).</li>
          <li>Usa apps que muestren la URL antes de abrirla.</li>
        </Lista>
        <Linea />
        <Titulo title="h2" id="5-contraseñas-débiles-o-reutilizadas">5. Contraseñas débiles o
          reutilizadas</Titulo>
        <Texto><strong>Riesgo:</strong> Sí un sitio donde usaste tú contraseña se
          filtra, los atacantes pueden acceder a todas tus otras cuentas.</Texto>
        <Texto><strong>Buenas prácticas:</strong></Texto>
        <Lista>
          <li>Usa contraseñas largas, únicas y aleatorias (mínimo 12
            caracteres).</li>
          <li>Usa un gestor de contraseñas (como Bitwarden, KeePass o
            1Password).</li>
          <li>Activa autenticación de dos factores (2FA) siempre que sea
            posible.</li>
        </Lista>
        <Linea />
        <Titulo title="h2" id="6-software-y-actualizaciones">6. Software y actualizaciones</Titulo>
        <Texto><strong>Riesgo:</strong> Usar sistemas o apps desactualizadas te deja
          vulnerable a exploits conocidos.</Texto>
        <Texto><strong>Consejos:</strong></Texto>
        <Lista>
          <li>Mantén tú sistema operativo y navegador actualizados.</li>
          <li>Instala software solo desde fuentes oficiales.</li>
          <li>Evita cracks o programas piratas —muchos incluyen troyanos o
            spyware.</li>
        </Lista>
        <Linea />
        <Titulo title="h2" id="7-ingeniería-social">7. Ingeniería social</Titulo>
        <Texto><strong>Ejemplo:</strong> Un atacante se hace pasar por técnico de
          soporte o amigo para obtener tus datos.</Texto>
        <Texto><strong>Qué hacer:</strong></Texto>
        <Lista>
          <li>Desconfía de cualquier persona que te pida datos personales o
            contraseñas.</li>
          <li>Verifica su identidad por otro medio oficial.</li>
          <li>Nunca compartas códigos de verificación o contraseñas, ni siquiera
            “por ayuda”.</li>
        </Lista>

        <Linea />

        <Titulo title="h2" id="8-dispositivos-físicos">8. Dispositivos físicos</Titulo>

        <Texto><strong>Ejemplo:</strong> Conectas una memoria USB que
          encontraste.</Texto>
        <Texto><strong>Riesgo:</strong> Puede tener malware que infecte tú
          computadora.</Texto>
        <Texto><strong>Prevención:</strong></Texto>

        <Lista>
          <li>No conectes USBs desconocidas.</li>
          <li>Desactiva la ejecución automática.</li>
          <li>Escanea los dispositivos externos con un antivirus.</li>
        </Lista>

        <Linea />

        <Titulo title="h2" id="hábitos-esenciales-de-ciberseguridad-personal">Hábitos
          esenciales de ciberseguridad personal</Titulo>

        <Lista>
          <li>Usa contraseñas únicas y seguras.</li>
          <li>Activa el 2FA.</li>
          <li>Elimina apps o archivos que no uses.</li>
          <li>No compartas datos personales en redes sociales.</li>
          <li>Revisa los permisos de tus apps (micrófono, cámara, ubicación).</li>
          <li>Desconfía de mensajes o llamadas “urgentes” que pidan datos o
            dinero.</li>
          <li>Haz copias de seguridad de tus archivos importantes.</li>
        </Lista>

        <Linea />

        <Titulo title="h2" id="en-resumen">En resumen</Titulo>
        <blockquote>
          <Texto>La mejor defensa contra los ciberataques no es la tecnología, sino la
            educación del usuario.</Texto>
        </blockquote>
        <Texto><Enlace href="https://www.youtube.com/watch?v=Bz1jX-dH3K8">Video de
          YouTube para profundizar en este y más temas - Hixec</Enlace ></Texto>
        <Texto>Los hackers no siempre rompen sistemas, muchas veces simplemente
          engañan personas. Ser consciente, desconfiar con criterio y actuar con
          precaución puede evitarte el 90% de los problemas de seguridad.</Texto>
      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}
export default nameabcd;
