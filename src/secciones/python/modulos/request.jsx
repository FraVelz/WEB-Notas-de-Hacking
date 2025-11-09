import Titulo from "./../../componentes/titulo.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Linea from "./../../componentes/linea.jsx";

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="request-en-python">Request en Python</Titulo>
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><Enlace href="#request-en-python">Request en Python</Enlace >
          <Lista>
            <li><Enlace href="#temario">Temario</Enlace ></li>
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
        </li>
      </Lista>
      <Texto><Enlace href="./../../readme.md#5-python">Regresar a la Guía
        Principal</Enlace ></Texto>
      <Linea />
      <Titulo title="h2" id="qué-es-requests">1) ¿Qué es requests?</Titulo>
      <Lista>
        <li><code>requests</code> es una biblioteca de Python de terceros
          para realizar <strong>solicitudes HTTP/HTTPS</strong> de forma sencilla
          y elegante.</li>    <li>No viene incluida en la librería estándar de Python, por lo que
            debe instalarse con <code>pip install requests</code>.</li>    <li>Permite hacer peticiones como GET, POST, PUT, DELETE, HEAD,
              PATCH, etc., y gestionar cabeceras, datos, autenticación, cookies,
              sesiones, entre otros.</li>    <li>Es muy usada para acceder a APIs web, hacer scraping ligero, o
                interaccionar con servicios HTTP.</li>  </Lista>
      <Linea />
      <Titulo title="h2" id="instalación-y-configuración-básica">2) Instalación y
        configuración básica</Titulo>
      <div className="sourceCode" id="cb1">
        <pre
          className="sourceCode bash"><code className="sourceCode bash"><span id="cb1-1"><Enlace href="#cb1-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="ex">pip</span> install requests</span></code></pre>
      </div>
      <Texto>Luego en tu script:</Texto>
      <div className="sourceCode" id="cb2">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb2-1"><Enlace href="#cb2-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> requests</span></code></pre>
      </div>
      <Texto>Asegúrate de que la versión de Python sea compatible (por ejemplo
        Python 3.8+ según su documentación).</Texto>
      <Texto><em>Tip:</em> Usa un entorno virtual (<code>venv</code>) para
        instalarla sin afectar dependencias globales.</Texto>
      <Linea />
      <Titulo title="h2" id="uso-básico-peticiones-http">3) Uso básico — Peticiones HTTP</Titulo>
      <Titulo title="h3" id="get">GET</Titulo>
      <div className="sourceCode" id="cb3">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb3-1"><Enlace href="#cb3-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> requests</span>
            <span id="cb3-2"><Enlace href="#cb3-2" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb3-3"><Enlace href="#cb3-3" aria-hidden="true" tabindex="-1"></Enlace >response <span className="op">=</span> requests.get(<span className="st">&quot;https://api.example.com/data&quot;</span>)</span>
            <span id="cb3-4"><Enlace href="#cb3-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(response.status_code)        <span className="co"># código de estado HTTP</span></span>
            <span id="cb3-5"><Enlace href="#cb3-5" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(response.text)               <span className="co"># contenido como texto</span></span>
            <span id="cb3-6"><Enlace href="#cb3-6" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(response.json())             <span className="co"># si es JSON, lo transforma en dict/list</span></span></code></pre>
      </div>
      <Titulo title="h3" id="post">POST</Titulo>
      <Texto>Enviar datos:</Texto>
      <div className="sourceCode" id="cb4">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb4-1"><Enlace href="#cb4-1" aria-hidden="true" tabindex="-1"></Enlace >payload <span className="op">=</span> {<span className="st">&quot;username&quot;</span>: <span className="st">&quot;usuario&quot;</span>, <span className="st">&quot;password&quot;</span>: <span className="st">&quot;secreto&quot;</span>}</span>
            <span id="cb4-2"><Enlace href="#cb4-2" aria-hidden="true" tabindex="-1"></Enlace >response <span className="op">=</span> requests.post(<span className="st">&quot;https://api.example.com/login&quot;</span>, data<span className="op">=</span>payload)</span></code></pre>
      </div>
      <Texto>Enviar JSON:</Texto>
      <div className="sourceCode" id="cb5">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb5-1"><Enlace href="#cb5-1" aria-hidden="true" tabindex="-1"></Enlace >response <span className="op">=</span> requests.post(<span className="st">&quot;https://api.example.com/login&quot;</span>, json<span className="op">=</span>payload)</span></code></pre>
      </div>
      <Titulo title="h3" id="otros-métodos">Otros métodos</Titulo>
      <Texto>También puedes usar <code>requests.put()</code>,
        <code>requests.delete()</code>, <code>requests.head()</code>,
        <code>requests.patch()</code>.
      </Texto>
      <Linea />
      <Titulo title="h2" id="elementos-importantes-de-la-respuesta-response">4) Elementos
        importantes de la respuesta (Response)</Titulo>
      <Texto>Al hacer una petición, obtienes un objeto <code>Response</code>.
        Algunos atributos y métodos clave:</Texto>
      <Lista>
        <li><code>response.status_code</code> → código de estado HTTP (200,
          404, 500, etc.).</li>    <li><code>response.text</code> → contenido decodificado como texto
            (string).</li>    <li><code>response.content</code> → contenido en bytes.</li>    <li><code>response.json()</code> → interpreta el contenido como JSON
              y devuelve dict o lista (si aplica).</li>    <li><code>response.headers</code> → diccionario con cabeceras HTTP de
                la respuesta.</li>    <li><code>response.elapsed</code> → tiempo que tardó la
                  petición.</li>    <li><code>response.raise_for_status()</code> → lanza excepción
          <code>requests.exceptions.HTTPError</code> si el código de estado indica
          error (&gt;=400).
        </li>  </Lista>
      <Linea />
      <Titulo title="h2" id="parámetros-útiles-en-la-petición">5) Parámetros útiles en la
        petición</Titulo>
      <Texto>Al llamar a <code>requests.get()</code> o
        <code>requests.post()</code> puedes pasar varios parámetros adicionales
        para mayor control:
      </Texto>
      <table>
        <colgroup>
          <col style="width: 15%" />
          <col style="width: 84%" />
        </colgroup>
        <thead>
          <tr>
            <th>Parámetro</th>
            <th>Uso</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>params</code></td>
            <td>Diccionario para cadena de consulta (query string) en GET.</td>
          </tr>
          <tr>
            <td><code>data</code></td>
            <td>Datos de formulario en POST/PUT.</td>
          </tr>
          <tr>
            <td><code>json</code></td>
            <td>Datos JSON en cuerpo de solicitud (POST/PUT).</td>
          </tr>
          <tr>
            <td><code>headers</code></td>
            <td>Diccionario de cabeceras HTTP.</td>
          </tr>
          <tr>
            <td><code>cookies</code></td>
            <td>Diccionario de cookies para enviar.</td>
          </tr>
          <tr>
            <td><code>timeout</code></td>
            <td>Tiempo máximo de espera (segundos) para la respuesta.</td>
          </tr>
          <tr>
            <td><code>verify</code></td>
            <td>Verificación del certificado SSL (True/False o ruta de
              certificado).</td>
          </tr>
          <tr>
            <td><code>auth</code></td>
            <td>Autenticación básica/digest; por ejemplo
              <code>auth=('user','pass')</code>.
            </td>
          </tr>
          <tr>
            <td><code>proxies</code></td>
            <td>Para usar proxies HTTP/HTTPS.</td>
          </tr>
          <tr>
            <td><code>stream</code></td>
            <td>Si quieres descargar contenido por streaming (útil para archivos
              grandes).</td>
          </tr>
          <tr>
            <td><code>allow_redirects</code></td>
            <td>Si permites redirecciones automáticas (por defecto True para
              GET).</td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Titulo title="h2" id="sesiones-requests.session">6) Sesiones (requests.Session)</Titulo>
      <Texto>Una característica potente: puedes crear un objeto
        <code>Session</code> para persistir ciertas opciones (como cookies,
        cabeceras comunes, autenticación) entre múltiples peticiones. Mejora el
        rendimiento al reutilizar conexiones. Ejemplo:
      </Texto>
      <div className="sourceCode" id="cb6">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb6-1"><Enlace href="#cb6-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> requests</span>
            <span id="cb6-2"><Enlace href="#cb6-2" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb6-3"><Enlace href="#cb6-3" aria-hidden="true" tabindex="-1"></Enlace >s <span className="op">=</span> requests.Session()</span>
            <span id="cb6-4"><Enlace href="#cb6-4" aria-hidden="true" tabindex="-1"></Enlace >s.headers.update({<span className="st">&quot;User-Agent&quot;</span>: <span className="st">&quot;MiApp/1.0&quot;</span>})</span>
            <span id="cb6-5"><Enlace href="#cb6-5" aria-hidden="true" tabindex="-1"></Enlace >response1 <span className="op">=</span> s.get(<span className="st">&quot;https://api.example.com/resource1&quot;</span>)</span>
            <span id="cb6-6"><Enlace href="#cb6-6" aria-hidden="true" tabindex="-1"></Enlace >response2 <span className="op">=</span> s.get(<span className="st">&quot;https://api.example.com/resource2&quot;</span>)</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="autenticación-ssl-y-proxies">7) Autenticación, SSL y
        proxies</Titulo>
      <Lista>
        <li>Autenticación básica:
          <code>requests.get(url, auth=('user','pass'))</code>.
        </li>    <li>Verificación SSL: por defecto <code>verify=True</code>. Si el
          servidor tiene certificado inválido, se puede poner
          <code>verify=False</code> <strong>pero no recomendado en
            producción</strong>.
        </li>    <li>Puedes especificar proxies para HTTP/HTTPS usando el parámetro
          <code>proxies</code>.
        </li>  </Lista>
      <Linea />
      <Titulo title="h2" id="manejo-de-errores-y-excepciones">8) Manejo de errores y
        excepciones</Titulo>
      <Texto>Es importante manejar posibles fallos (timeout, conexión rechazada,
        etc.). Ejemplo:</Texto>
      <div className="sourceCode" id="cb7">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb7-1"><Enlace href="#cb7-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> requests</span>
            <span id="cb7-2"><Enlace href="#cb7-2" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb7-3"><Enlace href="#cb7-3" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">try</span>:</span>
            <span id="cb7-4"><Enlace href="#cb7-4" aria-hidden="true" tabindex="-1"></Enlace >    response <span className="op">=</span> requests.get(<span className="st">&quot;https://api.example.com&quot;</span>, timeout<span className="op">=</span><span className="dv">5</span>)</span>
            <span id="cb7-5"><Enlace href="#cb7-5" aria-hidden="true" tabindex="-1"></Enlace >    response.raise_for_status()</span>
            <span id="cb7-6"><Enlace href="#cb7-6" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">except</span> requests.exceptions.HTTPError <span className="im">as</span> errh:</span>
            <span id="cb7-7"><Enlace href="#cb7-7" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">print</span>(<span className="st">&quot;HTTP Error:&quot;</span>, errh)</span>
            <span id="cb7-8"><Enlace href="#cb7-8" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">except</span> requests.exceptions.<span className="pp">ConnectionError</span> <span className="im">as</span> errc:</span>
            <span id="cb7-9"><Enlace href="#cb7-9" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">print</span>(<span className="st">&quot;Error de conexión:&quot;</span>, errc)</span>
            <span id="cb7-10"><Enlace href="#cb7-10" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">except</span> requests.exceptions.Timeout <span className="im">as</span> errt:</span>
            <span id="cb7-11"><Enlace href="#cb7-11" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">print</span>(<span className="st">&quot;Timeout:&quot;</span>, errt)</span>
            <span id="cb7-12"><Enlace href="#cb7-12" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">except</span> requests.exceptions.RequestException <span className="im">as</span> err:</span>
            <span id="cb7-13"><Enlace href="#cb7-13" aria-hidden="true" tabindex="-1"></Enlace >    <span className="bu">print</span>(<span className="st">&quot;Otro error:&quot;</span>, err)</span></code></pre>
      </div>
      <Texto>Este patrón aparece en tutoriales de <code>requests</code>.</Texto>
      <Linea />
      <Titulo title="h2" id="ejemplos-completos">9) Ejemplos completos</Titulo>
      <Titulo title="h3" id="a-petición-get-con-parámetros">a) Petición GET con
        parámetros</Titulo>
      <div className="sourceCode" id="cb8">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb8-1"><Enlace href="#cb8-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> requests</span>
            <span id="cb8-2"><Enlace href="#cb8-2" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb8-3"><Enlace href="#cb8-3" aria-hidden="true" tabindex="-1"></Enlace >url <span className="op">=</span> <span className="st">&quot;https://httpbin.org/get&quot;</span></span>
            <span id="cb8-4"><Enlace href="#cb8-4" aria-hidden="true" tabindex="-1"></Enlace >params <span className="op">=</span> {<span className="st">&quot;q&quot;</span>: <span className="st">&quot;python&quot;</span>, <span className="st">&quot;page&quot;</span>: <span className="dv">1</span>}</span>
            <span id="cb8-5"><Enlace href="#cb8-5" aria-hidden="true" tabindex="-1"></Enlace >response <span className="op">=</span> requests.get(url, params<span className="op">=</span>params)</span>
            <span id="cb8-6"><Enlace href="#cb8-6" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(response.url)       <span className="co"># muestra la URL final con query string</span></span>
            <span id="cb8-7"><Enlace href="#cb8-7" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(response.status_code)</span>
            <span id="cb8-8"><Enlace href="#cb8-8" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(response.json())</span></code></pre>
      </div>
      <Titulo title="h3" id="b-petición-post-con-json">b) Petición POST con JSON</Titulo>
      <div className="sourceCode" id="cb9">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb9-1"><Enlace href="#cb9-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> requests</span>
            <span id="cb9-2"><Enlace href="#cb9-2" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb9-3"><Enlace href="#cb9-3" aria-hidden="true" tabindex="-1"></Enlace >url <span className="op">=</span> <span className="st">&quot;https://httpbin.org/post&quot;</span></span>
            <span id="cb9-4"><Enlace href="#cb9-4" aria-hidden="true" tabindex="-1"></Enlace >payload <span className="op">=</span> {<span className="st">&quot;username&quot;</span>: <span className="st">&quot;user&quot;</span>, <span className="st">&quot;password&quot;</span>: <span className="st">&quot;pass&quot;</span>}</span>
            <span id="cb9-5"><Enlace href="#cb9-5" aria-hidden="true" tabindex="-1"></Enlace >response <span className="op">=</span> requests.post(url, json<span className="op">=</span>payload)</span>
            <span id="cb9-6"><Enlace href="#cb9-6" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(response.status_code)</span>
            <span id="cb9-7"><Enlace href="#cb9-7" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(response.json())</span></code></pre>
      </div>
      <Titulo title="h3" id="c-uso-de-sesión-con-cookies">c) Uso de sesión con cookies</Titulo>
      <div className="sourceCode" id="cb10">
        <pre
          className="sourceCode python"><code className="sourceCode python"><span id="cb10-1"><Enlace href="#cb10-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> requests</span>
            <span id="cb10-2"><Enlace href="#cb10-2" aria-hidden="true" tabindex="-1"></Enlace ></span>
            <span id="cb10-3"><Enlace href="#cb10-3" aria-hidden="true" tabindex="-1"></Enlace >s <span className="op">=</span> requests.Session()</span>
            <span id="cb10-4"><Enlace href="#cb10-4" aria-hidden="true" tabindex="-1"></Enlace >s.get(<span className="st">&quot;https://httpbin.org/cookies/set/sessioncookie/12345&quot;</span>)</span>
            <span id="cb10-5"><Enlace href="#cb10-5" aria-hidden="true" tabindex="-1"></Enlace >response <span className="op">=</span> s.get(<span className="st">&quot;https://httpbin.org/cookies&quot;</span>)</span>
            <span id="cb10-6"><Enlace href="#cb10-6" aria-hidden="true" tabindex="-1"></Enlace ><span className="bu">print</span>(response.text)  <span className="co"># Verás que la cookie se mantiene</span></span></code></pre>
      </div>
      <Titulo title="h3" id="d-descarga-de-archivo-por-streaming">d) Descarga de archivo por
        streaming</Titulo>
      <div className="sourceCode" id="cb11">
        <pre className="sourceCode python"><code className="sourceCode python"><span id="cb11-1"><Enlace href="#cb11-1" aria-hidden="true" tabindex="-1"></Enlace ><span className="im">import</span> requests</span>
          <span id="cb11-2"><Enlace href="#cb11-2" aria-hidden="true" tabindex="-1"></Enlace ></span>
          <span id="cb11-3"><Enlace href="#cb11-3" aria-hidden="true" tabindex="-1"></Enlace >url <span className="op">=</span> <span className="st">&quot;https://example.com/largefile.zip&quot;</span></span>
          <span id="cb11-4"><Enlace href="#cb11-4" aria-hidden="true" tabindex="-1"></Enlace ><span className="cf">with</span> requests.get(url, stream<span className="op">=</span><span className="va">True</span>) <span className="im">as</span> r:</span>
          <span id="cb11-5"><Enlace href="#cb11-5" aria-hidden="true" tabindex="-1"></Enlace >    r.raise_for_status()</span>
          <span id="cb11-6"><Enlace href="#cb11-6" aria-hidden="true" tabindex="-1"></Enlace >    <span className="cf">with</span> <span className="bu">open</span>(<span className="st">&quot;largefile.zip&quot;</span>, <span className="st">&quot;wb&quot;</span>) <span className="im">as</span> f:</span>
          <span id="cb11-7"><Enlace href="#cb11-7" aria-hidden="true" tabindex="-1"></Enlace >        <span className="cf">for</span> chunk <span className="kw">in</span> r.iter_content(chunk_size<span className="op">=</span><span className="dv">8192</span>):</span>
          <span id="cb11-8"><Enlace href="#cb11-8" aria-hidden="true" tabindex="-1"></Enlace >            f.write(chunk)</span></code></pre>
      </div>
      <Linea />
      <Titulo title="h2" id="buenas-prácticas-y-consideraciones">10) Buenas prácticas y
        consideraciones</Titulo>
      <Lista>
        <li>Siempre establece un <code>timeout</code> razonable para evitar
          que la petición quede colgada.</li>    <li>No deshabilites <code>verify=True</code> en producción a menos
            que sepas lo que haces (evita usar <code>verify=False</code>).</li>    <li>Para muchas peticiones al mismo host, utiliza
          <code>Session</code> para aprovechar persistencia de conexión.
        </li>    <li>Verifica el estado de la respuesta (<code>status_code</code>,
          <code>raise_for_status()</code>) antes de procesar los datos.
        </li>    <li>Cuando trabajes con APIs, respeta los límites de rate-limit, y
          maneja redirecciones, errores, retries.</li>    <li>Evita exponer en el código credenciales sin protección.</li>    <li>Si haces scraping de páginas web, respeta los términos de uso del
            sitio, usa cabeceras <code>User-Agent</code> adecuadas y considera la
          ética/legales.</li>  </Lista>
      <Linea />
      <Titulo title="h2" id="resumen-rápido">11) Resumen rápido</Titulo>
      <Lista>
        <li>Librería simple, pero potente para hacer peticiones HTTP en
          Python.</li>    <li>Abstrae complejidad de <code>urllib</code> y hace que el código
            sea más legible.</li>    <li>Utilizada ampliamente para trabajar con APIs, servicios web,
              scraping ligero.</li>    <li>Soporta múltiples métodos HTTP, sesiones, autenticación,
                verificación SSL, proxies.</li>    <li>Debes instalarla aparte y aplicarla con buenas
                  prácticas.</li>  </Lista>
      <Linea />
      <Texto><Enlace href="./../../readme.md#5-python">Regresar a la Guía
        Principal</Enlace ></Texto>
      <blockquote>
        <Texto><strong>Autor:</strong> Fravelz</Texto>
      </blockquote>
    </>
  );
}
export default nameabcd;
