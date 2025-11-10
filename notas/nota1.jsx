import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "./../../componentes/estructura.jsx";
import Titulo from "./../../componentes/titulo.jsx";
import Linea from "./../../componentes/linea.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Enlace from "./../../componentes/enlace.jsx";
import Nota from "./../../componentes/nota.jsx";

function Temario({ className="" }) {
    return (
        <Lista className={className}>
        </Lista>
    );
}

function NameAbcd() {
    return (
        <>
            <Estructura>
				<Titulo title="h1" className="text-center">Ciberseguridad</Titulo>

				<TemarioCompleto temario={Temario} />

				<Linea />

				<Titulo title="h2" className="2xl:hidden">Temario</Titulo>

				<Lista>[Ciberseguridad](#ciberseguridad)</Lista>

				<Texto>  - [Temario](#temario)</Texto>
				<Texto>  - [0. Seguridad de la información Vs Seguridad informática Vs Ciberseguridad](#0-seguridad-de-la-información-vs-seguridad-informática-vs-ciberseguridad)</Texto>
				<Texto>  - [1. ¿Qué es?](#1-qué-es)</Texto>
				<Texto>  - [2. Objetivos](#2-objetivos)</Texto>
				<Texto>  - [3. Terminologías](#3-terminologías)</Texto>
				<Texto>    - [Exploit](#exploit)</Texto>
				<Texto>    - [Payload](#payload)</Texto>
				<Texto>    - [0-day (Zero-Day)](#0-day-zero-day)</Texto>
				<Texto>    - [Malware y tipos de Malware](#malware-y-tipos-de-malware)</Texto>
				<Texto>    - [Vulnerabilidad](#vulnerabilidad)</Texto>
				<Texto>    - [Amenaza](#amenaza)</Texto>
				<Texto>    - [Riesgo](#riesgo)</Texto>
				<Texto>  - [3. Amenazas comunes](#3-amenazas-comunes)</Texto>
				<Texto>  - [4. Vectores de ataque](#4-vectores-de-ataque)</Texto>
				<Texto>  - [5. Buenas prácticas de seguridad](#5-buenas-prácticas-de-seguridad)</Texto>
				<Texto>  - [6. Áreas de ciberseguridad](#6-áreas-de-ciberseguridad)</Texto>
				<Texto>  - [7. Tipos de hackers (por su actuar)](#7-tipos-de-hackers-por-su-actuar)</Texto>
				<Texto>  - [8. Tipos de hackers (por su rol)](#8-tipos-de-hackers-por-su-rol)</Texto>
				<Texto>  - [9. Herramientas básicas en ciberseguridad](#9-herramientas-básicas-en-ciberseguridad)</Texto>
				<Enlace href="./../readme.md#0-conceptos-básicos">Regresar a la guía principal</Enlace>

				<Linea />

				<Titulo title="h2">0. Seguridad de la información Vs Seguridad informática Vs Ciberseguridad</Titulo>

				<Texto><b>Seguridad de la información</b>: Procedimientos de medidas para asegurar los datos independientemente en que formato estén.</Texto>
				<Texto><b>Seguridad informática</b>: Solo proteger los datos en formato informático tanto físico como virtual.</Texto>
				<Texto><b>Ciberseguridad</b>: Proteger los datos e información en formato virtual (digitales).</Texto>
				<Linea />

				<Titulo title="h2">1. ¿Qué es?</Titulo>

				<Texto>Es la práctica de proteger sistemas, redes, datos y programas frente a ataques, o accesos no autorizados.</Texto>
				<Linea />

				<Titulo title="h2">2. Objetivos</Titulo>

				<Lista><b>Confidencialidad:</b> Solo las personas autorizadas acceden a la información.</Lista>

				<Lista><b>Integridad:</b> La información no puede ser alterada sin permiso.</Lista>

				<Lista><b>Disponibilidad:</b> Los sistemas y datos deben estar accesibles cuando se necesiten.</Lista>

				<Linea />

				<Titulo title="h2">3. Terminologías</Titulo>

				<Titulo title="h3">Exploit</Titulo>

				<Texto>Es un <b>programa, código o técnica</b> que <b>aprovecha una vulnerabilidad</b> (un error o debilidad en un sistema, software o aplicación) para <b>ejecutar acciones no autorizadas</b>.</Texto>
				<Nota>El exploit es *el método o herramienta que “explota” la falla.*</Nota>
				<Titulo title="h3">Payload</Titulo>

				<Texto>(en español, <i>carga útil</i>) es <b>lo que el exploit ejecuta una vez que logra entrar</b>.</Texto>
				<Texto>Piensa así:</Texto>
				<Lista>El <i>exploit</i> es la <b>llave que abre la puerta</b>.</Lista>

				<Lista>El <i>payload</i> es <b>lo que metes una vez abierta</b>.</Lista>

				<Texto>Algunos tipos de payloads:</Texto>
				<Lista><b>Reverse shell:</b> le da al atacante control remoto sobre la máquina.</Lista>

				<Lista><b>Meterpreter / comandos personalizados:</b> carga herramientas para moverse por el sistema.</Lista>

				<Lista><b>Downloader:</b> descarga malware adicional o instala puertas traseras (<i>backdoors</i>).</Lista>

				<Lista><b>Privilege escalation payloads:</b> aumentan permisos dentro del sistema.</Lista>

				<Texto>En herramientas como <b>Metasploit</b>, esto se ve muy claro: eliges un exploit y luego le asocias un payload.</Texto>
				<Titulo title="h3">0-day (Zero-Day)</Titulo>

				<Texto>(se pronuncia <i>zero day</i>) es una <b>vulnerabilidad desconocida por el fabricante o por el público</b> —y por tanto <b>no tiene parche ni defensa aún</b>.</Texto>
				<Nota>“Zero-day” significa literalmente *día cero desde que se descubrió*, es decir, **el fabricante tiene 0 días para corregirlo**.</Nota>
				<Texto>Un <b>0-day exploit</b> es cuando alguien crea un exploit que aprovecha esa vulnerabilidad secreta.</Texto>
				<Texto>Es el tipo de ataque más peligroso y valioso, porque <b>ni antivirus ni firewalls lo detectan</b> (ya que nadie sabía que existía).</Texto>
				<Titulo title="h3">Malware y tipos de Malware</Titulo>

				<Texto>(Malicious Software) Cualquier tipo de código malicioso que busca aprovecharse de una vulnerabilidad y casuar daño.</Texto>
				<Texto>Tipos:</Texto>
				<Lista>Troyanos</Lista>

				<Lista>Virus</Lista>

				<Lista>Gusanos</Lista>

				<Lista>Rogue</Lista>

				<Lista>Adware</Lista>

				<Lista>Spyware</Lista>

				<Lista>Ransomware</Lista>

				<Titulo title="h3">Vulnerabilidad</Titulo>

				<Texto>Fallo de configuración, de diseño o de implementación que pone en riesgo la seguridad del entorno o sistema.</Texto>
				<Titulo title="h3">Amenaza</Titulo>

				<Texto>Cualquier tipo de circunstancia posible que se pueda manifestar donde se pueda a través de una vulnerabilidad poner en peligro el sistema.</Texto>
				<Titulo title="h3">Riesgo</Titulo>

				<Texto>Probabilidad o posibilidad que una amenaza se materialice y afecte al sistema en cuestión, aprovechándose de una vulnerabilidad.</Texto>
				<Linea />

				<Titulo title="h2">3. Amenazas comunes</Titulo>

				<Lista><b>Malware:</b> Software malicioso (virus, troyanos, gusanos, ransomware, spyware).</Lista>

				<Lista><b>Phishing:</b> Engaños (emails o mensajes falsos) para robar credenciales.</Lista>

				<Lista><b>Ingeniería Social:</b> Manipular personas para obtener información.</Lista>

				<Lista><b>Ataques DDoS:</b> sobrecargar un servidor para dejarlo fuera de servicio.</Lista>

				<Lista><b>Exploits:</b> Aprovechar vulnerabilidades en software y sistemas.</Lista>

				<Linea />

				<Titulo title="h2">4. Vectores de ataque</Titulo>

				<Texto>Son los caminos que usan los atacantes:</Texto>
				<Lista>Correos electrónicos.</Lista>

				<Lista>Redes wifi inseguras.</Lista>

				<Lista>Descargas de archivos.</Lista>

				<Lista>Aplicaciones maliciosas.</Lista>

				<Lista>Dispositivos externos (USB).</Lista>

				<Linea />

				<Titulo title="h2">5. Buenas prácticas de seguridad</Titulo>

				<Lista>Usar contraseñas seguras (y diferentes en cada cuenta).</Lista>

				<Lista>Activar la autenticación en dos pasos (2FA).</Lista>

				<Lista>Mantener software y sistemas actualizados.</Lista>

				<Lista>Hacer copias de seguridad (backups).</Lista>

				<Lista>Usar VPN en redes públicas.</Lista>

				<Lista>No haga clic en enlaces sospechosos.</Lista>

				<Linea />

				<Titulo title="h2">6. Áreas de ciberseguridad</Titulo>

				<Lista><b>Seguridad de Redes:</b> Proteger tráfico de datos.</Lista>

				<Lista><b>Seguridad de la Información:</b> Proteger datos en depósito y en tránsito.</Lista>

				<Lista><b>Seguridad en la Nube:</b> Protección en servicios iCloud.</Lista>

				<Lista><b>Criptografía:</b> Usar algoritmos para proteger información. (ej: cifrado AES, RSA).</Lista>

				<Lista><b>Ciberinteligencia:</b> Detección y análisis de amenazas.</Lista>

				<Lista><b>Hacking Ético:</b> Buscar vulnerabilidades para fortalecer sistemas.</Lista>

				<Linea />

				<Titulo title="h2">7. Tipos de hackers (por su actuar)</Titulo>

				<Lista><b>White hat:</b> Éticos, ayudan a mejorar la seguridad.</Lista>

				<Lista><b>Black hat:</b> Atacantes maliciosos.</Lista>

				<Lista><b>Grey hat:</b> A veces actúan éticamente, otras veces no.</Lista>

				<Texto>Normalmente a los "hackers de sombrero, negro o gris" se les da el nombre de ciberdelincuentes.</Texto>
				<Linea />

				<Titulo title="h2">8. Tipos de hackers (por su rol)</Titulo>

				<Lista><b>Red team:</b> Ofensivos (atacantes), simula todo tipo de ataques para saber la seguridad que tiene una empresa u organización.</Lista>

				<Lista><b>Blue team:</b> Defensivo (guardianes), son los que protegen de los ataques, los encargados de reforzar seguridad a la empresa si los de <b>red team</b> encuentran alguna falla.</Lista>

				<Lista><b>Purple team:</b> híbrido (colaboración), es una mezcla de ambos mundos de red team, y blue team.</Lista>

				<Texto>Existen más tipos de hackers por su rol, pero son muy desconocidos normalmente en el mundo laboral, y comunidades onlines.</Texto>
				<Linea />

				<Titulo title="h2">9. Herramientas básicas en ciberseguridad</Titulo>

				<Lista><b>Wireshark:</b> Análisis de tráfico de red.</Lista>

				<Lista><b>Nmap:</b> Escaneo de puertos y redes.</Lista>

				<Lista><b>Metasploit:</b> Pruebas de penetración.</Lista>

				<Lista><b>Kali Linux:</b> Sistema operativo con herramientas de hacking ético, se puede utilizar otros no importa, pero kali ya viene con las herramientas incluidas.</Lista>

				<Linea />

				<Texto>Para conocer muchos más conceptos y fortalecer los aprendidos, también esta este video de YouTube:</Texto>
				<Enlace href="https://www.youtube.com/watch?v=spMYZHepjko">Ir a conceptos de ciberseguridad - Hixec</Enlace>

				<Linea />

				<Texto>Listo, si ya terminaste de leer el archivo de los conceptos básicos de Ciberseguridad, puedes regresar a la guía principal con el siguiente enlace:</Texto>
				<Enlace href="./../readme.md#0-conceptos-básicos">Regresar a la guía principal</Enlace>

				<Nota>**Autor:** Fravelz</Nota>

            </Estructura>

            <TemarioAsideCompleto temario={Temario} />
        </>
    );
}

export default NameAbcd;
