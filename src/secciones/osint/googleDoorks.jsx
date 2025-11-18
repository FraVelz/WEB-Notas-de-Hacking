import Enlace from "../../componentes/atomos/enlace.jsx";
import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../../componentes/organismos/estructura.jsx";
import Lista from "../../componentes/moleculas/lista.jsx";
import Texto from "./../../componentes/atomos/texto.jsx";
import Titulo from "../../componentes/moleculas/titulo.jsx";
import Codigo from "../../componentes/moleculas/codigo.jsx";

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
        <Codigo code={`site:reddit.*`} language="bash" />
        <Texto>Esto apunta a todas las páginas que empiezan por reddit sin importar
          como termine, pueden terminal por ejemplo reddit.us, reddit.arg,
          reddit.paypal, o reddit.store, etc…</Texto>
        <Texto>También otra consideración es que puedes utilizar no solo palabra en
          clave, sino también, frases claves para buscar y se hace con ““, de la
          siguiente manera.</Texto>
        <Codigo code={`intitle:"Tomar un Mate"`} language="bash" />
        <Texto>Es importante tener en cuenta que todos estos operadores están
          escritos de la manera:</Texto>
        <Codigo code={`clave:valor`} language="bash" />
        <Texto>Sin espacios a menos que se usen comillas dobles, pero todo lo que
          esta afuera eso lo reconoce Google como palabras de una búsqueda
          normal.</Texto>
        <Codigo code={`intitle:"Uala prestamos" prestamos sin intereses`} language="bash" />
        <Texto>En este caso buscara <strong>préstamos sin intereses</strong>, y
          luego filtrara por títulos que contengan <strong>Uala
            préstamos</strong>.</Texto>
        <ol type="1">
          <li>El primer operador dork básico es site, sí usas este operador luego
            (:) dos puntos, y un dominio, buscara todos los resultados que contengan
            ese dominio.</li>
        </ol>
        <Codigo code={`site:reddit.com`} language="bash" />
        <ol start="2" type="1">
          <li>inurl, busca en la URL de Google, todos los que contengan la palabra
            clave, en la URL.</li>
        </ol>
        <Codigo code={`inurl:palabraclave`} language="bash" />
        <ol start="3" type="1">
          <li>intitle, busca utilizando la palabra, y filtrando por títulos de la
            web, los que no contengan ese título o esa palabra clave no son
            mostrados por el buscador.</li>
        </ol>
        <Codigo code={`intitle:tomarmate`} language="bash" />
        <ol start="4" type="1">
          <li>ext y filetype, estos comandos nos permite buscar por extensiones,
            son muy similares, pero su diferencia radica en que filetype reconoce
            archivos que Google reconocen, pero ext muestra archivos con la
            extensión sin importar sí el formato lo reconoce o no Google.</li>
        </ol>
        <Codigo code={`ext:log Errores de reddit`} language="bash" />
        <Codigo code={`filetype:pdfs Cuent`} language="bash" />
        <Texto>Con lo anterior se puede hacer búsquedas en Google con filtros, y
          encontrar información pública que a veces los creadores de webs creen
          que no son públicas de sus webs, y otras cosas, es importante tener en
          cuenta que deberías buscar palabras claves o frases claves según lo que
          quieras buscar, aunque hay que tener cuidado porque se pueden indexar
          sitios http: que no son seguros y que el dueño de la página sí quiere te
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
