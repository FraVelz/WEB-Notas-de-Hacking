#!/usr/bin/env python3
"""
Fix bash parameter expansion in CodeBlock templates.
Within CodeBlock code={`...`}, bash variables like ${var} need special handling
to avoid being interpreted as JSX expressions.

Solution: inside the template string, we can't use ${} directly.
We'll use the pattern: echo and print the literal, or use shell quotes.
"""
import re

file_path = "/home/fravelz/Documentos/WEB/Web-Notas-de-Hacking/src/secciones/linux/bash-script/manipulacion-de-strings.jsx"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find all CodeBlock code={`...`} patterns and check for ${ inside
# Pattern to match CodeBlock code={`...`} sections
codeblock_pattern = re.compile(
    r'<CodeBlock\s+code=\{`((?:[^`]|\\`)*?)`\}\s+language="bash"\s*/>',
    re.DOTALL
)

def escape_dollar_braces(code_text):
    """
    Escape ${ and } in bash code by using string concatenation trick or
    by representing them as literal strings that won't trigger JSX interpretation.
    
    Actually, a better approach: use ${...} within backticks but ensure they're
    literally printed by escaping the $ or using a workaround.
    
    Simplest: represent ${var} as ${ + "var" + } using string tricks
    """
    # For bash snippets with ${...}, we can't directly use them in JSX template strings
    # Instead, represent them as literal strings:
    # ${cadena:0:4} -> ${"${cadena:0:4}"}  (shows the literal string)
    # Or better: use newline-separated output that doesn't trigger JSX
    
    # Replace ${ with ${\{ and } with }\}? No, that doesn't work in template strings either.
    
    # Best solution: the code should display the literal ${...} as text.
    # In JSX template strings, we can't interpolate, so we use the text as-is
    # but we need to escape the braces for display.
    
    # Actually, let me think: the template string ` is a BACKTICK, not quotes.
    # Inside a backtick template literal in JavaScript, ${ IS interpolation.
    # So ${variable} inside backticks will try to interpolate.
    
    # The solution: don't use ${...} directly. Instead, show the bash syntax as escaped text.
    # We can represent ${var} by breaking it or using backslash escapes or concatenation.
    
    # Since this is meant to be displayed text (code snippet), we can use:
    # Use ${...} but escape with backslash or unicode
    
    # Simplest approach that works: replace ${ with a version that won't interpolate
    # We can use: ${ + String.fromCharCode(123) or similar, but that's not clean.
    
    # Better: just use text that shows ${} literally without triggering interpolation.
    # In a backtick template, ${ triggers interpolation, so we need to avoid the ` context
    # or use a different representation.
    
    # Let me use a workaround: the code text can include literal ${} if we don't use backticks
    # Actually wait - in a backtick, ${ always tries to interpolate UNLESS we escape the $
    
    # Let me check: echo "\${var}" - with backslash, it's literal
    # So in the bash code, we should show: echo "\${cadena:0:4}"
    # But that changes the meaning (adds a backslash to the actual command)
    
    # Real solution: we represent the display of ${var} as the actual bash command with
    # proper escaping so that when shown, it looks right.
    # But we need to be in a context where ${ is NOT interpolated.
    
    # The cleanest fix: use JSX string concatenation or a different component
    # OR: don't use backticks, use quotes and escape properly
    
    # For now, let's replace ${...} with ${ ... } (spaces) to break the pattern
    # This won't work because JSX still sees ${
    
    # Actually, the REAL fix: we should NOT use backtick template strings for
    # code that contains ${} in bash. We should use regular strings or a different approach.
    
    # Let me try: replace ${...} with an escaped version that still shows correctly
    # Replace `${}` with `$` + `{} ` (broken apart) - doesn't work
    
    # ACTUAL SOLUTION: Use a string that doesn't have $ followed immediately by {
    # We can add a comment or newline between them
    # OR: encode the $ as something else temporarily
    
    # For this file, let me just show the code with literal \$ to indicate the variable
    # and add a comment explaining
    
    # Or: use Python f-strings or template display differently
    
    # Simplest working solution I can think of:
    # Show the bash syntax using echo with quotes so the $ is literal in the display
    # E.g., instead of:  echo "${var}"
    #       show: echo '${}' which displays as is
    #       OR: echo "value='${var}'" - but that doesn't work for our case
    
    # WORKING SOLUTION: Show bash code using single quotes where needed to escape $
    # Bash: echo '${var}' displays literal ${var}
    # So in our template, we can show: echo '${cadena:0:4}' to display the bash syntax
    
    # But that changes the actual bash code shown...
    
    # I think the REAL answer is: the conversion script broke this file because it
    # tried to put bash parameter expansion syntax into a JSX backtick template,
    # which is fundamentally incompatible.
    
    # The correct fix is to either:
    # 1. Not use CodeBlock for code with ${...}, use a different display method
    # 2. Properly escape the $ in the template: \${ becomes $ + { when displayed
    # 3. Use a format string that doesn't conflict: represent as "$( ... )" instead of "${ ... }"
    
    # For pragmatism, let's use approach #2: escape $ with backslash
    # In the code snippet display, \${...} will show as ${...} visually
    # (when rendered in terminal or IDE)
    
    return code_text.replace('${', r'\${')

new_content = content
for match in codeblock_pattern.finditer(content):
    code = match.group(1)
    if '${' in code:
        fixed_code = escape_dollar_braces(code)
        old = match.group(0)
        new = f'<CodeBlock code={{`{fixed_code}`}} language="bash" />'
        new_content = new_content.replace(old, new, 1)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Fixed manipulacion-de-strings.jsx: escaped ${ patterns")
