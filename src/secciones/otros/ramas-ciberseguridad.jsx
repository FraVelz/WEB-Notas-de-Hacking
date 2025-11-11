import Enlace from "./../../componentes/enlace.jsx";
import Linea from "./../../componentes/linea.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Titulo from "./../../componentes/titulo.jsx";
function Temario({ className = "" }) {
  return (
    <Lista className={className}></Lista>
  );
}

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="ramas-y-especializaciones-de-ciberseguridad">Ramas y
        Especializaciones de ciberseguridad</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><Enlace href="#ramas-y-especializaciones-de-ciberseguridad">Ramas y
          Especializaciones de ciberseguridad</Enlace >
          <Lista>
            <li><Enlace href="#temario">Temario</Enlace ></li>
            <li><Enlace href="#1-seguridad-ofensiva-ethical-hacking-o-red-team">1.
              Seguridad Ofensiva (Ethical Hacking o Red Team)</Enlace ></li>
            <li><Enlace href="#2-seguridad-defensiva-blue-team">2. Seguridad Defensiva
              (Blue Team)</Enlace ></li>
            <li><Enlace href="#3-ciberinteligencia-cyber-threat-intelligence">3.
              Ciberinteligencia (Cyber Threat Intelligence)</Enlace ></li>
            <li><Enlace href="#4-criptografía-y-seguridad-de-la-información">4.
              Criptografía y Seguridad de la Información</Enlace ></li>
            <li><Enlace href="#5-seguridad-en-redes">5. Seguridad en Redes</Enlace ></li>
            <li><Enlace href="#6-seguridad-en-la-nube-cloud-security">6. Seguridad en la
              Nube (Cloud Security)</Enlace ></li>
            <li><Enlace href="#7-seguridad-en-aplicaciones">7. Seguridad en
              Aplicaciones</Enlace ></li>
            <li><Enlace href="#8-gobernanza-riesgo-y-cumplimiento-grc">8. Gobernanza,
              Riesgo y Cumplimiento (GRC)</Enlace ></li>
            <li><Enlace href="#9-seguridad-industrial-y-de-infraestructuras-críticas">9.
              Seguridad Industrial y de Infraestructuras Críticas</Enlace ></li>
            <li><Enlace href="#10-ciberseguridad-en-ia-y-datos">10. Ciberseguridad en IA
              y Datos</Enlace ></li>
          </Lista>
        </li>
      </Lista>
      <Texto><Enlace href="./../readme.md#3-ramas-y-especializaciones-de-ciberseguridad">Regresar
        a la guía principal</Enlace ></Texto>
      <Linea />
      <Titulo title="h2" id="seguridad-ofensiva-ethical-hacking-o-red-team">1. Seguridad
        Ofensiva (Ethical Hacking o Red Team)</Titulo>
      <Texto>Su objetivo es <strong>atacar para proteger</strong>. Los expertos en
        esta área piensan como los hackers para encontrar vulnerabilidades antes
        de que lo hagan los delincuentes.</Texto>
      <Texto><strong>Subramas:</strong></Texto>
      <Lista>
        <li><strong>Pentesting (Pruebas de penetración):</strong> Simular
          ataques reales para detectar fallos.</li>    <li><strong>Red Teaming:</strong> Ataques avanzados y coordinados
            contra toda la infraestructura.</li>    <li><strong>Ingeniería social:</strong> Manipular a las personas para
              obtener información (phishing, pretexting, etc.).</li>    <li><strong>Explotación de vulnerabilidades:</strong> Encontrar y
                aprovechar fallos en software o sistemas.</li>    <li><strong>Hacking físico:</strong> Acceso no autorizado a lugares o
                  dispositivos.</li>  </Lista>
      <Texto><em>Herramientas comunes:</em> Metasploit, Burp Suite, Nmap,
        Wireshark, Hydra, Aircrack-ng.</Texto>
      <Linea />
      <Titulo title="h2" id="seguridad-defensiva-blue-team">2. Seguridad Defensiva (Blue
        Team)</Titulo>
      <Texto>Su función es <strong>detectar, detener y responder</strong> ante los
        ataques.</Texto>
      <Texto><strong>Subramas:</strong></Texto>
      <Lista>
        <li><strong>Monitoreo de seguridad (SOC):</strong> Vigilancia
          constante de redes y sistemas.</li>    <li><strong>Análisis de malware:</strong> Estudio de programas
            maliciosos para entender su funcionamiento.</li>    <li><strong>Gestión de incidentes:</strong> Responder ante ataques o
              brechas de seguridad.</li>    <li><strong>Caza de amenazas (Threat Hunting):</strong> Buscar
                ataques ocultos o sofisticados antes de que causen daño.</li>    <li><strong>Fortificación de sistemas (Hardening):</strong>
          Configurar y reforzar sistemas para minimizar riesgos.</li>  </Lista>
      <Texto><em>Herramientas comunes:</em> Splunk, SIEM, Suricata, OSSEC, ELK
        Stack, Wireshark.</Texto>
      <Linea />
      <Titulo title="h2" id="ciberinteligencia-cyber-threat-intelligence">3.
        Ciberinteligencia (Cyber Threat Intelligence)</Titulo>
      <Texto>Se centra en <strong>recolectar, analizar y anticipar
        amenazas</strong> cibernéticas.</Texto>
      <Texto><strong>Subramas:</strong></Texto>
      <Lista>
        <li><strong>Inteligencia de amenazas (CTI):</strong> Estudio de
          grupos de hackers, sus tácticas y herramientas.</li>    <li><strong>Análisis forense digital:</strong> Investigación después
            de un ataque (seguimiento, evidencia, trazas).</li>    <li><strong>OSINT (Open Source Intelligence):</strong> Recolección de
              información pública útil para prevenir ataques.</li>    <li><strong>Contrainteligencia cibernética:</strong> Detectar y
                neutralizar espionaje o desinformación.</li>  </Lista>
      <Texto><em>Herramientas comunes:</em> Maltego, Shodan, TheHarvester, MISP,
        VirusTotal.</Texto>
      <Linea />
      <Titulo title="h2" id="criptografía-y-seguridad-de-la-información">4. Criptografía y
        Seguridad de la Información</Titulo>
      <Texto>Protege los <strong>datos</strong> mediante matemáticas, algoritmos y
        protocolos seguros.</Texto>
      <Texto><strong>Subramas:</strong></Texto>
      <Lista>
        <li><strong>Criptografía aplicada:</strong> Uso de algoritmos para
          cifrar datos (AES, RSA, SHA).</li>
        <li><strong>Gestión de claves y certificados digitales.</strong></li>
        <li><strong>Firmas digitales y blockchain.</strong></li>
        <li><strong>Seguridad en comunicaciones (VPN, SSL/TLS).</strong></li>
      </Lista>
      <Texto><em>Herramientas comunes:</em> OpenSSL, GPG, Hashcat, VeraCrypt.</Texto>
      <Linea />
      <Titulo title="h2" id="seguridad-en-redes">5. Seguridad en Redes</Titulo>
      <Texto>Asegura la <strong>infraestructura</strong> que conecta dispositivos
        y servidores.</Texto>
      <Texto><strong>Subramas:</strong></Texto>
      <Lista>
        <li><strong>Seguridad perimetral (firewalls, IDS/IPS).</strong></li>
        <li><strong>Seguridad en routers y switches.</strong></li>
        <li><strong>Segmentación y control de tráfico.</strong></li>
        <li><strong>Seguridad en redes inalámbricas (Wi-Fi).</strong></li>
      </Lista>
      <Texto><em>Herramientas comunes:</em> pfSense, Cisco Security, Snort,
        Wireshark, Aircrack-ng.</Texto>
      <Linea />
      <Titulo title="h2" id="seguridad-en-la-nube-cloud-security">6. Seguridad en la Nube
        (Cloud Security)</Titulo>
      <Texto>Protege los servicios y datos alojados en plataformas como AWS, Azure
        o Google Cloud.</Texto>
      <Texto><strong>Subramas:</strong></Texto>
      <Lista>
        <li><strong>Configuración segura de entornos cloud.</strong></li>
        <li><strong>Gestión de identidades y accesos (IAM).</strong></li>
        <li><strong>Auditoría y cumplimiento normativo.</strong></li>
        <li><strong>Cifrado y protección de datos en la nube.</strong></li>
      </Lista>
      <Texto><em>Herramientas comunes:</em> Prisma Cloud, AWS Security Hub, Azure
        Defender.</Texto>
      <Linea />
      <Titulo title="h2" id="seguridad-en-aplicaciones">7. Seguridad en Aplicaciones</Titulo>
      <Texto>Se enfoca en asegurar el <strong>software</strong> desde su
        desarrollo.</Texto>
      <Texto><strong>Subramas:</strong></Texto>
      <Lista>
        <li><strong>AppSec (Application Security):</strong> Protección de
          aplicaciones web y móviles.</li>
        <li><strong>DevSecOps:</strong> Integrar la seguridad en el ciclo de
          desarrollo.</li>
        <li><strong>Revisión de código y análisis estático.</strong></li>
        <li><strong>Pruebas de seguridad automatizadas.</strong></li>
      </Lista>
      <Texto><em>Herramientas comunes:</em> OWASP ZAP, SonarQube, Burp Suite,
        Checkmarx.</Texto>
      <Linea />
      <Titulo title="h2" id="gobernanza-riesgo-y-cumplimiento-grc">8. Gobernanza, Riesgo y
        Cumplimiento (GRC)</Titulo>
      <Texto>Enfocada en la <strong>gestión estratégica de la seguridad</strong>,
        políticas, normas y auditorías.</Texto>
      <Texto><strong>Subramas:</strong></Texto>
      <Lista>
        <li><strong>Políticas y normativas de seguridad (ISO 27001, NIST,
          GDPR).</strong></li>
        <li><strong>Gestión de riesgos cibernéticos.</strong></li>
        <li><strong>Auditorías de seguridad.</strong></li>
        <li><strong>Concienciación y capacitación en
          ciberseguridad.</strong></li>
      </Lista>
      <Linea />
      <Titulo title="h2" id="seguridad-industrial-y-de-infraestructuras-críticas">9.
        Seguridad Industrial y de Infraestructuras Críticas</Titulo>
      <Texto>Protege sistemas industriales y servicios esenciales (energía,
        transporte, agua, etc.).</Texto>
      <Texto><strong>Subramas:</strong></Texto>
      <Lista>
        <li><strong>Seguridad OT (Operational Technology).</strong></li>
        <li><strong>SCADA y sistemas de control industrial.</strong></li>
        <li><strong>Ciberseguridad en IoT (Internet of Things).</strong></li>
      </Lista>
      <Linea />
      <Titulo title="h2" id="ciberseguridad-en-ia-y-datos">10. Ciberseguridad en IA y
        Datos</Titulo>
      <Texto>Campo nuevo y en crecimiento.</Texto>
      <Texto><strong>Subramas:</strong></Texto>
      <Lista>
        <li><strong>Seguridad en modelos de IA (ataques
          adversarios).</strong></li>
        <li><strong>Protección de datos usados para entrenar IA.</strong></li>
        <li><strong>Privacidad diferencial y anonimización.</strong></li>
        <li><strong>Detección de deepfakes y manipulación de
          información.</strong></li>
      </Lista>
      <Linea />
      <Texto><Enlace href="./../readme.md#3-ramas-y-especializaciones-de-ciberseguridad">Regresar
        a la guía principal</Enlace ></Texto>
      <blockquote>
        <Texto><strong>Autor:</strong> Fravelz</Texto>
      </blockquote>
    </>
  );
}
export default nameabcd;
