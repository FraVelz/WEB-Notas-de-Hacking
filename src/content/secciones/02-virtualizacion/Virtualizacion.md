---
title: Virtualizacion
route: /virtualizacion/Virtualizacion
---

## Virtualización {#2-virtualización}
La virtualización es la creación de una versión simulada o virtual de un recurso físico, como un servidor, un dispositivo de almacenamiento, una red o un sistema operativo. Utiliza software, llamado hipervisor, para dividir un único sistema físico en múltiples entornos virtuales independientes, llamados máquinas virtuales (VM). Esto permite que varias máquinas virtuales funcionen en un solo hardware, cada una con su propio sistema operativo y aplicaciones, compartiendo eficientemente los recursos subyacentes

Tipos de Maquinas virtuales para virtualizar:

- VirtualBox (gratuito, multiplataforma)
- VMware (líder en entornos empresariales y profesionales con productos como vSphere y Workstation)
- Microsoft Hyper-V (integrado en Windows Server y con versión para escritorio)
- KVM (integrado en el kernel de Linux, para usuarios con perfil técnico)

Sí quieres ver un video de YouTube completo de virtualización con VirtualBox antes de empezar los siguientes pasos, elige alguno para aprender a virtualizar y aprender como funciona VirtualBox:

- [Ir a curso de Virtualización - Hixec (1h 50m)](https:/www.youtube.com/watch?v=CLdHQPyHeN0)
- [Ir a curso de Virtualización - xerosec (2h)](https:/www.youtubate.com/wch?v=bIoVtXiG9xc&amp;feature=youtu.be)
- [Ir a curso de Máquinas Virtuales - HolaMundo (30m)](https:/www.youtube.com/watch?v=uiFZUfmFAus)

Porque descargar Ubuntu y Windows en una maquina virtual con VirtualBox:

- Sin importar tú sistema, usa una máquina virtual para trabajar sin dañar el original.
- La opción más recomendable es VirtualBox, sencilla y muy utilizada (otras personas prefieren WMware, u otras formas de virtualizar).

Tras instalar Ubuntu (u otro sistema linux) y Windows, crea un punto de restauración en la máquina virtual, esto es muy importante para recuperar el sistema sí se llega a romper.

- [Buscar como crear un punto de restauración en VirtualBox](https:/www.youtube.com/results?search_query=como+crear+un+punto+de+restauracion+en+virtualbox)

Todo lo deberías tener más o menos así en VirtualBox:

<Imagen src="./image-virtualbox.png" alt="Imagen de VirtualBox" className="
py-4 w-full
" />