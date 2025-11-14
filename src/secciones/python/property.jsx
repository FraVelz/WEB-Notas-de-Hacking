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
      <li><Enlace href="#decorador-property">Decorador <span className="citation" data-cites="property">@property</span></Enlace >
        <Lista>
          <li><Enlace href="#qué-hace-property-en-python">¿Qué hace
            @property en Python?</Enlace ></li>
          <li><Enlace href="#ejemplo-básico-sin-property">Ejemplo básico sin
            @property</Enlace ></li>
          <li><Enlace href="#con-property">Con @property</Enlace ></li>
          <li><Enlace href="#agregando-un-setter-para-modificar-el-valor">Agregando un
            <strong>setter</strong> para modificar el valor</Enlace ></li>
          <li><Enlace href="#también-existe-el-deleter-opcional">También existe el
            deleter (opcional)</Enlace ></li>
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
        <Titulo title="h1" id="decorador-property">Decorador <span className="citation" data-cites="property">@property</span></Titulo>
        <Texto>@property se usa para <strong>encapsular
          atributos</strong>, <strong>añadir validaciones o lógica
            interna</strong>, pero sin cambiar la forma natural de acceder o
          modificar una variable.</Texto>
        <Linea />

        <TemarioCompleto temario={Temario} />

        <Titulo title="h2" id="qué-hace-property-en-python">¿Qué hace @property en
          Python?</Titulo>
        <Texto>El decorador <strong>@property</strong> convierte un
          <strong>método de una clase</strong> en un <strong>atributo “solo de
            lectura”</strong> (al menos inicialmente).
        </Texto>
        <Texto>Sirve para <strong>controlar cómo se accede a un atributo</strong>,
          pero permitiendo que el código <strong>parezca estar accediendo
            directamente a una variable</strong>.</Texto>
        <Texto>En otras palabras:</Texto>
        <blockquote>
          <Texto>Permite usar <em>métodos</em> como sí fueran <em>atributos</em>,
            <strong>sin cambiar la sintaxis de acceso</strong>.
          </Texto>
        </blockquote>
        <Linea />
        <Titulo title="h2" id="ejemplo-básico-sin-property">Ejemplo básico sin
          @property
        </Titulo>
        <Codigo code={`class Persona:
def __init__(self, nombre):
self.__nombre = nombre  # atributo privado

def get_nombre(self):
return self.__nombre`} language="python" />
        <Texto>Uso:</Texto>
        <Codigo code={`p = Persona("Ana")
print(p.get_nombre())  # ✅ Funciona`} language="python" />
        <Texto>Pero se ve <em>feo</em> tener que escribir .get_nombre()
          cada vez. Ahí entra @property.</Texto>
        <Linea />
        <Titulo title="h2" id="con-property">Con @property</Titulo>
        <Codigo code={`class Persona:
def __init__(self, nombre):
self.__nombre = nombre

@property
def nombre(self):
return self.__nombre`} language="python" />
        <Texto>Uso:</Texto>
        <Codigo code={`p = Persona("Luis")
print(p.nombre)  # ✅ Sin paréntesis, parece un atributo`} language="python" />
        <Lista>
          <li>Python llama automáticamente al método nombre()
            cuando escribes p.nombre.</li>    <li>Es solo de lectura por ahora (no se puede cambiar el valor
              directamente).</li>  </Lista>
        <Linea />
        <Titulo title="h2" id="agregando-un-setter-para-modificar-el-valor">Agregando un
          <strong>setter</strong> para modificar el valor
        </Titulo>
        <Codigo code={`class Persona:
def __init__(self, nombre):
self.__nombre = nombre

@property
def nombre(self):
return self.__nombre

@nombre.setter
def nombre(self, nuevo_nombre):
if len(nuevo_nombre) > 0:
self.__nombre = nuevo_nombre
else:
print("❌ El nombre no puede estar vacío.")`} language="python" />
        <Texto>Uso:</Texto>
        <Codigo code={`p = Persona("Carlos")
print(p.nombre)   # ✅ Getter
p.nombre = "Andrés"  # ✅ Setter
print(p.nombre)   # Andrés
p.nombre = ""     # ❌ El nombre no puede estar vacío.`} language="python" />
        <Linea />
        <Titulo title="h2" id="también-existe-el-deleter-opcional">También existe el deleter
          (opcional)</Titulo>
        <Codigo code={`@nombre.deleter
def nombre(self):
print("Eliminando el nombre...")
del self.__nombre`} language="python" />
        <Linea />
        <Titulo title="h2" id="en-resumen">En resumen</Titulo>
        <Tabla>
          <TablaCabezera headers={["Decorador", "Función", "Qué hace"]} />

          <tbody>
            <TablaFila>
              <TablaUnica>@property</TablaUnica>
              <TablaUnica>Getter</TablaUnica>
              <TablaUnica>Devuelve el valor (lectura)</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>@atributo.setter</TablaUnica>
              <TablaUnica>Setter</TablaUnica>
              <TablaUnica>Modifica el valor (escritura)</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>@atributo.deleter</TablaUnica>
              <TablaUnica>Deleter</TablaUnica>
              <TablaUnica>Elimina el atributo</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>
      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}
export default nameabcd;
