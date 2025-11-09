import Estructura, { TemarioCompleto, TemarioAsideCompleto } from "../../componentes/estructura";

import Titulo from "../../componentes/titulo";
import Enlace from "../../componentes/enlace";
import Lista from "../../componentes/lista";
import Linea from "../../componentes/linea";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#1">1. “Hackear, redes sociales, aplicaciones y juegos”</Enlace></li>
      <li><Enlace href="#2">2. “A mí no me van a hackear porque no soy importante”</Enlace></li>
      <li><Enlace href="#3">3. “Antivirus = seguridad total”</Enlace></li>
      <li><Enlace href="#4">4. “Si uso Mac o Linux, no necesito preocuparme”</Enlace></li>
      <li><Enlace href="#5">5. “Las contraseñas largas son imposibles de hackear”</Enlace></li>
      <li><Enlace href="#6">6. “El modo incógnito me hace anónimo”</Enlace></li>
      <li><Enlace href="#7">7. “Las VPN son 100% seguras y anónimas”</Enlace></li>
      <li><Enlace href="#8">8. “Los hackers son todos criminales”</Enlace></li>
      <li><Enlace href="#9">9. “La ciberseguridad es solo cosa de técnicos”</Enlace></li>
      <li><Enlace href="#10">10. “Me pueden hackear si saben mi IP”</Enlace></li>
    </Lista>
  );
}


function Mitos({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" className="text-center">Desmintiendo mitos de
          la ciberseguridad</Titulo>

        <TemarioCompleto temario={Temario} />

        <Linea />

        <Titulo title="h2" id="1">1. “Hackear, redes sociales, aplicaciones y juegos”</Titulo>

        <Lista>
          <li><strong>Mito:</strong> Que los hackers son capaces de hackear
            redes sociales, aplicaciones y juegos.</li>
          <li><strong>Realidad:</strong> Es posible, y <strong>eso esta
            legalmente penada</strong>, estás rompiendo código o/y entrado a un
            servicio en el que no tienes acceso, y en casi todos los países de habla
            hispana, tiene leyes en contra de estas acciones, antes de preguntar, y
            no andar pidiendo favores ilegales, en las comunidades.
          </li>
        </Lista>

        <Linea />

        <Titulo title="h2" id="2">2. “A mí no me van a hackear porque no soy importante”</Titulo>

        <Lista>
          <li><strong>Mito:</strong> Solo los famosos, empresas grandes o
            gobiernos son objetivo de ataque.</li>
          <li><strong>Realidad:</strong> Los ciberdelincuentes atacan a
            cualquiera. Muchas veces usan ataques masivos (phishing, malware) sin
            importar quién seas. Tu información personal siempre tiene valor tenlo
            siempre en cuenta.</li>
        </Lista>

        <Linea />

        <Titulo title="h2" id="3">3. “Antivirus = seguridad total”</Titulo>

        <Lista>
          <li><strong>Mito:</strong> Tener un antivirus instalado basta para
            estar protegido.</li>        <li><strong>Realidad:</strong> El antivirus ayuda, pero no es
              infalible. Hoy los ataques incluyen ingeniería social, phishing y
              explotación de vulnerabilidades que el antivirus no detiene.</li>      </Lista>
        <Linea />

        <Titulo title="h2" id="4">4. “Si uso Mac o
          Linux, no necesito preocuparme”</Titulo>

        <Lista>
          <li><strong>Mito:</strong> Solo Windows es vulnerable.</li>        <li><strong>Realidad:</strong> Aunque Windows sea más atacado por ser
            popular, todos los sistemas operativos tienen vulnerabilidades. Mac y
            Linux también son objetivo, sobre todo en entornos empresariales y
            servidores.</li>      </Lista>

        <Linea />

        <Titulo title="h2" id="5">5. “Las
          contraseñas largas son imposibles de hackear”</Titulo>

        <Lista>
          <li><strong>Mito:</strong> Una contraseña de muchas letras te hace
            invencible.</li>        <li><strong>Realidad:</strong> Si la contraseña es predecible
              (<code>1234567890</code>, <code>qwertyuiop</code> o frases comunes),
            puede caer rápido ante ataques de diccionario o ingeniería social. Lo
            importante es que sea <strong>única, larga y compleja</strong>.</li>      </Lista>
            
        <Linea />

        <Titulo title="h2" id="6">6. “El modo incógnito me hace
          anónimo”</Titulo>

        <Lista>
          <li><strong>Mito:</strong> Navegar en incógnito significa que nadie
            me puede rastrear.</li>        <li><strong>Realidad:</strong> El modo incógnito solo evita que tu
              navegador guarde el historial localmente. Tu proveedor de internet, las
              páginas web y tu red aún pueden rastrear lo que haces.</li>      </Lista>
        <Linea />
        <Titulo title="h2" id="7">7. “Las VPN son 100% seguras
          y anónimas”</Titulo>
        <Lista>
          <li><strong>Mito:</strong> Usar una VPN significa que nadie puede
            vigilarme.</li>        <li><strong>Realidad:</strong> Una VPN cifra tu conexión y oculta tu
              IP, pero no evita malware, phishing ni que el proveedor de la VPN guarde
              registros de tu actividad.</li>      </Lista>
        <Linea />
        <Titulo title="h2" id="8">8. “Los hackers son todos
          criminales”</Titulo>
        <Lista>
          <li><strong>Mito:</strong> Hacker = delincuente.</li>        <li><strong>Realidad:</strong> Existen hackers éticos (white hats)
            que ayudan a encontrar fallos y mejorar la seguridad. El problema son
            los atacantes maliciosos (black hats), entonces todos los hackers no son
            ciberdelincuente.</li>      </Lista>

        <Linea />

        <Titulo title="h2" id="9">9. “La
          ciberseguridad es solo cosa de técnicos”</Titulo>

        <Lista>
          <li><strong>Mito:</strong> Solo los expertos en TI deben
            preocuparse.</li>        <li><strong>Realidad:</strong> La seguridad depende de todos. El
              error humano (dar clic en un link falso, usar contraseñas débiles,
              compartir información sensible) es la puerta más común para un
              ataque.</li>      </Lista>

        <Linea />

        <Titulo title="h2" id="10">10. “Me pueden hackear si
          saben mi IP”</Titulo>

        <Lista>
          <li><strong>Mito:</strong> Me pueden hackear si saben mi IP.</li>        <li><strong>Realidad:</strong> IP (Internet Protocol, dirección que
            identifica tu sistema en el internet), obtener la IP de alguien no es
            ilegal, y si se puede geo localizar con la IP, pero no es preciso uno
            puede saber la ciudad del lugar de la IP, pero no da más precisión, y
            también pueden obtener el proveedor de internet, además que fuera de
            esto no se puede hacer nada más, aunque si haces algo ilegal te podrían
            solicitar una orden judicial a tu proveedor de internet para
            investigarte o geo localizarte precisamente con todos tus datos, nombre,
            dirección de la casa, entre otros datos.</li>      </Lista>
      </Estructura>

      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}

export default Mitos;
