---
title: Ramas Ciberseguridad
description: Mapa de ramas de ciberseguridad: ofensiva, defensiva, redes, cloud, AppSec y más.
---

# Ramas y especializaciones

Apunte rápido de las áreas habituales. Cada una: definición corta, subramas y herramientas típicas.

---

## 1. Seguridad ofensiva (Red Team / ethical hacking)

Buscar vulnerabilidades simulando un atacante, con autorización.

### Subramas

- **Pentesting:** pruebas de penetración acotadas.
- **Red Teaming:** campaña más amplia contra la organización.
- **Ingeniería social:** phishing, pretexting, etc.
- **Explotación:** aprovechar fallos de software/sistemas.
- **Hacking físico:** acceso a instalaciones o dispositivos.

_Herramientas:_ Metasploit, Burp Suite, Nmap, Wireshark, Hydra, Aircrack-ng.

---

## 2. Seguridad defensiva (Blue Team)

Detectar, contener y responder a incidentes.

### Subramas

- **SOC / monitoreo:** vigilancia de logs y alertas.
- **Análisis de malware:** entender qué hace un binario malicioso.
- **Gestión de incidentes:** respuesta ante brechas.
- **Threat hunting:** buscar amenazas que el SIEM no marcó.
- **Hardening:** endurecer configs y reducir superficie.

_Herramientas:_ Splunk, SIEM, Suricata, OSSEC, ELK, Wireshark.

---

## 3. Ciberinteligencia (CTI)

Recolectar y analizar amenazas para anticiparlas.

### Subramas

- **CTI:** TTPs de grupos, IOCs, campañas.
- **Forense digital:** evidencia tras un incidente.
- **OSINT:** fuentes públicas.
- **Contrainteligencia:** espionaje / desinformación.

_Herramientas:_ Maltego, Shodan, theHarvester, MISP, VirusTotal.

---

## 4. Criptografía y seguridad de la información

Proteger datos con algoritmos, claves y protocolos.

### Subramas

- Criptografía aplicada (AES, RSA, hashes).
- Gestión de claves y certificados.
- Firmas digitales / blockchain (cuando aplica).
- Comunicaciones seguras (VPN, TLS).

_Herramientas:_ OpenSSL, GPG, Hashcat, VeraCrypt.

---

## 5. Seguridad en redes

Proteger la infraestructura que conecta hosts y servicios.

### Subramas

- Perímetro (firewall, IDS/IPS).
- Routers / switches.
- Segmentación y control de tráfico.
- Wi-Fi.

_Herramientas:_ pfSense, Snort, Wireshark, Aircrack-ng.

---

## 6. Seguridad en la nube (Cloud Security)

AWS, Azure, GCP y similares: configs, identidades y datos.

### Subramas

- Configuración segura del entorno.
- IAM (identidades y accesos).
- Auditoría / cumplimiento.
- Cifrado de datos en cloud.

_Herramientas:_ Prisma Cloud, AWS Security Hub, Azure Defender.

---

## 7. Seguridad en aplicaciones (AppSec)

Seguridad del software en el ciclo de desarrollo.

### Subramas

- AppSec web/móvil.
- DevSecOps.
- Revisión de código / SAST.
- Pruebas automatizadas de seguridad.

_Herramientas:_ OWASP ZAP, SonarQube, Burp Suite, Checkmarx.

---

## 8. Gobernanza, riesgo y cumplimiento (GRC)

Políticas, normas, riesgos y auditorías (lado estratégico).

### Subramas

- Normativas (ISO 27001, NIST, GDPR…).
- Gestión de riesgos.
- Auditorías.
- Concienciación / formación.

---

## 9. Seguridad industrial e infraestructuras críticas

OT, SCADA y servicios esenciales (energía, transporte, agua…).

### Subramas

- Seguridad OT.
- SCADA / control industrial.
- IoT industrial.

---

## 10. Ciberseguridad en IA y datos

Modelos, datasets y manipulación de contenido.

### Subramas

- Ataques a modelos (adversarios, prompt injection, etc.).
- Protección de datos de entrenamiento.
- Privacidad diferencial / anonimización.
- Deepfakes y desinformación.
