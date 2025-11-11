import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "./../../componentes/estructura.jsx";
import Enlace from "./../../componentes/enlace.jsx";
import Linea from "./../../componentes/linea.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Titulo from "./../../componentes/titulo.jsx";
function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#información">Información</Enlace ></li>
      <li><Enlace href="#bandit0">Bandit0</Enlace ></li>
      <li><Enlace href="#bandit1">Bandit1</Enlace ></li>
      <li><Enlace href="#bandit2">Bandit2</Enlace ></li>
      <li><Enlace href="#bandit3">Bandit3</Enlace ></li>
      <li><Enlace href="#bandit4">Bandit4</Enlace ></li>
      <li><Enlace href="#bandit5">Bandit5</Enlace ></li>
      <li><Enlace href="#bandit6-contiene-clave-siguiente">Bandit6 (contiene clave
        siguiente)</Enlace ></li>
      <li><Enlace href="#bandit7">Bandit7</Enlace ></li>
      <li><Enlace href="#bandit8">Bandit8</Enlace ></li>
      <li><Enlace href="#bandit9">Bandit9</Enlace ></li>
      <li><Enlace href="#bandit10-contiene-clave-para-el-siguiente">Bandit10
        (contiene clave para el siguiente)</Enlace ></li>
      <li><Enlace href="#bandit11-contiene-clave-para-el-siguiente">Bandit11
        (contiene clave para el siguiente)</Enlace ></li>
      <li><Enlace href="#bandit12">Bandit12</Enlace ></li>
      <li><Enlace href="#bandit13">Bandit13</Enlace ></li>
      <li><Enlace href="#bandit14">Bandit14</Enlace ></li>
      <li><Enlace href="#bandit15-contiene-clave-para-el-siguiente">Bandit15
        (contiene clave para el siguiente)</Enlace ></li>
      <li><Enlace href="#bandit16">Bandit16</Enlace ></li>
      <li><Enlace href="#bandit17">Bandit17</Enlace ></li>
      <li><Enlace href="#bandit18">Bandit18</Enlace ></li>
      <li><Enlace href="#bandit19-contiene-clave-para-el-siguiente">Bandit19
        (contiene clave para el siguiente)</Enlace ></li>
      <li><Enlace href="#bandit20">Bandit20</Enlace ></li>
      <li><Enlace href="#bandit21">Bandit21</Enlace ></li>
      <li><Enlace href="#bandit22">Bandit22</Enlace ></li>
      <li><Enlace href="#bandit23-contiene-clave-para-el-siguiente">Bandit23
        (contiene clave para el siguiente)</Enlace ></li>
      <li><Enlace href="#bandit24">Bandit24</Enlace ></li>
      <li><Enlace href="#bandit25">Bandit25</Enlace ></li>
      <li><Enlace href="#bandit26">Bandit26</Enlace ></li>
      <li><Enlace href="#bandit27-contiene-clave-propia">Bandit27 (contiene clave
        propia)</Enlace ></li>
      <li><Enlace href="#bandit28">Bandit28</Enlace ></li>
      <li><Enlace href="#bandit29">Bandit29</Enlace ></li>
      <li><Enlace href="#bandit30">Bandit30</Enlace ></li>
      <li><Enlace href="#bandit31">Bandit31</Enlace ></li>
      <li><Enlace href="#bandit32">Bandit32</Enlace ></li>
    </Lista>
  );
}

function nameabcd({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" id="resolución-problemas-básicos-de-bandit">Resolución problemas
          básicos de Bandit</Titulo>
        <Linea />

        <TemarioCompleto temario={Temario} />

        <Titulo title="h2" id="información">Información</Titulo>
        <Texto>Página para practicar, comandos linux, desde la terminal.</Texto>
        <Texto>Página Web: https://overthewire.org/wargames/bandit/</Texto>
        <Texto>SSH Información</Texto>
        <Texto>Host:</Texto>
        <div className="sourceCode" id="cb1">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb1-1"><Enlace href="#cb1-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">bandit.labs.overthewire.org</span></span></code></pre>
        </div>
        <div className="sourceCode" id="cb2">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb2-1"><Enlace href="#cb2-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">Port:</span> 2220</span></code></pre>
        </div>
        <Texto>Comando para cambiar de terminal y habilitar el comando clear:</Texto>
        <div className="sourceCode" id="cb3">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb3-1"><Enlace href="#cb3-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">export</span> <span className="va">TERM</span><span className="op">=</span>xterm</span></code></pre>
        </div>
        <details>
          <summary>
            Comando ssh para conectarse a bandit
          </summary>
          <Texto>Para conectarse a bandit0 se puede hacer con el siguiente
            comando:</Texto>
          <div className="sourceCode" id="cb4">
            <pre
              className="sourceCode bash"><code className="sourceCode bash"><span id="cb4-1"><Enlace href="#cb4-1" aria-hidden="true" tabindex="-1"></Enlace >  <span className="fu">ssh</span> bandit0@bandit.labs.overthewire.org <span className="at">-p</span> 2220</span></code></pre>
          </div>
          <Texto>Después de conectarte al servicio, bandit te pedirá una contraseña,
            en este caso la contraseña es</Texto>
          <div className="sourceCode" id="cb5">
            <pre
              className="sourceCode bash"><code className="sourceCode bash"><span id="cb5-1"><Enlace href="#cb5-1" aria-hidden="true" tabindex="-1"></Enlace >  <span className="ex">bandit0</span></span></code></pre>
          </div>
          En vez de colocar bandit0 colocas bandit1 para el siguiente nivel, en
          cada nivel debes obtener una contraseña, que se dará las instrucciones
          en la página web (<Enlace href="https://overthewire.org/wargames/bandit/">Ir
            a página web (overthewire, bandit)</Enlace >), para completar cada nivel y
          obtener dicha contraseña del siguiente nivel.
        </details>
        <Texto>El propósito de este archivo, es dar pistas sencillas en español de
          los niveles, y además tener a mano la solución en dado, caso de querer
          saltar algún nivel, para luego estudiarlo.</Texto>
        <Texto>Aunque, en la página oficial, ya hay material, para aprender, y
          pistas de como resolver los ejercicios (todo en ingles).</Texto>
        <table>
          <colgroup>
            <col style="width: 28%" />
            <col style="width: 71%" />
          </colgroup>
          <thead>
            <tr>
              <th>Rango</th>
              <th>Dificultad y Temática</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>bandit0 a bandit6</td>
              <td>fácil, conceptos básicos y filtrado de archivos</td>
            </tr>
            <tr>
              <td>bandit7 a bandit9</td>
              <td>fácil, filtrado de texto en archivos</td>
            </tr>
            <tr>
              <td>bandit10 a bandit13</td>
              <td>fácil-intermedio, decodificación</td>
            </tr>
            <tr>
              <td>bandit14 a …</td>
              <td>fácil-intermedio, redes</td>
            </tr>
            <tr>
              <td>…</td>
              <td>…</td>
            </tr>
          </tbody>
        </table>
        <Texto>Página web:</Texto>
        <figure>
          <img src="./../images/bandit-overthewire.png" alt="Imagen de página web de bandit" />
          <figcaption aria-hidden="true">Imagen de página web de
            bandit</figcaption>
        </figure>
        <Texto>Terminal:</Texto>
        <figure>
          <img src="./../images/terminal-overthewire.png" alt="Imagen de terminal de bandit" />
          <figcaption aria-hidden="true">Imagen de terminal de bandit</figcaption>
        </figure>
        <Linea />
        <Titulo title="h2" id="bandit0">Bandit0</Titulo>
        <Texto><strong>Pista:</strong> Solo hay que leer.</Texto>
        <details>
          <summary>
            Posible solucion
          </summary>
          <div className="sourceCode" id="cb6">
            <pre
              className="sourceCode bash"><code className="sourceCode bash"><span id="cb6-1"><Enlace href="#cb6-1" aria-hidden="true" tabindex="-1"></Enlace >  <span className="fu">cat</span> readme.md</span></code></pre>
          </div>
        </details>
        <Linea />
        <Titulo title="h2" id="bandit1">Bandit1</Titulo>
        <Texto><strong>Pista:</strong> solo hay que leer de otra forma.</Texto>
        <details>
          <summary>
            Posible solucion
          </summary>
          <div className="sourceCode" id="cb7">
            <pre
              className="sourceCode bash"><code className="sourceCode bash"><span id="cb7-1"><Enlace href="#cb7-1" aria-hidden="true" tabindex="-1"></Enlace >  <span className="fu">cat</span> ./-</span></code></pre>
          </div>
          <Texto>Se indica que en el directorio actual existe un archivo que se llama
            <code>-</code> y lo muestra.
          </Texto>
        </details>
        <Linea />
        <Titulo title="h2" id="bandit2">Bandit2</Titulo>
        <Texto><strong>Pista:</strong> solo hay que leer igual que el anterior pero
          con unas cosas extras.</Texto>
        <details>
          <summary>
            Posible solucion
          </summary>
          <div className="sourceCode" id="cb8">
            <pre
              className="sourceCode bash"><code className="sourceCode bash"><span id="cb8-1"><Enlace href="#cb8-1" aria-hidden="true" tabindex="-1"></Enlace >  <span className="fu">cat</span> <span className="st">&quot;./--spaces in this filename--&quot;</span></span></code></pre>
          </div>
          <Texto>Indica que con <code>"</code>, que en el repositorio actual existe un
            archivo con espacios de línea y <code>-</code> guiones, y lo
            muestra.</Texto>
        </details>
        <Linea />
        <Titulo title="h2" id="bandit3">Bandit3</Titulo>
        <Texto><strong>Pista:</strong> Igual que la anterior, pero solo hay un
          directorio con un archivo oculto.</Texto>
        <details>
          <summary>
            Posible solucion
          </summary>
          <div className="sourceCode" id="cb9">
            <pre
              className="sourceCode bash"><code className="sourceCode bash"><span id="cb9-1"><Enlace href="#cb9-1" aria-hidden="true" tabindex="-1"></Enlace >  <span className="fu">cat</span> <span className="st">&quot;inhere/...Hiding-From-You&quot;</span></span></code></pre>
          </div>
          <Texto>Indica con <code>"</code> el texto como tal aparece, es la ruta y
            nombre del archivo, en el repositorio, y lo muestra.</Texto>
        </details>
        <Linea />
        <Titulo title="h2" id="bandit4">Bandit4</Titulo>
        <Texto><strong>Pista:</strong> el archivo que sea tipo texto es el que
          tendrá la clave.</Texto>
        <details>
          <summary>
            Posible solucion
          </summary>
          <div className="sourceCode" id="cb10">
            <pre
              className="sourceCode bash"><code className="sourceCode bash"><span id="cb10-1"><Enlace href="#cb10-1" aria-hidden="true" tabindex="-1"></Enlace >  <span className="fu">find</span> ./inhere/ <span className="at">-type</span> f <span className="kw">|</span> <span className="fu">xargs</span> file</span></code></pre>
          </div>
          <Texto>Busca en la carpeta <code>inhere</code>, busca los archivos
            <code>-type f</code>, y muestra el tipo de datos que contenga
            <code>xargs file</code> cada archivo.
          </Texto>
          <Texto>El archivo que sea ascii text, es el que contendrá la clave para el
            siguiente nivel.</Texto>
        </details>
        <Linea />
        <Titulo title="h2" id="bandit5">Bandit5</Titulo>
        <Texto><strong>Pista:</strong></Texto>
        <Lista>
          <li>legible para humanos</li>
          <li>1033 bytes de tamaño</li>
          <li>no ejecutable</li>
        </Lista>
        <details>
          <summary>
            Posible solucion
          </summary>
          <div className="sourceCode" id="cb11">
            <pre
              className="sourceCode bash"><code className="sourceCode bash"><span id="cb11-1"><Enlace href="#cb11-1" aria-hidden="true" tabindex="-1"></Enlace >  <span className="fu">find</span> ./inhere/ <span className="at">-type</span> f <span className="at">-size</span> 1033c</span></code></pre>
          </div>
          <Texto>Busca en <code>inhere</code> un archivo <code>-type f</code> que
            contenga un tamaño de 1033 bytes <code>-size 1033c</code>.</Texto>
          <Texto>Dará la ruta del archivo que cumpla con los requisitos de tamaño si
            hay solo 1, ese tendrá la clave.</Texto>
        </details>
        <Linea />
        <Titulo title="h2" id="bandit6-contiene-clave-siguiente">Bandit6 (contiene clave
          siguiente)</Titulo>
        <Texto><strong>Pista:</strong></Texto>
        <Lista>
          <li>Propiedad del usuario bandit7</li>
          <li>Propiedad del grupo bandit6</li>
          <li>Tamaño: 33 bytes</li>
        </Lista>
        <details>
          <summary>
            Posible solucion
          </summary>
          <div className="sourceCode" id="cb12">
            <pre
              className="sourceCode bash"><code className="sourceCode bash"><span id="cb12-1"><Enlace href="#cb12-1" aria-hidden="true" tabindex="-1"></Enlace >  <span className="fu">find</span> / <span className="at">-user</span> bandit7 <span className="at">-group</span> bandit6 <span className="at">-size</span> 33c <span className="dv">2</span><span className="op">&gt;</span>/dev/null</span></code></pre>
          </div>
          <Texto>Busca desde <code>/</code> archivo o carpeta que contenga, como
            permisos de usuario bandit7 <code>-user bandit7</code>, como grupo
            <code>-group bandit6</code>, y que contenga un tamaño de 33 bytes
            <code>-size 33c</code>, habrán archivos que cumplan los requerimientos,
            pero no serán accesibles y darán error, entonces esos archivos no lo
            mostramos en la terminal con <code>2&gt;/dev/null</code>.
          </Texto>
          <Texto>Mostrará la dirección del archivo que tendrá la clave.</Texto>
        </details>
        <details>
          <summary>
            Clave para el siguiente
          </summary>
          <div className="sourceCode" id="cb13">
            <pre
              className="sourceCode bash"><code className="sourceCode bash"><span id="cb13-1"><Enlace href="#cb13-1" aria-hidden="true" tabindex="-1"></Enlace >  <span className="ex">morbNTDkSW6jIlUc0ymOdMaLnOlFVAaj</span></span></code></pre>
          </div>
        </details>
        <Linea />
        <Titulo title="h2" id="bandit7">Bandit7</Titulo>
        <Texto><strong>Pista:</strong> La contraseña para el siguiente nivel se
          almacena en el archivo data.txt junto a la palabra “millionth”.</Texto>
        <details>
          <summary>
            Posible solucion
          </summary>
          <div className="sourceCode" id="cb14">
            <pre
              className="sourceCode bash"><code className="sourceCode bash"><span id="cb14-1"><Enlace href="#cb14-1" aria-hidden="true" tabindex="-1"></Enlace >  <span className="fu">cat</span> data.txt <span className="kw">|</span> <span className="fu">grep</span> millionth</span></code></pre>
          </div>
          <Texto>Muestra el archivo <code>cat data.txt</code> y filtra todo el texto
            para solo mostrar la línea que contenga <code>millionth</code>,
            <code>grep millionth</code>.
          </Texto>
        </details>
        <Linea />
        <Titulo title="h2" id="bandit8">Bandit8</Titulo>
        <Texto><strong>Pista:</strong> La contraseña para el siguiente nivel se
          almacena en el archivo data.txt y es la única línea de texto que aparece
          solo una vez.</Texto>
        <details>
          <summary>
            Posible solucion
          </summary>
          <div className="sourceCode" id="cb15">
            <pre
              className="sourceCode bash"><code className="sourceCode bash"><span id="cb15-1"><Enlace href="#cb15-1" aria-hidden="true" tabindex="-1"></Enlace >  <span className="fu">cat</span> data.txt <span className="kw">|</span> <span className="fu">sort</span> <span className="kw">|</span> <span className="fu">uniq</span> <span className="at">-u</span></span></code></pre>
          </div>
          <Texto>Organizar las líneas del archivo, para que hagan líneas consecutivas
            repetidas <code>sort</code>, luego con <code>uniq -u</code>, elimina
            todas las líneas consecutivas repetidas y solo muestra las que no tiene
            repeticiones.</Texto>
        </details>
        <Linea />
        <Titulo title="h2" id="bandit9">Bandit9</Titulo>
        <Texto><strong>Pista:</strong> La contraseña para el siguiente nivel se
          almacena en el archivo data.txt en una de las pocas cadenas legibles por
          humanos, precedida por varios caracteres ‘=’.</Texto>
        <details>
          <summary>
            Posible solucion
          </summary>
          <div className="sourceCode" id="cb16">
            <pre
              className="sourceCode bash"><code className="sourceCode bash"><span id="cb16-1"><Enlace href="#cb16-1" aria-hidden="true" tabindex="-1"></Enlace >  <span className="fu">cat</span> data.txt <span className="kw">|</span> <span className="fu">grep</span> <span className="at">-a</span> === <span className="kw">|</span> <span className="fu">awk</span> <span className="st">&#39;{"NF{print $NF}"}&#39;</span></span></code></pre>
          </div>
          <Texto>Filtra por líneas que contengan <code>===</code>, pero como el
            archivo contiene caracteres binarios indicamos al filtrado que queremos
            procesar todo como texto <code>grep -a</code>, y luego obtenemos, solo
            lo que nos interesa quitando las cosas extras, colocando solo la última
            palabra de cada línea con una conciencia
            <code>{"awk 'NF{print $NF}'"}</code>
          </Texto>
        </details>
        <Linea />
        <Titulo title="h2" id="bandit10-contiene-clave-para-el-siguiente">Bandit10 (contiene
          clave para el siguiente)</Titulo>
        <Texto><strong>Pista:</strong> La contraseña para el siguiente nivel se
          almacena en el archivo data.txt, que contiene datos codificados en
          base64.</Texto>
        <details>
          <summary>
            Posible solucion
          </summary>
          <div className="sourceCode" id="cb17">
            <pre
              className="sourceCode bash"><code className="sourceCode bash"><span id="cb17-1"><Enlace href="#cb17-1" aria-hidden="true" tabindex="-1"></Enlace >  <span className="fu">base64</span> <span className="at">-d</span> data.txt</span></code></pre>
          </div>
          <Texto>Utilizamos el comando <code>base64 -d</code> para decodificar el
            archivo <code>data.txt</code>.</Texto>
        </details>
        <details>
          <summary>
            Clave para el siguiente
          </summary>
          <div className="sourceCode" id="cb18">
            <pre
              className="sourceCode bash"><code className="sourceCode bash"><span id="cb18-1"><Enlace href="#cb18-1" aria-hidden="true" tabindex="-1"></Enlace >  <span className="ex">dtR173fZKb0RRsDFSGsg2RWnpNVj3qRr</span></span></code></pre>
          </div>
        </details>
        <Linea />
        <Titulo title="h2" id="bandit11-contiene-clave-para-el-siguiente">Bandit11 (contiene
          clave para el siguiente)</Titulo>
        <Texto><strong>Pista:</strong> La contraseña para el siguiente nivel se
          almacena en el archivo data.txt, donde todas las letras minúsculas (a-z)
          y mayúsculas (A-Z) se han rotado 13 posiciones.</Texto>
        <details>
          <summary>
            Posible solucion
          </summary>
          <div className="sourceCode" id="cb19">
            <pre
              className="sourceCode bash"><code className="sourceCode bash"><span id="cb19-1"><Enlace href="#cb19-1" aria-hidden="true" tabindex="-1"></Enlace >  <span className="fu">cat</span> data.txt <span className="kw">|</span> <span className="fu">tr</span> <span className="st">&#39;[A-Za-z]&#39;</span> <span className="st">&#39;[N-ZA-Mn-za-m]&#39;</span></span></code></pre>
          </div>
          <Texto>La información de <code>data.txt</code> con tr remplaza los
            caracteres de mayúscula y minúscula, a los mismos caracteres pero
            rotados 13 veces, como un cifrado cesar, para descifrar en este
            caso.</Texto>
        </details>
        <details>
          <summary>
            Clave para el siguiente
          </summary>
          <div className="sourceCode" id="cb20">
            <pre
              className="sourceCode bash"><code className="sourceCode bash"><span id="cb20-1"><Enlace href="#cb20-1" aria-hidden="true" tabindex="-1"></Enlace >  <span className="ex">7x16WNeHIi5YkIhWsfFIqoognUTyj9Q4</span></span></code></pre>
          </div>
        </details>
        <Linea />
        <Titulo title="h2" id="bandit12">Bandit12</Titulo>
        <Texto><strong>Pista:</strong> La contraseña para el siguiente nivel está en
          el archivo data.txt, que es un volcado hexadecimal de un archivo
          comprimido repetidamente.</Texto>
        <details>
          <summary>
            Posible solucion
          </summary>
          <div className="sourceCode" id="cb21">
            <pre
              className="sourceCode bash"><code className="sourceCode bash"><span id="cb21-1"><Enlace href="#cb21-1" aria-hidden="true" tabindex="-1"></Enlace >  <span className="fu">cat</span> data.txt <span className="kw">|</span> <span className="ex">xxd</span> <span className="at">-r</span> <span className="op">&gt;</span> data_new</span></code></pre>
          </div>
          <Texto>El contenido del archivo <code>data.txt</code> lo redirige al comando
            <code>xxd -r</code> que convierte datos binarios, a un texto decimal
            legible, y el resultado lo redirige a un nuevo archivo llamado
            <code>data_new</code>.
          </Texto>
          <Texto>Luego te salen puros archivos comprimidos, para descomprimirlos en
            general sin utilizar la herramienta específica para descomprimir un
            archivo de cada tipo puedes utilizar:</Texto>
          <div className="sourceCode" id="cb22">
            <pre
              className="sourceCode bash"><code className="sourceCode bash"><span id="cb22-1"><Enlace href="#cb22-1" aria-hidden="true" tabindex="-1"></Enlace >  <span className="ex">7z</span> x data_new</span></code></pre>
          </div>
          <Texto>Te sale un nuevo archivo comprimido, y vuelves a repetir el anterior
            comando para descomprimir, así sucesivamente hasta que te salga el
            archivo de texto con la clave.</Texto>
          <Texto>O Utilizar bash script con un bucle…</Texto>
        </details>
        <Linea />
        <Titulo title="h2" id="bandit13">Bandit13</Titulo>
        <Texto><strong>Pista:</strong> La contraseña para el siguiente nivel se
          almacena en /etc/bandit_pass/bandit14 y solo puede ser leída por el
          usuario bandit14. Para este nivel, no se obtiene la siguiente
          contraseña, sino una clave SSH privada que permite iniciar sesión en el
          siguiente nivel. Nota: localhost es un nombre de host que se refiere a
          la máquina en la que se está trabajando.</Texto>
        <details>
          <summary>
            Posible solucion
          </summary>
          <div className="sourceCode" id="cb23">
            <pre
              className="sourceCode bash"><code className="sourceCode bash"><span id="cb23-1"><Enlace href="#cb23-1" aria-hidden="true" tabindex="-1"></Enlace >  <span className="fu">chmod</span> 600 bandit14.key</span>
                <span id="cb23-2"><Enlace href="#cb23-2" aria-hidden="true" tabindex="-1"></Enlace >  <span className="fu">ssh</span> <span className="at">-i</span> bandit14.key bandit14@bandit.labs.overthewire.org <span className="at">-p</span> 2220</span></code></pre>
          </div>
          <Texto>Se dan los permisos correspondientes, donde la clave solo pueda ser
            leída, y manipulada por el usuario, y luego se utiliza el comando ssh
            todo igual, pero agregando la línea <code>-i nombre_clave</code>.</Texto>
          <Texto>Ya estarías en el nivel bandit14.</Texto>
        </details>
        <Linea />
        <Titulo title="h2" id="bandit14">Bandit14</Titulo>
        <Texto><strong>Pista:</strong> La contraseña para el siguiente nivel se
          puede recuperar enviando la contraseña del nivel actual al puerto 30000
          en localhost.</Texto>
        <details>
          <summary>
            Posible solucion
          </summary>
          <Texto>Primero buscas la clave, del usuario actual donde se mencionó
            anteriormente, y la copias:</Texto>
          <div className="sourceCode" id="cb24">
            <pre
              className="sourceCode bash"><code className="sourceCode bash"><span id="cb24-1"><Enlace href="#cb24-1" aria-hidden="true" tabindex="-1"></Enlace >  <span className="ex">nc</span> localhost 30000</span></code></pre>
          </div>
          <Texto>Conectando al protocolo <code>locahost</code> y puerto
            <code>30000</code>, luego pegas la clave y te pasara la clave, del
            siguiente nivel.
          </Texto>
        </details>
        <Linea />
        <Titulo title="h2" id="bandit15-contiene-clave-para-el-siguiente">Bandit15 (contiene
          clave para el siguiente)</Titulo>
        <Texto><strong>Pista:</strong> La contraseña del siguiente nivel se puede
          recuperar enviando la contraseña del nivel actual al puerto 30001 del
          host local mediante cifrado SSL/TLS.</Texto>
        <details>
          <summary>
            Posible solucion
          </summary>
          <div className="sourceCode" id="cb25">
            <pre
              className="sourceCode bash"><code className="sourceCode bash"><span id="cb25-1"><Enlace href="#cb25-1" aria-hidden="true" tabindex="-1"></Enlace >  <span className="ex">ncat</span> <span className="at">--ssl</span> 127.0.0.1 30001</span></code></pre>
          </div>
          <Texto>Y pegas la clave del usuario actual, te dará la clave para el
            siguiente.</Texto>
          <Texto>…</Texto>
        </details>
        <details>
          <summary>
            Clave para el siguiente
          </summary>
          <div className="sourceCode" id="cb26">
            <pre
              className="sourceCode bash"><code className="sourceCode bash"><span id="cb26-1"><Enlace href="#cb26-1" aria-hidden="true" tabindex="-1"></Enlace >  <span className="ex">kSkvUpMQ7lBYyCM4GBPvCvT1BfWRy0Dx</span></span></code></pre>
          </div>
        </details>
        <Linea />
        <Titulo title="h2" id="bandit16">Bandit16</Titulo>
        <Texto><strong>Pista:</strong> Las credenciales para el siguiente nivel se
          pueden recuperar mediante la presentación de la Contraseña del nivel
          actual a un puerto en localhost en el rango 31000 a 32000. Primero
          averigüe cuál de estos puertos tiene un servidor Escuchándolos. A
          continuación, averigüe cuáles de ellos hablan SSL/TLS y cuáles No lo
          hagas. Solo hay 1 servidor que dará las siguientes credenciales, el
          Otros simplemente te enviarán lo que sea que le envíes.</Texto>
        <details>
          <summary>
            Posible solucion
          </summary>
          <div className="sourceCode" id="cb27">
            <pre
              className="sourceCode bash"><code className="sourceCode bash"><span id="cb27-1"><Enlace href="#cb27-1" aria-hidden="true" tabindex="-1"></Enlace >  <span className="fu">nmap</span> <span className="at">--open</span> <span className="at">-T5</span> <span className="at">-v</span> <span className="at">-n</span> <span className="at">-p31000-32000</span> 127.0.0.1</span></code></pre>
          </div>
          <Texto>Por el protocolo tcp, buscar puertos abiertos
            (<code>nmap --open</code>), controlar el temporizador y rendimiento del
            escaneo <code>-T5</code> existen (<code>-T0</code> lento, pero revisa
            bien, hasta, <code>-T5</code> rápido para el escaneo) <code>-v</code>
            modo verbose que sirve para que vaya mostrando el resultado antes de
            mostrar todo por consola, <code>-n</code> para no aplicar resolución
            dns, <code>-p31000-32000</code> el rango, y el <code>127.0.0.1</code> es
            el puerto.</Texto>
          <div className="sourceCode" id="cb28">
            <pre
              className="sourceCode bash"><code className="sourceCode bash"><span id="cb28-1"><Enlace href="#cb28-1" aria-hidden="true" tabindex="-1"></Enlace >  <span className="ex">ncat</span> <span className="at">--ssl</span> 127.0.0.1 <span className="op">&lt;</span>puerto<span className="op">&gt;</span></span></code></pre>
          </div>
          <Texto>Para conectarse con cifrado a dicho puertos, pegando la clave, y
            alguno de ellos dará la clave para el siguiente nivel.</Texto>
        </details>
        <Linea />
        <Titulo title="h2" id="bandit17">Bandit17</Titulo>
        <Texto><strong>Pista:</strong> En el directorio principal hay dos archivos:
          passwords.old y passwords.new. La contraseña para el siguiente nivel se
          encuentra en passwords.new y es la única línea que ha cambiado entre
          passwords.old y passwords.new.</Texto>
        <Texto><strong>NOTA:</strong> Si has resuelto este nivel y ves «¡Adiós!» al
          intentar iniciar sesión en bandit18, esto se debe al siguiente nivel,
          bandit19.</Texto>
        <details>
          <summary>
            Posible solucion
          </summary>
          <div className="sourceCode" id="cb29">
            <pre
              className="sourceCode bash"><code className="sourceCode bash"><span id="cb29-1"><Enlace href="#cb29-1" aria-hidden="true" tabindex="-1"></Enlace >  <span className="fu">diff</span> passwords.old passwords.new</span></code></pre>
          </div>
          <Texto>Muestra las diferencias entre los dos archivos.</Texto>
        </details>
        <Linea />
        <Titulo title="h2" id="bandit18">Bandit18</Titulo>
        <Texto><strong>Pista:</strong> La contraseña para el siguiente nivel se
          almacena en un archivo “readme” en el directorio personal.
          Lamentablemente, alguien modificó .bashrc para cerrar sesión al iniciar
          sesión con SSH.</Texto>
        <details>
          <summary>
            Posible solucion
          </summary>
          <div className="sourceCode" id="cb30">
            <pre
              className="sourceCode bash"><code className="sourceCode bash"><span id="cb30-1"><Enlace href="#cb30-1" aria-hidden="true" tabindex="-1"></Enlace >  <span className="ex">entrar</span> al con ssh pero agregando al final bash para ejecutar la terminal bash</span></code></pre>
          </div>
          <Texto>Esto es como una especie de inyección de código antes que se ejecute
            el .bashrc</Texto>
        </details>
        <Linea />
        <Titulo title="h2" id="bandit19-contiene-clave-para-el-siguiente">Bandit19 (contiene
          clave para el siguiente)</Titulo>
        <Texto><strong>Pista:</strong> Para acceder al siguiente nivel, debes usar
          el binario setuid en tu directorio personal. Ejecútalo sin argumentos
          para ver cómo usarlo. La contraseña para este nivel se encuentra en la
          ubicación habitual (/etc/bandit_pass), después de haber usado el binario
          setuid.</Texto>
        <details>
          <summary>
            Posible solucion
          </summary>
          <div className="sourceCode" id="cb31">
            <pre
              className="sourceCode bash"><code className="sourceCode bash"><span id="cb31-1"><Enlace href="#cb31-1" aria-hidden="true" tabindex="-1"></Enlace >  <span className="ex">entrar</span> al con ssh pero agregando al final bash para ejecutar la terminal bash</span></code></pre>
          </div>
          <Texto>Esto es como una especie de inyección de código antes que se ejecute
            el .bashrc, y leer el <code>readme</code>.</Texto>
        </details>
        <details>
          <summary>
            Clave para el siguiente
          </summary>
          <div className="sourceCode" id="cb32">
            <pre
              className="sourceCode bash"><code className="sourceCode bash"><span id="cb32-1"><Enlace href="#cb32-1" aria-hidden="true" tabindex="-1"></Enlace >  <span className="ex">0qXahG8ZjOVMN9Ghs7iOWsCfZyXOUbYO</span></span></code></pre>
          </div>
        </details>
        <Linea />
        <Titulo title="h2" id="bandit20">Bandit20</Titulo>
        <Texto><strong>Pista:</strong> En el directorio personal hay un binario
          setuid que realiza lo siguiente: se conecta a localhost en el puerto que
          especifiques como argumento de línea de comandos. Luego, lee una línea
          de texto de la conexión y la compara con la contraseña del nivel
          anterior (bandit20). Si la contraseña es correcta, transmite la
          contraseña del siguiente nivel (bandit21).</Texto>
        <Texto><strong>NOTA:</strong> Intenta conectarte a tu propio demonio de red
          para comprobar si funciona como esperas.</Texto>
        <details>
          <summary>
            Posible solucion
          </summary>
          <Texto>Abres 2 terminales.</Texto>
          <div className="sourceCode" id="cb33">
            <pre
              className="sourceCode bash"><code className="sourceCode bash"><span id="cb33-1"><Enlace href="#cb33-1" aria-hidden="true" tabindex="-1"></Enlace >  <span className="ex">./archivo</span></span></code></pre>
          </div>
          <Texto>En una ejecutas el archivo y en la otra ejecutas el comando para
            abrir un puerto con el comando nc y envías la clave anterior en este
            comando.</Texto>
          <div className="sourceCode" id="cb34">
            <pre
              className="sourceCode bash"><code className="sourceCode bash"><span id="cb34-1"><Enlace href="#cb34-1" aria-hidden="true" tabindex="-1"></Enlace >  <span className="ex">nc</span> <span className="at">-nlvp</span> 1234</span></code></pre>
          </div>
          <Texto>Te debería devolver el archivo donde ejecutaste esta clave.</Texto>
        </details>
        <Linea />
        <Titulo title="h2" id="bandit21">Bandit21</Titulo>
        <Texto><strong>Pista:</strong> Un programa se ejecuta automáticamente a
          intervalos regulares mediante cron, el programador de tareas basado en
          tiempo. Consulte el archivo /etc/cron.d/ para ver la configuración y
          comprobar qué comando se está ejecutando.</Texto>
        <details>
          <summary>
            Posible solucion
          </summary>
          <Texto>Entrar al directorio, ver el código de los archivos y ver el archivo
            relacionado con el siguiente nivel, dentro de ese archivo hay un script,
            ver el script y verás que ese script copia la clave de un archivo que no
            tienes permisos para leer a otro que sí.</Texto>
        </details>
        <Linea />
        <Titulo title="h2" id="bandit22">Bandit22</Titulo>
        <Texto><strong>Pista:</strong> Un programa se ejecuta automáticamente a
          intervalos regulares mediante cron, el programador de tareas basado en
          tiempo. Consulte el archivo /etc/cron.d/ para ver la configuración y el
          comando que se está ejecutando.</Texto>
        <Texto><strong>NOTA:</strong> Analizar scripts de shell escritos por otros
          es una habilidad muy útil. El script de este nivel está diseñado para
          ser fácil de leer. Si tiene problemas para comprender su funcionamiento,
          intente ejecutarlo para ver la información de depuración que
          muestra.</Texto>
        <details>
          <summary>
            Posible solucion
          </summary>
          Lo mismo que el anterior nivel, pero jugar un poco con bash, y donde
          esta la variable del usuario colocar el usuario futuro que es bandit23.
        </details>
        <Linea />
        <Titulo title="h2" id="bandit23-contiene-clave-para-el-siguiente">Bandit23 (contiene
          clave para el siguiente)</Titulo>
        <Texto><strong>Pista:</strong> Un programa se ejecuta automáticamente a
          intervalos regulares mediante cron, el programador de tareas basado en
          tiempo. Consulta el archivo /etc/cron.d/ para ver la configuración y el
          comando que se está ejecutando.</Texto>
        <Texto><strong>NOTA:</strong> Este nivel requiere que crees tu primer script
          de shell. ¡Es un gran paso y deberías sentirte orgulloso/a cuando lo
          logres!</Texto>
        <Texto><strong>NOTA 2:</strong> Ten en cuenta que tu script de shell se
          elimina una vez ejecutado, así que quizá quieras guardar una copia.</Texto>
        <details>
          <summary>
            Posible solucion
          </summary>
          <Texto>Analizar el script del usuario, y crear un archivo en una ruta
            temporal <code>mktemp -p</code>, y copiarla donde el script ejecuta los
            archivos.</Texto>
        </details>
        <details>
          <summary>
            Clave para el siguiente
          </summary>
          <div className="sourceCode" id="cb35">
            <pre
              className="sourceCode bash"><code className="sourceCode bash"><span id="cb35-1"><Enlace href="#cb35-1" aria-hidden="true" tabindex="-1"></Enlace >  <span className="ex">gb8KRRCsshuZXI0tUuR6ypOFjiZbf3G8</span></span></code></pre>
          </div>
        </details>
        <Linea />
        <Titulo title="h2" id="bandit24">Bandit24</Titulo>
        <Texto><strong>Pista:</strong> Un demonio está escuchando en el puerto 30002
          y te proporcionará la contraseña de bandit25 si le das la contraseña de
          bandit24 y un código PIN secreto de 4 dígitos. No hay forma de obtener
          el código PIN excepto probando las 10 000 combinaciones posibles, un
          método conocido como fuerza bruta.</Texto>
        <Texto>No necesitas crear nuevas conexiones cada vez.</Texto>
        <details>
          <summary>
            Posible solucion
          </summary>
          <Texto>crear un bucle para hacer todas las combinaciones posibles y
            redirigirlas a un archivo, el archivo (en directorio temporar) lo
            rediriges, a <code>nc</code> utilizando la informacion dada, y filtrar
            para eliminar las opciones que tengan <code>Wrong</code>.</Texto>
        </details>
        <Texto><Enlace href="https://www.site24x7.com/es/tools/crontab/cron-generator.html">Web
          para practicar expresiones tareas Cron</Enlace ></Texto>
        <Linea />
        <Titulo title="h2" id="bandit25">Bandit25</Titulo>
        <Texto><strong>Pista:</strong> Iniciar sesión en bandit26 desde bandit25
          debería ser bastante sencillo… El shell del usuario bandit26 no es
          /bin/bash, sino otro. Averigua cuál es, cómo funciona y cómo salir de
          él.</Texto>
        <Texto>NOTA: Si eres usuario de Windows y normalmente usas PowerShell para
          conectarte por SSH a bandit, ten en cuenta que PowerShell suele causar
          problemas con la solución propuesta para este nivel. Deberías usar la
          línea de comandos.</Texto>
        <details>
          <summary>
            Posible solucion
          </summary>
          <Texto>Entrar en el modo visual del archivo more, que se ejecuta y con
            <code>:set shell=/bin/bash</code> y <code>:shell</code> obtener la
            shell.
          </Texto>
        </details>
        <Linea />
        <Titulo title="h2" id="bandit26">Bandit26</Titulo>
        <Texto><strong>Pista:</strong> ¡Buen trabajo consiguiendo una shell! ¡Ahora
          date prisa y consigue la contraseña para bandit27!</Texto>
        <details>
          <summary>
            Posible solucion
          </summary>
          <Texto>el nivel es similar a uno en el pasado, pero ahora busca utilizar
            <code>cat</code> directamente.
          </Texto>
        </details>
        <Linea />
        <Titulo title="h2" id="bandit27-contiene-clave-propia">Bandit27 (contiene clave
          propia)</Titulo>
        <Texto><strong>Pista:</strong> Existe un repositorio Git en
          <code>ssh://bandit27-git@bandit.labs.overthewire.org/home/bandit27-git/repo</code>
          a través del puerto 2220. La contraseña del usuario bandit27-git es la
          misma que la del usuario bandit27.
        </Texto>
        <Texto>Clona el repositorio y busca la contraseña para el siguiente
          nivel.</Texto>
        <div className="sourceCode" id="cb36">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb36-1"><Enlace href="#cb36-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">ssh://bandit27-git@bandit.labs.overthewire.org:2220/home/bandit27-git/repo</span></span></code></pre>
        </div>
        <details>
          <summary>
            Posible solucion
          </summary>
          <Texto>Puede que la conexión no funcione desde la terminal de bandit en el
            formato <code>protocolo://usuario@url:puerto/ruta</code>, tienes que
            clonar en un terminal personal, y luego colocar la clave del nivel
            actual, luego en el archivo readme estará la clave del siguiente
            nivel.</Texto>
        </details>
        <details>
          <summary>
            Clave Propia
          </summary>
          <div className="sourceCode" id="cb37">
            <pre
              className="sourceCode bash"><code className="sourceCode bash"><span id="cb37-1"><Enlace href="#cb37-1" aria-hidden="true" tabindex="-1"></Enlace >  <span className="ex">upsNCc7vzaRDx6oZC6GiR6ERwe1MowGB</span></span></code></pre>
          </div>
        </details>
        <Linea />
        <Titulo title="h2" id="bandit28">Bandit28</Titulo>
        <Texto><strong>Pista:</strong> Existe un repositorio Git en
          ssh://bandit28-git@bandit.labs.overthewire.org/home/bandit28-git/repo a
          través del puerto 2220. La contraseña del usuario bandit28-git es la
          misma que la del usuario bandit28.</Texto>
        <Texto>Clona el repositorio y busca la contraseña para el siguiente
          nivel.</Texto>
        <div className="sourceCode" id="cb38">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb38-1"><Enlace href="#cb38-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">ssh://bandit28-git@bandit.labs.overthewire.org/home/bandit28-git/repo</span></span></code></pre>
        </div>
        <details>
          <summary>
            Posible solucion
          </summary>
          <Texto>Clonar repo, colocar la clave, y revisar commits pasados.</Texto>
          <Texto>Comandos importantes:</Texto>
          <div className="sourceCode" id="cb39">
            <pre
              className="sourceCode bash"><code className="sourceCode bash"><span id="cb39-1"><Enlace href="#cb39-1" aria-hidden="true" tabindex="-1"></Enlace >  <span className="fu">git</span> log</span>
                <span id="cb39-2"><Enlace href="#cb39-2" aria-hidden="true" tabindex="-1"></Enlace >  <span className="fu">git</span> show <span className="op">&lt;</span>identificador<span className="op">&gt;</span></span></code></pre>
          </div>
        </details>
        <Linea />
        <Titulo title="h2" id="bandit29">Bandit29</Titulo>
        <Texto><strong>Pista:</strong> Existe un repositorio Git en
          ssh://bandit29-git@bandit.labs.overthewire.org/home/bandit29-git/repo a
          través del puerto 2220. La contraseña del usuario bandit29-git es la
          misma que la del usuario bandit29.</Texto>
        <Texto>Clona el repositorio y busca la contraseña para el siguiente
          nivel.</Texto>
        <div className="sourceCode" id="cb40">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb40-1"><Enlace href="#cb40-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">ssh://bandit29-git@bandit.labs.overthewire.org/home/bandit29-git/repo</span></span></code></pre>
        </div>
        <details>
          <summary>
            Posible solucion
          </summary>
          <Texto>Buscar ramas, y mirar ramas según el enunciado, viendo el archivo
            readme.</Texto>
          <Texto>Comandos importantes:</Texto>
          <div className="sourceCode" id="cb41">
            <pre
              className="sourceCode bash"><code className="sourceCode bash"><span id="cb41-1"><Enlace href="#cb41-1" aria-hidden="true" tabindex="-1"></Enlace >  <span className="fu">git</span> branch</span>
                <span id="cb41-2"><Enlace href="#cb41-2" aria-hidden="true" tabindex="-1"></Enlace >  <span className="fu">git</span> switch <span className="op">&lt;</span>rama<span className="op">&gt;</span></span></code></pre>
          </div>
        </details>
        <Linea />
        <Titulo title="h2" id="bandit30">Bandit30</Titulo>
        <Texto><strong>Pista:</strong> Existe un repositorio Git en
          ssh://bandit30-git@bandit.labs.overthewire.org/home/bandit30-git/repo a
          través del puerto 2220. La contraseña del usuario bandit30-git es la
          misma que la del usuario bandit30.</Texto>
        <Texto>Clona el repositorio y busca la contraseña para el siguiente
          nivel.</Texto>
        <div className="sourceCode" id="cb42">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb42-1"><Enlace href="#cb42-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">ssh://bandit30-git@bandit.labs.overthewire.org/home/bandit30-git/repo</span></span></code></pre>
        </div>
        <details>
          <summary>
            Posible solucion
          </summary>
          <Texto>Comandos importantes:</Texto>
          <div className="sourceCode" id="cb43">
            <pre
              className="sourceCode bash"><code className="sourceCode bash"><span id="cb43-1"><Enlace href="#cb43-1" aria-hidden="true" tabindex="-1"></Enlace >  <span className="fu">git</span> tag</span>
                <span id="cb43-2"><Enlace href="#cb43-2" aria-hidden="true" tabindex="-1"></Enlace >  <span className="fu">git</span> show <span className="op">&lt;</span>tag<span className="op">&gt;</span></span></code></pre>
          </div>
        </details>
        <Linea />
        <Titulo title="h2" id="bandit31">Bandit31</Titulo>
        <Texto><strong>Pista:</strong> Hay un repositorio de gits en
          ssh://bandit31-git@bandit.labs.overthewire.org/home/bandit31-git/repo
          Vía el puerto 2220. La contraseña para el usuario bandit31-gitEs lo
          mismo que para el usuario bandit31.</Texto>
        <Texto>Clone el repositorio y busque la contraseña para el siguiente
          nivel.</Texto>
        <div className="sourceCode" id="cb44">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb44-1"><Enlace href="#cb44-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">ssh://bandit31-git@bandit.labs.overthewire.org/home/bandit31-git/repo</span></span></code></pre>
        </div>
        <details>
          <summary>
            Posible solucion
          </summary>
          <Texto>Seguir los pasos dados en el archivo del repositorio.</Texto>
        </details>
        <Linea />
        <Titulo title="h2" id="bandit32">Bandit32</Titulo>
        <Texto><strong>Pista:</strong> Después de todo este rollo de Git, es hora de
          otra escapada. ¡Buena suerte!</Texto>
        <div className="sourceCode" id="cb45">
          <pre
            className="sourceCode bash"><code className="sourceCode bash"><span id="cb45-1"><Enlace href="#cb45-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">ssh://bandit31-git@bandit.labs.overthewire.org/home/bandit31-git/repo</span></span></code></pre>
        </div>
        <details>
          <summary>
            Posible solucion
          </summary>
          <Texto>Entrar con ssh como normalmente, y conseguir una terminal shell con
            <code>$0</code> y luego una bash <code>bash</code>.
          </Texto>
          <Texto>Fin de los niveles actualmente.</Texto>
        </details>
        <Linea />
        <Texto><Enlace href="./../readme.md#2-linux-y-bash-script">Regresar a la guía
          principal</Enlace ></Texto>
        <blockquote>
          <Texto><strong>Autor:</strong> Fravelz</Texto>
        </blockquote>
      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}
export default nameabcd;
