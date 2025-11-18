
// * Componentes ************************************************************ //

import Titulo from "./componentes/moleculas/titulo.jsx";
import Linea from "./componentes/atomos/linea.jsx";
import Texto from "./componentes/atomos/texto.jsx";
import Estructura from "./componentes/organismos/estructura.jsx";
import Animacion from "./componentes/atomos/animacion.jsx";
import Dividido from "./componentes/moleculas/dividido.jsx";

function Readme() {
    return (
        <Estructura>
            <Titulo title="h1" className="text-center">
                Mi Aprendendizaje en Ciberseguridad!
            </Titulo>

            <Texto>¡Bienvenido y que tengas un buen viaje!</Texto>

            <Linea />

            <Titulo title="h2">Bienvenida y Cosas previas a tener en cuenta dentro de cada seccion</Titulo>

            <Texto>
                <b>Ruta:</b> con enfoque principal <b>pentesting</b>, normalmente es
                lo que ayuda a conseguir unas buenas bases en ciberseguridad y trabajo
                es esta área. <b>(no olvidar que simplemente son notas, gastar dinero en aprender es una inversion,
                y esto no remplaza ninguna ruta de aprendizaje, de cursos de pago, o de plataformas especializadas
                como -hack the box- o -try hack me-).</b>
            </Texto>

            <Dividido secundario={<Animacion />}>
                <Texto>
                    <b>Información:</b> Cada sesión tiene un botón de resumen que dice "más información",
                    y está organizada en orden de temas.
                </Texto>

                <Texto>
                    <b>Errores:</b> Por ahora, falta información, y ahora ya que se arreglaron los anteriores, 
                    errores mensionados en las actualizaciones pasadas, ahora falta organizar mejor la información, 
                    y despues previamente se estara agregando mas informacion, todo esto de a poco a poco...
                </Texto>

                <Texto>
                    Todas las anteriores —y muchas más— estarán en
                    construcción y mejoramiento continuo. ¡NOS VEMOS!
                </Texto>

                <Texto>....</Texto>
            </Dividido>
        </Estructura>
    );
};

export default Readme;
