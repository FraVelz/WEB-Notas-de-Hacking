import Readme from "./readme.jsx";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { lazy, useState } from "react";

import Enlace_R from "./componentes/enlaces_dinamicos.jsx";

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

import Rutas_Configuracion from "./rutas.jsx";

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
            src="./logo-fravelz.jpg"
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
        <BrowserRouter basename="/WEB-Notas-de-Hacking">
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

                    <Texto><strong>Duración aproximada (2h diarias):</strong> 2 mes con practica.</Texto>

                    <Texto className="text-left">
                      En esta seccion se encontrara, todos los temas que se nesesitan en Linux mas conocidos,
                      para el hacking, tambien incluye cosas de bash script, para aprender a crear programas sencillos,
                      automatizados para hacking en linux.
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
                    <Titulo title="h2">Windows</Titulo>

                    <Texto><strong>Duración aproximada (2h diarias):</strong> 1 mes con practica.</Texto>

                    <Texto className="text-left">
                      En esta seccion se encontrara, todos los temas que se nesesitan para manejar scripts,
                      .bat, y la consola powershell y cmd en Windows para hacking.
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
                    <Titulo title="h2">Redes</Titulo>

                    <Texto><strong>Duración aproximada (2h diarias):</strong> 1 semana.</Texto>

                    <Texto className="text-left">
                      En esta seccion se encontrara, el conocimiento teorico nesesario en redes,
                      que es fundamental, como conocimiento general en hacking y es
                      muy nesesario en Hacking wifi, y Pentesting.
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
                    <Titulo title="h2">Python</Titulo>

                    <Texto><strong>Duración aproximada (2h diarias):</strong> 2 mes con practica.</Texto>

                    <Texto className="text-left">
                      En esta seccion se encontrara, el conocimiento para utilizar python, desde el
                      conocimiento basico, hasta crear tus propios scripts en python para hacking incluyendo
                      interfaz.
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
                    <Titulo title="h2">Pentesting</Titulo>

                    <Texto><strong>Duración aproximada (2h diarias):</strong> 3 mes con practica.</Texto>

                    <Texto className="text-left">
                      En esta seccion se encontrara, el uso de herramientas, y teoria ya enfocada, en pentesting,
                      aprendiendo herramientas de consola linux e interfaces graficas como wireshark, y muchas cosas mas,
                      en relacion, con el tema, e implementando ya al final laboratorio reales.
                    </Texto>
                  </Boton_I>}
                >
                  <li><Enlace_R to="/fases_pentesting">Fases del Pentesting</Enlace_R></li>
                  <li><Enlace_R to="/cajas">Tipos de Cajas</Enlace_R></li>
                </Desplegable>

                {/* OSINT */}
                <Desplegable titulo="OSINT"
                  masInfo={<Boton_I texto="Mas Info.">
                    <Titulo title="h2">OSINT</Titulo>

                    <Texto><strong>Duración aproximada (2h diarias):</strong> Indefinido.</Texto>

                    <Texto className="text-left">
                      OSINT son las siglas en inglés de "Open Source INTelligence" (Inteligencia de Fuentes Abiertas),
                      que se refiere a la recopilación y análisis de información públicamente disponible para
                      obtener conocimiento útil hacerca de personas u organizaciones.
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
                    <Titulo title="h2">Privacidad y Anonimato</Titulo>

                    <Texto><strong>Duración aproximada (2h diarias):</strong> Indefinido.</Texto>

                    <Texto className="text-left">
                      Tener el control del rastro y tu informacion personal en internet.
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
                    <Titulo title="h2">Otros</Titulo>

                    <Texto><strong>Duración aproximada (2h diarias):</strong> Indefinido.</Texto>

                    <Texto className="text-left">
                      Otros temas de interes que no son indispensables en el hacking, pero conocerlos
                      puede ambliar mayormente el conocimiento de estos temas relacionados.
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

          <Rutas_Configuracion />
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
              <Imagen width={50} src="./github.png" alt="imagen github" />
            </Enlace>


            <Enlace target="_blank" href="https://www.youtube.com/@fravelz">
              <Imagen width={50} src="./youtube.png" alt="imagen youtube" />
            </Enlace>
          </div>
        </div>

        <Texto className="text-center mt-5" select="none"><b>Ultima Actualizacion:</b> Nov 10 del 2025</Texto>
      </footer>
    </>
  )
}

export default App
