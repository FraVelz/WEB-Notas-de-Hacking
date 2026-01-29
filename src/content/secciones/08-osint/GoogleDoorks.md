---
title: GoogleDoorks
route: /osint/GoogleDoorks
---

# Google Doorks
Es una técnica de búsqueda avanzada en Google, para poder conocer información concreta a base de poder ir aplicando filtros en los resultados, operadores conocidos como dorks.

## Operadores dorks {#operadores-dorks}
Nota el asterisco (*) dice que cualquier palabra puede pasar el filtro, normalmente se utiliza para cuando se necesita filtrar más resultados.
```bash
site:reddit.*
```

Esto apunta a todas las páginas que empiezan por reddit sin importar como termine, pueden terminal por ejemplo reddit.us, reddit.arg, reddit.paypal, o reddit.store, etc…

También otra consideración es que puedes utilizar no solo palabra en clave, sino también, frases claves para buscar y se hace con ““, de la siguiente manera.
```bash
intitle:"Tomar un Mate"
```

Es importante tener en cuenta que todos estos operadores están escritos de la manera:
```bash
clave:valor
```

Sin espacios a menos que se usen comillas dobles, pero todo lo que esta afuera eso lo reconoce Google como palabras de una búsqueda normal.
```bash
intitle:"Uala prestamos" prestamos sin intereses
```

En este caso buscara **préstamos sin intereses**, y luego filtrara por títulos que contengan **Uala préstamos**.

<ol type="1">
<li>El primer operador dork básico es site, sí usas este operador luego
(:) dos puntos, y un dominio, buscara todos los resultados que contengan
ese dominio.</li>
</ol>
```bash
site:reddit.com
```

<ol start="2" type="1">
<li>inurl, busca en la URL de Google, todos los que contengan la palabra
clave, en la URL.</li>
</ol>
```bash
inurl:palabraclave
```

<ol start="3" type="1">
<li>intitle, busca utilizando la palabra, y filtrando por títulos de la
web, los que no contengan ese título o esa palabra clave no son
mostrados por el buscador.</li>
</ol>
```bash
intitle:tomarmate
```

<ol start="4" type="1">
<li>ext y filetype, estos comandos nos permite buscar por extensiones,
son muy similares, pero su diferencia radica en que filetype reconoce
archivos que Google reconocen, pero ext muestra archivos con la
extensión sin importar sí el formato lo reconoce o no Google.</li>
</ol>
```bash
ext:log Errores de reddit
```
```bash
filetype:pdfs Cuent
```

Con lo anterior se puede hacer búsquedas en Google con filtros, y encontrar información pública que a veces los creadores de webs creen que no son públicas de sus webs, y otras cosas, es importante tener en cuenta que deberías buscar palabras claves o frases claves según lo que quieras buscar, aunque hay que tener cuidado porque se pueden indexar sitios http: que no son seguros y que el dueño de la página sí quiere te puede doxear o hackear porque la web no tiene el protocolo https.

En la página web de Google hacking data base, puedes encontrar operadores dorks especializados para búsquedas que se llegan, a tener o usar, para la ciberseguridad.