---
title: Arrays
route: /linux/bash-script/Arrays
---

# Arrays en bash script
---

## Temario
## 1. Definir arrays {#1-definir-arrays}
```
# Array con valores
nombres=("Ana" "Luis" "Pedro")

# Otra forma (asignando por índice)
numeros[0]=10
numeros[1]=20
numeros[2]=30
```

---

## 2. Acceder a elementos {#2-acceder-a-elementos}
<Codigo language="bash" code=
{"echo \"${nombres[0]}\" # Ana\necho \"${nombres[2]}\" # Pedro"}
/>

Si usas un índice que no existe:

<Codigo language="bash" code=
{"echo \"${nombres[5]}\" # vacío"}
/>

---

## 3. Mostrar todos los elementos {#3-mostrar-todos-los-elementos}
<Codigo language="bash" code=
{"echo \"${nombres[@]}\" # Ana Luis Pedro\necho \"${numeros[*]}\" # 10 20 30"}
/>

---

## 4. Tamaño del array {#4-tamaño-del-array}
<Codigo language="bash" code=
{"echo \"${#nombres[@]}\" # 3"}
/>

---

## 5. Recorrer arrays {#5-recorrer-arrays}
### Con for {#con-for}
<Codigo language="bash" code=
{"for nombre in \"${nombres[@]}\"; do\necho \"Hola $nombre\"\ndone"}
/>

Salida:

<Codigo language="bash" code=
{`Hola Ana
Hola Luis
Hola Pedro`}
/>

### Con índices {#con-indices}
<Codigo language="bash" code=
{"for i in \"${!nombres[@]}\"; do\n echo \"Índice: $i → Valor: ${nombres[$i]}\"\ndone"}
/>

---

## 6. Añadir y modificar elementos {#6-anadir-y-modificar-elementos}
<Codigo language="bash" code=
{`nombres+=("Carla") # Agregar al final
nombres[1]="Lucía" # Modificar el índice 1`}
/>

---

## 7. Eliminar elementos {#7-eliminar-elementos}
<Codigo language="bash" code=
{`unset nombres[1] # Elimina solo el índice 1
unset nombres # Borra todo el array`}
/>

---

## 8. Subarrays (rebanadas) {#8-subarrays-rebanadas}
<Codigo language="bash" code=
{"echo \"${nombres[@]:1:2}\" # desde índice 1, tomar 2 elementos"}
/>

---

## 9. Arrays asociativos (tipo diccionario) {#9-arrays-asociativos-tipo-diccionario}
Disponibles en **Bash 4+**.

<Codigo language="bash" code=
{"declare -A capitales\ncapitales[Colombia]=\"Bogotá\"\ncapitales[México]=\"CDMX\"\ncapitales[España]=\"Madrid\"\n\necho \"${capitales[Colombia]}\" # Bogotá\n\n# Recorrer claves y valores\nfor pais in \"${!capitales[@]}\"; do\n echo \"$pais → ${capitales[$pais]}\"\ndone"}
/>

Salida:

<Codigo language="bash" code=
{`México → CDMX
España → Madrid
Colombia → Bogotá`}
/>

---

## 10. Cosas útiles {#10-cosas-utiles}
- **Índice del último elemento**: <Codigo language="bash" code= {"echo \"${!nombres[@]}\" # muestra todos los índices"} />
- **Ordenar un array**: <Codigo language="bash" code= {"numeros=(3 8 1)\nsorted=($(printf \"%s\n\" \"${numeros[@]}\" | sort -n))\necho \"${sorted[@]}\" # 1 3 8"} />

---

En resumen:

- {"array=(val1 val2 val3) → define."}
- {"${array[i]} → acceder."}
- {"${array[@]} → todos los valores."}
- {"declare -A → arrays asociativos."}