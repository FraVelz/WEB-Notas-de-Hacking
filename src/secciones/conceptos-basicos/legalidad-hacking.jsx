import Titulo from "../../componentes/titulo";
import Lista from "../../componentes/lista";
import Linea from "../../componentes/linea";
import Texto from "../../componentes/texto";
import Estructura from "../../componentes/estructura";

function Legalidad_Hacking({ }) {
  return (
    <Estructura>
      <Titulo title="h1" id="legalidad-en-el-hacking">Legalidad en el Hacking</Titulo>
      <Texto>Entender los <strong>aspectos legales y éticos del hacking</strong>
        es <strong>fundamental</strong> antes de practicar pentesting o
        cualquier tipo de actividad relacionada con ciberseguridad.</Texto>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li><a href="#legalidad-en-el-hacking">Legalidad en el Hacking</a>
          <Lista>
            <li><a href="#temario">Temario</a></li>
            <li><a href="#1-qué-es-el-hacking-ético">1. ¿Qué es el hacking
              ético?</a></li>
            <li><a href="#2-aspectos-legales-del-hacking">2. Aspectos legales del
              hacking</a>
              <Lista>
                <li><a href="#en-colombia-por-ejemplo">En Colombia (por
                  ejemplo)</a></li>
              </Lista>
            </li>
            <li><a href="#3-aspectos-éticos-del-hacking">3. Aspectos éticos del
              hacking</a>
              <Lista>
                <li><a href="#principios-éticos-básicos">Principios éticos
                  básicos</a></li>
              </Lista>
            </li>
            <li><a href="#4-ejemplos-prácticos">4. Ejemplos prácticos</a></li>
            <li><a href="#5-tipos-de-hackers-según-la-ética">5. Tipos de hackers
              según la ética</a></li>
            <li><a href="#6-en-resumen">6. En resumen</a></li>
          </Lista>
        </li>
      </Lista>
      <Texto><a href="./../readme.md#0-conceptos-básicos">Ir a la guía
        principal</a></Texto>
      <Linea />
      <Titulo title="h2" id="qué-es-el-hacking-ético">1. ¿Qué es el hacking ético?</Titulo>
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
      <Titulo title="h2" id="aspectos-legales-del-hacking">2. Aspectos legales del
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
      <table>
        <thead>
          <tr>
            <th>Delito</th>
            <th>Artículo</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Acceso abusivo a un sistema informático</strong></td>
            <td>Art. 269A</td>
            <td>Entrar sin permiso a un sistema o red.</td>
          </tr>
          <tr>
            <td><strong>Obstaculización ilegítima de sistema informático o
              red</strong></td>
            <td>Art. 269B</td>
            <td>Bloquear o afectar el funcionamiento de un sistema.</td>
          </tr>
          <tr>
            <td><strong>Interceptación de datos informáticos</strong></td>
            <td>Art. 269C</td>
            <td>Escuchar o capturar comunicaciones o datos privados.</td>
          </tr>
          <tr>
            <td><strong>Daño informático</strong></td>
            <td>Art. 269D</td>
            <td>Borrar, alterar o deteriorar información.</td>
          </tr>
          <tr>
            <td><strong>Uso de software malicioso (malware)</strong></td>
            <td>Art. 269E</td>
            <td>Crear, distribuir o usar programas para atacar.</td>
          </tr>
          <tr>
            <td><strong>Violación de datos personales</strong></td>
            <td>Art. 269F</td>
            <td>Acceder o divulgar información privada.</td>
          </tr>
        </tbody>
      </table>
      <Texto><strong>Sanciones:</strong> Pueden incluir <strong>penas de
        prisión</strong> y <strong>multas económicas</strong> dependiendo de la
        gravedad del caso.</Texto>
      <Linea />
      <Titulo title="h2" id="aspectos-éticos-del-hacking">3. Aspectos éticos del hacking</Titulo>
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
      <Titulo title="h2" id="ejemplos-prácticos">4. Ejemplos prácticos</Titulo>
      <table>
        <thead>
          <tr>
            <th>Situación</th>
            <th>Legalidad</th>
            <th>Ética</th>
            <th>Comentario</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Escanear tu propia red doméstica</td>
            <td>✅ Legal</td>
            <td>✅ Ético</td>
            <td>Aprendizaje personal o seguridad propia.</td>
          </tr>
          <tr>
            <td>Hacer pentesting en una empresa con permiso firmado</td>
            <td>✅ Legal</td>
            <td>✅ Ético</td>
            <td>Práctica profesional aprobada.</td>
          </tr>
          <tr>
            <td>Escanear puertos de una empresa sin permiso</td>
            <td>❌ Ilegal</td>
            <td>❌ No ético</td>
            <td>Se considera acceso no autorizado.</td>
          </tr>
          <tr>
            <td>Encontrar una falla y venderla en la dark web</td>
            <td>❌ Ilegal</td>
            <td>❌ No ético</td>
            <td>Se convierte en cibercrimen.</td>
          </tr>
          <tr>
            <td>Reportar una vulnerabilidad responsablemente</td>
            <td>✅ Legal</td>
            <td>✅ Ético</td>
            <td>Ejemplo de conducta profesional.</td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Titulo title="h2" id="tipos-de-hackers-según-la-ética">5. Tipos de hackers según la
        ética</Titulo>
      <Texto>Bueno esto lo vimos en el otro archivo en el de conceptos básicos,
        pero no esta de más, repasarlo.</Texto>
      <table>
        <thead>
          <tr>
            <th>Tipo de hacker</th>
            <th>Descripción</th>
            <th>Ejemplo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>🏳️ <strong>White Hat (Sombrero Blanco)</strong></td>
            <td>Usa sus conocimientos para proteger sistemas.</td>
            <td>Pentester o investigador de seguridad.</td>
          </tr>
          <tr>
            <td>⚫ <strong>Black Hat (Sombrero Negro)</strong></td>
            <td>Usa sus habilidades para atacar o robar.</td>
            <td>Ciberdelincuente, estafador digital.</td>
          </tr>
          <tr>
            <td>⚪⚫ <strong>Gray Hat (Sombrero Gris)</strong></td>
            <td>Descubre vulnerabilidades sin permiso, pero no con mala
              intención.</td>
            <td>Encuentra una falla y la reporta sin dañar, aunque sin
              autorización.</td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Titulo title="h2" id="en-resumen">6. En resumen</Titulo>
      <table>
        <thead>
          <tr>
            <th>Tema</th>
            <th>Legal</th>
            <th>Ético</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hacer pentesting con autorización</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Acceder a sistemas ajenos</td>
            <td>❌</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>Aprender hacking en entornos controlados (laboratorios, VMs,
              TryHackMe, HackTheBox)</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Publicar datos o contraseñas de otros</td>
            <td>❌</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>Reportar fallas de forma responsable</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Texto><a href="./../readme.md#0-conceptos-básicos">Ir a la guía
        principal</a></Texto>
      <blockquote>
        <Texto><strong>Autor:</strong> Fravelz</Texto>
      </blockquote>
    </Estructura>
  );
}

export default Legalidad_Hacking;
