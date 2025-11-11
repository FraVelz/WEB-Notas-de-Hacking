
// * Componentes ************************************************************ //

import Titulo from "./componentes/titulo.jsx";
import Linea from "./componentes/linea.jsx";
import Lista from "./componentes/lista.jsx";
import Enlace from "./componentes/enlace.jsx";
import Texto from "./componentes/texto.jsx";
import Estructura from "./componentes/estructura.jsx";
import Animacion from "./animacion.jsx";

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
                <b>Ruta:</b> con enfoque principal pentesting, normalmente es
                lo que ayuda a conseguir unas buenas bases en ciberseguridad y trabajo
                es esta área.
            </Texto>

            <div className="
            flex flex-col lg:flex-row
            justify-center align-middle
            ">
                <div className="
                bg-gray-900
                rounded-2xl
                hyphens-auto hyphens: auto;
                wrap-break-word
                p-4
                ">
                    <Texto>
                        <b>Informacion:</b> Cada session tiene un boton de un resumen que dice mas informacion, y esta organizada en orden de temas.
                    </Texto>

                    <Texto>
                        <b>Errores:</b> Por ahora hay secciones que no son legibles en pc, pero son mas o menos legibles
                        en dispositivos moviles o dimensiones de pantalla similar a dispositivos moviles.
                    </Texto>

                    <Texto>
                        Secciones como las que contienen tablas que les falta un formateo y
                        estilo, secciones que les hace falta estilos incompletos en pantallas de pc, secciones con informacion poco clara o desordenada o no olganizada correctamente y secciones con informacion incompleta.
                    </Texto>

                    <Texto>
                        Todas las anteriores secciones :v, y mucho mas estaran en 
                        construccion y mejoramiento continuo, NOS VEMOSS!!!
                    </Texto>

                    <Texto>....</Texto>
                </div>

                <div className="flex justify-center lg:w-96 lg:h-96">
                    <Animacion />
                </div>
            </div>
        </Estructura>
    );
};

export default Readme;
