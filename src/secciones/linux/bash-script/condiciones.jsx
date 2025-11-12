import Enlace from "../../../componentes/atomos/enlace.jsx";
import Estructura, { TemarioAsideCompleto, TemarioCompleto } from "../../../componentes/organismos/estructura.jsx";
import Linea from "../../../componentes/atomos/linea.jsx";
import Lista from "../../../componentes/moleculas/lista.jsx";
import Texto from "./../../../componentes/atomos/texto.jsx";
import Titulo from "../../../componentes/moleculas/titulo.jsx";
import { Tabla, TablaCabezera, TablaFila, TablaUnica } from "../../../componentes/moleculas/tabla.jsx";
import CodeBlock from "../../../componentes/moleculas/codigo.jsx";

function Temario({ className = "" }) {
  return (
    <Lista className={className}>
      <li><Enlace href="#booleanos-en-bash">Booleanos en Bash</Enlace ></li>
      <li><Enlace href="#operadores-condicionales">Operadores Condicionales</Enlace >
        <Lista>
          <li><Enlace href="#para-números">Para números</Enlace ></li>
          <li><Enlace href="#para-cadenas-de-texto">Para cadenas de texto</Enlace ></li>
        </Lista>
      </li>
      <li><Enlace href="#estructura-if---elif---else">Estructura
        if - elif - else</Enlace ></li>
      <li><Enlace href="#condiciones-compuestas--">Condiciones compuestas
        (&amp;&amp;, ||)</Enlace ></li>
      <li><Enlace href="#formas-de-escribir-condiciones">Formas de escribir
        condiciones</Enlace ></li>
    </Lista>
  );
}

function nameabcd({ }) {
  return (
    <>
      <Estructura>
        <Titulo title="h1" id="condiciones-en-bash-script">Condiciones en Bash Script</Titulo>

        <Linea />

        <TemarioCompleto temario={Temario} />

        <Titulo title="h2" id="booleanos-en-bash">Booleanos en Bash</Titulo>

        <Texto>En Bash <strong>no existen valores booleanos nativos</strong>, pero
          sí existen <strong>comandos que devuelven verdadero o
            falso</strong>:</Texto>
        <CodeBlock code={`true   # Devuelve 0 (verdadero)
false  # Devuelve 1 (falso)`} language="bash" />
        <blockquote>
          <Texto>En Bash, un <strong>0 significa verdadero</strong> y un
            <strong>número distinto de 0 (generalmente 1)</strong> significa
            falso.
          </Texto>
        </blockquote>
        <Linea />
        <Titulo title="h2" id="operadores-condicionales">Operadores Condicionales</Titulo>
        <Texto>Los operadores se usan para comparar <strong>números</strong> o
          <strong>cadenas de texto</strong>.
        </Texto>
        <Titulo title="h3" id="para-números">Para números</Titulo>
        <Tabla>
  <TablaCabezera headers={["Operador", "Significado"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>-eq</TablaUnica>
      <TablaUnica>Igual que</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>-ne</TablaUnica>
      <TablaUnica>Distinto que</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>-lt</TablaUnica>
      <TablaUnica>Menor que</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>-le</TablaUnica>
      <TablaUnica>Menor o igual que</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>-gt</TablaUnica>
      <TablaUnica>Mayor que</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>-ge</TablaUnica>
      <TablaUnica>Mayor o igual que</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
        <Titulo title="h3" id="para-cadenas-de-texto">Para cadenas de texto</Titulo>
        <Tabla>
  <TablaCabezera headers={["Operador", "Significado"]} />

  <tbody>
    <TablaFila>
      <TablaUnica>=</TablaUnica>
      <TablaUnica>Igual</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>!=</TablaUnica>
      <TablaUnica>Diferente</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>&lt;</TablaUnica>
      <TablaUnica>Menor lexicográficamente</TablaUnica>
    </TablaFila>
    <TablaFila>
      <TablaUnica>&gt;</TablaUnica>
      <TablaUnica>Mayor lexicográficamente</TablaUnica>
    </TablaFila>
  </tbody>
</Tabla>
        <Linea />
        <Titulo title="h2" id="estructura-if---elif---else">Estructura
          if - elif - else
        </Titulo>
        <Texto>Ejemplo de uso básico:</Texto>
        <CodeBlock code={`if [ 3 -gt 4 ]; then
echo "Mayor que 4"

elif false; then
echo "Nunca pasar"

else
echo "4 o menor"
fi`} language="bash" />
        <blockquote>
          <Texto><strong>Notas:</strong></Texto>
          <Lista>
            <li>Los corchetes [ ] son equivalentes al comando
              test.
            </li>
            <li>Siempre debe haber un <strong>espacio</strong> después del
              [ y antes del ].
            </li>
            <li>La instrucción then debe ir en la misma línea o en una
              nueva, separada con ;.</li>
          </Lista>
        </blockquote>
        <Linea />
        <Titulo title="h2" id="condiciones-compuestas">Condiciones compuestas
          (&amp;&amp;, ||)</Titulo>
        <Texto>Puedes combinar condiciones con operadores lógicos.</Texto>
        <CodeBlock code={`if [ 10 -lt 14 ] && [ 10 -gt 12 ]; then
echo "verdadero"
fi`} language="bash" />
        <Texto>También puedes usar [[ ... ]] para condiciones más
          seguras (recomendado):</Texto>
        <CodeBlock code={`if [[ 10 -lt 14  &&  10 -gt 12 ]]; then
echo "verdadero"
fi`} language="bash" />
        <blockquote>
          <Texto>[[ ... ]] permite el uso de operadores lógicos
            &amp;&amp; y || dentro del mismo bloque sin
            necesidad de múltiples [ ].
          </Texto>
        </blockquote>
        <Linea />
        <Titulo title="h2" id="formas-de-escribir-condiciones">Formas de escribir
          condiciones</Titulo>
        <Texto>Las tres siguientes formas son equivalentes:</Texto>
        <CodeBlock code={`test condition
[ condition ]
[[ condition || condition ]]`} language="bash" />
        <Texto>Ejemplo real:</Texto>
        <CodeBlock code={`if test 10 -eq 10; then
echo "10 es igual a 10"
fi`} language="bash" />
      </Estructura>
      <TemarioAsideCompleto temario={Temario} />
    </>
  );
}
export default nameabcd;
