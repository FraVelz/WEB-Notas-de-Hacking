import Dividido from "../../componentes/moleculas/dividido.jsx";
import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../../componentes/organismos/estructura.jsx";
import Imagen from "../../componentes/atomos/imagen.jsx";
import Enlace from "../../componentes/atomos/enlace.jsx";
import Linea from "../../componentes/atomos/linea.jsx";
import Lista from "../../componentes/moleculas/lista.jsx";
import Texto from "./../../componentes/atomos/texto.jsx";
import Titulo from "../../componentes/moleculas/titulo.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#video-youtube--temario-completo">Video YouTube - Temario - Gratis</Enlace ></li>
      <li><Enlace href="#academia-s4vitar">Academia S4vitar</Enlace ></li>
      <li><Enlace href="#academia-hixec">Academia Hixec</Enlace ></li>
    </Lista>
  );
}

function nameabcd({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" id="recursos-para-aprender-ciberseguridad">Recursos para Aprender Ciberseguridad</Titulo>

        <Linea />

        <TemarioCompleto temario={Temario} />

        <Titulo title="h2" id="video-youtube-temario-completo">Video YouTube - Temario - Gratis</Titulo>

        <Dividido linea={true} secundario={
          <div className="flex items-center justify-center p-4">
            <Imagen
              src={`https://img.youtube.com/vi/fUs1LM2b3JA/mqdefault.jpg`}
              width={`400px`}
              height={`300px`}
              className="
              max-w-[90vw] max-h-[90vh] w-auto h-auto
              rounded-2xl
              shadow shadow-blue-400
              "/>
          </div>
        }>
          <Texto><strong>Duración:</strong> Aproximadamente 1 hora</Texto>

          <Texto><strong>Canal:</strong> <Enlace href="https://www.youtube.com/@Xerosec">Xerosec</Enlace ></Texto>

          <Texto><strong>Título:</strong> 📝 <em>Aprende Hacking Ético desde 0 GRATIS
            | Cómo empezar en Ciberseguridad | Guía de Aprendizaje 2025</em></Texto>

          <Texto><strong>Enlace directo:</strong> <Enlace href="https://www.youtube.com/watch?v=fUs1LM2b3JA&amp;sttick=0">Ver
            video en YouTube</Enlace ></Texto>

        </Dividido>

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

        <Dividido linea={true} secundario={
          <div className="flex items-center justify-center p-4">
            <Imagen
              src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBiHVMdKP1939J-rWxQUP7QZTwXNVptFuw2Q&s`}
              width={`400px`}
              height={`300px`}
              className="
              max-w-[90vw] max-h-[90vh] w-auto h-auto
              rounded-2xl
              shadow shadow-blue-400
              "/>
          </div>
        }>
          <Texto><strong>Características principales:</strong></Texto>

          <Lista>
            <li>Comunidad activa de ciberseguridad (la más grande en Discord).</li>

            <li>Sistema de aprendizaje por niveles: cada módulo incluye <strong>exámenes</strong> que deben aprobarse para avanzar.</li>

            <li>Enfoque teórico-práctico con <strong>laboratorios y máquinas vulnerables</strong>.</li>

            <li>Plataforma complementaria del mismo creador, <strong>Hack Vault</strong>, una plataforma para practicar con entornos, para prepararse para los certificados.</li>

            <li>Numeroso contenido gratuito en su canal de YouTube, de <strong>resolución de máquinas y mucho más</strong>.</li>
          </Lista>
        </Dividido>
        <Texto><strong>Sitio web y plataforma de práctica:</strong> 🔗 <Enlace href="https://hack4u.io/">https://hack4u.io/</Enlace ></Texto>

        <blockquote>
          <Texto>Algunos temas de Linux y Python presentes en este repositorio
            provienen de conceptos aprendidos en la Academia S4vitar y su canal de
            youtube, complementados con apuntes personales.</Texto>
        </blockquote>
        <Linea />

        <Titulo title="h2" id="academia-hixec">Academia Hixec</Titulo>


        <Dividido linea={true} secundario={
          <div className="flex items-center justify-center p-4">
            <Imagen
              src={`https://img.youtube.com/vi/uJicLSw1Ifo/default.jpg`}
              width={`400px`}
              className="
              max-w-[90vw] max-h-[90vh] w-auto h-auto
              rounded-2xl
              shadow shadow-blue-400
              "/>
          </div>
        }>
          <Texto>La <strong>Academia Hixec</strong> ofrece una formación con enfoque
            <strong>teórico y técnico</strong> en áreas como <strong>privacidad,
              anonimato, y seguridad en sistemas Windows</strong>. Sus materiales son
            claros y están orientados a comprender los fundamentos de la
            ciberseguridad desde una perspectiva conceptual y profesional.
          </Texto>
        </Dividido>
        <Texto><strong>Sitio web:</strong> 🔗 <Enlace href="https://hixec.com/">https://hixec.com/</Enlace ></Texto>
        <blockquote>
          <Texto>Los apuntes de este repositorio relacionados con privacidad,
            anonimato y seguridad en Windows están inspirados en contenidos
            aprendidos en la Academia Hixec y su canal de YouTube.</Texto>
        </blockquote>
      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}
export default nameabcd;
