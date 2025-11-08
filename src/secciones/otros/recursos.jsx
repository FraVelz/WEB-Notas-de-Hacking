import Titulo from "./../../componentes/titulo.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Linea from "./../../componentes/linea.jsx";

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="recursos-para-aprender-ciberseguridad">Recursos para Aprender
        Ciberseguridad</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><a href="#recursos-para-aprender-ciberseguridad">Recursos para
          Aprender Ciberseguridad</a>
          <Lista>
            <li><a href="#temario">Temario</a></li>
            <li><a href="#video-youtube--temario-completo">Video YouTube – Temario
              completo</a></li>
            <li><a href="#academia-s4vitar">Academia S4vitar</a></li>
            <li><a href="#academia-hixec">Academia Hixec</a></li>
          </Lista>
        </li>
      </Lista>
      <Texto><a href="./../readme.md#temario">Regresar a la guía principal</a></Texto>
      <Linea />
      <Titulo title="h2" id="video-youtube-temario-completo">Video YouTube – Temario
        completo</Titulo>
      <Texto><strong>Duración:</strong> Aproximadamente 1 hora</Texto>
      <Texto><strong>Canal:</strong> <a href="https://www.youtube.com/@Xerosec">Xerosec</a></Texto>
      <Texto><strong>Título:</strong> 📝 <em>Aprende Hacking Ético desde 0 GRATIS
        | Cómo empezar en Ciberseguridad | Guía de Aprendizaje 2025</em></Texto>
      <Texto><strong>Enlace directo:</strong> <a href="https://www.youtube.com/watch?v=fUs1LM2b3JA&amp;sttick=0">Ver
        video en YouTube</a></Texto>
      <Texto>Este video ofrece una guía completa para comenzar en ciberseguridad
        desde cero. Presenta un <strong>temario bien estructurado</strong> con
        los fundamentos básicos, incluyendo <strong>conceptos iniciales,
          virtualización, y organización de áreas de estudio</strong>. Varios
        apartados de estas notas están inspirados en la estructura y contenidos
        de dicho video.</Texto>
      <Linea />
      <Titulo title="h2" id="academia-s4vitar">Academia S4vitar</Titulo>
      <Texto>La <strong>Academia S4vitar (Hack4U)</strong> es una de las más
        reconocidas en el mundo hispano. Ofrece formación completa en
        <strong>pentesting y hacking ético</strong>, con un enfoque práctico y
        progresivo.
      </Texto>
      <Texto><strong>Características principales:</strong></Texto>
      <Lista>
        <li>Comunidad activa de ciberseguridad (la más grande en
          Discord).</li>    <li>Sistema de aprendizaje por niveles: cada módulo incluye
          <strong>exámenes</strong> que deben aprobarse para avanzar.
        </li>    <li>Enfoque teórico-práctico con <strong>laboratorios y máquinas
          vulnerables</strong>.</li>    <li>Plataforma complementaria del mismo creador, <strong>Hack
            Vault</strong>, una plataforma para practicar con entornos, para
          prepararse para los certificados.</li>    <li>Numeroso contenido gratuito en su canal de YouTube, de
          <strong>resolución de máquinas y mucho más</strong>.
        </li>  </Lista>
      <Texto><strong>Sitio web y plataforma de práctica:</strong> 🔗 <a href="https://hack4u.io/">https://hack4u.io/</a></Texto>
      <blockquote>
        <Texto>Algunos temas de Linux y Python presentes en este repositorio
          provienen de conceptos aprendidos en la Academia S4vitar y su canal de
          youtube, complementados con apuntes personales.</Texto>
      </blockquote>
      <Linea />
      <Titulo title="h2" id="academia-hixec">Academia Hixec</Titulo>
      <Texto>La <strong>Academia Hixec</strong> ofrece una formación con enfoque
        <strong>teórico y técnico</strong> en áreas como <strong>privacidad,
          anonimato, y seguridad en sistemas Windows</strong>. Sus materiales son
        claros y están orientados a comprender los fundamentos de la
        ciberseguridad desde una perspectiva conceptual y profesional.
      </Texto>
      <Texto><strong>Sitio web:</strong> 🔗 <a href="https://hixec.com/">https://hixec.com/</a></Texto>
      <blockquote>
        <Texto>Los apuntes de este repositorio relacionados con privacidad,
          anonimato y seguridad en Windows están inspirados en contenidos
          aprendidos en la Academia Hixec y su canal de YouTube.</Texto>
      </blockquote>
      <Linea />
      <Texto><a href="./../readme.md#temario">Regresar a la guía principal</a></Texto>
      <blockquote>
        <Texto><strong>Autor:</strong> Fravelz</Texto>
      </blockquote>
    </>
  );
}
export default nameabcd;
