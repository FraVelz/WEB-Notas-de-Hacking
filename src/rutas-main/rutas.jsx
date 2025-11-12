import Readme from "./../readme.jsx";

import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Rutas_Dinamicas from "./rutas_dinamicas.jsx";

function Rutas_Configuracion() {

    // ********** Anonimato
    const Privacidad_Y_Anonimato = lazy(() => import("../secciones/anonimato/privacidad-anonimato.jsx"));
    const Filtraciones = lazy(() => import("../secciones/anonimato/filtraciones.jsx"));
    const Huella_Digital = lazy(() => import("../secciones/anonimato/huella-digital.jsx"));
    const User_Agent = lazy(() => import("../secciones/anonimato/user-agent.jsx"));

    // ********** Conceptos Básicos
    const Conceptos_Basicos = lazy(() => import("../secciones/conceptos-basicos/conceptos-basicos.jsx"));
    const Legalidad_Hacking = lazy(() => import("../secciones/conceptos-basicos/legalidad-hacking.jsx"));
    const Mitos = lazy(() => import("../secciones/conceptos-basicos/mitos.jsx"));

    // ********** Conceptos Básicos
    const Virtualizacion = lazy(() => import("../secciones/virtualizacion/virtualizacion.jsx"));

    // ********** Linux
    const Bandit_Resolucion = lazy(() => import("../secciones/linux/bandit-resolucion.jsx"));

    // ********** Linux/Basico
    const Atajos_De_Teclado = lazy(() => import("../secciones/linux/basico/atajos-de-teclado.jsx"));
    const Ayuda_Linux = lazy(() => import("../secciones/linux/basico/ayuda-linux.jsx"));
    const Busqueda = lazy(() => import("../secciones/linux/basico/busqueda.jsx"));
    const Comandos_Linux = lazy(() => import("../secciones/linux/basico/comandos-linux.jsx"));
    const Fundaments = lazy(() => import("../secciones/linux/bash-script/fundamentos.jsx"));
    const Gestion_De_Procesos = lazy(() => import("../secciones/linux/basico/gestion-de-procesos.jsx"));
    const Grupos_Y_Usuarios = lazy(() => import("../secciones/linux/basico/grupos-y-usuarios.jsx"));
    const Permisos = lazy(() => import("../secciones/linux/basico/permisos.jsx"));

    // ********** Linux/Bash-Script
    const Arrays = lazy(() => import("../secciones/linux/bash-script/arrays.jsx"));
    const Condiciones = lazy(() => import("../secciones/linux/bash-script/condiciones.jsx"));
    const Entrada_Y_Salida = lazy(() => import("../secciones/linux/bash-script/entrada-y-salida.jsx"));
    const EstControl = lazy(() => import("../secciones/linux/bash-script/estControl.jsx"));
    const Funciones_Externas = lazy(() => import("../secciones/linux/bash-script/funciones-externas.jsx"));
    const Funciones = lazy(() => import("../secciones/linux/bash-script/funciones.jsx"));
    const Manipulacion_De_Strings = lazy(() => import("../secciones/linux/bash-script/manipulacion-de-strings.jsx"));

    // ********** Linux/Comandos
    const Cifrado_Cesar_Tr = lazy(() => import("../secciones/linux/comandos/cifrado-cesar-tr.jsx"));
    const Diff = lazy(() => import("../secciones/linux/comandos/diff.jsx"));
    const Less = lazy(() => import("../secciones/linux/comandos/less.jsx"));
    const Ncat = lazy(() => import("../secciones/linux/comandos/ncat.jsx"));
    const Netcat = lazy(() => import("../secciones/linux/comandos/netcat.jsx"));
    const Wc = lazy(() => import("../secciones/linux/comandos/wc.jsx"));
    const Which = lazy(() => import("../secciones/linux/comandos/which.jsx"));
    const Xxd = lazy(() => import("../secciones/linux/comandos/xxd.jsx"));

    // ********** OSINT
    const Basic = lazy(() => import("../secciones/osint/basic.jsx"));
    const GoogleDoorks = lazy(() => import("../secciones/osint/googleDoorks.jsx"));
    const Terminologia = lazy(() => import("../secciones/osint/terminologia.jsx"));

    // ********** Otros
    const Concientizacion = lazy(() => import("../secciones/otros/concientizacion.jsx"));
    const Distribuciones_Linux = lazy(() => import("../secciones/otros/distribuciones-linux.jsx"));
    const Herramientas = lazy(() => import("../secciones/otros/herramientas.jsx"));
    const Notas_Actualizacion = lazy(() => import("../secciones/otros/notas-actualizacion.jsx"));
    const Ramas_Ciberseguridad = lazy(() => import("../secciones/otros/ramas-ciberseguridad.jsx"));
    const Recursos = lazy(() => import("../secciones/otros/recursos.jsx"));

    // ********** Pentesting
    const Cajas = lazy(() => import("../secciones/pentesting/cajas.jsx"));
    const Fases = lazy(() => import("../secciones/pentesting/fases.jsx"));

    // ********** Python
    const Clases_Python = lazy(() => import("../secciones/python/clases-python.jsx"));
    const Classmethod = lazy(() => import("../secciones/python/classmethod.jsx"));
    const Getter_Setter = lazy(() => import("../secciones/python/getter-setter.jsx"));
    const Property = lazy(() => import("../secciones/python/property.jsx"));
    const Todo_Python = lazy(() => import("../secciones/python/todo-python.jsx"));
    const Variables_Clases = lazy(() => import("../secciones/python/variables-clases.jsx"));

    // ********** Python/Módulos
    const Multiprocessing = lazy(() => import("../secciones/python/modulos/multiprocessing.jsx"));
    const Os = lazy(() => import("../secciones/python/modulos/os.jsx"));
    const Re = lazy(() => import("../secciones/python/modulos/re.jsx"));
    const Request = lazy(() => import("../secciones/python/modulos/request.jsx"));
    const Sockets = lazy(() => import("../secciones/python/modulos/sockets.jsx"));
    const Subprocess = lazy(() => import("../secciones/python/modulos/subprocess.jsx"));
    const Sys = lazy(() => import("../secciones/python/modulos/sys.jsx"));
    const Threading = lazy(() => import("../secciones/python/modulos/threading.jsx"));
    const Tkinter = lazy(() => import("../secciones/python/modulos/tkinter.jsx"));

    // ********** Redes
    const Cidrs_Hosts = lazy(() => import("../secciones/redes/cidrs-hosts.jsx"));
    const Herramientas_Redes = lazy(() => import("../secciones/redes/herramientas.jsx"));
    const Subnetting = lazy(() => import("../secciones/redes/subnetting.jsx"));
    const Teoria = lazy(() => import("../secciones/redes/teoria.jsx"));

    // ********** Windows
    const Alias_Powershell = lazy(() => import("../secciones/windows/alias-powershell.jsx"));
    const Ayuda_Soporte = lazy(() => import("../secciones/windows/ayuda-soporte.jsx"));
    const Comodines = lazy(() => import("../secciones/windows/comodines.jsx"));
    const Directorios = lazy(() => import("../secciones/windows/directorios.jsx"));
    const Gestion_Grupos = lazy(() => import("../secciones/windows/gestion-grupos.jsx"));
    const Gestion_Permisos = lazy(() => import("../secciones/windows/gestion-permisos.jsx"));
    const Gestion_Procesos = lazy(() => import("../secciones/windows/gestion-procesos.jsx"));
    const Gestion_Red = lazy(() => import("../secciones/windows/gestion-red.jsx"));
    const Gestion_Usuarios = lazy(() => import("../secciones/windows/gestion-usuarios.jsx"));
    const Historia = lazy(() => import("../secciones/windows/historia.jsx"));
    const Navegacion = lazy(() => import("../secciones/windows/navegacion.jsx"));
    const Powershell_Cmd = lazy(() => import("../secciones/windows/powershell-cmd.jsx"));
    const Redirecciones_Powershell = lazy(() => import("../secciones/windows/redirecciones-powershell.jsx"));
    const Variables_Entorno = lazy(() => import("../secciones/windows/variables-entorno.jsx"));

    return (
        <div className="flex flex-col lg:flex-row flex-1 w-full h-fit gap-4 lg:gap-6">
            <Rutas_Dinamicas />
            <Suspense fallback={<div className="text-gray-400 p-4">Cargando...</div>}>
                <Routes>
                    {/* ********** Rutas principales ********** */}
                    <Route path="/" element={<Readme />} />

                    {/* ********** Conceptos Básicos ********** */}
                    <Route path='/virtualizacion' element={<Virtualizacion />} />

                    {/* ********** Conceptos Básicos ********** */}
                    <Route path='/conceptos_basicos' element={<Conceptos_Basicos />} />
                    <Route path='/legalidad_hacking' element={<Legalidad_Hacking />} />
                    <Route path='/mitos' element={<Mitos />} />

                    {/* ********** Anonimato ********** */}
                    <Route path='/privacidad_y_anonimato' element={<Privacidad_Y_Anonimato />} />
                    <Route path='/huella_digital' element={<Huella_Digital />} />
                    <Route path='/user_agent' element={<User_Agent />} />
                    <Route path='/filtracion_de_datos' element={<Filtraciones />} />

                    {/* ********** Linux ********** */}
                    <Route path='/arrays' element={<Arrays />} />
                    <Route path='/atajos_de_teclado' element={<Atajos_De_Teclado />} />
                    <Route path='/ayuda_linux' element={<Ayuda_Linux />} />
                    <Route path='/bandit_resolucion' element={<Bandit_Resolucion />} />
                    <Route path='/busqueda' element={<Busqueda />} />
                    <Route path='/comandos_linux' element={<Comandos_Linux />} />
                    <Route path='/condiciones' element={<Condiciones />} />
                    <Route path='/entrada_y_salida' element={<Entrada_Y_Salida />} />
                    <Route path='/estructuras_control' element={<EstControl />} />
                    <Route path='/funciones_externas' element={<Funciones_Externas />} />
                    <Route path='/funciones' element={<Funciones />} />
                    <Route path='/fundamentos' element={<Fundaments />} />
                    <Route path='/gestion_de_procesos' element={<Gestion_De_Procesos />} />
                    <Route path='/grupos_y_usuarios' element={<Grupos_Y_Usuarios />} />
                    <Route path='/manipulacion_de_strings' element={<Manipulacion_De_Strings />} />
                    <Route path='/permisos' element={<Permisos />} />

                    {/* ********** Linux/Comandos ********** */}
                    <Route path='/cifrado_cesar' element={<Cifrado_Cesar_Tr />} />
                    <Route path='/diff' element={<Diff />} />
                    <Route path='/less' element={<Less />} />
                    <Route path='/ncat' element={<Ncat />} />
                    <Route path='/netcat' element={<Netcat />} />
                    <Route path='/wc' element={<Wc />} />
                    <Route path='/which' element={<Which />} />
                    <Route path='/xxd' element={<Xxd />} />

                    {/* ********** OSINT ********** */}
                    <Route path='/osint_basico' element={<Basic />} />
                    <Route path='/google_dorks' element={<GoogleDoorks />} />
                    <Route path='/terminologia_osint' element={<Terminologia />} />

                    {/* ********** Otros ********** */}
                    <Route path='/concientizacion' element={<Concientizacion />} />
                    <Route path='/distribuciones_linux' element={<Distribuciones_Linux />} />
                    <Route path='/herramientas' element={<Herramientas />} />
                    <Route path='/notas_actualizacion' element={<Notas_Actualizacion />} />
                    <Route path='/ramas_ciberseguridad' element={<Ramas_Ciberseguridad />} />
                    <Route path='/recursos' element={<Recursos />} />

                    {/* ********** Pentesting ********** */}
                    <Route path='/cajas' element={<Cajas />} />
                    <Route path='/fases_pentesting' element={<Fases />} />

                    {/* ********** Python ********** */}
                    <Route path='/clases_python' element={<Clases_Python />} />
                    <Route path='/classmethod' element={<Classmethod />} />
                    <Route path='/getter_setter' element={<Getter_Setter />} />
                    <Route path='/property' element={<Property />} />
                    <Route path='/python_completo' element={<Todo_Python />} />
                    <Route path='/variables_clases' element={<Variables_Clases />} />

                    {/* ********** Python/Módulos ********** */}
                    <Route path='/multiprocessing' element={<Multiprocessing />} />
                    <Route path='/os_python' element={<Os />} />
                    <Route path='/re_python' element={<Re />} />
                    <Route path='/request' element={<Request />} />
                    <Route path='/sockets' element={<Sockets />} />
                    <Route path='/subprocess' element={<Subprocess />} />
                    <Route path='/sys' element={<Sys />} />
                    <Route path='/threading' element={<Threading />} />
                    <Route path='/tkinter' element={<Tkinter />} />

                    {/* ********** Redes ********** */}
                    <Route path='/cidrs_hosts' element={<Cidrs_Hosts />} />
                    <Route path='/herramientas_redes' element={<Herramientas_Redes />} />
                    <Route path='/subnetting' element={<Subnetting />} />
                    <Route path='/teoria_redes' element={<Teoria />} />

                    {/* ********** Windows ********** */}
                    <Route path='/alias_powershell' element={<Alias_Powershell />} />
                    <Route path='/ayuda_soporte' element={<Ayuda_Soporte />} />
                    <Route path='/comodines' element={<Comodines />} />
                    <Route path='/directorios_windows' element={<Directorios />} />
                    <Route path='/gestion_grupos_windows' element={<Gestion_Grupos />} />
                    <Route path='/gestion_permisos_windows' element={<Gestion_Permisos />} />
                    <Route path='/gestion_procesos_windows' element={<Gestion_Procesos />} />
                    <Route path='/gestion_red_windows' element={<Gestion_Red />} />
                    <Route path='/gestion_usuarios_windows' element={<Gestion_Usuarios />} />
                    <Route path='/historia_windows' element={<Historia />} />
                    <Route path='/navegacion_windows' element={<Navegacion />} />
                    <Route path='/powershell_cmd' element={<Powershell_Cmd />} />
                    <Route path='/redirecciones_powershell' element={<Redirecciones_Powershell />} />
                    <Route path='/variables_entorno_windows' element={<Variables_Entorno />} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default Rutas_Configuracion;
