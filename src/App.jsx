import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Readme from "./readme.jsx";


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
      justify-between p-2
      bg-gray-800
      border-b-2 border-gray-700
      select-none
      ">
        <div className="
        flex items-center gap-4
        select-none
        ">
          <img
          className="
          w-14 h-14
          rounded-full
          object-cover
          border-2 border-gray-400
          "
          src="/public/logo-fravelz.jpg" alt="Logo de fravelz" draggable="false" />

          <h1 className="font-bold text-2xl">Fravelz</h1>
        </div>
 
        <div className="text-right">
          <p>...</p>
          <h2 className="text-xl">Notas de hacking</h2>
        </div>
    </header>

      <main className="
      p-4
      bg-gray-900
      min-h-screen
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
      block
      bg-gray-950
      ">
        <p>Autor: Fravelz</p>
        <p>Contacto: (discord) fravelz</p>ua
        <p>Ultima Actualizacion: </p>
      </footer>
    </>
 )
}

export default App
