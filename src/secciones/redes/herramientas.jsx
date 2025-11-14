import Enlace from "../../componentes/atomos/enlace.jsx";
import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../../componentes/organismos/estructura.jsx";
import Linea from "../../componentes/atomos/linea.jsx";
import Lista from "../../componentes/moleculas/lista.jsx";
import Texto from "./../../componentes/atomos/texto.jsx";
import Titulo from "../../componentes/moleculas/titulo.jsx";
function Temario({ className = "" }) {
  return (
    <Lista className={className}>
              <li><Enlace href="#resumen-rápido">Resumen rápido</Enlace ></li>
              <li><Enlace href="#wireshark--analizador-de-paquetes-deep-packet-inspection">Wireshark
                — analizador de paquetes (deep packet inspection)</Enlace ></li>
              <li><Enlace href="#nmap--descubrimiento-y-escaneo-de-redes">Nmap —
                descubrimiento y escaneo de redes</Enlace ></li>
              <li><Enlace href="#metasploit--plataforma-modular-para-pruebas-de-penetración">Metasploit
                — plataforma modular para pruebas de penetración</Enlace ></li>
              <li><Enlace href="#diferencias-clave-entre-las-tres">Diferencias clave entre
                las tres</Enlace ></li>
              <li><Enlace href="#flujo-típico-en-una-evaluación-ética-resumen">Flujo típico
                en una evaluación ética (resumen)</Enlace ></li>
              <li><Enlace href="#recursos-oficiales-y-seguridad">Recursos oficiales y
                seguridad</Enlace ></li>
              <li><Enlace href="#recomendación-de-aprendizaje-práctico">Recomendación de
                aprendizaje (práctico)</Enlace ></li>
    </Lista>
  );
}

function nameabcd({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" id="parte-práctica-herramientas">Parte Práctica (Herramientas)</Titulo>
        <Linea />
        
        <TemarioCompleto temario={Temario} />

        <Titulo title="h2" id="resumen-rápido">Resumen rápido</Titulo>
        <Texto>Te explico de forma clara qué hace cada herramienta, para qué se usa
          en la práctica, qué puedes aprender con cada una y recomendaciones de
          uso seguro/ético.</Texto>
        <Linea />
        <Titulo title="h2" id="wireshark--analizador-de-paquetes-deep-packet-inspection">Wireshark —
          analizador de paquetes (deep packet inspection)</Titulo>
        <Texto><strong>Qué es / para qué sirve:</strong></Texto>
        <Texto>Wireshark es un analizador de protocolos de red que captura y muestra
          los paquetes que circulan por una interfaz de red, permitiendo
          inspeccionar cada capa (Ethernet, IP, TCP/UDP, HTTP, etc.). Es la “lupa”
          para ver exactamente qué se está enviando y recibiendo en la red.</Texto>
        <Texto><strong>Usos típicos:</strong></Texto>
        <Lista>
          <li>Diagnóstico de problemas de red (pérdida de paquetes,
            retransmisiones, latencia).</li>
          <li>Analizar protocolos y entender comportamientos (ej. por qué una app
            falla).</li>
          <li>Forense de red (reconstruir sesiones, analizar tráfico malicioso) —
            siempre con permiso.</li>
        </Lista>
        <Texto><strong>Conceptos/práctica básica:</strong></Texto>
        <Lista>
          <li>Captura en una interfaz y luego aplica <strong>filtros de
            visualización</strong> (p. ej. http,
            ip.addr == 10.0.0.5) para aislar lo que te
            interesa.
          </li>    <li>Diferencia entre <em>capture filters</em> (filtran en el momento
            de captura) y <em>display filters</em> (filtran lo ya
            capturado).</li>  </Lista>
        <Texto><strong>Recomendación:</strong> aprende primero a interpretar
          paquetes (handshakes TCP, flags, reintentos). Wireshark es excelente
          para entender protocolos desde la base.</Texto>
        <Linea />
        <Titulo title="h2" id="nmap--descubrimiento-y-escaneo-de-redes">Nmap — descubrimiento y
          escaneo de redes</Titulo>
        <Texto><strong>Qué es / para qué sirve:</strong></Texto>
        <Texto>Nmap (Network Mapper) es una utilidad para descubrir hosts en red y
          auditar servicios/puertos. Sirve para mapear qué equipos están “vivos”,
          qué puertos y servicios exponen y para obtener información inicial de
          seguridad.</Texto>
        <Texto><strong>Usos típicos:</strong></Texto>
        <Lista>
          <li>Inventario de red (¿qué máquinas hay y qué servicios corren?).</li>
          <li>Evaluación inicial de superficie de ataque (qué puertos abiertos,
            versiones de servicios).</li>
          <li>Comprobaciones administrativas (monitorizar disponibilidad).</li>
        </Lista>
        <Texto><strong>Conceptos/práctica básica:</strong></Texto>
        <Lista>
          <li><em>Host discovery</em> (detectar hosts activos).</li>    <li><em>Port scanning</em> (ver puertos abiertos).</li>    <li><em>Service/version detection</em> (intentar identificar qué
            servicio/version corre en un puerto). Nmap tiene muchísimas opciones; la
            documentación oficial y el libro de Nmap son excelentes para progresar
            paso a paso.</li>  </Lista>
        <Texto><strong>Recomendación:</strong> úsalo en tú propia red o en entornos
          de laboratorio (p. ej. máquinas virtuales o laboratorios vulnerables).
          Es la herramienta que muchas veces se usa como “primer vistazo” antes de
          cualquier otra prueba.</Texto>
        <Linea />
        <Titulo title="h2" id="metasploit--plataforma-modular-para-pruebas-de-penetración">Metasploit
          — plataforma modular para pruebas de penetración</Titulo>
        <Texto><strong>Qué es / para qué sirve:</strong></Texto>
        <Texto>Metasploit es un framework modular orientado a pruebas de penetración
          y desarrollo/ejecución de exploits. Permite combinar módulos (exploits,
          payloads, auxiliares) para probar sí una vulnerabilidad real puede ser
          explotada. Es una suite más orientada a la fase
          <em>explotación/post-explotación</em> de una evaluación de
          seguridad.
        </Texto>
        <Texto><strong>Usos típicos:</strong></Texto>
        <Lista>
          <li>Validación controlada de vulnerabilidades (demostrar riesgos en
            entornos con permiso).</li>    <li>Automatizar explotación y post-explotación (por ejemplo, abrir
              una shell controlada para evidencia).</li>    <li>Entrenamiento y desarrollo de payloads y pruebas de detección.
                ([WIRED][8])</li>  </Lista>
        <Texto><strong>Conceptos/práctica básica (alto nivel y ética):</strong></Texto>
        <Lista>
          <li>Metasploit es modular: <em>auxiliary</em> (escanear/recopilar),
            <em>exploit</em> (intentarlo), <em>payload</em> (qué ejecutas sí
            funciona), <em>post</em> (acciones después de obtener acceso).
          </li>    <li><strong>Importante:</strong> usar Metasploit para atacar sistemas
            sin autorización es ilegal y dañino. Está pensado para laboratorios y
            pruebas autorizadas; su uso responsable ayuda a mejorar la
            seguridad.</li>  </Lista>
        <Linea />
        <Titulo title="h2" id="diferencias-clave-entre-las-tres">Diferencias clave entre las
          tres</Titulo>
        <Lista>
          <li><strong>Wireshark</strong> = inspección detallada del tráfico
            (qué pasa en cada paquete). Ideal para diagnóstico y análisis de
            protocolos.</li>    <li><strong>Nmap</strong> = reconocimiento y mapeo (quién está en la
              red y qué servicios/puertos ofrece). Excelente para obtener el panorama
              inicial.</li>    <li><strong>Metasploit</strong> = probar/explotar vulnerabilidades
                (validación de riesgos en entornos controlados). Se usa después de
                identificar objetivos y vulnerabilidades.</li>  </Lista>
        <Linea />
        <Titulo title="h2" id="flujo-típico-en-una-evaluación-ética-resumen">Flujo típico en
          una evaluación ética (resumen)</Titulo>
        <ol type="1">
          <li><strong>Descubrir</strong> hosts y servicios con Nmap.</li>    <li><strong>Analizar</strong> tráfico y problemas concretos con
            Wireshark (sí hace falta inspección de paquetes).</li>    <li><strong>Validar</strong> vulnerabilidades (con autorización)
              usando Metasploit u otras herramientas especializadas.</li>  </ol>
        <Linea />
        <Titulo title="h2" id="recursos-oficiales-y-seguridad">Recursos oficiales y
          seguridad</Titulo>
        <Lista>
          <li>Wireshark: sitio oficial y manual (para filtros y
            conceptos).</li>    <li>Nmap: sitio oficial y el libro *Nmap Network Scanning- (excelente
              para aprender desde cero).</li>    <li>Metasploit / Rapid7: documentación oficial y guías; recuerda que
                es una herramienta potente que requiere uso ético.</li>  </Lista>
        <Linea />
        <Titulo title="h2" id="recomendación-de-aprendizaje-práctico">Recomendación de
          aprendizaje (práctico)</Titulo>
        <Lista>
          <li>Empieza por <strong>Wireshark</strong> para entender cómo
            funciona el tráfico (te hará mejor en redes y debugging).</li>    <li>Luego aprende <strong>Nmap</strong> para mapear redes y practicar
              reconocimiento.</li>    <li>Finalmente, estudia <strong>Metasploit</strong> y explotación,
                pero sólo en laboratorios (máquinas virtuales, entornos como
                Metasploitable, TryHackMe, Hack The Box) y siempre con permiso.</li>  </Lista>
      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}
export default nameabcd;
