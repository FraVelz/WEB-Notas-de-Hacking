import os
import re

# === Función para escapar llaves sin romper {"{"} y {"}"} ===
def escapar_llaves(linea):
    return re.sub(r'(?<!\{)\{(?!["\{])', '{"{"}', re.sub(r'(?<!["\}])\}(?!\})', '{"}"}', linea))

# === Reemplazo de markdown simple (*texto*, **texto**) ===
def reemplazar_estilos_md(linea):
    # Negritas primero (**texto**)
    linea = re.sub(r'\*\*(.*?)\*\*', r'<b>\1</b>', linea)
    # Cursivas luego (*texto*)
    linea = re.sub(r'\*(.*?)\*', r'<i>\1</i>', linea)
    return linea

def insertar(codigo, nivel=4):
    return "\t" * nivel + codigo + "\n"

def ModificarTexto(lineas):
    nombre = 'NameAbcd'

    importado = {
        'Estructura': 1,
        'Titulo': 0,
        'Texto': 0,
        'Imagen': 0,
        'Enlace': 0,
        'Tabla': 0,
        'Lista': 0,
        'Linea': 0,
        'Codigo': 0,
        'Nota': 0,
    }

    importaciones = (
        'import Estructura, { TemarioAsideCompleto, TemarioCompleto } '
        'from "./../../componentes/estructura.jsx";'
    )

    resultado = ''

    en_bloque_codigo = False
    codigo_actual = []
    tabla_actual = []
    en_tabla = False

    for linea in lineas:
        linea = linea.rstrip('\n')

        # === BLOQUE DE CÓDIGO ===
        if linea.strip().startswith("```"):
            if not importado["Codigo"]:
                importaciones += '\nimport Codigo from "./../../componentes/codigo.jsx";'
                importado["Codigo"] = 1

            if en_bloque_codigo:
                # Cerrar bloque
                en_bloque_codigo = False
                contenido = "\n".join(codigo_actual)
                resultado += insertar('<Codigo>')
                resultado += contenido + "\n"
                resultado += insertar('</Codigo>\n')
                codigo_actual = []
            else:
                en_bloque_codigo = True
            continue

        if en_bloque_codigo:
            codigo_actual.append(insertar(f'{{"{linea}"}}', 5))
            continue

        # === NOTA ===
        if linea.startswith('> '):
            if not importado['Nota']:
                importaciones += '\nimport Nota from "./../../componentes/nota.jsx";'
                importado['Nota'] = 1
            texto = linea.replace('> ', '')
            resultado += insertar(f'<Nota>{texto}</Nota>')
            continue

        # === NOMBRE DEL COMPONENTE ===
        if linea.startswith(': '):
            nombre = linea.replace(': ', '').title().replace(' ', '')
            continue

        # === TÍTULOS ===
        if linea.startswith('# '):
            if not importado['Titulo']:
                importaciones += '\nimport Titulo from "./../../componentes/titulo.jsx";'
                importado['Titulo'] = 1
            titulo = linea.replace('# ', '')
            resultado += insertar(f'<Titulo title="h1" className="text-center">{titulo}</Titulo>\n')
            resultado += insertar('<TemarioCompleto temario={Temario} />\n')
            continue

        if linea.startswith('## '):
            if not importado['Titulo']:
                importaciones += '\nimport Titulo from "./../../componentes/titulo.jsx";'
                importado['Titulo'] = 1

            titulo = linea.replace('## ', '')
            if titulo.lower() == "temario":
                resultado += insertar('<Titulo title="h2" className="2xl:hidden">Temario</Titulo>\n')
            else:
                resultado += insertar(f'<Titulo title="h2">{titulo}</Titulo>\n')
            continue

        if linea.startswith('### '):
            if not importado['Titulo']:
                importaciones += '\nimport Titulo from "./../../componentes/titulo.jsx";'
                importado['Titulo'] = 1
            titulo = linea.replace('### ', '')
            resultado += insertar(f'<Titulo title="h3">{titulo}</Titulo>\n')
            continue

        # === IMÁGENES ===
        if linea.startswith('!['):
            if not importado['Imagen']:
                importaciones += '\nimport Imagen from "./../../componentes/imagen.jsx";'
                importado['Imagen'] = 1
            match = re.match(r'!\[(.*?)\]\((.*?)\)', linea)
            if match:
                alt, src = match.groups()
                resultado += insertar(f'<Imagen alt="{alt}" src="{src}" />\n')
            continue

        # === ENLACES ===
        if linea.startswith('['):
            if not importado['Enlace']:
                importaciones += '\nimport Enlace from "./../../componentes/enlace.jsx";'
                importado['Enlace'] = 1
            match = re.match(r'\[(.*?)\]\((.*?)\)', linea)
            if match:
                texto_link, href = match.groups()
                resultado += insertar(f'<Enlace href="{href}">{texto_link}</Enlace>\n')
            continue

        # === TABLAS ===
        if linea.startswith('|'):
            if not importado['Tabla']:
                importaciones += '\nimport Tabla from "./../../componentes/tabla.jsx";'
                importado['Tabla'] = 1
            en_tabla = True
            tabla_actual.append(linea)
            continue

        # Si termina una tabla
        if en_tabla and not linea.startswith('|'):
            contenido_tabla = "\n".join(tabla_actual)
            resultado += insertar(f'<Tabla>\n{contenido_tabla}\n</Tabla>')
            tabla_actual = []
            en_tabla = False

        # === LISTAS ===
        if linea.strip().startswith('* '):
            if not importado['Lista']:
                importaciones += '\nimport Lista from "./../../componentes/lista.jsx";'
                importado['Lista'] = 1
            item = linea.replace('* ', '')
            item = reemplazar_estilos_md(escapar_llaves(item))
            resultado += insertar(f'<ul>{item}</ul>')
            continue

        if linea.strip().startswith('- '):
            if not importado['Lista']:
                importaciones += '\nimport Lista from "./../../componentes/lista.jsx";'
                importado['Lista'] = 1
            item = linea.replace('- ', '')
            item = reemplazar_estilos_md(escapar_llaves(item))
            resultado += insertar(f'<ul>{item}</ul>')
            continue


        # === LÍNEAS SEPARADORAS ===
        if linea.strip() == '---':
            if not importado['Linea']:
                importaciones += '\nimport Linea from "./../../componentes/linea.jsx";'
                importado['Linea'] = 1
            resultado += insertar('<Linea />\n')
            continue

        # === TEXTO NORMAL ===
        if linea.strip():
            if not importado['Texto']:
                importaciones += '\nimport Texto from "./../../componentes/atomos/texto.jsx";'
                importado['Texto'] = 1
            linea = reemplazar_estilos_md(escapar_llaves(linea))
            resultado += insertar(f'<Texto>{linea}</Texto>')

    # Cerrar tabla si el archivo termina con una
    if en_tabla:
        contenido_tabla = "\n".join(tabla_actual)
        resultado += insertar(f'<Tabla>\n{contenido_tabla}\n</Tabla>\n')

    # === COMPONENTE FINAL ===
    return f'''{importaciones}

function Temario({{ className="" }}) {{
    return (
        <Lista className={{className}}>
        </Lista>
    );
}}

function {nombre}() {{
    return (
        <>
            <Estructura>
{resultado}
            </Estructura>

            <TemarioAsideCompleto temario={{Temario}} />
        </>
    );
}}

export default {nombre};
'''

# === PROCESAR ARCHIVOS ===
def main():
    ruta_actual = os.path.dirname(__file__)
    archivos = [f for f in os.listdir(ruta_actual) if os.path.isfile(os.path.join(ruta_actual, f))]

    print("=== Archivos en el directorio actual ===")
    for archivo in archivos:
        print("-", archivo)

    for archivo in archivos:
        if not archivo.endswith(".md"):
            continue

        ruta_md = os.path.join(ruta_actual, archivo)
        ruta_jsx = os.path.join(ruta_actual, archivo.replace(".md", ".jsx"))

        print(f"\n=== Procesando: {archivo} ===")

        try:
            with open(ruta_md, "r", encoding="utf-8") as f:
                lineas = f.readlines()

            texto_modificado = ModificarTexto(lineas)

            with open(ruta_jsx, "w", encoding="utf-8") as f:
                f.write(texto_modificado)

            print(f"✅ Archivo convertido correctamente → {ruta_jsx}")

        except Exception as e:
            print(f"❌ Error procesando {archivo}: {e}")

if __name__ == "__main__":
    main()
