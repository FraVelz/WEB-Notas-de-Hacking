import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../../componentes/organismos/estructura.jsx";
import Enlace from "../../componentes/atomos/enlace.jsx";
import Linea from "../../componentes/atomos/linea.jsx";
import Lista from "../../componentes/moleculas/lista.jsx";
import Texto from "../../componentes/atomos/texto.jsx";
import Titulo from "../../componentes/moleculas/titulo.jsx";
import { Tabla, TablaCabezera, TablaFila, TablaUnica } from "../../componentes/moleculas/tabla.jsx";
import Codigo from "../../componentes/moleculas/codigo.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={`flex-1 ${className}`}>
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
        <Codigo code={`bandit.labs.overthewire.org`} language="bash" />
        <Codigo code={`Port: 2220`} language="bash" />
        <Texto>Comando para cambiar de terminal y habilitar el comando clear:</Texto>
        <Codigo code={`export TERM=xterm`} language="bash" />
        <details>
          <summary>
            Comando ssh para conectarse a bandit
          </summary>
          <Texto>Para conectarse a bandit0 se puede hacer con el siguiente
            comando:</Texto>
          <Codigo code={`ssh bandit0@bandit.labs.overthewire.org -p 2220`} language="bash" />
          <Texto>Después de conectarte al servicio, bandit te pedirá una contraseña,
            en este caso la contraseña es</Texto>
          <Codigo code={`bandit0`} language="bash" />
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
        <Tabla>
  <TablaCabezera headers={["Rango", "Dificultad y Temática"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>bandit0 a bandit6</TablaUnica>
      <TablaUnica>fácil, conceptos básicos y filtrado de archivos</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>bandit7 a bandit9</TablaUnica>
      <TablaUnica>fácil, filtrado de texto en archivos</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>bandit10 a bandit13</TablaUnica>
      <TablaUnica>fácil-intermedio, decodificación</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>bandit14 a …</TablaUnica>
      <TablaUnica>fácil-intermedio, redes</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>…</TablaUnica>
      <TablaUnica>…</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
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
          <Codigo code={`cat readme.md`} language="bash" />
        </details>
        <Linea />
        <Titulo title="h2" id="bandit1">Bandit1</Titulo>
        <Texto><strong>Pista:</strong> solo hay que leer de otra forma.</Texto>
        <details>
          <summary>
            Posible solucion
          </summary>
          <Codigo code={`cat ./-`} language="bash" />
          <Texto>Se indica que en el directorio actual existe un archivo que se llama
            - y lo muestra.
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
          <Codigo code={`cat "./--spaces in this filename--"`} language="bash" />
          <Texto>Indica que con ", que en el repositorio actual existe un
            archivo con espacios de línea y - guiones, y lo
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
          <Codigo code={`cat "inhere/...Hiding-From-You"`} language="bash" />
          <Texto>Indica con " el texto como tal aparece, es la ruta y
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
          <Codigo code={`find ./inhere/ -type f | xargs file`} language="bash" />
          <Texto>Busca en la carpeta inhere, busca los archivos
            -type f, y muestra el tipo de datos que contenga
            xargs file cada archivo.
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
          <Codigo code={`find ./inhere/ -type f -size 1033c`} language="bash" />
          <Texto>Busca en inhere un archivo -type f que
            contenga un tamaño de 1033 bytes -size 1033c.</Texto>
          <Texto>Dará la ruta del archivo que cumpla con los requisitos de tamaño sí
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
          <Codigo code={`find / -user bandit7 -group bandit6 -size 33c 2>/dev/null`} language="bash" />
          <Texto>Busca desde / archivo o carpeta que contenga, como
            permisos de usuario bandit7 -user bandit7, como grupo
            -group bandit6, y que contenga un tamaño de 33 bytes
            -size 33c, habrán archivos que cumplan los requerimientos,
            pero no serán accesibles y darán error, entonces esos archivos no lo
            mostramos en la terminal con 2&gt;/dev/null.
          </Texto>
          <Texto>Mostrará la dirección del archivo que tendrá la clave.</Texto>
        </details>
        <details>
          <summary>
            Clave para el siguiente
          </summary>
          <Codigo code={`morbNTDkSW6jIlUc0ymOdMaLnOlFVAaj`} language="bash" />
        </details>
        <Linea />
        <Titulo title="h2" id="bandit7">Bandit7</Titulo>
        <Texto><strong>Pista:</strong> La contraseña para el siguiente nivel se
          almacena en el archivo data.txt junto a la palabra “millionth”.</Texto>
        <details>
          <summary>
            Posible solucion
          </summary>
          <Codigo code={`cat data.txt | grep millionth`} language="bash" />
          <Texto>Muestra el archivo cat data.txt y filtra todo el texto
            para solo mostrar la línea que contenga millionth,
            grep millionth.
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
          <Codigo code={`cat data.txt | sort | uniq -u`} language="bash" />
          <Texto>Organizar las líneas del archivo, para que hagan líneas consecutivas
            repetidas sort, luego con uniq -u, elimina
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
          <Codigo code={`cat data.txt | grep -a === | awk 'NF{print $NF}'`} language="bash" />
          <Texto>Filtra por líneas que contengan ===. Como el archivo contiene
            caracteres binarios, indicamos al filtrado que procese todo como texto
            con <strong>grep -a</strong>, y luego extraemos únicamente la última
            palabra de cada línea usando <code>{`awk 'NF{print $NF}'`}</code>.
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
          <Codigo code={`base64 -d data.txt`} language="bash" />
          <Texto>Utilizamos el comando base64 -d para decodificar el
            archivo data.txt.</Texto>
        </details>
        <details>
          <summary>
            Clave para el siguiente
          </summary>
          <Codigo code={`dtR173fZKb0RRsDFSGsg2RWnpNVj3qRr`} language="bash" />
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
          <Codigo code={`cat data.txt | tr '[A-Za-z]' '[N-ZA-Mn-za-m]'`} language="bash" />
          <Texto>La información de data.txt con tr remplaza los
            caracteres de mayúscula y minúscula, a los mismos caracteres pero
            rotados 13 veces, como un cifrado cesar, para descifrar en este
            caso.</Texto>
        </details>
        <details>
          <summary>
            Clave para el siguiente
          </summary>
          <Codigo code={`7x16WNeHIi5YkIhWsfFIqoognUTyj9Q4`} language="bash" />
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
          <Codigo code={`cat data.txt | xxd -r > data_new`} language="bash" />
          <Texto>El contenido del archivo data.txt lo redirige al comando
            xxd -r que convierte datos binarios, a un texto decimal
            legible, y el resultado lo redirige a un nuevo archivo llamado
            data_new.
          </Texto>
          <Texto>Luego te salen puros archivos comprimidos, para descomprimirlos en
            general sin utilizar la herramienta específica para descomprimir un
            archivo de cada tipo puedes utilizar:</Texto>
          <Codigo code={`7z x data_new`} language="bash" />
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
          <Codigo code={`chmod 600 bandit14.key
ssh -i bandit14.key bandit14@bandit.labs.overthewire.org -p 2220`} language="bash" />
          <Texto>Se dan los permisos correspondientes, donde la clave solo pueda ser
            leída, y manipulada por el usuario, y luego se utiliza el comando ssh
            todo igual, pero agregando la línea -i nombre_clave.</Texto>
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
          <Codigo code={`nc localhost 30000`} language="bash" />
          <Texto>Conectando a <strong>localhost</strong> y puerto 30000; luego
            pega la clave y te pasará la contraseña del siguiente nivel.
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
          <Codigo code={`ncat --ssl 127.0.0.1 30001`} language="bash" />
          <Texto>Y pegas la clave del usuario actual, te dará la clave para el
            siguiente.</Texto>
          <Texto>…</Texto>
        </details>
        <details>
          <summary>
            Clave para el siguiente
          </summary>
          <Codigo code={`kSkvUpMQ7lBYyCM4GBPvCvT1BfWRy0Dx`} language="bash" />
        </details>
        <Linea />
        <Titulo title="h2" id="bandit16">Bandit16</Titulo>
        <Texto><strong>Pista:</strong> Las credenciales para el siguiente nivel se
          pueden recuperar presentando la contraseña del nivel actual a un
          puerto en localhost en el rango 31000–32000. Primero averigua cuál de
          estos puertos tiene un servidor escuchando. A continuación, determina
          cuáles de ellos hablan SSL/TLS y cuáles no. Solo hay un servidor que
          devolverá la contraseña del siguiente nivel; los demás simplemente
          reenviarán lo que les envíes.</Texto>
        <details>
          <summary>
            Posible solucion
          </summary>
          <Codigo code={`nmap --open -T5 -v -n -p31000-32000 127.0.0.1`} language="bash" />
          <Texto>Escanea por puertos TCP abiertos (<code>--open</code>), ajusta
            la velocidad con <code>-T5</code> y usa <code>-v</code> para ver salida
            en tiempo real. <code>-n</code> evita resolución DNS; <code>-p</code>
            indica el rango de puertos. <code>127.0.0.1</code> es la dirección
            (host) local donde realizar el escaneo.</Texto>
          <Codigo code={`ncat --ssl 127.0.0.1`} language="bash" />
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
          <Codigo code={`diff passwords.old passwords.new`} language="bash" />
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
          <Codigo code={`entrar al con ssh pero agregando al final bash para ejecutar la terminal bash`} language="bash" />
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
          <Codigo code={`entrar al con ssh pero agregando al final bash para ejecutar la terminal bash`} language="bash" />
          <Texto>Esto es como una especie de inyección de código antes que se ejecute
            el .bashrc, y leer el readme.</Texto>
        </details>
        <details>
          <summary>
            Clave para el siguiente
          </summary>
          <Codigo code={`0qXahG8ZjOVMN9Ghs7iOWsCfZyXOUbYO`} language="bash" />
        </details>
        <Linea />
        <Titulo title="h2" id="bandit20">Bandit20</Titulo>
        <Texto><strong>Pista:</strong> En el directorio personal hay un binario
          setuid que se conecta a localhost en el puerto que especifiques como
          argumento. Luego lee una línea de texto de la conexión y la compara con
          la contraseña del nivel anterior (bandit20). Si la contraseña es
          correcta, transmite la contraseña del siguiente nivel (bandit21).</Texto>
        <Texto><strong>NOTA:</strong> Intenta conectarte a tu propio demonio de red
          para comprobar si funciona como esperas.</Texto>
        <details>
          <summary>
            Posible solucion
          </summary>
          <Texto>Abres 2 terminales.</Texto>
          <Codigo code={`./archivo`} language="bash" />
          <Texto>En una ejecutas el archivo y en la otra ejecutas el comando para
            abrir un puerto con el comando nc y envías la clave anterior en este
            comando.</Texto>
          <Codigo code={`nc -nlvp 1234`} language="bash" />
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
          ser fácil de leer. Sí tiene problemas para comprender su funcionamiento,
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
        <Texto><strong>NOTA:</strong> Este nivel requiere que crees tú primer script
          de shell. ¡Es un gran paso y deberías sentirte orgulloso/a cuando lo
          logres!</Texto>
        <Texto><strong>NOTA 2:</strong> Ten en cuenta que tu script de shell se
          elimina una vez ejecutado, así que quizá quieras guardar una copia.</Texto>
        <details>
          <summary>
            Posible solucion
          </summary>
          <Texto>Analizar el script del usuario, y crear un archivo en una ruta
            temporal mktemp -p, y copiarla donde el script ejecuta los
            archivos.</Texto>
        </details>
        <details>
          <summary>
            Clave para el siguiente
          </summary>
          <Codigo code={`gb8KRRCsshuZXI0tUuR6ypOFjiZbf3G8`} language="bash" />
        </details>
        <Linea />
        <Titulo title="h2" id="bandit24">Bandit24</Titulo>
        <Texto><strong>Pista:</strong> Un demonio está escuchando en el puerto 30002
          y te proporcionará la contraseña de bandit25 sí le das la contraseña de
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
            rediriges, a nc utilizando la informacion dada, y filtrar
            para eliminar las opciones que tengan Wrong.</Texto>
        </details>
        <Texto><Enlace href="https://www.site24x7.com/es/tools/crontab/cron-generator.html">Web
          para practicar expresiones tareas Cron</Enlace ></Texto>
        <Linea />
        <Titulo title="h2" id="bandit25">Bandit25</Titulo>
        <Texto><strong>Pista:</strong> Iniciar sesión en bandit26 desde bandit25
          debería ser bastante sencillo… El shell del usuario bandit26 no es
          /bin/bash, sino otro. Averigua cuál es, cómo funciona y cómo salir de
          él.</Texto>
        <Texto>NOTA: Sí eres usuario de Windows y normalmente usas PowerShell para
          conectarte por SSH a bandit, ten en cuenta que PowerShell suele causar
          problemas con la solución propuesta para este nivel. Deberías usar la
          línea de comandos.</Texto>
        <details>
          <summary>
            Posible solucion
          </summary>
          <Texto>Entrar en el modo visual del archivo more, que se ejecuta y con
            :set shell=/bin/bash y :shell obtener la
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
            cat directamente.
          </Texto>
        </details>
        <Linea />
        <Titulo title="h2" id="bandit27-contiene-clave-propia">Bandit27 (contiene clave
          propia)</Titulo>
        <Texto><strong>Pista:</strong> Existe un repositorio Git en
          ssh://bandit27-git@bandit.labs.overthewire.org/home/bandit27-git/repo
          a través del puerto 2220. La contraseña del usuario bandit27-git es la
          misma que la del usuario bandit27.
        </Texto>
        <Texto>Clona el repositorio y busca la contraseña para el siguiente
          nivel.</Texto>
        <Codigo code={`ssh://bandit27-git@bandit.labs.overthewire.org:2220/home/bandit27-git/repo`} language="bash" />
        <details>
          <summary>
            Posible solucion
          </summary>
          <Texto>Puede que la conexión no funcione desde la terminal de bandit en el
            formato protocolo://usuario@url:puerto/ruta, tienes que
            clonar en un terminal personal, y luego colocar la clave del nivel
            actual, luego en el archivo readme estará la clave del siguiente
            nivel.</Texto>
        </details>
        <details>
          <summary>
            Clave Propia
          </summary>
          <Codigo code={`upsNCc7vzaRDx6oZC6GiR6ERwe1MowGB`} language="bash" />
        </details>
        <Linea />
        <Titulo title="h2" id="bandit28">Bandit28</Titulo>
        <Texto><strong>Pista:</strong> Existe un repositorio Git en
          ssh://bandit28-git@bandit.labs.overthewire.org/home/bandit28-git/repo a
          través del puerto 2220. La contraseña del usuario bandit28-git es la
          misma que la del usuario bandit28.</Texto>
        <Texto>Clona el repositorio y busca la contraseña para el siguiente
          nivel.</Texto>
        <Codigo code={`ssh://bandit28-git@bandit.labs.overthewire.org/home/bandit28-git/repo`} language="bash" />
        <details>
          <summary>
            Posible solucion
          </summary>
          <Texto>Clonar repo, colocar la clave, y revisar commits pasados.</Texto>
          <Texto>Comandos importantes:</Texto>
          <Codigo code={`git log
git show`} language="bash" />
        </details>
        <Linea />
        <Titulo title="h2" id="bandit29">Bandit29</Titulo>
        <Texto><strong>Pista:</strong> Existe un repositorio Git en
          ssh://bandit29-git@bandit.labs.overthewire.org/home/bandit29-git/repo a
          través del puerto 2220. La contraseña del usuario bandit29-git es la
          misma que la del usuario bandit29.</Texto>
        <Texto>Clona el repositorio y busca la contraseña para el siguiente
          nivel.</Texto>
        <Codigo code={`ssh://bandit29-git@bandit.labs.overthewire.org/home/bandit29-git/repo`} language="bash" />
        <details>
          <summary>
            Posible solucion
          </summary>
          <Texto>Buscar ramas, y mirar ramas según el enunciado, viendo el archivo
            readme.</Texto>
          <Texto>Comandos importantes:</Texto>
          <Codigo code={`git branch
git switch`} language="bash" />
        </details>
        <Linea />
        <Titulo title="h2" id="bandit30">Bandit30</Titulo>
        <Texto><strong>Pista:</strong> Existe un repositorio Git en
          ssh://bandit30-git@bandit.labs.overthewire.org/home/bandit30-git/repo a
          través del puerto 2220. La contraseña del usuario bandit30-git es la
          misma que la del usuario bandit30.</Texto>
        <Texto>Clona el repositorio y busca la contraseña para el siguiente
          nivel.</Texto>
        <Codigo code={`ssh://bandit30-git@bandit.labs.overthewire.org/home/bandit30-git/repo`} language="bash" />
        <details>
          <summary>
            Posible solucion
          </summary>
          <Texto>Comandos importantes:</Texto>
          <Codigo code={`git tag
git show`} language="bash" />
        </details>
        <Linea />
        <Titulo title="h2" id="bandit31">Bandit31</Titulo>
        <Texto><strong>Pista:</strong> Hay un repositorio Git en
          ssh://bandit31-git@bandit.labs.overthewire.org/home/bandit31-git/repo
          a través del puerto 2220. La contraseña para el usuario
          bandit31-git es la misma que para el usuario bandit31.</Texto>
        <Texto>Clona el repositorio y busca la contraseña para el siguiente
          nivel.</Texto>
        <Codigo code={`ssh://bandit31-git@bandit.labs.overthewire.org/home/bandit31-git/repo`} language="bash" />
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
        <Codigo code={`ssh://bandit31-git@bandit.labs.overthewire.org/home/bandit31-git/repo`} language="bash" />
        <details>
          <summary>
            Posible solucion
          </summary>
          <Texto>Entrar con ssh como normalmente, y conseguir una terminal shell con
            $0 y luego una bash bash.
          </Texto>
          <Texto>Fin de los niveles actualmente.</Texto>
        </details>
      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}
export default nameabcd;
