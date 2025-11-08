import Estructura from "./../../componentes/estructura.jsx";
import Titulo from "./../../componentes/titulo.jsx";
import Lista from "./../../componentes/lista.jsx";
import Texto from "./../../componentes/texto.jsx";
import Linea from "./../../componentes/linea.jsx";

function TemarioAnonimato({ className = "" }) {
	return (
		<Lista className={className}>
			<li>
				<a href="#conceptos-generales-privacidad-anonimato-y-mucho-mas">Conceptos Generales (privacidad, Anonimato y mucho mas)</a>
				<Lista>
					<li><a href="#temario">Temario</a></li>
					<li><a href="#1-internet-niveles-o-capas">1. Internet: niveles o capas</a></li>
					<li>
						<a href="#2-el-anonimato-digital">2. El anonimato digital</a>
						<Lista>
							<li><a href="#cómo-se-logra">Cómo se logra</a></li>
							<li><a href="#buenas-prácticas-de-anonimato">Buenas prácticas de anonimato</a></li>
						</Lista>
					</li>
					<li><a href="#3-deep-web-vs-dark-web">3. Deep Web vs Dark Web</a></li>
					<li><a href="#4-legalidad-y-ética">4. Legalidad y ética</a></li>
					<li><a href="#5-tecnologías-principales">5. Tecnologías principales</a></li>
					<li><a href="#6-riesgos-de-la-dark-web">6. Riesgos de la Dark Web</a></li>
					<li><a href="#7-usos-legítimos-del-anonimato-y-la-dark-web">7. Usos legítimos del anonimato y la Dark Web</a></li>
				</Lista>
			</li>
		</Lista>
	);
}

function Conceptos_Generales() {
	return (
		<>
			<Estructura>
				<Titulo title="h1" id="conceptos-generales-privacidad-anonimato-y-mucho-mas">
					Conceptos Generales (privacidad, Anonimato y mucho mas)
				</Titulo>

				<Linea />

				<Titulo title="h2" id="temario">Temario</Titulo>

				<TemarioAnonimato className="bg-gray-900 rounded-md p-4 mb-4 list-decimal 2xl:hidden" />

				<Texto>
					<a href="./../readme.md#9-privacidad-y-anonimato">
						Regresar a la guía principal
					</a>
				</Texto>

				<Linea />

				<Titulo title="h2" id="internet-niveles-o-capas">1. Internet: niveles o capas</Titulo>

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

				<Titulo title="h2" id="el-anonimato-digital">2. El anonimato digital</Titulo>

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

				<Titulo title="h2" id="deep-web-vs-dark-web">3. Deep Web vs Dark Web</Titulo>

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

				<Titulo title="h2" id="legalidad-y-ética">4. Legalidad y ética</Titulo>

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
						<Texto>
							También existen <strong>proyectos legítimos</strong>:
						</Texto>
						<Lista>
							<li>SecureDrop (para denuncias anónimas a medios).</li>
							<li>Hidden Wiki (índice de sitios .onion).</li>
							<li>Foros de privacidad y criptografía.</li>
						</Lista>
					</li>
				</Lista>

				<Linea />

				<Titulo title="h2" id="tecnologías-principales">5. Tecnologías principales</Titulo>

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

				<Titulo title="h2" id="riesgos-de-la-dark-web">6. Riesgos de la Dark Web</Titulo>

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

				<Titulo title="h2" id="usos-legítimos-del-anonimato-y-la-dark-web">
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

				<Texto>
					<a href="./../readme.md#9-privacidad-y-anonimato">
						Regresar a la guía principal
					</a>
				</Texto>
				<blockquote>
					<Texto>
						<strong>Autor:</strong> Fravelz
					</Texto>
				</blockquote>
			</Estructura>

			<aside className="hidden 2xl:block sticky top-5 self-start w-4/5 min-w-72 max-w-fit">
				<Titulo title="h2" className="select-none">Temario</Titulo>
				<TemarioAnonimato className="bg-gray-900 rounded-md p-4 mb-4 list-decimal" />
			</aside>
		</>
	);
}

export default Conceptos_Generales;
