import Readme from "./readme.jsx";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { lazy, useState } from "react";

// * Apartados Especificos ************************************************** //

// Anonimato
const Privacidad_Y_Anonimato = lazy(() => import("./secciones/anonimato/privacidad-anonimato.jsx"));
const Filtraciones = lazy(() => import("./secciones/anonimato/filtraciones.jsx"));
const Huella_Digital = lazy(() => import("./secciones/anonimato/huella-digital.jsx"));
const User_Agent = lazy(() => import("./secciones/anonimato/user-agent.jsx"));

// Conceptos Básicos
const Conceptos_Basicos = lazy(() => import("./secciones/conceptos-basicos/conceptos-basicos.jsx"));
const Legalidad_Hacking = lazy(() => import("./secciones/conceptos-basicos/legalidad-hacking.jsx"));
const Mitos = lazy(() => import("./secciones/conceptos-basicos/mitos.jsx"));

// Conceptos Básicos
const Virtualizacion = lazy(() => import("./secciones/virtualizacion/virtualizacion.jsx"));

// Linux
const Bandit_Resolucion = lazy(() => import("./secciones/linux/bandit-resolucion.jsx"));

// Linux/Basico
const Atajos_De_Teclado = lazy(() => import("./secciones/linux/basico/atajos-de-teclado.jsx"));
const Ayuda_Linux = lazy(() => import("./secciones/linux/basico/ayuda-linux.jsx"));
const Busqueda = lazy(() => import("./secciones/linux/basico/busqueda.jsx"));
const Comandos_Linux = lazy(() => import("./secciones/linux/basico/comandos-linux.jsx"));
const Fundaments = lazy(() => import("./secciones/linux/basico/fundamentos.jsx"));
const Gestion_De_Procesos = lazy(() => import("./secciones/linux/basico/gestion-de-procesos.jsx"));
const Grupos_Y_Usuarios = lazy(() => import("./secciones/linux/basico/grupos-y-usuarios.jsx"));
const Permisos = lazy(() => import("./secciones/linux/basico/permisos.jsx"));

// Linux/Bash-Script
const Arrays = lazy(() => import("./secciones/linux/bash-script/arrays.jsx"));
const Condiciones = lazy(() => import("./secciones/linux/bash-script/condiciones.jsx"));
const Entrada_Y_Salida = lazy(() => import("./secciones/linux/bash-script/entrada-y-salida.jsx"));
const EstControl = lazy(() => import("./secciones/linux/bash-script/estControl.jsx"));
const Funciones_Externas = lazy(() => import("./secciones/linux/bash-script/funciones-externas.jsx"));
const Funciones = lazy(() => import("./secciones/linux/bash-script/funciones.jsx"));
const Manipulacion_De_Strings = lazy(() => import("./secciones/linux/bash-script/manipulacion-de-strings.jsx"));

// Linux/Comandos
const Cifrado_Cesar_Tr = lazy(() => import("./secciones/linux/comandos/cifrado-cesar-tr.jsx"));
const Diff = lazy(() => import("./secciones/linux/comandos/diff.jsx"));
const Less = lazy(() => import("./secciones/linux/comandos/less.jsx"));
const Ncat = lazy(() => import("./secciones/linux/comandos/ncat.jsx"));
const Netcat = lazy(() => import("./secciones/linux/comandos/netcat.jsx"));
const Wc = lazy(() => import("./secciones/linux/comandos/wc.jsx"));
const Which = lazy(() => import("./secciones/linux/comandos/which.jsx"));
const Xxd = lazy(() => import("./secciones/linux/comandos/xxd.jsx"));

// OSINT
const Basic = lazy(() => import("./secciones/osint/basic.jsx"));
const GoogleDoorks = lazy(() => import("./secciones/osint/googleDoorks.jsx"));
const Terminologia = lazy(() => import("./secciones/osint/terminologia.jsx"));

// Otros
const Concientizacion = lazy(() => import("./secciones/otros/concientizacion.jsx"));
const Distribuciones_Linux = lazy(() => import("./secciones/otros/distribuciones-linux.jsx"));
const Herramientas = lazy(() => import("./secciones/otros/herramientas.jsx"));
const Notas_Actualizacion = lazy(() => import("./secciones/otros/notas-actualizacion.jsx"));
const Ramas_Ciberseguridad = lazy(() => import("./secciones/otros/ramas-ciberseguridad.jsx"));
const Recursos = lazy(() => import("./secciones/otros/recursos.jsx"));

// Pentesting
const Cajas = lazy(() => import("./secciones/pentesting/cajas.jsx"));
const Fases = lazy(() => import("./secciones/pentesting/fases.jsx"));

// Python
const Clases_Python = lazy(() => import("./secciones/python/clases-python.jsx"));
const Classmethod = lazy(() => import("./secciones/python/classmethod.jsx"));
const Getter_Setter = lazy(() => import("./secciones/python/getter-setter.jsx"));
const Property = lazy(() => import("./secciones/python/property.jsx"));
const Todo_Python = lazy(() => import("./secciones/python/todo-python.jsx"));
const Variables_Clases = lazy(() => import("./secciones/python/variables-clases.jsx"));

// Python/Módulos
const Multiprocessing = lazy(() => import("./secciones/python/modulos/multiprocessing.jsx"));
const Os = lazy(() => import("./secciones/python/modulos/os.jsx"));
const Re = lazy(() => import("./secciones/python/modulos/re.jsx"));
const Request = lazy(() => import("./secciones/python/modulos/request.jsx"));
const Sockets = lazy(() => import("./secciones/python/modulos/sockets.jsx"));
const Subprocess = lazy(() => import("./secciones/python/modulos/subprocess.jsx"));
const Sys = lazy(() => import("./secciones/python/modulos/sys.jsx"));
const Threading = lazy(() => import("./secciones/python/modulos/threading.jsx"));
const Tkinter = lazy(() => import("./secciones/python/modulos/tkinter.jsx"));

// Redes
const Cidrs_Hosts = lazy(() => import("./secciones/redes/cidrs-hosts.jsx"));
const Herramientas_Redes = lazy(() => import("./secciones/redes/herramientas.jsx"));
const Subnetting = lazy(() => import("./secciones/redes/subnetting.jsx"));
const Teoria = lazy(() => import("./secciones/redes/teoria.jsx"));

// Windows
const Alias_Powershell = lazy(() => import("./secciones/windows/alias-powershell.jsx"));
const Ayuda_Soporte = lazy(() => import("./secciones/windows/ayuda-soporte.jsx"));
const Comodines = lazy(() => import("./secciones/windows/comodines.jsx"));
const Directorios = lazy(() => import("./secciones/windows/directorios.jsx"));
const Gestion_Grupos = lazy(() => import("./secciones/windows/gestion-grupos.jsx"));
const Gestion_Permisos = lazy(() => import("./secciones/windows/gestion-permisos.jsx"));
const Gestion_Procesos = lazy(() => import("./secciones/windows/gestion-procesos.jsx"));
const Gestion_Red = lazy(() => import("./secciones/windows/gestion-red.jsx"));
const Gestion_Usuarios = lazy(() => import("./secciones/windows/gestion-usuarios.jsx"));
const Historia = lazy(() => import("./secciones/windows/historia.jsx"));
const Navegacion = lazy(() => import("./secciones/windows/navegacion.jsx"));
const Powershell_Cmd = lazy(() => import("./secciones/windows/powershell-cmd.jsx"));
const Redirecciones_Powershell = lazy(() => import("./secciones/windows/redirecciones-powershell.jsx"));
const Variables_Entorno = lazy(() => import("./secciones/windows/variables-entorno.jsx"));

// * Componentes Reutilizables ********************************************** //

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

function Enlace_R({ children, to, className = "" }) {
  return (
    <Link draggable="false" className={`
    cursor-pointer
    hover:text-gray-200
    select-none
    ${className}
    `} to={to}>{children}</Link>
  );
}

function Boton_I({ texto = "", children, className = "" }) {
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

// * Componentes ************************************************************ //

import Titulo from "./componentes/titulo.jsx";
import Lista from "./componentes/lista.jsx";
import Enlace from "./componentes/enlace.jsx";
import Imagen from "./componentes/imagen.jsx";
import Texto from "./componentes/texto.jsx";
import Mensaje from "./componentes/mensaje.jsx";

// * Apricacion ************************************************************* //

function App() {
  return (
    <>
      <header className="
      flex items-center gap-4
      justify-between p-2 px-4
      bg-gray-900
      text-gray-200
      border-b-2 border-gray-700
      select-none
      ">
        <div className="
        flex items-center gap-4
        select-none
        ">
          <Imagen
            width={56}
            src="./../public/logo-fravelz.jpg"
            alt="Logo de fravelz"
            className="
            rounded-full
            object-cover
            border-2 border-gray-600
            "
          />

          <h1 className="text-2xl"><strong>Fravelz</strong></h1>
        </div>

        <div className="text-right">
          <h2 className="text-xl">Notas de hacking</h2>
        </div>
      </header>

      <main className="
      flex flex-col lg:flex-row
      gap-4 lg:gap-6
      p-4
      ">
        <BrowserRouter>
          <aside id="secciones" className="
          h-fit
          lg:h-screen
          lg:max-h-4/5
          lg:sticky lg:top-5
          lg:w-4/5 lg:min-w-72 lg:max-w-fit
          ">
            <div className="
            bg-gray-900
            border-gray-700
            border-b-2 border-r-0
            lg:border-r-2 lg:border-b-0

            h-fit max-h-4/5
            overflow-y-scroll
            rounded-md
            p-4
            ">
              <Link draggable="false" className="
              block select-none
            text-gray-300
            hover:text-gray-200
              " to="/">Inicio</Link>

              <Lista className="">
                {/* Conceptos Básicos */}
                <Desplegable titulo="Conceptos Básicos"
                  masInfo={<Boton_I texto="Mas Info.">
                    <Titulo title="h2" id="1-conceptos-básicos">Conceptos Básicos</Titulo>

                    <Texto><strong>Duración aproximada:</strong> 25min de lectura.</Texto>

                    <Texto className="text-left">
                      En esta seccion se encontrara, explicaciones de los términos
                      fundamentales, y reglas importantes de la seguridad informática. Es
                      importante entenderlos, ya que se usan constantemente en el campo de la
                      ciberseguridad y hacking.
                    </Texto>
                  </Boton_I>}
                >
                  <li><Enlace_R to="/mitos">Desmitiendo Mitos</Enlace_R></li>
                  <li><Enlace_R to="/conceptos_basicos">Conceptos Básicos</Enlace_R></li>
                  <li><Enlace_R to="/legalidad_hacking">Legalidad del Hacking</Enlace_R></li>
                </Desplegable>

                {/* Virtualizacion */}
                <Desplegable titulo="Virtualizacion"
                  masInfo={<Boton_I texto="Mas Info.">
                    <Titulo title="h2" id="2-virtualización">Virtualización</Titulo>

                    <Texto><strong>Duración aproximada (2h diarias):</strong> 2 días con practica.</Texto>

                    <Texto className="text-left">
                      En esta seccion se encontrara, una guia corta, y resumida
                      acerca de la virtualizacion con material extra para aprender mas,
                      y la explicacion del porque es importante, y mucho mas.
                    </Texto>
                  </Boton_I>}
                >
                  <li><Enlace_R to="/virtualizacion">Virtualizacion</Enlace_R></li>
                </Desplegable>

                {/* Linux y Bash Script */}
                <Desplegable titulo="Linux y Bash Script"
                  masInfo={<Boton_I texto="Mas Info.">
                    <Titulo title="h2">Linux y Bash Script</Titulo>

                    <Texto><strong>Duración aproximada (2h diarias):</strong> 1 mes con practica.</Texto>

                    <Texto className="text-left">
                      Estos temas están relacionados porque los comandos que aprendes en Linux
                      también se pueden usar dentro de los archivos de Bash Script. En otras
                      palabras, Bash actúa como una extensión del sistema que te permite
                      automatizar esos comandos, combinarlos y ejecutarlos de forma secuencial o
                      condicional sin tener que escribirlos uno por uno en la terminal.
                    </Texto>
                  </Boton_I>}
                >

                  <Desplegable titulo="Linux Basico">
                    <li><Enlace_R to="/fundamentos">Fundamentos Linux</Enlace_R></li>
                    <li><Enlace_R to="/comandos_linux">Comandos Básicos</Enlace_R></li>
                    <li><Enlace_R to="/atajos_de_teclado">Atajos de Teclado</Enlace_R></li>
                    <li><Enlace_R to="/permisos">Gestión de Permisos</Enlace_R></li>
                    <li><Enlace_R to="/grupos_y_usuarios">Grupos y Usuarios</Enlace_R></li>
                    <li><Enlace_R to="/gestion_de_procesos">Gestión de Procesos</Enlace_R></li>
                  </Desplegable>

                  {/* Comandos Linux */}
                  <Desplegable titulo="Comandos Linux">
                    <li><Enlace_R to="/cifrado_cesar">Cifrado César (tr)</Enlace_R></li>
                    <li><Enlace_R to="/diff">Diff</Enlace_R></li>
                    <li><Enlace_R to="/less">Less</Enlace_R></li>
                    <li><Enlace_R to="/ncat">Ncat</Enlace_R></li>
                    <li><Enlace_R to="/netcat">Netcat</Enlace_R></li>
                    <li><Enlace_R to="/wc">WC</Enlace_R></li>
                    <li><Enlace_R to="/which">Which</Enlace_R></li>
                    <li><Enlace_R to="/xxd">XXD</Enlace_R></li>
                  </Desplegable>

                  {/* Bash Script */}
                  <Desplegable titulo="Bash Script">
                    <li><Enlace_R to="/arrays">Arrays</Enlace_R></li>
                    <li><Enlace_R to="/condiciones">Condiciones</Enlace_R></li>
                    <li><Enlace_R to="/entrada_y_salida">Entrada y Salida</Enlace_R></li>
                    <li><Enlace_R to="/estructuras_control">Estructuras de Control</Enlace_R></li>
                    <li><Enlace_R to="/funciones">Funciones</Enlace_R></li>
                    <li><Enlace_R to="/funciones_externas">Funciones Externas</Enlace_R></li>
                    <li><Enlace_R to="/manipulacion_de_strings">Manipulación de Strings</Enlace_R></li>
                  </Desplegable>
                </Desplegable>

                {/* Windows */}
                <Desplegable titulo="Windows"
                  masInfo={<Boton_I texto="Mas Info.">
                    <Titulo title="h2">Linux y Bash Script</Titulo>

                    <Texto><strong>Duración aproximada (2h diarias):</strong> 1 mes con practica.</Texto>

                    <Texto className="text-left">
                      Estos temas están relacionados porque los comandos que aprendes en Linux
                      también se pueden usar dentro de los archivos de Bash ScripEn otras
                      palabras, Bash actúa como una extensión del sistema que te permite
                      automatizar esos comandos, combinarlos y ejecutarlos de forma secuencial o
                      condicional sin tener que escribirlos uno por uno en la terminal.
                    </Texto>
                  </Boton_I>}
                >
                  <li><Enlace_R to="/historia_windows">Historia de Windows</Enlace_R></li>
                  <li><Enlace_R to="/navegacion_windows">Navegación</Enlace_R></li>
                  <li><Enlace_R to="/directorios_windows">Directorios</Enlace_R></li>
                  <li><Enlace_R to="/powershell_cmd">PowerShell y CMD</Enlace_R></li>
                  <li><Enlace_R to="/alias_powershell">Alias PowerShell</Enlace_R></li>
                  <li><Enlace_R to="/comodines">Comodines</Enlace_R></li>
                  <li><Enlace_R to="/gestion_usuarios_windows">Gestión de Usuarios</Enlace_R></li>
                  <li><Enlace_R to="/gestion_grupos_windows">Gestión de Grupos</Enlace_R></li>
                  <li><Enlace_R to="/gestion_permisos_windows">Gestión de Permisos</Enlace_R></li>
                  <li><Enlace_R to="/gestion_procesos_windows">Gestión de Procesos</Enlace_R></li>
                  <li><Enlace_R to="/gestion_red_windows">Gestión de Red</Enlace_R></li>
                  <li><Enlace_R to="/variables_entorno_windows">Variables de Entorno</Enlace_R></li>
                  <li><Enlace_R to="/redirecciones_powershell">Redirecciones PowerShell</Enlace_R></li>
                </Desplegable>

                {/* Redes */}
                <Desplegable titulo="Redes"
                  masInfo={<Boton_I texto="Mas Info.">
                    <Titulo title="h2">Linux y Bash Script</Titulo>

                    <Texto><strong>Duración aproximada (2h diarias):</strong> 1 mes con practica.</Texto>

                    <Texto className="text-left">
                      Estos temas están relacionados porque los comandos que aprendes en Linux
                      también se pueden usar dentro de los archivos de Bash ScripEn otras
                      palabras, Bash actúa como una extensión del sistema que te permite
                      automatizar esos comandos, combinarlos y ejecutarlos de forma secuencial o
                      condicional sin tener que escribirlos uno por uno en la terminal.
                    </Texto>
                  </Boton_I>}
                >
                  <li><Enlace_R to="/teoria_redes">Teoría de Redes</Enlace_R></li>
                  <li><Enlace_R to="/cidrs_hosts">CIDRs y Hosts</Enlace_R></li>
                  <li><Enlace_R to="/subnetting">Subnetting</Enlace_R></li>
                  <li><Enlace_R to="/herramientas_redes">Herramientas de Red</Enlace_R></li>
                </Desplegable>

                {/* Python */}
                <Desplegable titulo="Python"
                  masInfo={<Boton_I texto="Mas Info.">
                    <Titulo title="h2">Linux y Bash Script</Titulo>

                    <Texto><strong>Duración aproximada (2h diarias):</strong> 1 mes con practica.</Texto>

                    <Texto className="text-left">
                      Estos temas están relacionados porque los comandos que aprendes en Linux
                      también se pueden usar dentro de los archivos de Bash ScripEn otras
                      palabras, Bash actúa como una extensión del sistema que te permite
                      automatizar esos comandos, combinarlos y ejecutarlos de forma secuencial o
                      condicional sin tener que escribirlos uno por uno en la terminal.
                    </Texto>
                  </Boton_I>}
                >
                  <li><Enlace_R to="/python_completo">Python Completo</Enlace_R></li>
                  <li><Enlace_R to="/clases_python">Clases en Python</Enlace_R></li>
                  <li><Enlace_R to="/variables_clases">Variables de Clase</Enlace_R></li>
                  <li><Enlace_R to="/getter_setter">Getters y Setters</Enlace_R></li>
                  <li><Enlace_R to="/property">Property</Enlace_R></li>
                  <li><Enlace_R to="/classmethod">Classmethod</Enlace_R></li>

                  {/* Módulos Python */}
                  <li><Enlace_R to="/os_python">Módulo OS</Enlace_R></li>
                  <li><Enlace_R to="/sys">Módulo Sys</Enlace_R></li>
                  <li><Enlace_R to="/re_python">Módulo RE</Enlace_R></li>
                  <li><Enlace_R to="/request">Módulo Request</Enlace_R></li>
                  <li><Enlace_R to="/subprocess">Módulo Subprocess</Enlace_R></li>
                  <li><Enlace_R to="/threading">Módulo Threading</Enlace_R></li>
                  <li><Enlace_R to="/multiprocessing">Módulo Multiprocessing</Enlace_R></li>
                  <li><Enlace_R to="/sockets">Módulo Sockets</Enlace_R></li>
                  <li><Enlace_R to="/tkinter">Módulo Tkinter</Enlace_R></li>
                </Desplegable>

                {/* Pentesting */}
                <Desplegable titulo="Pentesting"
                  masInfo={<Boton_I texto="Mas Info.">
                    <Titulo title="h2">Linux y Bash Script</Titulo>

                    <Texto><strong>Duración aproximada (2h diarias):</strong> 1 mes con practica.</Texto>

                    <Texto className="text-left">
                      Estos temas están relacionados porque los comandos que aprendes en Linux
                      también se pueden usar dentro de los archivos de Bash ScripEn otras
                      palabras, Bash actúa como una extensión del sistema que te permite
                      automatizar esos comandos, combinarlos y ejecutarlos de forma secuencial o
                      condicional sin tener que escribirlos uno por uno en la terminal.
                    </Texto>
                  </Boton_I>}
                >
                  <li><Enlace_R to="/fases_pentesting">Fases del Pentesting</Enlace_R></li>
                  <li><Enlace_R to="/cajas">Tipos de Cajas</Enlace_R></li>
                </Desplegable>

                {/* OSINT */}
                <Desplegable titulo="OSINT"
                  masInfo={<Boton_I texto="Mas Info.">
                    <Titulo title="h2">Linux y Bash Script</Titulo>

                    <Texto><strong>Duración aproximada (2h diarias):</strong> 1 mes con practica.</Texto>

                    <Texto className="text-left">
                      Estos temas están relacionados porque los comandos que aprendes en Linux
                      también se pueden usar dentro de los archivos de Bash ScripEn otras
                      palabras, Bash actúa como una extensión del sistema que te permite
                      automatizar esos comandos, combinarlos y ejecutarlos de forma secuencial o
                      condicional sin tener que escribirlos uno por uno en la terminal.
                    </Texto>
                  </Boton_I>}
                >
                  <li><Enlace_R to="/osint_basico">OSINT Básico</Enlace_R></li>
                  <li><Enlace_R to="/terminologia_osint">Terminología</Enlace_R></li>
                  <li><Enlace_R to="/google_dorks">Google Dorks</Enlace_R></li>
                </Desplegable>

                {/* Privacidad y Anonimato */}
                <Desplegable titulo="Privacidad y Anonimato"
                  masInfo={<Boton_I texto="Mas Info.">
                    <Titulo title="h2">Linux y Bash Script</Titulo>

                    <Texto><strong>Duración aproximada (2h diarias):</strong> 1 mes con practica.</Texto>

                    <Texto className="text-left">
                      Estos temas están relacionados porque los comandos que aprendes en Linux
                      también se pueden usar dentro de los archivos de Bash ScripEn otras
                      palabras, Bash actúa como una extensión del sistema que te permite
                      automatizar esos comandos, combinarlos y ejecutarlos de forma secuencial o
                      condicional sin tener que escribirlos uno por uno en la terminal.
                    </Texto>
                  </Boton_I>}
                >
                  <li><Enlace_R to="/privacidad_y_anonimato">Privacidad y Anonimato</Enlace_R></li>
                  <li><Enlace_R to="/huella_digital">Huella Digital</Enlace_R></li>
                  <li><Enlace_R to="/user_agent">User Agent</Enlace_R></li>
                  <li><Enlace_R to="/filtracion_de_datos">Filtración de datos</Enlace_R></li>
                </Desplegable>

                {/* Otros */}
                <Desplegable titulo="Otros"
                  masInfo={<Boton_I texto="Mas Info.">
                    <Titulo title="h2">Linux y Bash Script</Titulo>

                    <Texto><strong>Duración aproximada (2h diarias):</strong> 1 mes con practica.</Texto>

                    <Texto className="text-left">
                      Estos temas están relacionados porque los comandos que aprendes en Linux
                      también se pueden usar dentro de los archivos de Bash ScripEn otras
                      palabras, Bash actúa como una extensión del sistema que te permite
                      automatizar esos comandos, combinarlos y ejecutarlos de forma secuencial o
                      condicional sin tener que escribirlos uno por uno en la terminal.
                    </Texto>
                  </Boton_I>}
                >
                  <li><Enlace_R to="/concientizacion">Concientización</Enlace_R></li>
                  <li><Enlace_R to="/distribuciones_linux">Distribuciones Linux</Enlace_R></li>
                  <li><Enlace_R to="/herramientas">Herramientas</Enlace_R></li>
                  <li><Enlace_R to="/notas_actualizacion">Notas de Actualización</Enlace_R></li>
                  <li><Enlace_R to="/ramas_ciberseguridad">Ramas de Ciberseguridad</Enlace_R></li>
                  <li><Enlace_R to="/recursos">Recursos</Enlace_R></li>
                </Desplegable>
              </Lista>
            </div>
          </aside>

          <Routes>
            {/* Rutas principales */}
            <Route path="/" element={<Readme />} />

            {/* Conceptos Básicos */}
            <Route path='/virtualizacion' element={<Virtualizacion />} />

            {/* Conceptos Básicos */}
            <Route path='/conceptos_basicos' element={<Conceptos_Basicos />} />
            <Route path='/legalidad_hacking' element={<Legalidad_Hacking />} />
            <Route path='/mitos' element={<Mitos />} />

            {/* Anonimato */}
            <Route path='/privacidad_y_anonimato' element={<Privacidad_Y_Anonimato />} />
            <Route path='/huella_digital' element={<Huella_Digital />} />
            <Route path='/user_agent' element={<User_Agent />} />
            <Route path='/filtracion_de_datos' element={<Filtraciones />} />

            {/* Linux */}
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

            {/* Linux/Comandos */}
            <Route path='/cifrado_cesar' element={<Cifrado_Cesar_Tr />} />
            <Route path='/diff' element={<Diff />} />
            <Route path='/less' element={<Less />} />
            <Route path='/ncat' element={<Ncat />} />
            <Route path='/netcat' element={<Netcat />} />
            <Route path='/wc' element={<Wc />} />
            <Route path='/which' element={<Which />} />
            <Route path='/xxd' element={<Xxd />} />

            {/* OSINT */}
            <Route path='/osint_basico' element={<Basic />} />
            <Route path='/google_dorks' element={<GoogleDoorks />} />
            <Route path='/terminologia_osint' element={<Terminologia />} />

            {/* Otros */}
            <Route path='/concientizacion' element={<Concientizacion />} />
            <Route path='/distribuciones_linux' element={<Distribuciones_Linux />} />
            <Route path='/herramientas' element={<Herramientas />} />
            <Route path='/notas_actualizacion' element={<Notas_Actualizacion />} />
            <Route path='/ramas_ciberseguridad' element={<Ramas_Ciberseguridad />} />
            <Route path='/recursos' element={<Recursos />} />

            {/* Pentesting */}
            <Route path='/cajas' element={<Cajas />} />
            <Route path='/fases_pentesting' element={<Fases />} />

            {/* Python */}
            <Route path='/clases_python' element={<Clases_Python />} />
            <Route path='/classmethod' element={<Classmethod />} />
            <Route path='/getter_setter' element={<Getter_Setter />} />
            <Route path='/property' element={<Property />} />
            <Route path='/python_completo' element={<Todo_Python />} />
            <Route path='/variables_clases' element={<Variables_Clases />} />

            {/* Python/Módulos */}
            <Route path='/multiprocessing' element={<Multiprocessing />} />
            <Route path='/os_python' element={<Os />} />
            <Route path='/re_python' element={<Re />} />
            <Route path='/request' element={<Request />} />
            <Route path='/sockets' element={<Sockets />} />
            <Route path='/subprocess' element={<Subprocess />} />
            <Route path='/sys' element={<Sys />} />
            <Route path='/threading' element={<Threading />} />
            <Route path='/tkinter' element={<Tkinter />} />

            {/* Redes */}
            <Route path='/cidrs_hosts' element={<Cidrs_Hosts />} />
            <Route path='/herramientas_redes' element={<Herramientas_Redes />} />
            <Route path='/subnetting' element={<Subnetting />} />
            <Route path='/teoria_redes' element={<Teoria />} />

            {/* Windows */}
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
        </BrowserRouter>
      </main>

      <footer className="
      text-gray-400
      bg-gray-900
      border-t-2 border-gray-700
      p-5 gap-3
      ">
        <div className="
        flex items-center
        justify-between
        ">
          <div className="">
            <Texto select="none"><b>Autor:</b> Fravelz</Texto>

            <Texto select="none"><b>Contacto: </b><span className="select-all">fravelz_@hotmail.com</span></Texto>
          </div>

          <div className="flex gap-6">
            <Enlace target="_blank" href="https://github.com/FraVelz">
              <Imagen width={50} src="./../public/github.png" alt="imagen github" />
            </Enlace>


            <Enlace target="_blank" href="https://www.youtube.com/@fravelz">
              <Imagen width={50} src="./../public/youtube.png" alt="imagen youtube" />
            </Enlace>
          </div>
        </div>

        <Texto className="text-center mt-5" select="none"><b>Ultima Actualizacion:</b> Nov 08 del 2025</Texto>
      </footer>
    </>
  )
}

export default App
