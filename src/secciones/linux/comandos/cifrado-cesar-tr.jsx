import Titulo from "../../../componentes/titulo.jsx";
import Lista from "../../../componentes/lista.jsx";
import Texto from "../../../componentes/texto.jsx";
import Linea from "../../../componentes/linea.jsx";
import Enlace from "../../../componentes/enlace.jsx";


function Temario({ className = "" }) {
  return (
    <Lista className={className}>
   </Lista>
  );
}

function Cifrado_Cesar_Tr({ }) {
  return (
    <>
      <Titulo title="h1" id="cifrado-cesar-con-tr-en-linux">Cifrado Cesar con tr en
        Linux</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><Enlace href="#cifrado-cesar-con-tr-en-linux">Cifrado Cesar con tr en
          Linux</Enlace >
          <Lista>
            <li><Enlace href="#temario">Temario</Enlace >
              <Lista>
                <li><Enlace href="#parte-1">Parte 1</Enlace ></li>
                <li><Enlace href="#parte-2">Parte 2</Enlace ></li>
                <li><Enlace href="#3-qué-hace-exactamente-este-caso">3. Qué hace exactamente
                  este caso</Enlace ></li>
                <li><Enlace href="#ejemplo-práctico">Ejemplo práctico</Enlace ></li>
                <li><Enlace href="#en-resumen">En resumen</Enlace ></li>
              </Lista>
            </li>
          </Lista>
        </li>
      </Lista>
      <Texto><Enlace href="./../../readme.md#5-python">Regresar a la Guía
        Principal</Enlace ></Texto>
      <Linea />
      <Texto>El comando que vamos a revisar y analizar que hace cifrado cesar de
        13 caracteres hacia delante:</Texto>
      <div className="sourceCode" id="cb1">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb1-1"><Enlace href="#cb1-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">cat</span> data.txt <span className="kw">|</span> <span className="fu">tr</span> <span className="st">&#39;[A-Za-z]&#39;</span> <span className="st">&#39;[N-ZA-Mn-za-m]&#39;</span></span></code></pre>
      </div>
      <Linea />
      <Titulo title="h3" id="parte-1">Parte 1</Titulo>
      <div className="sourceCode" id="cb2">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb2-1"><Enlace href="#cb2-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">cat</span> data.txt</span></code></pre>
      </div>
      <Texto>Muestra el contenido del archivo <code>data.txt</code> (lo envía al
        <em>stdout</em>).
      </Texto>
      <Linea />
      <Titulo title="h3" id="parte-2">Parte 2</Titulo>
      <div className="sourceCode" id="cb3">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb3-1"><Enlace href="#cb3-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="kw">|</span> <span className="fu">tr</span> <span className="st">&#39;[A-Za-z]&#39;</span> <span className="st">&#39;[N-ZA-Mn-za-m]&#39;</span></span></code></pre>
      </div>
      <Texto>El <strong>pipe (<code>|</code>)</strong> pasa ese texto al comando
        <strong><code>tr</code></strong>, que significa <em>translate</em>
        (traducir o sustituir caracteres).
      </Texto>
      <Texto>La sintaxis:</Texto>
      <div className="sourceCode" id="cb4">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb4-1"><Enlace href="#cb4-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">tr</span> <span className="st">&#39;caracteres_originales&#39;</span> <span className="st">&#39;caracteres_nuevos&#39;</span></span></code></pre>
      </div>
      <Texto>sustituye cada carácter del primer conjunto por el correspondiente
        del segundo.</Texto>
      <Linea />
      <Titulo title="h3" id="qué-hace-exactamente-este-caso">3. Qué hace exactamente este
        caso</Titulo>
      <Texto><code>[A-Za-z]</code> → todas las letras del alfabeto (mayúsculas y
        minúsculas).</Texto>
      <Texto><code>[N-ZA-Mn-za-m]</code> → es el mismo alfabeto, pero
        <strong>rotado 13 posiciones</strong>.
      </Texto>
      <Texto>👉 Esto significa que cada letra se reemplaza por la letra que está
        13 lugares después en el alfabeto.</Texto>
      <Texto>A eso se le llama <strong>cifrado ROT13 (Rotation by 13
        places)</strong>.</Texto>
      <Texto>Es decir de la N-Z es 13 posiciones, de la A-M, de la n-z y de la
        a-m, todas son 13 posiciones, continuación una imagen
        representativa:</Texto>
      <figure>
        <img src="./../../images/abdcedario-cifrado-con-tr.png" alt="Imagen de rotación 13 con el alfabeto completo" />
        <figcaption aria-hidden="true">Imagen de rotación 13 con el alfabeto
          completo</figcaption>
      </figure>
      <Linea />
      <Titulo title="h3" id="ejemplo-práctico">Ejemplo práctico</Titulo>
      <Texto>Si <code>data.txt</code> contiene:</Texto>
      <div className="sourceCode" id="cb5">
        <pre
          className="sourceCode txt"><code className="sourceCode default"><span id="cb5-1"><Enlace href="#cb5-1" aria-hidden="true" tabindex="-1"></Enlace >Hola Mundo</span></code></pre>
      </div>
      <Texto>El comando:</Texto>
      <div className="sourceCode" id="cb6">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb6-1"><Enlace href="#cb6-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="fu">cat</span> data.txt <span className="kw">|</span> <span className="fu">tr</span> <span className="st">&#39;[A-Za-z]&#39;</span> <span className="st">&#39;[N-ZA-Mn-za-m]&#39;</span></span></code></pre>
      </div>
      <Texto>producirá:</Texto>
      <div className="sourceCode" id="cb7">
        <pre
          className="sourceCode txt"><code className="sourceCode default"><span id="cb7-1"><Enlace href="#cb7-1" aria-hidden="true" tabindex="-1"></Enlace >Uby nZhaqb</span></code></pre>
      </div>
      <Texto>Y si vuelves a aplicarlo una segunda vez, vuelve al texto original
        (porque ROT13 es su propio inverso).</Texto>
      <Linea />
      <Titulo title="h3" id="en-resumen">En resumen</Titulo>
      <Texto>Este comando aplica el <strong>cifrado ROT13</strong> al texto del
        archivo <code>data.txt</code>, sustituyendo cada letra por la que está
        13 posiciones más adelante en el alfabeto (y viceversa si se aplica de
        nuevo).</Texto>
      <Texto>–</Texto>
      <Texto><Enlace href="./../../readme.md#5-python">Regresar a la Guía
        Principal</Enlace ></Texto>
      <blockquote>
        <Texto><strong>Autor:</strong> Fravelz</Texto>
      </blockquote>
    </>
  );
}

export default Cifrado_Cesar_Tr;
