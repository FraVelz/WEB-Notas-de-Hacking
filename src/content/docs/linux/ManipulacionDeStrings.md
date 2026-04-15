---
title: Manipulacion De Strings
description: Manipulacion De Strings - Notas de hacking y ciberseguridad.
---

# Manipulación de strings en bash script
---

## 1. Definir strings
```bash
cadena="Hola Mundo"
```

- Siempre usar **comillas** sí hay espacios.
- No existen tipos como en otros lenguajes, todo es texto.

---

## 2. Longitud de un string
```bash
echo "$(#cadena)"   ## 10
```

---

## 3. Substrings
```bash
echo "$\{cadena:0:4\}"   ## Hola (desde índice 0, tomar 4)
echo "$\{cadena:5\}"     ## Mundo (desde índice 5 hasta el final)
```

---

## 4. Reemplazos dentro de un string
```bash
texto="banana"

echo "\${texto/na/NA}"    ## baNAna (primer reemplazo)
echo "\${texto//na/NA}"   ## baNANA (todos los reemplazos)

echo "\${texto/na/}"      ## baana   (borra primer "na")
echo "\${texto//na/}"     ## baa     (borra todos "na")
```

---

## 5. Eliminar prefijos y sufijos
```bash
archivo="documento.txt"

echo "\${archivo%.txt}"   ## documento  (quita sufijo .txt)
echo "\${archivo#doc}"    ## umento.txt (quita prefijo doc) # Con doble signo borra lo más largo ruta="/home/user/docs/file.txt" echo "{"\${ruta##*/}"}"       # file.txt  (quita todo hasta el último /) echo "{"\${ruta %%/*}"}"       # vacío     (quita todo desde el primer /)
```

---

## 6. Concatenar strings
```bash
nombre="Francisco"
saludo="Hola, $nombre"
echo "$saludo"
```

También:
```bash
full="Hola"
full+=" Mundo"
echo "$full"   ## Hola Mundo
```

---

## 7. Convertir mayúsculas / minúsculas (Bash 4+)
```bash
texto="hola mundo"

echo "\${texto^^}"   ## HOLA MUNDO
echo "\${texto,,}"   ## hola mundo
```

---

## 8. Buscar dentro de un string
```bash
cadena="programacion"
if [[ "$cadena" == *"grama"- ]]; then
echo "Contiene 'grama'"
fi
```

---

## 9. Dividir un string (split)
Con IFS (Internal Field Separator):
```bash
frase="uno dos tres"
IFS=" " read -r -a palabras <<< "$frase"

echo "\${palabras[0]}"  ## uno
echo "\${palabras[1]}"  ## dos
echo "\${palabras[2]}"  ## tres
```

---

## 10. Juntar un array en string
```bash
lista=("a" "b" "c")
echo "\${lista[*]}"   ## a b c
echo "\${lista[@]}"   ## a b c
```

Con separador personalizado:
```bash
IFS=","; echo "\${lista[*]}"   ## a,b,c
```

---

## 11. Expresiones regulares en strings
```bash
cadena="abc123"
if [[ "$cadena" =~ ^[a-z]+[0-9]+$ ]]; then
echo "Coincide con letras seguidas de números"
fi
```

---

## 12. Lectura carácter por carácter
```bash
texto="Hola"
for (( i=0; i<\$; i++ )); do
echo "\${texto:$i:1}"
done
```

Imprime cada letra en una línea.

---

**En resumen**:

- ${``} → longitud
- ${`{str:pos:len}`} → substring
- ${`{str/patrón/reemplazo}`} → reemplazo
- ${`{str%patrón}`} / ${`{str#patrón}`} → quitar prefijo/sufijo
- ${`{str^^}`} / ${`{str,,}`} → mayúsculas/minúsculas
- IFS + read -a → split