
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
                <b>Ruta:</b> con enfoque principal pentesting, normalmente es
                lo que ayuda a conseguir unas buenas bases en ciberseguridad y trabajo
                es esta área.
            </Texto>

            <Dividido secundario={<Animacion />}>
                <Texto>
                    <b>Información:</b> Cada sesión tiene un botón de resumen que dice "más información",
                    y está organizada en orden de temas.
                </Texto>

                <Texto>
                    <b>Errores:</b> Por ahora, falta información, y También hay secciones que no son legibles
                    en PC, pero son más o menos legibles en dispositivos móviles o pantallas similares.
                </Texto>

                <Texto>
                    Secciones como las que contienen tablas sin formateo o estilo,
                    secciones con estilos incompletos en PC, información poco clara o desordenada,
                    y secciones con información incompleta.
                </Texto>

                <Texto>
                    Todas las anteriores secciones —y muchas más— estarán en
                    construcción y mejoramiento continuo. ¡NOS VEMOS!
                </Texto>

                <Texto>....</Texto>
            </Dividido>
        </Estructura>
    );
};

export default Readme;
