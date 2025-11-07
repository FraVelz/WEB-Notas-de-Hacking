import Readme from "./readme.jsx";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { lazy } from "react";

// * Apartados Especificos ************************************************** //

const Conceptos_Generales = lazy(() => import("./secciones/anonimato/conceptos-generales.jsx"));
const Definicion = lazy(() => import("./secciones/anonimato/definicion.jsx"));
const Filtraciones = lazy(() => import("./secciones/anonimato/filtraciones.jsx"));
const Huella_Digital = lazy(() => import("./secciones/anonimato/huella-digital.jsx"));
const User_Agent = lazy(() => import("./secciones/anonimato/user-agent.jsx"));

function Enlace_R({ children, to, className="" }){
  return (
    <Link className={className} to={to}>{children}</Link>
  );
}

function Inicio() {
  return <h1>Bienvenido al inicio</h1>;
}

function Blog() {
  return <h1>Mis notas y artículos</h1>;
}

function Acerca() {
  return <h1>Sobre mí</h1>;
}

// * Componentes ************************************************************ //

import Lista from "./componentes/lista.jsx";
import Enlace from "./componentes/enlace.jsx";
import Imagen from "./componentes/imagen.jsx";
import Texto from "./componentes/texto.jsx";

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

          <h1 className="font-bold text-2xl">Fravelz</h1>
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
          <aside className="
          h-fit
          lg:sticky lg:top-5
          lg:w-4/5 lg:min-w-72 lg:max-w-fit
          ">
            <nav className="
           bg-gray-900
           border-gray-700
            border-b-2 border-r-0
            lg:border-r-2 lg:border-b-0
            rounded-md
            p-4
            ">

              <Link className="block" to="/">Inicio</Link>

              <Lista className="">
                <details>
                  <summary>Conceptos Básicos</summary>

                  <Lista>
                    <li><Enlace href="#1-conceptos-básicos">Desmitiendo Mitos</Enlace></li>
                    <li><Enlace href="#1-conceptos-básicos">Conceptos Basicos</Enlace></li>
                    <li><Enlace href="#1-conceptos-básicos">Legalidad del Hacking</Enlace></li>
                  </Lista>
                </details>

                <details>
                  <summary>Virtualización</summary>

                  <Lista>
                    <li><Enlace href="#1-conceptos-básicos">Desmitiendo Mitos</Enlace></li>
                    <li><Enlace href="#1-conceptos-básicos">Conceptos Basicos</Enlace></li>
                    <li><Enlace href="#1-conceptos-básicos">Legalidad del Hacking</Enlace></li>
                  </Lista>
                </details>

                <details>
                  <summary>Linux y Bash Script</summary>

                  <Lista>
                    <li><Enlace href="#1-conceptos-básicos">Desmitiendo Mitos</Enlace></li>
                    <li><Enlace href="#1-conceptos-básicos">Conceptos Basicos</Enlace></li>
                    <li><Enlace href="#1-conceptos-básicos">Legalidad del Hacking</Enlace></li>

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
                </details>

                <details>
                  <summary>Windows</summary>

                  <Lista>
                    <li><Enlace href="#1-conceptos-básicos">Desmitiendo Mitos</Enlace></li>
                    <li><Enlace href="#1-conceptos-básicos">Conceptos Basicos</Enlace></li>
                    <li><Enlace href="#1-conceptos-básicos">Legalidad del Hacking</Enlace></li>
                  </Lista>
                </details>

                <details>
                  <summary>Redes</summary>

                  <Lista>
                    <li><Enlace href="#1-conceptos-básicos">Desmitiendo Mitos</Enlace></li>
                    <li><Enlace href="#1-conceptos-básicos">Conceptos Basicos</Enlace></li>
                    <li><Enlace href="#1-conceptos-básicos">Legalidad del Hacking</Enlace></li>
                  </Lista>
                </details>

                <details>
                  <summary>Python</summary>

                  <Lista>
                    <li><Enlace href="#1-conceptos-básicos">Desmitiendo Mitos</Enlace></li>
                    <li><Enlace href="#1-conceptos-básicos">Conceptos Basicos</Enlace></li>
                    <li><Enlace href="#1-conceptos-básicos">Legalidad del Hacking</Enlace></li>
                  </Lista>
                </details>

                <details>
                  <summary>Pentesting</summary>

                  <Lista>
                    <li><Enlace href="#1-conceptos-básicos">Desmitiendo Mitos</Enlace></li>
                    <li><Enlace href="#1-conceptos-básicos">Conceptos Basicos</Enlace></li>
                    <li><Enlace href="#1-conceptos-básicos">Legalidad del Hacking</Enlace></li>
                  </Lista>
                </details>

                <details>
                  <summary>OSINT</summary>

                  <Lista>
                    <li><Enlace href="#1-conceptos-básicos">Desmitiendo Mitos</Enlace></li>
                    <li><Enlace href="#1-conceptos-básicos">Conceptos Basicos</Enlace></li>
                    <li><Enlace href="#1-conceptos-básicos">Legalidad del Hacking</Enlace></li>
                  </Lista>
                </details>

                <details>
                  <summary>Privacidad y Anonimato</summary>

                  <Lista>
                    <li><Enlace_R to='/privacidad_y_anonimato'>Privacidad y Anonimato</Enlace_R></li>
                    <li><Enlace_R to='/huella_digital'>Huella Digital</Enlace_R></li>
                    <li><Enlace_R to='/user_agent'>User Agent</Enlace_R></li>
                    <li><Enlace_R to='/filtracion_de_datos'>Filtracion de datos</Enlace_R></li>
                  </Lista>
                </details>

                <details>
                  <summary>Información</summary>

                  <Lista>
                    <li><Enlace href="#1-conceptos-básicos">Desmitiendo Mitos</Enlace></li>
                    <li><Enlace href="#1-conceptos-básicos">Conceptos Basicos</Enlace></li>
                    <li><Enlace href="#1-conceptos-básicos">Legalidad del Hacking</Enlace></li>
                  </Lista>
                </details>
              </Lista>

              <Link className="block" to="/blog">Blog</Link>
              <Link className="block" to="/acerca">Acerca</Link>
            </nav>
          </aside>

          <Routes>
            <Route path="/" element={<Readme />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/acerca" element={<Acerca />} />

            <Route path='/privacidad_y_anonimato' element={<Conceptos_Generales />} />
            <Route path='/huella_digital' element={<Huella_Digital />} />
            <Route path='/user_agent' element={<User_Agent />} />
            <Route path='/filtracion_de_datos' element={<Filtraciones />} />
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

        <Texto className="text-center mt-5" select="none"><b>Ultima Actualizacion:</b> Nov 05 del 2025</Texto>
      </footer>
    </>
  )
}

export default App
