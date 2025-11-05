import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Readme from "./readme.jsx";

import Enlace from "./componentes/enlace.jsx";
import Imagen from "./componentes/imagen.jsx";
import Texto from "./componentes/texto.jsx";

function Inicio() {
  return <h1>Bienvenido al inicio</h1>;
}

function Blog() {
  return <h1>Mis notas y artículos</h1>;
}

function Acerca() {
  return <h1>Sobre mí</h1>;
}

function App() {
  return (
    <>
      <header className="
      flex items-center gap-4
      justify-between p-2 px-4
      bg-gray-800
      text-gray-100
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
            border-2 border-gray-400
            "
          />

          <h1 className="font-bold text-2xl">Fravelz</h1>
        </div>
 
        <div className="text-right">
          <p>...</p>
          <h2 className="text-xl">Notas de hacking</h2>
        </div>
    </header>

      <main className="
      p-4
      ">
        <Readme />

        {/* <BrowserRouter>
          <aside className="
          bg-gray-950
          rounded-md
          p-4 mb-4
          ">
            <nav>
              <Link className="block" to="/">Inicio</Link>
              <Link className="block" to="/blog">Blog</Link> 
              <Link className="block" to="/acerca">Acerca</Link>
            </nav>
          </aside>

          <Routes>
            <Route path="/" element={<Readme />} />

            <Route path="/blog" element={<Blog />} />
            <Route path="/acerca" element={<Acerca />} />
          </Routes>
        </BrowserRouter>
   */}

      </main>

      <footer className="
      text-gray-400
      bg-gray-900
      p-5 gap-3
      ">
        <div className="
        flex items-center
        justify-between
        ">
          <div classname="">
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
