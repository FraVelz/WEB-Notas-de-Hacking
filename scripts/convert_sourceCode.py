#!/usr/bin/env python3
import re
import os
import html

ROOT = os.path.dirname(os.path.dirname(__file__))  # project root
SRC = os.path.join(ROOT, 'src')
SECCIONES = os.path.join(SRC, 'secciones')
COMPONENT_PATH = os.path.join(SRC, 'componentes', 'moleculas', 'codigo.jsx')

pattern = re.compile(r'(?:<div[^>]*className="sourceCode"[^>]*>\s*<pre[^>]*className="sourceCode\s*([^\">\s]+)"[^>]*>)([\s\S]*?)</pre>\s*</div>', re.IGNORECASE)
span_tag = re.compile(r'<(?:/?span|/?code|/?pre|Enlace[^>]*/?>)[^>]*>', re.IGNORECASE)
# also remove <Enlace ...></Enlace>
enlace_tag = re.compile(r'<Enlace[^>]*>(?:</Enlace>)?', re.IGNORECASE)

files_changed = []
errors = []

for dirpath, dirnames, filenames in os.walk(SECCIONES):
    for fn in filenames:
        if not fn.endswith('.jsx'):
            continue
        path = os.path.join(dirpath, fn)
        with open(path, 'r', encoding='utf-8') as f:
            src = f.read()

        matches = list(pattern.finditer(src))
        if not matches:
            continue

        new_src = src
        offset = 0
        success = True
        for m in matches:
            lang = m.group(1).strip() if m.group(1) else 'text'
            inner = m.group(2)
            # remove <code> tags and span/Enlace tags but keep text
            # remove <Enlace ...> and </Enlace>
            inner2 = re.sub(r'<Enlace[^>]*>', '', inner)
            inner2 = re.sub(r'</Enlace>', '', inner2)
            # remove <code ...> and </code>
            inner2 = re.sub(r'<code[^>]*>', '', inner2)
            inner2 = re.sub(r'</code>', '', inner2)
            # remove all span tags
            inner2 = re.sub(r'<span[^>]*>', '', inner2)
            inner2 = re.sub(r'</span>', '', inner2)
            # collapse multiple spaces and newlines from leading indentation
            # split by lines and strip leading/trailing whitespace for each line
            lines = inner2.splitlines()
            cleaned_lines = []
            for line in lines:
                # unescape HTML entities
                s = html.unescape(line)
                # remove any remaining angle-bracket tags
                s = re.sub(r'<[^>]+>', '', s)
                # trim
                cleaned_lines.append(s.strip())
            # remove empty lines at start/end
            while cleaned_lines and cleaned_lines[0] == '':
                cleaned_lines.pop(0)
            while cleaned_lines and cleaned_lines[-1] == '':
                cleaned_lines.pop()
            code_text = '\n'.join(cleaned_lines)
            # choose language token mapping: 'python' or 'bash' else keep as-is
            language = lang if lang in ('python', 'bash', 'javascript') else 'bash'

            # prepare replacement (use backticks around code string)
            replacement = '<CodeBlock code={`' + code_text + '`} language="' + language + '" />'

            # replace in new_src at the correct slice
            start, end = m.span()
            # adjust for offset
            start += offset
            end += offset
            new_src = new_src[:start] + replacement + new_src[end:]
            # update offset for next replacements
            offset += len(replacement) - (end - start)

        # ensure import exists
        # compute relative import path from file to COMPONENT_PATH
        rel = os.path.relpath(COMPONENT_PATH, start=dirpath)
        import_line = f'import CodeBlock from "{rel.replace(os.path.sep, '/') }";'
        if 'import CodeBlock' not in new_src:
            # find the last import in the header (after other imports)
            m_imports = re.search(r'(import [\s\S]*?\n)(\n|function|const|export)', new_src)
            # simpler: insert after the last import statement
            imports = list(re.finditer(r'^import .*;$', new_src, re.M))
            if imports:
                last = imports[-1]
                insert_pos = last.end()
                new_src = new_src[:insert_pos] + '\n' + import_line + new_src[insert_pos:]
            else:
                # add at top
                new_src = import_line + '\n' + new_src

        # write back
        try:
            with open(path, 'w', encoding='utf-8') as f:
                f.write(new_src)
            files_changed.append(path)
        except Exception as e:
            success = False
            errors.append((path, str(e)))

print('Done')
print('files_changed:', len(files_changed))
for p in files_changed:
    print(' CHANGED:', p)
if errors:
    print('\nErrors:')
    for p, e in errors:
        print(p, e)
