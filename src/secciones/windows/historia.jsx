import Titulo from "./../../componentes/titulo.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Linea from "./../../componentes/linea.jsx";

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="historia">Historia</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><a href="#historia">Historia</a>
          <Lista>
            <li><a href="#temario">Temario</a>
              <Lista>
                <li><a href="#1-orígenes-windows-10-a-3x-1985-1994">1. Orígenes: Windows
                  1.0 a 3.x (1985-1994)</a></li>
                <li><a href="#2-windows-95-a-98-1995-2000">2. Windows 95 a 98
                  (1995-2000)</a></li>
                <li><a href="#3-windows-me-y-windows-2000-2000-2001">3. Windows ME y
                  Windows 2000 (2000-2001)</a></li>
                <li><a href="#4-windows-xp-2001-2007">4. Windows XP (2001-2007)</a></li>
                <li><a href="#5-windows-vista-2007-2009">5. Windows Vista
                  (2007-2009)</a></li>
                <li><a href="#6-windows-7-2009-2015">6. Windows 7 (2009-2015)</a></li>
                <li><a href="#7-windows-8-y-81-2012-2015">7. Windows 8 y 8.1
                  (2012-2015)</a></li>
                <li><a href="#8-windows-10-2015-2025">8. Windows 10 (2015-2025)</a></li>
                <li><a href="#9-windows-11-2021-presente">9. Windows 11
                  (2021-presente)</a></li>
              </Lista>
            </li>
          </Lista>
        </li>
      </Lista>
      <Texto><a href="./../readme.md#3-windows">Regresar a la guía
        principal</a></Texto>
      <Linea />
      <Titulo title="h3" id="orígenes-windows-1.0-a-3.x-1985-1994">1. Orígenes: Windows 1.0 a
        3.x (1985-1994)</Titulo>
      <Lista>
        <li><strong>Windows 1.0 (1985):</strong> Primer intento de Microsoft
          de crear una <strong>interfaz gráfica de usuario (GUI)</strong> sobre
          MS-DOS. Muy básico, con ventanas que no se podían superponer, solo en
          mosaico.</li>    <li><strong>Windows 2.0 (1987):</strong> Mejoras gráficas, soporte
            para superposición de ventanas, popularizó atajos de teclado como Ctrl+C
            y Ctrl+V.</li>    <li><strong>Windows 3.0 (1990) y 3.1 (1992):</strong> Éxito
              comercial. Mejor gestión de memoria, interfaz más atractiva, soporte
              para aplicaciones como Word y Excel. Comenzó a desplazar a MS-DOS como
              plataforma principal de PC.</li>  </Lista>
      <Linea />
      <Titulo title="h3" id="windows-95-a-98-1995-2000">2. Windows 95 a 98 (1995-2000)</Titulo>
      <Lista>
        <li><strong>Windows 95:</strong> Revolucionó la interfaz con el
          <strong>menú Inicio</strong>, la barra de tareas y el “explorador de
          archivos”. Integró multitarea y soporte para <strong>plug and
            play</strong> (detectar hardware automáticamente). Fue un gran éxito
          comercial.
        </li>    <li><strong>Windows 98:</strong> Mejoras en la estabilidad y soporte
          para Internet Explorer. Introdujo más funciones de hardware y
          multimedia.</li>  </Lista>
      <Linea />
      <Titulo title="h3" id="windows-me-y-windows-2000-2000-2001">3. Windows ME y Windows
        2000 (2000-2001)</Titulo>
      <Lista>
        <li><strong>Windows 2000:</strong> Orientado a empresas, más estable
          que Windows 98, basado en Windows NT, con mejor seguridad y soporte de
          redes.</li>    <li><strong>Windows ME (Millennium Edition):</strong> Intentó mejorar
            la experiencia multimedia de usuarios domésticos, pero fue criticado por
            inestabilidad.</li>  </Lista>
      <Linea />
      <Titulo title="h3" id="windows-xp-2001-2007">4. Windows XP (2001-2007)</Titulo>
      <Lista>
        <li>Uno de los sistemas más populares de Microsoft.</li>    <li>Basado en <strong>Windows NT</strong>, combinaba estabilidad de
          2000 con facilidad de uso de ME.</li>    <li>Introdujo interfaz <strong>Luna</strong>, soporte de redes
            mejorado y mayor compatibilidad de software.</li>    <li>Duró muchos años en uso debido a su estabilidad y
              compatibilidad.</li>  </Lista>
      <Linea />
      <Titulo title="h3" id="windows-vista-2007-2009">5. Windows Vista (2007-2009)</Titulo>
      <Lista>
        <li>Mejoras en seguridad (UAC), gráficos (Aero) y búsqueda
          rápida.</li>    <li>Fue criticado por <strong>requerimientos altos de
            hardware</strong> y lentitud en PCs antiguos.</li>  </Lista>
      <Linea />
      <Titulo title="h3" id="windows-7-2009-2015">6. Windows 7 (2009-2015)</Titulo>
      <Lista>
        <li>Mejor desempeño y estabilidad que Vista.</li>
        <li>Interfaz refinada, más ligera y popular.</li>
        <li>Considerado uno de los mejores sistemas de Microsoft por facilidad
          de uso y rendimiento.</li>
      </Lista>
      <Linea />
      <Titulo title="h3" id="windows-8-y-8.1-2012-2015">7. Windows 8 y 8.1 (2012-2015)</Titulo>
      <Lista>
        <li>Enfocado en <strong>pantallas táctiles</strong> y dispositivos
          híbridos.</li>
        <li>Eliminó el menú Inicio clásico → generó confusión entre
          usuarios.</li>
        <li>Windows 8.1 reintrodujo algunas funciones clásicas y mejoró la
          interfaz.</li>
      </Lista>
      <Linea />
      <Titulo title="h3" id="windows-10-2015-2025">8. Windows 10 (2015-2025)</Titulo>
      <Lista>
        <li>Microsoft volvió al enfoque de escritorio tradicional.</li>
        <li>Introdujo <strong>actualizaciones continuas</strong>, Cortana
          (asistente virtual) y unificación entre PCs y tablets.</li>
        <li>Compatible con apps universales y mejoras en seguridad y
          rendimiento.</li>
      </Lista>
      <Linea />
      <Titulo title="h3" id="windows-11-2021-presente">9. Windows 11 (2021-presente)</Titulo>
      <Lista>
        <li>Nuevo diseño <strong>más moderno y minimalista</strong>: esquinas
          redondeadas, menú Inicio centrado.</li>    <li>Mejor integración con <strong>trabajo remoto</strong>, juegos
            (DirectX 12 Ultimate) y rendimiento en hardware moderno.</li>    <li>Enfocado en productividad, colaboración y seguridad.</li>  </Lista>
      <Linea />
      <Texto><strong>Resumen:</strong></Texto>
      <Texto>Windows ha evolucionado de un simple entorno gráfico sobre MS-DOS a
        un <strong>sistema operativo moderno, multiplataforma y seguro</strong>,
        adaptándose a las necesidades de usuarios domésticos, empresas y gamers.
        Cada versión buscó combinar <strong>usabilidad, estabilidad y nuevas
          tecnologías</strong>, aunque no todas fueron exitosas en su momento.</Texto>
      <Linea />
      <Texto><a href="./../readme.md#3-windows">Regresar a la guía
        principal</a></Texto>
      <blockquote>
        <Texto><strong>Autor:</strong> Fravelz</Texto>
      </blockquote>
    </>
  );
}
export default nameabcd;
