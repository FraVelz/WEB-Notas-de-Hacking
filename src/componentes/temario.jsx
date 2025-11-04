
function Enlace({ href, children }) {
  return (
    <a href={href}>{children}</a>
  );
}

function Temario() {
    return (
    <ul>
      <li><a href="#0-conceptos-básicos">0. Conceptos Básicos</a></li>
      <li><a href="#1-virtualización">1. Virtualización</a></li>
      <li>
        <a href="#2-linux-y-bash-script">2. Linux y Bash Script</a>
        <ul>
          <li>
            <a href="#1-linux-comandos-por-secciones"
              >1. Linux (comandos por secciones)</a
            >
          </li>
          <li>
            <a href="#2-linux-comandos-individuales"
              >2. Linux (comandos individuales)</a
            >
          </li>
          <li><a href="#3-bash-script">3. Bash Script</a></li>
          <li><a href="#4-practica-general">4. Practica general</a></li>
        </ul>
      </li>
      <li><a href="#3-windows">3. Windows</a></li>
      <li><a href="#4-redes">4. Redes</a></li>
      <li><a href="#5-python">5. Python</a></li>
      <li><a href="#6-pentesting">6. Pentesting</a></li>
      <li><a href="#7-osint">7. OSINT</a></li>
      <li>
        <a href="#8-privacidad-y-anonimato">8. Privacidad y Anonimato</a>
      </li>
      <li><a href="#información">Información</a></li>
    </ul>
    );
}

export default Temario;
