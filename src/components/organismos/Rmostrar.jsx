import EnlaceDinamico from "@/components/atomos/EnlacesDinamicos.jsx";
import Mensaje from "@/components/organismos/Mensaje.jsx";

import Titulo from "@/components/moleculas/Titulo.jsx";
import Texto from "@/components/atomos/Texto.jsx";
import Lista from "@/components/moleculas/Lista.jsx";

import { Link } from "react-router-dom";
import { useState } from "react";

function Desplegable({ titulo = "", masInfo = "", children }) {
    return (
        <details>
            <summary className="
            cursor-pointer
            text-gray-400
            hover:text-gray-200
            select-none
            ">
                {titulo} {masInfo}
            </summary>

            <Lista className="
            text-gray-400
            ">
                {children}
            </Lista>
        </details>
    );
}

function BotonInfo({ texto = "", children, className = "" }) {
    const [mostrar, setMostrar] = useState(false);

    return (
        <>
            <button
            onClick={() => setMostrar(true)}
            className="
            bg-gray-800 hover:bg-gray-700
            rounded-full
            cursor-pointer
            px-3 py-0.5
            text-sm
            "
            >
                {texto}
            </button>

            {mostrar && <Mensaje onClose={() => setMostrar(false)}>
                {children}
            </Mensaje>}
        </>
    );
}

function RutasDinamicas() {
    return (
        <aside className="
        bg-gray-900
        border-gray-700 border-b-2 lg:border-b-0 lg:border-r-2

        lg:w-4/5 lg:max-w-fit

        h-fit lg:h-auto

        overflow-y-auto  /* scroll vertical */
        
        p-4
        lg:min-w-[365px]
        ">
            <Link draggable="false" className="
              block select-none
            text-gray-300
            hover:text-gray-200
              " to="/">Inicio</Link>

            <Lista className="">
                {/* Conceptos Básicos */}
                <Desplegable titulo="Conceptos Básicos"
                    masInfo={<BotonInfo texto="Más Info.">
                        <Titulo title="h2" id="1-conceptos-básicos">Conceptos Básicos</Titulo>

                        <Texto><strong>Duración aproximada:</strong> 25min de lectura.</Texto>

                        <Texto className="text-left">
                            En esta sección se encontrará explicaciones de los términos
                            fundamentales y reglas importantes de la seguridad informática. Es
                            importante entenderlos, ya que se usan constantemente en el campo de la
                            ciberseguridad y el hacking.
                        </Texto>
                    </BotonInfo>}
                >
                    <li><EnlaceDinamico to="/mitos">Desmitiendo Mitos</EnlaceDinamico></li>
                    <li><EnlaceDinamico to="/conceptos-basicos">Conceptos Básicos</EnlaceDinamico></li>
                    <li><EnlaceDinamico to="/legalidad-hacking">Legalidad del Hacking</EnlaceDinamico></li>
                </Desplegable>

                {/* Virtualizacion */}
                <Desplegable titulo="Virtualizacion"
                    masInfo={<BotonInfo texto="Más Info.">
                        <Titulo title="h2" id="2-virtualización">Virtualización</Titulo>

                        <Texto><strong>Duración aproximada (2h diarias):</strong> 2 días con práctica.</Texto>

                        <Texto className="text-left">
                            En esta sección se encontrará una guía corta y resumida
                            acerca de la virtualización con material extra para aprender más,
                            y la explicación del porqué es importante, y mucho más.
                        </Texto>
                    </BotonInfo>}
                >
                    <li><EnlaceDinamico to="/virtualizacion">Virtualizacion</EnlaceDinamico></li>
                </Desplegable>

                {/* Linux y Bash Script */}
                <Desplegable titulo="Linux y Bash Script"
                    masInfo={<BotonInfo texto="Más Info.">
                        <Titulo title="h2">Linux y Bash Script</Titulo>

                        <Texto><strong>Duración aproximada (2h diarias):</strong> 2 meses con práctica.</Texto>

                        <Texto className="text-left">
                            En esta sección se encontrará todos los temas que se necesitan en Linux más conocidos
                            para el hacking. También incluye cosas de bash script, para aprender a crear programas sencillos
                            y automatizados para hacking en Linux.
                        </Texto>
                    </BotonInfo>}
                >

                    <Desplegable titulo="Linux Basico">
                        <li><EnlaceDinamico to="/comandos-linux">Comandos Básicos</EnlaceDinamico></li>
                        <li><EnlaceDinamico to="/atajos-de-teclado">Atajos de Teclado</EnlaceDinamico></li>
                        <li><EnlaceDinamico to="/permisos">Gestión de Permisos</EnlaceDinamico></li>
                        <li><EnlaceDinamico to="/grupos-y-usuarios">Grupos y Usuarios</EnlaceDinamico></li>
                        <li><EnlaceDinamico to="/gestion-de-procesos">Gestión de Procesos</EnlaceDinamico></li>
                    </Desplegable>

                    {/* Comandos Linux */}
                    <Desplegable titulo="Comandos Linux">
                        <li><EnlaceDinamico to="/cifrado-cesar">Cifrado César (tr)</EnlaceDinamico></li>
                        <li><EnlaceDinamico to="/diff">Diff</EnlaceDinamico></li>
                        <li><EnlaceDinamico to="/less">Less</EnlaceDinamico></li>
                        <li><EnlaceDinamico to="/ncat">Ncat</EnlaceDinamico></li>
                        <li><EnlaceDinamico to="/netcat">Netcat</EnlaceDinamico></li>
                        <li><EnlaceDinamico to="/wc">WC</EnlaceDinamico></li>
                        <li><EnlaceDinamico to="/which">Which</EnlaceDinamico></li>
                        <li><EnlaceDinamico to="/xxd">XXD</EnlaceDinamico></li>
                    </Desplegable>

                    {/* Bash Script */}
                    <Desplegable titulo="Bash Script">
                        <li><EnlaceDinamico to="/fundamentos">Fundamentos Linux</EnlaceDinamico></li>
                        <li><EnlaceDinamico to="/arrays">Arrays</EnlaceDinamico></li>
                        <li><EnlaceDinamico to="/condiciones">Condiciones</EnlaceDinamico></li>
                        <li><EnlaceDinamico to="/entrada-y-salida">Entrada y Salida</EnlaceDinamico></li>
                        <li><EnlaceDinamico to="/estructuras-control">Estructuras de Control</EnlaceDinamico></li>
                        <li><EnlaceDinamico to="/funciones">Funciones</EnlaceDinamico></li>
                        <li><EnlaceDinamico to="/funciones-externas">Funciones Externas</EnlaceDinamico></li>
                        <li><EnlaceDinamico to="/manipulacion-de-strings">Manipulación de Strings</EnlaceDinamico></li>
                    </Desplegable>

                    <li><EnlaceDinamico to="/bandit">Niveles Bandit</EnlaceDinamico></li>
                </Desplegable>

                {/* Windows */}
                <Desplegable titulo="Windows"
                    masInfo={<BotonInfo texto="Más Info.">
                        <Titulo title="h2">Windows</Titulo>

                        <Texto><strong>Duración aproximada (2h diarias):</strong> 1 mes con practica.</Texto>

                        <Texto className="text-left">
                            En esta seccion se encontrara, todos los temas que se nesesitan para manejar scripts,
                            .bat, y la consola powershell y cmd en Windows para hacking.
                        </Texto>
                    </BotonInfo>}
                >
                    <Desplegable titulo="Parte 1">
                        <li><EnlaceDinamico to="/historia-windows">Historia de Windows</EnlaceDinamico></li>
                        <li><EnlaceDinamico to="/navegacion-windows">Navegación</EnlaceDinamico></li>
                        <li><EnlaceDinamico to="/directorios-windows">Directorios</EnlaceDinamico></li>
                        <li><EnlaceDinamico to="/powershell-cmd">PowerShell y CMD</EnlaceDinamico></li>
                        <li><EnlaceDinamico to="/alias-powershell">Alias PowerShell</EnlaceDinamico></li>
                        <li><EnlaceDinamico to="/comodines">Comodines</EnlaceDinamico></li>
                    </Desplegable>

                    <Desplegable titulo="Parte 2">
                        <li><EnlaceDinamico to="/gestion-usuarios-windows">Gestión de Usuarios</EnlaceDinamico></li>
                        <li><EnlaceDinamico to="/gestion-grupos-windows">Gestión de Grupos</EnlaceDinamico></li>
                        <li><EnlaceDinamico to="/gestion-permisos-windows">Gestión de Permisos</EnlaceDinamico></li>
                        <li><EnlaceDinamico to="/gestion-procesos-windows">Gestión de Procesos</EnlaceDinamico></li>
                        <li><EnlaceDinamico to="/gestion-red-windows">Gestión de Red</EnlaceDinamico></li>
                        <li><EnlaceDinamico to="/variables-entorno-windows">Variables de Entorno</EnlaceDinamico></li>
                        <li><EnlaceDinamico to="/redirecciones-powershell">Redirecciones PowerShell</EnlaceDinamico></li>
                    </Desplegable>
                </Desplegable>

                {/* Redes */}
                <Desplegable titulo="Redes"
                    masInfo={<BotonInfo texto="Más Info.">
                        <Titulo title="h2">Redes</Titulo>

                        <Texto><strong>Duración aproximada (2h diarias):</strong> 1 semana.</Texto>

                        <Texto className="text-left">
                            En esta sección se encontrará el conocimiento teórico necesario en redes,
                            que es fundamental como conocimiento general en hacking y es
                            muy necesario en hacking Wi‑Fi y pentesting.
                        </Texto>
                    </BotonInfo>}
                >
                    <li><EnlaceDinamico to="/teoria-redes">Teoría de Redes</EnlaceDinamico></li>
                    <li><EnlaceDinamico to="/cidrs-hosts">CIDRs y Hosts</EnlaceDinamico></li>
                    <li><EnlaceDinamico to="/subnetting">Subnetting</EnlaceDinamico></li>
                    <li><EnlaceDinamico to="/herramientas-redes">Herramientas de Red</EnlaceDinamico></li>
                </Desplegable>

                {/* Python */}
                <Desplegable titulo="Python"
                    masInfo={<BotonInfo texto="Más Info.">
                        <Titulo title="h2">Python</Titulo>

                        <Texto><strong>Duración aproximada (2h diarias):</strong> 2 mes con practica.</Texto>

                        <Texto className="text-left">
                            En esta sección se encontrará el conocimiento para utilizar Python, desde el
                            nivel básico hasta crear tus propios scripts en Python para hacking, incluyendo
                            interfaces.
                        </Texto>
                    </BotonInfo>}
                >
                    <Desplegable titulo="Notas">
                        <li><EnlaceDinamico to="/python-completo">Python Completo</EnlaceDinamico></li>
                        <li><EnlaceDinamico to="/clases-python">Clases en Python</EnlaceDinamico></li>
                        <li><EnlaceDinamico to="/variables-clases">Variables de Clase</EnlaceDinamico></li>
                        <li><EnlaceDinamico to="/getter-setter">Getters y Setters</EnlaceDinamico></li>
                        <li><EnlaceDinamico to="/property">Property</EnlaceDinamico></li>
                        <li><EnlaceDinamico to="/classmethod">Classmethod</EnlaceDinamico></li>
                    </Desplegable>

                    <Desplegable titulo="Modulos/Librerias">
                        {/* Módulos Python */}
                        <li><EnlaceDinamico to="/os-python">Módulo OS</EnlaceDinamico></li>
                        <li><EnlaceDinamico to="/sys">Módulo Sys</EnlaceDinamico></li>
                        <li><EnlaceDinamico to="/re-python">Módulo RE</EnlaceDinamico></li>
                        <li><EnlaceDinamico to="/request">Módulo Request</EnlaceDinamico></li>
                        <li><EnlaceDinamico to="/subprocess">Módulo Subprocess</EnlaceDinamico></li>
                        <li><EnlaceDinamico to="/threading">Módulo Threading</EnlaceDinamico></li>
                        <li><EnlaceDinamico to="/multiprocessing">Módulo Multiprocessing</EnlaceDinamico></li>
                        <li><EnlaceDinamico to="/sockets">Módulo Sockets</EnlaceDinamico></li>
                        <li><EnlaceDinamico to="/tkinter">Módulo Tkinter</EnlaceDinamico></li>
                    </Desplegable>
                </Desplegable>

                {/* Pentesting */}
                <Desplegable titulo="Pentesting"
                    masInfo={<BotonInfo texto="Más Info.">
                        <Titulo title="h2">Pentesting</Titulo>

                        <Texto><strong>Duración aproximada (2h diarias):</strong> 3 mes con practica.</Texto>

                        <Texto className="text-left">
                            En esta seccion se encontrara, el uso de herramientas, y teoria ya enfocada, en pentesting,
                            aprendiendo herramientas de consola linux e interfaces graficas como wireshark, y muchas cosas más,
                            en relacion, con el tema, e implementando ya al final laboratorio reales.
                        </Texto>
                    </BotonInfo>}
                >
                    <li><EnlaceDinamico to="/fases-pentesting">Fases del Pentesting</EnlaceDinamico></li>
                    <li><EnlaceDinamico to="/cajas">Tipos de Cajas</EnlaceDinamico></li>
                </Desplegable>

                {/* OSINT */}
                <Desplegable titulo="OSINT"
                    masInfo={<BotonInfo texto="Más Info.">
                        <Titulo title="h2">OSINT</Titulo>

                        <Texto><strong>Duración aproximada (2h diarias):</strong> Indefinido.</Texto>

                        <Texto className="text-left">
                            OSINT son las siglas en inglés de "Open Source INTelligence" (Inteligencia de Fuentes Abiertas),
                            que se refiere a la recopilación y análisis de información públicamente disponible para
                            obtener conocimiento útil hacerca de personas u organizaciones.
                        </Texto>
                    </BotonInfo>}
                >
                    <li><EnlaceDinamico to="/osint-basico">OSINT Básico</EnlaceDinamico></li>
                    <li><EnlaceDinamico to="/terminologia-osint">Terminología</EnlaceDinamico></li>
                    <li><EnlaceDinamico to="/google-dorks">Google Dorks</EnlaceDinamico></li>
                </Desplegable>

                {/* Privacidad y Anonimato */}
                <Desplegable titulo="Privacidad y Anonimato"
                    masInfo={<BotonInfo texto="Más Info.">
                        <Titulo title="h2">Privacidad y Anonimato</Titulo>

                        <Texto><strong>Duración aproximada (2h diarias):</strong> Indefinido.</Texto>

                        <Texto className="text-left">
                            Tener el control del rastro y tu información personal en Internet.
                        </Texto>
                    </BotonInfo>}
                >
                    <li><EnlaceDinamico to="/privacidad-y-anonimato">Privacidad y Anonimato</EnlaceDinamico></li>
                    <li><EnlaceDinamico to="/huella-digital">Huella Digital</EnlaceDinamico></li>
                    <li><EnlaceDinamico to="/user-agent">User Agent</EnlaceDinamico></li>
                    <li><EnlaceDinamico to="/filtracion-de-datos">Filtración de datos</EnlaceDinamico></li>
                </Desplegable>

                {/* Otros */}
                <Desplegable titulo="Otros"
                    masInfo={<BotonInfo texto="Más Info.">
                        <Titulo title="h2">Otros</Titulo>

                        <Texto><strong>Duración aproximada (2h diarias):</strong> Indefinido.</Texto>

                        <Texto className="text-left">
                            Otros temas de interés que no son indispensables en el hacking, pero conocerlos
                            puede ampliar y consolidar el conocimiento sobre temas relacionados.
                        </Texto>
                    </BotonInfo>}
                >
                    <li><EnlaceDinamico to="/ramas-ciberseguridad">Ramas de Ciberseguridad</EnlaceDinamico></li>
                    <li><EnlaceDinamico to="/concientizacion">Concientización</EnlaceDinamico></li>
                    <li><EnlaceDinamico to="/distribuciones-linux">Distribuciones Linux</EnlaceDinamico></li>
                    <li><EnlaceDinamico to="/herramientas">Herramientas</EnlaceDinamico></li>
                    <li><EnlaceDinamico to="/notas-actualizacion">Notas de Actualización</EnlaceDinamico></li>
                    <li><EnlaceDinamico to="/recursos">Recursos / Creditos</EnlaceDinamico></li>
                </Desplegable>
            </Lista>
        </aside>
    );
}

export default RutasDinamicas;
