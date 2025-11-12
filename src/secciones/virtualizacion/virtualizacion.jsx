import Enlace from "../../componentes/atomos/enlace";
import Estructura from "../../componentes/organismos/estructura";
import Lista from "../../componentes/moleculas/lista";
import Texto from "./../../componentes/atomos/texto";
import Titulo from "../../componentes/moleculas/titulo";
function Virtualizacion() {
    return (
        <Estructura>
            <Titulo title="h2" id="2-virtualización">Virtualización</Titulo>

            <Texto>La virtualización es la
                creación de una versión simulada o virtual de un recurso físico, como un servidor, un dispositivo de almacenamiento, una red o un sistema operativo. Utiliza software, llamado hipervisor, para dividir un único sistema físico en múltiples entornos virtuales independientes, llamados máquinas virtuales (VM). Esto permite que varias máquinas virtuales funcionen en un solo hardware, cada una con su propio sistema operativo y aplicaciones, compartiendo eficientemente los recursos subyacentes
            </Texto>

            <Texto>Tipos de Maquinas virtuales para virtualizar:</Texto>

            <Lista>
                <li>VirtualBox (gratuito, multiplataforma)</li>
                <li>VMware (líder en entornos empresariales y profesionales con productos como vSphere y Workstation)</li>
                <li>Microsoft Hyper-V (integrado en Windows Server y con versión para escritorio)</li>
                <li>KVM (integrado en el kernel de Linux, para usuarios con perfil técnico)</li>
            </Lista>

            <Texto>
                Sí quieres ver un video de YouTube completo de virtualización con
                VirtualBox antes de empezar los siguientes pasos, elige alguno para
                aprender a virtualizar y aprender como funciona VirtualBox:
            </Texto>

            <Lista className="
            p1 list-disc
            ">
                <li>
                    <Enlace target="_blank" href="https:/www.youtube.com/watch?v=CLdHQPyHeN0">Ir a curso de Virtualización -
                        Hixec (1h 50m)</Enlace>
                </li>

                <li>
                    <Enlace target="_blank" href="https:/www.youtubate.com/wch?v=bIoVtXiG9xc&amp;feature=youtu.be">Ir a curso de
                        Virtualización - xerosec (2h)</Enlace>
                </li>

                <li>
                    <Enlace target="_blank" href="https:/www.youtube.com/watch?v=uiFZUfmFAus">Ir a curso de Máquinas Virtuales -
                        HolaMundo (30m)</Enlace>
                </li>
            </Lista>

            <Texto>Porque descargar Ubuntu y Windows en una maquina virtual con VirtualBox:</Texto>

            <Lista className="
            p-1 list-disc
            ">
                <Texto><li>Sin importar tú sistema, usa una máquina virtual para trabajar sin dañar el original.</li></Texto>

                <Texto><li>La opción más recomendable es VirtualBox, sencilla y muy utilizada (otras personas prefieren WMware, u otras formas de virtualizar).</li></Texto>
            </Lista>

            <Texto>
                Tras instalar Ubuntu (u otro sistema linux) y Windows, crea un punto de
                restauración en la máquina virtual, esto es muy importante para recuperar
                el sistema sí se llega a romper.
            </Texto>

            <Lista className="
            p1 list-disc
            ">
                <li>
                    <Enlace
                        href="https:/www.youtube.com/results?search_query=como+crear+un+punto+de+restauracion+en+virtualbox">
                        Buscar como crear un punto de restauración en VirtualBox</Enlace>
                </li>
            </Lista>

            <Texto>Todo lo deberías tener más o menos así en VirtualBox:</Texto>

            <img src="./image-virtualbox.png" alt="Imagen de VirtualBox" className="
            py-4
            " />
        </Estructura>
    );
}

export default Virtualizacion;
