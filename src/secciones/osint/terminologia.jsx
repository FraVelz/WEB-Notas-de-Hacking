import Titulo from "./../../componentes/titulo.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Linea from "./../../componentes/linea.jsx";

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="terminologías">Terminologías</Titulo>
      <Lista>
        <li>Dominio: Es la dirección única que identifica, un sitio web en
          internet, como google.com.</li>    <li>…</li>  </Lista>
      <Texto><a href="./../readme.md#7-osint">Regresar a la guía principal</a></Texto>
      <blockquote>
        <Texto><strong>Autor:</strong> Fravelz</Texto>
      </blockquote>
    </>
  );
}
export default nameabcd;
