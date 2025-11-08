

import Lista from "./lista.jsx";
import Enlace from "./enlace.jsx";

function Temario({ className = "" }) {
    return (
        <Lista className={className}>
            <li>
                <Enlace href="#1-conceptos-básicos">Conceptos Básicos</Enlace>
            </li>
            <li>
                <Enlace href="#2-virtualización">Virtualización</Enlace>
            </li>
            <li>
                <Enlace href="#2-linux-y-bash-script">Linux y Bash Script</Enlace>
                <Lista className="list-[upper-roman] my-3">
                    <li>
                        <Enlace href="#1-linux-comandos-por-secciones">Linux (comandos por secciones)</Enlace>
                    </li>
                    <li>
                        <Enlace href="#2-linux-comandos-individuales">Linux (comandos individuales)</Enlace>
                    </li>
                    <li>
                        <Enlace href="#3-bash-script">Bash Script</Enlace>
                    </li>
                </Lista>
            </li>
            <li>
                <Enlace href="#4-windows">Windows</Enlace>
            </li>
            <li>
                <Enlace href="#5-redes">Redes</Enlace>
            </li>
            <li>
                <Enlace href="#6-python">Python</Enlace>
            </li>
            <li>
                <Enlace href="#7-pentesting">Pentesting</Enlace>
            </li>
            <li>
                <Enlace href="#8-osint">OSINT</Enlace>
            </li>
            <li>
                <Enlace href="#9-privacidad-y-anonimato">Privacidad y Anonimato</Enlace>
            </li>
            <li>
                <Enlace href="#10-información">Información</Enlace>
            </li>
        </Lista>
    );
}

export default Temario;
