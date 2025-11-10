import Estructura, { TemarioCompleto, TemarioAsideCompleto } from "./../../componentes/estructura.jsx";

import Titulo from "./../../componentes/titulo.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Linea from "./../../componentes/linea.jsx";
import Enlace from "./../../componentes/enlace.jsx";

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
				<Enlace href="#8">8. Que es Privacidad</Enlace>
			</li>
			<li>
				<Enlace href="#9">9. Que es Anonimato</Enlace>
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
					Conceptos Generales (privacidad, Anonimato y mucho mas)
				</Titulo>

				<TemarioCompleto temario={Temario} />

				<Linea />

				<Titulo title="h2" id="1">1. Internet: niveles o capas</Titulo>

				<Texto>
					El Internet puede dividirse en tres niveles según la
					<strong>visibilidad y accesibilidad</strong> de la información:
				</Texto>
				<table>
					<thead>
						<tr>
							<th>Nivel</th>
							<th>Nombre</th>
							<th>Acceso</th>
							<th>Ejemplos</th>
							<th>Características</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<strong>1</strong>
							</td>
							<td>
								<strong>Surface Web</strong> (Web superficial)
							</td>
							<td>Pública, indexada por Google, Bing, etc.</td>
							<td>YouTube, Wikipedia, Twitter</td>
							<td>
								Cualquiera puede acceder desde un navegador normal. Representa
								solo entre el <strong>4% y el 10%</strong> de toda la web.
							</td>
						</tr>
						<tr>
							<td>
								<strong>2</strong>
							</td>
							<td>
								<strong>Deep Web</strong>
							</td>
							<td>Privada, no indexada</td>
							<td>
								Bases de datos académicas, correos, intranets, archivos médicos
							</td>
							<td>
								Requiere autenticación o enlaces directos. Es
								<strong>legal</strong> y se usa a diario. Ejemplo: Gmail, banca
								online, plataformas educativas.
							</td>
						</tr>
						<tr>
							<td>
								<strong>3</strong>
							</td>
							<td>
								<strong>Dark Web</strong>
							</td>
							<td>Oculta, accesible solo con software especial</td>
							<td>Sitios .onion en TOR</td>
							<td>
								Usa redes anónimas cifradas. Contiene tanto foros y proyectos
								legítimos como actividades ilegales.
							</td>
						</tr>
					</tbody>
				</table>

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
						datos por varios nodos cifrados, haciendo casi imposible rastrear tu
						IP real.
					</li>
					<li>
						<strong>VPN (Red Privada Virtual):</strong> oculta tu IP y cifra tu
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
						No descargar archivos desde la Dark Web (podrían revelar tu IP).
					</li>
				</Lista>

				<Linea />

				<Titulo title="h2" id="3">3. Deep Web vs Dark Web</Titulo>

				<table>
					<thead>
						<tr>
							<th>Aspecto</th>
							<th>Deep Web</th>
							<th>Dark Web</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Acceso</td>
							<td>Navegadores normales</td>
							<td>TOR u otras redes anónimas</td>
						</tr>
						<tr>
							<td>Legalidad</td>
							<td>Legal</td>
							<td>Puede tener contenido legal o ilegal</td>
						</tr>
						<tr>
							<td>Ejemplo</td>
							<td>Gmail, Google Drive, bases de datos privadas</td>
							<td>Sitios .onion, foros, mercados, servicios ocultos</td>
						</tr>
						<tr>
							<td>Propósito</td>
							<td>Privacidad, acceso restringido</td>
							<td>
								Anonimato total, libertad de expresión o actividades ilegales
							</td>
						</tr>
					</tbody>
				</table>

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

				<table>
					<thead>
						<tr>
							<th>Tecnología</th>
							<th>Función</th>
							<th>Detalles</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<strong>TOR (The Onion Router)</strong>
							</td>
							<td>Enrutamiento anónimo</td>
							<td>
								Cada nodo solo conoce el anterior y el siguiente. Sitios .onion
								son invisibles desde la web normal.
							</td>
						</tr>
						<tr>
							<td>
								<strong>I2P (Invisible Internet Project)</strong>
							</td>
							<td>Red anónima alternativa</td>
							<td>Más rápida que TOR en conexiones internas.</td>
						</tr>
						<tr>
							<td>
								<strong>Freenet</strong>
							</td>
							<td>Almacenamiento y comunicación anónima</td>
							<td>Basado en compartir fragmentos cifrados de información.</td>
						</tr>
						<tr>
							<td>
								<strong>Tails OS</strong>
							</td>
							<td>Sistema operativo anónimo</td>
							<td>
								No guarda datos al apagar. Ideal para investigar o navegar seguro.
							</td>
						</tr>
						<tr>
							<td>
								<strong>PGP (Pretty Good Privacy)</strong>
							</td>
							<td>Cifrado de mensajes</td>
							<td>
								Permite enviar correos imposibles de leer sin la clave privada.
							</td>
						</tr>
					</tbody>
				</table>

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

				<table>
					<colgroup>
						<col style={{ width: '13%' }} />
						<col style={{ width: '42%' }} />
						<col style={{ width: '44%' }} />
					</colgroup>
					<thead>
						<tr>
							<th>Aspecto</th>
							<th>
								<strong>Privacidad</strong>
							</th>
							<th>
								<strong>Anonimato</strong>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Qué protege</td>
							<td>Tus <strong>datos personales</strong></td>
							<td>Tu <strong>identidad</strong></td>
						</tr>
						<tr>
							<td>Control</td>
							<td>Tú decides qué compartir</td>
							<td>Nadie puede identificarte</td>
						</tr>
						<tr>
							<td>Ejemplo</td>
							<td>No publicar tu dirección</td>
							<td>Publicar con un seudónimo</td>
						</tr>
						<tr>
							<td>En internet</td>
							<td>Configurar permisos, cifrar mensajes</td>
							<td>Usar VPN, Tor, criptomonedas privadas</td>
						</tr>
					</tbody>
				</table>

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
