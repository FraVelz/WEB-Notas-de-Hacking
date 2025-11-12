#!/usr/bin/env python3
"""
Fix escaped brace artifacts introduced during CodeBlock conversion.
Replaces sequences like {"{"}  with { and {"}"}  with } ONLY inside CodeBlock code={`...`} templates.
"""
import re
import os

FIXES_NEEDED = [
    "src/secciones/windows/alias-powershell.jsx",
    "src/secciones/windows/powershell-cmd.jsx",
    "src/secciones/linux/bash-script/estControl.jsx",
    "src/secciones/linux/bash-script/manipulacion-de-strings.jsx",
    "src/secciones/linux/bash-script/funciones.jsx",
    "src/secciones/python/modulos/threading.jsx",
    "src/secciones/python/modulos/re.jsx",
    "src/secciones/python/modulos/subprocess.jsx",
    "src/secciones/python/modulos/tkinter.jsx",
    "src/secciones/python/modulos/multiprocessing.jsx",
    "src/secciones/python/modulos/request.jsx",
    "src/secciones/python/todo-python.jsx",
]

ROOT = os.path.dirname(os.path.dirname(__file__))
FIXED_FILES = []
ERRORS = []

# Pattern: match CodeBlock code={`...`} and capture everything between backticks
codeblock_pattern = re.compile(
    r'<CodeBlock\s+code=\{`((?:[^`]|`(?!})|\\`)*?)`\}\s+language="([^"]+)"\s*/>',
    re.DOTALL
)

def fix_escaped_braces_in_code(code_text):
    """
    Replace escaped brace sequences only where appropriate.
    - {"{"}  → {
    - {"}"}  → }
    - Avoid over-replacing by being conservative.
    """
    # Replace the specific problematic sequences
    code_text = code_text.replace('{"{"}', '{')
    code_text = code_text.replace('{"}"}', '}')
    
    # Handle the case where there's a misplaced I character (corruption artifact)
    # Example: 17I{"}"}  should become 17}
    code_text = re.sub(r'I\{"\}"\}', '}', code_text)
    
    return code_text

for rel_path in FIXES_NEEDED:
    file_path = os.path.join(ROOT, rel_path)
    if not os.path.exists(file_path):
        ERRORS.append((rel_path, "File not found"))
        continue
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find all CodeBlock matches
        matches = list(codeblock_pattern.finditer(content))
        if not matches:
            continue
        
        # Replace each match with fixed version
        new_content = content
        offset = 0
        
        for match in matches:
            code_text = match.group(1)
            language = match.group(2)
            
            # Fix the code text
            fixed_code = fix_escaped_braces_in_code(code_text)
            
            if fixed_code != code_text:
                # Build replacement
                old_full = match.group(0)
                new_full = f'<CodeBlock code={{`{fixed_code}`}} language="{language}" />'
                
                # Find and replace in new_content
                idx = new_content.find(old_full)
                if idx != -1:
                    new_content = new_content[:idx] + new_full + new_content[idx + len(old_full):]
        
        # Write back if changed
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            FIXED_FILES.append(rel_path)
    
    except Exception as e:
        ERRORS.append((rel_path, str(e)))

print("Fixed files:")
for f in FIXED_FILES:
    print(f"  ✓ {f}")

if ERRORS:
    print("\nErrors:")
    for f, e in ERRORS:
        print(f"  ✗ {f}: {e}")

print(f"\nTotal fixed: {len(FIXED_FILES)}")
