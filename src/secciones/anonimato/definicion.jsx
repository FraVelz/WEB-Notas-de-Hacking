function Definicion() {
  return (
    <>
      <Titulo title="h1" id="definiciones">Definiciones</Titulo>
      <Texto>Definiciones y diferencias entre privacidad y anonimato.</Texto>
      <Linea />
      <Titulo title="h2" id="temario">Temario</Titulo>
      <Lista>
        <li>
          <a href="#definiciones">Definiciones</a>
          <Lista>
            <li>
              <a href="#temario">Temario</a>
            </li>
            <li>
              <a href="#privacidad">Privacidad</a>
            </li>
            <li>
              <a href="#anonimato">Anonimato</a>
            </li>
            <li>
              <a href="#diferencias-clave">Diferencias clave</a>
            </li>
            <li>
              <a href="#en-resumen">En resumen</a>
            </li>
          </Lista>
        </li>
      </Lista>
      <Texto>
        <a href="./../readme.md#10-privacidad-y-anonimato">
          Regresar a la guía principal
        </a>
      </Texto>
      <Linea />
      <Titulo title="h2" id="privacidad">Privacidad</Titulo>
      <Texto>
        La <strong>privacidad</strong> se refiere al{" "}
        <strong>
          control que una persona tiene sobre su información personal
        </strong>
        : qué datos comparte, con quién, cuándo y para qué.
      </Texto>
      <Lista>
        <li>
          <strong>Idea central:</strong> “Yo decido quién sabe qué sobre mí.”
        </li>        <li>Ejemplo:</Texto>
        <Lista>
          <li>
            <Texto>
              Cuando configuras tus redes sociales para que solo tus amigos
              vean tus fotos, estás <strong>protegiendo tu privacidad</strong>
              .
          </li>            <li>
            Si das tu nombre y correo a una empresa, pero solo para recibir
            un servicio, esperas que{" "}
            <strong>no usen esos datos para otra cosa</strong>.
          </li>          </Lista>
      </li>
    </Lista >
      <Texto>Privacidad = tener el control de tus datos personales.</Texto>
      <Linea />
      <Titulo title="h2" id="anonimato">Anonimato</Titulo>
      <Texto>
        El <strong>anonimato</strong> significa que{" "}
        <strong>nadie puede saber quién eres realmente</strong>, aunque vean tus
        acciones o tus mensajes.
      </Texto>
      <Lista>
        <li>
            <strong>Idea central:</strong> “Pueden ver lo que hago, pero no
            saben que soy yo.”
          </li>        <li>Ejemplo:</Texto>
          <Lista>
            <li>
              <Texto>
                Si publicas un comentario en un foro con un nombre falso o
                navegas por Tor sin revelar tu identidad, estás{" "}
                <strong>actuando de forma anónima</strong>.
              </li>            <li>
                Los “whistleblowers” (personas que revelan información
                confidencial de forma segura) buscan{" "}
                <strong>mantener el anonimato</strong>.
              </li>          </Lista>
        </li>
      </Lista >
      <Texto>Anonimato = ocultar tu identidad.</Texto>
      <Linea />
      <Titulo title="h2" id="diferencias-clave">Diferencias clave</Titulo>
      <table>
        <colgroup>
          <col style="width: 13%" />
          <col style="width: 42%" />
          <col style="width: 44%" />
        </colgroup>
        <thead>
          <tr>
            <th>Aspecto</th>
            <th>
              <strong>Privacidad</strong>
            </th>
            <th>
              <strong>Anonimato</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Qué protege</td>
            <td>
              Tus <strong>datos personales</strong>
            </td>
            <td>
              Tu <strong>identidad</strong>
            </td>
          </tr>
          <tr>
            <td>Control</td>
            <td>Tú decides qué compartir</td>
            <td>Nadie puede identificarte</td>
          </tr>
          <tr>
            <td>Ejemplo</td>
            <td>No publicar tu dirección</td>
            <td>Publicar con un seudónimo</td>
          </tr>
          <tr>
            <td>En internet</td>
            <td>Configurar permisos, cifrar mensajes</td>
            <td>Usar VPN, Tor, criptomonedas privadas</td>
          </tr>
        </tbody>
      </table>
      <Linea />
      <Titulo title="h2" id="en-resumen">En resumen</Titulo>
      <Lista>
        <li>
            Puedes tener <strong>privacidad sin anonimato</strong>: por ejemplo,
            tu banco sabe quién eres, pero <strong>protege tus datos</strong>.
          </li>        <li>
            Y puedes tener <strong>anonimato sin privacidad</strong>: si actúas
            con un seudónimo, pero tus mensajes quedan guardados o analizados,{" "}
            <strong>no tienes privacidad</strong> aunque nadie sepa tu nombre.
          </li>      </Lista>
      <Linea />
      <Texto>
        <a href="./../readme.md#10-privacidad-y-anonimato">
          Regresar a la guía principal
        </a>
      </Texto>
      <blockquote>
        <Texto>
          <strong>Autor:</strong> Fravelz
        </Texto>
      </blockquote>
    </>
  );
}

export default Definicion;
