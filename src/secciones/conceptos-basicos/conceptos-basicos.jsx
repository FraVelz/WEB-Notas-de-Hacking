import Estructura, { TemarioAside } from "./../../componentes/estructura";

import Linea from "../../componentes/linea";
import Texto from "../../componentes/texto";
import Titulo from "../../componentes/titulo";
import Lista from "../../componentes/lista";

function TemarioConceptos({ className = "" }) {
  return (
    <Lista className={className}>
      <li>
        <a href="#ciberseguridad">Ciberseguridad</a>
        <Lista>
          <li><a href="#temario">Temario</a></li>
          <li><a href="#0-seguridad-de-la-información-vs-seguridad-informatica-vs-ciberseguridad">0. Seguridad de la información Vs Seguridad informática Vs Ciberseguridad</a></li>
          <li><a href="#1-qué-es">1. ¿Qué es?</a></li>
          <li><a href="#2-objetivos">2. Objetivos</a></li>
          <li>
            <a href="#3-terminologías">3. Terminologías</a>
            <Lista>
              <li><a href="#exploit">Exploit</a></li>
              <li><a href="#payload">Payload</a></li>
              <li><a href="#0-day-zero-day">0-day (Zero-Day)</a></li>
              <li><a href="#malware-y-tipos-de-malware">Malware y tipos de Malware</a></li>
              <li><a href="#vulnerabilidad">Vulnerabilidad</a></li>
              <li><a href="#amenaza">Amenaza</a></li>
              <li><a href="#riesgo">Riesgo</a></li>
            </Lista>
          </li>
          <li><a href="#3-amenazas-comunes">3. Amenazas comunes</a></li>
          <li><a href="#4-vectores-de-ataque">4. Vectores de ataque</a></li>
          <li><a href="#5-buenas-prácticas-de-seguridad">5. Buenas prácticas de seguridad</a></li>
          <li><a href="#6-áreas-de-ciberseguridad">6. Áreas de ciberseguridad</a></li>
          <li><a href="#7-tipos-de-hackers-por-su-actuar">7. Tipos de hackers (por su actuar)</a></li>
          <li><a href="#8-tipos-de-hackers-por-su-rol">8. Tipos de hackers (por su rol)</a></li>
          <li><a href="#9-herramientas-básicas-en-ciberseguridad">9. Herramientas básicas en ciberseguridad</a></li>
        </Lista>
      </li>
    </Lista>
  );
}

function Conceptos_Basicos({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" id="ciberseguridad">Ciberseguridad</Titulo>

        <Linea />

        <Titulo title="h2" id="temario">Temario</Titulo>
        <TemarioConceptos className="bg-gray-900 rounded-md p-4 mb-4 list-decimal 2xl:hidden" />

        {/* ...existing content... */}

        <Texto><a href="./../readme.md#0-conceptos-básicos">Regresar a la guía
          principal</a></Texto>

        <Linea />

        {/* resto del documento permanece igual */}
      </Estructura>

      <aside className="hidden 2xl:block sticky top-5 self-start w-4/5 min-w-72 max-w-fit">
        <Titulo title="h2" className="select-none">Temario</Titulo>
        <TemarioConceptos className="bg-gray-900 rounded-md p-4 mb-4 list-decimal" />
      </aside>
    </>
  );
}

export default Conceptos_Basicos;
