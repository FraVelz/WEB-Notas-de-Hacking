
// * Componentes ************************************************************ //

import Titulo from "./componentes/titulo.jsx";
import Linea from "./componentes/linea.jsx";
import Lista from "./componentes/lista.jsx";
import Enlace from "./componentes/enlace.jsx";
import Texto from "./componentes/texto.jsx";
import Estructura from "./componentes/estructura.jsx";

function Readme() {
    return (
        <Estructura>
            <Titulo title="h1" className="text-center">
                Mi Aprendendizaje en Ciberseguridad!
            </Titulo>

            <Texto>¡Bienvenido y que tengas un buen viaje!</Texto>

            <Linea />

            <Titulo title="h2" className="lg:hidden">Temario</Titulo>

            <Titulo title="h2">Bienvenida y Cosas previas a tener en cuenta dentro de cada seccion</Titulo>

            <Texto>
                <b>Ruta:</b> con enfoque principal pentesting, normalmente es
                lo que ayuda a conseguir unas buenas bases en ciberseguridad y trabajo
                es esta área.
            </Texto>

            <Texto>
                Por ahora hay secciones que no son legibles en pc, pero son mas o menos legibles
                en dispositivos moviles o dimensiones de pantalla similar a dispositivos moviles.
            </Texto>

            <Texto>Hay otras secciones que contienen mas que todo tablas que les falta un formateo y 
                estilo, como tambien otro tipo de elementos, haciendo que estos no sean suficientemente 
                legibles o desordenados :v
            </Texto>
       </Estructura>
    );
};

export default Readme;
