<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">

<head>
  <meta charset="utf-8" />
  <meta name="generator" content="pandoc" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <title>request</title>

</head>

<body>
  <h1 id="request-en-python">Request en Python</h1>
  <h2 id="temario">Temario</h2>
  <ul>
    <li><a href="#request-en-python">Request en Python</a>
      <ul>
        <li><a href="#temario">Temario</a></li>
        <li><a href="#1-qué-es-requests">1) ¿Qué es requests?</a></li>
        <li><a href="#2-instalación-y-configuración-básica">2) Instalación y
            configuración básica</a></li>
        <li><a href="#3-uso-básico--peticiones-http">3) Uso básico — Peticiones
            HTTP</a>
          <ul>
            <li><a href="#get">GET</a></li>
            <li><a href="#post">POST</a></li>
            <li><a href="#otros-métodos">Otros métodos</a></li>
          </ul>
        </li>
        <li><a href="#4-elementos-importantes-de-la-respuesta-response">4)
            Elementos importantes de la respuesta (Response)</a></li>
        <li><a href="#5-parámetros-útiles-en-la-petición">5) Parámetros útiles
            en la petición</a></li>
        <li><a href="#6-sesiones-requestssession">6) Sesiones
            (requests.Session)</a></li>
        <li><a href="#7-autenticación-ssl-y-proxies">7) Autenticación, SSL y
            proxies</a></li>
        <li><a href="#8-manejo-de-errores-y-excepciones">8) Manejo de errores y
            excepciones</a></li>
        <li><a href="#9-ejemplos-completos">9) Ejemplos completos</a>
          <ul>
            <li><a href="#a-petición-get-con-parámetros">a) Petición GET con
                parámetros</a></li>
            <li><a href="#b-petición-post-con-json">b) Petición POST con
                JSON</a></li>
            <li><a href="#c-uso-de-sesión-con-cookies">c) Uso de sesión con
                cookies</a></li>
            <li><a href="#d-descarga-de-archivo-por-streaming">d) Descarga de
                archivo por streaming</a></li>
          </ul>
        </li>
        <li><a href="#10-buenas-prácticas-y-consideraciones">10) Buenas
            prácticas y consideraciones</a></li>
        <li><a href="#11-resumen-rápido">11) Resumen rápido</a></li>
      </ul>
    </li>
  </ul>
  <p><a href="./../../readme.md#5-python">Regresar a la Guía
      Principal</a></p>
  <hr />
  <h2 id="qué-es-requests">1) ¿Qué es requests?</h2>
  <ul>
    <li>
      <p><code>requests</code> es una biblioteca de Python de terceros
        para realizar <strong>solicitudes HTTP/HTTPS</strong> de forma sencilla
        y elegante.</p>
    </li>
    <li>
      <p>No viene incluida en la librería estándar de Python, por lo que
        debe instalarse con <code>pip install requests</code>.</p>
    </li>
    <li>
      <p>Permite hacer peticiones como GET, POST, PUT, DELETE, HEAD,
        PATCH, etc., y gestionar cabeceras, datos, autenticación, cookies,
        sesiones, entre otros.</p>
    </li>
    <li>
      <p>Es muy usada para acceder a APIs web, hacer scraping ligero, o
        interaccionar con servicios HTTP.</p>
    </li>
  </ul>
  <hr />
  <h2 id="instalación-y-configuración-básica">2) Instalación y
    configuración básica</h2>
  <div class="sourceCode" id="cb1">
    <pre
      class="sourceCode bash"><code class="sourceCode bash"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="ex">pip</span> install requests</span></code></pre>
  </div>
  <p>Luego en tu script:</p>
  <div class="sourceCode" id="cb2">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> requests</span></code></pre>
  </div>
  <p>Asegúrate de que la versión de Python sea compatible (por ejemplo
    Python 3.8+ según su documentación).</p>
  <p><em>Tip:</em> Usa un entorno virtual (<code>venv</code>) para
    instalarla sin afectar dependencias globales.</p>
  <hr />
  <h2 id="uso-básico-peticiones-http">3) Uso básico — Peticiones HTTP</h2>
  <h3 id="get">GET</h3>
  <div class="sourceCode" id="cb3">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> requests</span>
<span id="cb3-2"><a href="#cb3-2" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb3-3"><a href="#cb3-3" aria-hidden="true" tabindex="-1"></a>response <span class="op">=</span> requests.get(<span class="st">&quot;https://api.example.com/data&quot;</span>)</span>
<span id="cb3-4"><a href="#cb3-4" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(response.status_code)        <span class="co"># código de estado HTTP</span></span>
<span id="cb3-5"><a href="#cb3-5" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(response.text)               <span class="co"># contenido como texto</span></span>
<span id="cb3-6"><a href="#cb3-6" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(response.json())             <span class="co"># si es JSON, lo transforma en dict/list</span></span></code></pre>
  </div>
  <h3 id="post">POST</h3>
  <p>Enviar datos:</p>
  <div class="sourceCode" id="cb4">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a>payload <span class="op">=</span> {<span class="st">&quot;username&quot;</span>: <span class="st">&quot;usuario&quot;</span>, <span class="st">&quot;password&quot;</span>: <span class="st">&quot;secreto&quot;</span>}</span>
<span id="cb4-2"><a href="#cb4-2" aria-hidden="true" tabindex="-1"></a>response <span class="op">=</span> requests.post(<span class="st">&quot;https://api.example.com/login&quot;</span>, data<span class="op">=</span>payload)</span></code></pre>
  </div>
  <p>Enviar JSON:</p>
  <div class="sourceCode" id="cb5">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb5-1"><a href="#cb5-1" aria-hidden="true" tabindex="-1"></a>response <span class="op">=</span> requests.post(<span class="st">&quot;https://api.example.com/login&quot;</span>, json<span class="op">=</span>payload)</span></code></pre>
  </div>
  <h3 id="otros-métodos">Otros métodos</h3>
  <p>También puedes usar <code>requests.put()</code>,
    <code>requests.delete()</code>, <code>requests.head()</code>,
    <code>requests.patch()</code>.
  </p>
  <hr />
  <h2 id="elementos-importantes-de-la-respuesta-response">4) Elementos
    importantes de la respuesta (Response)</h2>
  <p>Al hacer una petición, obtienes un objeto <code>Response</code>.
    Algunos atributos y métodos clave:</p>
  <ul>
    <li>
      <p><code>response.status_code</code> → código de estado HTTP (200,
        404, 500, etc.).</p>
    </li>
    <li>
      <p><code>response.text</code> → contenido decodificado como texto
        (string).</p>
    </li>
    <li>
      <p><code>response.content</code> → contenido en bytes.</p>
    </li>
    <li>
      <p><code>response.json()</code> → interpreta el contenido como JSON
        y devuelve dict o lista (si aplica).</p>
    </li>
    <li>
      <p><code>response.headers</code> → diccionario con cabeceras HTTP de
        la respuesta.</p>
    </li>
    <li>
      <p><code>response.elapsed</code> → tiempo que tardó la
        petición.</p>
    </li>
    <li>
      <p><code>response.raise_for_status()</code> → lanza excepción
        <code>requests.exceptions.HTTPError</code> si el código de estado indica
        error (&gt;=400).
      </p>
    </li>
  </ul>
  <hr />
  <h2 id="parámetros-útiles-en-la-petición">5) Parámetros útiles en la
    petición</h2>
  <p>Al llamar a <code>requests.get()</code> o
    <code>requests.post()</code> puedes pasar varios parámetros adicionales
    para mayor control:
  </p>
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
  <hr />
  <h2 id="sesiones-requests.session">6) Sesiones (requests.Session)</h2>
  <p>Una característica potente: puedes crear un objeto
    <code>Session</code> para persistir ciertas opciones (como cookies,
    cabeceras comunes, autenticación) entre múltiples peticiones. Mejora el
    rendimiento al reutilizar conexiones. Ejemplo:
  </p>
  <div class="sourceCode" id="cb6">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> requests</span>
<span id="cb6-2"><a href="#cb6-2" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb6-3"><a href="#cb6-3" aria-hidden="true" tabindex="-1"></a>s <span class="op">=</span> requests.Session()</span>
<span id="cb6-4"><a href="#cb6-4" aria-hidden="true" tabindex="-1"></a>s.headers.update({<span class="st">&quot;User-Agent&quot;</span>: <span class="st">&quot;MiApp/1.0&quot;</span>})</span>
<span id="cb6-5"><a href="#cb6-5" aria-hidden="true" tabindex="-1"></a>response1 <span class="op">=</span> s.get(<span class="st">&quot;https://api.example.com/resource1&quot;</span>)</span>
<span id="cb6-6"><a href="#cb6-6" aria-hidden="true" tabindex="-1"></a>response2 <span class="op">=</span> s.get(<span class="st">&quot;https://api.example.com/resource2&quot;</span>)</span></code></pre>
  </div>
  <hr />
  <h2 id="autenticación-ssl-y-proxies">7) Autenticación, SSL y
    proxies</h2>
  <ul>
    <li>
      <p>Autenticación básica:
        <code>requests.get(url, auth=('user','pass'))</code>.
      </p>
    </li>
    <li>
      <p>Verificación SSL: por defecto <code>verify=True</code>. Si el
        servidor tiene certificado inválido, se puede poner
        <code>verify=False</code> <strong>pero no recomendado en
          producción</strong>.
      </p>
    </li>
    <li>
      <p>Puedes especificar proxies para HTTP/HTTPS usando el parámetro
        <code>proxies</code>.
      </p>
    </li>
  </ul>
  <hr />
  <h2 id="manejo-de-errores-y-excepciones">8) Manejo de errores y
    excepciones</h2>
  <p>Es importante manejar posibles fallos (timeout, conexión rechazada,
    etc.). Ejemplo:</p>
  <div class="sourceCode" id="cb7">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb7-1"><a href="#cb7-1" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> requests</span>
<span id="cb7-2"><a href="#cb7-2" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb7-3"><a href="#cb7-3" aria-hidden="true" tabindex="-1"></a><span class="cf">try</span>:</span>
<span id="cb7-4"><a href="#cb7-4" aria-hidden="true" tabindex="-1"></a>    response <span class="op">=</span> requests.get(<span class="st">&quot;https://api.example.com&quot;</span>, timeout<span class="op">=</span><span class="dv">5</span>)</span>
<span id="cb7-5"><a href="#cb7-5" aria-hidden="true" tabindex="-1"></a>    response.raise_for_status()</span>
<span id="cb7-6"><a href="#cb7-6" aria-hidden="true" tabindex="-1"></a><span class="cf">except</span> requests.exceptions.HTTPError <span class="im">as</span> errh:</span>
<span id="cb7-7"><a href="#cb7-7" aria-hidden="true" tabindex="-1"></a>    <span class="bu">print</span>(<span class="st">&quot;HTTP Error:&quot;</span>, errh)</span>
<span id="cb7-8"><a href="#cb7-8" aria-hidden="true" tabindex="-1"></a><span class="cf">except</span> requests.exceptions.<span class="pp">ConnectionError</span> <span class="im">as</span> errc:</span>
<span id="cb7-9"><a href="#cb7-9" aria-hidden="true" tabindex="-1"></a>    <span class="bu">print</span>(<span class="st">&quot;Error de conexión:&quot;</span>, errc)</span>
<span id="cb7-10"><a href="#cb7-10" aria-hidden="true" tabindex="-1"></a><span class="cf">except</span> requests.exceptions.Timeout <span class="im">as</span> errt:</span>
<span id="cb7-11"><a href="#cb7-11" aria-hidden="true" tabindex="-1"></a>    <span class="bu">print</span>(<span class="st">&quot;Timeout:&quot;</span>, errt)</span>
<span id="cb7-12"><a href="#cb7-12" aria-hidden="true" tabindex="-1"></a><span class="cf">except</span> requests.exceptions.RequestException <span class="im">as</span> err:</span>
<span id="cb7-13"><a href="#cb7-13" aria-hidden="true" tabindex="-1"></a>    <span class="bu">print</span>(<span class="st">&quot;Otro error:&quot;</span>, err)</span></code></pre>
  </div>
  <p>Este patrón aparece en tutoriales de <code>requests</code>.</p>
  <hr />
  <h2 id="ejemplos-completos">9) Ejemplos completos</h2>
  <h3 id="a-petición-get-con-parámetros">a) Petición GET con
    parámetros</h3>
  <div class="sourceCode" id="cb8">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb8-1"><a href="#cb8-1" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> requests</span>
<span id="cb8-2"><a href="#cb8-2" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb8-3"><a href="#cb8-3" aria-hidden="true" tabindex="-1"></a>url <span class="op">=</span> <span class="st">&quot;https://httpbin.org/get&quot;</span></span>
<span id="cb8-4"><a href="#cb8-4" aria-hidden="true" tabindex="-1"></a>params <span class="op">=</span> {<span class="st">&quot;q&quot;</span>: <span class="st">&quot;python&quot;</span>, <span class="st">&quot;page&quot;</span>: <span class="dv">1</span>}</span>
<span id="cb8-5"><a href="#cb8-5" aria-hidden="true" tabindex="-1"></a>response <span class="op">=</span> requests.get(url, params<span class="op">=</span>params)</span>
<span id="cb8-6"><a href="#cb8-6" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(response.url)       <span class="co"># muestra la URL final con query string</span></span>
<span id="cb8-7"><a href="#cb8-7" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(response.status_code)</span>
<span id="cb8-8"><a href="#cb8-8" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(response.json())</span></code></pre>
  </div>
  <h3 id="b-petición-post-con-json">b) Petición POST con JSON</h3>
  <div class="sourceCode" id="cb9">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb9-1"><a href="#cb9-1" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> requests</span>
<span id="cb9-2"><a href="#cb9-2" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb9-3"><a href="#cb9-3" aria-hidden="true" tabindex="-1"></a>url <span class="op">=</span> <span class="st">&quot;https://httpbin.org/post&quot;</span></span>
<span id="cb9-4"><a href="#cb9-4" aria-hidden="true" tabindex="-1"></a>payload <span class="op">=</span> {<span class="st">&quot;username&quot;</span>: <span class="st">&quot;user&quot;</span>, <span class="st">&quot;password&quot;</span>: <span class="st">&quot;pass&quot;</span>}</span>
<span id="cb9-5"><a href="#cb9-5" aria-hidden="true" tabindex="-1"></a>response <span class="op">=</span> requests.post(url, json<span class="op">=</span>payload)</span>
<span id="cb9-6"><a href="#cb9-6" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(response.status_code)</span>
<span id="cb9-7"><a href="#cb9-7" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(response.json())</span></code></pre>
  </div>
  <h3 id="c-uso-de-sesión-con-cookies">c) Uso de sesión con cookies</h3>
  <div class="sourceCode" id="cb10">
    <pre
      class="sourceCode python"><code class="sourceCode python"><span id="cb10-1"><a href="#cb10-1" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> requests</span>
<span id="cb10-2"><a href="#cb10-2" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb10-3"><a href="#cb10-3" aria-hidden="true" tabindex="-1"></a>s <span class="op">=</span> requests.Session()</span>
<span id="cb10-4"><a href="#cb10-4" aria-hidden="true" tabindex="-1"></a>s.get(<span class="st">&quot;https://httpbin.org/cookies/set/sessioncookie/12345&quot;</span>)</span>
<span id="cb10-5"><a href="#cb10-5" aria-hidden="true" tabindex="-1"></a>response <span class="op">=</span> s.get(<span class="st">&quot;https://httpbin.org/cookies&quot;</span>)</span>
<span id="cb10-6"><a href="#cb10-6" aria-hidden="true" tabindex="-1"></a><span class="bu">print</span>(response.text)  <span class="co"># Verás que la cookie se mantiene</span></span></code></pre>
  </div>
  <h3 id="d-descarga-de-archivo-por-streaming">d) Descarga de archivo por
    streaming</h3>
  <div class="sourceCode" id="cb11">
    <pre class="sourceCode python"><code class="sourceCode python"><span id="cb11-1"><a href="#cb11-1" aria-hidden="true" tabindex="-1"></a><span class="im">import</span> requests</span>
<span id="cb11-2"><a href="#cb11-2" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb11-3"><a href="#cb11-3" aria-hidden="true" tabindex="-1"></a>url <span class="op">=</span> <span class="st">&quot;https://example.com/largefile.zip&quot;</span></span>
<span id="cb11-4"><a href="#cb11-4" aria-hidden="true" tabindex="-1"></a><span class="cf">with</span> requests.get(url, stream<span class="op">=</span><span class="va">True</span>) <span class="im">as</span> r:</span>
<span id="cb11-5"><a href="#cb11-5" aria-hidden="true" tabindex="-1"></a>    r.raise_for_status()</span>
<span id="cb11-6"><a href="#cb11-6" aria-hidden="true" tabindex="-1"></a>    <span class="cf">with</span> <span class="bu">open</span>(<span class="st">&quot;largefile.zip&quot;</span>, <span class="st">&quot;wb&quot;</span>) <span class="im">as</span> f:</span>
<span id="cb11-7"><a href="#cb11-7" aria-hidden="true" tabindex="-1"></a>        <span class="cf">for</span> chunk <span class="kw">in</span> r.iter_content(chunk_size<span class="op">=</span><span class="dv">8192</span>):</span>
<span id="cb11-8"><a href="#cb11-8" aria-hidden="true" tabindex="-1"></a>            f.write(chunk)</span></code></pre>
  </div>
  <hr />
  <h2 id="buenas-prácticas-y-consideraciones">10) Buenas prácticas y
    consideraciones</h2>
  <ul>
    <li>
      <p>Siempre establece un <code>timeout</code> razonable para evitar
        que la petición quede colgada.</p>
    </li>
    <li>
      <p>No deshabilites <code>verify=True</code> en producción a menos
        que sepas lo que haces (evita usar <code>verify=False</code>).</p>
    </li>
    <li>
      <p>Para muchas peticiones al mismo host, utiliza
        <code>Session</code> para aprovechar persistencia de conexión.
      </p>
    </li>
    <li>
      <p>Verifica el estado de la respuesta (<code>status_code</code>,
        <code>raise_for_status()</code>) antes de procesar los datos.
      </p>
    </li>
    <li>
      <p>Cuando trabajes con APIs, respeta los límites de rate-limit, y
        maneja redirecciones, errores, retries.</p>
    </li>
    <li>
      <p>Evita exponer en el código credenciales sin protección.</p>
    </li>
    <li>
      <p>Si haces scraping de páginas web, respeta los términos de uso del
        sitio, usa cabeceras <code>User-Agent</code> adecuadas y considera la
        ética/legales.</p>
    </li>
  </ul>
  <hr />
  <h2 id="resumen-rápido">11) Resumen rápido</h2>
  <ul>
    <li>
      <p>Librería simple, pero potente para hacer peticiones HTTP en
        Python.</p>
    </li>
    <li>
      <p>Abstrae complejidad de <code>urllib</code> y hace que el código
        sea más legible.</p>
    </li>
    <li>
      <p>Utilizada ampliamente para trabajar con APIs, servicios web,
        scraping ligero.</p>
    </li>
    <li>
      <p>Soporta múltiples métodos HTTP, sesiones, autenticación,
        verificación SSL, proxies.</p>
    </li>
    <li>
      <p>Debes instalarla aparte y aplicarla con buenas
        prácticas.</p>
    </li>
  </ul>
  <hr />
  <p><a href="./../../readme.md#5-python">Regresar a la Guía
      Principal</a></p>
  <blockquote>
    <p><strong>Autor:</strong> Fravelz</p>
  </blockquote>
</body>

</html>