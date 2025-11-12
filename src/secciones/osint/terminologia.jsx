import Estructura from "../../componentes/organismos/estructura.jsx";
import Lista from "../../componentes/moleculas/lista.jsx";
import Titulo from "../../componentes/moleculas/titulo.jsx";
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
