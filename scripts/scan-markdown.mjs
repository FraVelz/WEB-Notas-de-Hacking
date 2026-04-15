#!/usr/bin/env node
/**
 * Escáner heurístico de Markdown para el proyecto (Starlight / CommonMark).
 * Códigos: MD-FENCE-INLINE (A), MD-FENCE-SAMELINE (B), MD-FENCE-UNBALANCED (C),
 * MD-ATX-NOSPACE (D), MD-LINK-NOCLOSE (E), MD-TABLE-SUSPECT (F),
 * MD-BQ-NOSPACE (G), MD-FRONTMATTER (H).
 *
 * Uso: node scripts/scan-markdown.mjs [--warn-only] [--no-notas]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

const args = process.argv.slice(2);
/** Si true: solo imprime advertencias (F–H), no errores A–E */
const warnOnly = args.includes('--warn-only');
const noNotas = args.includes('--no-notas');
/** Si true: no imprime advertencias F–H */
const noWarn = args.includes('--no-warn');

/** @typedef {{ code: string, severity: 'error' | 'warn', file: string, line: number, msg: string, snippet: string }} Issue */

/** @type {Issue[]} */
const issues = [];

function walkMd(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walkMd(p, out);
    else if (ent.name.endsWith('.md')) out.push(p);
  }
  return out.sort();
}

/**
 * Líneas estrictamente dentro del cuerpo de un bloque fenced (entre ``` de apertura y cierre).
 * @param {string[]} lines
 * @returns {boolean[]}
 */
function computeInCodeBody(lines) {
  const inBody = new Array(lines.length).fill(false);
  let inside = false;
  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].replace(/^\s*/, '');
    if (/^(`{3,})([a-zA-Z0-9_-]*)\s*$/.test(trimmed)) {
      inside = !inside;
      continue;
    }
    inBody[i] = inside;
  }
  return inBody;
}

/**
 * @param {string} line
 * @param {number} lineNum 1-based
 * @param {string} file
 */
function ruleA(line, lineNum, file, inCodeBody) {
  if (inCodeBody) return;
  if (!line.includes('```')) return;
  const afterIndent = line.replace(/^\s*/, '');
  if (afterIndent.startsWith('`')) return;
  if (/```[a-zA-Z][a-zA-Z0-9_-]*/.test(line)) {
    issues.push({
      code: 'MD-FENCE-INLINE',
      severity: 'error',
      file,
      line: lineNum,
      msg: 'Cerca ```idioma en mitad de línea (debe empezar la línea tras sangría ≤3 espacios)',
      snippet: line.trim().slice(0, 140),
    });
  }
}

/**
 * @param {string} line
 * @param {number} lineNum
 * @param {string} file
 */
function ruleB(line, lineNum, file, inCodeBody) {
  if (inCodeBody) return;
  const m = line.match(/^\s*```([a-zA-Z][a-zA-Z0-9_-]*)\s+(\S.*)$/);
  if (!m) return;
  const rest = m[2].trim();
  if (!rest) return;
  issues.push({
    code: 'MD-FENCE-SAMELINE',
    severity: 'error',
    file,
    line: lineNum,
    msg: 'Apertura ``` con contenido en la misma línea',
    snippet: line.trim().slice(0, 140),
  });
}

/**
 * @param {string[]} lines
 * @param {string} file
 */
function ruleC(lines, file) {
  let inFence = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.replace(/^\s*/, '');
    const fenceOnly = /^(`{3,})([a-zA-Z0-9_-]*)\s*$/.test(trimmed);
    if (fenceOnly) {
      inFence = !inFence;
    }
  }
  if (inFence) {
    issues.push({
      code: 'MD-FENCE-UNBALANCED',
      severity: 'error',
      file,
      line: lines.length,
      msg: 'Cerca de código posiblemente sin cerrar (balance al EOF)',
      snippet: '(fin de archivo)',
    });
  }
}

/**
 * @param {string} line
 * @param {number} lineNum
 * @param {string} file
 */
function ruleD(line, lineNum, file, inCodeBody) {
  if (inCodeBody) return;
  if (/^#!/.test(line.trim())) return;
  if (/^#{2,6}(?=[^\s#])/.test(line.replace(/^\s*/, ''))) {
    issues.push({
      code: 'MD-ATX-NOSPACE',
      severity: 'error',
      file,
      line: lineNum,
      msg: 'Título ATX sin espacio tras # (# #)',
      snippet: line.trim().slice(0, 120),
    });
  }
}

/**
 * @param {string} line
 * @param {number} lineNum
 * @param {string} file
 */
function ruleE(line, lineNum, file, inCodeBody) {
  if (inCodeBody) return;
  if (!/\]\(/.test(line)) return;
  const idx = line.lastIndexOf('](');
  if (idx === -1) return;
  const after = line.slice(idx + 2);
  if (!after.includes(')') && /\S/.test(after)) {
    issues.push({
      code: 'MD-LINK-NOCLOSE',
      severity: 'error',
      file,
      line: lineNum,
      msg: 'Enlace markdown sin ) de cierre en la línea',
      snippet: line.trim().slice(0, 140),
    });
  }
}

/**
 * @param {string[]} lines
 * @param {string} file
 */
function ruleF(lines, file, inCodeBody) {
  for (let i = 0; i < lines.length - 1; i++) {
    if (inCodeBody[i] || inCodeBody[i + 1]) continue;
    const line = lines[i];
    const trimmed = line.trim();
    if (!/^\|/.test(trimmed) || !trimmed.includes('|')) continue;
    if (/^\|[\s\-:|]+\|\s*$/.test(trimmed)) continue;
    const next = lines[i + 1]?.trim() ?? '';
    if (/^\|[\s\-:|]+\|/.test(next)) continue;
    if (next.startsWith('|')) continue;
    if (!trimmed.includes('---')) {
      issues.push({
        code: 'MD-TABLE-SUSPECT',
        severity: 'warn',
        file,
        line: i + 1,
        msg: 'Fila tipo tabla sin separador GFM en la línea siguiente',
        snippet: trimmed.slice(0, 120),
      });
    }
  }
}

/**
 * @param {string} line
 * @param {number} lineNum
 * @param {string} file
 */
function ruleG(line, lineNum, file, inCodeBody) {
  if (inCodeBody) return;
  const t = line.replace(/^\s*/, '');
  if (/^>(?=[^\s>#])/.test(t) && t.length > 1) {
    issues.push({
      code: 'MD-BQ-NOSPACE',
      severity: 'warn',
      file,
      line: lineNum,
      msg: 'Cita > sin espacio tras >',
      snippet: line.trim().slice(0, 120),
    });
  }
}

/**
 * @param {string[]} lines
 * @param {string} file
 */
function ruleH(lines, file) {
  if (lines[0]?.trim() !== '---') return;
  let found = false;
  for (let i = 1; i < Math.min(lines.length, 80); i++) {
    if (lines[i]?.trim() === '---') {
      found = true;
      break;
    }
  }
  if (!found) {
    issues.push({
      code: 'MD-FRONTMATTER',
      severity: 'warn',
      file,
      line: 1,
      msg: 'Frontmatter YAML: no se encontró cierre ---',
      snippet: lines[0],
    });
  }
}

function scanFile(filePath) {
  const rel = path.relative(ROOT, filePath);
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split(/\r?\n/);
  const inCodeBody = computeInCodeBody(lines);

  ruleH(lines, rel);
  ruleC(lines, rel);
  ruleF(lines, rel, inCodeBody);

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const n = i + 1;
    const inBody = inCodeBody[i];
    ruleA(line, n, rel, inBody);
    ruleB(line, n, rel, inBody);
    ruleD(line, n, rel, inBody);
    ruleE(line, n, rel, inBody);
    ruleG(line, n, rel, inBody);
  }
}

function main() {
  const dirs = [path.join(ROOT, 'src', 'content')];
  if (!noNotas) {
    dirs.push(path.join(ROOT, 'notas'));
  }

  /** @type {string[]} */
  let files = [];
  for (const d of dirs) {
    files = files.concat(walkMd(d));
  }

  for (const f of files) {
    scanFile(f);
  }

  const errors = issues.filter((i) => i.severity === 'error');
  const warns = issues.filter((i) => i.severity === 'warn');

  /** @type {Issue[]} */
  let toPrint;
  if (warnOnly) {
    toPrint = warns;
  } else if (noWarn) {
    toPrint = errors;
  } else {
    toPrint = [...errors, ...warns].sort((a, b) => {
      if (a.file !== b.file) return a.file.localeCompare(b.file);
      return a.line - b.line;
    });
  }

  for (const iss of toPrint) {
    console.log(`${iss.severity.toUpperCase()} ${iss.code} ${iss.file}:${iss.line}`);
    console.log(`  ${iss.msg}`);
    console.log(`  ${iss.snippet}`);
    console.log('');
  }

  const errCount = errors.length;
  const warnCount = warns.length;

  console.log('---');
  console.log(`Errores: ${errCount}, Advertencias: ${warnCount}`);

  const exitCode = warnOnly ? 0 : errCount > 0 ? 1 : 0;
  process.exit(exitCode);
}

main();
