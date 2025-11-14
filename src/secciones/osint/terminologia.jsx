import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../../componentes/organismos/estructura.jsx";
import Lista from "../../componentes/moleculas/lista.jsx";
import Titulo from "../../componentes/moleculas/titulo.jsx";
import Linea from "../../componentes/atomos/linea.jsx";

function Temario({ className = "" }) {
  return (
    <div className={className}>
      {/* Este archivo no tiene enlaces de temario específicos */}
    </div>
  );
}

function nameabcd({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" className="text-center">Terminologías</Titulo>
        <Linea />

        <TemarioCompleto temario={Temario} />

        <Lista>
          <li>Dominio: Es la dirección única que identifica, un sitio web en
            internet, como google.com.</li>
          <li>…</li>
        </Lista>
      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}
export default nameabcd;
