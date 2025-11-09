import Estructura from "../../componentes/estructura.jsx";

import Titulo from "./../../componentes/titulo.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Linea from "./../../componentes/linea.jsx";

function nameabcd({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" className="text-center">Terminologías</Titulo>

        <Lista>
          <li>Dominio: Es la dirección única que identifica, un sitio web en
            internet, como google.com.</li>
          <li>…</li>
        </Lista>
      </Estructura>
    </>
  );
}
export default nameabcd;
