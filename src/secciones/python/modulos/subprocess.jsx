import Enlace from "../../../componentes/atomos/enlace.jsx";
import Linea from "../../../componentes/atomos/linea.jsx";
import Lista from "../../../componentes/moleculas/lista.jsx";
import Texto from "./../../../componentes/atomos/texto.jsx";
import Titulo from "../../../componentes/moleculas/titulo.jsx";
import { Tabla, TablaCabezera, TablaFila, TablaUnica } from "../../../componentes/moleculas/tabla.jsx";
import Codigo from "../../../componentes/moleculas/codigo.jsx";

function nameabcd({ }) {
  return (
    <>
      <Titulo title="h1" id="subprocess-en-python">Subprocess en Python</Titulo>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><Enlace href="#subprocess-en-python">Subprocess en Python</Enlace >
          <Lista>
            <li><Enlace href="#temario">Temario</Enlace ></li>
            <li><Enlace href="#qué-es-subprocess">¿Qué es subprocess?</Enlace ></li>
            <li><Enlace href="#1-diferencias-con-ossystem">1. Diferencias con
              os.system()</Enlace ></li>
            <li><Enlace href="#2-ejecutar-comandos-básicos">2. Ejecutar comandos
              básicos</Enlace ></li>
            <li><Enlace href="#3-capturar-la-salida-del-comando">3. Capturar la salida
              del comando</Enlace >
              <Lista>
                <li><Enlace href="#atributos-útiles">Atributos útiles</Enlace ></li>
              </Lista>
            </li>
            <li><Enlace href="#4-manejar-errores">4. Manejar errores</Enlace ></li>
            <li><Enlace href="#5-capturar-y-procesar-salida-directamente">5. Capturar y
              procesar salida directamente</Enlace ></li>
            <li><Enlace href="#6-enviar-entrada-al-proceso">6. Enviar entrada al
              proceso</Enlace ></li>
            <li><Enlace href="#7-ejecutar-múltiples-procesos-encadenados">7. Ejecutar
              múltiples procesos (encadenados)</Enlace ></li>
            <li><Enlace href="#8-popen-explicado-modo-avanzado">8. Popen explicado (modo
              avanzado)</Enlace ></li>
            <li><Enlace href="#9-ejecutar-en-segundo-plano">9. Ejecutar en segundo
              plano</Enlace ></li>
            <li><Enlace href="#10-consejos-de-seguridad">10. Consejos de
              seguridad</Enlace ></li>
            <li><Enlace href="#11-ejemplo-práctico-medir-tiempo-de-ejecución">11. Ejemplo
              práctico: medir tiempo de ejecución</Enlace ></li>
            <li><Enlace href="#12-ejemplo-completo-automatizador-de-sistema">12. Ejemplo
              completo: automatizador de sistema</Enlace ></li>
            <li><Enlace href="#13-resumen-general">13. Resumen general</Enlace ></li>
          </Lista>
        </li>
      </Lista>
      <Texto><Enlace href="./../../readme.md#5-python">Regresar a la Guía
        Principal</Enlace ></Texto>
      <Linea />
      <Titulo title="h2" id="qué-es-subprocess">¿Qué es subprocess?</Titulo>
      <Texto>subprocess (sub-proceso) permite ejecutar
        <strong>programas externos</strong> o <strong>comandos del sistema
          operativo</strong> desde Python.
      </Texto>
      <Texto>🔹 Ejemplo:</Texto>
      <Codigo code={`import subprocess

subprocess.run(["ls"])`} language="python" />
      <Texto>👉 Ejecuta el comando ls (en Linux/Mac) igual que sí lo
        escribieras en la terminal.</Texto>
      <Linea />
      <Titulo title="h2" id="diferencias-con-os.system">1. Diferencias con os.system()</Titulo>
      <Tabla>
  <TablaCabezera headers={["Característica", "os.system()", "subprocess"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>Devuelve la salida</TablaUnica>
      <TablaUnica>❌ No</TablaUnica>
      <TablaUnica>✅ Sí</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Control de errores</TablaUnica>
      <TablaUnica>❌ Limitado</TablaUnica>
      <TablaUnica>✅ Avanzado</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Interactuar con el proceso</TablaUnica>
      <TablaUnica>❌ No</TablaUnica>
      <TablaUnica>✅ Sí</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Seguridad</TablaUnica>
      <TablaUnica>🚫 Inseguro (interpreta shell)</TablaUnica>
      <TablaUnica>✅ Seguro (argumentos separados)</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
      <Linea />
      <Titulo title="h2" id="ejecutar-comandos-básicos">2. Ejecutar comandos básicos</Titulo>
      <Codigo code={`import subprocess

# Forma segura (lista de argumentos)
subprocess.run(["echo", "Hola desde Python!"])`} language="python" />
      <Texto>También puedes pasar shell=True (aunque menos
        seguro):</Texto>
      <Codigo code={`subprocess.run("echo Hola desde Python!", shell=True)`} language="python" />
      <Linea />
      <Titulo title="h2" id="capturar-la-salida-del-comando">3. Capturar la salida del
        comando</Titulo>
      <Texto>Para <strong>guardar el texto que produce el comando</strong>, usa
        capture_output=True:
      </Texto>
      <Codigo code={`resultado = subprocess.run(["ls"], capture_output=True, text=True)
print("Salida:", resultado.stdout)`} language="python" />
      <Titulo title="h3" id="atributos-útiles">Atributos útiles</Titulo>
      <Lista>
        <li>resultado.stdout → salida estándar (lo que imprime el
          comando)</li>
        <li>resultado.stderr → errores (sí los hay)</li>
        <li>resultado.returncode → código de salida (0 =
          correcto)</li>
      </Lista>
      <Linea />
      <Titulo title="h2" id="manejar-errores">4. Manejar errores</Titulo>
      <Texto>Sí quieres que el programa <strong>lance una excepción</strong>
        cuando el comando falle:</Texto>
      <Codigo code={`try:
subprocess.run(["ls", "/carpeta_que_no_existe"], check=True)
except subprocess.CalledProcessError as e:
print("Error al ejecutar el comando:", e)`} language="python" />
      <Linea />
      <Titulo title="h2" id="capturar-y-procesar-salida-directamente">5. Capturar y procesar
        salida directamente</Titulo>
      <Texto>Sí solo necesitas la salida (más cómodo que .run()):</Texto>
      <Codigo code={`salida = subprocess.check_output(["whoami"], text=True)
print("Usuario actual:", salida.strip())`} language="python" />
      <Texto>👉 Esto ejecuta el comando y <strong>devuelve la salida como
        string</strong>.</Texto>
      <Linea />
      <Titulo title="h2" id="enviar-entrada-al-proceso">6. Enviar entrada al proceso</Titulo>
      <Texto>Puedes <strong>enviar datos</strong> al proceso con
        input=:
      </Texto>
      <Codigo code={`resultado = subprocess.run(
["grep", "hola"],
input="hola mundo\nadiós mundo\n",
text=True,
capture_output=True
)
print(resultado.stdout)`} language="python" />
      <Texto>🔹 Resultado:</Texto>
      <Codigo code={`hola mundo`} language="bash" />
      <Linea />
      <Titulo title="h2" id="ejecutar-múltiples-procesos-encadenados">7. Ejecutar múltiples
        procesos (encadenados)</Titulo>
      <Texto>Puedes <strong>conectar la salida de un comando a otro</strong> como
        en una tubería (| en la terminal):</Texto>
      <Codigo code={`p1 = subprocess.Popen(["ls"], stdout=subprocess.PIPE)
p2 = subprocess.Popen(["grep", "py"], stdin=p1.stdout, stdout=subprocess.PIPE, text=True)

salida, _ = p2.communicate()
print("Archivos .py:\n", salida)`} language="python" />
      <Texto>👉 Aquí:</Texto>
      <Lista>
        <li>Popen() crea procesos manualmente.</li>
        <li>stdout=subprocess.PIPE permite conectar procesos.</li>
        <li>communicate() espera y obtiene la salida.</li>
      </Lista>
      <Linea />
      <Titulo title="h2" id="popen-explicado-modo-avanzado">8. Popen explicado (modo
        avanzado)</Titulo>
      <Texto>Popen es la clase base de subprocess, te da
        <strong>control total</strong> sobre el proceso.
      </Texto>
      <Codigo code={`from subprocess import Popen, PIPE

p = Popen(["ping", "-c", "2", "google.com"], stdout=PIPE, stderr=PIPE, text=True)
salida, error = p.communicate()

print("Salida:", salida)
print("Errores:", error)
print("Código de salida:", p.returncode)`} language="python" />
      <Linea />
      <Titulo title="h2" id="ejecutar-en-segundo-plano">9. Ejecutar en segundo plano</Titulo>
      <Texto>Sí no quieres que el programa espere:</Texto>
      <Codigo code={`subprocess.Popen(["vlc", "video.mp4"])`} language="python" />
      <Texto>Esto abrirá VLC <strong>sin bloquear</strong> el resto de tú
        script.</Texto>
      <Linea />
      <Titulo title="h2" id="consejos-de-seguridad">10. Consejos de seguridad</Titulo>
      <Texto>✅ <strong>Haz esto:</strong></Texto>
      <Codigo code={`subprocess.run(["ls", "/home"])`} language="python" />
      <Texto>🚫 <strong>Evita esto (riesgo de inyección):</strong></Texto>
      <Codigo code={`subprocess.run("ls /home && rm -rf /", shell=True)`} language="python" />
      <Texto>Usar shell=True puede ejecutar código malicioso sí la
        entrada del usuario no está validada.</Texto>
      <Linea />
      <Titulo title="h2" id="ejemplo-práctico-medir-tiempo-de-ejecución">11. Ejemplo
        práctico: medir tiempo de ejecución</Titulo>
      <Codigo code={`import subprocess
import time

inicio = time.time()
subprocess.run(["python3", "mi_script.py"])
fin = time.time()

print(f"Tiempo de ejecución: {fin - inicio:.2f} segundos")`} language="python" />
      <Linea />
      <Titulo title="h2" id="ejemplo-completo-automatizador-de-sistema">12. Ejemplo completo:
        automatizador de sistema</Titulo>
      <Codigo code={`import subprocess

comandos = [
["sudo", "apt", "update"],
["sudo", "apt", "upgrade", "-y"],
["sudo", "apt", "autoremove", "-y"]
]

for cmd in comandos:
print("Ejecutando:", " ".join(cmd))
resultado = subprocess.run(cmd, capture_output=True, text=True)
print(resultado.stdout)`} language="python" />
      <Texto>🧹 Esto ejecuta varios comandos del sistema uno tras otro y muestra
        su salida.</Texto>
      <Linea />
      <Titulo title="h2" id="resumen-general">13. Resumen general</Titulo>
      <Tabla>
  <TablaCabezera headers={["Función", "Qué hace"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>subprocess.run()</TablaUnica>
      <TablaUnica>Ejecuta un comando y espera que termine</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>subprocess.check_output()</TablaUnica>
      <TablaUnica>Devuelve solo la salida</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>subprocess.Popen()</TablaUnica>
      <TablaUnica>Crea un proceso controlado manualmente</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>stdout=PIPE</TablaUnica>
      <TablaUnica>Captura la salida estándar</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>stderr=PIPE</TablaUnica>
      <TablaUnica>Captura los errores</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>input=</TablaUnica>
      <TablaUnica>Envía datos al proceso</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>shell=True</TablaUnica>
      <TablaUnica>Ejecuta dentro de un shell (⚠️ inseguro)</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>check=True</TablaUnica>
      <TablaUnica>Lanza excepción sí falla</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
      <Linea />
      <Texto><Enlace href="./../../readme.md#5-python">Regresar a la Guía
        Principal</Enlace ></Texto>
      <blockquote>
        <Texto><strong>Autor:</strong> Fravelz</Texto>
      </blockquote>
    </>
  );
}

export default nameabcd;
