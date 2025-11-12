import Enlace from "../../componentes/atomos/enlace.jsx";
import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../../componentes/organismos/estructura.jsx";
import Linea from "../../componentes/atomos/linea.jsx";
import Lista from "../../componentes/moleculas/lista.jsx";
import Texto from "./../../componentes/atomos/texto.jsx";
import Titulo from "../../componentes/moleculas/titulo.jsx";
import { Tabla, TablaCabezera, TablaFila, TablaUnica } from "../../componentes/moleculas/tabla.jsx";

function Temario({ className = "" }) {
	return (
		<Lista className={className}>
			<li><Enlace href="#1">1. Internet: niveles o capas</Enlace ></li>
			<li>
				<Enlace href="#2">2. El anonimato digital</Enlace >
				<Lista>
					<li><Enlace href="#cómo-se-logra">Cómo se logra</Enlace ></li>
					<li><Enlace href="#buenas-prácticas-de-anonimato">Buenas prácticas de anonimato</Enlace ></li>
				</Lista>
			</li>
			<li><Enlace href="#3">3. Deep Web vs Dark Web</Enlace ></li>
			<li><Enlace href="#4">4. Legalidad y ética</Enlace ></li>
			<li><Enlace href="#5">5. Tecnologías principales</Enlace ></li>
			<li><Enlace href="#6">6. Riesgos de la Dark Web</Enlace ></li>
			<li><Enlace href="#7">7. Usos legítimos del anonimato y la Dark Web</Enlace ></li>
			<li>
				<Enlace href="#8">8. Qué es Privacidad</Enlace>
			</li>
			<li>
				<Enlace href="#9">9. Qué es Anonimato</Enlace>
			</li>
			<li>
				<Enlace href="#10">10. Diferencias clave entre privacidad y anonimato</Enlace>
			</li>
		</Lista >
	);
}

function Conceptos_Generales() {
	return (
		<>
			<Estructura>
				<Titulo title="h1" className="text-center">
					Conceptos Generales (privacidad, Anonimato y mucho más)
				</Titulo>

				<TemarioCompleto temario={Temario} />

				<Linea />

				<Titulo title="h2" id="1">1. Internet: niveles o capas</Titulo>

				<Texto>
					El Internet puede dividirse en tres niveles según la
					<strong>visibilidad y accesibilidad</strong> de la información:
				</Texto>
				<Tabla>
  <TablaCabezera headers={["Nivel", "Nombre", "Acceso", "Ejemplos", "Características"]} />

  <tbody>
    <TablaFila>
      <TablaUnica><strong>1</strong></TablaUnica>
      <TablaUnica><strong>Surface Web</strong> (Web superficial)</TablaUnica>
      <TablaUnica>Pública, indexada por Google, Bing, etc.</TablaUnica>
      <TablaUnica>YouTube, Wikipedia, Twitter</TablaUnica>
      <TablaUnica>Cualquiera puede acceder desde un navegador normal. Representa
								solo entre el <strong>4% y el 10%</strong> de toda la web.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>2</strong></TablaUnica>
      <TablaUnica><strong>Deep Web</strong></TablaUnica>
      <TablaUnica>Privada, no indexada</TablaUnica>
      <TablaUnica>Bases de datos académicas, correos, intranets, archivos médicos</TablaUnica>
      <TablaUnica>Requiere autenticación o enlaces directos. Es
								<strong>legal</strong> y se usa a diario. Ejemplo: Gmail, banca
								online, plataformas educativas.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>3</strong></TablaUnica>
      <TablaUnica><strong>Dark Web</strong></TablaUnica>
      <TablaUnica>Oculta, accesible solo con software especial</TablaUnica>
      <TablaUnica>Sitios .onion en TOR</TablaUnica>
      <TablaUnica>Usa redes anónimas cifradas. Contiene tanto foros y proyectos
								legítimos como actividades ilegales.</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>

				<Linea />

				<Titulo title="h2" id="2">2. El anonimato digital</Titulo>

				<Texto>
					El <strong>anonimato</strong> es la capacidad de
					<strong>ocultar tu identidad real</strong> (nombre, IP, ubicación, etc.)
					en Internet.
				</Texto>

				<Titulo title="h3" id="cómo-se-logra">Cómo se logra</Titulo>

				<Lista>
					<li>
						<strong>Red TOR (The Onion Router):</strong> red que enruta tus
						datos por varios nodos cifrados, haciendo casi imposible rastrear tú
						IP real.
					</li>
					<li>
						<strong>VPN (Red Privada Virtual):</strong> oculta tú IP y cifra tú
						conexión, pero depende del servidor VPN (no es totalmente anónima).
					</li>
					<li>
						<strong>Tails OS:</strong> sistema operativo que no deja rastros, se
						ejecuta desde USB, usa TOR por defecto.
					</li>
					<li>
						<strong>Whonix:</strong> sistema operativo centrado en anonimato,
						con máquinas virtuales separadas para red y trabajo.
					</li>
					<li>
						<strong>Cifrado extremo:</strong> usar PGP para mensajes, HTTPS, y
						mensajería cifrada (Signal, Session, etc.).
					</li>
				</Lista>

				<Titulo title="h3" id="buenas-prácticas-de-anonimato">Buenas prácticas de anonimato</Titulo>

				<Lista>
					<li>No usar tus correos o alias reales.</li>
					<li>No compartir fotos o metadatos.</li>
					<li>No usar redes sociales personales.</li>
					<li>
						Evitar mezclar identidad “real” con la anónima (por ejemplo, mismo
						nickname en ambos contextos).
					</li>
					<li>Desactivar JavaScript en TOR (reduce riesgo de exploits).</li>
					<li>
						No descargar archivos desde la Dark Web (podrían revelar tú IP).
					</li>
				</Lista>

				<Linea />

				<Titulo title="h2" id="3">3. Deep Web vs Dark Web</Titulo>

				<Tabla>
  <TablaCabezera headers={["Aspecto", "Deep Web", "Dark Web"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>Acceso</TablaUnica>
      <TablaUnica>Navegadores normales</TablaUnica>
      <TablaUnica>TOR u otras redes anónimas</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Legalidad</TablaUnica>
      <TablaUnica>Legal</TablaUnica>
      <TablaUnica>Puede tener contenido legal o ilegal</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Ejemplo</TablaUnica>
      <TablaUnica>Gmail, Google Drive, bases de datos privadas</TablaUnica>
      <TablaUnica>Sitios .onion, foros, mercados, servicios ocultos</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Propósito</TablaUnica>
      <TablaUnica>Privacidad, acceso restringido</TablaUnica>
      <TablaUnica>Anonimato total, libertad de expresión o actividades ilegales</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>

				<Linea />

				<Titulo title="h2" id="4">4. Legalidad y ética</Titulo>

				<Lista>
					<li>
						<strong>Usar la Deep Web o TOR es totalmente legal.</strong>
					</li>
					<li>
						Lo <strong>ilegal</strong> es acceder, comprar o distribuir
						contenido prohibido (drogas, armas, pornografía infantil, datos
						robados, etc.).
					</li>
					<li>
						Hay
						<strong>activistas, periodistas y agencias de inteligencia</strong>
						que usan la Dark Web para proteger fuentes o investigar delitos.
					</li>
					<li>
						También existen <strong>proyectos legítimos</strong>:

						<Lista>
							<li>SecureDrop (para denuncias anónimas a medios).</li>
							<li>Hidden Wiki (índice de sitios .onion).</li>
							<li>Foros de privacidad y criptografía.</li>
						</Lista>
					</li>
				</Lista>

				<Linea />

				<Titulo title="h2" id="5">5. Tecnologías principales</Titulo>

				<Tabla>
  <TablaCabezera headers={["Tecnología", "Función", "Detalles"]} />

  <tbody>
    <TablaFila>
      <TablaUnica><strong>TOR (The Onion Router)</strong></TablaUnica>
      <TablaUnica>Enrutamiento anónimo</TablaUnica>
      <TablaUnica>Cada nodo solo conoce el anterior y el siguiente. Sitios .onion
								son invisibles desde la web normal.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>I2P (Invisible Internet Project)</strong></TablaUnica>
      <TablaUnica>Red anónima alternativa</TablaUnica>
      <TablaUnica>Más rápida que TOR en conexiones internas.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>Freenet</strong></TablaUnica>
      <TablaUnica>Almacenamiento y comunicación anónima</TablaUnica>
      <TablaUnica>Basado en compartir fragmentos cifrados de información.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>Tails OS</strong></TablaUnica>
      <TablaUnica>Sistema operativo anónimo</TablaUnica>
      <TablaUnica>No guarda datos al apagar. Ideal para investigar o navegar seguro.</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica><strong>PGP (Pretty Good Privacy)</strong></TablaUnica>
      <TablaUnica>Cifrado de mensajes</TablaUnica>
      <TablaUnica>Permite enviar correos imposibles de leer sin la clave privada.</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>

				<Linea />

				<Titulo title="h2" id="6">6. Riesgos de la Dark Web</Titulo>

				<Lista>
					<li>
						<strong>Estafas:</strong> muchos vendedores falsos.
					</li>
					<li>
						<strong>Malware y exploits:</strong> descargas peligrosas.
					</li>
					<li>
						<strong>Contenido ilegal extremo:</strong> exposición psicológica
						grave.
					</li>
					<li>
						<strong>Rastreo por agencias:</strong> aunque TOR es seguro, los
						errores humanos exponen.
					</li>
					<li>
						<strong>Phishing o troyanos:</strong> muchos sitios buscan robar
						criptomonedas o identidad.
					</li>
				</Lista>

				<Linea />

				<Titulo title="h2" id="7">
					7. Usos legítimos del anonimato y la Dark Web
				</Titulo>

				<Lista>
					<li>Periodismo de investigación.</li>
					<li>Denuncias anónimas en países represivos.</li>
					<li>Privacidad de activistas o disidentes políticos.</li>
					<li>Intercambio de conocimiento técnico o científico sin censura.</li>
					<li>Acceso a información bloqueada por gobiernos.</li>
				</Lista>

				<Linea />

				<Titulo title="h2" id="8">8. Privacidad</Titulo>

				<Texto>
					La <strong>privacidad</strong> se refiere al{' '}
					<strong>control que una persona tiene sobre su información personal</strong>:
					qué datos comparte, con quién, cuándo y para qué.
				</Texto>

				<Lista>
					<li>
						<strong>Idea central:</strong> “Yo decido quién sabe qué sobre mí.”
					</li>
					<li>
						Ejemplo:
						<Lista>
								<li>
									Cuando configuras tus redes sociales para que solo tus amigos
									vean tus fotos, estás <strong>protegiendo tu privacidad</strong>.
								</li>
								<li>
									Si das tu nombre y correo a una empresa, pero solo para recibir
									un servicio, esperas que <strong>no usen esos datos para otra cosa</strong>.
								</li>
						</Lista>
					</li>
				</Lista>

				<Texto>Privacidad = tener el control de tus datos personales.</Texto>
				<Linea />

				<Titulo title="h2" id="9">9. Anonimato</Titulo>

				<Texto>
					El <strong>anonimato</strong> significa que <strong>nadie puede saber quién eres realmente</strong>,
					aunque vean tus acciones o tus mensajes.
				</Texto>

				<Lista>
					<li>
						<strong>Idea central:</strong> “Pueden ver lo que hago, pero no saben que soy yo.”
					</li>
					<li>
						Ejemplo:

						<Lista>
							<li>
								Si publicas un comentario en un foro con un nombre falso o
								navegas por Tor sin revelar tu identidad, estás{' '}
								<strong>actuando de forma anónima</strong>.
							</li>
							<li>
								Los “whistleblowers” (personas que revelan información confidencial
								de forma segura) buscan <strong>mantener el anonimato</strong>.
							</li>
						</Lista>
					</li>
				</Lista>

				<Texto>Anonimato = ocultar tu identidad.</Texto>

				<Linea />

				<Titulo title="h2" id="10">10. Diferencias clave</Titulo>

				<Tabla>
  <TablaCabezera headers={["Aspecto", "<strong>Privacidad</strong>", "<strong>Anonimato</strong>"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>Qué protege</TablaUnica>
      <TablaUnica>Tus <strong>datos personales</strong></TablaUnica>
      <TablaUnica>Tú <strong>identidad</strong></TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Control</TablaUnica>
      <TablaUnica>Tú decides qué compartir</TablaUnica>
      <TablaUnica>Nadie puede identificarte</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>Ejemplo</TablaUnica>
      <TablaUnica>No publicar tú dirección</TablaUnica>
      <TablaUnica>Publicar con un seudónimo</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>En internet</TablaUnica>
      <TablaUnica>Configurar permisos, cifrar mensajes</TablaUnica>
      <TablaUnica>Usar VPN, Tor, criptomonedas privadas</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>

				<Lista>
						<li>
						Puedes tener <strong>privacidad sin anonimato</strong>: por ejemplo,
						tu banco sabe quién eres, pero <strong>protege tus datos</strong>.
					</li>
					<li>
						Y puedes tener <strong>anonimato sin privacidad</strong>: si actúas
						con un seudónimo, pero tus mensajes quedan guardados o analizados,
						<strong> no tienes privacidad</strong> aunque nadie sepa tu nombre.
					</li>
				</Lista>
			</Estructura >

			<TemarioAsideCompleto temario={Temario} />
		</>
	);
}

export default Conceptos_Generales;
