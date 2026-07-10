# Inventario de contenido (Fase 0)

Criterio “nota hecha”: ver [`.cursor/rules/notas-voz.mdc`](rules/notas-voz.mdc) —
contexto corto + tabla/lista + ejemplo + link oficial si aporta.

## Señales IA / HTML (Fase 1)

### 1a — Conceptos + pentesting

- `src/content/docs/pentesting/Cajas.md` — Ventajas/Desventajas
- `src/content/docs/conceptos-basicos/LegalidadHacking.md` — En resumen, blockquote
- `src/content/docs/conceptos-basicos/ConceptosBasicos.md` — blockquote

### 1b — Linux

- `linux/GruposYUsuarios.md` — En resumen, ✅, HTML
- `linux/AyudaLinux.md` — “A continuación…”
- `linux/ComandosLinux.md` — blockquote
- `linux/comandos/{Less,Xxd,Which,Diff,CifradoCesarTr,Ncat}.md`
- `linux/{Arrays,ManipulacionDeStrings,EntradaYSalida,Fundamentos,Permisos,Condiciones,Funciones,Busqueda}.md`

### 1c — Python

- `python/{GetterSetter,Property,Classmethod,VariablesClases}.md` — ✅, En resumen

### 1d — Resto

- `redes/Teoria.md` — Ventajas/Desventajas HTML, blockquote
- `otros/{DistribucionesLinux,Recursos}.md` — blockquote

## Páginas finas (Fase 2)

- `criptografia/*` (~31–35 líneas)
- `forense/*` (~32–43 líneas)
- `pentesting/{Fases,Cajas}.md`
- `osint/Basic.md` — markdown roto (`OSINT**`)

## Huecos de mapa (Fases 3–5)

- Sin `web/`, `privesc/`, `ad/`, `ctf/`
- Pentesting solo 2 páginas

## Cierre (Fase 6)

- `starlight-sidebar.mjs`, `index.md`, `otros/NotasActualizacion.md`
