---
title: Condiciones
route: /linux/bash-script/Condiciones
---

# Condiciones en Bash Script
---

## Booleanos en Bash {#booleanos-en-bash}
En Bash **no existen valores booleanos nativos**, pero sí existen **comandos que devuelven verdadero o falso**:
```bash
true   # Devuelve 0 (verdadero)
false  # Devuelve 1 (falso)
```

<blockquote>
En Bash, un **0 significa verdadero** y un **número distinto de 0 (generalmente 1)** significa falso.

</blockquote>
---

## Operadores Condicionales {#operadores-condicionales}
Los operadores se usan para comparar **números** o **cadenas de texto**.

### Para números {#para-números}
<!-- Tabla convertida manualmente -->

### Para cadenas de texto {#para-cadenas-de-texto}
<!-- Tabla convertida manualmente -->

---

## Estructura if - elif - else {#estructura-if---elif---else}
Ejemplo de uso básico:
```bash
if [ 3 -gt 4 ]; then
echo "Mayor que 4"

elif false; then
echo "Nunca pasar"

else
echo "4 o menor"
fi
```

<blockquote>
**Notas:**

- Los corchetes [ ] son equivalentes al comando test.
- Siempre debe haber un **espacio** después del [ y antes del ].
- La instrucción then debe ir en la misma línea o en una nueva, separada con ;.

</blockquote>
---

## Condiciones compuestas (&amp;&amp;, ||) {#condiciones-compuestas}
Puedes combinar condiciones con operadores lógicos.
```bash
if [ 10 -lt 14 ] && [ 10 -gt 12 ]; then
echo "verdadero"
fi
```

También puedes usar [[ ... ]] para condiciones más seguras (recomendado):
```bash
if [[ 10 -lt 14  &&  10 -gt 12 ]]; then
echo "verdadero"
fi
```

<blockquote>
[[ ... ]] permite el uso de operadores lógicos &amp;&amp; y || dentro del mismo bloque sin necesidad de múltiples [ ].

</blockquote>
---

## Formas de escribir condiciones {#formas-de-escribir-condiciones}
Las tres siguientes formas son equivalentes:
```bash
test condition
[ condition ]
[[ condition || condition ]]
```

Ejemplo real:
```bash
if test 10 -eq 10; then
echo "10 es igual a 10"
fi
```