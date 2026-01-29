---
title: ConceptosBasicos
route: /conceptos-basicos/ConceptosBasicos
---

# Conceptos Basicos
---

## 0. Seguridad de la información Vs Seguridad informática Vs Ciberseguridad {#0}
**Seguridad de la información**: Procedimientos de medidas para asegurar los datos independientemente en que formato estén.

**Seguridad informática**: Solo proteger los datos en formato informático tanto físico como virtual.

**Ciberseguridad**: Proteger los datos e información en formato virtual (digitales).

---

## 1. ¿Qué es? {#1-qué-es}
Es la práctica de proteger sistemas, redes, datos y programas frente a ataques, o accesos no autorizados.

---

## 2. Objetivos {#2-objetivos}
- **Confidencialidad:** Solo las personas autorizadas acceden a la información.
- **Integridad:** La información no puede ser alterada sin permiso.
- **Disponibilidad:** Los sistemas y datos deben estar accesibles cuando se necesiten.

---

## 3. Terminologías {#3-terminologías}
### Exploit {#exploit}
Es un **programa, código o técnica** que ** aprovecha una vulnerabilidad** (un error o debilidad en un sistema, software o aplicación) para **ejecutar acciones no autorizadas**.

<blockquote>
El exploit es *el método o herramienta que “explota” la falla.*

</blockquote>
### Payload {#payload}
(en español, *carga útil*) es **lo que el exploit ejecuta una vez que logra entrar**.

Piensa así:

- El *exploit* es la **llave que abre la puerta**.
- El *payload* es **lo que metes una vez abierta**.

Algunos tipos de payloads:

- **Reverse shell:** le da al atacante control remoto sobre la máquina.
- **Meterpreter / comandos personalizados:** carga herramientas para moverse por el sistema.
- **Downloader:** descarga malware adicional o instala puertas traseras (*backdoors*).
- **Privilege escalation payloads:** aumentan permisos dentro del sistema.

En herramientas como **Metasploit**, esto se ve muy claro: eliges un exploit y luego le asocias un payload.

### 0-day (Zero-Day) {#0-day-zero-day}
(se pronuncia *zero day*) es una **vulnerabilidad desconocida por el fabricante o por el público** —y por tanto **no tiene parche ni defensa aún**.

<blockquote>
“Zero-day” significa literalmente *día cero desde que se descubrió*, es decir, **el fabricante tiene 0 días para corregirlo**.

</blockquote>
Un **0-day exploit** es cuando alguien crea un exploit que aprovecha esa vulnerabilidad secreta. Es el tipo de ataque más peligroso y valioso, porque **ni antivirus ni firewalls lo detectan** (ya que nadie sabía que existía).

### Malware y tipos de Malware {#malware-y-tipos-de-malware}
(Malicious Software) Cualquier tipo de código malicioso que busca aprovecharse de una vulnerabilidad y casuar daño.

Los tipos mas conocidos son:

- **1. Virus:** Programa que se adjunta a archivos o programas legítimos y se activa al ejecutarlos. Se replica infectando otros archivos.
- **2. Gusano (Worm):** Malware que se autorreplica sin intervención del usuario, generalmente explotando vulnerabilidades de red. Se propaga muy rápido.
- **3. Troyano:** Se hace pasar por software legítimo para engañar al usuario. Abre puertas traseras, roba datos o instala otros malware.
- **4. Ransomware:** Cifra archivos o bloquea el sistema y exige un pago para devolver el acceso. Uno de los más peligrosos hoy en día.
- **5. Spyware:** Espía la actividad del usuario: teclas, contraseñas, navegación, cámaras, etc. Roba información sin que el usuario lo note.
- **6. Adware:** Muestra publicidad invasiva sin permiso. Puede rastrear actividad y ralentizar el sistema.
- **7. Rootkit:** Oculta procesos, archivos o accesos maliciosos para que el malware pase desapercibido. Muy difícil de detectar.
- **8. Botnet (Bot):** Computadoras infectadas que quedan bajo control de un atacante para hacer ataques DDoS, spam, minería, etc.
- **9. Keylogger:** Registra todo lo que el usuario escribe en el teclado: contraseñas, mensajes, tarjetas, etc.
- **10. Backdoor (Puerta trasera):** Permite acceso remoto oculto al equipo o servidor, saltándose la autenticación normal.
- **11. Stealer:** Roban información rápida y silenciosamente: contraseñas guardadas, cookies, wallet de criptos, sesión de Discord, etc.
- **12. Banker / Malware Bancario:** Especializado en robar credenciales y datos financieros, interceptar transacciones y suplantar bancos.
- **13. Cryptominer / Cryptojacking:** Usa el CPU o GPU del usuario para minar criptomonedas sin permiso.
- **14. Fileless Malware:** No se instala como archivo. Vive en la memoria RAM y usa herramientas legítimas del sistema (como PowerShell). Muy difícil de detectar.
- **15. RAT (Remote Access Trojan):** Da control total del dispositivo al atacante: cámara, teclado, archivos, pantalla.
- **16. Scareware:** Asusta al usuario con mensajes falsos (“tienes 32 virus”) para que compre un software fraudulento.
- **17. Bootkit:** Infecta el sector de arranque (MBR/UEFI) para ejecutarse antes que el sistema operativo.

### Vulnerabilidad {#vulnerabilidad}
Fallo de configuración, de diseño o de implementación que pone en riesgo la seguridad del entorno o sistema.

### Amenaza {#amenaza}
Cualquier tipo de circunstancia posible que se pueda manifestar donde se pueda a través de una vulnerabilidad poner en peligro el sistema.

### Riesgo {#riesgo}
Probabilidad o posibilidad que una amenaza se materialice y afecte al sistema en cuestión, aprovechándose de una vulnerabilidad.

---

## 4. Amenazas comunes {#4-amenazas-comunes}
- **Malware:** Software malicioso (virus, troyanos, gusanos, ransomware, spyware).
- **Phishing:** Engaños (emails o mensajes falsos) para robar credenciales.
- **Ingeniería Social:** Manipular personas para obtener información.
- **Ataques DDoS:** sobrecargar un servidor para dejarlo fuera de servicio.
- **Exploits:** Aprovechar vulnerabilidades en software y sistemas.

---

## 5. Vectores de ataque {#5-vectores-de-ataque}
Son los caminos que usan los atacantes:

- Correos electrónicos.
- Redes wifi inseguras.
- Descargas de archivos.
- Aplicaciones maliciosas.
- Dispositivos externos (USB).

---

## 6. Buenas prácticas de seguridad {#6-buenas-prácticas-de-seguridad}
- Usar contraseñas seguras (y diferentes en cada cuenta).
- Activar la autenticación en dos pasos (2FA).
- Mantener software y sistemas actualizados.
- Hacer copias de seguridad (backups).
- Usar VPN en redes públicas.
- No haga clic en enlaces sospechosos.

---

## 7. Áreas de ciberseguridad {#7-áreas-de-ciberseguridad}
- **Seguridad de Redes:** Proteger tráfico de datos.
- **Seguridad de la Información:** Proteger datos en depósito y en tránsito.
- **Seguridad en la Nube:** Protección en servicios iCloud.
- **Criptografía:** Usar algoritmos para proteger información. (ej: cifrado AES, RSA).
- **Ciberinteligencia:** Detección y análisis de amenazas.
- **Hacking Ético:** Buscar vulnerabilidades para fortalecer sistemas.

---

## 8. Tipos de hackers (por su actuar) {#8-tipos-de-hackers-por-su-actuar}
- **White hat:** Éticos, ayudan a mejorar la seguridad.
- **Black hat:** Atacantes maliciosos.
- **Grey hat:** A veces actúan éticamente, otras veces no.

Normalmente a los “hackers de sombrero, negro o gris” se les da el nombre de ciberdelincuentes.

---

## 9. Tipos de hackers (por su rol) {#9-tipos-de-hackers-por-su-rol}
- **Red team:** Ofensivos (atacantes), simula todo tipo de ataques para saber la seguridad que tiene una empresa u organización.
- **Blue team:** Defensivo (guardianes), son los que protegen de los ataques, los encargados de reforzar seguridad a la empresa sí los de **red team** encuentran alguna falla.
- **Purple team:** híbrido (colaboración), es una mezcla de ambos mundos de red team, y blue team.

Existen más tipos de hackers por su rol, pero son muy desconocidos normalmente en el mundo laboral, y comunidades onlines.

---

## 10. Herramientas básicas en ciberseguridad {#10-herramientas-básicas-en-ciberseguridad}
- **Wireshark:** Análisis de tráfico de red.
- **Nmap:** Escaneo de puertos y redes.
- **Metasploit:** Pruebas de penetración.
- **Kali Linux:** Sistema operativo con herramientas de hacking ético, se puede utilizar otros no importa, pero kali ya viene con las herramientas incluidas.

---

Para conocer muchos más conceptos y fortalecer los aprendidos, también esta este video de YouTube:

[Ir a conceptos de ciberseguridad - Hixec](https://www.youtube.com/watch?v=spMYZHepjko)