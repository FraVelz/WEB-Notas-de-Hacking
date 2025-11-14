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
      <li><Enlace href="#getters-y-setters">Getters y Setters</Enlace >
        <Lista>
          <li><Enlace href="#qué-son-los-getters-y-setters">¿Qué son los getters y
            setters?</Enlace ></li>
          <li><Enlace href="#ejemplo-básico">Ejemplo básico</Enlace ></li>
          <li><Enlace href="#pero-python-tiene-una-forma-más-elegante--property">Pero
            Python tiene una forma más elegante →
            <strong>@property</strong></Enlace >
            <Lista>
              <li><Enlace href="#ejemplo-con-property">Ejemplo con
                @property</Enlace ></li>
            </Lista>
          </li>
          <li><Enlace href="#ventajas-de-usar-property">Ventajas de usar <span className="citation"
            data-cites="property">@property</span></Enlace ></li>
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
        <Titulo title="h1" id="getters-y-setters">Getters y Setters</Titulo>
        <Linea />

        <TemarioCompleto temario={Temario} />

        <Titulo title="h2" id="qué-son-los-getters-y-setters">¿Qué son los getters y
          setters?</Titulo>
        <Lista>
          <li><strong>Getter:</strong> método que <strong>obtiene</strong>
            (lee) el valor de un atributo.</li>    <li><strong>Setter:</strong> método que <strong>establece</strong>
            (modifica) el valor de un atributo.</li>  </Lista>
        <Texto>Se usan para <strong>controlar el acceso a los atributos</strong> de
          una clase, especialmente cuando son “protegidos” o “privados”.</Texto>
        <Linea />
        <Titulo title="h2" id="ejemplo-básico">Ejemplo básico</Titulo>
        <Codigo code={`class Persona:
def __init__(self, nombre):
self.__nombre = nombre  # atributo privado

# Getter
def get_nombre(self):
return self.__nombre

# Setter
def set_nombre(self, nuevo_nombre):
if len(nuevo_nombre) > 0:
self.__nombre = nuevo_nombre
else:
print("❌ El nombre no puede estar vacío.")`} language="python" />
        <Texto>Uso:</Texto>
        <Codigo code={`p = Persona("Ana")
print(p.get_nombre())  # ✅ Ana

p.set_nombre("Luis")
print(p.get_nombre())  # ✅ Luis

p.set_nombre("")  # ❌ El nombre no puede estar vacío.`} language="python" />
        <Linea />
        <Titulo title="h2" id="pero-python-tiene-una-forma-más-elegante-property">Pero Python
          tiene una forma más elegante →
          <strong>@property</strong>
        </Titulo>
        <Texto>Python permite crear <em>getters</em> y <em>setters</em> de manera
          más limpia y natural usando <strong>decoradores</strong>.</Texto>
        <Titulo title="h3" id="ejemplo-con-property">Ejemplo con @property</Titulo>
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
        <Texto>Ahora se usa como sí fuera un <strong>atributo normal</strong>:</Texto>
        <Codigo code={`p = Persona("Carlos")

print(p.nombre)   # ✅ Llama automáticamente al getter
p.nombre = "Andrés"  # ✅ Llama automáticamente al setter

print(p.nombre)   # ✅ Andrés
p.nombre = ""     # ❌ El nombre no puede estar vacío.`} language="python" />
        <Linea />
        <Titulo title="h2" id="ventajas-de-usar-property">Ventajas de usar <span className="citation" data-cites="property">@property</span></Titulo>
        <Texto>✅ No cambias la forma de usar los atributos. ✅ Puedes añadir
          validaciones sin romper el código existente. ✅ Encapsulas correctamente
          los datos. ✅ Evitas accesos o cambios indebidos.</Texto>
        <Linea />
        <Titulo title="h2" id="en-resumen">En resumen</Titulo>
        <Tabla>
          <TablaCabezera headers={["Tipo", "Decorador", "Se usa para", "Ejemplo"]} />

          <tbody>
            <TablaFila>
              <TablaUnica><strong>Getter</strong></TablaUnica>
              <TablaUnica>@property</TablaUnica>
              <TablaUnica>Leer un valor</TablaUnica>
              <TablaUnica>obj.atributo</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica><strong>Setter</strong></TablaUnica>
              <TablaUnica>@atributo.setter</TablaUnica>
              <TablaUnica>Asignar un valor</TablaUnica>
              <TablaUnica>obj.atributo = valor</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>
      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}
export default nameabcd;
