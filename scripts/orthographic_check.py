#!/usr/bin/env python3
"""
Spanish spell/grammar checker for the Web-Notas project.
Detects common Spanish spelling mistakes, missing accents, and common errors.
"""
import re
import os
from pathlib import Path

# Common Spanish spelling mistakes and corrections
SPANISH_ERRORS = {
    # Accents and diacritics
    r'\bque\s+(?=es|estan|es)': 'qué (question/emphasis)',
    r'\bcomo\s+(?=es|estoy)': 'cómo (question/emphasis)',
    r'\bsi\s+(?=lo|la|los)': 'sí (affirmative)',
    r'\bel\s+(?=cual|cual|que)': 'él (pronoun) vs el (article) - check context',
    r'\bmi\s+(?=computadora|sistema)': 'mí (pronoun) vs mi (possessive)',
    r'\bmas\b(?!\s+grande)': 'más (usually) vs mas (but/however)',
    
    # Common typos
    r'\bestos\s+(?=conceptos|ejemplos)': 'estos (check: estoS?)',
    r'\b(?:haya|ah)\b': 'haya vs ahí vs hay vs a (check context)',
    r'\b(?:halla|alla)\b': 'halla (find) vs allá (there)',
    
    # Missing plural agreement
    r'\b(?:los|las)\s+\w+\s+es\b': 'Check plural agreement (es → son)',
    
    # Common word confusions
    r'\b(?:echo|hecho)\b': 'echo vs hecho - check context',
    r'\b(?:tuvo|tubo)\b': 'tuvo (verb) vs tubo (pipe)',
    r'\b(?:hierva|hierba)\b': 'hierva (boil) vs hierba (grass)',
}

# Files to check
ROOT = os.path.dirname(os.path.dirname(__file__))
SRC = os.path.join(ROOT, 'src')

# Collect all JSX files
jsx_files = list(Path(SRC).rglob('*.jsx')) + list(Path(SRC).rglob('*.jsx'))
md_files = list(Path(ROOT).rglob('*.md'))

all_files = jsx_files + md_files

findings = []

for file_path in all_files:
    try:
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        
        # Extract text (remove code blocks, HTML tags, etc. for cleaner analysis)
        # Keep a simplified version: remove <...>, backticks, etc.
        text = re.sub(r'<[^>]+>', ' ', content)  # Remove tags
        text = re.sub(r'`[^`]*`', ' ', text)      # Remove inline code
        text = re.sub(r'```[\s\S]*?```', ' ', text)  # Remove code blocks
        
        # Look for common errors
        for pattern, hint in SPANISH_ERRORS.items():
            matches = list(re.finditer(pattern, text, re.IGNORECASE))
            if matches:
                rel_path = os.path.relpath(file_path, ROOT)
                for match in matches[:2]:  # Limit to first 2 matches per pattern
                    line_num = content[:match.start()].count('\n') + 1
                    findings.append({
                        'file': rel_path,
                        'line': line_num,
                        'pattern': pattern,
                        'hint': hint,
                        'matched_text': match.group(0)[:50],
                    })
    except Exception as e:
        pass

# Generate report
report_path = os.path.join(ROOT, 'scripts', 'orthographic_review.md')
with open(report_path, 'w', encoding='utf-8') as f:
    f.write("""# Revisión Ortográfica - Web-Notas-de-Hacking

## Resumen

Análisis de faltas ortográficas comunes, acentuación y errores gramaticales en español en todos los archivos del proyecto (JSX, MD).

## Hallazgos

""")
    
    if not findings:
        f.write("✓ No se detectaron patrones sospechosos en la primera pasada.\n\n")
    else:
        f.write(f"Se encontraron **{len(findings)}** coincidencias potenciales:\n\n")
        for finding in findings[:50]:  # Show first 50
            f.write(f"- **{finding['file']}** (línea {finding['line']})\n")
            f.write(f"  - Patrón: `{finding['pattern']}`\n")
            f.write(f"  - Sugerencia: {finding['hint']}\n")
            f.write(f"  - Texto: `{finding['matched_text']}`\n\n")

    f.write("""
## Errores Comunes en Español - Guía de Prevención

### 1. Acentuación (Palabras interrogativas y enfáticas)

- **qué** (with accent) cuando es pregunta: "¿Qué es esto?"
- **que** (no accent) cuando es conjunción: "Espero que vengas"
- **cómo** (accent) para preguntas: "¿Cómo funciona?"
- **como** (no accent) para comparaciones: "como un ejemplo"
- **sí** (accent) para afirmaciones: "Sí, lo hice"
- **si** (no accent) para condicionales: "Si llueve..."
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

- Con guión: ambas partes acentúan si lo necesitan
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
2. **Usar herramientas**: Activar revisor ortográfico de tu editor
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
""")

print(f"✓ Reporte de revisión ortográfica generado: {report_path}")
print(f"  Hallazgos potenciales: {len(findings)}")
