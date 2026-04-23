---
title: Virtualización
description: Qué es un hipervisor, hipervisores comunes y buenas prácticas para laboratorios de ciberseguridad.
---

## Virtualización

La virtualización es crear una **versión simulada** de un recurso físico (CPU, RAM, disco, red) mediante un **hipervisor**, de modo que varias **máquinas virtuales (VM)** compartan el mismo hardware. Cada VM puede tener su propio sistema operativo y aplicaciones, aislado del resto.

En **ciberseguridad** sirve para: probar herramientas en Linux/Windows sin romper el equipo principal, montar laboratorios vulnerables aislados y repetir escenarios desde un *snapshot*.

## Hipervisores habituales

- **VirtualBox** — Gratuito y multiplataforma; muy usado para empezar.
- **VMware** — Workstation / Fusion y soluciones empresariales (vSphere).
- **Hyper-V** — Integrado en Windows (Pro/Enterprise y Windows Server).
- **KVM** — Integrado en el kernel Linux (QEMU/libvirt); muy flexible en servidores.

Si quieres un vídeo introductorio con **VirtualBox** antes de practicar, puedes usar alguno de estos recursos:

- [Ir a curso de Virtualización - Hixec (1h 50m)](https://www.youtube.com/watch?v=CLdHQPyHeN0)
- [Ir a curso de Virtualización - xerosec (2h)](https://www.youtube.com/watch?v=bIoVtXiG9xc&amp;feature=youtu.be)
- [Ir a curso de Máquinas Virtuales - HolaMundo (30m)](https://www.youtube.com/watch?v=uiFZUfmFAus)

### Por qué Ubuntu y Windows en VM (VirtualBox u otro)

- Practicas **Linux** o **Windows** sin tocar el sistema anfitrión.
- Si algo falla (paquetes rotos, malware de laboratorio), restauras la VM en minutos.
- VirtualBox es un buen punto de partida; otros prefieren VMware u otras soluciones según hardware y licencias.

Tras instalar Ubuntu (u otra distro) y/o Windows en la VM, crea **instantáneas** (*snapshots*) o copias de seguridad: son esenciales para volver a un estado conocido si el laboratorio se corrompe.

- [Buscar como crear un punto de restauración en VirtualBox](https://www.youtube.com/results?search_query=como+crear+un+punto+de+restauracion+en+virtualbox)

## Red en la VM (idea rápida)

- **NAT:** la VM sale a Internet a través del anfitrión; suele ser el modo más simple para descargar paquetes.
- **Red solo anfitrión / interna:** las VMs hablan entre sí sin exponerse a la red física; útil para laboratorios aislados.
- **Puente (*bridged*):** la VM aparece como otro equipo en la LAN; úsalo solo si entiendes el riesgo en redes compartidas.

## Recursos (RAM y CPU)

Asigna a la VM lo mínimo razonable para el SO invitado; dejar **siempre** RAM y núcleos libres para el anfitrión evita que todo el equipo se quede sin recursos.

## Siguientes pasos en estas notas

- [Comandos Linux](/linux/comandoslinux/) y [Fundamentos de Bash](/linux/fundamentos/)
- [Teoría de redes](/redes/teoria/) cuando conectes varias VMs

Ejemplo de entorno en VirtualBox:

<Imagen src="/WEB-Notas-de-Hacking/imagenes/image-virtualbox.png" alt="Imagen de VirtualBox" className="
py-4 w-full
" />