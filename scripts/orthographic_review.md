# Revisión Ortográfica - Web-Notas-de-Hacking

## Resumen

Análisis de faltas ortográficas comunes, acentuación y errores gramaticales en español en todos los archivos del proyecto (JSX, MD).

## Hallazgos

Se encontraron **119** coincidencias potenciales:

- **src/rutas-main/rutas_dinamicas.jsx** (línea 148)
  - Patrón: `\bque\s+(?=es|estan|es)`
  - Sugerencia: qué (question/emphasis)
  - Texto: `que `

- **src/rutas-main/rutas_dinamicas.jsx** (línea 90)
  - Patrón: `\bmas\b(?!\s+grande)`
  - Sugerencia: más (usually) vs más (but/however)
  - Texto: `mas`

- **src/rutas-main/rutas_dinamicas.jsx** (línea 91)
  - Patrón: `\bmas\b(?!\s+grande)`
  - Sugerencia: más (usually) vs más (but/however)
  - Texto: `mas`

- **src/secciones/windows/redirecciones-powershell.jsx** (línea 71)
  - Patrón: `\b(?:echo|hecho)\b`
  - Sugerencia: echo vs hecho - check context
  - Texto: `echo`

- **src/secciones/windows/redirecciones-powershell.jsx** (línea 71)
  - Patrón: `\b(?:echo|hecho)\b`
  - Sugerencia: echo vs hecho - check context
  - Texto: `Hecho`

- **src/secciones/windows/alias-powershell.jsx** (línea 57)
  - Patrón: `\bsi\s+(?=lo|la|los)`
  - Sugerencia: sí (affirmative)
  - Texto: `si `

- **src/secciones/windows/alias-powershell.jsx** (línea 34)
  - Patrón: `\b(?:echo|hecho)\b`
  - Sugerencia: echo vs hecho - check context
  - Texto: `echo`

- **src/secciones/windows/variables-entorno.jsx** (línea 43)
  - Patrón: `\b(?:echo|hecho)\b`
  - Sugerencia: echo vs hecho - check context
  - Texto: `echo`

- **src/secciones/windows/gestion-usuarios.jsx** (línea 62)
  - Patrón: `\b(?:echo|hecho)\b`
  - Sugerencia: echo vs hecho - check context
  - Texto: `echo`

- **src/secciones/windows/gestion-usuarios.jsx** (línea 64)
  - Patrón: `\b(?:echo|hecho)\b`
  - Sugerencia: echo vs hecho - check context
  - Texto: `echo`

- **src/secciones/windows/ayuda-soporte.jsx** (línea 41)
  - Patrón: `\b(?:echo|hecho)\b`
  - Sugerencia: echo vs hecho - check context
  - Texto: `echo`

- **src/secciones/windows/ayuda-soporte.jsx** (línea 42)
  - Patrón: `\b(?:echo|hecho)\b`
  - Sugerencia: echo vs hecho - check context
  - Texto: `echo`

- **src/secciones/redes/cidrs-hosts.jsx** (línea 68)
  - Patrón: `\bsi\s+(?=lo|la|los)`
  - Sugerencia: sí (affirmative)
  - Texto: `Si `

- **src/secciones/redes/herramientas.jsx** (línea 116)
  - Patrón: `\bque\s+(?=es|estan|es)`
  - Sugerencia: qué (question/emphasis)
  - Texto: `que
                `

- **src/secciones/redes/teoria.jsx** (línea 167)
  - Patrón: `\bel\s+(?=cual|cual|que)`
  - Sugerencia: él (pronoun) vs el (article) - check context
  - Texto: `el `

- **src/secciones/redes/teoria.jsx** (línea 269)
  - Patrón: `\bel\s+(?=cual|cual|que)`
  - Sugerencia: él (pronoun) vs el (article) - check context
  - Texto: `el
          `

- **src/secciones/conceptos-basicos/mitos.jsx** (línea 68)
  - Patrón: `\bsi\s+(?=lo|la|los)`
  - Sugerencia: sí (affirmative)
  - Texto: `Si `

- **src/secciones/conceptos-basicos/mitos.jsx** (línea 28)
  - Patrón: `\bel\s+(?=cual|cual|que)`
  - Sugerencia: él (pronoun) vs el (article) - check context
  - Texto: `el `

- **src/secciones/conceptos-basicos/conceptos-basicos.jsx** (línea 169)
  - Patrón: `\bsi\s+(?=lo|la|los)`
  - Sugerencia: sí (affirmative)
  - Texto: `si `

- **src/secciones/anonimato/filtraciones.jsx** (línea 61)
  - Patrón: `\bque\s+(?=es|estan|es)`
  - Sugerencia: qué (question/emphasis)
  - Texto: `que `

- **src/secciones/anonimato/privacidad-anonimato.jsx** (línea 18)
  - Patrón: `\bque\s+(?=es|estan|es)`
  - Sugerencia: qué (question/emphasis)
  - Texto: `Que `

- **src/secciones/anonimato/privacidad-anonimato.jsx** (línea 20)
  - Patrón: `\bque\s+(?=es|estan|es)`
  - Sugerencia: qué (question/emphasis)
  - Texto: `Que `

- **src/secciones/anonimato/privacidad-anonimato.jsx** (línea 23)
  - Patrón: `\bmas\b(?!\s+grande)`
  - Sugerencia: más (usually) vs más (but/however)
  - Texto: `mas`

- **src/secciones/linux/bandit-resolucion.jsx** (línea 260)
  - Patrón: `\bque\s+(?=es|estan|es)`
  - Sugerencia: qué (question/emphasis)
  - Texto: `que
          `

- **src/secciones/linux/bandit-resolucion.jsx** (línea 286)
  - Patrón: `\bque\s+(?=es|estan|es)`
  - Sugerencia: qué (question/emphasis)
  - Texto: `que `

- **src/secciones/linux/bandit-resolucion.jsx** (línea 268)
  - Patrón: `\bcomo\s+(?=es|estoy)`
  - Sugerencia: cómo (question/emphasis)
  - Texto: `como `

- **src/secciones/linux/bandit-resolucion.jsx** (línea 264)
  - Patrón: `\bsi\s+(?=lo|la|los)`
  - Sugerencia: sí (affirmative)
  - Texto: `Si `

- **src/secciones/linux/bandit-resolucion.jsx** (línea 90)
  - Patrón: `\bel\s+(?=cual|cual|que)`
  - Sugerencia: él (pronoun) vs el (article) - check context
  - Texto: `el `

- **src/secciones/linux/bandit-resolucion.jsx** (línea 95)
  - Patrón: `\bel\s+(?=cual|cual|que)`
  - Sugerencia: él (pronoun) vs el (article) - check context
  - Texto: `el `

- **src/secciones/osint/googleDoorks.jsx** (línea 36)
  - Patrón: `\bque\s+(?=es|estan|es)`
  - Sugerencia: qué (question/emphasis)
  - Texto: `que
          `

- **src/secciones/python/getter-setter.jsx** (línea 26)
  - Patrón: `\bque\s+(?=es|estan|es)`
  - Sugerencia: qué (question/emphasis)
  - Texto: `que  `

- **src/secciones/python/property.jsx** (línea 34)
  - Patrón: `\bque\s+(?=es|estan|es)`
  - Sugerencia: qué (question/emphasis)
  - Texto: `que `

- **src/secciones/otros/notas-actualizacion.jsx** (línea 121)
  - Patrón: `\bque\s+(?=es|estan|es)`
  - Sugerencia: qué (question/emphasis)
  - Texto: `que `

- **src/secciones/otros/distribuciones-linux.jsx** (línea 54)
  - Patrón: `\bcomo\s+(?=es|estoy)`
  - Sugerencia: cómo (question/emphasis)
  - Texto: `Como `

- **src/secciones/pentesting/fases.jsx** (línea 73)
  - Patrón: `\bsi\s+(?=lo|la|los)`
  - Sugerencia: sí (affirmative)
  - Texto: `si `

- **src/secciones/python/modulos/re.jsx** (línea 97)
  - Patrón: `\bque\s+(?=es|estan|es)`
  - Sugerencia: qué (question/emphasis)
  - Texto: `que `

- **src/secciones/python/modulos/subprocess.jsx** (línea 36)
  - Patrón: `\bsi\s+(?=lo|la|los)`
  - Sugerencia: sí (affirmative)
  - Texto: `si `

- **src/secciones/python/modulos/subprocess.jsx** (línea 51)
  - Patrón: `\bsi\s+(?=lo|la|los)`
  - Sugerencia: sí (affirmative)
  - Texto: `si `

- **src/secciones/linux/comandos/xxd.jsx** (línea 12)
  - Patrón: `\bque\s+(?=es|estan|es)`
  - Sugerencia: qué (question/emphasis)
  - Texto: `Que `

- **src/secciones/linux/comandos/xxd.jsx** (línea 22)
  - Patrón: `\bque\s+(?=es|estan|es)`
  - Sugerencia: qué (question/emphasis)
  - Texto: `Que `

- **src/secciones/linux/comandos/xxd.jsx** (línea 46)
  - Patrón: `\bsi\s+(?=lo|la|los)`
  - Sugerencia: sí (affirmative)
  - Texto: `si `

- **src/secciones/linux/comandos/which.jsx** (línea 13)
  - Patrón: `\bque\s+(?=es|estan|es)`
  - Sugerencia: qué (question/emphasis)
  - Texto: `Que `

- **src/secciones/linux/comandos/which.jsx** (línea 20)
  - Patrón: `\bque\s+(?=es|estan|es)`
  - Sugerencia: qué (question/emphasis)
  - Texto: `Que `

- **src/secciones/linux/comandos/cifrado-cesar-tr.jsx** (línea 45)
  - Patrón: `\bque\s+(?=es|estan|es)`
  - Sugerencia: qué (question/emphasis)
  - Texto: `que `

- **src/secciones/linux/comandos/cifrado-cesar-tr.jsx** (línea 60)
  - Patrón: `\bque\s+(?=es|estan|es)`
  - Sugerencia: qué (question/emphasis)
  - Texto: `que `

- **src/secciones/linux/comandos/diff.jsx** (línea 53)
  - Patrón: `\bsi\s+(?=lo|la|los)`
  - Sugerencia: sí (affirmative)
  - Texto: `si `

- **src/secciones/linux/bash-script/estControl.jsx** (línea 37)
  - Patrón: `\b(?:echo|hecho)\b`
  - Sugerencia: echo vs hecho - check context
  - Texto: `echo`

- **src/secciones/linux/bash-script/arrays.jsx** (línea 42)
  - Patrón: `\b(?:echo|hecho)\b`
  - Sugerencia: echo vs hecho - check context
  - Texto: `echo`

- **src/secciones/linux/bash-script/arrays.jsx** (línea 43)
  - Patrón: `\b(?:echo|hecho)\b`
  - Sugerencia: echo vs hecho - check context
  - Texto: `echo`

- **src/secciones/linux/bash-script/entrada-y-salida.jsx** (línea 54)
  - Patrón: `\b(?:echo|hecho)\b`
  - Sugerencia: echo vs hecho - check context
  - Texto: `echo`


## Errores Comunes en Español - Guía de Prevención

### 1. Acentuación (Palabras interrogativas y enfáticas)

- **qué** (with accent) cuando es pregunta: "¿Qué es esto?"
- **que** (no accent) cuando es conjunción: "Espero que vengas"
- **cómo** (accent) para preguntas: "¿Cómo funciona?"
- **como** (no accent) para comparaciones: "como un ejemplo"
- **sí** (accent) para afirmaciones: "Sí, lo hice"
- **sí** (no accent) para condicionales: "Sí llueve..."
- **mí** (accent) pronombre: "Para mí es importante"
- **mi** (no accent) posesivo: "Mi casa"

### 2. Confusión de palabras homófonas

- **a/ha**: "a" preposición, "ha" verbo (haber)
- **ay/ahi/ahí**: "ay" exclamación, "ahí" adverbio de lugar
- **echo/hecho**: "echo" verbo (echar), "hecho" sustantivo
- **tuvo/tubo**: "tuvo" pasado (tener), "tubo" objeto (pipe)
- **haya/allá/hay**: "haya" subjuntivo, "allá" adverbio, "hay" verbo impersonal
- **hierva/hierba**: "hierva" verbo (hervir), "hierba" planta

### 3. Plural y Concordancia

- Los sustantivos plurales requieren verbos en plural
  - Incorrecto: "Los datos es importante"
  - Correcto: "Los datos son importantes"

### 4. Acentuación de palabras compuestas

- Con guión: ambas partes acentúan sí lo necesitan
- Sin guión: solo la última palabra se acentúa

### 5. Palabras que frecuentemente se escriben mal

- "así" (no "aci")
- "también" (no "tambien")
- "aún" (with accent = still) vs "aun" (even)
- "entonces" (no "entónces")
- "después" (no "despues")
- "párrafo" (not "parrafo")
- "pequeño" (not "pequeño" without ñ)

### 6. Hábitos para evitar errores

1. **Leer en voz alta**: Detecta inconsistencias rítmicas
2. **Usar herramientas**: Activar revisor ortográfico de tú editor
3. **Diccionario mental**: Crear flashcards de palabras frecuentes
4. **Contexto**: Preguntarse "¿Es pregunta/énfasis?" → sí = acentúa
5. **Revisar después de escribir**: Última pasada antes de commit
6. **Consulta rápida**: Tener plantilla de dudas frecuentes

## Recomendaciones para el Proyecto

- **Editor**: Configurar ESLint/Prettier con plugin de Spanish spell-check
- **Pre-commit Hook**: Validar ortografía antes de commit
- **Revisión Manual**: Dedicar 10 minutos por sesión a revisar nueva documentación
- **Glosario**: Crear documento con términos técnicos estándar (p. ej., "host", "payload", "bash-script", etc.)

## Próximos pasos

Revisa los hallazgos arriba y corrige según sea necesario. Los patrones detectados requieren **contexto** para confirmar que son errores reales.

---
*Reporte generado automáticamente.*
