
// * Componentes ************************************************************ //

import Titulo from "./componentes/titulo.jsx";
import Linea from "./componentes/linea.jsx";
import Lista from "./componentes/lista.jsx";
import Enlace from "./componentes/enlace.jsx";
import Texto from "./componentes/texto.jsx";
import Estructura, { TemarioAside } from "./componentes/estructura.jsx";

function Temario({ className = "" }) {
    return (
        <Lista className={className}>
            <li>
                <Enlace href="#1-conceptos-básicos">Conceptos Básicos</Enlace>
            </li>

            <li>
                <Enlace href="#2-virtualización">Virtualización</Enlace>
            </li>

            <li>
                <Enlace href="#2-linux-y-bash-script">Linux y Bash Script</Enlace>

                <Lista className="
                list-[upper-roman]
                my-3
                ">
                    <li>
                        <Enlace href="#1-linux-comandos-por-secciones">Linux (comandos por secciones)</Enlace>
                    </li>

                    <li>
                        <Enlace href="#2-linux-comandos-individuales">Linux (comandos individuales)</Enlace>
                    </li>

                    <li>
                        <Enlace href="#3-bash-script">Bash Script</Enlace>
                    </li>
                </Lista>
            </li>

            <li>
                <Enlace href="#4-windows">Windows</Enlace>
            </li>
            <li>
                <Enlace href="#5-redes">Redes</Enlace>
            </li>
            <li>
                <Enlace href="#6-python">Python</Enlace>
            </li>
            <li>
                <Enlace href="#7-pentesting">Pentesting</Enlace>
            </li>
            <li>
                <Enlace href="#8-osint">OSINT</Enlace>
            </li>
            <li>
                <Enlace href="#9-privacidad-y-anonimato">Privacidad y Anonimato</Enlace>
            </li>

            <li>
                <Enlace href="#10-información">Información</Enlace>
            </li>
        </Lista>
    );
}

function Readme() {
    return (
        <>
            <Estructura>
                <Titulo title="h1" className="text-center">
                    Mi Aprendendizaje en Ciberseguridad!
                </Titulo>

                <Texto>¡Bienvenido y que tengas un buen viaje!</Texto>

                <Linea />

                <Titulo title="h2" className="lg:hidden">Temario</Titulo>

                <Temario className="
                bg-gray-900
                rounded-md
                p-4 mb-4
                list-decimal
                2xl:hidden
                " />

                <Titulo title="h2">Bienvenida y Cosas previas a tener en cuenta dentro de cada seccion</Titulo>

                <Texto>
                    <b>Ruta:</b> con enfoque principal pentesting, normalmente es
                    lo que ayuda a conseguir unas buenas bases en ciberseguridad y trabajo
                    es esta área.
                </Texto>

                <Texto>
                    Enlace para aprender a reconocer Phishing, y concientizar a las personas en entornos laborales:
                </Texto>

                <Lista className="
            p1 list-disc
            ">
                    <li>
                        <Enlace href="https:/phishingquiz.withgoogle.com/">Ir a Phishing Quiz With Google</Enlace>
                    </li>
                </Lista>

                <Linea />

               <Titulo title="h3" id="1-linux-comandos-por-secciones">Linux (comandos por secciones)</Titulo>

                <Lista className="
            p1 list-disc my-2
            ">
                    <li>
                        <Enlace href="./linux/comandos-linux.md">Ir a Comandos básicos de Linux</Enlace>
                    </li>

                    <li>
                        <Enlace href="./linux/ayuda-linux.md">Ir a Obtener Ayuda en Linux</Enlace>
                    </li>

                    <li>
                        <Enlace href="./linux/gestion-de-procesos.md">Ir a comandos de gestión de procesos</Enlace>
                    </li>

                    <li>
                        <Enlace href="./linux/grupos-y-usuarios.md">Ir a comandos de gestión de usuarios</Enlace>
                    </li>

                    <li>
                        <Enlace href="./linux/permisos.md">Ir a permisos en linux</Enlace>
                    </li>

                    <li>
                        <Enlace href="./linux/busqueda.md">Ir a comandos de búsqueda</Enlace>
                    </li>

                    <li>
                        <Enlace href="./linux/atajos-de-teclado.md">Ir a atajos de teclado en linux</Enlace>
                    </li>
                </Lista>

                <Texto>o si prefieres video de YouTube, puedes elegir alguno de estos:</Texto>

                <Lista className="
            p1 list-disc my-2
            ">
                    <li>
                        <Enlace href="https:/www.youtube.com/watch?v=L906Kti3gzE">Ir a Curso de Linux - HolaMundo (35m)</Enlace>
                    </li>

                    <li>
                        <Enlace href="https:/www.youtube.com/watch?v=8v1cR7-msQ0">Ir a Curso de Linux - Hixec (3h)</Enlace>
                    </li>

                    <li>
                        <Enlace href="https:/www.youtube.com/results?search_query=curso+de+linux+desde+cero">Buscar Curso de Linux
                        </Enlace>
                    </li>
                </Lista>

                <Texto>Recursos extras:</Texto>

                <Lista className="
            p1 list-disc my-2
            ">
                    <li>
                        <Enlace href="https://www.bonaval.com/kb/cheats-chuletas/comandos-basicos-linux">Ir a /www.bonaval.com/ Comandos
                            Basicos de Linux</Enlace>
                    </li>
                </Lista>

                <Titulo title="h3" id="2-linux-comandos-individuales">Linux (comandos individuales)</Titulo>

                <Lista className="
            p1 list-disc my-2
            ">
                    <li>
                        <Enlace href="./linux/comandos/less.md">Ir a comando less</Enlace>
                    </li>
                    <li>
                        <Enlace href="./linux/comandos/ncat.md">Ir a comando ncat</Enlace>
                    </li>
                    <li>
                        <Enlace href="./linux/comandos/netcat.md">Ir a comando netcat</Enlace>
                    </li>
                    <li>
                        <Enlace href="./linux/comandos/which.md">Ir a comando which</Enlace>
                    </li>
                    <li>
                        <Enlace href="./linux/comandos/wc.md">Ir a comando wc</Enlace>
                    </li>
                    <li>
                        <Enlace href="./linux/comandos/diff.md">Ir a comando diff</Enlace>
                    </li>
                    <li>
                        <Enlace href="./linux/comandos/xxd.md">Ir a comando xxd</Enlace>
                    </li>
                    <li>
                        <Enlace href="./linux/comandos/cifrado-cesar-tr.md">Ir a comando cifrado cesar con tr</Enlace>
                    </li>
                </Lista>

                <Titulo title="h3" id="3-bash-script">Bash Script</Titulo>

                <Texto><strong>Básico:</strong></Texto>

                <Lista className="
            p1 list-disc my-2
            ">
                    <li>
                        <Enlace href="./linux/fundaments.md">Ir a Fundamentos</Enlace>
                    </li>
                    <li>
                        <Enlace href="./linux/condiciones.md">Ir a Condiciones</Enlace>
                    </li>
                    <li>
                        <Enlace href="./linux/estControl.md">Ir a Estructuras de Control</Enlace>
                    </li>
                    <li>
                        <Enlace href="./linux/funciones.md">Ir a Funciones, variables locales y globales</Enlace>
                    </li>
                    <li>
                        <Enlace href="./linux/funciones-externas.md">Ir a Funciones Externas</Enlace>
                    </li>
                </Lista>

                <Texto><strong>Intermedio-Avanzado:</strong></Texto>

                <Lista className="
            p1 list-disc my-2
            ">
                    <li>
                        <Enlace href="./linux/arrays.md">Ir a Arrays</Enlace>
                    </li>
                    <li>
                        <Enlace href="./linux/manipulacion-de-strings.md">Ir a Strings</Enlace>
                    </li>
                    <li>
                        <Enlace href="./linux/gestion-de-procesos.md">Ir a Gestiones de Procesos</Enlace>
                    </li>
                    <li>
                        <Enlace href="./linux/entrada-y-salida.md">Ir a Entrada y Salida</Enlace>
                    </li>
                </Lista>

                <Texto>O si prefieres video de YouTube:</Texto>

                <Lista className="
            p1 list-disc my-2
            ">
                    <li>
                        <Enlace href="https:/www.youtube.com/watch?v=RUorAzaDftg">Ir a curso de bash script desde cero - El pinguino de mario (30m)</Enlace>
                    </li>
                    <li>
                        <Enlace href="https:/www.youtube.com/watch?v=H4ayPYcZEfI">Ir a curso de bash script desde cero - Fazt
                            (2h 23m)</Enlace>
                    </li>
                    <li>
                        <Enlace href="https:/www.youtube.com/results?search_query=curso+de+bash+script+desde+cero">Buscar curso
                            de bash script desde cero</Enlace>
                    </li>
                </Lista>

                <Texto>Practica general</Texto>

                <Lista className="
            p1 list-disc my-2
            ">
                    <li>
                        <Enlace href="./linux/bandit-resolucion.md">Ir a Practicar con bandit</Enlace>
                    </li>
                </Lista>

                <Linea />

                <Titulo title="h2" id="4-windows">Windows</Titulo>

                <Texto><strong>Duración aproximada (2h diarias):</strong> 1 mes.</Texto>

                <Texto>Todo acerca de windows, para el hacking:</Texto>

                <Lista className="
            p1 list-disc my-2
            ">
                    <li>
                        <Enlace href="./windows/historia.md">Ir a Historia</Enlace>
                    </li>
                    <li>
                        <Enlace href="./windows/powershell-cmd.md">Ir a Diferencia entre powershell y cmd</Enlace>
                    </li>
                    <li>
                        <Enlace href="./windows/directorios.md">Ir a Directorios importantes</Enlace>
                    </li>
                    <li>
                        <Enlace href="./windows/comodines.md">Ir a Comodines</Enlace>
                    </li>
                    <li>
                        <Enlace href="./windows/navegacion.md">Ir a Comandos y cmdlets de navegación</Enlace>
                    </li>
                    <li>
                        <Enlace href="./windows/variables-entorno.md">Ir a variables de entorno</Enlace>
                    </li>
                    <li>
                        <Enlace href="./windows/ayuda-soporte.md">Ir a Comandos y cmdlets de ayuda y soporte</Enlace>
                    </li>
                    <li>
                        <Enlace href="./windows/gestion-usuarios.md">Ir a Comandos y cmdlets de gestión de usuarios</Enlace>
                    </li>
                    <li>
                        <Enlace href="./windows/gestion-grupos.md">Ir a Comandos y cmdlets de gestión de grupos</Enlace>
                    </li>
                    <li>
                        <Enlace href="./windows/gestion-grupos.md">Ir a Comandos y cmdlets de gestión de grupos</Enlace>
                    </li>
                    <li>
                        <Enlace href="./windows/gestion-red.md">Ir a Comandos y cmdlets de gestión de red</Enlace>
                    </li>
                    <li>
                        <Enlace href="./windows/gestion-permisos.md">Ir a Comandos y cmdlets de gestión de permisos</Enlace>
                    </li>
                    <li>
                        <Enlace href="./windows/redirecciones-powershell.md">Ir a Redirecciones en Powershell</Enlace>
                    </li>
                    <li>
                        <Enlace href="./windows/alias-powershell.md">Ir a Alias en Powershell</Enlace>
                    </li>
                </Lista>

                <Texto>Comandos y cmdlets de ayuda y soporte</Texto>

                <Lista className="
            ">
                    <li>
                        <Enlace href="./windows/ayuda-soporte.md">Ir a Comandos y cmdlets de ayuda y soporte</Enlace>
                    </li>
                </Lista>

                <Texto>O videos de YouTube:</Texto>

                <Lista>
                    <li>
                        <Enlace href="https://www.youtube.com/watch?v=sZ-i7yRZEaI">Ir a curso de Windows - Hixec (2h)</Enlace>
                    </li>
                </Lista>

                <Linea />

                <Titulo title="h2" id="5-redes">Redes</Titulo>

                <Texto><strong>Duración aproximada (2h diarias):</strong> 1 semana.</Texto>
                <Texto>
                    Aprender sobre redes (no es indispensable aprender como funciona, la parte
                    teórica te la puedes tomar con calma, lo realmente importante es saber
                    usar las herramientas prácticas de Linux, la teoría te ayudara a entender
                    mejor el funcionamiento de lo que usas):
                </Texto>

                <Texto>Archivos para leer de redes:</Texto>

                <Lista>
                    <li>
                        Parte Teórica (conceptos, y mucho más): <Enlace href="./redes/teoria.md">Ir a Teoría de Redes</Enlace>
                    </li>
                    <li>
                        Parte Práctica (herramientas): <Enlace href="./redes/herramientas.md">Ir a Herramientas de Redes</Enlace>
                    </li>
                    <li>
                        Subnetting: <Enlace href="./redes/subnetting.md">Ir a subnetting</Enlace>
                    </li>
                    <li>
                        Cidrs y Hosts: <Enlace href="./redes/cidrs-hosts.md">Ir a cidrs y hosts</Enlace>
                    </li>
                </Lista>

                <Texto>Cursos videos de YouTube:</Texto>

                <Lista>
                    <li>
                        <Enlace href="https:/www.youtube.com/watch?v=OLSKCWjI778">Ir curso de YouTube Contando bits - Redes Informáticas</Enlace>
                    </li>
                    <li>
                        <Enlace href="https:/www.youtube.com/watch?v=7ejIdyu8hug">Ir curso de YouTube Hixec - Redes para ciberseguridad</Enlace>
                    </li>
                </Lista>

                <Linea />

                <Titulo title="h2" id="6-python">Python</Titulo>

                <Texto><strong>Duración aproximada (2h diarias):</strong> 1 mes.</Texto>

                <Texto>Notas:</Texto>

                <Lista>
                    <li>
                        <Enlace href="./python/todo-python.md">Ir a resumen de Python básico</Enlace>
                    </li>
                    <li>
                        <Enlace href="./python/clases-python.md">Ir a resumen de Clases en Python</Enlace>
                    </li>
                    <li>
                        <Enlace href="./python/variables-clases.md">Ir a variables privadas y protegidas (clases en Python)
                        </Enlace>
                    </li>
                    <li>
                        <Enlace href="./python/getter-setter.md">Ir a Getters y Setters (clases en Python)</Enlace>
                    </li>
                    <li>
                        <Enlace href="./python/classmethod.md">Ir a decorador @classmethod (clases en Python)</Enlace>
                    </li>
                    <li>
                        <Enlace href="./python/property.md">Ir a decorador @property (clases en Python)</Enlace>
                    </li>
                </Lista>

                <Texto>Módulos y librerías resumen de cada uno:</Texto>

                <Lista>
                    <li>
                        <Enlace href="./python/modulos/os.md">Ir a Os (automatizar)</Enlace>
                    </li>
                    <li>
                        <Enlace href="./python/modulos/subprocess.md">Ir a Subprocess (automatizar)</Enlace>
                    </li>
                    <li>
                        <Enlace href="./python/modulos/re.md">Ir a Re (uso avanzado de strings)</Enlace>
                    </li>
                    <li>
                        <Enlace href="./python/modulos/sys.md">Ir a Sys (funciones del intérprete al programa)</Enlace>
                    </li>
                    <li>
                        <Enlace href="./python/modulos/sockets.md">Ir a Sockets (manejo de redes)</Enlace>
                    </li>
                    <li>
                        <Enlace href="./python/modulos/request.md">Ir a request (crear peticiones, atrevés de red)</Enlace>
                    </li>
                    <li>
                        <Enlace href="./python/modulos/threading.md">Ir a Threading (manejo de hilos, procesos paralelos
                            básicos)</Enlace>
                    </li>
                    <li>
                        <Enlace href="./python/modulos/multiprocessing.md">Ir a Multiprocessing (manejo de hilos, procesos
                            paralelos avanzados)</Enlace>
                    </li>
                    <li>
                        <Enlace href="./python/modulos/tkinter.md">Ir a Tkinter (Crear interfaces graficas)</Enlace>
                    </li>
                </Lista>

                <Texto>…</Texto>

                <Texto>Video de YouTube - python desde cero:</Texto>

                <Lista>
                    <li>
                        <Enlace href="https://www.youtube.com/watch?v=nKPbfIU442g">Ir a curso de Python Básico Completo - YoSoyDalto
                            (8h)</Enlace>
                    </li>
                </Lista>

                <Linea />

                <Titulo title="h2" id="7-pentesting">Pentesting</Titulo>

                <Texto>Temario:</Texto>

                <Lista>
                    <li>
                        <Enlace href="./pentesting/fases.md">Ir a Que es?, y fases del Pentesting</Enlace>
                    </li>

                    <li>
                        <Enlace href="./pentesting/cajas.md">Ir a Cajas en el Pentesting</Enlace>
                    </li>
                </Lista>

                <Texto>…</Texto>

                <Linea />

                <Titulo title="h2" id="8-osint">OSINT</Titulo>

                <Texto><strong>Temario:</strong></Texto>

                <Lista>
                    <li>
                        Cosas básicas a tener en cuenta: <Enlace href="./osint/basic.md">Ir a OSINT básico</Enlace>
                    </li>

                    <li>
                        Google Doorks: <Enlace href="./osint/googleDoorks.md">Ir a Google Doorks</Enlace>
                    </li>
                </Lista>

                <Texto>…</Texto>

                <Linea />

                <Titulo title="h2" id="9-privacidad-y-anonimato">Privacidad y Anonimato</Titulo>

                <Lista>
                    <li>
                        Definiciones y diferencias entre privacidad y anonimato: <Enlace href="./anonimato/definicion.md">Ir a definiciones</Enlace>
                    </li>
                    <li>
                        Huella digital: <Enlace href="./anonimato/huella-digital.md">Ir a Huella Digital</Enlace>
                    </li>
                    <li>
                        User Agent: <Enlace href="./anonimato/user-agent.md">Ir a user-agent</Enlace>
                    </li>
                    <li>
                        Saber si están filtrados tus datos: <Enlace href="./anonimato/filtraciones.md">Ir a investigar</Enlace>
                    </li>
                </Lista>

                <Texto>…</Texto>

                <Texto>
                    Conceptos generales: <Enlace href="./anonimato/privacidad-anonimato.md">Ir a conceptos generales</Enlace>
                </Texto>

                <Linea />

                <Titulo title="h2" id="10-información">Información</Titulo>

                <Texto>Notas de cada actualización, y mucho más:</Texto>

                <Texto>
                    <Enlace href="./otros/notas-actualizacion.md">Ir a notas de Actualización</Enlace>
                </Texto>
            </Estructura>


            <TemarioAside>
                <Temario className="
                bg-gray-900
                rounded-md
                p-4 mb-4
                list-decimal
                " />
            </TemarioAside>
        </>
    );
};

export default Readme;
