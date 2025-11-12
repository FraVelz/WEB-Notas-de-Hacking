#!/usr/bin/env python3
import os, re, json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TARGET_DIRS = [ROOT / 'src', ROOT]
EXCLUDE_EXT = {'.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', '.db'}

# Patterns to protect (code blocks / inline code / CodeBlock code prop)
protect_patterns = [
    re.compile(r'(<CodeBlock\s+code=\{`[\s\S]*?`\}\s*[^>]*>)', re.M),
    re.compile(r'(```[\s\S]*?```)', re.M),
    re.compile(r'(`[^`]*`)', re.M),
    re.compile(r'(<pre[^>]*>[\s\S]*?</pre>)', re.M),
    re.compile(r'(<code[^>]*>[\s\S]*?</code>)', re.M),
]

# Conservative replacements: (pattern, replacement, flags)
replacements = [
    (re.compile(r'(?<=\b)si(?=\b)', re.IGNORECASE), lambda m: 'Sí' if m.group(0)[0].isupper() else 'sí'),
    (re.compile(r'(?<=\b)mas(?=\b)', re.IGNORECASE), lambda m: 'Más' if m.group(0)[0].isupper() else 'más'),
    (re.compile(r'(?<=\b)tu(?=\b)', re.IGNORECASE), lambda m: 'Tú' if m.group(0)[0].isupper() else 'tú'),
]

changed = {}
ambiguous = []

def protect_text(s):
    tokens = []
    def _replace(m):
        idx = len(tokens)
        tokens.append(m.group(0))
        return f"__PROTECT_{idx}__"
    for patt in protect_patterns:
        s = patt.sub(_replace, s)
    return s, tokens

def restore_text(s, tokens):
    for i, t in enumerate(tokens):
        s = s.replace(f"__PROTECT_{i}__", t)
    return s

# Only operate on text files we expect: .md, .jsx, .html, .txt
file_ext_whitelist = {'.md', '.jsx', '.html', '.txt', '.json'}

for base in TARGET_DIRS:
    for path in base.rglob('*'):
        if path.is_file() and path.suffix.lower() in file_ext_whitelist and path.suffix.lower() not in EXCLUDE_EXT:
            rel = path.relative_to(ROOT)
            try:
                text = path.read_text(encoding='utf-8')
            except Exception as e:
                continue
            original = text
            protected_text, tokens = protect_text(text)
            total_repl = [0]
            for patt, repl in replacements:
                def _repl(m):
                    total_repl[0] += 1
                    return repl(m)
                protected_text = patt.sub(_repl, protected_text)
            new_text = restore_text(protected_text, tokens)
            if new_text != original:
                path.write_text(new_text, encoding='utf-8')
                changed[str(rel)] = total_repl[0]
                # If many replacements in a file, mark ambiguous for manual review
                if total_repl[0] > 10:
                    ambiguous.append(str(rel))

report = {
    'root': str(ROOT),
    'files_changed': changed,
    'ambiguous': ambiguous,
}
with open(ROOT / 'scripts' / 'spelling_report.json', 'w', encoding='utf-8') as f:
    json.dump(report, f, indent=2, ensure_ascii=False)

print('Done. Files changed:', len(changed))
print('See scripts/spelling_report.json for details')
