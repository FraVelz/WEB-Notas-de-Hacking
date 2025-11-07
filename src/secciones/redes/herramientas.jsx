<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">

<head>
  <meta charset="utf-8" />
  <meta name="generator" content="pandoc" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <title>herramientas</title>

</head>

<body>
  <h1 id="parte-práctica-herramientas">Parte Práctica (Herramientas)</h1>
  <hr />
  <h2 id="temario">Temario</h2>
  <ul>
    <li><a href="#parte-práctica-herramientas">Parte Práctica
        (Herramientas)</a>
      <ul>
        <li><a href="#temario">Temario</a></li>
        <li><a href="#resumen-rápido">Resumen rápido</a></li>
        <li><a href="#wireshark--analizador-de-paquetes-deep-packet-inspection">Wireshark
            — analizador de paquetes (deep packet inspection)</a></li>
        <li><a href="#nmap--descubrimiento-y-escaneo-de-redes">Nmap —
            descubrimiento y escaneo de redes</a></li>
        <li><a href="#metasploit--plataforma-modular-para-pruebas-de-penetración">Metasploit
            — plataforma modular para pruebas de penetración</a></li>
        <li><a href="#diferencias-clave-entre-las-tres">Diferencias clave entre
            las tres</a></li>
        <li><a href="#flujo-típico-en-una-evaluación-ética-resumen">Flujo típico
            en una evaluación ética (resumen)</a></li>
        <li><a href="#recursos-oficiales-y-seguridad">Recursos oficiales y
            seguridad</a></li>
        <li><a href="#recomendación-de-aprendizaje-práctico">Recomendación de
            aprendizaje (práctico)</a></li>
      </ul>
    </li>
  </ul>
  <p><a href="./../readme.md#4-redes">Regresar a la Guía Principal</a></p>
  <hr />
  <h2 id="resumen-rápido">Resumen rápido</h2>
  <p>Te explico de forma clara qué hace cada herramienta, para qué se usa
    en la práctica, qué puedes aprender con cada una y recomendaciones de
    uso seguro/ético.</p>
  <hr />
  <h2 id="wireshark-analizador-de-paquetes-deep-packet-inspection">Wireshark —
    analizador de paquetes (deep packet inspection)</h2>
  <p><strong>Qué es / para qué sirve:</strong></p>
  <p>Wireshark es un analizador de protocolos de red que captura y muestra
    los paquetes que circulan por una interfaz de red, permitiendo
    inspeccionar cada capa (Ethernet, IP, TCP/UDP, HTTP, etc.). Es la “lupa”
    para ver exactamente qué se está enviando y recibiendo en la red.</p>
  <p><strong>Usos típicos:</strong></p>
  <ul>
    <li>Diagnóstico de problemas de red (pérdida de paquetes,
      retransmisiones, latencia).</li>
    <li>Analizar protocolos y entender comportamientos (ej. por qué una app
      falla).</li>
    <li>Forense de red (reconstruir sesiones, analizar tráfico malicioso) —
      siempre con permiso.</li>
  </ul>
  <p><strong>Conceptos/práctica básica:</strong></p>
  <ul>
    <li>
      <p>Captura en una interfaz y luego aplica <strong>filtros de
          visualización</strong> (p. ej. <code>http</code>,
        <code>ip.addr == 10.0.0.5</code>) para aislar lo que te
        interesa.
      </p>
    </li>
    <li>
      <p>Diferencia entre <em>capture filters</em> (filtran en el momento
        de captura) y <em>display filters</em> (filtran lo ya
        capturado).</p>
    </li>
  </ul>
  <p><strong>Recomendación:</strong> aprende primero a interpretar
    paquetes (handshakes TCP, flags, reintentos). Wireshark es excelente
    para entender protocolos desde la base.</p>
  <hr />
  <h2 id="nmap-descubrimiento-y-escaneo-de-redes">Nmap — descubrimiento y
    escaneo de redes</h2>
  <p><strong>Qué es / para qué sirve:</strong></p>
  <p>Nmap (Network Mapper) es una utilidad para descubrir hosts en red y
    auditar servicios/puertos. Sirve para mapear qué equipos están “vivos”,
    qué puertos y servicios exponen y para obtener información inicial de
    seguridad.</p>
  <p><strong>Usos típicos:</strong></p>
  <ul>
    <li>Inventario de red (¿qué máquinas hay y qué servicios corren?).</li>
    <li>Evaluación inicial de superficie de ataque (qué puertos abiertos,
      versiones de servicios).</li>
    <li>Comprobaciones administrativas (monitorizar disponibilidad).</li>
  </ul>
  <p><strong>Conceptos/práctica básica:</strong></p>
  <ul>
    <li>
      <p><em>Host discovery</em> (detectar hosts activos).</p>
    </li>
    <li>
      <p><em>Port scanning</em> (ver puertos abiertos).</p>
    </li>
    <li>
      <p><em>Service/version detection</em> (intentar identificar qué
        servicio/version corre en un puerto). Nmap tiene muchísimas opciones; la
        documentación oficial y el libro de Nmap son excelentes para progresar
        paso a paso.</p>
    </li>
  </ul>
  <p><strong>Recomendación:</strong> úsalo en tu propia red o en entornos
    de laboratorio (p. ej. máquinas virtuales o laboratorios vulnerables).
    Es la herramienta que muchas veces se usa como “primer vistazo” antes de
    cualquier otra prueba.</p>
  <hr />
  <h2 id="metasploit-plataforma-modular-para-pruebas-de-penetración">Metasploit
    — plataforma modular para pruebas de penetración</h2>
  <p><strong>Qué es / para qué sirve:</strong></p>
  <p>Metasploit es un framework modular orientado a pruebas de penetración
    y desarrollo/ejecución de exploits. Permite combinar módulos (exploits,
    payloads, auxiliares) para probar si una vulnerabilidad real puede ser
    explotada. Es una suite más orientada a la fase
    <em>explotación/post-explotación</em> de una evaluación de
    seguridad.
  </p>
  <p><strong>Usos típicos:</strong></p>
  <ul>
    <li>
      <p>Validación controlada de vulnerabilidades (demostrar riesgos en
        entornos con permiso).</p>
    </li>
    <li>
      <p>Automatizar explotación y post-explotación (por ejemplo, abrir
        una shell controlada para evidencia).</p>
    </li>
    <li>
      <p>Entrenamiento y desarrollo de payloads y pruebas de detección.
        ([WIRED][8])</p>
    </li>
  </ul>
  <p><strong>Conceptos/práctica básica (alto nivel y ética):</strong></p>
  <ul>
    <li>
      <p>Metasploit es modular: <em>auxiliary</em> (escanear/recopilar),
        <em>exploit</em> (intentarlo), <em>payload</em> (qué ejecutas si
        funciona), <em>post</em> (acciones después de obtener acceso).
      </p>
    </li>
    <li>
      <p><strong>Importante:</strong> usar Metasploit para atacar sistemas
        sin autorización es ilegal y dañino. Está pensado para laboratorios y
        pruebas autorizadas; su uso responsable ayuda a mejorar la
        seguridad.</p>
    </li>
  </ul>
  <hr />
  <h2 id="diferencias-clave-entre-las-tres">Diferencias clave entre las
    tres</h2>
  <ul>
    <li>
      <p><strong>Wireshark</strong> = inspección detallada del tráfico
        (qué pasa en cada paquete). Ideal para diagnóstico y análisis de
        protocolos.</p>
    </li>
    <li>
      <p><strong>Nmap</strong> = reconocimiento y mapeo (quién está en la
        red y qué servicios/puertos ofrece). Excelente para obtener el panorama
        inicial.</p>
    </li>
    <li>
      <p><strong>Metasploit</strong> = probar/explotar vulnerabilidades
        (validación de riesgos en entornos controlados). Se usa después de
        identificar objetivos y vulnerabilidades.</p>
    </li>
  </ul>
  <hr />
  <h2 id="flujo-típico-en-una-evaluación-ética-resumen">Flujo típico en
    una evaluación ética (resumen)</h2>
  <ol type="1">
    <li>
      <p><strong>Descubrir</strong> hosts y servicios con Nmap.</p>
    </li>
    <li>
      <p><strong>Analizar</strong> tráfico y problemas concretos con
        Wireshark (si hace falta inspección de paquetes).</p>
    </li>
    <li>
      <p><strong>Validar</strong> vulnerabilidades (con autorización)
        usando Metasploit u otras herramientas especializadas.</p>
    </li>
  </ol>
  <hr />
  <h2 id="recursos-oficiales-y-seguridad">Recursos oficiales y
    seguridad</h2>
  <ul>
    <li>
      <p>Wireshark: sitio oficial y manual (para filtros y
        conceptos).</p>
    </li>
    <li>
      <p>Nmap: sitio oficial y el libro *Nmap Network Scanning- (excelente
        para aprender desde cero).</p>
    </li>
    <li>
      <p>Metasploit / Rapid7: documentación oficial y guías; recuerda que
        es una herramienta potente que requiere uso ético.</p>
    </li>
  </ul>
  <hr />
  <h2 id="recomendación-de-aprendizaje-práctico">Recomendación de
    aprendizaje (práctico)</h2>
  <ul>
    <li>
      <p>Empieza por <strong>Wireshark</strong> para entender cómo
        funciona el tráfico (te hará mejor en redes y debugging).</p>
    </li>
    <li>
      <p>Luego aprende <strong>Nmap</strong> para mapear redes y practicar
        reconocimiento.</p>
    </li>
    <li>
      <p>Finalmente, estudia <strong>Metasploit</strong> y explotación,
        pero sólo en laboratorios (máquinas virtuales, entornos como
        Metasploitable, TryHackMe, Hack The Box) y siempre con permiso.</p>
    </li>
  </ul>
  <hr />
  <p><a href="./../readme.md#4-redes">Regresar a la Guía Principal</a></p>
  <blockquote>
    <p><strong>Autor:</strong> Fravelz</p>
  </blockquote>
</body>

</html>