---
title: Ncat
route: /linux/comandos/Ncat
---

# Ncat en Linux
---

## ¿Qué hace ncat? {#qué-hace-ncat}
ncat (o **Ncat**) es la versión moderna de **netcat** incluida con **Nmap**. Es una herramienta de línea de comandos para leer/escribir datos a través de conexiones **TCP** o **UDP**, con muchas mejoras: soporte SSL/TLS, proxys, ejecución remota de comandos, modo servidor/cliente, reconexiones, y más. Es el “cuchillo suizo” de redes pero con opciones extra de seguridad y flexibilidad.

---

## Usos típicos {#usos-típicos}
- Conectar a un puerto remoto (cliente).
- Poner un puerto en escucha (servidor).
- Transferir archivos entre máquinas.
- Crear shells remotos / reverse shells (solo en entornos controlados).
- Tunelizar con SSL/TLS o a través de proxies.
- Depuración y pruebas de red (chat, eco, escaneo, etc.).

---

## Opciones comunes (útiles y seguras) {#opciones-comunes-útiles-y-seguras}
- -l : escuchar (modo server).
- -p &lt;puerto&gt; : especificar puerto local.
- -u : usar UDP en lugar de TCP.
- -v / -vv : verbose (más información de debug).
- -k : mantener el listener abierto para **múltiples** conexiones (keep-open).
- -n : no resolver DNS (usar solo IPs).
- -z : modo “scan” / zero-I/O (suele usarse para chequear puertos).
- --ssl : asegurar la conexión con TLS/SSL.
- --send-only / --recv-only : solo enviar o solo recibir (útil en transferencias).
- --proxy &lt;host:puerto&gt; y --proxy-type socks4, socks5, http : conectar a través de un proxy.
- --exec &lt;comando&gt; o -e &lt;programa&gt; : ejecutar un comando al conectar (p.ej. crear una shell remota). <Lista> **ATENCIÓN:** usar con extremo cuidado — esto permite ejecución remota y es peligroso sí se habilita en producción sin control.

</li>
</Lista >
<blockquote>
Nota: Ncat tiene muchas más opciones (certificados TLS, límites de tasa, timeouts). Consulta ncat --help o man ncat para la lista completa en tú versión.

</blockquote>
---

## Ejemplos prácticos {#ejemplos-prácticos}
### Cliente simple (TCP) {#cliente-simple-tcp}
```bash
ncat 192.168.1.10 8080
```

### Servidor que acepta una conexión {#servidor-que-acepta-una-conexión}
```bash
ncat -l -p 8080
```

### Servidor que acepta múltiples conexiones (keep-open) {#servidor-que-acepta-múltiples-conexiones-keep-open}
```bash
ncat -l -k -p 8080
```

### UDP (cliente y servidor) {#udp-cliente-y-servidor}
Servidor UDP:
```bash
ncat -u -l -p 6000
```

Cliente UDP:
```bash
ncat -u 192.168.1.10 6000
```

### Transferir archivo (cliente -&gt; servidor) {#transferir-archivo-cliente---servidor}
Servidor (recibe):
```bash
ncat -l -p 9000 > recibido.bin
```

Cliente (envía):
```bash
ncat 192.168.1.20 9000 < archivo.bin
```

### Conexión cifrada SSL/TLS (cliente) {#conexión-cifrada-ssltls-cliente}
```bash
ncat --ssl ejemplo.com 443
```

### Usar proxy SOCKS5 {#usar-proxy-socks5}
```bash
ncat --proxy 10.0.0.1:1080 --proxy-type socks5 ejemplo.com 80
```

### Ejecutar comando remota (solo en entornos controlados) {#ejecutar-comando-remota-solo-en-entornos-controlados}
Servidor (escucha y ejecuta /bin/bash cuando alguien conecta):
```bash
ncat -l -p 4444 --exec "/bin/bash" -k
```

Cliente (conecta y obtiene shell):
```bash
ncat 192.168.1.20 4444
```

**Nunca** hagas esto en máquinas expuestas sin autorización.

---

## Seguridad y buenas prácticas {#seguridad-y-buenas-prácticas}
- --exec / -e y reverse shells son poderosas pero **peligrosas**: úsalas solo en entornos de laboratorio o con permiso explícito.
- Sí necesitas acceso remoto legítimo, prefiere SSH o túneles TLS con autenticación.
- Sí usas --ssl, verifica certificados cuando sea necesario (no deshabilites comprobaciones sin entender riesgos).
- Limita escucha a interfaces específicas (-l -s &lt;ip&gt;) sí tú ncat lo soporta, o usa firewall para restringir accesos.
- Mantén ncat actualizado (la implementación viene con Nmap).