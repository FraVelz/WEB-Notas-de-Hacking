import Estructura, { TemarioCompleto, TemarioAsideCompleto } from "../../componentes/estructura.jsx";

import Titulo from "./../../componentes/titulo.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Linea from "./../../componentes/linea.jsx";
import Enlace from "../../componentes/enlace.jsx";


function Temario({ className = "" }) {
  return (
    <Lista className={className}>
    </Lista>
  );
}

function nameabcd({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" className="text-center">Google Doorks</Titulo>

        <Texto>Es una técnica de búsqueda avanzada en Google, para poder conocer
          información concreta a base de poder ir aplicando filtros en los
          resultados, operadores conocidos como dorks.</Texto>

        <TemarioCompleto temario={Temario} />

        <Titulo title="h2" id="operadores-dorks">Operadores dorks</Titulo>

        <Texto>Nota el asterisco (*) dice que cualquier palabra puede pasar el
          filtro, normalmente se utiliza para cuando se necesita filtrar más
          resultados.</Texto>
        <div className="sourceCode" id="cb1">
          <pre
            className="sourceCode txt"><code className="sourceCode default"><span id="cb1-1"><Enlace href="#cb1-1" aria-hidden="true" tabindex="-1"></Enlace >site:reddit.*</span></code></pre>
        </div>
        <Texto>Esto apunta a todas las páginas que empiezan por reddit sin importar
          como termine, pueden terminal por ejemplo reddit.us, reddit.arg,
          reddit.paypal, o reddit.store, etc…</Texto>
        <Texto>También otra consideración es que puedes utilizar no solo palabra en
          clave, sino también, frases claves para buscar y se hace con ““, de la
          siguiente manera.</Texto>
        <div className="sourceCode" id="cb2">
          <pre
            className="sourceCode txt"><code className="sourceCode default"><span id="cb2-1"><Enlace href="#cb2-1" aria-hidden="true" tabindex="-1"></Enlace >intitle:&quot;Tomar un Mate&quot;</span></code></pre>
        </div>
        <Texto>Es importante tener en cuenta que todos estos operadores están
          escritos de la manera:</Texto>
        <div className="sourceCode" id="cb3">
          <pre
            className="sourceCode txt"><code className="sourceCode default"><span id="cb3-1"><Enlace href="#cb3-1" aria-hidden="true" tabindex="-1"></Enlace >clave:valor</span></code></pre>
        </div>
        <Texto>Sin espacios a menos que se usen comillas dobles, pero todo lo que
          esta afuera eso lo reconoce Google como palabras de una búsqueda
          normal.</Texto>
        <div className="sourceCode" id="cb4">
          <pre
            className="sourceCode txt"><code className="sourceCode default"><span id="cb4-1"><Enlace href="#cb4-1" aria-hidden="true" tabindex="-1"></Enlace >intitle:&quot;Uala prestamos&quot; prestamos sin intereses</span></code></pre>
        </div>
        <Texto>En este caso buscara <strong>préstamos sin intereses</strong>, y
          luego filtrara por títulos que contengan <strong>Uala
            préstamos</strong>.</Texto>
        <ol type="1">
          <li>El primer operador dork básico es site, si usas este operador luego
            (:) dos puntos, y un dominio, buscara todos los resultados que contengan
            ese dominio.</li>
        </ol>
        <div className="sourceCode" id="cb5">
          <pre
            className="sourceCode txt"><code className="sourceCode default"><span id="cb5-1"><Enlace href="#cb5-1" aria-hidden="true" tabindex="-1"></Enlace >site:reddit.com</span></code></pre>
        </div>
        <ol start="2" type="1">
          <li>inurl, busca en la URL de Google, todos los que contengan la palabra
            clave, en la URL.</li>
        </ol>
        <div className="sourceCode" id="cb6">
          <pre
            className="sourceCode txt"><code className="sourceCode default"><span id="cb6-1"><Enlace href="#cb6-1" aria-hidden="true" tabindex="-1"></Enlace >inurl:palabraclave</span></code></pre>
        </div>
        <ol start="3" type="1">
          <li>intitle, busca utilizando la palabra, y filtrando por títulos de la
            web, los que no contengan ese título o esa palabra clave no son
            mostrados por el buscador.</li>
        </ol>
        <div className="sourceCode" id="cb7">
          <pre
            className="sourceCode txt"><code className="sourceCode default"><span id="cb7-1"><Enlace href="#cb7-1" aria-hidden="true" tabindex="-1"></Enlace >intitle:tomarmate</span></code></pre>
        </div>
        <ol start="4" type="1">
          <li>ext y filetype, estos comandos nos permite buscar por extensiones,
            son muy similares, pero su diferencia radica en que filetype reconoce
            archivos que Google reconocen, pero ext muestra archivos con la
            extensión sin importar si el formato lo reconoce o no Google.</li>
        </ol>
        <div className="sourceCode" id="cb8">
          <pre
            className="sourceCode txt"><code className="sourceCode default"><span id="cb8-1"><Enlace href="#cb8-1" aria-hidden="true" tabindex="-1"></Enlace >ext:log Errores de reddit</span></code></pre>
        </div>
        <div className="sourceCode" id="cb9">
          <pre
            className="sourceCode txt"><code className="sourceCode default"><span id="cb9-1"><Enlace href="#cb9-1" aria-hidden="true" tabindex="-1"></Enlace >filetype:pdfs Cuent</span></code></pre>
        </div>
        <Texto>Con lo anterior se puede hacer búsquedas en Google con filtros, y
          encontrar información pública que a veces los creadores de webs creen
          que no son públicas de sus webs, y otras cosas, es importante tener en
          cuenta que deberías buscar palabras claves o frases claves según lo que
          quieras buscar, aunque hay que tener cuidado porque se pueden indexar
          sitios http: que no son seguros y que el dueño de la página si quiere te
          puede doxear o hackear porque la web no tiene el protocolo https.</Texto>
        <Texto>En la página web de Google hacking data base, puedes encontrar
          operadores dorks especializados para búsquedas que se llegan, a tener o
          usar, para la ciberseguridad.</Texto>
      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}
export default nameabcd;
