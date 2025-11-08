import Titulo from "../../componentes/titulo";
import Texto from "../../componentes/texto";
import Enlace from "../../componentes/enlace";
import Lista from "../../componentes/lista";
import Estructura from "../../componentes/estructura";

function Virtualizacion() {
    return (
        <Estructura>
            <Titulo title="h2" id="2-virtualización">Virtualización</Titulo>

            <Texto>
                Si quieres ver un video de YouTube completo de virtualización con
                VirtualBox antes de empezar los siguientes pasos, elige alguno para
                aprender a virtualizar y como aprender como funciona VirtualBox:
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

            <Texto>Porque descargar Ubuntu y Windows en una maquina virtual:</Texto>

            <Lista className="
            p-1 list-disc
            ">
                <Texto><li>Sin importar tu sistema, usa una máquina virtual para trabajar sin dañar el original.</li></Texto>

                <Texto><li>La opción más recomendable es VirtualBox, sencilla y muy utilizada (otras personas prefieren WMware, u otras formas de virtualizar).</li></Texto>
            </Lista>

            <Texto>
                Tras instalar Ubuntu (u otro sistema linux) y Windows, crea un punto de
                restauración en la máquina virtual, esto es muy importante para recuperar
                el sistema si se llega a romper.
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

            <img src="./../public/image-virtualbox.png" alt="Imagen de VirtualBox" className="
            py-4
            " />

            <Texto>Tambien puedes elegir otras opciones para virtualizar o hacerlo con virtualbox y seguir con el siguiente tema.</Texto>
        </Estructura>
    );
}

export default Virtualizacion;
