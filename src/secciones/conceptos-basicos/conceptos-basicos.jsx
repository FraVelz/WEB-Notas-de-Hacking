<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">

<head>
  <meta charset="utf-8" />
  <meta name="generator" content="pandoc" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <title>conceptos-basicos</title>
</head>

<body>
  <h1 id="ciberseguridad">Ciberseguridad</h1>
  <hr />
  <h2 id="temario">Temario</h2>
  <ul>
    <li><a href="#ciberseguridad">Ciberseguridad</a>
      <ul>
        <li><a href="#temario">Temario</a></li>
        <li><a href="#0-seguridad-de-la-información-vs-seguridad-informática-vs-ciberseguridad">0.
            Seguridad de la información Vs Seguridad informática Vs
            Ciberseguridad</a></li>
        <li><a href="#1-qué-es">1. ¿Qué es?</a></li>
        <li><a href="#2-objetivos">2. Objetivos</a></li>
        <li><a href="#3-terminologías">3. Terminologías</a>
          <ul>
            <li><a href="#exploit">Exploit</a></li>
            <li><a href="#payload">Payload</a></li>
            <li><a href="#0-day-zero-day">0-day (Zero-Day)</a></li>
            <li><a href="#malware-y-tipos-de-malware">Malware y tipos de
                Malware</a></li>
            <li><a href="#vulnerabilidad">Vulnerabilidad</a></li>
            <li><a href="#amenaza">Amenaza</a></li>
            <li><a href="#riesgo">Riesgo</a></li>
          </ul>
        </li>
        <li><a href="#3-amenazas-comunes">3. Amenazas comunes</a></li>
        <li><a href="#4-vectores-de-ataque">4. Vectores de ataque</a></li>
        <li><a href="#5-buenas-prácticas-de-seguridad">5. Buenas prácticas de
            seguridad</a></li>
        <li><a href="#6-áreas-de-ciberseguridad">6. Áreas de
            ciberseguridad</a></li>
        <li><a href="#7-tipos-de-hackers-por-su-actuar">7. Tipos de hackers (por
            su actuar)</a></li>
        <li><a href="#8-tipos-de-hackers-por-su-rol">8. Tipos de hackers (por su
            rol)</a></li>
        <li><a href="#9-herramientas-básicas-en-ciberseguridad">9. Herramientas
            básicas en ciberseguridad</a></li>
      </ul>
    </li>
  </ul>
  <p><a href="./../readme.md#0-conceptos-básicos">Regresar a la guía
      principal</a></p>
  <hr />
  <h2 id="seguridad-de-la-información-vs-seguridad-informática-vs-ciberseguridad">0.
    Seguridad de la información Vs Seguridad informática Vs
    Ciberseguridad</h2>
  <p><strong>Seguridad de la información</strong>: Procedimientos de
    medidas para asegurar los datos independientemente en que formato
    estén.</p>
  <p><strong>Seguridad informática</strong>: Solo proteger los datos en
    formato informático tanto físico como virtual.</p>
  <p><strong>Ciberseguridad</strong>: Proteger los datos e información en
    formato virtual (digitales).</p>
  <hr />
  <h2 id="qué-es">1. ¿Qué es?</h2>
  <p>Es la práctica de proteger sistemas, redes, datos y programas frente
    a ataques, o accesos no autorizados.</p>
  <hr />
  <h2 id="objetivos">2. Objetivos</h2>
  <ul>
    <li>
      <p><strong>Confidencialidad:</strong> Solo las personas autorizadas
        acceden a la información.</p>
    </li>
    <li>
      <p><strong>Integridad:</strong> La información no puede ser alterada
        sin permiso.</p>
    </li>
    <li>
      <p><strong>Disponibilidad:</strong> Los sistemas y datos deben estar
        accesibles cuando se necesiten.</p>
    </li>
  </ul>
  <hr />
  <h2 id="terminologías">3. Terminologías</h2>
  <h3 id="exploit">Exploit</h3>
  <p>Es un <strong>programa, código o técnica</strong> que
    <strong>aprovecha una vulnerabilidad</strong> (un error o debilidad en
    un sistema, software o aplicación) para <strong>ejecutar acciones no
      autorizadas</strong>.
  </p>
  <blockquote>
    <p>El exploit es <em>el método o herramienta que “explota” la
        falla.</em></p>
  </blockquote>
  <h3 id="payload">Payload</h3>
  <p>(en español, <em>carga útil</em>) es <strong>lo que el exploit
      ejecuta una vez que logra entrar</strong>.</p>
  <p>Piensa así:</p>
  <ul>
    <li>El <em>exploit</em> es la <strong>llave que abre la
        puerta</strong>.</li>
    <li>El <em>payload</em> es <strong>lo que metes una vez
        abierta</strong>.</li>
  </ul>
  <p>Algunos tipos de payloads:</p>
  <ul>
    <li><strong>Reverse shell:</strong> le da al atacante control remoto
      sobre la máquina.</li>
    <li><strong>Meterpreter / comandos personalizados:</strong> carga
      herramientas para moverse por el sistema.</li>
    <li><strong>Downloader:</strong> descarga malware adicional o instala
      puertas traseras (<em>backdoors</em>).</li>
    <li><strong>Privilege escalation payloads:</strong> aumentan permisos
      dentro del sistema.</li>
  </ul>
  <p>En herramientas como <strong>Metasploit</strong>, esto se ve muy
    claro: eliges un exploit y luego le asocias un payload.</p>
  <h3 id="day-zero-day">0-day (Zero-Day)</h3>
  <p>(se pronuncia <em>zero day</em>) es una <strong>vulnerabilidad
      desconocida por el fabricante o por el público</strong> —y por tanto
    <strong>no tiene parche ni defensa aún</strong>.
  </p>
  <blockquote>
    <p>“Zero-day” significa literalmente <em>día cero desde que se
        descubrió</em>, es decir, <strong>el fabricante tiene 0 días para
        corregirlo</strong>.</p>
  </blockquote>
  <p>Un <strong>0-day exploit</strong> es cuando alguien crea un exploit
    que aprovecha esa vulnerabilidad secreta. Es el tipo de ataque más
    peligroso y valioso, porque <strong>ni antivirus ni firewalls lo
      detectan</strong> (ya que nadie sabía que existía).</p>
  <h3 id="malware-y-tipos-de-malware">Malware y tipos de Malware</h3>
  <p>(Malicious Software) Cualquier tipo de código malicioso que busca
    aprovecharse de una vulnerabilidad y casuar daño.</p>
  <p>Tipos:</p>
  <ul>
    <li>Troyanos</li>
    <li>Virus</li>
    <li>Gusanos</li>
    <li>Rogue</li>
    <li>Adware</li>
    <li>Spyware</li>
    <li>Ransomware</li>
  </ul>
  <h3 id="vulnerabilidad">Vulnerabilidad</h3>
  <p>Fallo de configuración, de diseño o de implementación que pone en
    riesgo la seguridad del entorno o sistema.</p>
  <h3 id="amenaza">Amenaza</h3>
  <p>Cualquier tipo de circunstancia posible que se pueda manifestar donde
    se pueda a través de una vulnerabilidad poner en peligro el sistema.</p>
  <h3 id="riesgo">Riesgo</h3>
  <p>Probabilidad o posibilidad que una amenaza se materialice y afecte al
    sistema en cuestión, aprovechándose de una vulnerabilidad.</p>
  <hr />
  <h2 id="amenazas-comunes">3. Amenazas comunes</h2>
  <ul>
    <li>
      <p><strong>Malware:</strong> Software malicioso (virus, troyanos,
        gusanos, ransomware, spyware).</p>
    </li>
    <li>
      <p><strong>Phishing:</strong> Engaños (emails o mensajes falsos)
        para robar credenciales.</p>
    </li>
    <li>
      <p><strong>Ingeniería Social:</strong> Manipular personas para
        obtener información.</p>
    </li>
    <li>
      <p><strong>Ataques DDoS:</strong> sobrecargar un servidor para
        dejarlo fuera de servicio.</p>
    </li>
    <li>
      <p><strong>Exploits:</strong> Aprovechar vulnerabilidades en
        software y sistemas.</p>
    </li>
  </ul>
  <hr />
  <h2 id="vectores-de-ataque">4. Vectores de ataque</h2>
  <p>Son los caminos que usan los atacantes:</p>
  <ul>
    <li>Correos electrónicos.</li>
    <li>Redes wifi inseguras.</li>
    <li>Descargas de archivos.</li>
    <li>Aplicaciones maliciosas.</li>
    <li>Dispositivos externos (USB).</li>
  </ul>
  <hr />
  <h2 id="buenas-prácticas-de-seguridad">5. Buenas prácticas de
    seguridad</h2>
  <ul>
    <li>
      <p>Usar contraseñas seguras (y diferentes en cada cuenta).</p>
    </li>
    <li>
      <p>Activar la autenticación en dos pasos (2FA).</p>
    </li>
    <li>
      <p>Mantener software y sistemas actualizados.</p>
    </li>
    <li>
      <p>Hacer copias de seguridad (backups).</p>
    </li>
    <li>
      <p>Usar VPN en redes públicas.</p>
    </li>
    <li>
      <p>No haga clic en enlaces sospechosos.</p>
    </li>
  </ul>
  <hr />
  <h2 id="áreas-de-ciberseguridad">6. Áreas de ciberseguridad</h2>
  <ul>
    <li>
      <p><strong>Seguridad de Redes:</strong> Proteger tráfico de
        datos.</p>
    </li>
    <li>
      <p><strong>Seguridad de la Información:</strong> Proteger datos en
        depósito y en tránsito.</p>
    </li>
    <li>
      <p><strong>Seguridad en la Nube:</strong> Protección en servicios
        iCloud.</p>
    </li>
    <li>
      <p><strong>Criptografía:</strong> Usar algoritmos para proteger
        información. (ej: cifrado AES, RSA).</p>
    </li>
    <li>
      <p><strong>Ciberinteligencia:</strong> Detección y análisis de
        amenazas.</p>
    </li>
    <li>
      <p><strong>Hacking Ético:</strong> Buscar vulnerabilidades para
        fortalecer sistemas.</p>
    </li>
  </ul>
  <hr />
  <h2 id="tipos-de-hackers-por-su-actuar">7. Tipos de hackers (por su
    actuar)</h2>
  <ul>
    <li>
      <p><strong>White hat:</strong> Éticos, ayudan a mejorar la
        seguridad.</p>
    </li>
    <li>
      <p><strong>Black hat:</strong> Atacantes maliciosos.</p>
    </li>
    <li>
      <p><strong>Grey hat:</strong> A veces actúan éticamente, otras veces
        no.</p>
    </li>
  </ul>
  <p>Normalmente a los “hackers de sombrero, negro o gris” se les da el
    nombre de ciberdelincuentes.</p>
  <hr />
  <h2 id="tipos-de-hackers-por-su-rol">8. Tipos de hackers (por su
    rol)</h2>
  <ul>
    <li>
      <p><strong>Red team:</strong> Ofensivos (atacantes), simula todo
        tipo de ataques para saber la seguridad que tiene una empresa u
        organización.</p>
    </li>
    <li>
      <p><strong>Blue team:</strong> Defensivo (guardianes), son los que
        protegen de los ataques, los encargados de reforzar seguridad a la
        empresa si los de <strong>red team</strong> encuentran alguna
        falla.</p>
    </li>
    <li>
      <p><strong>Purple team:</strong> híbrido (colaboración), es una
        mezcla de ambos mundos de red team, y blue team.</p>
    </li>
  </ul>
  <p>Existen más tipos de hackers por su rol, pero son muy desconocidos
    normalmente en el mundo laboral, y comunidades onlines.</p>
  <hr />
  <h2 id="herramientas-básicas-en-ciberseguridad">9. Herramientas básicas
    en ciberseguridad</h2>
  <ul>
    <li>
      <p><strong>Wireshark:</strong> Análisis de tráfico de red.</p>
    </li>
    <li>
      <p><strong>Nmap:</strong> Escaneo de puertos y redes.</p>
    </li>
    <li>
      <p><strong>Metasploit:</strong> Pruebas de penetración.</p>
    </li>
    <li>
      <p><strong>Kali Linux:</strong> Sistema operativo con herramientas
        de hacking ético, se puede utilizar otros no importa, pero kali ya viene
        con las herramientas incluidas.</p>
    </li>
  </ul>
  <hr />
  <p>Para conocer muchos más conceptos y fortalecer los aprendidos,
    también esta este video de YouTube:</p>
  <p><a href="https://www.youtube.com/watch?v=spMYZHepjko">Ir a conceptos
      de ciberseguridad - Hixec</a></p>
  <hr />
  <p>Listo, si ya terminaste de leer el archivo de los conceptos básicos
    de Ciberseguridad, puedes regresar a la guía principal con el siguiente
    enlace:</p>
  <p><a href="./../readme.md#0-conceptos-básicos">Regresar a la guía
      principal</a></p>
  <blockquote>
    <p><strong>Autor:</strong> Fravelz</p>
  </blockquote>
</body>

</html>