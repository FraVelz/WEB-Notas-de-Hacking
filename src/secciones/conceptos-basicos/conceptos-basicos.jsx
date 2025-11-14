import Enlace from "../../componentes/atomos/enlace";
import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../../componentes/organismos/estructura";
import Linea from "../../componentes/atomos/linea";
import Lista from "../../componentes/moleculas/lista";
import Texto from "./../../componentes/atomos/texto";
import Titulo from "../../componentes/moleculas/titulo";
function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#0">0. Seguridad de la información Vs Seguridad informática Vs Ciberseguridad</Enlace ></li>
      <li><Enlace href="#1-qué-es">1. ¿Qué es?</Enlace ></li>
      <li><Enlace href="#2-objetivos">2. Objetivos</Enlace ></li>
      <li>
        <Enlace href="#3-terminologías">3. Terminologías</Enlace >
        <Lista>
          <li><Enlace href="#exploit">Exploit</Enlace ></li>
          <li><Enlace href="#payload">Payload</Enlace ></li>
          <li><Enlace href="#0-day-zero-day">0-day (Zero-Day)</Enlace ></li>
          <li><Enlace href="#malware-y-tipos-de-malware">Malware y tipos de Malware</Enlace ></li>
          <li><Enlace href="#vulnerabilidad">Vulnerabilidad</Enlace ></li>
          <li><Enlace href="#amenaza">Amenaza</Enlace ></li>
          <li><Enlace href="#riesgo">Riesgo</Enlace ></li>
        </Lista>
      </li>
      <li><Enlace href="#4-amenazas-comunes">4. Amenazas comunes</Enlace ></li>
      <li><Enlace href="#5-vectores-de-ataque">5. Vectores de ataque</Enlace ></li>
      <li><Enlace href="#6-buenas-prácticas-de-seguridad">6. Buenas prácticas de seguridad</Enlace ></li>
      <li><Enlace href="#7-áreas-de-ciberseguridad">7. Áreas de ciberseguridad</Enlace ></li>
      <li><Enlace href="#8-tipos-de-hackers-por-su-actuar">8. Tipos de hackers (por su actuar)</Enlace ></li>
      <li><Enlace href="#9-tipos-de-hackers-por-su-rol">9. Tipos de hackers (por su rol)</Enlace ></li>
      <li><Enlace href="#10-herramientas-básicas-en-ciberseguridad">10. Herramientas básicas en ciberseguridad</Enlace ></li>
    </Lista>
  );
}

function Conceptos_Basicos({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" className="text-center">Conceptos Basicos</Titulo>

        <Linea />

        <TemarioCompleto temario={Temario} />

        <Titulo title="h2" id="0">0.
          Seguridad de la información Vs Seguridad informática Vs
          Ciberseguridad</Titulo>

        <Texto><strong>Seguridad de la información</strong>: Procedimientos de
          medidas para asegurar los datos independientemente en que formato
          estén.</Texto>
        <Texto><strong>Seguridad informática</strong>: Solo proteger los datos en
          formato informático tanto físico como virtual.</Texto>
        <Texto><strong>Ciberseguridad</strong>: Proteger los datos e información en
          formato virtual (digitales).</Texto>

        <Linea />

        <Titulo title="h2" id="1-qué-es">1. ¿Qué es?</Titulo>

        <Texto>Es la práctica de proteger sistemas, redes, datos y programas frente
          a ataques, o accesos no autorizados.</Texto>

        <Linea />

        <Titulo title="h2" id="2-objetivos">2. Objetivos</Titulo>

        <Lista>
          <li>
            <strong>Confidencialidad:</strong> Solo las personas autorizadas
            acceden a la información.
          </li>
          <li>
            <strong>Integridad:</strong> La información no puede ser alterada
            sin permiso.
          </li>
          <li>
            <strong>Disponibilidad:</strong> Los sistemas y datos deben estar
            accesibles cuando se necesiten.
          </li>
        </Lista>

        <Linea />

        <Titulo title="h2" id="3-terminologías">3. Terminologías</Titulo>

        <Titulo title="h3" id="exploit">Exploit</Titulo>
        <Texto>Es un <strong>programa, código o técnica</strong> que <strong>
          aprovecha una vulnerabilidad</strong> (un error o debilidad en
          un sistema, software o aplicación) para <strong>ejecutar acciones no
            autorizadas</strong>.
        </Texto>
        <blockquote>
          <Texto>El exploit es <em>el método o herramienta que “explota” la
            falla.</em></Texto>
        </blockquote>
        <Titulo title="h3" id="payload">Payload</Titulo>
        <Texto>(en español, <em>carga útil</em>) es <strong>lo que el exploit
          ejecuta una vez que logra entrar</strong>.</Texto>
        <Texto>Piensa así:</Texto>
        <Lista>
          <li>El <em>exploit</em> es la <strong>llave que abre la
            puerta</strong>.</li>
          <li>El <em>payload</em> es <strong>lo que metes una vez
            abierta</strong>.</li>
        </Lista>
        <Texto>Algunos tipos de payloads:</Texto>
        <Lista>
          <li><strong>Reverse shell:</strong> le da al atacante control remoto
            sobre la máquina.</li>
          <li><strong>Meterpreter / comandos personalizados:</strong> carga
            herramientas para moverse por el sistema.</li>
          <li><strong>Downloader:</strong> descarga malware adicional o instala
            puertas traseras (<em>backdoors</em>).</li>
          <li><strong>Privilege escalation payloads:</strong> aumentan permisos
            dentro del sistema.</li>
        </Lista>
        <Texto>En herramientas como <strong>Metasploit</strong>, esto se ve muy
          claro: eliges un exploit y luego le asocias un payload.</Texto>
        <Titulo title="h3" id="0-day-zero-day">0-day (Zero-Day)</Titulo>
        <Texto>(se pronuncia <em>zero day</em>) es una <strong>vulnerabilidad
          desconocida por el fabricante o por el público</strong> —y por tanto
          <strong>no tiene parche ni defensa aún</strong>.
        </Texto>
        <blockquote>
          <Texto>“Zero-day” significa literalmente <em>día cero desde que se
            descubrió</em>, es decir, <strong>el fabricante tiene 0 días para
              corregirlo</strong>.</Texto>
        </blockquote>
        <Texto>Un <strong>0-day exploit</strong> es cuando alguien crea un exploit
          que aprovecha esa vulnerabilidad secreta. Es el tipo de ataque más
          peligroso y valioso, porque <strong>ni antivirus ni firewalls lo
            detectan</strong> (ya que nadie sabía que existía).</Texto>

        <Titulo title="h3" id="malware-y-tipos-de-malware">Malware y tipos de Malware</Titulo>

        <Texto>(Malicious Software) Cualquier tipo de código malicioso que busca
          aprovecharse de una vulnerabilidad y casuar daño.</Texto>

        <Texto>Los tipos mas conocidos son:</Texto>

        <Lista>
          <li><b>1. Virus:</b> Programa que se adjunta a archivos o programas legítimos y se activa al ejecutarlos. Se replica infectando otros archivos.
          </li>

          <li><b>2. Gusano (Worm):</b> Malware que se autorreplica sin intervención del usuario, generalmente explotando vulnerabilidades de red. Se propaga muy rápido.
          </li>

          <li><b>3. Troyano:</b> Se hace pasar por software legítimo para engañar al usuario. Abre puertas traseras, roba datos o instala otros malware.
          </li>

          <li><b>4. Ransomware:</b> Cifra archivos o bloquea el sistema y exige un pago para devolver el acceso. Uno de los más peligrosos hoy en día.
          </li>

          <li><b>5. Spyware:</b> Espía la actividad del usuario: teclas, contraseñas, navegación, cámaras, etc. Roba información sin que el usuario lo note.
          </li>

          <li><b>6. Adware:</b> Muestra publicidad invasiva sin permiso. Puede rastrear actividad y ralentizar el sistema.
          </li>

          <li><b>7. Rootkit:</b> Oculta procesos, archivos o accesos maliciosos para que el malware pase desapercibido. Muy difícil de detectar.
          </li>

          <li><b>8. Botnet (Bot):</b> Computadoras infectadas que quedan bajo control de un atacante para hacer ataques DDoS, spam, minería, etc.
          </li>

          <li><b>9. Keylogger:</b> Registra todo lo que el usuario escribe en el teclado: contraseñas, mensajes, tarjetas, etc.
          </li>

          <li><b>10. Backdoor (Puerta trasera):</b> Permite acceso remoto oculto al equipo o servidor, saltándose la autenticación normal.
          </li>

          <li><b>11. Stealer:</b> Roban información rápida y silenciosamente: contraseñas guardadas, cookies, wallet de criptos, sesión de Discord, etc.
          </li>

          <li><b>12. Banker / Malware Bancario:</b> Especializado en robar credenciales y datos financieros, interceptar transacciones y suplantar bancos.
          </li>

          <li><b>13. Cryptominer / Cryptojacking:</b> Usa el CPU o GPU del usuario para minar criptomonedas sin permiso.
          </li>

          <li><b>14. Fileless Malware:</b> No se instala como archivo. Vive en la memoria RAM y usa herramientas legítimas del sistema (como PowerShell). Muy difícil de detectar.
          </li>

          <li><b>15. RAT (Remote Access Trojan):</b> Da control total del dispositivo al atacante: cámara, teclado, archivos, pantalla.
          </li>

          <li><b>16. Scareware:</b> Asusta al usuario con mensajes falsos (“tienes 32 virus”) para que compre un software fraudulento.
          </li>

          <li><b>17. Bootkit:</b> Infecta el sector de arranque (MBR/UEFI) para ejecutarse antes que el sistema operativo.
          </li>
        </Lista>

        <Titulo title="h3" id="vulnerabilidad">Vulnerabilidad</Titulo>
        <Texto>Fallo de configuración, de diseño o de implementación que pone en
          riesgo la seguridad del entorno o sistema.</Texto>
        <Titulo title="h3" id="amenaza">Amenaza</Titulo>
        <Texto>Cualquier tipo de circunstancia posible que se pueda manifestar donde
          se pueda a través de una vulnerabilidad poner en peligro el sistema.</Texto>
        <Titulo title="h3" id="riesgo">Riesgo</Titulo>
        <Texto>Probabilidad o posibilidad que una amenaza se materialice y afecte al
          sistema en cuestión, aprovechándose de una vulnerabilidad.</Texto>
        <Linea />
        <Titulo title="h2" id="4-amenazas-comunes">4. Amenazas comunes</Titulo>
        <Lista>
          <li><strong>Malware:</strong> Software malicioso (virus, troyanos,
            gusanos, ransomware, spyware).</li>

          <li><strong>Phishing:</strong> Engaños (emails o mensajes falsos)
            para robar credenciales.</li>

          <li><strong>Ingeniería Social:</strong> Manipular personas para
            obtener información.</li>

          <li><strong>Ataques DDoS:</strong> sobrecargar un servidor para
            dejarlo fuera de servicio.</li>

          <li><strong>Exploits:</strong> Aprovechar vulnerabilidades en
            software y sistemas.</li>

        </Lista>
        <Linea />
        <Titulo title="h2" id="5-vectores-de-ataque">5. Vectores de ataque</Titulo>
        <Texto>Son los caminos que usan los atacantes:</Texto>
        <Lista>
          <li>Correos electrónicos.</li>
          <li>Redes wifi inseguras.</li>
          <li>Descargas de archivos.</li>
          <li>Aplicaciones maliciosas.</li>
          <li>Dispositivos externos (USB).</li>
        </Lista>

        <Linea />

        <Titulo title="h2" id="6-buenas-prácticas-de-seguridad">6. Buenas prácticas de
          seguridad</Titulo>

        <Lista>
          <li>Usar contraseñas seguras (y diferentes en cada cuenta). </li>
          <li>Activar la autenticación en dos pasos (2FA). </li>
          <li>Mantener software y sistemas actualizados. </li>
          <li>Hacer copias de seguridad (backups). </li>
          <li>Usar VPN en redes públicas. </li>
          <li>No haga clic en enlaces sospechosos. </li>
        </Lista>

        <Linea />

        <Titulo title="h2" id="7-áreas-de-ciberseguridad">7. Áreas de ciberseguridad</Titulo>

        <Lista>
          <li>
            <strong>Seguridad de Redes:</strong> Proteger tráfico de
            datos.
          </li>
          <li>
            <strong>Seguridad de la Información:</strong> Proteger datos en
            depósito y en tránsito.
          </li>
          <li>
            <strong>Seguridad en la Nube:</strong> Protección en servicios
            iCloud.
          </li>
          <li>
            <strong>Criptografía:</strong> Usar algoritmos para proteger
            información. (ej: cifrado AES, RSA).
          </li>
          <li>
            <strong>Ciberinteligencia:</strong> Detección y análisis de
            amenazas.
          </li>
          <li>
            <strong>Hacking Ético:</strong> Buscar vulnerabilidades para
            fortalecer sistemas.
          </li>
        </Lista>

        <Linea />

        <Titulo title="h2" id="8-tipos-de-hackers-por-su-actuar">8. Tipos de hackers (por su
          actuar)</Titulo>

        <Lista>
          <li>
            <strong>White hat:</strong> Éticos, ayudan a mejorar la
            seguridad.
          </li>
          <li>
            <strong>Black hat:</strong> Atacantes maliciosos.
          </li>
          <li>
            <strong>Grey hat:</strong> A veces actúan éticamente, otras veces
            no.
          </li>
        </Lista>

        <Texto>Normalmente a los “hackers de sombrero, negro o gris” se les da el
          nombre de ciberdelincuentes.</Texto>

        <Linea />

        <Titulo title="h2" id="9-tipos-de-hackers-por-su-rol">9. Tipos de hackers (por su
          rol)</Titulo>

        <Lista>
          <li>
            <strong>Red team:</strong> Ofensivos (atacantes), simula todo
            tipo de ataques para saber la seguridad que tiene una empresa u
            organización.
          </li>
          <li>
            <strong>Blue team:</strong> Defensivo (guardianes), son los que
            protegen de los ataques, los encargados de reforzar seguridad a la
            empresa sí los de <strong>red team</strong> encuentran alguna
            falla.
          </li>
          <li>
            <strong>Purple team:</strong> híbrido (colaboración), es una
            mezcla de ambos mundos de red team, y blue team.
          </li>
        </Lista>

        <Texto>Existen más tipos de hackers por su rol, pero son muy desconocidos
          normalmente en el mundo laboral, y comunidades onlines.</Texto>

        <Linea />

        <Titulo title="h2" id="10-herramientas-básicas-en-ciberseguridad">10. Herramientas básicas
          en ciberseguridad</Titulo>

        <Lista>
          <li>
            <strong>Wireshark:</strong> Análisis de tráfico de red.
          </li>
          <li>
            <strong>Nmap:</strong> Escaneo de puertos y redes.
          </li>
          <li>
            <strong>Metasploit:</strong> Pruebas de penetración.
          </li>
          <li>
            <strong>Kali Linux:</strong> Sistema operativo con herramientas
            de hacking ético, se puede utilizar otros no importa, pero kali ya viene
            con las herramientas incluidas.
          </li>
        </Lista>

        <Linea />

        <Texto>Para conocer muchos más conceptos y fortalecer los aprendidos,
          también esta este video de YouTube:</Texto>
        <Texto><Enlace href="https://www.youtube.com/watch?v=spMYZHepjko">Ir a conceptos
          de ciberseguridad - Hixec</Enlace></Texto>
      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}

export default Conceptos_Basicos;
