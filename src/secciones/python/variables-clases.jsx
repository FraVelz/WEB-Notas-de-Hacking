import Enlace from "../../componentes/atomos/enlace.jsx";
import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../../componentes/organismos/estructura.jsx";
import Linea from "../../componentes/atomos/linea.jsx";
import Lista from "../../componentes/moleculas/lista.jsx";
import Texto from "./../../componentes/atomos/texto.jsx";
import Titulo from "../../componentes/moleculas/titulo.jsx";
import { Tabla, TablaCabezera, TablaFila, TablaUnica } from "../../componentes/moleculas/tabla.jsx";
import Codigo from "../../componentes/moleculas/codigo.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#variables-protegidas-y-privadas-en-clases">Variables
        protegidas y privadas en clases</Enlace >
        <Lista>
          <li><Enlace href="#1-self_variable-un-guion-bajo">1. self._variable (un guion
            bajo)</Enlace ></li>
          <li><Enlace href="#2-self__variable-doble-guion-bajo">2. self.__variable
            (doble guion bajo)</Enlace ></li>
          <li><Enlace href="#en-resumen">En resumen</Enlace ></li>
        </Lista>
      </li>
    </Lista>
  );
}

function nameabcd({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" id="variables-protegidas-y-privadas-en-clases">Variables protegidas
          y privadas en clases</Titulo>
        <Linea />

        <TemarioCompleto temario={Temario} />

        <Titulo title="h2" id="self._variable-un-guion-bajo">1. self._variable (un guion
          bajo)</Titulo>
        <Texto>Por <strong>convención</strong>, el <strong>guion bajo simple
          _</strong> indica que el atributo es <strong>“protegido”
            (protected)</strong>, o sea:</Texto>
        <blockquote>
          <Texto>“No lo uses directamente fuera de la clase, aunque *puedes- hacerlo
            sí realmente quieres”.</Texto>
        </blockquote>
        <Texto>Python <strong>no bloquea</strong> su acceso; es solo una
          <strong>advertencia entre programadores</strong>.
        </Texto>
        <Codigo code={`class Persona:
def __init__(self, nombre):
self._nombre = nombre  # protegido

p = Persona("Ana")
print(p._nombre)  # 😅 Funciona, pero no deberías accederlo así`} language="python" />
        <Linea />
        <Titulo title="h2" id="self.__variable-doble-guion-bajo">2. self.__variable (doble
          guion bajo)</Titulo>
        <Texto>El <strong>doble guion bajo __</strong> activa el
          mecanismo de <strong>name mangling</strong> o “ofuscación de
          nombre”.</Texto>
        <Texto>Eso significa que Python <strong>cambia internamente el nombre del
          atributo</strong> para evitar que se sobrescriba o se acceda fácilmente
          desde fuera de la clase.</Texto>
        <Texto>Por ejemplo:</Texto>
        <Codigo code={`class Persona:
def __init__(self, nombre):
self.__nombre = nombre  # privado (name mangling)

p = Persona("Luis")

print(p.__nombre)  # ❌ Error: AttributeError`} language="python" />
        <Texto>Pero internamente Python lo guarda así</Texto>
        <Codigo code={`print(p._Persona__nombre)  # ✅ Luis`} language="python" />
        <Texto>En otras palabras:</Texto>
        <Lista>
          <li>No lo vuelve <em>totalmente privado</em>, pero
            <strong>dificulta</strong> su acceso externo.
          </li>
          <li>Se usa para <strong>evitar colisiones de nombres</strong> en clases
            hijas (herencia) y <strong>proteger la integridad interna</strong>.</li>
        </Lista>
        <Linea />
        <Titulo title="h2" id="en-resumen">En resumen</Titulo>
        <Tabla>
          <TablaCabezera headers={["Notación", "Nombre", "Protección", "Accesible desde fuera", "Uso común"]} />

          <tbody>
            <TablaFila>
              <TablaUnica>self.variable</TablaUnica>
              <TablaUnica>Pública</TablaUnica>
              <TablaUnica>❌ No protegida</TablaUnica>
              <TablaUnica>✅ Sí</TablaUnica>
              <TablaUnica>Atributos normales</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>self._variable</TablaUnica>
              <TablaUnica>Protegida</TablaUnica>
              <TablaUnica>⚠️ Semiprivada</TablaUnica>
              <TablaUnica>✅ Sí (por convención, no tocar)</TablaUnica>
              <TablaUnica>Uso interno o en subclases</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>self.__variable</TablaUnica>
              <TablaUnica>Privada (name mangling)</TablaUnica>
              <TablaUnica>✅ Más protegida</TablaUnica>
              <TablaUnica>🚫 No directamente</TablaUnica>
              <TablaUnica>Evitar acceso desde fuera o sobrescritura en herencia</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>
      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}
export default nameabcd;
