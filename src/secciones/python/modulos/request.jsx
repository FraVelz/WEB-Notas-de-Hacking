import Enlace from "../../../componentes/atomos/enlace.jsx";
import Linea from "../../../componentes/atomos/linea.jsx";
import Lista from "../../../componentes/moleculas/lista.jsx";
import Texto from "./../../../componentes/atomos/texto.jsx";
import Titulo from "../../../componentes/moleculas/titulo.jsx";
import { Tabla, TablaCabezera, TablaFila, TablaUnica } from "../../../componentes/moleculas/tabla.jsx";
import Codigo from "../../../componentes/moleculas/codigo.jsx";
import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../../../componentes/organismos/estructura.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#1-qué-es-requests">1) ¿Qué es requests?</Enlace ></li>
      <li><Enlace href="#2-instalación-y-configuración-básica">2) Instalación y
        configuración básica</Enlace ></li>
      <li><Enlace href="#3-uso-básico--peticiones-http">3) Uso básico — Peticiones
        HTTP</Enlace >
        <Lista>
          <li><Enlace href="#get">GET</Enlace ></li>
          <li><Enlace href="#post">POST</Enlace ></li>
          <li><Enlace href="#otros-métodos">Otros métodos</Enlace ></li>
        </Lista>
      </li>
      <li><Enlace href="#4-elementos-importantes-de-la-respuesta-response">4)
        Elementos importantes de la respuesta (Response)</Enlace ></li>
      <li><Enlace href="#5-parámetros-útiles-en-la-petición">5) Parámetros útiles
        en la petición</Enlace ></li>
      <li><Enlace href="#6-sesiones-requestssession">6) Sesiones
        (requests.Session)</Enlace ></li>
      <li><Enlace href="#7-autenticación-ssl-y-proxies">7) Autenticación, SSL y
        proxies</Enlace ></li>
      <li><Enlace href="#8-manejo-de-errores-y-excepciones">8) Manejo de errores y
        excepciones</Enlace ></li>
      <li><Enlace href="#9-ejemplos-completos">9) Ejemplos completos</Enlace >
        <Lista>
          <li><Enlace href="#a-petición-get-con-parámetros">a) Petición GET con
            parámetros</Enlace ></li>
          <li><Enlace href="#b-petición-post-con-json">b) Petición POST con
            JSON</Enlace ></li>
          <li><Enlace href="#c-uso-de-sesión-con-cookies">c) Uso de sesión con
            cookies</Enlace ></li>
          <li><Enlace href="#d-descarga-de-archivo-por-streaming">d) Descarga de
            archivo por streaming</Enlace ></li>
        </Lista>
      </li>
      <li><Enlace href="#10-buenas-prácticas-y-consideraciones">10) Buenas
        prácticas y consideraciones</Enlace ></li>
      <li><Enlace href="#11-resumen-rápido">11) Resumen rápido</Enlace ></li>
    </Lista>
  );
}

function nameabcd({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" id="request-en-python">Request en Python</Titulo>

        <Linea />

        <TemarioCompleto temario={Temario} />

        <Titulo title="h2" id="qué-es-requests">1) ¿Qué es requests?</Titulo>
        <Lista>
          <li>requests es una biblioteca de Python de terceros
            para realizar <strong>solicitudes HTTP/HTTPS</strong> de forma sencilla
            y elegante.</li>    <li>No viene incluida en la librería estándar de Python, por lo que
              debe instalarse con pip install requests.</li>    <li>Permite hacer peticiones como GET, POST, PUT, DELETE, HEAD,
                PATCH, etc., y gestionar cabeceras, datos, autenticación, cookies,
                sesiones, entre otros.</li>    <li>Es muy usada para acceder a APIs web, hacer scraping ligero, o
                  interaccionar con servicios HTTP.</li>  </Lista>
        <Linea />
        <Titulo title="h2" id="instalación-y-configuración-básica">2) Instalación y
          configuración básica</Titulo>
        <Codigo code={`pip install requests`} language="bash" />
        <Texto>Luego en tú script:</Texto>
        <Codigo code={`import requests`} language="python" />
        <Texto>Asegúrate de que la versión de Python sea compatible (por ejemplo
          Python 3.8+ según su documentación).</Texto>
        <Texto><em>Tip:</em> Usa un entorno virtual (venv) para
          instalarla sin afectar dependencias globales.</Texto>
        <Linea />
        <Titulo title="h2" id="uso-básico-peticiones-http">3) Uso básico — Peticiones HTTP</Titulo>
        <Titulo title="h3" id="get">GET</Titulo>
        <Codigo code={`import requests

response = requests.get("https://api.example.com/data")
print(response.status_code)        # código de estado HTTP
print(response.text)               # contenido como texto
print(response.json())             # si es JSON, lo transforma en dict/list`} language="python" />
        <Titulo title="h3" id="post">POST</Titulo>
        <Texto>Enviar datos:</Texto>
        <Codigo code={`payload = {"username": "usuario", "password": "secreto"}
response = requests.post("https://api.example.com/login", data=payload)`} language="python" />
        <Texto>Enviar JSON:</Texto>
        <Codigo code={`response = requests.post("https://api.example.com/login", json=payload)`} language="python" />
        <Titulo title="h3" id="otros-métodos">Otros métodos</Titulo>
        <Texto>También puedes usar requests.put(),
          requests.delete(), requests.head(),
          requests.patch().
        </Texto>
        <Linea />
        <Titulo title="h2" id="elementos-importantes-de-la-respuesta-response">4) Elementos
          importantes de la respuesta (Response)</Titulo>
        <Texto>Al hacer una petición, obtienes un objeto Response.
          Algunos atributos y métodos clave:</Texto>
        <Lista>
          <li>response.status_code → código de estado HTTP (200,
            404, 500, etc.).</li>    <li>response.text → contenido decodificado como texto
              (string).</li>    <li>response.content → contenido en bytes.</li>    <li>response.json() → interpreta el contenido como JSON
                y devuelve dict o lista (sí aplica).</li>    <li>response.headers → diccionario con cabeceras HTTP de
                  la respuesta.</li>    <li>response.elapsed → tiempo que tardó la
                    petición.</li>    <li>response.raise_for_status() → lanza excepción
                      requests.exceptions.HTTPError sí el código de estado indica
                      error (&gt;=400).
          </li>  </Lista>
        <Linea />
        <Titulo title="h2" id="parámetros-útiles-en-la-petición">5) Parámetros útiles en la
          petición</Titulo>
        <Texto>Al llamar a requests.get() o
          requests.post() puedes pasar varios parámetros adicionales
          para mayor control:
        </Texto>
        <Tabla>
          <TablaCabezera headers={["Parámetro", "Uso"]} />

          <tbody>
            <TablaFila>
              <TablaUnica>params</TablaUnica>
              <TablaUnica>Diccionario para cadena de consulta (query string) en GET.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>data</TablaUnica>
              <TablaUnica>Datos de formulario en POST/PUT.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>json</TablaUnica>
              <TablaUnica>Datos JSON en cuerpo de solicitud (POST/PUT).</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>headers</TablaUnica>
              <TablaUnica>Diccionario de cabeceras HTTP.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>cookies</TablaUnica>
              <TablaUnica>Diccionario de cookies para enviar.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>timeout</TablaUnica>
              <TablaUnica>Tiempo máximo de espera (segundos) para la respuesta.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>verify</TablaUnica>
              <TablaUnica>Verificación del certificado SSL (True/False o ruta de
                certificado).</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>auth</TablaUnica>
              <TablaUnica>Autenticación básica/digest; por ejemplo
                auth=('user','pass').</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>proxies</TablaUnica>
              <TablaUnica>Para usar proxies HTTP/HTTPS.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>stream</TablaUnica>
              <TablaUnica>Sí quieres descargar contenido por streaming (útil para archivos
                grandes).</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>allow_redirects</TablaUnica>
              <TablaUnica>Sí permites redirecciones automáticas (por defecto True para
                GET).</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>
        <Linea />
        <Titulo title="h2" id="sesiones-requests.session">6) Sesiones (requests.Session)</Titulo>
        <Texto>Una característica potente: puedes crear un objeto
          Session para persistir ciertas opciones (como cookies,
          cabeceras comunes, autenticación) entre múltiples peticiones. Mejora el
          rendimiento al reutilizar conexiones. Ejemplo:
        </Texto>
        <Codigo code={`import requests

s = requests.Session()
s.headers.update({"User-Agent": "MiApp/1.0"})
response1 = s.get("https://api.example.com/resource1")
response2 = s.get("https://api.example.com/resource2")`} language="python" />
        <Linea />
        <Titulo title="h2" id="autenticación-ssl-y-proxies">7) Autenticación, SSL y
          proxies</Titulo>
        <Lista>
          <li>Autenticación básica:
            requests.get(url, auth=('user','pass')).
          </li>    <li>Verificación SSL: por defecto verify=True. Sí el
            servidor tiene certificado inválido, se puede poner
            verify=False <strong>pero no recomendado en
              producción</strong>.
          </li>    <li>Puedes especificar proxies para HTTP/HTTPS usando el parámetro
            proxies.
          </li>  </Lista>
        <Linea />
        <Titulo title="h2" id="manejo-de-errores-y-excepciones">8) Manejo de errores y
          excepciones</Titulo>
        <Texto>Es importante manejar posibles fallos (timeout, conexión rechazada,
          etc.). Ejemplo:</Texto>
        <Codigo code={`import requests

try:
response = requests.get("https://api.example.com", timeout=5)
response.raise_for_status()
except requests.exceptions.HTTPError as errh:
print("HTTP Error:", errh)
except requests.exceptions.ConnectionError as errc:
print("Error de conexión:", errc)
except requests.exceptions.Timeout as errt:
print("Timeout:", errt)
except requests.exceptions.RequestException as err:
print("Otro error:", err)`} language="python" />
        <Texto>Este patrón aparece en tutoriales de requests.</Texto>
        <Linea />
        <Titulo title="h2" id="ejemplos-completos">9) Ejemplos completos</Titulo>
        <Titulo title="h3" id="a-petición-get-con-parámetros">a) Petición GET con
          parámetros</Titulo>
        <Codigo code={`import requests

url = "https://httpbin.org/get"
params = {"q": "python", "page": 1}
response = requests.get(url, params=params)
print(response.url)       # muestra la URL final con query string
print(response.status_code)
print(response.json())`} language="python" />
        <Titulo title="h3" id="b-petición-post-con-json">b) Petición POST con JSON</Titulo>
        <Codigo code={`import requests

url = "https://httpbin.org/post"
payload = {"username": "user", "password": "pass"}
response = requests.post(url, json=payload)
print(response.status_code)
print(response.json())`} language="python" />
        <Titulo title="h3" id="c-uso-de-sesión-con-cookies">c) Uso de sesión con cookies</Titulo>
        <Codigo code={`import requests

s = requests.Session()
s.get("https://httpbin.org/cookies/set/sessioncookie/12345")
response = s.get("https://httpbin.org/cookies")
print(response.text)  # Verás que la cookie se mantiene`} language="python" />
        <Titulo title="h3" id="d-descarga-de-archivo-por-streaming">d) Descarga de archivo por
          streaming</Titulo>
        <Codigo code={`import requests

url = "https://example.com/largefile.zip"
with requests.get(url, stream=True) as r:
r.raise_for_status()
with open("largefile.zip", "wb") as f:
for chunk in r.iter_content(chunk_size=8192):
f.write(chunk)`} language="python" />
        <Linea />
        <Titulo title="h2" id="buenas-prácticas-y-consideraciones">10) Buenas prácticas y
          consideraciones</Titulo>
        <Lista>
          <li>Siempre establece un timeout razonable para evitar
            que la petición quede colgada.</li>    <li>No deshabilites verify=True en producción a menos
              que sepas lo que haces (evita usar verify=False).</li>    <li>Para muchas peticiones al mismo host, utiliza
                Session para aprovechar persistencia de conexión.
          </li>    <li>Verifica el estado de la respuesta (status_code,
            raise_for_status()) antes de procesar los datos.
          </li>    <li>Cuando trabajes con APIs, respeta los límites de rate-limit, y
            maneja redirecciones, errores, retries.</li>    <li>Evita exponer en el código credenciales sin protección.</li>    <li>Sí haces scraping de páginas web, respeta los términos de uso del
              sitio, usa cabeceras User-Agent adecuadas y considera la
              ética/legales.</li>  </Lista>
        <Linea />
        <Titulo title="h2" id="resumen-rápido">11) Resumen rápido</Titulo>
        <Lista>
          <li>Librería simple, pero potente para hacer peticiones HTTP en
            Python.</li>    <li>Abstrae complejidad de urllib y hace que el código
              sea más legible.</li>    <li>Utilizada ampliamente para trabajar con APIs, servicios web,
                scraping ligero.</li>    <li>Soporta múltiples métodos HTTP, sesiones, autenticación,
                  verificación SSL, proxies.</li>    <li>Debes instalarla aparte y aplicarla con buenas
                    prácticas.</li>  </Lista>
      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}
export default nameabcd;
