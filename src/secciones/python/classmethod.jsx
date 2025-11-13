import Enlace from "../../componentes/atomos/enlace.jsx";
import Linea from "../../componentes/atomos/linea.jsx";
import Lista from "../../componentes/moleculas/lista.jsx";
import Texto from "./../../componentes/atomos/texto.jsx";
import Titulo from "../../componentes/moleculas/titulo.jsx";
import { Tabla, TablaCabezera, TablaFila, TablaUnica } from "../../componentes/moleculas/tabla.jsx";
import Codigo from "../../componentes/moleculas/codigo.jsx";

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="decorador-classmethod">Decorador <span className="citation" data-cites="classmethod">@classmethod</span></Titulo>
      <Texto>@classmethod permite crear funciones que pueden
        <strong>acceder o modificar el estado de la clase</strong>, sin
        necesidad de crear un objeto.
      </Texto>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><Enlace href="#decorador-classmethod">Decorador <span className="citation"
          data-cites="classmethod">@classmethod</span></Enlace >
          <Lista>
            <li><Enlace href="#temario">Temario</Enlace ></li>
            <li><Enlace href="#ejemplo">Ejemplo</Enlace ></li>
            <li><Enlace href="#diferencias-entre-tipos-de-métodos">Diferencias entre
              tipos de métodos</Enlace ></li>
            <li><Enlace href="#en-resumen">En resumen</Enlace ></li>
          </Lista>
        </li>
      </Lista>
      <Texto><Enlace href="./../readme.md#5-python">Regresar a la Guía
        Principal</Enlace ></Texto>
      <Linea />
      <Titulo title="h2" id="ejemplo">Ejemplo</Titulo>
      <Codigo code={`class Persona:
poblacion = 0  # Atributo de clase

def __init__(self, nombre):
self.nombre = nombre
Persona.poblacion += 1

@classmethod
def cuantos_hay(cls):
return f"Hay (cls.poblacion) personas registradas."

# Podemos llamar al método sin crear objetos:
print(Persona.cuantos_hay())  # Hay 0 personas registradas.

# Crear algunos objetos:
p1 = Persona("Ana")
p2 = Persona("Luis")

# Llamar de nuevo:
print(Persona.cuantos_hay())  # Hay 2 personas registradas.`} language="python" />
      <Linea />
      <Titulo title="h2" id="diferencias-entre-tipos-de-métodos">Diferencias entre tipos de
        métodos</Titulo>
      <Tabla>
  <TablaCabezera headers={["Tipo de método", "Primer parámetro", "Accede a atributos de instancia", "Accede a atributos de clase", "Se llama sin crear objeto"]} />

  <tbody>
    <TablaFila>
      <TablaUnica><strong>Normal (def)</strong></TablaUnica>
      <TablaUnica>self</TablaUnica>
      <TablaUnica>✅ Sí</TablaUnica>
      <TablaUnica>✅ (vía self.__class__)</TablaUnica>
      <TablaUnica>❌ No</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>@classmethod</strong></TablaUnica>
      <TablaUnica>cls</TablaUnica>
      <TablaUnica>❌ No</TablaUnica>
      <TablaUnica>✅ Sí</TablaUnica>
      <TablaUnica>✅ Sí</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>@staticmethod</strong></TablaUnica>
      <TablaUnica>ninguno</TablaUnica>
      <TablaUnica>❌ No</TablaUnica>
      <TablaUnica>❌ No</TablaUnica>
      <TablaUnica>✅ Sí</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
      <Linea />
      <Titulo title="h2" id="en-resumen">En resumen</Titulo>
      <Lista>
        <li>@staticmethod: método
          <strong>independiente</strong>, solo usa los parámetros que se le
          pasen.
        </li>    <li>@classmethod: método <strong>ligado a la
          clase</strong>, puede <strong>usar o modificar atributos de la
            clase</strong> y se puede llamar sin crear una instancia.</li>  </Lista>
      <Linea />
      <Texto><Enlace href="./../readme.md#5-python">Regresar a la Guía
        Principal</Enlace ></Texto>
      <blockquote>
        <Texto><strong>Autor:</strong> Fravelz</Texto>
      </blockquote>
    </>
  );
}
export default nameabcd;
