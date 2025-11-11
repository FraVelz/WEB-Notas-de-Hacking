import { Tabla, TablaCabezera, TablaFila, TablaUnica } from "../../componentes/tabla";
import Enlace from "./../../componentes/enlace";
import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "./../../componentes/estructura";
import Linea from "./../../componentes/linea";
import Lista from "./../../componentes/lista";
import Texto from "./../../componentes/texto";
import Titulo from "./../../componentes/titulo";
function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#1-qué-es-el-hacking-ético">1. ¿Qué es el hacking
        ético?</Enlace ></li>
      <li><Enlace href="#2-aspectos-legales-del-hacking">2. Aspectos legales del
        hacking</Enlace >
        <Lista>
          <li><Enlace href="#en-colombia-por-ejemplo">En Colombia (por
            ejemplo)</Enlace ></li>
        </Lista>
      </li>
      <li><Enlace href="#3-aspectos-éticos-del-hacking">3. Aspectos éticos del
        hacking</Enlace >
        <Lista>
          <li><Enlace href="#principios-éticos-básicos">Principios éticos
            básicos</Enlace ></li>
        </Lista>
      </li>
      <li><Enlace href="#4-ejemplos-prácticos">4. Ejemplos prácticos</Enlace ></li>
      <li><Enlace href="#5-tipos-de-hackers-según-la-ética">5. Tipos de hackers
        según la ética</Enlace ></li>
      <li><Enlace href="#6-en-resumen">6. En resumen</Enlace ></li>
    </Lista>
  );
}

function Legalidad_Hacking({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" className="text-center">Legalidad en el Hacking</Titulo>

        <TemarioCompleto temario={Temario} />

        <Texto>Entender los <strong>aspectos legales y éticos del hacking</strong>
          es <strong>fundamental</strong> antes de practicar pentesting o
          cualquier tipo de actividad relacionada con ciberseguridad.</Texto>

        <Linea />

        <Titulo title="h2" id="1-qué-es-el-hacking-ético">1. ¿Qué es el hacking ético?</Titulo>

        <Texto>El <strong>hacking ético</strong> es el uso de las <strong>mismas
          técnicas que los hackers maliciosos</strong>, pero <strong>con permiso y
            con el objetivo de mejorar la seguridad</strong> de sistemas
          informáticos.</Texto>
        <Texto>Un <strong>hacker ético (white hat)</strong> busca vulnerabilidades
          para <strong>reportarlas y ayudar a corregirlas</strong>, no para
          aprovecharse de ellas.</Texto>
        <Texto>→ En resumen:</Texto>
        <blockquote>
          <Texto><strong>Hacker ético:</strong> protege.<br />
            <strong>Hacker malicioso (más conocidos como
              ciberdelincuentes):</strong> ataca.
          </Texto>
        </blockquote>
        <Linea />
        <Titulo title="h2" id="2-aspectos-legales-del-hacking">2. Aspectos legales del
          hacking</Titulo>
        <Texto>Las leyes varían según el país, pero en general <strong>acceder o
          manipular sistemas sin autorización es un delito</strong>. En casi todos
          los países existen leyes que penalizan:</Texto>
        <Lista>
          <li>Acceso no autorizado a sistemas informáticos.</li>
          <li>Robo o destrucción de datos.</li>
          <li>Espionaje o interceptación de comunicaciones.</li>
          <li>Propagación de malware.</li>
          <li>Suplantación de identidad o fraude digital.</li>
        </Lista>
        <Titulo title="h3" id="en-colombia-por-ejemplo">En Colombia (por ejemplo)</Titulo>
        <Texto>El <strong>Código Penal Colombiano (Ley 1273 de 2009)</strong>
          protege la “información y los datos” en el ciberespacio. Algunos delitos
          contemplados son:</Texto>

        <Tabla>
          <TablaCabezera headers={["Delito", "Artículo", "Descripción"]} />

          <tbody>
            <TablaFila>
              <TablaUnica><strong>Acceso abusivo a un sistema informático</strong></TablaUnica>
              <TablaUnica>Art. 269A</TablaUnica>
              <TablaUnica>Entrar sin permiso a un sistema o red.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica><strong>Obstaculización ilegítima de sistema informático o
                red</strong></TablaUnica>
              <TablaUnica>Art. 269B</TablaUnica>
              <TablaUnica>Bloquear o afectar el funcionamiento de un sistema.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica><strong>Interceptación de datos informáticos</strong></TablaUnica>
              <TablaUnica>Art. 269C</TablaUnica>
              <TablaUnica>Escuchar o capturar comunicaciones o datos privados.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica><strong>Daño informático</strong></TablaUnica>
              <TablaUnica>Art. 269D</TablaUnica>
              <TablaUnica>Borrar, alterar o deteriorar información.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica><strong>Uso de software malicioso (malware)</strong></TablaUnica>
              <TablaUnica>Art. 269E</TablaUnica>
              <TablaUnica>Crear, distribuir o usar programas para atacar.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica><strong>Violación de datos personales</strong></TablaUnica>
              <TablaUnica>Art. 269F</TablaUnica>
              <TablaUnica>Acceder o divulgar información privada.</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>

        <Texto><strong>Sanciones:</strong> Pueden incluir <strong>penas de
          prisión</strong> y <strong>multas económicas</strong> dependiendo de la
          gravedad del caso.</Texto>
        <Linea />
        <Titulo title="h2" id="3-aspectos-éticos-del-hacking">3. Aspectos éticos del hacking</Titulo>
        <Texto>Un hacker ético debe seguir un conjunto de <strong>principios morales
          y profesionales</strong>, llamados <strong>“código ético del
            hacker”</strong> o <strong>“ética del pentester”</strong>.</Texto>

        <Titulo title="h3" id="principios-éticos-básicos">Principios éticos básicos</Titulo>

        <ol type="1">
          <li><strong>Actuar siempre con autorización.</strong> Nunca realizar
            pruebas o ataques sin permiso explícito del propietario del
            sistema.</li>        <li><strong>No causar daño.</strong> No alterar, borrar o exponer
              datos de los sistemas que se prueban.</li>        <li><strong>Respetar la privacidad.</strong> Si se accede a
                información sensible, mantenerla confidencial.</li>        <li><strong>Reportar las vulnerabilidades de forma
                  responsable.</strong> Informar al dueño del sistema, no publicarlas sin
            su consentimiento.</li>        <li><strong>No aprovecharse del conocimiento.</strong> El
              conocimiento de seguridad se usa para proteger, no para obtener
              beneficios ilegales o personales.</li>        <li><strong>Ser transparente y profesional.</strong> Mantener una
                relación honesta con los clientes o empresas y seguir las normas del
                contrato.</li>      </ol>
        <Linea />
        <Titulo title="h2" id="4-ejemplos-prácticos">4. Ejemplos prácticos</Titulo>

        <Tabla>
          <TablaCabezera headers={["Situación", "Legalidad", "Ética", "Resumen"]} />

          <tbody>
            <TablaFila>
              <TablaUnica>Escanear tu propia red doméstica</TablaUnica>
              <TablaUnica>✅ Legal</TablaUnica>
              <TablaUnica>✅ Ético</TablaUnica>
              <TablaUnica>Aprendizaje personal o seguridad propia.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Hacer pentesting en una empresa con permiso firmado</TablaUnica>
              <TablaUnica>✅ Legal</TablaUnica>
              <TablaUnica>✅ Ético</TablaUnica>
              <TablaUnica>Práctica profesional aprobada.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Escanear puertos de una empresa sin permiso</TablaUnica>
              <TablaUnica>❌ Ilegal</TablaUnica>
              <TablaUnica>❌ No ético</TablaUnica>
              <TablaUnica>Se considera acceso no autorizado.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Encontrar una falla y venderla en la dark web</TablaUnica>
              <TablaUnica>❌ Ilegal</TablaUnica>
              <TablaUnica>❌ No ético</TablaUnica>
              <TablaUnica>Se convierte en cibercrimen.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Reportar una vulnerabilidad responsablemente</TablaUnica>
              <TablaUnica>✅ Legal</TablaUnica>
              <TablaUnica>✅ Ético</TablaUnica>
              <TablaUnica>Ejemplo de conducta profesional.</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>
        <Linea />
        <Titulo title="h2" id="5-tipos-de-hackers-según-la-ética">5. Tipos de hackers según la
          ética</Titulo>
        <Texto>Bueno esto lo vimos en el otro archivo en el de conceptos básicos,
          pero no esta de más, repasarlo.</Texto>

        <Tabla>
          <TablaCabezera headers={["Tipo de hacker", "Descripción", "Ejemplo"]} />

          <tbody>
            <TablaFila>
              <TablaUnica>🏳️ <strong>White Hat (Sombrero Blanco)</strong></TablaUnica>
              <TablaUnica>Usa sus conocimientos para proteger sistemas.</TablaUnica>
              <TablaUnica>Pentester o investigador de seguridad.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>⚫ <strong>Black Hat (Sombrero Negro)</strong></TablaUnica>
              <TablaUnica>Usa sus habilidades para atacar o robar.</TablaUnica>
              <TablaUnica>Ciberdelincuente, estafador digital.</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>⚪⚫ <strong>Gray Hat (Sombrero Gris)</strong></TablaUnica>
              <TablaUnica>Descubre vulnerabilidades sin permiso, pero no con mala
                intención.</TablaUnica>
              <TablaUnica>Encuentra una falla y la reporta sin dañar, aunque sin
                autorización.</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>

        <Linea />

        <Titulo title="h2" id="6-en-resumen">6. En resumen</Titulo>

        <Tabla>
          <TablaCabezera headers={["Tema", "Legal", "Ético"]} />

          <tbody>
            <TablaFila>
              <TablaUnica>Hacer pentesting con autorización</TablaUnica>
              <TablaUnica>✅</TablaUnica>
              <TablaUnica>✅</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Acceder a sistemas ajenos</TablaUnica>
              <TablaUnica>❌</TablaUnica>
              <TablaUnica>❌</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Aprender hacking en entornos controlados (laboratorios, VMs,
                TryHackMe, HackTheBox)</TablaUnica>
              <TablaUnica>✅</TablaUnica>
              <TablaUnica>✅</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Publicar datos o contraseñas de otros</TablaUnica>
              <TablaUnica>❌</TablaUnica>
              <TablaUnica>❌</TablaUnica>
            </TablaFila>
            <TablaFila>
              <TablaUnica>Reportar fallas de forma responsable</TablaUnica>
              <TablaUnica>✅</TablaUnica>
              <TablaUnica>✅</TablaUnica>
            </TablaFila>
          </tbody>
        </Tabla>
      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}

export default Legalidad_Hacking;
