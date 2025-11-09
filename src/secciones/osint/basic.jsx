import Estructura from "../../componentes/estructura.jsx";

import Titulo from "./../../componentes/titulo.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Linea from "./../../componentes/linea.jsx";

function nameabcd({ }) {
  return (
    <Estructura>
      <Titulo title="h1" className="text-center">OSINT</Titulo>

      <Texto>Open Source Intelligence Network (OSINT) Inteligencia de fuentes
        abiertas, es el proceso de recopilar, analizar y utilizar, información
        publica accesible legalmente para obtener inteligencia útil, esta
        información puede estar, disponible en internet, en redes sociales,
        foros, y mucho más.</Texto>
      <Texto>Es importante destacar que la táctica se utiliza para personas
        expuestas en bases públicas, y con mucha huella pública.</Texto>
      <Linea />
      <Titulo title="h2" id="para-qué-se-utiliza">¿Para qué se utiliza?</Titulo>
      <Texto>Para investigar, y buscar filtraciones, o evitar suplantaciones y
        mejorar la privacidad, accesibles en fuentes públicas.</Texto>
      <Linea />
      <Titulo title="h2" id="herramientas-necesarias">Herramientas Necesarias</Titulo>
      <Texto>Esenciales:</Texto>
      <Lista>
        <li>Navegador Web con extensiones útiles: Wappalyzer (para
          identificar tecnologías webs), o buidw.</li>    <li>Google doorks y operadores de búsqueda avanzada.</li>    <li>Wayback Machine para ver versiones antiguas de páginas
            webs.(extensión).</li>    <li>Exif tool para extraer metadatos de archivos, sobre todo imágenes
              y videos.(terminal).</li>    <li>The Harvester para recolectar correos, subdominios y datos
                públicos desde buscadores y servicios.</li>    <li>Maigret Sherlock para buscar perfiles de usuario para buscar
                  perfiles de usuarios en múltiples redes sociales, usando un nombre de
                  usuario.</li>    <li><code>Have i been pwned?</code> Para comprobar si un correo
                    electrónico a estado involucrado en filtraciones de datos.</li>    <li>Showdan para encontrar dispositivos, conectados a internet y
                      expuestos públicamente.</li>    <li>Buscadores de imágenes como google lens, yandex o TI.</li>    <li>OSINT Framework.com</li>  </Lista>
      <Texto>Opcionales:</Texto>
      <Lista>
        <li>Maltego para colocar relaciones entre entidades.</li>    <li>Spiderfoot muchas funciones osint en una sola
          herramienta.</li>    <li>foca para analizar metadatos en un documento.</li>    <li>creepy ayuda a identificar geolocalizacion.</li>    <li>datasploit conjunto de herramientas para la recolección de datos
            públicos.</li>    <li>Epieos para buscar datos asociados a teléfonos o números
              telefónicos.</li>    <li>Whatismyname web, para verificar la disponibilidad o existencia
                de nombres de usuario en distintas plataformas.</li>    <li>fotoforensics para análisis más profundo de imágenes y videos,
                  útil en geolocalización o verificación de contenido.</li>  </Lista>
      <Linea />
      <Titulo title="h2" id="socmint-social-media-intelligent">Socmint (Social Media
        Intelligent)</Titulo>
      <Texto>Es una rama del osint, que se encarga de recopilar y analizar datos
        provenientes de redes sociales, foros y comunidades en línea.</Texto>
      <Lista>
        <li>Monitoreo de actividades y publicaciones.</li>    <li>Análisis de sentimientos y tendencias.</li>
      </Lista>
    </Estructura>
  );
}

export default nameabcd;
