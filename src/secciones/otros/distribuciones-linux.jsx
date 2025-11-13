import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../../componentes/organismos/estructura.jsx";

import Enlace from "../../componentes/atomos/enlace.jsx";
import Linea from "../../componentes/atomos/linea.jsx";
import Lista from "../../componentes/moleculas/lista.jsx";
import Texto from "./../../componentes/atomos/texto.jsx";
import Titulo from "../../componentes/moleculas/titulo.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#1-distribuciones-populares-en-ciberseguridad">1.
        Distribuciones populares en ciberseguridad</Enlace ></li>
      <li><Enlace href="#2-por-qué-elegir-linux">2. ¿Por qué elegir Linux?</Enlace ></li>
      <li><Enlace href="#3-linux-en-ciberseguridad">3. Linux en
        ciberseguridad</Enlace ></li>
      <li><Enlace href="#5-principales-diferencias-entre-distribuciones">5.
        Principales diferencias entre distribuciones</Enlace ></li>
      <li><Enlace href="#6-debian">6. Debian</Enlace >
        <Lista>
          <li><Enlace href="#sistema-de-gestión-de-paquetes">Sistema de gestión de
            paquetes</Enlace ></li>
          <li><Enlace href="#aprendizaje-y-personalización">Aprendizaje y
            personalización</Enlace ></li>
          <li><Enlace href="#estabilidad-y-soporte">Estabilidad y soporte</Enlace ></li>
          <li><Enlace href="#seguridad-y-privacidad">Seguridad y privacidad</Enlace ></li>
        </Lista>
      </li>
      <li><Enlace href="#7-conclusión">7. Conclusión</Enlace ></li>
    </Lista>
  );
}

function nameabcd({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" id="distribuciones-de-linux">Distribuciones de Linux</Titulo>
        <Texto>Las <strong>distribuciones de Linux (o distros)</strong> son sistemas
          operativos basados ​​en el <strong>kernel de Linux</strong>.<br />
          Se utilizan para diversos fines, desde servidores y dispositivos
          integrados hasta ordenadores de escritorio y teléfonos móviles.</Texto>
        <Texto>Podemos pensar en las distribuciones de Linux como <strong>diferentes
          sucursales o franquicias</strong> de la misma empresa, cada una diseñada
          para atender mercados específicos o las preferencias de los
          usuarios.</Texto>
        <Texto>Aunque todas comparten los mismos <strong>componentes (empleados
          dedicados)</strong>, la misma <strong>arquitectura (estructura
            organizativa)</strong> y la misma <strong>filosofía (cultura
              corporativa)</strong>, cada una ofrece sus propios productos y servicios
          —es decir, <strong>paquetes de software y configuraciones
            personalizadas</strong>—, todo bajo la marca y los valores unificados de
          <strong>Linux</strong>.
        </Texto>

        <Linea />

        <TemarioCompleto temario={Temario} />

        <Titulo title="h2" id="distribuciones-populares-en-ciberseguridad">1. Distribuciones
          populares en ciberseguridad</Titulo>
        <Lista>
          <li><strong>ParrotOS</strong></li>
          <li><strong>Ubuntu</strong></li>
          <li><strong>Debian</strong></li>
          <li><strong>Raspberry Pi OS</strong></li>
          <li><strong>CentOS</strong></li>
          <li><strong>BackBox</strong></li>
          <li><strong>BlackArch</strong></li>
          <li><strong>Pentoo</strong></li>
        </Lista>
        <Linea />
        <Titulo title="h2" id="por-qué-elegir-linux">2. ¿Por qué elegir Linux?</Titulo>
        <Texto>Muchos usuarios eligen Linux para sus ordenadores de escritorio por
          su:</Texto>
        <Lista>
          <li><strong>Gratuidad</strong></li>
          <li><strong>Código abierto</strong></li>
          <li><strong>Alta personalización</strong></li>
        </Lista>
        <Texto><strong>Ubuntu</strong> y <strong>Fedora</strong> son dos opciones
          populares para usuarios de escritorio y principiantes.</Texto>
        <Texto>Linux también es ampliamente usado como <strong>sistema operativo de
          servidor</strong> por su:</Texto>
        <Lista>
          <li><strong>Seguridad</strong></li>
          <li><strong>Estabilidad</strong></li>
          <li><strong>Fiabilidad</strong></li>
        </Lista>
        <Texto>Además, ofrece <strong>actualizaciones frecuentes y
          regulares</strong>.</Texto>
        <Linea />
        <Titulo title="h2" id="linux-en-ciberseguridad">3. Linux en ciberseguridad</Titulo>
        <Texto>Como especialistas en <strong>ciberseguridad</strong>, preferimos
          Linux porque su <strong>código fuente está disponible</strong> para
          análisis y personalización.<br />
          Gracias a esto, podemos <strong>optimizar y configurar nuestras
            distribuciones</strong> según nuestras necesidades específicas.</Texto>
        <Texto>Podemos usar estas distribuciones en muchos entornos:</Texto>
        <Lista>
          <li>Servidores web</li>
          <li>Dispositivos móviles</li>
          <li>Sistemas integrados</li>
          <li>Computación en la nube</li>
          <li>Computación de escritorio</li>
        </Lista>
        <Linea />
        <Titulo title="h2" id="principales-diferencias-entre-distribuciones">5. Principales
          diferencias entre distribuciones</Titulo>
        <Texto>Las diferencias entre las distintas distribuciones de Linux radican
          en:</Texto>
        <Lista>
          <li>Los <strong>paquetes incluidos</strong></li>
          <li>La <strong>interfaz de usuario</strong></li>
          <li>Las <strong>herramientas disponibles</strong></li>
        </Lista>
        <Texto><strong>Kali Linux</strong> es la distribución más popular entre los
          especialistas en ciberseguridad, pues incluye una amplia gama de
          <strong>herramientas y paquetes enfocados en la seguridad</strong>.
        </Texto>
        <Lista>
          <li><strong>Ubuntu</strong> → muy usado en entornos de escritorio.<br />
          </li>
          <li><strong>Debian</strong> → ideal para servidores y sistemas
            embebidos.<br />
          </li>
          <li><strong>Red Hat Enterprise Linux</strong> y <strong>CentOS</strong>
            → populares en entornos empresariales.</li>
        </Lista>
        <Linea />
        <Titulo title="h2" id="debian">6. Debian</Titulo>
        <Texto><strong>Debian</strong> es una distribución de Linux ampliamente
          utilizada y respetada, conocida por su <strong>estabilidad</strong> y
          <strong>fiabilidad</strong>.<br />
          Se utiliza en diversos entornos: ordenadores de escritorio, servidores y
          sistemas embebidos.
        </Texto>
        <Titulo title="h3" id="sistema-de-gestión-de-paquetes">Sistema de gestión de
          paquetes</Titulo>
        <Texto>Debian utiliza el sistema <strong>APT (Advanced Package
          Tool)</strong> para gestionar actualizaciones y parches de
          seguridad.<br />
          Este sistema permite mantener el sistema actualizado mediante la
          <strong>descarga e instalación automática de actualizaciones de
            seguridad</strong>, tanto de forma <strong>manual</strong> como
          <strong>automática</strong>.
        </Texto>
        <Titulo title="h3" id="aprendizaje-y-personalización">Aprendizaje y
          personalización</Titulo>
        <Texto>Debian puede tener una <strong>curva de aprendizaje más
          pronunciada</strong> que otras distribuciones, pero se considera una de
          las más <strong>flexibles y personalizables</strong>.</Texto>
        <Texto>Aunque su configuración puede ser compleja, ofrece un
          <strong>excelente control del sistema</strong>, lo cual es muy valorado
          por usuarios avanzados.
        </Texto>
        <blockquote>
          <Texto>Cuanto más control tengamos sobre un sistema Linux, más complejo
            puede parecer,<br />
            pero esa complejidad solo refleja las enormes posibilidades que
            ofrece.</Texto>
        </blockquote>
        <Texto>Sin un aprendizaje profundo, podríamos dedicar mucho más tiempo a
          configurar tareas simples que a aprender unos pocos comandos con
          profundidad.</Texto>
        <Titulo title="h3" id="estabilidad-y-soporte">Estabilidad y soporte</Titulo>
        <Texto>La <strong>estabilidad y la fiabilidad</strong> son los principales
          puntos fuertes de Debian.<br />
          Esta distribución ofrece <strong>versiones con soporte a largo plazo
            (LTS)</strong> que proporcionan actualizaciones y parches de seguridad
          por hasta <strong>cinco años</strong>.</Texto>
        <Texto>Esto es esencial para <strong>servidores</strong> y sistemas que
          deben funcionar <strong>24/7</strong>.</Texto>
        <Texto>Aunque en ocasiones ha presentado vulnerabilidades, la comunidad de
          Debian responde rápidamente con <strong>parches y actualizaciones de
            seguridad</strong>.</Texto>
        <Titulo title="h3" id="seguridad-y-privacidad">Seguridad y privacidad</Titulo>
        <Texto>Debian tiene un fuerte compromiso con la <strong>seguridad</strong> y
          la <strong>privacidad</strong>, y cuenta con un historial muy sólido en
          estos aspectos.</Texto>
        <Linea />
        <Titulo title="h2" id="conclusión">7. Conclusión</Titulo>
        <Texto><strong>Debian</strong> es una distribución de Linux <strong>versátil
          y confiable</strong>, ampliamente utilizada en múltiples entornos.<br />
          Su estabilidad, fiabilidad y compromiso con la seguridad la convierten
          en una opción muy atractiva, especialmente para el ámbito de la
          <strong>ciberseguridad</strong>, como también su <strong>gran
            comunidad</strong>.
        </Texto>

        <Linea />

        <Texto><strong>Autor:</strong> Fravelz<br />
          <strong>Colaborador:</strong> <span className="citation" data-cites="studentethical">@studentethical</span> (Student
          Ethical)
        </Texto>
      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}
export default nameabcd;
